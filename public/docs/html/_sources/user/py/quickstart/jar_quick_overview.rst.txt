~~~~~~~~~~~~~~~~~~~~~~~~~~
`Quick Overview <#TOC>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~

This is a quick worked example of building a multiscale model. While you do this, flip between the current DOCUMENTATION tab and the MODEL JSON tab on the right so you can see how your model takes shape. Click on the SHOW MODEL JSON button at any point to refresh the view of the developing JSON structure.


1. Pick cell Morphology: Go to the Morphology item and select a shape, such as the Y-branch. Change the dendrite length to 50 microns. The JSON tab should look something like this 

  ::

       {
        "filetype": "jardesigner",
        "version": "1.0",
        "cellProto": {
            "type": "branchedCell",
            "somaDia": 0.00001,
            "somaLen": 0.00001,
            "dendDia": 0.000005,
            "dendLen": 0.00005,
            "dendNumSeg": 1,
            "branchDia": 0.0000025,
            "branchLen": 0.00015,
            "branchNumSeg": 1
        }
        }
    
2. Add Spines: In the Spines tab we'll use the default Excitatory prototype. Go down to the Distributions panel and pick "exc" from the pulldown menu for "prototypes". Set the Path to "#". This is a wildcard specifier that means to put spines on every compartment. The rest of the items can remain defaults.

3. Add Channels: This time we'll get more elaborate about how to build complex components using multiple prototypes. Note that it is advisable to build all of your required prototypes before you assign their distributions, lest you accidentally overwrite a prototype which is already in use.

  3.1. Open the Channels tab.

  3.2. From the dropdown menu pick "Na". Leave its name as the default "Na"

  3.3. Click the + tab to open up another prototype.
  
  3.4. Pick "KDR".

  3.5. Next go down to the Distribution section of the same window.

  3.6. Pick "Na" from the menu, and set its conductance to 1000.

  3.7. Click + to open up another distribution.

  3.8. Pick "KDR" and set its Gbar to 1400.

  To have a look at what you've done so far, click on the SHOW MODEL JSON button in the right panel to see how all these prototypes and distributions are set up.

4. Add Stimulus: We'll now jump ahead to the stimulus so as to get some intermediate positive reinforcement. Go to the "Stimuli" menu box. Note that there is the familiar tabbed layout, so you can put in as many stimuli as you need.

  4.1. Enter "soma" into the Path. This defines where this stimulus will go.

  4.2. Leave the Type menu at the default value of "Field"

  4.3. Select Field menu item "inject".

  4.4. Enter into the Stimulus Expr the value "0.1e-9*(t>0.1)*(t<0.2)" (without quotes).

  Overall this stimulus means: "into the soma, inject 0.1 nanoamp during the interval 0.1 to 0.2 seconds.

5. Add Plot: In the PLOTS menu enter soma again as the path. You can set a title such as "Soma Vm (mV)"

6. Run it: Finally, open the Run tab. All the defaults are fine. Just click the green "START" button.

7. 3D display it: For some more dopamine, set it up in the 3-D display. [This may not yet be enabled for the remote web display, in which case skip this step]. Open the 3D menu box.

   7.1. Set Path to #. This is a wildcard which means to display all the compartments.

   7.2. Go down to the Global Display Settings and set the Display dt to a reasonable 0.0005. This lets us detect individual action potentials.

   7.3. Go back to the Run tab and hit START again.

   7.4. A new tab should appear in your browser with a 3-D rendering of the cell in it. Use your right and left mouse buttons to twirl the display and the scroll bar to zoom in and out. You should be able to see individual spines. You can also click the "Start Replay" button so it loops through the output till you click it again.

   7.5. Close the 3D tab. The graph of the simulation should now appear in the usual jardesigner interface.

        At this point our model is entirely electrical. Before we go any further, let's save it.

8. Save Model: Go to the File menu, change the suggested file name to "elec_model1.json.. Fill in your name and any notes and hit "Save Model"

9. Add Signaling: To go multiscale, let's put in some chemistry. Open the Signaling menu. We'll use the default Oscillator prototype.

   9.1. Go down to the Distributions section and select "Oscillator".

   9.2. We're going to put this in all the dendrite compartments. Enter "dend#". Actually we only have one dendrite compartment by default and it is dend0, but using the wildcard means we don't have to worry a        bout how many dendrite compartments there are.

   9.3. You need to pick a diffusion length. We'll go with 2 microns.

10. Add plots for Signaling: This is a bit more involved than the voltage plot, because we need to specify the chemical molecules rather than Vm.

    10.1. Go to the Plots menu.

    10.2. Click the "+" tab so that you create a new plot, not just overwrite the voltage plot you already made.

    10.3. In the new tab, set Path = "dend#" so that we get all the chemical subdivisions of the dend compartment. These divisions may differ from the electrical ones.

    10.4. Specify the field "conc" from the pulldown menu.

    10.5. Select "Oscillator" from the Chem Prototype. It is the only option as we have only defined the one chemical prototype.

    10.6. Enter "a" (no quotes) in the Child Object Path. This means that we want to plot the concentration of molecule a.

11. Change 3D display: The current 3D display shows Vm at 0.5 ms interval. This will take a very long time to display as the model now has to run 50 seconds. So let's view the chemical signals instead.

    11.1. Set the Runtime in the 3D -> Global Display Settings to 50

    11.2. Set the Display dt to 1 second

    11.3. Set the Field to "conc"

    11.4. Like for the plot, set the Chem Prototype to "Oscillator"

    11.5. Set the Child Object Path to "a"

    11.6. Set Max to 200. This is the max concentration.

12. Run it: Change the Total Runtime to 50 seconds, and click START.

    If the 3-D display is running, you'll see a plump sausage changing colours. If you remember, we had only populated the dendrite with the chemical system, so this is all that it displays. Once the 3D display has run its course, close the window and you'll see the decaying oscillations of the chemical system, as well as the very brief initial burst of spikes from the electrical system.

   So far we just have a single model in which chemical events and electrical events play out quite independently of each other. To make this multiscale, we now send the output of the chemical model as a current injection into the electrical model. This is totally ad-hoc, but illustrates the point. To do this, we use Adaptors.

13. Make Adaptor: Select the ADAPTORS menu.

   13.1. Source Path is the molecule. Set it to "Ocsillator/a"

   13.2. Destination Path is the current electrical compartment. Set this to "." (no quotes), to state that it is the current path.

   13.3. Source Field is "conc" (no quotes)

   13.4. Destination Field is "inject" (no quotes)

   13.5. Baseline is the offset. Leave it at the default 0

   13.6. Slope converts from molecules (with a range of 200) to current (with a range of 1e-10). So the slope should be 150e-12 so we get a decent swing each way.

   13.7. Run it again, see how the signaling controls spiking.

14. Chemical Stimulus: Finally, we give the chemical system a bit of symmetry breaking to show its actual spatial extent. To do this, we change the initial conditions at one end of the dendrite.

    14.1. Open STIMULI and click the + to create a new tab

    14.2. Set Path = dend#

    14.3. Set Field menu item to conc

    14.4. Set Chem Prototype to Oscillator

    14.5. Set Child Object Path to a[0]

    14.6. Set Stimulus Expr to 2*(t<1). In other words, look at the dendrite compartments, initialize the chemical species a in subcompartment 0 to be 2 mM at from t = 0 to 1, and then zero.

    14.7. Run it. Behold the interesting propagation of activity in the 3-D view, and check the time-series plots to see how the level of molecule a in turn modulates the firing of the cell.


