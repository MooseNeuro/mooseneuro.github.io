:orphan:

BufPool
=======


Buffered Pool of molecules of a given species.

Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: BufPool)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: BufPool)

   Class Name of object


.. describe:: compartment (type: ObjId, class: BufPool)

   ObjId of parent compartment of pool. If the compartment isn'tavailable
   this returns the root ObjId.


.. describe:: conc (type: double, class: BufPool)

   Concentration of molecules in this pool


.. describe:: concInit (type: double, class: BufPool)

   Initial value of molecular concentration in pool


.. describe:: coords (type: vector<double>, class: BufPool)

   coordinates of pool, based on mid-point of voxel in which it is situated.
   If the parent compartment isn'tavailable this returns [0, 0, 0].


.. describe:: destFields (type: vector<string>, class: BufPool)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diffConst (type: double, class: BufPool)

   Diffusion constant of molecule


.. describe:: dt (type: double, class: BufPool)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: BufPool)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: BufPool)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: BufPool)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isBuffered (type: bool, class: BufPool)

   Flag: True if Pool is buffered. In the case of Pool and BufPool the field
   can be assigned, to change the type of the Pool object to BufPool, or
   vice versa. None of the messages are affected. This object class flip
   can only be done in the non-zombified form of the Pool/BufPool. In Zombies
   it is read-only.


.. describe:: me (type: ObjId, class: BufPool)

   ObjId for current object


.. describe:: midPoint (type: vector<double>, class: BufPool)

   mid-point of voxel in which Pool is situated. If the parent compartment
   isn'tavailable this returns [0, 0, 0].


.. describe:: motorConst (type: double, class: BufPool)

   Motor transport rate molecule. + is away from soma, - is towards soma.
   Only relevant for ZombiePool subclasses.


.. describe:: msgIn (type: vector<ObjId>, class: BufPool)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: BufPool)

   Messages going out from this Element


.. describe:: n (type: double, class: BufPool)

   Number of molecules in pool


.. describe:: nInit (type: double, class: BufPool)

   Initial value of number of molecules in pool


.. describe:: name (type: string, class: BufPool)

   Name of object


.. describe:: numData (type: unsigned int, class: BufPool)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: BufPool)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: BufPool)

   Parent ObjId for current object


.. describe:: path (type: string, class: BufPool)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: BufPool)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: speciesId (type: unsigned int, class: BufPool)

   Species identifier for this mol pool. Eventually link to ontology.


.. describe:: this (type: 7Neutral, class: BufPool)

   Access function for entire object


.. describe:: tick (type: int, class: BufPool)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: BufPool)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: BufPool)

   Volume of compartment. Units are SI. Utility field, the actual volume
   info is stored on a volume mesh entry in the parent compartment.This
   mapping is implicit: the parent compartment must be somewhere up the
   element tree, and must have matching mesh entries. If the compartment
   isn'tavailable the volume is just taken as 1



Attributes inherited from PoolBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: BufPool)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: BufPool)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: BufPool)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: BufPool)

   Ids of Elements connected this Element on specified field.



Attributes inherited from PoolBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: BufPool)

   Message to child Elements


.. describe:: nOut (type: double, class: BufPool)

   Sends out # of molecules in pool on each timestep


.. describe:: requestMolWt (type: void, class: BufPool)

   Requests Species object for mol wt



Attributes inherited from PoolBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: decrement (type: double, class: BufPool)

   Decrements mol numbers by specified amount. Can be +ve or -ve


.. describe:: getChildren (type: vector<vector<Id>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompartment (type: vector<ObjId>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getConc (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getConcInit (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCoords (type: vector<vector<double>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiffConst (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsBuffered (type: vector<bool>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMidPoint (type: vector<vector<double>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMotorConst (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getN (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNInit (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpeciesId (type: vector<unsigned int>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: BufPool)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: handleMolWt (type: double, class: BufPool)

   Separate finfo to assign molWt, and consequently diffusion const.Should
   only be used in SharedMsg with species.


.. describe:: increment (type: double, class: BufPool)

   Increments mol numbers by specified amount. Can be +ve or -ve


.. describe:: nIn (type: double, class: BufPool)

   Assigns the number of molecules in Pool to specified value


.. describe:: notifyAddMsgDest (type: ObjId, class: BufPool)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: BufPool)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: BufPool)

   Called when object is created. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: BufPool)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: BufPool)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: BufPool)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: BufPool)

   Message from Parent Element(s)


.. describe:: reacDest (type: double,double, class: BufPool)

   Handles reaction input


.. describe:: setConc (type: double, class: BufPool)

   Assigns field value.


.. describe:: setConcInit (type: double, class: BufPool)

   Assigns field value.


.. describe:: setDiffConst (type: double, class: BufPool)

   Assigns field value.


.. describe:: setIsBuffered (type: bool, class: BufPool)

   Assigns field value.


.. describe:: setMotorConst (type: double, class: BufPool)

   Assigns field value.


.. describe:: setN (type: double, class: BufPool)

   Assigns field value.


.. describe:: setNInit (type: double, class: BufPool)

   Assigns field value.


.. describe:: setName (type: string, class: BufPool)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: BufPool)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: BufPool)

   Assigns field value.


.. describe:: setSolvers (type: ObjId,ObjId, class: BufPool)

   Assigns solvers to Pool. Args: ksolve, dsolve


.. describe:: setSpeciesId (type: unsigned int, class: BufPool)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: BufPool)

   Assigns field value.


.. describe:: setTick (type: int, class: BufPool)

   Assigns field value.


.. describe:: setVolume (type: double, class: BufPool)

   Assigns field value.



Attributes inherited from PoolBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: reac (type: void, class: BufPool)

   Connects to reaction


.. describe:: species (type: void, class: BufPool)

   Shared message for connecting to species objects



Attributes inherited from PoolBase:
-----------------------------------


Attributes inherited from Neutral:
----------------------------------

