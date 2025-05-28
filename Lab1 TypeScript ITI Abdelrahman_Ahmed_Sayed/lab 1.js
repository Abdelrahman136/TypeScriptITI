function logProduct(product) {
    console.log("the product id id: [".concat(product.id, "] ,\n        the product's name is: -").concat(product.name, " , \n        the product's price is: *{").concat(product.price, "$} , the product in stack equal: ").concat(product.inStock));
}
var ProductOrError;
function wrapValue(value) {
    return [value];
}
function Bonus(apiRes) {
    if (apiRes.success) {
        logProduct(apiRes.data);
    }
}
var product1 = {
    id: 1,
    name: 'Labtop Dell',
    price: 20000,
    inStock: true
};
var apiRes = {
    data: product1,
    success: true,
    message: "This Api Result is successfully"
};
Bonus(apiRes);
