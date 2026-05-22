---
title: "MOOSE v4.3.0 Lavang Latika is here!"
date: 2026-05-21
---

### v4.3.0 &mdash; *Lavang Latika*

We are excited to announce **MOOSE v4.3.0 _Lavang Latika_** - a significant release that brings two powerful new libraries to MOOSE: a ready-to-use ion channel collection drawn from over 2,300 published models, and a clean neuron morphology toolkit for working with SWC files. The release also includes targeted bug fixes that improve expression evaluation and SWC loading.

**GitHub:** [Release v4.3.0 — "Lavang Latika"](https://github.com/MooseNeuro/moose-core/releases/tag/v4.3.0) &nbsp;·&nbsp; **PyPI:** [pymoose 4.3.0](https://pypi.org/project/pymoose/4.3.0/)

---

## What's New

### Ion Channel Library - `moose.channels`

The new `moose.channels` module provides scriptable access to over **2,305 ion channel models** from the [ICGenealogy database](https://icg.neurotheory.ox.ac.uk/), covering Na, K, Ca, KCa, and IH ion classes. Channels can be inserted into compartments using wildcards, lists, or dictionaries, with support for distance-dependent conductance.

- **Search and inspect** channels by name, ion class, `modeldb_id`, or `icg_id` via `moose.channels.search()` and `moose.channels.info()`
- **Instantiate prototypes** with `moose.channels.make_prototype()` prototype names follow the simplified format `{suffix}_{modeldb_id}`
- Every channel carries both a `modeldb_id` (ModelDB reference) and an `icg_id` (unique ICGenealogy identifier) for precise provenance tracking
- New `get_icg_id()` function retrieves the ICGenealogy identifier for any channel prototype

### Morphology Library - `moose.morphologies`

The new `moose.morphologies` module provides a clean interface for loading and navigating neuron morphologies from SWC files. Once loaded, compartments are accessible via `.root`, `.soma`, `.compartments`, and `.select(pattern)`. The module automatically re-roots SWC files that are not anchored at the soma.

Bundled morphologies are included from three curated sources:
- [Allen Cell Types Database](https://celltypes.brain-map.org/): Reconstructed cortical and hippocampal neurons
- Traub et al. 2005 thalamocortical network model
- Classic published literature

**GENESIS `.p` file conversion:** `moose.swc_utils.p_to_swc` converts legacy GENESIS `.p` morphology files to SWC format via [ShapeShifter](https://github.com/neurord/ShapeShifter), developed by **Prof. Avrama Blackwell's group** at George Mason University.

---

## Bugs Fixed

- Python's ** operator now works in MOOSE expressions (e.g., func.expr = 'x0**2'), in addition to the existing ^ operator
- Fixed ReadSwc to detect and handle 3-point soma and linear soma chains
- Fixed HHGateF2D::lookupB not setting voltage and concentration values from input vector

---

## Documentation

- Clearer, step-by-step Ubuntu build instructions
- Corrected MOOSE website URL in the README

---

## Credits and Citations

### Ion Channel Library

The channel parameters and omnimodel formulation are the work of the **ICGenealogy project** and the **Vogels group** at IST Austria.

If you use `moose.channels` in your research, please cite:

> Chintaluri, C., Podlaski, W., Bozelos, P. A., Gonçalves, P. J., Lueckmann, J.-M., Macke, J. H., & Vogels, T. P. (2025). An ion channel omnimodel for standardized biophysical neuron modelling. *bioRxiv*. https://doi.org/10.1101/2025.10.03.680368

and the IonChannelGenealogy database:

> Podlaski, W. F., Seeholzer, A., Groschner, L. N., Miesenboeck, G., Ranjan, R., & Vogels, T. P. (2017). Mapping the function of neuronal ion channels in model and experiment. *eLife*, 6, e22152. https://doi.org/10.7554/eLife.22152

The ICG web application and channel specification sheets are available at: https://icg.neurotheory.ox.ac.uk/

### Morphology Utilities (ShapeShifter)

Developed by **Prof. Avrama Blackwell and her team**, George Mason University.
[ShapeShifter: a morphology processing utility for compartmental neuron models.](https://github.com/neurord/ShapeShifter)

Used in: `moose.swc_utils`, `moose.morphologies` (GENESIS `.p` file support), `python/moose/ShapeShifter/`

If you use morphology conversion or reduction features in your research, please acknowledge **Prof. Avrama Blackwell's group** and the ShapeShifter project.

---

## Trivia

[*Lavang Latika*](https://en.wikipedia.org/wiki/Lobongo_Lotika) (also spelled *Lobongo Lotika*) is a traditional Bengali sweet. A delicate fried pastry filled with coconut and khoya (reduced milk), folded into a neat square and sealed with a single whole clove (*lavang*), which gives it both its name and a subtle warm spice.

---

*Thank you to everyone who contributed to this release and a special thanks to the **ICGenealogy project**, **Prof. Tim Vogels' group** at IST Austria, and **Prof. Avrama Blackwell's group** at George Mason University ([ShapeShifter](https://github.com/neurord/ShapeShifter)) for the foundational work that made two of this release's major features possible.*
