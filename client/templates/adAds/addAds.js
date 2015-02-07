//Ads = new Mongo.Collection('ads');

if (Meteor.isClient) {


    Template.addAds.events({
        'click  #submit': function(e) {

            e.preventDefault();

            var ad = {
              text : $('#text').val(),
              category : $('#category').val()
            };

            var ade = Ads.insert(ad);

            Router.go('addSuccess', {_id:ade});

        }

    });

}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}