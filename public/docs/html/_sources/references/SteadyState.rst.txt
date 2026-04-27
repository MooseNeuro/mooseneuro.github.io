:orphan:

SteadyState
===========


SteadyState: works out a steady-state value for a reaction system. This class uses the GSL multidimensional root finder algorithms to find the fixed points closest to the current molecular concentrations. When it finds the fixed points, it figures out eigenvalues of the solution, as a way to help classify the fixed points. Note that the method finds unstable as well as stable fixed points.
The SteadyState class also provides a utility function *randomInit()*    to randomly initialize the concentrations, within the constraints of stoichiometry. This is useful if you are trying to find the major fixed points of the system. Note that this is probabilistic. If a fixed point is in a very narrow range of state space the probability of finding it is small and you will have to run many iterations with different initial conditions to find it.
The numerical calculations used by the SteadyState solver are prone to failing on individual calculations. All is not lost, because the system reports the solutionStatus. It is recommended that you test this field after every calculation, so you can simply ignore cases where it failed and try again with different starting conditions.
Another rule of thumb is that the SteadyState object is more likely to succeed in finding solutions from a new starting point if you numerically integrate the chemical system for a short time (typically under 1 second) before asking it to find the fixed point.

Author:   Upinder S. Bhalla, 2009, updated 2014, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: badStoichiometry (type: bool, class: SteadyState)

   Bool: True if there is a problem with the stoichiometry


.. describe:: children (type: vector<Id>, class: SteadyState)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: SteadyState)

   Class Name of object


.. describe:: convergenceCriterion (type: double, class: SteadyState)

   Fractional accuracy required to accept convergence


.. describe:: destFields (type: vector<string>, class: SteadyState)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: SteadyState)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: SteadyState)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: SteadyState)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: SteadyState)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: isInitialized (type: bool, class: SteadyState)

   True if the model has been initialized successfully


.. describe:: maxIter (type: unsigned int, class: SteadyState)

   Max permissible number of iterations to try before giving up


.. describe:: me (type: ObjId, class: SteadyState)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: SteadyState)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: SteadyState)

   Messages going out from this Element


.. describe:: nIter (type: unsigned int, class: SteadyState)

   Number of iterations done by steady state solver


.. describe:: nNegEigenvalues (type: unsigned int, class: SteadyState)

   Number of negative eigenvalues: indicates type of solution


.. describe:: nPosEigenvalues (type: unsigned int, class: SteadyState)

   Number of positive eigenvalues: indicates type of solution


.. describe:: name (type: string, class: SteadyState)

   Name of object


.. describe:: numData (type: unsigned int, class: SteadyState)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: SteadyState)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numVarPools (type: unsigned int, class: SteadyState)

   Number of variable molecules in reaction system.


.. describe:: parent (type: ObjId, class: SteadyState)

   Parent ObjId for current object


.. describe:: path (type: string, class: SteadyState)

   text path for object


.. describe:: rank (type: unsigned int, class: SteadyState)

   Number of independent molecules in reaction system


.. describe:: solutionStatus (type: unsigned int, class: SteadyState)

   0: Good; 1: Failed to find steady states; 2: Failed to find eigenvalues



.. describe:: sourceFields (type: vector<string>, class: SteadyState)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: stateType (type: unsigned int, class: SteadyState)

   0: stable; 1: unstable; 2: saddle; 3: osc?; 4: one near-zero eigenvalue;
   5: other


.. describe:: status (type: string, class: SteadyState)

   Status of solver


.. describe:: stoich (type: Id, class: SteadyState)

   Specify the Id of the stoichiometry system to use


.. describe:: this (type: 7Neutral, class: SteadyState)

   Access function for entire object


.. describe:: tick (type: int, class: SteadyState)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: SteadyState)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: eigenvalues (type: unsigned int,double, class: SteadyState)

   Eigenvalues computed for steady state


.. describe:: isA (type: string,bool, class: SteadyState)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: SteadyState)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: SteadyState)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: SteadyState)

   Ids of Elements connected this Element on specified field.


.. describe:: total (type: unsigned int,double, class: SteadyState)

   Totals table for conservation laws. The exact mapping ofthis to various
   sums of molecules is given by the conservation matrix, and is currently
   a bit opaque.The value of 'total' is set to initial conditions whenthe
   'SteadyState::settle' function is called.Assigning values to the total
   is a special operation:it rescales the concentrations of all the affectedmolecules
   so that they are at the specified total.This happens the next time 'settle'
   is called.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: SteadyState)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getBadStoichiometry (type: vector<bool>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getConvergenceCriterion (type: vector<double>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEigenvalues (type: double, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsInitialized (type: vector<bool>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMaxIter (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNIter (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNNegEigenvalues (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNPosEigenvalues (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumVarPools (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRank (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSolutionStatus (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStateType (type: vector<unsigned int>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStatus (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getStoich (type: vector<Id>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTotal (type: double, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: SteadyState)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: SteadyState)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: SteadyState)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: SteadyState)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: SteadyState)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: SteadyState)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: SteadyState)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: SteadyState)

   Message from Parent Element(s)


.. describe:: randomInit (type: void, class: SteadyState)

   Generate random initial conditions consistent with the massconservation
   rules. Typically invoked in order to scanstates


.. describe:: resettle (type: void, class: SteadyState)

   Finds the nearest steady state to the current initial conditions. This
   function rebuilds the entire calculation


.. describe:: setConvergenceCriterion (type: double, class: SteadyState)

   Assigns field value.


.. describe:: setMaxIter (type: unsigned int, class: SteadyState)

   Assigns field value.


.. describe:: setName (type: string, class: SteadyState)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: SteadyState)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: SteadyState)

   Assigns field value.


.. describe:: setStoich (type: Id, class: SteadyState)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: SteadyState)

   Assigns field value.


.. describe:: setTick (type: int, class: SteadyState)

   Assigns field value.


.. describe:: setTotal (type: unsigned int,double, class: SteadyState)

   Assigns field value.


.. describe:: settle (type: void, class: SteadyState)

   Finds the nearest steady state to the current initial conditions. This
   function rebuilds the entire calculation only if the object has not yet
   been initialized.


.. describe:: setupMatrix (type: void, class: SteadyState)

   This function initializes and rebuilds the matrices used in the calculation.



.. describe:: showMatrices (type: void, class: SteadyState)

   Utility function to show the matrices derived for the calculations on
   the reaction system. Shows the Nr, gamma, and total matrices



Attributes inherited from Neutral:
----------------------------------

