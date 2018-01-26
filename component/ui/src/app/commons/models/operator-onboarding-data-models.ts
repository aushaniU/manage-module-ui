export class Operator {
    type: string;
    countryName: string;
    countryCode: string;
    mcc: number;
    mnc: number;
    brand: string;
    operator: string;
    status: string;
    bands: string;
    notes: string;
    description: string;
}

export interface OperatorEndpoint {
    id: number;
    operatorMnc: number;
    api: any;
    endpointUrl: string;
}

export interface TokenData {
    id: number;
    token: number;
    validity: any;
    date: string;
    url: string;
}

export interface AddOperatorEndpointParam {
    operatorMnc: number;
    api: any;
    endpointUrl: string;
}

export interface Country {
    countryName: string;
    countryCode: string;
    mcc: number;
}

export interface CountryOperator {
    type: string;
    countryName: string;
    countryCode: string;
    mcc: number;
    mnc: number;
    brand: string;
    operator: string;
    status: string;
    bands: string;
    notes: string;
}



export class Brand {
    constructor(public brandName: string, public mcc: number) { }
}