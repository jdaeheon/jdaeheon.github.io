---
date: "07 Mar, 2023"
title: "Lighthouse: A Resistive Dial for Screen Reader Navigation"
description: "Providing physical navigational control for low-vision users to enhance learning with the screen reader"
featured: "true"
thumbnail: "image/resistive-dial/1.png"
caption: "The image of the software front page"
link: "resistive-dial"
type: "research"
---

![Photo of a user study conducted](/image/resistive-dial/1.png)

### Improving Screen Reader Control

Lighthouse is a project suggesting a dial-based screen reader control for low-vision users. The project is based on the problem that the users cannot reflect and re-organize the information acquired through screen readers. Lighthouse allows the user to navigate back and forth, index, and search information freely by rotating the dial. Although a similar interface has been suggested, Lighthouse focuses on dynamic reactive feedback within the rotation. 

That is, Lighthouse lets the users themselves create haptic anchors. With a tap, Lighthouse creates haptic anchors in which a user can swiftly move in between. Also, as a user search keywords, the dial creates anchors on the matching keyword positions. By rotating over each anchors, the user can easily identify the desired information without unnecessary listening. For implementation, Lighthouse utilizes the Brushless DC motor. [Brushless DC Motor](https://en.wikipedia.org/wiki/Brushless_DC_electric_motor) allows instantaneous control of motor speed and torque using current pulses, making interaction in precision possible.

<!-- 
to navigate the linear space of the screen reader and map the information to linear space and  While the dial interface has been suggested beforehand, the Lighthouse focuses on dynamic simulation of the force and resistance within the rotation motion. The implementation is based on the Brushless DC Motor. The Lighthouse suggests an improved way to interact and endow control over the information for low-vision users. -->

![Photo of an user study conducted](/image/resistive-dial/2.png)

### Previous Limitations

Previously, a series of research projects have attempted to give more precise control over the screen reader. Two primary approaches that are suggested were (1) mapping the visual information in corresponding plane space and (2) transforming the information to the linear space. The former focuses on the provision of touchable mediums that the user can index by the physical characteristics, such as corners, edges, or protruding surfaces.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/resistive-dial/3.png" alt="Researchers are monitoring the participant behavior via a camera" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/resistive-dial/4.png" alt="The user test room, with TV displaying the Guernica" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div>

Plane space has an advantage as it maps the information on the screen to surface without changes. A user can index by the physical characteristics, such as corners, edges, or protruding surfaces to relative position. While the approach is most intuitive, the challenge lies in its versatility. The approach relies heavily on creating an informational index that is constant and replicable, hence subject to the positional constraint, i.e., the interface should be able to contain all information in a single layout. 

The linear transformation transforms the information linearly and maps each position in a finite line space between the start and end (e.g., the screen reader cursor moves linearly). Through transformation, the user can memorize the information position in linear space. This is known to increase the information navigation speed, notably in situations where the webpage or the document is interweaved with multiple links.

### Radial Transformation

The Lighthouse develops upon the linear transformation and further develops the linear space into radial space. The benefit of radial space is that it is unbounded. Additionally, using Brushless DC motors, Lighthouse provides customizable haptic feedback. The key takeaway is to provide dynamically mapped feedback on rotation so that the user can freely index the information of interest and revisit it anytime. In Lighthouse, these 'haptic anchors' have multiple adjustable attributes including, position, strength, and texture. By combining these attributes, the user can identify information characteristics such as relevancy, importance, and hierarchy.