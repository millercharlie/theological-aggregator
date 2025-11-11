import styled from "@emotion/styled";
import { DefaultIcon, LargestIcon, MediumIcon } from "@libs/Icons";
import expandArrows from "@assets/arrows/expand_arrows.svg";
import dropdownArrow from "@assets/arrows/up_down_arrow.svg";
import favoritedStar from "@assets/icons/favorited.png";
import defaultStar from "@assets/icons/star.svg";
import type { ResourceInfo } from "@libs/Types";

const Container = styled.div`
  height: fit-content;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
  z-index: 2;
`;
const ActionButton = styled(MediumIcon)<{ active?: boolean }>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  background-color: rgba(256, 256, 256, 0.5);
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
  overflow: visible;
  cursor: pointer;
  transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)};
  :hover {
    transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)}
      scale(110%);
  }
`;
const LargeActionButton = styled(LargestIcon)<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(256, 256, 256, 0.5);
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
  overflow: visible;
  cursor: pointer;
  transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)};
  :hover {
    transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)}
      scale(110%);
  }
`;

const FavoritedStar = styled.img<{ large?: boolean }>`
  width: ${({ large }) => (large ? `50` : `20`)}px;
  height: ${({ large }) => (large ? `50` : `20`)}px;
  cursor: pointer;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  transition: all 0.2s;
  :hover {
    transform: scale(110%);
  }
`;

const ControlButtons: React.FC<{
  resource: ResourceInfo;
  favorite: boolean;
  dropdown?: boolean;
  fullscreen?: boolean;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  dropdownActive: boolean;
  setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  large?: boolean;
}> = ({
  resource,
  favorite,
  dropdown,
  fullscreen,
  setSelectedResource,
  dropdownActive,
  setDropdownActive,
  className,
  large,
}) => {
  return (
    <Container className={className}>
      <FavoritedStar
        src={
          favorite
            ? "src/assets/icons/favorited.png"
            : "src/assets/icons/not_favorited.png"
        }
        large={large}
      />
      {fullscreen &&
        (large ? (
          <LargeActionButton
            src="src/assets/arrows/expand_arrows.svg"
            hover={true}
            onClick={() => {
              resource
                ? setSelectedResource(resource)
                : setSelectedResource(null); // TODO: This doesn't work
            }}
            // className={className}
          />
        ) : (
          <ActionButton
            src="src/assets/arrows/expand_arrows.svg"
            hover={true}
            onClick={() => {
              resource
                ? setSelectedResource(resource)
                : setSelectedResource(null); // TODO: This doesn't work
            }}
            className={className}
          />
        ))}
      {dropdown &&
        (large ? (
          <LargeActionButton
            src="src/assets/arrows/expand_arrows.svg"
            hover={true}
            onClick={() => {
              resource
                ? setSelectedResource(resource)
                : setSelectedResource(null); // TODO: This doesn't work
            }}
            className={className}
          />
        ) : (
          <ActionButton
            src={dropdownArrow}
            onClick={() => setDropdownActive(!dropdownActive)}
            active={dropdownActive}
            className={className}
          />
        ))}
    </Container>
  );
};

export default ControlButtons;
