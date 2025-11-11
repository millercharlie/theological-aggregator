import * as Typography from "@libs/Typography";
import { MediumIcon as Icon } from "@libs/Icons";
import styled from "@emotion/styled";
import type { ResourceLink, SidebarLink } from "@libs/Types";
import { HorizontalRow } from "@components/HorizontalRow";
import Link from "@components/Link";
import React from "react";
import { ThemeContext } from "@libs/Context";

const Container = styled.div`
  width: 100%;
  margin-right: 30px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UnorderedList = styled.ul`
  margin-top: 0;
  padding: 0 0 0 12px;
  list-style-position: inside;
  /* list-style-type: circle; */
`;

const SidebarItem = ({
  title,
  icon,
  items,
  rowColor,
}: {
  title: string;
  icon: string;
  items: ResourceLink[];
  rowColor: string;
}) => (
  <div>
    <TitleWrapper>
      <Icon src={`src/assets/icons/${icon}`} hover={false} />
      <Typography.Subtitle id="title-text">{title}</Typography.Subtitle>
    </TitleWrapper>
    <HorizontalRow color={rowColor} />
    <UnorderedList>
      {items.map((item, index) => (
        <Link key={`item-${index}`} item={item} />
      ))}
    </UnorderedList>
  </div>
);

const Sidebar = ({ contents }: { contents: SidebarLink[] }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Container>
      {contents.map((content, index) => (
        <SidebarItem
          title={content.title}
          icon={content.icon}
          items={content.items}
          key={index}
          rowColor={theme.primaryRow}
        />
      ))}
    </Container>
  );
};

export default Sidebar;
