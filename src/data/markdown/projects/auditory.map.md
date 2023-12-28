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

### Providing cues for mouse navigation

Sonar is a project aimed at assisting low-vision users' web navigation through sound. It provides a guidance on component location and size. With canny edge detection, Sonar traces out the contour of the web components. Followingly, it creates a sound map of the webpage by matching current cursor coordinates with the light intensity value of the contour.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/auditory-map/1.png" alt="The researcher is guiding the participant" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/auditory-map/3.png" alt="The participant is testing the Sonar using the disability test kit" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div>


Therefore as the low-vision user slides the mouse over the item, Sonar conveys the presence and the size of the web components. Additionally, the user can grasp information about the relative distance between each element. The primary target of Sonar is a people with a low degree of visual impairment, capable of using the mouse. The system substitutes the blind spot within the navigation of the webpage, lowering the need for sequentially iterating over the web components [1].

<br>

### Canny Edge Detection Pipeline

The process initiates with the canny edge detection deriving the intensity gradient given an image. Through thresholding, it efficiently traces out the border of the elements within the image at a low computing cost, making real-time processing possible. Also to enhance the usability, our team implemented a filtering process, smoothing the light intensity change to adjust the alert volume gradually.

![An image depicting how the web component transforms into an auditory map using canny edge detection and a Gaussian blur](/image/auditory-map/4.png)


### A Usability Test

Within the project, we conducted a usability test with 5 participants using a visual impairment simulator. The test was designed to comparatively analyze the task accomplish speed with five criteria. Each procedure was pre-specified with guidelines, including an introduction and guidance by the researcher. While the statistical significance was not measured we observed an increase in completion speed compared to the baseline condition.

![Usability testing result for 5 participants. While most participants perceived the task as challenging, they also acknowledged that the interface was helping in conducting the task](/image/auditory-map/6.png)

The main technical challenge within the project was the implementation of a real-time processing of the user screen. Due to the Chrome security policy, generating a real-time stream of the webpage is inhibited by the design. Therefore, our team created an interval page capture to circumvent the guidelines.

<br>

### Presentation at HCIK

Sonar was awarded the best paper at the [HCI Korea Conference 2022](https://conference.hcikorea.org/hcik2022/creative/awarded_CA.asp).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/XyCS2OWlWWQ?si=VfEpGMYsO3O3ve8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br>
<br>

### Reference

- [1] Borodin, Yevgen, et al. "More than meets the eye: a survey of screen-reader browsing strategies." Proceedings of the 2010 International Cross Disciplinary Conference on Web Accessibility (W4A). 2010.