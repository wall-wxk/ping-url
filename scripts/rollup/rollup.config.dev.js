import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

import baseConfig from './rollup.config.base';

import {
    name
} from '../../package.json';
import {
    libraryName
} from '../config.js';


let override = { compilerOptions: { 
    "declaration": false,
 } };

export default {
    ...baseConfig,
    output: [
        // example 
        {
            file: `example/lib/${name}.js`,
            format: 'umd',
            name: libraryName,
            sourcemap: true
        },
        {
            file: `example/lib/${name}.cjs.js`,
            format: 'cjs',
            name: libraryName,
            sourcemap: 'inline'
        }
    ],
    plugins: [
        ...baseConfig.plugins,
        typescript({
            exclude: 'node_modules/**',
            "tsconfig": "tsconfig.json",
            "tsconfigOverride": override
        }),
        serve({
            port: 8080,
            contentBase: ['example']
        })
    ]
}