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
    // debugger
  this.$activeTab.removeClass("active");
  var $activeContent = $(this.$activeTab.attr("href"))
  // this.$contentTabs.children().removeClass("active");
  $activeContent.addClass("transitioning");
  var tabContext = this;

  $activeContent.one("transitionend", function(event2) {
    $(this).removeClass("transitioning");
    $activeContent.removeClass("active");
    tabContext.$activeTab = $(event.currentTarget);
    tabContext.$activeTab.addClass("active");

    $activeContent = $(tabContext.$activeTab.attr("href"));
    $activeContent.addClass("active transitioning");

    setTimeout(function () {
      $activeContent.removeClass("transitioning")
    }, 0);
  })

}
