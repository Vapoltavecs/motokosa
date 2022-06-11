const anchors = document.querySelectorAll("*[data-scroll]");

console.log(anchors)

const scrollToAnchor = (e) => {
  e.preventDefault();
  const blockId = e.target.getAttribute("data-scroll")
  const neededBlock = document.getElementById(blockId);
  neededBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

anchors.forEach((el) => { if(el.getAttribute("data-scroll") !== "@@custom") el.addEventListener("click", scrollToAnchor)});
