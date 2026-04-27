:orphan:

Neuron
======


Neuron - Manager for neurons. Handles high-level specification of distribution of spines, channels and passive properties. Also manages spine resizing through a Spine FieldElement.

Author:   C H Chaitanya, Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: CM (type: double, class: Neuron)

   Membrane Capacitance, in F/m^2. Default value is 0.01


.. describe:: Em (type: double, class: Neuron)

   Resting membrane potential of compartments, in Volts. Default value is
   -0.065.


.. describe:: RA (type: double, class: Neuron)

   Axial resistivity of cytoplasm, in ohm.m. Default value is 1.0.


.. describe:: RM (type: double, class: Neuron)

   Membrane resistivity, in ohm.m^2. Default value is 1.0.


.. describe:: channelDistribution (type: vector<string>, class: Neuron)

   Specification for distribution of channels, CaConcens and any other model
   components that are defined as prototypes and have to be placed on the
   electrical compartments. Arguments: proto path field expr [field expr]...
   Each entry is terminated with an empty string. The prototype is any object
   created in */library*, If a channel matching the prototype name already
   exists, then all subsequent operations are applied to the extant channel
   and a new one is not created. The paired arguments are as follows: The
   *field* argument specifies the name of the parameter that is to be assigned
   by the expression. The *expression* argument is a mathematical expression
   in the muparser framework, which permits most operations including trig
   and transcendental ones. Of course it also handles simple numerical values
   like 1.0, 1e-10 and so on. Available arguments for muParser are: p, g,
   L, len, dia, maxP, maxG, maxL     p: path distance from soma, measured along
   dendrite, in metres.  g: geometrical distance from soma, in metres.   L:
   electrotonic distance (# of lambdas) from soma, along dend. No units.
   len: length of compartment, in metres.  dia: for diameter of compartment,
   in metres.    maxP: Maximum value of *p* for this neuron.     maxG: Maximum
   value of *g* for this neuron.     maxL: Maximum value of *L* for this neuron.
   The expression for the first field must evaluate to > 0 for the channel
   to be installed. For example, for channels, if Field == Gbar, and func(
   r, L, len, dia) < 0, then the channel is not installed. This feature
   is typically used with the sign() or Heaviside H() function to limit
   range: for example: H(1 - L) will only put channels closer than one length
   constant from the soma, and zero elsewhere. Available fields are: Channels:
   Gbar (install), Ek CaConcen: shellDia (install), shellFrac (install),
   tau, min Unless otherwise noted, all fields are scaled appropriately
   by the dimensions of their compartment. Thus the channel maximal conductance
   Gbar is automatically scaled by the area of the compartment, and the
   user does not need to insert this scaling into the calculations. All
   parameters are expressed in SI units. Conductance, for example, is Siemens/sq
   metre. Some example function forms might be for a channel Gbar: p < 10e-6
   ? 400 : 0.0       equivalently, H(10e-6 - p) * 400        equivalently, ( sign(10e-6
   - p) + 1) * 200 Each of these forms instruct the function to set channel
   Gbar to 400 S/m^2 only within 10 microns path distance of soma L < 1.0
   ? 100 * exp( -L ) : 0.0 ->Set channel Gbar to an exponentially falling
   function of electrotonic distance from soma, provided L is under 1.0
   lambdas.


.. describe:: children (type: vector<Id>, class: Neuron)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Neuron)

   Class Name of object


.. describe:: compartmentLengthInLambdas (type: double, class: Neuron)

   Units: meters (SI). Electrotonic length to use for the largest compartment
   in the model. Used to define subdivision of branches into compartments.
   For example, if we set *compartmentLengthInLambdas* to 0.1, and *lambda*
   (electrotonic length) is 250 microns, then it sets the compartment length
   to 25 microns. Thus a dendritic branch of 500 microns is subdivided into
   20 commpartments. If the branch is shorter than *compartmentLengthInLambdas*,
   then it is not subdivided. If *compartmentLengthInLambdas* is set to
   0 then the original compartmental structure of the model is preserved.
   Note that this routine does NOT merge branches, even if *compartmentLengthInLambdas*
   is bigger than the branch. While all this subdivision is being done,
   the Neuron class preserves as detailed a geometry as it can, so it can
   rebuild the more detailed version if needed. Default value of *compartmentLengthInLambdas*
   is 0.


