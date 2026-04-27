*************
Introduction
*************

Jardesigner is the latest feature of MOOSE- a web-based platform for coding-free modelling of multiscale neuronal systems. Jardesigner stands for **J**\ avascript **A**\ pp for **R**\ eaction **D**\ iffusion and **E**\lectrical **SIG**\ naling in **NE**\u\ **R**\ ons. It comprises:

 - A format for specifying multiscale models,

 - The MOOSE-based model simulator which loads and runs models in the jardesigner.json format,

 - and a Graphical User Interface to generate and run models using the first two.

.. figure:: ../../../../images/jardesigner_launch.png
  :align: center
  :width: 75%
  :alt: Jardesigner launcher 

*Jardesigner launcher*


Click on the `Launch Jardesigner GUI` button to get directed to the GUI. 



.. figure:: ../../../../images/jardesigner_screenshot.png
  :align: center
  :alt: Jardesigner

*Jardesigner: web-based platform*


It is a derivative of an earlier version, **Rdesigneur** (Reaction Diffusion and Electrical SIGnaling in NEURons), which was designed to build models of biochemical signaling pathways in dendrites and spines, paired with electrical events in neurons. Rdesigneur could assemble models from predefined parts: neuronal morphology, dendritic spines, ion channels, reaction systems, and adaptors for connecting these parts.This allowed it to render complex multiscale models.

All these can now be achieved using the Jardesigner GUI without having to code for it. Jardesigner, like its precursor, is equipped to specify how the model parameters are assigned once the parts have been put together.
It  has options for setting up a 3D model and simulating it. Standard file formats for saving models are available, too.
Using Jardesigner, one can compactly and quickly put together quite complex multiscale models.

The interface can be accessed at `<https://jardesigner.mooseneuro.org>`__
This document explains how to use the Jardesigner GUI to build and run multiscale neuronal models.
