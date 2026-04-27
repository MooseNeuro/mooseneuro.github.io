:orphan:

Annotator
=========





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Annotator)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Annotator)

   Class Name of object


.. describe:: color (type: string, class: Annotator)

   A string to hold a text string specifying display color.Can be a regular
   English color name, or an rgb code rrrgggbbb


.. describe:: destFields (type: vector<string>, class: Annotator)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dirpath (type: string, class: Annotator)

   directory path for Gui


.. describe:: dt (type: double, class: Annotator)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Annotator)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: height (type: double, class: Annotator)

   height field. Typically display height


.. describe:: icon (type: string, class: Annotator)

   A string to specify icon to use for display


.. describe:: idValue (type: unsigned int, class: Annotator)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Annotator)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Annotator)

   ObjId for current object


.. describe:: modeltype (type: string, class: Annotator)

   model type


.. describe:: msgIn (type: vector<ObjId>, class: Annotator)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Annotator)

   Messages going out from this Element


.. describe:: name (type: string, class: Annotator)

   Name of object


.. describe:: notes (type: string, class: Annotator)

   A string to hold some text notes about parent object


.. describe:: numData (type: unsigned int, class: Annotator)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Annotator)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: Annotator)

   Parent ObjId for current object


.. describe:: path (type: string, class: Annotator)

   text path for object


.. describe:: runtime (type: double, class: Annotator)

   runtime field. Store runtime


.. describe:: solver (type: string, class: Annotator)

   A string to specify solver to store for Gui


.. describe:: sourceFields (type: vector<string>, class: Annotator)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: textColor (type: string, class: Annotator)

   A string to hold a text string specifying color for text labelthat might
   be on the display for this object.Can be a regular English color name,
   or an rgb code rrrgggbbb


.. describe:: this (type: 7Neutral, class: Annotator)

   Access function for entire object


.. describe:: tick (type: int, class: Annotator)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Annotator)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: width (type: double, class: Annotator)

   width field. Typically display width


.. describe:: x (type: double, class: Annotator)

   x field. Typically display coordinate x


.. describe:: y (type: double, class: Annotator)

   y field. Typically display coordinate y


.. describe:: z (type: double, class: Annotator)

   z field. Typically display coordinate z



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Annotator)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Annotator)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Annotator)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Annotator)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Annotator)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getColor (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDirpath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getHeight (type: vector<double>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIcon (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getModeltype (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNotes (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRuntime (type: vector<double>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSolver (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTextColor (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWidth (type: vector<double>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX (type: vector<double>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: vector<double>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ (type: vector<double>*, class: Annotator)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Annotator)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Annotator)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Annotator)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Annotator)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Annotator)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Annotator)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Annotator)

   Message from Parent Element(s)


.. describe:: setColor (type: string, class: Annotator)

   Assigns field value.


.. describe:: setDirpath (type: string, class: Annotator)

   Assigns field value.


.. describe:: setHeight (type: double, class: Annotator)

   Assigns field value.


.. describe:: setIcon (type: string, class: Annotator)

   Assigns field value.


.. describe:: setModeltype (type: string, class: Annotator)

   Assigns field value.


.. describe:: setName (type: string, class: Annotator)

   Assigns field value.


.. describe:: setNotes (type: string, class: Annotator)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Annotator)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Annotator)

   Assigns field value.


.. describe:: setRuntime (type: double, class: Annotator)

   Assigns field value.


.. describe:: setSolver (type: string, class: Annotator)

   Assigns field value.


.. describe:: setTextColor (type: string, class: Annotator)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Annotator)

   Assigns field value.


.. describe:: setTick (type: int, class: Annotator)

   Assigns field value.


.. describe:: setWidth (type: double, class: Annotator)

   Assigns field value.


.. describe:: setX (type: double, class: Annotator)

   Assigns field value.


.. describe:: setY (type: double, class: Annotator)

   Assigns field value.


.. describe:: setZ (type: double, class: Annotator)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------

