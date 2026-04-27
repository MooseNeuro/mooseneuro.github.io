~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`Chemical model paths <#TOC>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Things get more involved for paths for reactions.

(1) For starters, at present the molecule names are not obvious. We need a separate interface to even see the reaction scheme, though this will eventually come into this GUI. Thus you have to know ahead of tim    e what are the names of the molecules you want to access.

(2) Reaction systems always live within a chemical compartment defined by their prototype. For example, the molecules in the default Oscillator chem model are:

::

	Oscillator/a
	Oscillator/b
	Oscillator/s

Thus in the examples above we specify the prototype name (Oscillator) and then the molecules beneath it.

Where are molecules placed? This is complicated. Consider the items in the SIGNALING menu, under the Distributions section.

(1) Path: First, all molecules must live within the spatial bounds defined by an electrical compartment. Here you have to put in an electrical compartment path as indicated above.

(2) Location: Second, even within a given electrical compartment, the molecule could be in one of several diffusively coupled locations.

  *  Dendrite: within the cytoplasm of the dendrite.

  * Spine: This must be placed within a spine head

  * PSD: This must be placed within a spine head

  * Endo: This must be placed within a dendrite, and is a series of intracellular compartments. Useful for CICR models.

  * Presyn_spine: This must be placed within a spine head

  * Presyn_dend: This must be placed within a dendrite
