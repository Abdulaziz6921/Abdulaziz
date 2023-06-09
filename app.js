let dragAndDrop = () => {
  let items = document.querySelectorAll(".drag");
  let box = document.getElementById("box2");

  //   item chosen for drag&drop
  let chosenItem = [];

  //   showing that item is being dragged
  items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      setTimeout(() => {
        e.target.classList.add("hide");
        chosenItem = item;
      }, 50);
    });

    item.addEventListener("dragend", (e) => {
      setTimeout(() => {
        e.target.classList.remove("hide");
      }, 150);
    });
  });

  //   showing item is over dropping area
  box.addEventListener("dragenter", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  //   item is being dropped
  box.addEventListener("drop", () => {
    box.appendChild(chosenItem);
    box.classList.remove("hovered");

    setTimeout(() => {
      // showing success message
      box.classList.add("successShadow");

      let div = document.createElement("div");
      let p = document.createElement("p");
      let body = document.body;

      div.classList.add("success");
      p.innerText = "You have dropped item successfully !";
      body.appendChild(div);
      div.appendChild(p);

      setTimeout(() => {
        body.removeChild(div);
        box.classList.remove("successShadow");
      }, 1000);

      //   showing reset button
      let resetBtn = document.createElement("button");
      resetBtn.classList.add("resetBtn");
      resetBtn.innerText = "Reset";
      body.appendChild(resetBtn);
      resetBtn.addEventListener("click", () => {
        location.reload();
      });
    }, 300);
  });
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
};

dragAndDrop();
