var CourtView = Backbone.View.extend({
  template: _.template($('#map-template').html()),
  className: 'mymap',
  
  render: function(){
      this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});