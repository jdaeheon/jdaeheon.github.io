---
date: "1 Oct, 2021"
title: "Sonar - Web Auditory Map Generation"
description: "A sensory substitution interface using canny edge detection for BLV individuals' mouse usage"
featured: "true"
thumbnail: "image/auditory-map/2.png"
caption: "Project image depicting a scene from user trial"
link: "web-auditory-map-generation"
type: "research"
---

![The experiment participant is looking around with the low-vision simulator on](/image/auditory-map/2.png)

Sonar is a project aimed at assisting BLV users in terms of navigating a webpage through sound. The initial idea is to provide low-vision individuals guidance when navigating the webpage via mouse. With canny edge detection, Sonar traces out the contour of the web components. Followingly, it creates a sound map of the webpage by matching current cursor coordinates with the light intensity value of the outline.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/auditory-map/1.png" alt="The researcher is guiding the participant" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/auditory-map/3.png" alt="The participant is testing the Sonar using the disability test kit" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div>


Therefore as the low-vision user slides the mouse over the item, one can identify the presence and the size of the web components. By moving the mouse, Sonar provides information about the relative distance between each element. The primary target of Sonar is a people with a low degree of visual impairment, capable of using the mouse. The system substitutes the blind spot within the operation of the mouse.

![An image depicting how the web component transforms into an auditory map using canny edge detection and a Gaussian blur](/image/auditory-map/4.png)

The process initiates with the canny edge detection deriving the intensity gradient given an image. Through thresholding, it efficiently traces out the border of the elements within the image at a low computing cost, making real-time processing possible. Also to enhance the usability, our team implemented a filtering process, smoothing the light intensity change to adjust the alert volume gradually.

![Promotional image of the service Healthier](/image/auditory-map/6.png)

Sonar went through a usability test with 5 participants, using a visual impairment simulator. The test was designed to comparatively analyze the task accomplish speed, among five criteria. Each procedure was rigorously designed to follow a guideline, including an introduction and guidance by the researcher. While the statistical significance was not measured, the result indicated an improvement in the task accomplishment speed, when compared to the unassisted baseline condition. Sonar was awarded the best paper at the [HCI Korea Conference 2022](https://conference.hcikorea.org/hcik2022/creative/awarded_CA.asp).

The main challenge within the project was the implementation of a real-time processing pipeline for image detection. Due to a concern about the possible security vulnerability, generating a real-time stream of the webpage is inhibited by the design of the Chromium engine. By implementing a page capture on a predefined interval, our team was able to create a loophole circumventing the restriction.