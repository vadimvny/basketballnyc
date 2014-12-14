 

// **** Model ****
var Court = Backbone.Model.extend({
  defaults: {
    name: "Court",
    location: "Brooklyn",
    lan: "1",
    lon: "2",

  },
  // parse: function(response){
  //   return response.court;
  // }
});

// **** Collection ****
var CourtList = Backbone.Collection.extend({
  url: '/api/courts',
  model: Court,
});

// **** Views ****
var CourtView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($ ('#courtTemplate').html() ),
  
  render: function() {
    this.$el.html(this.template({ court: this.model.toJSON()}));
    return this;
  },    
});

var CourtListView = Backbone.View.extend({
  // tagname:'ul',
  // template: _.template($('#courtTemplate').html()),

  initialize: function(){
    this.listenTo( this.collection, 'reset', this.render );
  },
  
  render: function(){
    // this.$el.empty();
      var that = this;
    this.collection.each(function(court){
      var view = new CourtView({ model: court });
      that.$el.append(view.render().$el);
    });
  }
});

  $(function(){
    courtList = new CourtList();
    courtListView = new CourtListView({
      collection: courtList,
      el: "#courts"
    })
    courtList.fetch({reset: true});
  });


 // var court = new Court
 // var courtView = new CourtView
