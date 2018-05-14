function Element() {
	this.listeners = [];
}
Element.prototype = {
  addEventListener: function(eventName, callback) {
  	this.listeners.push(callback);
  },
  
  forEach: function(callback /* function */) {
    // проходим в цикле по всем листенерам
  	for (let i = 0; i < this.listeners.length; i++) {
    	// вызываем коллбэк со следующим листенером
    	callback(this.listeners[i]);
    }
  },
  
  _testEmitEvent: function() {
  	const cb = function(listener) {
    	listener();
    };

  	this.forEach(cb);
  }
};

const button = new Element();

button.addEventListener("click", function() {
	console.log("It works");
});

button.addEventListener("click", function() {
  console.log("It works 2");
});

button._testEmitEvent();
