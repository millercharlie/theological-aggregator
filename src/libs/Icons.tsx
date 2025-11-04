import Tooltip from "@components/Tooltip";
import styled from "@emotion/styled";
import React from "react";

export const DefaultIcon = styled.img<{ hover?: boolean }>`
  cursor: ${({ hover }) => (hover ? "pointer" : "default")};
  transition: all 0.2s;
  :hover {
    transform: ${({ hover }) => (hover ? "scale(110%)" : undefined)};
  }
`;

export const AccountCircle = styled(DefaultIcon)`
  width: 32px;
  height: 32px;
`;

export const SmallIcon = styled(DefaultIcon)`
  height: 8px;
  width: auto;
`;
export const MediumIcon = styled(DefaultIcon)`
  height: 11px; // TODO: Should this be by width?
  width: auto;
`;
export const LargeIcon = styled(DefaultIcon)`
  height: 20px;
`;

const Container = styled.div`
  height: 20px;
  position: relative;
`;
// TODO: The size here may need to change
export const IconWithTooltip: React.FC<{ icon: string; text: string }> = ({
  icon,
  text,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <Container>
      <Tooltip text={text} visible={visible} />
      <LargeIcon
        src={`src/assets/icons/${icon}`}
        alt={icon}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      />
    </Container>
  );
};
