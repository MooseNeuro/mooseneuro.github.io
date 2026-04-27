:orphan:

Stats
=====





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Stats)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Stats)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: Stats)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Stats)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Stats)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Stats)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Stats)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Stats)

   ObjId for current object


.. describe:: mean (type: double, class: Stats)

   Mean of all sampled values or of spike rate.


.. describe:: msgIn (type: vector<ObjId>, class: Stats)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Stats)

   Messages going out from this Element


.. describe:: name (type: string, class: Stats)

   Name of object


.. describe:: num (type: unsigned int, class: Stats)

   Number of all sampled values, or total number of spikes.


.. describe:: numData (type: unsigned int, class: Stats)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Stats)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: Stats)

   Parent ObjId for current object


.. describe:: path (type: string, class: Stats)

   text path for object


.. describe:: sdev (type: double, class: Stats)

   Standard Deviation of all sampled values, or of rate.


.. describe:: sourceFields (type: vector<string>, class: Stats)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: sum (type: double, class: Stats)

   Sum of all sampled values, or total number of spikes.


.. describe:: this (type: 7Neutral, class: Stats)

   Access function for entire object


.. describe:: tick (type: int, class: Stats)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Stats)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: windowLength (type: unsigned int, class: Stats)

   Number of bins for windowed stats. Ignores windowing if this value is
   zero.


.. describe:: wmean (type: double, class: Stats)

   Mean of sampled values or of spike rate within window.


.. describe:: wnum (type: unsigned int, class: Stats)

   Number of all sampled values, or total number of spikes, within window.



.. describe:: wsdev (type: double, class: Stats)

   Standard Deviation of sampled values, or rate, within window.


.. describe:: wsum (type: double, class: Stats)

   Sum of all sampled values, or total number of spikes, within window.




Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Stats)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Stats)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Stats)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Stats)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Stats)

   Message to child Elements


.. describe:: requestOut (type: vector<double>*, class: Stats)

   Sends request for a field to target object



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMean (type: vector<double>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNum (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSdev (type: vector<double>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSum (type: vector<double>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWindowLength (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWmean (type: vector<double>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWnum (type: vector<unsigned int>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWsdev (type: vector<double>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWsum (type: vector<double>*, class: Stats)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: input (type: double, class: Stats)

   Handles continuous value input as a time-series. Multiple inputs are
   allowed, they will be merged.


.. describe:: notifyAddMsgDest (type: ObjId, class: Stats)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Stats)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Stats)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Stats)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Stats)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Stats)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Stats)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: Stats)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: Stats)

   Handles reinit call


.. describe:: setName (type: string, class: Stats)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Stats)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Stats)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Stats)

   Assigns field value.


.. describe:: setTick (type: int, class: Stats)

   Assigns field value.


.. describe:: setWindowLength (type: unsigned int, class: Stats)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: Stats)

   Shared message for process and reinit



Attributes inherited from Neutral:
----------------------------------

