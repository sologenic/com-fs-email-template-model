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
    SUPPORT_TICKET_SUBMITTED = 6,
    /**
     * ORGANIZATION_ONBOARDING - Organization Templates (configurable by Sologenic Admin)
     * Target: Organization Admin
     */
    ORGANIZATION_ONBOARDING = 100,
    UNRECOGNIZED = -1
}
export declare function emailTemplateTypeFromJSON(object: any): EmailTemplateType;
export declare function emailTemplateTypeToJSON(object: EmailTemplateType): string;
export declare enum Section {
    NOT_USED_EMAIL_SECTION = 0,
    SUBJECT = 1,
    HEADER = 2,
    /** BODY_INTRO - Greeting, introduction, etc. */
    BODY_INTRO = 3,
    /** BODY_MAIN - Main content of the email */
    BODY_MAIN = 4,
    /** BODY_DETAILS - Additional details or information if needed */
    BODY_DETAILS = 5,
    FOOTER = 6,
    SIGNATURE = 7,
    UNRECOGNIZED = -1
}
export declare function sectionFromJSON(object: any): Section;
export declare function sectionToJSON(object: Section): string;
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
    TextElements: TextElement[];
}
export interface EmailTemplates {
    EmailTemplates: EmailTemplate[];
}
export interface TextElement {
    /** Block identifier */
    Section: Section;
    /** The content text */
    Content: string;
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
            TextElements?: {
                Section?: Section | undefined;
                Content?: string | undefined;
            }[] | undefined;
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
            TextElements?: {
                Section?: Section | undefined;
                Content?: string | undefined;
            }[] | undefined;
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
            TextElements?: ({
                Section?: Section | undefined;
                Content?: string | undefined;
            }[] & ({
                Section?: Section | undefined;
                Content?: string | undefined;
            } & {
                Section?: Section | undefined;
                Content?: string | undefined;
            } & { [K in Exclude<keyof I["EmailTemplate"]["TextElements"][number], keyof TextElement>]: never; })[] & { [K_1 in Exclude<keyof I["EmailTemplate"]["TextElements"], keyof {
                Section?: Section | undefined;
                Content?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_3 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof EmailTemplate>]: never; }>(base?: I | undefined): EmailTemplate;
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
            TextElements?: {
                Section?: Section | undefined;
                Content?: string | undefined;
            }[] | undefined;
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
            TextElements?: {
                Section?: Section | undefined;
                Content?: string | undefined;
            }[] | undefined;
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
            TextElements?: ({
                Section?: Section | undefined;
                Content?: string | undefined;
            }[] & ({
                Section?: Section | undefined;
                Content?: string | undefined;
            } & {
                Section?: Section | undefined;
                Content?: string | undefined;
            } & { [K_5 in Exclude<keyof I_1["EmailTemplate"]["TextElements"][number], keyof TextElement>]: never; })[] & { [K_6 in Exclude<keyof I_1["EmailTemplate"]["TextElements"], keyof {
                Section?: Section | undefined;
                Content?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof EmailTemplate>]: never; }>(object: I_1): EmailTemplate;
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
        TextElements?: {
            Section?: Section | undefined;
            Content?: string | undefined;
        }[] | undefined;
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
        TextElements?: ({
            Section?: Section | undefined;
            Content?: string | undefined;
        }[] & ({
            Section?: Section | undefined;
            Content?: string | undefined;
        } & {
            Section?: Section | undefined;
            Content?: string | undefined;
        } & { [K in Exclude<keyof I["TextElements"][number], keyof TextElement>]: never; })[] & { [K_1 in Exclude<keyof I["TextElements"], keyof {
            Section?: Section | undefined;
            Content?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EmailTemplateDetails>]: never; }>(base?: I | undefined): EmailTemplateDetails;
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
        TextElements?: {
            Section?: Section | undefined;
            Content?: string | undefined;
        }[] | undefined;
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
        TextElements?: ({
            Section?: Section | undefined;
            Content?: string | undefined;
        }[] & ({
            Section?: Section | undefined;
            Content?: string | undefined;
        } & {
            Section?: Section | undefined;
            Content?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["TextElements"][number], keyof TextElement>]: never; })[] & { [K_4 in Exclude<keyof I_1["TextElements"], keyof {
            Section?: Section | undefined;
            Content?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof EmailTemplateDetails>]: never; }>(object: I_1): EmailTemplateDetails;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: ({
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] & ({
                    Section?: Section | undefined;
                    Content?: string | undefined;
                } & {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                } & { [K in Exclude<keyof I["EmailTemplates"][number]["EmailTemplate"]["TextElements"][number], keyof TextElement>]: never; })[] & { [K_1 in Exclude<keyof I["EmailTemplates"][number]["EmailTemplate"]["TextElements"], keyof {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["EmailTemplates"][number]["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_3 in Exclude<keyof I["EmailTemplates"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["EmailTemplates"][number], keyof EmailTemplate>]: never; })[] & { [K_5 in Exclude<keyof I["EmailTemplates"], keyof {
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "EmailTemplates">]: never; }>(base?: I | undefined): EmailTemplates;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
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
                TextElements?: ({
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] & ({
                    Section?: Section | undefined;
                    Content?: string | undefined;
                } & {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                } & { [K_7 in Exclude<keyof I_1["EmailTemplates"][number]["EmailTemplate"]["TextElements"][number], keyof TextElement>]: never; })[] & { [K_8 in Exclude<keyof I_1["EmailTemplates"][number]["EmailTemplate"]["TextElements"], keyof {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I_1["EmailTemplates"][number]["EmailTemplate"], keyof EmailTemplateDetails>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["EmailTemplates"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["EmailTemplates"][number], keyof EmailTemplate>]: never; })[] & { [K_12 in Exclude<keyof I_1["EmailTemplates"], keyof {
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
                TextElements?: {
                    Section?: Section | undefined;
                    Content?: string | undefined;
                }[] | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, "EmailTemplates">]: never; }>(object: I_1): EmailTemplates;
};
export declare const TextElement: {
    encode(message: TextElement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TextElement;
    fromJSON(object: any): TextElement;
    toJSON(message: TextElement): unknown;
    create<I extends {
        Section?: Section | undefined;
        Content?: string | undefined;
    } & {
        Section?: Section | undefined;
        Content?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TextElement>]: never; }>(base?: I | undefined): TextElement;
    fromPartial<I_1 extends {
        Section?: Section | undefined;
        Content?: string | undefined;
    } & {
        Section?: Section | undefined;
        Content?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TextElement>]: never; }>(object: I_1): TextElement;
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
