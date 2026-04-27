:orphan:

CaConc
======


CaConc: Calcium concentration pool. Takes current from a
channel and keeps track of calcium buildup and depletion by a
single exponential process.


Author:   Upinder S. Bhalla, 2014, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: B (type: double, class: CaConc)

   Volume scaling factor. Deprecated. This is a legacy field from GENESIS
   and exposes internal calculations. Please do not use. B = 1/(vol * F*
   VALENCE) so that it obeys: dC/dt = B*I_Ca - C/tau


.. describe:: Ca (type: double, class: CaConc)

   Calcium concentration.


.. describe:: CaBasal (type: double, class: CaConc)

   Basal Calcium concentration.


.. describe:: Ca_base (type: double, class: CaConc)

   Basal Calcium concentration, synonym for CaBasal


.. describe:: ceiling (type: double, class: CaConc)

   Ceiling value for Ca concentration. If Ca > ceiling, Ca = ceiling. If
   ceiling <= 0.0, there is no upper limit on Ca concentration value.


.. describe:: children (type: vector<Id>, class: CaConc)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: CaConc)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: CaConc)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diameter (type: double, class: CaConc)

   Diameter of Ca shell, assumed cylindrical


.. describe:: dt (type: double, class: CaConc)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: CaConc)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: floor (type: double, class: CaConc)

   Floor value for Ca concentration. If Ca < floor, Ca = floor


.. describe:: idValue (type: unsigned int, class: CaConc)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: CaConc)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: length (type: double, class: CaConc)

   Length of Ca shell, assumed cylindrical


.. describe:: me (type: ObjId, class: CaConc)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: CaConc)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: CaConc)

   Messages going out from this Element


.. describe:: name (type: string, class: CaConc)

   Name of object


.. describe:: numData (type: unsigned int, class: CaConc)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: CaConc)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: CaConc)

   Parent ObjId for current object


.. describe:: path (type: string, class: CaConc)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: CaConc)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: tau (type: double, class: CaConc)

   Settling time for Ca concentration


.. describe:: thick (type: double, class: CaConc)

   Thickness of Ca shell, assumed cylindrical. Legal range is between 0
   and the radius. If outside this range it is taken as the radius. Default
   zero, ie, the shell is the entire thickness of the cylinder


.. describe:: this (type: 7Neutral, class: CaConc)

   Access function for entire object


.. describe:: tick (type: int, class: CaConc)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: CaConc)

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

.. describe:: isA (type: string,bool, class: CaConc)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: CaConc)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: CaConc)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: CaConc)

   Ids of Elements connected this Element on specified field.



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: CaConc)

   Message to child Elements


.. describe:: concOut (type: double, class: CaConc)

   Concentration of Ca in pool



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: basal (type: double, class: CaConc)

   Synonym for assignment of basal conc.


.. describe:: current (type: double, class: CaConc)

   Calcium Ion current, due to be converted to conc.


.. describe:: currentFraction (type: double,double, class: CaConc)

   Fraction of total Ion current, that is carried by Ca2+.


.. describe:: decrease (type: double, class: CaConc)

   Any input current that decreases the concentration.


.. describe:: getB (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCa (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCaBasal (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCa_base (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCeiling (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiameter (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFloor (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLength (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTau (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThick (type: vector<double>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: CaConc)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: increase (type: double, class: CaConc)

   Any input current that increases the concentration.


.. describe:: notifyAddMsgDest (type: ObjId, class: CaConc)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: CaConc)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: CaConc)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: CaConc)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: CaConc)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: CaConc)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: CaConc)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: CaConc)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: CaConc)

   Handles reinit call


.. describe:: setB (type: double, class: CaConc)

   Assigns field value.


.. describe:: setCa (type: double, class: CaConc)

   Assigns field value.


.. describe:: setCaBasal (type: double, class: CaConc)

   Assigns field value.


.. describe:: setCa_base (type: double, class: CaConc)

   Assigns field value.


.. describe:: setCeiling (type: double, class: CaConc)

   Assigns field value.


.. describe:: setDiameter (type: double, class: CaConc)

   Assigns field value.


.. describe:: setFloor (type: double, class: CaConc)

   Assigns field value.


.. describe:: setLength (type: double, class: CaConc)

   Assigns field value.


.. describe:: setName (type: string, class: CaConc)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: CaConc)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: CaConc)

   Assigns field value.


.. describe:: setTau (type: double, class: CaConc)

   Assigns field value.


.. describe:: setThick (type: double, class: CaConc)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: CaConc)

   Assigns field value.


.. describe:: setTick (type: int, class: CaConc)

   Assigns field value.



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: CaConc)

   Shared message to receive Process message from scheduler



Attributes inherited from CaConcBase:
-------------------------------------


Attributes inherited from Neutral:
----------------------------------

