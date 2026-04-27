:orphan:

NeuroMesh
=========





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: NeuroMesh)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: NeuroMesh)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: NeuroMesh)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: diffLength (type: double, class: NeuroMesh)

   Diffusive length constant to use for subdivisions. The system willattempt
   to subdivide cell using diffusive compartments ofthe specified diffusion
   lengths as a maximum.In order to get integral numbersof compartments
   in each segment, it may subdivide more finely.Uses default of 0.5 microns,
   that is, half typical lambda.For default, consider a tau of about 1 second
   for mostreactions, and a diffusion const of about 1e-12 um^2/sec.This
   gives lambda of 1 micron


.. describe:: dt (type: double, class: NeuroMesh)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: elecComptList (type: vector<Id>, class: NeuroMesh)

   Vector of Ids of all electrical compartments in this NeuroMesh. Ordering
   is as per the tree structure built in the NeuroMesh, and may differ from
   Id order. Ordering matches that used for startVoxelInCompt and endVoxelInCompt



.. describe:: elecComptMap (type: vector<Id>, class: NeuroMesh)

   Vector of Ids of electrical compartments that map to each voxel. This
   is necessary because the order of the IDs may differ from the ordering
   of the voxels. Additionally, there are typically many more voxels than
   there are electrical compartments. So many voxels point to the same elecCompt.



.. describe:: endVoxelInCompt (type: vector<unsigned int>, class: NeuroMesh)

   Index of end voxel that maps to each electrical compartment. In keeping
   with C and Python convention, this is one more than the last voxel. Each
   elecCompt has one or more voxels. The voxels in a compartment are numbered
   sequentially.


.. describe:: fieldIndex (type: unsigned int, class: NeuroMesh)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: geometryPolicy (type: string, class: NeuroMesh)

   Policy for how to interpret electrical model geometry (which is a branching
   1-dimensional tree) in terms of 3-D constructslike spheres, cylinders,
   and cones.There are three options, default, trousers, and cylinder:default
   mode: - Use frustrums of cones. Distal diameter is always from compt
   dia. - For linear dendrites (no branching), proximal diameter is diameter
   of the parent compartment - For branching dendrites and dendrites emerging
   from soma, proximal diameter is from compt dia. Don't worry about overlap.
   - Place somatic dendrites on surface of spherical soma, or at ends of
   cylindrical soma - Place dendritic spines on surface of cylindrical dendrites,
   not emerging from their middle.trousers mode: - Use frustrums of cones.
   Distal diameter is always from compt dia. - For linear dendrites (no
   branching), proximal diameter is diameter of the parent compartment -
   For branching dendrites, use a trouser function. Avoid overlap. - For
   soma, use some variant of trousers. Here we must avoid overlap - For
   spines, use a way to smoothly merge into parent dend. Radius of curvature
   should be similar to that of the spine neck. - Place somatic dendrites
   on surface of spherical soma, or at ends of cylindrical soma - Place
   dendritic spines on surface of cylindrical dendrites, not emerging from
   their middle.cylinder mode: - Use cylinders. Diameter is just compartment
   dia. - Place somatic dendrites on surface of spherical soma, or at ends
   of cylindrical soma - Place dendritic spines on surface of cylindrical
   dendrites, not emerging from their middle. - Ignore spatial overlap.



.. describe:: idValue (type: unsigned int, class: NeuroMesh)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: NeuroMesh)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isMembraneBound (type: bool, class: NeuroMesh)

   Flag, set to True for meshes where each voxel is membrane bound. NeuroMesh
   and SpineMesh are false. CubeMesh, CylMesh, and EndoMesh can be either.
   If they are membrane bound they can still interact via channels and cross-compartment
   reactions.


.. describe:: me (type: ObjId, class: NeuroMesh)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: NeuroMesh)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: NeuroMesh)

   Messages going out from this Element


.. describe:: name (type: string, class: NeuroMesh)

   Name of object


.. describe:: numData (type: unsigned int, class: NeuroMesh)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numDiffCompts (type: unsigned int, class: NeuroMesh)

   Number of diffusive compartments in model


.. describe:: numDimensions (type: unsigned int, class: NeuroMesh)

   Number of spatial dimensions of this compartment. Usually 3 or 2


.. describe:: numField (type: unsigned int, class: NeuroMesh)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numSegments (type: unsigned int, class: NeuroMesh)

   Number of cylindrical/spherical segments in model


