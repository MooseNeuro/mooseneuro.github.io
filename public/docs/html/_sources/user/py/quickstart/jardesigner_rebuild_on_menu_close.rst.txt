`Rebuild model on Menu-close <#TOC>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How does the mechanics of Jardesigner work?
-------------------------------------------

When you enter the values in a dialog it does not automatically update the JSON model. Rather,it updates once the dialog is either closed or another dialog is opened.
This is because, every time it updates, the updation protocol involves rebuilding the entire model with back and forth interactions with the server.
This becomes a tedious task for large models. Thus, the updation protocol of rebuild-on-menu-close is as follows:

* When an existing menu is closed, or a new one is opened, the entire model is rebuilt.

* This is expensive, so it is done only on menu-close.

* The 3D display of the model will update at this time.
