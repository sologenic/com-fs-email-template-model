/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { EmailTemplate, EmailTemplates, EmailTemplateType } from "./emailtemplate";
import { Empty } from "./google/protobuf/empty";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "emailtemplate";
export interface EmailTemplateID {
    EmailTemplateType?: EmailTemplateType | undefined;
    OrganizationID?: string | undefined;
    Network?: Network | undefined;
}
export interface Filter {
    Type?: EmailTemplateType | undefined;
    OrganizationID?: string | undefined;
    Network?: Network | undefined;
}
export declare const EmailTemplateID: {
    encode(message: EmailTemplateID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailTemplateID;
    fromJSON(object: any): EmailTemplateID;
    toJSON(message: EmailTemplateID): unknown;
    create<I extends {
        EmailTemplateType?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        EmailTemplateType?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof EmailTemplateID>]: never; }>(base?: I | undefined): EmailTemplateID;
    fromPartial<I_1 extends {
        EmailTemplateType?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        EmailTemplateType?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EmailTemplateID>]: never; }>(object: I_1): EmailTemplateID;
};
export declare const Filter: {
    encode(message: Filter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Filter;
    fromJSON(object: any): Filter;
    toJSON(message: Filter): unknown;
    create<I extends {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof Filter>]: never; }>(base?: I | undefined): Filter;
    fromPartial<I_1 extends {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Filter>]: never; }>(object: I_1): Filter;
};
export type EmailTemplateServiceService = typeof EmailTemplateServiceService;
export declare const EmailTemplateServiceService: {
    readonly get: {
        readonly path: "/emailtemplate.EmailTemplateService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EmailTemplateID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EmailTemplateID;
        readonly responseSerialize: (value: EmailTemplate) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EmailTemplate;
    };
    readonly list: {
        readonly path: "/emailtemplate.EmailTemplateService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Filter) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Filter;
        readonly responseSerialize: (value: EmailTemplates) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EmailTemplates;
    };
    readonly upsert: {
        readonly path: "/emailtemplate.EmailTemplateService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EmailTemplate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EmailTemplate;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Delete a template to reset an org's template to the default */
    readonly delete: {
        readonly path: "/emailtemplate.EmailTemplateService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EmailTemplate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EmailTemplate;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface EmailTemplateServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<EmailTemplateID, EmailTemplate>;
    list: handleUnaryCall<Filter, EmailTemplates>;
    upsert: handleUnaryCall<EmailTemplate, Empty>;
    /** Delete a template to reset an org's template to the default */
    delete: handleUnaryCall<EmailTemplate, Empty>;
}
export interface EmailTemplateServiceClient extends Client {
    get(request: EmailTemplateID, callback: (error: ServiceError | null, response: EmailTemplate) => void): ClientUnaryCall;
    get(request: EmailTemplateID, metadata: Metadata, callback: (error: ServiceError | null, response: EmailTemplate) => void): ClientUnaryCall;
    get(request: EmailTemplateID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EmailTemplate) => void): ClientUnaryCall;
    list(request: Filter, callback: (error: ServiceError | null, response: EmailTemplates) => void): ClientUnaryCall;
    list(request: Filter, metadata: Metadata, callback: (error: ServiceError | null, response: EmailTemplates) => void): ClientUnaryCall;
    list(request: Filter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EmailTemplates) => void): ClientUnaryCall;
    upsert(request: EmailTemplate, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    upsert(request: EmailTemplate, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    upsert(request: EmailTemplate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Delete a template to reset an org's template to the default */
    delete(request: EmailTemplate, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: EmailTemplate, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: EmailTemplate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const EmailTemplateServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EmailTemplateServiceClient;
    service: typeof EmailTemplateServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
