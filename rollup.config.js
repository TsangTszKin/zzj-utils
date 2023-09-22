import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/main.umd.js',
      format: 'umd', // 通用模块定义规范，同时支持 amd，cjs 和 iife
      name: 'zzj-utils'
    },
    {
      file: 'dist/main.es.js',
      format: 'es' // 将 bundle 保留为 ES 模块文件
    }
  ],
  plugins: [
    uglify(),
    babel({ exclude: 'node_modules/**' }),
    typescript({ tsconfig: './tsconfig.json' })
  ]
}
