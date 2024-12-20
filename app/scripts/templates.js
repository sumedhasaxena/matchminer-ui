angular.module("matchminer-templates", [])

.constant("TEMPLATES", {
	"patient_view": {
		"deceased_multi_sample_warning": "According to EPIC, this patient is deceased. Additionally, this patient has results available from multiple samples. You can view genomic details for the patient, but all clinical trial matches have been de-activated.",
		"multiple_samples_info": "This patient has results available from multiple samples. Any computed clinical trial matches are applicable only to the selected sample.",
		"not_matched": "This patient has not been matched to clinical trials."
	},
	"matches_view": {
		"email_provider_tooltip": "Email provider"
	},
	"clinical_trial": {
		"contact_coordinator_subject": "Inquiry regarding clinical trial",
		"contact_coordinator_body": ""
	}
})

;