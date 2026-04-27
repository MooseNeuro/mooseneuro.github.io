:orphan:

Example
=======





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Example)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Example)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: Example)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Example)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Example)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Example)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Example)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Example)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Example)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Example)

   Messages going out from this Element


.. describe:: name (type: string, class: Example)

   Name of object


.. describe:: numData (type: unsigned int, class: Example)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Example)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: Example)

   Parent ObjId for current object


.. describe:: path (type: string, class: Example)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: Example)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: Example)

   Access function for entire object


.. describe:: tick (type: int, class: Example)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Example)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: x (type: double, class: Example)

   An example field of an example class


.. describe:: y (type: double, class: Example)

   Another example field of an example class



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: fieldNeighbors (type: string,vector<Id>, class: Example)

   Ids of Elements connected this Element on specified field.


.. describe:: isA (type: string,bool, class: Example)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Example)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Example)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Example)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Example)

   Message to child Elements


.. describe:: output (type: double, class: Example)

   Sends out the computed value



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldNeighbors (type: vector<Id>, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX (type: vector<double>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: vector<double>*, class: Example)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: handleX (type: double, class: Example)

   Saves arg value to x\_


.. describe:: handleY (type: double, class: Example)

   Saves arg value to y\_


.. describe:: notifyAddMsgDest (type: ObjId, class: Example)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Example)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Example)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Example)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Example)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Example)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Example)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: Example)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: Example)

   Handles reinit call


.. describe:: setName (type: string, class: Example)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Example)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Example)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Example)

   Assigns field value.


.. describe:: setTick (type: int, class: Example)

   Assigns field value.


.. describe:: setX (type: double, class: Example)

   Assigns field value.


.. describe:: setY (type: double, class: Example)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: Example)

   Handles 'reinit' and 'process' calls from a clock.



Attributes inherited from Neutral:
----------------------------------

