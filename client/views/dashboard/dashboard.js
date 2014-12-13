Template.dashboard.rendered = function() {

};

Template.myHomes.helpers({
    'myHomes': function() {
        var current_user = Meteor.userId();
        return Homes.find({occupants: current_user}).fetch();
    }
});