.. describe:: compartments (type: vector<ObjId>, class: Neuron)

   Vector of ObjIds of electrical compartments. Order matches order of segments,
   and also matches the order of the electrotonic and geometricalDistanceFromSoma
   vectors.


.. describe:: destFields (type: vector<string>, class: Neuron)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Neuron)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: electrotonicDistanceFromSoma (type: vector<double>, class: Neuron)

   geometrical distance of each segment from soma, as measured along the
   dendrite.


.. describe:: fieldIndex (type: unsigned int, class: Neuron)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: geometricalDistanceFromSoma (type: vector<double>, class: Neuron)

   geometrical distance of each segment from soma.


.. describe:: idValue (type: unsigned int, class: Neuron)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Neuron)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Neuron)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Neuron)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Neuron)

   Messages going out from this Element


.. describe:: name (type: string, class: Neuron)

   Name of object


.. describe:: numBranches (type: unsigned int, class: Neuron)

   Number of branches in dendrites.


.. describe:: numCompartments (type: unsigned int, class: Neuron)

   Number of electrical compartments in model.


.. describe:: numData (type: unsigned int, class: Neuron)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Neuron)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numSpines (type: unsigned int, class: Neuron)

   Number of dendritic spines in model.


.. describe:: parent (type: ObjId, class: Neuron)

   Parent ObjId for current object


