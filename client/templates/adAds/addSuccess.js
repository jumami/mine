//Ads = new Mongo.Collection('ads');

if (Meteor.isClient) {


//    Template.addAds.events({
//        'click  #submit': function(e) {
//
//            e.preventDefault();
//
//            Router.go('addShowAd', {_id:ade});
//
//        }
//
//    });

}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}