Router.route('/', {
    name: 'main'
});

Router.route('/addMine', {
    name: 'addMine'
});

Router.route('/adCategory', {name: 'adCategory'});

Router.route('/adCategorySuccess/:_id', {
    name: 'adCategorySuccess'});

Router.route('/adSubmit', {name: 'adSubmit'});

Router.route('/adSuccess/:_id', {
    name: 'adSuccess'});


Router.route('/catSelect/:_id',
    { name : 'catSelect'});

Router.route('/catSelectAds/:_id',
    { name : 'catSelectAds'});


Router.route('/addCatSelect/:_id',
    { name : 'addCatSelect'});

Router.route('/addAds/:_id',
    { name : 'addAds',
      layoutTemplate: 'layout'});

Router.route('/addSuccess/:_id', {
    name: 'addSuccess',
    layoutTemplate: 'layout'
});

Router.route('/addShowAd/:_id',
    { name : 'addShowAd'});