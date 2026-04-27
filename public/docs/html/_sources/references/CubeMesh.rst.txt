:orphan:

CubeMesh
========


Chemical compartment with cuboid grid. Defaults to a cube of size 10 microns, with mesh size also 10 microns, so that there is just 1 cubic voxel. These defaults are similar to that of a typical cell. Can be configured to have different x,y,z dimensions and also different dx,dy,dz voxel sizes.

Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: alwaysDiffuse (type: bool, class: CubeMesh)

   Flag. When it is true, the mesh matches up sequential mesh entries for
   diffusion and chmestry. This is regardless of spatial location, and is
   guaranteed to set up at least the home reaction systemDefault is false



.. describe:: children (type: vector<Id>, class: CubeMesh)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: CubeMesh)

   Class Name of object


.. describe:: coords (type: vector<double>, class: CubeMesh)

   Set all the coords of the cuboid at once. Order is:x0 y0 z0 x1 y1 z1
   dx dy dzWhen this is done, it recalculates the numEntries since dx, dy
   and dz are given explicitly.As a special hack, you can leave out dx,
   dy and dz and use a vector of size 6. In this case the operation assumes
   that nx, ny and nz are to be preserved and dx, dy and dz will be recalculated.



.. describe:: destFields (type: vector<string>, class: CubeMesh)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: CubeMesh)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: dx (type: double, class: CubeMesh)

   X size for mesh


.. describe:: dy (type: double, class: CubeMesh)

   Y size for mesh


.. describe:: dz (type: double, class: CubeMesh)

   Z size for mesh


.. describe:: fieldIndex (type: unsigned int, class: CubeMesh)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: CubeMesh)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: CubeMesh)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isMembraneBound (type: bool, class: CubeMesh)

   Flag, set to True for meshes where each voxel is membrane bound. NeuroMesh
   and SpineMesh are false. CubeMesh, CylMesh, and EndoMesh can be either.
   If they are membrane bound they can still interact via channels and cross-compartment
   reactions.


.. describe:: isToroid (type: bool, class: CubeMesh)

   Flag. True when the mesh should be toroidal, that is,when going beyond
   the right face brings us around to theleft-most mesh entry, and so on.
   If we have nx, ny, nzentries, this rule means that the coordinate (x,
   ny, z)will map onto (x, 0, z). Similarly,(-1, y, z) -> (nx-1, y, z)Default
   is false


.. describe:: me (type: ObjId, class: CubeMesh)

   ObjId for current object


.. describe:: meshToSpace (type: vector<unsigned int>, class: CubeMesh)

   Array in which each mesh entry stores spatial (cubic) index


.. describe:: msgIn (type: vector<ObjId>, class: CubeMesh)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: CubeMesh)

   Messages going out from this Element


.. describe:: name (type: string, class: CubeMesh)

   Name of object


.. describe:: numData (type: unsigned int, class: CubeMesh)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numDimensions (type: unsigned int, class: CubeMesh)

   Number of spatial dimensions of this compartment. Usually 3 or 2


.. describe:: numField (type: unsigned int, class: CubeMesh)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: nx (type: unsigned int, class: CubeMesh)

   Number of subdivisions in mesh in X


.. describe:: ny (type: unsigned int, class: CubeMesh)

   Number of subdivisions in mesh in Y


.. describe:: nz (type: unsigned int, class: CubeMesh)

   Number of subdivisions in mesh in Z


.. describe:: parent (type: ObjId, class: CubeMesh)

   Parent ObjId for current object


.. describe:: path (type: string, class: CubeMesh)

   text path for object


.. describe:: preserveNumEntries (type: bool, class: CubeMesh)

   Flag. When it is true, the numbers nx, ny, nz remainunchanged when x0,
   x1, y0, y1, z0, z1 are altered. Thusdx, dy, dz would change instead.
   When it is false, thendx, dy, dz remain the same and nx, ny, nz are altered.Default
   is true


.. describe:: sourceFields (type: vector<string>, class: CubeMesh)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: spaceToMesh (type: vector<unsigned int>, class: CubeMesh)

   Array in which each space index (obtained by linearizing the xyz coords)
   specifies which meshIndex is present.In many cases the index will store
   the EMPTY flag if there isno mesh entry at that spatial location


.. describe:: surface (type: vector<unsigned int>, class: CubeMesh)

   Array specifying surface of arbitrary volume within the CubeMesh. All
   entries must fall within the cuboid. Each entry of the array is a spatial
   index obtained by linearizing the ix, iy, iz coordinates within the cuboid.
   So, each entry == ( iz * ny + iy ) * nx + ixNote that the voxels listed
   on the surface are WITHIN the volume of the CubeMesh object


.. describe:: this (type: 7Neutral, class: CubeMesh)

   Access function for entire object


.. describe:: tick (type: int, class: CubeMesh)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: CubeMesh)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: CubeMesh)

   Volume of entire chemical domain.Assigning this only works if the chemical
   compartment hasonly a single voxel. Otherwise ignored.This function goes
   through all objects below this on thetree, and rescales their molecule
   #s and rates as per thevolume change. This keeps concentration the same,
   and alsomaintains rates as expressed in volume units.


.. describe:: voxelMidpoint (type: vector<double>, class: CubeMesh)

   Vector of midpoint coordinates of each of the voxels. The size of this
   vector is 3N, where N is the number of voxels. The first N entries are
   for x, next N for y, last N are z.


.. describe:: voxelVolume (type: vector<double>, class: CubeMesh)

   Vector of volumes of each of the voxels.


