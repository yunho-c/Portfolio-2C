---
title: Bioimpedance-Based Pressure Ulcer Sensor 
created: 2022-12-07
tags: ['Electronics', 'Biomedical Engineering']
image: '/bioimpedance/finished.jpg'
summary: electrical impedance tomography implemented from scratch
---
> reference the files, folders, & report to write this. it really shouldn't take more than an hour. 

<br/>

# Introduction

This fall, I took an awesome class called *Biomedical Instrumentation* ([ECE 4781]()) with [Dr. Omar Inan](). And my team built a sensor that detects subcutaneous (under-the-skin) pressure ulcers for our final project! The golden dots placed hexagonally you see in the green, rectangular PCB are surface electrodes, from which we measure bioimpedance (if you are wondering what impedance is -- [it's a complex sibling]() of electrical resistance). 

You might think, "Wait, that seems like too many electrodes!", and you'd be right. We are using an analog multiplexer (in fact, *four* of them) to quickly switch the routes connected to the terminals of the impedance measurement chip, in order to measure the impedance between combination of nearest-neighbors (that's 42 measurements in total!) In addition, we track the location of each pair when saving the recorded values, and then  process the data in Python to create these awesome heatmap visualizations. Isn't that cool? 

![img](/bioimpedance/electrode-details.jpg)
<!-- Electrode details. -->
<p class="text-center"> Electrode details. </p>

![img](/bioimpedance/testing-procedure.jpg)
<!-- Testing procedure. -->
<p class="text-center"> Testing procedures. </p>

![img](/bioimpedance/lotion-test-human.jpg)
<!-- Test on human skin with lotion. -->
<p class="text-center"> Test on human skin with lotion. </p>

We made everything from scratch (except for the Arduino board and ICs, of course). 

# Photos

[`TODO` photo gallery module kinda like Hackaday, maybe use mouseovers slight-ish (30%) zoom and grid instead of row-list (that's too naive I don't like)]

![img](/bioimpedance/finished_down.png)
Finished sensor on a breadboard.

![img](/bioimpedance/system-diagram.jpg)
System diagram.

![img](/bioimpedance/electrode-details.jpg)
Electrode details.

![img](/bioimpedance/electrical-schematic.jpg)
Electrical schematic.

![img](/bioimpedance/accuracy-benchmark.jpg)
Accuracy evaluation of impedance circuit.

![img](/bioimpedance/testing-procedure.jpg)
Testing procedure.

![img](/bioimpedance/burn-test-pig.jpg)
Test on burnt pig skin.

![img](/bioimpedance/lotion-test-pig.jpg)
Test on pig skin with lotion.

![img](/bioimpedance/lotion-test-human.jpg)
Test on human skin with lotion.

<br/>

# Choosing the Problem

> shortened problem paragraph, with visuals or graphics to show impact

### Search for Impact

When we started looking for ideas for the final project, we realized that most wearable sensors in the literature sounded nice on paper but had little implications for the medical community. For example, the idea of tracking eye movements using EOG (electrooculogram; think ECG/EMG but for the eye!) sounds nice, initially... But what are you really going to do with it? (And how is it better than just using a camera? Does the benefits outweigh or justify the costs of engineering and testing?) 

It's easy to pick a specific niche with an exciting idea, but sometimes there are also problems that don't exactly stand out, but nonetheless have a tremendous impact due just to the sheer number of people they affect. Tuns out, *pressure ulcers* are exactly that. It is a widely overlooked problem that causes pain, frustrations, and even tens of thousands of deaths in the US alone [1]. 

[`TODO` infographic of people affected by pressuer ulcers, healthcare costs, etc]

### Status Quo

As with everything (and especially true in context of electromechanical sensors), many viable ways exist for any given task. We decided to focus on usability in point-of-care scenarios: often, it is not viable (and not at all desirable) to have bulky dedicated equipment that cannot be 

### Scratchboard Sketches

<br/>

# Getting Our Hands Dirty

### The Electrode


### Manufacturing

### Data Processing


<br/>

# Results

## Presentation

<iframe width="100%" height="100%" style="aspect-ratio: 16 / 10;" src="https://docs.google.com/presentation/d/e/2PACX-1vQc0h_eTMK1sjq0zGPLGE5UVSQshGSlIRqjr1SpSIHWqO5kLFMk4J79imsF5u3aJpI0XhALIPXQocJI/embed?start=false&loop=false&delayms=60000" frameborder="0"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Report

You can read our final report [here](). 

If you have any suggestions or critique, please let me know in the comments or reach out :D

### Key Takeaways

**Why does this matter? (What's the novelty?)**

- It's non-invasive,
blah blah blah...


# Technologies

- Bioimpedance
- Multidimensional Interpolation
- KiCad
- Python
- Bluetooth

# What I Learned

# Mistakes

# Roadmap

