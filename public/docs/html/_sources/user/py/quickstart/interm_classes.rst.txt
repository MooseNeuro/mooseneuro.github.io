*************
MOOSE Classes
*************

.. toctree::
   :maxdepth: 2

Show the message
""""""""""""""""

.. automodule:: showmsg
  :members:
  :no-index:

Time
^^^^

Clocks
""""""

.. automodule:: showclocks
  :members:
  :no-index:

Generating Time Data Table
""""""""""""""""""""""""""

.. automodule:: timetable
  :members:
  :no-index:

Data Entries
^^^^^^^^^^^^

.. automodule:: wildcard
  :members:
  :no-index:

Interpolation
^^^^^^^^^^^^^

2-dimentional interpolation
"""""""""""""""""""""""""""

.. automodule:: interpol2d
   :members:
   :no-index:
.. literalinclude:: ../../../../moose-examples/snippets/interpol2d.py
   :language: python
   :start-after: # block 1 start
   :end-before: # block 1 end 

SymCompartment
^^^^^^^^^^^^^^

.. automodule:: symcompartment
  :members:
  :no-index

PyMoose
^^^^^^^

.. automodule:: traub_naf
   :members:

This is an example showing pymoose implementation of the NaF channel in Traub et al 2005

Author: Subhasis Ray

traub_naf.create_compartment(parent_path, name)[source]
This shows how to use the prototype channel on a compartment.

traub_naf.create_naf_proto()[source]
Create an NaF channel prototype in /library. You can copy it later into any compartment or load a .p file with this channel using loadModel.

This channel has the conductance form:

Gk(v) = Gbar * m^3 * h (V - Ek)
We are using all SI units

traub_naf.do_iclamp(vclamp, iclamp, pid)[source]
Turn on current clamp and turn off voltage clamp

traub_naf.do_vclamp(vclamp, iclamp, pid)[source]
Turn on voltage clamp and turn off current clamp

traub_naf.run_clamp(model_dict, clamp, levels, holding=0.0, simtime=0.1)[source]
Run either voltage or current clamp for default timing settings with multiple levels of command input.

model_dict: dictionary containing the model components -

vlcamp - the voltage clamp amplifier

iclamp - the current clamp amplifier

model - the model container

data - the data container

inject_tab - table recording membrane

command_tab - table recording command input for voltage or current clamp

vm_tab - table recording membrane potential

clamp: string specifying clamp mode, either voltage or current

levels: sequence of values for command input levels to be simulated

holding: holding current or voltage

Returns: a dict containing the following lists of time series:

command - list of command input time series

inject - list of of membrane current (includes injected current) time series

vm - list of membrane voltage time series

t - list of time points for all of the above

traub_naf.run_sim(model, data, simtime=0.1, simdt=1e-06, plotdt=0.0001, solver='ee')[source]
Reset and run the simulation.

model: model container element

data: data container element

simtime: simulation run time

simdt: simulation timestep

plotdt: plotting time step

solver: neuronal solver to use

traub_naf.setup_electronics(model_container, data_container, compartment)[source]
Setup voltage and current clamp circuit using DiffAmp and PID and RC filter

traub_naf.setup_model()[source]
Setup the model and the electronic circuit. Also creates the data container.

.. _quickstart-maths:

Mathematics with MOOSE
^^^^^^^^^^^^^^^^^^^^^^

Harmonic Oscillatory Function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. automodule:: funcRateHarmonicOsc
  :members:

Lotka-Voltera Model
^^^^^^^^^^^^^^^^^^^

.. automodule:: funcReacLotkaVolterra
  :members:

.. automodule:: stochasticLotkaVolterra
  :members:

Vary Concentration with mathematical function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. automodule:: funcInputToPools
  :members:
