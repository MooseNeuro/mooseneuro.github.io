:orphan:

CompartmentBase
===============


CompartmentBase object, for branching neuron models.

Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Cm (type: double, class: CompartmentBase)

   Membrane capacitance


.. describe:: Em (type: double, class: CompartmentBase)

   Resting membrane potential


.. describe:: Im (type: double, class: CompartmentBase)

   Current going through membrane


.. describe:: Ra (type: double, class: CompartmentBase)

   Axial resistance of compartment


.. describe:: Rm (type: double, class: CompartmentBase)

   Membrane resistance


.. describe:: Vm (type: double, class: CompartmentBase)

   membrane potential


.. describe:: children (type: vector<Id>, class: CompartmentBase)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: CompartmentBase)

   Class Name of object


.. describe:: coords (type: vector<double>, class: CompartmentBase)

   Vector with all coords: [x0 y0 z0 x y z dia]


.. describe:: destFields (type: vector<string>, class: CompartmentBase)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diameter (type: double, class: CompartmentBase)

   Diameter of compartment


.. describe:: dt (type: double, class: CompartmentBase)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: CompartmentBase)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: CompartmentBase)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: CompartmentBase)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: initVm (type: double, class: CompartmentBase)

   Initial value for membrane potential


.. describe:: inject (type: double, class: CompartmentBase)

   Current injection to deliver into compartment


.. describe:: length (type: double, class: CompartmentBase)

   Length of compartment


.. describe:: me (type: ObjId, class: CompartmentBase)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: CompartmentBase)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: CompartmentBase)

   Messages going out from this Element


.. describe:: name (type: string, class: CompartmentBase)

   Name of object


.. describe:: numData (type: unsigned int, class: CompartmentBase)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: CompartmentBase)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: CompartmentBase)

   Parent ObjId for current object


.. describe:: path (type: string, class: CompartmentBase)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: CompartmentBase)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: CompartmentBase)

   Access function for entire object


.. describe:: tick (type: int, class: CompartmentBase)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: CompartmentBase)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: x (type: double, class: CompartmentBase)

   x coordinate of end of compartment


.. describe:: x0 (type: double, class: CompartmentBase)

   X coordinate of start of compartment


.. describe:: y (type: double, class: CompartmentBase)

   y coordinate of end of compartment


.. describe:: y0 (type: double, class: CompartmentBase)

   Y coordinate of start of compartment


.. describe:: z (type: double, class: CompartmentBase)

   z coordinate of end of compartment


.. describe:: z0 (type: double, class: CompartmentBase)

   Z coordinate of start of compartment



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: CompartmentBase)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: CompartmentBase)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: CompartmentBase)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: CompartmentBase)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: VmOut (type: double, class: CompartmentBase)

   Sends out Vm value of compartment on each timestep


.. describe:: axialOut (type: double, class: CompartmentBase)

   Sends out Vm value of compartment to adjacent compartments,on each timestep



.. describe:: childOut (type: int, class: CompartmentBase)

   Message to child Elements


.. describe:: raxialOut (type: double,double, class: CompartmentBase)

   Sends out Raxial information on each timestep, fields are Ra and Vm



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: cable (type: void, class: CompartmentBase)

   Message for organizing compartments into groups, calledcables. Doesn't
   do anything.


.. describe:: displace (type: double,double,double, class: CompartmentBase)

   Displaces compartment by specified vector


