##Gulp-create Folders

Description:
    For creation of files default for especific module, in estructure:
    use --n to inform module name in app
    
    ```
    www/
    └── app
        └── products
            ├── products-controller.js
            ├── products-service.js
            ├── products-view.html
            └── products.css
    ```
<h1>Usage</h1>

gulp create-folders --n NameOfModule

Output <br />
    - products-controller.js <br />
    
        ```javascript
            (function(angular) { 
                var app = angular.module("controllers.productsController", []); 
            
                app.controller("ProductsCtrl", [function () { 

                }]);
            })(angular);
        ```

