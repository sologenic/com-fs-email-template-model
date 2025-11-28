# Email Template Documentation

## Table of Contents

- [Overview](#overview)
- [emailtemplate.proto](#emailtemplate)
  - [Messages](#messages)
    - [EmailTemplate](#emailtemplate)
    - [EmailTemplateDetails](#emailtemplatedetails)
    - [EmailTemplates](#emailtemplates)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Email Template provides a comprehensive data structure for managing email template within the system. This model supports organizational context: links items to organizations via organizationid, metadata and audit: includes metadata and audit trails for tracking changes, and more. 

Key features of the {model_name.lower()} model include:
- **Organizational Context**: Links items to organizations via OrganizationID
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes

## emailtemplate.proto

### Package Information

- **Package Name**: `emailtemplate`
- **Go Package Path**: `github.com/sologenic/com-fs-email-template-model;emailtemplate`

### Overview

The `emailtemplate.proto` file defines the core emailtemplate model for email template management. It provides message types for representing emailtemplate data and operations. The file integrates with external utility libraries: `metadata.proto`, `audit.proto`.

### Messages

#### EmailTemplate {#emailtemplate}

The `EmailTemplate` message provides emailtemplate data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| EmailTemplate | `EmailTemplateDetails` | Required | EmailTemplate field |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |

**Use Cases:**
- Creating new emailtemplate records
- Retrieving emailtemplate information
- Updating emailtemplate data

**Important Notes:**
- This message provides the emailtemplate representation

#### EmailTemplateDetails {#emailtemplatedetails}

The `EmailTemplateDetails` message contains all the core information about a emailtemplate, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Type | `EmailTemplateType` | Required | Type classification for this item (see related enum) |
| OrganizationID | `string` | Optional | If not set, this is a System template |
| Name | `string` | Required | Display Name |
| Subject | `string` | Required | Email Subject |
| HTML | `string` | Required | HTML content |
| Description | `string` | Required | Description for internal use |
| PlainText | `string` | Required | fallback for HTML content |
| CreatedAt | `google.protobuf.Timestamp` | Required | CreatedAt field |
| UpdatedAt | `google.protobuf.Timestamp` | Required | UpdatedAt field |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |

**Use Cases:**
- Creating new emailtemplate records with complete information
- Updating emailtemplate information
- Associating items with specific organizations

**Important Notes:**
- The `OrganizationID` must be a valid UUID format

#### EmailTemplates {#emailtemplates}

The `EmailTemplates` message represents a collection of emailtemplate with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| EmailTemplates | `EmailTemplate` | Optional | EmailTemplates field |

**Use Cases:**
- Returning paginated lists of emailtemplate from queries or searches
- Implementing pagination in emailtemplate listing APIs
- Handling large emailtemplates efficiently

**Important Notes:**
- This message provides the emailtemplates representation

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `emailtemplate.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `emailtemplate.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
