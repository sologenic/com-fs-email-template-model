package emailtemplate

import (
	"fmt"
	"reflect"

	emailtemplate "github.com/sologenic/com-fs-email-template-model"
)

// TemplateData is a marker interface for all template data types
type TemplateData interface{}

type KYCEmailData struct {
	UserName        string
	RejectionReason string
	ExternalUserID  string
	AccountID       string
	ClientComment   string
	AdminComment    string
}

type OrganizationEmailData struct {
	AdminName  string
	AdminEmail string
}

type SupportTicketSubmissionData struct {
	UserName              string
	TicketID              string
	SubmissionTime        string
	ExpectedResponseHours string
}

type ParameterMeta struct {
	Key         string
	Label       string
	Description string
	Required    bool
}

var EmailTemplateDataRegistry = map[emailtemplate.EmailTemplateType]reflect.Type{
	// KYC Email Templates
	emailtemplate.EmailTemplateType_KYC_APPROVED:                reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_REJECTED:                reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_NOT_PROCESSABLE_FOREVER: reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_FIX_REQUEST:             reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_ADMIN_DENIED:            reflect.TypeOf(KYCEmailData{}),
	// Support Ticket Templates
	emailtemplate.EmailTemplateType_SUPPORT_TICKET_SUBMITTED: reflect.TypeOf(SupportTicketSubmissionData{}),
	// Organization Templates
	emailtemplate.EmailTemplateType_ORGANIZATION_ONBOARDING: reflect.TypeOf(OrganizationEmailData{}),
}

func FieldNamesForTemplateType(templateType emailtemplate.EmailTemplateType) ([]string, error) {
	if dataType, exists := EmailTemplateDataRegistry[templateType]; exists {
		numFields := dataType.NumField()
		fieldNames := make([]string, numFields)
		for i := 0; i < numFields; i++ {
			fieldNames[i] = dataType.Field(i).Name
		}
		return fieldNames, nil
	}
	return nil, fmt.Errorf("template type %s not found in registry", templateType)
}
