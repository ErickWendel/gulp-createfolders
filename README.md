##Gulp-create Folders

Description:
    For creation of files default for especific module, in estructure:
    use --n to inform module name in app
    
    
    www/
    └── app
        └── products
            ├── products-controller.js
            ├── products-service.js
            ├── products-view.html
            └── products.css
    
#Usage

> gulp create-folders --n NameOfModule

Output <br />
``` javascript   
// products-controller.js 
(function(angular) { 
    var app = angular.module("controllers.productsController", []); 

    app.controller("ProductsCtrl", [function () { 

    }]);
})(angular);
```

