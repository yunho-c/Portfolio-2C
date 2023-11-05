---
title: Lowest Complexity Laser Cutter
created: 2020-04-01
tags: ['Mechanical Engineering', 'Electronics']
image: '/LCLC/HackadayProfile5.png'
summary: (WIP) simple, low-cost DIY diode laser machine
flags:
---

## Interactive View

<div width="100%" height="100%" style="aspect-ratio: 16/9;">
    <Canvas>
        <Scene />
    </Canvas>
</div>

## Test Video

<iframe class="rounded-xl" width="100%" height="100%" style="aspect-ratio: 16/9;"  src="https://www.youtube.com/embed/u4tKX-sRrv0" title="Least-Complexity Laser Cutter (LCLC) Test #1: Draw a Crown" frameborder="0" allowfullscreen></iframe>

Original project log (with files) are on [Hackaday](https://hackaday.io/project/169347-lowest-complexity-laser-cutter).

## Background

Lowest Complexity Laser Cutter (LCLC) is a simple, low-cost DIY diode laser machine. 

I have always wanted to use a laser cutter. But without a makerspace/hackerspace near me, it's difficult to access a real laser cutter.

Like 3D printers, there are cheap laser cutters around the market. Generic "K40" machines can be purchased on eBay/Bangood/AliExpress under $400 and require only minor modifications to get started. However, K40s have a small cutting/engraving area for its price, and its safety remains questionable (with CO2 tubes running at ~20kV, albeit not quite enough amps to kill me or you)

This project tries to inherit the intentions of RepRap project, creating an open design to be used and improved by others, especially individual makers or students without access to a laser cutter or a large budget.

It is also a design practice for me in experimenting with 3D printing to compress what would conventionally take multiple parts into a smaller number of parts.

All in all, it's just another laser cutter project!

## Design: LC2D

LC2D, or Lowest Complexity 2D Gantry, refers to the overall frame & drivetrain of LCLC, not including the laser part. You can use the gantry with other things like a whiteboard marker or a laser pointer (for long-exposure shots) or whatever else you want.

### Design Intentions

- Minimal **part count**
- Minimal number of **component variations**
- **Standardized/Unified** "vitamins"

[photo: parts overview]

### Renders

[photo: LC2D whole]
[photo: LC2D corner]
[photo: LC2D y-carriage]
[photo: LC2D x-carriage]


<script lang="ts">
	import { Canvas } from '@threlte/core'
	import Scene from './scene.svelte'
</script>