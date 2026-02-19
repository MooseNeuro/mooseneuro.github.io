---
title: "Multiscale Modelling with MOOSE"
date: 2026-02-19
author: "Parita Mehta"
authorimage: "../assets/team/parita.png"
designation: "Community Manager for MOOSE, NCBS-TIFR"
image: "/assets/blogs/moose2025/upi_lecture.jpeg"
---
<div class="text-center">
	<h2 class="text-3xl font-bold">
		Multiscale Modelling with MOOSE
	</h2>
	<h3 class="text-xl text-gray-600 mt-2">
		From neurophysiology to building multiscale neuronal networks.
	</h3>
	<p class="text-sm text-gray-500 mt-2">25th–26th September, 2025</p>
</div>

Our first two-day hands-on national workshop, **Multiscale Modelling with MOOSE**, held from **September 25th to 26th, 2025, at CHINTA (TCG CREST), Kolkata,** offered a comprehensive journey through the foundations of neuroscience to simulating these concepts using **MOOSE** and its browser-based GUI **Jardesigner**.

<figure class="my-6">
	<img src="/assets/blogs/moose2025/shona_lecture.jpeg" alt="Prof. Sumantra Chattarji (Director, CHINTA, TCG CREST) commencing the workshop" class="mx-auto rounded" loading="lazy" />
	<figcaption class="text-sm text-center text-gray-500 mt-2">Prof. Sumantra Chattarji (Director, CHINTA, TCG CREST) commencing the workshop.</figcaption>
</figure>

