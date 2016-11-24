require.config({
    paths: {
        jquery: 'lib/jquery.min', // 2.2.4
        bootstrap: 'lib/bootstrap.min',
        //"bootstrap-editable": 'lib/bootstrap-editable-customized.min',
        "bootstrap-editable": 'lib/bootstrap-editable',
        knockout: 'lib/knockout',
        "knockout-amd-helpers": 'lib/knockout-amd-helpers',
        "knockout-validation": 'lib/knockout.validation.min',
        "knockout-x-editable": 'lib/knockout.x-editable.min',
        sammy: "lib/sammy",
        text: "lib/text",
        patterns: 'extenders/patterns'
    }
});

require( [ "app" ], function( App ){
    App.init();
});
