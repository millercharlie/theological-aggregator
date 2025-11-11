import ControlButtons from "@components/ControlButtons";
import { HorizontalRow } from "@components/HorizontalRow";
import Link from "@components/Link";
import Modal from "@components/modals/Modal";
import Thumbnail from "@components/Thumbnail";
import { colorMap } from "@database/colorMap";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import { noOp } from "@libs/functions";
import type { ResourceInfo } from "@libs/Types";
import * as Typography from "@libs/Typography";
import React from "react";

const ResourceContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: baseline;
  margin-top: 15px;
`;
const LargeControlButtons = styled(ControlButtons)`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const ResourceModal: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  visible: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ resource, setSelectedResource, visible }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Modal visible={visible} backgroundColor={colorMap[resource.type]}>
      <Typography.Title style={{ marginBottom: 0 }}>
        {resource.name}
      </Typography.Title>
      <Typography.Description
        fontSize="32px"
        italic={true}
        style={{ marginTop: 0 }}
      >
        {resource.shortDescription}
      </Typography.Description>
      <Typography.Description fontSize="16px" style={{ marginBottom: 20 }}>
        {resource.longDescription}
      </Typography.Description>
      <ResourceContent>
        <div id="recent-content">
          <Typography.Subtitle style={{ marginBottom: 0 }}>
            Recent Content
          </Typography.Subtitle>
          {resource.recentContent?.map((item, index) => (
            <>
              <Thumbnail
                key={index}
                title={item.title}
                image={item.thumbnail}
                link={item.link}
                badges={item.badges}
                description={item.description}
                large={true}
              />
              {index < resource.recentContent!.length - 1 && (
                <HorizontalRow color={theme.secondaryRow} />
              )}
            </>
          ))}
        </div>
        {resource.recommendedContent && (
          <div id="recommended-content">
            <Typography.Subtitle style={{ marginBottom: 0 }}>
              Recommended Content
            </Typography.Subtitle>
            {resource.recommendedContent?.map((item, index) => (
              <>
                <Thumbnail
                  key={index}
                  title={item.title}
                  image={item.thumbnail}
                  link={item.link}
                  badges={item.badges}
                  description={item.description}
                  large={true}
                />
                {index < resource.recommendedContent!.length - 1 && (
                  <HorizontalRow color={theme.secondaryRow} />
                )}
              </>
            ))}
          </div>
        )}
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
      <LargeControlButtons
        resource={resource}
        favorite={resource.favorite}
        setSelectedResource={setSelectedResource}
        fullscreen={resource.fullscreen} // TODO: The icon should change here assuming fullscreen mode is active
        dropdownActive={false}
        setDropdownActive={noOp}
        large={true}
      />
    </Modal>
  );
};

export default ResourceModal;
