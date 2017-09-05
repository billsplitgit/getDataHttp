// export interface Iusers{
//     productId: number;
//     productName: string;
//     productCode: string;
//     releaseDate: string;
//     description: string;
//     price: number;
//     starRating: number;
//     imageUrl: string;
// }

export interface Iusers{
    id : number;
    username : string;
    email : string;
    address : {
        street : string;
        suite : string;
        city : string;
        zipcode : string;
        geo : {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company:{
        name: string;
        catchPhrase: string;
        bs: string;
    };
}