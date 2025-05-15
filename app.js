let toggler = document.getElementsByClassName("caret");
let parentArrow = document.getElementsByClassName("fa-caret-right")
let parentToggler = document.getElementsByClassName("parent-caret")
let childToggler = document.getElementsByClassName("child-container")
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

      const icon = this.querySelector("i.fa") || this.querySelector(".fa-caret-right")

      if (icon.classList.contains("fa-caret-right")) {
        icon.classList.remove("fa-caret-right");
        icon.classList.add("fa-caret-down");
      } else {
        icon.classList.remove("fa-caret-down");
        icon.classList.add("fa-caret-right");
      }
    });
    
}

for (i = 0; i < childToggler.length; i++) {
    childToggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");

      const icon = this.querySelector("i.fa") || this.querySelector(".fa-caret-right")

      if (icon.classList.contains("fa-caret-right")) {
        icon.classList.remove("fa-caret-right");
        icon.classList.add("fa-caret-down");
      } else {
        icon.classList.remove("fa-caret-down");
        icon.classList.add("fa-caret-right");
      }
    });
    
}