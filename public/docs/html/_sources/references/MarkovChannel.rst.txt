:orphan:

MarkovChannel
=============


MarkovChannel.
It deals with ion channels which can be found in one of multiple states, some of which are conducting. This implementation assumes the occurence of first order kinetics to calculate the probabilities of the channel being found in all states. Further, the rates of transition between these states can be constant, voltage-dependent or ligand dependent (only one ligand species). The current flow obtained from the channel is calculated in a deterministic method by solving the system of differential equations obtained from the assumptions above.

Author:   Vishaka Datta S, 2011, NCBS Bangalore


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Ek (type: double, class: MarkovChannel)

   Reversal potential of channel


.. describe:: Gbar (type: double, class: MarkovChannel)

   Maximal channel conductance


.. describe:: Gk (type: double, class: MarkovChannel)

   Channel conductance variable


.. describe:: Ik (type: double, class: MarkovChannel)

   Channel current variable


.. describe:: Vm (type: double, class: MarkovChannel)

   Membrane voltage.


.. describe:: children (type: vector<Id>, class: MarkovChannel)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: MarkovChannel)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: MarkovChannel)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: MarkovChannel)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: MarkovChannel)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: gbar (type: vector<double>, class: MarkovChannel)

   A row vector containing the conductance associated with each of the open/conducting
   states.


.. describe:: idValue (type: unsigned int, class: MarkovChannel)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: MarkovChannel)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: initialState (type: vector<double>, class: MarkovChannel)

   This is a row vector that contains the probabilities of finding the channel
   in each state at t = 0. The state of the channel is reset to this value
   during a call to reinit()


.. describe:: labels (type: vector<string>, class: MarkovChannel)

   Labels for each state.


.. describe:: ligandConc (type: double, class: MarkovChannel)

   Ligand concentration.


.. describe:: me (type: ObjId, class: MarkovChannel)

   ObjId for current object


.. describe:: modulation (type: double, class: MarkovChannel)

   Modulation, i.e, scale factor for channel conductance.Note that this
   is a regular parameter, it is not recomputed each timestep. Thus one
   can use a slow update, say, from a molecule pool, to send a message to
   set the modulation, and it will stay at the set value even if the channel
   runs many timesteps before the next assignment. This differs from the
   GENESIS semantics of a similar message,which required update each timestep.



.. describe:: msgIn (type: vector<ObjId>, class: MarkovChannel)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: MarkovChannel)

   Messages going out from this Element


.. describe:: name (type: string, class: MarkovChannel)

   Name of object


.. describe:: numData (type: unsigned int, class: MarkovChannel)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: MarkovChannel)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numOpenStates (type: unsigned int, class: MarkovChannel)

   The number of states which are open/conducting.


.. describe:: numStates (type: unsigned int, class: MarkovChannel)

   The number of states that the channel can occupy.


.. describe:: parent (type: ObjId, class: MarkovChannel)

   Parent ObjId for current object


.. describe:: path (type: string, class: MarkovChannel)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: MarkovChannel)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: state (type: vector<double>, class: MarkovChannel)

   This is a row vector that contains the probabilities of finding the channel
   in each state.


.. describe:: this (type: 7Neutral, class: MarkovChannel)

   Access function for entire object


.. describe:: tick (type: int, class: MarkovChannel)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: MarkovChannel)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: MarkovChannel)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: MarkovChannel)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: MarkovChannel)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: MarkovChannel)

   Ids of Elements connected this Element on specified field.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: IkOut (type: double, class: MarkovChannel)

   Channel current. This message typically goes to concenobjects that keep
   track of ion concentration.


.. describe:: channelOut (type: double,double, class: MarkovChannel)

   Sends channel variables Gk and Ek to compartment


.. describe:: childOut (type: int, class: MarkovChannel)

   Message to child Elements


.. describe:: permeabilityOut (type: double, class: MarkovChannel)

   Conductance term going out to GHK object



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: Vm (type: double, class: MarkovChannel)

   Handles Vm message coming in from compartment


.. describe:: getChildren (type: vector<vector<Id>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEk (type: vector<double>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGbar (type: vector<vector<double>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGk (type: vector<double>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIk (type: vector<double>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInitialState (type: vector<vector<double>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLabels (type: vector<vector<string>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLigandConc (type: vector<double>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getModulation (type: vector<double>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumOpenStates (type: vector<unsigned int>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumStates (type: vector<unsigned int>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getState (type: vector<vector<double>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVm (type: vector<double>*, class: MarkovChannel)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: handleLigandConc (type: double, class: MarkovChannel)

   Deals with incoming messages containing information of ligand concentration



.. describe:: handleState (type: vector<double>, class: MarkovChannel)

   Deals with incoming message from MarkovSolver object containing state
   information of the channel.


.. describe:: notifyAddMsgDest (type: ObjId, class: MarkovChannel)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: MarkovChannel)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: MarkovChannel)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: MarkovChannel)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: MarkovChannel)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: MarkovChannel)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: MarkovChannel)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: MarkovChannel)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: MarkovChannel)

   Handles reinit call


.. describe:: setEk (type: double, class: MarkovChannel)

   Assigns field value.


.. describe:: setGbar (type: vector<double>, class: MarkovChannel)

   Assigns field value.


.. describe:: setGk (type: double, class: MarkovChannel)

   Assigns field value.


.. describe:: setInitialState (type: vector<double>, class: MarkovChannel)

   Assigns field value.


.. describe:: setLabels (type: vector<string>, class: MarkovChannel)

   Assigns field value.


.. describe:: setLigandConc (type: double, class: MarkovChannel)

   Assigns field value.


.. describe:: setModulation (type: double, class: MarkovChannel)

   Assigns field value.


.. describe:: setName (type: string, class: MarkovChannel)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: MarkovChannel)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: MarkovChannel)

   Assigns field value.


.. describe:: setNumOpenStates (type: unsigned int, class: MarkovChannel)

   Assigns field value.


.. describe:: setNumStates (type: unsigned int, class: MarkovChannel)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: MarkovChannel)

   Assigns field value.


.. describe:: setTick (type: int, class: MarkovChannel)

   Assigns field value.


.. describe:: setVm (type: double, class: MarkovChannel)

   Assigns field value.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel (type: void, class: MarkovChannel)

   This is a shared message to couple channel to compartment. The first
   entry is a MsgSrc to send Gk and Ek to the compartment The second entry
   is a MsgDest for Vm from the compartment.


.. describe:: ghk (type: void, class: MarkovChannel)

   Message to Goldman-Hodgkin-Katz object


.. describe:: proc (type: void, class: MarkovChannel)

   Shared message to receive Process message from scheduler



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

