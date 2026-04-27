:orphan:

DifBuffer
=========


Models diffusible buffer where total concentration is constant. It is coupled with a DifShell.

Author:   Subhasis Ray (ported from GENESIS2)


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: D (type: double, class: DifBuffer)

   Diffusion constant of buffer molecules. m^2/s


.. describe:: activation (type: double, class: DifBuffer)

   Ion concentration from incoming conc message.


.. describe:: bBound (type: double, class: DifBuffer)

   Bound buffer concentration


.. describe:: bFree (type: double, class: DifBuffer)

   Free buffer concentration


.. describe:: bTot (type: double, class: DifBuffer)

   Total buffer concentration.


.. describe:: children (type: vector<Id>, class: DifBuffer)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: DifBuffer)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: DifBuffer)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diameter (type: double, class: DifBuffer)

   Diameter of shell


.. describe:: dt (type: double, class: DifBuffer)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: DifBuffer)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: DifBuffer)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: DifBuffer)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: innerArea (type: double, class: DifBuffer)

   Inner area of shell


.. describe:: kb (type: double, class: DifBuffer)

   Backward rate constant of buffer molecules. 1/s


.. describe:: kf (type: double, class: DifBuffer)

   Forward rate constant of buffer molecules 1/mM/s (?)


.. describe:: length (type: double, class: DifBuffer)

   Length of shell


.. describe:: me (type: ObjId, class: DifBuffer)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: DifBuffer)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: DifBuffer)

   Messages going out from this Element


.. describe:: name (type: string, class: DifBuffer)

   Name of object


.. describe:: numData (type: unsigned int, class: DifBuffer)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: DifBuffer)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outerArea (type: double, class: DifBuffer)

   Outer area of shell


.. describe:: parent (type: ObjId, class: DifBuffer)

   Parent ObjId for current object


.. describe:: path (type: string, class: DifBuffer)

   text path for object


.. describe:: shapeMode (type: unsigned int, class: DifBuffer)

   shape of the shell: SHELL=0, SLICE=SLAB=1, USERDEF=3


.. describe:: sourceFields (type: vector<string>, class: DifBuffer)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: thickness (type: double, class: DifBuffer)

   Thickness of shell


.. describe:: this (type: 7Neutral, class: DifBuffer)

   Access function for entire object


.. describe:: tick (type: int, class: DifBuffer)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: DifBuffer)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: DifBuffer)


Attributes inherited from DifBufferBase:
----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: DifBuffer)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: DifBuffer)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: DifBuffer)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: DifBuffer)

   Ids of Elements connected this Element on specified field.



Attributes inherited from DifBufferBase:
----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: DifBuffer)

   Message to child Elements


.. describe:: innerDifSourceOut (type: double,double, class: DifBuffer)

   Sends out source information.


.. describe:: outerDifSourceOut (type: double,double, class: DifBuffer)

   Sends out source information.


.. describe:: reactionOut (type: double,double,double,double, class: DifBuffer)

   Sends out reaction rates (forward and backward), and concentrations (free-buffer
   and bound-buffer molecules).



Attributes inherited from DifBufferBase:
----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: concentration (type: double, class: DifBuffer)

   Receives concentration (from DifShell).


.. describe:: fluxFromIn (type: double,double, class: DifBuffer)

.. describe:: fluxFromOut (type: double,double, class: DifBuffer)

   Destination message


.. describe:: getActivation (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getBBound (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getBFree (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getBTot (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getD (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiameter (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInnerArea (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKb (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKf (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLength (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOuterArea (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getShapeMode (type: vector<unsigned int>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThickness (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: DifBuffer)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: DifBuffer)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: DifBuffer)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: DifBuffer)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: DifBuffer)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: DifBuffer)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: DifBuffer)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: DifBuffer)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: DifBuffer)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: DifBuffer)

   Reinit happens only in stage 0


.. describe:: setActivation (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setBBound (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setBFree (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setBTot (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setD (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setDiameter (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setInnerArea (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setKb (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setKf (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setLength (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setName (type: string, class: DifBuffer)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: DifBuffer)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: DifBuffer)

   Assigns field value.


.. describe:: setOuterArea (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setShapeMode (type: unsigned int, class: DifBuffer)

   Assigns field value.


.. describe:: setThickness (type: double, class: DifBuffer)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: DifBuffer)

   Assigns field value.


.. describe:: setTick (type: int, class: DifBuffer)

   Assigns field value.


.. describe:: setVolume (type: double, class: DifBuffer)

   Assigns field value.



Attributes inherited from DifBufferBase:
----------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: buffer (type: void, class: DifBuffer)

   This is a shared message with DifShell. During stage 0: - DifBufferBase
   sends ion concentration - Buffer updates buffer concentration and sends
   it back immediately using a call-back. - DifShell updates the time-derivative
   ( dC / dt ) During stage 1: - DifShell advances concentration C This
   scheme means that the Buffer does not need to be scheduled, and it does
   its computations when it receives a cue from the DifShell. May not be
   the best idea, but it saves us from doing the above computations in 3
   stages instead of 2.


.. describe:: innerDif (type: void, class: DifBuffer)

   This shared message (and the next) is between DifBufferBases: adjoining
   shells exchange information to find out the flux between them. Using
   this message, an inner shell sends to, and receives from its outer shell.



.. describe:: outerDif (type: void, class: DifBuffer)

   Using this message, an outer shell sends to, and receives from its inner
   shell.


.. describe:: proc (type: void, class: DifBuffer)

   Here we create 2 shared finfos to attach with the Ticks. This is because
   we want to perform DifBufferBase computations in 2 stages, much as in
   the Compartment object. In the first stage we send out the concentration
   value to other DifBufferBases and Buffer elements. We also



Attributes inherited from DifBufferBase:
----------------------------------------


Attributes inherited from Neutral:
----------------------------------

