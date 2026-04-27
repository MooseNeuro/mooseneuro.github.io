*************
MOOSE Classes
*************

.. toctree::
   :maxdepth: 2

.. automodule:: onetoonemsg
   :members:
   :no-index:

Single Message Cross
""""""""""""""""""""

.. automodule:: singlemsgcross
  :members:
  :no-index:

Vectors
^^^^^^^

.. automodule:: vectors
  :members:
  :no-index:

Data Entries
^^^^^^^^^^^^

.. automodule:: wildcard
  :members:
  :no-index:

Interpolation
^^^^^^^^^^^^^

1-dimentional Interpolation
"""""""""""""""""""""""""""

.. automodule:: interpol
  :members:
  :no-index:

.. literalinclude:: ../../../../moose-examples/snippets/interpol.py
   :language: python
   :start-after: # block 1 start
   :end-before: # block 1 end


.. literalinclude:: ../../../../moose-examples/snippets/loadKineticModel.py
   :language: python
   :start-after: # block 2 start
   :end-before: # block 2 end

Tables
^^^^^^

.. automodule:: tabledemo
  :members:
  :no-index:

Data Types
^^^^^^^^^^

HDF DataType
""""""""""""

.. automodule:: hdfdemo
   :members:

NSDF DataType
"""""""""""""

.. automodule:: nsdf
   :members:

.. automodule:: nsdf_vec
   :members:

Mathematics with MOOSE
^^^^^^^^^^^^^^^^^^^^^^

Computing an arbitrary function
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. automodule:: function
  :members:

Computing an arbitrary function

function.example()[source]

Function objects can be used to evaluate expressions with arbitrary number of variables and constants. We can assign expression of the form:

f(c0, c1, ..., cM, x0, x1, ..., xN, y0,..., yP )
where c_i's are constants and x_i's and y_i's are variables.

The constants must be defined before setting the expression and variables are connected via messages. The constants can have any name, but the variable names must be of the form x{i} or y{i} where i is increasing integer starting from 0.

The x_i's are field elements and you have to set their number first (function.x.num = N). Then you can connect any source field sending out double to the 'input' destination field of the x[i].

The y_i's are useful when the required variable is a value field and is not available as a source field. In that case you connect the requestOut source field of the function element to the get{Field} destination field on the target element. The y_i's are automatically added on connecting. Thus, if you call:

moose.connect(function, 'requestOut', a, 'getSomeField')
moose.connect(function, 'requestOut', b, 'getSomeField')
then a.someField will be assigned to y0 and b.someField will be assigned to y1.

In this example we evaluate the expression: z = c0 * exp(c1 * x0) * cos(y0)

with x0 ranging from -1 to +1 and y0 ranging from -pi to +pi. These values are stored in two stimulus tables called xtab and ytab respectively, so that at each timestep the next values of x0 and y0 are assigned to the function.

Along with the value of the expression itself we also compute its derivative with respect to y0 and its derivative with respect to time (rate). The former uses a five-point stencil for the numerical differentiation and has a glitch at y=0. The latter uses backward difference divided by dt.

Unlike Func class, the number of variables and constants are unlimited in Function and you can set all the variables via messages.


.. figure:: ../../../images/function.png
   :alt: Outputs of Function object calculating z = c0 * exp(c1 * x) * cos(y)
   :scale: 50%

