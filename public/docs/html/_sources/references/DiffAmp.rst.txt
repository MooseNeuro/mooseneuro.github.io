:orphan:

DiffAmp
=======


A difference amplifier. Output is the difference between the total plus inputs and the total minus inputs multiplied by gain. Gain can be set statically as a field or can be a destination message and thus dynamically determined by the output of another object. Same as GENESIS diffamp object.

Author:   Subhasis Ray, 2008, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: DiffAmp)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: DiffAmp)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: DiffAmp)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: DiffAmp)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: DiffAmp)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: gain (type: double, class: DiffAmp)

   Gain of the amplifier. The output of the amplifier is the difference
   between the totals in plus and minus inputs multiplied by the gain. Defaults
   to 1


.. describe:: idValue (type: unsigned int, class: DiffAmp)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: DiffAmp)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: DiffAmp)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: DiffAmp)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: DiffAmp)

   Messages going out from this Element


.. describe:: name (type: string, class: DiffAmp)

   Name of object


.. describe:: numData (type: unsigned int, class: DiffAmp)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: DiffAmp)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outputValue (type: double, class: DiffAmp)

   Output of the amplifier, i.e. gain * (plus - minus).


.. describe:: parent (type: ObjId, class: DiffAmp)

   Parent ObjId for current object


.. describe:: path (type: string, class: DiffAmp)

   text path for object


.. describe:: saturation (type: double, class: DiffAmp)

   Saturation is the bound on the output. If output goes beyond the +/-saturation
   range, it is truncated to the closer of +saturation and -saturation.
   Defaults to the maximum double precision floating point number representable
   on the system.


.. describe:: sourceFields (type: vector<string>, class: DiffAmp)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: DiffAmp)

   Access function for entire object


.. describe:: tick (type: int, class: DiffAmp)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: DiffAmp)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: DiffAmp)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: DiffAmp)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: DiffAmp)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: DiffAmp)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: DiffAmp)

   Message to child Elements


.. describe:: output (type: double, class: DiffAmp)

   Current output level.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: gainIn (type: double, class: DiffAmp)

   Destination message to control gain dynamically.


.. describe:: getChildren (type: vector<vector<Id>>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGain (type: vector<double>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSaturation (type: vector<double>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: DiffAmp)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: minusIn (type: double, class: DiffAmp)

   Negative input terminal of the amplifier. All the messages connected
   here are summed up to get total negative input.


.. describe:: notifyAddMsgDest (type: ObjId, class: DiffAmp)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: DiffAmp)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: DiffAmp)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: DiffAmp)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: DiffAmp)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: DiffAmp)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: DiffAmp)

   Message from Parent Element(s)


.. describe:: plusIn (type: double, class: DiffAmp)

   Positive input terminal of the amplifier. All the messages connected
   here are summed up to get total positive input.


.. describe:: process (type: const ProcInfo*, class: DiffAmp)

   Handles process call, updates internal time stamp.


.. describe:: reinit (type: const ProcInfo*, class: DiffAmp)

   Handles reinit call.


.. describe:: setGain (type: double, class: DiffAmp)

   Assigns field value.


.. describe:: setName (type: string, class: DiffAmp)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: DiffAmp)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: DiffAmp)

   Assigns field value.


.. describe:: setSaturation (type: double, class: DiffAmp)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: DiffAmp)

   Assigns field value.


.. describe:: setTick (type: int, class: DiffAmp)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: DiffAmp)

   This is a shared message to receive Process messages from the scheduler
   objects.The first entry in the shared msg is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a MsgDest
   for the Reinit operation. It also uses ProcInfo.



Attributes inherited from Neutral:
----------------------------------

