angular.module("matchminerUiApp")

.constant("ENV", {
	"elasticsearch": {
		"proxy": "https://dshihlab01.sbms.hku.hk:1952/api/es",
		"index": "matchminer"
	},
	"proxyHost": "http://localhost:5000",
	"api": {
		"host": "https://dshihlab01.sbms.hku.hk:1952",
		"endpoint": "/api"
	},
	"loginButtonText": "Login",
	"devUser": {
		"token" : "add-dev-user-token-here",
    "user_id" : "add-dev-user-id-here"
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