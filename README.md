#gulp-create-folders

##Description: <br />

For creation of files default for especific module. <br />
Use with Ionic Framework app or AngularJS. <br/ >
    
    
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

```{r, engine='bash', count_lines}
[13:58:35] Using gulpfile ~/Desktop/gulp-create-folders/gulpfile.js
[13:58:35] Starting 'create-folders'...
www/app/products/
creating www/app/products/products-controller.js
creating www/app/products/products-service.js
creating www/app/products/products-view.html
creating www/app/products/products.css
[13:58:35] Finished 'create-folders' after 946 μs

```
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
