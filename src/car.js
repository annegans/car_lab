function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;
  this.state = state;
  this.previousOwners = []; 
  this.currentOwner = "Manufacturer";
  this.passengers = [];
  
}



Car.prototype.sale = function(newOwner){
this.previousOwners.push(this.currentOwner);
this.currentOwner = newOwner ;
};


Car.prototype.paint = function(newColor){
this.color = newColor; 

};
Car.prototype.start = function() {
this.state  = "on";
};

Car.prototype.off = function() {
this.state = "off";
};

Car.prototype.pickUp = function(passenger) {
this.passengers.push(passenger);

if (this.state === "on") { myCar.pickUp = "john"

}

}
module.exports=Car;