.. describe:: getChildren (type: vector<vector<Id>>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCm (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCoords (type: vector<vector<double>>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiameter (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEm (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIm (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInitVm (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInject (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLength (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRa (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRm (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVm (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX0 (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY0 (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ0 (type: vector<double>*, class: CompartmentBase)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: handleAxial (type: double, class: CompartmentBase)

   Handles Axial information. Argument is just Vm.


.. describe:: handleChannel (type: double,double, class: CompartmentBase)

   Handles conductance and Reversal potential arguments from Channel


.. describe:: handleRaxial (type: double,double, class: CompartmentBase)

   Handles Raxial info: arguments are Ra and Vm.


.. describe:: initProc (type: const ProcInfo*, class: CompartmentBase)

   Handles Process call for the 'init' phase of the CompartmentBase calculations.
   These occur as a separate Tick cycle from the regular proc cycle, and
   should be called before the proc msg.


.. describe:: initReinit (type: const ProcInfo*, class: CompartmentBase)

   Handles Reinit call for the 'init' phase of the CompartmentBase calculations.



.. describe:: injectMsg (type: double, class: CompartmentBase)

   The injectMsg corresponds to the INJECT message in the GENESIS compartment.
   Unlike the 'inject' field, any value assigned by handleInject applies
   only for a single timestep.So it needs to be updated every dt for a steady
   (or varying)injection current


.. describe:: notifyAddMsgDest (type: ObjId, class: CompartmentBase)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: CompartmentBase)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: CompartmentBase)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: CompartmentBase)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: CompartmentBase)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: CompartmentBase)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: CompartmentBase)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: CompartmentBase)

   Handles 'process' call


.. describe:: randInject (type: double,double, class: CompartmentBase)

   Sends a random injection current to the compartment. Must beupdated each
   timestep.Arguments to randInject are probability and current.


.. describe:: reinit (type: const ProcInfo*, class: CompartmentBase)

   Handles 'reinit' call


.. describe:: setCm (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setCoords (type: vector<double>, class: CompartmentBase)

   Assigns field value.


.. describe:: setDiameter (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setEm (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setGeomAndElec (type: double,double, class: CompartmentBase)

   Assigns length and dia and accounts for any electrical scaling needed
   as a result.


.. describe:: setInitVm (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setInject (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setLength (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setName (type: string, class: CompartmentBase)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: CompartmentBase)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: CompartmentBase)

   Assigns field value.


.. describe:: setRa (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setRm (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: CompartmentBase)

   Assigns field value.


.. describe:: setTick (type: int, class: CompartmentBase)

   Assigns field value.


.. describe:: setVm (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setX (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setX0 (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setY (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setY0 (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setZ (type: double, class: CompartmentBase)

   Assigns field value.


.. describe:: setZ0 (type: double, class: CompartmentBase)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: axial (type: void, class: CompartmentBase)

   This is a shared message between asymmetric compartments. axial messages
   (this kind) connect up to raxial messages (defined below). The soma should
   use raxial messages to connect to the axial message of all the immediately
   adjacent dendritic compartments.This puts the (low) somatic resistance
   in series with these dendrites. Dendrites should then use raxial messages
   toconnect on to more distal dendrites. In other words, raxial messages
   should face outward from the soma. The first entry is a MsgSrc sending
   Vm to the axialFuncof the target compartment. The second entry is a MsgDest
   for the info coming from the other compt. It expects Ra and Vm from the
   other compt as args. Note that the message is named after the source
   type. - Handles 'axialOut' and 'handleRaxial' calls.


.. describe:: channel (type: void, class: CompartmentBase)

   This is a shared message from a compartment to channels. The first entry
   is a MsgDest for the info coming from the channel. It expects Gk and
   Ek from the channel as args. The second entry is a MsgSrc sending Vm
   - Handles 'handleChannel' and 'VmOut' calls.


.. describe:: init (type: void, class: CompartmentBase)

   This is a shared message to receive Init messages from the scheduler
   objects. Its job is to separate the compartmental calculations from the
   message passing. It doesn't really need to be shared, as it does not
   use the reinit part, but the scheduler objects expect this form of message
   for all scheduled output. The first entry is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a dummy
   MsgDest for the Reinit operation. It also uses ProcInfo. - Handles 'initProc'
   and 'initReinit' calls.


.. describe:: proc (type: void, class: CompartmentBase)

   This is a shared message to receive Process messages from the schedulerobjects.
   The Process should be called _second\_ in each clock tick, after the Init
   message.The first entry in the shared msg is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a MsgDest
   for the Reinit operation. It also uses ProcInfo. - Handles 'reinit' and
   'process' calls.


.. describe:: raxial (type: void, class: CompartmentBase)

   This is a raxial shared message between asymmetric compartments. The
   first entry is a MsgDest for the info coming from the other compt. It
   expects Vm from the other compt as an arg. The second is a MsgSrc sending
   Ra and Vm to the raxialFunc of the target compartment. - Handles 'handleAxial'
   and 'raxialOut' calls.



Attributes inherited from Neutral:
----------------------------------

