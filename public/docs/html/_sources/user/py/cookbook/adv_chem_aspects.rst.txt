***************
Simple Examples
***************
.. hidden-code-block:: reStructuredText
   :label: How to run these examples

   Each of the following examples can be run by clicking on the green source button
   on the right side of each example, and running from within a ``.py`` python file
   on a computer where moose is installed.

   Alternatively, all the files mentioned on this page can be found in the main
   moose directory. They can be found under 

       (...)/moose/moose-examples/snippets

   They can be run by typing 

       $ python filename.py

   in your command line, where filename.py is the python file you want to run.

   All of the following examples show one or more methods within each python file.
   For example, in the ``cubeMeshSigNeur`` section, there are two blue tabs
   describing the ``cubeMeshSigNeur.createSquid()`` and ``cubeMeshSigNeur.main()``
   methods.

   The filename is the bit that comes before the ``.`` in the blue boxes, with
   ``.py`` added at the end of it. In this case, the file name would be
   ``cubeMeshSigNeur.py``. 

Models' Demonstration
---------------------

Oscillation Model
^^^^^^^^^^^^^^^^^

.. automodule:: repressillator
   :members:
   :no-index:

.. automodule:: relaxationOsc
   :members:
   :no-index:


Model of bidirectional synaptic plasticity
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[showing bistable chemical switch]

.. automodule:: bidirectionalPlasticity
   :members:
   :no-index:

Reaction Diffusion Models
-------------------------

The MOOSE design for reaction-diffusion is to specify one or
more cellular 'compartments', and embed reaction systems in each of them.

A 'compartment', in the context of reaction-diffusion, is used in the
cellular sense of a biochemically defined,
volume restricted subpart of a cell. Many but not all compartments
are bounded by a cell membrane, but biochemically the membrane itself
may form a compartment. Note that this interpretation differs from that
of a 'compartment' in detailed electrical models of neurons.

A reaction system can be loaded in from any of the supported MOOSE
formats, or built within Python from MOOSE parts.

The computations for such models are done by a set of objects:
Stoich, Ksolve and Dsolve. Respectively, these handle the model
reactions and stoichiometry matrix, the reaction computations for
each voxel, and the diffusion between voxels. The 'Compartment' specifies
how the model should be spatially discretized.

[Reaction-diffusion + transport in a tapering cylinder]

.. automodule:: cylinderDiffusion
   :members:
   :no-index:

.. automodule:: cylinderMotor
   :members:
   :no-index:

.. automodule:: gssaCylinderDiffusion
   :members:
   :no-index:

Neuronal Diffusion Reaction
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. automodule:: rxdFuncDiffusion
   :members:
   :no-index:

.. automodule:: rxdReacDiffusion
   :members:
   :no-index:

.. automodule:: rxdFuncDiffusionStoch
   :members:
   :no-index:

A Turing Model
--------------

.. automodule:: TuringOneDim
   :members:
   :no-index:

Reaction Diffusion in Neurons
-----------------------------

.. automodule:: reacDiffConcGradient
   :members:
   :no-index:

.. automodule:: reacDiffBranchingNeuron
   :members:
   :no-index:

.. automodule:: reacDiffSpinyNeuron
   :members:
   :no-index:

.. automodule:: diffSpinyNeuron
   :members:
   :no-index:

Transport in branching dendritic tree
-------------------------------------

.. figure:: ../../../images/reacDiffBranchingNeuron.png
   :alt: Pseudo-3-D rendition of branching neuron and the concs in it.


.. automodule:: transportBranchingNeuron
   :members:
   :no-index:
