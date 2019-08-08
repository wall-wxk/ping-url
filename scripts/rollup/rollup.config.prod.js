import filesize from 'rollup-plugin-filesize';
import {uglify} from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';

import baseConfig from './rollup.config.base';
import {
    name,
    version,
    author,
    license
} from '../../package.json';
import {
    libraryName
} from '../config.js';

const banner = `
/*!
* ${name}.js v${version}
* (c) 2019-${new Date().getFullYear()} ${author.name}
* Released under the ${license} License.
*/
`;

let override = { compilerOptions: { 
    "declaration": false,
 } };

export default [
    {
        ...baseConfig,
        output: [
            // umd development version with sourcemap
            {
                file: `dist/${name}.js`,
                format: 'umd',
                name: libraryName,
                banner,
                sourcemap: true
            },
            // cjs and esm version
            {
                file: `dist/${name}.cjs.js`,
                format: 'cjs',
                banner
            },
            // cjs and esm version
            {
                file: `dist/${name}.esm.js`,
                format: 'es',
                banner
            }
        ],
        plugins: [
            ...baseConfig.plugins,
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            typescript({
                exclude: 'node_modules/**',
                "tsconfig": "tsconfig.json",
                "tsconfigOverride": override
            }),
            filesize()
        ]
    },
    {
        ...baseConfig,
        output: [
            // umd with compress version
            {
                file: `dist/${name}.min.js`,
                format: 'umd',
                name,
                banner
            }
        ],
        plugins: [
            ...baseConfig.plugins,
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            typescript({
                exclude: 'node_modules/**',
                "tsconfig": "tsconfig.json",
                "tsconfigOverride": override
            }),
            uglify({
                compress: {
                    drop_console: true
                }
            }, minify),
            filesize()
        ]
    }
];