// app.js

// 生成する<a-entity>タグの情報をリストで定義
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
      animation: "property: rotation; to: 0 0 540; loop: true; dur: 15000; easing: linear;",
      latitude: "37.95623964531757",
      longitude: "140.123456789"
    },
    // 他の<a-entity>情報も同様に追加
  ];
  
  // id="result"の<div>要素を取得
  var resultContainer = document.getElementById("result");
  
  // 各<a-entity>を生成して<div>に追加
  entitiesToCreate.forEach(function(entityInfo) {
    var newEntity = document.createElement("a-entity");
    newEntity.innerHTML = `
      <a-entity gltf-model="${entityInfo.gltfModel}" rotation="${entityInfo.rotation}" scale="${entityInfo.scale}" animation="${entityInfo.animation}" gps-entity-place="latitude: ${entityInfo.latitude}; longitude: ${entityInfo.longitude}">
          <!-- ここに内部のHTMLコンテンツを追加 -->
      </a-entity>
    `;
    resultContainer.appendChild(newEntity);
  });
  
