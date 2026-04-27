:orphan:

Adaptor
=======


This is the adaptor class. It is used in interfacing different kinds of solver with each other, especially for electrical to chemical signeur models. The Adaptor class is the core of the API for interfacing between different solution engines. It is currently in use for interfacing between chemical and electrical simulations, but could be used for other cases such as mechanical models. The API for interfacing between solution engines rests on  the following capabilities of MOOSE. 1. The object-oriented interface with classes mapped to biological and modeling concepts such as electrical and chemical compartments, ion channels and molecular pools. 2. The invisible mapping of Solvers (Objects implementing numerical engines) to the object-oriented interface. Solvers work behind the  scenes to update the objects. 3. The messaging interface which allows any visible field to be  accessed and updated from any other object.  4. The clock-based scheduler which drives operations of any subset of objects at any interval. For example, this permits the operations of field access and update to take place at quite different timescales  from the numerical engines. 5. The implementation of Adaptor classes. These perform a linear transformation:: 	(y = scale * (x + inputOffset) + outputOffset )  where y is output and x is the input. The input is the average of any number of sources (through messages) and any number of timesteps. The output goes to any number of targets, again through messages. It is worth adding that messages can transport arbitrary data structures, so it would also be possible to devise a complicated opaque message directly between solvers. The implementation of Adaptors working on visible fields does this much more transparently and gives the user  facile control over the scaling transformatoin. These adaptors are used especially in the rdesigneur framework of MOOSE, which enables multiscale reaction-diffusion and electrical signaling models. As an example of this API in operation, I consider two mappings:  1. Calcium mapped from electrical to chemical computations. 2. phosphorylation state of a channel mapped to the channel conductance. 1. Calcium mapping. Problem statement. Calcium is computed in the electrical solver as one or more pools that are fed by calcium currents, and is removed by an exponential  decay process. This calcium pool is non-diffusive in the current  electrical solver. It has to be mapped to chemical calcium pools at a different spatial discretization, which do diffuse. In terms of the list of capabilities described above, this is how the API works. 	1. The electrical model is partitioned into a number of electrical 		compartments, some of which have the 'electrical' calcium pool 		as child object in a UNIX filesystem-like tree. Thus the  		'electrical' calcium is represented as an object with  		concentration, location and so on. 	2. The Solver computes the time-course of evolution of the calcium 		concentration. Whenever any function queries the 'concentration' 		field of the calcium object, the Solver provides this value.  3. Messaging couples the 'electrical' calcium pool concentration to  	the adaptor (see point 5). This can either be a 'push' operation,  	where the solver pushes out the calcium value at its internal  	update rate, or a 'pull' operation where the adaptor requests  	the calcium concentration.  4. The clock-based scheduler keeps the electrical and chemical solvers  	ticking away, but it also can drive the operations of the adaptor.  	Thus the rate of updates to and from the adaptor can be controlled.  5. The adaptor averages its inputs. Say the electrical solver is  	going at a timestep of 50 usec, and the chemical solver at 5000   	usec. The adaptor will take 100 samples of the electrical   	concentration, and average them to compute the 'input' to the  	linear scaling. Suppose that the electrical model has calcium units  	of micromolar, but has a zero baseline. The chemical model has  	units of millimolar and a baseline of 1e-4 millimolar. This gives:  	y = 0.001x + 1e-4  	At the end of this calculation, the adaptor will typically 'push'  	its output to the chemical solver. Here we have similar situation  	to item (1), where the chemical entities are calcium pools in  	space, each with their own calcium concentration.  	The messaging (3) determines another aspect of the mapping here:   	the fan in or fan out. In this case, a single electrical   	compartment may house 10 chemical compartments. Then the output  	message from the adaptor goes to update the calcium pool   	concentration on the appropriate 10 objects representing calcium  	in each of the compartments. In much the same manner, the phosphorylation state can regulate channel properties.  1. The chemical model contains spatially distributed chemical pools  	that represent the unphosphorylated state of the channel, which in  	this example is the conducting form. This concentration of this  	unphosphorylated state is affected by the various reaction-  	diffusion events handled by the chemical solver, below.  2. The chemical solver updates the concentrations  	of the pool objects as per reaction-diffusion calculations.  3. Messaging couples these concentration terms to the adaptor. In this  	case we have many chemical pool objects for every electrical  	compartment. There would be a single adaptor for each electrical  	compartment, and it would average all the input values for calcium  	concentration, one for each mesh point in the chemical calculation.  	As before, the access to these fields could be through a 'push'  	or a 'pull' operation.  4. The clock-based scheduler oeperates as above.  5. The adaptor averages the spatially distributed inputs from calcium,  	and now does a different linear transform. In this case it converts  	chemical concentration into the channel conductance. As before,  	the 'electrical' channel is an object (point 1) with a field for   	conductance, and this term is mapped into the internal data   	structures of the solver (point 2) invisibly to the user.

