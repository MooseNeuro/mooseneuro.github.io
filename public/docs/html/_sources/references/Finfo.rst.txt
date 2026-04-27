:orphan:

Finfo
=====





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Finfo)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Finfo)

   Class Name of object


.. describe:: dest (type: vector<string>, class: Finfo)

   Subsidiary DestFinfos. Useful for SharedFinfos


.. describe:: destFields (type: vector<string>, class: Finfo)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: docs (type: string, class: Finfo)

   Documentation for Finfo


.. describe:: dt (type: double, class: Finfo)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Finfo)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: fieldName (type: string, class: Finfo)

   Name of field handled by Finfo


.. describe:: idValue (type: unsigned int, class: Finfo)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Finfo)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Finfo)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Finfo)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Finfo)

   Messages going out from this Element


.. describe:: name (type: string, class: Finfo)

   Name of object


.. describe:: numData (type: unsigned int, class: Finfo)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Finfo)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: Finfo)

   Parent ObjId for current object


.. describe:: path (type: string, class: Finfo)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: Finfo)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: src (type: vector<string>, class: Finfo)

   Subsidiary SrcFinfos. Useful for SharedFinfos


.. describe:: this (type: 7Neutral, class: Finfo)

   Access function for entire object


.. describe:: tick (type: int, class: Finfo)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: type (type: string, class: Finfo)

   RTTI type info for this Finfo


.. describe:: valueFields (type: vector<string>, class: Finfo)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Finfo)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Finfo)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Finfo)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Finfo)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Finfo)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDest (type: vector<vector<string>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDocs (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSrc (type: vector<vector<string>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getType (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Finfo)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Finfo)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Finfo)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Finfo)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Finfo)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Finfo)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Finfo)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Finfo)

   Message from Parent Element(s)


.. describe:: setName (type: string, class: Finfo)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Finfo)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Finfo)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Finfo)

   Assigns field value.


.. describe:: setTick (type: int, class: Finfo)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------

