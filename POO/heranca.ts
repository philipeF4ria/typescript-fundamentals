// Sistema de estoque

class Product {
    constructor(
        protected name: string,
        protected code: string,
        protected price: number,
        protected amount: number 
    ){}

    public getProductName(): string {
        return this.name;
    }

    public getProductCode(): string {
        return this.code;
    }

    public getProductPrice(): number {
        return this.price;
    }

    public getProductAmount(): number {
        return this.amount;
    }
}

class Eletronic extends Product {
    private countryOfManufacture: string;

    public setCountryOfManufacture(country: string): void {
        this.countryOfManufacture = country;
    }

    public getCountryOfManufacture(): string {
        return this.countryOfManufacture;
    }
}

const book = new Product('Odisseia', '13ad78', 32.00, 1000);

console.log(book);

const eletronic = new Eletronic('iPhone', '41s356', 3600, 1000);
eletronic.setCountryOfManufacture('USA');

console.log(eletronic);
