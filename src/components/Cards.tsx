import Badge from "@components/Badge";
import styled from "@emotion/styled";

import React from "react";
import { IconWithTooltip } from "@libs/Icons";
import * as Typography from "@libs/Typography";
import resourceIcons from "@database/resourceIcons.json";
import { hexToRGB } from "@libs/functions";

import type { ColorTheme, ResourceInfo, ResourceType } from "@libs/Types";
import { HorizontalRow } from "@components/HorizontalRow";
import ControlButtons from "@components/ControlButtons";
import { colorMap } from "@database/colorMap";
import { ThemeContext } from "@libs/Context";

const Container = styled.div<{ backgroundColor?: string; theme: ColorTheme }>`
  /* width: 300px; */
  height: fit-content;
  padding: 10px;
  outline: 3px solid ${({ theme }) => theme.text};
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

  transition: all 0.2s;
  :hover {
    transform: scale(105%) rotate(-5deg);
  }
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

  const { theme } = React.useContext(ThemeContext);
  const translucentBackgroundColor = React.useMemo(() => {
    const rgbColor = hexToRGB(colorMap[resource.type]);
    return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2)`;
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
    <Container
      id={resource.id}
      backgroundColor={translucentBackgroundColor}
      theme={theme}
    >
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
        <ControlButtons
          resource={resource}
          favorite={resource.favorite}
          dropdown={resource.dropdown}
          fullscreen={resource.fullscreen}
          setSelectedResource={setSelectedResource}
          dropdownActive={dropdownActive}
          setDropdownActive={setDropdownActive}
        />
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
