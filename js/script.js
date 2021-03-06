// code solution here

function President(name, politicalParty, yearsInOffice, homeState) {
  this.name = name;
  this.politicalParty = politicalParty;
  this.yearsInOffice = yearsInOffice;
  this.homeState = homeState;
}

President.prototype.veto = function () {
  return "NO!";
};

President.prototype.passBill = function () {
  return "You can do that!";
};

President.prototype.doCharity = function () {
  return "I like to help people.";
};

President.prototype.conductPressInterview = function () {
  return "I am proud to be an American.";
};

President.prototype.sayHi = function () {
  return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".";
};

var georgeWashington = new President("George Washington", "Wigs", "1789 - 1797");
var abrahamLincoln = new President("Abraham Lincoln", "Republican", "1861 - 1865");
var richardNixon = new President("Richard Nixon", "Republican", "1969 - 1974");
var jimmyCarter = new President("Jimmy Carter", "Democrat", "1977 - 1981");
