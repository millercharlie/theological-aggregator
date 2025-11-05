import styled from "@emotion/styled";
import { DefaultIcon, MediumIcon } from "@libs/Icons";
import expandArrows from "@assets/arrows/expand_arrows.svg";
import dropdownArrow from "@assets/arrows/up_down_arrow.svg";
import favoritedStar from "@assets/icons/favorited.svg";
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
}> = ({
  resource,
  favorite,
  dropdown,
  fullscreen,
  setSelectedResource,
  dropdownActive,
  setDropdownActive,
}) => {
  return (
    <Container>
      <FavoritedStar
        src={favorite ? favoritedStar : defaultStar}
        hover={true}
      />
      {fullscreen && (
        <ActionButton
          src={expandArrows}
          hover={true}
          onClick={() => {
            resource
              ? setSelectedResource(resource)
              : setSelectedResource(null); // TODO: This doesn't work
          }}
        />
      )}
      {dropdown && (
        <ActionButton
          src={dropdownArrow}
          onClick={() => setDropdownActive(!dropdownActive)}
          active={dropdownActive}
        />
      )}
    </Container>
  );
};

export default ControlButtons;
