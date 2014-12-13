// **** Model ****
var Court = Backbone.Model.extend({
  initialize: function() {
  }
});

// **** Collection ****
var CourtList = Backbone.Collection.extend({
  model: Court,
  url: '/api/courts'
});

// **** Views ****
var CourtView = Backbone.View.extend({
  template: _.template($('#map-template').html()),
  className: 'mymap',
  
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

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

