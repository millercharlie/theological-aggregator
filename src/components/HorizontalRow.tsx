import styled from "@emotion/styled";

export const HorizontalRow = styled.hr<{ color?: string }>`
  height: 2px;
  background-color: ${({ color }) => color ?? "white"};
  border: none;
  border-radius: 2px;
`;
