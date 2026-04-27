:orphan:

SeqSynHandler
=============


The SeqSynHandler handles synapses that recognize sequentially ordered input, where the ordering is both in space and time. It assumes that the N input synapses are ordered and equally spaced along a single linear vector.
To do this it maintains a record of recent synaptic input, for a duration of *historyTime*, at a time interval *seqDt*. *SeqDt* is typically longer than the simulation timestep *dt* for the synapse, and cannot be shorter. *SeqDt* should represent the characteristic time of advance of the sequence.
The SeqSynHandler uses a 2-D kernel to define how to recognize a sequence, with dependence both on space and history. This kernel is defined by the *kernelEquation* as a mathematical expression in x (synapse number) and t (time).It computes a vector with the local *response* term for each point along all inputs, by taking a 2-d convolution of the kernel with the history[time][synapse#] matrix.
The local response can affect the synapse in three ways: 1. It can sum the entire response vector, scale by the *sequenceScale* term, and send to the synapse as a steady activation. Consider this a cell-wide immediate response to a sequence that it likes.
2. It do an instantaneous scaling of the weight of each individual synapse by the corresponding entry in the response vector. It uses the *plasticityScale* term to do this. Consider this a short-term plasticity effect on specific synapses.
3. It can do long-term plasticity of each individual synapse using the matched local entries in the response vector and individual synapse history as inputs to the learning rule. This is not yet implemented.
In addition to all these, the SeqSynHandler can act just like a regular synapse, where it responds to individual synaptic input according to the weight of the synapse. The size of this component of the output is scaled by *baseScale*


Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: baseScale (type: double, class: SeqSynHandler)

   Basal scaling factor for regular synaptic activation.


.. describe:: children (type: vector<Id>, class: SeqSynHandler)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: SeqSynHandler)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: SeqSynHandler)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: SeqSynHandler)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: SeqSynHandler)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: history (type: vector<double>, class: SeqSynHandler)

   All entries of history, as a linear vector


.. describe:: historyTime (type: double, class: SeqSynHandler)

   Duration to keep track of history of inputs to all synapses.


.. describe:: idValue (type: unsigned int, class: SeqSynHandler)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: SeqSynHandler)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: kernel (type: vector<double>, class: SeqSynHandler)

   All entries of kernel, as a linear vector. numHist_x_width. Organized
   as successive blocks of 'width' entries.


.. describe:: kernelEquation (type: string, class: SeqSynHandler)

   Equation in x and t to define kernel for sequence recognition


.. describe:: kernelWidth (type: unsigned int, class: SeqSynHandler)

   Width of kernel, i.e., number of synapses taking part in seq.


.. describe:: me (type: ObjId, class: SeqSynHandler)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: SeqSynHandler)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: SeqSynHandler)

   Messages going out from this Element


.. describe:: name (type: string, class: SeqSynHandler)

   Name of object


.. describe:: numData (type: unsigned int, class: SeqSynHandler)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: SeqSynHandler)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numSynapses (type: unsigned int, class: SeqSynHandler)

   Number of synapses on SynHandler. Duplicate field for num_synapse


.. describe:: parent (type: ObjId, class: SeqSynHandler)

   Parent ObjId for current object


.. describe:: path (type: string, class: SeqSynHandler)

   text path for object


.. describe:: plasticityScale (type: double, class: SeqSynHandler)

   Scaling factor for doing plasticity by scaling each synapse by response
   vector


.. describe:: seqActivation (type: double, class: SeqSynHandler)

   Reports summed activation of synaptic channel by sequence


.. describe:: seqDt (type: double, class: SeqSynHandler)

   Characteristic time for advancing the sequence.


.. describe:: sequencePower (type: double, class: SeqSynHandler)

   Exponent for the outcome of the sequential calculations. This is needed
   because linear summation of terms in the kernelmeans that a brief stong
   sequence match is no better than lotsof successive low matches. In other
   words, 12345 is no betterthan 11111. Using an exponent lets us select
   the former.Defaults to 1.0.


.. describe:: sequenceScale (type: double, class: SeqSynHandler)

   Scaling factor for sustained activation of synapse by seq


.. describe:: sourceFields (type: vector<string>, class: SeqSynHandler)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: synapseOrder (type: vector<unsigned int>, class: SeqSynHandler)

   Mapping of synapse input order to spatial order on syn array.Entries
   in this vector are indices which must remain smaller than numSynapses.
   The system will fix up if you mess up. It does not insist on unique mappings,
   but these are desirable as outcome is undefined for repeated entries.



