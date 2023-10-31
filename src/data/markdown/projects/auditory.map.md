---
date: "1 Jan, 2022"
title: "Sonar - Web Auditory Map Generation"
description: "Utilized boundary detection for auditory map generation for BLV."
featured: "true"
thumbnail: "image/auditory-map/2.png"
caption: "Project image depicting scene from user trial"
link: "web-auditory-map-generation"
---

![Promotional image of the service Healthier](/image/auditory-map/2.png)

Sonar is a project aimed at assisting BLV users in terms of navigating a webpage through sound. The initial idea is based on the classic algorithm mainly known as a canny edge detection. Given information about the edges of the image, the Sonar creates a sound map of the webpage by matching the cursor coordinates with the light intensity value of the processed webpage image. The user, by moving the cursor throughout the screen, can easily locate the existence of the element within the page. The Sonar is aimed to support BLV users with a low degree of visual impairment, making the cursor usage more viable by substituting the blindfolded areas within the sight.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/auditory-map/1.png" alt="Image 2" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/auditory-map/3.png" alt="Image 3" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div>

The canny edge detection, through a Gaussian filter, derives an intensity gradient given an image. Through thresholding, it efficiently traces out the border of the elements within the image at a low computing cost, making real-time processing possible. Also to enhance the usability, our team implemented a filtering process, smoothing the light intensity change to adjust the alert volume gradually.

![Promotional image of the service Healthier](/image/auditory-map/6.png)

Sonar went through a usability test with 5 participants, using a visual impairment simulator. The test was designed to comparatively analyze the task accomplish speed, among five criteria. Each procedure was rigorously designed to follow a guideline, including an introduction and guidance by the researcher. While the statistical significance was not measured, the result indicated an improvement in the task accomplishment speed, when compared to the unassisted baseline condition. Sonar was awarded the best paper at the [HCI Korea Conference 2022](https://conference.hcikorea.org/hcik2022/creative/awarded_CA.asp).

The main challenge within the project was the implementation of a real-time processing pipeline for image detection. Due to a concern about the possible security vulnerability, generating a real-time stream of the webpage is inhibited by the design of the Chromium engine. By implementing a page capture on a predefined interval, our team was able to create a loophole circumventing the restriction.