Author:   Upinder S. Bhalla, 2008, NCBS


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: children (type: vector<Id>, class: Adaptor)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Adaptor)

   Class Name of object


.. describe:: destFields (type: vector<string>, class: Adaptor)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Adaptor)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Adaptor)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Adaptor)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Adaptor)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: inputOffset (type: double, class: Adaptor)

   Offset to apply to input message, before scaling


.. describe:: me (type: ObjId, class: Adaptor)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Adaptor)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Adaptor)

   Messages going out from this Element


.. describe:: name (type: string, class: Adaptor)

   Name of object


.. describe:: numData (type: unsigned int, class: Adaptor)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Adaptor)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: outputOffset (type: double, class: Adaptor)

   Offset to apply at output, after scaling


.. describe:: outputValue (type: double, class: Adaptor)

   This is the linearly transformed output.


.. describe:: parent (type: ObjId, class: Adaptor)

   Parent ObjId for current object


.. describe:: path (type: string, class: Adaptor)

   text path for object


.. describe:: scale (type: double, class: Adaptor)

   Scaling factor to apply to input


.. describe:: sourceFields (type: vector<string>, class: Adaptor)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: Adaptor)

   Access function for entire object


.. describe:: tick (type: int, class: Adaptor)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Adaptor)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Adaptor)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Adaptor)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Adaptor)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Adaptor)

   Ids of Elements connected this Element on specified field.



Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Adaptor)

   Message to child Elements


.. describe:: output (type: double, class: Adaptor)

   Sends the output value every timestep.


.. describe:: requestOut (type: vector<double>*, class: Adaptor)

   Sends out a request to a field with a double or array of doubles. Issued
   from the process call.Works for any number of targets.



Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: getChildren (type: vector<vector<Id>>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getInputOffset (type: vector<double>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputOffset (type: vector<double>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getOutputValue (type: vector<double>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getScale (type: vector<double>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Adaptor)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: input (type: double, class: Adaptor)

   Input message to the adaptor. If multiple inputs are received, the system
   averages the inputs.


.. describe:: notifyAddMsgDest (type: ObjId, class: Adaptor)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Adaptor)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Adaptor)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Adaptor)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Adaptor)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Adaptor)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Adaptor)

   Message from Parent Element(s)


.. describe:: process (type: const ProcInfo*, class: Adaptor)

   Handles 'process' call


.. describe:: reinit (type: const ProcInfo*, class: Adaptor)

   Handles 'reinit' call


.. describe:: setInputOffset (type: double, class: Adaptor)

   Assigns field value.


.. describe:: setName (type: string, class: Adaptor)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Adaptor)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Adaptor)

   Assigns field value.


.. describe:: setOutputOffset (type: double, class: Adaptor)

   Assigns field value.


.. describe:: setScale (type: double, class: Adaptor)

   Assigns field value.


.. describe:: setThis (type: 7Neutral, class: Adaptor)

   Assigns field value.


.. describe:: setTick (type: int, class: Adaptor)

   Assigns field value.



Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: proc (type: void, class: Adaptor)

   This is a shared message to receive Process message from the scheduler.




Attributes inherited from Neutral:
----------------------------------

