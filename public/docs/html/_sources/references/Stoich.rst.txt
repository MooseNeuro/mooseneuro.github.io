:orphan:

Stoich
======





Author:
-------



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: allowNegative (type: bool, class: Stoich)

   Flag: allow negative values if true. Default is false. This is used to
   protect the chemical system from going unstable in cases where the numerical
   integration gives a negative value. Typically it is a small negative
   value but is obviously physically impossible. In some cases we want to
   use the solvers to handle general systems of equations (not purely chemical
   ones), so we have this flag to allow it.


.. describe:: children (type: vector<Id>, class: Stoich)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Stoich)

   Class Name of object


.. describe:: columnIndex (type: vector<unsigned int>, class: Stoich)

   Column Index of each matrix entry


.. describe:: compartment (type: Id, class: Stoich)

   Id of chemical compartment class that works with this Stoich. Must be
   derived from class ChemCompt. If left unset then the system will be assumed
   to work in a non-diffusive, well-stirred cell. If it is going to be used
   it must be assigned before the path is set.


.. describe:: destFields (type: vector<string>, class: Stoich)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dsolve (type: Id, class: Stoich)

   Id of Diffusion solver class that works with this Stoich. Must be of
   class Dsolve If left unset then the system will be assumed to work in
   a non-diffusive, well-stirred cell. If it is going to be used it must
   be assigned before the path is set.


.. describe:: dt (type: double, class: Stoich)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Stoich)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Stoich)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Stoich)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: ksolve (type: Id, class: Stoich)

   Id of Kinetic reaction solver class that works with this Stoich. Must
   be of class Ksolve, or Gsolve (at present) Must be assigned before the
   path is set.


.. describe:: matrixEntry (type: vector<int>, class: Stoich)

   The non-zero matrix entries in the sparse matrix. Theircolumn indices
   are in a separate vector and the rowinformation in a third


.. describe:: me (type: ObjId, class: Stoich)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Stoich)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Stoich)

   Messages going out from this Element


.. describe:: name (type: string, class: Stoich)

   Name of object


.. describe:: numAllPools (type: unsigned int, class: Stoich)

   Total number of pools handled by the numerical engine. This includes
   variable ones, buffered ones, and functions. It includes local pools
   as well as cross-solver proxy pools.


.. describe:: numBufPools (type: unsigned int, class: Stoich)

   Number of buffered pools to be computed by the numerical engine.


.. describe:: numData (type: unsigned int, class: Stoich)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Stoich)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numFuncPools (type: unsigned int, class: Stoich)

   Number of pools controlled by functions computed by the numerical engine.



.. describe:: numProxyPools (type: unsigned int, class: Stoich)

   Number of pools here by proxy as substrates of a cross-compartment reaction.



.. describe:: numRates (type: unsigned int, class: Stoich)

   Total number of rate terms in the reaction system.


.. describe:: numVarPools (type: unsigned int, class: Stoich)

   Number of time-varying pools to be computed by the numerical engine


.. describe:: parent (type: ObjId, class: Stoich)

   Parent ObjId for current object


.. describe:: path (type: string, class: Stoich)

   text path for object


.. describe:: poolIdMap (type: vector<unsigned int>, class: Stoich)

   Map to look up the index of the pool from its Id.poolIndex = poolIdMap[
   Id::value() - poolOffset ] where the poolOffset is the smallest Id::value.
   poolOffset is passed back as the last entry of this vector. Any Ids that
   are not pools return EMPTY=~0.


.. describe:: reacSystemPath (type: string, class: Stoich)

   Wildcard path for reaction system handled by Stoich


.. describe:: rowStart (type: vector<unsigned int>, class: Stoich)

   Row start for each block of entries and column indices


.. describe:: sourceFields (type: vector<string>, class: Stoich)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: status (type: int, class: Stoich)

   Status of Stoich in the model building process. Values are: -1: Reaction
   path not yet assigned. 0: Successfully built stoichiometry matrix. 1:
   Warning: Missing a reactant in a Reac or Enz. 2: Warning: Missing a substrate
   in an MMenz. 3: Warning: Missing substrates as well as reactants. 4:
   Warning: Compartment not defined. 8: Warning: Neither Ksolve nor Dsolve
   defined. 16: Warning: No objects found on path.


.. describe:: this (type: 7Neutral, class: Stoich)

   Access function for entire object


.. describe:: tick (type: int, class: Stoich)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Stoich)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Stoich)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Stoich)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Stoich)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Stoich)

   Ids of Elements connected this Element on specified field.


.. describe:: proxyPools (type: Id,vector<Id>, class: Stoich)

   Return vector of proxy pools for X-compt reactions between current stoich,
   and the argument, which is a StoichId. The returned pools belong to the
   compartment handling the Stoich specified in the argument. If no pools
   are found, return an empty vector.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Stoich)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getAllowNegative (type: vector<bool>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getColumnIndex (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompartment (type: vector<Id>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDsolve (type: vector<Id>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKsolve (type: vector<Id>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMatrixEntry (type: PSt6vectorIS_IiSaIiEESaIS1_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumAllPools (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumBufPools (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumFuncPools (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumProxyPools (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumRates (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumVarPools (type: vector<unsigned int>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPoolIdMap (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getProxyPools (type: vector<Id>, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getReacSystemPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRowStart (type: PSt6vectorIS_IjSaIjEESaIS1_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStatus (type: PSt6vectorIiSaIiEE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Stoich)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Stoich)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Stoich)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Stoich)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Stoich)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Stoich)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Stoich)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Stoich)

   Message from Parent Element(s)


.. describe:: scaleBufsAndRates (type: unsigned int,double, class: Stoich)

   Args: voxel#, volRatio Handles requests for runtime volume changes in
   the specified voxel#, Used in adaptors changing spine vols.


.. describe:: setAllowNegative (type: bool, class: Stoich)

   Assigns field value.


.. describe:: setCompartment (type: Id, class: Stoich)

   Assigns field value.


.. describe:: setDsolve (type: Id, class: Stoich)

   Assigns field value.


.. describe:: setKsolve (type: Id, class: Stoich)

   Assigns field value.


.. describe:: setName (type: string, class: Stoich)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Stoich)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Stoich)

   Assigns field value.


.. describe:: setReacSystemPath (type: string, class: Stoich)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Stoich)

   Assigns field value.


.. describe:: setTick (type: int, class: Stoich)

   Assigns field value.


.. describe:: unzombify (type: void, class: Stoich)

   Restore all zombies to their native state



Attributes inherited from Neutral:
----------------------------------

