//Ads = new Mongo.Collection('ads');

if (Meteor.isClient) {


    Template.adSubmit.events({
        'click  #submit': function(e) {

            e.preventDefault();

            var ad = {
                text : $('#text').val(),
                category : '6exCQPBvrDdTkzfWZ'
            };

            var ade = Ads.insert(ad);


            Router.go('adSuccess', {_id:ade});

        }

    });

}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}