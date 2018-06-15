// @flow

type JSON = null | number | string | boolean | Array<JSON> | {[string]: JSON};
type StyleList =
    | "matrix"
    | "label"
    | "form"
    | "simple"
    | "spaceDelimited"
    | "pipeDelimited"
    | "deepObject";

export type OpenApiObject = {
    openapi: string,
    info: InfoObject,
    servers?: ServerObjectList,
    paths: PathItemObjectMap,
    components?: ComponentsObject,
    security?: SecurityRequirementObjectList,
    tags?: TagObjectList,
    externalDocs?: ExternalDocumentationObject
};

export type InfoObject = {
    title: string,
    description?: string,
    termsOfService?: string,
    contact?: ContactObject,
    license?: LicenseObject,
    version: string
};

export type ContactObject = {
    name?: string,
    url?: string,
    email?: string
};

export type LicenseObject = {
    name: string,
    url?: string
};

export type ServerObjectList = Array<ServerObject>;

export type ServerObject = {
    url: string,
    description?: string,
    variables?: ServerVariableObjectMap
};

export type ServerVariableObjectMap = {[key: string]: ServerVariableObject};

export type ServerVariableObject = {
    enum?: Array<string>,
    default: string,
    description?: string
};

export type PathItemObjectMap = {[key: string]: PathItemObject};

export type PathItemObject = {
    summary?: string,
    description?: string,
    get?: OperationObject,
    put?: OperationObject,
    post?: OperationObject,
    delete?: OperationObject,
    options?: OperationObject,
    head?: OperationObject,
    patch?: OperationObject,
    trace?: OperationObject,
    servers?: Array<ServerObject>,
    parameters?: Array<ParameterObject>
};

export type OperationObject = {
    tags?: Array<string>,
    summary?: string,
    description?: string,
    externalDocs?: ExternalDocumentationObject,
    operationId?: string,
    parameters?: ParameterObjectList,
    requestBody?: RequestBodyObject,
    responses: ResponsesObject,
    callbacks?: CallbackObjectMap,
    deprecated?: boolean,
    security?: SecurityRequirementObjectList,
    servers?: ServerObjectList
};

export type ParameterObjectList = Array<ParameterObject>;
export type ParameterObjectMap = {[key: string]: ParameterObject};

export type ParameterObject = {
    name: string,
    description?: string,
    deprecated?: boolean,
    allowEmptyValue?: boolean
} & (
    | {
          in: "query" | "header" | "cookie",
          required?: boolean
      }
    // `required` must be true if `in` = 'path'
    | {
          in: "path",
          required: true
      }
) &
    // Either content or schema/style must be defined, but not both
    (
        | {
              content: MediaTypeObjectMap
          }
        | {
              schema: SchemaObject,
              style: StyleList,
              allowReserved?: boolean,
              example?: JSON,
              examples?: ExampleObjectMap
          }
    );

export type ExternalDocumentationObject = {
    description?: string,
    url: string
};

export type SchemaObjectMap = {[key: string]: SchemaObject};

export type SchemaObject = {
    title?: string,
    multipleOf?: number,
    maximum?: number,
    exclusiveMaximum?: boolean,
    minimum?: number,
    exclusiveMinimum?: boolean,
    maxLength?: number,
    minLength?: number,
    pattern?: string,
    maxItems?: number,
    minItems?: number,
    uniqueItems?: boolean,
    maxProperties?: number,
    minProperties?: number,
    required?: Array<string>,
    enum?: Array<JSON>,
    type?: string,
    allOf?: Array<SchemaObject>,
    oneOf?: Array<SchemaObject>,
    anyOf?: Array<SchemaObject>,
    not?: SchemaObject,
    items?: SchemaObject,
    properties?: SchemaObjectMap,
    additionalProperties?: boolean | SchemaObjectMap,
    description?: string,
    format?: string,
    default?: JSON,
    nullable?: boolean,
    discriminator?: DiscriminatorObject,
    readOnly?: boolean,
    writeOnly?: boolean,
    xml?: XMLObject,
    externalDocs?: ExternalDocumentationObject,
    example?: JSON,
    deprecated?: boolean
};

export type ExampleObjectMap = {[string]: ExampleObject};

