:orphan:

PyRun
=====


Runs Python statements from inside MOOSE.

Author:   Subhasis Ray


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: PyRun)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: PyRun)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: PyRun)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: PyRun)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: evalOnReinit (type: bool, class: PyRun)

   Flag to indicate whether runString should be executed upon reinit().



.. describe:: fieldIndex (type: unsigned int, class: PyRun)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: PyRun)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: PyRun)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: initString (type: string, class: PyRun)

   String to be executed at initialization (reinit).


.. describe:: inputVar (type: string, class: PyRun)

   Name of local variable in which input balue is to be stored. Default
   is `input\_` (to avoid conflict with Python's builtin function `input`).



.. describe:: me (type: ObjId, class: PyRun)

   ObjId for current object


.. describe:: mode (type: int, class: PyRun)

   Flag to indicate whether runString should be executed for both trigger
   and process, or one of them. 0: run only process, 1: run only trigger,
   and 2: run both (default 0)


.. describe:: msgIn (type: vector<ObjId>, class: PyRun)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: PyRun)

   Messages going out from this Element


.. describe:: name (type: string, class: PyRun)

   Name of object


.. describe:: numData (type: unsigned int, class: PyRun)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: PyRun)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outputValue (type: double, class: PyRun)

   Get the (computed) value stored in output variable (named in `outputVar`
   field).


.. describe:: outputVar (type: string, class: PyRun)

   Name of local variable for storing output. Default is `output`.


.. describe:: parent (type: ObjId, class: PyRun)

   Parent ObjId for current object


.. describe:: path (type: string, class: PyRun)

   text path for object


.. describe:: runString (type: string, class: PyRun)

   String to be executed at each time step.


.. describe:: sourceFields (type: vector<string>, class: PyRun)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: PyRun)

   Access function for entire object


.. describe:: tick (type: int, class: PyRun)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: PyRun)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: PyRun)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: PyRun)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: PyRun)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: PyRun)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: PyRun)

   Message to child Elements


.. describe:: output (type: double, class: PyRun)

   Sends out the value of local variable called `output`. Thus, you can
   have Python statements which compute some value and assign it to the
   variable called `output` (which is defined at `reinit` call). This will
   be sent out to any target connected to the `output` field.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEvalOnReinit (type: vector<bool>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInitString (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInputVar (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMode (type: PSt6vectorIiSaIiEE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputVar (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRunString (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: PyRun)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: PyRun)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: PyRun)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: PyRun)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: PyRun)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: PyRun)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: PyRun)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: PyRun)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: PyRun)

   Handles process call. Runs the current runString.


.. describe:: reinit (type: const ProcInfo*, class: PyRun)

   Handles reinit call. Runs the current initString.


.. describe:: run (type: string, class: PyRun)

   Runs a specified string. Does not modify existing run or init strings.



.. describe:: setEvalOnReinit (type: bool, class: PyRun)

   Assigns field value.


.. describe:: setInitString (type: string, class: PyRun)

   Assigns field value.


.. describe:: setInputVar (type: string, class: PyRun)

   Assigns field value.


.. describe:: setMode (type: int, class: PyRun)

   Assigns field value.


.. describe:: setName (type: string, class: PyRun)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: PyRun)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: PyRun)

   Assigns field value.


.. describe:: setOutputVar (type: string, class: PyRun)

   Assigns field value.


.. describe:: setRunString (type: string, class: PyRun)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: PyRun)

   Assigns field value.


.. describe:: setTick (type: int, class: PyRun)

   Assigns field value.


.. describe:: trigger (type: double, class: PyRun)

   Executes the current runString whenever a message arrives. It stores
   the incoming value in local variable named `input\_`, which can be used
   in the `runString` (the underscore is added to avoid conflict with Python's
   builtin function `input`).



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: PyRun)

   This is a shared message to receive Process messages from the scheduler
   objects.The first entry in the shared msg is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a MsgDest
   for the Reinit operation. It also uses ProcInfo.



Attributes inherited from Neutral:
----------------------------------

