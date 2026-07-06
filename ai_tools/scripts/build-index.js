const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '../apps');
// 💡 出力先を .json から .js に変更
const outputFile = path.join(appsDir, 'apps-index.js');

function buildIndex() {
    const apps = [];
    const items = fs.readdirSync(appsDir);

    items.forEach(item => {
        const itemPath = path.join(appsDir, item);
        if (fs.statSync(itemPath).isDirectory()) {
            const metaPath = path.join(itemPath, 'meta.json');
            if (fs.existsSync(metaPath)) {
                try {
                    const metaContent = fs.readFileSync(metaPath, 'utf8');
                    const metaData = JSON.parse(metaContent);
                    metaData.id = item;
                    apps.push(metaData);
                    console.log(`✅ 登録完了: ${item}`);
                } catch (e) {
                    console.error(`❌ パース失敗: ${metaPath}`, e);
                }
            }
        }
    });

    // 💡 純粋なJSONデータではなく、グローバル変数に代入するJavaScriptコードとして書き出す
    const jsContent = `// 自動生成されたインデックスデータです。変更しないでください。\nwindow.globalAppsData = ${JSON.stringify(apps, null, 2)};`;

    fs.writeFileSync(outputFile, jsContent, 'utf8');
    console.log(`\n🎉 すべてのメタデータを ${outputFile} に統合しました。 (合計: ${apps.length} 件)`);
}

buildIndex();