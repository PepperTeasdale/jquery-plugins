$.Thumbnails = function (el) {
  this.$el = $(el);
  this.$activeImg = $(this.$el.find(".gutter-images").children()[0]);
  this.activate(this.$activeImg);

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
};

$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};

$.Thumbnails.prototype.activate = function($img) {
  this.$el.find(".active").empty();
  var $newActive = $("<img>");
  $newActive.attr("src", ($img.attr("src")));
  this.$el.find(".active").append($newActive);
}
