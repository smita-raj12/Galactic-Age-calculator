export default class Age{
  constructor(age){
    this.age = age; 
  }

  mercuryyears(){
    this.age = Math.trunc(this.age/ 0.24);
    return this.age;
  }
  
  venusYears(){
    this.age = Math.trunc(this.age/ 0.62);
    return this.age;
  }
}