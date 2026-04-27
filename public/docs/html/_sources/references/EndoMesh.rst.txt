:orphan:

EndoMesh
========





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: aPower (type: double, class: EndoMesh)

   Used in rEndo = aScale * pow(surroundVol, aPower).Used to obtain area
   of each endo voxel from matching surround voxel. Defaults to 1/2


.. describe:: aScale (type: double, class: EndoMesh)

   Used in rEndo = aScale * pow(surroundVol, aPower).Used to obtain area
   of each endo voxel from matching surround voxel. Defaults to 0.25


.. describe:: children (type: vector<Id>, class: EndoMesh)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: EndoMesh)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: EndoMesh)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: doAxialDiffusion (type: bool, class: EndoMesh)

   Flag to determine if endoMesh should undertake axial diffusion. Defaults
   to 'false'. Should only be used within NeuroMesh and CylMesh. Must be
   assigned before Dsolver is built.


.. describe:: dt (type: double, class: EndoMesh)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: elecComptMap (type: vector<Id>, class: EndoMesh)

   Vector of Ids of electrical compartments that map to each voxel. This
   function simply asks the surround mesh for this.


.. describe:: fieldIndex (type: unsigned int, class: EndoMesh)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: EndoMesh)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: EndoMesh)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isMembraneBound (type: bool, class: EndoMesh)

   Flag, set to True for meshes where each voxel is membrane bound. NeuroMesh
   and SpineMesh are false. CubeMesh, CylMesh, and EndoMesh can be either.
   If they are membrane bound they can still interact via channels and cross-compartment
   reactions.


.. describe:: me (type: ObjId, class: EndoMesh)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: EndoMesh)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: EndoMesh)

   Messages going out from this Element


.. describe:: name (type: string, class: EndoMesh)

   Name of object


.. describe:: numData (type: unsigned int, class: EndoMesh)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numDimensions (type: unsigned int, class: EndoMesh)

   Number of spatial dimensions of this compartment. Usually 3 or 2


.. describe:: numField (type: unsigned int, class: EndoMesh)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: EndoMesh)

   Parent ObjId for current object


.. describe:: path (type: string, class: EndoMesh)

   text path for object


.. describe:: rPower (type: double, class: EndoMesh)

   Used in rEndo = rScale * pow(surroundVol, rPower).Used to obtain radius
   of each endo voxel from matching surround voxel. Defaults to 1/3


.. describe:: rScale (type: double, class: EndoMesh)

   Used in rEndo = rScale * pow(surroundVol, rPower).Used to obtain radius
   of each endo voxel from matching surround voxel. Defaults to 0.5


.. describe:: sourceFields (type: vector<string>, class: EndoMesh)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: surround (type: ObjId, class: EndoMesh)

   ObjId of compartment surrounding current EndoMesh


.. describe:: this (type: 7Neutral, class: EndoMesh)

   Access function for entire object


.. describe:: tick (type: int, class: EndoMesh)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: vPower (type: double, class: EndoMesh)

   Used in rEndo = vScale * pow(surroundVol, vPower).Used to obtain volume
   of each endo voxel from matching surround voxel. Defaults to 1.


.. describe:: vScale (type: double, class: EndoMesh)

   Used in rEndo = vScale * pow(surroundVol, vPower).Used to obtain volume
   of each endo voxel from matching surround voxel. Defaults to 0.125


.. describe:: valueFields (type: vector<string>, class: EndoMesh)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: EndoMesh)

   Volume of entire chemical domain.Assigning this only works if the chemical
   compartment hasonly a single voxel. Otherwise ignored.This function goes
   through all objects below this on thetree, and rescales their molecule
   #s and rates as per thevolume change. This keeps concentration the same,
   and alsomaintains rates as expressed in volume units.


.. describe:: voxelMidpoint (type: vector<double>, class: EndoMesh)

   Vector of midpoint coordinates of each of the voxels. The size of this
   vector is 3N, where N is the number of voxels. The first N entries are
   for x, next N for y, last N are z.


.. describe:: voxelVolume (type: vector<double>, class: EndoMesh)

   Vector of volumes of each of the voxels.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: EndoMesh)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: EndoMesh)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: EndoMesh)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: EndoMesh)

   Ids of Elements connected this Element on specified field.


.. describe:: oneVoxelMidpoint (type: unsigned int,vector<double>, class: EndoMesh)

   Vector of midpoint coordinates of specified voxel.


