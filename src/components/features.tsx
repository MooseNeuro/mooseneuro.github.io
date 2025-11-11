import { useState } from "react";

const featuresData = [
  {
    name: "Python Interface",
    description:
      "Available as a Python module with predefined classes that map directly to biological components.",
    iconType: "python",
  },
  {
    name: "Cross-Domain Modelling",
    description:
      "Enables integrated simulations by supporting both biochemical and biophysical processes.",
    iconType: "domains",
  },
  {
    name: "Scalability",
    description:
      "Built-in solvers leverage optimised data structures and algorithms to ensure efficient model performance while preserving a biologically meaningful perspective for the user.",
    iconType: "code",
  },
  {
    name: "Multiscale Capability",
    description:
      "Enables seamless modelling and integration across different biological and physical scales, from detailed chemical computations in reaction-diffusion systems to complex multi-compartment neuron models.",
    iconType: "multiscale",
  },
  {
    name: "Format Support",
    description:
      "Handles multiple model formats, including SBML, NeuroML, and GENESIS (kkit, cell.p). Data can be saved as text, HDF5-based NSDF, or other formats compatible with NumPy arrays.",
    iconType: "format",
  },
  {
    name: "Rdesigneur",
    description:
      "Simplifies the model-building process by enabling rapid creation and testing of integration models using a library of prototype components.",
    iconType: "rdesigneur",
  },
  {
    name: "Mode Switching",
    description:
      "Seamlessly switches between deterministic and stochastic modes, enabling flexible modelling of biochemical systems.",
    iconType: "switch",
  },
];

const icons = {
  python: (
    <svg
      viewBox="0 -0.5 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          x1="12.9593594%"
          y1="12.0393928%"
          x2="79.6388325%"
          y2="78.2008538%"
          id="python-gradient-1"
        >
          <stop stopColor="#387EB8" offset="0%" />
          <stop stopColor="#366994" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="19.127525%"
          y1="20.5791813%"
          x2="90.7415328%"
          y2="88.4290372%"
          id="python-gradient-2"
        >
          <stop stopColor="#FFE052" offset="0%" />
          <stop stopColor="#FFC331" offset="100%" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z"
          fill="url(#python-gradient-1)"
        />
        <path
          d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z"
          fill="url(#python-gradient-2)"
        />
      </g>
    </svg>
  ),
  domains: (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#ffffff"
      className="w-6 h-6"
    >
      <rect x="8" y="40" width="12" height="12" />
      <rect x="40" y="40" width="12" height="12" />
      <rect x="24" y="8" width="12" height="12" />
      <polyline points="48 40 48 32 16 32 16 40" />
      <line x1="32" y1="32" x2="32" y2="24" />
    </svg>
  ),
  code: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffffff"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
    </svg>
  ),
  multiscale: (
    <svg
      width="256px"
      height="256px"
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      >
        <path d="m10.5 4.5v-3.978l-4-.022" />
        <path d="m4.5 10.523h-4v-4.023" />
      </g>
    </svg>
  ),
  format: (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  ),
  rdesigneur: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffffff"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
      />
    </svg>
  ),
  switch: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffffff"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  ),
};

export default function features() {
  return (
    <div className="bg-white py-10 sm:py-14" id="features">
      <div className="mx-auto w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl flex-initial transform-border font-semibold text-text-primary text-center p-2">
            MOOSE Features
          </h2>
        </div>
        <div className="mx-auto mt-2 w-full sm:mt-10 lg:mt-10">
          <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-bg-base p-5 w-full">
            {featuresData.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-black">
                  <div className="absolute top-0 left-0 flex bg-highlight-neon size-10 items-center justify-center rounded-lg">
                    {icons[feature.iconType]}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 font-normal text-base/7 text-text-primary">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
