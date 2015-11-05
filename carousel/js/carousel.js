$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;

  var carousel = this;

  this.$el.on("click", "button", function(event) {
      // debugger
    if (event.currentTarget.className === "slide-right") {
      carousel.slide(-1);
    } else {
      carousel.slide(1);
    }
  });
}

$.fn.carousel = function() {
  return this.each(function() {
    new $.Carousel(this);
  });
};

$.Carousel.prototype.slide = function(dir) {
  var $activePhoto = $(this.$el.find("ul").children()[this.activeIdx]);
  $activePhoto.removeClass("active");

  this.activeIdx = (this.activeIdx + dir) %
                    this.$el.find("ul").children().length;
  if (this.activeIdx < 0) {
    this.activeIdx += this.$el.find("ul").children().length;
  }
  $activePhoto = $(this.$el.find("ul").children()[this.activeIdx]);
  $activePhoto.addClass("active");

  if (dir = -1) {
    $activePhoto.addClass("right");
    setTimeout(function() {
      $activePhoto.removeClass("right");
    }, 0);
  } else {
    $activePhoto.addClass("left");
    setTimeout(function() {
      $activePhoto.removeClass("left");
    }, 0);
  }

};
