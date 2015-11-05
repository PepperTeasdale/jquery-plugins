$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.transitioning = false;

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
  if (this.transitioning === true) {
    return;
  }

  this.transitioning = true;
  var $oldPhoto = $(this.$el.find("ul").children()[this.activeIdx]);

  this.activeIdx = (this.activeIdx + dir) %
                    this.$el.find("ul").children().length;

  if (this.activeIdx < 0) {
    this.activeIdx += this.$el.find("ul").children().length;
  }

  $activePhoto = $(this.$el.find("ul").children()[this.activeIdx]);
  $activePhoto.addClass("active");

  if (dir === 1) {
    $activePhoto.addClass("right");
    $oldPhoto.addClass("left");
    setTimeout(function() {
      $activePhoto.removeClass("right");
    }, 0);
  } else {
    $activePhoto.addClass("left");
    $oldPhoto.addClass("right");
    setTimeout(function() {
      $activePhoto.removeClass("left");
    }, 0);
  }

  var carouselContext = this;
  this.$el.one("transitionend","li",function() {
    $oldPhoto.removeClass();
    carouselContext.transitioning = false;
  })

};
