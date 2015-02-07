if (Meteor.isClient) {
    // counter starts at 0
//    Session.setDefault("counter", 0);

    Template.catSelect.helpers({
//        ads: function() {
//            var o =  catSelect(this.params._id);
//
//            alert(JSON.stringify(o));
//
//            alert(_id);
//            return catSelect('GxYyb4WPRG7ctwhcP');
//        }

//        ads: function(_id) {
//            var d = Categories.find({parent: this.params._id}).fetch();
//
//            alert(JSON.stringify(d));
//
//            return d;
//        }
    });

    Template.catSelect.events({

    });


}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
