:orphan:

HSolve
======


HSolve: Hines solver, for solving branching neuron models.

Author:   Niraj Dudani, 2007, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: caAdvance (type: int, class: HSolve)

   This flag determines how current flowing into a calcium pool is computed.
   A value of 0 means that the membrane potential at the beginning of the
   time-step is used for the calculation. This is how GENESIS does its computations.
   A value of 1 means the membrane potential at the middle of the time-step
   is used. This is the correct way of integration, and is the default way.



.. describe:: caDiv (type: int, class: HSolve)

   Specifies number of divisions for lookup tables of calcium-sensitive
   channels.


.. describe:: caMax (type: double, class: HSolve)

   Specifies the upper bound for lookup tables of calcium-sensitive channels.
   Default is to automatically decide based on the tables of the channels
   that the solver reads in.


.. describe:: caMin (type: double, class: HSolve)

   Specifies the lower bound for lookup tables of calcium-sensitive channels.
   Default is to automatically decide based on the tables of the channels
   that the solver reads in.


.. describe:: children (type: vector<Id>, class: HSolve)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: HSolve)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: HSolve)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: HSolve)

   The time-step for this solver.


.. describe:: fieldIndex (type: unsigned int, class: HSolve)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: HSolve)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HSolve)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: HSolve)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: HSolve)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HSolve)

   Messages going out from this Element


.. describe:: name (type: string, class: HSolve)

   Name of object


.. describe:: numData (type: unsigned int, class: HSolve)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HSolve)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HSolve)

   Parent ObjId for current object


.. describe:: path (type: string, class: HSolve)

   text path for object


.. describe:: seed (type: Id, class: HSolve)

   Use this field to specify path to a 'seed' compartment, that is, any
   compartment within a neuron. The HSolve object uses this seed as a handle
   to discover the rest of the neuronal model, which means all the remaining
   compartments, channels, synapses, etc.


.. describe:: sourceFields (type: vector<string>, class: HSolve)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: target (type: string, class: HSolve)

   Specifies the path to a compartmental model to be taken over. This can
   be the path to any container object that has the model under it (found
   by performing a deep search). Alternatively, this can also be the path
   to any compartment within the neuron. This compartment will be used as
   a handle to discover the rest of the model, which means all the remaining
   compartments, channels, synapses, etc.


.. describe:: this (type: 7Neutral, class: HSolve)

   Access function for entire object


.. describe:: tick (type: int, class: HSolve)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: vDiv (type: int, class: HSolve)

   Specifies number of divisions for lookup tables of voltage-sensitive
   channels.


.. describe:: vMax (type: double, class: HSolve)

   Specifies the upper bound for lookup tables of voltage-sensitive channels.
   Default is to automatically decide based on the tables of the channels
   that the solver reads in.


.. describe:: vMin (type: double, class: HSolve)

   Specifies the lower bound for lookup tables of voltage-sensitive channels.
   Default is to automatically decide based on the tables of the channels
   that the solver reads in.


.. describe:: valueFields (type: vector<string>, class: HSolve)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: HSolve)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: HSolve)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HSolve)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HSolve)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: HSolve)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getCaAdvance (type: PSt6vectorIiSaIiEE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCaDiv (type: PSt6vectorIiSaIiEE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCaMax (type: vector<double>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCaMin (type: vector<double>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSeed (type: vector<Id>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTarget (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVDiv (type: PSt6vectorIiSaIiEE, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVMax (type: vector<double>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVMin (type: vector<double>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HSolve)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HSolve)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HSolve)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HSolve)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HSolve)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HSolve)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HSolve)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HSolve)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: HSolve)

   Handles 'process' call: Solver advances by one time-step.


.. describe:: reinit (type: const ProcInfo*, class: HSolve)

   Handles 'reinit' call: Solver reads in model.


.. describe:: setCaAdvance (type: int, class: HSolve)

   Assigns field value.


.. describe:: setCaDiv (type: int, class: HSolve)

   Assigns field value.


.. describe:: setCaMax (type: double, class: HSolve)

   Assigns field value.


.. describe:: setCaMin (type: double, class: HSolve)

   Assigns field value.


.. describe:: setDt (type: double, class: HSolve)

   Assigns field value.


.. describe:: setName (type: string, class: HSolve)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HSolve)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HSolve)

   Assigns field value.


.. describe:: setSeed (type: Id, class: HSolve)

   Assigns field value.


.. describe:: setTarget (type: string, class: HSolve)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: HSolve)

   Assigns field value.


.. describe:: setTick (type: int, class: HSolve)

   Assigns field value.


.. describe:: setVDiv (type: int, class: HSolve)

   Assigns field value.


.. describe:: setVMax (type: double, class: HSolve)

   Assigns field value.


.. describe:: setVMin (type: double, class: HSolve)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: HSolve)

   Handles 'reinit' and 'process' calls from a clock.



Attributes inherited from Neutral:
----------------------------------

