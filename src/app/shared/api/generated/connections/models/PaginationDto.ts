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

import { ConnectionEntity } from '../models/ConnectionEntity';
import { Meta } from '../models/Meta';

export class PaginationDto {
    'meta': Meta;
    /**
    * Result of the selection by the specified parameters
    */
    'result': Array<ConnectionEntity>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meta",
            "baseName": "meta",
            "type": "Meta",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "Array<ConnectionEntity>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaginationDto.attributeTypeMap;
    }

    public constructor() {
    }
}