.. describe:: parent (type: ObjId, class: NeuroMesh)

   Parent ObjId for current object


.. describe:: parentVoxel (type: vector<unsigned int>, class: NeuroMesh)

   Vector of indices of parents of each voxel.


.. describe:: path (type: string, class: NeuroMesh)

   text path for object


.. describe:: separateSpines (type: bool, class: NeuroMesh)

   Flag: when separateSpines is true, the traversal separates any compartment
   with the strings 'spine', 'head', 'shaft' or 'neck' in its name,Allows
   to set up separate mesh for spines, based on the same cell model. Requires
   for the spineListOut message tobe sent to the target SpineMesh object.



.. describe:: sourceFields (type: vector<string>, class: NeuroMesh)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: spineVoxelOnDendVoxel (type: vector<int>, class: NeuroMesh)

   Voxel index of spine voxel on each dend voxel. Assume that there is never
   more than one spine per dend voxel. If no spine present, the entry is
   -1. Note that the same index is used both for spine head and PSDs.


.. describe:: startVoxelInCompt (type: vector<unsigned int>, class: NeuroMesh)

   Index of first voxel that maps to each electrical compartment. Each elecCompt
   has one or more voxels. The voxels in a compartment are numbered sequentially.



.. describe:: subTree (type: vector<ObjId>, class: NeuroMesh)

   Set of compartments in which to embed chemical reaction systems. If the
   compartments happen to be contiguousthen also set up diffusion between
   them. Can alsohandle cases where the same cell is divided into multiplenon-diffusively-coupled
   compartments


.. describe:: subTreePath (type: string, class: NeuroMesh)

   Set of compartments to model, defined as a path string. If they happen
   to be contiguous then also set up diffusion between the compartments.
   Can alsohandle cases where the same cell is divided into multiplenon-diffusively-coupled
   compartments


.. describe:: this (type: 7Neutral, class: NeuroMesh)

   Access function for entire object


.. describe:: tick (type: int, class: NeuroMesh)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: NeuroMesh)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: NeuroMesh)

   Volume of entire chemical domain.Assigning this only works if the chemical
   compartment hasonly a single voxel. Otherwise ignored.This function goes
   through all objects below this on thetree, and rescales their molecule
   #s and rates as per thevolume change. This keeps concentration the same,
   and alsomaintains rates as expressed in volume units.


.. describe:: voxelMidpoint (type: vector<double>, class: NeuroMesh)

   Vector of midpoint coordinates of each of the voxels. The size of this
   vector is 3N, where N is the number of voxels. The first N entries are
   for x, next N for y, last N are z.


.. describe:: voxelVolume (type: vector<double>, class: NeuroMesh)

   Vector of volumes of each of the voxels.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: dendVoxelsOnCompartment (type: ObjId,vector<unsigned int>, class: NeuroMesh)

   Returns vector of all chem voxels on specified electrical compartment
   of the dendrite. Returns empty vec if none found, or if the compartment
   isn't on the dendrite.


.. describe:: isA (type: string,bool, class: NeuroMesh)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: NeuroMesh)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: NeuroMesh)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: NeuroMesh)

   Ids of Elements connected this Element on specified field.


.. describe:: oneVoxelMidpoint (type: unsigned int,vector<double>, class: NeuroMesh)

   Vector of midpoint coordinates of specified voxel.


.. describe:: oneVoxelVolume (type: unsigned int,double, class: NeuroMesh)

   Volume of specified voxel.


.. describe:: spineVoxelsOnCompartment (type: ObjId,vector<unsigned int>, class: NeuroMesh)

   Returns vector of all chem voxels on specified electrical compartment,
   which should be a spine head or shaft . Returns empty vec if no chem
   voxels found, or if the compartment isn't on the dendrite. Note that
   spine and PSD voxel indices are the same for a given spine head.


.. describe:: stencilIndex (type: unsigned int,vector<unsigned int>, class: NeuroMesh)

   vector of voxels diffusively coupled to the specified voxel.The diffusion
   rates into the coupled voxels is given by the partner field 'stencilRate'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: stencilRate (type: unsigned int,vector<double>, class: NeuroMesh)

   vector of diffusion rates in the stencil for specified voxel.The identity
   of the coupled voxels is given by the partner field 'stencilIndex'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: voxelCoords (type: unsigned int,vector<double>, class: NeuroMesh)

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

