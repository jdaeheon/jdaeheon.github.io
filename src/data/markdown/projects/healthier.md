---
date: "24 Aug, 2022"
title: "Healthier - A Preemptive Diagnosis Service"
description: "A 3D web interface designed to help patients identify and specify the area of their body where symptoms are present"
featured: "true"
thumbnail: "image/healthier/1.png"
caption: "A design concepts of the Healthier interface"
link: "healthier"
type: "service"
---

![A design concepts of the Healthier interface](/image/healthier/1.png)

### A Service for the Patient

Healthier is a student start-up project, suggesting a service for preemptive provision of the diagnosis. The project aimed at providing a logic-based diagnosis to the patients, before the hospital visit. Thereby the primary objective lies within an approachable interface design in which the patients can easily suggest the symptoms they have without verbal communication.

<br>

### Design Implementation

Within the design of the Healthier, a small group within the team brainstormed an interface that can assist patients to intuitively suggest their symptomatic region. The idea initially started with the idea that selecting body parts within the shape of the human body would be the most natural way to convey information.

To implement the idea, we implemented a web-based interactable body shape interface. Using a [react-three-fiber](https://docs.pmnd.rs/react-three-fiber) and [lamina](https://github.com/pmndrs/lamina) (*which is currently deprecated*), we loaded a body model and mapped the cursor position using ray casting. Each cursor position was indexed as a state, persisting until the page reloads. With GLSL, the position was transferred to the GPU, creating gradient shading through vertex distance calculation to the cursor position. With a time-variant variable, the gradient morphed its size giving breathing-like animation.

<br>

![Promotional image of the service Healthier](/image/healthier/2.png)

### Addressing Performance Bottleneck

The main challenge of the interface design was the performance optimization. Initially, to reduce the model load time, we simplified the model shape to minimize the vertex count. Concurrently to weigh the model quality, two methods were implemented. 

- (1) *Texture Baking:* Shaing bake to reduce the lighting calculations within the scene.
This was especially important to make the interface viable in the mobile environment. Texture baking helped maintain the texture quality while reducing the light count.

- (2) *Smooth Shading:* Simulate a curvy surface on a flat surface through shade interpolation. Our body model was mostly curvilinear hence a reduction in vertex count led to substantial quality degrading. Smooth shading helped maintain the model quality while compressing the model size from 4~5mb to less than a megabyte. 

<br>

![Image of a prototype interface](/image/healthier/3.png)

### The Gwi-yo-mi

Starting from the prototype depicted above, our team successfully implemented the 3D body part selection into the service. Named "gwi-yo-mi", meaning a "cutee" in Korean, the interface was deployed as a front face for the project Healthier.

![Image of a body-selection interface including gwi-yo-mi](/image/healthier/4.png)

### Behance 
For further information about the project, please follow the link below and support our brilliant designers with a solid like! 

<iframe src="https://www.behance.net/embed/project/152390505?ilo0=1" height="100" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>