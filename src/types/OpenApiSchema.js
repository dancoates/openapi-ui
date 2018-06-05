// @flow

export type OpenApiObject = {
    openapi: string,
    info: InfoObject
};

export type InfoObject = {
    title: string,
    description?: string,
    termsOfService?: string,
    contact?: ContactObject
};

export type ContactObject = {
    name?: string,
    url?: string,
    email?: string
};
