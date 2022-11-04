import _ from 'lodash';
import './style.css';

const reviews = [
  {
    id: 1,
    name: "Rick Novak",
    job: "Software Architect",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Use alignments (left margin), proper white space. Also ensure that code block starting point and ending point are easily identifiable.",
  },
  {
    id: 2,
    name: "Susan Connor",
    job: "Web Designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Code should fit in the standard 14 inch laptop screen.  There shouldn't be a need to scroll horizontally to view the code. In a 21 inch monitor, other windows (toolbox, properties etc.) can be opened while modifying code, so always write code keeping in view a 14 inch monitor.",
  },
  {
    id: 3,
    name: "Margaret Alderman",
    job: "Intern Software Developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Remove the commented code as this is always a blocker, while going through the code. Commented code can be obtained from Source Control (like SVN), if required.",
  },
  {
    id: 4,
    name: "Ronald Barr",
    job: "Engineering Manager",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "The application should require the least amount of effort to support in near future. It should be easy to identify and fix a defect.",
  },
  {
    id: 5,
    name: "Bill Anderson",
    job: "Chief Digital Officer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "The code should be easy to test. Refactor into a separate function (if required). Use interfaces while talking to other layers, as interfaces can be mocked easily. Try to avoid static functions, singleton classes as these are not easily testable by mocks.",
  },
  {
    id: 6,
    name: "Marie Broadbet",
    job: "Software Architect",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      " Code should be self-explanatory. Get a feel of story reading, while going through the code. Use appropriate name for variables, functions and classes. If you are taking more time to understand the code, then either code needs refactoring or at least comments have to be written to make it clear.",
  },
  {
    id: 7,
    name: "Roger Lum",
    job: "Technical Lead",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Provide support to log the flow of control, parameter data and exception details to find the root cause easily. If you are using Log4Net like component then add support for database logging also, as querying the log table is easy.",
  },
  {
    id: 8,
    name: "Marlene Donahue",
    job: "Innovation Officer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Keep the configurable values in place (XML file, database table) so that no code changes are required, if the data is changed frequently.",
  },
  {
    id: 9,
    name: "Jeff Johnson",
    job: "Software Developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Do not place more than one responsibility into a single class or function, refactor into separate classes and functions.",
  },
  {
    id: 10,
    name: "Melvin Forbis",
    job: "Engineering Manager",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
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

