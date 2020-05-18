import React, { ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

type FadeProps = {
  show: any;
  children: ReactNode;
};

const Fade = ({ show, children }: FadeProps) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <StyledFade show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </StyledFade>
    )
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

type StyledFadeProps = {
  show: boolean;
};

const StyledFade = styled.div`
  overflow: hidden;
  animation: ${(props: StyledFadeProps) => (props.show ? fadeIn : fadeOut)} 0.5s
    linear forwards;
`;

export default Fade;
