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
	InviteCode string
}

type PartnerEmailData struct {
	PartnerName  string
	PartnerEmail string
	InviteCode   string
}

type BillingLowBalanceWarningData struct {
	AdminName        string
	OrganizationName string
	CurrentBalance   string
	Threshold        string
	TriggerType      string
}

type ReferralSharedData struct {
	UserName     string
	ReferralLink string
}

type AuthActionEmailData struct {
	ActionLink string
	UserName   string
}

type MFAEnrolledEmailData struct {
	UserName  string
	UserEmail string
}

type EliteClubMembershipEmailData struct {
}

var EmailTemplateDataRegistry = map[emailtemplate.EmailTemplateType]reflect.Type{
	// KYC Email Templates
	emailtemplate.EmailTemplateType_KYC_APPROVED:                reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_REJECTED:                reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_NOT_PROCESSABLE_FOREVER: reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_FIX_REQUEST:             reflect.TypeOf(KYCEmailData{}),
	emailtemplate.EmailTemplateType_KYC_ADMIN_DENIED:            reflect.TypeOf(KYCEmailData{}),
	// Organization Templates
	emailtemplate.EmailTemplateType_ORGANIZATION_ONBOARDING: reflect.TypeOf(OrganizationEmailData{}),
	emailtemplate.EmailTemplateType_ORGANIZATION_NEW_ADMIN:  reflect.TypeOf(OrganizationEmailData{}),
	// Billing Templates
	emailtemplate.EmailTemplateType_BILLING_LOW_BALANCE_WARNING: reflect.TypeOf(BillingLowBalanceWarningData{}),
	// Referral Templates
	emailtemplate.EmailTemplateType_REFERRAL_SHARED: reflect.TypeOf(ReferralSharedData{}),
	// Partner Templates
	emailtemplate.EmailTemplateType_PARTNER_ONBOARDING: reflect.TypeOf(PartnerEmailData{}),
	emailtemplate.EmailTemplateType_AUTH_PASSWORD_RESET:     reflect.TypeOf(AuthActionEmailData{}),
	emailtemplate.EmailTemplateType_AUTH_EMAIL_VERIFICATION: reflect.TypeOf(AuthActionEmailData{}),
	emailtemplate.EmailTemplateType_AUTH_MFA_ENROLLED:       reflect.TypeOf(MFAEnrolledEmailData{}),
	emailtemplate.EmailTemplateType_AUTH_MFA_RESET:         reflect.TypeOf(MFAEnrolledEmailData{}),
	// Elite Club Membership Request
	emailtemplate.EmailTemplateType_ELITE_CLUB_MEMBERSHIP_REQUEST_APPROVED: reflect.TypeOf(EliteClubMembershipEmailData{}),
	emailtemplate.EmailTemplateType_ELITE_CLUB_MEMBERSHIP_REQUEST_REJECTED: reflect.TypeOf(EliteClubMembershipEmailData{}),
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
