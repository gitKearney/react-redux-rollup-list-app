# React App with Rollup
This is my attempt to make a React web app without use Webpack. This program
runs it's own web server. The source files are bundled up using RollupJS.

The JSX is transpiled by Babel

## TRANSPILE
To transpile the JSX and ES7 code into ES5 code...

    sh babel-it

## BUNDLE
To create the bundle for the server to serve

    yarn rollup --config