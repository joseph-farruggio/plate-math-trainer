function app() {
  return {
    menuIsOpen: false,
    platesOnBar: [],
    plates: [
    {
      lbs: 55,
      html: '<div class="bg-red-400 w-full h-full"></div>',
      width: "25%",
      active: false },

    {
      lbs: 45,
      html: '<div class="bg-blue-400 w-full h-full"></div>',
      width: "22.6%",
      active: true },

    {
      lbs: 35,
      html: '<div class="bg-yellow-400 w-full h-full"></div>',
      width: "17.7%",
      active: false },

    {
      lbs: 25,
      html: '<div class="bg-green-400 w-full h-full"></div>',
      width: "14%",
      active: true },

    {
      lbs: 15,
      html: '<div class="bg-gray-400 w-full h-full"></div>',
      width: "9.8%",
      active: false },

    {
      lbs: 10,
      html: '<div class="bg-gray-400 w-full h-full"></div>',
      width: "7.7%",
      active: true },

    {
      lbs: 5,
      html: '<div class="bg-gray-300 w-full h-1/2"></div>',
      width: "5%",
      active: true },

    {
      lbs: 2.5,
      html: '<div class="bg-gray-200 w-full h-1/3"></div>',
      width: "5%",
      active: true }],



    addPlate(id) {
      console.log(id);
      this.platesOnBar.push(this.plates.find(({ lbs }) => lbs === id));
    },

    reset() {
      this.platesOnBar = [];
    },

    undo() {
      if (this.platesOnBar != undefined || this.platesOnBar.length > 0) {
        this.platesOnBar.pop();
      }
    },

    sumPlates() {
      if (this.platesOnBar === undefined || this.platesOnBar.length == 0) {
        return 45 + "lbs";
      } else {
        Array.prototype.sum = function (prop) {
          var total = 0;
          for (var i = 0, _len = this.length; i < _len; i++) {
            total += this[i][prop];
          }
          return total;
        };
        const weights = this.platesOnBar.sum("lbs");
        return weights * 2 + 45 + "lbs";
      }
    },

    togglePlate(id) {
      this.plates.find(({ lbs }) => lbs === id).active = !this.plates.find(
      ({ lbs }) => lbs === id).
      active;
    },

    isInactive(id) {
      if (this.plates.find(({ lbs }) => lbs === id).active === false) {
        return true;
      }
    } };

}