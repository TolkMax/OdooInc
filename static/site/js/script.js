function relaodAllMaterial() {
    var x = new XMLHttpRequest();
    x.open("GET", "http://localhost:8071/api/material/list/", true);
    x.onload = function (){
        save_material = JSON.parse(x.responseText);
        var materialArray = MaterialArray.fromAny(save_material);
        materialArray.print();
    }
    x.send(null);
}

relaodAllMaterial();