Homes = new Mongo.Collection('homes');

var Schemas = {};

Schemas.Home = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    address: {
        type: String,
        label: "Address",
        max: 200
    },
    city: {
        type: String,
        label: "City",
        max: 200
    },
    country: {
        type: String,
        label: "Country",
        max: 200
    }

});

Homes.attachSchema(Schemas.Home);
