Meteor.publish('mainCategories', function() {
    return Categories.find({parent:'0'});
});

Meteor.publish('catSelect', function(_id) {
    return Categories.find({parent: _id});
});

Meteor.publish('catSelectAds', function(_id) {
    return Ads.find({category: _id});
});

Meteor.publish('addCatSelect', function(_id) {
    return Categories.find({parent: _id});
});

Meteor.publish('addShowAd', function(_id) {
    return Ads.findOne({_id:_id});
});




Meteor.publish('products', function() {
    return Products.find();
});

Meteor.publish('product', function(_id) {
    return Products.find({_id: _id});
});

Meteor.publish('votedProducts', function(user) {
    if (!user) {
        return;
    }
    return Products.find({_id: {$in: user.profile.votedProductIds}});
});