.. describe:: passiveDistribution (type: vector<string>, class: Neuron)

   Specification for distribution of passive properties of cell. Arguments:
   . path field expr [field expr]... Note that the arguments list starts
   with a period. Each entry is terminated with an empty string. The paired
   arguments are as follows: The *field* argument specifies the name of
   the parameter that is to be assigned by the expression. The *expression*
   argument is a mathematical expression in the muparser framework, which
   permits most operations including trig and transcendental ones. Of course
   it also handles simple numerical values like 1.0, 1e-10 and so on. Available
   arguments for muParser are: p, g, L, len, dia, maxP, maxG, maxL   p: path
   distance from soma, measured along dendrite, in metres.   g: geometrical
   distance from soma, in metres.    L: electrotonic distance (# of lambdas)
   from soma, along dend. No units.  len: length of compartment, in metres.
   dia: for diameter of compartment, in metres.    maxP: Maximum value of
   *p* for this neuron.  maxG: Maximum value of *g* for this neuron.     maxL:
   Maximum value of *L* for this neuron. Available fields are: RM, RA, CM,
   Rm, Ra, Cm, Em, initVm The first three fields are scaled appropriately
   by the dimensions of their compartment. Thus the membrane resistivity
   RM (ohms.m^2) is automatically scaled by the area of the compartment,
   and the user does not need to insert this scaling into the calculations
   to compute Rm.Using the Rm field lets the user directly assign the membrane
   resistance (in ohms), presumably using len and dia. Similarly, RA (ohms.m)
   and CM (Farads/m^2) are specific units and the actual values for each
   compartment are assigned by scaling by length and diameter. Ra (ohms)
   and Cm (Farads) require explicit evaluation of the expression. All parameters
   are expressed in SI units. Conductance, for example, is Siemens/sq metre.
   Note that time these calculations do NOT currently include spines


.. describe:: path (type: string, class: Neuron)

   text path for object


.. describe:: pathDistanceFromSoma (type: vector<double>, class: Neuron)

   geometrical path distance of each segment from soma, measured by threading
   along the dendrite.


.. describe:: phi (type: double, class: Neuron)

   Angle to rotate cell geometry, around elevation of neuron. Think Latitude.
   Units are radians. Default value is zero, which means no rotation.


.. describe:: sourceFields (type: vector<string>, class: Neuron)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: sourceFile (type: string, class: Neuron)

   Name of source file from which to load a model. Accepts swc and dotp
   formats at present. Both these formats require that the appropriate channel
   definitions should have been loaded into /library.


.. describe:: spineDistribution (type: vector<string>, class: Neuron)

   Specification for distribution of spines on dendrite. Arguments: proto
   path spacing expr [field expr]... Each entry is terminated with an empty
   string. The *prototype* is any spine object created in */library*, The
   *path* is the wildcard path of compartments on which to place the spine.
   The *spacing* is the spacing of spines, in metres. The *expression* argument
   is a mathematical expression in the muparser framework, which permits
   most operations including trig and transcendental ones. Of course it
   also handles simple numerical values like 1.0, 1e-10 and so on. The paired
   arguments are as follows: The *field* argument specifies the name of
   the parameter that is to be assigned by the expression. The *expression*
   argument is a mathematical expression as above. Available arguments for
   muParser are: p, g, L, len, dia, maxP, maxG, maxL     p: path distance from
   soma, measured along dendrite, in metres.     g: geometrical distance from
   soma, in metres.  L: electrotonic distance (# of lambdas) from soma,
   along dend. No units.     len: length of compartment, in metres.  dia: for
   diameter of compartment, in metres.   maxP: Maximum value of *p* for this
   neuron.   maxG: Maximum value of *g* for this neuron.     maxL: Maximum value
   of *L* for this neuron. The expression for the *spacing* field must evaluate
   to > 0 for the spine to be installed. For example, if the expresssion
   is        H(1 - L) then the systemwill only put spines closer than one length
   constant from the soma, and zero elsewhere. Available spine parameters
   are: spacing, minSpacing, size, sizeDistrib angle, angleDistrib minSpacing
   sets the granularity of sampling (typically about 0.1*spacing) for the
   usual case where spines are spaced randomly. If minSpacing < 0 then the
   spines are spaced equally at 'spacing', unless the dendritic segment
   length is smaller than 'spacing'. In that case it falls back to the regular
   random placement method.


.. describe:: theta (type: double, class: Neuron)

   Angle to rotate cell geometry, around long axis of neuron. Think Longitude.
   Units are radians. Default value is zero, which means no rotation.


.. describe:: this (type: 7Neutral, class: Neuron)

   Access function for entire object


.. describe:: tick (type: int, class: Neuron)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Neuron)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: compartmentsFromExpression (type: string,vector<ObjId>, class: Neuron)

   Vector of ObjIds of electrical compartments that match the 'path expression'
   pair in the argument string.


.. describe:: isA (type: string,bool, class: Neuron)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Neuron)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Neuron)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Neuron)

   Ids of Elements connected this Element on specified field.


.. describe:: parentCompartmentOfSpine (type: ObjId,ObjId, class: Neuron)

   Returns parent compartment of specified spine compartment.Both the spine
   head or its shaft will return the same parent.


.. describe:: spineFromCompartment (type: ObjId,ObjId, class: Neuron)

   Returns ObjIds of spine entries (FieldElements on this Neuron, used for
   scaling) that map to the the specified electrical compartment. If a bad
   compartment Id is given, returns the root ObjId.


.. describe:: spinesFromExpression (type: string,vector<ObjId>, class: Neuron)

   Vector of ObjIds of compartments comprising spines/heads that match the
   'path expression' pair in the argument string.


.. describe:: spinesOnCompartment (type: ObjId,vector<ObjId>, class: Neuron)

   Vector of ObjIds of spines shafts/heads sitting on the specified electrical
   compartment. If each spine has a shaft and a head,and there are 10 spines
   on the compartment, there will be 20 entries in the returned vector,
   ordered shaft0, head0, shaft1, head1, ...


