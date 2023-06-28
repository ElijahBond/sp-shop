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



const dataItems: IDataItems = {
    serviceInfo: {
        tax: 100,
        shippingCost: 150
    },
    models: [
        {
            modelNumber: 'MT91547',
            description: 'New Balance 574 Vintage Brights',
            imgSrc: '/src/assets/itemsImg/nb574.svg',
            cost: 650
        },
        {
            modelNumber: 'modelNumber2',
            description: 'New Balance Made in UK 920 Chinese New Year',
            imgSrc: '/src/assets/itemsImg/nb920.svg',
            cost: 1200
        },
        {
            modelNumber: 'modelNumber3',
            description: 'New Balance 373 Modern Classics',
            imgSrc: '/src/assets/itemsImg/nb373.svg',
            cost: 800
        },
        {
            modelNumber: 'modelNumber4',
            description: 'New Balance Made in UK 670 Chinese New Year',
            imgSrc: '/src/assets/itemsImg/nb670.svg',
            cost: 780
        },
        {
            modelNumber: 'modelNumber5',
            description: 'New Balance X-Racer Utility',
            imgSrc: '/src/assets/itemsImg/nb-racer.svg',
            cost: 1000
        },
        {
            modelNumber: 'modelNumber6',
            description: 'New Balance 5740 Think Colorfully',
            imgSrc: '/src/assets/itemsImg/nb5740.svg',
            cost: 940
        }
    ]
};

export { dataItems };
