:orphan:

NMDAChan
========


NMDAChan: Ligand-gated ion channel incorporating both the Mg block and a GHK calculation for Calcium component of the current carried by the channel. Assumes a steady reversal potential regardless of Ca gradients. Derived from SynChan.

Author:   Upinder S. Bhalla, 2007, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: CMg (type: double, class: NMDAChan)

   [Mg] in mM


.. describe:: Ek (type: double, class: NMDAChan)

   Reversal potential of channel


.. describe:: Gbar (type: double, class: NMDAChan)

   Maximal channel conductance


.. describe:: Gk (type: double, class: NMDAChan)

   Channel conductance variable


.. describe:: ICa (type: double, class: NMDAChan)

   Current carried by Ca ions


.. describe:: Ik (type: double, class: NMDAChan)

   Channel current variable


.. describe:: KMg_A (type: double, class: NMDAChan)

   1/eta


.. describe:: KMg_B (type: double, class: NMDAChan)

   1/gamma


.. describe:: children (type: vector<Id>, class: NMDAChan)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: NMDAChan)

   Class Name of object


.. describe:: condFraction (type: double, class: NMDAChan)

   Fraction of total channel conductance that is due to the passage of Ca
   ions. This is related to the ratio of permeabilities of different ions,
   and is typically in the range of 0.02. This small fraction is largely
   because the concentrations of Na and K ions are far larger than that
   of Ca. Thus, even though the channel is more permeable to Ca, the conductivity
   and hence current due to Ca is smaller.


.. describe:: destFields (type: vector<string>, class: NMDAChan)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: NMDAChan)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: extCa (type: double, class: NMDAChan)

   External concentration of Calcium in millimolar


.. describe:: fieldIndex (type: unsigned int, class: NMDAChan)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: NMDAChan)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: NMDAChan)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: intCa (type: double, class: NMDAChan)

   Internal concentration of Calcium in millimolar.This is the final value
   used by the internal calculations, and may also be updated by the assignIntCa
   message after offset and scaling.


.. describe:: intCaOffset (type: double, class: NMDAChan)

   Offsetfor internal concentration of Calcium in mM, applied _after\_ the
   scaling to mM is done. Applied to values coming in through the assignIntCa
   message. Required because in many models the units of calcium may differ.



.. describe:: intCaScale (type: double, class: NMDAChan)

   Scale factor for internal concentration of Calcium in mM, applied to
   values coming in through the assignIntCa message. Required because in
   many models the units of calcium may differ.


.. describe:: me (type: ObjId, class: NMDAChan)

   ObjId for current object


.. describe:: modulation (type: double, class: NMDAChan)

   Modulation, i.e, scale factor for channel conductance.Note that this
   is a regular parameter, it is not recomputed each timestep. Thus one
   can use a slow update, say, from a molecule pool, to send a message to
   set the modulation, and it will stay at the set value even if the channel
   runs many timesteps before the next assignment. This differs from the
   GENESIS semantics of a similar message,which required update each timestep.



.. describe:: msgIn (type: vector<ObjId>, class: NMDAChan)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: NMDAChan)

   Messages going out from this Element


.. describe:: name (type: string, class: NMDAChan)

   Name of object


.. describe:: normalizeWeights (type: bool, class: NMDAChan)

   Flag. If true, the overall conductance is normalized by the number of
   individual synapses in this SynChan object.


.. describe:: numData (type: unsigned int, class: NMDAChan)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: NMDAChan)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: NMDAChan)

   Parent ObjId for current object


.. describe:: path (type: string, class: NMDAChan)

   text path for object


.. describe:: permeability (type: double, class: NMDAChan)

   Permeability. Alias for Gbar. Note that the mapping is not really correct.
   Permeability is in units of m/s whereas Gbar is 1/ohm. Some nasty scaling
   is involved in the conversion, some of which itself involves concentration
   variables. Done internally.


.. describe:: sourceFields (type: vector<string>, class: NMDAChan)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: tau1 (type: double, class: NMDAChan)

   Decay time constant for the synaptic conductance, tau1 >= tau2.


.. describe:: tau2 (type: double, class: NMDAChan)

   Rise time constant for the synaptic conductance, tau1 >= tau2.


.. describe:: temperature (type: double, class: NMDAChan)

   Temperature in degrees Kelvin.


.. describe:: this (type: 7Neutral, class: NMDAChan)

   Access function for entire object


.. describe:: tick (type: int, class: NMDAChan)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: NMDAChan)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from SynChan:
----------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: NMDAChan)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: NMDAChan)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: NMDAChan)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: NMDAChan)

   Ids of Elements connected this Element on specified field.



Attributes inherited from SynChan:
----------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: ICaOut (type: double, class: NMDAChan)

   Calcium current portion of the total current carried by the NMDAR


.. describe:: IkOut (type: double, class: NMDAChan)

   Channel current. This message typically goes to concenobjects that keep
   track of ion concentration.


.. describe:: channelOut (type: double,double, class: NMDAChan)

   Sends channel variables Gk and Ek to compartment


.. describe:: childOut (type: int, class: NMDAChan)

   Message to child Elements


.. describe:: permeabilityOut (type: double, class: NMDAChan)

   Conductance term going out to GHK object



Attributes inherited from SynChan:
----------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: Vm (type: double, class: NMDAChan)

   Handles Vm message coming in from compartment


.. describe:: activation (type: double, class: NMDAChan)

   Sometimes we want to continuously activate the channel


.. describe:: assignIntCa (type: double, class: NMDAChan)

   Assign the internal concentration of Ca. The final value is computed
   as: intCa = assignIntCa * intCaScale + intCaOffset


.. describe:: getCMg (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCondFraction (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEk (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getExtCa (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGbar (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGk (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getICa (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIk (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIntCa (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIntCaOffset (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIntCaScale (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKMg_A (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKMg_B (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getModulation (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNormalizeWeights (type: vector<bool>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPermeability (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTau1 (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTau2 (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTemperature (type: vector<double>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: NMDAChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: NMDAChan)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: NMDAChan)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: NMDAChan)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: NMDAChan)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: NMDAChan)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: NMDAChan)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: NMDAChan)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: NMDAChan)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: NMDAChan)

   Handles reinit call


.. describe:: setCMg (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setCondFraction (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setEk (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setExtCa (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setGbar (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setGk (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setIntCa (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setIntCaOffset (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setIntCaScale (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setKMg_A (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setKMg_B (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setModulation (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setName (type: string, class: NMDAChan)

   Assigns field value.


.. describe:: setNormalizeWeights (type: bool, class: NMDAChan)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: NMDAChan)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: NMDAChan)

   Assigns field value.


.. describe:: setPermeability (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setTau1 (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setTau2 (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setTemperature (type: double, class: NMDAChan)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: NMDAChan)

   Assigns field value.


.. describe:: setTick (type: int, class: NMDAChan)

   Assigns field value.



Attributes inherited from SynChan:
----------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel (type: void, class: NMDAChan)

   This is a shared message to couple channel to compartment. The first
   entry is a MsgSrc to send Gk and Ek to the compartment The second entry
   is a MsgDest for Vm from the compartment.


.. describe:: ghk (type: void, class: NMDAChan)

   Message to Goldman-Hodgkin-Katz object


.. describe:: proc (type: void, class: NMDAChan)

   Shared message to receive Process message from scheduler



Attributes inherited from SynChan:
----------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