.. describe:: valuesFromExpression (type: string,vector<double>, class: Neuron)

   Vector of values computed for each electrical compartment that matches
   the 'path expression' pair in the argument string.This has 13 times the
   number of entries as # of compartments.For each compartment the entries
   are: val, p, g, L, len, dia, maxP, maxG, maxL, x, y, z, 0



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Neuron)

   Message to child Elements



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: buildSegmentTree (type: void, class: Neuron)

   Build the reference segment tree structure using the child compartments
   of the current Neuron. Fills in all the coords and length constant information
   into the segments, for later use when we build reduced compartment trees
   and channel distributions. Should only be called once, since subsequent
   use on a reduced model will lose the original full cell geometry.


.. describe:: getCM (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChannelDistribution (type: vector<vector<string>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompartmentLengthInLambdas (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompartments (type: vector<vector<ObjId>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompartmentsFromExpression (type: vector<ObjId>, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getElectrotonicDistanceFromSoma (type: vector<vector<double>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEm (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getGeometricalDistanceFromSoma (type: vector<vector<double>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumBranches (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumCompartments (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumSpine (type: vector<unsigned int>*, class: Neuron)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getNumSpines (type: vector<unsigned int>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParentCompartmentOfSpine (type: ObjId, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPassiveDistribution (type: vector<vector<string>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPathDistanceFromSoma (type: vector<vector<double>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPhi (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRA (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRM (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFile (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpineDistribution (type: vector<vector<string>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpineFromCompartment (type: ObjId, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpinesFromExpression (type: vector<ObjId>, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSpinesOnCompartment (type: vector<ObjId>, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTheta (type: vector<double>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValuesFromExpression (type: vector<double>, class: Neuron)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Neuron)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Neuron)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Neuron)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Neuron)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Neuron)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Neuron)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Neuron)

   Message from Parent Element(s)


.. describe:: setCM (type: double, class: Neuron)

   Assigns field value.


.. describe:: setChannelDistribution (type: vector<string>, class: Neuron)

   Assigns field value.


.. describe:: setCompartmentLengthInLambdas (type: double, class: Neuron)

   Assigns field value.


.. describe:: setEm (type: double, class: Neuron)

   Assigns field value.


.. describe:: setName (type: string, class: Neuron)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Neuron)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Neuron)

   Assigns field value.


.. describe:: setNumSpine (type: unsigned int, class: Neuron)

   Assigns number of field entries in field array.


.. describe:: setPassiveDistribution (type: vector<string>, class: Neuron)

   Assigns field value.


.. describe:: setPhi (type: double, class: Neuron)

   Assigns field value.


.. describe:: setRA (type: double, class: Neuron)

   Assigns field value.


.. describe:: setRM (type: double, class: Neuron)

   Assigns field value.


.. describe:: setSourceFile (type: string, class: Neuron)

   Assigns field value.


.. describe:: setSpineAndPsdDsolve (type: ObjId,ObjId, class: Neuron)

   Assigns the Dsolves used by spine and PSD to the Neuron. This is used
   to handle the rescaling of diffusion rates when spines are resized.


.. describe:: setSpineAndPsdMesh (type: ObjId,ObjId, class: Neuron)

   Assigns the spine and psd mesh to the Neuron. This is used to build up
   a mapping from Spine entries on the Neuron to chem spines and PSDs, so
   that volume change operations from the Spine can propagate to the chem
   systems.


.. describe:: setSpineDistribution (type: vector<string>, class: Neuron)

   Assigns field value.


.. describe:: setTheta (type: double, class: Neuron)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Neuron)

   Assigns field value.


.. describe:: setTick (type: int, class: Neuron)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------



Field Attributes:
-----------------

.. describe:: spine (type: 5Spine, class: Neuron)

   Field Element for spines. Used to handle dynamic geometry changes in
   spines.



Attributes inherited from Neutral:
----------------------------------

