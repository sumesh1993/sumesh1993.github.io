function injectConfig(name) {
  console.log("injecting config");
  const widget = document.getElementById(name);
  console.log(widget);
  const config = {
    backgroundColor: "red",
  };
  const str = JSON.stringify(config);
  widget.setAttribute("data-custom-props", str);
  widget.style.display = "block";
}

injectConfig("redirect");
