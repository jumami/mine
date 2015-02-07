if (Meteor.isClient) {
    // counter starts at 0
//    Session.setDefault("counter", 0);

    Template.adSuccess.helpers({
    co: function () {
        return this._id;
//        return Ads.findOne({_id: this.data_id});
//
    }
    });

    Template.adSuccess.events({

    });


}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}