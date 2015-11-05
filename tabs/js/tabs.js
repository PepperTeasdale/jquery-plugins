$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.attr("data-content-tabs"));
  this.$activeTab = $(this.$el.find(".active"));
  this.$el.on("click", "a", function (event) {
    event.preventDefault();
    this.clickTab(event);
  }.bind(this))
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.prototype.clickTab = function(event) {
  this.$activeTab.removeClass("active");
  this.$contentTabs.children().removeClass("active");
  this.$activeTab = $(event.currentTarget);
  this.$activeTab.addClass("active");
  $(this.$activeTab.attr("href")).addClass("active");
}
