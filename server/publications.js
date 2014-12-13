Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

Meteor.publish("currentUserHomes", function() {
    var current_user = this.userId;
    console.log(Homes.find({occupants: current_user}));
    return Homes.find({occupants: current_user});
});
