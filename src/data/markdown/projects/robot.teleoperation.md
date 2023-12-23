---
date: "01 Dec, 2023"
title: "Teleoperation Interface for Robotic Vehicle"
description: "An interface research for autonomous robot teleoperation with focus on positional uncertainty"
featured: "true"
thumbnail: "image/robot-teleoperation/1.jpeg"
caption: "The overiew of the interface"
link: "robot-teleoperation"
type: "research"
---

![The overview of the interface with point cloud viewer](/image/robot-teleoperation/5.jpeg)

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

Uviz also supports an orthographic camera, to assist the observer in accurately measuring the deviation. It implements a custom shader to differentiate each point shape and color (cyan to pink) for easier identification of the distance.

<br>
<iframe width="100%" height="400" src="https://www.youtube.com/embed/VUA8uCPbid4?si=LuZ3STM_L2tZCIoD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Uviz was officially integrated as the robot's positional uncertainty monitoring module for the project described in the video.