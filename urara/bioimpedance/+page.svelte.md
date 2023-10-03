---
title: Bioimpedance-Based Pressure Ulcer Sensor 
created: 2022-12-07
tags: ['Electronics', 'Biomedical Engineering']
image: '/bioimpedance/finished.jpg'
summary: electrical impedance tomography implemented from scratch
---
<!-- > reference the files, folders, & report to write this. it really shouldn't take more than an hour.  -->

<!-- <br/> -->

## Introduction

This fall, I took an awesome class called ***Biomedical Instrumentation*** ([ECE 4781](https://ece.gatech.edu/courses/ece4781)) with [Dr. Omar Inan](https://ece.gatech.edu/directory/omer-t-inan). And for the final project, my team built a sensor that detects *subcutaneous* (under-the-skin) pressure ulcers! The golden dots placed hexagonally you see in the green, rectangular PCB are surface electrodes, from which we measure bioimpedance. 

You might think, "Wait, that seems like a lot of electrodes!", and you'd be right. We are using an analog multiplexer (in fact, *four* of them) to quickly switch the routes connected to the terminals of the impedance measurement chip, in order to measure the impedance between all combination of nearest-neighbors (42 measurements in total!) pseudo-simultaneously. Finally, we track the location of each pair along with the recorded values, and then process the data in Python to create these beautiful heatmap visualizations to identify regions where cells are damaged. 
<!-- Isn't that cool?  -->

<!-- ![img](/bioimpedance/electrode-details.jpg) -->
<!-- Electrode details. -->
<!-- <p class="text-center"> Electrode details. </p> -->

<!-- ![img](/bioimpedance/testing-procedure.jpg) -->
<!-- Testing procedure. -->
<!-- <p class="text-center"> Testing procedures. </p> -->

<!-- ![img](/bioimpedance/lotion-test-human.jpg) -->
<!-- Test on human skin with lotion. -->
<!-- <p class="text-center"> Test on human skin with lotion. </p> -->

We built **everything from scratch** aside from the Arduino board and ICs! Isn't that cool?!

### Gallery

<!-- [`TODO` photo gallery module kinda like Hackaday, maybe use mouseovers slight-ish (30%) zoom and grid instead of row-list (that's too naive I don't like)] -->

![img](/bioimpedance/finished_down.png)
<p class="text-center"> Finished sensor on a breadboard. </p>
<br/>
<!-- Finished sensor on a breadboard. -->

![img](/bioimpedance/system-diagram.jpg)
<p class="text-center"> System diagram. </p>
<br/>
<!-- System diagram. -->

![img](/bioimpedance/electrode-details.jpg)
<p class="text-center"> Electrode details. </p>
<br/>
<!-- Electrode details. -->

![img](/bioimpedance/electrical-schematic.jpg)
<p class="text-center"> Electrical schematic. </p>
<br/>
<!-- Electrical schematic. -->

![img](/bioimpedance/accuracy-benchmark.jpg)
<p class="text-center"> Accuracy evaluation of impedance circuit. </p>
<br/>
<!-- Accuracy evaluation of impedance circuit. -->

![img](/bioimpedance/testing-procedure.jpg)
<p class="text-center"> Testing procedure. </p>
<br/>
<!-- Testing procedure. -->

![img](/bioimpedance/burn-test-pig.jpg)
<p class="text-center"> Test on burnt pig skin. </p>
<br/>
<!-- Test on burnt pig skin. -->

![img](/bioimpedance/lotion-test-pig.jpg)
<p class="text-center"> Test on pig skin with lotion. </p>
<br/>
<!-- Test on pig skin with lotion. -->

![img](/bioimpedance/lotion-test-human.jpg)
<p class="text-center"> Test on human skin with lotion. </p>
<br/>
<!-- Test on human skin with lotion. -->

<br/>

# Choosing the Problem

<!-- > shortened problem paragraph, with visuals or graphics to show impact -->

<!-- ### Searching for Impact -->
### Search for Practical Impact

When we started to look for ideas, we realized that most wearable sensors in literature sound really nice on paper but lack practical implications for the medical community. 

For example, the idea of tracking eye movements using *electrooculogram* (EOG; measuring electrical signals from the eye) sounds really cool! But think about it... what are you going to do with it? (And how is it better than just using a camera? Does the benefits outweigh or justify the costs of research, engineering, and testing—and most importantly, the inherent intrusion and risks of a wearable device—on something as sensitive as your eye?) 

### Pressure Ulcers

It's easy to pick a specific niche with an exciting idea, but sometimes there are classes of problems that don't exactly stand out yet nonetheless have a **tremendous** impact due just to the sheer number of people they affect. Tuns out, *pressure ulcers* are exactly that. It is a widely overlooked problem that causes pain, frustrations, and ultimately 60,000 annual deaths in the US alone [1]. 

<!-- [`TODO` infographic of people affected by pressuer ulcers, healthcare costs, etc] -->
<!-- ![img](/bioimpedance/WC-infographic_web.jpg) -->
<div class="flex justify-center items-center"> 
  <img src='./WC-infographic_web.jpg' class='rounded-lg object-center' width='80%'>
</div>
<p class="text-center"> Infographic: the medical impact of pressure ulcers </p>

### Electrical Impedance Tomography

Many viable solutions exist for any given problem. This applies to everything, but is especially true in context of electromechanical sensors. **Electrical impedance tomography** (**EIT**) is one such method. It involves the collection of impedance values across 2D space and creating a *map* that visually identifies regions of interest. Like this:

![img](jcm-08-01176-g001-550.webp)

💡 If you are wondering what *impedance* is -- [it's a complex sibling](https://electricalbaba.com/difference-between-resistance-impedance/) of electrical resistance.

This is great! If you can perform EIT over regions with a high risk for developing pressure ulcers, clinicians will be quickly able to intervene. In fact, this is similar to how subepidermal moisture (SEM) scanners (the industry-standard device for assessing tissue health and detecting pressure ulcers) operate: a human clinician will gently scan across parts of the skin until an abnormal value is detected. 

![img](2022-01-NHS-Supply-Chains.jpg)
<p class="text-center"> Using a SEM scanner. </p>

<!-- As with everything (and especially true in context of electromechanical sensors), many viable ways exist for any given task. We decided to focus on usability in point-of-care scenarios: often, it is not viable (and not at all desirable) to have bulky dedicated equipment that cannot be  -->

### State of the Art & Status Quo

One clear drawback of SEM is the need of manually scanning body parts. Given the large number of patients potentially at risk, it is easy to see that performing regular scans are labor-intensive and costly. 

If you could just wear something—hypothetically, if your standard clothings could integrate these functionalities—cases of undetected pressure ulcers will be extremely rare. 

Unlike SEM scanners, EIT devices in the literature always seemed to involve bulky dedicated benchtop devices which carry out multiplexing and instrumentation functions that are huge in both size and cost. Often, this is not viable (and not at all desirable), since they cannot be brought to hospital rooms, let alone patient households. 

<img src='./status_quo.png' class='object-center' width='100%'>
<p class="text-center"> Existing works of electroimpedance tomography. </p>

### Remote Medicine & Point-of-Care

Note that, remote medicine has recently been on the rise. This is partly due to COVID-19, but also due to the realization that continual monitoring of data allows for better medical diagnosis and decisions, compared to one-off or once-every-X-weeks screening. 

We decided to focus on usability in point-of-care & ubiquitous monitoring scenarios, by creating a complete and portable device that can effectively detect pressure ulcers. 

We wanted to know if these sensors truly required those uber-precise benchtop equipment... or we whether we could recreate all of the necessary functions into a small, portable board to be shipped 




<p class="text-center"> Accuracy evaluation of impedance circuit. </p>




### Scratchboard Sketches

### Project Proposal

<iframe width="100%" height="100%" style="aspect-ratio: 16 / 10;" src="https://docs.google.com/document/d/e/2PACX-1vRnpkEDChd78RSiXLo1_tAOYUIe_-XN_sGwqlwlUdzt8zQGAJaADqF1CG18CNUyS6y900dSWlRwSg5Y/pub?embedded=true"></iframe>


<br/>

# Getting Our Hands Dirty


### The Electrode


### Manufacturing


### Breadboard Circuits



### Data Processing


<br/>

# Results

## Presentation

<iframe width="100%" height="100%" style="aspect-ratio: 16 / 9.8;" src="https://docs.google.com/presentation/d/e/2PACX-1vQc0h_eTMK1sjq0zGPLGE5UVSQshGSlIRqjr1SpSIHWqO5kLFMk4J79imsF5u3aJpI0XhALIPXQocJI/embed?start=false&loop=false&delayms=60000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

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



# References

Citations



Graphics

[1] Maynard, J. (2016, April 6). Infographic: The Financial Impact of Pressure Injuries. Shield HealthCare. Retrieved September 29, 2023, from http://www.shieldhealthcare.com/community/wound/2016/04/06/pressure-ulcers-incidence-mortality-financial-impact/

https://sem-scanner.com/provizio-sem-scanner-single-use-sensors-awarded-onto-nhs-supply-chains-tower-5-pressure-area-care-framework/