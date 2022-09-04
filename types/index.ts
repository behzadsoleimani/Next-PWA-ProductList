export interface IHomePage {
    products: IProduct[]
}


export interface IMeta {
    title: string,
    keywords?: string,
    description?: string
}

export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: IRating
}

interface IRating {
    rate: number,
    count: number
}

export interface IProductItem {
    product: IProduct
}

export interface IProductsList {
    products: IProduct[]
}