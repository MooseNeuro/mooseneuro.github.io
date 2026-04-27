:orphan:

GapJunction
===========


Implementation of gap junction between two compartments. The shared
fields, 'channel1' and 'channel2' can be connected to the 'channel'
message of the compartments at either end of the gap junction. The
compartments will send their Vm to the gap junction and receive the
conductance 'Gk' of the gap junction and the Vm of the other
compartment.

Author:   Subhasis Ray, 2013


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Gk (type: double, class: GapJunction)

   Conductance of the gap junction


.. describe:: children (type: vector<Id>, class: GapJunction)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: GapJunction)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: GapJunction)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: GapJunction)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: GapJunction)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: GapJunction)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: GapJunction)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: GapJunction)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: GapJunction)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: GapJunction)

   Messages going out from this Element


.. describe:: name (type: string, class: GapJunction)

   Name of object


.. describe:: numData (type: unsigned int, class: GapJunction)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: GapJunction)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: GapJunction)

   Parent ObjId for current object


.. describe:: path (type: string, class: GapJunction)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: GapJunction)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: GapJunction)

   Access function for entire object


.. describe:: tick (type: int, class: GapJunction)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: GapJunction)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: GapJunction)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: GapJunction)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: GapJunction)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: GapJunction)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: channel1Out (type: double,double, class: GapJunction)

   Sends Gk and Vm from one compartment to the other


.. describe:: channel2Out (type: double,double, class: GapJunction)

   Sends Gk and Vm from one compartment to the other


.. describe:: childOut (type: int, class: GapJunction)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: Vm1 (type: double, class: GapJunction)

   Handles Vm message from compartment


.. describe:: Vm2 (type: double, class: GapJunction)

   Handles Vm message from another compartment


.. describe:: getChildren (type: vector<vector<Id>>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGk (type: vector<double>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: GapJunction)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: GapJunction)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: GapJunction)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: GapJunction)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: GapJunction)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: GapJunction)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: GapJunction)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: GapJunction)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: GapJunction)

   Handles 'process' call


.. describe:: reinit (type: const ProcInfo*, class: GapJunction)

   Handles 'reinit' call


.. describe:: setGk (type: double, class: GapJunction)

   Assigns field value.


.. describe:: setName (type: string, class: GapJunction)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: GapJunction)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: GapJunction)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: GapJunction)

   Assigns field value.


.. describe:: setTick (type: int, class: GapJunction)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel1 (type: void, class: GapJunction)

   This is a shared message to couple the conductance and Vm from terminal
   2 to the compartment at terminal 1. The first entry is source sending
   out Gk and Vm2, the second entry is destination for Vm1.


.. describe:: channel2 (type: void, class: GapJunction)

   This is a shared message to couple the conductance and Vm from terminal
   1 to the compartment at terminal 2. The first entry is source sending
   out Gk and Vm1, the second entry is destination for Vm2.


.. describe:: proc (type: void, class: GapJunction)

   This is a shared message to receive Process messages from the scheduler
   objects. The Process should be called _second\_ in each clock tick, after
   the Init message.The first entry in the shared msg is a MsgDest for the
   Process operation. It has a single argument, ProcInfo, which holds lots
   of information about current time, thread, dt and so on. The second entry
   is a MsgDest for the Reinit operation. It also uses ProcInfo.



Attributes inherited from Neutral:
----------------------------------