.. describe:: synapseOrderOption (type: int, class: SeqSynHandler)

   How to do the synapse order remapping. This rule stays in place and guarantees
   safe mappings even if the number of synapses is altered. Options: -2:
   User ordering. -1: Sequential ordering, 0 to numSynapses-1. 0: Random
   ordering using existing system seed. >0: Random ordering using seed specified
   by this number Default is -1, sequential ordering.


.. describe:: this (type: 7Neutral, class: SeqSynHandler)

   Access function for entire object


.. describe:: tick (type: int, class: SeqSynHandler)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: SeqSynHandler)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: weightScaleVec (type: vector<double>, class: SeqSynHandler)

   Vector of weight scaling for each synapse



Attributes inherited from SynHandlerBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: SeqSynHandler)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: SeqSynHandler)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: SeqSynHandler)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: SeqSynHandler)

   Ids of Elements connected this Element on specified field.



Attributes inherited from SynHandlerBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: activationOut (type: double, class: SeqSynHandler)

   Sends out level of activation on all synapses converging to this SynHandler



.. describe:: childOut (type: int, class: SeqSynHandler)

   Message to child Elements



Attributes inherited from SynHandlerBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getBaseScale (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getHistory (type: vector<vector<double>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getHistoryTime (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKernel (type: vector<vector<double>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKernelEquation (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKernelWidth (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumSynapse (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNumSynapses (type: vector<unsigned int>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPlasticityScale (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSeqActivation (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSeqDt (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSequencePower (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSequenceScale (type: vector<double>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSynapseOrder (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSynapseOrderOption (type: PSt6vectorIiSaIiEE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWeightScaleVec (type: vector<vector<double>>*, class: SeqSynHandler)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: SeqSynHandler)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: SeqSynHandler)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: SeqSynHandler)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: SeqSynHandler)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: SeqSynHandler)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: SeqSynHandler)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: SeqSynHandler)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: SeqSynHandler)

   Handles 'process' call. Checks if any spike events are due forhandling
   at this timestep, and does learning rule stuff if needed


.. describe:: reinit (type: const ProcInfo*, class: SeqSynHandler)

   Handles 'reinit' call. Initializes all the synapses.


.. describe:: setBaseScale (type: double, class: SeqSynHandler)

   Assigns field value.


.. describe:: setHistoryTime (type: double, class: SeqSynHandler)

   Assigns field value.


.. describe:: setKernel (type: vector<double>, class: SeqSynHandler)

   Assigns field value.


.. describe:: setKernelEquation (type: string, class: SeqSynHandler)

   Assigns field value.


.. describe:: setKernelWidth (type: unsigned int, class: SeqSynHandler)

   Assigns field value.


.. describe:: setName (type: string, class: SeqSynHandler)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: SeqSynHandler)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: SeqSynHandler)

   Assigns field value.


.. describe:: setNumSynapse (type: unsigned int, class: SeqSynHandler)

   Assigns number of field entries in field array.


.. describe:: setNumSynapses (type: unsigned int, class: SeqSynHandler)

   Assigns field value.


.. describe:: setPlasticityScale (type: double, class: SeqSynHandler)

   Assigns field value.


.. describe:: setSeqDt (type: double, class: SeqSynHandler)

   Assigns field value.


.. describe:: setSequencePower (type: double, class: SeqSynHandler)

   Assigns field value.


.. describe:: setSequenceScale (type: double, class: SeqSynHandler)

   Assigns field value.


.. describe:: setSynapseOrder (type: vector<unsigned int>, class: SeqSynHandler)

   Assigns field value.


.. describe:: setSynapseOrderOption (type: int, class: SeqSynHandler)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: SeqSynHandler)

   Assigns field value.


.. describe:: setTick (type: int, class: SeqSynHandler)

   Assigns field value.



Attributes inherited from SynHandlerBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: SeqSynHandler)

   Shared Finfo to receive Process messages from the clock.



Attributes inherited from SynHandlerBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Field Attributes:
-----------------

.. describe:: synapse (type: 7Synapse, class: SeqSynHandler)

   Sets up field Elements for synapse



Attributes inherited from SynHandlerBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------

