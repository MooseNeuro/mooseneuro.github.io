:orphan:

Clock
=====


Every object scheduled for operations in MOOSE is connected to oneof the 'Tick' entries on the Clock.
The Clock manages 32 'Ticks', each of which has its own dt,which is an integral multiple of the clock baseDt\_. On every clock step the ticks are examined to see which of themis due for updating. When a tick is updated, the 'process' call of all the objects scheduled on that tick is called. Order of execution: If a subset of ticks are scheduled for execution at a given timestep, then they will be executed in numerical order, lowest tick first and highest last. There is no guarantee of execution order for objects within a clock tick.
The clock provides default scheduling for all objects which can be accessed using Clock::lookupDefaultTick( className ). Specific items of note are that the output/file dump objects are second-last, and the postmaster is last on the order of Ticks. The clock also starts up with some default timesteps for each of these ticks, and this can be overridden using the shell command setClock, or by directly assigning tickStep values on the clock object.Which objects use which tick? As a rule of thumb, try this:
Electrical/compartmental model calculations: Ticks 0-7
Tables and output objects for electrical output: Tick 8
Diffusion solver: Tick 10
Chemical/compartmental model calculations: Ticks 11-17
Tables and output objects for chemical output: Tick 18
Unassigned: Ticks 20-29
Special: 30-31
Data output is a bit special, since you may want to store data at different rates for electrical and chemical processes in the same model. Here you will have to specifically assign distinct clock ticks for the tables/fileIO objects handling output at different time-resolutions. Typically one uses tick 8 and 18.
Here are the detailed mappings of class to tick.
Class              Tick       dt
DiffAmp              0       50e-6
Interpol             0       50e-6
PIDController        0       50e-6
PulseGen             0       50e-6
StimulusTable        0       50e-6
testSched            0       50e-6
VClamp               0       50e-6
SynHandlerBase       1       50e-6
SimpleSynHandler     1       50e-6
STDPSynHandler       1       50e-6
GraupnerBrunel2012CaPlasticitySynHandler    1        50e-6
SeqSynHandler        1       50e-6
CaConc              1       50e-6
CaConcBase          1       50e-6
DifShell            1       50e-6
DifShellBase        1       50e-6
MMPump              1       50e-6
DifBuffer           1       50e-6
DifBufferBase       1       50e-6
MgBlock             1       50e-6
Nernst              1       50e-6
RandSpike           1       50e-6
IntFire             2       50e-6
IntFireBase         2       50e-6
LIF                 2       50e-6
QIF                 2       50e-6
ExIF                2       50e-6
AdExIF              2       50e-6
AdThreshIF          2       50e-6
IzhIF               2       50e-6
IzhikevichNrn       2       50e-6
MarkovGslSolver     2       50e-6
MarkovRateTable     2       50e-6
MarkovSolver        2       50e-6
MarkovSolverBase    2       50e-6
RC                  2       50e-6
Compartment (init)         2        50e-6
CompartmentBase (init )    2        50e-6
SymCompartment (init)      2        50e-6
Compartment          3      50e-6
CompartmentBase      3      50e-6
SymCompartment       3      50e-6
ChanBase            4       50e-6
SynChan             4       50e-6
NMDAChan            4       50e-6
GapJunction         4       50e-6
HHChannel           4       50e-6
HHChannel2D         4       50e-6
HHChannelF          4       50e-6
HHChannelF2D        4       50e-6
Leakage             4       50e-6
MarkovChannel       4       50e-6
SpikeGen             5      50e-6
HSolve               6      50e-6
SpikeStats           7      50e-6
Table                8      0.1e-3
TimeTable            8      0.1e-3
Dsolve               10     0.01
Adaptor              11     0.1
Function             12     0.1
Arith                12     0.1
Gsolve (init)        15     0.1
Ksolve (init)        15     0.1
Gsolve               16     0.1
Ksolve               16     0.1
Stats                17     0.1
Table2               18     1
SocketStreamer       19     1
Streamer             20     5
HDF5DataWriter        30    1
HDF5WriterBase        30    1
NSDFWriter            30    1
NSDFWriter2           30    1
PyRun                 30    1
PostMaster            31    0.01

Note that the other classes are not scheduled at all.

Author:   Upinder S. Bhalla, Nov 2013, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: baseDt (type: double, class: Clock)

   Base timestep for simulation. This is the smallest dt out of all the
   clock ticks. By definition all other timesteps are integral multiples
   of this, and are rounded to ensure that this is the case .


.. describe:: children (type: vector<Id>, class: Clock)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Clock)

   Class Name of object


