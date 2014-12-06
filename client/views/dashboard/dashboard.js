Template.dashboard.rendered = function() {

};

Template.myHomes.helpers({
    'myHomes': function() {
        return Homes.find().fetch();
    }
});

