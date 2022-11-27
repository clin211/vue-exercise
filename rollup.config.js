import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default [
    {
        // 入口文件
        input: 'packages/vue/src/index.ts',
        // 打包出口
        output: [
            // 导出 iife 模式的包
            {
                // 开启 sourceMap
                sourcemap: true,
                // 导出文件的地址
                file: './packages/vue/dist/vue.js',
                // 生成包的格式：一个自动执行的功能，适合作为script标签
                format: 'iife',
                // 变量名
                name: 'Vue',
            },
        ],
        // 插件支持：TypeScript、路径别名、CommonJS支持
        plugin: [
            // ts 支持
            typescript({ sourcemap: true }),
            // 模块导入的路径补全
            resolve(),
            // 将CommonJS模块转为es2015
            commonjs(),
        ],
    },
]
