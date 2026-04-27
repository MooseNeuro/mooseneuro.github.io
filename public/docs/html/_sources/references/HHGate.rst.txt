:orphan:

HHGate
======


HHGate: Gate for Hodkgin-Huxley type channels, equivalent to the m and h terms on the Na squid channel and the n term on K. This takes the voltage and state variable from the channel, computes the new value of the state variable and a scaling, depending on gate power, for the conductance.
This class uses a pair of lookup tables to quickly find the gating terms for a given voltage.
To populate the tables one can directly assign precomputed arrays to `tableA` and `tableB` fields, or use specify string equations for `alphaExpr/betaExpr` or `tauExpr/infExpr`. This requires the fields the range of input voltages be specified through the fields `min`, `max` and `divs`.
When the gate equations can be expressed in the standard form `y(x) = (A + B * x) / (C + exp((x + D) / F))` one can  set `alphaParms` or call `setupAlpha()` or `setupTau()` functions with the proper arguments to setup the tables.

Author:   Upinder S. Bhalla, 2011, NCBS. Updates by Subhasis Ray, 2025, CHINTA



Attributes:
-----------



Value Attributes:
-----------------

.. describe:: alpha (type: vector<double>, class: HHGate)

   Parameters for voltage-dependent rates, alpha:Set up alpha term using
   5 parameters, as follows:y(x) = (A + B * x) / (C + exp((x + D) / F))The
   original HH equations can readily be cast into this form


.. describe:: alphaExpr (type: string, class: HHGate)

   Explicit expression for computing `alpha`. For using this, `betaExpr`
   must be set as well. SYNTAX: The expression evaluation uses exprtk syntax,
   with predefined variables `alpha`, `beta`, `tau`, `inf`, and `v`. `v`
   is the input variable, the others can be used as local variables for
   intermediate computations. Example: ~(alpha:=0.3 * exp(-80 * (v -(-46e-3)))
   + 3.5,alpha < 3.8? 3.8: alpha) first computes a local variable `alpha`
   by the first formula, and if it is < 3.8 then returns 3.8, otherwise
   returns the computed value.


.. describe:: alphaParms (type: vector<double>, class: HHGate)

   Set up both gates using 13 parameters, as follows:setupAlpha AA AB AC
   AD AF BA BB BC BD BF xdivs xmin xmaxHere AA-AF are Coefficients A to
   F of the alpha (forward) termHere BA-BF are Coefficients A to F of the
   beta (reverse) termHere xdivs is the number of entries in the table,xmin
   and xmax define the range for lookup.Outside this range the returned
   value will be the low [high]entry of the table.The equation describing
   each table is:y(x) = (A + B * x) / (C + exp((x + D) / F))The original
   HH equations can readily be cast into this form


.. describe:: beta (type: vector<double>, class: HHGate)

   Parameters for voltage-dependent rates, beta:Set up beta term using 5
   parameters, as follows:y(x) = (A + B * x) / (C + exp((x + D) / F))The
   original HH equations can readily be cast into this form


.. describe:: betaExpr (type: string, class: HHGate)

   Explicit expression for computing `beta`. For using this, `alphaExpr`
   must be set as well. See `alphaExpr` and `HHChannelF` documentation.



.. describe:: children (type: vector<Id>, class: HHGate)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: HHGate)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: HHGate)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: divs (type: unsigned int, class: HHGate)

   Divisions for lookup. Zero means to use linear interpolation


.. describe:: dt (type: double, class: HHGate)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: HHGate)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: HHGate)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: HHGate)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: inf (type: vector<double>, class: HHGate)

   Parameters for voltage-dependent rates, inf:Set up inf curve using 5
   parameters, as follows:y(x) = (A + B * x) / (C + exp((x + D) / F))The
   original HH equations can readily be cast into this form


.. describe:: infExpr (type: string, class: HHGate)

   Explicit expression for computing `inf`. When using this, `tauExpr` must
   be set as well. See `alphaExpr` and `HHChannelF` documentation.


.. describe:: mInfinity (type: vector<double>, class: HHGate)

   Deprecated. Use `inf` instead.


.. describe:: max (type: double, class: HHGate)

   Minimum range for lookup


.. describe:: me (type: ObjId, class: HHGate)

   ObjId for current object


.. describe:: min (type: double, class: HHGate)

   Minimum range for lookup


.. describe:: msgIn (type: vector<ObjId>, class: HHGate)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: HHGate)

   Messages going out from this Element


.. describe:: name (type: string, class: HHGate)

   Name of object


.. describe:: numData (type: unsigned int, class: HHGate)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: HHGate)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: parent (type: ObjId, class: HHGate)

   Parent ObjId for current object


.. describe:: path (type: string, class: HHGate)

   text path for object


.. describe:: sourceFields (type: vector<string>, class: HHGate)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: tableA (type: vector<double>, class: HHGate)

   Table of A entries


.. describe:: tableB (type: vector<double>, class: HHGate)

   Table of alpha + beta entries


.. describe:: tau (type: vector<double>, class: HHGate)

   Parameters for voltage-dependent rates, tau:Set up tau curve using 5
   parameters, as follows:y(x) = (A + B * x) / (C + exp((x + D) / F))


