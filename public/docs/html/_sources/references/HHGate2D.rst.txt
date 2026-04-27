:orphan:

HHGate2D
========


HHGate2D: Gate for Hodkgin-Huxley type channels, equivalent to the m and h terms on the Na squid channel and the n term on K. This takes the voltage and state variable from the channel, computes the new value of the state variable and a scaling, depending on gate power, for the conductance. These two terms are sent right back in a message to the channel.

Author:   Niraj Dudani, 2009, NCBS. Updated by Subhasis Ray, 2014, 2024 NCBS.


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: HHGate2D)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: HHGate2D)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: HHGate2D)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: HHGate2D)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: HHGate2D)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: HHGate2D)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HHGate2D)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: HHGate2D)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: HHGate2D)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HHGate2D)

   Messages going out from this Element


.. describe:: name (type: string, class: HHGate2D)

   Name of object


.. describe:: numData (type: unsigned int, class: HHGate2D)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HHGate2D)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HHGate2D)

   Parent ObjId for current object


.. describe:: path (type: string, class: HHGate2D)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: HHGate2D)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: tableA (type: vector< vector<double> >, class: HHGate2D)

   Table of A entries


.. describe:: tableB (type: vector< vector<double> >, class: HHGate2D)

   Table of B entries


.. describe:: this (type: 7Neutral, class: HHGate2D)

   Access function for entire object


.. describe:: tick (type: int, class: HHGate2D)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: HHGate2D)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: xdivs (type: unsigned int, class: HHGate2D)

   Divisions for lookup. Zero means to use linear interpolation


.. describe:: xmax (type: double, class: HHGate2D)

   Minimum range for lookup


.. describe:: xmin (type: double, class: HHGate2D)

   Minimum range for lookup


.. describe:: ydivs (type: unsigned int, class: HHGate2D)

   Divisions for lookup. Zero means to use linear interpolation


.. describe:: ymax (type: double, class: HHGate2D)

   Minimum range for lookup


.. describe:: ymin (type: double, class: HHGate2D)

   Minimum range for lookup



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: A (type: vector<double>,double, class: HHGate2D)

   lookupA: Look up the A gate value from two doubles, passedin as a vector.
   Uses linear interpolation in the 2D tableThe range of the lookup doubles
   is predefined based on knowledge of voltage or conc ranges, and the granularity
   is specified by the xmin, xmax, and dx field, and their y-axis counterparts.



.. describe:: B (type: vector<double>,double, class: HHGate2D)

   lookupB: Look up B gate value from two doubles in a vector.


.. describe:: isA (type: string,bool, class: HHGate2D)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: HHGate2D)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HHGate2D)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HHGate2D)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: HHGate2D)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getA (type: double, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getB (type: double, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTableA (type: PSt6vectorIS_IS_IdSaIdEESaIS1_EESaIS3_EE, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTableB (type: PSt6vectorIS_IS_IdSaIdEESaIS1_EESaIS3_EE, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXdivs (type: vector<unsigned int>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmax (type: vector<double>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmin (type: vector<double>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYdivs (type: vector<unsigned int>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYmax (type: vector<double>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYmin (type: vector<double>*, class: HHGate2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HHGate2D)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HHGate2D)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HHGate2D)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HHGate2D)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HHGate2D)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HHGate2D)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HHGate2D)

   Message from Parent Element(s)


.. describe:: setName (type: string, class: HHGate2D)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HHGate2D)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HHGate2D)

   Assigns field value.


.. describe:: setTableA (type: vector< vector<double> >, class: HHGate2D)

   Assigns field value.


.. describe:: setTableB (type: vector< vector<double> >, class: HHGate2D)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: HHGate2D)

   Assigns field value.


.. describe:: setTick (type: int, class: HHGate2D)

   Assigns field value.


.. describe:: setXdivs (type: unsigned int, class: HHGate2D)

   Assigns field value.


.. describe:: setXmax (type: double, class: HHGate2D)

   Assigns field value.


.. describe:: setXmin (type: double, class: HHGate2D)

   Assigns field value.


.. describe:: setYdivs (type: unsigned int, class: HHGate2D)

   Assigns field value.


.. describe:: setYmax (type: double, class: HHGate2D)

   Assigns field value.


.. describe:: setYmin (type: double, class: HHGate2D)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------

