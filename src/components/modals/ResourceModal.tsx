import Link from "@components/Link";
import Modal from "@components/modals/Modal";
import styled from "@emotion/styled";
import type { ResourceInfo } from "@libs/Types";
import * as Typography from "@libs/Typography";

const ResourceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end; // ! This should be top-aligned
`;

const ResourceModal: React.FC<{
  resource: ResourceInfo;
  visible: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ resource, visible, setVisible }) => {
  // TODO: `setVisible` is potentially not needed
  return (
    <Modal visible={visible} backgroundColor={resource.color}>
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
    </Modal>
  );
};

export default ResourceModal;
