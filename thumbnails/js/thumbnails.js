$.Thumbnails = function (el) {
  this.$el = $(el);
  this.$activeImg = $(this.$el.find(".gutter-images").children()[0]);
  this.activate(this.$activeImg);
};

$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};

$.Thumbnails.prototype.activate = function($img) {
  // debugger;
  var $newActive = $("<img>");
  $newActive.attr("src", ($img.attr("src")));
  this.$el.find(".active").append($newActive);

  this.$activeImg = $img;
}
