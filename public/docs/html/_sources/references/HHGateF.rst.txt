:orphan:

HHGateF
=======


Gating component of Hodkgin-Huxley type channels, equivalent to the m and h terms on the Na squid channel and the n term on K. This takes the voltage and state variable from the channel, computes the new value of the state variable and a scaling, depending on gate power, for the conductance. As opposed to HHGate, which uses lookup tables for speed, this evaluates explicit expressions for accuracy. This is a single variable gate, either voltage or concentration. So the expression also allows only one indpendent variable, which is assumed `v`. See the documentation of ``Function`` class for details on the praser.

Author:   Subhasis Ray, 2025, CHINTA


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: alphaExpr (type: string, class: HHGateF)

   Expression for voltage-dependent rates, forward rate `alpha`. This requires
   the expression for `beta` to be defined as well. The syntax follows exprtk,
   with variable name `v` for input variable (which can be voltage or concentration
   depending on message connection in case of HHGateF which takes only one
   input). For HHGateF2D which depends on two inputs, the variable names
   are `v` for voltage, and `c` for concentration. And additional set of
   variable names are available for cases that require intermediate calculations.
   These are: `alpha` for forward rate, `beta` for backward rate, `tau`
   for time constant, and `inf` for steady state open fraction as per Hodgkin
   and Huxley's formulation. This is useful for conditional values for these
   parameters: Example: ~(alpha:=0.3 * exp(-80 * (v -(-46e-3))) + 3.5, alpha
   < 3.8? 3.8: alpha) first computes `alpha` by the first formula, and returns
   it only if the computed value is >= 3.8, otherwise it returns 3.8.


.. describe:: betaExpr (type: string, class: HHGateF)

   Expression for voltage-dependent rates, backward rate `beta`. This requires
   the expression for `alpha` to be defined as well. See documentation on
   `alpha` for details on predefined variable names.


.. describe:: children (type: vector<Id>, class: HHGateF)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: HHGateF)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: HHGateF)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: HHGateF)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: HHGateF)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: HHGateF)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HHGateF)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: infExpr (type: string, class: HHGateF)

   Expression for voltage-dependent rates, steady state open fraction `inf`.
   This requires the expression for `tau` to be defined as well.


.. describe:: me (type: ObjId, class: HHGateF)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: HHGateF)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HHGateF)

   Messages going out from this Element


.. describe:: name (type: string, class: HHGateF)

   Name of object


.. describe:: numData (type: unsigned int, class: HHGateF)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HHGateF)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HHGateF)

   Parent ObjId for current object


.. describe:: path (type: string, class: HHGateF)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: HHGateF)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: tauExpr (type: string, class: HHGateF)

   Expression for voltage-dependent rates, time constant `tau`. This requires
   the expression for `inf` to be defined as well. See documentation for
   `alpha` for details on predefined variable names. Example of a complex
   conditional expression (based on Maex and De Schutter 1998): ~(alpha
   := 750 * exp(81 * (v - (-39e-3))), beta := 750 * exp(-66 * (v - (-39e-3))),
   tau := 1/(alpha + beta), tau < 1e-5? 1e-5) This computes alpha and beta
   and then from those, tau. However if the calculated value of tau falls
   under 1e-5, it makes the value 1e-5.


.. describe:: this (type: 7Neutral, class: HHGateF)

   Access function for entire object


.. describe:: tick (type: int, class: HHGateF)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: HHGateF)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: A (type: double,double, class: HHGateF)

   lookupA: Compute the A gate value from a double. This is done by evaluating
   the expressions for alpha/beta or tau/inf.


.. describe:: B (type: double,double, class: HHGateF)

   lookupB: Look up the B gate value from a double.This is done by evaluating
   the expressions for alpha/beta or tau/inf.


.. describe:: isA (type: string,bool, class: HHGateF)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: HHGateF)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HHGateF)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HHGateF)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: HHGateF)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getA (type: double, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getAlphaExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getB (type: double, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getBetaExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInfExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTauExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HHGateF)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HHGateF)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HHGateF)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HHGateF)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HHGateF)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HHGateF)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HHGateF)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HHGateF)

   Message from Parent Element(s)


.. describe:: setAlphaExpr (type: string, class: HHGateF)

   Assigns field value.


.. describe:: setBetaExpr (type: string, class: HHGateF)

   Assigns field value.


.. describe:: setInfExpr (type: string, class: HHGateF)

   Assigns field value.


.. describe:: setName (type: string, class: HHGateF)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HHGateF)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HHGateF)

   Assigns field value.


.. describe:: setTauExpr (type: string, class: HHGateF)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: HHGateF)

   Assigns field value.


.. describe:: setTick (type: int, class: HHGateF)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------

