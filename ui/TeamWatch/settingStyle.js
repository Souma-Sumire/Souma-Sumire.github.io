"use strict";
$("#bgOpacity").val(localStorage.getItem("setBgOpacity") || 0.5);
$("#text").text($("#bgOpacity").val());
window.save = function () {
  localStorage.setItem("setBgOpacity", $("#bgOpacity").val());
};
$("#bgOpacity").on("change", () => {
  $("#text").text($("#bgOpacity").val());
});