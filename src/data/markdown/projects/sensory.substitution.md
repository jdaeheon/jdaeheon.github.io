---
date: "18 Dec, 2022"
title: "Sensory Substitution for Touch Interface"
description: "A research project on sensory substitution of the touch interface for BLV users"
featured: "true"
thumbnail: "image/touch-assist/1.png"
caption: "Project image depicting scene from user trial"
link: "touch-assist"
type: "research"
---

![Promotional image of the service Healthier](/image/touch-assist/1.png)

Sensory substitution for touch interface is a project that lies as an extension to the previous project Sonar. Extending the idea of auditory map generation, the interface aims to provide touch assistance to BLV users. It helps the users to identify the semantic information of the objects on the screen. As the finger slides over the screen, the application provides information about the type, location, and interactability of the object via sound. The project is a proof-of-concept study, providing a rather unstable user experience. Yet, in alignment with previous studies on the interface, it suggests a potential for what performance-optimized machine learning can offer to touch accessibility.

![Promotional image of the service Healthier](/image/touch-assist/2.png)

The initial problem that the project stems from is the notion of 'information scope'. Information scope indicates the amount of information available to the user, given a time point. Unlike vision, which attains subsidiary information via its periphery, accessibility tools such as screen readers and magnifier lacks the feature. These tools maintain focus on specific areas in the information. For a circumferential inference, the user has to move the information cursor to a specified location, manually, to view desired information.

![Promotional image of the service Healthier](/image/touch-assist/3.png)

> "We see the world through a window equivalent to the size of the fingertip"

A quote from one research conducted by BLV researchers conveys the idea accurately. The project tackles this problem and challenges to expand the information scope of the screen reader. By scanning over the screen, the user can generate a logical map of the interface through its vibratory and auditory feedback. As users move between different types of information, they can relatively measure the distance to the size of the screen. Therefore, when the action is repeated, the user can move the cursor instantly with confidence. As the user registers the location of information, movement between each piece of information is made easy.

![Promotional image of the service Healthier](/image/touch-assist/4.png)


Following the project Sonar, the study relies on canny edge detection to generate an auditory map. Moreover, our team implemented a custom-trained vision model that can identify the component type via the image. The model is based on previous studies on UI generation and semantic tag generation. As the user touches a certain component, the system identifies the component type (e.g.) button, link, or image, and provides a verbal explanation of the content.

<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/touch-assist/5.png" alt="Image 2" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/touch-assist/6.png" alt="Image 3" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div>

The sensory subsitution was submitted as a paper to Korea Computer Congress 2022.