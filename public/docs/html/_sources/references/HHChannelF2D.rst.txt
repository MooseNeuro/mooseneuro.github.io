:orphan:

HHChannelF2D
============


HHChannelF2D: Hodgkin-Huxley type voltage-gated Ion channel. Something like the old tabchannel from GENESIS, but also presents a similar interface as hhchan from GENESIS.

Author:   Niraj Dudani, 2009, NCBS, Updated Upi Bhalla, 2011


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Ek (type: double, class: HHChannelF2D)

   Reversal potential of channel


.. describe:: Gbar (type: double, class: HHChannelF2D)

   Maximal channel conductance


.. describe:: Gk (type: double, class: HHChannelF2D)

   Channel conductance variable


.. describe:: Ik (type: double, class: HHChannelF2D)

   Channel current variable


.. describe:: Xindex (type: string, class: HHChannelF2D)

   String specifying input variable assignment for X gate. This tells the
   channel which input (dest field) to use for which parameter in the gate
   equations. It can take the following string values: "VOLT_INDEX": use
   only voltage input received via dest field 'Vm' (assigned to the `v`
   variable in the equations). "C1_INDEX": use only concentration input
   received via dest field 'concen' (assigned to `c` variable in the equations).
   "C2_INDEX": use only concentration input received via dest field 'concen2'
   (assigned to `c` variable in the equations) "VOLT_C1_INDEX": assign voltage
   input 'Vm' to `v` and concentration input 'concen' to `c` "VOLT_C2_INDEX":
   assign voltage input 'Vm' to `v` and concentration input 'concen2' to
   `c` "C1_C2_INDEX": assign concentration input 'concen' to `v` and concentration
   input 'concen2' to `c`


.. describe:: Xpower (type: double, class: HHChannelF2D)

   Power for X gate


.. describe:: Yindex (type: string, class: HHChannelF2D)

   String specifying input variable assignment for Y gate. This tells the
   channel which input (dest field) to use for which parameter in the gate
   equations. It can take the following string values: "VOLT_INDEX": use
   only voltage input received via dest field 'Vm' (assigned to the `v`
   variable in the equations). "C1_INDEX": use only concentration input
   received via dest field 'concen' (assigned to `c` variable in the equations).
   "C2_INDEX": use only concentration input received via dest field 'concen2'
   (assigned to `c` variable in the equations) "VOLT_C1_INDEX": assign voltage
   input 'Vm' to `v` and concentration input 'concen' to `c` "VOLT_C2_INDEX":
   assign voltage input 'Vm' to `v` and concentration input 'concen2' to
   `c` "C1_C2_INDEX": assign concentration input 'concen' to `v` and concentration
   input 'concen2' to `c`


.. describe:: Ypower (type: double, class: HHChannelF2D)

   Power for Y gate


.. describe:: Zindex (type: string, class: HHChannelF2D)

   String specifying input variable assignment for Y gate. This tells the
   channel which input (dest field) to use for which parameter in the gate
   equations. It can take the following string values: "VOLT_INDEX": use
   only voltage input received via dest field 'Vm' (assigned to the `v`
   variable in the equations). "C1_INDEX": use only concentration input
   received via dest field 'concen' (assigned to `c` variable in the equations).
   "C2_INDEX": use only concentration input received via dest field 'concen2'
   (assigned to `c` variable in the equations) "VOLT_C1_INDEX": assign voltage
   input 'Vm' to `v` and concentration input 'concen' to `c` "VOLT_C2_INDEX":
   assign voltage input 'Vm' to `v` and concentration input 'concen2' to
   `c` "C1_C2_INDEX": assign concentration input 'concen' to `v` and concentration
   input 'concen2' to `c`


.. describe:: Zpower (type: double, class: HHChannelF2D)

   Power for Z gate


.. describe:: children (type: vector<Id>, class: HHChannelF2D)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: HHChannelF2D)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: HHChannelF2D)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: HHChannelF2D)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: HHChannelF2D)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: HHChannelF2D)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HHChannelF2D)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: HHChannelF2D)

   ObjId for current object


.. describe:: modulation (type: double, class: HHChannelF2D)

   Modulation, i.e, scale factor for channel conductance.Note that this
   is a regular parameter, it is not recomputed each timestep. Thus one
   can use a slow update, say, from a molecule pool, to send a message to
   set the modulation, and it will stay at the set value even if the channel
   runs many timesteps before the next assignment. This differs from the
   GENESIS semantics of a similar message,which required update each timestep.



.. describe:: msgIn (type: vector<ObjId>, class: HHChannelF2D)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HHChannelF2D)

   Messages going out from this Element


