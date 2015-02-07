//Ads = new Mongo.Collection('ads');

if (Meteor.isClient) {

    Template.adCategory.helpers({
    });

    Template.adCategory.events({
        'mousedown #submit': function(e) {

            e.preventDefault();

            var ad = {
                first : $('#text').val(),
                parent: 'iZ2DcpffFwnujgDG2'
            };

            var ade = Categories.insert(ad);

//            var adi = Ads.findOne({_id:ade});

//            alert(ade);

            Router.go('adCategorySuccess', {_id:ade});

        }

    });

}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}/**
 * Created by juma on 1/19/15.
 */
