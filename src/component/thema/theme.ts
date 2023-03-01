import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
          body: {
            backgroundColor: "red.1000",
            color: "gray.800"
          }
        }
      }
});

export default theme;