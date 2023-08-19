---
title: PCB-EMG
created: 2021-12-06
summary: 'using cost-effective manufacturing processes to create affordable EMG electrodes'
tags: ['Electronics', 'Human-Computer Interaction', 'Assistive Technology']
image: '/pcb-emg/MainPhoto_PCBEMG.jpeg'
---

# Intro

EMG sensors measure the extremely small voltages that your muscles generate when they are activated. The combination of multiple EMG sensors targeting different muscles with *machine learning* allows you to predict what kinds of motion you are making---and even how much force you are exerting to your muscles (even if there's no visible motion)!---which is something completely unique to the EMG class of sensors. 

`PCB-EMG` aims to be the *Arduino* of EMGs. What this means is that it aims to bring a research-grade technology (that comes with research-grade price tag) to an openly available technology with consumer- and developer-friendly products. How? By 1) dramatically lowering the cost & difficulty of manufacturing processes, and 2) creating a public knowledge base of how exactly they work. One good word for this process is **democratization**, and it is how `Arduino` and `Raspberry Pi` transformed the worlds of electronisc and single-board computing forever---by inviting developers, tinkerers, and hobbyists of all levels to produce all sorts of awesome applications with them---and drove the emergence of the IoT boom. 

I am wildly passionate in human-computer interaction, because I believe that it is *one* area that we have never truly revolutionized (computer mice are as old as computers themselves, and if you think about it, keyboards/typewriters date back to even earlier times!). Visit the [Buxton Gallery]() to see what I mean. 

PCB-EMG consists of three main parts: 1) a low-cost, high-performance electrode, 2) a wristband consisting of multiple electrodes, and 3) a complementary machine learning system to support gesture recognition and hand pose estimation tasks. Let's dive deeper, step by step.

The electrode of PCB-EMG takes advantage of ENIG (electroless nickel plated gold; a surface finish that has become a standard in electronics manufacturing) to produce low-cost yet high-performance EMG electrodes. The viability of this approach has been [previously demonstrated](). The operating specifics of electrodes are surprisnigly complex. For one, they are not electric devices; they are electrochemical devices that actually interact with the 

# Problem

Up until 2020, the field of EMG was full of potential and excitements, thanks to a notable company, [Thalmic Labs](), came out with a product called the Myo Armband that offered the best-in-class performance with a consumer-level price tag of $250. More than X papers have been published so far, using the Myo to create groundbreaking human-computer interaction experiments that were not possible before

There was just one problem: all the pre-existing EMG sensors were too expensive (especially considering that the technology itself is nothing special---it's just some high-precision instrumentation amplifiers, coupled with meh-grade electrodes typical in medical usages), and the literature around how the technology works was very opaque, with almost no public-facing knowledge base that explained how to implement them, and even academic papers skimping on crucial details in equipment and instrumentation methodologies. This was surprising given: 1) the widespread adoption of open-source practices in areas such as software engineering and additive manufacturing machines i.e., 3D printers, and 2) that EMG (or by its full name: electromyography) has been in existence for decades, with papers being published all the way back from 1970s. 


`Graph: existing EMG devices in the market`

I really don't like it when things are unnecessarily expensive, and when markets fail to serve the people it's supposed to serve. There really was no fundamental reason that EMG manufacturers should be charging what they were currently charging (easily upwards of $1,000 per channel) for clinical uses; 

I didn't like it

PCB-EMG was my first "real" electronics project. As such, it meant the most trials-and-error encountered in the process. Working on it, I had to learn how to read datasheets (which is intimidating at first, full of unknown jargons, words of caution and warnings), what a typical electronics design workflow looks like (one big mistake was completing a design before realizing that a crucial component was out of stock for a while!), 

reading these signals, you can actually

millivolt-level electricity that is generated from your muscle

The goal was to explore using cost-effective manufacturing processes to create affordable EMG (electromyography) electrodes that could be used for prosthesis control or assistive technologies.