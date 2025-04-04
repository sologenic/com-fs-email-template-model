package emailtemplate

import (
	emailtemplategrpc "github.com/sologenic/com-fs-email-template-model"
)

// TemplateData is a marker interface for all template data types
type TemplateData interface{}

type TemplateContent struct {
	Data         TemplateData
	Translations []*emailtemplategrpc.TextElement
}

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
	SupportEmail          string
}