.. describe:: name (type: string, class: HHChannelF2D)

   Name of object


.. describe:: numData (type: unsigned int, class: HHChannelF2D)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HHChannelF2D)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HHChannelF2D)

   Parent ObjId for current object


.. describe:: path (type: string, class: HHChannelF2D)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: HHChannelF2D)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: HHChannelF2D)

   Access function for entire object


.. describe:: tick (type: int, class: HHChannelF2D)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: HHChannelF2D)

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

.. describe:: isA (type: string,bool, class: HHChannelF2D)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: HHChannelF2D)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HHChannelF2D)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HHChannelF2D)

   Ids of Elements connected this Element on specified field.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: IkOut (type: double, class: HHChannelF2D)

   Channel current. This message typically goes to concenobjects that keep
   track of ion concentration.


.. describe:: channelOut (type: double,double, class: HHChannelF2D)

   Sends channel variables Gk and Ek to compartment


.. describe:: childOut (type: int, class: HHChannelF2D)

   Message to child Elements


.. describe:: permeabilityOut (type: double, class: HHChannelF2D)

   Conductance term going out to GHK object



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: Vm (type: double, class: HHChannelF2D)

   Handles Vm message coming in from compartment


.. describe:: concen (type: double, class: HHChannelF2D)

   Incoming message from Concen object to specific conc to useas the first
   concen variable


.. describe:: concen2 (type: double, class: HHChannelF2D)

   Incoming message from Concen object to specific conc to useas the second
   concen variable


.. describe:: getChildren (type: vector<vector<Id>>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEk (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGbar (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGk (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIk (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getModulation (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumGateX (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNumGateY (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNumGateZ (type: vector<unsigned int>*, class: HHChannelF2D)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXindex (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXpower (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYindex (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYpower (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZindex (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZpower (type: vector<double>*, class: HHChannelF2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HHChannelF2D)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HHChannelF2D)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HHChannelF2D)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HHChannelF2D)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HHChannelF2D)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HHChannelF2D)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HHChannelF2D)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: HHChannelF2D)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: HHChannelF2D)

   Handles reinit call


.. describe:: setEk (type: double, class: HHChannelF2D)

   Assigns field value.


.. describe:: setGbar (type: double, class: HHChannelF2D)

   Assigns field value.


.. describe:: setGk (type: double, class: HHChannelF2D)

   Assigns field value.


.. describe:: setModulation (type: double, class: HHChannelF2D)

   Assigns field value.


.. describe:: setName (type: string, class: HHChannelF2D)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HHChannelF2D)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HHChannelF2D)

   Assigns field value.


.. describe:: setNumGateX (type: unsigned int, class: HHChannelF2D)

   Assigns number of field entries in field array.


.. describe:: setNumGateY (type: unsigned int, class: HHChannelF2D)

   Assigns number of field entries in field array.


.. describe:: setNumGateZ (type: unsigned int, class: HHChannelF2D)

   Assigns number of field entries in field array.


.. describe:: setThis (type: 7Neutral, class: HHChannelF2D)

   Assigns field value.


.. describe:: setTick (type: int, class: HHChannelF2D)

   Assigns field value.


.. describe:: setXindex (type: string, class: HHChannelF2D)

   Assigns field value.


.. describe:: setXpower (type: double, class: HHChannelF2D)

   Assigns field value.


.. describe:: setYindex (type: string, class: HHChannelF2D)

   Assigns field value.


.. describe:: setYpower (type: double, class: HHChannelF2D)

   Assigns field value.


.. describe:: setZindex (type: string, class: HHChannelF2D)

   Assigns field value.


.. describe:: setZpower (type: double, class: HHChannelF2D)

   Assigns field value.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel (type: void, class: HHChannelF2D)

   This is a shared message to couple channel to compartment. The first
   entry is a MsgSrc to send Gk and Ek to the compartment The second entry
   is a MsgDest for Vm from the compartment.


.. describe:: ghk (type: void, class: HHChannelF2D)

   Message to Goldman-Hodgkin-Katz object


.. describe:: proc (type: void, class: HHChannelF2D)

   Shared message to receive Process message from scheduler



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Field Attributes:
-----------------

.. describe:: gateX (type: 9HHGateF2D, class: HHChannelF2D)

   Sets up HHGate X for channel


.. describe:: gateY (type: 9HHGateF2D, class: HHChannelF2D)

   Sets up HHGate Y for channel


.. describe:: gateZ (type: 9HHGateF2D, class: HHChannelF2D)

   Sets up HHGate Z for channel



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

