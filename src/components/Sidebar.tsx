import * as Typography from "@libs/Typography";
import squarrow from "@assets/arrows/squarrow.svg";
import { MediumIcon as Icon } from "@libs/Icons";
import styled from "@emotion/styled";
import type { SidebarLink } from "@libs/Types";

const Container = styled.div`
  width: 100%;
  margin-right: 30px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const HorizontalRow = styled.hr`
  height: 2px;
  background-color: white; // TODO: This shouldn't be hardcoded to white
  border: none;
  border-radius: 2px;
`;

const UnorderedList = styled.ul`
  margin-top: 0;
  padding: 0 0 0 12px;
  list-style-position: inside;
  /* list-style-type: circle; */
`;
const ListItem = styled.li<{ link?: boolean }>`
  padding-bottom: 5px;
  display: flex;
  align-items: baseline;
  gap: 6px;
  cursor: ${({ link }) => (link ? "pointer" : "default")};
  transition: all 0.2s;
  :hover {
    text-decoration: ${({ link }) => (link ? "underline" : "none")};
  }
`;

const SidebarItem = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: { link?: string; text: string }[];
}) => (
  <div>
    <TitleWrapper>
      <Icon src={`src/assets/icons/${icon}`} alt={icon} id={`${title}-icon`} />
      <Typography.Subtitle id="title-text">{title}</Typography.Subtitle>
    </TitleWrapper>
    <HorizontalRow />
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem
          key={`item-${index}`}
          link={
            item.link !== undefined && item.link !== null && item.link !== ""
          }
        >
          <Typography.SidebarLink
            href={item.link}
            target="_blank"
            id="item-text"
          >
            {item.text.includes("\u2013")
              ? item.text
                  .split("\u2013")
                  .map((phrase, index) =>
                    index === 0 ? (
                      <span style={{ fontStyle: "italic" }}>
                        {phrase} &ndash;
                      </span>
                    ) : (
                      phrase
                    )
                  )
              : item.text}
          </Typography.SidebarLink>
          {item.link !== undefined &&
            item.link !== null &&
            item.link !== "" && (
              <Icon src={squarrow} alt="squarrow" hover={true} />
            )}
        </ListItem>
      ))}
    </UnorderedList>
  </div>
);

const Sidebar = ({ contents }: { contents: SidebarLink[] }) => {
  return (
    <Container>
      {contents.map((content, index) => (
        <SidebarItem
          title={content.title}
          icon={content.icon}
          items={content.items}
          key={index}
        />
      ))}
    </Container>
  );
};

export default Sidebar;
