import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        
        borderRadius: "base", // <-- border radius is same for all variants and sizes
      },
  
      // Two sizes: sm and md
      sizes: {
        sm: {
          fontSize: "sm",
          px: 4, // <-- px is short for paddingLeft and paddingRight
          py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
          fontSize: "md",
          px: 6, // <-- these values are tokens from the design system
          py: 4, // <-- these values are tokens from the design system
        },
      },
      // Two variants: outline and solid
      variants: {
        outline: {
          border: 0,
          color: "gray.50",
          bg:"#8257E5",
          _hover: {
            bg: "#6846b7"
          }
        },
       
     
      },
    
      // The default size and variant values
      defaultProps: {
        size: "md",
        variant: "outline",
        
      },
    },
 
  },
  colors: {
    gray: {
      "900": "#2B2B2B",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
