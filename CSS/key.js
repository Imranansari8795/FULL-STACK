function handleInput(textbox) {
    if (textbox.value.length > 0) {
      textbox.classList.remove("red-bg");
      textbox.classList.add("green-bg");
    } else {
      textbox.classList.remove("green-bg");
      textbox.classList.add("red-bg");
    }
  }

  document.getElementById("textbox1").addEventListener("blur", function() {
    if (this.value.length === 0) {
      this.classList.remove("green-bg");
      this.classList.add("red-bg");
    }
  });

  document.getElementById("textbox2").addEventListener("blur", function() {
    if (this.value.length === 0) {
      this.classList.remove("green-bg");
      this.classList.add("red-bg");
    }
  });


  

