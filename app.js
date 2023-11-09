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

var generatedTags = ""; // 生成されるタグを格納する変数

entitiesToCreate.forEach(function(entityInfo) {
    var entityTag = `
        <a-entity gltf-model="${entityInfo.gltfModel}" rotation="${entityInfo.rotation}" scale="${entityInfo.scale}" gps-entity-place="latitude: ${entityInfo.latitude}; longitude: ${entityInfo.longitude}">
            ${entityInfo.animation ? `<a-animation ${entityInfo.animation}></a-animation>` : ""}
        </a-entity>
    `;
    generatedTags += entityTag;
});

var scene = document.querySelector("a-scene");
scene.innerHTML = generatedTags;
