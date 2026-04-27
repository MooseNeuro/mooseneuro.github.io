:orphan:

Function
========



General purpose function calculator using real numbers.

It can parse mathematical expression defining a function and evaluate it and/or
its derivative for specified variable values.  You can assign expressions of
the form::

    f(t, x, y, var, p, q, Ca, CaMKII)

NOTE: `t` represents time. You CAN NOT use to for any other purpose.

The constants must be defined before setting the expression using
the lookup field `c`. Once set, their values cannot be changed.


The interpretation of variable names in expression:
---------------------------------------------------


- Names of the form "x{n}", where n is a non-negative integer,
  are treated as input variables that are pushed from fields in
  other objects via incoming messages to the `input` dest of the
  corresponding `x` field.

- Names of the form "y{n}" are treated as input variables, that
  are requested via the outgoing `requestOut` message from other
  objects' value fields.

- Any name that has already been assigned as a constant (e.g.,
  inserted with `Function.c['name'] = value` or predefined
  mathematical constants like `pi`, `e`) is treated as constant.

- All other names are assumed to be variables and assigned successive
  entries in the `x` field.

Input (independent) variables come from other elements, either pushed
into entries in element field "x" through "input" dest field, or pulled via
"requestOut" message to "get{Field}" dest field on the source element and
collected in the "y" variables.

In pull-mode, the y-indices correspond to the order of connecting the
messages. This is used when the input variable is not available as a source
field, but is a value field. For any value field `{field}`, the object has
a corresponding dest field `get{Field}`. The "requestOut" src field is
connected to this.

This class handles only real numbers (C-double). Predefined constants
are: pi=3.141592..., e=2.718281...


Example::

   The following python example illustrates a Function which has a user-defined
   constant 'A', two pushed variables, 'Vm' and 'n', which come from a
   compartment object, and one pulled variable 'y0', which is read from
   the 'diameter' field of the compartment. It also uses the global mathematical
   constant 'pi'.


comp = moose.Compartment('comp')
comp.diameter = 2.0
pool = moose.Pool('pool')
func = moose.Function('f')

# A made-up example to illustrate push, pull vars and constants
func.c['A'] = 6.022e23   # constant
func.expr = 'Vm + y0 * n * pi / A'

i_v = func.xindex['Vm']
i_n = func.xindex['n']

# There should be two x vars, one for `Vm`, the other for `n`
assert func.x.num == 2

moose.connect(comp, 'VmOut', func.x[i_v], 'input')
moose.conncet(pool, 'nOut', func.x[i_n], 'input')
moose.connect(func, 'requestOut', comp, 'getDiameter')




Author:   Subhasis Ray/Dilawar Singh


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: allowUnknownVariable (type: bool, class: Function)

   DEPRECATED: When *false*, expression can only have ci, xi, yi and t.When
   set to *true*, expression can have arbitrary names.Defaults to *true*.



.. describe:: children (type: vector<Id>, class: Function)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Function)

   Class Name of object


.. describe:: derivative (type: double, class: Function)

   Derivative of the function at given variable values. This is calulated
   using 5-point stencil <http://en.wikipedia.org/wiki/Five-point_stencil>
   at current value of independent variable. Note that unlike hand-calculated
   derivatives, numerical derivatives are not exact.


.. describe:: destFields (type: vector<string>, class: Function)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: doEvalAtReinit (type: bool, class: Function)

   Deprecated: This does not have any use.When *false*, disables function
   evaluation at reinit, and just emits a value of zero to any message targets.
   When *true*, does a function evaluation at reinit and sends the computed
   value to any message targets. Defaults to *false*.


.. describe:: dt (type: double, class: Function)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: evalResult (type: double, class: Function)

   Result of the function evaluation with current variable values. This
   can be used for evaluating the function without running a simulation
   step.


.. describe:: expr (type: string, class: Function)

   Mathematical expression defining the function. The underlying parser
   is exprtk (https://archive.codeplex.com/?p=exprtk) . In addition to the
   available functions and operators from exprtk, a few functions are added.
   Major Functions Name args explanation sin 1 sine function cos 1 cosine
   function tan 1 tangens function asin 1 arcus sine function acos 1 arcus
   cosine function atan 1 arcus tangens function sinh 1 hyperbolic sine
   function cosh 1 hyperbolic cosine tanh 1 hyperbolic tangens function
   asinh 1 hyperbolic arcus sine function acosh 1 hyperbolic arcus tangens
   function atanh 1 hyperbolic arcur tangens function log2 1 logarithm to
   the base 2 log10 1 logarithm to the base 10 log 1 logarithm to the base
   10 ln 1 logarithm to base e (2.71828...) exp 1 e raised to the power
   of x sqrt 1 square root of a value sign 1 sign function -1 if x<0; 1
   if x>0 abs 1 absolute value min var. min of all arguments max var. max
   of all arguments sum var. sum of all arguments avg var. mean value of
   all arguments rnd 0 rand(), random float between 0 and 1, honors global
   moose.seed. rand 1 rand(seed), random float between 0 and 1, if seed
   = -1, then a 'random' seed is used. rand2 3 rand(a, b, seed), random
   float between a and b, if seed = -1, a 'random' seed is created using
   either by random_device or by reading system clock Operators Op meaning
   priority = assignment -1 &&,and logical and 1 ||,or logical or 2 <= less
   or equal 4 >= greater or equal 4 !=,not not equal 4 == equal 4 > greater
   than 4 < less than 4 + addition 5 - subtraction 5 * multiplication 6
   / division 6 ^ raise x to the power of y 7 % floating point modulo 7
   ?: if then else operator C++ style syntax For more information see https://archive.codeplex.com/?p=exprtk



.. describe:: fieldIndex (type: unsigned int, class: Function)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Function)

   Object id of self, converted to an unsigned int.


