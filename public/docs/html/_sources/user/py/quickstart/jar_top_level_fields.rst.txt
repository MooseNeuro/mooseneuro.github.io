~~~~~~~~~~~~~~~~~~~~~~~~~~~
`Top-Level Fields <#TOC>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The JSON model has several primary keys that control the simulation.


+--------------------+----------------+---------------------------------------------+
| Key                | Type           | Description                                 |
+====================+================+=============================================+
| runtime            | number         | The total simulation time in seconds        |
+--------------------+----------------+---------------------------------------------+
| elecDt             | number         | The time step for electrical calculations   |
+--------------------+----------------+---------------------------------------------+
| turnOffElec        | boolean        | If true, electrical simulations are disabled|
+--------------------+----------------+---------------------------------------------+
