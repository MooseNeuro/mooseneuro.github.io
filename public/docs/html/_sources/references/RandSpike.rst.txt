:orphan:

RandSpike
=========


RandSpike object, generates random or regular spikes at specified mean rate. Based closely on GENESIS randspike.

Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: abs_refract (type: double, class: RandSpike)

   Absolute refractory time. Synonym for refractT.


.. describe:: children (type: vector<Id>, class: RandSpike)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: RandSpike)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: RandSpike)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: doPeriodic (type: bool, class: RandSpike)

   Flag: when false, do Poisson process with specified mean rate. When true,
   fire periodically at specified rate. Defaults to false. Note that refractory
   time overrides this: Rate cannot exceed 1/refractT.


.. describe:: dt (type: double, class: RandSpike)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: RandSpike)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: hasFired (type: bool, class: RandSpike)

   True if RandSpike has just fired


.. describe:: idValue (type: unsigned int, class: RandSpike)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: RandSpike)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: lastEventT (type: double, class: RandSpike)

   Time of last event. Set this if you want to phase-shift periodic activity.



.. describe:: me (type: ObjId, class: RandSpike)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: RandSpike)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: RandSpike)

   Messages going out from this Element


.. describe:: name (type: string, class: RandSpike)

   Name of object


.. describe:: numData (type: unsigned int, class: RandSpike)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: RandSpike)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: RandSpike)

   Parent ObjId for current object


.. describe:: path (type: string, class: RandSpike)

   text path for object


.. describe:: rate (type: double, class: RandSpike)

   Specifies rate for random spike train. Note that this isprobabilistic,
   so the instantaneous rate may differ. If the rate is assigned be message
   and it varies slowly then the average firing rate will approach the specified
   rate


.. describe:: refractT (type: double, class: RandSpike)

   Refractory Time.


.. describe:: sourceFields (type: vector<string>, class: RandSpike)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: RandSpike)

   Access function for entire object


.. describe:: tick (type: int, class: RandSpike)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: RandSpike)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: RandSpike)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: RandSpike)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: RandSpike)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: RandSpike)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: RandSpike)

   Message to child Elements


.. describe:: spikeOut (type: double, class: RandSpike)

   Sends out a trigger for an event.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getAbs_refract (type: vector<double>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDoPeriodic (type: vector<bool>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getHasFired (type: vector<bool>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLastEventT (type: vector<double>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRate (type: vector<double>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRefractT (type: vector<double>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: RandSpike)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: RandSpike)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: RandSpike)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: RandSpike)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: RandSpike)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: RandSpike)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: RandSpike)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: RandSpike)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: RandSpike)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: RandSpike)

   Handles reinit call


.. describe:: setAbs_refract (type: double, class: RandSpike)

   Assigns field value.


.. describe:: setDoPeriodic (type: bool, class: RandSpike)

   Assigns field value.


.. describe:: setLastEventT (type: double, class: RandSpike)

   Assigns field value.


.. describe:: setName (type: string, class: RandSpike)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: RandSpike)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: RandSpike)

   Assigns field value.


.. describe:: setRate (type: double, class: RandSpike)

   Assigns field value.


.. describe:: setRefractT (type: double, class: RandSpike)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: RandSpike)

   Assigns field value.


.. describe:: setTick (type: int, class: RandSpike)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: RandSpike)

   Shared message to receive Process message from scheduler



Attributes inherited from Neutral:
----------------------------------