.. describe:: tauExpr (type: string, class: HHGate)

   Explicit expression for computing `tau`. For using this, `infExpr` must
   be set as well. See `alphaExpr` and `HHChannelF` documentation.


.. describe:: this (type: 7Neutral, class: HHGate)

   Access function for entire object


.. describe:: tick (type: int, class: HHGate)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: useInterpolation (type: bool, class: HHGate)

   Flag: use linear interpolation if true, else direct lookup


.. describe:: valueFields (type: vector<string>, class: HHGate)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: A (type: double,double, class: HHGate)

   lookupA: Look up the A gate value from a double. Usually doesso by direct
   scaling and offset to an integer lookup, usinga fine enough table granularity
   that there is little error.Alternatively uses linear interpolation.The
   range of the double is predefined based on knowledge ofvoltage or conc
   ranges, and the granularity is specified bythe min, max, and divs fields.



.. describe:: B (type: double,double, class: HHGate)

   lookupB: Look up the B gate value from a double.Note that this looks
   up the raw tables, which are transformedfrom the reference parameters.



.. describe:: isA (type: string,bool, class: HHGate)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: HHGate)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: HHGate)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: HHGate)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: HHGate)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: fillFromExpr (type: void, class: HHGate)

   If the gating variables are specified as string expressions (alphaExpr/betaExpr/tauExpr/infExpr),
   then fill up the tables by evaluating the expressions. This function
   is for debugging. If assigned, the expressions are evaluated to fill
   the tables at `reinit()`


.. describe:: getA (type: double, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getAlpha (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getAlphaExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getAlphaParms (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getB (type: double, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getBeta (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getBetaExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDivs (type: vector<unsigned int>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInf (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInfExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMInfinity (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMax (type: vector<double>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMin (type: vector<double>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTableA (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTableB (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTau (type: vector<vector<double>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTauExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getUseInterpolation (type: vector<bool>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: HHGate)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: HHGate)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: HHGate)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: HHGate)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: HHGate)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: HHGate)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: HHGate)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: HHGate)

   Message from Parent Element(s)


.. describe:: setAlpha (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setAlphaExpr (type: string, class: HHGate)

   Assigns field value.


.. describe:: setAlphaParms (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setBeta (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setBetaExpr (type: string, class: HHGate)

   Assigns field value.


.. describe:: setDivs (type: unsigned int, class: HHGate)

   Assigns field value.


.. describe:: setInf (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setInfExpr (type: string, class: HHGate)

   Assigns field value.


.. describe:: setMInfinity (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setMax (type: double, class: HHGate)

   Assigns field value.


.. describe:: setMin (type: double, class: HHGate)

   Assigns field value.


.. describe:: setName (type: string, class: HHGate)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: HHGate)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: HHGate)

   Assigns field value.


.. describe:: setTableA (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setTableB (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setTau (type: vector<double>, class: HHGate)

   Assigns field value.


.. describe:: setTauExpr (type: string, class: HHGate)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: HHGate)

   Assigns field value.


.. describe:: setTick (type: int, class: HHGate)

   Assigns field value.


.. describe:: setUseInterpolation (type: bool, class: HHGate)

   Assigns field value.


.. describe:: setupAlpha (type: vector<double>, class: HHGate)

   Set up both gates using 13 parameters, as follows:setupAlpha AA AB AC
   AD AF BA BB BC BD BF xdivs xmin xmaxHere AA-AF are Coefficients A to
   F of the alpha (forward) termHere BA-BF are Coefficients A to F of the
   beta (reverse) termHere xdivs is the number of entries in the table,xmin
   and xmax define the range for lookup.Outside this range the returned
   value will be the low [high]entry of the table.The equation describing
   each table is:y(x) = (A + B * x) / (C + exp((x + D) / F))The original
   HH equations can readily be cast into this form


.. describe:: setupGate (type: vector<double>, class: HHGate)

   Sets up one gate at a time using the alpha/beta form.Has 9 parameters,
   as follows:setupGate A B C D F xdivs xmin xmax is_betaThis sets up the
   gate using the equation:y(x) = (A + B * x) / (C + exp((x + D) / F))Deprecated.



.. describe:: setupTau (type: vector<double>, class: HHGate)

   Identical to setupAlpha, except that the forms specified bythe 13 parameters
   are for the tau and m-infinity curves ratherthan the alpha and beta terms.
   So the parameters are:setupTau TA TB TC TD TF MA MB MC MD MF xdivs xmin
   xmaxAs before, the equation describing each curve is:y(x) = (A + B *
   x) / (C + exp((x + D) / F))


.. describe:: tweakAlpha (type: void, class: HHGate)

   Dummy function for backward compatibility. It used to convertthe tables
   from alpha, beta values to alpha, alpha+betabecause the internal calculations
   used these forms. Notneeded now, deprecated.


.. describe:: tweakTau (type: void, class: HHGate)

   Dummy function for backward compatibility. It used to convertthe tables
   from tau, inf values to alpha, alpha+betabecause the internal calculations
   used these forms. Notneeded now, deprecated.



Attributes inherited from Neutral:
----------------------------------

