export type Student = {
  name: string;
  undergraduate: boolean;
  startSemester: string;
  endSemester: string;
  title: string;
  description: string;
};

export const graduateStudents: Student[] = [
  {
    name: "Jennifer Denis",
    undergraduate: false,
    startSemester: "Spring 2022",
    endSemester: "Present",
    title: "M.S. Thesis Materials Engineering",
    description: "AM fatigue properties of Titanium alloys",
  },
  {
    name: "Leyton Janowski",
    undergraduate: false,
    startSemester: "Summer 2021",
    endSemester: "Present",
    title: "Ph. D. candidate Materials Engineering",
    description:
      "Effect of Mechanical Loads on the degradation of additively manufactured Controlled Release Implants",
  },
  {
    name: "Emily Guo",
    undergraduate: false,
    startSemester: "Fall 2022",
    endSemester: "Present",
    title: "Ph.D. candidate Materials Engineering",
    description: "Cell Tribology",
  },
  {
    name: "Marshal Smith",
    undergraduate: false,
    startSemester: "Fall 2022",
    endSemester: "Present",
    title: "Ph.D. candidate Materials Engineering",
    description: "Recycling of Multilayer Food Packaging",
  },
  {
    name: "Jack Pate",
    undergraduate: false,
    startSemester: "Fall 2022",
    endSemester: "Present",
    title: "M.S. non-Thesis Materials Engineering",
    description: "",
  },
  {
    name: "Haotian Wu",
    undergraduate: false,
    startSemester: "Graduated Fall 2022",
    endSemester: "",
    title: "Ph.D. Materials Engineering",
    description:
      "Study on Morphology Effect on Polydopamine-based Adsorbents for Dye Removal",
  },
  {
    name: "Yuzhe Sun",
    undergraduate: false,
    startSemester: "Graduated Summer 2021",
    endSemester: "",
    title: "Ph.D. Materials Engineering",
    description:
      "Biodegradable Polymer Halloysite Composites for Wound Healing",
  },
  {
    name: "Duncan Campbell",
    undergraduate: false,
    startSemester: "Summer 2020",
    endSemester: "Fall 2020",
    title: "Ph.D. candidate Materials Engineering",
    description: "Additive Manufacturing of Biodegradable Gradient Structures",
  },
  {
    name: "Tobias Donnell",
    undergraduate: false,
    startSemester: "Spring 2019",
    endSemester: "Fall 2019",
    title: "Ph.D. candidate Materials Engineering",
    description: "Additive Manufacturing of Biodegradable Substrates",
  },
  {
    name: "Junkai Huang",
    undergraduate: false,
    startSemester: "Graduated: December 2017",
    endSemester: "",
    title: "MS, Materials Engineering",
    description:
      "Research of Shape Memory Behavior of Gold/ Polymer Composites by Photothermal Activation",
  },
  {
    name: "Christopher Ward",
    undergraduate: false,
    startSemester: "Graduated: Summer 2013",
    endSemester: "",
    title: "Ph.D. Polymer and Fiber Engineering",
    description:
      "Effects of Dispersion on Controlled Release from Halloysite Polymer Nanocomposites",
  },
  {
    name: "Srichandana Nandikonda",
    undergraduate: false,
    startSemester: "Graduated: Summer 2010",
    endSemester: "",
    title: "M.S. Polymer and Fiber Engineering",
    description: "Microwave Synthesis of Silver Nanowires",
  },
  {
    name: "Brejender Sing",
    undergraduate: false,
    startSemester: "Graduated: Fall 2009",
    endSemester: "",
    title:
      "M.ChE. Property Enhancement of Organic – Inorganic Coatings Based on Latex / Sol Systems",
    description: "",
  },
];

