import { Declaration } from 'postcss';

export const insertPaddingAndMargin = (
    decl: Declaration,
    paddingValue: string,
    marginValue: string
) => {
    if (paddingValue) {
        decl.cloneAfter({
            prop: 'padding',
            value: paddingValue.trim(),
        });
    }

    if (marginValue) {
        decl.cloneAfter({
            prop: 'margin',
            value: marginValue.trim(),
        });
    }

    decl.remove();
};

export const parseMarginAndPadding = (decl: Declaration) => {
    const [paddingValue, marginValue] = decl.value.includes(',')
        ? decl.value.split(',')
        : [decl.value, decl.value];

    return [paddingValue, marginValue];
};
