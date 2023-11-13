// タグを生成する関数
function createAEntity(fileLocation, rotation, scale, animation, latitude, longitude) {
  // <a-entity> 要素を作成
  var aEntity = document.createElement('a-entity');
  
  // 属性を設定
  aEntity.setAttribute('gltf-model', fileLocation);
  aEntity.setAttribute('rotation', rotation);
  aEntity.setAttribute('scale', scale);
  aEntity.setAttribute('animation', animation);
  aEntity.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);

  return aEntity;
}

// <a-scene> 要素を取得
var scene = document.querySelector('a-scene');

// タグを生成して挿入
var entity1 = createAEntity(
   './assets/sakura.glb',
   '0 0 0',
   '2 2 2',
   '',
   '37.95623964531757',
   '140.123456789');
var entity2 = createAEntity(
  './assets/sakura.glb',
  '0 0 0',
  '2 2 2',
  'property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear;',
  '37.95623964531757',
  '140.123456789');

// 生成したタグを <a-scene> に追加
scene.appendChild(entity1);
scene.appendChild(entity2);
