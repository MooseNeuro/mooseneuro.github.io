:orphan:

HHChannelBase
=============


HHChannelBase: Base class for Hodgkin-Huxley type voltage-gated Ion channels. Something like the old tabchannel from GENESIS, but also presents a similar interface as hhchan from GENESIS.

Author:   Upinder S. Bhalla, 2014, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Ek (type: double, class: HHChannelBase)

   Reversal potential of channel


.. describe:: Gbar (type: double, class: HHChannelBase)

   Maximal channel conductance


.. describe:: Gk (type: double, class: HHChannelBase)

   Channel conductance variable


.. describe:: Ik (type: double, class: HHChannelBase)

   Channel current variable


.. describe:: X (type: double, class: HHChannelBase)

   State variable for X gate


.. describe:: Xpower (type: double, class: HHChannelBase)

   Power for X gate


.. describe:: Y (type: double, class: HHChannelBase)

   State variable for Y gate


.. describe:: Ypower (type: double, class: HHChannelBase)

   Power for Y gate


.. describe:: Z (type: double, class: HHChannelBase)

   State variable for Y gate


.. describe:: Zpower (type: double, class: HHChannelBase)

   Power for Z gate


.. describe:: children (type: vector<Id>, class: HHChannelBase)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: HHChannelBase)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: HHChannelBase)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: HHChannelBase)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: HHChannelBase)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: HHChannelBase)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HHChannelBase)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: instant (type: int, class: HHChannelBase)

   Bitmapped flag: bit 0 = Xgate, bit 1 = Ygate, bit 2 = ZgateWhen true,
   specifies that the lookup table value should beused directly as the state
   of the channel, rather than usedas a rate term for numerical integration
   for the state


.. describe:: me (type: ObjId, class: HHChannelBase)

   ObjId for current object


.. describe:: modulation (type: double, class: HHChannelBase)

   Modulation, i.e, scale factor for channel conductance.Note that this
   is a regular parameter, it is not recomputed each timestep. Thus one
   can use a slow update, say, from a molecule pool, to send a message to
   set the modulation, and it will stay at the set value even if the channel
   runs many timesteps before the next assignment. This differs from the
   GENESIS semantics of a similar message,which required update each timestep.



.. describe:: msgIn (type: vector<ObjId>, class: HHChannelBase)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HHChannelBase)

   Messages going out from this Element


.. describe:: name (type: string, class: HHChannelBase)

   Name of object


.. describe:: numData (type: unsigned int, class: HHChannelBase)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HHChannelBase)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HHChannelBase)

   Parent ObjId for current object


.. describe:: path (type: string, class: HHChannelBase)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: HHChannelBase)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: HHChannelBase)

   Access function for entire object


.. describe:: tick (type: int, class: HHChannelBase)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: useConcentration (type: int, class: HHChannelBase)

   Flag: when true, use concentration message rather than Vm tocontrol Z
   gate


.. describe:: valueFields (type: vector<string>, class: HHChannelBase)

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

.. describe:: isA (type: string,bool, class: HHChannelBase)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: HHChannelBase)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HHChannelBase)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HHChannelBase)

   Ids of Elements connected this Element on specified field.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: IkOut (type: double, class: HHChannelBase)

   Channel current. This message typically goes to concenobjects that keep
   track of ion concentration.


.. describe:: channelOut (type: double,double, class: HHChannelBase)

   Sends channel variables Gk and Ek to compartment


.. describe:: childOut (type: int, class: HHChannelBase)

   Message to child Elements


.. describe:: permeabilityOut (type: double, class: HHChannelBase)

   Conductance term going out to GHK object



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: Vm (type: double, class: HHChannelBase)

   Handles Vm message coming in from compartment


.. describe:: concen (type: double, class: HHChannelBase)

   Incoming message from Concen object to specific conc to usein the Z gate
   calculations


.. describe:: createGate (type: string, class: HHChannelBase)

   Function to create specified gate.Argument: Gate type [X Y Z]


.. describe:: getChildren (type: vector<vector<Id>>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEk (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGbar (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGk (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIk (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInstant (type: PSt6vectorIiSaIiEE, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getModulation (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getUseConcentration (type: PSt6vectorIiSaIiEE, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXpower (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYpower (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZpower (type: vector<double>*, class: HHChannelBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HHChannelBase)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HHChannelBase)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HHChannelBase)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HHChannelBase)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HHChannelBase)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HHChannelBase)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HHChannelBase)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: HHChannelBase)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: HHChannelBase)

   Handles reinit call


.. describe:: setEk (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setGbar (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setGk (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setInstant (type: int, class: HHChannelBase)

   Assigns field value.


.. describe:: setModulation (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setName (type: string, class: HHChannelBase)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HHChannelBase)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HHChannelBase)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: HHChannelBase)

   Assigns field value.


.. describe:: setTick (type: int, class: HHChannelBase)

   Assigns field value.


.. describe:: setUseConcentration (type: int, class: HHChannelBase)

   Assigns field value.


.. describe:: setX (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setXpower (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setY (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setYpower (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setZ (type: double, class: HHChannelBase)

   Assigns field value.


.. describe:: setZpower (type: double, class: HHChannelBase)

   Assigns field value.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel (type: void, class: HHChannelBase)

   This is a shared message to couple channel to compartment. The first
   entry is a MsgSrc to send Gk and Ek to the compartment The second entry
   is a MsgDest for Vm from the compartment.


.. describe:: ghk (type: void, class: HHChannelBase)

   Message to Goldman-Hodgkin-Katz object


.. describe:: proc (type: void, class: HHChannelBase)

   Shared message to receive Process message from scheduler



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

