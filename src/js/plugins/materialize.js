import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

//Init select

const select = document.querySelectorAll("select");
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}
