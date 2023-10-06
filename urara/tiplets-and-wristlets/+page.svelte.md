---
title: TipLets & WristLets
created: 2022-08-01
summary: a hardware platform to help facilitate visual-tactile sensory substitution research
tags: ['Electronics', 'Human-Computer Interaction', 'Assistive Technology']
image: '/tiplets-and-wristlets/MainPhoto_TipLetsWristLets.jpeg'
# [`TODO` render image: a human hand that is wearing both TipLets & WristLets]
---

<br />


# Introduction

`TipLets` & `WristLets` are hardware platforms to help facilitate visual-tactile sensory substitution research. This was created as part of my work as a research intern in Asan Medical Center. 


## Interactive Demonstration

<!-- <div style={{ position: "relative", width: 300, height: 300 }}> -->
<!-- <div style="width: 100%; height: 100%; aspect-ratio 16/9;"> -->
<div width="100%" height="100%" style="aspect-ratio: 16/9;">
    <Canvas>
        <Scene />
    </Canvas>
</div>

<!-- [`TODO` illustrative video] -->
<!-- [`TODO` interactive demo] -->


# The Problem

> Tip: Navigate the slide deck using the arrow keys on your keyboard :)

<iframe 
    width="100%" height="100%" style="border: 1px solid rgba(0, 0, 0, 0.1); aspect-ratio: 16 / 11;"
    src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/9DmVKC26vwMIPolsJf9BGe/TipLets-Problems-Deck?type=design&node-id=1-2&t=VLHdaG4mGOneOb0H-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design&hide-ui=1" 
    allowfullscreen 
/>

<!-- `TODOs`
- conceptual mockup in last portion of slides, aesthetic spec-sheet style & illustrations of expected uses & component names
- foldable text block for text version of slides deck
-  -->

<br/>


# The Process

<!-- ![img](/tiplets-and-wristlets/process_temporary.jpeg) -->

<!-- [`TODO` embedded flowchart w/ mouseover popups & clickable modals] -->

> Tip: Hover your mouse over each stage to see more details :)

<Flowchart />

### 

### 

### Sensory Overload

One of the foundational challenges in any SSD is *sensory overload*. Just like we use the notion of *resolution* (and sometimes *frame rate*) to denote the information density of visual media, different senses have varying degrees of sensory resolutions. We cannot expect a system that naively transmits all information in maximum bandwidth to "just work" -- which is why I started to work on RTVA, a research dashboard containing efficient implementations of modern computer vision algorithms.

In context of VTSS, the **density of mechanosensory receptors** in the skin determine such sensory resolution. Mechanoreceptors are most densely packed in areas such as tongue and fingertips, which makes sense, given that Braille, a [relatively]() successfuly accessibility medium, uses tactile dots that are read via fingertips. 

We decided to use the Braille system as a proxy (or a baseline) of our exploration, using fingertips as the primary interface as well as the six-dot configuration that Braille users are already familiar with. 


### Intelligent Filtering

[`TODO` RTVA is a link]

Real-Time Visual Analyzer (RTVA) is a simple and modular script written in Python that contains inference-optimized implementations of algorithms such as object detection, instance segmentation, holistic edge detection, hand tracking, facial mesh 

### Localization

From a hardware perspective, a TipLet is simply a wireless, battery-powered board with six vibration motors. To let users sense shapes from a "virtual screen" via [spatiotemporal modulation](), we needed a way to quickly and stably track the location of each TipLet. 

This was implemented by using a head-mounted camera that runs a marker tracking as well as a hand tracking algorithm (as a fallback, in cases when the fingertip is temporarily occluded i.e., when user grabs the hand into a fist). 

### Miniaturization

(we wanted it to be small enough to be kind of invisible and not annoying to wear)

### Spatiotemporal Modulation



### Vibrotactile Interfaces



### Final Conceptualization & User Needs

### Wireless Operation

### Component Selection



### Motor Driver

### Electrical Schematic

### Printed Circuit Board (PCB)

### Fabrication/Assembly

### Cost

### Design for Manufacturing

### Firmware

### Testing


<br/>


# The Result

`TODOs`
- photos
- exploded 3D layer diagram: PCB, components, motors,...
- interactive 3D mockups

<br/>


# Technologies

- Python -- 
- OpenCV -- Marker Tracking
- KiCad -- Schematics and PCB Design
- FastAPI -- 
- Bluetooth Low Energy -- 
- PyTorch -- 

<br/>

# In Conclusion

Building `TipLets` and `WristLets`, I directly confronted the product development workflow from start to end: (1) investigating the research literature to identify an academic gap, (2) writing an internal proposal with a conceptual device that considers various user needs, (3) learning about specific technical domains, as well as the desirability and availability of off-the-shelf parts (as this was during the chip shortage brought by COVID-19), (4) implementing the device as a fully-assembled PCB, as well as writing the microcontroller's firmware and PC-side monitoring software, and finally, (5) conducting prototypical experiments --- under guidance of [Dr. Daehan Wi]() in [Asan Medical Center](). 

<!--  `TODO` make this shorter, tap into my literary brain from Hackaday era -->

# The Lessons

- **Begin with the end in mind**: 
- **Take advantage of off-the-shelf**: (to gradually scaffold the complexity)
- **Low-fidelity prototyping saves a lot of time**: 
- **'Unit-test' your hardware**: 

# Mistakes

- **Manufacturability**: There was a lot of trouble soldering everything together for TipLets, because the SSOP-22 was deprecated, leaving X as the only option. Now, after creating the designs, I realized that X was just as difficult to solder as the notorious Y package. After unsuccessfully attempting to solder them manually, I eventually gave up and had to get a quote from a  local PCBA firm, which offered an assembly of two sets for $500 (which was far from ideal). There definitely was a possibility to scrap some SSOP packages off of off-the-shelf breakout boards. 
- 


# Roadmap

- 

<script lang="ts">
	import { Canvas } from '@threlte/core'
	import Scene from './scene.svelte'
    import Flowchart from './flowchart.svelte'
</script>