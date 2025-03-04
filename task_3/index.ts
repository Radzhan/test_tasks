interface BallonI {
    id: number
    isPublic: boolean
}

/**
 * @description имитация fetch. возвращает количество шариков
 * @param {Number} id ID шарика по цвету
 * @returns {Number} количество шариков
 * @example const res = await fetchBallonAmount(202);
 */
async function fetchBallonAmount(id: BallonI['id']): Promise<number> {
	const RANDOM_TIMEOUT: number = Math.ceil(Math.random() * 10000); // 1-9 секунд
	const RANDOM_AMOUNT: number = Math.ceil(Math.random() * id); // случайное число

	return new Promise(resolve => setTimeout(() => resolve(RANDOM_AMOUNT), RANDOM_TIMEOUT));
}

// данные о шариках
const BALLONS: { [key: string]: BallonI } = {
	red: {
		id: 202,
		isPublic: true,
	},
	blue: {
		id: 356,
		isPublic: false,
	},
	yellow: {
		id: 451,
		isPublic: false,
	},
	black: {
		id: 35,
		isPublic: true,
	},
	green: {
		id: 191,
		isPublic: true,
	},
	white: {
		id: 911,
		isPublic: true,
	},
};

const Main = async () => {
    const publicBallons = Object.values(BALLONS).filter(ballon => ballon.isPublic);

    try {
        const ballonAmounts = await Promise.all(publicBallons.map(ballon => fetchBallonAmount(ballon.id)));
        const totalAmount = ballonAmounts.reduce((acc, num) => acc + num, 0);
        return totalAmount;
    } catch (error) {
        console.error("An error occurred while fetching ballon amounts:", error);
        return 0; // Возвращаем 0 в случае ошибки
    }
};