.. describe:: independent (type: string, class: Function)

   Index of independent variable. Differentiation is done based on this.
   Defaults to the first assigned variable.


.. describe:: index (type: unsigned int, class: Function)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: me (type: ObjId, class: Function)

   ObjId for current object


.. describe:: mode (type: unsigned int, class: Function)

   Mode of operation (default 1): 1: only the function value will be sent
   out. 2: only the derivative with respect to the independent variable
   will be sent out. 3: only rate (time derivative) will be sent out. anything
   else: all three, value, derivative and rate will be sent out.


.. describe:: msgIn (type: vector<ObjId>, class: Function)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Function)

   Messages going out from this Element


.. describe:: name (type: string, class: Function)

   Name of object


.. describe:: numData (type: unsigned int, class: Function)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Function)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numVars (type: unsigned int, class: Function)

   Number of variables used by Function. It is determined by parsing when
   `expr` is set


.. describe:: parent (type: ObjId, class: Function)

   Parent ObjId for current object


.. describe:: path (type: string, class: Function)

   text path for object


.. describe:: rate (type: double, class: Function)

   Derivative of the function at given variable values. This is computed
   as the difference of the current and previous value of the function divided
   by the time step.


.. describe:: sourceFields (type: vector<string>, class: Function)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: Function)

   Access function for entire object


.. describe:: tick (type: int, class: Function)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: useTrigger (type: bool, class: Function)

   When *false*, disables event-driven calculation and turns on Process-driven
   calculations. When *true*, enables event-driven calculation and turns
   off Process-driven calculations. Defaults to *false*.


.. describe:: value (type: double, class: Function)

   Value calculated in the last evaluation of the function. This gets updated
   in each simulation step.


.. describe:: valueFields (type: vector<string>, class: Function)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: c (type: string,double, class: Function)

   Constants used in the function. These must be assigned before specifying
   the function expression.


.. describe:: isA (type: string,bool, class: Function)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Function)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Function)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Function)

   Ids of Elements connected this Element on specified field.


.. describe:: xindex (type: string,unsigned int, class: Function)

   Returns the index of a given variable which can be used with field `x`.
   Note that we have a mechanism to map string (variable name) to integer
   (variable index).



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Function)

   Message to child Elements


.. describe:: derivativeOut (type: double, class: Function)

   Value of derivative of the function for the current variable values


.. describe:: rateOut (type: double, class: Function)

   Value of time-derivative of the function for the current variable values



.. describe:: requestOut (type: vector<double>*, class: Function)

   Sends request for input variable from a field on target object


.. describe:: valueOut (type: double, class: Function)

   Evaluated value of the function for the current variable values.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getAllowUnknownVariable (type: vector<bool>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getC (type: double, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getChildren (type: vector<vector<Id>>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDerivative (type: vector<double>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDoEvalAtReinit (type: vector<bool>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getEvalResult (type: vector<double>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getExpr (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndependent (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMode (type: vector<unsigned int>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumVars (type: vector<unsigned int>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumX (type: vector<unsigned int>*, class: Function)

   Requests number of field entries in field array.The requesting Element
   must provide a handler for the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRate (type: vector<double>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getUseTrigger (type: vector<bool>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValue (type: vector<double>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getXindex (type: unsigned int, class: Function)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Function)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Function)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Function)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Function)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Function)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Function)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Function)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: Function)

   Handles process call, updates internal time stamp.


.. describe:: reinit (type: const ProcInfo*, class: Function)

   Handles reinit call.


.. describe:: setAllowUnknownVariable (type: bool, class: Function)

   Assigns field value.


.. describe:: setC (type: string,double, class: Function)

   Assigns field value.


.. describe:: setDoEvalAtReinit (type: bool, class: Function)

   Assigns field value.


.. describe:: setExpr (type: string, class: Function)

   Assigns field value.


.. describe:: setIndependent (type: string, class: Function)

   Assigns field value.


.. describe:: setMode (type: unsigned int, class: Function)

   Assigns field value.


.. describe:: setName (type: string, class: Function)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Function)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Function)

   Assigns field value.


.. describe:: setNumX (type: unsigned int, class: Function)

   Assigns number of field entries in field array.


.. describe:: setSolver (type: ObjId, class: Function)

   Assigns solver to this Function.


.. describe:: setThis (type: 7Neutral, class: Function)

   Assigns field value.


.. describe:: setTick (type: int, class: Function)

   Assigns field value.


.. describe:: setUseTrigger (type: bool, class: Function)

   Assigns field value.


.. describe:: setXindex (type: string,unsigned int, class: Function)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: Function)

   This is a shared message to receive Process messages from the scheduler
   objects.The first entry in the shared msg is a MsgDest for the Process
   operation. It has a single argument, ProcInfo, which holds lots of information
   about current time, thread, dt and so on. The second entry is a MsgDest
   for the Reinit operation. It also uses ProcInfo.



Attributes inherited from Neutral:
----------------------------------


Field Attributes:
-----------------

.. describe:: x (type: 8Variable, class: Function)

   Input variables (indexed) to the function. The values can be passed via
   messages to the `input` field on each entry.



Attributes inherited from Neutral:
----------------------------------