export const undergraduateStudents: Student[] = [
  {
    name: "Samin Parvez",
    undergraduate: true,
    startSemester: "Summer 2023",
    endSemester: "",
    title: "Undergraduate Researcher",
    description:
      "How Oscillatory Loading Impacts Degradation Rates in Additively Manufactured Hydrogels",
  },
  {
    name: "Steven Porterfield",
    undergraduate: true,
    startSemester: "Summer 2019",
    endSemester: "Present",
    title: "Undergraduate Researcher",
    description: "3D Printing of Biodegradable Drug Eluting Materials",
  },
  {
    name: "Clavin Dulaney",
    undergraduate: true,
    startSemester: "Fall 2020",
    endSemester: "Spring 2021",
    title: "Undergraduate Researcher",
    description: "3D Printer Accessory for SLA Printing of Gradient Structures",
  },
  {
    name: "Helen Steeve",
    undergraduate: true,
    startSemester: "Fall 2018",
    endSemester: "Present",
    title: "Undergraduate Researcher",
    description: "Stereolithography of Biodegradable Materials",
  },
  {
    name: "Anna Vesico",
    undergraduate: true,
    startSemester: "Fall 2017",
    endSemester: "Present",
    title: "Auburn University Undergraduate Research Fellow",
    description: "Controlled Release from Halloysite Based Topical Creams",
  },
  {
    name: "Liamn Wood",
    undergraduate: true,
    startSemester: "Fall 2017",
    endSemester: "Present",
    title: "Auburn University Undergraduate Research Fellow",
    description: "Antimicrobial Paints",
  },
  {
    name: "Sean Bittner",
    undergraduate: true,
    startSemester: "Fall 2014",
    endSemester: "Spring 2016",
    title: "Honors Thesis",
    description:
      "Encapsulation and Controlled Release of Antibiotics: Halloysite-Polymer Composites as a Novel Drug Delivery Vehicle",
  },
  {
    name: "Troy Peck and Shane Furlong",
    undergraduate: true,
    startSemester: "Spring 2013",
    endSemester: "",
    title: "Senior Design Project Advisor",
    description: "Quality Improvement of Intake Bell Production",
  },
  {
    name: "Alicia Eustes",
    undergraduate: true,
    startSemester: "Summer 2012",
    endSemester: "",
    title: "Research Experience for Undergraduates Program",
    description:
      "Inductive Heating of Gold Nanorods to Stimulate a Shape Memory Effect in Polymers",
  },
  {
    name: "Sina Pollmeier",
    undergraduate: true,
    startSemester: "Summer 2012",
    endSemester: "",
    title: "Visiting Summer Scholar",
    description:
      "Halloysite Fiber Production: Effect of Throughput on tensile properties",
  },
  {
    name: "Tamara Metzger",
    undergraduate: true,
    startSemester: "Summer 2012",
    endSemester: "",
    title: "Visiting Summer Scholar",
    description: "Halloysite PP compounding: Effect of Processing Conditions",
  },
  {
    name: "Morgan Bennett and Chloe Whittaker",
    undergraduate: true,
    startSemester: "Spring 2012",
    endSemester: "",
    title: "Senior Design Project Advisor",
    description: "Raw Material Conversion in Two Color Injection Process",
  },
  {
    name: "Robert Tonndorf",
    undergraduate: true,
    startSemester: "Fall 2011",
    endSemester: "",
    title: "Visiting Summer Scholar",
    description: "UV/Vis Responsive Shape Memory Polymers",
  },
  {
    name: "Megan DeWitt",
    undergraduate: true,
    startSemester: "Summer 2011",
    endSemester: "",
    title: "Research Experience for Undergraduates Program",
    description: "Halloysite Nanotubes in Controlled Release Drug Delivery",
  },
  {
    name: "Alina Braun",
    undergraduate: true,
    startSemester: "Spring 2011",
    endSemester: "Summer 2011",
    title: "Visiting Summer Scholar",
    description: "Halloysite PP Nanocomposite fibers",
  },
  {
    name: "Inga Reichert",
    undergraduate: true,
    startSemester: "Spring 2010",
    endSemester: "Fall 2010",
    title: "Visiting Summer Scholar",
    description: "Halloysite PP Nanocomposite Processing",
  },
  {
    name: "Christopher Ward",
    undergraduate: true,
    startSemester: "Spring 2008",
    endSemester: "Spring 2010",
    title: "Auburn University Undergraduate Research Fellow",
    description: "Controlled Release from Halloysite",
  },
  {
    name: "James Smith",
    undergraduate: true,
    startSemester: "Summer 2010",
    endSemester: "",
    title: "",
    description: "Controlled Release from Halloysite",
  },
  {
    name: "Daniel Slater",
    undergraduate: true,
    startSemester: "Summer 2010",
    endSemester: "",
    title: "",
    description: "Silver Antimicrobials",
  },
  {
    name: "Goldie Darr",
    undergraduate: true,
    startSemester: "Summer 2008",
    endSemester: "Spring 2009",
    title: "",
    description:
      "Enhanced Latex Paint Systems through the Addition of SiO2 Nanospheres",
  },
  {
    name: "Shang Song",
    undergraduate: true,
    startSemester: "Summer 2008",
    endSemester: "",
    title: "Research Experience for Undergraduates Program",
    description:
      "Controlled Release of Tetracycline from Halloysite PVOH Nanocomposites",
  },
];

export const professor = {
  name: "Edward W. Davis",
  degrees: [
    {
      type: "Ph.D",
      school: "The University of Akron",
      year: 1997,
      major: "Department of Chemical Engineering",
      advisor: "Michael Cheung",
      dissertation:
        "Polymerized Bicontinuous Microemulsions as Controlled Release Devices",
    },
    {
      type: "M.S.E",
      school: "Tulane University",
      year: 1993,
      major: "Department of Chemical Engineering",
      advisor: "Victor Law",
      thesis:
        "Beach Erosion Mediation Using Beach Cones and Modeling of Beach Topological Changes Due to Wind Generated Waves",
    },
    {
      type: "B.S.E",
      school: "Tulane University",
      year: 1990,
      major: "Department of Biomedical Engineering",
    },
  ],
  description:
    "Dr. Edward Davis specializes in natural nanomaterials, nanocomposites processing, and mechanical testing. He earned his undergraduate in biomedical engineering and master's in chemical engineering at Tulane, with a Ph.D. from the University of Akron on polymerizable microemulsions. He worked at Shell Chemicals, Belgium, researching polymer nanocomposite systems and later at EVAL, developing high barrier plastics. Joining Auburn in 2007, he transitioned to his current role in 2015. Davis has led diverse research projects and contributed significantly to Auburn's engineering education.",
};
