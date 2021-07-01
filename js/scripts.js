const data = [
  {
    date: "09/01/2021",
    weigth: "70 KG",
  },
  {
    date: "08/01/2021",
    weigth: "73 KG",
  },
  {
    date: "07/01/2021",
    weigth: "80 KG",
  },
  {
    date: "06/01/2021",
    weigth: "78 KG",
  },
  {
    date: "05/01/2021",
    weigth: "75 KG",
  },
  {
    date: "04/01/2021",
    weigth: "79 KG",
  },
  {
    date: "03/01/2021",
    weigth: "82 KG",
  },
  {
    date: "02/01/2021",
    weigth: "80 KG",
  },
];

$("#mytable-list tbody").html(
  data.map((item) => {
    return `
           <tr>
            <td><input type="checkbox" class="checkthis" /></td>
            <td>${item.date}</td>
            <td>${item.weigth}</td>
            <td width="150">
              <a
                href="edit.html"
                class="btn btn-dark btn-sm"                
              >
              <i class="bi bi-pencil"></i>
            </a>

              <button
                class="btn btn-danger btn-sm" 
                onclick="document.getElementById('id01').style.display='block'"               
              >
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
  `;
  })
);


var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}