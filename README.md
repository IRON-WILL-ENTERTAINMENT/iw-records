# website-IWE

この Website は Github Pages で運用する前提で組む。

# ブランチ戦略

ブランチ管理は以下の戦略に基づく：

- main : 公開用
- develop : 開発の中心となるブランチ。 feat/以下のブランチは最終的に develop ブランチに統合する
- feat/until-202xxxxx : メジャーアップデートはワンマンライブ告知タイミングを基準とする。ハイフン以降の数値はワンマンライブの日付(yyyymmdd)とする。

# 開発用ローカルサーバー

起動コマンド：

```bash
docker compose up --build
```

Web ブラウザで以下のアドレスにアクセスする：

```
http://localhost:8080
```

終了コマンド：

```bash
docker compose down
```

# 更新作業

更新作業を行う場合は以下のファイルを編集すること：

- ライブ追加 → docs/data/live.js
- SNS追加 → docs/data/contact.js
- YouTube差し替え → docs/data/video.js
- 背景画像差し替え → docs/data/hero.js
- 文言修正 → だいたい docs/data/\*
