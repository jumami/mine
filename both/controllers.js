AppController = RouteController.extend({
    layoutTemplate: 'layout'
});

MainController = AppController.extend({
    waitOn: function () {
        return Meteor.subscribe('mainCategories');
    },
    data: function () {
        return {
            mainCategories: Categories.find({parent:'0'})
        };
    }
});

AddMineController = AppController.extend({
    waitOn: function () {
        return Meteor.subscribe('mainCategories');
    },
    data: function () {
        return {
            mainCategories: Categories.find({parent:'0'})
        };
    }
});

CatSelectController = AppController.extend({
    waitOn: function () {
        return Meteor.subscribe('catSelect', this.params._id);
    },
    data: function () {
        return {
            catSelect: Categories.find({parent: this.params._id})
        };
    }
});

AddCatSelectController = AppController.extend({
    waitOn: function () {
        return Meteor.subscribe('addCatSelect', this.params._id);
    },
    data: function () {
        return {
            catSelect: Categories.find({parent: this.params._id})
        };
    }
});

CatSelectAdsController = AppController.extend({
    waitOn: function () {
        return Meteor.subscribe('catSelectAds', this.params._id);
    },
    data: function () {
        return {
            catSelectAds: Ads.find({category: this.params._id})
        };
    }
});

AddShowAdController = AppController.extend({
    waitOn: function () {
        return Meteor.subscribe('addShowAd', this.params._id);
    },
    data: function () {
        return {
            myAd: Ads.findOne({_id: this.params._id})
        };
    }
});