<script lang="ts">
  import { T, useFrame } from '@threlte/core'
  import { OrbitControls, useGltf } from '@threlte/extras'
  // import Bloom from './bloom.svelte'

  let y = 2
  let rotation = 0

  // Spooky floating ghost 👻
  function levitate() {
    const time = Date.now() / 1000
    const speed = 1
    const offset = 3
    y = Math.sin(time * speed) + offset
    requestAnimationFrame(levitate)
  }

  // Rotates model on `Y` axis
  useFrame((_, delta) => {
    rotation += delta * 0.4
  })

  // levitate()

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

  let pcbScene
  $: if (pcbScene) inspectMaterialsInScene(pcbScene)
</script>

<!-- Bloom postprocessing effect -->
<!-- <Bloom /> -->

<!-- Orthographic camera -->
<T.OrthographicCamera position={[10, 10, 10]} zoom={40} makeDefault>
  <!-- Controls -->
  <OrbitControls enableDamping />
</T.OrthographicCamera>

<!-- Ambient light for ambience -->
<!-- <T.AmbientLight color="#0000ff" intensity={10} /> -->

<!-- Main light -->
<T.PointLight intensity={20} position={[4, 10, 4]} color="#76aac8" />

<!-- PCB -->
{#await useGltf('/src/static/assets/Render.glb') then pcb}
  <T is={pcb.scene} position={[0, y, 0]} scale={10.0} />
  {(pcbScene = pcb.scene)}
{/await}
