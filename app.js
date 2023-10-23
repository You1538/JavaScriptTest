// 3Dオブジェクトの情報をJavaScriptで保管
const arObjectInfo = [
    {
        name: "新発田城",
        category: "観光",
        model: "assets/shibatajo.glb",
        rotation: "0 0 0",
        scale: "1 1 1",
        animation: "animation1",
        latitude: 37.95493534310519,
        longitude: 139.32597092399263
    },
    // 他のポイントの情報も同様に追加
];

// ARコンテナの取得
const arContainer = document.getElementById("ar-container");

// 3Dオブジェクト情報をHTML要素に渡す
arObjectInfo.forEach(objectInfo => {
    const arObject = document.createElement("a-entity");
    arObject.setAttribute("gltf-model", objectInfo.model);
    arObject.setAttribute("rotation", objectInfo.rotation);
    arObject.setAttribute("scale", objectInfo.scale);
    arObject.setAttribute("animation", objectInfo.animation);
    arObject.setAttribute("gps-entity-place", `latitude:${objectInfo.latitude};longitude:${objectInfo.longitude}`);

    // データを表示するHTML要素に追加
    const dataElement = document.createElement("div");
    dataElement.textContent = `オブジェクト名: ${objectInfo.name}, カテゴリ: ${objectInfo.category}`;
    arContainer.appendChild(dataElement);

    // ARコンテナに3Dオブジェクトを追加
    arContainer.appendChild(arObject);
});
