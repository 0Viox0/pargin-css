import { PluginCreator } from 'postcss';
import { PluginOptions } from './types';

const pluginCreator: PluginCreator<PluginOptions> = () => {
    return {
        postcssPlugin: 'postcss-pargin-css',
        Declaration: {
            pargin: (decl) => {
                let paddingValue, marginValue;

                if (decl.value.includes(',')) {
                    [paddingValue, marginValue] = decl.value.split(',');
                } else {
                    [paddingValue, marginValue] = [decl.value, decl.value];
                }

                if (paddingValue) {
                    decl.after(`padding: ${paddingValue.trim()}`);
                }

                if (marginValue) {
                    decl.after(`margin: ${marginValue.trim()}`);
                }

                decl.remove();
            },
            madding: (decl) => {
                const [marginValue, paddingValue] = decl.value.split(',');

                if (paddingValue) {
                    decl.after(`padding: ${paddingValue.trim()}`);
                }

                if (marginValue) {
                    decl.after(`margin: ${marginValue.trim()}`);
                }

                decl.remove();
            },
        },
    };
};

pluginCreator.postcss = true;

export default pluginCreator;
