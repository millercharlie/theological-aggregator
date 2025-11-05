import ControlButtons from "@components/ControlButtons";
import Link from "@components/Link";
import Modal from "@components/modals/Modal";
import { colorMap } from "@database/colorMap";
import styled from "@emotion/styled";
import { noOp } from "@libs/functions";
import type { ResourceInfo } from "@libs/Types";
import * as Typography from "@libs/Typography";

const ResourceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end; // ! This should be top-aligned
`;

const ResourceModal: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  visible: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ resource, setSelectedResource, visible }) => {
  return (
    <Modal visible={visible} backgroundColor={colorMap[resource.type]}>
      <Typography.Title>{resource.name}</Typography.Title>
      <Typography.Description fontSize="32px" italic={true}>
        {resource.shortDescription}
      </Typography.Description>
      <Typography.Description fontSize="16px">
        {resource.longDescription}
      </Typography.Description>
      <ResourceContent>
        <div id="recent-content"></div>
        <div id="recommended-content"></div>
        {resource.links && (
          <div id="all-links">
            <Typography.Subtitle style={{ paddingBottom: 10 }}>
              Links
            </Typography.Subtitle>
            {resource.links.map((item) => (
              <Link item={item} />
            ))}
          </div>
        )}
      </ResourceContent>
      <ControlButtons
        resource={resource}
        favorite={resource.favorite}
        setSelectedResource={setSelectedResource}
        fullscreen={resource.fullscreen} // TODO: The icon should change here assuming fullscreen mode is active
        dropdownActive={false}
        setDropdownActive={noOp}
      />
    </Modal>
  );
};

export default ResourceModal;
