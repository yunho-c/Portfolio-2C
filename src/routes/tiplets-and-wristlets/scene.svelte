<script lang="ts">
  import { T, useFrame } from '@threlte/core'
  import { OrbitControls, useGltf } from '@threlte/extras'
  // import Bloom from './bloom.svelte'

  let y = 0
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
<!-- <T.OrthographicCamera position={[10, 8, 10]} zoom={40} makeDefault> -->
<T.PerspectiveCamera position={[10, 8, 10]} zoom={4} makeDefault>
  <!-- Controls -->
  <OrbitControls enableDamping />
<!-- </T.OrthographicCamera> -->
</T.PerspectiveCamera>

<!-- Ambient light for ambience -->
<!-- <T.AmbientLight color="#0000ff" intensity={10} /> -->

<!-- Main light -->
<!-- <T.PointLight intensity={6000} position={[4, 10, 4]} color="#76aac8" /> -->
<T.AmbientLight intensity={30} />

<!-- PCB -->
<!-- {#await useGltf('/assets/Render.glb') then pcb} -->
{#await useGltf('/assets/scene.glb') then pcb}
  <!-- {#await useGltf('https://github.com/k2m5t2/assets/blob/master/3d_models/tiplets_wristlets.glb?raw=true') then pcb} -->
  <T is={pcb.scene} position={[-1.5, y, -2]} scale={10.0} /> 
  <!-- position was hardcoded -->
  {(pcbScene = pcb.scene)}
{/await}