.. describe:: childOut (type: int, class: NeuroMesh)

   Message to child Elements


.. describe:: psdListOut (type: vector<double>,vector<Id>,vector<unsigned int>, class: NeuroMesh)

   Tells PsdMesh to build a mesh. Arguments: (Cell Id, Coordinates of each
   psd, Id of electrical compartment mapped to each voxel, index of matching
   parent voxels for each spine.) The coordinates each have 8 entries:xyz
   of centre of psd, xyz of vector perpendicular to psd, psd diameter, diffusion
   distance from parent compartment to PSD


.. describe:: spineListOut (type: vector<Id>,vector<Id>,vector<unsigned int>, class: NeuroMesh)

   Request SpineMesh to construct self based on list of electrical compartments
   that this NeuroMesh has determined are spine shaft and spine head respectively.
   Also passes in the info about where each spine is connected to the NeuroMesh.
   Arguments: shaft compartment Ids, head compartment Ids,index of matching
   parent voxels for each spine


.. describe:: voxelVolOut (type: vector<double>, class: NeuroMesh)

   Sends updated voxel volume out to Ksolve, Gsolve, and Dsolve.Used to
   request a recalculation of rates and of initial numbers.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: buildDefaultMesh (type: double,unsigned int, class: NeuroMesh)

   Tells ChemCompt derived class to build a default mesh with thespecified
   volume and number of meshEntries.


.. describe:: getChildren (type: vector<vector<Id>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDendVoxelsOnCompartment (type: vector<unsigned int>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDiffLength (type: vector<double>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getElecComptList (type: vector<vector<Id>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getElecComptMap (type: vector<vector<Id>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEndVoxelInCompt (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGeometryPolicy (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsMembraneBound (type: vector<bool>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumDiffCompts (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumDimensions (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumMesh (type: vector<unsigned int>*, class: NeuroMesh)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNumSegments (type: vector<unsigned int>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOneVoxelMidpoint (type: vector<double>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOneVoxelVolume (type: double, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParentVoxel (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSeparateSpines (type: vector<bool>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpineVoxelOnDendVoxel (type: PSt6vectorIS_IiSaIiEESaIS1_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpineVoxelsOnCompartment (type: vector<unsigned int>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStartVoxelInCompt (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilIndex (type: vector<unsigned int>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilRate (type: vector<double>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSubTree (type: vector<vector<ObjId>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSubTreePath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelCoords (type: vector<double>, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelMidpoint (type: vector<vector<double>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelVolume (type: vector<vector<double>>*, class: NeuroMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: NeuroMesh)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: NeuroMesh)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: NeuroMesh)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: NeuroMesh)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: NeuroMesh)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: NeuroMesh)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: NeuroMesh)

   Message from Parent Element(s)


.. describe:: resetStencil (type: void, class: NeuroMesh)

   Resets the diffusion stencil to the core stencil that only includes the
   within-mesh diffusion. This is needed prior to building up the cross-mesh
   diffusion through junctions.


.. describe:: setDiffLength (type: double, class: NeuroMesh)

   Assigns field value.


.. describe:: setGeometryPolicy (type: string, class: NeuroMesh)

   Assigns field value.


.. describe:: setIsMembraneBound (type: bool, class: NeuroMesh)

   Assigns field value.


.. describe:: setName (type: string, class: NeuroMesh)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: NeuroMesh)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: NeuroMesh)

   Assigns field value.


.. describe:: setNumMesh (type: unsigned int, class: NeuroMesh)

   Assigns number of field entries in field array.


.. describe:: setOneVoxelVolume (type: unsigned int,double, class: NeuroMesh)

   Assigns field value.


.. describe:: setSeparateSpines (type: bool, class: NeuroMesh)

   Assigns field value.


.. describe:: setSubTree (type: vector<ObjId>, class: NeuroMesh)

   Assigns field value.


.. describe:: setSubTreePath (type: string, class: NeuroMesh)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: NeuroMesh)

   Assigns field value.


.. describe:: setTick (type: int, class: NeuroMesh)

   Assigns field value.


.. describe:: setVolume (type: double, class: NeuroMesh)

   Assigns field value.


.. describe:: setVolumeNotRates (type: double, class: NeuroMesh)

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

.. describe:: mesh (type: 9MeshEntry, class: NeuroMesh)

   Field Element for mesh entries



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

