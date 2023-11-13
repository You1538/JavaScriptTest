document.getElementById('scene').insertAdjacentHTML('beforeend', `
<!--0 職短 -->
<a-entity
gltf-model="./assets/sakura.glb"
rotation="0 0 0" scale="2 2 2"
animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear;"
gps-entity-place="latitude: 37.95623964531757; longitude: 139.3371717973987">
</a-entity>

<!--1 職短 -->
<a-entity
gltf-model="./assets/sakura.glb"
rotation="0 0 180" scale="2 2 2"
animation=""
gps-entity-place="latitude: 37.95623964531757; longitude: 139.3371717973987">
</a-entity>
`);
