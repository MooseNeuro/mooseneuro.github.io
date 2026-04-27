:orphan:

Cell
====





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Cell)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Cell)

   Class Name of object


.. describe:: description (type: string, class: Cell)

   Read-only field giving a short description of the currently selected
   integration method.


.. describe:: destFields (type: vector<string>, class: Cell)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Cell)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Cell)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Cell)

   Object id of self, converted to an unsigned int.


.. describe:: implicit (type: int, class: Cell)

   Read-only field which tells if the current method is an implicit method.



.. describe:: index (type: unsigned int, class: Cell)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Cell)

   ObjId for current object


.. describe:: method (type: string, class: Cell)

   Specifies the integration method to be used for the neuron managed by
   this Cell object.


.. describe:: msgIn (type: vector<ObjId>, class: Cell)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Cell)

   Messages going out from this Element


.. describe:: name (type: string, class: Cell)

   Name of object


.. describe:: numData (type: unsigned int, class: Cell)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Cell)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: Cell)

   Parent ObjId for current object


.. describe:: path (type: string, class: Cell)

   text path for object


.. describe:: setupv (type: Id, class: Cell)

   Setupv.


.. describe:: solverClock (type: unsigned int, class: Cell)

   Specifies which clock to use for the HSolve, if it is used.


.. describe:: solverName (type: string, class: Cell)

   Specifies name for the solver object.


.. describe:: sourceFields (type: vector<string>, class: Cell)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: Cell)

   Access function for entire object


.. describe:: tick (type: int, class: Cell)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Cell)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: variableDt (type: int, class: Cell)

   Read-only field which tells if the current method is a variable time-step
   method.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Cell)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Cell)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Cell)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Cell)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Cell)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDescription (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getImplicit (type: PSt6vectorIiSaIiEE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMethod (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSetupv (type: vector<Id>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSolverClock (type: vector<unsigned int>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSolverName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVariableDt (type: PSt6vectorIiSaIiEE, class: Cell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Cell)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Cell)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Cell)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Cell)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Cell)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Cell)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Cell)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: Cell)

   Cell does not process at simulation time--it only sets up the solver
   at reset.


.. describe:: reinit (type: const ProcInfo*, class: Cell)

   Handles 'reinit' call: This triggers setting up the solver.


.. describe:: setMethod (type: string, class: Cell)

   Assigns field value.


.. describe:: setName (type: string, class: Cell)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Cell)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Cell)

   Assigns field value.


.. describe:: setSetupv (type: Id, class: Cell)

   Assigns field value.


.. describe:: setSolverClock (type: unsigned int, class: Cell)

   Assigns field value.


.. describe:: setSolverName (type: string, class: Cell)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Cell)

   Assigns field value.


.. describe:: setTick (type: int, class: Cell)

   Assigns field value.


.. describe:: setup1 (type: Id, class: Cell)

   Setup.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: Cell)

   This shared message exists only to receive a 'reinit' call, which is
   taken as a trigger to create and set up HSolve.



Attributes inherited from Neutral:
----------------------------------

