interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

function logProduct(product: Product):void {
    console.log(`
        the product id id: [${product.id}] ,
        the product's name is: -${product.name} , 
        the product's price is: *{${product.price}$} , the product in stack equal: ${product.inStock}`);
}

let ProductOrError:Product | string;

function wrapValue<T>(value:T):T[]{
    return [value];
}

interface ApiResult<T> {
    data: T;
    success: boolean;
    message: string
}

function Bonus(apiRes:ApiResult<Product>) {
    if(apiRes.success) {
        logProduct(apiRes.data)
    }
}

let product1:Product = {
    id: 1,
    name: 'Labtop Dell',
    price: 20000,
    inStock: true
}
const apiRes:ApiResult<Product> = {
    data: product1,
    success: true,
    message: "This Api Result is successfully"
}

Bonus(apiRes)