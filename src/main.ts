import { PluginCreator } from 'postcss';
import { PluginOptions } from './types';
import { insertPaddingAndMargin, parseMarginAndPadding } from './utils';

const pluginCreator: PluginCreator<PluginOptions> = () => {
    return {
        postcssPlugin: 'postcss-pargin-css',
        Declaration: {
            pargin: (decl) => {
                const [paddingValue, marginValue] = parseMarginAndPadding(decl);

                insertPaddingAndMargin(decl, paddingValue, marginValue);
            },
            madding: (decl) => {
                const [marginValue, paddingValue] = parseMarginAndPadding(decl);

                insertPaddingAndMargin(decl, paddingValue, marginValue);
            },
        },
    };
};

pluginCreator.postcss = true;

export default pluginCreator;
