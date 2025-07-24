import postcss, { Result } from 'postcss';
import postcssJs, { CssInJs } from 'postcss-js';
import { PluginOptions } from '../lib/types';
import parginCssPlugin from '../lib/main';

describe('pargin-css-plugin', () => {
    async function run(
        cssString: CssInJs,
        output: string,
        options: PluginOptions = {}
    ) {
        const result: Result = await postcss([
            parginCssPlugin(options),
        ]).process(cssString, { parser: postcssJs.parse, from: undefined });

        expect(result.css).toEqual(output);
        expect(result.warnings()).toHaveLength(0);
    }

    it('basic convertion from pargin to padding and margin', async () => {
        await run({ pargin: '2px 2px, 0 0' }, 'margin: 0 0;\npadding: 2px 2px');
    });

    it('basic convertion from madding to padding and margin', async () => {
        await run({ pargin: '2px 2px, 0 0' }, 'margin: 0 0;\npadding: 2px 2px');
    });

    it('basic convertion from pargin to padding and margin with additional properties', async () => {
        await run(
            { transform: 'translateX(-50%)', pargin: '2 2, 0 0', top: '20px' },
            'transform: translateX(-50%);\nmargin: 0 0;\npadding: 2 2;\ntop: 20px'
        );
    });

    it('empty pargin value', async () => {
        await run({ pargin: '' }, '');
    });

    it('single value pargin', async () => {
        await run({ pargin: '10px' }, 'margin: 10px;\npadding: 10px');
    });

    it('malformed pargin (missing comma)', async () => {
        await run(
            { pargin: '10px 20px' },
            'margin: 10px 20px;\npadding: 10px 20px'
        );
    });
});
