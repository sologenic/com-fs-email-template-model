# Email Template

The email template proto provides all the functionality required to interact with the email template service.

## Client

The client for golang and typescript are provided in the `/client` directory.

## Start the service

The client is self initializing. For this it requires the following environment variable:

- `EMAIL_TEMPLATE_STORE` - The host of the service. Host is in the format `host:port`
- `EMAIL_TEMPLATE_STORE_TESTING` - Starts the GRPC service in testmode with an in memory buffer. Presence of the variable with the value `TRUE` is required to put the client in test mode.

If the client is included and the non of the env variable is set, the client panics.

## Building the required files

Once the proto file is updated, the following files need to be generated:

* go - emailtemplate.pb.go, emailtemplate-grpc.pb.go
* typescript - emailtemplate.ts

Generating these files can be done by running a build script with following command, which will also generate a build dir and add newly generated files and dir to git commit.

```sh
./bin/build.sh
```

## Template Variables

Email templates support variable substitution using the Go template syntax. The available variables depend on the template type:
TemplateData are defined `/domain/emailtemplate.go` and are passed to the template when rendering.

### KYC Email Templates (Types 1-5)

These templates receive a `KYCEmailData` structure with the following variables:

| Variable               | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `{{.UserName}}`        | The user's display name                            |
| `{{.RejectionReason}}` | Reason for KYC rejection (for rejection templates) |
| `{{.ExternalUserID}}`  | External user identifier                           |
| `{{.AccountID}}`       | Internal account ID                                |
| `{{.ClientComment}}`   | Comment provided by the client                     |
| `{{.AdminComment}}`    | Comment provided by the administrator              |

### Organization Templates (Type 100+)

These templates receive an `OrganizationEmailData` structure with:

| Variable          | Description                        |
| ----------------- | ---------------------------------- |
| `{{.AdminName}}`  | Organization administrator's name  |
| `{{.AdminEmail}}` | Organization administrator's email |


## Creating New Email Template Types: End-to-End Flow

This section describes how to add a new email template type to the system.

> **Note**: Only Sologenic admin can add new email template types.

1. Define the Template Type in Proto Definition

First, add a new enum value to `EmailTemplateType` in `com-fs-email-template-model/emailtemplate.proto`:

```protobuf
enum EmailTemplateType {
    // Existing types...
    
    // Add your new template type
    NEW_NOTIFICATION_TYPE = 101;
}
```

2. Define Template Data Structure
Add or update the appropriate data structure in com-fs-email-template-model/domain/email.go:

```go
// For existing data structures, add new fields as needed
type ExistingEmailData struct {
    ExistingField string
    NewField      string  // Add new fields to existing structures
}

// Or create a new data structure for your template type
type NewTemplateData struct {
    RecipientName string
    CustomField   string
}
```

3. Register the Template Type in EmailTemplateDataRegistry Add your new template type to the registry in `emailtemplate.go`:

```go
var EmailTemplateDataRegistry = map[emailtemplate.EmailTemplateType]reflect.Type{
    // ...    
    // Add your new template type
    emailtemplate.EmailTemplateType_NEW_NOTIFICATION_TYPE: reflect.TypeOf(NewTemplateData{}),
}
```

This registry enables:
* Automatic field name discovery for templates
* Type-safe parameter validation and extraction
* Consistent data structures across the application

4. Create System Template
Sign in to the Admin dashboard as Sologenic Admin account and create a new system template with the new template type.

5. Implement Notification Handler
Add a handler in the notification service (`com-be-notification-email-listener`) to use your template.
