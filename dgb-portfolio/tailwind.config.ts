import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        // .. rest of the colors
      },
      
     
    },
  },
  lightMode: "class",
  plugins: [
    nextui(
    {
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "vintage", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      }, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {

          }, // light theme layout tokens
          colors: {

          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            colors: {
              primary: {
                DEFAULT: "#BEF264",
                foreground: "#000000",
              },
              focus: "#BEF264",
            }
          }, // dark theme colors
        },
        "purple": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#F2EAFA",
              100: "#E4D4F4",
              200: "#C9A9E9",
              300: "#AE7EDE",
              400: "#9353D3",
              500: "#7828C8",
              600: "#6020A0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
              DEFAULT: "#18181B",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "vintage": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#B2A59B",
            foreground: "#ffffff",
            primary: {
              50: "#607274",
              100: "#FAEED1",
              200: "#DED0B6",
              300: "#B2A59B",
              400: "#9353D3",
              500: "#7828C8",
              600: "#6020A0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
              DEFAULT: "#607274",
              foreground: "#ffffff",
            },
            focus: "#FAEED1",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      }
    }
  )]
}
export default config