export type ExampleObject = {
    summary?: string,
    description?: string,
    value?: JSON,
    externalValue?: string
};

export type MediaTypeObjectMap = {[key: string]: MediaTypeObject};

export type MediaTypeObject = {
    schema?: SchemaObject,
    example?: JSON,
    examples?: ExampleObjectMap,
    encoding?: EncodingObjectMap
};

export type DiscriminatorObject = {
    propertyName: string,
    mapping?: {[string]: string}
};

export type XMLObject = {
    name?: string,
    namespace?: string,
    prefix?: string,
    attribute?: boolean,
    wrapped?: boolean
};

export type EncodingObjectMap = {[key: string]: EncodingObject};

export type EncodingObject = {
    contentType?: string,
    headers?: HeaderObjectMap,
    style?: string,
    explode?: boolean,
    allowReserved?: boolean
};

export type HeaderObjectMap = {[key: string]: HeaderObject};

export type HeaderObject = {
    description?: string,
    deprecated?: boolean,
    allowEmptyValue?: boolean,
    required?: boolean
} & ( // Either content or schema/style must be defined, but not both
    | {
          content: MediaTypeObjectMap
      }
    | {
          schema: SchemaObject,
          style: StyleList,
          allowReserved?: boolean,
          example?: JSON,
          examples?: ExampleObjectMap
      }
);

export type ComponentsObject = {
    schemas?: SchemaObjectMap,
    responses?: ResponseObjectMap,
    parameters?: ParameterObjectMap,
    examples?: ExampleObjectMap,
    requestBodies?: RequestBodyObjectMap,
    headers?: HeaderObjectMap,
    securitySchemes?: SecuritySchemeObjectMap,
    links?: LinkObjectMap,
    callbacks?: CallbackObjectMap
};

export type SecurityRequirementObjectList = Array<SecurityRequirementObject>;

export type SecurityRequirementObject = {
    [key: string]: Array<string>
};

export type TagObjectList = Array<TagObject>;

export type TagObject = {
    name: string,
    description?: string,
    externalDocs?: ExternalDocumentationObject
};

export type RequestBodyObjectMap = {[key: string]: RequestBodyObject};

export type RequestBodyObject = {
    description?: string,
    content: MediaTypeObjectMap,
    required?: boolean
};

export type ResponseObjectMap = {[key: string]: ResponseObject};

export type ResponsesObject = {
    default?: ResponseObject,
    [statusCode: number]: ResponseObject
};

export type ResponseObject = {
    description: string,
    headers?: HeaderObjectMap,
    content?: MediaTypeObjectMap,
    links?: LinkObjectMap
};

export type LinkObjectMap = {[key: string]: LinkObject};

export type LinkObject = {
    operationRef?: string,
    operationId?: string,
    parameters?: {[key: string]: JSON}, // @TODO better type?
    requestBody?: JSON, // @TODO better type?
    description?: string,
    server?: ServerObject
};

export type CallbackObjectMap = {[key: string]: CallbackObject};

export type CallbackObject = {
    [expression: string]: PathItemObject
};

export type SecuritySchemeObjectMap = {[key: string]: SecuritySchemeObject};

export type SecuritySchemeObject = {
    description?: string
} & (
    | {
          type: "apiKey",
          name: string,
          in: string
      }
    | {
          type: "http",
          scheme: string,
          bearerFormat?: string
      }
    | {
          type: "oauth2",
          flows: OAuthFlowsObject
      }
    | {
          type: "openIdConnect",
          openIdConnectUrl: string
      }
);

export type OAuthFlowsObject = {
    implicit?: OAuthFlowObject & OAuthFlowObjectAuth,
    password?: OAuthFlowObject & OAuthFlowObjectToken,
    clientCredentials?: OAuthFlowObject & OAuthFlowObjectToken,
    authorizationCode?: OAuthFlowObject & OAuthFlowObjectAuth & OAuthFlowObjectToken
};

export type OAuthFlowObject = {
    refreshUrl?: string,
    scopes: {[string]: string}
};

export type OAuthFlowObjectAuth = {
    authorizationUrl: string
};

export type OAuthFlowObjectToken = {
    tokenUrl: string
};