.. describe:: oneVoxelVolume (type: unsigned int,double, class: EndoMesh)

   Volume of specified voxel.


.. describe:: stencilIndex (type: unsigned int,vector<unsigned int>, class: EndoMesh)

   vector of voxels diffusively coupled to the specified voxel.The diffusion
   rates into the coupled voxels is given by the partner field 'stencilRate'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: stencilRate (type: unsigned int,vector<double>, class: EndoMesh)

   vector of diffusion rates in the stencil for specified voxel.The identity
   of the coupled voxels is given by the partner field 'stencilIndex'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: voxelCoords (type: unsigned int,vector<double>, class: EndoMesh)

   Returns vector of coords of voxel specified by fid.Coords for CubeMesh
   are x1y1z1 x2y2z2.Coords for Cylinder, Neuro, Spine and PSD are: x1y1z1
   x2y2z2 dia0 dia1 phi0 phi1Last two of these are ignored here.Returns
   empty vec if voxel idx is wrong.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: EndoMesh)

   Message to child Elements


.. describe:: voxelVolOut (type: vector<double>, class: EndoMesh)

   Sends updated voxel volume out to Ksolve, Gsolve, and Dsolve.Used to
   request a recalculation of rates and of initial numbers.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: buildDefaultMesh (type: double,unsigned int, class: EndoMesh)

   Tells ChemCompt derived class to build a default mesh with thespecified
   volume and number of meshEntries.


.. describe:: getAPower (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getAScale (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDoAxialDiffusion (type: vector<bool>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getElecComptMap (type: vector<vector<Id>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsMembraneBound (type: vector<bool>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumDimensions (type: vector<unsigned int>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumMesh (type: vector<unsigned int>*, class: EndoMesh)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getOneVoxelMidpoint (type: vector<double>, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOneVoxelVolume (type: double, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRPower (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRScale (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilIndex (type: vector<unsigned int>, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilRate (type: vector<double>, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSurround (type: vector<ObjId>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVPower (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVScale (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelCoords (type: vector<double>, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelMidpoint (type: vector<vector<double>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelVolume (type: vector<vector<double>>*, class: EndoMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: EndoMesh)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: EndoMesh)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: EndoMesh)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: EndoMesh)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: EndoMesh)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: EndoMesh)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: EndoMesh)

   Message from Parent Element(s)


.. describe:: resetStencil (type: void, class: EndoMesh)

   Resets the diffusion stencil to the core stencil that only includes the
   within-mesh diffusion. This is needed prior to building up the cross-mesh
   diffusion through junctions.


.. describe:: setAPower (type: double, class: EndoMesh)

   Assigns field value.


.. describe:: setAScale (type: double, class: EndoMesh)

   Assigns field value.


.. describe:: setDoAxialDiffusion (type: bool, class: EndoMesh)

   Assigns field value.


.. describe:: setIsMembraneBound (type: bool, class: EndoMesh)

   Assigns field value.


.. describe:: setName (type: string, class: EndoMesh)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: EndoMesh)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: EndoMesh)

   Assigns field value.


.. describe:: setNumMesh (type: unsigned int, class: EndoMesh)

   Assigns number of field entries in field array.


.. describe:: setOneVoxelVolume (type: unsigned int,double, class: EndoMesh)

   Assigns field value.


.. describe:: setRPower (type: double, class: EndoMesh)

   Assigns field value.


.. describe:: setRScale (type: double, class: EndoMesh)

   Assigns field value.


.. describe:: setSurround (type: ObjId, class: EndoMesh)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: EndoMesh)

   Assigns field value.


.. describe:: setTick (type: int, class: EndoMesh)

   Assigns field value.


.. describe:: setVPower (type: double, class: EndoMesh)

   Assigns field value.


.. describe:: setVScale (type: double, class: EndoMesh)

   Assigns field value.


.. describe:: setVolume (type: double, class: EndoMesh)

   Assigns field value.


.. describe:: setVolumeNotRates (type: double, class: EndoMesh)

   Changes volume but does not notify any child objects.Only works if the
   ChemCompt has just one voxel.This function will invalidate any concentration
   term inthe model. If you don't know why you would want to do this,then
   you shouldn't use this function.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------



Field Attributes:
-----------------

.. describe:: mesh (type: 9MeshEntry, class: EndoMesh)

   Field Element for mesh entries



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

