#Gulp-create Folders

##Description: <br />

For creation of files default for especific module. <br />
use --n to inform module name in app
    
    
    www/
    └── app
        └── products
            ├── products-controller.js
            ├── products-service.js
            ├── products-view.html
            └── products.css
    
##Usage

> npm install -g gulp && npm install <br />
> gulp create-folders --n NameOfModule

##Output <br />
``` javascript   
// products-controller.js 
(function(angular) { 
    var app = angular.module("controllers.productsController", []); 
    app.controller("ProductsCtrl", [function () { 

    }]);
})(angular);



//products-service.js
(function(angular) { 
    var app = angular.module("services.productsService", []); 
    app.factory("ProductsService", [function () { 
		 return {  };
     }]);
})(angular);

```

``` html
<!-- products-view.html -->
<ion-view view-title="Products" name="products-view">
    <ion-content>
    </ion-content>
</ion-view>
```
