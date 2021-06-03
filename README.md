# Rollup Preact TypeScript[TS] PostCSS Boilerplate
Boilerplate code for starting a project with TypeScript, PostCSS, Preact and Rollup

## Why
I couldn't find it anywhere so here it is. 
It should contain everything you need while still being pretty minimal. 

## Build
To build just use `npm run build`. <br>
To build in watch mode use `npm run build-watch`.

## Minification
Minification is disabled by default. To enable it uncomment the minifaction section in rollup.config.js.
Minification is performed with `@rollup/plugin-strip` and `rollup-plugin-terser` are already included.
