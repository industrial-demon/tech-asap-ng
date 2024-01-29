/**
 * Connections
 * API description
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SortingViewDto {
    'name'?: SortingViewDtoNameEnum;
    'type'?: SortingViewDtoTypeEnum;
    'createTime'?: SortingViewDtoCreateTimeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "SortingViewDtoNameEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SortingViewDtoTypeEnum",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "SortingViewDtoCreateTimeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SortingViewDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SortingViewDtoNameEnum {
    ASC = 'asc',
    DESC = 'desc'
}
export enum SortingViewDtoTypeEnum {
    ASC = 'asc',
    DESC = 'desc'
}
export enum SortingViewDtoCreateTimeEnum {
    ASC = 'asc',
    DESC = 'desc'
}