.. describe:: currentStep (type: size_t, class: Clock)

   Current simulation step


.. describe:: currentTime (type: double, class: Clock)

   Current simulation time


.. describe:: destFields (type: vector<string>, class: Clock)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Clock)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: dts (type: vector<double>, class: Clock)

   Utility function returning the dt (timestep) of all ticks.


.. describe:: fieldIndex (type: unsigned int, class: Clock)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Clock)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Clock)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isRunning (type: bool, class: Clock)

   Utility function to report if simulation is in progress.


.. describe:: me (type: ObjId, class: Clock)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Clock)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Clock)

   Messages going out from this Element


.. describe:: name (type: string, class: Clock)

   Name of object


.. describe:: nsteps (type: size_t, class: Clock)

   Number of steps to advance the simulation, in units of the smallest timestep
   on the clock ticks


.. describe:: numData (type: unsigned int, class: Clock)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Clock)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numTicks (type: unsigned int, class: Clock)

   Number of clock ticks


.. describe:: parent (type: ObjId, class: Clock)

   Parent ObjId for current object


.. describe:: path (type: string, class: Clock)

   text path for object


.. describe:: runTime (type: double, class: Clock)

   Duration to run the simulation


.. describe:: sourceFields (type: vector<string>, class: Clock)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: stride (type: unsigned int, class: Clock)

   Number by which the simulation advances the current step on each cycle.
   stride = smallest active timestep/smallest defined timestep.


.. describe:: this (type: 7Neutral, class: Clock)

   Access function for entire object


.. describe:: tick (type: int, class: Clock)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Clock)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: defaultTick (type: string,unsigned int, class: Clock)

   Looks up the default Tick to use for the specified class. If no tick
   is assigned, as for classes without a process operation or zombie classes,
   the tick is ~0U. If nothing can be found returns 0 and emits a warning.



.. describe:: isA (type: string,bool, class: Clock)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Clock)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Clock)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Clock)

   Ids of Elements connected this Element on specified field.


.. describe:: tickDt (type: unsigned int,double, class: Clock)

   Timestep dt of specified Tick. Always integral multiple of dt\_. If you
   assign a non-integer multiple it will round off. A zero timestep means
   that the Tick is inactive


.. describe:: tickStep (type: unsigned int,unsigned int, class: Clock)

   Step size of specified Tick, as integral multiple of dt\_ A zero step
   size means that the Tick is inactive



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Clock)

   Message to child Elements


.. describe:: finished (type: void, class: Clock)

   Signal for completion of run


.. describe:: process0 (type: PK8ProcInfo, class: Clock)

   process for Tick 0


.. describe:: process1 (type: PK8ProcInfo, class: Clock)

   process for Tick 1


.. describe:: process10 (type: PK8ProcInfo, class: Clock)

   process for Tick 10


.. describe:: process11 (type: PK8ProcInfo, class: Clock)

   process for Tick 11


.. describe:: process12 (type: PK8ProcInfo, class: Clock)

   process for Tick 12


.. describe:: process13 (type: PK8ProcInfo, class: Clock)

   process for Tick 13


.. describe:: process14 (type: PK8ProcInfo, class: Clock)

   process for Tick 14


.. describe:: process15 (type: PK8ProcInfo, class: Clock)

   process for Tick 15


.. describe:: process16 (type: PK8ProcInfo, class: Clock)

   process for Tick 16


.. describe:: process17 (type: PK8ProcInfo, class: Clock)

   process for Tick 17


.. describe:: process18 (type: PK8ProcInfo, class: Clock)

   process for Tick 18


.. describe:: process19 (type: PK8ProcInfo, class: Clock)

   process for Tick 19


.. describe:: process2 (type: PK8ProcInfo, class: Clock)

   process for Tick 2


.. describe:: process20 (type: PK8ProcInfo, class: Clock)

   process for Tick 20


.. describe:: process21 (type: PK8ProcInfo, class: Clock)

   process for Tick 21


.. describe:: process22 (type: PK8ProcInfo, class: Clock)

   process for Tick 22


.. describe:: process23 (type: PK8ProcInfo, class: Clock)

   process for Tick 23


.. describe:: process24 (type: PK8ProcInfo, class: Clock)

   process for Tick 24


.. describe:: process25 (type: PK8ProcInfo, class: Clock)

   process for Tick 25


.. describe:: process26 (type: PK8ProcInfo, class: Clock)

   process for Tick 26


.. describe:: process27 (type: PK8ProcInfo, class: Clock)

   process for Tick 27


