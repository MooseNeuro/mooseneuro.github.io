:orphan:

DifShell
========


DifShell object: Models diffusion of an ion (typically calcium) within an electric compartment. A DifShell is an iso-concentration region with respect to the ion. Adjoining DifShells exchange flux of this ion, and also keep track of changes in concentration due to pumping, buffering and channel currents, by talking to the appropriate objects.

Author:   Niraj Dudani. Ported to async13 by Subhasis Ray. Rewritten by Asia Jedrzejewska-Szmek



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: C (type: double, class: DifShell)

   Concentration C


.. describe:: Ceq (type: double, class: DifShell)

.. describe:: D (type: double, class: DifShell)

.. describe:: children (type: vector<Id>, class: DifShell)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: DifShell)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: DifShell)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diameter (type: double, class: DifShell)

.. describe:: dt (type: double, class: DifShell)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: DifShell)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: DifShell)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: DifShell)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: innerArea (type: double, class: DifShell)

.. describe:: leak (type: double, class: DifShell)

.. describe:: length (type: double, class: DifShell)

.. describe:: me (type: ObjId, class: DifShell)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: DifShell)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: DifShell)

   Messages going out from this Element


.. describe:: name (type: string, class: DifShell)

   Name of object


.. describe:: numData (type: unsigned int, class: DifShell)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: DifShell)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outerArea (type: double, class: DifShell)

.. describe:: parent (type: ObjId, class: DifShell)

   Parent ObjId for current object


.. describe:: path (type: string, class: DifShell)

   text path for object


.. describe:: shapeMode (type: unsigned int, class: DifShell)

.. describe:: sourceFields (type: vector<string>, class: DifShell)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: thickness (type: double, class: DifShell)

.. describe:: this (type: 7Neutral, class: DifShell)

   Access function for entire object


.. describe:: tick (type: int, class: DifShell)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valence (type: double, class: DifShell)

.. describe:: valueFields (type: vector<string>, class: DifShell)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: DifShell)


Attributes inherited from DifShellBase:
---------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: DifShell)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: DifShell)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: DifShell)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: DifShell)

   Ids of Elements connected this Element on specified field.



Attributes inherited from DifShellBase:
---------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: DifShell)

   Message to child Elements


.. describe:: concentrationOut (type: double, class: DifShell)

   Sends out concentration


.. describe:: innerDifSourceOut (type: double,double, class: DifShell)

   Sends out source information.


.. describe:: outerDifSourceOut (type: double,double, class: DifShell)

   Sends out source information.



Attributes inherited from DifShellBase:
---------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: eqTauPump (type: double, class: DifShell)

.. describe:: fInflux (type: double,double, class: DifShell)

.. describe:: fOutflux (type: double,double, class: DifShell)

.. describe:: fluxFromIn (type: double,double, class: DifShell)

.. describe:: fluxFromOut (type: double,double, class: DifShell)

   Destination message


.. describe:: getC (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCeq (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getD (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiameter (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInnerArea (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLeak (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getLength (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOuterArea (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getShapeMode (type: vector<unsigned int>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThickness (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValence (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: DifShell)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: hillPump (type: double,double,unsigned int, class: DifShell)

.. describe:: influx (type: double, class: DifShell)

.. describe:: mmPump (type: double,double, class: DifShell)

   Here DifShell receives pump outflux


.. describe:: notifyAddMsgDest (type: ObjId, class: DifShell)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: DifShell)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: DifShell)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: DifShell)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: DifShell)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: DifShell)

   Called when object is moved. Arg is new parent.


.. describe:: outflux (type: double, class: DifShell)

.. describe:: parentMsg (type: int, class: DifShell)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: DifShell)

   Handles process call


.. describe:: reaction (type: double,double,double,double, class: DifShell)

   Here the DifShell receives reaction rates (forward and backward), and
   concentrations for the free-buffer and bound-buffer molecules.


.. describe:: reinit (type: const ProcInfo*, class: DifShell)

   Reinit happens only in stage 0


.. describe:: setC (type: double, class: DifShell)

   Assigns field value.


.. describe:: setCeq (type: double, class: DifShell)

   Assigns field value.


.. describe:: setD (type: double, class: DifShell)

   Assigns field value.


.. describe:: setDiameter (type: double, class: DifShell)

   Assigns field value.


.. describe:: setInnerArea (type: double, class: DifShell)

   Assigns field value.


.. describe:: setLeak (type: double, class: DifShell)

   Assigns field value.


.. describe:: setLength (type: double, class: DifShell)

   Assigns field value.


.. describe:: setName (type: string, class: DifShell)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: DifShell)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: DifShell)

   Assigns field value.


.. describe:: setOuterArea (type: double, class: DifShell)

   Assigns field value.


.. describe:: setShapeMode (type: unsigned int, class: DifShell)

   Assigns field value.


.. describe:: setThickness (type: double, class: DifShell)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: DifShell)

   Assigns field value.


.. describe:: setTick (type: int, class: DifShell)

   Assigns field value.


.. describe:: setValence (type: double, class: DifShell)

   Assigns field value.


.. describe:: setVolume (type: double, class: DifShell)

   Assigns field value.


.. describe:: storeInflux (type: double, class: DifShell)

.. describe:: storeOutflux (type: double, class: DifShell)

.. describe:: tauPump (type: double,double, class: DifShell)


Attributes inherited from DifShellBase:
---------------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: buffer (type: void, class: DifShell)

   This is a shared message from a DifShell to a Buffer (FixBuffer or DifBuffer).



.. describe:: innerDif (type: void, class: DifShell)

   This shared message (and the next) is between DifShells: adjoining shells
   exchange information to find out the flux between them. Using this message,
   an inner shell sends to, and receives from its outer shell.


.. describe:: outerDif (type: void, class: DifShell)

   Using this message, an outer shell sends to, and receives from its inner
   shell.


.. describe:: proc (type: void, class: DifShell)

   Shared message to receive Process message from scheduler



Attributes inherited from DifShellBase:
---------------------------------------


Attributes inherited from Neutral:
----------------------------------

