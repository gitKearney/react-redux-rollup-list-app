import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
    input: 'transpiled/App.js',
    output: {
        file: 'public/js/bundle.js',
        format: 'es'
    },
    plugins: [
        replace({ 'process.env.NODE_ENV': JSON.stringify( 'production' ) }),
        commonjs({ include: /node_modules/ }), 
        resolve() 
    ]
}
