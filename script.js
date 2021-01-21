/* jshint ignore:start */
function app() {
  return {
    menuIsOpen: false,
    platesOnBar: [],
    mode: 'dfy',
    target: 45,
    plates: [
    {
      active: true,
      lbs: 55,
      barHtml: '<div class="bg-red-400 border border-red-500 w-full h-full rounded-sm"></div>',
      buttonHtml: `
      <div class="h-40 w-40 bg-red-400 rounded-full flex items-center justify-center">
        <div class="h-32 w-32 bg-red-900 rounded-full flex items-center justify-center">
          <div class="h-20 w-20 bg-red-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            55
          </div>
        </div>
      </div>
      `,
      width: "25%",
    },

    {
      active: true,
      lbs: 45,
      barHtml: '<div class="bg-blue-400 border border-blue-500 w-full h-full rounded-sm"></div>',
      buttonHtml: `
      <div class="h-40 w-40 bg-blue-400 rounded-full flex items-center justify-center">
        <div class="h-32 w-32 bg-blue-900 rounded-full flex items-center justify-center">
          <div class="h-20 w-20 bg-blue-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            45
          </div>
        </div>
      </div>
      `,
      width: "22.6%",
    },

    {
      active: true,
      lbs: 35,
      barHtml: '<div class="bg-yellow-400 border border-yellow-500 w-full h-full rounded-sm"></div>',
      buttonHtml: `
      <div class="h-40 w-40 bg-yellow-400 rounded-full flex items-center justify-center">
        <div class="h-32 w-32 bg-yellow-700 rounded-full flex items-center justify-center">
          <div class="h-20 w-20 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            35
          </div>
        </div>
      </div>
      `,
      width: "17.7%",
    },

    {
      active: true,
      lbs: 25,
      barHtml: '<div class="bg-green-400 border border-green-500 w-full h-full rounded-sm"></div>',
      buttonHtml: `
      <div class="h-40 w-40 bg-green-400 rounded-full flex items-center justify-center">
        <div class="h-32 w-32 bg-green-700 rounded-full flex items-center justify-center">
          <div class="h-20 w-20 bg-green-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            25
          </div>
        </div>
      </div>
      `,
      width: "14%",
    },

    {
      active: true,
      lbs: 15,
      barHtml: '<div class="bg-gray-400 border border-gray-500 w-full h-full rounded-sm"></div>',
      buttonHtml: `
      <div class="h-40 w-40 bg-gray-400 rounded-full flex items-center justify-center">
        <div class="h-32 w-32 bg-gray-700 rounded-full flex items-center justify-center">
          <div class="h-20 w-20 bg-gray-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            15
          </div>
        </div>
      </div>
      `,
      width: "9.8%",
    },

    {
      active: true,
      lbs: 10,
      barHtml: '<div class="bg-gray-400 border border-gray-500 w-full h-full rounded-sm"></div>',
      buttonHtml: `
      <div class="h-40 w-40 bg-gray-400 rounded-full flex items-center justify-center">
        <div class="h-32 w-32 bg-gray-700 rounded-full flex items-center justify-center">
          <div class="h-20 w-20 bg-gray-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            10
          </div>
        </div>
      </div>
      `,
      width: "7.7%",
    },

    {
      active: true,
      lbs: 5,
      barHtml: '<div class="bg-gray-300 border border-gray-400 w-full h-1/2 rounded-sm"></div>',
      buttonHtml: `
      <div class="h-24 w-24 bg-gray-400 rounded-full flex items-center justify-center">
        <div class="h-20 w-20 bg-gray-700 rounded-full flex items-center justify-center">
          <div class="h-10 w-10 bg-gray-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            5
          </div>
        </div>
      </div>
      `,
      width: "5%",
    },

    {
      active: true,
      lbs: 2.5,
      barHtml: '<div class="bg-gray-200 border border-gray-300 w-full h-1/3 rounded-sm"></div>',
      buttonHtml: `
      <div class="h-24 w-24 bg-gray-400 rounded-full flex items-center justify-center">
        <div class="h-20 w-20 bg-gray-700 rounded-full flex items-center justify-center">
          <div class="h-10 w-10 bg-gray-400 rounded-full flex items-center justify-center font-bold text-white text-lg">
            2.5
          </div>
        </div>
      </div>
      `,
      width: "5%",
    }],

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
      console.log(this.plates.find(({ lbs }) => lbs === id).active);
      this.plates.find(({ lbs }) => lbs === id).active = !this.plates.find(({ lbs }) => lbs === id).active;
    },

    setBar() {
      this.reset()
      let sum = 45; // account for the bar weight
      for (i = 0; i < this.plates.length; i++) {
        // Plate must be active
        if (this.plates[i].active === true) {
          if (sum + this.plates[i].lbs * 2 <= this.target) {
            // Keep adding the same plate until you meet or exceed the target
            while (sum + this.plates[i].lbs * 2 <= this.target) {
              sum = sum + this.plates[i].lbs * 2;
              this.platesOnBar.push(this.plates[i]);
              console.log('add: ' + this.plates[i].lbs + ' and sum is ' + sum);
            }
          }
        }
      }
      document.getElementById("enterWeight").blur();
    },

    isInactive(id) {
      if (this.plates.find(({ lbs }) => lbs === id).active === false) {
        return true;
      }
    }
  };
  
}
/* jshint ignore:end */

/*

Target is 165

if 155 (55) is greater than target, go to lower weight, if not, add another 55

*/