var CourtList = Backbone.Collection.extend({
  model: Court,
  url: '/api/courts'
});