var CourtListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "change", this.render);
    this.listenTo(this.collection, "add", this.render);
  },
  render: function(){
    this.$el.empty();
    var that = this;
    this.collection.each(function(court){
      var view = new CourtView({model: court});
      that.$el.append(view.render().$el);
    });
    return this;
  }
});