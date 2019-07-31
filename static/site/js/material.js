class Material {

   static fromAny(data) {
        var material = new Material();
        if(!data)
            return material;

        material.name = data.name;
        material.count = data.count;
        material.exist = data.exist;

        if(data.price)
            material.price = data.price;

        return material;
    }

   GetHTMLTable(number)
   {
        var draw_material='<table class="material" id="material_'+number+'" >';
        draw_material+='<tr>';
        draw_material+='<td>';
        draw_material +='name:' + this.name;
        draw_material +='</td>';
        draw_material +='</tr>';
        draw_material +='<tr>';
        draw_material+='<td>';
        draw_material +='count:<input type="text" value="'+this.count+'"/>';
        draw_material +='</td>';
        draw_material +='</tr>';
        draw_material +='<tr>';
        draw_material+='<td>';
        draw_material +='<input type="checkbox" '+ (this.exist?'checked="checked"':'') +'/>';
        draw_material +='</td>';
        draw_material +='</tr>';
        draw_material+='</table>';
        return draw_material;
   }

   print()
   {
        document.write(this.name);
        document.write(this.count);
        document.write(this.exist);
   }
}
