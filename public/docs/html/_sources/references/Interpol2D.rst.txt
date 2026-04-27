:orphan:

Interpol2D
==========


Interpol2D: Interpolation class. Handles lookup from a 2-dimensional grid of real-numbered values. Returns 'z' value based on given 'x' and 'y' values. Can either use interpolation or roundoff to the nearest index.

Author:   Niraj Dudani, 2009, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Interpol2D)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Interpol2D)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: Interpol2D)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Interpol2D)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: dx (type: double, class: Interpol2D)

   Increment on x axis of lookup table


.. describe:: dy (type: double, class: Interpol2D)

   Increment on y axis of lookup table


.. describe:: fieldIndex (type: unsigned int, class: Interpol2D)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Interpol2D)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Interpol2D)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Interpol2D)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Interpol2D)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Interpol2D)

   Messages going out from this Element


.. describe:: name (type: string, class: Interpol2D)

   Name of object


.. describe:: numData (type: unsigned int, class: Interpol2D)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Interpol2D)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: Interpol2D)

   Parent ObjId for current object


.. describe:: path (type: string, class: Interpol2D)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: Interpol2D)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: tableVector2D (type: vector< vector<double> >, class: Interpol2D)

   Get the entire table.


.. describe:: this (type: 7Neutral, class: Interpol2D)

   Access function for entire object


.. describe:: tick (type: int, class: Interpol2D)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Interpol2D)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: xdivs (type: unsigned int, class: Interpol2D)

   # of divisions on x axis of lookup table


.. describe:: xmax (type: double, class: Interpol2D)

   Maximum value for x axis of lookup table


.. describe:: xmin (type: double, class: Interpol2D)

   Minimum value for x axis of lookup table


.. describe:: ydivs (type: unsigned int, class: Interpol2D)

   # of divisions on y axis of lookup table


.. describe:: ymax (type: double, class: Interpol2D)

   Maximum value for y axis of lookup table


.. describe:: ymin (type: double, class: Interpol2D)

   Minimum value for y axis of lookup table



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Interpol2D)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Interpol2D)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Interpol2D)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Interpol2D)

   Ids of Elements connected this Element on specified field.


.. describe:: table (type: vector<unsigned int>,double, class: Interpol2D)

   Lookup an entry on the table


.. describe:: z (type: vector<double>,double, class: Interpol2D)

   Interpolated value for specified x and y. This is provided for debugging.
   Normally other objects will retrieve interpolated values via lookup message.




Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Interpol2D)

   Message to child Elements


.. describe:: lookupOut (type: double, class: Interpol2D)

   respond to a request for a value lookup



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDx (type: vector<double>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDy (type: vector<double>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTable (type: double, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTableVector2D (type: PSt6vectorIS_IS_IdSaIdEESaIS1_EESaIS3_EE, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXdivs (type: vector<unsigned int>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmax (type: vector<double>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmin (type: vector<double>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYdivs (type: vector<unsigned int>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYmax (type: vector<double>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getYmin (type: vector<double>*, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ (type: double, class: Interpol2D)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: lookup (type: double,double, class: Interpol2D)

   Looks up table value based on indices v1 and v2, and sendsvalue back
   using the 'lookupOut' message


.. describe:: notifyAddMsgDest (type: ObjId, class: Interpol2D)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Interpol2D)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Interpol2D)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Interpol2D)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Interpol2D)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Interpol2D)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Interpol2D)

   Message from Parent Element(s)


.. describe:: setDx (type: double, class: Interpol2D)

   Assigns field value.


.. describe:: setDy (type: double, class: Interpol2D)

   Assigns field value.


.. describe:: setName (type: string, class: Interpol2D)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Interpol2D)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Interpol2D)

   Assigns field value.


.. describe:: setTable (type: vector<unsigned int>,double, class: Interpol2D)

   Assigns field value.


.. describe:: setTableVector2D (type: vector< vector<double> >, class: Interpol2D)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Interpol2D)

   Assigns field value.


.. describe:: setTick (type: int, class: Interpol2D)

   Assigns field value.


.. describe:: setXdivs (type: unsigned int, class: Interpol2D)

   Assigns field value.


.. describe:: setXmax (type: double, class: Interpol2D)

   Assigns field value.


.. describe:: setXmin (type: double, class: Interpol2D)

   Assigns field value.


.. describe:: setYdivs (type: unsigned int, class: Interpol2D)

   Assigns field value.


.. describe:: setYmax (type: double, class: Interpol2D)

   Assigns field value.


.. describe:: setYmin (type: double, class: Interpol2D)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: lookupReturn2D (type: void, class: Interpol2D)

   This is a shared message for doing lookups on the table. Receives 2 doubles:
   x, y. Sends back a double with the looked-up z value.



Attributes inherited from Neutral:
----------------------------------

