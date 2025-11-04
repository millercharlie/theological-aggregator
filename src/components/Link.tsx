import styled from "@emotion/styled";
import type { ResourceLink } from "@libs/Types";
import * as Typography from "@libs/Typography";
import squarrow from "@assets/arrows/squarrow.svg";

import { MediumIcon as Icon } from "@libs/Icons";
import React from "react";
import { Colors } from "@libs/global";

const Container = styled.li<{ link?: boolean }>`
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: ${({ link }) => (link ? "pointer" : "default")};
  transition: all 0.2s;
  :hover {
    text-decoration: ${({ link }) => (link ? "underline" : "none")};
  }
`;

const Link: React.FC<{ item: ResourceLink }> = ({ item }) => {
  return (
    <Container
      link={item.link !== undefined && item.link !== null && item.link !== ""}
    >
      {item.icon && (
        <svg color={Colors.dark.text} width={11} height={11}>
          <use
            xlinkHref={`src/assets/icons/platforms/${item.icon}`}
            href={`src/assets/icons/platforms/${item.icon}`}
            width={11}
            height={11}
          ></use>
        </svg>
      )}
      <Typography.SidebarLink href={item.link} target="_blank" id="item-text">
        {item.displayText.includes("\u2013")
          ? item.displayText
              .split("\u2013")
              .map((phrase, index) =>
                index === 0 ? (
                  <span style={{ fontStyle: "italic" }}>{phrase} &ndash;</span>
                ) : (
                  phrase
                )
              )
          : item.displayText}
      </Typography.SidebarLink>
      {item.link !== undefined && item.link !== null && item.link !== "" && (
        <Icon src={squarrow} alt="squarrow" hover={true} />
      )}
    </Container>
  );
};

export default Link;
