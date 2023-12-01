export type Class = {
  name: string;
  code: string;
  currentlyTeaching: boolean;
  description: string;
  lastTermTaught: string;
};

export const classes: Class[] = [
  {
    name: "Senior Design",
    code: "MATL 4980",
    currentlyTeaching: true,
    description:
      "Engineering design processes are explored from a materials focused perspective. The course deals with both technical and non-technical skills. Teams are challenged to design and produce solutions to real-world problems related to Materials.",
    lastTermTaught: "Spring 2023",
  },
  {
    name: "Engineering Materials Polymers",
    code: "MATL 3200/3201",
    currentlyTeaching: true,
    description:
      "An introduction to the synthesis, processing, structure, and properties of polymers and polymer matrix composites. Topics covered include polymerization, conformations, solutions, solid-state properties, degradation, additives, blends, copolymers, rheology, and polymers for advanced technologies. Course concepts are reinforced with lab activities.",
    lastTermTaught: "Spring 2023",
  },
  {
    name: "Particle Surface Interactions",
    code: "MATL 7970/7976",
    currentlyTeaching: false,
    description:
      "The course introduced the fundamentals of colloidal and surface science. Topics include 1) classification, structural characteristics, and preparation of colloids; 2) Brownian motion, osmotic pressure, translational diffusion; 3) surface and interfacial tension, contact angle; 4) charged interfaces, electrokinetic phenomena, and theory; 5) intermolecular and interparticle forces 6) fundamental equations such as Young, Young-Laplace, Kelvin, and Gibbs; and 7) applications in various fields.",
    lastTermTaught: "Summer 2022",
  },
  {
    name: "Biomedical Applications of Polymeric Materials",
    code: "MATL 5720/6720/6706",
    currentlyTeaching: false,
    description:
      "Covers applications of polymeric materials to medical sciences, implant requirements, effects on healing, service life, degradation of implanted materials, non-thrombogenic surfaces, tissue scaffolding, etc.",
    lastTermTaught: "Fall 2019",
  },
  {
    name: "Introduction to Materials Science",
    code: "MATL 2100",
    currentlyTeaching: false,
    description:
      "Regularly taught both Fall and Spring sections from Spring 2015 to Spring 2022.",
    lastTermTaught: "Spring 2022",
  },
  {
    name: "Polymer Processing Lab",
    code: "PFEN 5200",
    currentlyTeaching: false,
    description:
      "Developed lab to provide students hands-on experience with the general principles of polymer melt processing labs, including twin screw compounding, injection molding of mechanical test parts and embossed coasters, melt spinning of mono- and multifilament with a single screw in line with a gear pump, and melt film casting.",
    lastTermTaught: "Spring 2015",
  },
  {
    name: "Statics",
    code: "ENGR 2050",
    currentlyTeaching: false,
    description:
      "Integrated active learning and 'flipped classroom' concepts into this course and ENGR 2070.",
    lastTermTaught: "Spring 2015",
  },
  {
    name: "Mechanics of Materials",
    code: "ENGR 2070",
    currentlyTeaching: false,
    description:
      "Consistently receive high reviews based on using pedagogy described under ENGR 2050.",
    lastTermTaught: "Spring 2015",
  },
  {
    name: "Transport I",
    code: "CHEN 2610",
    currentlyTeaching: false,
    description:
      "Received teaching evaluations well above the chemical engineering departmental average.",
    lastTermTaught: "Summer 2014",
  },
  {
    name: "Computer-Aided Chemical Engineering",
    code: "CHEN 3600",
    currentlyTeaching: false,
    description: "Received highly favorable teaching evaluations.",
    lastTermTaught: "Summer 2014",
  },
  {
    name: "Introduction to Polymer and Fiber Engineering",
    code: "ENGR 1110",
    currentlyTeaching: false,
    description:
      "Received highly favorable teaching evaluations. Introduced job change orders to design projects.",
    lastTermTaught: "Fall 2012",
  },
  {
    name: "Polymer and Fiber Engineering Department's seminar series",
    code: "PFEN 7950 / ITAS 8950 Graduate Seminar / Industrial Issues",
    currentlyTeaching: false,
    description:
      "Co-developed and taught from Spring 2011 to Fall 2013. The two main goals of this course were increasing the breadth of concepts graduate students are exposed to by inviting well-known researchers to give talks, and improving graduate student communication skills",
    lastTermTaught: "Fall 2013",
  },
];
