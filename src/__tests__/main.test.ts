import postcss, { Result } from 'postcss';
import { PluginOptions } from '../types';
import parginCssPlugin from '../main';
import { equal } from 'assert';
import postcssJs, { CssInJs } from 'postcss-js';
import test from 'node:test';

async function run(
    cssString: CssInJs,
    output: string,
    options: PluginOptions = {}
) {
    let result: Result = await postcss([parginCssPlugin(options)]).process(
        cssString,
        { parser: postcssJs.parse }
    );

    equal(result.css, output);
    equal(result.warnings().length, 0);
}

test('basic convertion from pargin to padding and margin', async () => {
    await run({ pargin: '2px 2px, 0 0' }, 'margin: 0 0;\npadding: 2px 2px');
});

test('basic convertion from madding to padding and margin', async () => {
    await run({ pargin: '2px 2px, 0 0' }, 'margin: 0 0;\npadding: 2px 2px');
});

test('basic convertion from pargin to padding and margin with additional properties', async () => {
    await run(
        { transform: 'translateX(-50%)', pargin: '2 2, 0 0', top: '20px' },
        'transform: translateX(-50%);\nmargin: 0 0;\npadding: 2 2;\ntop: 20px'
    );
});

test('empty pargin value', async () => {
    await run({ pargin: '' }, '');
});

test('single value pargin', async () => {
    await run({ pargin: '10px' }, 'margin: 10px;\npadding: 10px');
});

test('malformed pargin (missing comma)', async () => {
    await run(
        { pargin: '10px 20px' },
        'margin: 10px 20px;\npadding: 10px 20px'
    );
});
