$.Zoomable = function(el) {
  this.$el = $(el);
  this.focusBoxSize = 50;
  this.$focusBox;

  this.bindEvents();
}


$.fn.zoomable = function() {
  return this.each(function () {
    new $.Zoomable(this);
  });
};

$.Zoomable.prototype.bindEvents = function() {
  this.$el.on("mousemove", "img", function(event) {
    this.showFocusBox(event);
  }.bind(this));

  this.$el.on("mouseout", "img", function(event) {
    this.removeFocusBox();
  }.bind(this));
}

$.Zoomable.prototype.showFocusBox = function (event) {
  if (!this.$focusBox) {
    this.$focusBox = $('<div class="focus-box">');
    this.$el.append(this.$focusBox);
  }
  this.$focusBox.css("left: " + event.pageX);
  this.$focusBox.css("top: " + event.pageY);
}

$.Zoomable.prototype.removeFocusBox = function () {
  debugger
  this.$el.remove(".focus-box");
  this.$focusBox = null;
}
