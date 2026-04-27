:orphan:

PresynMesh
==========





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: boutonSpacing (type: double, class: PresynMesh)

   Spacing in metres between boutons on a dendrite. Assigned when creating
   boutons on a dendrite. Not defined if the boutons are on spines, which
   are one-to-one.


.. describe:: children (type: vector<Id>, class: PresynMesh)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: PresynMesh)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: PresynMesh)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: PresynMesh)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: elecComptList (type: vector<Id>, class: PresynMesh)

   Return list of Ids of all postsyn compts, one per bouton. Provided to
   match with the other Mesh classes. Note that there may be repeats since
   a compt may receive multiple synaptic inputs. Identical to elecComptMap.



.. describe:: elecComptMap (type: vector<Id>, class: PresynMesh)

   Return list of Ids of all postsyn compts, one per bouton. Provided to
   match with the other Mesh classes. Note that there may be repeats since
   a compt may receive multiple synaptic inputs. Identical to elecComptList



.. describe:: endVoxelInCompt (type: vector<unsigned int>, class: PresynMesh)

   Index of end voxel that maps to each electrical compartment, using C++
   indexing. So if there was 1 voxel only it would return 1+startVoxelInCompt



.. describe:: fieldIndex (type: unsigned int, class: PresynMesh)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: PresynMesh)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: PresynMesh)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isMembraneBound (type: bool, class: PresynMesh)

   Flag, set to True for meshes where each voxel is membrane bound. NeuroMesh
   and SpineMesh are false. CubeMesh, CylMesh, and EndoMesh can be either.
   If they are membrane bound they can still interact via channels and cross-compartment
   reactions.


.. describe:: isOnSpines (type: bool, class: PresynMesh)

   Flag to report if PresynMesh is connected to spines,in which case the
   connections are one-to-one. If false, then the mesh is conneced to the
   dendrite.


.. describe:: me (type: ObjId, class: PresynMesh)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: PresynMesh)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: PresynMesh)

   Messages going out from this Element


.. describe:: name (type: string, class: PresynMesh)

   Name of object


.. describe:: numBoutons (type: unsigned int, class: PresynMesh)

   Total number of boutons defined in this mesh.


.. describe:: numData (type: unsigned int, class: PresynMesh)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numDimensions (type: unsigned int, class: PresynMesh)

   Number of spatial dimensions of this compartment. Usually 3 or 2


.. describe:: numField (type: unsigned int, class: PresynMesh)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: PresynMesh)

   Parent ObjId for current object


.. describe:: path (type: string, class: PresynMesh)

   text path for object


.. describe:: postsynCompts (type: vector<ObjId>, class: PresynMesh)

   Return list of all postsyn compts, one per bouton. Note that there may
   be repeats since a compt may receive multiple synaptic inputs.


.. describe:: sourceFields (type: vector<string>, class: PresynMesh)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: startVoxelInCompt (type: vector<unsigned int>, class: PresynMesh)

   Index of starting voxel that maps to each electrical compartment.


.. describe:: this (type: 7Neutral, class: PresynMesh)

   Access function for entire object


.. describe:: tick (type: int, class: PresynMesh)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: PresynMesh)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.


.. describe:: volume (type: double, class: PresynMesh)

   Volume of entire chemical domain.Assigning this only works if the chemical
   compartment hasonly a single voxel. Otherwise ignored.This function goes
   through all objects below this on thetree, and rescales their molecule
   #s and rates as per thevolume change. This keeps concentration the same,
   and alsomaintains rates as expressed in volume units.


.. describe:: voxelMidpoint (type: vector<double>, class: PresynMesh)

   Vector of midpoint coordinates of each of the voxels. The size of this
   vector is 3N, where N is the number of voxels. The first N entries are
   for x, next N for y, last N are z.


.. describe:: voxelVolume (type: vector<double>, class: PresynMesh)

   Vector of volumes of each of the voxels.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: PresynMesh)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: PresynMesh)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: PresynMesh)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: PresynMesh)

   Ids of Elements connected this Element on specified field.


.. describe:: numBoutonsOnCompartment (type: ObjId,int, class: PresynMesh)

   Number of boutons on specified electrical compartment.


.. describe:: oneVoxelMidpoint (type: unsigned int,vector<double>, class: PresynMesh)

   Vector of midpoint coordinates of specified voxel.


.. describe:: oneVoxelVolume (type: unsigned int,double, class: PresynMesh)

   Volume of specified voxel.


