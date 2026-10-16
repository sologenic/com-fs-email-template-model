package emailtemplate

import (
	"fmt"
	"reflect"

	emailtemplate "github.com/sologenic/com-fs-email-template-model"
)

// TemplateData is a marker interface for all template data types
type TemplateData any

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
	emailtemplate.EmailTemplateType_KYC_APPROVED:                reflect.TypeFor[KYCEmailData](),
	emailtemplate.EmailTemplateType_KYC_REJECTED:                reflect.TypeFor[KYCEmailData](),
	emailtemplate.EmailTemplateType_KYC_NOT_PROCESSABLE_FOREVER: reflect.TypeFor[KYCEmailData](),
	emailtemplate.EmailTemplateType_KYC_FIX_REQUEST:             reflect.TypeFor[KYCEmailData](),
	emailtemplate.EmailTemplateType_KYC_ADMIN_DENIED:            reflect.TypeFor[KYCEmailData](),
	// Organization Templates
	emailtemplate.EmailTemplateType_ORGANIZATION_ONBOARDING: reflect.TypeFor[OrganizationEmailData](),
	emailtemplate.EmailTemplateType_ORGANIZATION_NEW_ADMIN:  reflect.TypeFor[OrganizationEmailData](),
	// Billing Templates
	emailtemplate.EmailTemplateType_BILLING_LOW_BALANCE_WARNING: reflect.TypeFor[BillingLowBalanceWarningData](),
	// Referral Templates
	emailtemplate.EmailTemplateType_REFERRAL_SHARED: reflect.TypeFor[ReferralSharedData](),
	// Partner Templates
	emailtemplate.EmailTemplateType_PARTNER_ONBOARDING:      reflect.TypeFor[PartnerEmailData](),
	emailtemplate.EmailTemplateType_AUTH_PASSWORD_RESET:     reflect.TypeFor[AuthActionEmailData](),
	emailtemplate.EmailTemplateType_AUTH_EMAIL_VERIFICATION: reflect.TypeFor[AuthActionEmailData](),
	emailtemplate.EmailTemplateType_AUTH_MFA_ENROLLED:       reflect.TypeFor[MFAEnrolledEmailData](),
	emailtemplate.EmailTemplateType_AUTH_MFA_RESET:          reflect.TypeFor[MFAEnrolledEmailData](),
	// Elite Club Membership Request
	emailtemplate.EmailTemplateType_ELITE_CLUB_MEMBERSHIP_REQUEST_APPROVED: reflect.TypeFor[EliteClubMembershipEmailData](),
	emailtemplate.EmailTemplateType_ELITE_CLUB_MEMBERSHIP_REQUEST_REJECTED: reflect.TypeFor[EliteClubMembershipEmailData](),
}

func FieldNamesForTemplateType(templateType emailtemplate.EmailTemplateType) ([]string, error) {
	if dataType, exists := EmailTemplateDataRegistry[templateType]; exists {
		numFields := dataType.NumField()
		fieldNames := make([]string, numFields)
		for i := range numFields {
			fieldNames[i] = dataType.Field(i).Name
		}
		return fieldNames, nil
	}
	return nil, fmt.Errorf("template type %s not found in registry", templateType)
}
