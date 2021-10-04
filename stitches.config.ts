import { blackA, brown, brownDark, slate, slateDark } from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches, PropertyValue } from "@stitches/react";

export const { createTheme, styled, getCssText, globalCss, config } =
  createStitches({
    theme: {
      borderStyles: {
        solid: "solid",
      },
      borderWidths: {
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        8: "8px",
      },
      radii: {
        none: "0px",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      fonts: {
        headline: "Rubik",
        content: "Karla",
      },
      fontWeights: {
        regular: 400,
        bold: 700,
      },
      colors: {
        ...brown,
        ...slate,
        ...blackA,

        primary1: "$brown1",
        primary2: "$brown2",
        primary3: "$brown3",
        primary4: "$brown4",
        primary5: "$brown5",
        primary6: "$brown6",
        primary7: "$brown7",
        primary8: "$brown8",
        primary9: "$brown9",
        primary10: "$brown10",
        primary11: "$brown11",
        primary12: "$brown12",

        neutral1: "$slate1",
        neutral2: "$slate2",
        neutral3: "$slate3",
        neutral4: "$slate4",
        neutral5: "$slate5",
        neutral6: "$slate6",
        neutral7: "$slate7",
        neutral8: "$slate8",
        neutral9: "$slate9",
        neutral10: "$slate10",
        neutral11: "$slate11",
        neutral12: "$slate12",

        background: "$brown10",
        loContrast: "$primary1",

        overlay: "$blackA10",
      },
      fontSizes: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      lineHeights: {
        xs: "1rem",
        sm: "1.25rem",
        base: "1.5rem",
        lg: "1.75rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "1",
        "6xl": "1",
        "7xl": "1",
        "8xl": "1",
        "9xl": "1",
      },
      sizes: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        96: "96px",
        128: "128px",
        192: "192px",
        256: "256px",
        384: "384px",
        512: "512px",
        640: "640px",
        768: "768px",
        1024: "1024px",
        1280: "1280px",
        full: "100%",
        max: "max-content",
        min: "min-content",
        "w-screen": "100vw",
        "h-screen": "100vh",
      },
      space: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        96: "96px",
        128: "128px",
        192: "192px",
        256: "256px",
        384: "384px",
      },
      zIndices: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
      },
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
    },
    utils: {
      fontSize: (value: PropertyValue<"fontSize">) => ({
        fontSize: value,
        lineHeight: value,
      }),
      brTop: (value: PropertyValue<"borderRadius">) => ({
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      }),
      mx: (value: PropertyValue<"margin">) => ({
        marginLeft: value,
        marginRight: value,
      }),
    },
  });

export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...brownDark,
    ...slateDark,

    primary1: "$brown1",
    primary2: "$brown2",
    primary3: "$brown3",
    primary4: "$brown4",
    primary5: "$brown5",
    primary6: "$brown6",
    primary7: "$brown7",
    primary8: "$brown8",
    primary9: "$brown9",
    primary10: "$brown10",
    primary11: "$brown11",
    primary12: "$brown12",

    neutral1: "$slate1",
    neutral2: "$slate2",
    neutral3: "$slate3",
    neutral4: "$slate4",
    neutral5: "$slate5",
    neutral6: "$slate6",
    neutral7: "$slate7",
    neutral8: "$slate8",
    neutral9: "$slate9",
    neutral10: "$slate10",
    neutral11: "$slate11",
    neutral12: "$slate12",

    background: "$slate1",
    loContrast: "$neutral12",
  },
});

export const globalStyles = globalCss({
  "html, body": {
    overflowX: "hidden",
    overscrollBehaviorY: "none",
    scrollBehavior: "smooth",
    scrollPaddingTop: "10px",
  },
  body: {
    background: "$background",
    color: "$neutral12",
    fontFamily: "$content",
    fontSize: "$base",
    fontWeight: "$regular",
    position: "relative",
  },
});

export type CSS = Stitches.CSS<typeof config>;
export type VariantProps<T> = Stitches.VariantProps<T>;
export type { IntrinsicElementsKeys } from "@stitches/react/types/styled-component";