.. describe:: process28 (type: PK8ProcInfo, class: Clock)

   process for Tick 28


.. describe:: process29 (type: PK8ProcInfo, class: Clock)

   process for Tick 29


.. describe:: process3 (type: PK8ProcInfo, class: Clock)

   process for Tick 3


.. describe:: process30 (type: PK8ProcInfo, class: Clock)

   process for Tick 30


.. describe:: process31 (type: PK8ProcInfo, class: Clock)

   process for Tick 31


.. describe:: process4 (type: PK8ProcInfo, class: Clock)

   process for Tick 4


.. describe:: process5 (type: PK8ProcInfo, class: Clock)

   process for Tick 5


.. describe:: process6 (type: PK8ProcInfo, class: Clock)

   process for Tick 6


.. describe:: process7 (type: PK8ProcInfo, class: Clock)

   process for Tick 7


.. describe:: process8 (type: PK8ProcInfo, class: Clock)

   process for Tick 8


.. describe:: process9 (type: PK8ProcInfo, class: Clock)

   process for Tick 9


.. describe:: reinit0 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 0


.. describe:: reinit1 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 1


.. describe:: reinit10 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 10


.. describe:: reinit11 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 11


.. describe:: reinit12 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 12


.. describe:: reinit13 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 13


.. describe:: reinit14 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 14


.. describe:: reinit15 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 15


.. describe:: reinit16 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 16


.. describe:: reinit17 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 17


.. describe:: reinit18 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 18


.. describe:: reinit19 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 19


.. describe:: reinit2 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 2


.. describe:: reinit20 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 20


.. describe:: reinit21 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 21


.. describe:: reinit22 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 22


.. describe:: reinit23 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 23


.. describe:: reinit24 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 24


.. describe:: reinit25 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 25


.. describe:: reinit26 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 26


.. describe:: reinit27 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 27


.. describe:: reinit28 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 28


.. describe:: reinit29 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 29


.. describe:: reinit3 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 3


.. describe:: reinit30 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 30


.. describe:: reinit31 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 31


.. describe:: reinit4 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 4


.. describe:: reinit5 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 5


.. describe:: reinit6 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 6


.. describe:: reinit7 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 7


.. describe:: reinit8 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 8


.. describe:: reinit9 (type: PK8ProcInfo, class: Clock)

   reinit for Tick 9



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getBaseDt (type: vector<double>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCurrentStep (type: PSt6vectorImSaImEE, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCurrentTime (type: vector<double>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDefaultTick (type: unsigned int, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDts (type: vector<vector<double>>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsRunning (type: vector<bool>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNsteps (type: PSt6vectorImSaImEE, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumTicks (type: vector<unsigned int>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRunTime (type: vector<double>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStride (type: vector<unsigned int>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTickDt (type: double, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTickStep (type: unsigned int, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Clock)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Clock)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Clock)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Clock)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Clock)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Clock)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Clock)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Clock)

   Message from Parent Element(s)


.. describe:: reinit (type: void, class: Clock)

   Zeroes out all ticks, starts at t = 0


.. describe:: setBaseDt (type: double, class: Clock)

   Assigns field value.


.. describe:: setName (type: string, class: Clock)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Clock)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Clock)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Clock)

   Assigns field value.


.. describe:: setTick (type: int, class: Clock)

   Assigns field value.


.. describe:: setTickDt (type: unsigned int,double, class: Clock)

   Assigns field value.


.. describe:: setTickStep (type: unsigned int,unsigned int, class: Clock)

   Assigns field value.


.. describe:: start (type: double,bool, class: Clock)

   Sets off the simulation for the specified duration


.. describe:: step (type: size_t, class: Clock)

   Sets off the simulation for the specified # of steps. Here each step
   advances the simulation by the timestep of the smallest tick that is
   actually in use.


.. describe:: stop (type: void, class: Clock)

   Halts the simulation, with option to restart seamlessly



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: clockControl (type: void, class: Clock)

   Controls all scheduling aspects of Clock, usually from Shell


.. describe:: proc0 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc1 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc10 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc11 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc12 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc13 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc14 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc15 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc16 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc17 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc18 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc19 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc2 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc20 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc21 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc22 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc23 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc24 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc25 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc26 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc27 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc28 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc29 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc3 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc30 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc31 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc4 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc5 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc6 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc7 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc8 (type: void, class: Clock)

   Shared process/reinit message


.. describe:: proc9 (type: void, class: Clock)

   Shared process/reinit message



Attributes inherited from Neutral:
----------------------------------

