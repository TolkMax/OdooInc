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

   print()
   {
        document.write(this.name);
        document.write(this.count);
        document.write(this.exist);
   }
}
