---
date: "24 Aug, 2022"
title: "Healthier - A Preemptive Diagnosis Service"
description: "Implemented web 3D interface to assist patient specify their area of symptom"
featured: "true"
thumbnail: "image/healthier/1.png"
caption: "Project image depicting scene from user trial"
link: "healthier"
---

![Design concepts of the Healthier interface](/image/healthier/1.png)

### A service for the patient

Healthier is a student-led start-up project, revolving around the topic of preemptive provision of the diagnosis. The project aimed at providing a logic-based diagnosis to the patients, before they visit the hospital. Thereby the primary object lies within an approachable interface design in which the patients can easily suggest the symptoms they have.

### Design Identification

Within the design of the Healthier, a small group within the team brainstormed an interface that can provide cognitively intuitive ways for patients to specify the symptomatic region without the guidance of the professionals. The idea initially started with an intuition that selecting an area within the object shape of a human body would be the natural way to convey the information.

To implement the idea, the initial prototype was provided as follows. Using a [react-three-fiber]() and [lamina]() (*which is currently deprecated*), the position of the cursor was translated into object space through ray casting. Then, each coordinate was indexed as a state, persisting until the page reloads. Using GLSL programming, each coordinate was transferred to the GPU, giving each vertex a distance to the coordinates within the model space, making the rendering of gradient shading possible. With a time-variant variable, an animation was added to the selection visualization.

![Promotional image of the service Healthier](/image/healthier/2.png)

### Implementation

In the development of the service-ready product, the main challenge of the design was to reduce the load time of the model. Initially, we simplified the shape of the model to reduce the number of the vertex. To weigh the quality of the model, while maintaining the loading speed of the page, two methods were proposed. 

- (1) Texture Baking: Bake the shading information to reduce unnecessary calculations regarding the lighting in the scene.
This was especially important to make the page viable within the mobile development environment. Texture baking helped maintain the quality of the texture while reducing the number of light within the scene

- (2) Smooth Shading: Simulate a curvy surface to each vertex via interpolation on a flat surface. To maintain the page loading speed, suppressing the amount of the vertex within the model was crucial. Yet, as our model was curvilinear for the most part, a reduction in the number of vertices led to substantial degrading within the model quality. Smooth shading helped us to maintain the quality while compressing the model from 4~5mb to less than a megabyte. 

![Image of a prototype interface](/image/healthier/3.png)

### The Gwi-yo-mi

By doing so, our team was able to achieve a novel interface based on WebGL. Named "gwi-yo-mi", meaning a "cutee" in Korean, this interface served as a front face for the project Healthier.

![Image of a body-selection interface including gwi-yo-mi](/image/healthier/4.png)

### Behance 
A link to project behance. Please support our brilliant designers with a solid like! 

<iframe src="https://www.behance.net/embed/project/152390505?ilo0=1" height="100" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>