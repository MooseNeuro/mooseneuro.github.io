:orphan:

HDF5DataWriter
==============


HDF5 file writer for saving field values from multiple objects.

Connect the `requestOut` field of this object to the `get{Fieldname}` of other objects where `fieldname` is the target value field of type double. The HDF5DataWriter collects the current values of the fields in all the targets at each time step in a local buffer. When the buffer size exceeds `flushLimit` (default 4M), it will write the data into the HDF5 file specified in its `filename` field. You can explicitly force writing by calling the `flush` function.
The dataset location in the output file replicates the MOOSE element tree structure. Thus, if you record the Vm field from `/model[0]/neuron[0]/soma[0], the dataset path will be `/model[0]/neuron[0]/soma[0]/vm`

NOTE: The output file remains open until this object is destroyed, or `close()` is called explicitly.

Author:   Subhasis Ray


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: HDF5DataWriter)

   vector of ObjIds listing all children of current object


.. describe:: chunkSize (type: unsigned int, class: HDF5DataWriter)

   Chunksize for writing array data. Defaults to 100.


.. describe:: className (type: string, class: HDF5DataWriter)

   Class Name of object


.. describe:: compression (type: unsigned int, class: HDF5DataWriter)

   Compression level for array data. Defaults to 6.


.. describe:: compressor (type: string, class: HDF5DataWriter)

   Compression type for array data. zlib and szip are supported. Defaults
   to zlib.


.. describe:: destFields (type: vector<string>, class: HDF5DataWriter)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: HDF5DataWriter)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: HDF5DataWriter)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: filename (type: string, class: HDF5DataWriter)

   Name of the file associated with this HDF5 writer object.


.. describe:: flushLimit (type: unsigned int, class: HDF5DataWriter)

   Buffer size limit for flushing the data from memory to file. Default
   is 4M doubles.


.. describe:: idValue (type: unsigned int, class: HDF5DataWriter)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HDF5DataWriter)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isOpen (type: bool, class: HDF5DataWriter)

   True if this object has an open file handle.


.. describe:: me (type: ObjId, class: HDF5DataWriter)

   ObjId for current object


.. describe:: mode (type: unsigned int, class: HDF5DataWriter)

   Depending on mode, if file already exists, if mode=1, data will be appended
   to existing file, if mode=2, file will be truncated, if mode=4, no writing
   will happen.


.. describe:: msgIn (type: vector<ObjId>, class: HDF5DataWriter)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HDF5DataWriter)

   Messages going out from this Element


.. describe:: name (type: string, class: HDF5DataWriter)

   Name of object


.. describe:: numData (type: unsigned int, class: HDF5DataWriter)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HDF5DataWriter)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HDF5DataWriter)

   Parent ObjId for current object


.. describe:: path (type: string, class: HDF5DataWriter)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: HDF5DataWriter)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: HDF5DataWriter)

   Access function for entire object


.. describe:: tick (type: int, class: HDF5DataWriter)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: HDF5DataWriter)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from HDF5WriterBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: doubleAttr (type: string,double, class: HDF5DataWriter)

   Double precision floating point attributes. The key is attribute name,
   value is attribute value (double).


.. describe:: doubleVecAttr (type: string,vector<double>, class: HDF5DataWriter)

   Double vector attributes. The key is attribute name, value is attribute
   value (vector of double).


.. describe:: isA (type: string,bool, class: HDF5DataWriter)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: longAttr (type: string,long, class: HDF5DataWriter)

   Long integer attributes. The key is attribute name, value is attribute
   value (long).


.. describe:: longVecAttr (type: string,vector<long>, class: HDF5DataWriter)

   Long integer vector attributes. The key is attribute name, value is attribute
   value (vector of long).


.. describe:: msgDestFunctions (type: string,vector<string>, class: HDF5DataWriter)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HDF5DataWriter)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HDF5DataWriter)

   Ids of Elements connected this Element on specified field.


.. describe:: stringAttr (type: string,string, class: HDF5DataWriter)

   String attributes. The key is attribute name, value is attribute value
   (string).


.. describe:: stringVecAttr (type: string,vector<string>, class: HDF5DataWriter)

   String vector attributes. The key is attribute name, value is attribute
   value (string).



Attributes inherited from HDF5WriterBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: HDF5DataWriter)

   Message to child Elements


.. describe:: requestOut (type: vector<double>*, class: HDF5DataWriter)

   Sends request for a field to target object



Attributes inherited from HDF5WriterBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: close (type: void, class: HDF5DataWriter)

   Close the underlying file. This is a safety measure so that file is not
   in an invalid state even if a crash happens at exit.


.. describe:: flush (type: void, class: HDF5DataWriter)

   Write all buffer contents to file and clear the buffers.


.. describe:: getChildren (type: vector<vector<Id>>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChunkSize (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompression (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompressor (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDoubleAttr (type: double, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDoubleVecAttr (type: vector<double>, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFilename (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFlushLimit (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsOpen (type: vector<bool>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLongAttr (type: long, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLongVecAttr (type: vector<long>, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMode (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStringAttr (type: string, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStringVecAttr (type: vector<string>, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HDF5DataWriter)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HDF5DataWriter)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HDF5DataWriter)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HDF5DataWriter)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HDF5DataWriter)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HDF5DataWriter)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HDF5DataWriter)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HDF5DataWriter)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: HDF5DataWriter)

   Handle process calls. Gets data from connected fields into a local buffer
   and dumps them to `filename` if the buffer length exceeds `flushLimit`



.. describe:: reinit (type: const ProcInfo*, class: HDF5DataWriter)

   Reinitialize the object. If the current file handle is valid, it tries
   to close that and open the file specified in current filename field.



.. describe:: setChunkSize (type: unsigned int, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setCompression (type: unsigned int, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setCompressor (type: string, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setDoubleAttr (type: string,double, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setDoubleVecAttr (type: string,vector<double>, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setFilename (type: string, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setFlushLimit (type: unsigned int, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setLongAttr (type: string,long, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setLongVecAttr (type: string,vector<long>, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setMode (type: unsigned int, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setName (type: string, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setStringAttr (type: string,string, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setStringVecAttr (type: string,vector<string>, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: HDF5DataWriter)

   Assigns field value.


.. describe:: setTick (type: int, class: HDF5DataWriter)

   Assigns field value.



Attributes inherited from HDF5WriterBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: HDF5DataWriter)

   Shared message to receive process and reinit



Attributes inherited from HDF5WriterBase:
-----------------------------------------


Attributes inherited from Neutral:
----------------------------------

