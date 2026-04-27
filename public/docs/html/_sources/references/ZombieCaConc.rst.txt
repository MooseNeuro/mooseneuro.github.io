:orphan:

ZombieCaConc
============


ZombieCaConc: Calcium concentration pool. Takes current from a channel and keeps track of calcium buildup and depletion by a single exponential process.

Author:   Upinder S. Bhalla, 2007, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: B (type: double, class: ZombieCaConc)

   Volume scaling factor. Deprecated. This is a legacy field from GENESIS
   and exposes internal calculations. Please do not use. B = 1/(vol * F*
   VALENCE) so that it obeys: dC/dt = B*I_Ca - C/tau


.. describe:: Ca (type: double, class: ZombieCaConc)

   Calcium concentration.


.. describe:: CaBasal (type: double, class: ZombieCaConc)

   Basal Calcium concentration.


.. describe:: Ca_base (type: double, class: ZombieCaConc)

   Basal Calcium concentration, synonym for CaBasal


.. describe:: ceiling (type: double, class: ZombieCaConc)

   Ceiling value for Ca concentration. If Ca > ceiling, Ca = ceiling. If
   ceiling <= 0.0, there is no upper limit on Ca concentration value.


.. describe:: children (type: vector<Id>, class: ZombieCaConc)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: ZombieCaConc)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: ZombieCaConc)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diameter (type: double, class: ZombieCaConc)

   Diameter of Ca shell, assumed cylindrical


.. describe:: dt (type: double, class: ZombieCaConc)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: ZombieCaConc)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: floor (type: double, class: ZombieCaConc)

   Floor value for Ca concentration. If Ca < floor, Ca = floor


.. describe:: idValue (type: unsigned int, class: ZombieCaConc)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: ZombieCaConc)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: length (type: double, class: ZombieCaConc)

   Length of Ca shell, assumed cylindrical


.. describe:: me (type: ObjId, class: ZombieCaConc)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: ZombieCaConc)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: ZombieCaConc)

   Messages going out from this Element


.. describe:: name (type: string, class: ZombieCaConc)

   Name of object


.. describe:: numData (type: unsigned int, class: ZombieCaConc)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: ZombieCaConc)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: ZombieCaConc)

   Parent ObjId for current object


.. describe:: path (type: string, class: ZombieCaConc)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: ZombieCaConc)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: tau (type: double, class: ZombieCaConc)

   Settling time for Ca concentration


.. describe:: thick (type: double, class: ZombieCaConc)

   Thickness of Ca shell, assumed cylindrical. Legal range is between 0
   and the radius. If outside this range it is taken as the radius. Default
   zero, ie, the shell is the entire thickness of the cylinder


.. describe:: this (type: 7Neutral, class: ZombieCaConc)

   Access function for entire object


.. describe:: tick (type: int, class: ZombieCaConc)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: ZombieCaConc)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: ZombieCaConc)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: ZombieCaConc)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: ZombieCaConc)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: ZombieCaConc)

   Ids of Elements connected this Element on specified field.



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: ZombieCaConc)

   Message to child Elements


.. describe:: concOut (type: double, class: ZombieCaConc)

   Concentration of Ca in pool



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: basal (type: double, class: ZombieCaConc)

   Synonym for assignment of basal conc.


.. describe:: current (type: double, class: ZombieCaConc)

   Calcium Ion current, due to be converted to conc.


.. describe:: currentFraction (type: double,double, class: ZombieCaConc)

   Fraction of total Ion current, that is carried by Ca2+.


.. describe:: decrease (type: double, class: ZombieCaConc)

   Any input current that decreases the concentration.


.. describe:: getB (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCa (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCaBasal (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCa_base (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCeiling (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiameter (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFloor (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLength (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTau (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThick (type: vector<double>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: ZombieCaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: increase (type: double, class: ZombieCaConc)

   Any input current that increases the concentration.


.. describe:: notifyAddMsgDest (type: ObjId, class: ZombieCaConc)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: ZombieCaConc)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: ZombieCaConc)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: ZombieCaConc)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: ZombieCaConc)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: ZombieCaConc)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: ZombieCaConc)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: ZombieCaConc)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: ZombieCaConc)

   Handles reinit call


.. describe:: setB (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setCa (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setCaBasal (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setCa_base (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setCeiling (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setDiameter (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setFloor (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setLength (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setName (type: string, class: ZombieCaConc)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: ZombieCaConc)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: ZombieCaConc)

   Assigns field value.


.. describe:: setTau (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setThick (type: double, class: ZombieCaConc)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: ZombieCaConc)

   Assigns field value.


.. describe:: setTick (type: int, class: ZombieCaConc)

   Assigns field value.



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: ZombieCaConc)

   Shared message to receive Process message from scheduler



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------

