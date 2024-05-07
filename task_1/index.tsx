import React from "react";
import { Component, memo } from "react";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.

export const SecondComponent = memo(({ user }: IProps) => {
  return (
    <div>
      my name is {user.name}, my age is {user.age}
    </div>
  );
}, (prevProps, nextProps) => {
  // Глубокое сравнение объекта user
  return JSON.stringify(prevProps.user) === JSON.stringify(nextProps.user);
});

// class component
export class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(nextProps: IUser) {
    // Глубокое сравнение объекта user
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    // Глубокое сравнение объекта user
    return JSON.stringify(nextProps.user) !== JSON.stringify(this.props.user);
  }

  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
