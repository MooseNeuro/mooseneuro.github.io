:orphan:

PulseGen
========


PulseGen: general purpose pulse generator. This can generate any number of pulses with specified level and duration.

Author:   Subhasis Ray


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: baseLevel (type: double, class: PulseGen)

   Basal level of the stimulus


.. describe:: children (type: vector<Id>, class: PulseGen)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: PulseGen)

   Class Name of object


.. describe:: count (type: unsigned int, class: PulseGen)

   Number of pulses in a sequence


.. describe:: destFields (type: vector<string>, class: PulseGen)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: PulseGen)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: PulseGen)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: firstDelay (type: double, class: PulseGen)

   Delay to start of the first pulse in a sequence


.. describe:: firstLevel (type: double, class: PulseGen)

   Amplitude of the first pulse in a sequence


.. describe:: firstWidth (type: double, class: PulseGen)

   Width of the first pulse in a sequence


.. describe:: idValue (type: unsigned int, class: PulseGen)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: PulseGen)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: PulseGen)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: PulseGen)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: PulseGen)

   Messages going out from this Element


.. describe:: name (type: string, class: PulseGen)

   Name of object


.. describe:: numData (type: unsigned int, class: PulseGen)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: PulseGen)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outputValue (type: double, class: PulseGen)

   Output amplitude


.. describe:: parent (type: ObjId, class: PulseGen)

   Parent ObjId for current object


.. describe:: path (type: string, class: PulseGen)

   text path for object


.. describe:: secondDelay (type: double, class: PulseGen)

   Delay to start of of the second pulse in a sequence


.. describe:: secondLevel (type: double, class: PulseGen)

   Amplitude of the second pulse in a sequence


.. describe:: secondWidth (type: double, class: PulseGen)

   Width of the second pulse in a sequence


.. describe:: sourceFields (type: vector<string>, class: PulseGen)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: PulseGen)

   Access function for entire object


.. describe:: tick (type: int, class: PulseGen)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: trigMode (type: unsigned int, class: PulseGen)

   Trigger mode for pulses in the sequence. 0 : free-running mode where
   it keeps looping its output 1 : external trigger, where it is triggered
   by an external input (and stops after creating the first train of pulses)
   2 : external gate mode, where it keeps generating the pulses in a loop
   as long as the input is high.


.. describe:: valueFields (type: vector<string>, class: PulseGen)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: delay (type: unsigned int,double, class: PulseGen)

   Delay of the pulse at specified index


.. describe:: isA (type: string,bool, class: PulseGen)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: level (type: unsigned int,double, class: PulseGen)

   Level of the pulse at specified index


.. describe:: msgDestFunctions (type: string,vector<string>, class: PulseGen)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: PulseGen)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: PulseGen)

   Ids of Elements connected this Element on specified field.


.. describe:: width (type: unsigned int,double, class: PulseGen)

   Width of the pulse at specified index



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: PulseGen)

   Message to child Elements


.. describe:: output (type: double, class: PulseGen)

   Current output level.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: delayIn (type: unsigned int,double, class: PulseGen)

   Handle delay value coming from other objects


.. describe:: getBaseLevel (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCount (type: vector<unsigned int>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDelay (type: double, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFirstDelay (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFirstLevel (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFirstWidth (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLevel (type: double, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSecondDelay (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSecondLevel (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSecondWidth (type: vector<double>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTrigMode (type: vector<unsigned int>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getWidth (type: double, class: PulseGen)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: input (type: double, class: PulseGen)

   Handle incoming input that determines gating/triggering onset. Note that
   although this is a double field, the underlying field is integer. So
   fractional part of input will be truncated


.. describe:: levelIn (type: unsigned int,double, class: PulseGen)

   Handle level value coming from other objects


.. describe:: notifyAddMsgDest (type: ObjId, class: PulseGen)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: PulseGen)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: PulseGen)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: PulseGen)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: PulseGen)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: PulseGen)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: PulseGen)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: PulseGen)

   Handles process call, updates internal time stamp.


.. describe:: reinit (type: const ProcInfo*, class: PulseGen)

   Handles reinit call.


.. describe:: setBaseLevel (type: double, class: PulseGen)

   Assigns field value.


.. describe:: setCount (type: unsigned int, class: PulseGen)

   Assigns field value.


.. describe:: setDelay (type: unsigned int,double, class: PulseGen)

   Assigns field value.


.. describe:: setFirstDelay (type: double, class: PulseGen)

   Assigns field value.


.. describe:: setFirstLevel (type: double, class: PulseGen)

   Assigns field value.


.. describe:: setFirstWidth (type: double, class: PulseGen)

   Assigns field value.


.. describe:: setLevel (type: unsigned int,double, class: PulseGen)

   Assigns field value.


.. describe:: setName (type: string, class: PulseGen)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: PulseGen)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: PulseGen)

   Assigns field value.


.. describe:: setSecondDelay (type: double, class: PulseGen)

   Assigns field value.


.. describe:: setSecondLevel (type: double, class: PulseGen)

   Assigns field value.


.. describe:: setSecondWidth (type: double, class: PulseGen)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: PulseGen)

   Assigns field value.


.. describe:: setTick (type: int, class: PulseGen)

   Assigns field value.


.. describe:: setTrigMode (type: unsigned int, class: PulseGen)

   Assigns field value.


.. describe:: setWidth (type: unsigned int,double, class: PulseGen)

   Assigns field value.


.. describe:: widthIn (type: unsigned int,double, class: PulseGen)

   Handle width value coming from other objects



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: PulseGen)

   This is a shared message to receive Process messages from the scheduler
   objects.The first entry in the shared msg is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a MsgDest
   for the Reinit operation. It also uses ProcInfo.



Attributes inherited from Neutral:
----------------------------------

