/* jshint ignore:start */
function app() {
  return {
    menuIsOpen: false,
    platesOnBar: [],
    plates: [
    {
      lbs: 55,
      html: '<div class="bg-red-400 border border-red-500 w-full h-full rounded-sm"></div>',
      width: "25%",
    },

    {
      lbs: 45,
      html: '<div class="bg-blue-400 border border-blue-500 w-full h-full rounded-sm"></div>',
      width: "22.6%",
    },

    {
      lbs: 35,
      html: '<div class="bg-yellow-400 border border-yellow-500 w-full h-full rounded-sm"></div>',
      width: "17.7%",
    },

    {
      lbs: 25,
      html: '<div class="bg-green-400 border border-green-500 w-full h-full rounded-sm"></div>',
      width: "14%",
    },

    {
      lbs: 15,
      html: '<div class="bg-gray-400 border border-gray-500 w-full h-full rounded-sm"></div>',
      width: "9.8%",
    },

    {
      lbs: 10,
      html: '<div class="bg-gray-400 border border-gray-500 w-full h-full rounded-sm"></div>',
      width: "7.7%",
    },

    {
      lbs: 5,
      html: '<div class="bg-gray-300 border border-gray-400 w-full h-1/2 rounded-sm"></div>',
      width: "5%",
    },

    {
      lbs: 2.5,
      html: '<div class="bg-gray-200 border border-gray-300 w-full h-1/3 rounded-sm"></div>',
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
/* jshint ignore:end */