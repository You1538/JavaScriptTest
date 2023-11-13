// タグの要素を管理する構造体的なオブジェクト
function AEntityData(fileLocation, rotation, scale, animation, latitude, longitude) {
  this.fileLocation = fileLocation;
  this.rotation = rotation;
  this.scale = scale;
  this.animation = animation;
  this.latitude = latitude;
  this.longitude = longitude;
}

// タグを生成する関数
function createAEntity(data) {
  // <a-entity> 要素を作成
  var aEntity = document.createElement('a-entity');

  // 属性を設定
  aEntity.setAttribute('gltf-model', data.fileLocation);
  aEntity.setAttribute('rotation', data.rotation);
  aEntity.setAttribute('scale', data.scale);
  aEntity.setAttribute('animation', data.animation);
  aEntity.setAttribute('gps-entity-place', `latitude: ${data.latitude}; longitude: ${data.longitude}`);

  return aEntity;
}

// 親要素を取得
const parentElement = document.getElementById("scene");

// タグの要素を管理するオブジェクトの配列
var entitiesData = [
  new AEntityData(
    './assets/sakura.glb',
     '0 0 0',
     '2 2 2',
     'property: rotation; to: 0 360 0; loop: true; dur: 5000; easing: linear;',
     '37.95623964531757',
     '140.123456789'),

  new AEntityData(
  './assets/sakura.glb',
  '0 0 180',
  '2 2 2',
  '',
  '37.95623964531757',
  '140.123456789')
];

// タグを生成して追加
entitiesData.forEach(function(data) {
  var entity = createAEntity(data);
  parentElement.appendChild(entity);
});
