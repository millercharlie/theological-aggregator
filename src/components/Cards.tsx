import Badge from "@components/Badge";
import styled from "@emotion/styled";

import React from "react";
import { IconWithTooltip, LargeIcon } from "@libs/Icons";
import type { BadgeAttributes } from "@libs/Types";
import * as Typography from "@libs/Typography";
import { hexToRGB } from "@libs/functions";

import { Colors } from "@libs/global";
import Tooltip from "@components/Tooltip";

const Container = styled.div<{ backgroundColor?: string }>`
  width: 234px;
  padding: 6px;
  outline: 3px solid ${Colors.dark.text};
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#717171"};
  backdrop-filter: blur(40%);
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const BadgeRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

// TODO: `fullscreen` and `dropdown` variables might need to be more descriptive lol
// TODO: This also doesnt' account for mobile devices
export const MediumCard = ({
  id,
  icon,
  title,
  description,
  badges,
  favorite,
  fullscreen,
  dropdown,
  backgroundColor,
}: {
  id: string;
  icon: string;
  title: string;
  description: string;
  badges?: BadgeAttributes[];
  backgroundColor?: string;
  favorite: boolean;
  fullscreen: boolean;
  dropdown: boolean;
}) => {
  const translucentBackgroundColor = React.useMemo(() => {
    const rgbColor = hexToRGB(backgroundColor ?? "#717171");
    return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.70)`;
  }, [backgroundColor]);

  return (
    <Container id={id} backgroundColor={translucentBackgroundColor}>
      <div>
        <TitleRow>
          <IconWithTooltip icon={icon} />
          <Typography.Subtitle>{title}</Typography.Subtitle>
        </TitleRow>
        <Typography.Paragraph>{description}</Typography.Paragraph>
        <BadgeRow>
          {badges?.map((badge) => (
            <Badge
              text={badge.text}
              icon={badge.icon}
              backgroundColor={badge.backgroundColor}
              textColor={badge.textColor}
            />
          ))}
        </BadgeRow>
      </div>
      <div id="control-btns">
        {favorite ? <div id="fav-star" /> : <div id="default-star" />}
        {fullscreen && <div id="fs-btn">{/* TODO: Fullscreen Button */}</div>}
        {dropdown && <div id="dd-btn">{/* TODO: Dropdown Button */}</div>}
      </div>
    </Container>
  );
};
