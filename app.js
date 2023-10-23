// 3Dオブジェクトの情報をJavaScriptで保管
const arObjectInfo = [
    {
        name: "新発田城",
        category: "観光",
        model: "assets/shibatajo.glb",
        rotation: "0 0 0",
        scale: "1 1 1",
        animation: "property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear;",
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
        animation: "property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear;",
        latitude: 37.95623964531757,
        longitude: 139.3371717973987
    },

    {
        name: "職短教室",
        category: "観光",
        model: "assets/kingyodaiwa.glb",
        rotation: "0 0 0",
        scale: "1 1 1",
        animation: "property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear;",
        latitude: 37.956133508683955,
        longitude: 139.3378179331434
    },
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
    dataElement.textContent = `
        <a-entity gltf-model="${objectInfo.model}" rotation="${objectInfo.rotation}" scale="${objectInfo.scale}" animation="${objectInfo.animation}" gps-entity-place="latitude:${objectInfo.latitude};longitude:${objectInfo.longitude}">
        </a-entity>`;
    arContainer.appendChild(dataElement);

    // ARコンテナに3Dオブジェクトを追加
    arContainer.appendChild(arObject);
});
