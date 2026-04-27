:orphan:

Enz
===




Author:   Upi Bhalla


Attributes:
-----------



Value Attributes:
-----------------

.. describe:: Km (type: double, class: Enz)

   Michaelis-Menten constant in SI conc units (milliMolar)


.. describe:: children (type: vector<Id>, class: Enz)

   vector of ObjIds listing all children of current object


.. describe:: className (type: string, class: Enz)

   Class Name of object


.. describe:: compartment (type: ObjId, class: Enz)

   ObjId of parent compartment of pool. If the compartment isn'tavailable
   this returns the root ObjId.


.. describe:: concK1 (type: double, class: Enz)

   K1 expressed in concentration (1/millimolar.sec) unitsThis parameter
   is subordinate to the Km. This means thatwhen Km is changed, this changes.
   It also means that whenk2 or k3 (aka kcat) are changed, we assume that
   Km remainsfixed, and as a result concK1 must change. It is only whenconcK1
   is assigned directly that we assume that the user knowswhat they are
   doing, and we adjust Km accordingly.concK1 is also subordinate to the
   'ratio' field, sincesetting the ratio reassigns k2.Should you wish to
   assign the elementary rates concK1, k2, k3,of an enzyme directly, always
   assign concK1 last.


.. describe:: destFields (type: vector<string>, class: Enz)

   List of all destination fields on Element, that is, fieldsthat are accessed
   as Element functions.


.. describe:: dt (type: double, class: Enz)

   Timestep used for this Element. Zero if not scheduled.


.. describe:: fieldIndex (type: unsigned int, class: Enz)

   For a FieldElement: field Index of self.For a regular Element: zero.



.. describe:: idValue (type: unsigned int, class: Enz)

   Object id of self, converted to an unsigned int.


.. describe:: index (type: unsigned int, class: Enz)

   For a FieldElement: Object index of parent.For a regular Element: Object
   index (dataId) of self.


.. describe:: k1 (type: double, class: Enz)

   Forward reaction from enz + sub to complex, in # units.This parameter
   is subordinate to the Km. This means thatwhen Km is changed, this changes.
   It also means that whenk2 or k3 (aka kcat) are changed, we assume that
   Km remainsfixed, and as a result k1 must change. It is only whenk1 is
   assigned directly that we assume that the user knowswhat they are doing,
   and we adjust Km accordingly.k1 is also subordinate to the 'ratio' field,
   since setting the ratio reassigns k2.Should you wish to assign the elementary
   rates k1, k2, k3,of an enzyme directly, always assign k1 last.


.. describe:: k2 (type: double, class: Enz)

   Reverse reaction from complex to enz + sub


.. describe:: k3 (type: double, class: Enz)

   Forward rate constant from complex to product + enz


.. describe:: kcat (type: double, class: Enz)

   Forward rate constant for enzyme, units 1/sec


.. describe:: me (type: ObjId, class: Enz)

   ObjId for current object


.. describe:: msgIn (type: vector<ObjId>, class: Enz)

   Messages coming in to this Element


.. describe:: msgOut (type: vector<ObjId>, class: Enz)

   Messages going out from this Element


.. describe:: name (type: string, class: Enz)

   Name of object


.. describe:: numData (type: unsigned int, class: Enz)

   # of Data entries on Element.Note that on a FieldElement this does NOT
   refer to field entries,but to the number of DataEntries on the parent
   of the FieldElement.


.. describe:: numField (type: unsigned int, class: Enz)

   For a FieldElement: number of entries of self.For a regular Element:
   One.


.. describe:: numKm (type: double, class: Enz)

   Michaelis-Menten constant in number units, volume dependent


.. describe:: numProducts (type: unsigned int, class: Enz)

   Number of products in this MM reaction. Usually 1.


.. describe:: numSubstrates (type: unsigned int, class: Enz)

   Number of substrates in this MM reaction. Usually 1.Does not include
   the enzyme itself


.. describe:: parent (type: ObjId, class: Enz)

   Parent ObjId for current object


.. describe:: path (type: string, class: Enz)

   text path for object


.. describe:: ratio (type: double, class: Enz)

   Ratio of k2/k3


.. describe:: sourceFields (type: vector<string>, class: Enz)

   List of all source fields on Element, that is fields that can act as
   message sources.


.. describe:: this (type: 7Neutral, class: Enz)

   Access function for entire object


.. describe:: tick (type: int, class: Enz)

   Clock tick for this Element for periodic execution in the main simulation
   event loop. A default is normally assigned, based on object class, but
   one can override to any value between 0 and 19. Assigning to -1 means
   that the object is disabled and will not be called during simulation
   execution The actual timestep (dt) belonging to a clock tick is defined
   by the Clock object.


.. describe:: valueFields (type: vector<string>, class: Enz)

   List of all value fields on Element.These fields are accessed through
   the assignment operations in the Python interface.These fields may also
   be accessed as functions through the set<FieldName> and get<FieldName>
   commands.



Attributes inherited from EnzBase:
----------------------------------


Attributes inherited from Neutral:
----------------------------------


Lookup Attributes:
------------------

.. describe:: isA (type: string,bool, class: Enz)

   Returns true if the current object is derived from the specified the
   specified class


.. describe:: msgDestFunctions (type: string,vector<string>, class: Enz)

   Matching function names for each ObjId receiving a msg from the specified
   SrcFinfo


