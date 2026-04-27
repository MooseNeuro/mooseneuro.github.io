:orphan:

HHChannel2D
===========


HHChannel2D: Hodgkin-Huxley type voltage-gated Ion channel. Something like the old tabchannel from GENESIS, but also presents a similar interface as hhchan from GENESIS.

Author:   Niraj Dudani, 2009, NCBS, Updated Upi Bhalla, 2011


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Ek (type: double, class: HHChannel2D)

   Reversal potential of channel


.. describe:: Gbar (type: double, class: HHChannel2D)

   Maximal channel conductance


.. describe:: Gk (type: double, class: HHChannel2D)

   Channel conductance variable


.. describe:: Ik (type: double, class: HHChannel2D)

   Channel current variable


.. describe:: X (type: double, class: HHChannel2D)

   State variable for X gate


.. describe:: Xindex (type: string, class: HHChannel2D)

   String for setting X index.


.. describe:: Xpower (type: double, class: HHChannel2D)

   Power for X gate


.. describe:: Y (type: double, class: HHChannel2D)

   State variable for Y gate


.. describe:: Yindex (type: string, class: HHChannel2D)

   String for setting Y index.


.. describe:: Ypower (type: double, class: HHChannel2D)

   Power for Y gate


.. describe:: Z (type: double, class: HHChannel2D)

   State variable for Y gate


.. describe:: Zindex (type: string, class: HHChannel2D)

   String for setting Z index.


.. describe:: Zpower (type: double, class: HHChannel2D)

   Power for Z gate


.. describe:: children (type: vector<Id>, class: HHChannel2D)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: HHChannel2D)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: HHChannel2D)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: HHChannel2D)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: HHChannel2D)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: HHChannel2D)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HHChannel2D)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: instant (type: int, class: HHChannel2D)

   Bitmapped flag: bit 0 = Xgate, bit 1 = Ygate, bit 2 = ZgateWhen true,
   specifies that the lookup table value should beused directly as the state
   of the channel, rather than usedas a rate term for numerical integration
   for the state


.. describe:: me (type: ObjId, class: HHChannel2D)

   ObjId for current object


.. describe:: modulation (type: double, class: HHChannel2D)

   Modulation, i.e, scale factor for channel conductance.Note that this
   is a regular parameter, it is not recomputed each timestep. Thus one
   can use a slow update, say, from a molecule pool, to send a message to
   set the modulation, and it will stay at the set value even if the channel
   runs many timesteps before the next assignment. This differs from the
   GENESIS semantics of a similar message,which required update each timestep.



.. describe:: msgIn (type: vector<ObjId>, class: HHChannel2D)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HHChannel2D)

   Messages going out from this Element


.. describe:: name (type: string, class: HHChannel2D)

   Name of object


.. describe:: numData (type: unsigned int, class: HHChannel2D)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HHChannel2D)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HHChannel2D)

   Parent ObjId for current object


.. describe:: path (type: string, class: HHChannel2D)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: HHChannel2D)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: HHChannel2D)

   Access function for entire object


.. describe:: tick (type: int, class: HHChannel2D)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: useConcentration (type: int, class: HHChannel2D)

   Flag: when true, use concentration message rather than Vm tocontrol Z
   gate


.. describe:: valueFields (type: vector<string>, class: HHChannel2D)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from HHChannelBase:
----------------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: HHChannel2D)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: HHChannel2D)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HHChannel2D)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HHChannel2D)

   Ids of Elements connected this Element on specified field.



Attributes inherited from HHChannelBase:
----------------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: IkOut (type: double, class: HHChannel2D)

   Channel current. This message typically goes to concenobjects that keep
   track of ion concentration.


.. describe:: channelOut (type: double,double, class: HHChannel2D)

   Sends channel variables Gk and Ek to compartment


.. describe:: childOut (type: int, class: HHChannel2D)

   Message to child Elements


.. describe:: permeabilityOut (type: double, class: HHChannel2D)

   Conductance term going out to GHK object



Attributes inherited from HHChannelBase:
----------------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: Vm (type: double, class: HHChannel2D)

   Handles Vm message coming in from compartment


.. describe:: concen (type: double, class: HHChannel2D)

   Incoming message from Concen object to specific conc to useas the first
   concen variable


.. describe:: concen2 (type: double, class: HHChannel2D)

   Incoming message from Concen object to specific conc to useas the second
   concen variable


.. describe:: createGate (type: string, class: HHChannel2D)

   Function to create specified gate.Argument: Gate type [X Y Z]


.. describe:: getChildren (type: vector<vector<Id>>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEk (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGbar (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGk (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIk (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInstant (type: PSt6vectorIiSaIiEE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getModulation (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumGateX (type: vector<unsigned int>*, class: HHChannel2D)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNumGateY (type: vector<unsigned int>*, class: HHChannel2D)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNumGateZ (type: vector<unsigned int>*, class: HHChannel2D)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getUseConcentration (type: PSt6vectorIiSaIiEE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXindex (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXpower (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYindex (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYpower (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZindex (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZpower (type: vector<double>*, class: HHChannel2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HHChannel2D)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HHChannel2D)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HHChannel2D)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HHChannel2D)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HHChannel2D)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HHChannel2D)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HHChannel2D)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: HHChannel2D)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: HHChannel2D)

   Handles reinit call


.. describe:: setEk (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setGbar (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setGk (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setInstant (type: int, class: HHChannel2D)

   Assigns field value.


.. describe:: setModulation (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setName (type: string, class: HHChannel2D)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HHChannel2D)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HHChannel2D)

   Assigns field value.


.. describe:: setNumGateX (type: unsigned int, class: HHChannel2D)

   Assigns number of field entries in field array.


.. describe:: setNumGateY (type: unsigned int, class: HHChannel2D)

   Assigns number of field entries in field array.


.. describe:: setNumGateZ (type: unsigned int, class: HHChannel2D)

   Assigns number of field entries in field array.


.. describe:: setThis (type: 7Neutral, class: HHChannel2D)

   Assigns field value.


.. describe:: setTick (type: int, class: HHChannel2D)

   Assigns field value.


.. describe:: setUseConcentration (type: int, class: HHChannel2D)

   Assigns field value.


.. describe:: setX (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setXindex (type: string, class: HHChannel2D)

   Assigns field value.


.. describe:: setXpower (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setY (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setYindex (type: string, class: HHChannel2D)

   Assigns field value.


.. describe:: setYpower (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setZ (type: double, class: HHChannel2D)

   Assigns field value.


.. describe:: setZindex (type: string, class: HHChannel2D)

   Assigns field value.


.. describe:: setZpower (type: double, class: HHChannel2D)

   Assigns field value.



Attributes inherited from HHChannelBase:
----------------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel (type: void, class: HHChannel2D)

   This is a shared message to couple channel to compartment. The first
   entry is a MsgSrc to send Gk and Ek to the compartment The second entry
   is a MsgDest for Vm from the compartment.


.. describe:: ghk (type: void, class: HHChannel2D)

   Message to Goldman-Hodgkin-Katz object


.. describe:: proc (type: void, class: HHChannel2D)

   Shared message to receive Process message from scheduler



Attributes inherited from HHChannelBase:
----------------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Field Attributes:
-----------------

.. describe:: gateX (type: 8HHGate2D, class: HHChannel2D)

   Sets up HHGate X for channel


.. describe:: gateY (type: 8HHGate2D, class: HHChannel2D)

   Sets up HHGate Y for channel


.. describe:: gateZ (type: 8HHGate2D, class: HHChannel2D)

   Sets up HHGate Z for channel



Attributes inherited from HHChannelBase:
----------------------------------------


Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

