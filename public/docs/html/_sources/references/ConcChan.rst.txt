:orphan:

ConcChan
========


Channel for molecular flow between cellular compartments. Need not be ions, and the flux is not a current, but number of molecules/sec.

Author:   Upinder S. Bhalla, 2018, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: ConcChan)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: ConcChan)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: ConcChan)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: ConcChan)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: ConcChan)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: flux (type: double, class: ConcChan)

   Flux of molecules through channel, in units of #/s


.. describe:: idValue (type: unsigned int, class: ConcChan)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: ConcChan)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: ConcChan)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: ConcChan)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: ConcChan)

   Messages going out from this Element


.. describe:: name (type: string, class: ConcChan)

   Name of object


.. describe:: numChan (type: double, class: ConcChan)

   numChan is the number of molecules of the channel.


.. describe:: numData (type: unsigned int, class: ConcChan)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: ConcChan)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: ConcChan)

   Parent ObjId for current object


.. describe:: path (type: string, class: ConcChan)

   text path for object


.. describe:: permeability (type: double, class: ConcChan)

   Permability, in units of vol/(#s) i.e., 1/(numconc.s) Flux (#/s) = permeability
   * N * (#out/vol_out - #in/vol_in)


.. describe:: sourceFields (type: vector<string>, class: ConcChan)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: ConcChan)

   Access function for entire object


.. describe:: tick (type: int, class: ConcChan)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: ConcChan)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: ConcChan)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: ConcChan)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: ConcChan)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: ConcChan)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: ConcChan)

   Message to child Elements


.. describe:: inPoolOut (type: double,double, class: ConcChan)

   Sends out increment to molecules on inside of membrane


.. describe:: outPoolOut (type: double,double, class: ConcChan)

   Sends out increment to molecules on outside of membrane



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFlux (type: vector<double>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumChan (type: vector<double>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPermeability (type: vector<double>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: ConcChan)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: inPool (type: double, class: ConcChan)

   Handles # of molecules of pool inside membrane


.. describe:: notifyAddMsgDest (type: ObjId, class: ConcChan)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: ConcChan)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: ConcChan)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: ConcChan)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: ConcChan)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: ConcChan)

   Called when object is moved. Arg is new parent.


.. describe:: outPool (type: double, class: ConcChan)

   Handles # of molecules of pool outside membrane


.. describe:: parentMsg (type: int, class: ConcChan)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: ConcChan)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: ConcChan)

   Handles reinit call


.. describe:: setName (type: string, class: ConcChan)

   Assigns field value.


.. describe:: setNumChan (type: double, class: ConcChan)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: ConcChan)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: ConcChan)

   Assigns field value.


.. describe:: setPermeability (type: double, class: ConcChan)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: ConcChan)

   Assigns field value.


.. describe:: setTick (type: int, class: ConcChan)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: in (type: void, class: ConcChan)

   Connects to pool on inside


.. describe:: out (type: void, class: ConcChan)

   Connects to pool on outside


.. describe:: proc (type: void, class: ConcChan)

   Shared message for process and reinit



Attributes inherited from Neutral:
----------------------------------

