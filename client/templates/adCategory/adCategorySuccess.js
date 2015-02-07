if (Meteor.isClient) {
    // counter starts at 0
//    Session.setDefault("counter", 0);

    Template.adCategorySuccess.helpers({
//        co: function () {
//            return this._id;
//        return Ads.findOne({_id: this.data_id});
//
//        }
    });

    Template.adCategorySuccess.events({

    });


}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}/**
 * Created by juma on 1/19/15.
 */
