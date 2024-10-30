const fs = require('fs');
const UglifyJS = require('uglify-js');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Minify and obfuscate game.js
let gameCode = fs.readFileSync('game.js', 'utf8');
let minifiedGame = UglifyJS.minify(gameCode).code;
let obfuscatedGame = JavaScriptObfuscator.obfuscate(minifiedGame, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 0.75
}).getObfuscatedCode();

fs.writeFileSync('game.min.js', obfuscatedGame);

// Minify and obfuscate config.js
let configCode = fs.readFileSync('config.js', 'utf8');
let minifiedConfig = UglifyJS.minify(configCode).code;
let obfuscatedConfig = JavaScriptObfuscator.obfuscate(minifiedConfig, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 0.75
}).getObfuscatedCode();

fs.writeFileSync('config.min.js', obfuscatedConfig);

console.log('Minification and obfuscation complete.');
