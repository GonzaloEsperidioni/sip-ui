import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    primary: theme.colors.red,
    secondary: {
      50: "#ffe2ec",
      100: "#ffb3c5",
      200: "#fc839f",
      300: "#f95278",
      400: "#f62252",
      500: "#dd0939",
      600: "#ad032c",
      700: "#7c001e",
      800: "#4d0012",
      900: "#200005",
    },
  },
});
