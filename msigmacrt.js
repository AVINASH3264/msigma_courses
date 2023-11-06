// JavaScript code to fetch and display course data
const courseList = document.getElementById("courses");

fetch("https://api.msigma.in/btech/v2/branches/")
  .then((response) => response.json())
  .then((data) => {
    data.branches.forEach((course) => {
      const listItem = document.createElement("div");
      listItem.classList.add("main_container");
      const diffColor = getRandomColor();
      const listhead = document.createElement("h3");
      listhead.classList.add("main_head");
      listhead.style.color = diffColor;
      const listpara = document.createElement("p");
      listpara.classList.add("para");
      const listbutton = document.createElement("button");
      listbutton.textContent = "APPLY";
      listbutton.style.color = diffColor;
      listbutton.style.borderColor = diffColor;
      const listpara1 = document.createElement("p");
      listpara1.classList.add("para1");
      listpara1.textContent = "Fee starting at ₹799 per subject";

      listbutton.classList.add("main_btn");
      listhead.textContent = course.short;
      listpara.textContent = course.name;
      courseList.appendChild(listItem);
      listItem.appendChild(listhead);
      listItem.appendChild(listpara);
      listItem.appendChild(listbutton);
      listItem.appendChild(listpara1);
    });
  })
  .catch((error) => {
    console.error("Error fetching course data:", error);
  });
//random colour generate
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
