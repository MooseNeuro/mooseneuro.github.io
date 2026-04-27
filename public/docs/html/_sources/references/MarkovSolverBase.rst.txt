:orphan:

MarkovSolverBase
================


Solver for Markov Channel.

Author:   Vishaka Datta S, 2011, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Q (type: vector< vector<double> >, class: MarkovSolverBase)

   Instantaneous rate matrix.


.. describe:: children (type: vector<Id>, class: MarkovSolverBase)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: MarkovSolverBase)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: MarkovSolverBase)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: MarkovSolverBase)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: MarkovSolverBase)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: MarkovSolverBase)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: MarkovSolverBase)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: initialState (type: vector<double>, class: MarkovSolverBase)

   Initial state of the channel.


.. describe:: invdx (type: double, class: MarkovSolverBase)

   Reciprocal of increment on x axis of lookup table


.. describe:: invdy (type: double, class: MarkovSolverBase)

   Reciprocal of increment on y axis of lookup table


.. describe:: me (type: ObjId, class: MarkovSolverBase)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: MarkovSolverBase)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: MarkovSolverBase)

   Messages going out from this Element


.. describe:: name (type: string, class: MarkovSolverBase)

   Name of object


.. describe:: numData (type: unsigned int, class: MarkovSolverBase)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: MarkovSolverBase)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: MarkovSolverBase)

   Parent ObjId for current object


.. describe:: path (type: string, class: MarkovSolverBase)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: MarkovSolverBase)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: state (type: vector<double>, class: MarkovSolverBase)

   Current state of the channel.


.. describe:: this (type: 7Neutral, class: MarkovSolverBase)

   Access function for entire object


.. describe:: tick (type: int, class: MarkovSolverBase)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: MarkovSolverBase)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: xdivs (type: unsigned int, class: MarkovSolverBase)

   # of divisions on x axis of lookup table


.. describe:: xmax (type: double, class: MarkovSolverBase)

   Maximum value for x axis of lookup table


.. describe:: xmin (type: double, class: MarkovSolverBase)

   Minimum value for x axis of lookup table


.. describe:: ydivs (type: unsigned int, class: MarkovSolverBase)

   # of divisions on y axis of lookup table


.. describe:: ymax (type: double, class: MarkovSolverBase)

   Maximum value for y axis of lookup table


.. describe:: ymin (type: double, class: MarkovSolverBase)

   Minimum value for y axis of lookup table



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: MarkovSolverBase)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: MarkovSolverBase)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: MarkovSolverBase)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: MarkovSolverBase)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: MarkovSolverBase)

   Message to child Elements


.. describe:: stateOut (type: vector<double>, class: MarkovSolverBase)

   Sends updated state to the MarkovChannel class.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInitialState (type: vector<vector<double>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInvdx (type: vector<double>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInvdy (type: vector<double>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getQ (type: PSt6vectorIS_IS_IdSaIdEESaIS1_EESaIS3_EE, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getState (type: vector<vector<double>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXdivs (type: vector<unsigned int>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmax (type: vector<double>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmin (type: vector<double>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYdivs (type: vector<unsigned int>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYmax (type: vector<double>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYmin (type: vector<double>*, class: MarkovSolverBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: handleVm (type: double, class: MarkovSolverBase)

   Handles incoming message containing voltage information.


.. describe:: init (type: Id,double, class: MarkovSolverBase)

   Setups the table of matrix exponentials associated with the solver object.



.. describe:: ligandConc (type: double, class: MarkovSolverBase)

   Handles incoming message containing ligand concentration.


.. describe:: notifyAddMsgDest (type: ObjId, class: MarkovSolverBase)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: MarkovSolverBase)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: MarkovSolverBase)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: MarkovSolverBase)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: MarkovSolverBase)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: MarkovSolverBase)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: MarkovSolverBase)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: MarkovSolverBase)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: MarkovSolverBase)

   Handles reinit call


.. describe:: setInitialState (type: vector<double>, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setName (type: string, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setTick (type: int, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setXdivs (type: unsigned int, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setXmax (type: double, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setXmin (type: double, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setYdivs (type: unsigned int, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setYmax (type: double, class: MarkovSolverBase)

   Assigns field value.


.. describe:: setYmin (type: double, class: MarkovSolverBase)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: channel (type: void, class: MarkovSolverBase)

   This message couples the MarkovSolverBase to the Compartment. The compartment
   needs Vm in order to look up the correct matrix exponential for computing
   the state.


.. describe:: proc (type: void, class: MarkovSolverBase)

   This is a shared message to receive Process message from thescheduler.
   The first entry is a MsgDest for the Process operation. It has a single
   argument, ProcInfo, which holds lots of information about current time,
   thread, dt andso on. The second entry is a MsgDest for the Reinit operation.
   It also uses ProcInfo.



Attributes inherited from Neutral:
----------------------------------

