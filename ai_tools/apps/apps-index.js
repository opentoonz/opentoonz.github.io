// 自動生成されたインデックスデータです。変更しないでください。
window.globalAppsData = [
  {
    "id": "clip_file_checker",
    "name": "CLIP STUDIOファイル解析・チェック",
    "shortDescription": "CLIP STUDIOのファイル（.clip）を解析し、そのデータがあらかじめ指定した条件を満たしているかどうかをチェックします",
    "tags": [
      "作画",
      "CLIP STUDIO",
      "解析"
    ],
    "searchKeywords": [
      "clip studio",
      "check",
      "validation"
    ],
    "aiInfo": {
      "model": "Gemini",
      "version": "3.5"
    },
    "manual": "1.入力フィールドにチェック対象のCLIPファイルをドラッグ＆ドロップするか、クリックして選択します。<br>2.判定条件を入力し、チェック結果を確認します。<br>3.「再読み込み」ボタンを押すと、同じファイルを再度読み込んでチェック結果を更新します。<br>4.「修正版を保存」ボタンを押すと、条件をクリアしたCLIPファイルを保存できます。<br>※上書き保存する場合は、必ずバックアップを取って作業してください。",
    "promptUrl": "https://gemini.google.com/share/d/1XXapvE6hImYjsUX0tys9udLfoUhChQlx?usp=sharing",
    "author": "Shun Iwasawa",
    "promptLicense": "CC BY 4.0",
    "referencedOSS": [
      {
        "name": "clipstudio.js",
        "url": "https://github.com/saitolume/clipstudio.js",
        "license": "MIT License"
      }
    ],
    "referenceArticles": [
      {
        "title": "CLIP STUDIO PAINTのファイルからNode.jsでサムネイル画像を出力する",
        "url": "https://qiita.com/kcpoipoi/items/16afb4ae3f83439f6ff6"
      }
    ]
  },
  {
    "id": "export_folder_zipper",
    "name": "OpenToonz Export Folder Zipper",
    "shortDescription": "Package a folder created by OpenToonz Export > Export Scene into a shareable ZIP file directly in your browser. Files stay local and are not uploaded to a server.",
    "tags": [
      "OpenToonz",
      "Export Scene",
      "ZIP",
      "Troubleshooting",
      "Project Sharing"
    ],
    "searchKeywords": [
      "opentoonz",
      "export scene",
      "zip",
      "folder",
      "scene package",
      "scene file",
      "tnz",
      "tlv",
      "tpl",
      "palette",
      "troubleshooting",
      "project sharing",
      "browser tool"
    ],
    "aiInfo": {
      "model": "ChatGPT",
      "version": "GPT-5.5 Thinking"
    },
    "manual": "1. In OpenToonz, use Export > Export Scene to create an exported scene folder.\n2. Select that exported folder in this tool.\n3. Review the detected contents, warnings, total size, and suggested ZIP name.\n4. Click Create ZIP.\n5. Download the generated ZIP package and use the SHA-256 receipt for verification when sharing or troubleshooting.",
    "author": "Rodney Baker / Open Animation Library",
    "promptUrl": "https://github.com/OpenAnimationLibrary/extrastuff/blob/master/docs/tools/opentoonz-export-folder-zipper/prompts/initial_prompt.md",
    "promptLicense": "CC BY 4.0",
    "referencedOSS": [
      {
        "name": "JSZip",
        "url": "https://github.com/Stuk/jszip",
        "license": "MIT License"
      }
    ],
    "referenceArticles": [
      {
        "title": "MDN: HTMLInputElement.webkitdirectory",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory"
      },
      {
        "title": "MDN: File API",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/File_API"
      },
      {
        "title": "MDN: SubtleCrypto.digest()",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest"
      },
      {
        "title": "JSZip documentation",
        "url": "https://stuk.github.io/jszip/"
      }
    ]
  },
  {
    "id": "fill_black_pixels_with_color",
    "name": "黒ピクセルを塗り色で埋める",
    "shortDescription": "二値TGA画像の、実線（黒ピクセル）部分を周囲の塗り色で埋めます",
    "tags": [
      "仕上げ",
      "二値",
      "TGA",
      "補正"
    ],
    "searchKeywords": [
      "ink paint",
      "fill lines",
      "black pixels"
    ],
    "aiInfo": {
      "model": "Gemini",
      "version": "3.5"
    },
    "manual": "1.入力フィールドに処理対象のTGAファイルをドラッグ＆ドロップするか、クリックして選択します。（複数選択可）<br>2. 処理が行われるので、結果をダウンロードします。",
    "promptUrl": "https://gemini.google.com/share/d/1zUFBBd4z4mRuqNwzzkz-yG4_xfRTBPyH?usp=sharing",
    "author": "Shun Iwasawa",
    "promptLicense": "CC BY 4.0"
  },
  {
    "id": "img_to_pdf",
    "name": "画像一括PDF変換",
    "shortDescription": "絵コンテなどの画像ファイルをPDFに変換します。透かし（ウォーターマーク）を付けることができます。",
    "tags": [
      "絵コンテ",
      "PDF変換",
      "透かし"
    ],
    "searchKeywords": [
      "storyboard",
      "conversion",
      "watermark"
    ],
    "aiInfo": {
      "model": "Gemini",
      "version": "3.5"
    },
    "manual": "1. 画像ファイルをドラッグ＆ドロップ又はクリックして選択します。(複数選択可)<br>2. 透かしを設定します。<br>3. 「PDFを生成してダウンロード」ボタンをクリックします。",
    "author": "Naruya Ninomiya",
    "promptLicense": "CC BY 4.0"
  },
  {
    "id": "timesheet_entry_assist",
    "name": "タイムシート入力補助",
    "shortDescription": "手書きのタイムシートのデジタル入力をサポートするツールです。タイムシート画像に入力フィールドを重畳して、手書きの数字を透かしながら動画番号を入力することができます。",
    "tags": [
      "作画",
      "XDTS"
    ],
    "searchKeywords": [
      "timeline",
      "xsheet",
      "digitize"
    ],
    "aiInfo": {
      "model": "Gemini",
      "version": "3.x"
    },
    "manual": "画面左下「使い方ガイド」をクリックして説明をご参照ください。",
    "author": "Yuka Chomei",
    "promptLicense": "CC BY 4.0"
  },
  {
    "id": "xdts_timeline_checker",
    "name": "XDTS 総合チェック",
    "shortDescription": "原画と動画の .xdtsファイル を選択（複数選択可）し、動画タイムラインの全体集計と合成伝票を自動生成します。",
    "tags": [
      "作画",
      "XDTS",
      "解析"
    ],
    "searchKeywords": [
      "timeline",
      "check",
      "annalyze"
    ],
    "aiInfo": {
      "model": "Gemini",
      "version": "3.x"
    },
    "manual": "1. 原画、動画のXDTSファイルを、それぞれのファイル選択ボタンから指定します。<br>「タイムラインを解析して伝票・表を作成」ボタンをクリックして、解析結果を確認します。",
    "author": "Yuka Chomei",
    "promptLicense": "CC BY 4.0"
  }
];