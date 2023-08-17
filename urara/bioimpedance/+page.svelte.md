---
title: Bioimpedance-Based Pressure Ulcer Sensor 
created: 2022-12-07
tags: ['Electronics', 'Biomedical Engineering']
image: '/bioimpedance/finished.png'
summary: using electrical impedance tomography [ECE 4781 final project]
---
<br/>

# Introduction

This fall, I took an awesome class called *Biomedical Instrumentation* ([ECE 4781]()) with [Dr. Omar Inan](). And this device is what we built for the final project! The yellow dots placed hexagonally you see in the green, rectangular PCB are surface electrodes, from which we measure bioimpedance (if you are wondering what impedance is -- [it's a complex sibling]() of electrical resistance). 

You might think, "Wait, that seems like *way* too many electrodes!", and you'd be absolutely right. We are using an analog multiplexer (in fact, four of them) to quickly switch the connected terminals of the AD5933 impedance measurement chip to measure the impedance between each nearest neighbor (that's # measurements in total!), tracking the location of each pair with the recorded values, and processing the data in Python to create these awesome heatmap visualizations. Isn't that cool? 

Everything was made from scratch (except for the Arduino board, of course). 

# Photos

[`TODO` photo gallery]

# The Problem

[shortened problem paragraph, with visuals or graphics to show impact]

# The Solution

[`TODO` YC-style super simplistic pitch deck]

[`TODO` foldable text block for text version of slides deck]

## Scratchboard Sketches

## Prototyping Steps

## Why does this matter? (What's the novelty?)

- It's non-invasive,
blah blah blah...

# Final Report

You can read our final report [here](). 

If you have any suggestions or critique, please let me know in the comments or reach out :D

# Technologies

- Bioimpedance
- Multidimensional Interpolation
- KiCad
- Python
- Bluetooth

# What I Learned

# Mistakes

# Roadmap

