import { useState, useCallback, useMemo } from "react";

const Block = ({ mouseEnterCallback, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = useCallback(() => {
    setActive(true);
    mouseEnterCallback();
  }, [mouseEnterCallback]);

  const className = useMemo(() => (isActive ? "active" : ""), [isActive]);

  return (
    <div onMouseEnter={mouseEnterHandler} className={className}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => (
  <Block mouseEnterCallback={mouseEnterCallback}>
    <img src={imgSrc} alt={imgAlt} />
  </Block>
);

export const Block2 = ({ mouseEnterCallback, content }) => (
  <Block mouseEnterCallback={mouseEnterCallback}>
    <p>{content}</p>
  </Block>
);

export const Block3 = ({ mouseEnterCallback, userData }) => (
  <Block mouseEnterCallback={mouseEnterCallback}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </Block>
);
