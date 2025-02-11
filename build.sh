#!/bin/bash

# Viteプロジェクトをビルド
npm run build

# ビルド出力先のディレクトリに移動
cd dist

# パーミッションを変更
chmod -R 755 *

# 元のディレクトリに戻る
cd ..