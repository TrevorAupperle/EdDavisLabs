export type Funding = {
  name: string;
  names: string;
  startDate: Date;
  endDate: Date;
  funding: number;
};

export const currentFunding: Funding[] = [
  {
    name: "Hybridworks Chemical recycling of PET Project 1",
    names: "E.W. Davis and B. Beckingham",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2024-01-31"),
    funding: 34000,
  },
  {
    name: "REM Supplement to “EFRI E3P: Supercritical Extraction for the Elimination of End-of-Life Plastics (SCE3P)”",
    names: "E.W. Davis",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2023-04-30"),
    funding: 96303,
  },
  {
    name: "EFRI E3P: Supercritical Extraction for the Elimination of End-of-Life Plastics (SCE3P)",
    names: "E.W. Davis, R. Miao, Y. Peng, V. Davis, V.K. Ranagari",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2025-12-31"),
    funding: 1980029,
  },
  {
    name: "Promoting DoN STEM Careers via STEM Educational Activities",
    names: "E.W. Davis, J.M. Lakin, C. Seals",
    startDate: new Date("2021-05-15"),
    endDate: new Date("2024-05-14"),
    funding: 651511,
  },
  {
    name: "SSTEM Mechanical Engineering Transfer Students Success (SSTEM-METTS)",
    names: "M. Beidaghi, E.W. Davis, L. Taylor, R. Jackson, J. Fergus",
    startDate: new Date("2020-11-01"),
    endDate: new Date("2025-10-31"),
    funding: 999715,
  },
  {
    name: "Graduate Fellowships in Biomaterials Engineering and Biomanufacturing",
    names: "E. Lipke, A. David, E.W. Davis",
    startDate: new Date("2018-10-01"),
    endDate: new Date("2022-12-31"),
    funding: 960600,
  },
  {
    name: "RFE Design and Development: Framing Engineering as Community Activism for Values-Driven Engineering",
    names: "V.A. Davis, V. Davis, J. Lakin, E. Davis, D. Marghitu",
    startDate: new Date("2018-08-01"),
    endDate: new Date("2023-07-31"),
    funding: 342501,
  },
];

