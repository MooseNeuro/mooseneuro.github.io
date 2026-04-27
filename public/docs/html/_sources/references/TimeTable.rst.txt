:orphan:

TimeTable
=========


TimeTable: Read in spike times from file and send out eventOut messages
at the specified times.

Author:   Johannes Hjorth, 2008, KTH, Stockholm. Ported to buildQ branch using
new API by Subhasis Ray, NCBS, Bangalore, 2013.


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: TimeTable)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: TimeTable)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: TimeTable)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: TimeTable)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: TimeTable)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: filename (type: string, class: TimeTable)

   File to read lookup data from. The file should be contain two columns
   separated by any space character.


.. describe:: idValue (type: unsigned int, class: TimeTable)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: TimeTable)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: TimeTable)

   ObjId for current object


.. describe:: method (type: int, class: TimeTable)

   Method to use for filling up the entries. Currently only method 4 (loading
   from file) is supported.


.. describe:: msgIn (type: vector<ObjId>, class: TimeTable)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: TimeTable)

   Messages going out from this Element


.. describe:: name (type: string, class: TimeTable)

   Name of object


.. describe:: numData (type: unsigned int, class: TimeTable)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: TimeTable)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outputValue (type: double, class: TimeTable)

   Output value holding current table entry or output of a calculation


.. describe:: parent (type: ObjId, class: TimeTable)

   Parent ObjId for current object


.. describe:: path (type: string, class: TimeTable)

   text path for object


.. describe:: plotDump (type: string, class: TimeTable)

   'File plotname' for dumpling an xplot, as a workaround for an error in
   the xplot python interface. Note separator is a space. The return value
   is a dummy.


.. describe:: size (type: unsigned int, class: TimeTable)

   size of table. Note that this is the number of x divisions +1since it
   must represent the largest value as well as thesmallest


.. describe:: sourceFields (type: vector<string>, class: TimeTable)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: state (type: double, class: TimeTable)

   Current state of the time table.


.. describe:: this (type: 7Neutral, class: TimeTable)

   Access function for entire object


.. describe:: tick (type: int, class: TimeTable)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: TimeTable)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: vector (type: vector<double>, class: TimeTable)

   vector with all table entries



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: TimeTable)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: TimeTable)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: TimeTable)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: TimeTable)

   Ids of Elements connected this Element on specified field.


.. describe:: y (type: unsigned int,double, class: TimeTable)

   Value of table at specified index



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: TimeTable)

   Message to child Elements


.. describe:: eventOut (type: double, class: TimeTable)

   Sends out spike time if it falls in current timestep.



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: clearVec (type: void, class: TimeTable)

   Handles request to clear the data vector


.. describe:: compareVec (type: vector<double>,string, class: TimeTable)

   Compares contents of TableBase with a vector of doubles.Result is put
   in 'output' field of table.If the comparison fails (e.g., due to zero
   entries), the return value is -1.Arguments: Other vector, comparison_operationOperations:
   rmsd (for RMSDifference), rmsr (RMSratio ), dotp (Dot product, not yet
   implemented).


.. describe:: compareXplot (type: string,string,string, class: TimeTable)

   Reads a plot from an xplot file and compares with contents of TableBase.Result
   is put in 'output' field of table.If the comparison fails (e.g., due
   to zero entries), the return value is -1.Arguments: filename, plotname,
   comparison_operationOperations: rmsd (for RMSDifference), rmsr (RMSratio
   ), dotp (Dot product, not yet implemented).


.. describe:: getChildren (type: vector<vector<Id>>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFilename (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMethod (type: PSt6vectorIiSaIiEE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPlotDump (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSize (type: vector<unsigned int>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getState (type: vector<double>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVector (type: vector<vector<double>>*, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: double, class: TimeTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: linearTransform (type: double,double, class: TimeTable)

   Linearly scales and offsets data. Scale first, then offset.


.. describe:: loadCSV (type: string,int,int,char, class: TimeTable)

   Reads a single column from a CSV file. Arguments: filename, column#,
   starting row#, separator


.. describe:: loadXplot (type: string,string, class: TimeTable)

   Reads a single plot from an xplot file. Arguments: filename, plotnameWhen
   the file has 2 columns, the 2nd column is loaded.


.. describe:: loadXplotRange (type: string,string,unsigned int,unsigned int, class: TimeTable)

   Reads a single plot from an xplot file, and selects a subset of points
   from it. Arguments: filename, plotname, startindex, endindexUses C convention:
   startindex included, endindex not included.When the file has 2 columns,
   the 2nd column is loaded.


.. describe:: notifyAddMsgDest (type: ObjId, class: TimeTable)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: TimeTable)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: TimeTable)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: TimeTable)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: TimeTable)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: TimeTable)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: TimeTable)

   Message from Parent Element(s)


.. describe:: plainPlot (type: string, class: TimeTable)

   Dumps table contents to single-column ascii file. Uses scientific notation.
   Argument 1 is filename


.. describe:: process (type: const ProcInfo*, class: TimeTable)

   Handle process call


.. describe:: reinit (type: const ProcInfo*, class: TimeTable)

   Handles reinit call


.. describe:: setFilename (type: string, class: TimeTable)

   Assigns field value.


.. describe:: setMethod (type: int, class: TimeTable)

   Assigns field value.


.. describe:: setName (type: string, class: TimeTable)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: TimeTable)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: TimeTable)

   Assigns field value.


.. describe:: setPlotDump (type: string, class: TimeTable)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: TimeTable)

   Assigns field value.


.. describe:: setTick (type: int, class: TimeTable)

   Assigns field value.


.. describe:: setVector (type: vector<double>, class: TimeTable)

   Assigns field value.


.. describe:: xplot (type: string,string, class: TimeTable)

   Dumps table contents to xplot-format file. Argument 1 is filename, argument
   2 is plotname



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: TimeTable)

   Shared message for process and reinit



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

