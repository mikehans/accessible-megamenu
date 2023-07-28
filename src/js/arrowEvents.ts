function menuItemArrowLeft(ele: Element) {
  console.group("ArrowLeft");

  var prev = ele.previousElementSibling as HTMLElement;
  console.log("prev", prev);
  if (prev) {
    var a = prev.querySelector("[role=menuitem]") as HTMLElement;
    a.focus();
  }
  console.groupEnd();
}

function menuItemArrowRight(ele: Element) {
  console.group("ArrowRight");

  var next = ele.nextElementSibling as HTMLElement;
  console.log("next", next);
  if (next != null) {
    var a = next.querySelector("[role=menuitem]") as HTMLElement;
    a.focus();
  }
  console.groupEnd();
}

export { menuItemArrowLeft, menuItemArrowRight };
