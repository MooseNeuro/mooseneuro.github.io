
Building and Installing MOOSE on Windows with MSVC
---------------------------------------------------

Install Requirements
^^^^^^^^^^^^^^^^^^^^^

1. Download the appropriate version of Visual Studio Installer. Building MOOSE from source requires Visual Studio 2019 or later https://visualstudio.microsoft.com/downloads/

2. Run the installer and in the "workload" tab select "Desktop Development with C++". You can uncheck all the optional components in the right-hand pane (Installation details) except "MSVC Build Tools for x64/x86 (Latest)" and "Windows NN SDK" (where NN is 10 for Windows 10, 11 for Windows 11, etc).

3. Install git for Windows as described here: https://git-scm.com/install/windows

4. Install any of Anaconda (https://www.anaconda.com/download), mamba (https://mamba.readthedocs.io/en/latest/), or micromamba (https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html). Among these, micromamba is the no-frills, small foot-print environment manager. In the following we are showing the commands for micromamba, but depending on the system you install, you can replace the command `micromamba` with `conda` or `mamba`. Install micromamba following this guide: link (https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html#windows). 

Briefly, open PowerShell. By default it starts in `C:\Windows\\system32` folder, which is a system folder. You want to change to another directory, for example to your windows home directory, run:

::

     cd $HOME



Download micromamba:

::

     Invoke-Webrequest -URI https://micro.mamba.pm/api/micromamba/win-64/latest -OutFile micromamba.tar.bz2


Extract the contents:

::

     tar xf micromamba.tar.bz2

Move the micromamba executable to a suitable location:

::

     MOVE -Force Library\bin\micromamba.exe .\micromamba.exe

Set the root-prefix for micromamba (everything micromamba installs goes here):

::

     $Env:MAMBA_ROOT_PREFIX="C:\Your\Root\Prefix"

For example, 

::

     $Env:MAMBA_ROOT_PREFIX=”$HOME\micromamba”


You have to create this folder if required (`md ”micromamba”`)

Update PowerShell initialization to include micromamba:

::

    $.\micromamba.exe shell init -s powershell -r “$HOME\micromamba”

After this, restart PowerShell. You may see an error message like this at the beginning of the new PowerShell window:

.. code-block::text

      . : File C:\Users\banhita\Documents\WindowsPowerShell\profile.ps1 cannot be loaded because running scripts is disabled
      on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
      At line:1 char:3
      + . 'C:\Users\banhita\Documents\WindowsPowerShell\profile.ps1'
      +   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          + CategoryInfo          : SecurityError: (:) [], PSSecurityException
          + FullyQualifiedErrorId : UnauthorizedAccess


This is because Windows does not allow PowerShell to execute scripts by default. To bypass this, you need to modify the execution policy by running this in the PowerShell command prompt:

::
   
     $Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Now restart PowerShell and the new window should have no error message. Ensure micromamba is available to PowerShell by running:

::
     
    $micromamba env list

This should show a list of existing Python environments, which usually includes base:

.. code-block::text    

       Name  Active  Path
     ---------------------------------------------
       base  *       C:\Users\{your-user-name}\micromamba

5.  Create a python environment for moose installation with micromamba using the following command

::
   
     $micromamba create -n moose meson ninja meson-python gsl hdf5 numpy matplotlib vpython pkg-config pybind11[global] -c conda-forge

6.  Now activate the environment

::

     $micromamba activate moose

7.  Next cd to the folder where you want to download moose sources and clone the moose-core repo from github:

::

      $git clone https://github.com/MooseNeuro/moose-core --depth 50 

8.  Change to the moose-core directory

::

     $cd moose-core

.. _my-target-label:


9. Activate the Visual C++ Development Environment. This is done by a batch script installed in the Visual Studio Directory. There are different scripts specific to 32 bit and 64 bit systems, and must match your Python (see here for information about cross compilation with MSVC Build Tools https://learn.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=msvc-170. Use the developer tools in an existing command window).

 Run Python from a command prompt to check its build information:

::

     $python

This will show something like this:

.. code-block::text

     Python 3.14.0 | packaged by conda-forge | (main, Dec  2 2025, 19:51:43) [MSC v.1944 64 bit (AMD64)] on win32
     Type "help", "copyright", "credits" or "license" for more information.
     >>>

 The `[MSC v.1944 64 bit (AMD64)] on win32` part tells us that it is 64 bit Python running on a 32 bit Windows system. Thus, moose needs cross compilation from 32 bit to 64 bit. The required environment setup  is in the file `vcvarsx86_amd64.bat` in your Visual Studio directory (`C:\\Program Files\\Microsoft Visual Studio\\18\\Community\\VC\\Auxiliary\\Build\\vcvarsx86_amd64.bat` for Visual Studio Community 2026, a nd `C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\BuildTools\\VC\\Auxiliary\\Build\\vcvarsx86_amd64.bat` for Visual Studio 2019). Run that script by entering the full path in the PowerShell prompt.

10. Setup the build configuration with meson. If you want to keep moose in the local source directory and make a development build, specify the location of the installation directory via the `--prefix` option below. Let us say you created a directory `C:\\Users\\{your-user-name}\\` and ran the `git clone …` command above in that directory. That will download moose sources into `C:\\Users\\{your-user-name}\\src\\moose-core\\`. You can configure the meson build to install moose in the local installation directory `C:\\Users\\{your-user-name}\\src\\moose-core\\_build_install` with the following command:

::
   
     $meson setup --wipe _build --prefix=C:\Users\{your-user-name}\src\moose-core\_build_install -Duse_mpi=false -Dbuildtype=release  --vsenv

Known issue: If this command shows an error like this::


     Need python for x86, but found x86_64
     Run-time dependency python found: NO 
     meson.build:49:16: ERROR: Python dependency not found
     Or 
     meson.build:13:0: ERROR: Compiler cl cannot compile programs

you may be using 32 bit Visual C++ build tools on a 64 bit computer. Refer to :ref:`[9]<my-target-label>` above.


11. Build moose by entering:

::
   
    $meson compile -C _build

This will take a while depending on your CPU speed. At successful completion it should show something like this::


     [236/236] Linking target _moose.cp314-win_amd64.pyd
     Creating library _moose.cp314-win_amd64.lib and object _moose.cp314-win_amd64.exp

12. Install the built moose module in the target directory (as specified by –prefix argument, or system default directory)

::

     $meson install -C _build

You will see something like this at the end:

::

     $Compiling '{location-of-moose-core}\\moose-core\\_build_install\\Lib\\site-packages\\{path}’ …

Here it is installing moose in the custom location (`{location-of-moose-core}\\moose-core\\_build_install\\`) we specified during meson setup.

13. If you installed moose in a custom directory by specifying the `--prefix` option during `meson setup …`, then you have to add the location of moose to your PYTHONPATH environment variable. You can do this locally within the PowerShell prompt:

::

    $$env:PYTHONPATH = “{location-of-moose-core}\moose-core\_build_install\Lib\site-packages”

Note that `{location-of-moose-core}\\moose-core\\_build_install\\` was the path we specified with `--prefix` option in `meson setup`.
However, you have to do this every time you open PowerShell to use moose. To make it stick, go to Windows system settings, find Advanced System Settings, and in the System Properties window click the `Environment Variables …` button. In the popup window, under “User variables for `{your-user-name}`, look for PYTHONPATH. If it does not exist already, click `New`, put PYTHONPATH in the `Variable Name` text box, and put the location of moose installation in the `Variable value` textbox (`{location-of-moose-core}\\moose-core\\_build_install\\Lib\\site-packages` in this case).

14. Start the Python interpreter and try to import moose to check if the installation worked.

::

    $python
    $>> import moose

If this does not throw any errors, you are good to go.
