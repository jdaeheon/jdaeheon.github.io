---
date: "05 Apr, 2022"
title: "Parametric Wave"
description: "A three.js design project simulating the force of a wave using a series of box-shaped geometries"
featured: "true"
thumbnail: "image/parametric-wave/1.png"
caption: "A sample screenshot of the project"
link: "parametric-wave"
type: "design"
---

<iframe src="https://three-wave-proj.vercel.app/" width="100%" height="500" style="border: none; padding: none; margin: none;"></iframe>

> The pattern is randomzied on every refresh

Parametric Wave is a project conducted as a part of a computer graphics class at Sogang University. The project aimed to simulate the oceanic wave, and especially the glitters that appear as the tip of the wave reflects the sunlight at a perpendicular angle to an observer. Using the 6-dof rotation of the box geometry, each surface of the geometry was designed to meet a perpendicular angle between the camera and the light at a calculated interval, reflecting the light to the camera and creating the sparkles.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/parametric-wave/2.png" alt="Overall view of the parametric wave" style="width: 100%; object-fit: cover; height: 250px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/parametric-wave/3.png" alt="Sample image of an antropy accumulation" style="width: 100%;
        object-fit: cover; height: 250px;">
    </div>
</div>

Each geometry has variable heights changing over time, creating an illusion of force accumulation. The mathematical logic behind the wave was implemented with the help of the documentation by the [Nvidia](https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models). The equation consisted of simple trigonometric functions, yet, it was capable of simulating a persuasive visual. A beauty of mathematics! With an additional touch on the materials and the lighting, Parametric Wave visaulizes accumulating entropy of the force, rotating at an angle, with a beautiful gradient on its surface.


