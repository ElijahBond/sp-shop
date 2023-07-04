export interface IDataItems {
    serviceInfo: IServiceInfo,
    models: IModels[]
}

export interface IServiceInfo {
    tax: number,
    shippingCost: number
}

export interface IModels {
    modelNumber: string,
    description: string,
    imgSrc: string,
    cost: number
}
