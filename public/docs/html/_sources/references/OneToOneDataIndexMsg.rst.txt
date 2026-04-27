:orphan:

OneToOneDataIndexMsg
====================





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: OneToOneDataIndexMsg)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: OneToOneDataIndexMsg)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: OneToOneDataIndexMsg)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: destFieldsOnE1 (type: vector<string>, class: OneToOneDataIndexMsg)

   Names of destFinfos for messages going from e2 to e1. There arematching
   entries in the srcFieldsOnE2 vector


.. describe:: destFieldsOnE2 (type: vector<string>, class: OneToOneDataIndexMsg)

   Names of DestFinfos for messages going from e1 to e2. There arematching
   entries in the srcFieldsOnE1 vector


.. describe:: dt (type: double, class: OneToOneDataIndexMsg)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: e1 (type: Id, class: OneToOneDataIndexMsg)

   Id of source Element.


.. describe:: e2 (type: Id, class: OneToOneDataIndexMsg)

   Id of source Element.


.. describe:: fieldIndex (type: unsigned int, class: OneToOneDataIndexMsg)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: OneToOneDataIndexMsg)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: OneToOneDataIndexMsg)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: OneToOneDataIndexMsg)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: OneToOneDataIndexMsg)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: OneToOneDataIndexMsg)

   Messages going out from this Element


.. describe:: name (type: string, class: OneToOneDataIndexMsg)

   Name of object


.. describe:: numData (type: unsigned int, class: OneToOneDataIndexMsg)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: OneToOneDataIndexMsg)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: OneToOneDataIndexMsg)

   Parent ObjId for current object


.. describe:: path (type: string, class: OneToOneDataIndexMsg)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: OneToOneDataIndexMsg)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: srcFieldsOnE1 (type: vector<string>, class: OneToOneDataIndexMsg)

   Names of SrcFinfos for messages going from e1 to e2. There arematching
   entries in the destFieldsOnE2 vector


.. describe:: srcFieldsOnE2 (type: vector<string>, class: OneToOneDataIndexMsg)

   Names of SrcFinfos for messages going from e2 to e1. There arematching
   entries in the destFieldsOnE1 vector


.. describe:: this (type: 7Neutral, class: OneToOneDataIndexMsg)

   Access function for entire object


.. describe:: tick (type: int, class: OneToOneDataIndexMsg)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: OneToOneDataIndexMsg)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Msg:
------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: adjacent (type: ObjId,ObjId, class: OneToOneDataIndexMsg)

   The element adjacent to the specified element


.. describe:: isA (type: string,bool, class: OneToOneDataIndexMsg)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: OneToOneDataIndexMsg)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: OneToOneDataIndexMsg)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: OneToOneDataIndexMsg)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Msg:
------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: OneToOneDataIndexMsg)

   Message to child Elements



Attributes inherited from Msg:
------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getAdjacent (type: ObjId, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFieldsOnE1 (type: vector<vector<string>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFieldsOnE2 (type: vector<vector<string>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getE1 (type: vector<Id>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getE2 (type: vector<Id>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSrcFieldsOnE1 (type: vector<vector<string>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSrcFieldsOnE2 (type: vector<vector<string>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: OneToOneDataIndexMsg)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: OneToOneDataIndexMsg)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: OneToOneDataIndexMsg)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: OneToOneDataIndexMsg)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: OneToOneDataIndexMsg)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: OneToOneDataIndexMsg)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: OneToOneDataIndexMsg)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: OneToOneDataIndexMsg)

   Message from Parent Element(s)


.. describe:: setName (type: string, class: OneToOneDataIndexMsg)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: OneToOneDataIndexMsg)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: OneToOneDataIndexMsg)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: OneToOneDataIndexMsg)

   Assigns field value.


.. describe:: setTick (type: int, class: OneToOneDataIndexMsg)

   Assigns field value.



Attributes inherited from Msg:
------------------------------


Attributes inherited from Neutral:
----------------------------------

