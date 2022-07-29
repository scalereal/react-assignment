export const fontVariantToTagMapping = {
    display1: "h1",
    display2: "h2",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    body1: "p",
    body2: "span",
    small: "small",
};

export const getComponentTag = (textVariant, as) => {
    let componentTag = "span";
    if (textVariant) {
        componentTag = fontVariantToTagMapping[textVariant];
    }
    if (as) {
        componentTag = fontVariantToTagMapping[as];
    }
    return componentTag;
};
