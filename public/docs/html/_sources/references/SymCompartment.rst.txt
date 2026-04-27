:orphan:

SymCompartment
==============


SymCompartment object, for branching neuron models. In symmetric
compartments the axial resistance is equally divided on two sides of
the node. The equivalent circuit of the passive compartment becomes:
(NOTE: you must use a fixed-width font like Courier for correct rendition of the diagrams below)::

            Ra/2    B    Ra/2
          A-/\/\/\_____/\/\/\-- C
                    |
                ____|____
               |         |
               |         \
               |         / Rm
              ---- Cm    \
              ----       /
               |         |
               |       _____
               |        ---  Em
               |_________|
                   |
                 __|__
                 /////



In case of branching, the B-C part of the parent's axial resistance
forms a Y with the A-B part of the children::

                                  B'
                                  |
                                  /
                                  \
                                  /
                                  \
                                  /
                                  |A'
                   B              |
     A-----/\/\/\-----/\/\/\------|C
                                  |
                                  |A"
                                  /
                                  \
                                  /
                                  \
                                  /
                                  |
                                  B"


As per basic circuit analysis techniques, the C node is replaced using
star-mesh transform. This requires all sibling compartments at a
branch point to be connected via 'sibling' messages by the user (or
by the cell reader in case of prototypes). For the same reason, the
child compartment must be connected to the parent by
distal-proximal message pair. The calculation of the
coefficient for computing equivalent resistances in the mesh is done
at reinit.

Author:   Upi Bhalla; updated and documented by Subhasis Ray


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Cm (type: double, class: SymCompartment)

   Membrane capacitance


.. describe:: Em (type: double, class: SymCompartment)

   Resting membrane potential


.. describe:: Im (type: double, class: SymCompartment)

   Current going through membrane


.. describe:: Ra (type: double, class: SymCompartment)

   Axial resistance of compartment


.. describe:: Rm (type: double, class: SymCompartment)

   Membrane resistance


.. describe:: Vm (type: double, class: SymCompartment)

   membrane potential


.. describe:: children (type: vector<Id>, class: SymCompartment)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: SymCompartment)

   Class Name of object


.. describe:: coords (type: vector<double>, class: SymCompartment)

   Vector with all coords: [x0 y0 z0 x y z dia]


.. describe:: destFields (type: vector<string>, class: SymCompartment)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diameter (type: double, class: SymCompartment)

   Diameter of compartment


.. describe:: dt (type: double, class: SymCompartment)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: SymCompartment)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: SymCompartment)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: SymCompartment)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: initVm (type: double, class: SymCompartment)

   Initial value for membrane potential


.. describe:: inject (type: double, class: SymCompartment)

   Current injection to deliver into compartment


.. describe:: length (type: double, class: SymCompartment)

   Length of compartment


.. describe:: me (type: ObjId, class: SymCompartment)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: SymCompartment)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: SymCompartment)

   Messages going out from this Element


.. describe:: name (type: string, class: SymCompartment)

   Name of object


.. describe:: numData (type: unsigned int, class: SymCompartment)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: SymCompartment)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: SymCompartment)

   Parent ObjId for current object


.. describe:: path (type: string, class: SymCompartment)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: SymCompartment)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: SymCompartment)

   Access function for entire object


.. describe:: tick (type: int, class: SymCompartment)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: SymCompartment)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: x (type: double, class: SymCompartment)

   x coordinate of end of compartment


.. describe:: x0 (type: double, class: SymCompartment)

   X coordinate of start of compartment


.. describe:: y (type: double, class: SymCompartment)

   y coordinate of end of compartment


.. describe:: y0 (type: double, class: SymCompartment)

   Y coordinate of start of compartment


.. describe:: z (type: double, class: SymCompartment)

   z coordinate of end of compartment


.. describe:: z0 (type: double, class: SymCompartment)

   Z coordinate of start of compartment



Attributes inherited from Compartment:
--------------------------------------


Attributes inherited from CompartmentBase:
------------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: SymCompartment)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: SymCompartment)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: SymCompartment)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: SymCompartment)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Compartment:
--------------------------------------


Attributes inherited from CompartmentBase:
------------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: VmOut (type: double, class: SymCompartment)

   Sends out Vm value of compartment on each timestep


.. describe:: axialOut (type: double, class: SymCompartment)

   Sends out Vm value of compartment to adjacent compartments,on each timestep



.. describe:: childOut (type: int, class: SymCompartment)

   Message to child Elements


