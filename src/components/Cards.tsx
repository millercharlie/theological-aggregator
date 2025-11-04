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
import { HorizontalRow } from "@components/HorizontalRow";

const Container = styled.div<{ backgroundColor?: string }>`
  /* width: 300px; */
  height: fit-content;
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
const VisibleContent = styled.div`
  display: flex;
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const MainContent = styled.div`
  width: 95%;
  transition: all 0.2s;
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
  z-index: 2;
`;
const ActionButton = styled(MediumIcon)<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: rgba(256, 256, 256, 0.5);
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
  cursor: pointer;
  transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)};
  :hover {
    transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)}
      scale(110%);
  }
`;
const FavoritedStar = styled(DefaultIcon)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ThumbnailImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 3px;
  cursor: pointer;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

// TODO: `fullscreen` and `dropdown` variables might need to be more descriptive lol
// TODO: This also doesnt' account for mobile devices
// TODO: Likely add a `setFavorite()` state function
/**
 * Represents a Card, to be displayed on the Dashboard and various other pages. This card handles its
 * own state when the dropdown or fullscreen versions are activated by the user.
 * @param param0
 * @returns
 */
export const Card: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
}> = ({ resource, setSelectedResource }) => {
  const [dropdownActive, setDropdownActive] = React.useState<boolean>(false);
  const [fullscreenActive, setFullscreenActive] =
    React.useState<boolean>(false);

  const translucentBackgroundColor = React.useMemo(() => {
    const rgbColor = hexToRGB(resource.color ?? "#717171");
    return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.70)`;
  }, [resource]);
  const icon = React.useMemo(() => {
    const curIcon = resourceIcons.find(
      (item) => resource.type === (item.type as unknown as ResourceType)
    );
    if (!curIcon) {
      throw new Error("Resource Icon Not Found"); // TODO: This should maybe fail quietly and display some sort of placeholder
    } else return curIcon.icon;
  }, [resource.type]);

  // TODO: The fullscreen modal here may be better in the dashboard for performance reasons
  return (
    <Container id={resource.id} backgroundColor={translucentBackgroundColor}>
      <VisibleContent>
        <MainContent>
          <TitleRow>
            <IconWithTooltip
              icon={icon}
              text={
                String(resource.type).charAt(0).toUpperCase() +
                String(resource.type).slice(1)
              }
            />
            <Typography.Subtitle>{resource.name}</Typography.Subtitle>
          </TitleRow>
          <Typography.Paragraph>
            {resource.shortDescription}
          </Typography.Paragraph>
          <BadgeRow>
            {resource.badges?.map((id, index) => (
              <Badge id={id} key={index} />
            ))}
          </BadgeRow>
        </MainContent>
        <ControlButtons>
          <FavoritedStar
            src={resource.favorite ? favoritedStar : defaultStar}
            hover={true}
          />
          {resource.fullscreen && (
            <ActionButton
              id="fs-btn"
              src={expandArrows}
              alt="expand"
              hover={true}
              onClick={() => setSelectedResource(resource)}
            />
          )}
          {resource.dropdown && (
            <ActionButton
              id="dd-btn"
              src={dropdownArrow}
              alt="expand"
              onClick={() => setDropdownActive(!dropdownActive)}
              active={dropdownActive}
            />
          )}
        </ControlButtons>
      </VisibleContent>
      {dropdownActive && resource.recentContent && (
        <div id="expanded-content">
          <Typography.DropdownTitle>Recent Content</Typography.DropdownTitle>
          {resource.recentContent.map(
            (
              contentItem, // Horizontal Row
              index
            ) => (
              <>
                <ThumbnailContainer>
                  <div id="title/description">
                    <Typography.ThumbnailTitle>
                      {contentItem.title}
                    </Typography.ThumbnailTitle>
                    <Badge id={contentItem.badge} />
                  </div>
                  <ThumbnailImage
                    src={`src/assets/mocks/${contentItem.thumbnail}`}
                    alt="thumbnail"
                  />
                  {/* TODO: Mock directory is temporary! */}
                </ThumbnailContainer>
                {index < resource.recentContent!.length - 1 && (
                  <HorizontalRow color="#A9A9A9" />
                )}
              </>
            )
          )}
        </div>
      )}
    </Container>
  );
};
