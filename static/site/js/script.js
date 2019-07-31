function relaodAllMaterial() {
    var x = new XMLHttpRequest();
    x.open("GET", "http://localhost:8071/api/material/list/", true);
    x.onload = function (){
        save_material = JSON.parse(x.responseText);
        var materialArray = MaterialArray.fromAny(save_material);
        var container = document.getElementById('container');
        container.innerHTML = materialArray.GetHTMLAllTables();
       // materialArray.print();

   }
      x.send(null);
}
function update(){



}

relaodAllMaterial();