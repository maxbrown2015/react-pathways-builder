const pathways = [
  {
    name: "Law and Society",
    id: "law_society",
    color: "779f77",
    highlight: "abc9a5",
    description: ""    
  },
  {
    name: "Borders and Immigration",
    id: "border_immigration",
    color: "#33EC65",
    highlight: "#79f099",
    description: ""
  }, 
  {
    name: "Intellectual Life",
    id: "intellectual_cultural",
    color: "#61c0bf",
    highlight: "#b1f2f1",
    description: ""
  },
  {
    name: "Economic History",
    id: "economic_history",
    color: "#8db9f6",
    highlight: "#97baea",
    description: ""
  },
  {
    name: "War, Peace and Diplomacy",
    id: "war_peace",
    color: "#4169e1",
    highlight: "#85a0f0",
    description: ""
  },
  {
    name: "Religious Communities",
    id: "religious_communities",
    color: "#eddbff",
    highlight: "#f3e7ff",
    description: ""
  },
  {
    name: "Human Rights",
    id: "human_rights",
    color: "#c68642",
    highlight: "#e0ac69",
    description: ""
  },
  {
    name: "Slavery and Race",
    id: "slavery_race",
    color: "#f3cc07",
    highlight: "#f6e484",
    description: ""
  },
  {
    name: "Politics and Revolution",
    id: "politics_revolution",
    color: "#e77878",
    highlight: "#e58e8e",
    description: ""
  },
  {
    name: "Gender and Sexuality",
    id: "gender_sexuality",
    color: "#ff9454",
    highlight: "#f29f7a",
    description: ""
  },
]


const courses = [
  {
    number: "001",
    title: "test1",
    description: "",
    link: "",
    selectedPathways: ["gender_sexuality", "war_peace","politics_revolution"]
  },
  { 
  number: "002",
  title: "test2",
  description: "",
  link: "",
  selectedPathways: ["gender_sexuality", "war_peace","politics_revolution"]
  },
  { 
    number: "003",
    title: "test3",
    description: "",
    link: "",
    selectedPathways: ["gender_sexuality", "war_peace","politics_revolution"]
  }
]


export {courses, pathways};