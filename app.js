// スクリプトで<a-entity>要素を生成
var entitiesToCreate = [
  {
    gltfModel: "./assets2/sakura.glb",
    rotation: "0 0 0",
    scale: "2 2 2",
    animation: "",
    latitude: "37.95623964531757",
    longitude: "139.3371717973987"
  },
  {
    gltfModel: "./assets2/sakura.glb",
    rotation: "0 0 180",
    scale: "2 2 2",
    animation: "property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear;",
    latitude: "37.95623964531757",
    longitude: "140.123456789"
  },
  // 他の<a-entity>情報も同様に追加
];

var scene = document.querySelector("a-scene");

entitiesToCreate.forEach(function(entityInfo) {
  var newEntity = document.createElement("a-entity");
  newEntity.setAttribute("gltf-model", entityInfo.gltfModel);
  newEntity.setAttribute("rotation", entityInfo.rotation);
  newEntity.setAttribute("scale", entityInfo.scale);
  if (entityInfo.animation !== "") {
      newEntity.setAttribute("animation", entityInfo.animation);
  }
  newEntity.setAttribute("gps-entity-place", `latitude: ${entityInfo.latitude}; longitude: ${entityInfo.longitude}`);
  scene.appendChild(newEntity);
});



// 生成する<a-entity>タグの情報をリストで定義
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
    animation: "property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear;",
    latitude: "37.95623964531757",
    longitude: "140.123456789"
  },
  // 他の<a-entity>情報も同様に追加
];

// <a-scene>要素を取得
var scene = document.querySelector("a-scene");

// 各<a-entity>を生成して<a-scene>に追加
entitiesToCreate.forEach(function(entityInfo) {
  var newEntity = document.createElement("a-entity");
  newEntity.setAttribute("gltf-model", entityInfo.gltfModel);
  newEntity.setAttribute("rotation", entityInfo.rotation);
  newEntity.setAttribute("scale", entityInfo.scale);
  newEntity.setAttribute("gps-entity-place", `latitude: ${entityInfo.latitude}; longitude: ${entityInfo.longitude}`);

  // animationがある場合のみ追加
  if (entityInfo.animation) {
      newEntity.setAttribute("animation", entityInfo.animation);
  }

  // <a-entity>を<a-scene>に追加
  scene.appendChild(newEntity);
});
