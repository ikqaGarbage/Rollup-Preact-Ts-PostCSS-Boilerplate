import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import postcss from 'rollup-plugin-postcss-modules';
import typescript from '@rollup/plugin-typescript';
import strip from '@rollup/plugin-strip';
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/app.tsx",
    output: {
        file: "dist/bundle.js",
        sourcemap: 'inline',
        format: "iife"
    },
    plugins: [
        postcss({
            modules: true,
            writeDefinitions: true,
            sourceMap: true,
            extract: true,
            minimize: true
        }),
        typescript({
            sourceMap: true,
        }),
        resolve({
            browser: true,
            dedupe: ["preact"]
        }),
        babel({
            extensions: [".ts", ".tsx"],
            exclude: 'node_modules/**',
            presets: ["@babel/env", ["@babel/typescript", { jsxPragma: "h", sourceMap: true,}]],
            plugins: [["@babel/transform-react-jsx", { runtime: "automatic",
            importSource: "preact"
            }]]
        }),
        // terser(),
        // strip({
        //     include: '**/*.(mjs|js|ts|tsx)',
        //     debugger: true,
        //     functions: [ 'console.*']
        // })
    ]
}