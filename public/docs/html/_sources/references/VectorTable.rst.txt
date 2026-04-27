:orphan:

VectorTable
===========


This is a minimal 1D equivalent of the Interpol2D class. Provides simple functions for getting and setting up the table, along with a lookup function. This class is to be used while supplying lookup tables to the MarkovChannel class, in cases where the transition rate varies with either membrane voltage or ligand concentration.

Author:   Vishaka Datta S, 2011, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: VectorTable)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: VectorTable)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: VectorTable)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: VectorTable)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: VectorTable)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: VectorTable)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: VectorTable)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: invdx (type: double, class: VectorTable)

   Maximum value in table.


.. describe:: me (type: ObjId, class: VectorTable)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: VectorTable)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: VectorTable)

   Messages going out from this Element


.. describe:: name (type: string, class: VectorTable)

   Name of object


.. describe:: numData (type: unsigned int, class: VectorTable)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: VectorTable)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: VectorTable)

   Parent ObjId for current object


.. describe:: path (type: string, class: VectorTable)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: VectorTable)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: table (type: vector<double>, class: VectorTable)

   The lookup table.


.. describe:: this (type: 7Neutral, class: VectorTable)

   Access function for entire object


.. describe:: tick (type: int, class: VectorTable)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: VectorTable)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: xdivs (type: unsigned int, class: VectorTable)

   Number of divisions.


.. describe:: xmax (type: double, class: VectorTable)

   Maximum value in table.


.. describe:: xmin (type: double, class: VectorTable)

   Minimum value in table.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: VectorTable)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: lookupindex (type: unsigned int,double, class: VectorTable)

   Lookup function that returns value by index.


.. describe:: lookupvalue (type: double,double, class: VectorTable)

   Lookup function that performs interpolation to return a value.


.. describe:: msgDestFunctions (type: string,vector<string>, class: VectorTable)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: VectorTable)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: VectorTable)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: VectorTable)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInvdx (type: vector<double>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLookupindex (type: double, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLookupvalue (type: double, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTable (type: vector<vector<double>>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXdivs (type: vector<unsigned int>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmax (type: vector<double>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXmin (type: vector<double>*, class: VectorTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: VectorTable)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: VectorTable)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: VectorTable)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: VectorTable)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: VectorTable)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: VectorTable)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: VectorTable)

   Message from Parent Element(s)


.. describe:: setName (type: string, class: VectorTable)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: VectorTable)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: VectorTable)

   Assigns field value.


.. describe:: setTable (type: vector<double>, class: VectorTable)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: VectorTable)

   Assigns field value.


.. describe:: setTick (type: int, class: VectorTable)

   Assigns field value.


.. describe:: setXdivs (type: unsigned int, class: VectorTable)

   Assigns field value.


.. describe:: setXmax (type: double, class: VectorTable)

   Assigns field value.


.. describe:: setXmin (type: double, class: VectorTable)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------

