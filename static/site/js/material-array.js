class MaterialArray {

    static fromAny(data) {
        var materialArray = new MaterialArray()
        materialArray.items = [];
        if(!data)
            return materialArray;

        var material_array= [];
        for (var i = 0; i < data.length; i++){
            materialArray.items.push(Material.fromAny(data[i]));
        }

        return materialArray;
      }

    print()
    {
        for (var i = 0; i < this.items.length; i++){
            this.items[i].print();
            document.write('</br>');
        }
    }

    GetHTMLAllTables()
   {

        var result = '';

        for (var i = 0; i < this.items.length; i++){
            result += "<div class='material-cell'>";
            result += this.items[i].GetHTMLTable(i);
            result += "</div>";
        }

        return result;
   }
}
