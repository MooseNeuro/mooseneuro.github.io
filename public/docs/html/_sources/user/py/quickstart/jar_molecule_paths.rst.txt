~~~~~~~~~~~~~~~~~~~~~~~~~
`Molecule paths <#TOC>`__
~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to plot or 3-D display or connect to a molecule for stimulus or adaptor, you need to access the precise index (or wildcard) for that molecule. Molecules obey a slightly different rule for indexing.

They are always within a chemical sub-compartment, for example Oscillator in several examples. This is fortunately separated out for you in the dialogs.

They are indexed as molecule [0..N-1] where N depends on where they are placed.

2.1. In a dendrite and Presyn_dend, N is the ratio of the length of the dendrite to the diffusion length

2.2. In a spine, PSD, or Presyn_spine, N is the number of spine-heads.

2.3. In an endo compartment we directly specify the spacing between them.
