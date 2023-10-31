<script lang="ts">
  import { T, useFrame } from '@threlte/core'
  import { OrbitControls, useGltf } from '@threlte/extras'
  // import Bloom from './bloom.svelte'

  let y = 2
  let rotation = 0

  // Rotates model on `Y` axis
  useFrame((_, delta) => {
    rotation += delta * 0.4
  })

  function inspectMaterialsInScene(scene) {
    scene.traverse(object => {
      if (object instanceof T.Mesh || object instanceof T.SkinnedMesh) {
        console.log('Object Name:', object.name)
        if (Array.isArray(object.material)) {
          // For multi-material objects
          object.material.forEach((material, index) => {
            console.log(`  Material ${index + 1}:`, material.name)
          })
        } else {
          // Single material
          console.log('  Material:', object.material.name)
        }
      }
    })
  }

  let lclcScene
  $: if (lclcScene) inspectMaterialsInScene(lclcScene)
</script>

<!-- Bloom postprocessing effect -->
<!-- <Bloom /> -->

<!-- Orthographic camera -->
<T.OrthographicCamera position={[10, 10, 10]} zoom={40} makeDefault>
  <!-- Controls -->
  <OrbitControls enableDamping />
</T.OrthographicCamera>

<!-- Ambient light for ambience -->
<T.AmbientLight color="#0000ff" intensity={1000} />

<!-- Main light -->
<T.PointLight intensity={2000} position={[4, 100, 4]} color="#76aac8" />

<!-- PCB -->
{#await useGltf('/assets/LCLC.glb') then lclc}
  <T is={lclc.scene} position={[0, y, 0]} scale={10.0} />
  {(lclcScene = lclc.scene)}
{/await}

<h1>asdfasdf</h1>
