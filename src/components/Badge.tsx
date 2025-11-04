import { SmallIcon } from "@libs/Icons";
import styled from "@emotion/styled";
import { BadgeText } from "@libs/Typography";
import { Colors } from "@libs/global";
import type { BadgeAttributes } from "@libs/Types";
import * as badges from "@database/badges.json";
import React from "react";

const Container = styled.div<{ backgroundColor: string; textColor: string }>`
  width: fit-content;
  height: 18px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  gap: 6px;

  background-color: ${({ backgroundColor }) => backgroundColor ?? "#545454"};
  color: ${({ textColor }) => textColor ?? Colors.dark.text};
  border-radius: 20px;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  transition: all 0.2s;
  :hover {
    transform: scale(105%);
  }
`;

const Badge: React.FC<{ id: string }> = ({ id }) => {
  const { text, icon, backgroundColor, textColor } = React.useMemo(() => {
    const curBadge: BadgeAttributes = badges[id as keyof typeof badges];
    if (!curBadge) {
      throw new Error("Badge Index Failed");
    }
    return {
      text: curBadge.text,
      icon: curBadge.icon,
      backgroundColor: curBadge.backgroundColor,
      textColor: curBadge.textColor,
    };
  }, [id]);

  return (
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <SmallIcon src={`src/assets/icons/${icon}`} />
      <BadgeText>{text}</BadgeText>
    </Container>
  );
};

export default Badge;
