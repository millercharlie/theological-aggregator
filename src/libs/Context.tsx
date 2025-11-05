import { noOp } from "@libs/functions";
import React from "react";
import { type ColorTheme, Theme } from "@libs/Types";
import { Colors } from "@libs/globals";

// TODO: In the future, this can maybe hold more information
export const ModalContext = React.createContext({
  visible: true,
  setVisible: () => {},
});
export const ThemeContext = React.createContext<{
  theme: ColorTheme;
  setTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
}>({
  theme: Colors[Theme.DARK],
  setTheme: noOp,
});
