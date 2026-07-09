# Contributing to Open-Prompted Anime Tools

[👉 Jump to Japanese (日本語の記述へジャンプ)](#japanese-日本語)

---

## English Guide

Thank you for your interest in contributing to **Open-Prompted Anime Tools**!

### Important Notice

Please note that the contribution guidelines described here **do not** explain how to contribute to the core OpenToonz software repository, nor do they apply to the general development or codebase of the `opentoonz.github.io` website repository as a whole. This guide is exclusively for adding small-scale, AI-generated web applications to the `ai_tools/apps/` subfolder.

---

### 1. Required Files

To add a new web application, you must prepare a dedicated folder named after your application (using a unique, URL-friendly lowercase string, e.g., `my_awesome_tool`) containing the following two files:

#### ① `index.html` (Application Body)

* A single, standalone web application page.
* All necessary CSS and JavaScript should ideally be embedded inline within this file or referenced cleanly via secure external CDNs.
* It must design to fit and run correctly inside an `<iframe>` container.

#### ② `meta.json` (Metadata Configuration)

* A structured JSON file that contains information used for the portal's search engine, Information Pane, and license mapping.
* **Highly Encouraged:** We strongly recommend sharing your AI prompt URLs via `promptUrl`. Disclosing the exact prompts used to build your app helps the open-source community learn, iterate, and share engineering know-how!

##### `meta.json` Specification Example:

```json
{
  "id": "my_awesome_tool",
  "name": "My Awesome Anime Tool",
  "shortDescription": "A brief 1-2 sentence description explaining what this tool does for animation production.",
  "tags": ["Animation", "Cleanup", "Helper"],
  "searchKeywords": ["ink&paint", "helper", "automated"],
  "aiInfo": {
    "model": "Gemini",
    "version": "3.5"
  },
  "manual": "1. Drag and drop your file.\n2. Click the process button.\n3. Download the corrected result.",
  "author": "Your Name or Github Username",
  "promptUrl": "https://gemini.google.com/share/d/example-share-link",
  "promptLicense": "CC BY 4.0",
  "referencedOSS": [
    {
      "name": "Name of OSS",
      "url": "https://github.com/path/to/oss/repo",
      "license": "MIT License"
    }
  ],
  "referenceArticles": [
    {
      "title": "Title of the article",
      "url": "https://stackoverflow.com/path/to/article"
    }
  ]
}

```

##### Metadata Field Details for References & Compliance:

* **`referencedOSS`** (Optional): If you explicitly instructed the AI to refer to specific open-source software (OSS) source codes in your prompts, list their name, URL, and license here. **Crucial:** If `referencedOSS` is present, you *must* ensure compliance with that OSS license. For example, if you referenced an OSS under the MIT License, you must include its original copyright notice and the full license text within the comments section of your application's `index.html`.
* **`referenceArticles`** (Optional): If you explicitly instructed the AI to refer to specific web articles, documentation, or blog posts in your prompts, list their titles and URLs here.

---

### 2. Internationalization (i18n) Policy

As an application developer, **you do not need to worry about multi-language internationalization for the time being.** You are free to publish your tool developed solely in your native language.

These applications are primarily intended to fulfill niche demands on the animation production floor, meaning immediate localized needs in other countries may not be as high. Forcing developers to handle complex i18n workflows from the start could discourage valuable contributions.

Upon initial release, we will rely entirely on the web browser's built-in machine translation features to handle the translation of the app's UI (After all, this platform leverages AI!) Any deeper internationalization work can be left to other community members who genuinely need the tool in their language and choose to step up and implement it later.

---

### 3. Directory Structure

Please arrange your files under the `ai_tools/apps/` path exactly as shown below:

```text
opentoonz.github.io/ (Repository Root)
└── ai_tools/
    └── apps/
        └── my_awesome_tool/        <-- Create your custom folder here
            ├── index.html          <-- Your app file
            └── meta.json           <-- Your metadata config

```

---

### 4. Submission & Workflow

1. **Fork & Branch**: Fork the repository and create a new branch named after your tool (e.g., `add_my_awesome_tool`).
2. **Commit Files**: Place your dedicated app folder under `ai_tools/apps/`. Ensure everything works perfectly via local file browser opening.
3. **Submit a Pull Request**: Push your branch to GitHub and open a Pull Request (PR) against the master branch.
4. **Review & Merge**: Community maintainers will review your standalone HTML page and configuration for safety and UI responsiveness.
5. **Automatic Index Update**: Once your PR is approved and merged, a **GitHub Actions automation script** will trigger automatically. It scans your new folder, parses your `meta.json`, and seamlessly updates the platform's central dictionary (`apps-index.js`). Your app will be live instantly without any manual overhead!

---
<a name="japanese-日本語"></a>

## Japanese (日本語ガイド)

**Open-Prompted Anime Tools** へアプリケーションの追加をご検討いただき、ありがとうございます！

### 重要なお知らせ

このガイドで説明されている貢献方法は、**OpenToonz（ソフトウェア）本体のリポジトリに関するものでもありませんし、`opentoonz.github.io`（ウェブサイト）リポジトリ全体に関するものでもありません。** あくまで `ai_tools` サブフォルダ配下の「Open-Prompted Anime Tools」プラットフォームへ、小規模なAI生成Webアプリケーションを追加するための専用手順となります。

---

### 1. 用意する必要のあるファイル

新しいアプリケーションを追加する際は、アプリケーションごとに固有のフォルダ（例: `my_awesome_tool` などの英数字・アンダースコアからなる重複しないフォルダ名）を作成し、その中に以下の2つのファイルを配置してください。

#### ① `index.html` (アプリケーション本体)

* 1ページで完結するスタンドアロンなWebアプリケーション。
* 必要なCSSやJavaScriptは、原則としてこのファイル内にインラインで記述するか、信頼できる外部CDNのパスを読み込ませるようにしてください。
* ポータルサイト中央の `<iframe>` 内で正しく表示・動作する設計にしてください。

#### ② `meta.json` (メタデータ設定ファイル)

* ポータル側の検索、インフォメーションパネルの描画、およびライセンス処理に使用する構造化データファイルです。
* **プロンプト共有の推奨:** 本プラットフォームでは、開発に用いたAIのプロンプト（`promptUrl`）を積極的に公開・共有することを強く推奨しています。具体的な指示文や設計ノウハウをコミュニティ全体で共有することで、他のメンバーがツールをさらに改良・発展させるための大きな助けとなります。

##### `meta.json` の書き方・記述例:

```json
{
  "id": "my_awesome_tool",
  "name": "便利なアニメ制作ツール",
  "shortDescription": "1〜2文の短い説明文。アニメ制作の特定の作業（例：動画のチェックなど）を効率化する、など",
  "tags": ["動画", "チェック", "効率化"],
  "searchKeywords": ["awesome", "tool", "check", "helper"],
  "aiInfo": {
    "model": "Gemini",
    "version": "3.5"
  },
  "manual": "1. 処理したいファイルを画面へドラッグ＆ドロップします。<br>2. 解析ボタンをクリックします。<br>3. 生成されたファイルをダウンロードします。",
  "author": "あなたの名前 または GitHubユーザー名",
  "promptUrl": "https://gemini.google.com/share/d/example-share-link",
  "promptLicense": "CC BY 4.0"
  "referencedOSS": [
    {
      "name": "OSSの名称",
      "url": "https://github.com/path/to/oss/repo",
      "license": "MIT License"
    }
  ],
  "referenceArticles": [
    {
      "title": "技術解説記事のタイトル",
      "url": "https://qiita.com/path/to/article"
    }
  ]
}

```

##### 参照・ライセンス準拠に関する項目の詳細説明:

* **`referencedOSS`**（省略可）: AIへのプロンプト内で参照先として明示的に指示したOSS（オープンソースソフトウェア）のソースコードがある場合、その名称、URL、ライセンスをここに記載します。,<br>
**重要:** `referencedOSS` が存在する場合、参照元のOSSライセンスに必ず準拠してください（例：MITライセンスで公開されたOSSを参照・利用した場合は、元の著作権表示とライセンス全文を `index.html` 内のコメントとして明示的に記述するなど）。
* **`referenceArticles`**（省略可）: AIへのプロンプト内で参照先として明示的に指示したWeb上の技術解説記事やブログ投稿がある場合、そのタイトルとURLをここに記載します。

---

### 2. アプリケーションの国際化（i18n）について

アプリケーションの開発者は、**当面の間、国際化（i18n）への対応を気にする必要はありません。** ご自身の国の言語（日本語など）で開発しただけの状態で、そのまま公開していただいて構いません。

これらのアプリケーションは、制作現場におけるニッチな需要を満たすために作られることを想定しています。そのため、最初から他国からのニーズが自国よりも多いケースは稀であり、さらに投稿者に多言語対応の手間を強いることがアプリの投稿意欲を損なってしまう恐れがあるためです。

公開時、アプリのUI翻訳については**ブラウザの機械翻訳機能に期待します**（このプラットフォームはAIを活用するものなのですから！）。その後の本格的な国際化作業については、そのツールを必要とする他の国のコミュニティメンバーが、あなたの代わりに引き受けて対応してくれることを期待しても良いでしょう。

---

### 3. ファイルの配置場所（フォルダ構成）

ファイルは必ず以下のルールに従い、`ai_tools/apps/` の直下に配置してください。

```text
opentoonz.github.io/ (リポジトリルート)
└── ai_tools/
    └── apps/
        └── my_awesome_tool/          <-- ここを新規作成
            ├── index.html            <-- アプリ本体
            └── meta.json             <-- メタデータ設定ファイル

```

---

### 4. プルリクエスト（PR）から公開までの流れ

1. **フォークとブランチ作成**: リポジトリをフォークし、追加するツール名にちなんだ新しい作業ブランチ（例: `add_my_awesome_tool`）を作成します。
2. **ファイルのコミット**: `ai_tools/apps/` 配下に作成したフォルダとファイルをコミットします。HTMLをPC上で直接ダブルクリックして、ローカル環境でも崩れなく動くか事前に確認してください。
3. **プルリクエストの提出**: あなたのブランチをGitHubにプッシュし、元のリポジトリの `master` ブランチに向けてPull Request（PR）を作成します。
4. **レビューとマージ**: コミュニティのメンテナーが、HTMLコードの安全性やUIのレスポンシブ対応状況などを確認（レビュー）し、問題がなければプロジェクトにマージします。
5. **インデックスの自動更新**: PRがマージされると同時に、裏側で **GitHub Actions の自動化スクリプト** が自動的に起動します。スクリプトが新規追加されたフォルダ内の `meta.json` を読み込み、全体のインデックスファイルである `apps-index.js` を自動で更新・再構築してコミットします。これによりあなたのアプリがWebサイトへ反映され、利用可能になります。