---
date: "18 Dec, 2022"
title: "Sensory Substitution for Touch Interface"
description: "Conveying the web layout information on the hand skimming over the touch interface for low-vision individuals"
featured: "true"
thumbnail: "image/touch-assist/1.png"
caption: "A system structure of the sensory substitution project"
link: "touch-assist"
type: "research"
---

![A system structure of the sensory substitution project](/image/touch-assist/1.png)

### Suggesting Web Layout Information on Touch 

Sensory substitution for touch interface is a project that lies as an extension to the previous project [Sonar](https://jdaeheon.github.io/projects/web-auditory-map-generation). Based on the idea of auditory map generation, the interface aims let the user scan the touchscreen surface to identify the web layout. As the user slides a finger over the screen, the system provides information about the type, location, and interactability of the web components via sound. 

The project is a proof-of-concept study, providing a rather unstable user experience. Yet, in alignment with previous studies on the interface, it suggests a potential for what performance-optimized machine learning can offer to touchscreen accessibility.

![Two features of the sensory substitution (1) spatial information and (2) element type and count information](/image/touch-assist/4.png)

<br>

### The Information Scope

The project is based on the concept of 'information scope'. Information scope indicates the amount of information available to the user at the moment. Unlike vision, which attains subsidiary information via its periphery, accessibility tools such as screen readers and magnifiers have a narrow information scope. These tools maintain an intense focus on specific areas in the information. For a circumferential inference, the user has to move the information cursor to a specified location, manually. This severely obstructs the effective navigation of the information [1].

![Comparison between the visual field of non-BLV and BLV users](/image/touch-assist/2.png)

> "We see the world through a window equivalent to the size of the fingertip"

A quote from one research by low-vision researchers conveys the idea accurately [2]. The project tackles this problem by expanding the information scope of the screen reader. Through skimming a finger over the screen, the user can generate an latent map of the web interface via system feedback [3]. As users move between different web components, they can measure the distance between two relative to the size of the screen. As the user repeats the action, the system aims to support constructing the firm mental schema. As the user registers the location of information, the efficiency increases.

![An infographic on how a person perceives information structure via vision](/image/touch-assist/3.png)

<br>


### System Implementation

The project relies on two techniques to generate semantic information. (1) The system uses canny edge detection to provide the contour and the count of the web component within the screen. (2) Also, our team utilized a custom convolutional neural network (CNN) model trained on [RICO dataset](https://www.kaggle.com/datasets/onurgunes1993/rico-dataset) to provide semantic tag generation. As the user skims over the web component, the system identifies the component type *(e.g., button, link, image)* and provides a verbal explanation of the content.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/touch-assist/5.png" alt="The researcher is presenting the poster about the sensory substitution" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/touch-assist/6.png" alt="A sample usage featuring touch screen and the finger" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div>

The sensory substitution project was submitted to [Korea Computer Congress 2022](http://www.riss.kr/link?id=A108519636)

<br>

### Reference

- [1] Sahib, Nuzhah Gooda, Anastasios Tombros, and Tony Stockman. "A comparative analysis of the information‐seeking behavior of visually impaired and sighted searchers." Journal of the American Society for Information Science and Technology 63.2 (2012): 377-391.
- [2] O’Modhrain, Sile, et al. "Designing media for visually-impaired users of refreshable touch displays: Possibilities and pitfalls." IEEE transactions on haptics 8.3 (2015): 248-257.
- [3] Ahmed, Faisal, et al. "Accessible skimming: faster screen reading of web pages." Proceedings of the 25th annual ACM symposium on User interface software and technology. 2012.