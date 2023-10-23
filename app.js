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

    // データを表示するHTML要素に追加
    const dataElement = document.createElement("div");
    dataElement.textContent = `
        <a-entity gltf-model="${objectInfo.model}" rotation="${objectInfo.rotation}" scale="${objectInfo.scale}" animation="${objectInfo.animation}" gps-entity-place="latitude:${objectInfo.latitude};longitude:${objectInfo.longitude}">
        </a-entity>`;
    arContainer.appendChild(dataElement);

    // ARコンテナに3Dオブジェクトを追加
    arContainer.appendChild(arObject);
});
