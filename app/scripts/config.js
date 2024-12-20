angular.module("matchminerUiApp")

.constant("ENV", {
	"elasticsearch": {
		"proxy": "http://localhost:1952/api/es",
		"index": "matchminer"
	},
	"proxyHost": "http://localhost:5000",
	"api": {
		"host": "http://localhost:1952",
		"endpoint": "/api"
	},
	"loginButtonText": "Login",
	"devUser": {
		"token": "fb4d6830-d3aa-481b-bcd6-270d69790e11",
		"user_id": "577cf6ef2b9920002cef0337"
	},
	"sessionTimeout": {
		"idleAllowed": 2700,
		"idleCountdown": 30
	},
	"matomo": null,
	"slsUrl": null,
	"resources": {
		"oncpro_base": null,
		"ctgov_base": "https://clinicaltrials.gov/ct2/show/",
		"logo": "matchminer_hkumed_logo2.png",
		"institution": "DFCI",
		"institutionFull": null,
		"email": "sbms@hku.hk",
		"emailSecondary": "sbms@hku.hk"
	},
	"EPIC": false,
	"cBio": false,
	"linkToHomePage": "http://localhost:1952",
	"allowsEpic": true,
	"oncopanelPDFLink": null,
	"accessRequestFormLink": null,
	"oncologistAccessLink": null,
	"hideSavePrintWarning": true,
	"bannerExpirationDays": 14,
	"oncotreeLink": null,
	"immunoprofileEmail": null
})

;