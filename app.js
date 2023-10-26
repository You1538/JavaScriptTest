// <a-entity> 要素を生成する関数
function createAEntity(template, data) {
    // 新しい <a-entity> 要素を作成
    const aEntity = document.createElement("a-entity");

    // データを使用して属性を設定
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            aEntity.setAttribute(key, value);
        }
    }

    // <a-entity> の中身を空に設定 (内部のテキストは空にする)
    aEntity.textContent = "";

    return aEntity;
}

// <a-entity> 要素のデータの例
const entityData = [
    {
        "gltf-model": "assets/shibatajo.gltf",
        "rotation": "0 0 0",
        "scale": "1 1 1",
        "animation": "property: rotation; to: 0 360 0; loop: true; dur: 2000",
        "gps-entity-place": "latitude: 37.95493534310519; longitude: 139.32597092399263"
    },
    {
        "gltf-model": "assets/sakura.gltf",
        "rotation": "0 90 0",
        "scale": "0.5 0.5 0.5",
        "animation": "property: rotation; to: 0 360 0; loop: true; dur: 2000",
        "gps-entity-place": "latitude: 37.95623964531757; longitude: 139.3371717973987"
    },
    // 必要に応じてデータを追加
    {
        "gltf-model": "assets/sakura.gltf",
        "rotation": "0 90 0",
        "scale": "0.5 0.5 0.5",
        "animation": "",
        "gps-entity-place": "latitude: 37.956133508683955; longitude: 139.3378179331434"
    },
];

const result = document.getElementById("result");

// <a-entity> 要素を生成して結果に追加
entityData.forEach(data => {
    const aEntity = createAEntity('<a-entity></a-entity>', data);
    result.appendChild(aEntity);
});
</script>