Prof. Sumatra Chattarji, Director of [CHINTA (TCG CREST)](https://www.tcgcrest.org/institutes/chinta/), inaugurated the workshop by welcoming participants and motivating young researchers to engage with the inherently interdisciplinary field of neuroscience. In his talk titled ‘An Introduction to Neuroscience’, he gave a broad and integrative overview of the field. His talk emphasised the inherently interdisciplinary nature of neuroscience, spanning multiple scales from molecules and cells to circuits and behaviour.  He underscored the growing challenge of making sense of the vast amounts of data generated in the field, pointing out that linking such data to emergent behaviour is not possible without computational neuroscience, where predictive models can be built and rigorously fit to data. In this context, he highlighted the relevance of MOOSE as a platform that brings together researchers from diverse backgrounds to address these challenges and foster cross-disciplinary collaboration in neuroscience. With this, he welcomed all participants to CHINTA, where the majority of the [MOOSE](https://www.mooseneuro.org/) development team is based. He highlighted the ongoing work at CHINTA across multiple domains of neuroscience,  spanning from fundamental discovery to translational outcomes. He concluded the session reflecting on his scientific journey, encouraging early-career researchers trained abroad to consider returning to India. 

<figure class="my-6">
	<img src="/assets/blogs/moose2025/upi_lecture.jpeg" alt="Prof. Upinder Bhalla kicking off the workshop with an Introduction to Neurophysiology" class="mx-auto rounded" loading="lazy" />
	<figcaption class="text-sm text-center text-gray-500 mt-2">Prof. Upinder Bhalla (Distinguished Professor, NCBS-TIFR) kicking off the workshop with an Introduction to Neurophysiology.</figcaption>
</figure>

Following this, Prof. Upinder Bhalla, Distinguished Professor at NCBS (TIFR) and the primary architect of MOOSE, kick-started the workshop with ‘Introduction to Neurophysiology’, outlining how the brain operates across scales from molecules and ion channels to neuronal networks, and emphasised the connection between biological complexity and mathematical abstraction from the molecular to the network scale. The sessions introduced how neurons function as electrical devices governed by biophysical laws, and the foundational biological and physical principles governing neuronal signalling. Prof. Bhalla gradually built the lectures where he reframed the neuron not just as an electrical unit but as a biochemical computing system. 


Prof. Bhalla then introduced the classic Hodgkin–Huxley (HH) framework to explain how voltage-gated ion channels give rise to action potentials, supported by insights from the squid axon experiments. This was complemented by cable theory, which describes how signals propagate and attenuate along dendrites and axons, and how neuronal geometry and passive membrane properties, i.e., resistance and capacitance, shape computation. This message was reinforced by highlighting strategies like myelination and saltatory conduction for fast and efficient transmission in nerve cells. He then expanded beyond electrical signalling to the rich world of intracellular biochemical pathways. These networks, including MAPK and CaMKII cascades, were explored as analogue computational systems capable of amplification, thresholding, oscillations, and bistability. Such molecular feedback mechanisms form the biochemical foundations of learning, synaptic plasticity, and long-term memory, operating across slower and broader timescales than electrical signalling alone. This expanded view showed how chemical signalling complements electrical signalling, underpinning learning, memory, and long-term plasticity.  The key aspect of Prof. Bhalla’s sessions was to simulate all these concepts in  [**Jardesigner**](https://jardesigner.mooseneuro.org/), the new browser-based GUI for MOOSE, where even a beginner can build a model with a few mouse clicks and simulate it. 

<figure class="my-6">
	<img src="/assets/blogs/moose2025/subha_lecture.jpg" alt="Dr. Subhasis Ray conducting a hands-on session on neuronal modelling with Python scripting in MOOSE" class="mx-auto rounded" loading="lazy" />
	<figcaption class="text-sm text-center text-gray-500 mt-2">Dr. Subhasis Ray, conducting a hands-on session on neuronal modelling with Python scripting in MOOSE.</figcaption>
</figure>

<figure class="my-6">
	<img src="/assets/blogs/moose2025/bhanu_lecture.jpeg" alt="Dr. Bhanu Priya conducting a hands-on session with MOOSE" class="mx-auto rounded" loading="lazy" />
	<figcaption class="text-sm text-center text-gray-500 mt-2">Dr. Bhanu Priya S conducting a hands-on session with MOOSE.</figcaption>
</figure>

Building on these principles Dr. Subhasis Ray and Dr Bhanu Priya S transitioned to the hands-on components of the workshop. After installation and setup of MOOSE, the sessions introduced how to construct and simulate simplified neuronal models, define passive and active membrane properties, and explore ion channel behaviours.


Dr. Subhasis Ray guided participants through the implementation of biophysical neuron models, from the Nernst equation and membrane time constants to the Hodgkin–Huxley formalism. Using MOOSE, attendees explored interactive simulations tuning ion channel parameters, performing voltage clamp experiments, and visualising how electrical properties shape neuronal dynamics. Subsequent modules focused on modelling synaptic dynamics and intracellular signalling, enabling participants to simulate how synaptic inputs, biochemical pathways, and electrical properties interact to produce complex neuronal responses. Advanced sessions walked the students through Python-based workflows, demonstrating how multiscale neuronal systems, combining morphology, ion channels, synapses, and chemical kinetics, can be modelled.
<figure class="my-6">
	<img src="/assets/blogs/moose2025/anant_lecture.jpg" alt="Dr. Anant Jain delivering a lecture on Synapses, Plasticity, and Memory" class="mx-auto rounded" loading="lazy" />
	<figcaption class="text-sm text-center text-gray-500 mt-2">Dr. Anant Jain delivering a lecture on Synapses, Plasticity, and Memory.</figcaption>
</figure>


By the end of the workshop, participants saw glimpses of the scales of biological computation through neuronal architecture, synaptic communication, and reaction kinetics. This set the context for understanding neurons as electrical and biochemical computing units, an attempt towards developing a unified understanding of neuronal computation across electrical, chemical, and structural dimensions, along with practical experience implementing these ideas within the MOOSE environment. This multiscale perspective empowers researchers to simulate, test, and explore neural phenomena spanning milliseconds to hours, and from molecules to networks.


Together, these sessions built a conceptual and practical foundation for modelling neurons and understanding how biophysics and computation converge in the brain.


For more information on our past and future workshops, [click here](https://www.mooseneuro.org/workshops/).
<figure class="my-6">
	<img src="/assets/blogs/moose2025/Group_picture.jpeg" alt="MOOSE Workshop 2025 Group Picture" class="mx-auto rounded" loading="lazy" />
	<figcaption class="text-sm text-center text-gray-500 mt-2">MOOSE Workshop 2025 Group Picture</figcaption>
</figure>

To know more about MOOSE, follow our GitHub organisation page, and come be part of our open-source MOOSE [community](https://www.mooseneuro.org/community/). For any general queries or [discussions](https://github.com/orgs/MooseNeuro/discussions), feel free to reach out to our team on the GitHub discussion page or email us at this [address](mailto:mooseneuro@gmail.com). 

<!-- ![MOOSE Team in action a night before the workshop](/assets/blogs/moose2025/MOOSE_Team_in_action_a_night_before_workshop.jpg "MOOSE Team in action a night before the workshop")*MOOSE Team in action a night before the workshop* -->

Stay updated with the news [here](https://www.mooseneuro.org/news/). You can also follow us on [BlueSkySocial](https://bsky.app/profile/moosesim.bsky.social), [LinkedIn](https://www.linkedin.com/in/moose-neuro-simulator-064088315/), and [X](https://x.com/mooseneurosim). 

*Acknowledgements: I thank Gautham Dathatreyan (T.A. for our workshop) for helping us in summarising this workshop recap.*