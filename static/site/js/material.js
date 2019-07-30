class Material {
  constructor(name, count, exist) {
    this.name = name;
    this.count = count;
    this.exist = exist;
  }

  print()
  {
    document.write(this.name);
    document.write(this.count);
    document.write(this.exist);
  }
}
