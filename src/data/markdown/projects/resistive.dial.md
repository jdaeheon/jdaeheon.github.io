---
date: "07 Mar, 2023"
title: "Lighthouse: A Resistive Dial for Screen Reader Navigation"
description: "A research project about the rotary mapping of linear information for better navigation"
featured: "true"
thumbnail: "image/resistive-dial/1.png"
caption: "The image of the software front page"
link: "resistive-dial"
type: "research"
---

![Photo of an user study conducted](/image/resistive-dial/1.png)

Lighthouse is a project that suggests dial-based control over the current screen reader interface. The project is based on the idea that the current screen reader lacks a methodology for users to re-organize the information acquired through audio. While the dial interface has been suggested beforehand, the Lighthouse focuses on dynamic simulation of the force and resistance within the rotation motion. The implementation is based on the Brushless DC Motor. The Lighthouse suggests an improved way to interact and endow control over the information for low-vision users.

![Photo of an user study conducted](/image/resistive-dial/2.png)

Based on the accounts of low-vision users, a series of researchers have attempted to give more precise control over the screen reader. Two primary approaches that are suggested are (1) mapping the visual information in 2-dimensional space and (2) transforming the information to the linear space of the audio. The former focuses on the provision of touchable mediums that the user can index by the physical characteristics, such as corners, edges, or protruding surfaces.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/resistive-dial/3.png" alt="Researchers are monitoring the participant behavior via a camera" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/resistive-dial/4.png" alt="The user test room, with TV displaying the Guernica" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div>

While such an approach is most intuitive, the challenge lies in its versatility. The approach relies heavily on creating an informational index that is constant and replicable, hence subject to the positional constraint (i.e.) the interface should be able to contain all information in a single layout. The second approach focuses on the linear transformation of the visual information. Through transformation, the user can memorize the information hierarchy in linear space. This is known to increase the information navigation speed, notably in situations where the webpage or the document is interweaved with multiple links.

The Lighthouse focuses on this aspect of the approach and further develops the linear space into radial space. The benefit of radial space is that it is unbounded. The key takeaway is to provide dynamically mapped feedback on rotation so that the user can freely index the information of interest and revisit it anytime. Additionally, by employing the language model, the Lighthouse will further provide an automatic indexing and hierarchical transformation of the text. 