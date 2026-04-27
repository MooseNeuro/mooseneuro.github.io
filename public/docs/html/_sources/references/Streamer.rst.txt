:orphan:

Streamer
========


Streamer: Stream moose.Table data to out-streams


Author:   Dilawar Singh, 2016, NCBS, Bangalore.


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Streamer)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Streamer)

   Class Name of object


.. describe:: datafile (type: string, class: Streamer)

   File/stream to write table data to. Default is is __moose_tables_\_.dat.n
   By default, this object writes data every second


.. describe:: destFields (type: vector<string>, class: Streamer)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Streamer)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Streamer)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: format (type: string, class: Streamer)

   Format of output file, default is csv


.. describe:: idValue (type: unsigned int, class: Streamer)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Streamer)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Streamer)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Streamer)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Streamer)

   Messages going out from this Element


.. describe:: name (type: string, class: Streamer)

   Name of object


.. describe:: numData (type: unsigned int, class: Streamer)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Streamer)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numTables (type: unsigned int, class: Streamer)

   Number of Tables handled by Streamer


.. describe:: numWriteEvents (type: unsigned int, class: Streamer)

   Number of time streamer was called to write. (For debugging/performance
   reason only)


.. describe:: outfile (type: string, class: Streamer)

   Use datafile (deprecated)


.. describe:: outputValue (type: double, class: Streamer)

   Output value holding current table entry or output of a calculation


.. describe:: parent (type: ObjId, class: Streamer)

   Parent ObjId for current object


.. describe:: path (type: string, class: Streamer)

   text path for object


.. describe:: plotDump (type: string, class: Streamer)

   'File plotname' for dumpling an xplot, as a workaround for an error in
   the xplot python interface. Note separator is a space. The return value
   is a dummy.


.. describe:: size (type: unsigned int, class: Streamer)

   size of table. Note that this is the number of x divisions +1since it
   must represent the largest value as well as thesmallest


.. describe:: sourceFields (type: vector<string>, class: Streamer)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: Streamer)

   Access function for entire object


.. describe:: tick (type: int, class: Streamer)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Streamer)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: vector (type: vector<double>, class: Streamer)

   vector with all table entries



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Streamer)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Streamer)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Streamer)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Streamer)

   Ids of Elements connected this Element on specified field.


.. describe:: y (type: unsigned int,double, class: Streamer)

   Value of table at specified index



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Streamer)

   Message to child Elements



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: addTable (type: ObjId, class: Streamer)

   Add a table to Streamer


.. describe:: addTables (type: vector<ObjId>, class: Streamer)

   Add many tables to Streamer


.. describe:: clearVec (type: void, class: Streamer)

   Handles request to clear the data vector


.. describe:: compareVec (type: vector<double>,string, class: Streamer)

   Compares contents of TableBase with a vector of doubles.Result is put
   in 'output' field of table.If the comparison fails (e.g., due to zero
   entries), the return value is -1.Arguments: Other vector, comparison_operationOperations:
   rmsd (for RMSDifference), rmsr (RMSratio ), dotp (Dot product, not yet
   implemented).


.. describe:: compareXplot (type: string,string,string, class: Streamer)

   Reads a plot from an xplot file and compares with contents of TableBase.Result
   is put in 'output' field of table.If the comparison fails (e.g., due
   to zero entries), the return value is -1.Arguments: filename, plotname,
   comparison_operationOperations: rmsd (for RMSDifference), rmsr (RMSratio
   ), dotp (Dot product, not yet implemented).


.. describe:: getChildren (type: vector<vector<Id>>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDatafile (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFormat (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumTables (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumWriteEvents (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutfile (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPlotDump (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSize (type: vector<unsigned int>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVector (type: vector<vector<double>>*, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: double, class: Streamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: linearTransform (type: double,double, class: Streamer)

   Linearly scales and offsets data. Scale first, then offset.


.. describe:: loadCSV (type: string,int,int,char, class: Streamer)

   Reads a single column from a CSV file. Arguments: filename, column#,
   starting row#, separator


.. describe:: loadXplot (type: string,string, class: Streamer)

   Reads a single plot from an xplot file. Arguments: filename, plotnameWhen
   the file has 2 columns, the 2nd column is loaded.


.. describe:: loadXplotRange (type: string,string,unsigned int,unsigned int, class: Streamer)

   Reads a single plot from an xplot file, and selects a subset of points
   from it. Arguments: filename, plotname, startindex, endindexUses C convention:
   startindex included, endindex not included.When the file has 2 columns,
   the 2nd column is loaded.


.. describe:: notifyAddMsgDest (type: ObjId, class: Streamer)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Streamer)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Streamer)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Streamer)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Streamer)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Streamer)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Streamer)

   Message from Parent Element(s)


.. describe:: plainPlot (type: string, class: Streamer)

   Dumps table contents to single-column ascii file. Uses scientific notation.
   Argument 1 is filename


.. describe:: process (type: const ProcInfo*, class: Streamer)

   Handle process call


.. describe:: reinit (type: const ProcInfo*, class: Streamer)

   Handles reinit call


.. describe:: removeTable (type: ObjId, class: Streamer)

   Remove a table from Streamer


.. describe:: removeTables (type: vector<ObjId>, class: Streamer)

   Remove tables -- if found -- from Streamer


.. describe:: setDatafile (type: string, class: Streamer)

   Assigns field value.


.. describe:: setFormat (type: string, class: Streamer)

   Assigns field value.


.. describe:: setName (type: string, class: Streamer)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Streamer)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Streamer)

   Assigns field value.


.. describe:: setOutfile (type: string, class: Streamer)

   Assigns field value.


.. describe:: setPlotDump (type: string, class: Streamer)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Streamer)

   Assigns field value.


.. describe:: setTick (type: int, class: Streamer)

   Assigns field value.


.. describe:: setVector (type: vector<double>, class: Streamer)

   Assigns field value.


.. describe:: xplot (type: string,string, class: Streamer)

   Dumps table contents to xplot-format file. Argument 1 is filename, argument
   2 is plotname



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: Streamer)

   Shared message for process and reinit



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

