import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'lib',
        lib: {
            entry: resolve(__dirname, 'packages/index.ts'), //指定组件编译入口文件
            name: 'keyboard-vue3-lanhe',
            fileName: 'keyboard-vue3-lanhe',
        }, //库编译模式配置
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            },
        }, // rollup打包配置
    },
    server: {
        host: '0.0.0.0',
    },
})
