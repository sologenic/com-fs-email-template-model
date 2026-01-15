import _m0 from "protobufjs/minimal";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "emailtemplate";
export declare enum EmailTemplateType {
    NOT_USED_EMAIL_TEMPLATE_TYPE = 0,
    /**
     * KYC_APPROVED - KYC Email Templates (configurable by each organization)
     * Target: End User
     */
    KYC_APPROVED = 1,
    KYC_REJECTED = 2,
    KYC_NOT_PROCESSABLE_FOREVER = 3,
    KYC_FIX_REQUEST = 4,
    KYC_ADMIN_DENIED = 5,
    /**
     * SUPPORT_TICKET_SUBMITTED - Support ticket templates
     * Target: End User
     */
    SUPPORT_TICKET_SUBMITTED = 6,
    /** BILLING_LOW_BALANCE_WARNING - Billing */
    BILLING_LOW_BALANCE_WARNING = 7,
    /**
     * ORGANIZATION_ONBOARDING - Organization Templates
     * Target: Organization Admin
     */
    ORGANIZATION_ONBOARDING = 100,
    /** ORGANIZATION_NEW_ADMIN - New org admin added */
    ORGANIZATION_NEW_ADMIN = 101,
    UNRECOGNIZED = -1
}
export declare function emailTemplateTypeFromJSON(object: any): EmailTemplateType;
export declare function emailTemplateTypeToJSON(object: EmailTemplateType): string;
/** Key: OrganizationID-Network-EmailTemplateType */
export interface EmailTemplate {
    EmailTemplate: EmailTemplateDetails | undefined;
    Audit: Audit | undefined;
}
export interface EmailTemplateDetails {
    Type: EmailTemplateType;
    /** If not set, this is a System template */
    OrganizationID?: string | undefined;
    /** Display Name */
    Name: string;
    /** Email Subject */
    Subject: string;
    /** HTML content */
    HTML: string;
    /** Description for internal use */
    Description: string;
    /** fallback for HTML content */
    PlainText: string;
    /** Non-standard metadata: Network here is optional. In other cases it is almost always required */
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
    Network?: Network | undefined;
}
export interface EmailTemplates {
    EmailTemplates: EmailTemplate[];
}
export declare const EmailTemplate: {
    encode(message: EmailTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailTemplate;
    fromJSON(object: any): EmailTemplate;
    toJSON(message: EmailTemplate): unknown;
    create<I extends {
        EmailTemplate?: {
            Type?: EmailTemplateType | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Subject?: string | undefined;
            HTML?: string | undefined;
            Description?: string | undefined;
            PlainText?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: Network | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        EmailTemplate?: ({
            Type?: EmailTemplateType | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Subject?: string | undefined;
            HTML?: string | undefined;
            Description?: string | undefined;
            PlainText?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: Network | undefined;
        } & {
            Type?: EmailTemplateType | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Subject?: string | undefined;
            HTML?: string | undefined;
            Description?: string | undefined;
            PlainText?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: Network | undefined;
        } & { [K in Exclude<keyof I["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EmailTemplate>]: never; }>(base?: I | undefined): EmailTemplate;
    fromPartial<I_1 extends {
        EmailTemplate?: {
            Type?: EmailTemplateType | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Subject?: string | undefined;
            HTML?: string | undefined;
            Description?: string | undefined;
            PlainText?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: Network | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        EmailTemplate?: ({
            Type?: EmailTemplateType | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Subject?: string | undefined;
            HTML?: string | undefined;
            Description?: string | undefined;
            PlainText?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: Network | undefined;
        } & {
            Type?: EmailTemplateType | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Subject?: string | undefined;
            HTML?: string | undefined;
            Description?: string | undefined;
            PlainText?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: Network | undefined;
        } & { [K_3 in Exclude<keyof I_1["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof EmailTemplate>]: never; }>(object: I_1): EmailTemplate;
};
export declare const EmailTemplateDetails: {
    encode(message: EmailTemplateDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailTemplateDetails;
    fromJSON(object: any): EmailTemplateDetails;
    toJSON(message: EmailTemplateDetails): unknown;
    create<I extends {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Subject?: string | undefined;
        HTML?: string | undefined;
        Description?: string | undefined;
        PlainText?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: Network | undefined;
    } & {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Subject?: string | undefined;
        HTML?: string | undefined;
        Description?: string | undefined;
        PlainText?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof EmailTemplateDetails>]: never; }>(base?: I | undefined): EmailTemplateDetails;
    fromPartial<I_1 extends {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Subject?: string | undefined;
        HTML?: string | undefined;
        Description?: string | undefined;
        PlainText?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: Network | undefined;
    } & {
        Type?: EmailTemplateType | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Subject?: string | undefined;
        HTML?: string | undefined;
        Description?: string | undefined;
        PlainText?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EmailTemplateDetails>]: never; }>(object: I_1): EmailTemplateDetails;
};
export declare const EmailTemplates: {
    encode(message: EmailTemplates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailTemplates;
    fromJSON(object: any): EmailTemplates;
    toJSON(message: EmailTemplates): unknown;
    create<I extends {
        EmailTemplates?: {
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        EmailTemplates?: ({
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            EmailTemplate?: ({
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } & {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } & { [K in Exclude<keyof I["EmailTemplates"][number]["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_1 in Exclude<keyof I["EmailTemplates"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["EmailTemplates"][number], keyof EmailTemplate>]: never; })[] & { [K_3 in Exclude<keyof I["EmailTemplates"], keyof {
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "EmailTemplates">]: never; }>(base?: I | undefined): EmailTemplates;
    fromPartial<I_1 extends {
        EmailTemplates?: {
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        EmailTemplates?: ({
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            EmailTemplate?: ({
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } & {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } & { [K_5 in Exclude<keyof I_1["EmailTemplates"][number]["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["EmailTemplates"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["EmailTemplates"][number], keyof EmailTemplate>]: never; })[] & { [K_8 in Exclude<keyof I_1["EmailTemplates"], keyof {
            EmailTemplate?: {
                Type?: EmailTemplateType | undefined;
                OrganizationID?: string | undefined;
                Name?: string | undefined;
                Subject?: string | undefined;
                HTML?: string | undefined;
                Description?: string | undefined;
                PlainText?: string | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Network?: Network | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "EmailTemplates">]: never; }>(object: I_1): EmailTemplates;
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