.. describe:: cylinderOut (type: double,double, class: SymCompartment)

   Sends out Ra and Vm to compartments (typically spines) on the curved
   surface of a cylinder. Ra is set to nearly zero, since we assume that
   the resistance from axis to surface is negligible.


.. describe:: distalOut (type: double,double, class: SymCompartment)

   Sends out Ra and Vm on each timestep, on the distal end of a compartment.
   This end should be pointed away from the soma. Mathematically the same
   as proximalOut, but gives an orientation to the dendrite and helps traversal.



.. describe:: proximalOut (type: double,double, class: SymCompartment)

   Sends out Ra and Vm on each timestep, on the proximal end of a compartment.
   That is, this end should be pointed toward the soma. Mathematically the
   same as raxialOut but provides a logical orientation of the dendrite.
   One can traverse proximalOut messages to get to the soma.


.. describe:: raxialOut (type: double,double, class: SymCompartment)

   Sends out Raxial information on each timestep, fields are Ra and Vm


.. describe:: sumRaxialOut (type: double, class: SymCompartment)

   Sends out Ra



Attributes inherited from Compartment:
--------------------------------------


Attributes inherited from CompartmentBase:
------------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: cable (type: void, class: SymCompartment)

   Message for organizing compartments into groups, calledcables. Doesn't
   do anything.


.. describe:: displace (type: double,double,double, class: SymCompartment)

   Displaces compartment by specified vector