.. describe:: startBoutonIndexFromCompartment (type: ObjId,int, class: PresynMesh)

   Look up index of first bouton on specified compartment.


.. describe:: stencilIndex (type: unsigned int,vector<unsigned int>, class: PresynMesh)

   vector of voxels diffusively coupled to the specified voxel.The diffusion
   rates into the coupled voxels is given by the partner field 'stencilRate'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: stencilRate (type: unsigned int,vector<double>, class: PresynMesh)

   vector of diffusion rates in the stencil for specified voxel.The identity
   of the coupled voxels is given by the partner field 'stencilIndex'.Returns
   an empty vector for non-voxelized compartments.


.. describe:: voxelCoords (type: unsigned int,vector<double>, class: PresynMesh)

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

.. describe:: childOut (type: int, class: PresynMesh)

   Message to child Elements


.. describe:: voxelVolOut (type: vector<double>, class: PresynMesh)

   Sends updated voxel volume out to Ksolve, Gsolve, and Dsolve.Used to
   request a recalculation of rates and of initial numbers.



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: buildDefaultMesh (type: double,unsigned int, class: PresynMesh)

   Tells ChemCompt derived class to build a default mesh with thespecified
   volume and number of meshEntries.


.. describe:: buildOnDendrites (type: vector<ObjId>,double, class: PresynMesh)

   Assigns list of dendritic compartments to which the boutons should connect.
   Also assigns spacing. Sets isOnSpines to false.


.. describe:: buildOnSpineHeads (type: vector<ObjId>, class: PresynMesh)

   Assigns list of dendritic spine heads to which the boutons should connect.
   Sets isOnSpines to true.


.. describe:: getBoutonSpacing (type: vector<double>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getElecComptList (type: vector<vector<Id>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getElecComptMap (type: vector<vector<Id>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEndVoxelInCompt (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsMembraneBound (type: vector<bool>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsOnSpines (type: vector<bool>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumBoutons (type: vector<unsigned int>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumBoutonsOnCompartment (type: int, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumDimensions (type: vector<unsigned int>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumMesh (type: vector<unsigned int>*, class: PresynMesh)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getOneVoxelMidpoint (type: vector<double>, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOneVoxelVolume (type: double, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPostsynCompts (type: vector<vector<ObjId>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStartBoutonIndexFromCompartment (type: int, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStartVoxelInCompt (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilIndex (type: vector<unsigned int>, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStencilRate (type: vector<double>, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVolume (type: vector<double>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelCoords (type: vector<double>, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelMidpoint (type: vector<vector<double>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getVoxelVolume (type: vector<vector<double>>*, class: PresynMesh)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: PresynMesh)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: PresynMesh)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: PresynMesh)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: PresynMesh)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: PresynMesh)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: PresynMesh)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: PresynMesh)

   Message from Parent Element(s)


.. describe:: resetStencil (type: void, class: PresynMesh)

   Resets the diffusion stencil to the core stencil that only includes the
   within-mesh diffusion. This is needed prior to building up the cross-mesh
   diffusion through junctions.


.. describe:: setIsMembraneBound (type: bool, class: PresynMesh)

   Assigns field value.


.. describe:: setName (type: string, class: PresynMesh)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: PresynMesh)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: PresynMesh)

   Assigns field value.


.. describe:: setNumMesh (type: unsigned int, class: PresynMesh)

   Assigns number of field entries in field array.


.. describe:: setOneVoxelVolume (type: unsigned int,double, class: PresynMesh)

   Assigns field value.


.. describe:: setRadiusStats (type: double,double, class: PresynMesh)

   Assigns radius to the presyn boutons. SI units. Assumes bouton is a hemisphere.
   Vol = 2/3 PI R^3 If isOnSpines is true, then it assigns as a scale factor
   to the postsynaptic radius. If isOnSpines is false, then it assigns absolute
   radius. Arguments are radius, standard_deviation.


.. describe:: setThis (type: 7Neutral, class: PresynMesh)

   Assigns field value.


.. describe:: setTick (type: int, class: PresynMesh)

   Assigns field value.


.. describe:: setVolume (type: double, class: PresynMesh)

   Assigns field value.


.. describe:: setVolumeNotRates (type: double, class: PresynMesh)

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

.. describe:: mesh (type: 9MeshEntry, class: PresynMesh)

   Field Element for mesh entries



Attributes inherited from ChemCompt:
------------------------------------


Attributes inherited from Neutral:
----------------------------------

