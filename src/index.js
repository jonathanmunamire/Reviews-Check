import _ from 'lodash';
import './style.css';

const reviews = [
  {
    id: 1,
    name: "Rick Novak",
    job: "Software Architect",
    img:
      "https://t4.ftcdn.net/jpg/02/44/06/65/240_F_244066556_Ne4xaSqMpadwspFR3jVUu88IPuTsVBFj.jpg",
    text:
      "Use alignments (left margin), proper white space. Also ensure that code block starting point and ending point are easily identifiable.",
  },
  {
    id: 2,
    name: "Susan Connor",
    job: "Web Designer",
    img:
      "https://t4.ftcdn.net/jpg/03/30/25/97/240_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg",
    text:
      "Code should fit in the standard 14 inch laptop screen.  There shouldn't be a need to scroll horizontally to view the code. In a 21 inch monitor, other windows (toolbox, properties etc.) can be opened while modifying code, so always write code keeping in view a 14 inch monitor.",
  },
  {
    id: 3,
    name: "Margaret Alderman",
    job: "Intern Software Developer",
    img:
      "https://t4.ftcdn.net/jpg/04/13/55/45/240_F_413554591_BQzOaigFwRTgpoXU8WLY6hhQZYzijQek.jpg",
    text:
      "Remove the commented code as this is always a blocker, while going through the code. Commented code can be obtained from Source Control (like SVN), if required.",
  },
  {
    id: 4,
    name: "Ronald Barr",
    job: "Engineering Manager",
    img:
      "https://t3.ftcdn.net/jpg/02/90/23/94/240_F_290239441_1BJ83CkIqjHbd1wmVi0LT5Y4FqsNoSZg.jpg",
    text:
      "The application should require the least amount of effort to support in near future. It should be easy to identify and fix a defect.",
  },
  {
    id: 5,
    name: "Bill Anderson",
    job: "Chief Digital Officer",
    img:
      "https://t4.ftcdn.net/jpg/03/80/58/23/240_F_380582318_5lJ52eVLcePphpM4pMHdew3wgopfhQSc.jpg",
    text:
      "The code should be easy to test. Refactor into a separate function (if required). Use interfaces while talking to other layers, as interfaces can be mocked easily. Try to avoid static functions, singleton classes as these are not easily testable by mocks.",
  },
  {
    id: 6,
    name: "Marie Broadbet",
    job: "Software Architect",
    img:
      "https://t3.ftcdn.net/jpg/04/00/16/60/240_F_400166074_TS49k0EK8FN7YjG3CJCcad3UcZb3Rlbk.jpg",
    text:
      " Code should be self-explanatory. Get a feel of story reading, while going through the code. Use appropriate name for variables, functions and classes. If you are taking more time to understand the code, then either code needs refactoring or at least comments have to be written to make it clear.",
  },
  {
    id: 7,
    name: "Roger Lum",
    job: "Technical Lead",
    img:
      "https://t4.ftcdn.net/jpg/02/92/94/57/240_F_292945749_Wt1yBYA5mHjo3IXUaBVecIHWknR4fHh2.jpg",
    text:
      "Provide support to log the flow of control, parameter data and exception details to find the root cause easily. If you are using Log4Net like component then add support for database logging also, as querying the log table is easy.",
  },
  {
    id: 8,
    name: "Marlene Donahue",
    job: "Innovation Officer",
    img:
      "https://t4.ftcdn.net/jpg/02/60/03/61/240_F_260036118_AUYppgsODQeTCnbu0OXGNDXB8EVzpxKq.jpg",
    text:
      "Keep the configurable values in place (XML file, database table) so that no code changes are required, if the data is changed frequently.",
  },
  {
    id: 9,
    name: "Jeff Johnson",
    job: "Software Developer",
    img:
      "https://t4.ftcdn.net/jpg/00/88/53/89/240_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg",
    text:
      "Do not place more than one responsibility into a single class or function, refactor into separate classes and functions.",
  },
  {
    id: 10,
    name: "Melvin Forbis",
    job: "Engineering Manager",
    img:
      "https://t3.ftcdn.net/jpg/03/01/78/38/240_F_301783868_jZIHmMNzNo0bxhBNPg6NxyZX5AL5SQS1.jpg",
    text:
      "The child class should not change the behavior (meaning) of the parent class. The child class can be used as a substitute for a base class.",
  },
];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded',()=>{
  showPerson();
})

function showPerson (){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener('click', ()=>{
  currentItem--
  if(currentItem < 0){
    currentItem = reviews.length -1;
  }
  showPerson();
})

nextBtn.addEventListener('click', ()=>{
  currentItem++
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson();
})

randomBtn.addEventListener('click', ()=>{
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
})

