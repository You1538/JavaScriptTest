var entitiesToCreate = [
    {
        gltfModel: "./assets/sakura.glb",
        rotation: "0 0 0",
        scale: "2 2 2",
        animation: "",
        latitude: "37.95623964531757",
        longitude: "139.3371717973987"
    },
    {
        gltfModel: "./assets/sakura.glb",
        rotation: "0 0 180",
        scale: "2 2 2",
        animation: "property: rotation; to: 0 0 540; loop: true; dur: 15000; easing: linear;",
        latitude: "37.95623964531757",
        longitude: "140.123456789"
    }
    // 他の<a-entity>情報も同様に追加
];

var scene = document.querySelector("a-scene");

entitiesToCreate.forEach(function (entityInfo) {
    var newEntity = document.createElement("a-entity");
    newEntity.setAttribute("gltf-model", entityInfo.gltfModel);
    newEntity.setAttribute("rotation", entityInfo.rotation);
    newEntity.setAttribute("scale", entityInfo.scale);
    newEntity.setAttribute("gps-entity-place", `latitude: ${entityInfo.latitude}; longitude: ${entityInfo.longitude}`);

    if (entityInfo.animation !== "") {
        var animation = document.createElement("a-animation");
        animation.setAttribute("attribute", entityInfo.animation);
        newEntity.appendChild(animation);
    }

    scene.appendChild(newEntity);
});
