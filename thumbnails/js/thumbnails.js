$.Thumbnails = function (el) {
  this.$el = $(el);
  this.$activeImg = $(this.$el.find(".gutter-images img")[0]);
  this.activate(this.$activeImg);
  this.gutterIdx = 0;
  this.$images = $(this.$el.find(".gutter-images img"));
  this.fillGutterImages();

  this.bindListeners();
};

$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};

$.Thumbnails.prototype.bindListeners = function() {
  this.$el.on("click",".gutter-images img", function(event) {
    this.activate($(event.currentTarget));
    this.$activeImg = $(event.currentTarget);
  }.bind(this));

  this.$el.on("mouseenter", ".gutter-images img", function(event) {
    this.activate($(event.currentTarget));
  }.bind(this));

  this.$el.on("mouseleave", ".gutter-images img", function(event) {
    this.activate(this.$activeImg);
  }.bind(this));

  this.$el.on("click", "a.nav", function(event) {
    event.preventDefault();
    if ($(event.currentTarget).text() === "<") {
      if (this.gutterIdx !== 0) {
        this.gutterIdx -= 1;
        this.fillGutterImages();
      }
    } else {
      if (this.gutterIdx < this.$images.length - 6) {
        this.gutterIdx += 1;
        this.fillGutterImages();
      }
    }
  }.bind(this));
}

$.Thumbnails.prototype.activate = function($img) {
  this.$el.find(".active").empty();
  var $newActive = $("<img>");
  $newActive.attr("src", ($img.attr("src")));
  this.$el.find(".active").append($newActive);
}

$.Thumbnails.prototype.fillGutterImages = function() {
  this.$el.find(".gutter-images").empty();
  for (var i = this.gutterIdx; i < this.gutterIdx + 5; i++) {
    this.$el.find(".gutter-images").append($(this.$images[i]));
  }
}
