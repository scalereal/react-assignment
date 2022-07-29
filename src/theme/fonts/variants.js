import { appFontFaces } from "./faces";

export const fontVariants = {
    display1: {
        fontFamily: appFontFaces.displayFont,
        fontSize: "3rem",
        "@media only screen and (max-width: 600px)": {
            fontSize: "2.25rem",
        },
    },
    display2: {
        fontFamily: appFontFaces.displayFont,
        fontSize: "2.25rem",
    },
    h1: {
        fontSize: "2.5rem",
        fontWeight: "600",
    },
    h2: {
        fontSize: "2rem",
        fontWeight: "600",
    },
    h3: {
        fontSize: "1.5rem",
        fontWeight: "600",
    },
    h4: {
        fontSize: "1.25rem",
        fontWeight: "600",
    },
    h5: {
        fontSize: "1.125rem",
        fontWeight: "600",
    },
    body1: {
        fontSize: "1rem",
        fontWeight: "500",
    },
    body2: {
        fontSize: "1rem",
        fontWeight: "400",
    },
    small: {
        fontSize: "0.75rem",
        fontWeight: "500",
    },
};