export const fundingHistory: Funding[] = [
  {
    name: "INNSTEM Challenge – Inspiring the Next Generation of Navy S&T Workforce with Emerging Maritime Challenges",
    names: "E.W. Davis, J. Lakin, and V. A. Davis",
    startDate: new Date("2018-08-01"),
    endDate: new Date("2022-12-31"),
    funding: 653993.88,
  },
  {
    name: "3D Printing of Biodegradable Drug Eluting Materials",
    names: "E.W. Davis",
    startDate: new Date("2020-08-01"),
    endDate: new Date("2021-05-01"),
    funding: 3250,
  },
  {
    name: "3D Printer Accessory that Prints Two Polymers While Being Able to Manipulate their Concentration",
    names: "E.W. Davis",
    startDate: new Date("2020-08-01"),
    endDate: new Date("2021-05-01"),
    funding: 3250,
  },
  {
    name: "Key Properties for SLA Resin Formulation and Application to Development of Biodegradable SLA Resins",
    names: "E.W. Davis",
    startDate: new Date("2019-08-01"),
    endDate: new Date("2020-05-01"),
    funding: 3250,
  },
  {
    name: "Anti-Fungal Coatings based on Halloysite Nanotubes",
    names: "E.W. Davis",
    startDate: new Date("2018-05-01"),
    endDate: new Date("2019-05-01"),
    funding: 6000,
  },
  {
    name: "Halloysite Incorporation into Creams, Lotions and Gels as a Reservoir for the Release of Therapeutic Agents",
    names: "E.W. Davis",
    startDate: new Date("2018-05-01"),
    endDate: new Date("2019-05-01"),
    funding: 6000,
  },
  {
    name: "Combating Resistant Staph. Infection with an Antibiotic-Producing Bacterium",
    names: "M. Liles, P. Panizzi, and E. W. Davis",
    startDate: new Date("2016-05-15"),
    endDate: new Date("2017-05-14"),
    funding: 90000,
  },
  {
    name: "In Vitro Fatigue of Flexor Digitorum Profundus and Superficialis",
    names: "R. Sesek and E. W. Davis",
    startDate: new Date("2016-05-15"),
    endDate: new Date("2017-05-14"),
    funding: 11666,
  },
  {
    name: "NUE: The Freshman Experience and Nanotechnology Solutions to Engineering Grand Challenges",
    names: "V.A. Davis, P.K. Raju, and E.W. Davis",
    startDate: new Date("2014-09-01"),
    endDate: new Date("2017-08-31"),
    funding: 196195,
  },
  {
    name: "Polymer Halloysite Formulation for Postnatal Methylmercury Delivery",
    names: "C. Newland and E.W. Davis",
    startDate: new Date("2014-07-01"),
    endDate: new Date("2016-06-30"),
    funding: 147000,
  },
  {
    name: "Synergistic Properties of Nanotube/Antibiotic Films",
    names: "E.W. Davis, V.A. Davis, and M. Liles",
    startDate: new Date("2014-05-01"),
    endDate: new Date("2016-04-30"),
    funding: 60000,
  },
  {
    name: "NSF Workshop on Additive Manufacturing for Civil Infrastructure Design and Construction",
    names: "Stephanie Paal and E.W. Davis",
    startDate: new Date("2017-07-13"),
    endDate: new Date("2017-07-14"),
    funding: 650,
  },
  {
    name: "Design Manufacture and Testing of Composite Car Wheels, Phase II",
    names: "E. W. Davis and Yasser Gowayed",
    startDate: new Date("2015-03-05"),
    endDate: new Date("2016-03-05"),
    funding: 80000,
  },
  {
    name: "Design and Fabrication of Device for the Continuous Application of Rotation and Monitoring of Angle of Rotation and Applied Torque",
    names: "E. W. Davis",
    startDate: new Date("2013-12-01"),
    endDate: new Date("2014-10-01"),
    funding: 10000,
  },
  {
    name: "REU Site for Micro/Nano-Structured Materials, Therapeutics and Devices",
    names: "M.E. Byrne, S. Duke, and E.W. Davis",
    startDate: new Date("2011-04-01"),
    endDate: new Date("2014-02-28"),
    funding: 18000,
  },
  {
    name: "NERAM: Dispersion of Carbon Nanotubes for Incorporation into Composite Materials",
    names: "Dr. B. Yuan and E.W. Davis",
    startDate: new Date("2011-04-01"),
    endDate: new Date("2012-03-30"),
    funding: 39333,
  },
  {
    name: "Workshop in Asphalt Construction Materials and Technology",
    names: "Donald Watson and E.W. Davis",
    startDate: new Date("2011-03-12"),
    endDate: new Date("2011-04-03"),
    funding: 5426,
  },
  {
    name: "Antimicrobial Coating Systems Based on Silver Nanorods",
    names: "E.W. Davis",
    startDate: new Date("2010-01-01"),
    endDate: new Date("2010-12-31"),
    funding: 100000,
  },
  {
    name: "Alternate Fuel Source Study – An Energy Efficient and Environmentally Friendly Approach",
    names: "Ralph Zee, Anton Schindler, and E.W. Davis",
    startDate: new Date("2008-09-01"),
    endDate: new Date("2010-09-01"),
    funding: 13125,
  },
  {
    name: "Environmental Effects on the Release of Tetracycline HCl from Halloysite Polymer Composite Films",
    names: "E.W. Davis",
    startDate: new Date("2009-05-01"),
    endDate: new Date("2009-08-01"),
    funding: 3000,
  },
  {
    name: "Antimicrobial Coating Systems Based on Silver Nanorods",
    names: "E.W. Davis",
    startDate: new Date("2008-08-01"),
    endDate: new Date("2009-07-01"),
    funding: 120000,
  },
];
