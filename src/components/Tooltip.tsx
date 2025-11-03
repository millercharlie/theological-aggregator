import styled from "@emotion/styled";
import { Paragraph } from "@libs/Typography";

const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  display: ${({ visible }) => (visible ? "block" : "none")};
  bottom: 35px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  outline: 1px solid #ffffff;
  border-radius: 5px;
`;

const Tooltip: React.FC<{ text: string; visible: boolean }> = ({
  text,
  visible,
}) => {
  return (
    <Container visible={visible}>
      <Paragraph>{text}</Paragraph>
    </Container>
  );
};

export default Tooltip;
