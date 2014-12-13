// **** Model ****
var Court = Backbone.Model.extend({
  // parse: function(response){
  //   return response.court;
  // }
});

// **** Collection ****
var CourtList = Backbone.Collection.extend({
  model: Court,
  url: '/api/courts'
});

// **** Views ****
var CourtView = Backbone.View.extend({
  // template: _.template($('#court-template').html()),
  tagName: 'li',
      
  render: function(){
    // this.$el.html(this.template(this.model.toJSON()));
    this.$el.html(this.model.get('name'));
    return this;
  },
});

var CourtListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "reset", this.render);
    // this.listenTo(this.collection, "add", this.render);
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

$(function(){

  courts = new CourtList();

  var allCourts = new CourtListView({
                        collection: courts,
                        el: $('ul.courts')
                      });
  courts.fetch({reset:true});
});
