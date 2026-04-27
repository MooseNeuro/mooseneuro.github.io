:orphan:

CylMesh
=======


Chemical compartment with cylindrical geometry. Defaults to a uniform cylinder of radius 1 micron, length 100 microns, and voxel length 1 micron so there are 100 voxels in the cylinder. The cylinder can be given a linear taper, by assigning different radii r0 and r1 to the two ends.

Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: CylMesh)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: CylMesh)

   Class Name of object


.. describe:: coords (type: vector<double>, class: CylMesh)

   All the coords as a single vector: x0 y0 z0 x1 y1 z1 r0 r1 diffLength



.. describe:: destFields (type: vector<string>, class: CylMesh)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diffLength (type: double, class: CylMesh)

   Length constant to use for subdivisionsThe system will attempt to subdivide
   using compartments oflength diffLength on average. If the cylinder has
   different enddiameters r0 and r1, it will scale to smaller lengthsfor
   the smaller diameter end and vice versa.Once the value is set it will
   recompute diffLength as totLength/numEntries


.. describe:: dt (type: double, class: CylMesh)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: CylMesh)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: CylMesh)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: CylMesh)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isMembraneBound (type: bool, class: CylMesh)

   Flag, set to True for meshes where each voxel is membrane bound. NeuroMesh
   and SpineMesh are false. CubeMesh, CylMesh, and EndoMesh can be either.
   If they are membrane bound they can still interact via channels and cross-compartment
   reactions.


.. describe:: me (type: ObjId, class: CylMesh)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: CylMesh)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: CylMesh)

   Messages going out from this Element


.. describe:: name (type: string, class: CylMesh)

   Name of object


.. describe:: numData (type: unsigned int, class: CylMesh)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numDiffCompts (type: unsigned int, class: CylMesh)

   Number of diffusive compartments in model


.. describe:: numDimensions (type: unsigned int, class: CylMesh)

   Number of spatial dimensions of this compartment. Usually 3 or 2


.. describe:: numField (type: unsigned int, class: CylMesh)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: CylMesh)

   Parent ObjId for current object


.. describe:: path (type: string, class: CylMesh)

   text path for object


.. describe:: r0 (type: double, class: CylMesh)

   Radius of one end


.. describe:: r1 (type: double, class: CylMesh)

   Radius of other end


.. describe:: sourceFields (type: vector<string>, class: CylMesh)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: CylMesh)

   Access function for entire object


.. describe:: tick (type: int, class: CylMesh)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: totLength (type: double, class: CylMesh)

   Total length of cylinder


.. describe:: valueFields (type: vector<string>, class: CylMesh)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: CylMesh)

   Volume of entire chemical domain.Assigning this only works if the chemical
   compartment hasonly a single voxel. Otherwise ignored.This function goes
   through all objects below this on thetree, and rescales their molecule
   #s and rates as per thevolume change. This keeps concentration the same,
   and alsomaintains rates as expressed in volume units.


.. describe:: voxelMidpoint (type: vector<double>, class: CylMesh)

   Vector of midpoint coordinates of each of the voxels. The size of this
   vector is 3N, where N is the number of voxels. The first N entries are
   for x, next N for y, last N are z.


.. describe:: voxelVolume (type: vector<double>, class: CylMesh)

   Vector of volumes of each of the voxels.


.. describe:: x0 (type: double, class: CylMesh)

   x coord of one end


.. describe:: x1 (type: double, class: CylMesh)

   x coord of other end


.. describe:: y0 (type: double, class: CylMesh)

   y coord of one end


.. describe:: y1 (type: double, class: CylMesh)

   y coord of other end


.. describe:: z0 (type: double, class: CylMesh)

   z coord of one end


.. describe:: z1 (type: double, class: CylMesh)

   z coord of other end



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: CylMesh)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: CylMesh)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: CylMesh)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: CylMesh)

   Ids of Elements connected this Element on specified field.


.. describe:: oneVoxelMidpoint (type: unsigned int,vector<double>, class: CylMesh)

   Vector of midpoint coordinates of specified voxel.


.. describe:: oneVoxelVolume (type: unsigned int,double, class: CylMesh)

   Volume of specified voxel.


.. describe:: stencilIndex (type: unsigned int,vector<unsigned int>, class: CylMesh)

   vector of voxels diffusively coupled to the specified voxel.The diffusion
   rates into the coupled voxels is given by the partner field 'stencilRate'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: stencilRate (type: unsigned int,vector<double>, class: CylMesh)

   vector of diffusion rates in the stencil for specified voxel.The identity
   of the coupled voxels is given by the partner field 'stencilIndex'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: voxelCoords (type: unsigned int,vector<double>, class: CylMesh)

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

.. describe:: childOut (type: int, class: CylMesh)

   Message to child Elements


.. describe:: voxelVolOut (type: vector<double>, class: CylMesh)

   Sends updated voxel volume out to Ksolve, Gsolve, and Dsolve.Used to
   request a recalculation of rates and of initial numbers.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: buildDefaultMesh (type: double,unsigned int, class: CylMesh)

   Tells ChemCompt derived class to build a default mesh with thespecified
   volume and number of meshEntries.


.. describe:: getChildren (type: vector<vector<Id>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCoords (type: vector<vector<double>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiffLength (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsMembraneBound (type: vector<bool>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumDiffCompts (type: vector<unsigned int>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumDimensions (type: vector<unsigned int>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumMesh (type: vector<unsigned int>*, class: CylMesh)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getOneVoxelMidpoint (type: vector<double>, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOneVoxelVolume (type: double, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getR0 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getR1 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilIndex (type: vector<unsigned int>, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilRate (type: vector<double>, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTotLength (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelCoords (type: vector<double>, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelMidpoint (type: vector<vector<double>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelVolume (type: vector<vector<double>>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX0 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getX1 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY0 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getY1 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ0 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getZ1 (type: vector<double>*, class: CylMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: CylMesh)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: CylMesh)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: CylMesh)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: CylMesh)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: CylMesh)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: CylMesh)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: CylMesh)

   Message from Parent Element(s)


.. describe:: resetStencil (type: void, class: CylMesh)

   Resets the diffusion stencil to the core stencil that only includes the
   within-mesh diffusion. This is needed prior to building up the cross-mesh
   diffusion through junctions.


.. describe:: setCoords (type: vector<double>, class: CylMesh)

   Assigns field value.


.. describe:: setDiffLength (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setIsMembraneBound (type: bool, class: CylMesh)

   Assigns field value.


.. describe:: setName (type: string, class: CylMesh)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: CylMesh)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: CylMesh)

   Assigns field value.


.. describe:: setNumMesh (type: unsigned int, class: CylMesh)

   Assigns number of field entries in field array.


.. describe:: setOneVoxelVolume (type: unsigned int,double, class: CylMesh)

   Assigns field value.


.. describe:: setR0 (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setR1 (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: CylMesh)

   Assigns field value.


.. describe:: setTick (type: int, class: CylMesh)

   Assigns field value.


.. describe:: setVolume (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setVolumeNotRates (type: double, class: CylMesh)

   Changes volume but does not notify any child objects.Only works if the
   ChemCompt has just one voxel.This function will invalidate any concentration
   term inthe model. If you don't know why you would want to do this,then
   you shouldn't use this function.


.. describe:: setX0 (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setX1 (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setY0 (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setY1 (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setZ0 (type: double, class: CylMesh)

   Assigns field value.


.. describe:: setZ1 (type: double, class: CylMesh)

   Assigns field value.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------



Field Attributes:
-----------------

.. describe:: mesh (type: 9MeshEntry, class: CylMesh)

   Field Element for mesh entries



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

