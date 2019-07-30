
var x = new XMLHttpRequest();
x.open("GET", "http://localhost:8071/api/material/list/", true);
x.onload = function (){
    save_material = JSON.parse(x.responseText);
    var material_array= [];
    for (var i = 0; i < save_material.length; i++){
        material_array.push(
            new Material(
                save_material[i].name,
                save_material[i].count,
                save_material[i].exist));
    }
    for (var i = 0; i < material_array.length; i++){
        material_array[i].print();
    }

}
x.send(null);