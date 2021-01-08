import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const umd = {
    input: 'js/city.js',
    output: {
        file: `${__dirname}/dist/cityGenerator.js`,
        format: 'umd',
        name: 'CityGenerator',
        sourcemap: true,
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
        }),
    ],
};

const umdMin = {
    input: 'js/city.js',
    output: {
        file: `${__dirname}/dist/cityGenerator.min.js`,
        format: 'umd',
        name: 'CityGenerator',
        sourcemap: false,
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
        }),
        terser(),
    ],
};

export default [umd, umdMin];