:orphan:

Arith
=====





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: arg1Value (type: double, class: Arith)

   Value of arg1 as computed last timestep.


.. describe:: children (type: vector<Id>, class: Arith)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Arith)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: Arith)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Arith)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Arith)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: function (type: string, class: Arith)

   Arithmetic function to perform on inputs.


.. describe:: idValue (type: unsigned int, class: Arith)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Arith)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Arith)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Arith)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Arith)

   Messages going out from this Element


.. describe:: name (type: string, class: Arith)

   Name of object


.. describe:: numData (type: unsigned int, class: Arith)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Arith)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outputValue (type: double, class: Arith)

   Value of output as computed last timestep.


.. describe:: parent (type: ObjId, class: Arith)

   Parent ObjId for current object


.. describe:: path (type: string, class: Arith)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: Arith)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: Arith)

   Access function for entire object


.. describe:: tick (type: int, class: Arith)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Arith)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: anyValue (type: unsigned int,double, class: Arith)

   Value of any of the internal fields, output, arg1, arg2, arg3,as specified
   by the index argument from 0 to 3.


.. describe:: isA (type: string,bool, class: Arith)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Arith)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Arith)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Arith)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Arith)

   Message to child Elements


.. describe:: output (type: double, class: Arith)

   Sends out the computed value



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: arg1 (type: double, class: Arith)

   Handles argument 1. This just assigns it


.. describe:: arg1x2 (type: double,double, class: Arith)

   Store the product of the two arguments in output\_


.. describe:: arg2 (type: double, class: Arith)

   Handles argument 2. This just assigns it


.. describe:: arg3 (type: double, class: Arith)

   Handles argument 3. This sums in each input, and clears each clock tick.



.. describe:: getAnyValue (type: double, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getArg1Value (type: vector<double>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFunction (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Arith)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Arith)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Arith)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Arith)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Arith)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Arith)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Arith)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Arith)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: Arith)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: Arith)

   Handles reinit call


.. describe:: setAnyValue (type: unsigned int,double, class: Arith)

   Assigns field value.


.. describe:: setFunction (type: string, class: Arith)

   Assigns field value.


.. describe:: setName (type: string, class: Arith)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Arith)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Arith)

   Assigns field value.


.. describe:: setOutputValue (type: double, class: Arith)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Arith)

   Assigns field value.


.. describe:: setTick (type: int, class: Arith)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: Arith)

   Shared message for process and reinit



Attributes inherited from Neutral:
----------------------------------

