:orphan:

MeshEntry
=========


One voxel in a chemical reaction compartment

Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Coordinates (type: vector<double>, class: MeshEntry)

   Coordinates that define current MeshEntry. Depend on MeshType.


.. describe:: DiffusionArea (type: vector<double>, class: MeshEntry)

   Diffusion area for geometry of interface


.. describe:: DiffusionScaling (type: vector<double>, class: MeshEntry)

   Diffusion scaling for geometry of interface


.. describe:: children (type: vector<Id>, class: MeshEntry)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: MeshEntry)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: MeshEntry)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dimensions (type: unsigned int, class: MeshEntry)

   number of dimensions of this MeshEntry


.. describe:: dt (type: double, class: MeshEntry)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: MeshEntry)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: MeshEntry)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: MeshEntry)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: MeshEntry)

   ObjId for current object


.. describe:: meshType (type: unsigned int, class: MeshEntry)

   The MeshType defines the shape of the mesh entry. 0: Not assigned 1:
   cuboid 2: cylinder 3. cylindrical shell 4: cylindrical shell segment
   5: sphere 6: spherical shell 7: spherical shell segment 8: Tetrahedral



.. describe:: msgIn (type: vector<ObjId>, class: MeshEntry)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: MeshEntry)

   Messages going out from this Element


.. describe:: name (type: string, class: MeshEntry)

   Name of object


.. describe:: neighbors (type: vector<unsigned int>, class: MeshEntry)

   Indices of other MeshEntries that this one connects to


.. describe:: numData (type: unsigned int, class: MeshEntry)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: MeshEntry)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: MeshEntry)

   Parent ObjId for current object


.. describe:: path (type: string, class: MeshEntry)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: MeshEntry)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: MeshEntry)

   Access function for entire object


.. describe:: tick (type: int, class: MeshEntry)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: MeshEntry)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: MeshEntry)

   Volume of this MeshEntry



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: MeshEntry)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: MeshEntry)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: MeshEntry)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: MeshEntry)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: MeshEntry)

   Message to child Elements


.. describe:: remeshOut (type: double,unsigned int,unsigned int,vector<unsigned int>,vector<double>, class: MeshEntry)

   Tells the target pool or other entity that the compartment subdivision(meshing)
   has changed, and that it has to redo its volume and memory allocation
   accordingly.Arguments are: oldvol, numTotalEntries, startEntry, localIndices,
   volsThe vols specifies volumes of each local mesh entry. It also specifieshow
   many meshEntries are present on the local node.The localIndices vector
   is used for general load balancing only.It has a list of the all meshEntries
   on current node.If it is empty, we assume block load balancing. In this
   secondcase the contents of the current node go from startEntry to startEntry
   + vols.size().


.. describe:: remeshReacsOut (type: void, class: MeshEntry)

   Tells connected enz or reac that the compartment subdivision(meshing)
   has changed, and that it has to redo its volume-dependent rate terms
   like numKf\_ accordingly.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCoordinates (type: vector<vector<double>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiffusionArea (type: vector<vector<double>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiffusionScaling (type: vector<vector<double>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDimensions (type: vector<unsigned int>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMeshType (type: vector<unsigned int>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: MeshEntry)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: MeshEntry)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: MeshEntry)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: MeshEntry)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: MeshEntry)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: MeshEntry)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: MeshEntry)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: MeshEntry)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: MeshEntry)

   Handles process call


.. describe:: reinit (type: const ProcInfo*, class: MeshEntry)

   Handles reinit call


.. describe:: setName (type: string, class: MeshEntry)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: MeshEntry)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: MeshEntry)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: MeshEntry)

   Assigns field value.


.. describe:: setTick (type: int, class: MeshEntry)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: mesh (type: void, class: MeshEntry)

   Shared message for updating mesh volumes and subdivisions,typically controls
   pool volumes


.. describe:: proc (type: void, class: MeshEntry)

   Shared message for process and reinit



Attributes inherited from Neutral:
----------------------------------

