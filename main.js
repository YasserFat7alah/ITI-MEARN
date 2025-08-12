window.addEventListener("load", () => {
  window.scrollTo(0, document.documentElement.scrollHeight);
});

const tasksData = [
  /* CST TASKS */
  {
    subject: "Client Side Technologies: HTML4 - CSS2 - JavaScript ",
    days: [
      {
        day: "Day 01: HTML4 Only ",
        tasks: [
          { name: "Task 01", url: "00-CST/CSTD01/1.html" },
          { name: "Task 02", url: "00-CST/CSTD01/2.html" },
          { name: "Task 03", url: "00-CST/CSTD01/3.html" },
          { name: "Task 04", url: "00-CST/CSTD01/4.html" },
          { name: "Task 05", url: "00-CST/CSTD01/5.html" },
        ],
      },
      {
        day: "Day 02: HTML4 Only ",
        tasks: [
          { name: "Task 02", url: "00-CST/CSTD02/2.html" },
          { name: "Task 03", url: "00-CST/CSTD02/3.html" },
          { name: "Task 04", url: "00-CST/CSTD02/4.html" },
          { name: "Task 05", url: "00-CST/CSTD02/5.html" },
          { name: "Task 06", url: "00-CST/CSTD02/6.html" },
          { name: "Task 07", url: "00-CST/CSTD02/7.html" },
        ],
      },
      {
        day: "Day 03:",
        tasks: [
          { name: "Task 01", url: "00-CST/CSTD03/1.html" },
          { name: "Task 02", url: "00-CST/CSTD03/2.html" },
          { name: "Task 03", url: "00-CST/CSTD03/3.html" },
          { name: "Task 04", url: "00-CST/CSTD03/4.html" },
          { name: "Task 05", url: "00-CST/CSTD03/5.html" },
          { name: "Task 06", url: "00-CST/CSTD03/6.html" },
          { name: "Bonus Task", url: "00-CST/CSTD03/Bonus/1.1.html" },
        ],
      },
      {
        day: "Day 04",
        tasks: [
          { name: "Task 01", url: "00-CST/CSTD04/1.1.html" },
          { name: "Task 02", url: "00-CST/CSTD04/1.2.html" },
          { name: "Task 03", url: "00-CST/CSTD04/2.html" },
          { name: "Task 04", url: "00-CST/CSTD04/3.html" },
          { name: "Task 05", url: "00-CST/CSTD04/4.1.html" },
          { name: "Task 06", url: "00-CST/CSTD04/4.2.html" },
          { name: "Task 07", url: "00-CST/CSTD04/4.3.html" },
        ],
      },
      {
        day: "Day 05",
        tasks: [
          { name: "Task 01", url: "00-CST/CSTD05/1.html" },
          { name: "Task 02", url: "00-CST/CSTD05/2-3-bottle.html" },
          { name: "Task 03", url: "00-CST/CSTD05/4.html" },
          { name: "Task 04", url: "00-CST/CSTD05/5.html" },
          { name: "Task 05", url: "00-CST/CSTD05/6.1.html" },
          { name: "Task 06", url: "00-CST/CSTD05/6.2.html" },
        ],
      },
      {
        day: "Day 06",
        tasks: [
          { name: "Task 01", url: "00-CST/CSTD06/1/index.html" },
          { name: "Task 02", url: "00-CST/CSTD06/2/2.html" },
          { name: "Task 03", url: "00-CST/CSTD06/3/index.html" },
          { name: "Task 04", url: "00-CST/CSTD06/4/index.html" },
          {
            name: "Task 05: Bottle Game",
            url: "00-CST/CSTD06/BottleGame/index.html",
          },
          {
            name: "Task 06: Simple Form Validation",
            url: "00-CST/CSTD06/RegForm/index.html",
          },
        ],
      },
      {
        day: "Day 07",
        tasks: [
          { name: "News List", url: "00-CST/CSTD07/NewsList/index.html" },
          {
            name: "Registration Form Enhancement using cookies",
            url: "00-CST/CSTD07/Registration(cookies)/index.html",
          },
          {
            name: "dynamic style using radio buttons",
            url: "00-CST/CSTD07/TextStyle/index.html",
          },
          { name: "Todo List", url: "00-CST/CSTD07/TodoList/index.html" },
        ],
      },
      {
        day: "Day 08",
        tasks: [
          {
            name: "Registration Form using local storage",
            url: "00-CST/CSTD08/formValidation/index.html",
          },
          { name: "News List", url: "00-CST/CSTD08/newsList/index.html" },
        ],
      },
    ],
  },

  /* ES6 TASKS */
  {
    subject: "Introduction to EchmaScript6",
    days: [
      {
        day: "Day 01: Inheritance - Make sure to check console! ",
        tasks: [
          { name: "Task 01", url: "01-ES6/ES601/1.html" },
          { name: "Task 02", url: "01-ES6/ES601/2-enhanced.html" },
          { name: "Task 03", url: "01-ES6/ES601/3.html" },
        ],
      },
      {
        day: "Day 02: Make sure to check Source Code! ",
        tasks: [{ name: "Modules in ES6", url: "01-ES6/ES602/index.html" }],
      },
      {
        day: "Day 03",
        tasks: [{ name: "Task 01: AJAX", url: "01-ES6/ES603/1/idex.html" }],
      },
    ],
  },

  /* HTML5 TASKS */
  {
    subject: "HTML5 & CSS3",
    days: [
      {
        day: "Day 01",
        tasks: [
          { name: "Animation Task", url: "02-HTML5/D01/animation/index.html" },
          { name: "Gallery", url: "02-HTML5/D01/gallery/index.html" },
        ],
      },
      {
        day: "Day 02",
        tasks: [
          { name: "Flexbox task", url: "02-HTML5/D02/flex-box/index.html" },
          { name: "Grid task", url: "02-HTML5/D02/grid-layout/index.html" },
        ],
      },
      {
        day: "Day 03",
        tasks: [
          {
            name: "Paint Prototype",
            url: "02-HTML5/D03/drawing-app/index.html",
          },
          {
            name: "Video Player Prototype",
            url: "02-HTML5/D03/videos-player/index.html",
          },
          {
            name: "Drag and Drop simulation",
            url: "02-HTML5/D03/drag-drop/index.html",
          },
          {
            name: "Real time calculations",
            url: "02-HTML5/D03/real-time-calc/index.html",
          },
          { name: "Geo info Demo", url: "02-HTML5/D03/geo-info/index.html" },
          {
            name: "canvas test01 - draw on move",
            url: "02-HTML5/D03/canvas/moveDrawing.html",
          },
          {
            name: "canvas test02 - multiple squares",
            url: "02-HTML5/D03/canvas/multipleSquares.html",
          },
          {
            name: "canvas test03 - single square",
            url: "02-HTML5/D03/canvas/singleSquare.html",
          },
        ],
      },
    ],
  },
  /* ADVANCEDJS TASKS */
  {
    subject: "Advanced JavaScript",
    days: [
      {
        day: "Day 01",
        tasks: [
          {
            name: "Data Table",
            url: "03-AdvancedJS/D01/Data-Table/index.html",
          },
        ],
      },
      {
        day: "Day 02: Inheritance & prototype chain - Code Demos only!",
        tasks: [
          {
            name: "Task 01: Pesaude classical Inheritance",
            url: "03-AdvancedJS/D01/D02/Task01/person.html",
          },
          {
            name: "Task 02: Prototypal Inheritance",
            url: "03-AdvancedJS/D01/D02/Task01/shape.html",
          },
          {
            name: "Task 02: Enhanced Prototypal Inheritance",
            url: "03-AdvancedJS/D01/D02/Task02/bank.html",
          },
        ],
      },
      {
        day: "Day 03 - AJAX in Detail",
        tasks: [
          {
            name: "Fetching Data From Different Locations",
            url: "03-AdvancedJS/D03/data.html",
          },
        ],
      },
    ],
  },
  /* RWD TASKS */
  {
    subject: "Responsive Web Design",
    days: [
      {
        day: "Day 01: Introduction to SASS",
        tasks: [{ name: "Random Demos using SASS", url: "04-SASS/index.html" }],
      },
      {
        day: "Day 02: Flexbox - Grid - Media Queries - Relative Units in CSS3",
        tasks: [
          {
            name: "Task 01: Simple Layout using Grid",
            url: "05-RWD/D01/grid-layout/index.html",
          },
          {
            name: "Task 02: E-comerece Responsive Landing Page",
            url: "05-RWD/D01//landing-page/index.html",
          },
        ],
      },
      {
        day: "Day 03 - Introduction to Bootstrap 5",
        tasks: [
          { name: "Form Validation", url: "05-RWD/D02-BS/Form/index.html" },
          {
            name: "Responsive Cards Layout",
            url: "05-RWD/D02-BS/ResponsiveLayout/index.html",
          },
        ],
      },
    ],
  },
];

const container = document.getElementById("task-container");

tasksData.forEach((subject) => {
  const subjectDiv = document.createElement("div");
  subjectDiv.classList.add("subject");

  const subjectTitle = document.createElement("h2");
  subjectTitle.textContent = subject.subject;
  subjectDiv.appendChild(subjectTitle);

  subject.days.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    const dayTitle = document.createElement("h3");
    dayTitle.textContent = day.day;
    dayDiv.appendChild(dayTitle);

    const taskList = document.createElement("div");
    taskList.classList.add("task-links");

    day.tasks.forEach((task) => {
      const taskLink = document.createElement("a");
      taskLink.href = task.url;
      taskLink.textContent = task.name;
      taskLink.target = "_blank";
      taskList.appendChild(taskLink);
    });

    dayDiv.appendChild(taskList);
    subjectDiv.appendChild(dayDiv);
  });

  container.appendChild(subjectDiv);
});

let notes = document.getElementById("note");
let close = document.getElementById("close");

close.addEventListener("click", () => {
  notes.style.display = "none";
});
