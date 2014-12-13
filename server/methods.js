Meteor.methods({
    'removeHomeData': function(homeId) {
        Homes.remove(homeId);
    }
});