.. describe:: x0 (type: double, class: CubeMesh)

   X coord of one end


.. describe:: x1 (type: double, class: CubeMesh)

   X coord of other end


.. describe:: y0 (type: double, class: CubeMesh)

   Y coord of one end


.. describe:: y1 (type: double, class: CubeMesh)

   Y coord of other end


.. describe:: z0 (type: double, class: CubeMesh)

   Z coord of one end


.. describe:: z1 (type: double, class: CubeMesh)

   Z coord of other end



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: CubeMesh)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: CubeMesh)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: CubeMesh)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: CubeMesh)

   Ids of Elements connected this Element on specified field.


.. describe:: oneVoxelMidpoint (type: unsigned int,vector<double>, class: CubeMesh)

   Vector of midpoint coordinates of specified voxel.


.. describe:: oneVoxelVolume (type: unsigned int,double, class: CubeMesh)

   Volume of specified voxel.


.. describe:: stencilIndex (type: unsigned int,vector<unsigned int>, class: CubeMesh)

   vector of voxels diffusively coupled to the specified voxel.The diffusion
   rates into the coupled voxels is given by the partner field 'stencilRate'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: stencilRate (type: unsigned int,vector<double>, class: CubeMesh)

   vector of diffusion rates in the stencil for specified voxel.The identity
   of the coupled voxels is given by the partner field 'stencilIndex'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: voxelCoords (type: unsigned int,vector<double>, class: CubeMesh)

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

.. describe:: childOut (type: int, class: CubeMesh)

   Message to child Elements


.. describe:: voxelVolOut (type: vector<double>, class: CubeMesh)

   Sends updated voxel volume out to Ksolve, Gsolve, and Dsolve.Used to
   request a recalculation of rates and of initial numbers.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: buildDefaultMesh (type: double,unsigned int, class: CubeMesh)

   Tells ChemCompt derived class to build a default mesh with thespecified
   volume and number of meshEntries.


.. describe:: getAlwaysDiffuse (type: vector<bool>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCoords (type: vector<vector<double>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDx (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDy (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDz (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsMembraneBound (type: vector<bool>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsToroid (type: vector<bool>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMeshToSpace (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumDimensions (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumMesh (type: vector<unsigned int>*, class: CubeMesh)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNx (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNy (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNz (type: vector<unsigned int>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOneVoxelMidpoint (type: vector<double>, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOneVoxelVolume (type: double, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPreserveNumEntries (type: vector<bool>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpaceToMesh (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilIndex (type: vector<unsigned int>, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilRate (type: vector<double>, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSurface (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelCoords (type: vector<double>, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelMidpoint (type: vector<vector<double>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelVolume (type: vector<vector<double>>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX0 (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX1 (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY0 (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY1 (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ0 (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ1 (type: vector<double>*, class: CubeMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: CubeMesh)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: CubeMesh)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: CubeMesh)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: CubeMesh)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: CubeMesh)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: CubeMesh)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: CubeMesh)

   Message from Parent Element(s)


.. describe:: resetStencil (type: void, class: CubeMesh)

   Resets the diffusion stencil to the core stencil that only includes the
   within-mesh diffusion. This is needed prior to building up the cross-mesh
   diffusion through junctions.


.. describe:: setAlwaysDiffuse (type: bool, class: CubeMesh)

   Assigns field value.


.. describe:: setCoords (type: vector<double>, class: CubeMesh)

   Assigns field value.


.. describe:: setDx (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setDy (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setDz (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setIsMembraneBound (type: bool, class: CubeMesh)

   Assigns field value.


.. describe:: setIsToroid (type: bool, class: CubeMesh)

   Assigns field value.


.. describe:: setMeshToSpace (type: vector<unsigned int>, class: CubeMesh)

   Assigns field value.


.. describe:: setName (type: string, class: CubeMesh)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: CubeMesh)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: CubeMesh)

   Assigns field value.


.. describe:: setNumMesh (type: unsigned int, class: CubeMesh)

   Assigns number of field entries in field array.


.. describe:: setNx (type: unsigned int, class: CubeMesh)

   Assigns field value.


.. describe:: setNy (type: unsigned int, class: CubeMesh)

   Assigns field value.


.. describe:: setNz (type: unsigned int, class: CubeMesh)

   Assigns field value.


.. describe:: setOneVoxelVolume (type: unsigned int,double, class: CubeMesh)

   Assigns field value.


.. describe:: setPreserveNumEntries (type: bool, class: CubeMesh)

   Assigns field value.


.. describe:: setSpaceToMesh (type: vector<unsigned int>, class: CubeMesh)

   Assigns field value.


.. describe:: setSurface (type: vector<unsigned int>, class: CubeMesh)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: CubeMesh)

   Assigns field value.


.. describe:: setTick (type: int, class: CubeMesh)

   Assigns field value.


.. describe:: setVolume (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setVolumeNotRates (type: double, class: CubeMesh)

   Changes volume but does not notify any child objects.Only works if the
   ChemCompt has just one voxel.This function will invalidate any concentration
   term inthe model. If you don't know why you would want to do this,then
   you shouldn't use this function.


.. describe:: setX0 (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setX1 (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setY0 (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setY1 (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setZ0 (type: double, class: CubeMesh)

   Assigns field value.


.. describe:: setZ1 (type: double, class: CubeMesh)

   Assigns field value.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------



Field Attributes:
-----------------

.. describe:: mesh (type: 9MeshEntry, class: CubeMesh)

   Field Element for mesh entries



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

