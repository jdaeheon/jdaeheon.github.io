---
date: "01 Dec, 2023"
title: "Teleoperation Interface for Robotic Vehicle"
description: "An engineering/research project about robot teleoperation with focus on uncertainty"
featured: "true"
thumbnail: "image/robot-teleoperation/1.jpeg"
caption: "The overiew of the interface"
link: "robot-teleoperation"
type: "research"
---

![The overview of the interface with point cloud viewer](/image/robot-teleoperation/0.jpeg)

Uviz is a robot positional awareness visualization interface for monitoring the autonomous robot in teleoperation settings. The primary role of Uviz is to let the researcher correctly understand how the robot is currently perceiving its position regarding the situational context. In an implementation, Ubiz addresses two main challenges. (1) Versatile interface for real-time and in-depth monitoring and (2) cost-effective visualization considering limited network environment.

Foremost, to let the researchers interchange the information in view, Uviz adopts interface modularization. Uviz modules are easily added and removed by the researcher's monitoring needs with its ROS(Robot Operating System) subscription service in the Python backend. Followingly, in consideration of the limited network bandwidth of remote operation settings, Uviz reflects the effective visualization metaphor. These metaphors aim to augment the situational perception of the researcher with a minimal set of information.

![The overview of the interface with point cloud viewer](/image/robot-teleoperation/1.jpeg)

The close-up view of the interface shows how Uviz shows different types of information simultaneously through modularization. The large panel on the left shows the visualization of the robot lidar. The three panels on the right show how the robot understands its current position in terms of optimization, spatial uncertainty, and orientation. Each colored dot in the panels represents the estimates of predictive models. These panels can freely be moved, deleted, and resized. 

The idea of interface modularization is prevalent in autonomous car research.
Yet, the distinctive feature of Uviz is that it implements the concept using  [drag and drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API), leveraging the browser's native animation.
Based on the API, Uviz supports interactive animations such as drag-and-drop and overlap-to-remove for each module window.

![A screenshot with modules in each block](/image/robot-teleoperation/2.jpeg)

The image is an example of the modules revealing positional estimation variables in different visualization methods. Uviz combines Canvas, SVG, and MediaStream (WebRTC) in each module to achieve each visualization method. Additionally, Uviz utilizes the D3.js interpolation to provide a smooth animation experience.

![A point cloud sensor calibration](/image/robot-teleoperation/3.jpeg)

Additionally, Uviz supports a lidar-based position calibration. It overlaps two point clouds for the observer to accurately measure how the robot is understanding position. By comparing the deviation between the point cloud currently scanned and the point cloud pre-recorded on the estimated position, the researcher can accurately estimate the size of the estimation error. Uviz illustrates the error size by color gradient, in which red indicates an increase in deviation, to help the observer.


![A point cloud sensor calibration, in orthographic camera](/image/robot-teleoperation/4.jpeg)

Uviz also supports an orthographic camera, to assist the observer in accurately measuring the deviation. And it implements a custom shader to differentiate the point shape for easier discriminiation.

<!-- The conversational audio guide is an experimental project about the collaborative interaction between humans and AI agents in viewing artwork. It aims to understand how AI can assist humans in constructivist learning, cultivating a more lightweight yet effective way of viewing the artwork. From an observation of how the museum visitors behave within the exhibitory setting, the conversational audio guide started with an easy question *"Can the AI be an enjoyable companion who brings a theather-like experience to the solemn environment primarily known as the White Box?"* Through the demonstration of the Conversational audio guide, our team was able to see a variety of expectations given the concept from the participants and the corresponding various interactions. The conversational audio guide, primarily through the demonstration of its potential to imitate the well-known figure, suggests a possibility that lies within the narrative presentation of education via AI. -->
<!-- 
<div style="display: flex;">
    <div style="flex: 1; padding: 5px;">
        <img src="/image/conversational-guide/2.png" alt="Researchers are monitoring the participant behavior via a camera" style="width: 100%; object-fit: cover; height: 300px;">
    </div>
    <div style="flex: 1; padding: 5px;">
        <img src="/image/conversational-guide/3.png" alt="The user test room, with TV displaying the Guernica" style="width: 100%;
        object-fit: cover; height: 300px;">
    </div>
</div> -->

<!-- The study, we found that users had a high level of expectation given the idea of the conversational audio guide. It was assumed to give them a personalized experience with a degree of social interaction. The characterized agent has room for potential, as it can bring in a role-play-like aspect to the education. We hope to further extend the knowledge over the characterized agent, and the conversational audio guide is a proof-of-concept suggesting various implications within the direction. -->
