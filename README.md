#gulp-create-folders

##Description: <br />

For creation of files default for especific module. <br />
Use with Ionic Framework app or AngularJS. <br/ >
    
```{r, engine='bash', count_lines}    
www/
└── app
└── products
    ├── products-controller.js
    ├── products-service.js
    ├── products-view.html
    └── products.css
```
##Usage
```{r, engine='bash', count_lines}
npm install -g gulp && npm install
gulp create-folders --n NameOfModule
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
