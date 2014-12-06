Template.dashboard.rendered = function() {

};

Template.myHomes.helpers({
    'myHomes': function() {
        return Homes.find().fetch();
        console.log("hello!");
    }
});

Template.myHomes.events({
    'click .remove': function(event){
        Meteor.call('removeHomeData', this._id);
    }
})


Template.addHomeForm.events({
    'submit form': function(event){
        event.preventDefault();
        Homes.insert({
            title: event.target.homeTitle.value
        })
    }
    
})