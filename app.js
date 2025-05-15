let toggler = document.getElementsByClassName("caret");
let parentArrow = document.getElementsByClassName("fa-caret-right")
let parentToggler = document.getElementsByClassName("parent-caret")
let childBranch = document.getElementsByClassName("child-container")

let childLeaf = document.getElementsByClassName("child-leaf")
let grandchildLeaf = document.getElementsByClassName("grandchild-leaf")

let i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

for (i = 0; i < parentToggler.length; i++) {
    parentToggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");

      if (icon.classList.contains("fa-caret-right")) {
        icon.classList.remove("fa-caret-right");
        icon.classList.add("fa-caret-down");
      } else {
        icon.classList.remove("fa-caret-down");
        icon.classList.add("fa-caret-right");
      }
    });
    
}

for (i = 0; i < childBranch.length; i++) {
    childBranch[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");

      const guxIcon = this.querySelector("gux-icon");

      if (guxIcon && guxIcon.getAttribute("icon-name") === "arrow-solid-right") {
        guxIcon.setAttribute("icon-name", "arrow-solid-down");
      } else if (guxIcon) {
        guxIcon.setAttribute("icon-name", "arrow-solid-right")
      }

    //   let container = this.querySelector(".child-sub_container");

    //   const allContainers = document.querySelectorAll(".child-sub_container");
    //   allContainers.forEach(item => {
    //     item.classList.remove("child-sub_container-selected");
    //   })

    //   if (container) {
    //     container.classList.add("child-sub_container-selected")
    //   }

    });
    
}

for (i = 0; i < childLeaf.length; i++) {
    childLeaf[i].addEventListener("click", function() {

      let childContainer = this.querySelector(".child-sub_leaf");

      const allContainers = document.querySelectorAll(".child-sub_leaf, .grandchild-sub_leaf");
      allContainers.forEach(item => {
        item.classList.remove("child-sub_container-selected");
      })

      if (childContainer) {
        childContainer.classList.add("child-sub_container-selected")
      }

    });
    
}

for (i = 0; i < grandchildLeaf.length; i++) {
    grandchildLeaf[i].addEventListener("click", function() {

      let grandchildContainer = this.querySelector(".grandchild-sub_leaf");

      const allContainers = document.querySelectorAll(".child-sub_leaf, .grandchild-sub_leaf");
      allContainers.forEach(item => {
        item.classList.remove("child-sub_container-selected");
        item.classList.remove("grandchild-sub_container-selected");
      })

      if (grandchildContainer) {
        grandchildContainer.classList.add("child-sub_container-selected")
      }

    });
    
}


