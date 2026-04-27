:orphan:

StimulusTable
=============





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: StimulusTable)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: StimulusTable)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: StimulusTable)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: doLoop (type: bool, class: StimulusTable)

   Flag: Should it loop around to startTime once it has reachedstopTime.
   Default (zero) is to do a single pass.


.. describe:: dt (type: double, class: StimulusTable)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: StimulusTable)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: StimulusTable)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: StimulusTable)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: loopTime (type: double, class: StimulusTable)

   If looping, this is the time between successive cycle starts.Defaults
   to the difference between stopTime and startTime, so that the output
   waveform cycles with precisely the same duration as the table contents.If
   larger than stopTime - startTime, then it pauses at the last table value
   till it is time to go around again.If smaller than stopTime - startTime,
   then it begins the next cycle even before the first one has reached the
   end of the table.


.. describe:: me (type: ObjId, class: StimulusTable)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: StimulusTable)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: StimulusTable)

   Messages going out from this Element


.. describe:: name (type: string, class: StimulusTable)

   Name of object


.. describe:: numData (type: unsigned int, class: StimulusTable)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: StimulusTable)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outputValue (type: double, class: StimulusTable)

   Output value holding current table entry or output of a calculation


.. describe:: parent (type: ObjId, class: StimulusTable)

   Parent ObjId for current object


.. describe:: path (type: string, class: StimulusTable)

   text path for object


.. describe:: plotDump (type: string, class: StimulusTable)

   'File plotname' for dumpling an xplot, as a workaround for an error in
   the xplot python interface. Note separator is a space. The return value
   is a dummy.


.. describe:: size (type: unsigned int, class: StimulusTable)

   size of table. Note that this is the number of x divisions +1since it
   must represent the largest value as well as thesmallest


.. describe:: sourceFields (type: vector<string>, class: StimulusTable)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: startTime (type: double, class: StimulusTable)

   Start time used when table is emitting values. For lookupvalues below
   this, the table just sends out its zero entry.Corresponds to zeroth entry
   of table.


.. describe:: stepPosition (type: double, class: StimulusTable)

   Current value of lookup (x) value.If stepSize is less than or equal to
   zero, this is set tothe current time to use as the lookup value.


.. describe:: stepSize (type: double, class: StimulusTable)

   Increment in lookup (x) value on every timestep. If it isless than or
   equal to zero, the StimulusTable uses the current timeas the lookup value.



.. describe:: stopTime (type: double, class: StimulusTable)

   Time to stop emitting values.If time exceeds this, then the table sends
   out its last entry.The stopTime corresponds to the last entry of table.



.. describe:: this (type: 7Neutral, class: StimulusTable)

   Access function for entire object


.. describe:: tick (type: int, class: StimulusTable)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: StimulusTable)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: vector (type: vector<double>, class: StimulusTable)

   vector with all table entries



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: StimulusTable)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: StimulusTable)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: StimulusTable)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: StimulusTable)

   Ids of Elements connected this Element on specified field.


.. describe:: y (type: unsigned int,double, class: StimulusTable)

   Value of table at specified index



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: StimulusTable)

   Message to child Elements


.. describe:: output (type: double, class: StimulusTable)

   Sends out tabulated data according to lookup parameters.



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: clearVec (type: void, class: StimulusTable)

   Handles request to clear the data vector


.. describe:: compareVec (type: vector<double>,string, class: StimulusTable)

   Compares contents of TableBase with a vector of doubles.Result is put
   in 'output' field of table.If the comparison fails (e.g., due to zero
   entries), the return value is -1.Arguments: Other vector, comparison_operationOperations:
   rmsd (for RMSDifference), rmsr (RMSratio ), dotp (Dot product, not yet
   implemented).


.. describe:: compareXplot (type: string,string,string, class: StimulusTable)

   Reads a plot from an xplot file and compares with contents of TableBase.Result
   is put in 'output' field of table.If the comparison fails (e.g., due
   to zero entries), the return value is -1.Arguments: filename, plotname,
   comparison_operationOperations: rmsd (for RMSDifference), rmsr (RMSratio
   ), dotp (Dot product, not yet implemented).


.. describe:: getChildren (type: vector<vector<Id>>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDoLoop (type: vector<bool>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLoopTime (type: vector<double>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPlotDump (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSize (type: vector<unsigned int>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStartTime (type: vector<double>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStepPosition (type: vector<double>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStepSize (type: vector<double>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStopTime (type: vector<double>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVector (type: vector<vector<double>>*, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: double, class: StimulusTable)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: linearTransform (type: double,double, class: StimulusTable)

   Linearly scales and offsets data. Scale first, then offset.


.. describe:: loadCSV (type: string,int,int,char, class: StimulusTable)

   Reads a single column from a CSV file. Arguments: filename, column#,
   starting row#, separator


.. describe:: loadXplot (type: string,string, class: StimulusTable)

   Reads a single plot from an xplot file. Arguments: filename, plotnameWhen
   the file has 2 columns, the 2nd column is loaded.


.. describe:: loadXplotRange (type: string,string,unsigned int,unsigned int, class: StimulusTable)

   Reads a single plot from an xplot file, and selects a subset of points
   from it. Arguments: filename, plotname, startindex, endindexUses C convention:
   startindex included, endindex not included.When the file has 2 columns,
   the 2nd column is loaded.


.. describe:: notifyAddMsgDest (type: ObjId, class: StimulusTable)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: StimulusTable)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: StimulusTable)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: StimulusTable)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: StimulusTable)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: StimulusTable)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: StimulusTable)

   Message from Parent Element(s)


.. describe:: plainPlot (type: string, class: StimulusTable)

   Dumps table contents to single-column ascii file. Uses scientific notation.
   Argument 1 is filename


.. describe:: process (type: const ProcInfo*, class: StimulusTable)

   Handles process call, updates internal time stamp.


.. describe:: reinit (type: const ProcInfo*, class: StimulusTable)

   Handles reinit call.


.. describe:: setDoLoop (type: bool, class: StimulusTable)

   Assigns field value.


.. describe:: setLoopTime (type: double, class: StimulusTable)

   Assigns field value.


.. describe:: setName (type: string, class: StimulusTable)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: StimulusTable)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: StimulusTable)

   Assigns field value.


.. describe:: setPlotDump (type: string, class: StimulusTable)

   Assigns field value.


.. describe:: setStartTime (type: double, class: StimulusTable)

   Assigns field value.


.. describe:: setStepPosition (type: double, class: StimulusTable)

   Assigns field value.


.. describe:: setStepSize (type: double, class: StimulusTable)

   Assigns field value.


.. describe:: setStopTime (type: double, class: StimulusTable)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: StimulusTable)

   Assigns field value.


.. describe:: setTick (type: int, class: StimulusTable)

   Assigns field value.


.. describe:: setVector (type: vector<double>, class: StimulusTable)

   Assigns field value.


.. describe:: xplot (type: string,string, class: StimulusTable)

   Dumps table contents to xplot-format file. Argument 1 is filename, argument
   2 is plotname



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: StimulusTable)

   Shared message for process and reinit



Attributes inherited from TableBase:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

