const tasksData = [
    /* CST TASKS */
  /* {subject: "Client Side Technologies",
    days: [
      {
        day: "Day 1",
        tasks: [
          { name: "Intro Page", url: "html/day1/intro.html" },
          { name: "Tags Practice", url: "html/day1/tags.html" },
        ],
      },
      {
        day: "Day 2",
        tasks: [
          { name: "Forms", url: "html/day2/forms.html" },
        ],
      },
    ],
  }, */
  /* ES6 TASKS */
  /* {subject: "EchmaScript 6",
    days: [
      {
        day: "Day 1",
        tasks: [
          { name: "Selectors", url: "css/day1/selectors.html" },
        ],
      },
    ],
  }, */
  /* HTML5 TASKS */
  {subject: "HTML5 & CSS3",
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
          { name: "Paint Prototype", url: "02-HTML5/D03/drawing-app/index.html" },
          { name: "Video Player Prototype", url: "02-HTML5/D03/videos-player/index.html" },
          { name: "Drag and Drop simulation", url: "02-HTML5/D03/drag-drop/index.html" },
          { name: "Real time calculations", url: "02-HTML5/D03/real-time-calc/index.html" },
          { name: "Geo info Demo", url: "02-HTML5/D03/geo-info/index.html" },
          { name: "canvas test01 - draw on move", url: "02-HTML5/D03/canvas/moveDrawing.html" },
          { name: "canvas test02 - multiple squares", url: "02-HTML5/D03/canvas/multipleSquares.html" },
          { name: "canvas test03 - single square", url: "02-HTML5/D03/canvas/singleSquare.html" },
        ],
      },
    ],
  }
];

const container = document.getElementById("task-container");

tasksData.forEach(subject => {
  const subjectDiv = document.createElement("div");
  subjectDiv.classList.add("subject");

  const subjectTitle = document.createElement("h2");
  subjectTitle.textContent = subject.subject;
  subjectDiv.appendChild(subjectTitle);

  subject.days.forEach(day => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    const dayTitle = document.createElement("h3");
    dayTitle.textContent = day.day;
    dayDiv.appendChild(dayTitle);

    const taskList = document.createElement("div");
    taskList.classList.add("task-links");

    day.tasks.forEach(task => {
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