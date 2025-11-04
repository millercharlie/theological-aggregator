import Badge from "@components/Badge";
import styled from "@emotion/styled";

import React from "react";
import { DefaultIcon, IconWithTooltip, MediumIcon } from "@libs/Icons";
import * as Typography from "@libs/Typography";
import resourceIcons from "@database/resourceIcons.json";
import { hexToRGB } from "@libs/functions";

import expandArrows from "@assets/arrows/expand_arrows.svg";
import dropdownArrow from "@assets/arrows/up_down_arrow.svg";

import { Colors } from "@libs/global";
import type { ResourceInfo, ResourceType } from "@libs/Types";

import favoritedStar from "@assets/icons/favorited.svg";
import defaultStar from "@assets/icons/star.svg";

const Container = styled.div<{ backgroundColor?: string }>`
  /* width: 300px; */
  height: fit-content;
  display: flex;
  padding: 6px;
  outline: 3px solid ${Colors.dark.text};
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#717171"};
  backdrop-filter: blur(40%);
  transition: all 0.2s;
  :hover {
    transform: translateY(-10px);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const MainContent = styled.div`
  width: 95%;
`;
const BadgeRow = styled.div`
  width: 100%;
  /* height: 50px; */
  /* overflow-y: scroll; */
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const ControlButtons = styled.div`
  height: fit-content;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
`;
const ActionButton = styled(MediumIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: rgba(256, 256, 256, 0.5);
  border-radius: 50%;
`;
const FavoritedStar = styled(DefaultIcon)`
  width: 18px;
  height: 18px;
`;

// TODO: `fullscreen` and `dropdown` variables might need to be more descriptive lol
// TODO: This also doesnt' account for mobile devices
/**
 * Represents a Card, to be displayed on the Dashboard and various other pages. This card handles its
 * own state when the dropdown or fullscreen versions are activated by the user.
 * @param param0
 * @returns
 */
export const Card = ({
  id,
  type,
  name: title,
  shortDescription: description,
  badges,
  favorite,
  fullscreen,
  dropdown,
  color: backgroundColor,
}: Omit<ResourceInfo, "media" | "mediaType" | "links">) => {
  const translucentBackgroundColor = React.useMemo(() => {
    const rgbColor = hexToRGB(backgroundColor ?? "#717171");
    return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.70)`;
  }, [backgroundColor]);
  const icon = React.useMemo(() => {
    const curIcon = resourceIcons.find(
      (item) => type === (item.type as unknown as ResourceType)
    );
    if (!curIcon) {
      throw new Error("Resource Icon Not Found"); // TODO: This should maybe fail quietly and display some sort of placeholder
    } else return curIcon.icon;
  }, [type]);

  return (
    <Container id={id} backgroundColor={translucentBackgroundColor}>
      <MainContent>
        <TitleRow>
          <IconWithTooltip
            icon={icon}
            text={String(type).charAt(0).toUpperCase() + String(type).slice(1)}
          />
          <Typography.Subtitle>{title}</Typography.Subtitle>
        </TitleRow>
        <Typography.Paragraph>{description}</Typography.Paragraph>
        <BadgeRow>
          {badges?.map((id, index) => (
            <Badge id={id} key={index} />
          ))}
        </BadgeRow>
      </MainContent>
      <ControlButtons>
        <FavoritedStar
          src={favorite ? favoritedStar : defaultStar}
          hover={true}
        />
        {fullscreen && (
          <ActionButton
            id="fs-btn"
            src={expandArrows}
            alt="expand"
            hover={true}
          />
        )}
        {dropdown && (
          <ActionButton
            id="dd-btn"
            src={dropdownArrow}
            alt="expand"
            hover={true}
          />
        )}
      </ControlButtons>
    </Container>
  );
};