.. describe:: getChildren (type: vector<vector<Id>>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCm (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCoords (type: vector<vector<double>>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiameter (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEm (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIm (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInitVm (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInject (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLength (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRa (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRm (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVm (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX0 (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY0 (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ0 (type: vector<double>*, class: SymCompartment)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: handleAxial (type: double, class: SymCompartment)

   Handles Axial information. Argument is just Vm.


.. describe:: handleChannel (type: double,double, class: SymCompartment)

   Handles conductance and Reversal potential arguments from Channel


.. describe:: handleRaxial (type: double,double, class: SymCompartment)

   Handles Raxial info: arguments are Ra and Vm.


.. describe:: initProc (type: const ProcInfo*, class: SymCompartment)

   Handles Process call for the 'init' phase of the CompartmentBase calculations.
   These occur as a separate Tick cycle from the regular proc cycle, and
   should be called before the proc msg.


.. describe:: initReinit (type: const ProcInfo*, class: SymCompartment)

   Handles Reinit call for the 'init' phase of the CompartmentBase calculations.



.. describe:: injectMsg (type: double, class: SymCompartment)

   The injectMsg corresponds to the INJECT message in the GENESIS compartment.
   Unlike the 'inject' field, any value assigned by handleInject applies
   only for a single timestep.So it needs to be updated every dt for a steady
   (or varying)injection current


.. describe:: notifyAddMsgDest (type: ObjId, class: SymCompartment)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: SymCompartment)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: SymCompartment)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: SymCompartment)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: SymCompartment)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: SymCompartment)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: SymCompartment)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: SymCompartment)

   Handles 'process' call


.. describe:: randInject (type: double,double, class: SymCompartment)

   Sends a random injection current to the compartment. Must beupdated each
   timestep.Arguments to randInject are probability and current.


.. describe:: raxialCylinder (type: double,double, class: SymCompartment)

   Expects Ra and Vm from other compartment. This is a special case when
   other compartments are evenly distributed on the curved surface of the
   cylindrical compartment, so we assume that the cylinder does not add
   any further resistance.


.. describe:: raxialSphere (type: double,double, class: SymCompartment)

   Expects Ra and Vm from other compartment. This is a special case when
   other compartments are evenly distributed on a spherical compartment.



.. describe:: raxialSym (type: double,double, class: SymCompartment)

   Expects Ra and Vm from other compartment.


.. describe:: reinit (type: const ProcInfo*, class: SymCompartment)

   Handles 'reinit' call


.. describe:: setCm (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setCoords (type: vector<double>, class: SymCompartment)

   Assigns field value.


.. describe:: setDiameter (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setEm (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setGeomAndElec (type: double,double, class: SymCompartment)

   Assigns length and dia and accounts for any electrical scaling needed
   as a result.


.. describe:: setInitVm (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setInject (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setLength (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setName (type: string, class: SymCompartment)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: SymCompartment)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: SymCompartment)

   Assigns field value.


.. describe:: setRa (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setRm (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: SymCompartment)

   Assigns field value.


.. describe:: setTick (type: int, class: SymCompartment)

   Assigns field value.


.. describe:: setVm (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setX (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setX0 (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setY (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setY0 (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setZ (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: setZ0 (type: double, class: SymCompartment)

   Assigns field value.


.. describe:: sumRaxial (type: double, class: SymCompartment)

   Expects Ra from other compartment.



Attributes inherited from Compartment:
--------------------------------------


Attributes inherited from CompartmentBase:
------------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: axial (type: void, class: SymCompartment)

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


.. describe:: channel (type: void, class: SymCompartment)

   This is a shared message from a compartment to channels. The first entry
   is a MsgDest for the info coming from the channel. It expects Gk and
   Ek from the channel as args. The second entry is a MsgSrc sending Vm
   - Handles 'handleChannel' and 'VmOut' calls.


.. describe:: cylinder (type: void, class: SymCompartment)

   This is a shared message between a cylindrical compartment (typically
   a dendrite) and a number of evenly spaced child compartments, typically
   dendritic spines, protruding from the curved surface of the cylinder.
   We assume that the resistance from the cylinder curved surface to its
   axis is negligible. The child compartments do not need to connect across
   to each other through sibling messages. Instead they just connect to
   the parent dendrite through the 'proximalOnly' message


.. describe:: distal (type: void, class: SymCompartment)

   This is a shared message between symmetric compartments. It goes from
   the distal end of the current compartment to the proximal end of one
   further from the soma. The Ra values collected from children and sibling
   nodes are used for computing the equivalent resistance between each pair
   of nodes using star-mesh transformation. Mathematically this is the same
   as the proximal message, but the distinction is important for traversal
   and clarity.


.. describe:: init (type: void, class: SymCompartment)

   This is a shared message to receive Init messages from the scheduler
   objects. Its job is to separate the compartmental calculations from the
   message passing. It doesn't really need to be shared, as it does not
   use the reinit part, but the scheduler objects expect this form of message
   for all scheduled output. The first entry is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a dummy
   MsgDest for the Reinit operation. It also uses ProcInfo. - Handles 'initProc'
   and 'initReinit' calls.


.. describe:: proc (type: void, class: SymCompartment)

   This is a shared message to receive Process messages from the schedulerobjects.
   The Process should be called _second\_ in each clock tick, after the Init
   message.The first entry in the shared msg is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a MsgDest
   for the Reinit operation. It also uses ProcInfo. - Handles 'reinit' and
   'process' calls.


.. describe:: proximal (type: void, class: SymCompartment)

   This is a shared message between symmetric compartments. It goes from
   the proximal end of the current compartment to distal end of the compartment
   closer to the soma.


.. describe:: proximalOnly (type: void, class: SymCompartment)

   This is a shared message between a dendrite and a parent compartment
   whose offspring are spatially separated from each other. For example,
   evenly spaced dendrites emerging from a soma or spines emerging from
   a common parent dendrite. In these cases the sibling dendrites do not
   need to connect to each other through 'sibling' messages. Instead they
   just connect to the parent compartment (soma or dendrite) through this
   message


.. describe:: raxial (type: void, class: SymCompartment)

   This is a raxial shared message between asymmetric compartments. The
   first entry is a MsgDest for the info coming from the other compt. It
   expects Vm from the other compt as an arg. The second is a MsgSrc sending
   Ra and Vm to the raxialFunc of the target compartment. - Handles 'handleAxial'
   and 'raxialOut' calls.


.. describe:: sibling (type: void, class: SymCompartment)

   This is a shared message between symmetric compartments. Conceptually,
   this goes from the proximal end of the current compartment to the proximal
   end of a sibling compartment on a branch in a dendrite. However, this
   works out to the same as a 'distal' message in terms of equivalent circuit.
   The Ra values collected from siblings and parent node are used for computing
   the equivalent resistance between each pair of nodes using star-mesh
   transformation.


.. describe:: sphere (type: void, class: SymCompartment)

   This is a shared message between a spherical compartment (typically soma)
   and a number of evenly spaced cylindrical compartments, typically primary
   dendrites. The sphere contributes the usual Ra/2 to the resistance between
   itself and children. The child compartments do not connect across to
   each other through sibling messages. Instead they just connect to the
   soma through the 'proximalOnly' message



Attributes inherited from Compartment:
--------------------------------------


Attributes inherited from CompartmentBase:
------------------------------------------


Attributes inherited from Neutral:
----------------------------------

