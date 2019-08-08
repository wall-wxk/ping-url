module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser", // 支持新的es7属性
    "parserOptions": {
        "ecmaVersion": 6, // 指定你使用的 ECMAScript 版本
        "sourceType": "module", // 代码是 ECMAScript 模块
        "ecmaFeatures": { // 额外的语言特性
            "experimentalObjectRestSpread": true // 支持新的es7属性
        },
        "project": "./tsconfig.json"
    },
    "env":{
        "es6": true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6
        "browser": true, // 浏览器环境中的全局变量
        "node":true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ], // 核心规则
    "globals": { // 全局变量
        
    },
    "plugins": [ // 第三方插件
        "@typescript-eslint"
    ],
    "rules": {
        "prefer-const": "off",
        "no-unused-vars": "warn",
        "no-console": "off",
        "generator-star-spacing": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
    }
};