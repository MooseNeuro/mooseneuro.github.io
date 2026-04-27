~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`Electrical model paths <#TOC>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here are the paths for the predefined elecrical models:

+--------------------+----------------+---------------------------------------------+
| Model type         | Paths          | Indexing                                    |
+====================+================+=============================================+
| soma               | soma           | Always only a single soma compartment.      |
+--------------------+----------------+---------------------------------------------+
| ball and stick     | soma           | Always a single compartment                 |                                            
+--------------------+----------------+---------------------------------------------+
| ball and stick     | dend0..N-1     | The dend compartment is subdivided into     |
|                    |                | numSegments, indicated here by N.           |
|                    |                | Indices are directly appended onto          |
|                    |                | the dendrite path                           |
|                    |                |                                             |
+--------------------+----------------+---------------------------------------------+
| Y branch model     | soma           | Always a single compartment                 |
+--------------------+----------------+---------------------------------------------+
| Y branch model     | dend0..N-1     | Same as for ball and stick model            |
+--------------------+----------------+---------------------------------------------+
| Y branch model     | branch1_0..B-1 | Similar to the dendrite,                    |
|                    |                | there are numSegments for each branch       |
+--------------------+----------------+---------------------------------------------+
| Y branch model     | branch2_0..B-1 | See above                                   |
+--------------------+----------------+---------------------------------------------+
| Model from swc file| soma           | Possible to have multiple indices here!     |
+--------------------+----------------+---------------------------------------------+
| Model from swc file| other branches | Arbitrary naming schemes.                   |
+--------------------+----------------+---------------------------------------------+
| Spine head on      | head0..S-1     | The number of spines S is automatically     |
| added spines       |                | calculated from the spacing of spines,      |
|                    |                | and the length of dendrite on which they sit|    
|                    |                |                                             |
+--------------------+----------------+---------------------------------------------+
| Spine shaft on     |  shaft0..H-1   | Same as above. One normally doesn't         |
|                    |                | do much with the spine shafts.              |
| added spines       |                |                                             |
+--------------------+----------------+---------------------------------------------+


If you want to refer to all segments within a dendrite, use the wildcard # character, for example:                                                                                                               
::

      dend#

You can separate multiple paths with a comma, but no spaces. For example, here are two ways to indicate the most proximal branches of a Y branch cell:
::

     branch1_0,branch2_0

     branch#_0

If you want to select all the electrical compartments then:
::

     #
     
is enough.

Relative paths point to objects nested under the compartments. For example, the Na ion channel on the soma will be located at soma/Na. When accessing the relative paths the dialogs do not need the intervening /.

