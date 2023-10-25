// 3Dオブジェクトの情報をJavaScriptで保管
const arObjectInfo = [
    {
        name: "新発田城",
        category: "観光",
        model: "assets/shibatajo.glb",
        rotation: "0 0 0",
        scale: "1 1 1",
        animation: "",
        latitude: 37.95493534310519,
        longitude: 139.32597092399263
    },
    // 他のポイントの情報も同様に追加
    {
        name: "職短芝生",
        category: "観光",
        model: "assets/sakura.glb",
        rotation: "0 0 0",
        scale: "1 1 1",
        animation: "",
        latitude: 37.95623964531757,
        longitude: 139.3371717973987
    },

    {
        name: "職短教室",
        category: "観光",
        model: "assets/kingyodaiwa.glb",
        rotation: "0 0 0",
        scale: "1 1 1",
        animation: "",
        latitude: 37.956133508683955,
        longitude: 139.3378179331434
    },
];

// ARコンテナの取得
const arContainer = document.getElementById("ar-container");

// 3Dオブジェクト情報をHTML要素に渡す
arObjectInfo.forEach(objectInfo => {
    // データを表示するHTML要素に追加
    const dataElement = document.createElement("div");
    // アニメーションが空でない場合にのみ、animation属性を含める
    const animationAttribute = objectInfo.animation ? `animation="${objectInfo.animation}"` : '';
    dataElement.innerHTML = `
        <a-entity gltf-model="${objectInfo.model}" rotation="${objectInfo.rotation}" scale="${objectInfo.scale}" ${animationAttribute} gps-entity-place="latitude:${objectInfo.latitude};longitude:${objectInfo.longitude}">
        </a-entity>`;
    arContainer.appendChild(dataElement);
});
