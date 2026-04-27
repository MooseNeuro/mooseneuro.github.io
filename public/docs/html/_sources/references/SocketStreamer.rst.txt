:orphan:

SocketStreamer
==============


SocketStreamer: Stream moose.Table data to a socket.


Author:   Dilawar Singh (@dilawar, github), 2018


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: address (type: string, class: SocketStreamer)

   Set adresss for socket e.g. http://localhost:31416 (host:port for TCP
   SOCKET) , or file:///tmp/MOOSE_SOCK for UNIX domain socket.


.. describe:: children (type: vector<Id>, class: SocketStreamer)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: SocketStreamer)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: SocketStreamer)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: SocketStreamer)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: SocketStreamer)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: SocketStreamer)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: SocketStreamer)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: SocketStreamer)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: SocketStreamer)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: SocketStreamer)

   Messages going out from this Element


.. describe:: name (type: string, class: SocketStreamer)

   Name of object


.. describe:: numData (type: unsigned int, class: SocketStreamer)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: SocketStreamer)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numTables (type: unsigned int, class: SocketStreamer)

   Number of Tables handled by SocketStreamer


.. describe:: outputValue (type: double, class: SocketStreamer)

   Output value holding current table entry or output of a calculation


.. describe:: parent (type: ObjId, class: SocketStreamer)

   Parent ObjId for current object


.. describe:: path (type: string, class: SocketStreamer)

   text path for object


.. describe:: plotDump (type: string, class: SocketStreamer)

   'File plotname' for dumpling an xplot, as a workaround for an error in
   the xplot python interface. Note separator is a space. The return value
   is a dummy.


.. describe:: port (type: unsigned int, class: SocketStreamer)

   Set port number for streaming. Valid only of TCP socket.


.. describe:: size (type: unsigned int, class: SocketStreamer)

   size of table. Note that this is the number of x divisions +1since it
   must represent the largest value as well as thesmallest


.. describe:: sourceFields (type: vector<string>, class: SocketStreamer)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: SocketStreamer)

   Access function for entire object


.. describe:: tick (type: int, class: SocketStreamer)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: SocketStreamer)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: vector (type: vector<double>, class: SocketStreamer)

   vector with all table entries



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: SocketStreamer)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: SocketStreamer)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: SocketStreamer)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: SocketStreamer)

   Ids of Elements connected this Element on specified field.


.. describe:: y (type: unsigned int,double, class: SocketStreamer)

   Value of table at specified index



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: SocketStreamer)

   Message to child Elements



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: addTable (type: ObjId, class: SocketStreamer)

   Add a table to SocketStreamer


.. describe:: addTables (type: vector<ObjId>, class: SocketStreamer)

   Add many tables to SocketStreamer


.. describe:: clearVec (type: void, class: SocketStreamer)

   Handles request to clear the data vector


.. describe:: compareVec (type: vector<double>,string, class: SocketStreamer)

   Compares contents of TableBase with a vector of doubles.Result is put
   in 'output' field of table.If the comparison fails (e.g., due to zero
   entries), the return value is -1.Arguments: Other vector, comparison_operationOperations:
   rmsd (for RMSDifference), rmsr (RMSratio ), dotp (Dot product, not yet
   implemented).


.. describe:: compareXplot (type: string,string,string, class: SocketStreamer)

   Reads a plot from an xplot file and compares with contents of TableBase.Result
   is put in 'output' field of table.If the comparison fails (e.g., due
   to zero entries), the return value is -1.Arguments: filename, plotname,
   comparison_operationOperations: rmsd (for RMSDifference), rmsr (RMSratio
   ), dotp (Dot product, not yet implemented).


.. describe:: getAddress (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumTables (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPlotDump (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPort (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSize (type: vector<unsigned int>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVector (type: vector<vector<double>>*, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: double, class: SocketStreamer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: linearTransform (type: double,double, class: SocketStreamer)

   Linearly scales and offsets data. Scale first, then offset.


.. describe:: loadCSV (type: string,int,int,char, class: SocketStreamer)

   Reads a single column from a CSV file. Arguments: filename, column#,
   starting row#, separator


.. describe:: loadXplot (type: string,string, class: SocketStreamer)

   Reads a single plot from an xplot file. Arguments: filename, plotnameWhen
   the file has 2 columns, the 2nd column is loaded.


.. describe:: loadXplotRange (type: string,string,unsigned int,unsigned int, class: SocketStreamer)

   Reads a single plot from an xplot file, and selects a subset of points
   from it. Arguments: filename, plotname, startindex, endindexUses C convention:
   startindex included, endindex not included.When the file has 2 columns,
   the 2nd column is loaded.


.. describe:: notifyAddMsgDest (type: ObjId, class: SocketStreamer)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: SocketStreamer)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: SocketStreamer)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: SocketStreamer)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: SocketStreamer)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: SocketStreamer)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: SocketStreamer)

   Message from Parent Element(s)


.. describe:: plainPlot (type: string, class: SocketStreamer)

   Dumps table contents to single-column ascii file. Uses scientific notation.
   Argument 1 is filename


.. describe:: process (type: const ProcInfo*, class: SocketStreamer)

   Handle process call


.. describe:: reinit (type: const ProcInfo*, class: SocketStreamer)

   Handles reinit call


.. describe:: removeTable (type: ObjId, class: SocketStreamer)

   Remove a table from SocketStreamer


.. describe:: removeTables (type: vector<ObjId>, class: SocketStreamer)

   Remove tables -- if found -- from SocketStreamer


.. describe:: setAddress (type: string, class: SocketStreamer)

   Assigns field value.


.. describe:: setName (type: string, class: SocketStreamer)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: SocketStreamer)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: SocketStreamer)

   Assigns field value.


.. describe:: setPlotDump (type: string, class: SocketStreamer)

   Assigns field value.


.. describe:: setPort (type: unsigned int, class: SocketStreamer)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: SocketStreamer)

   Assigns field value.


.. describe:: setTick (type: int, class: SocketStreamer)

   Assigns field value.


.. describe:: setVector (type: vector<double>, class: SocketStreamer)

   Assigns field value.


.. describe:: xplot (type: string,string, class: SocketStreamer)

   Dumps table contents to xplot-format file. Argument 1 is filename, argument
   2 is plotname



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: SocketStreamer)

   Shared message for process and reinit



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

