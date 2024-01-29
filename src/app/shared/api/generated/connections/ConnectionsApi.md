# .ConnectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectionsControllerCreateOne**](ConnectionsApi.md#connectionsControllerCreateOne) | **POST** /api/connections | Create one connection
[**connectionsControllerFindAll**](ConnectionsApi.md#connectionsControllerFindAll) | **GET** /api/connections | Get all connections
[**connectionsControllerRemoveOne**](ConnectionsApi.md#connectionsControllerRemoveOne) | **DELETE** /api/connections/{id} | Delete one connection
[**connectionsControllerReplaceOne**](ConnectionsApi.md#connectionsControllerReplaceOne) | **PUT** /api/connections/{id} | 
[**connectionsControllerUpdateOne**](ConnectionsApi.md#connectionsControllerUpdateOne) | **PATCH** /api/connections/{id} | Update one connection


# **connectionsControllerCreateOne**
> void connectionsControllerCreateOne(connectionCreateDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionsControllerCreateOneRequest = {
  // ConnectionCreateDto
  connectionCreateDto: {
    username: "username_example",
    name: "name_example",
    orgId: "bdbac7e6-9df0-455e-a763-20bdf37a82bb",
    type: {},
    description: "Ubi voluptatum vesica iusto dedico tredecim quibusdam thermae truculenter. Ambulo cui utique aliquam crepusculum torrens comedo commodo curtus trado. Villa tremo desparatus stella volaticus.",
    agentId: "89ebe398-facb-46c8-a326-be2baedb2d35",
    runtimeEnvironmentId: "1b66dff6-de49-4755-83de-f42e8b007bb5",
    instanceDisplayName: "FTP",
    host: "localhost:4545",
    port: "4545",
    database: "sqlite",
    codepage: "224",
    createdBy: "createdBy_example",
    updatedBy: "updatedBy_example",
    adjustedJdbcHostName: "Some",
    shortDescription: "canonicus",
    password: "********",
    createTime: new Date('2024-01-22T11:15:51.097Z'),
    updateTime: new Date('2024-01-22T11:15:51.097Z'),
  },
};

apiInstance.connectionsControllerCreateOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionCreateDto** | **ConnectionCreateDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | done |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **connectionsControllerFindAll**
> PaginationDto connectionsControllerFindAll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionsControllerFindAllRequest = {
  // FilterViewDto (optional)
  filters: {
    name: "name_example",
    type: [
      "CSVFile",
    ],
    database: "database_example",
    createTime: "createTime_example",
  },
  // SortingViewDto (optional)
  sortedBy: {
    name: "asc",
    type: "asc",
    createTime: "asc",
  },
  // number (optional)
  page: 3.14,
  // number (optional)
  perPage: 3.14,
};

apiInstance.connectionsControllerFindAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **FilterViewDto** |  | (optional) defaults to undefined
 **sortedBy** | **SortingViewDto** |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **perPage** | [**number**] |  | (optional) defaults to undefined


### Return type

**PaginationDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **connectionsControllerRemoveOne**
> void connectionsControllerRemoveOne()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionsControllerRemoveOneRequest = {
  // string
  id: "id_example",
};

apiInstance.connectionsControllerRemoveOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | delete |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **connectionsControllerReplaceOne**
> void connectionsControllerReplaceOne()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionsControllerReplaceOneRequest = {
  // string
  id: "id_example",
};

apiInstance.connectionsControllerReplaceOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **connectionsControllerUpdateOne**
> void connectionsControllerUpdateOne(connectionUpdateDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConnectionsApi(configuration);

let body:.ConnectionsApiConnectionsControllerUpdateOneRequest = {
  // string
  id: "id_example",
  // ConnectionUpdateDto
  connectionUpdateDto: {
    name: "name_example",
  },
};

apiInstance.connectionsControllerUpdateOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionUpdateDto** | **ConnectionUpdateDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | done |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


