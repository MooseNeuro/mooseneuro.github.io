:orphan:

InputVariable
=============


Variable for capturing incoming values and updating them in owner object.

Author:   Subhasis Ray


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: InputVariable)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: InputVariable)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: InputVariable)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: InputVariable)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: InputVariable)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: InputVariable)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: InputVariable)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: InputVariable)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: InputVariable)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: InputVariable)

   Messages going out from this Element


.. describe:: name (type: string, class: InputVariable)

   Name of object


.. describe:: numData (type: unsigned int, class: InputVariable)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: InputVariable)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: InputVariable)

   Parent ObjId for current object


.. describe:: path (type: string, class: InputVariable)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: InputVariable)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: InputVariable)

   Access function for entire object


.. describe:: tick (type: int, class: InputVariable)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: value (type: double, class: InputVariable)

   Variable value


.. describe:: valueFields (type: vector<string>, class: InputVariable)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Variable:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: InputVariable)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: InputVariable)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: InputVariable)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: InputVariable)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Variable:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: InputVariable)

   Message to child Elements



Attributes inherited from Variable:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValue (type: vector<double>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: InputVariable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: input (type: double, class: InputVariable)

   Handles input message, inserts into variable queue on owner.


.. describe:: notifyAddMsgDest (type: ObjId, class: InputVariable)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: InputVariable)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: InputVariable)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: InputVariable)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: InputVariable)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: InputVariable)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: InputVariable)

   Message from Parent Element(s)


.. describe:: setName (type: string, class: InputVariable)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: InputVariable)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: InputVariable)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: InputVariable)

   Assigns field value.


.. describe:: setTick (type: int, class: InputVariable)

   Assigns field value.


.. describe:: setValue (type: double, class: InputVariable)

   Assigns field value.



Attributes inherited from Variable:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

