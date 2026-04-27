:orphan:

MgBlock
=======


MgBlock: Hodgkin-Huxley type voltage-gated Ion channel. Something like the old tabchannel from GENESIS, but also presents a similar interface as hhchan from GENESIS.

Author:   Upinder S. Bhalla, 2007, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: CMg (type: double, class: MgBlock)

   [Mg] in mM


.. describe:: Ek (type: double, class: MgBlock)

   Reversal potential of channel


.. describe:: Gbar (type: double, class: MgBlock)

   Maximal channel conductance


.. describe:: Gk (type: double, class: MgBlock)

   Channel conductance variable


.. describe:: Ik (type: double, class: MgBlock)

   Channel current variable


.. describe:: KMg_A (type: double, class: MgBlock)

   1/eta


.. describe:: KMg_B (type: double, class: MgBlock)

   1/gamma


.. describe:: Zk (type: double, class: MgBlock)

   Charge on ion


.. describe:: children (type: vector<Id>, class: MgBlock)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: MgBlock)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: MgBlock)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: MgBlock)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: MgBlock)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: MgBlock)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: MgBlock)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: MgBlock)

   ObjId for current object


.. describe:: modulation (type: double, class: MgBlock)

   Modulation, i.e, scale factor for channel conductance.Note that this
   is a regular parameter, it is not recomputed each timestep. Thus one
   can use a slow update, say, from a molecule pool, to send a message to
   set the modulation, and it will stay at the set value even if the channel
   runs many timesteps before the next assignment. This differs from the
   GENESIS semantics of a similar message,which required update each timestep.



.. describe:: msgIn (type: vector<ObjId>, class: MgBlock)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: MgBlock)

   Messages going out from this Element


.. describe:: name (type: string, class: MgBlock)

   Name of object


.. describe:: numData (type: unsigned int, class: MgBlock)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: MgBlock)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: MgBlock)

   Parent ObjId for current object


.. describe:: path (type: string, class: MgBlock)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: MgBlock)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: MgBlock)

   Access function for entire object


.. describe:: tick (type: int, class: MgBlock)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: MgBlock)

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

.. describe:: isA (type: string,bool, class: MgBlock)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: MgBlock)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: MgBlock)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: MgBlock)

   Ids of Elements connected this Element on specified field.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: IkOut (type: double, class: MgBlock)

   Channel current. This message typically goes to concenobjects that keep
   track of ion concentration.


.. describe:: channelOut (type: double,double, class: MgBlock)

   Sends channel variables Gk and Ek to compartment


.. describe:: childOut (type: int, class: MgBlock)

   Message to child Elements


.. describe:: permeabilityOut (type: double, class: MgBlock)

   Conductance term going out to GHK object



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: Vm (type: double, class: MgBlock)

   Handles Vm message coming in from compartment


.. describe:: getCMg (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEk (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGbar (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGk (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIk (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKMg_A (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKMg_B (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getModulation (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZk (type: vector<double>*, class: MgBlock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: MgBlock)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: MgBlock)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: MgBlock)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: MgBlock)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: MgBlock)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: MgBlock)

   Called when object is moved. Arg is new parent.


.. describe:: origChannel (type: double,double, class: MgBlock)

.. describe:: parentMsg (type: int, class: MgBlock)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: MgBlock)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: MgBlock)

   Handles reinit call


.. describe:: setCMg (type: double, class: MgBlock)

   Assigns field value.


.. describe:: setEk (type: double, class: MgBlock)

   Assigns field value.


.. describe:: setGbar (type: double, class: MgBlock)

   Assigns field value.


.. describe:: setGk (type: double, class: MgBlock)

   Assigns field value.


.. describe:: setKMg_A (type: double, class: MgBlock)

   Assigns field value.


.. describe:: setKMg_B (type: double, class: MgBlock)

   Assigns field value.


.. describe:: setModulation (type: double, class: MgBlock)

   Assigns field value.


.. describe:: setName (type: string, class: MgBlock)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: MgBlock)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: MgBlock)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: MgBlock)

   Assigns field value.


.. describe:: setTick (type: int, class: MgBlock)

   Assigns field value.


.. describe:: setZk (type: double, class: MgBlock)

   Assigns field value.



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel (type: void, class: MgBlock)

   This is a shared message to couple channel to compartment. The first
   entry is a MsgSrc to send Gk and Ek to the compartment The second entry
   is a MsgDest for Vm from the compartment.


.. describe:: ghk (type: void, class: MgBlock)

   Message to Goldman-Hodgkin-Katz object


.. describe:: proc (type: void, class: MgBlock)

   Shared message to receive Process message from scheduler



Attributes inherited from ChanBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

