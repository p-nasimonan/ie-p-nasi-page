#!/bin/bash
#yokan-pageの中で実行

# Viteプロジェクトをビルド
npm run build

# ビルド出力先のディレクトリに移動
cd dist

# パーミッションを変更
chmod -R 755 *

scp -r * amane:/home/student/e24/e245719/public_html