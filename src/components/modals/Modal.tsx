import styled from "@emotion/styled";
import { hexToRGB } from "@libs/functions";
import { Colors } from "@libs/global";
import type { ReactNode } from "react";
import React from "react";

const Background = styled.div<{ visible: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ visible }) => (visible ? "block" : "none")};
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;
const Container = styled.div<{ backgroundColor: string }>`
  width: 80%;
  min-height: 70%;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // TODO: disable body scroll when modal is visible, in addition to dimming everything else */
  background-color: ${({ backgroundColor }) =>
    backgroundColor}; // TODO: This should not be hardcoded
  border-radius: 30px;
  outline: 3px solid ${Colors.dark.text};
  padding: 30px;
`;

// TODO: Mobile-mode - should fill the entire screen
/**
 * Represents a modal that fills the screen.
 * @param children all content to be displayed within the modal.
 * @param visible **true** if the modal is currently visible
 * @returns
 */
const Modal: React.FC<{
  children: ReactNode;
  visible: boolean;
  backgroundColor?: string;
}> = ({ children, visible, backgroundColor }) => {
  const translucentBackgroundColor = React.useMemo(() => {
    const rgbColor = hexToRGB(backgroundColor ?? "#717171");
    return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.70)`;
  }, [backgroundColor]);
  return (
    <Background visible={visible}>
      <Container backgroundColor={translucentBackgroundColor}>
        {children}
      </Container>
    </Background>
  );
};

export default Modal;