.. describe:: msgDests (type: string,vector<ObjId>, class: Enz)

   ObjIds receiving messages from the specified SrcFinfo


.. describe:: neighbors (type: string,vector<Id>, class: Enz)

   Ids of Elements connected this Element on specified field.



Attributes inherited from EnzBase:
----------------------------------


Attributes inherited from Neutral:
----------------------------------


Src Attributes:
---------------

.. describe:: childOut (type: int, class: Enz)

   Message to child Elements


.. describe:: cplxOut (type: double,double, class: Enz)

   Sends out increment of molecules on product each timestep


.. describe:: enzOut (type: double,double, class: Enz)

   Sends out increment of molecules on product each timestep


.. describe:: prdOut (type: double,double, class: Enz)

   Sends out increment of molecules on product each timestep


.. describe:: subOut (type: double,double, class: Enz)

   Sends out increment of molecules on product each timestep



Attributes inherited from EnzBase:
----------------------------------


Attributes inherited from Neutral:
----------------------------------


Dest Attributes:
----------------

.. describe:: cplxDest (type: double, class: Enz)

   Handles # of molecules of enz-sub complex


.. describe:: enzDest (type: double, class: Enz)

   Handles # of molecules of Enzyme


.. describe:: getChildren (type: vector<vector<Id>>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getClassName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getCompartment (type: vector<ObjId>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getConcK1 (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDestFields (type: vector<vector<string>>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getDt (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getFieldIndex (type: vector<unsigned int>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIdValue (type: vector<unsigned int>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIndex (type: vector<unsigned int>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getIsA (type: bool, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getK1 (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getK2 (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getK3 (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKcat (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getKm (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMe (type: vector<ObjId>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDestFunctions (type: vector<string>, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgDests (type: vector<ObjId>, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgIn (type: vector<vector<ObjId>>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getMsgOut (type: vector<vector<ObjId>>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getName (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNeighbors (type: vector<Id>, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumData (type: vector<unsigned int>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumField (type: vector<unsigned int>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumKm (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumProducts (type: vector<unsigned int>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getNumSubstrates (type: vector<unsigned int>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getParent (type: vector<ObjId>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getPath (type: PSt6vectorINSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEESaIS5_EE, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getRatio (type: vector<double>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getSourceFields (type: vector<vector<string>>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getThis (type: PSt6vectorI7NeutralSaIS0_EE, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getTick (type: PSt6vectorIiSaIiEE, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: getValueFields (type: vector<vector<string>>*, class: Enz)

   Requests field value. The requesting Element must provide a handler for
   the returned value.


.. describe:: notifyAddMsgDest (type: ObjId, class: Enz)

   Called when a message is created, current object is dest. Arg is msgId.



.. describe:: notifyAddMsgSrc (type: ObjId, class: Enz)

   Called when a message is created, current object is src. Arg is msgId.



.. describe:: notifyCopy (type: ObjId, class: Enz)

   Called when object is copied. Arg is original.


.. describe:: notifyCreate (type: ObjId, class: Enz)

   Called when object is created. Arg is parent.


.. describe:: notifyDestroy (type: void, class: Enz)

   Called when object is destroyed.


.. describe:: notifyMove (type: ObjId, class: Enz)

   Called when object is moved. Arg is new parent.


.. describe:: parentMsg (type: int, class: Enz)

   Message from Parent Element(s)


.. describe:: prdDest (type: double, class: Enz)

   Handles # of molecules of product. Dummy.


.. describe:: setConcK1 (type: double, class: Enz)

   Assigns field value.


.. describe:: setK1 (type: double, class: Enz)

   Assigns field value.


.. describe:: setK2 (type: double, class: Enz)

   Assigns field value.


.. describe:: setK3 (type: double, class: Enz)

   Assigns field value.


.. describe:: setKcat (type: double, class: Enz)

   Assigns field value.


.. describe:: setKm (type: double, class: Enz)

   Assigns field value.


.. describe:: setKmK1 (type: double,double, class: Enz)

   Assigns Km to enzyme. K1 arg is deprecated and ignored.


.. describe:: setName (type: string, class: Enz)

   Assigns field value.


.. describe:: setNumData (type: unsigned int, class: Enz)

   Assigns field value.


.. describe:: setNumField (type: unsigned int, class: Enz)

   Assigns field value.


.. describe:: setNumKm (type: double, class: Enz)

   Assigns field value.


.. describe:: setRatio (type: double, class: Enz)

   Assigns field value.


.. describe:: setSolver (type: ObjId, class: Enz)

   Assigns solver to this MMEnz.


.. describe:: setThis (type: 7Neutral, class: Enz)

   Assigns field value.


.. describe:: setTick (type: int, class: Enz)

   Assigns field value.


.. describe:: subDest (type: double, class: Enz)

   Handles # of molecules of substrate



Attributes inherited from EnzBase:
----------------------------------


Attributes inherited from Neutral:
----------------------------------


Shared Attributes:
------------------

.. describe:: cplx (type: void, class: Enz)

   Connects to enz-sub complex pool


.. describe:: enz (type: void, class: Enz)

   Connects to enzyme pool


.. describe:: prd (type: void, class: Enz)

   Connects to product molecule


.. describe:: sub (type: void, class: Enz)

   Connects to substrate molecule



Attributes inherited from EnzBase:
----------------------------------


Attributes inherited from Neutral:
----------------------------------

