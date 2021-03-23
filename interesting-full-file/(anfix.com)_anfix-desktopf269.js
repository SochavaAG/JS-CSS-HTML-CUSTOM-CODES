/**
 * Documento Confidencial.
 * 
 * @file constants.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date December, 2012
 * @brief js with constants
 */

Constants = {
	PROTOCOL					: "https:",
	AUTH_DOMAIN                                     : "https://login.anfix.com/registro",
	LOGIN_NEW					: "https://login.anfix.com/entrar",
	INVITATION_REDIRECT				: "https://login.anfix.com/invitacion-empresa",
	DOMAIN						: "apps.anfix.com",/*"kokeapps.anfix.com:8080",*/
	DOMAIN_CRM					: "bm.anfix.com",/*"localhost:8888",*/
	DOMAIN_CDN					: "http://cdn.anfix.com/",
	BETA_DOMAIN				: "betaapps.anfix.com",
	STABLE_DOMAIN				: "apps.anfix.com",
	BETA_URL_PROFIT			: "https://beta-profit.anfix.com/profit/",
	STABLE_URL_PROFIT		: "https://profit.anfix.com/profit/",
	LOGIN_SERVICE				: "os/os/parc/user/login",
	HOME						: "os/Desktop.html",
	HOME_PROFIT					: "digit/app",
	URL_PROFIT					: "https://profit.anfix.com/profit/",
	PATH_EXPENSES_HOME                                      : "/accountingInbox/pending",
        URL_EXPENSES                                    : "https://exp-profit.anfix.com/profit/",
	WEB				    		: "anfix.com",
	LOGIN						: "os",
	VAT						: 21,
	UPGRADE_USER                            : '/digit/digit/parc/user/upgrade',
	BOOT_DATA					: 'digit/digit/parc/boot/getbootdata',
	INVITATIONS_ACCEPT    : 'os/os/parc/user/invitation/accept',
	INVITATIONS_ACCEPT_ADVISOR			: '/os/os/parc/user/invitation/acceptpendingbc',
	CREATE_ONE_STEP				: "digit/digit/parc/user/createonestep",
	CREATE_ONE_STEP_PROFIT				: "digit/digit/parc/user/createonestep",
	CONTRACT_CAMPAIGN				: 'bm/bm/parc/organization/contractcampaign',
	CHECKIN						: 'os/html/checkin/?status=',
	MEDIA						: 'os/media/upload',
	USER_SERVICE_CREATE				: "digit/digit/parc/user/create",
	CREATE_STEP_INFO			: "os/gui/web/step/create",
	UPDATE_STEP_INFO			: "os/gui/web/step/update",
	SEARCH_STEP_INFO			: "os/gui/web/step/search",
	USER_SERVICE_UPDATE         : "os/os/parc/user/update",
	ORGANIZATION_SERVICE_CREATE	: "os/os/parc/organization/create",
	ORGANIZATION_SERVICE_UPDATE	: "os/os/parc/organization/update",
	ORGANIZATION_SERVICE_SEARCH : "os/os/parc/organization/search",	
	USER_CONTRACT_INFO			: 'os/os/parc/product/getusercontractinfo',
	LOGIN_SERVICE_SIGNUP		: "../../../os/parc/user/login",
	CAMPAIGN_SERVICE_SEARCH		: "os/os/parc/campaign/search",
	CONTRACT_SERVICE_CREATE		: "../../../os/parc/organization/contract",
	PAYMENT_SERVICE_CREATE		: "os/os/parc/paychargemethod/create",
	MAIL_SERVICE_VALIDATE		: "os/os/parc/user/mail/validate",
	PASSWORD_SERVICE_RESTORE	: "os/os/parc/user/password/restore",
	PASSWORD_SERVICE_RESTORATION: "os/os/parc/user/password/restoration",
	CHECKOUT					: 'bm/bm/parc/organization/contractcampaign',
	GET_NAME_AND_IMAGE			: 'os/os/parc/user/getnameandimage',
	CHARGE_SERVICE				: 'os/os/parc/organization/shoppingcart/charge',
	CRM_SIGNUP_TRACKING_SERVICE : 'signup/php/signup.php',
	SEARCH_BIC_SERVICE 			: 'os/os/parc/bankaccount/bankinginstitutions/searchbic',
	AUTHORIZE_PARTNER_SERVICE	: 'os/os/parc/partner/authorize',
	WF_START					: "1",
	WF_USER_CREATED_INVITATION  : "2",
	WF_USER_CREATED				: "3",
	WF_ORGANIZATION_CREATED		: "4",
	WF_COMPLETED				: "5",
	START_TIMESTAMP	    		: "ts0",
	FINAL_TIMESTAMP	    		: "tsf",
	SEARCH_VAT					: 'os/gui/anfix/searchvat',
	SEARCH_BY_POSTAL_CODE		: 'os/os/parc/city/searchbypostalcode',
	SEARCH_COUNTRIES			: 'os/os/parc/country/search',
	SEARCH_PROVINCES			: 'os/os/parc/province/search',
	EXISTS_EMAIL				: 'os/os/parc/user/mail/exists',
	CONFIG_URL					: '/wp-content/themes/anfix-5.0/desktop/php/CustomizedCampaings.php',
	LOGIN_URL					: '/login/',
	SPAIN						: "1",
	INVITATION_SEARCH			: '/os/os/parc/user/invitation/search',
	ACCEPT_INVITATION			: '/os/os/parc/user/invitation/accept',
	DEFAULT_COUNTRY_ID				: '1',
    PROVINCES_WITHOUT_VAT           : ['Q', 'P', 'z', 'C'],
    EINFORMA_CODE_CAMPAIGN          : 'EINFGPT',
    CAMPAIGN_MAP                    : {
		"DEFAULT": {isFree:true},
		"EINFGPT": {isFree:true},
		"DEFAULT_2": {isFree:true},
		"ANFIXAPP": {isFree:true},
		"APPFPSM": {isFree:false, name: "FacturaPro Servicios Mensual", price: 9.90 },
		"APPFPSA": {isFree:false, name: "FacturaPro Servicios Anual",   price: 99.00 },
		"APPFPCM": {isFree:false, name: "FacturaPro Comercio  Mensual", price: 19.90 },
		"APPFPCA": {isFree:false, name: "FacturaPro Comercio  Anual",   price: 199.00 },
		"APPCPM":  {isFree:false, name: "anfix ContaPro Mensual", price: 29.90 },
		"APPCPA":  {isFree:false, name: "anfix ContaPro Anual",   price: 299.00 },
		"BDMEI2013": {isFree:false, name: "anfix Pro Pack Mensual", price: 29.90 },
		"BDAEI2013": {isFree:false, name: "anfix Pro Pack Anual",   price: 299.00 },
		"APPCONECO": {isFree:true, name: "Pro pack + touchpen", price: 0.00 }, 
		"APPAiP1113": {isFree:false, name: "config", requirePhone: true, onlySpain : true, price: 399.00, description:'ProPack + iPad', content: [
		 	{name: "FacturaPro Comercio Anual",   price: 199.00 },
		 	{name: "FacturaPro Servicios Anual",  price: 99.00 },
		 	{name: "anfix ContaPro Anual", price: 299.00 },
		 	{name: "iPad Mini",   price: 289.00 },
		 	{name: "Descuento Promocional",   price: -487.00 }
		 ] }
    },
    HIMDIA_URL              : 'http://fl01.ct2.comclick.com/vente_js.ct2?id_regie=7&num_campagne=1205&num_pixel_vente=1&montant=0&num_commande=NUM_COMMANDE&email=EMAIL',
    PAYCHARGEMETHOD_CARD: '5',
    PAYCHARGEMETHOD_URL: '../wp-content/themes/anfix-5.0/desktop/payChargeMethod.html',
	LAST_PENDING: 'os/os/parc/organization/shoppingcart/getlastpendingorcontracted',
	CANCEL_SHOPPING_CART : 'os/os/parc/organization/shoppingcart/cancel',
	CARD_PAYMENT: "1",
	BANKACCOUNT_PAYMENT	: "4",
	PENDING_PAYMENT_STATUS 	: "2",
	OK_PAYMENT_STATUS 		: "3",
	FAILURE_CHARGING 		: "4",
	PUBLIC_KEY_MODULE 		: 'ae62fc8b0e0dd829c3f86654389c2b076dfc04bc812b5525c1948eb9b5313a88d04bc36479f4cad6aa25153edba7732dcfdc0877433f0e9d6f606c76f40e5d7b36ddb556fab00c760f0774f6ac28db205d9fc9381bf39fee7b0a17398bab3cb65eea6d13c0646f9c02da1df0ee48a6314f57596e133a56e4f8e951b4a452dee3',
	PUBLIC_KEY_EXP 			: '10001',
	TYPE_FREELANCE			: "5",
	TYPE_PYME				: "4",
	TYPE_NEW_PYME			: "3",
	TYPE_PROFESSIONAL_OFFICE: "6",	
	TYPE_LEARNING_CENTER	: "2",
	TYPE_ONG				: "1",
	PROVINCES			: 	[{"ProvinceId":"1","ProvinceName":"Álava"},{"ProvinceId":"2","ProvinceName":"Albacete"},{"ProvinceId":"3","ProvinceName":"Alicante"},{"ProvinceId":"4","ProvinceName":"Almería"},{"ProvinceId":"x","ProvinceName":"Asturias"},
							{"ProvinceId":"5","ProvinceName":"Ávila"},{"ProvinceId":"6","ProvinceName":"Badajoz"},{"ProvinceId":"8","ProvinceName":"Barcelona"},
							{"ProvinceId":"9","ProvinceName":"Burgos"},{"ProvinceId":"a","ProvinceName":"Cáceres"},{"ProvinceId":"b","ProvinceName":"Cádiz"},{"ProvinceId":"D","ProvinceName":"Cantabria"},
							{"ProvinceId":"c","ProvinceName":"Castellón"},{"ProvinceId":"P","ProvinceName":"Ceuta"},{"ProvinceId":"d","ProvinceName":"Ciudad Real"},{"ProvinceId":"e","ProvinceName":"Córdoba"},
							{"ProvinceId":"g","ProvinceName":"Cuenca"},{"ProvinceId":"h","ProvinceName":"Gerona"},{"ProvinceId":"i","ProvinceName":"Granada"},{"ProvinceId":"j","ProvinceName":"Guadalajara"},{"ProvinceId":"k","ProvinceName":"Guipúzcoa"},
							{"ProvinceId":"l","ProvinceName":"Huelva"},	{"ProvinceId":"m","ProvinceName":"Huesca"},	{"ProvinceId":"7","ProvinceName":"Islas Baleares"},	{"ProvinceId":"n","ProvinceName":"Jaén"},{"ProvinceId":"f","ProvinceName":"La Coruña"},
							{"ProvinceId":"q","ProvinceName":"La Rioja"},{"ProvinceId":"z","ProvinceName":"Las Palmas"},{"ProvinceId":"o","ProvinceName":"León"},{"ProvinceId":"p","ProvinceName":"Lérida"},{"ProvinceId":"r","ProvinceName":"Lugo"},
							{"ProvinceId":"s","ProvinceName":"Madrid"},{"ProvinceId":"t","ProvinceName":"Málaga"},{"ProvinceId":"Q","ProvinceName":"Melilla"},{"ProvinceId":"u","ProvinceName":"Murcia"},{"ProvinceId":"v","ProvinceName":"Navarra"},
							{"ProvinceId":"w","ProvinceName":"Orense"},	{"ProvinceId":"y","ProvinceName":"Palencia"},{"ProvinceId":"A","ProvinceName":"Pontevedra"},{"ProvinceId":"B","ProvinceName":"Salamanca"},{"ProvinceId":"C","ProvinceName":"Santa Cruz de Tenerife"},
							{"ProvinceId":"E","ProvinceName":"Segovia"},{"ProvinceId":"F","ProvinceName":"Sevilla"},{"ProvinceId":"G","ProvinceName":"Soria"},{"ProvinceId":"H","ProvinceName":"Tarragona"},{"ProvinceId":"I","ProvinceName":"Teruel"},
							{"ProvinceId":"J","ProvinceName":"Toledo"},{"ProvinceId":"K","ProvinceName":"Valencia"},{"ProvinceId":"L","ProvinceName":"Valladolid"},{"ProvinceId":"M","ProvinceName":"Vizcaya"},{"ProvinceId":"N","ProvinceName":"Zamora"},
							{"ProvinceId":"O","ProvinceName":"Zaragoza"}],
	URL_PARAM_FROM_RECOVERY: '1',
	URL_PARAM_FROM_EMAIL_VALIDATION: '2',
	LOGIN_TARGETPIXEL_TRIAL: 1,
	LOGIN_TARGETPIXEL_PAYMENT: 2,
	LOGIN_TARGETPIXEL_EMAIL_VALIDATION: 3,
	COMMERCIAL_PROPERTY_PRICE : "1",
	COMMERCIAL_PROPERTY_FREQUENCY : "2",
	COMMERCIAL_PROPERTY_DETAIL : "9",
	COMMERCIAL_PROPERTY_SPEC_TYPE_SILVER : "5",
	COMMERCIAL_PROPERTY_SPEC_TYPE_GOLD : "6",	
	PRODUCTID_FACTURAPRO_COMERCIO: "1",
	PRODUCTID_FACTURAPRO_SERVICIOS: "2",
	PRODUCTID_CONTAPRO: "3",
	PRODUCTID_FACTURACION: "5",
	SMS					: '/wp-content/themes/anfix-5.0/desktop/php/sms.php',
	SEND_EMAIL			: '/wp-content/themes/anfix-5.0/desktop/php/sendWellcomeEmail.php',
	RESTORE_VERIFY_CODE	: '/wp-content/themes/anfix-5.0/desktop/php/restoreVerifyCode.php',
	VERIFY_CODE			: '/wp-content/themes/anfix-5.0/desktop/php/verifyCode.php',
	IS_VERIFIED_CODE	: '/wp-content/themes/anfix-5.0/desktop/php/verifiedCode.php',
	INSERT_USER_INTOUCH	: '/wp-content/themes/anfix-5.0/desktop/php/insertUserInTouch.php',
	VERIFIED_PHONE		: '/wp-content/themes/anfix-5.0/desktop/php/isVerifiedPhone.php',
	SET_VERIFIED_CODE	: '/wp-content/themes/anfix-5.0/desktop/php/setVerifiedPhone.php',
	SEM_AVANZA			: 'http://www.googleadservices.com/pagead/conversion/976213681/?value=<%=valorventa%>&amp;label=FRhnCJ-PpAcQsa2_0QM&amp;guid=ON&amp;script=0',
	SEM_PREMIUM		    : 'http://www.googleadservices.com/pagead/conversion/976213681/?value=<%=valorventa%>&amp;label=x5wkCJeQpAcQsa2_0QM&amp;guid=ON&amp;script=0',
	RTB_AVANZA			: 'http://4347385.fls.doubleclick.net/activityi;src=4347385;type=invmedia;cat=sgfqcjzu;ord=1?',
	RTB_PREMIUM			: 'http://4347385.fls.doubleclick.net/activityi;src=4347385;type=invmedia;cat=yrcuks6e;ord=1?',
	ADVISOR_CIF_EXISTS 	: 'advisors/php/advisors.php',
	ADVISOR_SAVE		: 'advisors/php/advisors.php',
	PIXEL_PHP			: '/php/pixel.php',
	SEND_EMAIL_LEAD		: '/php/sendEmailFromWeb.php',
	SET_COOKIE_PHP                  : '/php/setCookie.php',
        GET_COOKIES_PHP                 : '/php/getCookies.php',
        CLEAR_COOKIE_PHP                : '/php/clearCookie.php',
        CLEAR_COOKIES_PHP                : '/php/clearCookies.php',
        UNSET_COOKIES_FLAGS_PHP         : '/php/unsetCookiesFlags.php',
	GET_CC				: '/php/getURI.php',
	EINFORMA 			: 'os/os/einforma/companysearch/getdata',
	EINFORMA_PROFILE 	: 'os/os/einforma/companyprofile/getdata',
	UPDATE_COMPANY		: 'digit/digit/parc/company/update',//'os/os/parc/company/update',
	TEMPLATE_SEARCH		: 'os/os/parc/report/template/search',
	TEMPLATE_UPDATE		: 'os/os/parc/report/template/settings/update',
	TEMPLATE_PREVIEW	: 'os/os/parc/report/template/settings/preview',
	DOWNLOAD_MEDIA		: 'os/media/download?',
	TEMPLATE_DEFAULT	: 'facturapro-servicios/gestiona/servicios/report/templatedefault/create',
	TEMPLATE_ID			: '5,',
	COLOR_SETTING_KEY	: '1',
	CNAE_SEARCH			: '/os/os/parc/cnae/search',
	APP_CONTA         	: 'os/apps.html?appId=3',
	FB_ENABLED            : true,
	CREATE_ADVISOR		: '/php/createAdvisorProxy.php',
	LOGGER_WEB         	: '/php/LoggerWeb.php'
}

/**
 * Documento Confidencial.
 *
 * @file labels.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date December, 2012
 * @brief labels for users register.
 */
var LABELS_i18n = {
	//Main window
	'open.usersregister.button':	'Registrar usuario',
	'open.restorePassword.button':	'Recuperar contraseña',
	//users register
	'head.text.1':					'Necesitamos algunos datos tuyos',
	'head.text.2':					'Si tienes dudas llámanos al',
	'head.text.phone':				'900 37 37 50',
	'head.text.3':					'totalmente gratis',
	'field.name':					'',//'Nombre',
	'field.surname':				'Apellidos',
	'field.email':					'Correo electrónico',
	'field.pwd':					'Contraseña',
	'field.pwd.repeat':				'Repetir contraseña',
	'field.company.name':			'Nombre de la empresa',
	'field.fieldupload':			'Escritura Constitución',
	'button.select':				'Seleccionar',
	'info.text':					'Si tienes dudas llámanos al <span>900 37 37 50</span> totalmente gratis',
	'field.province':  				'Provincia',

	//signup Home
	'anfix.text.btn.submit.signup'			: 'Empieza a usar <span class="anfix-family">anfix</span>',
	'anfix.text.btn.submit.signup.error'	: 'ERROR',

	// error messages
	'anfix.login.typeCompanyName'	: 'Introduce el nombre de tu empresa',
	'anfix.login.typeName'			: 'Debes proporcionar un nombre de usuario',
	'anfix.login.typeSurname'		: 'Debes proporcionar al menos un apellido',
	'anfix.login.typeEmail'			: 'Debes introducir una dirección de correo electrónico correcta, pues ésta te servirá para identificarte en el sistema.',
	'anfix.login.typeEmail.required'   : 'La dirección de correo electrónico es obligatoria.',
	'anfix.login.typeEmail.valid' 	: 'La dirección del correo electrónico es incorrecta. Por favor introduce una dirección correcta.',
	'anfix.login.typePassword'		: 'Debes introducir una contraseña',
	'anfix.login.typePassword2'		: 'Debes introducir la contraseña en el campo "Repetir contraseña"',
	'anfix.login.password.restore.ok': 'La contraseña se ha restaurado correctamente. En breves instantes accederás a Anfix.',
	'anfix.login.typePassword.maxLenght': 'La contraseña debe tener al menos cuatro caracteres.',
	'anfix.login.typePassword2Incorrect': 'Las contraseñas no coinciden',
	'anfix.login.acceptTerms' 		: 'Para continuar es necesario que aceptes las Condiciones Generales del Servicio y la Política de Privacidad.',
	'anfix.login.fileupload' 		: 'Si tu empresa es ONG, centro de formación o empresa de nueva creación debes adjuntar la Escritura de Constitución o Fundación.',
	'anfix.login.typePhone.valid' 	: 'El formato del número de teléfono es incorrecto.',
	'anfix.login.typePhone' 		: 'Debes proporcionar un número de teléfono válido porque para conseguir el regalo recibirás un SMS que te ayudará a seguir con el proceso.',
	'anfix.login.companyname'		: 'Introduce el nombre de tu empresa',
	'anfix.checkin.payment.error.fileupload' : 'Se ha producido un error al enviar el documento.',
	'anfix.login.email.validation.ok': 'Su perfil de usuario Anfix se ha completado con éxito.',
	'anfix.login.restore.error'		 : 'Ha sucedido un error mientras se reestablecía su contraseña',
	'anfix.login.reset.error'		 : 'Ha sucedido un error mientras se recuperaba su contraseña',
	'anfix.login.error.access'		 : 'Tu usuario y contraseña no son correctos',
 	'anfix.login.error'			: 'Error en la  conexión',
	'anfix.login.sending'			: 'Enviando datos...',
	'anfix.login.password'			: 'Introduce contraseña',
	'anfix.login.user'			: 'Introduce email',
	'anfix.login.companyType'	: 'Debes escoger un tipo de negocio.',
	'anfix.login.organizationDeliveryAddressText' : 'Debes proporcionar una dirección para hacerte llegar el regalo',
	'anfix.login.organizationDeliveryAddressPostalCode' :'Debes introducir un código postal',
	'anfix.login.organizationDeliveryAddressPostalCode.format' :'El Código Postal no tiene formato correcto.',
	'anfix.login.organizationDeliveryAddressCity' :'Debes introducir una población para hacerte llegar el regalo',
	'anfix.login.organizationDeliveryAddressProvince' :'Debes escoger una provincia para hacerte llegar el regalo',
	'anfix.login.typeEmail.exists': 'Esta dirección de correo electrónico ya está dada de alta en anfix.',
	'anfix.login.typeEmail.exists.home' : 'Esta dirección de correo electrónico ya está dada de alta en el sistema. Para entrar con ella, pulsa el botón “Entrar” e introdúcelo junto con la contraseña.',

	 // error messages of SMS FORM
	'anfix.phone.code.required'	: 'Debes introducir el número PIN recibido en tu telefono por SMS.',
	'anfix.phone.code.length'		: 'El número PIN debe tener una longitud de 6 números. Revisa el número introducido. ',
	'anfix.phone.code.error'		: 'El número PIN introducido no es correcto.',
	'anfix.phone.forward.msg'		: 'Hemos procedido a reenviarte el SMS con el PIN. Por favor, introdúcelo en la casilla de más arriba y pulsa sobre el botón "Siguiente".',
	'anfix.phone.forward.error.msg'	: 'Aún es pronto para realizar un reenvío. Por favor, inténtalo pasado un minuto.',

	'anfix.login.organizationName'		: 'Introduce un nombre',
	'anfix.login.organizationIdentificationNumber': 'Debes proporcionar un CIF/NIF/NIE',
	'anfix.login.organizationIdentificationNumber.format': 'El formato del CIF/NIF/NIE es incorrecto. Por favor, revisa el campo.',
	'anfix.login.organizationCity': 'Debes introducir una ciudad',
	'anfix.login.organizationProvince': 'Debes informar una provincia',
	'anfix.login.organizationPostalCode': 'Debes proporcionar un código postal',
	'anfix.login.organizationCountry': 'Debes escoger un país',

	'anfix.login.organizationAddressText' : 'Desbes proporcionar una dirección.',
	'anfix.login.organizationPhoneNumber' : 'Introduce un número de teléfono',
	'anfix.campaign.other.country'        : 'Promoción no disponible fuera de España',

	//advisor form
	'anfix.advisor.typenotselected' 	: 'Debes seleccionar al menos un tipo de asesoría.',
	'anfix.advisor.required.field' 		: 'El campo es obligatorio.',
	'anfix.advisor.cif.already.exists' 	: 'El CIF introducido ya es miembro del Club anfix 2040.',
	'anfix.advisor.required.user.image' : 'Debe cargar su imagen de usuario.',
	'anfix.advisor.required.logo.image' : 'Debe cargar el logotipo de su empresa.',
	'anfix.advisor.save.error'			: 'Se ha producido un error al guardar los datos. Inténtelo de nuevo.',
	'anfix.advisor.save.ok'				: 'Hemos registrado tus datos, nos pondremos en contacto contigo lo antes posible.',
	'anfix.advisor.save.ok.source'		: 'Hemos registrado tus datos, gracias por darte de alta en el Club anfix 2040.',

	//company Types
	'company.type.ong':						'ONG',
	'company.type.trainingcenter':			'Centro de formación',
	'company.type.new.company.creation':	'Empresa de nueva constitución',
	'company.type.new.company.selfemployed':'Autónomo',
	'company.type.new.company.sme':			'PYME',

	//restore password
	'field.restore.email':					 'Introduce tu e-mail',
	'anfix.login.enterEmail':			     'Introduce tu email para poder reestablecer tu contraseña',
	'anfix.login.password.sending.mail': 	 'Estamos enviándole un correo con las instrucciones para restablecer su contraseña...',
	'anfix.login.password.restore.ok': 		 'La contraseña se ha restaurado correctamente. En breves instantes accederás a Anfix.',
	'anfix.login.mailPasswordRestore': 		 'Hemos enviado un correo a la dirección ',

	// labels for organization
	'organization.name':					'Nombre',
	'organization.identification':			'CIF/NIF/NIE',
	'organization.address':					'Dirección',
	'organization.postalcode':				'Código Postal',
	'organization.city':					'Seleccione población',
	'organization.province':				'Seleccione provincia',
	'organization.country':					'País',
	'organization.phone':      				'Teléfono',

	'vat.type':								'I.V.A.',
	'anfix.button.finish':					'Finalizar',
	'anfix.button.next':					'Siguiente',
	'anfix.header.login':					'Introduce tus datos...',

	'anfix.button.signup.free': 			'Regístrate gratis',
	'anfix.button.signup.nofree':           'Registrate aquí',

	'anfix.user.registered.head.msg':       ', introduce tu contraseña',
	'anfix.user.registered.foot.msg':       '¿No eres ',
	'anfix.payvision.error':                "Ha sucedido un error en el pago. Póngase en contacto con soporte@anfix.com",

	'anfix.cardholder.name': 				'Nombre del titular',
	'anfix.card.number': 					'Número de tarjeta',
	'anfix.expiration.date':                'Fecha de vencimiento',
	'anfix.ccc.number':                     'Código de cuenta corriente',
	'anfix.card.payment':                   'Pago con tarjeta',
	'anfix.transfer.payment': 				"Pago con domiciliación bancaria",

    'anfix.payvision.error':                "Ha sucedido un error en el pago. Póngase en contacto con soporte@anfix.com",

	'anfix.combo.year':                     "Año",
	'anfix.cardholder.name.msg': 			'Debes introducir el nombre del titular de la tarjeta.',
	'anfix.card.number.msg': 				'Debes proporcionar un número de tarjeta válido.',
	'anfix.card.number.format.msg': 		'El número de tarjeta no tiene un formato correcto.',
	'anfix.expiration.month.msg':           'Debes escoger el mes de vencimiento de la tarjeta.',
	'anfix.expiration.year.msg':            'Debes escoger el año de vencimiento de la tarjeta.',
	'anfix.bankaccount.number.msg':         'El número de la cuenta corriente es obligatorio.',
	'anfix.bankaccount.entity.msg':         'Debes proporcionar el número de entidad de la cuenta corriente.',
	'anfix.bankaccount.control.digit.msg':  'Debes proporcionar el número del dígito de control de la cuenta corriente.',
	'anfix.bankaccount.office.msg':         'Debes proporcionar el número de la oficina de la cuenta corriente',
	'anfix.bankaccount.number.format.msg':  'El número de cuenta corriente no es correcto. Por favor, revisa el número.',
	'anfix.date.before.msg':                'La fecha de vencimiento no es válida, pues es anterior a la fecha actual.',
	'anfix.failure.charging':               'Fallo al realizar el cobro, póngase en contacto con el soporte técnico 900 846 924',
	'anfix.bankaccount.number.length':         'El número de la cuenta corriente es un número de 10 dígitos.',
	'anfix.bankaccount.entity.length':         'El número de entidad de la cuenta corriente es un número de 4 dígitos.',
	'anfix.bankaccount.control.digit.length':  'El número del dígito de control de la cuenta corriente es un número de 2 dígitos.',
	'anfix.bankaccount.office.length':         'El número de la oficina de la cuenta corriente, es un número de 4 dígitos',

	'anfix.error.two.steps'					: "Ha sucedido un error en el pago. Póngase en contacto con soporte@anfix.com ",
	'anfix.login.phone.verified'            : "El teléfono ya ha sido verificado con anterioridad para la recepción del regalo",

	'anfix.login.bottom.text0'              : 'Al aceptar este formulario, aceptas las <a href="/condiciones-generales-de-uso/" target="_blank">condiciones generales del servicio</a> y la <a href="/politica-de-privacidad/"  target="_blank">política de privacidad</a>.',
	'anfix.login.bottom.text1'				: 'Para continuar, al menos debes seleccionar un producto. ¡Recuerda que es gratis!',
	'anfix.login.bottom.text1.nofree'		: 'Para continuar, al menos debes seleccionar un producto.',
	'anfix.login.bottom.text2'				: 'Ya estás registrado!',
	'anfix.advisor.msg.error'				: 'Completa correctamente los campos, por favor',

	//club2040
	'anfix.advisor.pin.error'				: 'Debe cumplimentar correctamente el código pin proporcionado.',

	//payments
	'anfix.uid.title'						: ', introduce tu contraseña.',
	'anfix.uid.subtitle'					: '¿No eres ',
	'anfix.uid.subtitle2'					: '? <a>Cambiar usuario</a>',

	'anfix.taxbase.text'					: 'Base imponible ',
	'anfix.tax.text'					: 'IVA ',
	'anfix.total.text'					: 'TOTAL: ',
	'anfix.review.fields'				: 'Revise los campos incorrectos...',

	'anfix.error.permission'			: 'La contraseña o el email son incorrectos...',

	'info.ticket.year.text.1'				:'Garantía de 3 meses. Te devolvemos todo tu dinero.',
	'info.ticket.year.text.2'				:'Sin compromiso de permanencia.',
	'info.ticket.year.text.3'				:'Servicio técnico gratuito.',
	'info.ticket.year.text.4'				:'Tus datos siempre seguros.',

	'info.ticket.month.text.1'				:'Sin compromiso de permanencia.',
	'info.ticket.month.text.2'				:'Servicio técnico gratuito.',
	'info.ticket.month.text.3'				:'Tus datos siempre seguros.',

	'title.buyAt.anfix'						: 'Compra en Anfix',
  'title.register.anfix'					: 'Solo un paso más',
  'title.register.subtitle.anfix'					: 'Introduce la contraseña y, de manera opcional, tu nombre y tu teléfono. <br> Haz click en "Finalizar" para terminar de crear tu cuenta y acceder a anfix.',

	//intro e-mail
	'email.title'							:'Introduce tu email para comenzar tus 15 días de prueba',
  'email.subtitle'          :'Crear tu cuenta de anfix es muy fácil y solo lleva 1 minuto. Puedes utilizar todas las características<br> de forma ilimitada y cancelar tu cuenta cuando quieras, sin compromiso ni tarjeta de crédito.',

	//sent mail
	'sent.mail.title'						:'Confirma tu correo electrónico',

	//Company Type
  'company.type.title'					: '¡Ya estás dentro!',
  'company.type.subtitle'					: 'Selecciona el perfil con el que te identifiques para configurar a tu medida el panel de control de anfix.',

	//enterprise
  'enterprise.title'						: '¿Cómo se llama tu negocio?',
  'enterprise.subtitle'						: 'Introduciendo el nombre de tu negocio, obtendremos la información pública sobre él que figura en el <br> Registro Mercantil para incluirla automáticamente en las facturas y presupuestos que hagas.',
	'enterprise.error.corporatename'		: 'Cumplimenta o selecciona el nombre de tu empresa',

	//accounting enterprise
  'enterprise.accounting.title'			:'¿Necesitas el módulo de contabilidad?',
  'enterprise.accounting.subtitle'			:'Selecciona quién lleva la contabilidad de tu negocio. En caso de que sea tu asesor, no activaremos <br> el módulo de contabilidad para no complicarte la experiencia de uso. En caso de que seas tú, algún <br> empleado de tu empresa o quieras experimentar con él, selecciona la otra opción para activarlo.',

	//texts footer
	'footer.text.default'					: 'Si tienes dudas, llámanos gratis al <span>900 37 37 50</span>',
	'footer.text.mail.sent'					: '¿Quieres cambiar de correo? <a>Haz clic aquí</a>',

	//advisors
	'advisors.title'						: 'Forma parte del club de los mejores<br>asesores y gestores',

	//freelance
	'freelance.title'						: 'Luce como un verdadero profesional y<br>diferénciate de la competencia',

	'sent.phone.number.ok'					: 'En breve te llamaremos.',
	'sent.phone.required'					: '¡upps! Se te ha olvidado el teléfono.',
	'use.browser.chrome'					: 'No es posible hacer login en este navegador. Te recomendamos que lo hagas en la última versión de chrome.',

	//text for loading in login
	'we.are.upgrading.user'					: 'Estamos configurando anfix para ti. Puede tardar unos minutos.',
	'we.are.upgrading.user.continuing'		: 'Seguimos configurando el nuevo anfix para tí.'
};

function getTextByKey(string, language) {
	var varI18n;
	if(!language){
		varI18n= "LABELS_i18n"
	}
	return eval(varI18n)[string];
}
/**
 * Documento Confidencial.
 *
 * @file utils.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date December, 2012
 * @brief tools for users register.f
 */

Utils = {
	COMPANY_TYPES : ['company.type.ong','company.type.trainingcenter','company.type.new.company.creation',
					'company.type.new.company.selfemployed','company.type.new.company.sme'],

	SELF_EMPLOYED: "5",
	SME: "4",
	NIF: "1",
	CIF: "2",
	FIRST_STEP: 1,
	TAB_KEY: 9,
	PENDING_INVITATION_STATUS_ID: "1",

	validateEmail: function(email){
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
	},

	isArray: function(value) {
        return value.toString === '[object Array]';
    },

	markValidField: function(selector, fieldName, noCustomValidity){

		var objSelector;
		if (noCustomValidity){
			objSelector = '#'+fieldName;
		} else {
			objSelector = selector+' #'+fieldName;
		}

		if (!noCustomValidity){
			jQuery(objSelector)[0].setCustomValidity('');
		}

		jQuery(objSelector).parent('.polymer-form').removeClass('error-input');
		jQuery(objSelector).parent('.polymer-form').find('.error-div').text('');
		//jQuery('#qtip-field-'+fieldName).remove();
	},

	/**
	*	@selector: {String} '#+id' of the form.
	*   @fieldName: {String /Array} name or names from inputs.
	*   @fieldName: {boolean} makes focus to input.
	*	@errorMessage: {String} error text.
	*/
	markInvalidField: function(selector, fieldName, hasFocus, errorMessage, noCustomValidity){

		var objSelector;
		if (noCustomValidity){
			objSelector = '#'+fieldName;
		} else {
			objSelector = selector+' #'+fieldName;
		}

		if (!noCustomValidity){
			jQuery(objSelector)[0].setCustomValidity(errorMessage);
		}

		if(hasFocus){
			jQuery(objSelector).focus();
		}

		jQuery('.fullscreen .error-container').attr('data-field', fieldName);
		jQuery('.fullscreen .error-container p').html(errorMessage);
		if(jQuery('.topOld').is(':visible')){
			Utils.showToolTip(objSelector, errorMessage, fieldName);
		}else{
			jQuery(objSelector).parent('.polymer-form').addClass('error-input');
			jQuery(objSelector).parent('.polymer-form').find('.error-div').text(errorMessage);
		}
		//Utils.showToolTip(objSelector, errorMessage, fieldName);
	},


	/**
	*	@numErrors: {Numeric} number of errors.
	*/
	showPanelError: function(numErrors, errorMessage){
		if(Utils.isOnlyMobile()){
			jQuery('.error-top p').html(errorMessage);
			jQuery('.error-top').addClass('show');
			return;
		}

		jQuery('.error.fullscreen-item').removeClass('hide');
		jQuery('.error.fullscreen-item .counter p').html(numErrors);
		jQuery('.fullscreen .error-container').addClass('open');
		setTimeout(function(){
			jQuery('.fullscreen .error-container').removeClass('open');
		},10000);
		if(errorMessage){
			jQuery('.fullscreen .error-container p').html(errorMessage);
		}
	},

	hidePanelError: function(){
		if(Utils.isOnlyMobile()){
			jQuery('.error-top').removeClass('show');
			return;
		}
		if(!jQuery('.error.fullscreen-item').hasClass('hide')){
			jQuery('.error.fullscreen-item').addClass('hide');
			jQuery('.error.fullscreen-item .counter p').html('');
			jQuery('.fullscreen .error-container').removeClass('open');
		}
	},

	closeFullScreen: function(){
		jQuery(".fullscreen").slideUp('slow', function(){
			jQuery(".qtip-red").remove();
			Utils.hidePanelError();
			 jQuery('.afx-navbar').fadeIn();
		});
		jQuery('.content').children().hide();
        jQuery('.fullscreen-bbar-btn').hide();
        jQuery('p.fullscreen-bbar-text').removeClass('bottom-indent');
        jQuery('#btn-goback').hide();
		document.documentElement.style.overflow= 'auto';
    
		jQuery('.bottom p').html(getTextByKey('footer.text.default'));
		jQuery('.logo-ok').addClass('logo').removeClass('logo-ok');
		jQuery('.question').addClass('logo').removeClass('question');
		jQuery('.logo-star').addClass('logo').removeClass('logo-star');

		Utils.showOld(false);
	},


	showToolTip: function(field, errorMessage,id){
		jQuery(".qtip-red").remove();
		jQuery(field).qtip(
			{
				id: 'field-'+id,
			    content: {
			    	style: 'red',
			        text: errorMessage
			    },
			    event: 'focus',
			    style:{
			    	classes: 'qtip-red qtip-rounded'
			    },
			    show: {
			    	event:"click"
			    },
			    hide: {
			    	event:"blur mouseleave"
			    },
			    position: {
			    	container: jQuery('.content').is(':visible') ?jQuery('.content'): jQuery('body'),
			        my: 'top left',
			        at: 'bottom left',
			        target:$(field),
			        adjust: {
			            x: 30, y: 5
			        }
			    }
			}
		);
		jQuery(field).trigger('click');
	},

	hideTooltip: function(){
		jQuery(".qtip-red").remove();
	},

	resetMarkField: function(selector, fieldName){
		function reset(fieldName){
			jQuery(selector+' #div-'+fieldName).removeClass('field-ko');
			jQuery(selector+' #div-'+fieldName+ ' div').removeClass('icon-ok icon-ko');
		}
		if(jQuery.isArray(fieldName)){
			for (var i = fieldName.length - 1; i >= 0; i--) {
				reset(fieldName[i]);
			};
		}else{
			reset(fieldName);
		}

	},

	showLoading: function(){
		//jQuery('.loadingCornerWrapper').show('slow');

		var removeClassIE = function(){
			jQuery('.spinner').removeClass('spinner-bounce-middle');
			setTimeout(function(){jQuery('.spinner').addClass('spinner-bounce-middle')}, 200);
		};
		jQuery('#div-loading').fadeIn('slow');

		if(Utils.getBrowser().isIE){
			setTimeout(removeClassIE, 500);
		}

	},

	hideLoading:function(){
		//jQuery('.loadingCornerWrapper').fadeOut('slow');
		jQuery('#div-loading').fadeOut('slow');
	},


	getUrl: function(path,redirect){
		//if(jQuery.browser.msie && parseInt(jQuery.browser.version, 10) >= 8){

		/*if(!redirect && Utils.getBrowser().isIE){
			return 'http://'+Constants.WEB+'/proxy/?url='+Constants.PROTOCOL +'//'+Constants.DOMAIN+'/' +path+'&mode=native';
		}else{*/
			return Constants.PROTOCOL +'//'+Constants.DOMAIN+'/' +path;
		/*}

		return Constants.PROTOCOL +'//'+Constants.DOMAIN+'/' +path;*/
	},

	getIpadReturnUrl: function(params){
		return "anfix-app://login/?UserEmail=" + params.email + "&UserPassword=" + params.password1;
	},

	getCRMUrl: function(path,redirect){
		return window.location.protocol + '//' + Constants.DOMAIN_CRM + '/' + path;
	//	return Constants.PROTOCOL + '//' + Constants.DOMAIN_CRM + '/' + path;
	//	return 'http://'+Constants.WEB+'/proxy/?url=http://'+Constants.DOMAIN_CRM+'/' +path+'&mode=native';
	},

	getUrlRedirect:function(path){
		return 'http://'+Constants.WEB+'/proxy/?url='+path+'&pixel=true';
	},

	getCookieNoSecure: function(name){
		var arg = name + "=",
            alen = arg.length,
            clen = document.cookie.length,
            i = 0,
            j = 0;

        while(i < clen){
            j = i + alen;
            if(document.cookie.substring(i, j) == arg){
                return Utils.getCookieVal(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if(i === 0){
                break;
            }
        }
        return null;
    },

	getCookieVal : function(offset){
        var endstr = document.cookie.indexOf(";", offset);
        if(endstr == -1){
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    },


	getCookie: function(name){
		return cookiesObj[name];
    },


setCookieNoSecure: function(name, value, expires,path, domain,secure){
		var argv = arguments,
			argc = arguments.length,
			expires = (argc > 2) ? argv[2] : null,
			path = path ? path : '/',
			domain = (argc > 4) ? argv[4] :'anfix.com',
			secure = (argc > 5) ? argv[5] : false;
		expires = expires ? expires : Utils.getCookieExpiresDate();
        document.cookie = name + "=" + escape(value) + ((expires === null) ? "" : ("; expires=" + expires.toGMTString())) + ((path === null) ? "" : ("; path=" + path)) + ((domain === null) ? "" : ("; domain=" + domain)) + ((secure === true) ? "; secure; " : "");
	},


setCookie: function(name, value, expires, path, domain, secure, callback){
	var url =  window.location.protocol + '//'+Constants.WEB+Constants.SET_COOKIE_PHP;
	url+= "?cookieName=" + name + "&cookieValue=" + value;

	cookiesObj[name]=value;
	jQuery.ajax({
                type: "GET",
		async: true,
                dataType: 'json',
                contentType: 'application/json',
                url: url,
                success: function(data){
			cookiesObj[name]=value;
			if(callback){
                        	callback();
                        }
                }
        });

},

getCookies: function(){
	var url =  window.location.protocol + '//'+Constants.WEB+Constants.GET_COOKIES_PHP;

        jQuery.ajax({
                type: "GET",
                dataType: 'json',
                contentType: 'application/json',
                url: url,
                success: function(data){
			cookiesObj = data;
                }
        });
},


	clearCookieNoSecure : function(name, path){
        if(Utils.getCookieNoSecure(name)){
            path = path || '/';
	    var domain= 'anfix.com';
            document.cookie=name+"=;path="+path+((domain)?";domain="+domain:"") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
	    document.cookie = name + '=' + '; expires=Thu, 01-Jan-70 00:00:01 GMT; path=' + path;
        }
    },

	clearCookie: function(name, path){
		var url =  window.location.protocol + '//'+Constants.WEB+Constants.CLEAR_COOKIE_PHP;
        	url+= "?cookieName=" + name;

        	Utils.clearCookieNoSecure(name,path);
		delete cookiesObj[name];
		jQuery.ajax({
                	type: "GET",
                	dataType: 'json',
                	contentType: 'application/json',
                	url: url,
                	success: function(data){
                	}
        	});

    },

	clearCookies: function(cookiesName,callback){
                var url =  window.location.protocol + '//'+Constants.WEB+Constants.CLEAR_COOKIES_PHP;

                jQuery.ajax({
                        type: "POST",
			data: JSON.stringify({data:cookiesName}),
                        dataType: 'json',
                        contentType: 'application/json',
                        url: url,
                        success: function(data){
				for (index = 0, subCook = cookiesName.length; index < subCook; index++) {
                        		keyCookie = cookiesName[index];
                    			delete cookiesObj[keyCookie];
				}
				if(callback){
					callback();
				}
                        }
                });

    },

	unsetCookiesFlags: function(cookiesName,callback){
                var url =  window.location.protocol + '//'+Constants.WEB+Constants.UNSET_COOKIES_FLAGS_PHP;

                jQuery.ajax({
                        type: "POST",
                        data: JSON.stringify({data:cookiesName}),
                        dataType: 'json',
                        contentType: 'application/json',
                        url: url,
                        success: function(data){
                                for (index = 0, subCook = cookiesName.length; index < subCook; index++) {
                                        keyCookie = cookiesName[index];
                                        delete cookiesObj[keyCookie];
                                }
                                if(callback){
                                        callback();
                                }
                        }
                });

    },


	getCookieExpiresDate : function(){
		var expire = new Date();
		expire.setFullYear(expire.getFullYear()+1);
		return expire;
	},


	showHiddenFields: function(){
		var companyTypeId = jQuery('#companytype').val();
		var hideContainerCompanyName = companyTypeId ===Utils.SELF_EMPLOYED;
	/*	jQuery('#userForm').css('height', hideContainerCompanyName?'543px':'601px');
		jQuery('.form-container').css('height', hideContainerCompanyName?'245px':'298px');*/
		jQuery('#companyname-container').css('display',hideContainerCompanyName?'none':'block');

		if(hideContainerCompanyName){
			jQuery('#userForm').animate({height:'543px'}, 500);
			jQuery('#userForm .form-container').animate({height:'245px'}, 500);
		}else{
			jQuery('#userForm').animate({height:'601px'}, 500);
			jQuery('#userForm .form-container').animate({height:'298px'}, 500);
		}

		/*if(!hideContainerCompanyName){
			if(companyTypeId===Utils.SME){
				jQuery('#companyname').css('width', '627px');
				jQuery('#organizationfile').css('display', 'none');
			}else {
				jQuery('#companyname').css('width', '300px');
				jQuery('#organizationfile').css('display', 'inline-block');
			}
		}*/

		//if(!hideContainerCompanyName && !jQuery.browser.msie){
		if(!hideContainerCompanyName){
			if(companyTypeId===Utils.SME){
				jQuery('#organizationfile').hide(500, function(){
					jQuery('#companyname').animate({
						width: '627px'
					}, 500);
				});
			} else {
					jQuery('#companyname').animate({
						width: '300px'
					}, 500, function(){	jQuery('#organizationfile').show('clip');});

			}
		}

		/*if(!hideContainerCompanyName){
			jQuery('#companyname').animate({
				width: companyTypeId === Utils.SME ? '627px' : '300px'
			}, 500, function(){
				//jQuery('#organizationfile').css('display', companyTypeId===Utils.SME?'none':'inline-block');
				if (companyTypeId === Utils.SME) {
					jQuery('#organizationfile').css('display', 'none');
				}
				else {
					jQuery('#organizationfile').show('clip');
				}
			})
		}*/
	},

	getParamsFromUrl: function(queryString, recursive) {
        var parts = queryString.replace(/^\?/, '').split('&'),
            object = {},
            temp, components, name, value, i, ln,
            part, j, subLn, matchedKeys, matchedName,
            keys, key, nextKey;

        for (i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];

            if (part.length > 0) {
                components = part.split('=');
                name = decodeURIComponent(components[0]);
                value = (components[1] !== undefined) ? decodeURIComponent(components[1]) : '';

                if (!recursive) {
                    if (object.hasOwnProperty(name)) {
                        if (!Utils.isArray(object[name])) {
                            object[name] = [object[name]];
                        }

                        object[name].push(value);
                    }
                    else {
                        object[name] = value;
                    }
                }
                else {
                    matchedKeys = name.match(/(\[):?([^\]]*)\]/g);
                    matchedName = name.match(/^([^\[]+)/);


                    name = matchedName[0];
                    keys = [];

                    if (matchedKeys === null) {
                        object[name] = value;
                        continue;
                    }

                    for (j = 0, subLn = matchedKeys.length; j < subLn; j++) {
                        key = matchedKeys[j];
                        key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                        keys.push(key);
                    }

                    keys.unshift(name);

                    temp = object;

                    for (j = 0, subLn = keys.length; j < subLn; j++) {
                        key = keys[j];

                        if (j === subLn - 1) {
                            if (Utils.isArray(temp) && key === '') {
                                temp.push(value);
                            }
                            else {
                                temp[key] = value;
                            }
                        }
                        else {
                            if (temp[key] === undefined || typeof temp[key] === 'string') {
                                nextKey = keys[j+1];

                                temp[key] = (Utils.isNumeric(nextKey) || nextKey === '') ? [] : {};
                            }

                            temp = temp[key];
                        }
                    }
                }
            }
        }

        return object;
    },

	isNumeric: function(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
    },

	isSafariVersionUp512 : function(){
		var userAgent = navigator.userAgent.toLowerCase();
		userAgent  =userAgent.substring(userAgent.indexOf('version/') +8);
  		userAgent = userAgent.substring(0,userAgent.indexOf('.'));
		var version = userAgent;
		/*
		if(jQuery.browser.safari && version == 5.1){
			var version = navigator.userAgent.match(/Version.[0-9.].[0-9.].[0-9.]/);
			if((version[0].split('.')[2]) > 2){
				return true;
			}
		}

		if(jQuery.browser.safari & version >= 6) {
			return true;
		}
		*/
		return false;
	},


	validNifCif: function(dni) {
	    var cadena = dni.toUpperCase().replace(/\s|\.|-|_|\\|\//g, '');
	    const pre = cadena.substr(0, 1);
	    var result;
	    if (pre === 'X' || pre === 'Y' || pre === 'Z') {
	        if (Utils.isNie(cadena)) {
	            result = true;
	        } else {
	            result = false;
	        }
	    } else {
	        const letrasCIF = new RegExp(/[ABCDEFGHJKLMNPQRSUVW]/);
	        if (letrasCIF.test(pre)) {
	            if (Utils.cif(cadena)) {
	                result = true;
	            } else {
	                result = false;
	            }
	        } else {
	            const numerosNIF = new RegExp(/[1234567890]/);
	            if (numerosNIF.test(pre)) {
	                if (Utils.nif(cadena)) {
	                    result = true;
	                } else {
	                    result = false;
	                }
	            } else {
	                result = 0;
	            }
	        }
	    }
	    return result;
	},

	nif: function(nif) {
        var dni = nif.toUpperCase();
        var number = parseInt(dni.substr(0, dni.length - 1), 10);
        var letter = dni.substr(dni.length - 1, 1).toUpperCase();
        number = number % 23;
        var possibleLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
        const letterOk = possibleLetters.charAt(number);
        return (letterOk === letter);
    },

    isNie: function(nie) {
        const dni = nie.toUpperCase();
        const pre = dni.substr(0, 1);
        var prev = '0';
        if (pre === 'X') {
            prev = '0';
        } else if (pre === 'Y') {
            prev = '1';
        } else if (pre === 'Z') {
            prev = '2';
        }
        const nif = prev + dni.substr(1, dni.length - 1);
        return Utils.nif(nif);
    },


    cif: function(cif) {
        const texto = cif.toUpperCase();
        const regular = new RegExp(/^[ABCDEFGHJKLMNPQSRUV]\d{7}[0-9,A-J]$/g);
        const uletra = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        var pares = 0;
        var impares = 0;
        var suma;
        var ultima;
        var unumero;
        var xxx;
        var cont;
        if (!regular.test(texto)) {
            return false;
        }
        ultima = texto.substr(8, 1);
        for (cont = 1; cont < 7; cont++) {
            xxx = (2 * parseInt(texto.substr(cont++, 1), 10)).toString() + '0';
            impares += parseInt(xxx.substr(0, 1), 10) + parseInt(xxx.substr(1, 1), 10);
            pares += parseInt(texto.substr(cont, 1), 10);
        }
        xxx = (2 * parseInt(texto.substr(cont, 1), 10)).toString() + '0';
        impares += parseInt(xxx.substr(0, 1), 10) + parseInt(xxx.substr(1, 1), 10);
        suma = (pares + impares).toString();
        unumero = parseInt(suma.substr(suma.length - 1, 1), 10);
        unumero = (10 - unumero);
        if (unumero === 10) {
            unumero = 0;
        }

        var result;
        if ((ultima === '' + unumero) || (ultima === uletra[unumero])) {
            result = true;
        } else {
            result = false;
        }
        return result;
    },

	formatNumber: function (number){
	    number=parseFloat(number);
	    if(isNaN(number)){
	        return "";
	}
	    number=number.toFixed(2);
	    number=number.toString().replace(".", ",");

	    var miles=new RegExp("(-?[0-9]+)([0-9]{3})");
	    while(miles.test(number)) {
	      number=number.replace(miles, "$1" + '.' + "$2");
	    }
	    return number;
	},

	getIdentificationType: function(identification){
		if(jQuery.isEmptyObject(identification)){
			return null;
		}
		var firstChar = identification.substring(0, 1);
		if(jQuery.isNumeric(identification.substring(0,1))){
			return Utils.NIF;
		}else{
			return Utils.CIF;
		}
	},

	checkoutIsFree: function(cc){
		if(jQuery.isEmptyObject(cc)){
			return true;
		}
		var campaignCode = Constants.CAMPAIGN_MAP[cc];
		return campaignCode.isFree;
	},

	getPropertysByCampaignId: function(cc){
		if(!jQuery.isEmptyObject(cc)){
			return Constants.CAMPAIGN_MAP[cc];
		}
		return null;
	},

	resizeToParent: function(selector){

		var img = jQuery(selector);
	    var width  = img.width();
	    var height = img.height();
	    var parentWidth  = img.parent().width();
	    var parentHeight = img.parent().height();
	    var newWidth=0, newHeight=0;
	    var margin_top=0, margin_left=0;

	    if(width/parentWidth > height/parentHeight)
	    {
	      	newWidth  = parentWidth;
	      	newHeight = newWidth/width*height;
	    }
	    else
	    {
	    	newHeight = parentHeight;
	        newWidth  = newHeight/height*width;
	     }
	     margin_top  = (parentHeight - newHeight) / 2;
	     margin_left = (parentWidth  - newWidth ) / 2;

	     img.css({
	     		'margin-top' :margin_top  + 'px',
	            'margin-left':margin_left + 'px',
	            'height'     :newHeight   + 'px',
	            'width'      :newWidth    + 'px'});
    },

    isCCC : function(ccc){
		if (/^\d{20}$/.test(ccc)) {
			var bank = ccc.substring(0, 4),
				branch = ccc.substring(4, 8),
				dc = ccc.substring(8, 10),
				account = ccc.substring(10);
			if (!(getDC("00" + bank + branch) == parseInt(dc.charAt(0))) || !(getDC(account) == parseInt(dc.charAt(1)))) {
				return false;
			}else {
				return true;
			}
		}else {
			return false;
		}

		function getDC(value){
			var values = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6], control = 0;
			for (var i = 0; i <= 9; i++) {
				control += parseInt(value.charAt(i)) * values[i];
			}
			control = 11 - (control % 11);

			if (control === 11) {
				control = 0
			}
			else
				if (control == 10) {
					control = 1
				}
			return control;
		}
	},

	isValidCreditCard: function(value){
		var nondigits = new RegExp(/[^0-9]+/g);
		var number = value.replace(nondigits,'');
		var pos, digit, i, sub_total, sum = 0;
		var strlen = number.length;
		if(strlen < 13){ return false; }
		for(i=0;i<strlen;i++){
			pos = strlen - i;
			digit = parseInt(number.substring(pos - 1, pos));
			if(i % 2 == 1){
				sub_total = digit * 2;
				if(sub_total > 9){
					sub_total = 1 + (sub_total - 10);
				}
			} else {
				sub_total = digit;
			}
			sum += sub_total;
		}
		if(sum > 0 && sum % 10 == 0){
			return true;
		}
		return false;
	},

	isValidPayChargeMethodType: function(value){
		return ( Constants.CARD_PAYMENT === value || Constants.BANKACCOUNT_PAYMENT===value);
	},

	beforeDate: function(month, year){
		var today = new Date();
		var currentMonth = today.getMonth()+1;
		var currentYear = today.getFullYear();
		if(year >currentYear){
			return false;
		}else if(year==currentYear && month >= currentMonth){
			return false;
		}else{
			return true;
		}
	},

	getEncryptedValue : function(value){
		var me = this,
			encryptedValue;
	    if (jQuery.isEmptyObject(me.rsa)) {
			me.rsa = new RSAKey();
	    }
	    me.rsa.setPublic.call(me.rsa, Constants.PUBLIC_KEY_MODULE, Constants.PUBLIC_KEY_EXP);
		encryptedValue = me.rsa.encrypt.call(me.rsa, value);
	    return cryptico.b16to64(encryptedValue);
	},

	apply: function(object,config){
		for (var prop in config) {
            object[prop] = config[prop];
        }
        return object;
	},

	/*showNextButton: function(formId){
		if(formId==='organizationForm'){
			hidePayButton(false);
		}else if(formId==='paymentSelectionForm'){
			getPaymentSelectionForm().showHidePayButton(true);
		}
	},*/

	getProvinceNameById : function(id){
		var provinceName = null;
		for(var i =0, province = null, len = Constants.PROVINCES.length; i<len; i++){
			province = Constants.PROVINCES[i];
			if(province.ProvinceId === id){
				provinceName = province.ProvinceName;
				break;
			}
		}
		return provinceName;
	},

	isRegisteredUser: function(){
		if(cookiesObj.accessCode) {
		return !jQuery.isEmptyObject(Utils.getCookie('accessCode'));
		} else {
			return !jQuery.isEmptyObject(Utils.getCookieNoSecure('accessCode'));
		}
	},

	saveSignupTracking : function(data){

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(data),
			url: Utils.getCRMUrl(Constants.CRM_SIGNUP_TRACKING_SERVICE),
			success: function(data){
				if(data.CustomerId){
					window.CustomerId = data.CustomerId;
				}
			}
		});
	},

	roundNumber : function(number){
		return Math.round((number)*Math.pow(10,2))/Math.pow(10,2);
	},

	calculateIBANSpain : function (entity, office, controlDigits, number) {
		var country_code = "1428";

		var iban = entity + office,
			mod_1 = iban % 97,
			mod_iban = iban % 97,
			cc_iban = 98 - mod_iban;

		iban = "" + mod_1 + controlDigits + number.substring(0,2);
		mod_1 = iban % 97;
		iban = "" + mod_1 + number.substring(2, number.length) + country_code + '00';
		mod_iban = iban % 97;
		cc_iban = 98 - mod_iban;

	    if (cc_iban < 10){
			cc_iban = "0" + cc_iban;
	    }

	    return "ES" + cc_iban + " " + entity + " " + office + " " +  controlDigits + number.substring(0, 2) + " " + number.substring(2, 6) + " " + number.substring(6);
	},

	getBankAccountBIC : function (entityCode, fieldName) {
		if(entityCode!="" && entityCode!=null){
			var data = {
				applicationId:"1",
				inputBusinessData: {
			        BankingInstitution: {
			            Filters: [{
			                BankingInstitutionCode: entityCode
			            }]
			        }
			    }
			};

			jQuery.ajax({
				type: "POST",
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(data),
				url: Utils.getUrl(Constants.SEARCH_BIC_SERVICE),
				success: function(data){
					if(data.result==0){
						if (data && data.outputData && data.outputData.BankingInstitution && data.outputData.BankingInstitution[0].BankingInstitutionBIC!="" && data.outputData.BankingInstitution[0].BankingInstitutionBIC!=null) {
							$('#'+fieldName).val(data.outputData.BankingInstitution[0].BankingInstitutionBIC);
						} else {
							$('#'+fieldName).val('');
						}
					}
				},
				error: jQuery.noop()
			});
		}
	},

	move: function(event){
		var inputCode = event.charCode || event.keyCode || 0;

		function goNext(event) {
			event.preventDefault();
	        var $this = $(event.target);

	        var scope;
	        if(self.options && self.options.navigate) {
	        	scope = $(self.options.navigate);
	        } else {
	        	scope = event.data.scope;
	        }

	        var fields = $($(scope)
	        		.find('input, .btn-green, button,textarea, [contenteditable=true], .selectify')
	                .filter(':visible').filter(':not([readonly])').filter(':not([disabled])').filter(':not(.notforusability)')
	        		.toArray()
	                /*.sort(function(a, b) {
	                      return ((a.tabIndex > 0) ? a.tabIndex : 1000) - ((b.tabIndex > 0) ? b.tabIndex : 1000);
	                 })*/);

	        var nextField = fields.eq((fields.index($this) + 1) % fields.length);
	        nextField.addClass("navigate");
	        nextField.focus();
		}

		function goBack(event) {
			event.preventDefault();
	        var $this = $(event.target);

	        var scope;
	        if(self.options && self.options.navigate) {
	        	scope = $(self.options.navigate);
	        } else {
	        	scope = event.data.scope;
	        }

	        var fields = $($(scope)
	        		.find('input, .btn-green, button, textarea, [contenteditable=true], .selectify')
	                .filter(':visible').filter(':not([readonly])').filter(':not([disabled])').filter(':not(.notforusability)')
	        		.toArray()
				);

	        var prevField = fields.eq((fields.index($this) - 1) % fields.length);
	        prevField.addClass("navigate");
	        prevField.focus();
		}

		if(inputCode==13 || inputCode==9){
			if(event.shiftKey) {
				goBack(event);
			} else if(inputCode!=13 || !jQuery(this).hasClass('btn-green')){
				if(inputCode==9 || event.target.type != 'textarea') {
					goNext(event);
				}
			} else {
				if(inputCode==9 && jQuery(this).hasClass('.btn-green')){
					goNext(event);
				}
			}
		} else if(inputCode==46 && event.shiftKey && options.deleteCallback) {
			options.deleteCallback();
		}

	},

	isFirstStep: function(options){
		return options && options.step ==Utils.FIRST_STEP;
	},

	getBrowser : function() {
		var browser = {};
		browser.isFF = false;
		browser.isChrome = false;
		browser.isSafari = false;
		browser.isIE = false;

		if(navigator.userAgent.indexOf('Firefox') != -1){
			browser.isFF = true;
		}else if(navigator.userAgent.indexOf('Chrome') != -1){
			browser.isChrome = true;
		}else if(navigator.userAgent.indexOf('Safari') != -1){
			browser.isSafari = true;
		}else{
			browser.isIE = true;
		}
		return browser;
	},

	isMobile: function(){
		var a = navigator.userAgent||navigator.vendor||window.opera;
		return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
	},

	isOnlyMobile: function(){
		return /android|webos|iphone|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
	},

	isTablet: function(){
		var a = navigator.userAgent||navigator.vendor||window.opera;
		return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
	},

	isIPhone: function(){
		if(navigator.userAgent.toLocaleLowerCase().search(/iphone/)>0){
			return true;
		} else {
			return false;
		}
	},

	showLoadingOld: function(){
		var visibleDiv = jQuery('.modal:visible .left');
		visibleDiv = visibleDiv.length>0 ? visibleDiv: jQuery('.modal:visible .all');
		if(visibleDiv.length > 0){
			var top = jQuery('.modal:visible').position().top;
			var left = jQuery('.modal:visible').position().left-479;

			var height = parseInt(visibleDiv.css("height"));
			var width = parseInt(visibleDiv.css("width"));
			jQuery('.div-loading-container').attr("style", "top:"+top+"px; left:"+left+"px; height:"+height+"px; width:"+width+"px; display:block;");
		} else {
			jQuery('.div-loading-container').css('top', '0px');
			jQuery('.div-loading-container').css('left', '0px');
			jQuery('.div-loading-container').css('height', '100%');
			jQuery('.div-loading-container').css('width', '100%');
			jQuery('.div-loading-container').show();
		}
	},

	hideLoadingOld:function(){
		jQuery('.div-loading-container').hide();
	},

	loadOrDeleteMetaDevice: function (add){
		if(add){
			var meta = document.createElement('meta');
			meta.setAttribute('name', 'viewport');
			meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
			document.getElementsByTagName('head')[0].appendChild(meta);
		}else{
			//jQuery('meta[name="viewport"]').attr('content','width=device-width, initial-scale=0.3, maximum-scale=1.0, user-scalable=no' );
			jQuery('meta[name="viewport"]').attr('content','width=970' );
		}
	},

	redirectToMobileRegistration: function(params){
		var url = '/mobile';
		if(!jQuery.isEmptyObject(params)){
			url+=params;
		}
		document.location = url;

	},

	createDivError: function(selector,errorText){
		if(jQuery(selector+ ' .divErrorMobile').length==0){
			var divError = jQuery('<div />', {
	        	"class": "divErrorMobile",
	            "tabindex": "-1",
	        	"html": '<p>'+errorText+'</p>'
	       	});
			jQuery(selector).prepend(divError);
		}
		jQuery('body').scrollTop(0);
	},

	destroyDivError: function(selector){
		jQuery(selector+ ' .divErrorMobile').remove();
	},

	show: function(options,scope){
		var me =scope || this;
		if(!Utils.isMobile()){
			document.documentElement.style.overflow='hidden';
		}
		jQuery('.error.fullscreen-item').addClass('hide');
		if(jQuery('.fullscreen').is(':visible')){
			jQuery('.fullscreen').fadeIn('slow', function(){
				if(options && options.callback){
					options.callback();
				}
			});
	    }else{

		if(jQuery('.afx-navbar').length!=0){
		 jQuery('.afx-navbar').fadeOut('fast', function(){
				 jQuery('.fullscreen').slideDown('slow', function(){
                                	if(options && options.callback){
                                        	options.callback();
                                	}
                        	});
			});
		}else{
			 jQuery('.fullscreen').slideDown('slow', function(){
                                        if(options && options.callback){
                                                options.callback();
                                        }
                                });

		}
	    }
		jQuery(me.id).show();
		if(options && options.reset){
       		me.reset();
      	}
		if(options && options.btnSelector){
			jQuery(btnSelector).show();
		}

		if(options && options.minHeight){
			jQuery('.fullscreen > div, .fullscreen .content').first().css('min-height', options.minHeight+"px");
		}
		/*if(options && options.extended){
			jQuery('.top').css('height', '236px');
			jQuery('.content').css('top', '237px');
		}else{
			jQuery('.top').css('height', '203px');
			jQuery('.content').css('top', '204px');
		}*/
	},
	hide: function (options, scope) {
		var me = scope || this;
		if(options && !options.nohideFullScreen){
			jQuery(".fullscreen").slideUp('slow');
       		jQuery(me.id).slideUp('slow');
        }else{
        	jQuery(me.id).hide();
        }
        if(options && options.btnSelector){
			jQuery(btnSelector).hide();
	}
	document.documentElement.style.overflow= 'auto';
	},

	goHome: function(){
		Utils.clearCookie("campaignId");
		Utils.setCookie("firstTime", true, null,null,'anfix.com');

		cookiesName=[];
		cookiesName.push("accessCode");
		var accessCode = cookiesObj.accessCode;
		function callback(){
			Utils.setCookieNoSecure('accessCode', accessCode, null, null, 'anfix.com');
		setTimeout(function(){
			//Utils.hideLoading();
			//
			if(window.registrationType &&  window.registrationType == "1" ){
				 var  redirectURL = getUrl('os/Desktop.html');
	      			location.href = redirectURL;
			}
			if(window.registerFromiPad){
				document.location  = Utils.getIpadReturnUrl(userRegister.getValues());
			} else {
				//document.location  = Utils.getUrl(Constants.HOME, true);
				var userSignUp = new UserSignup();
				userSignUp.redirectToProfit();
			}
		}, 1600);
		};
		if(!accessCode){
			accessCode = Utils.getCookieNoSecure("accessCode");
			callback();
		}else{
			Utils.clearCookies(cookiesName, callback);
		}
	},

	transformColor: function (oldBaseColor, newBaseColor, oldColor) {
		var oldBaseColorDecimal = Utils.getDecimalFromRGB(oldBaseColor);

		var oldBaseRed = oldBaseColorDecimal.red,
			oldBaseGreen = oldBaseColorDecimal.green,
			oldBaseBlue = oldBaseColorDecimal.blue;

		var oldBaseHSB = Utils.convertRBGToHSV(oldBaseRed, oldBaseGreen, oldBaseBlue);

		var newBaseColorDecimal = Utils.getDecimalFromRGB(newBaseColor);

		var newBaseRed = newBaseColorDecimal.red,
			newBaseGreen = newBaseColorDecimal.green,
			newBaseBlue = newBaseColorDecimal.blue;

		var newBaseHSB = Utils.convertRBGToHSV(newBaseRed, newBaseGreen, newBaseBlue);

		var oldColorDecimal = Utils.getDecimalFromRGB(oldColor);

		var oldRed = oldColorDecimal.red,
			oldGreen = oldColorDecimal.green,
			oldBlue = oldColorDecimal.blue;

		var oldHSB = Utils.convertRBGToHSV(oldRed, oldGreen, oldBlue);

		var newHue = oldHSB[0];
		if (oldBaseHSB[0] != newBaseHSB[0]) {
			newHue += newBaseHSB[0] - oldBaseHSB[0];
			if (newHue < 0) {
				newHue += 1;
			} else if (newHue > 1) {
				newHue -= 1;
			}
		}

		var newSaturation = oldHSB[1];
		if (oldBaseHSB[1] != newBaseHSB[1]) {
			newSaturation = oldHSB[1] * (1 + (newBaseHSB[1] - oldBaseHSB[1]) / oldBaseHSB[1]);
			if (newSaturation < 0) {
				newSaturation = 0;
			} else if (newSaturation > 1) {
				newSaturation = 1;
			}
		}

		var newBrightness = oldHSB[2];
		if (oldBaseHSB[2] != newBaseHSB[2]) {
			newBrightness = oldHSB[2] * (1 + (newBaseHSB[2] - oldBaseHSB[2]) / oldBaseHSB[2]);
			if (newBrightness < 0) {
				newBrightness = 0;
			} else if (newBrightness > 1) {
				newBrightness = 1;
			}
		}

		var newRGB = Utils.convertHSVToRGB(newHue, newSaturation, newBrightness);

		return Utils.getRGBFromDecimal(newRGB);
	},

	getDecimalFromRGB: function (rgbColor) {
		var rgb;
		var color;

		rgbColor = rgbColor.replace("0x", "");
		rgbColor = rgbColor.replace("#", "");

		rgb = parseInt(rgbColor, 16);

		color = new Object();
		color.red = (rgb & (255 << 16)) >> 16;
		color.green = (rgb & (255 << 8)) >> 8;
		color.blue = (rgb & 255);

		return color;
	},

	convertRBGToHSV: function (red, green, blue) {
	    red = red/255,
	    green = green/255,
	    blue = blue/255;

	    var maxRGB = Math.max(red, green, blue),
	    	minRGB = Math.min(red, green, blue);

	    var hue, saturation, value = maxRGB;

	    var difference = maxRGB - minRGB;
	    saturation = maxRGB == 0 ? 0 : difference / maxRGB;

	    if(maxRGB == minRGB){
	        hue = 0; // achromatic
	    }else{
	        switch(maxRGB){
	            case red: hue = (green - blue) / difference + (green < blue ? 6 : 0); break;
	            case green: hue = (blue - red) / difference + 2; break;
	            case blue: hue = (red - green) / difference + 4; break;
	        }
	        hue /= 6;
	    }

	    return [hue, saturation, value];
	},

	convertHSVToRGB: function(hue, saturation, value) {
		var red, green, blue;

	    var roundedHue = Math.floor(hue * 6);
	    var f = hue * 6 - roundedHue;
	    var p = value * (1 - saturation);
	    var q = value * (1 - f * saturation);
	    var t = value * (1 - (1 - f) * saturation);

	    switch(roundedHue % 6){
	        case 0: red = value, green = t, blue = p; break;
	        case 1: red = q, green = value, blue = p; break;
	        case 2: red = p, green = value, blue = t; break;
	        case 3: red = p, green = q, blue = value; break;
	        case 4: red = t, green = p, blue = value; break;
	        case 5: red = value, green = p, blue = q; break;
	    }

		return [Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255)];
	},

	getRGBFromDecimal: function(rgb){
		return "#" + Utils.convertToHex(rgb[0]) + Utils.convertToHex(rgb[1]) + Utils.convertToHex(rgb[2]);
	},

	convertToHex: function (value) {
	    var hex = value.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	},

	getIndexIfObjWithAttr: function(array, attr, value) {
	    for(var i = 0; i < array.length; i++) {
	        if(array[i][attr] === value) {
	            return i;
	        }
	    }
	    return -1;
	},

	moveElementInArray: function (array, old_index, new_index) {
	    if (new_index >= array.length) {
	        var k = new_index - array.length;
	        while ((k--) + 1) {
	            array.push(undefined);
	        }
	    }
	    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
	    return array; // for testing purposes
	},

	showOld: function(add){
		jQuery('.bottom')[add? 'addClass': 'removeClass']('bottom-old');
		jQuery('.content')[add? 'addClass': 'removeClass']('content-old');
		jQuery('.top')[add? "hide":"show"]();
		jQuery('.topOld')[add? "show":"hide"]();
		jQuery('.error-container')[add? 'addClass': 'removeClass']('error-container-old');
	},

	getKeyPressed: function(e){
		var evt = e ? e : event;
		return  evt.keyCode;
	},

	toCamelCase : function(str) {
		str = str.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function(letter) {
    	return letter.toUpperCase();
    	});
    	return str;
    },

	preprocessImageHeaders: function(base64, callback) {
	const image = new Image();
 	 image.onload = function(){
      EXIF.getData(image, function() {
        const orientation = image.exifdata.Orientation;
        // We have nothing to do...
        if (!orientation || orientation < 2 || orientation > 8) {
          callback(base64);
          return;
        }

        // We should correct image orientation...
        const width = parseInt(image.width, 10);
        const height = parseInt(image.height, 10);
        const temporalCanvas = document.createElement('canvas');
        const styleWidth = width;
        const styleHeight = height;
        temporalCanvas.width = width;
        temporalCanvas.height = height;
        const context = temporalCanvas.getContext('2d');

        if (orientation > 4) {
          temporalCanvas.width = height;
          temporalCanvas.height = width;
          temporalCanvas.style.width = styleHeight;
          temporalCanvas.style.height = styleWidth;
        }

        switch (orientation) {
        case 2:
          // horizontal flip
          context.translate(width, 0);
          context.scale(-1, 1);
          break;
        case 3:
          // 180° rotate left
          context.translate(width, height);
          context.rotate(Math.PI);
          break;
        case 4:
          // vertical flip
          context.translate(0, height);
          context.scale(1, -1);
          break;
        case 5:
          // vertical flip + 90 rotate right
          context.rotate(0.5 * Math.PI);
          context.scale(1, -1);
          break;
        case 6:
          // 90° rotate right
          context.rotate(0.5 * Math.PI);
          context.translate(0, -height);
          break;
        case 7:
          // horizontal flip + 90 rotate right
          context.rotate(0.5 * Math.PI);
          context.translate(width, -height);
          context.scale(-1, 1);
          break;
        case 8:
          // 90° rotate left
          context.rotate(-0.5 * Math.PI);
          context.translate(-width, 0);
          break;
        default:
          break;
        }

        context.drawImage(image, 0, 0, width, height);

      	callback(temporalCanvas.toDataURL('image/jpeg', 0.9));

      });
    };
    // PNG (transparency) does not support embedding of EXIF information.
      image.src = base64;
}
}
/**
 * Documento Confidencial.
 * 
 * @file userSignup.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date December, 2012
 * @brief js to redirect.
 */
var Proxy = function(){};

Proxy.prototype = {
	searchCampaigns: function(code){
		var me = this,
			objectToJsonString = {
				inputBusinessData: {
					Campaign: {
						Filters: [{
							CampaignCode:code || 'DEFAULT'
						}, {
							CampaignOnlyNewUsers: true
						}]
					}
				}
			};
		jQuery.ajax({
			
			type: "POST",
			dataType: 'json',
			//crossDomain: true,
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url:Utils.getUrl(Constants.CAMPAIGN_SERVICE_SEARCH),
			success: function(data){
				me.successSearchCampaigns.call(me,data);
			}
		});
	},
	
	successSearchCampaigns: function(data){
		var me =this,
			campaigns = data.outputData.Campaign, 
		 	items = [],
			configs= [],
			base = 0,
			iva = 0,
			total = 0;

		isFree=false;
			
		if(data && data.outputData.TotalRowNumber>0){
			for (var index=0; index < campaigns.length; index++) {
				if (campaigns[index].CommercialConfigTypeId == "1" || 
						campaigns[index].CommercialConfigTypeId == "2") {
					isFree = true;
					break;
				}
				if (campaigns[index].CommercialPropertyId == "1" && jQuery.inArray(campaigns[index].CommercialConfigId,configs)===-1) {
					configs.push(campaigns[index].CommercialConfigId);
					items.push({
						name: campaigns[index].CommercialConfigName,
						price: campaigns[index].CommercialPropertyValue
					});
					base+= parseFloat(campaigns[index].CommercialPropertyValue);
				}
			}
			me.base = base;
			me.vatTotalValue = ((base * me.vatValue)/100); 
			me.totalVatValue = (base + me.vatTotalValue); 

			
			$('#taxBaseValue').html(Utils.formatNumber(me.base)+' &euro;');
			$('#vatType span').html(getTextByKey('vat.type')+' ('+Utils.formatNumber(me.vatValue)+' %)');
			$('#vatTypeValue').html(Utils.formatNumber(me.vatTotalValue)+'  &euro;');
			$('#totalValue').html(Utils.formatNumber(me.totalVatValue)+' &euro;');
		
			jQuery('#orderData table tr').remove();	
			jQuery.each(items, function(i, item){
				//if (i != items.length - 1) {
					$('#orderData table').append('<tr><td class="td-description">' + item.name + '</td><td class="td-price">' + Utils.formatNumber(item.price) + '&nbsp;&euro;</td></tr>');
				/*}else{
					$('#orderData table').append('<tr><td class="last-td">' + item.name + '</td><td class="td-price last-td">' + Utils.formatNumber(item.price) + '&nbsp;€</td></tr>');
			     }*/
			});
			
			jQuery('.div-signup-button p').html(getTextByKey(isFree?'anfix.button.finish':'anfix.button.next'));
			if(!isFree && comboCountry.length===0 && comboProvince.length===0){
				userRegister.getProxy().loadCountryCombo();
        			userRegister.getProxy().loadProvinceCombo();
			}	
		}else {
		       isFree=true;
		}
	},
	
	searchAddressDataByPostalCode: function(values){
		var me = this,
		objectToJsonString = {
			inputBusinessData: {
				City: {
					Filters: [{
						PostalCodeCode:values.postalCode
					}, {
						CountryId: values.countryId
					}],
					MaxRows:1000
				}
			}
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url:Utils.getUrl(Constants.SEARCH_BY_POSTAL_CODE),
			success: function(data){
				if(data.outputData && data.outputData.TotalRowNumber!=0){
					jQuery('#div-organizationAddressProvince').css('display','none');
					jQuery('#div-organizationAddressProvinceId').css('display','block');
					jQuery('#div-organizationAddressCity').css('display','none');
					jQuery('#div-organizationAddressCityId').css('display','block');
					me.setCountryProvinceCity(data.outputData.City);
					if(values.success){
						values.success(data);
					}
				}else{
					Utils.resetMarkField("#invoiceAndOrderDataForm", ['organizationAddressProvince', 'organizationAddressCity']);
					jQuery('#organizationAddressProvince').val('');
					jQuery('#organizationAddressCity').val('');
					jQuery('#organizationAddressProvince').trigger('keyup');
					jQuery('#organizationAddressCity').trigger('keyup');
					jQuery('#div-organizationAddressProvince').css('display','block');
					jQuery('#div-organizationAddressProvinceId').css('display','none');
					jQuery('#div-organizationAddressCity').css('display','block');
					jQuery('#div-organizationAddressCityId').css('display','none');
				}
			}
		});
		
	},
	
	setCountryProvinceCity: function (city){
		var cityResult = !jQuery.isEmptyObject(city)? city[0]: {};

		if(!Utils.isMobile() || (userRegister && !jQuery.isEmptyObject(userRegister.params.promo))){
			jQuery('#organizationAddressProvinceId').selectify('update', cityResult.ProvinceId);
			jQuery('#organizationAddressProvince').val(null);
			
			jQuery('select#organizationAddressCityId option').remove();
			jQuery('select#organizationAddressCityId').append(
					jQuery('<option></option>')
					    .val('')
					    .html('Poblaci&oacute;n'));
			for(var i=0, cityAux=null, len = city.length; i<len; i++ ){
				cityAux = city[i];
				jQuery('select#organizationAddressCityId').append(
					jQuery('<option></option>')
					    .val(cityAux['CityId'])
					    .html(cityAux['CityName']));
			}
			jQuery("select#organizationAddressCityId").selectify('load', cityResult.CityId, {width:275});
			jQuery("#div-organizationAddressCity").hide();
			jQuery("#div-organizationAddressCityId").show();
			jQuery('#organizationAddressCity').val(cityResult.CityName);
			jQuery('#organizationAddressCity').trigger('blur');
		}else{
			jQuery('select#organizationAddressCityId').append(
					jQuery('<option></option>')
					    .val('')
					    .html('Poblaci&oacute;n'));
			for(var i=0, cityAux=null, len = city.length; i<len; i++ ){
				cityAux = city[i];
				jQuery('select#organizationAddressCityId').append(
					jQuery('<option></option>')
					    .val(cityAux['CityId'])
					    .html(cityAux['CityName']));
			}
		}
		this.onSelectCountryOrProvince();
	},
	
	loadCountryCombo : function(obj) {
		var me = this,
		objectToJsonString = {
			inputBusinessData: {
				Country: {
					MaxRows:1000
				}
			}
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url:Utils.getUrl(Constants.SEARCH_COUNTRIES),
			success: function(data){
				obj.success(data);
			}
		});
		
	},
	
	searchVat: function(){
		var me = this,
			objectToJsonString = {
				inputBusinessData: {
					AnfixSettings: {}
				}
			};
			/*jQuery.ajax({
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				data: JSON.stringify(objectToJsonString),
				contentType: 'application/json',
				url:Utils.getUrl(Constants.SEARCH_VAT),
				success: function(data){
					if(data.outputData && data.outputData.AnfixSettings){
						me.vatValue = parseFloat(data.outputData.AnfixSettings[0].AnfixSettingValue);
					}
				}
			});*/
		me.vatValue= Constants.VAT;
	},
	
	loadProvinceCombo: function(callback, params){
		var me = this,
		objectToJsonString = {
			inputBusinessData: {
				Province: {
					MaxRows:1000
				}
			}
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url:Utils.getUrl(Constants.SEARCH_PROVINCES),
			success: function(data){
				if(data.outputData && data.outputData.Province){
					comboProvince= data.outputData.Province;
					jQuery.each(data.outputData.Province, function(i,obj)
			      	{
			            jQuery('#organizationAddressProvinceId').append(
			                 jQuery('<option></option>')
			                        .val(obj['ProvinceId'])
			                        .html(obj['ProvinceName']));
			       });
					if(callback){
				        callback(params[0], params[1]);
				    }
				}
			}
		});
		
	},

	onSelectCountryOrProvince: function(){
		var me=this,
		    applyVat=true,
		    provinceId = jQuery('#organizationAddressProvinceId').val(),
		    countryId=jQuery('#organizationAddressCountry').val();	
		
		if(countryId===Constants.DEFAULT_COUNTRY_ID){
			if(jQuery.inArray(provinceId, Constants.PROVINCES_WITHOUT_VAT)!=-1){
				applyVat=false;
			}
		}else{
			applyVat=false;
		}
		me.computeTotals(applyVat);	
	},
	
	computeTotals: function(applyVat){
		var me = this,
		    vat = applyVat?Constants.VAT:0;
		if(!Utils.isMobile() || (userRegister && !jQuery.isEmptyObject(userRegister.params.promo))){
			getPaymentForm().loadDescriptionAndPrices();
		}else{
			if(typeof getPaymentByMobileForm != 'undefined'){
				getPaymentByMobileForm().loadDescriptionAndPrices();
			}	
		}
		/*	
		var properties = Utils.getPropertysByCampaignId(Utils.getCookie("linkCampaign"));
		var base =properties.price,
	  		vatTotalValue = ((base * vat)/100); 
	  		totalVatValue = (base + vatTotalValue); 
        jQuery('#taxBaseValue').html(Utils.formatNumber(base)+' &euro;');
        jQuery('#vatType span').html(getTextByKey('vat.type')+' ('+Utils.formatNumber(vat)+' %)');
        jQuery('#vatTypeValue').html(Utils.formatNumber(vatTotalValue)+'  &euro;');
        jQuery('#totalValue').html(Utils.formatNumber(totalVatValue)+' &euro;');*/
	},

	getData: function(values, formId){
		var me = this,
			objectToJsonString = {
			inputBusinessData:{
				Login:{
					Action:"EXISTS",
					UserMail:values.userEmail,
					UserPassword:values.userPassword,
					UserLoginId: values.userLoginId
				}
			}
		};

		var formId= formId || "mainForm";

		jQuery.ajax({
			type: "POST",
			dataType:'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.LOGIN_SERVICE),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					var errorMsg = data.errorList[0].text;
					if(data.errorList[0].code== 'ERR000040000'){
						errorMsg= getTextByKey('anfix.login.error.access');	
					}
					Utils.showErrors(errorMsg, formId);
					//$('#'+formId).effect('bounce',{ times:3, direction:'left', distance:'20' }, 500);
					return;
				}
				Utils.clearCookie("accessCode");
				Utils.setCookie("accessCode",data.outputData.Login.accessCode, null, null, 'anfix.com');
				me.getOrganizationData(formId);
			},
			error: function(jqXHR, textStatus, errorThrown){
				Utils.showErrors(getTextByKey('anfix.login.error'), formId);
			}
		});
	},

	getOrganizationData: function(obj){
		var me = this;
		var objectToJsonString = {
			inputBusinessData: {
				Organization: {
				}
			},
			applicationId: "1",
			accessCode: Utils.getCookie('accessCode')
		};
	
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			xhrFields: {
                        	withCredentials: true
                	},
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.ORGANIZATION_SERVICE_SEARCH),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					obj.failure(data.errorList[0].text);
					return;
				}
				obj.success(data.outputData.Organization[0]);
			},
			error: function(jqXHR, textStatus, errorThrown){
				obj.failure(getTextByKey('anfix.login.error'));
			}
		});	
	},

	getUserData: function(){
		var me = this;
		var objectToJsonString = {
			inputBusinessData: {
        		User: {
            		UserLoginId: Utils.getCookie('userLoginId')
        		}
        	}
    	};

    	jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.GET_NAME_AND_IMAGE),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					Utils.showErrors(data.errorList, "userRegisteredForm");
					return;
				}
				getUserRegisteredForm().setUserData(data.outputData.User);
				getUserRegisteredForm().show();				
			},
			error: function(jqXHR, textStatus, errorThrown){
				Utils.showErrors(getTextByKey('anfix.login.error'), "userRegisteredForm");
			}
		});	
	},

	existsEmail: function(obj){
		var me = this;
		var objectToJsonString = {
			inputBusinessData: {
        		UserEmail: {
            		UserMail: obj.email
        		}
        	}
    	};

    	jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.EXISTS_EMAIL),
			success: function(data, textStatus, jqXHR){
				obj.success(data);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				//
			}
		});	
	},

	getCurrentConfig: function(obj){
		var me = this;
		var objectToJsonString = {
			Filters: {
				CampaignDate: obj.date,
				CampaignCode: !obj.campaignCode? undefined : obj.campaignCode
			}
		};

    	jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Constants.CONFIG_URL,
			success: function(data, textStatus, jqXHR){
				obj.success(data);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				//
			}
		});	
	},

	searchEInforma: function(options){
		var me = this,
			objectToJsonString = {
				inputBusinessData:{
					CompanySearch:{
						Filters:[{
							CompanyName:options.text}
						],
						MaxRows: options.MaxRows || 50,
						MinRowNumber:options.MinRowNumber || 1
					}
				},
			applicationId:"1",
			accessCode: Utils.getCookie('accessCode')
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: /*'https://apps.anfix.com/os/os/einforma/companysearch/getdata',*/Utils.getUrl(Constants.EINFORMA),
			success: function(data, textStatus, jqXHR){
				options.success(data);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
    },

    searchProfileEInforma: function(options){
		var me = this,
			objectToJsonString = {
				companyId: options.CompanyId,
				inputBusinessData: {
					CompanyProfile: {
						Action:"COMPUTE_PROCESS",
						CompanyTaxIdentification:options.DocumentNumber,
						CompanyId: options.CompanyId
					}
				},
				applicationId:"1",
				accessCode: Utils.getCookie('accessCode')
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.EINFORMA_PROFILE),
			success: function(data, textStatus, jqXHR){
				options.success(data);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
    },

    searchTemplates: function(options){
    	var me = this,
    	objectToJsonString=  {
				companyId: options.CompanyId,
				inputBusinessData: {
					Template: {
			            //Fields: ["TemplateId", "TemplateTypeId", "IsTemplateAccessible", "IsDefaultTemplate", "TemplateLanguage", "TemplateName", "TemplatePreviewImageUID", "TemplateTypeLabel", "TemplateNotCustomized"],
			            MaxRows: 1000,
			            Filters: [{
			                TemplateTypeIdInclude: ["5Y", "5Z"]
			            }],
			            ContextApplicationId: "E",
			            TemplateIsPremium: true
			        }
				},
				applicationId:"1",
				accessCode: Utils.getCookie('accessCode')
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.TEMPLATE_SEARCH),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options.error(data);
					return;
				}
				data.outputData.Template.push({
					IsDefaultTemplate: true,
					IsTemplateAccessible: true,
					TemplateId: "5Y",
					TemplateIsPremium: false,
					TemplateLanguage: 1,
					TemplateName: "Plantilla Defecto",
					TemplatePreviewImageUID: "5Gq",
					TemplateSettings: [{TemplateSettingValue: "26002", TemplateSettingKey: "Preview", TemplateSettingDescription: ""}],
					TemplateTypeId: "5Y",
					TemplateTypeLabel: "Factura Emitida  (Facturaci￳n)"
				});

				data.outputData.Template.push({
					TemplateSettings: [{TemplateSettingValue: "26002", TemplateSettingKey: "Preview",TemplateSettingDescription: ""}],
		            TemplateName: "Presupuesto a cliente (Facturaci￳n)",
		            IsDefaultTemplate: true,
		            TemplateTypeId: "5Z",
		            TemplateLanguage: 1,
		            IsTemplateAccessible: true,
		            TemplateIsPremium: false,
		            TemplateTypeLabel: "Presupuesto a cliente (Facturaci￳n)",
		            TemplatePreviewImageUID: "5Gq",
		            TemplateId: "65"
		        });

				
				options.success(data.outputData.Template);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	},

	markTemplateAsDefault: function(options){
		var me = this,
			objectToJsonString = {
				companyId: options.CompanyId,
			    inputBusinessData: {
			        TemplateDefault: {
			            TemplateId: options.TemplateId,
			            TemplateTypeId: options.TemplateTypeId
			        }
			    },
			    applicationId: "E",
			    accessCode: Utils.getCookie('accessCode')
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			//url: 'http://'+Constants.WEB+'/proxy/?url='+Constants.PROTOCOL +'//'+Constants.DOMAIN+'/' +Constants.TEMPLATE_DEFAULT+'&mode=native',
			url: Utils.getUrl(Constants.TEMPLATE_DEFAULT),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options.error(data);
					return;
				}
				options.success(data.outputData);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	},

	previewTemplate: function(options){
		var me = this,
			objectToJsonString = {
				companyId: options.CompanyId,
			    inputBusinessData: {
			        TemplateSettingsManager: {
			            TemplateSettingManagerTemplateId: options.TemplateId,
			            TemplateSettings: options.TemplateSettings
			        }
			    },
			    applicationId: "1",
			    accessCode: Utils.getCookie('accessCode')
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.TEMPLATE_PREVIEW),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options.error(data);
					return;
				}
				options.success(data.outputData.TemplateSettingsManager.TemplateSettingManagerUid);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	},

	updateTemplate: function(options){
		var me = this,
			objectToJsonString = {
				companyId: options.CompanyId,
			    inputBusinessData: {
			        TemplateSettingsManager: {
			            TemplateSettingManagerTemplateId: options.TemplateId,
			            TemplateSettings: options.TemplateSettings
			        }
			    },
			    applicationId: "1",
			    accessCode: Utils.getCookie('accessCode')
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.TEMPLATE_UPDATE),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options.error(data);
					return;
				}
				options.success(data.outputData.TemplateSettingsManager);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	},
   
    updateCompany: function(options){
    	var identifcationTypeId= "4";

    	if(options.CompanyTaxIdentification && Utils.nif(options.CompanyTaxIdentification)){
    		identifcationTypeId = "2";
    	}else if(options.CompanyTaxIdentification && Utils.cif(options.CompanyTaxIdentification)){
    		identifcationTypeId= "1";
    	}

    	var legalFormId = "5";
    	if(options.CompanyLegalForm == "Sociedad Limitada"){
    		legalFormId = "2";
    	}else if(options.CompanyLegalForm == "Sociedad An￳nima"){
    		legalFormId = "1";
    	}else if(options.CompanyLegalForm == "Empresario individual"){
    		legalFormId = "3";
    	}else if(options.CompanyLegalForm == "Otros organismos p￺blicos"){
    		legalFormId = "4";
    	}

	var me = this,
		objectToJsonString = {
			"inputBusinessData": {
		        "Company": {
			            "CompanyId": options.CompanyId,
			            "CompanyFaxNumber": options.CompanyFax ? options.CompanyFax.substring(0,20) : null,
			            "CompanyCorporateName": options.CompanyCorporateName ? options.CompanyCorporateName.substring(0,150) : options.CompanyCorporateName,
			            //"CompanyCommercialRegistry": "Registro Mercantil de Madrid",
			            //"CompanyHasNotifications": true,
			            //"CompanyRegistrySheet": "M-131861",
			            "CompanyCommercialName":  options.CompanyCorporateName ? options.CompanyCorporateName.substring(0,150) : options.CompanyCorporateName,
			            //"CompanyRegistryFolio": 153,
			            //"CompanyRegistrationNumber": 1,
			            "CompanyCnaeId": options.CompanyCnaeId,
			            //"CompanyIdentificationNumber": options.CompanyTaxIdentification,
			            //"CompanyIdentificationTypeId": identifcationTypeId,
			            //"CompanyRegistryVolume": "8171",
			            "CompanyConLegalFormId": legalFormId,
			            "CompanyPhoneNumber":  options.CompanyPhone ? options.CompanyPhone.substring(0,20): "",
			            "CompanyWeb": options.CompanyWeb ? options.CompanyWeb.substring(0,150): "",
		        }
    		},
			applicationId:"e",
			accessCode: Utils.getCookie('accessCode')
		};

		if(options.CompanyTaxIdentification){
			objectToJsonString.inputBusinessData.Company.CompanyIdentificationNumber= options.CompanyTaxIdentification;
			objectToJsonString.inputBusinessData.Company.CompanyIdentificationTypeId= identifcationTypeId;
		}

		if(identifcationTypeId==2){
			objectToJsonString.inputBusinessData.Company.CompanyFirstName = options.CompanyCorporateName ? options.CompanyCorporateName.substring(0,15) : null;
			objectToJsonString.inputBusinessData.Company.CompanyLastName = options.CompanyCorporateName.split(' ')[1].length > 1 ? options.CompanyCorporateName.split(' ')[1]: ' ';
			objectToJsonString.inputBusinessData.Company.CompanyLastName = objectToJsonString.inputBusinessData.Company.CompanyLastName? objectToJsonString.inputBusinessData.Company.CompanyLastName.substring(0,30): null;
		}

		if(options.CompanyAddressText){
			objectToJsonString.inputBusinessData.Company.Address= {
            	"Action": 'ADD',
                "AddressText": options.CompanyAddressText ? options.CompanyAddressText.substring(0,100): null,
                "AddressPostalCode": options.CompanyPostalCode,
                "AddressCity": options.CompanyCity ? options.CompanyCity.substring(0,100): null,
                "AddressProvince": options.CompanyProvince ? options.CompanyProvince.substring(0,100): null

			};
		}

		if(options.CompanyUID){
			objectToJsonString.inputBusinessData.Company.Media= {
            	Action: options.mediaUpdate ? 'UPDATE' : 'ADD',
            	UID: options.CompanyUID
            };
		}

		if(options.TemplateId){

			objectToJsonString.inputBusinessData.Company.TemplateSettingsManager= [{
	            "TemplateSettingManagerTemplateId": options.TemplateId,
	            "TemplateSettings": options.TemplateSettings
        	},{
        		"TemplateSettingManagerTemplateId": options.TemplateIdBudget,
	            "TemplateSettings": options.TemplateSettingsBudgets
        		
        	}];
		}


		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.UPDATE_COMPANY),
			success: function(data, textStatus, jqXHR){
				options.success(data);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
    },

    uploadFile: function (options) {
		var me = this;
		/*if(options && !options.fileList  && !(jQuery('#'+options.idFileInput).val() && jQuery('#'+options.idFileInput).val()!='')){
			return;
		}*/ 

		var fileList = null;

		var data = new FormData();

		if(options && !options.fileList && !options.dataBytes){
			fileList =jQuery('#'+options.idFileInput)[0].files;
		}else if(options && !options.dataBytes){
			fileList = options.fileList;
		}

		if(options && !options.dataBytes){
			jQuery.each(fileList, function(i, file) {
		    	data.append('upload', file);
			});
		}else{

			function dataURItoBlob(dataURI) {
			    // convert base64/URLEncoded data component to raw binary data held in a string
			    var byteString;
			    if (dataURI.split(',')[0].indexOf('base64') >= 0)
			        byteString = atob(dataURI.split(',')[1]);
			    else
			        byteString = unescape(dataURI.split(',')[1]);

			    // separate out the mime component
			    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

			    // write the bytes of the string to a typed array
			    var ia = new Uint8Array(byteString.length);
			    for (var i = 0; i < byteString.length; i++) {
			        ia[i] = byteString.charCodeAt(i);
			    }

			    return new Blob([ia], {type:mimeString});
			}
			data.append('upload', dataURItoBlob(options.dataBytes));
		}
		

		data.append('accessCode', Utils.getCookie('accessCode'));
				
		jQuery.ajax({
			type: "POST",
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			url: Utils.getUrl(Constants.MEDIA,true),
			success: function(data){
				if(JSON.parse(data).errorList){
					options.error(JSON.parse(data));
				}
				options.success(JSON.parse(data).outputData.Media[0].UID);
			},
			error:  function(data){
				options.error(data)
			}
		});
				
	},

	acceptInvitationsPending: function(options){
		 var me = this,
                        objectToJsonString = {
                                inputBusinessData:{
                                        UserInvitation:{}
                                },
                            applicationId: "1",
                            accessCode: Utils.getCookieNoSecure('accessCode')
                };
                jQuery.ajax({
                        type: "POST",
                        dataType: 'json',
                        data: JSON.stringify(objectToJsonString),
                        contentType: 'application/json',
                        url: Utils.getUrl(Constants.INVITATIONS_ACCEPT_ADVISOR),
                        success: function(data, textStatus, jqXHR){
                                if(data.errorList){
                                        options.error(data);
                                        return;
                                }
                                options.success(data.outputData.UserInvitation);
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                                options.error(jqXHR);
                        }
                });	
	
		/*var me = this;
		this.searchInvitations({
			success: function(data){
				if(!data){
					options.success();
					return;
				}
				var arrayInvitationsId = [];
				jQuery.each(data, function(i, invitation){
					if(invitation.UserInvitationStatusId == Utils.PENDING_INVITATION_STATUS_ID){
					arrayInvitationsId.push(invitation.UserInvitationId);
					}
				});

				if(arrayInvitationsId.length === 0){
					options.success();
					return;	
				}
				me.acceptInvitations({
					invitationsId : arrayInvitationsId,
					success: function(){
						options.success();
					},
					error: function(data){
						options.error && options.error();
					}

				});
			},
			error: function(data){
				options.error && options.error();
			}
		});*/
	},

	searchInvitations: function(options){
		var me = this,
			objectToJsonString = {
				inputBusinessData:{UserInvitation:{"Source":false,"MaxRows":1000}},
			    applicationId: "1",
			    accessCode: Utils.getCookieNoSecure('accessCode')
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.INVITATION_SEARCH),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options.error(data);
					return;
				}
				options.success(data.outputData.UserInvitation);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	},

	acceptInvitations: function(options){
		var me = this,
			objectToJsonString = {
				inputBusinessData:{
					UserInvitation:{
						UserInvitationIds:options.invitationsId
					}
				},
			    applicationId: "1",
			    accessCode: Utils.getCookieNoSecure('accessCode')
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.ACCEPT_INVITATION),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options.error(data);
					return;
				}
				options.success(data.outputData.UserInvitation);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	},

	searchCnae:  function(options){
		var me = this,
			objectToJsonString = {
				inputBusinessData:{
					Cnae: {
			            CompanyId: options.CompanyId,
			            Filters: [{
			                CnaeCode: options.Cnae
			            }]
			        }
				},
			    applicationId: "1",
			    accessCode: Utils.getCookie('accessCode')
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CNAE_SEARCH),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options.error(data);
					return;
				}
				options.success(data.outputData.Cnae);				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	},

	logger: function(message){
		var me = this,
			objectToJsonString = {
				message: message
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Constants.LOGGER_WEB,
			success: function(data, textStatus, jqXHR){
				console.log(data);	
			},
			error: function(jqXHR, textStatus, errorThrown){
				
			}
		});	
	},
		
	upgradeUser: function(options){
		var me = this,
			objectToJsonString = {
				applicationId: "1",
				accessCode: options && options.accessCode,
				inputBusinessData: {
					User: {
						UserId: options && options.userId,
						InstallConta: document.referrer.indexOf('empresas') !=-1 || document.referrer.indexOf('gestores') !=-1,
						IsAdvisorOffice: document.referrer.indexOf('gestores') !=-1
                    }
				}
		};
		if(objectToJsonString.inputBusinessData.User.InstallConta || objectToJsonString.inputBusinessData.User.IsAdvisorOffice){
                         window.drift && window.drift.track('shopping_new_app_conta');		
}
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.UPGRADE_USER),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					options && options.error(data);
					return;
				}
				options && options.success();				
			},
			error: function(jqXHR, textStatus, errorThrown){
				options.error(jqXHR);	
			}
		});	
	}
		
}
/**
 * Documento Confidencial.
 * 
 * @file configuration.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date January, 2013
 * @brief Object with all configuration web, steps, campaignCode,...
 */


/*GLOBAL VARIABLES*/
var configuration=null;


/**GLOBAL FUNCTIONS*/

function getConfiguration(){
	if(jQuery.isEmptyObject(configuration)){
		configuration = new Configuration();
	}
	return configuration;
};


/**CLASS*/
var Configuration = function(){
	this.proxy = new Proxy();
};

Configuration.prototype = {

	information: null,

	setUp: function(callback){
		this.proxy.getCurrentConfig({
			date: this.getDateToFormat(new Date()),
			campaignCode: Utils.getCookie('linkCampaign'),
			success: function(record){
				if(record && record.CustomizedCampaign){
					getConfiguration().information=record.CustomizedCampaign;
					campaignWithGift=!jQuery.isEmptyObject(record.CustomizedCampaign.Present);
				}
				callback();
			}
		});
	},

	getInformation:function(key){
		if(!this.information && key){
			if(key == "Step1" || key == "Step2"){
				return Constants.GIFT_STEP_1;
			} else if(key == "Step3"){
				return Constants.GIFT_STEP_3;
			} else if(key == "Step4"){
				return Constants.GIFT_STEP_4;
			} else {
				return {};
			}
		}else if(!this.information){
			return {};
		}
		return key?this.information[key]: this.information;
	},

	getDateToFormat:function(date){
		var separator = '/',
			separator2 = ':';
		var day = date.getDate();
		var month = date.getMonth()+1;
		var year = date.getFullYear();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		function complete(obj){
			obj = obj.toString().length<2 ? '0'+obj:obj;
			return obj;
		}
		

		return complete(day)+separator+complete(month)+separator+year+' '+complete(hour)+separator2+complete(minutes)+separator2+complete(seconds);
	}
};
/**
 * Documento Confidencial.
 *
 * @file userSignup.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date December, 2012
 * @brief js to signup.
 */
var UserSignup = function(){};

UserSignup.prototype = {

	getOrganizationId : function(){
		return this.organizationId;
	},

	setOrganizationId: function(organizationId){
		this.organizationId=organizationId;
	},

	getNextStatus : function(){
		return this.status;
	},
	setNextStatus: function(status){
		this.status=status;
	},

	isVerifiedPhone: function (phone){
		var me = this;
		var objectToJsonString = {
		        phone: phone,
			gift: getConfiguration().getInformation('Present') || null
		};
		jQuery.ajax({
	        type: "POST",
	        dataType: 'json',
	        data: JSON.stringify(objectToJsonString),
	        contentType: 'application/json',
	        url: Constants.VERIFIED_PHONE,
	        success: function(data){
				Utils.setCookie('isVerified', data.result===0?true:false);
	        },
	        error: function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
	        }
		});
	},

	setVerifiedPhone: function(obj){
		var  me = this,
			objectToJsonString = {
				phoneCode: obj.phoneCode,
				phone: obj.phone
        	};
        	jQuery.ajax({
            		type: "POST",
            		dataType: 'json',
            		data: JSON.stringify(objectToJsonString),
            		contentType: 'application/json',
            		url: Constants.SET_VERIFIED_CODE,
            		success: function(data){
				var resultOk = data.result ===0;
				if(!resultOk){
					var error = data.statusDesc;
					obj.failure({errorMessage:getTextByKey('anfix.phone.code.error')});
		    		return;
				}
				obj.success();

					/*var values = getUserData().getValues();
 * 					values.surname ="Apellidos";
 * 										values.company = values.company || getTextByKey('anfix.company.name');
 * 															values.name = values.name || getTextByKey('anfix.user.name');
 * 																				values.password = getUserData().getValue('password');
 * 																								 	Utils.setCookie('isVerified', true);
 * 																								 						me.signupOneStep(values);
 * 																								 										//	hidePhoneCodeForm();	*/

			},
			error: function(jqXHR, textStatus, errorThrown){
			   	obj.failure({errorMessage:getTextByKey('anfix.phone.code.error')});
			}
		});
	},


    /**     searchCampaignId: function (source, name){

                var  me = this;


               var objectToJsonString = {
                     source: source,
		     campaignName : name
		};
		jQuery.ajax({
                        type: "POST",
                        dataType: 'json',
                        data: JSON.stringify(objectToJsonString),
                        contentType: 'application/json',
                        url: Constants.SEARCH_CAMPAIGNS,
                        success: function(data){
                              Utils.setCookie('linkCampaign', data.campaignId);
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                                console.log(errorThrown);
                        }
                });
        },*/

	verifyPhoneCode: function(obj){
		var  me = this,
			objectToJsonString = {
				phoneCode: obj.phoneCode,
				phone: obj.phone
        };
        jQuery.ajax({
            type: "POST",
            dataType: 'json',
            data: JSON.stringify(objectToJsonString),
            contentType: 'application/json',
            url: Constants.VERIFY_CODE,
            success: function(data){
				var resultOk = data.result ===0;
				if(!resultOk){
					var error = data.statusDesc;
					obj.failure({errorMessage:getTextByKey('anfix.phone.code.error')});
		    		return;
				}
				obj.success();

					/*var values = getUserData().getValues();
					values.surname ="Apellidos";
					values.company = values.company || getTextByKey('anfix.company.name');
					values.name = values.name || getTextByKey('anfix.user.name');
					values.password = getUserData().getValue('password');
				 	Utils.setCookie('isVerified', true);
					me.signupOneStep(values);
				//	hidePhoneCodeForm();	*/

			},
			error: function(jqXHR, textStatus, errorThrown){
			   	obj.failure({errorMessage:getTextByKey('anfix.phone.code.error')});
			}
		});
	},

	restoreVerifyCode: function(phoneCode, phone){
	    var  me = this;
	    var objectToJsonString = {
	            phoneCode: phoneCode,
	            phone: phone
	    };
	    jQuery.ajax({
	            type: "POST",
	            dataType: 'json',
	            data: JSON.stringify(objectToJsonString),
	            contentType: 'application/json',
	            url: Constants.RESTORE_VERIFY_CODE,
	            success: function(data){
	                   var resultOk = data.result ===0;
		Utils.setCookie('isVerified', false);
             },
             error: function(jqXHR, textStatus, errorThrown){
                    console.log(errorThrown);
             }
       });
    },


	sendSms: function(obj){
		var  me = this,
			values = obj.values || {},
			campaignCode = Utils.getCookie("linkCampaign") || 'ANFIXAPP';

       	var objectToJsonString = {
         	name:values.name,
            surname:values.surname,
            email:values.email,
            type:values.companytype,
            promo: campaignCode,
			phone: values.organizationPhoneNumber,
			present: getConfiguration().getInformation('Present'),
			company: values.companyname,
            addressText: values.organizationDeliveryAddressText,
            addressPostalCode: values.organizationDeliveryAddressPostalCode,
            addressCity: values.organizationDeliveryAddressCity,
            addressProvince: Utils.getProvinceNameById(values.organizationDeliveryAddressProvince)
		};
        jQuery.ajax({
            type: "POST",
            dataType: 'json',
            data: JSON.stringify(objectToJsonString),
            contentType: 'application/json',
            url: Constants.SMS,
            success: function(data){
            	var resultOk = data.result ===0;
				if(!resultOk){
				    var error = data.statusDesc;
				    obj.failure({errorMessage:error});
				    return;
				}
				obj.success();
			},
			error: function(jqXHR, textStatus, errorThrown){
				  obj.failure({errorMessage:errorThrown});
			}
		});
	},

	signupProfit: function(values){
		var referrer = null,
			me = this;
		if (document.referrer){
			referrer = (document.referrer.match(/:\/\/(.[^/]+)/)[1]).replace('www.','');
		}
		var campaignCode = Utils.getCookie("linkCampaign") || 'PPMT';
		if(values.campaignCode){
	 		campaignCode = values.campaignCode;
	 	}

	 	var info = getInformationStepArray().Info;
	 	if(info[0].partner && campaignsByPartner[info[0].partner]){
	 		campaignCode = campaignsByPartner[info[0].partner];
	 	}

	 	var channel = (info[0].partner && Utils.toCamelCase(info[0].partner)) || location.host;
	 	if(!(info[0].partner && Utils.toCamelCase(info[0].partner)) && Utils.getCookieNoSecure('channel')){
	 		channel  = Utils.getCookieNoSecure('channel');
	 		Utils.clearCookie('channel');
	 	}

	 	var organizationName = values.EMail.substring(0, values.EMail.indexOf('@'));

		var objectToJsonString = {
			inputBusinessData: {
				User: {
					IsTrialProfit: true,
					RegistrationTypeId: '5',
					UserMail:values.EMail,
					UserPassword:values.Password,
					CampaignCode: campaignCode,
					OrganizationName: values.UserName || organizationName,
					UserName: values.UserName || organizationName,
					OrganizationTypeId:values.companyType,
					Referral:channel,
					UserCAUAgentId:Utils.isMobile() ? getSignupMobileForm().getDirCAUAgentId() : getSignupForm().getDirCAUAgentId()
				}
			}
		};
		if (userRegister.params && userRegister.params.invId) {
			objectToJsonString.inputBusinessData.User.InvitationId = userRegister.params.invId;
		}

		if(!jQuery.isEmptyObject(values.Phone)){
			objectToJsonString.inputBusinessData.User.Organization= {
				OrganizationPhoneNumber : values.Phone
			};
		}

		if(values.CommercialConfigs){
			var commercialConfigs = {
				"Action":"UPDATE",
				"ShoppingCartCommercialConfig":[]
			};

			var len = values.CommercialConfigs.length;
			for(var i = 0; i < len; i ++){
				commercialConfigs.ShoppingCartCommercialConfig.push({
					"Action":"ADD",
					"ShCtCommConfigCampaignId": values.CommercialConfigs[i].ShCtCommConfigCampaignId,
					"ShCtCommConfigCommercialConfigId": values.CommercialConfigs[i].ShCtCommConfigCommercialConfigId,
					"ShCtCommConfigForceCommercialConfig": true
				});
			}

			delete objectToJsonString.inputBusinessData.User.CampaignCode;
			objectToJsonString.inputBusinessData.User.ShoppingCartUpdate = commercialConfigs;
			objectToJsonString.inputBusinessData.User.Organization.PayChargeMethod = {
				"Action":"ADD",
				"PayChargeMethodData":{
					"PayvisionDescription":"Tarjeta de crédito."
				}
			};
			objectToJsonString.inputBusinessData.User.Organization.OrganizationPayChargeMethodType = Constants.CARD_PAYMENT;

		}

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CREATE_ONE_STEP_PROFIT),
			success: function(data){
				if(values.success){
					values.success.call(me, data);
					return;
				}
				me.successOneStep.call(me, data);
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			}
		});
	},

	signupOneStep: function (values){

		var referrer = null,
			me = this;
		if (document.referrer){
			referrer = (document.referrer.match(/:\/\/(.[^/]+)/)[1]).replace('www.','');
		}
		var campaignCode = Utils.getCookie("linkCampaign") || 'DEFAULT';
		var nameSurname = values.name+' '+values.surname,
	 	    organizationName = values.companytype===Utils.SELF_EMPLOYED? nameSurname:values.companyname;

	 	if(values.campaignCode){
	 		campaignCode = values.campaignCode;
	 	}

		var objectToJsonString = {
			inputBusinessData: {
				User: {
					UserName:values.name,
					UserSurname:values.surname,
					UserMail:values.email,
					UserPassword:values.password1,
					OrganizationTypeId:values.companytype,
					CampaignCode: campaignCode,
					Organization:{
						Action:"ADD",
						OrganizationName:organizationName,
						OrganizationPhoneNumber:values.organizationPhoneNumber,
						OrganizationEmail:values.email,
						CreateCompanyFromOrganization:true
					},
					Referral:location.host
				}
			}
		};

		//delete objectToJsonString.inputBusinessData.User.OrganizationTypeId;
		if(userRegister.params.pw){
			objectToJsonString.inputBusinessData.User.PasswordIsEncrypted=true;
		}
		if (userRegister.params.invId) {
			objectToJsonString.inputBusinessData.User.InvitationId = userRegister.params.invId;
		}


		if(values.CommercialConfigs){
			var commercialConfigs = {
				"Action":"UPDATE",
				"ShoppingCartCommercialConfig":[]
			};

			var len = values.CommercialConfigs.length;
			for(var i = 0; i < len; i ++){
				commercialConfigs.ShoppingCartCommercialConfig.push({
					"Action":"ADD",
					"ShCtCommConfigCampaignId": values.CommercialConfigs[i].ShCtCommConfigCampaignId,
					"ShCtCommConfigCommercialConfigId": values.CommercialConfigs[i].ShCtCommConfigCommercialConfigId,
					"ShCtCommConfigForceCommercialConfig": true
				});
			}

			delete objectToJsonString.inputBusinessData.User.CampaignCode;
			objectToJsonString.inputBusinessData.User.ShoppingCartUpdate = commercialConfigs;
			objectToJsonString.inputBusinessData.User.Organization.PayChargeMethod = {
				"Action":"ADD",
				"PayChargeMethodData":{
					"PayvisionDescription":"Tarjeta de crédito."
				}
			};
			objectToJsonString.inputBusinessData.User.Organization.OrganizationPayChargeMethodType = Constants.CARD_PAYMENT;

		}

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CREATE_ONE_STEP),
			success: function(data){
				if(getUserRegister().getUserData() && getUserRegister().getUserData().phoneCode){
					me.setVerifiedPhone({
						phone: values.organizationPhoneNumber,
						phoneCode: getUserRegister().getUserData().phoneCode,
						success: function(){},
						failure: function(){}
					});
				}
				if(values.success){
					values.success.call(me, data);
					return;
				}
				me.successOneStep.call(me, data);
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			}
		});
	},

	successOneStep: function (data){
		var status,
			me=this,
			isPayment= false,
			organization,
			accessCode;
		if(data.errorList){
			Utils.showErrors(data.errorList, 'userForm');
			userRegister.show(true);
			return;
		}else {
			var userLoginId = data.outputData.User.UserLoginId;
			if(userLoginId){
    			Utils.setCookie("userLoginId", userLoginId, null,null,'anfix.com');
			}
			organization= data.outputData.User.Organization;
			status = organization.WorkFlow.NextState;
			accessCode =data.outputData.User.accessCode;
			Utils.setCookie("accessCode", accessCode, null,null,'anfix.com');
			loadPixel({
				pixelsType: Constants.LOGIN_TARGETPIXEL_TRIAL,
				success: function(){
					if (jQuery('#companytype').val() != Constants.TYPE_FREELANCE && jQuery('#companytype').val() != Constants.TYPE_PYME && jQuery('#companytype').val()!=Constants.TYPE_PROFESSIONAL_OFFICE) {
						me.setOrganizationId(organization.OrganizationId);
						me.uploadFileBeforeLogin();
					}else {
						me.followWorkflow(status);
					}
				}
			});
				/*if (jQuery('#companytype').val() != Constants.TYPE_FREELANCE && jQuery('#companytype').val() != Constants.TYPE_PYME && jQuery('#companytype').val()!=Constants.TYPE_PROFESSIONAL_OFFICE) {
				this.setOrganizationId(organization.OrganizationId);
				this.uploadFileBeforeLogin();
			}
			else {
				this.followWorkflow(status);
			}*/
		}
	},

	successCounter: function(data){
		var me = this;
		var organization = data.organization;
		var status = data.status;
		if (jQuery('#companytype').val() != Utils.SELF_EMPLOYED && jQuery('#companytype').val() != Utils.SME) {
	         this.setOrganizationId(organization.OrganizationId);
	         this.uploadFileBeforeLogin();
        }else {
			 me.followWorkflow(status);

        }
	},

	/*
	loadPixelsInSerial: function(url, option){
            var me = this,
                    success = option.success || {},
                    params = option.data,
                    id = params.id || 'pixel';

            jQuery('body').append('<img height="1" width="1" border="0" id="'+id+'"/>');
            jQuery('#'+id).attr('src',url).load(function() {
			jQuery('body').append('<img height="1" width="1" border="0" id="weboramaPixel"/>');
			jQuery('#weboramaPixel').attr('src',Constants.WEBORAMA_TRIAL_URL).load(function() {
				me.sendPixelDoubleClick(success,params,me);
				//success.call(me,params);
			});
			jQuery("#weboramaPixel").error(function(){
				 me.sendPixelDoubleClick(success,params,me);
				// success.call(me,params);
			});
                });

                $("#"+id).error(function(){
			jQuery('body').append('<img height="1" width="1" border="0" id="weboramaPixel"/>');
                        jQuery('#weboramaPixel').attr('src',Constants.WEBORAMA_TRIAL_URL).load(function() {
                        	me.sendPixelDoubleClick(success,params,me);
			});
			 jQuery("#weboramaPixel").error(function(){
                                  me.sendPixelDoubleClick(success,params,me);
                        });
                });
        },

	sendPixelDoubleClick: function(success, params, scope){
		var axel = Math.random() + "";
                var a = axel * 10000000000000;
		var url ='http://ad-emea.doubleclick.net/activity;src=4001239;type=confi034;cat=confi430;ord=' + a + '?';
		 jQuery('body').append('<img height="1" width="1" border="0" id="dbclick"/>');
		jQuery('#dbclick').attr('src',url).load(function() {
                     success.call(scope,params);
                });
                jQuery("#dbclick").error(function(){
                	success.call(scope,params);
		});
	},

*/
	loadPixeles: function(url, option){
		var me = this,
                        success = option.success || {},
			params = option.data,
			id = params.id || 'pixel';

		jQuery('body').append('<img height="1" width="1" border="0" id="'+id+'"/>');
		jQuery('#'+id).attr('src',url).load(function() {
        		pixelesCounter++;
				if(pixelesCounter ==2){
			 	success.call(me,params);
			}

    		});

		jQuery("#"+id).error(function(){
			pixelesCounter++;
			if(pixelesCounter ==2){
                         success.call(me,params);
                        }

		});
	},

	signUpTwoSteps: function(values){
		var referrer = null,
			me = this;
		if (document.referrer){
			referrer = (document.referrer.match(/:\/\/(.[^/]+)/)[1]).replace('www.','');
		}
		var campaignCode = Utils.getCookie("linkCampaign") || 'PROFIT';

		var objectToJsonString = {
			inputBusinessData: {
				User: {
					//UserName:values.name,
					//UserSurname:values.surname,
					UserMail:values.EMail,
					UserPassword:values.Password,
					OrganizationTypeId:values.companytype,
					CampaignCode: campaignCode,
					Organization:{
						Action:"ADD",
						OrganizationName:values.organizationName,
						OrganizationPhoneNumber:values.organizationPhoneNumber,
						OrganizationEmail:values.EMail,
						OrganizationTaxIdentification:values.organizationIdentificationNumber,
						OrganizationPayChargeMethodType: Constants.CARD_PAYMENT,
						CreateCompanyFromOrganization:true
					},
					Referral:location.host
				}
			}
		};

		if(values.organizationAddressPostalCode){
			values.organizationAddressCity = values.organizationAddressCityId? null:values.organizationAddressCity;
			values.organizationAddressProvince = values.organizationAddressProvinceId? null:values.organizationAddressProvince;
			objectToJsonString.inputBusinessData.User.Organization.Address= {
				Action:"ADD",
                AddressPostalCode: values.organizationAddressPostalCode,
                AddressCityId: values.organizationAddressCityId ?values.organizationAddressCityId:null,
               	AddressProvinceId: values.organizationAddressProvinceId ?values.organizationAddressProvinceId:null,
		        AddressCity:values.organizationAddressCity?values.organizationAddressCity:null,
				AddressProvince: values.organizationAddressProvince ?values.organizationAddressProvince:null,
				AddressText : values.organizationAddressText,
                AddressCountryId: values.organizationAddressCountryId
            };
		}

		if(values.organizationDeliveryAddressText){
			objectToJsonString.inputBusinessData.User.Organization.OrganizationDeliveryAddress= {
				Action:"ADD",
                AddressPostalCode: values.organizationDeliveryAddressPostalCode,
                //AddressCityId: values.AddressCityId ?values.AddressCityId:null,
               	AddressProvinceId: values.organizationDeliveryAddressProvinceId,
		        AddressCity:values.organizationDeliveryAddressCity,
				//AddressProvince: values.AddressProvince ?values.AddressProvince:null,
				AddressText : values.organizationDeliveryAddressText,
                AddressCountryId: Constants.SPAIN
            };
		}
		var isCardType =!Utils.isMobile()? getPaymentForm().isCardType(): getPaymentByMobileForm().isCardType();

		if(isCardType){
			objectToJsonString.inputBusinessData.User.Organization["OrganizationPayChargeMethodType"]=Constants.CARD_PAYMENT;
				objectToJsonString.inputBusinessData.User.Organization.PayChargeMethod= {
				Action:"ADD",
				PayChargeMethodType: Constants.CARD_PAYMENT,
				//PayChargeMethodDataId:organization.OrganizationPayChargeMethodDataId?organization.OrganizationPayChargeMethodDataId:null,
				PayChargeMethodData:{
        			CreditCardHolderName :values.CreditCardHolderName,
					CreditCardExpirationMonth:values.CreditCardExpirationMonth,
					CreditCardExpirationYear:values.CreditCardExpirationYear,
					CreditCardNumber:Utils.getEncryptedValue.call(me,values.CreditCardNumber)
				}
			};
		}else{
			objectToJsonString.inputBusinessData.User.Organization["OrganizationPayChargeMethodType"]=Constants.BANKACCOUNT_PAYMENT; ;
			objectToJsonString.inputBusinessData.User.Organization.PayChargeMethod={
				Action:"ADD",
				PayChargeMethodType: Constants.BANKACCOUNT_PAYMENT,
        		//PayChargeMethodDataId:organization.OrganizationPayChargeMethodDataId?organization.OrganizationPayChargeMethodDataId:null,
				PayChargeMethodData:{
        			BankAccountEntity:values.BankAccountEntity,
					BankAccountOffice:values.BankAccountOffice,
					BankAccountControlDigits:Utils.getEncryptedValue.call(me,values.BankAccountControlDigits),
					BankAccountNumber:Utils.getEncryptedValue.call(me,values.BankAccountNumber),
					BankAccountIBAN:Utils.getEncryptedValue.call(me,values.BankAccountIBAN),
					BankAccountBIC:values.BankAccountBIC,
				}
			};
		}


		if(values.CommercialConfigs){
			var commercialConfigs = {
				"Action":"UPDATE",
				"ShoppingCartCommercialConfig":[]
			};

			var len = values.CommercialConfigs.length;
			for(var i = 0; i < len; i ++){
				commercialConfigs.ShoppingCartCommercialConfig.push({
					"Action":"ADD",
					"ShCtCommConfigCampaignId": values.CommercialConfigs[i].ShCtCommConfigCampaignId,
					"ShCtCommConfigCommercialConfigId": values.CommercialConfigs[i].ShCtCommConfigCommercialConfigId,
					"ShCtCommConfigForceCommercialConfig": true
				});
			}

			delete objectToJsonString.inputBusinessData.User.CampaignCode;
			objectToJsonString.inputBusinessData.User.ShoppingCartUpdate = commercialConfigs;
		}

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CREATE_ONE_STEP_PROFIT),
			success: function(data){

				getPaymentForm().setDisabledSumbitButton(false);
				me.successTwoStep.call(me, data);
			},
			error: function(jqXHR, textStatus, errorThrown){
				Utils.hideLoading();
				getPaymentForm().setDisabledSumbitButton(false);
				getPaymentForm().showErrorMessages({errorMessage:"anfix.error.two.steps", isKey:true});
				//Utils.showNextButton('paymentForm');
			}
		});
	},

	successTwoStep: function(data){
		var me= this,
			status,
			isPayment= false,
			/*payChargeMethod=jQuery('#payChargeMethod').val(),*/
			organization,
			accessCode;
		if(data.errorList){
			getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
			return;
		}

		var userLoginId = data.outputData.User.UserLoginId;
		if(userLoginId){
        	Utils.setCookie("userLoginId", userLoginId, null,null,'anfix.com');
    	}

		organization= data.outputData.User.Organization;
		status = organization.WorkFlow.NextState;
		accessCode =data.outputData.User.accessCode;
		Utils.setCookie("accessCode", accessCode, null,null,'anfix.com');
		Utils.setCookie("firstTime", true, null,null,'anfix.com');
		isPayment =organization.Charge.ChargeIsByCheckout;


		if(Constants.PENDING_PAYMENT_STATUS===organization.Charge.ChargeStatusId){
			organization.ShoppingCartId = data.outputData.User.ShoppingCartId;
			me.charge(organization, 'paymentForm');
			 trackEvent({
                   		 origin: 'PAYMENT',
                    		action: "FINISH",
                    		label: 'NO-REGISTERED'
                	});
    			//_gaq.push(['_trackEvent', 'PAYMENT', 'FINISH', 'NOREGISTERED']);
    	}else if(Constants.OK_PAYMENT_STATUS===organization.Charge.ChargeStatusId){
    			 trackEvent({
                                 origin: 'PAYMENT',
                                action: "FINISH",
                                label: 'NO-REGISTERED'
                        });

			//   _gaq.push(['_trackEvent', 'PAYMENT', 'FINISH', 'NOREGISTERED']);
			loadPixel({
				pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
				success: function(){
					if(Utils.isMobile()){
						me.followWorkflow(Constants.WF_COMPLETED);
					}

					if (jQuery('#companytype').val() != Constants.TYPE_FREELANCE && jQuery('#companytype').val() != Constants.TYPE_PYME && jQuery('#companytype').val()!=Constants.TYPE_PROFESSIONAL_OFFICE) {
						me.setOrganizationId(organization.OrganizationId);
						me.uploadFileBeforeLogin();
					}else {
						me.followWorkflow(Constants.WF_COMPLETED);
					}
				}
			});

		}

	},

	followWorkflow: function(status){
		var me=this;

	    function callback(){
            Utils.setCookieNoSecure("accessCode", accessCodeValue);
            Utils.setCookieNoSecure("firstTime", true, null,null,'anfix.com');
        	if (userLoginIdValue) {
	        	Utils.setCookieNoSecure("userLoginId", userLoginIdValue);
  		    }
            if(status === Constants.WF_USER_CREATED_INVITATION){
                me.createOrganizationWithUserData();
                Utils.setCookieNoSecure("invitation", true);
			}else if(status === Constants.WF_USER_CREATED){
	            me.goToCreateOrganization();
			} else if(status === Constants.WF_ORGANIZATION_CREATED){
	            me.loadCommercialCfgs();
			} else if(status === Constants.WF_COMPLETED){
				Utils.clearCookie("promoCode");
				Utils.clearCookie("requestMail");
				Utils.clearCookie("campaignId");
				if(!Utils.isRegisteredUser()){
	                Utils.setCookieNoSecure("firstTime", true, null,null,'anfix.com');
				}
				setTimeout(function(){
					if(window.registerFromiPad){
						document.location  = Utils.getIpadReturnUrl(userRegister.getValues());
					} else {
				    	if(Utils.getCookie('fromInvitation')){
				    		var proxy = new Proxy();
				    		proxy.searchInvitations({
				    			success: function(data){
				    				var arrayInvitationsId = [];
				    				jQuery.each(data, function(i, invitation){
				    					arrayInvitationsId.push(invitation.UserInvitationId);
				    				});
				    				proxy.acceptInvitations({
				    					invitationsId : arrayInvitationsId,
				    					success: function(){
				    						//Utils.hideLoading();
				    						Utils.goHome();
				    					},
				    					error: function(data){
				    						Utils.hideLoading();
				    						Utils.showPanelError(data.errorList.length, data.errorList[0].text);
				    					}

				    				});
				    			},
				    			error: function(data){
				    				Utils.hideLoading();
				    				Utils.showPanelError(data.errorList.length, data.errorList[0].text);
				    			}
							});
				    	}else{
				    		Utils.goHome();
				    	}

					}
				}, 1600);
			}
		}
		var cookiesName=[];
		var accessCodeValue = null;
		if(cookiesObj.accessCode) {
			cookiesName.push("accessCode");
			accessCodeValue=cookiesObj.accessCode;
		} else {
			accessCodeValue = Utils.getCookieNoSecure("accessCode");
		}

		if(cookiesObj.firstTime) {
            cookiesName.push("firstTime");
        }

		var userLoginIdValue = null;
		if(cookiesObj.userLoginId){
			cookiesName.push("userLoginId");
			userLoginIdValue=cookiesObj['userLoginId'];
		}

		Utils.clearCookies(cookiesName, callback);
	},

	uploadFileBeforeLogin: function () {
		var me = this;
		if(!(jQuery('#file').val() && jQuery('#file').val()!='')){
			this.followWorkflow(Constants.WF_COMPLETED);
			return;
		}
		/*
		if(jQuery.browser.msie){
			//me.uploadWithIE();
			return;
		}
		*/
		var data = new FormData();
		jQuery.each(jQuery('#file')[0].files, function(i, file) {
	    	data.append('upload', file);
		});

		data.append('accessCode', Utils.getCookie('accessCode'));
		//jQuery.support.cors=true;

		jQuery.ajax({
			type: "POST",
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			url: Utils.getUrl(Constants.MEDIA,true),
			success: function(data){
				me.successUploadFile.call(me, data)
			},
			failure:  function(data){
				me.failureUploadFile.call(me, data)
			}
		});

	},

	uploadWithIE: function(){
    	var options = {
            url     : Utils.getUrl(Constants.MEDIA)+'&accessCode='+Utils.getCookie('accessCode'),
            type    : 'POST',
            dataType: 'json',
            success:function( data ) {
               console.log(data);
            },failure: function(data){

            }
        };
        jQuery('#fileform').ajaxSubmit(options);
    },


	successUploadFile : function(data, options){
		if(data.errorList){
			var formId = jQuery('.modal:visible').attr('id');
			if(formId === 'paymentForm'){
				getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
			}else{
				getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
			}
			return;
		}

		var response = JSON.parse(data),
				fileName, uid;

		fileName = response.outputData.Media[0].Name;
		uid = response.outputData.Media[0].UID;
		this.updateOrganizationWithUploadFile({UID: uid, Name: fileName});
	},

	failureUploadFile : function (response, options){
		var formId = jQuery('.modal:visible').attr('id');
		if(formId === 'paymentForm'){
			getPaymentForm().showErrorMessages({errorMessage:'anfix.checkin.payment.error.fileupload', isKey:true});
		}else{
			getPaymentForm().showErrorMessages({errorMessage:'anfix.checkin.payment.error.fileupload', isKey:true});
		}
	},

	updateOrganizationWithUploadFile: function (fileData){
		var me = this;
		var objectToJsonString = {
			inputBusinessData: {
				Organization: {
					OrganizationId: this.getOrganizationId(),
					Media: {
						Action	: "ADD",
	                	UID		: fileData.UID,
	                	Name	: fileData.Name
					}
				}
			},
			applicationId: "1",
			accessCode: Utils.getCookie('accessCode')
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.ORGANIZATION_SERVICE_UPDATE,true),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					var formId = jQuery('.modal:visible').attr('id');
					if(formId === 'paymentForm'){
						getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
					}else{
						getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
					}
					return;
				}
				me.followWorkflow(Constants.WF_COMPLETED);
			},
			error: function(jqXHR, textStatus, errorThrown){
				var formId = jQuery('.modal:visible').attr('id');
				if(formId === 'paymentForm'){
					getPaymentForm().showErrorMessages({errorMessage:'anfix.checkin.payment.error.fileupload', isKey:true});
				}else{
					getPaymentForm().showErrorMessages({errorMessage:'anfix.checkin.payment.error.fileupload', isKey:true});
				}
			}
		});
	},


	createUserFromInvitation: function(values){
		var userEmail = values.EMail;
		var res = userEmail.split('@');
		var userName = values.UserName || res[0].substr(0,34);

		var me = this,
			objectToJsonString = {
			inputBusinessData: {
				User: {
					UserName:userName,
					UserSurname: ' ',
					UserMail:values.EMail,
					UserPassword:values.Password,
					RegistrationTypeId: '5'
				}
			}
		};

		var params = getDataFromUrl();
		if (params && params.invId) {
			objectToJsonString.inputBusinessData.User.InvitationId = params.invId;
		}

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.USER_SERVICE_CREATE),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					getSignupForm().showErrorMessages(data);
					return;
				}
				me.loginUser(values);
			}
		});
	},

	loginUser: function(values){
		var me = this,
		 	objectToJsonString = {
			inputBusinessData:{
				Login:{
					Action:"EXISTS",
					UserMail:values.EMail,
					UserPassword:values.Password
				}
			}
		};
		this.values = values;
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.LOGIN_SERVICE),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					getSignupForm().showErrorMessages(data);
					return;
				}else{
					var status = data.outputData.Login.UserStatus;
					Utils.setCookie("accessCode",data.outputData.Login.accessCode, null,null,'anfix.com', null, function(){
					me.followWorkflow(status);
					});
				}
			}
		});
	},

	createOrganizationWithUserData : function(){
		var userEmail = this.values.EMail;
		var res = userEmail.split('@');
		var organizationName = res[0].substr(0,34);

		var me = this,
		 	objectToJsonString = {
			inputBusinessData:{
				Organization:{
					OrganizationName:organizationName,
					OrganizationEmail:this.values.EMail,
					CreateCompanyFromOrganization:false
				}
			}
			//accessCode: Utils.getCookie('accessCode')
		};
		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			xhrFields: {
   			   withCredentials: true
			},
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.ORGANIZATION_SERVICE_CREATE),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					getSignupForm().showErrorMessages(data);
					return;
				}else{
					var status = data.outputData.Organization.WorkFlow.NextState;
					me.followWorkflow(status);
				}
			}
		});
	},

	goToCreateOrganization: function(){
		/*Utils.resetDivErrors('organizationForm');
		jQuery("#userForm").css("display", "none");
		//jQuery("#organizationForm").css("display", "block");
		if (!userRegister.dirty) {
			Utils.resetOrganizationFields();
			userRegister.dirty=true;
		}
		getUserRegister().showOrganization(false);*/
	},

	signupFromEInforma: function(){
		var me = this, values=null;
		userRegister.loadData();
		values = userRegister.getValues();
		if(validData(values)){
			//jQuery('#signupFromExternal').css('display', 'block');
			jQuery('#signupFromExternal').fadeIn('slow');
			jQuery("#maskModal").fadeIn('slow');
			//jQuery("#maskModal").css("display","block");
			me.signupOneStep(values);
		}else{
			userRegister.show(true);
		}
	},

	checkout: function(organization,formId, withPaymentData, withChangeCreditCardDate){
		var referrer = null,
			payChargeMethod=jQuery('#payChargeMethod').val(),
			me = this;

		var success = organization.success;

		if (document.referrer){
			referrer = (document.referrer.match(/:\/\/(.[^/]+)/)[1]).replace('www.','');
		}
		var campaignCode = Utils.getCookie("linkCampaign") || 'ANFIXAPP';
		var organizationId =organization.OrganizationId
		var objectToJsonString = {
			organizationId: organization.OrganizationId,
			applicationId: "a",
			accessCode: Utils.getCookie("accessCode"),
			inputBusinessData: {
				Organization:{
					CampaignCode: campaignCode,
					Referral:referrer,
					OrganizationName:organization.OrganizationName,
					OrganizationTaxIdentification:organization.organizationIdentificationNumber,
					OrganizationPhoneNumber: organization.OrganizationPhoneNumber
				}
			}
		};

		if(withPaymentData){
			var isCardType = getPaymentForm().isCardType();

			if(isCardType){
				objectToJsonString.inputBusinessData.Organization["OrganizationPayChargeMethodType"]=Constants.CARD_PAYMENT;
				objectToJsonString.inputBusinessData.Organization.PayChargeMethod= {
					PayChargeMethodType: Constants.CARD_PAYMENT,
					PayChargeMethodData:{
	           			CreditCardHolderName :organization.CreditCardHolderName,
						CreditCardExpirationMonth:organization.CreditCardExpirationMonth,
						CreditCardExpirationYear:organization.CreditCardExpirationYear,
						CreditCardNumber:Utils.getEncryptedValue.call(me, organization.CreditCardNumber)
					}
				};

			}else{
				objectToJsonString.inputBusinessData.Organization["OrganizationPayChargeMethodType"]=Constants.BANKACCOUNT_PAYMENT; ;
				objectToJsonString.inputBusinessData.Organization.PayChargeMethod={
					PayChargeMethodType: Constants.BANKACCOUNT_PAYMENT,
            		PayChargeMethodData:{
            			BankAccountEntity:organization.BankAccountEntity,
						BankAccountOffice:organization.BankAccountOffice,
						BankAccountControlDigits:Utils.getEncryptedValue.call(me,organization.BankAccountControlDigits),
						BankAccountNumber:Utils.getEncryptedValue.call(me,organization.BankAccountNumber),
						BankAccountIBAN:Utils.getEncryptedValue.call(me,organization.BankAccountIBAN)
						//BankAccountBIC:organization.BankAccountBIC,
					}
				};
			}
		}

		if (withChangeCreditCardDate) {

			objectToJsonString.inputBusinessData.Organization["OrganizationPayChargeMethodType"]=Constants.CARD_PAYMENT;
			objectToJsonString.inputBusinessData.Organization.PayChargeMethod= {
				Action: "UPDATE",
				PayChargeMethodType: Constants.CARD_PAYMENT,
				PayChargeMethodData:{
           			CreditCardHolderName :organization.CreditCardHolderName,
					CreditCardExpirationMonth:organization.CreditCardExpirationMonth,
					CreditCardExpirationYear:organization.CreditCardExpirationYear,
					CreditCardId:organization.CreditCardId
				}
			};
		}

		if(!jQuery.isEmptyObject(organization.organizationAddressPostalCode)){
			organization.AddressCity = organization.organizationAddressCityId? null:organization.organizationAddressCity;
			organization.AddressProvince = organization.organizationAddressProvinceId? null:organization.organizationAddressProvince;
			organization.AddressCountry = organization.organizationAddressCountryId? null:organization.organizationAddressCountry;

			objectToJsonString.inputBusinessData.Organization.Address = {
            	Action: organization.AddressId?"UPDATE": "ADD",
            	AddressPostalCode: organization.organizationAddressPostalCode,
            	AddressCityId: organization.organizationAddressCityId?organization.organizationAddressCityId:null,
           		AddressCity:organization.organizationAddressCityId?null:organization.organizationAddressCity?organization.organizationAddressCity:null,
           		AddressProvinceId: organization.organizationAddressProvinceId ?organization.organizationAddressProvinceId:null,
				AddressProvince: organization.organizationAddressProvinceId ?null:organization.organizationAddressProvince ?organization.organizationAddressProvince:null,
				AddressText : organization.organizationAddressText,
				AddressCountryId: organization.organizationAddressCountryId?organization.organizationAddressCountryId:null,
	           	AddressCountry : organization.organizationAddressCountry?organization.organizationAddressCountry:null,
	    		AddressId : organization.AddressId?organization.AddressId:null
        	};
		}

		if(organization.organizationDeliveryAddressText){
			objectToJsonString.inputBusinessData.Organization.OrganizationDeliveryAddress= {
				Action:"ADD",
                AddressPostalCode: values.organizationDeliveryAddressPostalCode,
                //AddressCityId: values.AddressCityId ?values.AddressCityId:null,
               	AddressProvinceId: values.organizationDeliveryAddressProvinceId,
		        AddressCity:values.organizationDeliveryAddressCity,
				//AddressProvince: values.AddressProvince ?values.AddressProvince:null,
				AddressText : values.organizationDeliveryAddressText,
                AddressCountryId: Constants.SPAIN
            };
		}

		if(organization.CommercialConfigs){
			var commercialConfigs = {
				"Action":"UPDATE",
				"ShoppingCartCommercialConfig":[]
			};

			var len = organization.CommercialConfigs.length;
			for(var i = 0; i < len; i ++){
				commercialConfigs.ShoppingCartCommercialConfig.push({
					"Action":"ADD",
					"ShCtCommConfigCampaignId": organization.CommercialConfigs[i].ShCtCommConfigCampaignId,
					"ShCtCommConfigCommercialConfigId": organization.CommercialConfigs[i].ShCtCommConfigCommercialConfigId,
					"ShCtCommConfigForceCommercialConfig": true
				});
			}

			delete objectToJsonString.inputBusinessData.Organization.CampaignCode;
			objectToJsonString.inputBusinessData.Organization.ShoppingCartUpdate = commercialConfigs;
		}

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			xhrFields: {
      				withCredentials: true
			},
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CHECKOUT),
			success: function(data){
				var isPayment= false,
					payvisionToken= null,
					payvisionMemberCode=null,
					organization=null;
				if(success){
					success.call(me, data);
					return;
				}
				if(data.errorList){
					Utils.hideLoading();
					if(formId==="invoiceAndOrderDataForm"){
						getPaymentForm().setDisabledSumbitButton(false);
						getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
					}else if(formId ==="paymentForm"){
						getPaymentForm().setDisabledSumbitButton(false);
						getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
					}
					return;
				}
				var organization =data.outputData.Organization;
				organization.OrganizationId = organizationId;

				//      _gaq.push(['_trackEvent', 'PAYMENT', 'FINISH', 'REGISTERED']);
            	if(organization.Charge && Constants.PENDING_PAYMENT_STATUS===organization.Charge.ChargeStatusId){
            		me.charge(organization, formId);
            	}else if((organization.Charge && Constants.OK_PAYMENT_STATUS===organization.Charge.ChargeStatusId) || !organization.Charge){
            				 trackEvent({
	                                	 origin: 'PAYMENT',
        	                       	 	action: "FINISH",
                	                	label: 'REGISTERED'
                        		});
					if(getUserRegister().getUserData() && getUserRegister().getUserData().phoneCode){
            					me.setVerifiedPhone({
							phone:  getUserRegister().getUserData().organizationPhoneNumber,
							phoneCode:  getUserRegister().getUserData().phoneCode,
							success: function(){},
							failure: function(){}
						});
					}
					if(getDataFromUrl() && getDataFromUrl().ac){
						loadPixel({
							pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
							success: function(){
								me.showOkCharge();
							}
						});
					}else{
						loadPixel({
							pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
							success: function(){
								me.followWorkflow(Constants.WF_COMPLETED);
							}
						});
					}
            	}
			},
			error: function(jqXHR, textStatus, errorThrown){
				Utils.hideLoading();
				if(formId==="invoiceAndOrderDataForm"){
					getPaymentForm().setDisabledSumbitButton(false);
					getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].text});
				}else if(formId ==="paymentForm"){
					getPaymentForm().setDisabledSumbitButton(false);
					getPaymentForm().showErrorMessages({errorMessage:data.errorList[0].textf});
				}
			}
		});
	},

	showErrorCharge: function(){

		jQuery("#paymentForm").hide();
		jQuery('#btn-payment').hide();
		jQuery("#jsFormPaymentError").show();
		jQuery('#btn-payment-retry').show();
		jQuery('.fullscreen-bbar-text.step-info').html("");

		jQuery('#btn-payment-retry').on('click', {scope: this},this.hideErrorCharge);

	},

	showOkCharge : function(){
		var me = this;
		Utils.hideLoading();
		jQuery("#paymentForm").hide();
		jQuery('#btn-payment').hide();
		jQuery("#jsFormPaymentOk").show();
		jQuery('#btn-payment-ok').show();
		jQuery('.fullscreen-bbar-text.step-info').html("");

		jQuery('#btn-payment-ok').on('click', {scope: this},function(){me.followWorkflow(Constants.WF_COMPLETED);});
		jQuery('.close.fullscreen-item').on('click', {scope: this},function(e){
			e.preventDefault();
			if(window.registerFromiPad){
				document.location  = Utils.getIpadReturnUrl(getUserRegister().getValues());
			} else {
		   		Utils.goHome();
			}
		});
	},

	hideErrorCharge: function(){

		jQuery("#jsFormPaymentError").hide();
		jQuery('#btn-payment-retry').hide();
		jQuery("#paymentForm").show();
		jQuery('#btn-payment').show();

		jQuery('.fullscreen-bbar-text.step-info').html(getTextByKey('anfix.login.bottom.text0'));

	},


	charge: function(organization, formId){
		var me  = this;
		var objectToJsonString = {
			organizationId: organization.OrganizationId,
			applicationId: "1",
			accessCode: cookiesObj.accessCode,
			//accessCode: Utils.getCookie("accessCode"),
			inputBusinessData: {
				ShoppingCart:{
					ShoppingCartId: organization.ShoppingCartId
			}
            	}
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			xhrFields: {
      				withCredentials: true
			},
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CHARGE_SERVICE),
			success: function(data){
				var isPayment= false,
					payvisionToken= null,
					payvisionMemberCode=null,
					organization=null;
				if(data.errorList){
					Utils.hideLoading();
					me.showErrorCharge();
					return;
				}
				var shoppingCart = data.outputData.ShoppingCart;
				if(shoppingCart && shoppingCart.ShoppingCartStatusId===Constants.PENDING_PAYMENT_STATUS
						&& shoppingCart.Charge.ChargeStatusId===Constants.FAILURE_CHARGING){

					Utils.hideLoading();
					me.showErrorCharge();

					me.cancelShoppingCart();
				}else{

					 trackEvent({
		                                 origin: 'PAYMENT',
                		                action: "FINISH",
                                		label: 'REGISTERED'
                        		});
					if(getUserRegister().getUserData() && getUserRegister().getUserData().phoneCode){

						me.setVerifiedPhone({
							phone: getUserRegister().getUserData().organizationPhoneNumber,
							phoneCode: getUserRegister().getUserData().phoneCode,
							success: function(){},
							failure: function(){}
						});
					}

					if(getDataFromUrl() && getDataFromUrl().ac){
						loadPixel({
							pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
							success: function(){
								me.showOkCharge();
							}
						});
					}else{
						loadPixel({
							pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
							success: function(){
								me.followWorkflow(Constants.WF_COMPLETED);
							}
						});
					}
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				Utils.hideLoading();
				me.showErrorCharge();
			}
		});
	},

	cancelShoppingCart: function(){
		var me = this;
		var objectToJsonString = {
		    inputBusinessData: {
		        ShoppingCart: {}
		    },
		    applicationId: "1",
		    accessCode: Utils.getCookie('accessCode')
		}


		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.LAST_PENDING),
			success: function(data){
				var isPayment= false,
					payvisionToken= null,
					payvisionMemberCode=null,
					organization
				if(data.errorList){
					return;
				}
				if(data.outputData.ShoppingCart.ShoppingCartCommercialConfig){
					me.cancelLastPay(data.outputData.ShoppingCart.ShoppingCartId);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				hidePayButton(false);
			}
		});
	},

	cancelLastPay: function(id){
		var me = this;
		var objectToJsonString ={
		    inputBusinessData: {
		        ShoppingCart: {
		            ShoppingCartId: id
		        }
		    },
		    applicationId: "1",
		    accessCode: Utils.getCookie('accessCode')
		}

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CANCEL_SHOPPING_CART),
			success: function(data){
				var isPayment= false,
					payvisionToken= null,
					payvisionMemberCode=null,
					organization
				if(data.errorList){
					return;
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				hidePayButton(false);
			}
		});
	},

	contractCampaign: function(options){
		var me = this;
		var objectToJsonString ={
			inputBusinessData: {
			    Organization: {
					ShoppingCartUpdate: {
						Action:"UPDATE",
						ShoppingCartCommercialConfig:options.data
					}
				}
			},
		    applicationId: "a"
		    //accessCode: Utils.getCookie('accessCode')
		};

		if(options.data.CampaignCode){
			objectToJsonString.inputBusinessData.Organization = {
				CampaignCode : options.data.CampaignCode,
				ContractCompanyId : options.data.CompanyId
			}
		}



		jQuery.ajax({
			type: "POST",
			dataType: 'json',
 			xhrFields: {
    				withCredentials: true
			},
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.CONTRACT_CAMPAIGN),
			success: function(data){
				options.callback(data);
			},
			error: function(jqXHR, textStatus, errorThrown){
				hidePayButton(false);
			}
		});
	},

	saveOrUpdateStepInfo: function(options){
		var me = this;
		var objectToJsonString ={applicationId: "1"};
		getInformationStepArray().Info.push(options.information);

		if(Utils.isFirstStep(options)){
			objectToJsonString.inputBusinessData = {
				WebStep: {
					WebStepStep:options.step,
					WebStepInformation:JSON.stringify(getInformationStepArray()),
					WebStepEmail:options.email
				}
			};
		}else{
			objectToJsonString.inputBusinessData = {
				WebStep: {
					WebStepId: getStepId(),
					WebStepStep:options.step,
					WebStepInformation:JSON.stringify(getInformationStepArray())
				}
			}
		}

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Utils.isFirstStep(options)? Constants.CREATE_STEP_INFO : Constants.UPDATE_STEP_INFO),
			success: function(data){
				if(data.errorList) {
					return options && options.failure
						&& options.failure(data.errorList);
				}
				if(Utils.isFirstStep(options)){
					setStepId(data.outputData.WebStep.WebStepId);
				}

				if(options && options.callback){
					options.callback(data);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR);
			}
		});
	},

	searchStepById: function(options){
		var me = this,
			objectToJsonString ={
				applicationId: "1",
				inputBusinessData: {
				WebStep: {
					Action:"SEARCH",
					WebStepUID: options.uid,
					WebStepId: options.id,
					Fields:["WebStepId", "WebStepUID", "WebStepEmail", "WebStepStep", "WebStepInformation", "WebCAUAgentId"]
				}
			}
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.SEARCH_STEP_INFO),
			success: function(data){
				if(data.errorList){
					options.error(data);
					return;
				}
				if(options && options.success){
					setStepId(data.outputData.WebStep && data.outputData.WebStep[0].WebStepId);
					data.outputData.WebStep && getInformationStepArray && getInformationStepArray().Info.push(JSON.parse(data.outputData.WebStep[0].WebStepInformation).Info[0]);
					options.success(data.outputData.WebStep && data.outputData.WebStep[0]);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR);
			}
		});
	},

	getUserData: function(options){
		var me = this;
		var objectToJsonString = {
			inputBusinessData: {
	    		User: {
	        		UserLoginId: Utils.getCookie("userLoginId")
	    		}
	    	}
		};

		jQuery.ajax({
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.GET_NAME_AND_IMAGE),
			success: function(data, textStatus, jqXHR){
				if(data.errorList){
					return;
				}

				if(data.outputData.User){
					options.success(data.outputData.User);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log("error");
			}
		});
	},

	requestLogin: function(data){

		var me = this,
			objectToJsonString = {
			inputBusinessData:{
				Login:{
					Action:"EXISTS",
					UserMail: data.email,
					UserPassword: data.password,
					UserLoginId: Utils.getCookie('userLoginId')
				}
			}
		};

		if(Utils.getCookie('userLoginId')){
			delete objectToJsonString.inputBusinessData.Login.UserMail;
		}

		jQuery.ajax({
			type: "POST",
			dataType:'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			url: Utils.getUrl(Constants.LOGIN_SERVICE),
			success: data.success,
			error: function(jqXHR, textStatus, errorThrown){
				onFailureRequestLogin();
			}
		});
	},

  composeUrlToGo: function(companyId, section) {
    return Constants.URL_PROFIT + encodeURIComponent(companyId) + (section ? "/" + section : "/home");
  },

  composeExpensesUrlToGo: function(companyId) {
    return Constants.URL_EXPENSES + encodeURIComponent(companyId) + Constants.PATH_EXPENSES_HOME;
  },

  userHasApplication: function(result, applicationId) {
    var companyIndex = 0;
    var hasProfit = false;
    while (companyIndex < result.Company.length) {
      if (result.Company[companyIndex].ApplicationId == applicationId) {
        hasProfit = true;
        break;
      }
      companyIndex ++;
    };
    return hasProfit;
  },

  userHasCompanies: function(result) {
    // result.Company = [];
    var companyIndex = 0;
    // while (companyIndex < result.Company.length) {
    //   if (result.Company[companyIndex].ApplicationId == 'E') {
    //     result.Company[companyIndex].ApplicationId = 'Z';
	 //        }
    //   companyIndex ++;
    // };
    if ((!result.Company || result.Company.length == 0) || !this.userHasApplication(result, 'E')) {
      const userInvitaton = result.UserInvitation;
      var invitationIndex = 0;
      var invitationsIds = []
      while (invitationIndex < userInvitaton.length) {
        if (userInvitaton[invitationIndex].UserInvitationStatusId == '1') {
          var companyId = userInvitaton[invitationIndex].CompanyId;
          invitationsIds.push(userInvitaton[invitationIndex].UserInvitationId);
        }
        invitationIndex ++;
      };

      if (invitationsIds.length > 0) {
        var me = this;
        return jQuery.ajax({
	        type: "POST",
	        dataType:'json',
	        data: JSON.stringify({
            "inputBusinessData": {
              "UserInvitation": {
                "UserInvitationIds": invitationsIds
	        	}
            },
            "applicationId": "1",
	    	}),
	        xhrFields: {
	          withCredentials: true
	        },
	        contentType: 'application/json',
          url: Utils.getUrl(Constants.INVITATIONS_ACCEPT), // "http://kokeapps.anfix.com:8080/os/os/parc/user/invitation/accept",
	        success: function(data, textStatus, jqXHR){
            location.href = me.composeUrlToGo(companyId);
            return true;
	  }
        });
	return true;
      } else {
        // no tiene invitaciones y no tiene profit, intentamos al menos ir a conta/informes
        if (!result.Company || result.Company.length === 0) return true; // no tiene ni siquiera empresas
        var companyIndex = 0;
        var companyId;
        var urlToGo;
        while (companyIndex < result.Company.length) {
          if (result.Company[companyIndex].ApplicationId == '12') {
            companyId = result.Company[companyIndex].CompanyId;
            urlToGo = this.composeUrlToGo(companyId, 'reports/published');
            break;
          }
          companyIndex ++;
        };
        if (!urlToGo) {
	        var companyIndex = 0;
          while (companyIndex < result.Company.length) {
            if (result.Company[companyIndex].ApplicationId == '3') {
              companyId = result.Company[companyIndex].CompanyId;
              urlToGo = Utils.getUrl(Constants.APP_CONTA) + '&companyId=' + companyId; //http://kokeapps.anfix.com:8080/os/apps.html?appId=3&companyId=' + companyId;
              break;
            }
            companyIndex ++;
          };
        }

        if (urlToGo) {
	         location.href = urlToGo;
           return true;
	      }
        return true;
      }

    } else {
      var hasProfit = false;
      var companyIndex = 0;
      while (companyIndex < result.Company.length) {
        if (result.Company[companyIndex].ApplicationId == 'E') {
          hasProfit = true;
          break;
        }
        companyIndex ++;
      };
      if (!hasProfit) {
        // si tiene informes, ir a informes
        // si tiene conta, ir a conta

        var companyIndex = 0;
        var companyId;
        var urlToGo;
        while (companyIndex < result.Company.length) {
          if (result.Company[companyIndex].ApplicationId == '12') {
            companyId = result.Company[companyIndex].CompanyId;
            urlToGo = this.composeUrlToGo(companyId, 'reports/published');
            break;
          }
          companyIndex ++;
        };
        if (!urlToGo) {
	        var companyIndex = 0;
          while (companyIndex < result.Company.length) {
            if (result.Company[companyIndex].ApplicationId == '3') {
              companyId = result.Company[companyIndex].CompanyId;
              urlToGo = Utils.getUrl(Constants.APP_CONTA) + '&companyId=' + companyId;
              break;
            }
            companyIndex ++;
          };
        }

        if (urlToGo) {
	         location.href = urlToGo;
           return true;
	      }
      }
      return false;

    }
  },

  companyHasApplication:  function(result, applicationId, companyToUse) {
    var hasApplication = false;
    var companyIndex = 0;
    while (companyIndex < result.Company.length) {
      if (result.Company[companyIndex].ApplicationId == applicationId && result.Company[companyIndex].CompanyId == companyToUse) {
        hasApplication = true;
        break;
      }
      companyIndex ++;
    };

    return hasApplication;
  },

	lastProfitCompanyUsedExists: function(currentSettings, companies) {
	   var index = 0;
	   var companyExists = false;
	   var companyId = currentSettings.ProfitCompanyId;
	   if (!currentSettings || !currentSettings.ProfitCompanyId) return companyExists;
	   while (index < companies.length) {
	     if (companies && companies[index] && companies[index].CompanyId === companyId) {
	       companyExists = true;
	       break;
	     }
	     index++;
	   }
	   return companyExists;
 	},

	requestBoot: function(successBoot){
		jQuery.ajax({
	        type: "POST",
	        dataType:'json',
	        data: JSON.stringify({
	        	applicationId: "1",
	          	inputBusinessData: {
	            	Boot: {}
	        	}
	    	}),
	        xhrFields: {
	          withCredentials: true
        },
	        contentType: 'application/json',
	        url: Utils.getUrl(Constants.BOOT_DATA),
	        success: successBoot,
        error: function(jqXHR, textStatus, errorThrown){
        }
      });
	},


	redirectToProfit: function(boot){
		var me = this;
		var isNeedBoot = jQuery.isEmptyObject(boot);

		function successBoot(data){
	          var result = data.outputData.Boot;
            var needInvitationsToAccept = me.userHasCompanies(result);


            if (!needInvitationsToAccept) {
              // tiene empresas
              if (result.Company.length > 0) {
	          var redirectURL;
	          var settings = result.UserSetting;
	          var index = 0;
	          while (index < settings.length - 1) {
	            if (settings[index].SettingKey == 'settings') break;
	            index ++;
	          };

	          if (settings[index].SettingKey == 'settings') {
	            var sourceData = (settings[index].SettingValue);
	            var currentSettings;
		    try {
	            if (sourceData.match(/\"\[/g) !== null && sourceData.match(/\"{/g) !== null) {
	              currentSettings = JSON.parse(sourceData.split('"[').join('[').split(']"').join(']').split('"{').join('{').split('}"').join('}'));
	            } else if (sourceData.match(/\"\[/g) !== null ) {
	              currentSettings = JSON.parse(sourceData.split('"[').join('[').split(']"').join(']'));
	            } else if (sourceData.match(/\"{/g) !== null) {
	              currentSettings = JSON.parse(sourceData.split('"{').join('{').split('}"').join('}'));
	            } else {
	              currentSettings = JSON.parse(sourceData);
	            }
		    } catch(e) {
			currentSettings = {};
		    }
	          }

                var companyToUse;

                if (currentSettings && currentSettings.ProfitCompanyId
                	&& me.lastProfitCompanyUsedExists(currentSettings, result.Company)) {
                  //redirectURL = composeUrlToGo(currentSettings.ProfitCompanyId); // "http://node.anfix.com:8000/profit/" + currentSettings.ProfitCompanyId + "/home";
                  companyToUse = currentSettings.ProfitCompanyId;
                } else {
                  companyToUse = result.Company[0].CompanyId;
                  // redirectURL = composeUrlToGo(result.Company[0].CompanyId); // "http://node.anfix.com:8000/profit/" + result.Company[0].CompanyId + "/home";
                }
                var hasProfit = me.companyHasApplication(result, 'E', companyToUse);
                var hasConta = me.companyHasApplication(result, '3', companyToUse);
                var hasReports = me.companyHasApplication(result, '12', companyToUse);

                if (hasProfit) {
                  redirectURL = me.composeUrlToGo(companyToUse);
                } else if (hasConta && !hasReports) {
                  redirectURL = Utils.getUrl(Constants.APP_CONTA) + '&companyId=' + companyToUse;
                } else if (!hasConta && hasReports) {
                  redirectURL = me.composeUrlToGo(companyToUse, 'reports/published');
	          } else {
                  redirectURL = me.composeUrlToGo(companyToUse, 'settings/professional/generals/general/' + companyToUse);
	          }

	          location.href = redirectURL;
              }

            } else if (needInvitationsToAccept === true) {
              // no tiene empresas pero tampoco tiene invitaciones pendientes
              // que hacemos aquí?
            }
		}

		if(!isNeedBoot){
			successBoot({outputData:{Boot:boot}});
		}else{
			this.requestBoot(successBoot);
    }
	},


	redirectToExpenses: function(boot){
		var me = this;
		var isNeedBoot = jQuery.isEmptyObject(boot);

		function successBoot(data){
      var result = data.outputData.Boot;
      if (result.Company.length > 0) {
        var companyToUse = result.Company[0].CompanyId;
        var redirectURL = me.composeExpensesUrlToGo(companyToUse);
        location.href = redirectURL;
      }
		}

		if(!isNeedBoot){
			successBoot({outputData:{Boot:boot}});
		}else{
			this.requestBoot(successBoot);
    }
	},

	sendEmailOfLeads: function(phone, callback){
		if(!jQuery.isEmptyObject(phone)){
	        jQuery.ajax({
	          type: "POST",
	          dataType: 'json',
	          data: JSON.stringify({phoneNumber: phone}),
	          contentType: 'application/json',
	          url: Constants.SEND_EMAIL_LEAD,
	          success: function(data){
	            var resultOk = data.result ===1;
	            if(!resultOk){
	              var error = data.statusDesc;
	              return;
	            } else {
	            	callback && callback();
	            }
	          },
	          error: function(jqXHR, textStatus, errorThrown){
	              console.error(jqXHR.responseText);
	          }
	        });
	    }
	}

}
/**
 * Documento Confidencial.
 * 
 * @file userRegister.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date January, 2013
 * @brief js for div called userForm
 */


/*GLOBAL VARIABLES*/
var userRegister=null;
var campaignWithGift= false;


/**GLOBAL FUNCTIONS*/
function openUsersRegister(options) {
	function show(){
		getUserRegister().show({reset:true});
		jQuery('#userForm #name').focus();
		pixelesCounter=0;

		if (options && options.email) {
			jQuery(getUserRegister().id+ ' #email').val(options.email);
			jQuery(getUserRegister().id+ ' #email').trigger('blur');
		}
	}
    
    getConfiguration().setUp(show);
};

function onKeyPressSignup(e) {
	if (isEnterKeyPressed(e)) {
		getUserRegister().submit();
	} 
};

function hasGift() {
	return campaignWithGift;
};

function getUserRegister() {
	if(jQuery.isEmptyObject(userRegister)){
		userRegister= new UserRegister();
	}
	return userRegister;
};


/**CLASS*/
var UserRegister = function(){
	this.userSignUp = new UserSignup();
	this.proxy = new Proxy();
};
UserRegister.prototype = {
	id: '#userForm',

	defaultHeight : 547,

	flagWithPresentAndConverted: false,

	/*isUserResgistered:function(){
		return jQuery("#returnBtn").css("display")==="none";
	},*/
	setUserData: function(values){
		this.userData = values;
	},

	getUserData: function(){
		return this.userData;
	},

	divErrorsIsVisible: function(){
		return jQuery(this.id+' .div-errors').is(':visible');
	},

	setUp: function(){
		this.addListenersTo();
		this.buildCombos();
	},

	buildCombos: function(){
		jQuery("select#companytype").selectify({width:177, maxItems:6});
		
		for(var i=0, province=null, len = Constants.PROVINCES.length; i<len; i++ ){
			 province = Constants.PROVINCES[i];
			jQuery('select#organizationDeliveryAddressProvince').append(
				jQuery('<option></option>')
				    .val(province['ProvinceId'])
				    .html(province['ProvinceName']));
		}
		jQuery("select#organizationDeliveryAddressProvince").selectify({width:197, maxItems:4});
	},

	setHeight: function(height){
		var me = this;
		/*if(height>me.defaultHeight){
			jQuery(me.id).css("height",height);
		}*/
		//jQuery(me.id+ ' .left').css("height", height);
		jQuery(me.id+ ' .left').animate({height:height+'px'}, 150);
	},

	setDisabledSumbitButton: function(disabled){
		jQuery(this.id+' .div-signup-button .btn-green').attr('disabled', disabled);
		jQuery(this.id+' .div-signup-button .btn-green')[disabled?'addClass':'removeClass']('btn-disabled');
	},

	showErrorMessages: function(obj){
		var id = '.form-1';
		if(!Utils.getCookie('userLoginId')){
			id= '.form-2';
		}
		jQuery(this.id +' '+id+' p').eq(1).html(obj.errorMessage);
		jQuery(this.id +' '+id+' p').eq(1).addClass('error-text');
	},

	hideErrorMessages: function(){
		var id = '.form-1';
		if(!Utils.getCookie('userLoginId')){
			id= '.form-2';
		}
		jQuery(this.id +' '+id+' p').eq(1).html(getTextByKey('info.text'));
		jQuery(this.id +' '+id+' p').eq(1).removeClass('error-text');
	},

	getValues: function(){
		var values={};
		values.email = jQuery.trim(jQuery(this.id+' #pay-email').val());
		if(Utils.getCookie('userLoginId')){
			values.password = jQuery.trim(jQuery(this.id+' .form-1 #pay-password2').val());
		}else{
			values.password = jQuery.trim(jQuery(this.id+' .form-2 #pay-password').val());
		}
		

		return values;
	},

	isVisibleDivGift: function(){
		return jQuery('#gift').is(':checked');
	},

	convertToUserFromInvitation: function(){
		jQuery(this.id + ' #div-organizationPhoneNumber').hide();
		jQuery(this.id + ' #div-email').css('width', 533);
		jQuery(this.id + ' #div-email input').css('width', 517);
		jQuery(this.id+ ' #email').val(this.params.email);
		jQuery(this.id+ ' #email').trigger('blur');
		jQuery(this.id + ' #div-companyname').hide();
		jQuery('#organizationMediaFile').hide();
		jQuery(this.id + ' #div-companytype').hide();
		jQuery(this.id + ' #checkbox-gift').hide();
		setTimeout(this.setHeight(432), 1000);
	},


	show: function(options){
		var me = this;
		jQuery('body').css('overflow', 'hidden');
		jQuery("#maskModal").css("display","block");
		jQuery(this.id).fadeIn('slow');
//		if(!Utils.getBrowser().isIE && !Utils.getBrowser().isFF){
//			jQuery(this.id).flip({trigger:'manual'});
//		}
		if(Utils.getCookie('userLoginId')){
			if(Utils.getBrowser().isIE || Utils.getBrowser().isFF){
				jQuery(this.id+' .form-2').hide();
				jQuery(this.id+' .form-1').show(function(){
					jQuery(me.id+' input').first().focus();
				});
			}
			me.userSignUp.getUserData({
				success:function(data){
					jQuery(me.id+' .form-1 p').first().html(data.UserName+getTextByKey('anfix.uid.title'));	
					var aux = '../login/img/avatar.gif';
					if(data.UserPhotoUID){
						aux  = Constants.PROTOCOL + '//' + Constants.DOMAIN + '/' + 'os/media/downloadpublic?uid=' + data.UserPhotoUID + "&namespace=true&show=1";
					}
					jQuery(me.id+ ' img').css('background-image', 'url('+aux+')');
					jQuery(me.id+' .form-1 .region p').html(getTextByKey('anfix.uid.subtitle')+ data.UserName+ ' '+data.UserSurname+getTextByKey('anfix.uid.subtitle2'));
				}
			});
		}else{
//			if(Utils.getBrowser().isIE || Utils.getBrowser().isFF){
				jQuery(this.id+' .form-2').show(function(){
					jQuery(me.id+' input').first().focus();
				});
				jQuery(this.id+' .form-1').hide();
//			}else{
//				jQuery(this.id).flip(true);
//			}
		}
    	this.reset();
   		    	
		trackEvent({
	          origin: 'TRIAL',
	          action: "START",
	          label: null
	     });
		//dataLayer.push({event:"test"});
	//	getPricingForm().getCampaignBySelectedChecks();

	},

	hide: function(){
		jQuery("#maskModal").css("display","none");
       	jQuery(this.id).fadeOut('slow');
       	jQuery('body').css('overflow', 'auto');
	},

	setVisibleFields: function(visible){
		jQuery(this.id + ' #div-name')[visible? 'show':'hide']();
		jQuery(this.id + ' #div-email')[visible? 'show':'hide']();
		jQuery(this.id + ' #div-surname')[visible? 'show':'hide']();
		jQuery(this.id + ' #div-companyname')[visible? 'show':'hide']();
		jQuery(this.id + ' #div-companytype')[visible? 'show':'hide']();
		jQuery(this.id + ' #div-password1')[visible? 'show':'hide']();
		jQuery(this.id + ' #div-password2')[visible? 'show':'hide']();
		jQuery(this.id + ' #checkbox-conditions')[visible? 'show':'hide']();
		jQuery(this.id+ ' #organizationMediaFile')[visible? 'show':'hide']();
	},

	reset: function(){
		var me = this;
		jQuery(this.id+" input").each(function(index){
			jQuery(this).val(null);
		});
		me.hideErrorMessages();
		me.setDisabledSumbitButton(false);
		me.setUserData(null);
	},

	showAddressDelivery: function(obj){
		//jQuery(this.id).css(obj.isVisible?671:547);
		var fieldsToShowOrHide = ['div-organizationDeliveryAddressText', 'div-organizationDeliveryAddressPostalCode', 
			'div-organizationDeliveryAddressCity', 'div-organizationDeliveryAddressProvince'];
		for (var i=0, len = fieldsToShowOrHide.length; i <len; i++) {
			jQuery('#'+fieldsToShowOrHide[i])[obj && obj.isVisible? 'show': 'hide'](190);
		}
		
	},

	submit: function(eventObject){
		var me = getUserRegister();
		var values = me.getValues();
		if(me.validate(values)){
			
			me.hideErrorMessages();
			me.setDisabledSumbitButton(true);
			me.setUserData(values);

			
			function success(data){
				
				if(data.errorList){
					if(data.errorList[0].code=='ERR000040000'){
						data.errorList[0].text= getTextByKey('anfix.error.permission');
					}
					me.showErrorMessages({errorMessage:data.errorList[0].text});
					return;
				}
				Utils.setCookieNoSecure("accessCode",data.outputData.Login.accessCode, null, null, 'anfix.com');
			
				location.href= Constants.URL_PROFIT+'gateway/updateSubscription';
				return;
	
				var cc = Utils.getCookie("linkCampaign");
				if (!cc){
					me.hide();
					loadSelectProductsForm();
				}else if(!cc && window.products){
					loadSelectProductsForm();
					me.hide();
				}else {
					//loadSalesForm({campaign:cc, newUser:false});
					searchDiscountCampaigns({
						newUser:false, 
						campaign:cc, 
						success:function(data){
							me.hide();
							window.selectedCampaign = data.outputData.Campaign;
							if(campaingType !="BASIC"){
								onClickDiscountCommercialConfig([{
									ShCtCommConfigCampaignId:data.outputData.Campaign[0].CampaignId,
									ShCtCommConfigCommercialConfigId:data.outputData.Campaign[0].CommercialConfigId
								}]);
							}else{
								Utils.showLoading();
								me.userSignUp.checkout({},'', false, false);
							}
						}
					});
				}
			};
			values.success=success;
			me.userSignUp.requestLogin(values);
		}
	},
	
	validate: function(values){
		if(!Utils.getCookie('userLoginId')){
			if(!values.email) {
				Utils.markInvalidField(this.id,"pay-email", false,getTextByKey('anfix.login.typeEmail'));
				return;
	        }else if(!Utils.validateEmail(values.email)){
	        	Utils.markInvalidField(this.id,"pay-email", false,getTextByKey('anfix.login.typeEmail.valid'));
	        	return;
	        }else{
	        	Utils.markValidField(this.id,"pay-email");
			}
		}

		var id = 'pay-password';
		if(Utils.getCookie('userLoginId')){
			id = 'pay-password2' 
		}
		
		if(!values.password) {
			Utils.markInvalidField(this.id,id, false,getTextByKey('anfix.login.typePassword'));
			return;
		} else {
			if(values.password.length < 4) {
				Utils.markInvalidField(this.id,id, false,getTextByKey('anfix.login.typePassword.maxLenght'));
				return;
			}else{
				Utils.markValidField(this.id,id);
			}
		} 
	
		return true;
	},

	addListenersTo: function(){
		var me = this;
		

		function blurInput(){
			me.validateField(this);
		}

		jQuery(this.id+' input').each(function(index){
			jQuery(this).on('blur',{fieldName: this.name}, blurInput);
		});

		jQuery('.closeWindow').click(function(){
			me.hide();
		});

		jQuery(me.id+ ' .btn-register').click(function(){
			me.hide();
			Utils.hideTooltip();
			if(!Utils.isMobile()){
				openRegisterEmailForm();
				//getSignupForm().show({reset:true});
			}else{
				Utils.redirectToMobileRegistration('?campaign='+Utils.getCookie('linkCampaign')+'&campaignType='+campaingType);
			}
		});

		jQuery(me.id+' .form-1 p').last().click(function(){
			Utils.clearCookie('userLoginId');
			if(Utils.getBrowser().isIE || Utils.getBrowser().isFF){
				jQuery(me.id+' .form-1').hide();
				jQuery(me.id+' .form-2').show();
			}else{
				jQuery(me.id).flip(true);
			}

		});
		
		jQuery(me.id+' .btn-submit').click(me.submit);

	},

	validateField: function(input){
		var me = this;
		input.value = jQuery.trim(input.value);
		var isEmpty= jQuery.isEmptyObject(input.value);
		
		if(isEmpty){
			return;
		}

		if(input.name==='pay-email'){
			if(!Utils.validateEmail(input.value)){
				Utils.markInvalidField(this.id,"pay-email", false,getTextByKey('anfix.login.typeEmail.valid'));
        		return;
			}else{
				Utils.markValidField(this.id,"pay-email");	
			}
		}
		
		if(input.name =='pay-password' && input.value.length <4){
			Utils.markInvalidField(this.id,"pay-password", false,getTextByKey('anfix.login.typePassword.maxLenght'));
			return;
		}else{
			Utils.markValidField(this.id,"pay-password");
		}

	}
	
};

/**
 * Documento Confidencial.
 * 
 * @file invoiceAndOrderData.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date January, 2013
 * @brief js to display invoice and order data.
 */


/*GLOBAL VARIABLES*/
var paymentForm=null;
var comboCountry = [];
var comboProvince= [];


/**GLOBAL FUNCTIONS*/
function getPaymentForm(){
	if(jQuery.isEmptyObject(paymentForm)){
		paymentForm = new PaymentForm();
	}
	return paymentForm;
};


/**CLASS*/
var PaymentForm = function(){
	this.userSignUp = new UserSignup();
	this.proxy = new Proxy();
};



PaymentForm.prototype = {
	id: '#paymentForm',

	defaultHeight : 609,

	organizationData: null,

	loadData: function(obj){
		this.result = obj;  
	},

	setOrganizationData: function(data){
		this.organizationData = data;
		if(this.result){
			this.organizationData.CommercialConfigs = this.result.dataToSend;
		}
	},

	getOrganizationData: function(){
		return this.organizationData;
	},

	setUp: function(){
		//this.buildCombos();
		this.addListenersTo();
	},

	buildCombos: function(){
		this.loadProvinceCombo();
		this.loadCountryCombo();
		jQuery(this.id+" select#organizationAddressProvinceId").selectify({width:190, maxItems:6});
		jQuery(this.id+" select#organizationAddressCityId").selectify({width:265, maxItems:6});
		jQuery(this.id+" select#organizationAddressCountry").selectify({width:265, maxItems:6});

		// For PaymentSenlection
		jQuery(this.id+" select#CreditCardExpirationMonth").selectify({width:203, maxItems:6});
		var comboYear = jQuery('#CreditCardExpirationYear'),
			currentYear = (new Date()).getFullYear(),
			limit= currentYear+30;
		
		for(var year =currentYear; year<limit; year++){
			comboYear.append(jQuery('<option></option>').val(year).html(year));
		}
		
		jQuery(this.id+" select#CreditCardExpirationYear").selectify({width:136, maxItems:6});
		// End for PaymentSelection
		
	},


	getValues: function(){
		var values = {};
		jQuery(this.id+ " input").each(function(index){
			values[this.name]=jQuery.trim(jQuery(this).val());
		});
		jQuery(this.id+ " select").each(function(index){
			values[this.name] = jQuery(this).val();
		});

		// For PaymentSelection
		if(this.isCardType()){
			jQuery('#containerCreditCard input[type="text"]').each(function(index){
	        	values[this.name]=jQuery.trim(jQuery(this).val());
	        });
	        jQuery('#containerCreditCard select').each(function(index){
	        	values[this.name]=parseInt(jQuery(this).val());
	        });
		}else{
			jQuery('.bankAccountPayment input[type="text"]').each(function(index){
				if(this.name === 'BankAccountIBAN'){
					values[this.name]=jQuery.trim(jQuery(this).val().split(' ').join(''));
				}else if(this.name === 'BankAccountBIC' && jQuery.trim(jQuery(this).val()) ===""){
					values[this.name]=null;
				}else{
	        		values[this.name]=jQuery.trim(jQuery(this).val());
	        	}
	        });
		}
		// End for PaymentSelection

		return values;
	},

	// For PaymentSelection
	isCardType: function(){
		var isCardType=jQuery('#CardType').is(':checked');
		/*
		if(jQuery.browser.msie && parseFloat(jQuery.browser.version)<9){
			isCardType = jQuery('#div-CardType label').hasClass('ie8-radiochecked');
		}
		*/
		return isCardType;
	}, 
	// End for PaymentSelection


	show: function(options){
		$(document.body).attr('style','overflow: hidden;');
		this.buildCombos();
		jQuery('.fullscreen').slideDown('slow', function(){
			setTimeout(Utils.openFullSCreen, 1000);
		});
        jQuery(this.id).show();
		if(options && options.reset){
        		this.reset();
       		}	

 		this.loadUserData();
 		if(!Utils.isMobile()){
 			jQuery(this.id+ ' #organizationName').focus();
 		}
 		$('#bottomInfo').css("display","none");

		jQuery('.textPromo')[getDataFromUrl() && (getDataFromUrl().promo || getDataFromUrl().ac )? 'show':'hide']();		

      	jQuery('#btn-payment').show();
      	jQuery('.fullscreen-bbar-text.step-info').html(getTextByKey('anfix.login.bottom.text0'));
      	jQuery('.top .title').html(getTextByKey('title.buyAt.anfix'));

      	if(!getDataFromUrl() ||  (getDataFromUrl() && !getDataFromUrl().ac)){
      		this.setInfoText(); 		
      	}else{
      		jQuery('.boxPromo').css('top', '590px');
      	}
      
      	jQuery('.fullscreen > div, .fullscreen .content').first().css('min-height', "950px");

      	Utils.showOld(true);
      
	},

	setInfoText: function(){
		jQuery('.boxInfo div').remove();

		var htmlToAppend = '',
			frequencyType = this.result.frequencyType, 
			isYear = frequencyType =='Anual',
			numTotalText = isYear? 5:4;

		for (var i = 1, msg ='', div = null; i < numTotalText; i++) {
			msg = getTextByKey(isYear? 'info.ticket.year.text.'+i: 'info.ticket.month.text.'+i);
			div = '<div class="checkBoxInfo" data-icon="&#57463;"></div><div class="textCheckBoxInfo">'+msg+'</div>';
			htmlToAppend+=div;
		};

		jQuery('.boxInfo').append(htmlToAppend);
		jQuery('.boxPromo').css('top', isYear? '670px': '590px');

	},

	
	loadCountryCombo:function(){
		var me = this;
		if(comboCountry && comboCountry.length===0){
			this.proxy.loadCountryCombo({
				success:function(data){
					if(data.outputData && data.outputData.Country){
						comboCountry=data.outputData.Country;
						jQuery.each(data.outputData.Country, function(i,obj){
				            jQuery(me.id+' #organizationAddressCountry').append(
				                 jQuery('<option></option>')
				                        .val(obj['CountryId'])
				                        .html(obj['CountryName']));
				        });
						jQuery(me.id+ ' select#organizationAddressCountry').selectify('load', Constants.SPAIN,{width:275});
					}
				}
			});
		}
	},

	loadProvinceCombo: function(data){
		if(!data){
			for(var i=0, province=null, len = Constants.PROVINCES.length; i<len; i++ ){
				province = Constants.PROVINCES[i];
				jQuery('select#organizationAddressProvinceId').append(
					jQuery('<option></option>')
					    .val(province['ProvinceId'])
					    .html(province['ProvinceName']));
			}
			//jQuery("select#organizationAddressProvinceId").selectify('load', '');
		}
	},

	hide: function(){
		jQuery("#maskModal").css("display","none");
        jQuery(this.id).hide();
	},

	loadDescriptionAndPrices: function(){

		var properties = this.result || {};

		var applyVat=true,
		    provinceId = jQuery(this.id+ ' #organizationAddressProvinceId').val(),
		    countryId=jQuery(this.id+' #organizationAddressCountry').val();	
		
		if(countryId===Constants.DEFAULT_COUNTRY_ID){
			if(jQuery.inArray(provinceId, Constants.PROVINCES_WITHOUT_VAT)!=-1){
				applyVat=false;
			}
		}else{
			applyVat=false;
		}

		var base =parseFloat(properties.base),
		  vat= applyVat?Constants.VAT:0,
		  vatTotalValue = ((base * vat)/100); 
		  totalVatValue = (base + vatTotalValue); 

		jQuery('.totals #taxBase').html(Utils.formatNumber(base)+' &euro;');
		jQuery('.totals #taxType span').html(Utils.formatNumber(vat));
		jQuery('.totals #taxValue').html(Utils.formatNumber(vatTotalValue)+'  &euro;');
		jQuery('.totals #totalValue').html(Utils.formatNumber(totalVatValue)+' &euro;');

		if (totalVatValue>=1000) {
			$("#total").width(180);
			$("#totalValue").width(81);
		}
		
		jQuery(this.id+' .orderData .list-products div').remove();	
		if(!jQuery.isEmptyObject(properties.content)){
			for (var i = 0, len = properties.content.length, item=null; i <len; i++) {
				item = properties.content[i];
				if(!item.isDiscount){
					jQuery(this.id+' .orderData .list-products').append('<div class="product-name">'+item.name+'</div><div class="product-price">'+Utils.formatNumber(item.price)+' &euro;</div>');
				}else{
					jQuery(this.id+' .orderData .list-products').append('<div class="product-name to-margin-top-price">'+item.name+'</div><div class="product-price to-margin-top-price">'+Utils.formatNumber(item.price)+' &euro;</div>');
				}
			}
		}else{
			jQuery(this.id+' .orderData .list-products').append('<div class="product-name">'+properties.name+'</div><div class="product-price">'+Utils.formatNumber(properties.price)+' &euro;</div>');
		}					
	},

	loadUserData: function(){
		var me = this;
		if(!Utils.isRegisteredUser()){
			jQuery('#paymentForm input[required]').prop('required', false);
			var userData= getUserRegister().getUserData();
			var dataToLoad= {};
			if(!jQuery.isEmptyObject(userData)){
				dataToLoad.organizationName = !jQuery.isEmptyObject(userData.companyname) ? userData.companyname : (userData.name+" "+userData.surname);
				if(userData.organizationDeliveryAddressText){
					dataToLoad.organizationAddressText = userData.organizationDeliveryAddressText;
					dataToLoad.organizationAddressPostalCode = userData.organizationDeliveryAddressPostalCode
				}
				jQuery(me.id+' #organizationName').val(dataToLoad.organizationName);
				jQuery(me.id+' #organizationName').trigger('blur');
				jQuery(me.id+' #organizationAddressText').val(dataToLoad.organizationAddressText);
				jQuery(me.id+' #organizationAddressText').trigger('blur');
				jQuery(me.id+' #organizationAddressPostalCode').val(dataToLoad.organizationAddressPostalCode);
				jQuery(me.id+' #organizationAddressPostalCode').trigger('change');
				setTimeout(this.searchAddressByPostalCode, 500);
			}
			jQuery('#BankAccountType').click();	
		}else{
			me.proxy.getOrganizationData({
				failure: function(errorList){
					me.showErrorMessages({errorMessage :errorList[0], isKey:false});
				},
				success: function(organizationData){
					jQuery('#paymentForm input[required]').prop('required', false);
					me.setOrganizationData(organizationData);
					jQuery(me.id+' #AddressId').val(organizationData.AddressId);
					jQuery(me.id+' #organizationName').val(organizationData.OrganizationName);
					jQuery(me.id+' #organizationName').trigger('blur');
					jQuery(me.id+' #organizationIdentificationNumber').val(organizationData.OrganizationTaxIdentification);
					jQuery(me.id+' #organizationIdentificationNumber').trigger('blur');
					jQuery(me.id+' #organizationAddressText').val(organizationData.AddressText);
					jQuery(me.id+' #organizationAddressText').trigger('blur');
					jQuery(me.id+' #organizationAddressCountryId').selectify('update', organizationData.AddressCountryId);
					jQuery(me.id+' #organizationAddressPostalCode').val(organizationData.AddressPostalCode);
					jQuery(me.id+' #organizationAddressPostalCode').trigger('change');
					setTimeout(function(){
						if(organizationData.AddressCity){
							jQuery(me.id+' #organizationAddressCity').val(organizationData.AddressCity);
							jQuery(me.id+' #organizationAddressCity').trigger('blur');
						}
						if(organizationData.AddressProvince){
							jQuery(me.id+' #organizationAddressProvince').val(organizationData.AddressProvince);
							jQuery(me.id+' #organizationAddressProvince').trigger('blur');
						}
					}, 700);

					if (organizationData.OrganizationPayChargeMethodType === Constants.CARD_PAYMENT) {
						jQuery(me.id+' #CreditCardHolderName').val(organizationData.CreditCardHolderName);
						jQuery(me.id+' #CreditCardHolderName').trigger('blur');
						jQuery(me.id+' #CreditCardNumber').val(organizationData.CreditCardName);
						jQuery(me.id+' #CreditCardNumber').trigger('blur');
						if(organizationData.CreditCardExpirationMonth){
							jQuery(me.id+' #CreditCardExpirationMonth').selectify('update', organizationData.CreditCardExpirationMonth.toString());
						}
						if(organizationData.CreditCardExpirationYear){
							jQuery(me.id+' #CreditCardExpirationYear').selectify('update', organizationData.CreditCardExpirationYear.toString());
						}
						jQuery('#CardType').click();
					} else {
						var bankAccount = organizationData.BankAccountName;
						if(bankAccount){
							jQuery(me.id+' #BankAccountEntity').val(bankAccount.substring(0,4));
							jQuery(me.id+' #BankAccountOffice').val(bankAccount.substring(4,8));
							jQuery(me.id+' #BankAccountControlDigits').val(bankAccount.substring(8,10));
							jQuery(me.id+' #BankAccountNumber').val(bankAccount.substring(10,20));
						}

						jQuery('#BankAccountType').click();	
					}
									
					
				}
			});
		}
		
	},


	reset: function(){
		var me = this;
		
		Utils.hideLoading();
		jQuery(me.id+' select#organizationAddressProvinceId').selectify('update', '');
		me.hideErrorMessages();
		me.setDisabledSumbitButton(false);

		// For PaymentSelection
		jQuery(this.id+" input").each(function(index){
			if(this.type!='radio'){
				jQuery(this).val(null);
				Utils.resetMarkField(me.id, this.name);
			}
		});

		if(!jQuery('#CardType').is(':checked')){
            jQuery('#CardType').attr('checked', true);
	}
        //jQuery('#BankAccountType').click();
       
        jQuery(me.id+' select#CreditCardExpirationMonth').selectify('reset', true);
        jQuery(me.id+' select#CreditCardExpirationYear').selectify('reset', true);
		this.hideErrorMessages();
		this.setDisabledSumbitButton(false);
		// End for PaymentSelection
		if(getDataFromUrl() && getDataFromUrl().ac){
			jQuery('.AnnualTypeDiv').show();
			jQuery('.MonthTypeDiv').show();
			setTimeout(function(){jQuery('#AnnualType').click();}, 1500);
			
		}else{
			jQuery('.AnnualTypeDiv').hide();
			jQuery('.MonthTypeDiv').hide();
		}		
	},


	submit: function(eventObject){

		var me = eventObject ?eventObject.data.scope:this;
		if(me.validate()){
			Utils.showLoading();
			me.setDisabledSumbitButton(true);
			var values = Utils.apply(jQuery.extend({},me.getOrganizationData()), me.getValues());
			var bankAccountIBAN = Utils.calculateIBANSpain(values.BankAccountEntity, values.BankAccountOffice, values.BankAccountControlDigits, values.BankAccountNumber);
			values["BankAccountIBAN"]=jQuery.trim(bankAccountIBAN.split(' ').join(''));
			if(Utils.isRegisteredUser()){
				if (me.isChangePaymentMethodData(values)) {
					me.userSignUp.checkout(values, "paymentForm",true,false);
				} else {
					if (me.isChangeCreditCardDate(values)) {
						me.userSignUp.checkout(values, "paymentForm",false,true);
					} else {
						me.userSignUp.checkout(values, "paymentForm",false,false);
					}
				}	
			}else{
				values =Utils.apply(values, getSignupForm().getValues());
				values.companyType= getCompanyTypeForm().companyTypeValue;
				me.userSignUp.signUpTwoSteps(values);	
			}
		}
		
	},


/*
	submit: function(eventObject){
		var me = eventObject ?eventObject.data.scope:this;
		if(me.validate()){
			Utils.showLoading();
			me.setDisabledSumbitButton(true);
			me.convertOrganizationData(me.getValues());
			//@TODO:revisar
			if(Utils.isRegisteredUser()){
				//_gaq.push(['_trackEvent', 'PAYMENT', 'FINISH', 'REGISTERED']);
				var organizationData = me.getOrganizationData();//getUserRegister().getOrganizationData();
				var payChargeMethodType = organizationData.OrganizationPayChargeMethodType;
				var hasPayChargeMethod = true;
				if(payChargeMethodType===Constants.CARD_PAYMENT && (!organizationData.CreditCardName 
					|| Utils.beforeDate(organizationData.CreditCardExpirationMonth, organizationData.CreditCardExpirationYear))){
					hasPayChargeMethod=false;
				}else if(payChargeMethodType===Constants.BANKACCOUNT_PAYMENT && !organizationData.BankAccountName){
					hasPayChargeMethod= false;
				}
			
				if(Utils.isValidPayChargeMethodType(payChargeMethodType) && hasPayChargeMethod){
					me.userSignUp.checkout(me.getOrganizationData(), "paymentForm");
				}else {
					me.hide();
					Utils.hideLoading();
					getPaymentForm().show({reset:true});
				}
			}else{
				//_gaq.push(['_trackEvent', 'PAYMENT', 'FINISH', 'NO-REGISTERED']);
				me.hide();
				Utils.hideLoading();
				getPaymentForm().show({reset:true});
				
			}
		}
	},
*/
	searchAddressByPostalCode: function(eventObject){
		var me = eventObject ?eventObject.data.scope:getPaymentForm();
		var postalCode = jQuery.trim(jQuery('#organizationAddressPostalCode').val());
		var countryId =  jQuery(me.id+ ' #organizationAddressCountry').val();
		
		var filterObject= {
			countryId:countryId,
			postalCode: postalCode
		};

		if(me.organizationData && me.organizationData.AddressCityId){
			filterObject['success'] = function(){
				jQuery(me.id+' #organizationAddressCityId').selectify('update', me.organizationData.AddressCityId);
			}
		}

		if(postalCode){
			me.proxy.searchAddressDataByPostalCode(filterObject);
		} 
	},

	setDisabledSumbitButton: function(disabled){
		jQuery(this.id+ ' .div-signup-button .btn-green').attr('disabled', disabled);
		jQuery(this.id+ ' .div-signup-button .btn-green')[disabled?'addClass':'removeClass']('btn-disabled');
	},

	isChangePaymentMethodData: function(values){

		if(this.isCardType()){
			if ( this.organizationData && this.organizationData.CreditCardName != null) {
				var creditCardReaded = this.organizationData.CreditCardName;
				var creditCard = values.CreditCardNumber;

				if (creditCard != creditCardReaded){
					return true;
				} 
			} else {
				return true;
			}
		} else {
			if (this.organizationData && this.organizationData.BankAccountName != null) {
				var cccReaded = this.organizationData.BankAccountName.substring(0,20);
				var ccc = values.BankAccountEntity+values.BankAccountOffice+values.BankAccountControlDigits+values.BankAccountNumber;

				if (ccc != cccReaded) {
					return true;
				}
			} else {
				return true;
			}
		}
		return false;
	},

	isChangeCreditCardDate: function(values){

		if(this.isCardType()){
			var monthReaded = this.organizationData.CreditCardExpirationMonth;
			var month = values.CreditCardExpirationMonth;
			var yearReaded = this.organizationData.CreditCardExpirationYear;
			var year = values.CreditCardExpirationYear;

			if ((month != monthReaded) || (year != yearReaded)){
				return true;
			}
			
		} 
		return false;
	},


	validate: function(obj){
		var values = this.getValues();
		/*if(values.organizationAddressCountry && values.organizationAddressCountry != Constants.SPAIN && Utils.getPropertysByCampaignId(Utils.getCookie('linkCampaign')).onlySpain){
     	   	Utils.showFieldError(getTextByKey('anfix.campaign.other.country'),"organizationAddressCountry", "organizationForm");
        	return;
    	}*/


		if(!values.organizationName) {
			Utils.markInvalidField(this.id,"organizationName", false,getTextByKey('anfix.login.organizationName'));
			Utils.showPanelError(1);
			return;
		}

		if(!values.organizationIdentificationNumber){
			Utils.markInvalidField(this.id,"organizationIdentificationNumber", false,getTextByKey('anfix.login.organizationIdentificationNumber'));
			Utils.showPanelError(1);
			return;
		}else if(!Utils.validNifCif(values.organizationIdentificationNumber)){
			Utils.markInvalidField(this.id,"organizationIdentificationNumber", false,getTextByKey('anfix.login.organizationIdentificationNumber.format'));
			Utils.showPanelError(1);
			return;
		}
	
		if(!values.organizationAddressText){
			Utils.markInvalidField(this.id,"organizationAddressText", false,getTextByKey('anfix.login.organizationAddressText'));
			Utils.showPanelError(1);
	        return;
		}		
		if(!values.organizationAddressPostalCode){
			Utils.markInvalidField(this.id,"organizationAddressPostalCode", false,getTextByKey('anfix.login.organizationPostalCode'));
			Utils.showPanelError(1);
	        return;
	    }

	    /*
		if(jQuery.isEmptyObject(values.organizationAddressCity)){
			Utils.markInvalidField(this.id,"organizationAddressCity", true);
			this.showErrorMessages({errorMessage :'anfix.login.organizationCity', isKey:true});
			return;
		}
		*/
		if(!values.organizationAddressProvinceId){ 
			Utils.markInvalidField(this.id,"organizationAddressProvinceId", false,getTextByKey('anfix.login.organizationProvince'));
			Utils.showPanelError(1);
			return;
		}
		
		if(!values.organizationAddressCountry){ 
			Utils.markInvalidField(this.id,"organizationAddressCountry", false,getTextByKey('anfix.login.organizationCountry'));
			Utils.showPanelError(1);
			return;
		}
	
		// For PaymentSelection
		if(this.isCardType()){
			if(!values.CreditCardHolderName){
				Utils.markInvalidField(this.id,"CreditCardHolderName", false,getTextByKey('anfix.cardholder.name.msg'));
				Utils.showPanelError(1);
				return false;	
			}else{
				Utils.markValidField(this.id,"CreditCardHolderName");
			}

			if(!values.CreditCardNumber){
				Utils.markInvalidField(this.id,"CreditCardNumber", false,getTextByKey('anfix.card.number.msg'));
				Utils.showPanelError(1);
				return false;	
			}else if (this.isChangePaymentMethodData(values)) {

				if(!Utils.isValidCreditCard(values.CreditCardNumber)){
					Utils.markInvalidField(this.id,"CreditCardNumber", false,getTextByKey('anfix.card.number.format.msg'));
					Utils.showPanelError(1);
					return false;	
				}
			}else{
				Utils.markValidField(this.id,"CreditCardNumber");
			}

			if(!values.CreditCardExpirationMonth){
				Utils.markInvalidField(this.id,"CreditCardExpirationMonth", false,getTextByKey('anfix.expiration.month.msg'));
				Utils.showPanelError(1);
				return false;
			}

			if(!values.CreditCardExpirationYear){
				Utils.markInvalidField(this.id,"CreditCardExpirationYear", false,getTextByKey('anfix.expiration.year.msg'));
				Utils.showPanelError(1);
				return false;
			}
			
			if(Utils.beforeDate(values.CreditCardExpirationMonth,values.CreditCardExpirationYear)){
				Utils.markInvalidField(this.id,"selectifyCreditCardExpirationMonth", false,getTextByKey('anfix.date.before.msg'), true);
				Utils.showPanelError(1);
				jQuery(this.id+ " #CreditCardExpirationMonth").selectify('markInvalid');
				return false;	
			}else{
				Utils.markValidField(this.id,"selectifyCreditCardExpirationMonth", true);
				//jQuery("#CreditCardExpirationMonth").selectify('markValid');
				jQuery(this.id+ ' select#CreditCardExpirationMonth').selectify('markValid');
				jQuery(this.id+ ' select#CreditCardExpirationYear').selectify('markValid');
			}
			
		}else{
			if(!values.BankAccountEntity){
				Utils.markInvalidField(this.id,"BankAccountEntity", false,getTextByKey('anfix.bankaccount.entity.msg'));
				Utils.showPanelError(1);
				return false;	
			}
			if(!values.BankAccountOffice){
				Utils.markInvalidField(this.id,"BankAccountOffice", false,getTextByKey('anfix.bankaccount.office.msg'));
				Utils.showPanelError(1);
				return false;	
			}
			if(!values.BankAccountControlDigits){
				Utils.markInvalidField(this.id,"BankAccountControlDigits", false,getTextByKey('anfix.bankaccount.control.digit.msg'));
				Utils.showPanelError(1);
				return false;	
			}
			if(!values.BankAccountNumber){
				Utils.markInvalidField(this.id,"BankAccountNumber", false,getTextByKey('anfix.bankaccount.number.msg'));
				Utils.showPanelError(1);
				return false;	
			}

			var ccc = values.BankAccountEntity+values.BankAccountOffice+values.BankAccountControlDigits+values.BankAccountNumber;

			if (this.isChangePaymentMethodData(values)) {

				if(!Utils.isCCC(ccc)){
					Utils.markInvalidField(this.id, ["BankAccountEntity", "BankAccountNumber", "BankAccountOffice", "BankAccountControlDigits"], false,getTextByKey('anfix.bankaccount.number.format.msg'));
					Utils.showPanelError(1);
					return false;
				}
			} 

		}	
		// End For PaymentSelection


		return true;
	},

	showErrorMessages: function(obj){
		var isVisibleDivErrors= jQuery(this.id+' .div-errors').is(':visible');
		if(!isVisibleDivErrors){
			jQuery(this.id).css("height", "700px");
			//jQuery(this.id+ ' .all').css("height", "700px");
			jQuery(this.id+ ' .all').animate({"height": "700px"},150);
		}
		jQuery('.div-errors').show();
		var msg = obj.isKey ? getTextByKey(obj.errorMessage): obj.errorMessage;
		jQuery(this.id+ ' .div-errors .paragraph div').html(msg);
		if(obj  && obj.msgTypeInfo){
			jQuery(this.id+ ' .div-errors').addClass("bg-info");
		}else{
			jQuery(this.id+ ' .div-errors').removeClass("bg-info");
		}

	},

	hideErrorMessages: function(){
		var isVisibleDivErrors= jQuery(this.id+' .div-errors').is(':visible');
		if(isVisibleDivErrors){
			//jQuery(this.id).css("height", this.defaultHeight);
			//jQuery(this.id+ ' .all').css("height", this.defaultHeight);
			jQuery(this.id+ ' .all').animate({"height": this.defaultHeight+"px"},150);
			jQuery(this.id).animate({"height": this.defaultHeight+"px"},150);
		}
		jQuery(this.id+' .div-errors').hide();
	},

	validateField: function(input){
		var isEmpty= jQuery.isEmptyObject(input.value);
		var fieldsToValidate = ['organizationName','organizationAddressText', 'organizationAddressPostalCode','organizationAddressCity', 'organizationAddressProvince'];
		
		if(isEmpty){
			Utils.resetMarkField(this.id, input.name);
			return;
		}

		if(jQuery.inArray(input.name, fieldsToValidate)!=-1){
			Utils.markValidField(this.id, input.name);
			return;
		}



		// For PaymentSelection
		var value = jQuery.trim(input.value);
		var isEmpty= !value || value==="";
		var fieldsToValidate = ['BankAccountEntity', 'BankAccountOffice', 'BankAccountControlDigits','BankAccountNumber'];
		
		if(input.name=='organizationIdentificationNumber'){
			if(!Utils.validNifCif(value)){
				Utils.markInvalidField(this.id,"organizationIdentificationNumber", false,getTextByKey('anfix.login.organizationIdentificationNumber.format'));
				Utils.showPanelError(1);
			}else{
				Utils.markValidField(this.id, input.name);
				this.hideErrorMessages();
			}
		}

		if(isEmpty){
			Utils.resetMarkField(this.id, input.name);
			return;
		}

		if(input.name ==="CreditCardHolderName"){
			Utils.markValidField(this.id, input.name);
			return;
		}

		if(input.name ==="CreditCardNumber"){
			if (this.organizationData && this.organizationData.CreditCardName != value){

				if(!Utils.isValidCreditCard(value)){
					Utils.markInvalidField(this.id,"CreditCardNumber", false,getTextByKey('anfix.card.number.format.msg'));
					Utils.showPanelError(1);
				}else{
					Utils.markValidField(this.id, input.name);
					this.hideErrorMessages();
				}
			}
			return;
		}	

		if(input.name ==="BankAccountEntity"){
			if(value.length<4){
				Utils.markInvalidField(this.id,"BankAccountEntity", false,getTextByKey('anfix.bankaccount.entity.length'));
				Utils.showPanelError(1);
				return;
			}else{
				Utils.markValidField(this.id, input.name);
				this.hideErrorMessages();
			}
		}
		if(input.name ==="BankAccountOffice"){
			if(value.length<4){
				Utils.markInvalidField(this.id,"BankAccountOffice", false,getTextByKey('anfix.bankaccount.office.length'));
				Utils.showPanelError(1);
				return;
			}else{
				Utils.markValidField(this.id, input.name);
				this.hideErrorMessages();
			}
		}
		if(input.name ==="BankAccountControlDigits"){
			if(value.length<2){
				Utils.markInvalidField(this.id,"BankAccountControlDigits", false,getTextByKey('anfix.bankaccount.control.digit.length'));
				Utils.showPanelError(1);
				return;
			}else{
				Utils.markValidField(this.id, input.name);
				this.hideErrorMessages();
			}	
		}
		if(input.name ==="BankAccountNumber"){
			if(value.length<10){
				Utils.markInvalidField(this.id,"BankAccountNumber", false,getTextByKey('anfix.bankaccount.number.length'));
				Utils.showPanelError(1);
				return;
			}else{
				Utils.markValidField(this.id, input.name);
				this.hideErrorMessages();
			}	
		}
		// End for PaymentSelection


	},

	onChangeAddressCountry: function(){
		var me = this;
		var countryId = jQuery(me.id+' #organizationAddressCountry').val();
		jQuery(me.id+' #organizationAddressProvince').css('display',countryId===Constants.SPAIN? 'none': 'block');
		jQuery(me.id+' #selectifyorganizationAddressProvinceId').css('display',countryId===Constants.SPAIN? 'block': 'none');
		jQuery(me.id+' #organizationAddressCity').css('display',countryId===Constants.SPAIN? 'none': 'block');
		jQuery(me.id+' #selectifyorganizationAddressCityId').css('display',countryId===Constants.SPAIN? 'block': 'none');

		if(countryId!=Constants.SPAIN){
			jQuery(me.id+'select#selectifyorganizationAddressProvinceId').selectify('update', '');	
			jQuery(me.id+'select#selectifyorganizationAddressCityId').selectify('update', '');	
			jQuery(me.id+'select#selectifyorganizationAddressCityId option').remove();	
				/*if(Utils.getPropertysByCampaignId(Utils.getCookie('linkCampaign')).onlySpain){
				Utils.showErrors(getTextByKey('anfix.campaign.other.country'), 'organizationForm');
			}	*/	
		}
		/*
		if(jQuery('#selectifyorganizationAddressCityId option').length<=1){
			jQuery('#organizationAddressCity').css('display','block');
			jQuery('#selectifyorganizationAddressCityId').css('display','none');
		}
		*/
		me.proxy.onSelectCountryOrProvince();
	},

	convertOrganizationData: function(values){
		var valuesIds= ['organizationName', 'organizationIdentificationNumber', 'organizationAddressText',
					  'organizationAddressPostalCode', 'organizationAddressCity', 'organizationAddressCityId',
					  'organizationAddressProvinceId', 'organizationAddressProvince', 'organizationAddressCountry', 'organizationPhoneNumber'];

		var data = ['OrganizationName','OrganizationIdentificationNumber','AddressText', 'AddressPostalCode',
					  'AddressCity', 'AddressCityId','AddressProvinceId','AddressProvince','AddressCountryId', 'OrganizationPhoneNumber'];

		if(!this.organizationData){
			this.setOrganizationData({});
		}
		for (var i = valuesIds.length - 1; i >= 0; i--) {
			this.organizationData[data[i]]=values[valuesIds[i]];
		};
		
		//return this.organizationData;
	},

	changePaymentType: function(){
		var radioValue = jQuery(this).val();
		Utils.hideTooltip();
		getPaymentForm().disableBankAccount(radioValue===Constants.CARD_PAYMENT);
		getPaymentForm().disableCard(radioValue!=Constants.CARD_PAYMENT);
	},

	changePaymentFrequency: function(){
		var radioValue = jQuery(this).val();
		Utils.hideTooltip();
		/*getPaymentForm().disableBankAccount(radioValue===Constants.CARD_PAYMENT);
		getPaymentForm().disableCard(radioValue!=Constants.CARD_PAYMENT);*/
		
		configs = getConfigsFullData(radioValue =="A" ? window.annual :window.month);	
		
		setAvanza(configs.specType == Constants.COMMERCIAL_PROPERTY_SPEC_TYPE_SILVER);
		setPremium(configs.specType == Constants.COMMERCIAL_PROPERTY_SPEC_TYPE_GOLD);

		getPaymentForm().loadData(configs);
		if(jQuery.isEmptyObject(getPaymentForm().organizationData)){
			var myVar  = setInterval(function(){ 
	    		if(getPaymentForm().organizationData){
	    			getPaymentForm().organizationData.CommercialConfigs = getPaymentForm().result.dataToSend;
	    			clearInterval(myVar);
	    		}
	    	}, 500);
		}else{
			getPaymentForm().organizationData.CommercialConfigs = getPaymentForm().result.dataToSend;
		}
		getPaymentForm().loadDescriptionAndPrices();
		Utils.hideLoading();
	},

	disableBankAccount: function(disabled){
		if(disabled){
			$('#containerBankAccount').slideUp('fast', function(){
				$('#containerCreditCard').slideDown('fast');
			});
			jQuery(this).attr('disabled', 'disabled');
		} else {
			jQuery(this).removeAttr('disabled');
		}
	},

	disableCard: function(disabled){
		if(disabled){
			$('#containerCreditCard').slideUp('fast', function(){
				$('#containerBankAccount').slideDown('fast');
			});
			jQuery(this).attr('disabled', 'disabled');
		} else {
			jQuery(this).removeAttr('disabled');
		}
	},

	addListenersTo: function(){
		
		var me=this, isCardPayment = jQuery('#CardType').is(':checked');
		jQuery(this.id+ ' input:radio[name=PayChargeMethodType]').bind('click',this.changePaymentType);

		jQuery(this.id+ ' input:radio[name=PayChargeFrequencyType]').bind('click',this.changePaymentFrequency);

		jQuery('#btn-payment').on('click', {scope: me},me.submit);

		jQuery(me.id+ ' #organizationAddressProvinceId').on('change',{fieldName: this.name}, function(){
			var addressProvinceId = this.value;
			jQuery(me.id+' select#organizationAddressProvinceId').selectify(!jQuery.isEmptyObject(addressProvinceId)?'markValid': 'reset');
			me.proxy.onSelectCountryOrProvince();
		});

		jQuery(me.id+ ' #organizationAddressCityId').on('change',{fieldName: this.name}, function(){
			var addressCityId = this.value;
			jQuery(me.id+' select#organizationAddressCityId').selectify(!jQuery.isEmptyObject(addressCityId)?'markValid': 'reset');
		});

		jQuery(me.id+ ' #organizationAddressCountry').on('change',{fieldName: this.name}, function(){
			var organizationAddressCountry = this.value;
			jQuery(me.id+' select#organizationAddressCountry').selectify(!jQuery.isEmptyObject(organizationAddressCountry)?'markValid': 'reset');
			getPaymentForm().onChangeAddressCountry();
		});

		jQuery(me.id+ ' #CreditCardExpirationMonth').on('change',{fieldName: this.name}, function(){
			jQuery(me.id+' #CreditCardExpirationMonth').selectify('markValid');
			Utils.markValidField(this.id,"selectifyCreditCardExpirationMonth", true);
			if(jQuery.isEmptyObject(this.value)){
				jQuery(me.id+' #selectifyCreditCardExpirationMonth').removeClass('OK-combo');
			}
		});

		jQuery(this.id+ ' #organizationAddressProvinceId').on('change',{fieldName: this.name}, function(){ me.proxy.onSelectCountryOrProvince()});
		jQuery(this.id+ ' #organizationAddressPostalCode').on('change',{scope:me}, me.searchAddressByPostalCode);
		
		jQuery(this.id+' input').each(function(index){
			if(this.type != 'radio' && jQuery(this).parent().parent('#containerCreditCard')){
				jQuery(this).on('blur',{fieldName: this.name}, function(){
					me.validateField(this);
				});
			}else if(this.type != 'radio' && jQuery(this).parent().parent('#containerBankAccount')){
				jQuery(this).on('blur',{fieldName: this.name}, function(){
					me.validateField(this);
				});
			}
			if(this.name == 'organizationIdentificationNumber'){
				jQuery(this).on('blur',{fieldName: this.name}, function(){
					me.validateField(this);
				});
			}
		});

		//jQuery(me.id + ' .selectify').prop('form', me.id);
	   	jQuery(me.id+ ' input').keydown({scope:this.id}, Utils.move);
	}
};
var isFree = true;
var eraseEmail = false;
var pixelesCounter = 0;
var isAvanza = false;
var isPremium= false;
var informationStepArray = {Info :[]};
var stepId = null;
var cookiesObj = {};
var fromInvitation = false;

function getInformationStepArray (){
	return informationStepArray;
}

function getStepId(){
	return stepId;
}

function setStepId(id){
	stepId = id;
}

function isEnterKeyPressed(e){
	var evt = e ? e : event;
	var key = evt.keyCode;
	return key === 13;
}


function onKeyPressGetData(e){
	var evt = e ? e : event;
	var key = evt.keyCode;
	if (key === 13) {
		signupRegisteredUser();
	} 	
}


function closeRegister(){
	var visible = jQuery(".modal:visible");
	modalMaskHide(visible);
	Utils.hideLoading();

	jQuery('body').css('overflow', 'auto');
	Utils.clearCookie('fromInvitation');
	visible+='#';

	setAvanza(false);
	setPremium(false);

	if(visible==getPaymentForm()){
		visible = "PAYMENT";
	}else{
		visible = "TRIAL";
	}

	trackEvent({
		origin: visible,
		action: "CANCEL",
		label: null
	});	

	window.promoProducts = false;
	window.productsFromPromoLink = false;
};

function modalMaskHide (visible){
	visible.hide();
	jQuery("#maskModal").css("display", "none");
	/*jQuery("#userForm").css("display", "none");
	jQuery("#payVisionContainer").css("display", "none");
	jQuery("#organizationForm").css("display", "none");
	*/
};

function trackEvent(object){
        //Function to track the funnel events.
        typeof ga !== "undefined" && ga('send', 'event', object.origin, object.action, object.label || null);
         //_gaq.push(['_trackEvent',object.origin, object.action, object.label]);
};

function trackFb(type){
        if(Constants.FB_ENABLED){
                fbq('track', type);
        }
}

/**************************/
/*   mainUserform         */
/**************************/

function openUserMainForm(options){
	var cc=null;
	options && options.preventDefault && options.preventDefault();

	if(!jQuery.isEmptyObject(options) && options.ac){
		loadBecomeVIPData();
		return;
	}
	
	if(!jQuery.isEmptyObject(options) && !jQuery.isEmptyObject(options.cc)){
		cc = options.cc;
		Utils.setCookie("linkCampaign",cc);
	}
	if(options && options.products){
		window.products = options.products;
	}
	
	if(!cc && !Utils.getCookie('userLoginId')){
		openRegisterEmailForm(options);
	}else if(!cc && Utils.getCookie('userLoginId')){
		if(options && options.products || window.prodcuts){
			if(!options ||  (options && !options.prodcuts)){
				options = {products:window.products};
			}
			document.location = Constants.LOGIN_URL+ "?uid="+Utils.getCookie('userLoginId')+"&products="+options.products.toString().replace(/,/g, '');	
		}else{
			openSignupForm(options);
		}
	}else if (cc && options.register){
		openSignupForm(options);
	}else if(cc && Utils.getCookie('userLoginId')){
		document.location = Constants.LOGIN_URL+ "?cc="+cc+"&uid="+Utils.getCookie('userLoginId');
	}else if(cc && !Utils.getCookie('userLoginId')){
		document.location = Constants.LOGIN_URL+ "?cc="+cc;
	}
};

function loadBecomeVIPData(){
	getDiscountCampaignsCode({
			success: function(data){
				var campaignCode = data.campaignCode;
				searchDiscountCampaigns({
					newUser:false, 
					campaign:campaignCode, 
					success:function(data){
						window.selectedCampaign = data.outputData.Campaign;
						window.annual, window.month;
						for (var i = window.selectedCampaign.length - 1, campaignConfig=null; i >= 0; i--) {
							campaignConfig=window.selectedCampaign[i];
							if(campaignConfig.CommercialPropertyId == Constants.COMMERCIAL_PROPERTY_FREQUENCY && campaignConfig.CommercialConfigSpecTypeId=='8'){
								if(campaignConfig.CommercialPropertyValue == "Y"){
									window.annual= [{
										ShCtCommConfigCampaignId:campaignConfig.CampaignId,
										ShCtCommConfigCommercialConfigId:campaignConfig.CommercialConfigId
									}];
								}else if(campaignConfig.CommercialPropertyValue == "M"){
									window.month= [{
										ShCtCommConfigCampaignId:campaignConfig.CampaignId,
										ShCtCommConfigCommercialConfigId:campaignConfig.CommercialConfigId
									}];
								}
							}
						};
						onClickDiscountCommercialConfig(window.annual);
					}
				});
			}
		});
}

function redirectToRestorePassword(){
	document.location  = Utils.getUrl(Constants.RESET_PASSWORD);
};

function getDataFromUrl (){
	var params= null,
		url = decodeURIComponent(document.URL);
		urlParams =  url.split("?");
		
	if(urlParams && urlParams.length > 1){
		params = Utils.getParamsFromUrl(urlParams[1]);
	}
	return params;
};


function changeCompanyType(event){
	Utils.showHiddenFields();
};

function openBrowser(){
	jQuery('#file').click();
};

function goUserData(){
	jQuery("#userForm").css("display", "block");
	jQuery("#organizationForm").css("display", "none");

}

function onChangeAddressCountry (event){
	var countryId = jQuery('#organizationAddressCountry').val();
	jQuery('#organizationAddressProvince').css('display',countryId===Constants.SPAIN? 'none': 'block');
	jQuery('#organizationAddressProvinceId').css('display',countryId===Constants.SPAIN? 'block': 'none');

	if(countryId!=Constants.SPAIN){
		jQuery('#organizationAddressProvinceId').val(null);	
		jQuery('#organizationAddressCityId').val(null);	
		jQuery('#organizationAddressProvince').blur();
		if(Utils.getPropertysByCampaignId(Utils.getCookie('linkCampaign')).onlySpain){
			Utils.showErrors(getTextByKey('anfix.campaign.other.country'), 'organizationForm');
		}		
	}
	userRegister.getProxy().onSelectCountryOrProvince();
}


function configLoginFields(){
    //jQuery('.form-password').val(getTextByKey('anfix.login.password'));
    //jQuery('.form-email').val(getTextByKey('anfix.login.user'));
    jQuery('.form-password').addClass('color-login-empty pwd-empty-cls');
    jQuery('.form-email').addClass('color-login-empty text-email email-focus-empty-cls');
};

function onClickChecked(){

};   

function onClickCheckedGift(){

	var checked = jQuery('#gift').is(':checked');
	getUserRegister().showAddressDelivery({isVisible: checked});
	jQuery('#companytype').trigger('change');
};

function openProfitSignupForm(){

	var user = $('.contact-form input').val() || "", 
		pass = $('.contact-form input[class=v-size]').val() || "",
		userData = {};
	if(user && user != ""){
		userData.user = user;
	}

	if(pass && pass != ""){
		userData.pass = pass;
	}

	//openSignupForm(userData);
	openRegisterEmailForm();
}

function addEventsToBtnToOpenRegister(){
	jQuery(".registro.active").click(openProfitSignupForm);
	jQuery('.gratis').not('.logical-block').not('.go-advisor-form').click(openProfitSignupForm);
	//jQuery('.bordered-btn').not('.go-advisor-form').click(openProfitSignupForm);
	jQuery('.description .bordered-btn').click(openProfitSignupForm);
	jQuery('.empresas-y-autonomos .bordered-btn').click(openProfitSignupForm);
	jQuery('.gestoria-empresas-y-autonomos .bordered-btn').click(openProfitSignupForm);
	jQuery('.facturacion-empresas-y-autonomos .bordered-btn').click(openProfitSignupForm);
	jQuery('.gestion-de-proyectos .bordered-btn').click(openProfitSignupForm);
	jQuery('.gestion-de-stock .bordered-btn').click(openProfitSignupForm);
	 jQuery('.contabilidad .bordered-btn').click(openProfitSignupForm);
	  jQuery('.impuestos .bordered-btn').click(openProfitSignupForm);
	//jQuery('.title-box .bordered-btn').click(openProfitSignupForm);
	//jQuery('.title-box .btn').click(openProfitSignupForm);

	jQuery('.holder button[type=submit]').click(openProfitSignupForm);
}

jQuery(document).ready(function() {

	jQuery('.anfix-register input[type=text], .anfix-register input[type=password], .anfix-register input[type=tel], .anfix-register input[type=email]')
			.not('#userForm input, #paymentForm input, selectProductsForm input, #salesForm input').polymerForm();


	if(Utils.isTablet() || Utils.isMobile()){
		jQuery('input').bind('input keyup', function(e) {
		    var maxlength = jQuery(this).attr('maxlength');
		    var value = jQuery(this).val();
		    if(maxlength && value && value.length > parseInt(maxlength)){
		    	jQuery(this).val(jQuery(this).val().substr(0, parseInt(maxlength)));
		    	}
		});
	}

	
	jQuery(".afx-button-green").not('.js-excluded-open').click(openUserMainForm);
	jQuery(".register-now").click(openUserMainForm);

	jQuery('.afx-button-chat').click(function(event){
		event.preventDefault();	
	});

	jQuery('.afx-button-send, .afx-send-button').click(function(event){
                event.preventDefault();
		var phone = jQuery.trim(jQuery("input[name=phoneNumber]").val());
		Utils.hideTooltip();
		if(jQuery.isEmptyObject(phone)){
			jQuery("input[name=phoneNumber]").addClass('error-flat');
			Utils.showToolTip('.home-section8	.girls-wrap input[type="text"]', getTextByKey('sent.phone.required'));			
			return;
		}	

		var userSignup = new UserSignup();
		userSignup.sendEmailOfLeads(phone, function(){
			jQuery('.afx-box-cau form, .input-button-wrapper').hide();
			jQuery('.afx-result-msg').show().html(getTextByKey('sent.phone.number.ok'));
		});
        });

	jQuery('.btn-holder .btn').not('.go-advisor-form').click(function(){
		var index = jQuery('.btn-holder .btn').index(jQuery(this));
		jQuery('html,body').animate({
          scrollTop: jQuery('h3').eq(index).offset().top - 60
        }, 1000);
	});
	
	jQuery('html,body').on('keydown', function(event){
		if(event.keyCode==27){
			Utils.closeFullScreen();
		}
	});

	jQuery('.fullscreen input').keydown(function(){
		Utils.hideTooltip();
	});

	addEventsToBtnToOpenRegister();

	jQuery('.entrar').click(function(){document.location=Constants.LOGIN_URL; });
	//$(document.body).attr('style','overflow: auto;');

	jQuery('#anfix-login-close').click(function() {
			jQuery('#anfix-login').animate({
		    top: -616
		  }, 300, function() {
		    
		  });
	});

	jQuery('#anfix-login-showform').click(function() {
		jQuery('.form-password').val('');
                jQuery('.form-email').val('');
		resetHeaderLogin();
		jQuery('#anfix-login').animate({
		    top: -264
		  }, 300, function() {
			configLoginFields();
			jQuery('.form-email').focus();

		  });
	});

	configLoginFields();
	jQuery('.form-email').first=true;

	jQuery('.form-submit').click(function() {
		login();
	});
	
	Utils.clearCookie('fromInvitation');
	Utils.clearCookie('isVerified');	
	Utils.clearCookie("firstTime");
	Utils.clearCookie("invitation");
	

	getUserRegister().proxy.searchVat();
	getUserRegister().setUp();
	getPaymentForm().setUp();
	getMailSentForm().setUp();
	getRegisterEmailForm().setUp();
	getSignupForm().setUp();
	getSignupHomeForm().setUp();
	getCompanyTypeForm().setUp();
	getEnterpriseDataForm().setUp();
	getFreelanceForm().setUp();
	getAccountingEnterpriseForm().setUp();
	getCropped().setUp();
	//getSmsForm().setUp();
	getAdvisorForm().setUp();
	//getSmsAdvisorForm().setUp();
	//getPricingForm().setUp();
		
	
	function onReady(){
		var params = getDataFromUrl() || {};
			getUserRegister().params = params;

		if(params.utm_medium){
			Utils.setCookieNoSecure('channel', Utils.toCamelCase(params.utm_medium));
		}

		if(!window.onLogin){
			Utils.clearCookie("linkCampaign");
			if (params.email && !params.key) {
				if(jQuery('#email')){
					jQuery('#email').val(params.email);
					jQuery('#email').css('color', '#474b4e');
				}

				/*if(params.email && params.key && params.validate){
					jQuery("#maskModal").css("display", "block");
			        	jQuery("#emailValidationForm").css("display", "block");
			        	       	        
			        	var emailValidation = new EmailValidation();
			         	emailValidation.validate();
				  	return;
				}

				if(params.email && params.key){
					openRestorePasswordForm();
					return;
				}

				if(params.uid){
					Utils.setCookie("userLoginId",params.uid, null, null, 'anfix.com');
				}*/

				if (params.fI && !params.invId) {
					Utils.setCookie("fromInvitation", params.fI);
					document.location = Constants.INVITATION_REDIRECT + window.location.search;
					//getSignupForm().setValues({EMail: params.email});
					//if (!Utils.isMobile()){
 					//	  getSignupForm().show();
   					//	  return;
					//}
				}
				if(params.cc){
					Utils.setCookie("linkCampaign", params.cc);
				}
			}	
		}
		
		if(!window.onLogin){
			if(params.source && params.source == "iPad" && params.action && params.action == "register"){
				window.registerFromiPad = true;
				openUserMainForm();
			}

			

			if(params.ac){
				openUserMainForm({ac: params.ac});
				return;
			}if (!Utils.getCookieNoSecure("autoLogin")){
				Utils.clearCookie("accessCode");
			}

			if(params.uid && (params.promo || params.gratis)){
				var urlAux =Constants.LOGIN_URL+"?uid="+params.uid;
				if(params.promo){
					if(params.promo=='f'){
						urlAux += "&promo=f";
					}else if(params.promo=='u'){
						urlAux += "&promo=u";
					}else{
						urlAux += "&promo=true";
					}
				} else if(params.gratis){
					urlAux += "&gratis=true";
				}
				
				if(params.cc){
					urlAux+='&cc='+params.cc;
				} 
                document.location = urlAux;
            }else if(params.uid && params.cc && !params.promo){
				document.location = Constants.LOGIN_URL+"?uid="+params.uid+'&cc='+params.cc;
			}else if(params.cc && params.cc!=Constants.EINFORMA_CODE_CAMPAIGN){
				openUserMainForm({cc:params.cc, register:params.register});
			}else if(params.invId){
				   openUserMainForm({invId:params.invId, email: params.email});
			}else if(params.cc){
				   openUserMainForm({cc:params.cc});
			}else if(params.email && !(params.fI && !params.invId)){	
				if(document.location.href.indexOf('gestores')==-1){
					Utils.clearCookie('userLoginId');
					// var url = Constants.LOGIN_URL+"?email="+params.email;
					var url = Constants.LOGIN_NEW + window.location.search;
					if(params.key){
						url+= '&key='+params.key;
					}
					if(params.advisor){
						url+= '&advisor='+params.advisor;
					}
					if(params.validate){
						url+= '&validate='+params.validate;	
					}
					document.location = url;
				}
			}else if(document.location.pathname.indexOf('mobile')==-1 && (params.key || params.email)){
				openSignupForm();
				/*if(document.location.href.indexOf('gestores')==-1){
					Utils.clearCookie('userLoginId');
					var url = Constants.LOGIN_URL+"?email="+params.email;
					if(params.key){
						url+= '&key='+params.key;
					}
					if(params.advisor){
						url+= '&advisor='+params.advisor;
					}
					if(params.validate){
						url+= '&validate='+params.validate;	
					}
					document.location = url;
				}*/
			}
		}
	}
	getConfiguration().setUp(onReady);

});
/**
 * Documento Confidencial.
 * 
 * @file signup.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date January, 2015
 * @brief js for open and manages signup form.
 */


/*GLOBAL VARIABLES*/
var pricing=null;
var campaingType = null;

/**GLOBAL FUNCTIONS*/
function contractCampaign(options) {
	getSignupForm().show({reset:true, data:options});
};

function onKeyPressSignup(e) {
	if (isEnterKeyPressed(e)) {
		getSignupForm().submit();
	} 
};

function getPricingForm() {
	if(jQuery.isEmptyObject(pricing)){
		pricing= new Pricing();
	}
	return pricing;
};


/**CLASS*/
var Pricing = function(){};
Pricing.prototype = {
	id: '.precios-header.stickem',

	setUp: function(){
		this.addListenersTo();
	},

	setCampaignStockOrProjects: function(isStock, e){
		var index =  jQuery('.table-bordered a').index(e.target);
		if(index==0){
                        campaingType= isStock ? "PFSAC": "PFPAC";
                }else if(index==1){
                        campaingType=isStock ?  "PPSAC": "PPPAC";
                }else if(index==2){
                        campaingType=isStock ?  "PESAC": "PEPAC";
                }else if(index==3){
                          campaingType=isStock ? "PFSMC": "PFPMC";;
                }else if(index==4){
                        campaingType=isStock ?  "PPSMC": "PPPMC";
                }else if(index==5){
                          campaingType==isStock ?  "PESMC": "PEPMC";
                }

         Utils.setCookie('linkCampaign', campaingType, null, null, 'anfix.com');
	},


	setCampaignType: function(e){
		var index = jQuery('.price-wrapper a').index(e.target);
		if(index==0){
			campaingType= "PFAC";
		}else if(index==3){
			campaingType= "PFMC";
		}else if(index==1){
			campaingType="PPAC";
		}else if(index==4){
			  campaingType="PPMC";
		}else if(index==2){
                        campaingType="PEAC";
                }else if(index==5){
                          campaingType="PEMC";
                }
	 Utils.setCookie('linkCampaign', campaingType, null, null, 'anfix.com');
	},

	getCampaignBySelectedChecks:function(){
		var arrayCampaigns = {
			FREELANCE: {
				'FP': 'BASFACM',
				'FP-SERV':'BASPRYM',
				'FP-STOCK':'BASSTKM',
				'FP-CONT':'BASCOTM',
				'FP-SERV-STOCK':'BASPYSM',
				'FP-SERV-CONT':'BASPYCM',
				'FP-STOCK-CONT':'BASSYCM',
				'FP-SERV-STOCK-CONT':'BASPSYCM'
			},
			PROFESSIONAL: {
				'FP': 'PROFACM',
				'FP-SERV':'PROPRYM',
				'FP-STOCK':'PROSTKM',
				'FP-CONT':'PROCOTM',
				'FP-SERV-STOCK':'PROPYSM',
				'FP-SERV-CONT':'PROPYCM',
				'FP-STOCK-CONT':'PROSYCM',
				'FP-SERV-STOCK-CONT':'PROPSYCM'
			},
			ENTERPRISE: {
				'FP': 'EMPFACM',
				'FP-SERV':'EMPPRYM',
				'FP-STOCK':'EMPSTKM',
				'FP-CONT':'EMPCOTM',
				'FP-SERV-STOCK':'EMPPYSM',
				'FP-SERV-CONT':'EMPPYCM',
				'FP-STOCK-CONT':'EMPSYCM',
				'FP-SERV-STOCK-CONT':'EMPPSYCM'
			}
		};

		/*var key = 'FP';
		if(jQuery('[product-data="proyectos"] .jcf-checked').length!=0){
			key+="-SERV";
		}
		if(jQuery('[product-data="stock"] .jcf-checked').length!=0){
			key+="-STOCK";
		}
		if(jQuery('[product-data="contabilidad"] .jcf-checked').length!=0){
			key+="-CONT";
		};*/
		Utils.setCookie('linkCampaign', arrayCampaigns[campaingType][key], null, null, 'anfix.com');
		
	},

	addListenersTo: function(){
		var me = this;
		jQuery('.price-wrapper a').click(function(e){
			e.preventDefault();
			getPricingForm().setCampaignType(e);
			if(!Utils.isMobile()){
				getUserRegister().show(e);
			}else {
				//getPricingForm().getCampaignBySelectedChecks();
				Utils.redirectToMobileRegistration('?campaign='+Utils.getCookie('linkCampaign')+'&campaignType='+campaingType+'&uid='+Utils.getCookie('userLoginId')+'&isPayment=true');
			}
		});

		jQuery('.precios-wrapper .bordered-btn').click(function(e){
			getPricingForm().setCampaignType(e);
			if(!Utils.isMobile()){
				getUserRegister().show(e);
			}else {
				// getPricingForm().getCampaignBySelectedChecks();
				Utils.redirectToMobileRegistration('?campaign='+Utils.getCookie('linkCampaign')+'&campaignType='+campaingType+'&uid='+Utils.getCookie('userLoginId')+'&isPayment=true');
			}
		});

		jQuery('.table-bordered a').click(function(e){
			e.preventDefault();
			if(!Utils.isMobile()){
				var isAnual = jQuery('#1').hasClass('active');
                                getPricingForm().setCampaignStockOrProjects(jQuery('.addons-stock-page').length, e);
				getUserRegister().show(e);
                        }else {
                                 getPricingForm().getCampaignBySelectedChecks();
                                 Utils.redirectToMobileRegistration('?campaign='+Utils.getCookie('linkCampaign')+'&campaignType='+campaingType+'&uid='+Utils.getCookie('userLoginId')+'&isPayment=true');
                                                                                         }
		});
		
	}

};

jQuery(document).ready(function() {
	jQuery('.product').not(':first').on('click', onClickProduct);
	jQuery('.product').first().find('input').click(function(e){
		e.stopPropagation();
		return false;
	});
	jQuery('#btn-products').on('click', onClickSelectProductSubmit);
});

function loadSelectProductsForm(){
	/*	
	if(jQuery.browser.msie && parseFloat(jQuery.browser.version) < 9){
		jQuery('#selectProductsForm .terms > label').addClass('ie8-checked');
	} else {
		jQuery('.product .terms > input').first().attr("checked", true);	
	}
	*/

	jQuery(".product input").first().attr("checked", true);	

	jQuery(".product input").first().parent().removeClass('jcf-unchecked').addClass('jcf-checked');

	if(window.productsFromPromoLink){
		jQuery('#selectProductsForm .title').text("Selecciona los productos que quieres contratar");
		jQuery('#selectProductsForm .btn-green > p').text("SIGUIENTE");
	} else if(window.contractFree){
		jQuery('#selectProductsForm .title').text("Selecciona los productos que quieres usar");
		jQuery('#selectProductsForm .btn-green > p').text("FINALIZAR");
	} else {
		jQuery('#selectProductsForm .title').text("Selecciona los productos que quieres probar");
		if(getConfiguration().getInformation("skipPromoForNewUsers") == "1"){
			jQuery('#selectProductsForm .btn-green > p').text("FINALIZAR");
		}
	}
	
	if(window.products && window.products.length > 0){
		preselectProducts();
	}

	if(window.productsFromPromoLink){

		if(window.promoProducts && window.promoProducts.length > 0) {
			window.products = window.promoProducts;
			
			//preselectProducts();
		} else {
			
			jQuery(".product input").prop("checked", false);
		}
		jQuery('.product input').first().prop('checked', true);
	}

	markInvalidSelectProductsForm(false);
	getSignupForm().hide(true);
	jQuery('body').css('overflow', 'hidden');
	if(jQuery('.fullscreen').is(':visible')){
		jQuery('.fullscreen').show();
        }else{
		jQuery('.fullscreen').slideDown('slow', function(){
			setTimeout(Utils.openFullSCreen, 1000);
		});
	}
	jQuery('.qtip-red').remove();
	jQuery('.error.fullscreen-item').hide();
	jQuery('#selectProductsForm').show();
	jQuery('#btn-products').show();

	Utils.showOld(true);
	jQuery('.fullscreen > div, .fullscreen .content').first().css('min-height', 800+"px");
	//jQuery('.fullscreen-bbar-text.step-info').html(getTextByKey(window.productsFromPromoLink?'anfix.login.bottom.text1.nofree' :'anfix.login.bottom.text1'));
	jQuery('.fullscreen-bbar-text.step-info').html('');
	jQuery('#btn-goback').hide();
	Utils.hideLoading();
};

function preselectProducts(){
	var len = window.products.length;

	/*
	if(jQuery.browser.msie && parseFloat(jQuery.browser.version) < 9){
		jQuery('#selectProductsForm .terms > label').addClass('ie8-nochecked');
	} else {
		jQuery('.product .terms > input').attr("checked", false);	
	}
	*/
	jQuery(".product input").attr("checked", false);

	for(var i = 0; i < len; i++){
		var className = ".product" + window.products[i];

		/*
		if(jQuery.browser.msie && parseFloat(jQuery.browser.version) < 9){
		   	jQuery('.terms > input', this).attr("checked", true);
			jQuery('#selectProductsForm '+ className +' label').removeClass('ie8-nochecked');
			jQuery('#selectProductsForm '+ className +' label').addClass('ie8-checked');
		} else {
			jQuery(className + ' .terms > input').attr("checked", true);
		}
		*/
		jQuery('.product input').prop("checked", true);
	}

	window.products = undefined;
};

function firstCheckAlwaysChecked(eventObject) {
	var res = false;
	if (!window.productsFromPromoLink && !window.contractFree) {
		if(getConfiguration().getInformation("skipPromoForNewUsers") == "1" || $(eventObject.target).attr('name')=='product5'){
			res = true;
		}
	}
	return res;
}

function onClickProduct(eventObject){
	eventObject.stopPropagation
	eventObject.stopImmediatePropagation();
	var checkbox = jQuery(eventObject.target),
		target = checkbox;

//	if (firstCheckAlwaysChecked(eventObject)) {
        if(!$('.terms #FAC').is(':checked')){
        	$('.terms #FAC').click();
    	}
        //return;
  //  }
  	if (jQuery(eventObject.target).find('input').attr('id') != 'FAC') {
  		
		if(jQuery(eventObject.target).attr('type')!= 'checkbox'){
			checkbox = checkbox.find('input');
		}
		if(!checkbox.is(':checked') && !checkbox.parent().hasClass('jcf-checked')){
			checkbox.prop('checked', true);
			checkbox.parent().removeClass('jcf-unchecked').addClass('jcf-checked');
		}else if(target.attr('type')== 'checkbox' || target.hasClass('terms')){
			checkbox.prop('checked', false);
			checkbox.parent().removeClass('jcf-checked').addClass('jcf-unchecked')
		}
  	}

    return false;
	
};

function onClickSelectProductSubmit(){
	var checks = jQuery(".product input:checked"), 
		len = checks.length,
		selectedCommercialConfigs = [];

	for(var i = 0; i < len; i++){
		if(checks[i].id !="FAC" && !window.productsFromPromoLink && !window.contractFree){
			selectedCommercialConfigs.push(jQuery(checks[i]).attr("id"));
		}else if(window.productsFromPromoLink || window.contractFree){
			selectedCommercialConfigs.push(jQuery(checks[i]).attr("id"));
		}
	}	

	if(selectedCommercialConfigs.length == 0 && !window.productsFromPromoLink && !window.contractFree){
		Utils.showLoading();
		loadPixel({
			pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
			selectedProduct:true,
			success: function(){
				var userSignup = new UserSignup();
				userSignup.followWorkflow(Constants.WF_COMPLETED);
			}
		});
		return;
	}else if(selectedCommercialConfigs.length == 0){
		markInvalidSelectProductsForm(true);		
		return;
	}

	markInvalidSelectProductsForm(false);

		Utils.saveSignupTracking({
			SignUp: {
				CustomerId: window.CustomerId,
				Step: 'H002',
				IsFPSelected: (jQuery.inArray("FPC", selectedCommercialConfigs) != -1) ? 1 : 0,
				IsCPSelected: (jQuery.inArray("aCP", selectedCommercialConfigs) != -1) ? 1 : 0,
				IsFPSSelected: (jQuery.inArray("FPS", selectedCommercialConfigs) != -1) ? 1 : 0
			}
		});
	
	Utils.showLoading();
	if(isONGorTrainingCenter()){
		 trackEvent({
       	      	origin: "TRIAL",
            	action: "FINISH",
            	label: null
        	});

        var freeSelectedCommercialConfigs =	getSelectedFreeCampaign(selectedCommercialConfigs);
		productsSubmitCreateOneStep(freeSelectedCommercialConfigs);
	} else if(window.contractFree){
		window.contractFree = false;

		var freeSelectedCommercialConfigs =	getSelectedFreeCampaign(selectedCommercialConfigs);

		productsSubmitCheckout(freeSelectedCommercialConfigs);
	} else if(window.productsFromPromoLink){
		jQuery('#selectProductsForm').hide();
		jQuery('#btn-products').hide();

		var promoSelectedCampaign = getSelectedPromoCampaign(selectedCommercialConfigs);
		loadSalesForm({campaign: promoSelectedCampaign, newUser: false});
		
		window.productsFromPromoLink = false;
		window.promoProducts = false;

	} else if(window.productsFromPromoLink){
		jQuery('#selectProductsForm').hide();
		jQuery('#btn-products').hide();

		var promoSelectedCampaign = getSelectedPromoCampaign(selectedCommercialConfigs);
		loadSalesForm({campaign: promoSelectedCampaign, newUser: false});
		
		window.productsFromPromoLink = false;
		window.promoProducts = false;
	} else {
		/*
		if(getConfiguration().getInformation("skipPromoForNewUsers") == "1"){
			var trialSelectedCommercialConfigs = getSelectedTrialCampaign(selectedCommercialConfigs);
			productsSubmitCreateOneStep(trialSelectedCommercialConfigs);
		} else {
		*/
			function callbackSuccess(data){
				//jQuery('#selectProductsForm').hide();
				//jQuery('#btn-products').hide();
				if(data.errorList){
					Utils.showPanelError(data.errorList.length, data.errorList[0].text);
					return;
				}
				loadPixel({
					pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
					selectedProduct:true,
					success: function(){
						var userSignup = new UserSignup();
						userSignup.followWorkflow (Constants.WF_COMPLETED);
					}
				});
				
			}
			var userSignup = new UserSignup();
			userSignup.contractCampaign({data:getSelectedTrialCampaign(selectedCommercialConfigs), callback : callbackSuccess});
			//loadSalesForm({comercialConfigs: selectedCommercialConfigs, newUser: true});
		//}
	}
};

function markInvalidSelectProductsForm(invalid){
	/*if(invalid){
		jQuery('#selectProductsForm').css('height', '737px');
		jQuery('#selectProductsForm .all').css('height', '722px');
		jQuery('#selectProductsForm .div-errors').show();
	} else {
		jQuery('#selectProductsForm').css('height', '624px');
		jQuery('#selectProductsForm .all').css('height', '609px');
		jQuery('#selectProductsForm .div-errors').hide();
	}*/
};

function isONGorTrainingCenter(){
	return (jQuery('#companytype').val() == '2' || jQuery('#companytype').val() == '1');
};

function productsSubmitCreateOneStep(cc) {
	var data = userRegister.getValues();
	//data.name = $('.div-fields-container input[name=EMail]').val();
	//data.surname = $('.div-fields-container input[name=EMail]').val();
	//data.password1 = $('.div-fields-container input[name=Password]').val();
	//data.email = $('.div-fields-container input[name=EMail]').val();

	data.CommercialConfigs = cc;
	Utils.setCookie("firstTime", true, null,null,'anfix.com');
	
	var userSignup = new UserSignup();
    userSignup.signupOneStep(data);
};

function productsSubmitCheckout(cc) {
	var proxy = new Proxy();
	proxy.getOrganizationData({
		failure: function(errorList){
			jQuery('#selectProductsForm .div-errors .paragraph').empty();
			jQuery('#selectProductsForm .div-errors .paragraph').append('<div> ' + errorList[0].text + ' </div>');
			markInvalidSalesForm(true);
		},
		success: function(data){
			data.CommercialConfigs = cc;
			data.success = onSuccessSalesGetOrganizationData;

			var userSignup = new UserSignup();
   			userSignup.checkout(data, "selectProductsForm");
		}
	});
};

function getSelectedPromoCampaign(data){
	var listProducts = [['FPC'], ['FPS'],['aCP'],['FPS','FPC'],['FPC','aCP'], ['FPS','aCP'],['FPC','FPS','aCP'],['FAC'],['FPC','FAC'],['FPS','FAC'],['aCP','FAC'],['FPS','FPC','FAC'],['FPC','aCP','FAC'],['FPS','aCP','FAC'],['FPS','FPC','aCP','FAC']];
	var listCampaigns = ['FPC50T','FPS50T','CP50T','FPCFPS50T','FPCCP50T','FPSCP50T','FCFPSCP50T','FAC50T','STKFAC50T','PRYFAC50T','CIFAC50T','SKPRFAC50T','SKCIFAC50T','PRCIFAC50T','STPRCFA50T'];
	var urlVars = getUrlVars();

	if(urlVars.promo=='f'){
		listCampaigns = ['FPC15T','FPS15T','CP15T','FPCFPS15T','FPCCP15T','FPSCP15T','FCFPSCP15T','FAC15T','STKFAC15T','PRYFAC15T','CIFAC15T','SKPRFAC15T','SKCIFAC15T','PRCIFAC15T','STPRCFA15T'];
	}else if(urlVars.promo=='u'){
		listCampaigns = ['FPC30T','FPS30T','CP30T','FPCFPS30T','FPCCP30T','FPSCP30T','FCFPSCP30T','FAC30T','STKFAC30T','PRYFAC30T','CIFAC30T','SKPRFAC30T','SKCIFAC30T','PRCIFAC30T','STPRCFA30T'];
	}
	var discountCampaigns = {};
	for(var index = 0; index < listProducts.length ; index ++){
		discountCampaigns[listCampaigns[index]]=listProducts[index];
	}
	
	var match;

	jQuery.each(discountCampaigns, function( key, value ) {
		if(jQuery.compare(data, value)){
			match = key;	
		}
	});

	return match;
};

function getSelectedFreeCampaign(comercialConfigs){
	var selected;

	var DEFAULT_campaign = "Q",
		COMERCIO_FREE_cc = "M",
		SERVICIOS_FREE_cc = "L",
		CONTAPRO_FREE_cc = "N",
		FACTURACION_FREE_cc = "6w";

 	var cc; 
	var discountCampaigns = {
		'1'	: ['FPC'],
		'2'	: ['FPS'],
		'3'	: ['aCP'],
		'4'	: ['FPS','FPC'],
		'5'	: ['FPC','aCP'],
		'6'	: ['FPS','aCP'],
		'7'	: ['FPS','FPC','aCP'],
		'8'	: ['FAC'],
		'9'	: ['FPC','FAC'],
		'10'	: ['FPS','FAC'],
		'11'	: ['aCP','FAC'],
		'12'	: ['FPS','FPC','FAC'],
		'13'	: ['FPC','aCP','FAC'],
		'14'	: ['FPS','aCP','FAC'],
		'15'	: ['FPS','FPC','aCP','FAC']
	};

	jQuery.each(discountCampaigns, function( key, value ) {
		if(jQuery.compare(comercialConfigs,value)){
			cc = key;	
		}
	});

	var freeCampaigns = {
		'1' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'2'	: [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'3' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'4' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'5' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'6' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'7' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'8' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],	
		'9' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'10' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'11' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'12' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'13' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'14' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'15' : [
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_FREE_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_FREE_cc, "ShCtCommConfigForceCommercialConfig": true}]
	};

	return freeCampaigns[cc];
};


function getSelectedTrialCampaign(comercialConfigs){
	var selected;

	var DEFAULT_campaign = "m",
		COMERCIO_TRIAL_cc = "8",
		SERVICIOS_TRIAL_cc = "9",
		CONTAPRO_TRIAL_cc = "k",
		FACTURACION_TRIAL_cc = "6x";

 	var cc; 
	var discountCampaigns = {
		'1'	: ['FPC'],
		'2'	: ['FPS'],
		'3'	: ['aCP'],
		'4'	: ['FPS','FPC'],
		'5'	: ['FPC','aCP'],
		'6'	: ['FPS','aCP'],
		'7'	: ['FPS','FPC','aCP'],
		'8'	: ['FAC'],
		'9'	: ['FPC','FAC'],
		'10'	: ['FPS','FAC'],
		'11'	: ['aCP','FAC'],
		'12'	: ['FPS','FPC','FAC'],
		'13'	: ['FPC','aCP','FAC'],
		'14'	: ['FPS','aCP','FAC'],
		'15'	: ['FPS','FPC','aCP','FAC']
	};

	jQuery.each(discountCampaigns, function( key, value ) {
		if(jQuery.compare(comercialConfigs,value)){
			cc = key;	
		}
	});

	var trialCampaigns = {
		'1' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'2'	: [
			{"Action": "ADD","ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'3' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'4' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'5' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'6' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'7' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'8' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],	
		'9' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'10' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'11' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'12' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'13' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'14' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}],
		'15' : [
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : SERVICIOS_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : COMERCIO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : CONTAPRO_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true},
			{"Action": "ADD" ,"ShCtCommConfigCampaignId": DEFAULT_campaign, "ShCtCommConfigCommercialConfigId" : FACTURACION_TRIAL_cc, "ShCtCommConfigForceCommercialConfig": true}]
	};

	return trialCampaigns[cc];
};
/**
 * Documento Confidencial.
 *
 * @file enterpriseData.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date October, 2015
 * @brief Parent with common methods
 */


/*GLOBAL VARIABLES*/
var enterpriseData=null;

/**GLOBAL FUNCTIONS*/
function getEnterpriseDataForm(){
	if(jQuery.isEmptyObject(enterpriseData)){
		enterpriseData= new EnterpriseDataForm();
	}
	return enterpriseData;
}

/**CLASS*/
var EnterpriseDataForm = function(){
	this.proxy = new Proxy();
	this.userSignUp = new UserSignup();
};
EnterpriseDataForm.prototype = {
	id : "#enterpriseForm",

	data: null,

	companyId:null,

	setUp: function(){
		this.addListenersTo();
	},

	getValues: function(){
		var values={};
		jQuery(this.id+" input").each(function(index){
			values[this.name] = jQuery.trim(jQuery(this).val());
        });
        return values;
	},

	setDisabledSumbitButton: function(disabled){
		jQuery(this.id+' .div-signup-button .btn-green').attr('disabled', disabled);
		jQuery(this.id+' .div-signup-button .btn-green')[disabled?'addClass':'removeClass']('btn-disabled');
	},

	show: function(options){
		var options = options || {};
		options.extended = true;
		Utils.show(options, this);
		jQuery('.logo-ok').addClass('logo').removeClass('logo-ok');
    jQuery('.fullscreen .title').html(getTextByKey('enterprise.title'));
    jQuery('.fullscreen .subtitle').html(getTextByKey('enterprise.subtitle'));
		this.companyId = options.companyId;
	},

	hide: function(nohideFullScreen){
		Utils.hide({nohideFullScreen:nohideFullScreen}, this);
	},

	reset: function(){
		jQuery(this.id+' input').val('');
	},

	validate: function(){
		var values = this.getValues();
		if(!values.CorporateName) {
			Utils.markInvalidField(this.id,"CorporateName", false,getTextByKey('enterprise.error.corporatename'));
			return;
        }
        Utils.markValidField(this.id,"CorporateName");

        return true;
	},

	submit:function(eventObject){
		var me = eventObject ?eventObject.data.scope:this;
		if(me.validate()){
			Utils.showLoading();
			if(jQuery.isEmptyObject(me.data)){
				//value is not selected
				me.data = {};
				me.data.CompanyId = me.companyId;
				me.data.CompanyCorporateName = me.getValues().CorporateName;
				me.data.success = function(data){
					me.hide(true);
					me.userSignUp.saveOrUpdateStepInfo({
						step: 4,
						information: me.data,
						email: getSignupForm().getValues().EMail,
						callback: function(){
							Utils.hideLoading();
							getAccountingEnterpriseForm().show();
						}
					});

				};
				me.data.CompanyPhone = getSignupForm().getValues().Phone || me.data.CompanyPhone;
				me.proxy.updateCompany(me.data);
			}else{
				//value is selected from dropdown
				me.data.CompanyId = me.companyId;
				me.proxy.searchProfileEInforma({
					DocumentNumber: me.data.CompanyIdentificationNumber,
					CompanyId:me.companyId,
					success: function(data){
						if(data.errorList){
							Utils.hideLoading();
							Utils.showPanelError(data.errorList.length, data.errorList[0].text);
							return false;
						}

						if(data.outputData.CompanyProfile){
							jQuery.extend(me.data,data.outputData.CompanyProfile, {
								success: function(data){
									me.userSignUp.saveOrUpdateStepInfo({
										step: 4,
										information: me.data,
										email: getSignupForm().getValues().EMail,
										callback: function(){
											Utils.hideLoading();
											me.hide(true);
											getAccountingEnterpriseForm().show();
										}
									});

								}
							});

							if(!jQuery.isEmptyObject(me.data.CompanyCNAE)){
								me.proxy.searchCnae({
									CompanyId :me.companyId,
									Cnae:me.data.CompanyCNAE,
									success: function(data){
										jQuery.each(data, function (i, cnae) {
											if(cnae.CnaeCode==me.data.CompanyCNAE){
												me.data.CompanyCnaeId= cnae.CnaeId;
												return false;
											}
										});
										me.data.CompanyPhone = getSignupForm().getValues().Phone || me.data.CompanyPhone;
										me.proxy.updateCompany(me.data);
									}
								});
							}else{
								 me.data.CompanyPhone = getSignupForm().getValues().Phone || me.data.CompanyPhone;
								me.proxy.updateCompany(me.data);
							}
						}
					},
				 	error: function(data) {
		                console.error(data);
		            }
				});
			}
			//getRegisterEmailForm().show({reset:true});
		}
	},

	addListenersTo: function(){
		var me = this;
		jQuery(me.id+' .btn-green').on('click', {scope: me},me.submit);
		jQuery(me.id+' input').keypress(function (event) {
			var key = event.keyCode;
			if(key == 13){
				event.preventDefault();
				event.stopPropagation();
				if(me.isClosed === true){
					me.submit();
				}
				return;
			}
			me.data = null;
			me.validate();

		});

		jQuery(me.id+' input').paginatedAutocomplete({
		    source: function( request, response ) {
		    	var self = this;
		    	me.proxy.searchEInforma({
		    		text:jQuery(me.id+' input').val(),
		    		MinRowNumber: (50*self._pageIndex +1),
		    		success:  function(data) {
		    			self._totalItems = data.outputData.TotalRowNumber;
		    			if(data.outputData.CompanySearch){
			                response( jQuery.map( data.outputData.CompanySearch, function(item) {
			                    return {
			                    	data: item,
			                    	label: item.CompanyCommercialName+" <i>"+item.CompanyProvinceName+"</i>",
			                    	value: item.CompanyCommercialName,
			                    	text: jQuery(me.id+' input').val()
			                    }
			                }));
		            	}
		            },
		            error: function(data) {
		                console.error(data);
		            }
		    	});
		    },
		    minLength: 3,
		    pageSize:50,
		    open: function() {me.isClosed= false;},
		    close: function() {me.isClosed = true;},
		    focus: function(event,ui) {},
		   	select : function(e,selectedItem){
				me.data = selectedItem.item.data;
			}
		});
	}

};
/**
 * Documento Confidencial.
 *
 * @file companyType.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date February, 2015
 * @brief js for open company type selection.
 */


/*GLOBAL VARIABLES*/
companyTypeForm = null;

/**GLOBAL FUNCTIONS*/
function getCompanyTypeForm() {
	if(jQuery.isEmptyObject(companyTypeForm)){
		companyTypeForm= new CompanyType();
	}
	return companyTypeForm;
};


/**CLASS*/
var CompanyType = function(){
	this.userSignUp = new UserSignup();
	this.proxy = new Proxy();
};
CompanyType.prototype = {
	id: '#companyTypeForm',

	companyTypeValue : null,

	setUp: function(){
		this.addListenersTo();
	},

	setDisabledSumbitButton: function(disabled){
		jQuery('#btn-company-type').attr('disabled', disabled);
	},

	getValues: function(){
		return getSignUpForm().getValues();
	},

	show: function(options){
		Utils.show(options, this);
    jQuery('.logo').addClass('logo-ok').removeClass('logo');
    jQuery('.fullscreen .title').html(getTextByKey('company.type.title'));
    jQuery('.fullscreen .subtitle').html(getTextByKey('company.type.subtitle'));
	},

	hide: function(nohideFullScreen){
		if(!nohideFullScreen){
			jQuery(".fullscreen").slideUp('slow');
       		jQuery(this.id).slideUp('slow');
        }else{
        	jQuery(this.id).hide();
        }
        jQuery('#btn-company-type').hide();
		$(document.body).attr('style','overflow: auto;');
	},

	reset: function(){
		jQuery(this.id+ ' > div').removeClass('type-active');
		jQuery(this.id+ ' > div').first().addClass('type-active');
	},

	submit: function(event){
		var me = event? event.data.scope :this;
		var values = getSignupForm().getValues();
		values.companyType = jQuery(me.id+' div.type-active').attr('data-value');
		Utils.hidePanelError();

		function callback(data){
			Utils.hideLoading();
			if(data.errorList){
				Utils.showPanelError(data.errorList.length, data.errorList[0].text);
				return;
			}
			me.hide(true);
			trackFb('CompleteRegistration');
			trackEvent({origin:'TRIAL', action: 'FINISH'});
			me.proxy.logger("El email "+values.EMail+" se ha dado de alta");
			Utils.setCookie("firstTime", true, null,null,'anfix.com');
			var companyId = null;
			if(data.outputData){
				var accessCode =data.outputData.User.accessCode;
				Utils.setCookie("accessCode", accessCode, null,null,'anfix.com');
				var userLoginId = data.outputData.User.UserLoginId;
				if(userLoginId){
	    			Utils.setCookie("userLoginId", userLoginId, null,null,'anfix.com');
				}
				companyId= data.outputData.User.Organization.Company.CompanyId;
			}
			var cc = Utils.getCookie("linkCampaign");
			if (!cc){
				loadPixel({
					isFreelanceTrial : values.companyType==Utils.SELF_EMPLOYED,
					isPYMETrial:values.companyType==Utils.SME,
					success:function(){
						if(values.companyType==Utils.SME){
							getEnterpriseDataForm().show({reset:true, companyId:companyId});
						}else if (values.companyType==Utils.SELF_EMPLOYED){
							getFreelanceForm().show({reset:true, companyId:companyId});
						}
					}
				});
			}else if(!cc && window.products){
				loadPixel({
					isFreelanceTrial : values.companyType==Utils.SELF_EMPLOYED,
					isPYMETrial:values.companyType==Utils.SME,
					success:loadSelectProductsForm
				});
			}else {
				loadPixel({
					isFreelanceTrial : values.companyType==Utils.SELF_EMPLOYED,
					isPYMETrial:values.companyType==Utils.SME,
					success:function(){
						loadSalesForm({campaign:cc, newUser:true});
					}
				});

			}
		};
		values.success= callback;
		this.companyTypeValue = values.companyType;
		if(values.companyType==Utils.SELF_EMPLOYED || values.companyType==Utils.SME){
			var urlVars = getDataFromUrl();
			var cc=Utils.getCookie('linkCampaign');
			if(cc){
				searchDiscountCampaigns({
					newUser:false || getDataFromUrl() && getDataFromUrl().register,
					campaign:cc,
					success:function(data){
						me.hide();
						if(campaingType !="BASIC"){
							window.selectedCampaign = data.outputData.Campaign;
							if(data.outputData.Campaign && data.outputData.Campaign[0].CampaignHTML){
								loadSalesForm({campaign:cc, newUser:false || getDataFromUrl() && getDataFromUrl().register});
							}else{
								onClickDiscountCommercialConfig([{
									ShCtCommConfigCampaignId:data.outputData.Campaign[0].CampaignId,
									ShCtCommConfigCommercialConfigId:data.outputData.Campaign[0].CommercialConfigId
								}]);
							}
						}else{
							values.success= function(data){

								if(data.errorList){
									Utils.hideLoading();
									Utils.showPanelError(data.errorList.length, data.errorList[0].text);
									return;
								}
								//me.hide(true);
								trackFb('CompleteRegistration');
								trackEvent({origin:'TRIAL', action: 'FINISH'});
								me.proxy.logger("El email "+values.EMail+" se ha dado de alta");
								Utils.setCookie("firstTime", true, null,null,'anfix.com');
								if(data.outputData){
									var accessCode =data.outputData.User.accessCode;
									Utils.setCookie("accessCode", accessCode, null,null,'anfix.com');
									var userLoginId = data.outputData.User.UserLoginId;
									if(userLoginId){
						    			Utils.setCookie("userLoginId", userLoginId, null,null,'anfix.com');
									}
								}
								loadPixel({
									isFreelanceTrial : values.companyType==Utils.SELF_EMPLOYED,
									isPYMETrial:values.companyType==Utils.SME,
									success: function(){
										me.userSignUp.followWorkflow(Constants.WF_COMPLETED);
									}
								});
							}
							Utils.showLoading();
							me.userSignUp.signupProfit(values);
						}
					}
				});
				return;
			}
			if (!urlVars || (urlVars && !urlVars.register)) {
				Utils.showLoading();
				me.userSignUp.signupProfit(values);
			}else{
				me.hide(true);
				var cc = Utils.getCookie("linkCampaign");
				loadSalesForm({values: values, campaign:cc, newUser:true});
			}
			me.userSignUp.saveOrUpdateStepInfo({
				step: 3,
				information: {companyType: values.companyType},
				email: getSignupForm().getValues().EMail
			});
		}else{
			me.hide(true);
			me.userSignUp.saveOrUpdateStepInfo({
				step: 3,
				information: {companyType: values.companyType},
				email: getSignupForm().getValues().EMail
			});
			getAdvisorForm().show({reset:true, email: getSignupForm().getValues().EMail, phone: getSignupForm().getValues().Phone});
		}
	},

	addListenersTo: function(){
		var me = this;

		jQuery(this.id+' > div').bind('click', function(){
			jQuery(me.id+' > div').removeClass('type-active');
			jQuery(this).addClass('type-active');
			me.submit.call(me);
		});
		jQuery('#btn-company-type').on('click', {scope: me},me.submit);
		jQuery('.fullscreen .error-container .btn-close').on('click', {scope: me},function(){
			jQuery('.fullscreen .error-container').removeClass('open');
		});
		jQuery('.error.fullscreen-item').on('click', {scope: me},function(){
			jQuery('.fullscreen .error-container').addClass('open');
		});

		/*jQuery(this.id+ ' div').not(':first').on( "mouseenter", function(){
			jQuery(me.id+' div').first().removeClass('type-active');
		});
		jQuery(this.id+ ' div').not(':first').on( "mouseleave", function(){
			if(jQuery(me.id +' .type-active').length==0){
				jQuery(me.id+' div').first().addClass('type-active');
			}
		});*/
	}

};
/**
 * Documento Confidencial.
 * 
 * @file companyType.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date February, 2015
 * @brief js for open company type selection.
 */


/*GLOBAL VARIABLES*/
accountingEnterpriseForm = null;

/**GLOBAL FUNCTIONS*/
function getAccountingEnterpriseForm() {
	if(jQuery.isEmptyObject(accountingEnterpriseForm)){
		accountingEnterpriseForm= new AccountingEnterprise();
	}
	return accountingEnterpriseForm;
};


/**CLASS*/
var AccountingEnterprise = function(){
	this.userSignup = new UserSignup();
	this.proxy = new Proxy();
};
AccountingEnterprise.prototype = {
	id: '#accountingEnterpriseForm',

	companyTypeValue : null,

	setUp: function(){
		this.addListenersTo();
	},

	setDisabledSumbitButton: function(disabled){
		jQuery('#btn-company-type').attr('disabled', disabled);
	},

	getValues: function(){
		return getSignUpForm().getValues();
	},

	show: function(options){
		var options = options || {};
		options.extended = true;
		Utils.show(options, this);
		jQuery('.logo').addClass('question').removeClass('.logo');
    jQuery('.fullscreen .title').html(getTextByKey('enterprise.accounting.title'));
    jQuery('.fullscreen .subtitle').html(getTextByKey('enterprise.accounting.subtitle'));
	},

	hide: function(nohideFullScreen){
		if(!nohideFullScreen){
			jQuery(".fullscreen").slideUp('slow');
       		jQuery(this.id).slideUp('slow');
        }else{
        	jQuery(this.id).hide();
        }
        jQuery('#btn-company-type').hide();
		$(document.body).attr('style','overflow: auto;');
	},

	reset: function(){
		jQuery(this.id+ ' > div').removeClass('type-active');
		jQuery(this.id+ ' > div').first().addClass('type-active');
	},

	submit: function(event){
		var me = event? event.data.scope :this;
		var values = getSignupForm().getValues();
		values.companyType = jQuery(me.id+' div.type-active').attr('data-value');
		Utils.hidePanelError();

		var DEFAULT_campaign = "m",
			COMERCIO_TRIAL_cc = "8",
			SERVICIOS_TRIAL_cc = "9",
			CONTAPRO_TRIAL_cc = "k",
			FACTURACION_TRIAL_cc = "6x";

		Utils.showLoading();

		var campaignCode = 'PEMT';
		var info = getInformationStepArray().Info;
	 	if(info[0].partner && campaignsByPartnerConta[info[0].partner]){
	 		campaignCode = campaignsByPartnerConta[info[0].partner];
	 	}


		if(values.companyType==Utils.SME){
			//contract contabilidad
			me.userSignup.contractCampaign({
				data:{
					CampaignCode: campaignCode,
					CompanyId: getEnterpriseDataForm().companyId
				}, 
				callback : function callbackSuccess(data){
					if(data.errorList){
						Utils.hideLoading();
						Utils.showPanelError(data.errorList.length, data.errorList[0].text);
						return;
					}
					loadPixel({
						pixelsType: Constants.LOGIN_TARGETPIXEL_PAYMENT,
						selectedProduct:true,
						success: function(){
							me.userSignup.saveOrUpdateStepInfo({
								step: 5,
								information: data,
								email: getSignupForm().getValues().EMail,
								callback: function(){
									Utils.goHome(true);		
								}
							});
							
						}
					});
				}
			});
		}else{
			me.userSignup.saveOrUpdateStepInfo({
				step: 5,
				information: getSignupForm().getValues().EMail,
				email: getSignupForm().getValues().EMail,
				callback: function(){
					me.hide(true);
					Utils.goHome(true);		
				}
			});
					
		}
	},

	addListenersTo: function(){
		var me = this;
			
		jQuery(this.id+' > div').bind('click', function(){
			jQuery(me.id+' > div').removeClass('type-active');
			jQuery(this).addClass('type-active');
			me.submit.call(me);
		});
	}
	
};

   
/*GLOBAL VARIABLES*/
var salesForm=null;

/**GLOBAL FUNCTIONS*/
function getSalesForm(){
	if(jQuery.isEmptyObject(salesForm)){
		salesForm = new SalesForm();
	}
	return salesForm;
};

/**CLASS*/
var SalesForm = function(){
	
};

SalesForm.prototype = {
	id: '#salesForm',

	show: function(options){
		jQuery('body').css('overflow', 'hidden');
        if(jQuery('.fullscreen').is(':visible')){
               jQuery('.fullscreen').show();
        }else{
            jQuery('.fullscreen').slideDown('slow',function(){
				setTimeout(Utils.openFullSCreen, 1000);
			});
        }
		/*jQuery('.fullscreen').slideDown('slow');*/
        jQuery(this.id).show();
		if(options && options.reset){
        		this.reset();
       		}	

 		$('#bottomInfo').css("display","block");

      	jQuery('.fullscreen-bbar-text.step-info').html(getTextByKey('anfix.login.bottom.text0'));
      	jQuery('.fullscreen > div').first().css('min-height', "954px");
      	Utils.showOld(true);
		
	},

	hide:function(nohideFullScreen){
		if(!nohideFullScreen){
			jQuery(".fullscreen").slideUp('slow');
       		jQuery(this.id).slideUp('slow');
        }else{
        	jQuery(this.id).hide();
        }
        $(document.body).attr('style','overflow: auto;');
	},

	setValues: function(data){
		this.data = data;
	},

	getValues: function(){
		return this.data;
	}


}

jQuery(document).ready(function() {
	jQuery('#salesSubmit').on('click', onClickSalesSubmit);

});

function loadSalesForm(obj){

	getSalesForm().show();

	getSalesForm().setValues(obj.values);

	var selected;

	if(obj.comercialConfigs){
		jQuery('#salesSubmit').show();
		selected = getSelectedDiscountCampaign(obj.comercialConfigs);

	} else if(obj.campaign){
		jQuery('#salesSubmit').hide();
		selected = obj.campaign;
	}
	
	markInvalidSalesForm(false);

	searchDiscountCampaigns({
		campaign : selected,
		newUser : obj.newUser,
		success : onSuccessGetDiscountCampaign
	});
};

function getSelectedDiscountCampaign(comercialConfigs){
	var selected;
	var listProducts = [['FPC'], ['FPS'],['aCP'],['FPS','FPC'],['FPC','aCP'], ['FPS','aCP'],['FPC','FPS','aCP']];
	var listCampaigns = ['FPC50','FPS50','CP50','FPCFPS50','FPCCP50','FPSCP50','FPCFPSCP50'];
	var urlVars = getDataFromUrl();

	if(urlVars.promo=='f'){
		listCampaigns = ['FPC15','FPS15','CP15','FPCFPS15','FPCCP15','FPSCP15','FPCFPSCP15'];
	}
	var discountCampaigns = {};
	for(var index = 0; index < listProducts.length ; index ++){
		discountCampaigns[listCampaigns[index]]=listProducts[index];
	}

	jQuery.each(discountCampaigns, function( key, value ) {
		if(jQuery.compare(comercialConfigs,value)){
			selected = key;	
		}
	});

	return selected;
};

function searchDiscountCampaigns(obj){
	var	objectToJsonString = {
		inputBusinessData: {
			Campaign: {
				Filters: [{
					CampaignCode: obj.campaign
				},{
					CampaignOnlyNewUsers: obj.newUser ? true : false
				}]
			}
		}
	};

	jQuery.ajax({
		type: "POST",
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(objectToJsonString),
		url: Utils.getUrl(Constants.CAMPAIGN_SERVICE_SEARCH),
		success: obj.success,
		error: function(jqXHR, textStatus, errorThrown){
			Utils.hideLoading();
		}
	});
};

function getDiscountCampaignsCode(obj){
	var	objectToJsonString = {
		Conta: getDataFromUrl().conta? true : false,
		Services: getDataFromUrl().services? true : false,
		Stock: getDataFromUrl().stock? true : false
	};

	var url =  'http://'+Constants.WEB+Constants.GET_CC; 
	jQuery.ajax({
		type: "POST",
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(objectToJsonString),
		url: url,
		success: obj.success,
		error: function(jqXHR, textStatus, errorThrown){
			Utils.hideLoading();
		}
	});
};

function onSuccessGetDiscountCampaign(data){
	if(data.outputData 
		&& data.outputData.Campaign
		&& data.outputData.Campaign.length > 0){

		var campaignHtml = data.outputData.Campaign[0].CampaignHTML;

		if(!campaignHtml){
			getSalesForm().hide(false);
			window.selectedCampaign = data.outputData.Campaign;
			onClickDiscountCommercialConfig([{
				ShCtCommConfigCampaignId:data.outputData.Campaign[0].CampaignId,
				ShCtCommConfigCommercialConfigId:data.outputData.Campaign[0].CommercialConfigId
			}]);

		}

		jQuery('#salesForm').empty();
		jQuery('#salesForm').append(campaignHtml);
		
		window.selectedCampaign = data.outputData.Campaign;
	}

	Utils.hideLoading();
};

function markInvalidSalesForm(invalid){
	if(invalid){
		jQuery('#salesForm').css('height', '660px');
		jQuery('#salesForm .left').css('height', '660px');
		jQuery('#salesForm .div-errors').show();

		Utils.hideLoading();
	} else {
		jQuery('#salesForm').css('height', '557px');
		jQuery('#salesForm .left').css('height', '557px');
		jQuery('#salesForm .div-errors').hide();
	}
};

function onClickDiscountCommercialConfig(configs){
	Utils.showLoading();

	configs = getConfigsFullData(configs);

	setAvanza(configs.specType == Constants.COMMERCIAL_PROPERTY_SPEC_TYPE_SILVER);
	setPremium(configs.specType == Constants.COMMERCIAL_PROPERTY_SPEC_TYPE_GOLD);

	Utils.saveSignupTracking({
		SignUp: {
			CustomerId: window.CustomerId,
			Step: 'H003',
			IsSilver: (configs.specType == Constants.COMMERCIAL_PROPERTY_SPEC_TYPE_SILVER) ? 1 : 0,
			IsGold: (configs.specType == Constants.COMMERCIAL_PROPERTY_SPEC_TYPE_GOLD) ? 1 : 0
		}
	});

	jQuery('#salesForm').hide();	
	if(!Utils.isMobile() || getDataFromUrl().promo){
		getPaymentForm().loadData(configs);
		getPaymentForm().show({reset:true});
	}else {
		getPaymentByMobileForm().loadData(configs);
		getPaymentByMobileForm().show({reset:true});
	}

	Utils.hideLoading();
};

function getConfigsFullData(configs){
	var configsLen = configs.length,
		campaignLen = window.selectedCampaign.length;

	var result = {
		base: 0.00,
		baseWithoutDiscount: 0.00,
		specType: "0",
		dataToSend: [],
		content: []
	};

	var configDetails = [], frequencyType = null;
	for(var i = 0; i < configsLen; i++){
		var config = configs[i],
			details = {
				base: 0.00,
				baseWithoutDiscount: 0.00,
				discount: 0.00,
				content: []
			};

		result.dataToSend.push(config);

		for(var j = 0; j < campaignLen; j++){
			var campaignLine = window.selectedCampaign[j];

			if(config.ShCtCommConfigCampaignId == campaignLine.CampaignId 
					&& config.ShCtCommConfigCommercialConfigId == campaignLine.CommercialConfigId){

				if(campaignLine.CommercialPropertyId == Constants.COMMERCIAL_PROPERTY_PRICE){
					details.baseWithoutDiscount = parseFloat(campaignLine.CommercialPropertyValue);
					details.productName = campaignLine.CommercialConfigName;
				}

				frequencyType = campaignLine.CommercialConfigFrecuencyName

				if(campaignLine.CommercialPropertyId == Constants.COMMERCIAL_PROPERTY_DETAIL
						&& details.content.length == 0){

					var detail = campaignLine.CommercialPropertyValue;
					detail = detail.split(";");

					if(result.specType == "0"){
						result.specType = campaignLine.CommercialConfigSpecTypeId;	
					}
					
					details.discount = parseInt(detail[0]);

					var detailLen = detail.length;
					for(var k = 1; k < detailLen; k++){
						var product = detail[k].split("|");

						var productName = "";
						if(product[0] == Constants.PRODUCTID_FACTURAPRO_COMERCIO){
							productName = "Stock";
						} else if(product[0] == Constants.PRODUCTID_FACTURAPRO_SERVICIOS){
							productName = "Proyectos";
						} else if(product[0] == Constants.PRODUCTID_CONTAPRO){
							productName = "Contabilidad";
						} else if(product[0] == Constants.PRODUCTID_FACTURACION){
							productName = "Facturación";
						} else {
							productName = product[0];
						}

						var contentConfig = {
							name : productName,
							price : parseFloat(product[1])
						};

						details.content.push(contentConfig);
					}
				}
			}
		}

		if(details.content.length == 0){
			details.content.push({
				name : details.productName,
				price : details.baseWithoutDiscount
			});
		}

		if(details.discount > 0){
			details.content.push({
				name: "Descuento " + details.discount + "%",
				price: Utils.roundNumber(-(details.baseWithoutDiscount * Utils.roundNumber((1 - ((100 - details.discount)/100))))),
				isDiscount: true
			});

			details.base = Utils.roundNumber((details.baseWithoutDiscount * Utils.roundNumber((1 - (details.discount/100)))));
		} else {
			details.base = details.baseWithoutDiscount; 
		}

		configDetails.push(details);
	}

	var detailsLen = configDetails.length;
	for(var i = 0; i < detailsLen; i++){
		result.base += configDetails[i].base;
		result.baseWithoutDiscount += configDetails[i].baseWithoutDiscount
		result.content = result.content.concat(configDetails[i].content);
		result.frequencyType= frequencyType
	}
	
	return result;
};

function onClickSalesSubmit(){
	Utils.showLoading();

	Utils.saveSignupTracking({
		SignUp: {
			CustomerId: window.CustomerId,
			Step: 'H003',
			IsSilver: 0,  
			IsGold: 0 
		}
	});

	if(!Utils.isRegisteredUser()){
		salesRegisterNewUser();
	} else {
		salesUpdateExistingUser();
	}
};

function salesRegisterNewUser(data){
	//var data = userRegister.getValues();
	var data = getSignupForm().getValues();

	data.CommercialConfigs = salesGetCommercialConfigs();
	data.success = onSuccessSalesSignUp;

	var userSignup = new UserSignup();
    userSignup.signupProfit(data);
};

function salesRegisterNewUserWithCC(){
	Utils.showLoading();
	var data = userRegister.getValues();
	var urlVars = getDataFromUrl();

	if(urlVars.cc){
		data.campaignCode = urlVars.cc;
		data.success = onSuccessSalesSignUp;

		var userSignup = new UserSignup();
	    userSignup.signupOneStep(data);
	}
};

function salesUpdateExistingUser(){
	var proxy = new Proxy();
	proxy.getOrganizationData({
		failure: function(errorList){
			jQuery('#salesForm .div-errors .paragraph').empty();
			jQuery('#salesForm .div-errors .paragraph').append('<div> ' + errorList[0].text + ' </div>');
			markInvalidSalesForm(true);
		},
		success: function(data){
			data.CommercialConfigs = salesGetCommercialConfigs();
			data.success = onSuccessSalesGetOrganizationData;

			var userSignup = new UserSignup();
   			userSignup.checkout(data, "salesForm");
		}
	});
};

function onSuccessSalesGetOrganizationData(data){
	if(data.errorList){
		jQuery('#salesForm .div-errors .paragraph').empty();
		jQuery('#salesForm .div-errors .paragraph').append('<div> ' + data.errorList[0].text + ' </div>');
		markInvalidSalesForm(true);

		return;
	} else {
		loadPixel({
			pixelsType: Constants.LOGIN_TARGETPIXEL_TRIAL,
			success: salesGoToDesktop
		});
	}
};

function onSuccessSalesSignUp(data){
	if(data.errorList){
		jQuery('#salesForm .div-errors .paragraph').empty();
		jQuery('#salesForm .div-errors .paragraph').append('<div> ' + data.errorList[0].text + ' </div>');
		markInvalidSalesForm(true);

		return;
	} else {
		var userLoginId = data.outputData.User.UserLoginId,
			accessCode = data.outputData.User.accessCode;

		if(userLoginId){
			Utils.setCookieNoSecure("userLoginId", userLoginId, null,null,'anfix.com');
		}		
		
		Utils.setCookieNoSecure("accessCode", accessCode, null,null,'anfix.com');
		
		if (jQuery('#companytype').val() != Constants.TYPE_FREELANCE && jQuery('#companytype').val() != Constants.TYPE_PYME && jQuery('#companytype').val()!=Constants.TYPE_PROFESSIONAL_OFFICE) {	
			window.organization = data.outputData.User.Organization;
			salesUploadFileAfterSignUp();
		
		} else {
			loadPixel({
				pixelsType: Constants.LOGIN_TARGETPIXEL_TRIAL,
				success: salesGoToDesktop
			});
			Utils.hideLoading();
		}
	}
};

function salesUploadFileAfterSignUp() {
	
	//if(!(jQuery('#file').val() && jQuery('#file').val()!='') || jQuery.browser.msie){
	if(!(jQuery('#file').val() && jQuery('#file').val()!='')){
		Utils.setCookie("firstTime", true, null,null,'anfix.com');
		if(window.registerFromiPad){
			document.location  = Utils.getIpadReturnUrl(userRegister.getValues());
		} else {
			document.location  = Utils.getUrl(Constants.HOME,true);
		}
		return;
	}

	var data = new FormData();                   
	jQuery.each(jQuery('#file')[0].files, function(i, file) {
    	data.append('upload', file);
	});

	data.append('accessCode', Utils.getCookie('accessCode'));
	
	jQuery.ajax({
		type: "POST",
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		url: Utils.getUrl(Constants.MEDIA,true),
		success: salesSuccessUploadFile,
		failure: salesFailure
	});
			
};

function salesSuccessUploadFile(data, options){
	if(data.errorList){
		jQuery('#salesForm .div-errors .paragraph').empty();
		jQuery('#salesForm .div-errors .paragraph').append('<div> ' + data.errorList[0].text + ' </div>');
		markInvalidSalesForm(true);

		return;
	};

	var response = JSON.parse(data),
		fileName, uid;
	
	fileName = response.outputData.Media[0].Name;
	uid = response.outputData.Media[0].UID;
	
	salesUpdateOrganizationWithUploadFile({UID: uid, Name: fileName});
};

function salesUpdateOrganizationWithUploadFile(fileData){

	var objectToJsonString = {
		inputBusinessData: {
			Organization: {
				OrganizationId: window.organization.OrganizationId,
				Media: {
					Action	: "ADD",
                	UID		: fileData.UID,
                	Name	: fileData.Name
				}
			}
		},
		applicationId: "1",
		accessCode: Utils.getCookie('accessCode')
	};

	jQuery.ajax({
		type: "POST",
		dataType: 'json',
		data: JSON.stringify(objectToJsonString),
		contentType: 'application/json',
		url: Utils.getUrl(Constants.ORGANIZATION_SERVICE_UPDATE,true),
		success: function(data, textStatus, jqXHR){
			if(data.errorList){
				jQuery('#salesForm .div-errors .paragraph').empty();
				jQuery('#salesForm .div-errors .paragraph').append('<div> ' + data.errorList[0].text + ' </div>');
				markInvalidSalesForm(true);

				return;
			}
			
			loadPixel({
				pixelsType: Constants.LOGIN_TARGETPIXEL_TRIAL,
				success: salesGoToDesktop
			});
		},
		error: salesFailure
	});	
};

function salesFailure(response, options){
	jQuery('#salesForm .div-errors .paragraph').empty();
	jQuery('#salesForm .div-errors .paragraph').append('<div> Se ha producido un error, inténtelo de nuevo. </div>');
	markInvalidSalesForm(true);

};

function salesGetCommercialConfigs(){
	var listProducts = [
			[{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "8", "ShCtCommConfigForceCommercialConfig": true}], 
			[{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "9", "ShCtCommConfigForceCommercialConfig": true}],
			[{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "k", "ShCtCommConfigForceCommercialConfig": true}],
			[{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "8", "ShCtCommConfigForceCommercialConfig": true},
				{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "9", "ShCtCommConfigForceCommercialConfig": true}],
			[{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "8", "ShCtCommConfigForceCommercialConfig": true},
				{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "k", "ShCtCommConfigForceCommercialConfig": true}], 
			[{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "9", "ShCtCommConfigForceCommercialConfig": true},
				{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "k", "ShCtCommConfigForceCommercialConfig": true}],
			[{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "8", "ShCtCommConfigForceCommercialConfig": true},
				{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "9", "ShCtCommConfigForceCommercialConfig": true},
				{"ShCtCommConfigCampaignId": "m", "ShCtCommConfigCommercialConfigId" : "k", "ShCtCommConfigForceCommercialConfig": true}]
		];
	var listCampaigns = ['FPC50','FPS50','CP50','FPCFPS50','FPCCP50','FPSCP50','FPCFPSCP50'];
	var urlVars = getDataFromUrl();

	if(urlVars.promo=='f'){
		listCampaigns = ['FPC15','FPS15','CP15','FPCFPS15','FPCCP15','FPSCP15','FPCFPSCP15'];
	}

	var discountCampaigns = {};
	for(var index = 0; index < listProducts.length ; index ++){
		discountCampaigns[listCampaigns[index]]=listProducts[index];
	}

	return discountCampaigns[window.selectedCampaign[0].CampaignCode];
};

function salesGoToDesktop(){
	
	function callback(){

		Utils.setCookieNoSecure("accessCode", accessCodeVar, null, null, 'anfix.com');
	
		Utils.setCookieNoSecure("firstTime", true, null,null,'anfix.com');
 	trackEvent({
                 origin: "TRIAL",
                action: "FINISH",
                label: null
        });	
 	
	setTimeout(function(){
		if(window.registerFromiPad){
			document.location  = Utils.getIpadReturnUrl(userRegister.getValues());
		} else {
			document.location  = Utils.getUrl(Constants.HOME, true);
		}
	}, 1600);

	}

	var accessCodeVar=cookiesObj.accessCode;
	var cookiesName=[];
        cookiesName.push("accessCode");
        cookiesName.push("promoCode");
	cookiesName.push("requestMail");
	cookiesName.push("campaignId");
        Utils.clearCookies(cookiesName, callback);

};

//Pixels

function loadPixel(options){
	var me = this; 
	/*var pixelSrc;
    if(options.pixelsType == Constants.LOGIN_TARGETPIXEL_TRIAL){
            //dataLayer.push({event:"trial"});
            //dataLayer.push({event: "Addwords"});
            pixelSrc = 'http://4347385.fls.doubleclick.net/activityi;src=4347385;type=invmedia;cat=jstnv10z;ord=1?';
    } else if(options.pixelsType == Constants.LOGIN_TARGETPIXEL_PAYMENT){
            //dataLayer.push({event:"payment"});
            //dataLayer.push({event: "Addwords"});
            pixelSrc = 'http://4347385.fls.doubleclick.net/activityi;src=4347385;type=invmedia;cat=tm90mlma;ord=1?';
    } else if(options.pixelsType == Constants.LOGIN_TARGETPIXEL_EMAIL_VALIDATION){
            //dataLayer.push({event:"validateEmail"});
            pixelSrc = 'http://4347385.fls.doubleclick.net/activityi;src=4347385;type=invmedia;cat=sbpgmx7u;ord=1?';
    } else {
            return;
    }*/
    
    /*var pixelsem= '';
    try
    {
        if (options && options.isFreelanceTrial) {
            pixelsem = 'http://www.googleadservices.com/pagead/conversion/976213681/?label=eYJmCObcl1oQsa2_0QM&amp;guid=ON&amp;script=0';
        } else if (options && options.isPYMETrial) {
            pixelsem = '//www.googleadservices.com/pagead/conversion/976213681/?label=I_lKCIzMlFoQsa2_0QM&amp;guid=ON&amp;script=0';
        }
    }
    catch(ex){}
       
    if(!jQuery.isEmptyObject(pixelsem)){
    	jQuery(document.body).append(jQuery('<img height="1" width="1" style="border-style:none;" alt="" src="' + pixelsem + '"/>'));
	}*

	options.success.call(me, options.params);*/

	var url = window.location.protocol + '//'+Constants.WEB+Constants.PIXEL_PHP; 
  	if (options && options.isFreelanceTrial) {
        url+= "/?isFreelanceTrial=true";
    } else if (options && options.isPYMETrial) {
        url+= "/?isPYMETrial=true";
    }

    var urlParams =  url.split("?");
		
	if(urlParams && urlParams.length > 1){
		url+= '&campaignCode='+Utils.getCookie('linkCampaign');
	}else{
		url+='/?campaignCode='+Utils.getCookie('linkCampaign');
	}

	url+='&isMobile='+Utils.isMobile();
	url+='&isTablet='+Utils.isTablet();

	
	if(options && options.selectedProduct){
		url+= '&selectedProduct=true';
	}

	if(typeof getSignupForm != 'undefined'  && getSignupForm().getValues().EMail){
		url+= '&email='+getSignupForm().getValues().EMail;	
	}else if(typeof getSignupMobileForm != 'undefined'  && getSignupMobileForm().getValues().EMail){
		url+= '&email='+getSignupMobileForm().getValues().EMail;	
	}

	jQuery.ajax({
		type: "GET",
		dataType: 'json',
		contentType: 'application/json',
		//data: JSON.stringify(data),
		url: url,
		success: function(data){
			if(data.result==0){
				jQuery(document.body).append(data.text);
				options.success.call(me, options.params);
			}
		}
	});
	
	
};


function setAvanza(value){
	isAvanza = value;
}

function setPremium(value){
	isPremium = value;
}

jQuery.extend({
    compare: function (arrayA, arrayB) {
        if (arrayA.length != arrayB.length) { return false; }
        
        var a = jQuery.extend(true, [], arrayA);
        var b = jQuery.extend(true, [], arrayB);
        a.sort(); 
        b.sort();
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i] !== b[i]) { 
                return false;
            }
        }
        return true;
    }
});

jQuery.extend({
    isEmptyObject: function (obj) {
    	if (jQuery.isArray(obj) && obj.length>0){
    		return false;
    	}else if(jQuery.type(obj)==="string"){
			return  !(obj!=null && obj!="");
    	}else if(jQuery.type(obj) ==='object'){
    		for(var i in obj) { return false; }
  			return true;
    	}
    	return true;
    }
});
/**
 * Documento Confidencial.
 * 
 * @file mailSentForm.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date October, 2015
 * @brief Parent with common methods
 */


/*GLOBAL VARIABLES*/
var mailSentForm=null;

/**GLOBAL FUNCTIONS*/
function getMailSentForm(){
	if(jQuery.isEmptyObject(mailSentForm)){
		mailSentForm= new MailSentForm();
	}
	return mailSentForm;
}

/**CLASS*/
var MailSentForm = function(){};
MailSentForm.prototype = {
	id : "#mailSentForm",

	setUp: function(){
		this.addListenersTo();
	},

	setDisabledSumbitButton: function(disabled){
		/*jQuery(this.id+' .div-signup-button .btn-green').attr('disabled', disabled);
		jQuery(this.id+' .div-signup-button .btn-green')[disabled?'addClass':'removeClass']('btn-disabled');*/
	},

	show: function(options){
		var me  = this;
		Utils.show(options, me);
		jQuery(this.id+' span').text(options.email);
		jQuery('.title').html(getTextByKey('sent.mail.title'));
    jQuery('.fullscreen .subtitle').html('');
		jQuery('.bottom p').html(getTextByKey('footer.text.mail.sent'));
		jQuery('.logo').addClass('logo-ok').removeClass('logo');
		jQuery('.bottom a').unbind('event').on('click',{scope: me},me.goBack);
    },

	hide: function(nohideFullScreen){
		Utils.hide({nohideFullScreen:nohideFullScreen}, this);
		jQuery('.logo-ok').addClass('logo').removeClass('logo-ok');
	},

	goBack:function(eventObject){
		var me = eventObject ?eventObject.data.scope:this;
		me.hide(true);
		getRegisterEmailForm().show({reset:true});
	},

	addListenersTo: function(){
		var me = this;
		jQuery('#btn-validate').on('click', {scope: me}, Utils.closeFullScreen);			
		jQuery('.close').on('click', {scope: me},Utils.closeFullScreen);
	}
	
};


/**
 * Documento Confidencial.
 *
 * @file registerEmail.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date October, 2015
 * @brief It opens and manages all data about email. 1º Step
 */


/*GLOBAL VARIABLES*/
var registerEmailForm=null;

/**GLOBAL FUNCTIONS*/
function openRegisterEmailForm(options) {
	trackEvent({origin:'TRIAL', action: 'START', label: location.href});
        trackFb('ViewContent');
	location.href = Constants.AUTH_DOMAIN;
//	if(!Utils.isMobile() || (options && options.register)){
//		getRegisterEmailForm().show({reset:true, data:options});
//	}else{
//		Utils.redirectToMobileRegistration();
//	}
};

function getRegisterEmailForm() {
	if(jQuery.isEmptyObject(registerEmailForm)){
		registerEmailForm= new RegisterEmail();
	}
	return registerEmailForm;
};


/**CLASS*/
var RegisterEmail = function(){
	this.userSignup = new UserSignup();
	this.proxy = new Proxy();
};
RegisterEmail.prototype = {
	id: '#registerEmailForm',

	setUp: function(){
		this.addListenersTo();
	},

	isValid:null,

	setDisabledSumbitButton: function(disabled){
		jQuery(this.id+' .btn-green').attr('disabled', disabled);
		jQuery(this.id+' .btn-green')[disabled?'addClass':'removeClass']('none-mouse');
	},

	showErrorMessages: function(data){
		Utils.showPanelError(data.errorList.length, data.errorList[0].text);
	},

	hideErrorMessages: function(){
		/*var height= parseInt(jQuery(this.id+' .left').css('height'));

		jQuery(this.id+' .div-errors').hide();
		this.setHeight(height);*/
	},

	getValues: function(){
		var values={};
		jQuery(this.id+" input").each(function(index){
			values[this.name] = jQuery.trim(jQuery(this).val());
        });
        return values;
	},

	setValues: function(values){
		jQuery(this.id+" #EMailRegister").val(values.EMailRegister);
	},

	show: function(options){
		var me = this;
		var options = options || {};
		options.extended = true;
		options.callback = function(){
			jQuery(me.id+' #EMailRegister').focus();
		}
		Utils.show(options, this);
		jQuery('.fullscreen .title').html(getTextByKey('email.title'));
    jQuery('.fullscreen .subtitle').html(getTextByKey('email.subtitle'));
		jQuery('.bottom p').html(getTextByKey('footer.text.default'));
	},

	hide: function(nohideFullScreen){
		Utils.hide({nohideFullScreen:nohideFullScreen}, this);
	},

	reset: function(){
		var me = this;
		jQuery(this.id+" input").each(function(index){
			jQuery(this).val(null);
			Utils.markValidField(me.id, this.name);
		});

		this.hideErrorMessages();
	},

	submit: function(eventObject){
		var me = eventObject ?eventObject.data.scope:this;
		var values = me.getValues();
		if(me.validate(values)){
			me.proxy.logger("El email "+values.EMailRegister+" ha hecho click");
			me.setDisabledSumbitButton(true);
			Utils.showLoading();
			var waitIfExistsEmailId = setInterval(function(){
				if(me.isValid !=null){
					clearInterval(waitIfExistsEmailId);
					if(me.validate(values) && me.isValid){
						Utils.markValidField(me.id,"EMailRegister");
						Utils.hidePanelError();
						me.setDisabledSumbitButton(false);

						setTimeout(function(){
							me.userSignup.saveOrUpdateStepInfo({
								step: Utils.FIRST_STEP,
								information: values,
								email: values.EMailRegister,
								callback: function(){
									me.hide(true);
									getSignupForm().show({data: {user: values.EMailRegister}, stepId: getStepId()});
									Utils.hideLoading();
								}
							});
						}, 500);
					}else if(me.isValid == false){
						Utils.hideLoading();
						Utils.markInvalidField(me.id,"EMailRegister", false,getTextByKey('anfix.login.typeEmail.exists'));
					}
				}
				me.setDisabledSumbitButton(false);
			}, 500);
		}
	},

	validate: function(values){
		if(!values.EMailRegister) {
			Utils.markInvalidField(this.id,"EMailRegister", false,getTextByKey('anfix.login.typeEmail'));
			return;
        }else if(!Utils.validateEmail(values.EMailRegister)){
 			Utils.markInvalidField(this.id,"EMailRegister", false,getTextByKey('anfix.login.typeEmail.valid'));
			return;
        }/*else{
        	Utils.markValidField(this.id,"EMailRegister");
		}*/
		return true;
	},

	addListenersTo: function(){
		var me = this;

		function validateField (){
			me.isValid= null;
			me.validateField(this);
		}
		jQuery(this.id+' input').on('blur', validateField);

		jQuery(this.id+' .btn-green').on('click', {scope: me},me.submit);

		jQuery('.fullscreen .error-container').on('click', {scope: me},function(){
			var fieldId = jQuery('.fullscreen .error-container').attr('data-field');
			if(fieldId){
				jQuery(this.id+ '#'+fieldId).focus();
			}
		});

		if(!Utils.isMobile() && !Utils.isTablet()){
	   		jQuery(me.id).find('input, .btn-green').keydown({scope:this.id}, Utils.move);
	   	}else{
	   		jQuery(me.id+' input').keydown(function(e){
	   			if(isEnterKeyPressed(e)){
					me.submit();
				}
	   		});
	   	}

	},

	validateField: function(input){
		var me = this;
		input.value = jQuery.trim(input.value);
		var isEmpty= jQuery.isEmptyObject(input.value);

		if(isEmpty){
			Utils.markValidField(me.id, input.name);
			return;
		}

		if(input.name==='EMailRegister'){
			if(Utils.validateEmail(input.value)){
				this.proxy.existsEmail(
					{	email:input.value,
						success:function(data){
							if(data && data.outputData && data.outputData.UserEmail.Exists){
								Utils.markInvalidField(me.id,"EMailRegister", false,getTextByKey('anfix.login.typeEmail.exists'));
								me.isValid = false;
							}else if(data && data.outputData){
								Utils.markValidField(me.id, input.name);
								me.isValid = true;
							}
						}
				});
				return;
			}else{
				Utils.markInvalidField(me.id,"EMailRegister", false,getTextByKey('anfix.login.typeEmail.valid'));
			}

			return;
		}
	}

};
/**
 * Documento Confidencial.
 *
 * @file signup.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date January, 2015
 * @brief js for open and manages signup form.
 */


/*GLOBAL VARIABLES*/
var signupForm=null;
var campaignWithGift= false;


/**GLOBAL FUNCTIONS*/
function openSignupForm(options) {
	if(!Utils.isMobile() || (options && options.register)){
		getSignupForm().show({reset:true, data:options});
	}else if(getDataFromUrl().email){
		if(getDataFromUrl().fI){
			Utils.redirectToMobileRegistration('?fI=' + getDataFromUrl().fI + '&email=' + getDataFromUrl().email);
		} else {
			Utils.redirectToMobileRegistration('?email='+getDataFromUrl().email);
		}
	}else{
		Utils.redirectToMobileRegistration('?key='+getDataFromUrl().key);
	}
};

function hasGift() {
	return campaignWithGift;
};

function getSignupForm() {
	if(jQuery.isEmptyObject(signupForm)){
		signupForm= new SignUp();
	}
	return signupForm;
};


/**CLASS*/
var SignUp = function(){
	this.userSignUp = new UserSignup();
	this.proxy = new Proxy();
};
SignUp.prototype = {
	id: '#signupForm',

	DirCAUAgentId: null,

	setUp: function(){
		this.addListenersTo();
	},

	setDirCAUAgentId: function(agentId){
		this.DirCAUAgentId = agentId;
	},

	getDirCAUAgentId: function(){
		return this.DirCAUAgentId;
	},

	setDisabledSumbitButton: function(disabled){
		jQuery(this.id+' .btn-green').attr('disabled', disabled);
		jQuery(this.id+' .btn-green')[disabled?'addClass':'removeClass']('none-mouse');
	},

	showErrorMessages: function(data){
		Utils.showPanelError(data.errorList.length, data.errorList[0].text);
	},

	hideErrorMessages: function(){
		/*var height= parseInt(jQuery(this.id+' .left').css('height'));

		jQuery(this.id+' .div-errors').hide();
		this.setHeight(height);*/
	},

	getValues: function(){
		var values={};
		jQuery(this.id+" input").each(function(index){
			values[this.name] = jQuery.trim(jQuery(this).val());
        });
		if(values.UserName){
			values.UserName = Utils.toCamelCase(values.UserName);
		}

        return values;
	},

	setValues: function(values){
		jQuery(this.id+" #EMail").val(values.EMail);
		jQuery(this.id+" #Password").val(values.Password);
		jQuery(this.id+" #Phone").val(values.Phone);
		jQuery(this.id+" #UserName").val(values.UserName);
		jQuery(this.id+ ' input').trigger('change');
	},

	show: function(options){
		var me =this, data = getDataFromUrl(),
			options = options || {};

		var key = !jQuery.isEmptyObject(data) && data.key ? data.key : null;

		options.stepId = (data && (data.stepId || data.wi)) || options.stepId;
		// options.minHeight= 730;

		options.callback = function(){
			if(!Utils.isMobile()){
				jQuery(me.id+ ' #Password').focus();
				setTimeout(Utils.openFullSCreen, 1000);
			}
			/*if(getDataFromUrl() && getDataFromUrl().email){
				me.setValues({EMail:getDataFromUrl().email});
			}*/
			if(options && !jQuery.isEmptyObject(options.data)){
				if(options.data.user){
					jQuery('.div-fields-container input[name=EMail]').val(options.data.user);
				}
				if(options.data.pass){
					jQuery('.div-fields-container input[name=Password]').val(options.data.pass);
				}
			}
			jQuery(me.id+' #EMail').trigger('blur');
		};

		jQuery('.fullscreen .title').html(getTextByKey('title.register.anfix'));
		jQuery('.fullscreen .subtitle').html(getTextByKey('title.register.subtitle.anfix'));

		if(!Utils.getCookie('fromInvitation')){
			me.userSignUp.searchStepById({
				uid:key,
				id: options.stepId || null,
				success:function(data){
					Utils.show(options,me);
					me.setValues({EMail:data.WebStepEmail});
	        		jQuery('.div-fields-container input[name=EMail]').val(data.WebStepEmail);
					me.setDirCAUAgentId(data.WebCAUAgentId);
						me.userSignUp.saveOrUpdateStepInfo({
						step: 1,
						information: {EMail: me.getValues().EMail},
						email: me.getValues().EMail
					});
				},
				error:function(data){
					me.showErrorMessages(data);
				}
			});
		}else{
			Utils.show(options,me);
		}


	},

	hide: function(nohideFullScreen){
		if(!nohideFullScreen){
			jQuery(".fullscreen").slideUp('slow');
       		jQuery(this.id).slideUp('slow');
        }else{
        	jQuery(this.id).hide();
        }
        jQuery('#btn-accept').hide();
		$(document.body).attr('style','overflow: auto;');
	},

	reset: function(){
		var me = this;
		jQuery(this.id+" input").each(function(index){
			jQuery(this).val(null);
			Utils.markValidField(me.id, this.name);
		});

		this.hideErrorMessages();

		var checked = jQuery('#gift').is(':checked');
		me.setDisabledSumbitButton(false);
	},

	submit: function(eventObject){
		var me = eventObject ?eventObject.data.scope:this;
		var values = me.getValues();
		if(me.validate(values)){
			me.setDisabledSumbitButton(true);
			var callback =function(){
				Utils.hidePanelError();
				me.setDisabledSumbitButton(false);

				me.userSignUp.saveOrUpdateStepInfo({
					step:2,
					information: values,
					email: values.EMail
				});


				if(Utils.getCookie('fromInvitation')){
					trackEvent({
						origin: 'TRIAL',
						action: "FINISH",
						label: 'INVITATION'
					});
					Utils.showLoading();
					me.userSignUp.createUserFromInvitation(values);
					return;
				} else {
					me.hide(true);
					getCompanyTypeForm().show({reset:true});
				}
			}
			me.existsMail(jQuery(me.id+" #EMail")[0], callback);
		}
	},

	validate: function(values){
		if(!values.EMail) {
			Utils.markInvalidField(this.id,"EMail", false,getTextByKey('anfix.login.typeEmail'));
			return;
        }else if(!Utils.validateEmail(values.EMail)){
 			Utils.markInvalidField(this.id,"EMail", false,getTextByKey('anfix.login.typeEmail.valid'));
			return;
        }else{
        	Utils.markValidField(this.id,"EMail");
		}
		if(!values.Password) {
			Utils.markInvalidField(this.id,"Password", false,getTextByKey('anfix.login.typePassword'));
			return;
		} else {
			if(values.Password.length < 4) {
				Utils.markInvalidField(this.id,"Password", false,getTextByKey('anfix.login.typePassword.maxLenght'));
				return;
			}else{
				Utils.markValidField(this.id,"Password");
			}
		}
		return true;
	},

	addListenersTo: function(){
		var me = this;
		function focusInput(){
			if(jQuery.isEmptyObject(this.value)){
				jQuery(this).addClass("bg-register");
			}
		}

		function blurInput(){
			me.validateField(this);
		}

		jQuery(this.id+' input').each(function(index){
			jQuery(this).on('blur',{fieldName: this.name}, blurInput);
		});

		jQuery('.fullscreen .close').on('click', {scope: me},Utils.closeFullScreen);
		jQuery(this.id+' .btn-green').on('click', {scope: me},me.submit);
		jQuery('.fullscreen .error-container .btn-close').on('click', {scope: me},function(){
			jQuery('.fullscreen .error-container').removeClass('open');
		});
		jQuery('.error.fullscreen-item').on('click', {scope: me},function(){
			jQuery('.fullscreen .error-container').addClass('open');
		});

		jQuery('.fullscreen .error-container').on('click', {scope: me},function(){
			var fieldId = jQuery('.fullscreen .error-container').attr('data-field');
			if(fieldId){
				jQuery(this.id+ '#'+fieldId).focus();
			}
		});

		if(!Utils.isMobile() && !Utils.isTablet()){
			jQuery(me.id).find('input, .btn-green').keydown({scope:this.id}, Utils.move);
	   	}else{
	   		jQuery(me.id+' input').keydown(function(e){
	   			if(isEnterKeyPressed(e)){
					me.submit();
				}
	   		});
	   	}

	},

	existsMail : function(input, callback){
		var me = this,
			isValid = true;

		this.proxy.existsEmail(
			{	email:input.value,
				success:function(data){
					if(data && data.outputData && data.outputData.UserEmail.Exists){
						Utils.markInvalidField(me.id,"EMail", false,getTextByKey('anfix.login.typeEmail.exists'));
					}else if(data && data.outputData){
						Utils.markValidField(me.id, input.name);
						callback();
					}
				}
			});
	},

	validateField: function(input){
		var me = this;
		input.value = jQuery.trim(input.value);
		var isEmpty= jQuery.isEmptyObject(input.value);

		if(isEmpty){
			Utils.markValidField(me.id, input.name);
			return;
		}

		if(input.name==='EMail'){
			if(Utils.validateEmail(input.value)){
				this.proxy.existsEmail(
					{	email:input.value,
						success:function(data){
							if(data && data.outputData && data.outputData.UserEmail.Exists){
								Utils.markInvalidField(me.id,"EMail", false,getTextByKey('anfix.login.typeEmail.exists'));
							}else if(data && data.outputData){
								Utils.markValidField(me.id, input.name);
								var params =  getDataFromUrl();
								var key = !jQuery.isEmptyObject(params) && params.key ? params.key : null;
								me.userSignUp.saveOrUpdateStepInfo({
									step: 1,
									information: {EMail: me.getValues().EMail},
									email: me.getValues().EMail
								});

							}
						}
				});
				return;
			}else{
				Utils.markInvalidField(me.id,"EMail", false,getTextByKey('anfix.login.typeEmail.valid'));
			}

			return;
		}


		if(input.name==='Password' && input.value.length<4 ){
			Utils.markInvalidField(me.id,"Password", false,getTextByKey('anfix.login.typePassword.maxLenght'));
			return;
		}else{
			Utils.markValidField(me.id, input.name);
		}
	}

};
/**
 * Documento Confidencial.
 * 
 * @file signupHome.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date January, 2015
 * @brief js for manages signup form.
 */


/*GLOBAL VARIABLES*/
var signupHomeForm=null;

/**GLOBAL FUNCTIONS*/
function getSignupHomeForm() {
	if(jQuery.isEmptyObject(signupHomeForm)){
		signupHomeForm= new SignUpHome();
	}
	return signupHomeForm;
};


/**CLASS*/
var SignUpHome = function(){
	this.userSignUp = new UserSignup();
	this.proxy = new Proxy();
};
SignUpHome.prototype = {
	id: ".contact-form",

	setUp: function(){
		this.addListenersTo();
	},

	setDisabledSumbitButton: function(disabled){
		jQuery(this.id+' button').prop('disabled', disabled);
		jQuery(this.id+' button')[disabled?'addClass':'removeClass']('error');
		jQuery(this.id+' button').html(getTextByKey(disabled ?'anfix.text.btn.submit.signup.error' :'anfix.text.btn.submit.signup'));
	},

	showErrorMessages: function(obj){
		jQuery(obj.id+' input[name='+obj.field+']').addClass('error');
		jQuery(obj.id+' .errors-container').fadeIn().text(obj.text);
		this.setDisabledSumbitButton(true);
	},

	hideErrorMessages: function(obj){
		jQuery(obj.id+' input[name='+obj.field+']').removeClass('error');
		if(jQuery(obj.id+' input.error').size()==0){
			jQuery(obj.id+' .errors-container').hide();
			this.setDisabledSumbitButton(false);
		}
	},

	getValues: function(){
		var values={};
		jQuery(this.id+" input").each(function(index){
			values[this.name] = jQuery.trim(jQuery(this).val());
        });
        return values;
	},

	submit: function(eventObject){
		var me = eventObject ?eventObject.data.scope:getSignupHomeForm();
		var values = me.getValues();
		jQuery(me.id+' .errors-container').hide();

		if(jQuery.isEmptyObject(values.EMail)){
			if(!Utils.isOnlyMobile() || Utils.isTablet()){
				openRegisterEmailForm();
			}else{
				Utils.redirectToMobileRegistration();
			}
			return;
		}

		if(me.validate(values)){
			Utils.showLoading();
			Utils.hidePanelError();
			if(!Utils.isMobile()){
				me.userSignUp.saveOrUpdateStepInfo({
					step: Utils.FIRST_STEP,
					information: values,
					email: values.EMail,
					callback: function(){
						getMailSentForm().show({email: values.EMail});
					}
				});
				
			}else{
				Utils.redirectToMobileRegistration('?EMail='+values.EMail+'&Password='+"true");
			}
			Utils.hideLoading();
		}
	},


	validate: function(values){
		var me = this;
		if(!values.EMail) {
			me.showErrorMessages({id:me.id, field :"EMail", text:getTextByKey('anfix.login.typeEmail')});
			return;
        }else if(!Utils.validateEmail(values.EMail)){
        	me.showErrorMessages({id:me.id, field : "EMail", text:getTextByKey('anfix.login.typeEmail.valid')});
 			return;
        }else{
        	me.hideErrorMessages({id:me.id, field :"EMail"});
		}
		
		return true;
	},

	addListenersTo: function(){
		var me = this;
		
		function blurInput(){
			me.validateField(this);
			return true;
		};

		jQuery(this.id+' input').each(function(index){
			jQuery(this).on('blur',{fieldName: this.name}, blurInput);
		});
		
		jQuery('.contact-form button').on('click', {scope: me},me.submit);
		jQuery(me.id).on('keypress', function(e){
			if(isEnterKeyPressed(e)){
				me.submit();
			}
		});
	},

	validateField: function(input){
		var me = this;
		input.value = jQuery.trim(input.value);
		var isEmpty= jQuery.isEmptyObject(input.value);

		if(isEmpty){
			me.hideErrorMessages({id:me.id, field :input.name});
			return;
		}
		
		if(input.name==='EMail'){
			if(Utils.validateEmail(input.value)){
				this.proxy.existsEmail(
					{	email:input.value, 
						success:function(data){
							if(data && data.outputData && data.outputData.UserEmail.Exists){
								me.showErrorMessages({id:me.id, field :input.name, text:getTextByKey('anfix.login.typeEmail.exists.home')});
							}else if(data && data.outputData){
								me.hideErrorMessages({id:me.id, field :input.name});
							}
						}
				});
				return;
			}else{
				me.showErrorMessages({id:me.id, field :input.name, text:getTextByKey('anfix.login.typeEmail.valid')});
			}
			return;
		}
	}
	
};


/**
 * Documento Confidencial.
 *
 * @file signup.js
 * @Author Jorge Melgosa (jorge.melgosa@anfix.com)
 * @date January, 2015
 * @brief
 */

 /**GLOBAL VARIABLE*/
var advisorForm = null;

 /**GLOBAL FUNCTION*/
function onKeyPressAdvisor(e) {
	if (isEnterKeyPressed(e)) {
		getAdvisroForm().submit();
	}
};

function getAdvisorForm() {
	if(jQuery.isEmptyObject(advisorForm)){
		advisorForm = new Advisor();
	}
	return advisorForm;
};


 /**CLASS*/
var Advisor = function() {
	this.proxy = new Proxy();
	this.userSignUp = new UserSignup();
};
Advisor.prototype = {
	id: '#club2040Form',

	setUp: function() {
		this.buildFormCombos();
		this.addListenersTo();
		this.reset();
		this.initAdvisorFormButtonEvents();
	},

	hide: function(nohideFullScreen){
		Utils.hide({nohideFullScreen:nohideFullScreen}, this);
		jQuery('.logo-star').addClass('logo').removeClass('logo-star');
	},

	show: function(options){
		var me =this;
		var options = options || {};
		options.extended= true;
		// options.minHeight= 930;
		me.phone = options.phone;
		options.callback = function(){
			if(!Utils.isMobile()){
				jQuery(me.id+ ' #advisor_companyname').focus();
			}
			if(!jQuery.isEmptyObject(me.phone)){
				jQuery(me.id+' #advisor_phoneNumber').parent('div').addClass('dirty');
			}
			jQuery(me.id+' #advisor_email').parent('div').addClass('dirty');
		}
		Utils.show(options, me);
		me.initializeMap2040();
		if(options && options.reset){
       		this.reset(options.email, options.phone);
      	}
		jQuery('.top .title').html(getTextByKey('advisors.title'));
		jQuery('.logo, .logo-ok').addClass('logo-star').removeClass('logo', 'logo-ok');
		jQuery(this.id+' .checkbox').first().find('.jcf-checkbox').css('margin-left','0px');
  		jQuery(me.id+ ' .jcf-select').remove();
  		if(Utils.getBrowser().isSafari) {
			jQuery("#selectifyadvisor_address_province .selected").addClass('selected-safari');
		}

	},

	showErrorMessages: function(obj) {
		if(obj.element){
			Utils.markInvalidField(this.id,obj.element, false,obj.errorText || getTextByKey('anfix.advisor.msg.error'));
		}else{
			jQuery('.fullscreen .error-container p').html(obj.errorText || getTextByKey('anfix.advisor.msg.error'));
		}

	},

	hideErrorMessages: function(obj) {
		Utils.markValidField(this.id,obj.element);

	},


	buildFormCombos: function() {
		this.loadProvinceCombo();
	},


	loadProvinceCombo: function() {
		for (var i = 0, arrayProvinces= []; i< Constants.PROVINCES.length; i++) {
			arrayProvinces.push(Constants.PROVINCES[i].ProvinceName);
		};


		jQuery(this.id+' #advisor_address_province').comboAutocomplete({
		    source:arrayProvinces,
		    minLength: 3,
		    /*open: function(event) {

		    },*/
		    close: function() {},
		    focus: function(event,ui) {}/*,
		   	select : function(e,selectedItem){
				me.data = selectedItem.item.data;
			}*/
		});
		/*jQuery(this.id+' #advisor_address_province option').remove();
		jQuery(this.id+' #advisor_address_province').append(
				jQuery('<option></option>')
				    .val('')
				    .html(getTextByKey('field.province')));
		for(var i=0, province=null, len = Constants.PROVINCES.length; i<len; i++ ){
			province = Constants.PROVINCES[i];
			jQuery(this.id+' #advisor_address_province').append(
				jQuery('<option></option>')
				    .val(province['ProvinceId'])
				    .html(province['ProvinceName']));
		}
		jQuery(this.id+' #advisor_address_province').selectify({maxItems:6, width:362});*/
	},

	reset: function(email, phone) {
		var me = this;
		jQuery(this.id+" input:not(input[type=submit])").each(function(index) {
			jQuery(this).val(null);
		});

		jQuery('#advisor_user_upload #Action').val("UPLOAD");
		jQuery('#advisor_user_upload #Source').val("user");
		jQuery('#advisor_logo_upload #Action').val("UPLOAD");
		jQuery('#advisor_logo_upload #Source').val("logo");

		jQuery(this.id+'#advisor_accountant').is(':checked');
		jQuery(this.id+'#advisor_fiscal').is(':checked');
		jQuery(this.id+'#advisor_labor').is('');

		jQuery('.inner-erea h3').html('Gestoria Benitez, S.L.');
		jQuery('#jsMapListLabor').hide();

		$('img#avatarCompany',this.el).css('background-image', 'url(/wp-content/themes/anfix-5.0/advisors/img/user-logo.png)');
		$('img#avatarUser',this.el).css('background-image', 'url(/wp-content/themes/anfix-5.0/advisors/img/user-img.png)');

		if(email){
			jQuery(this.id+' #advisor_email').val(email);
		}
		if(phone){
			jQuery(this.id+' #advisor_phoneNumber').val(phone);
		}
	},

	addListenersTo: function() {
		var me = this;
		function focusInput() {
			if(jQuery.isEmptyObject(this.value)){
				//ver si esta clase se aplica
				jQuery(this).addClass("bg-advisor");
			}
		}

		function blurInput() {
			me.validateField(this);
			me.setFieldValuesInPreview(this);
		}

		function changeCheckbox() {
			me.setFieldValuesInPreview(this);
		}

		function onKeypressOnlyNumber(e){
			var key = e.charCode || e.keyCode || 0;
	           return (
	               key == 8 ||
	               key == 9 ||
	               key == 46 ||
	               key == 110 ||
	               key == 190 ||
	               (key >= 35 && key <= 40) ||
	               (key >= 48 && key <= 57) ||
	               (key >= 96 && key <= 105));
		};

		jQuery(this.id+' input').each(function(index) {
			if(this.type != 'checkbox' && this.name!='filename'){
				jQuery(this).on('blur',{fieldName: this.name}, blurInput);
//				jQuery(this).on('keyup',{fieldName: this.name}, keyupInput);
			}

			if(this.type == 'checkbox'){
				jQuery(this).on('change',{fieldName: this.name}, changeCheckbox);
			}
		});


		jQuery('#club2040Form #advisor_address_province').on('change',{fieldName: this.name}, function() {
			var addressProvinceId = this.value;
			jQuery('#club2040Form select#advisor_address_province').selectify(!jQuery.isEmptyObject(addressProvinceId)?'markValid': 'reset');
			//setFieldValuesInPreview(this);
		});

		jQuery('#club2040Form #advisor_phoneNumber').bind('keydown',onKeypressOnlyNumber);
		jQuery('#club2040Form #advisor_address_postalcode').bind('keydown',onKeypressOnlyNumber);
	},

	validateField: function(input) {
		var me = this;
		input.value = jQuery.trim(input.value);
		var isEmpty= jQuery.isEmptyObject(input.value);

		if(isEmpty) {
			Utils.resetMarkField(this.id, input.name);
			return;
		}

		if(input.name==='advisor_email') {

			if(Utils.validateEmail(input.value)) {
				Utils.markValidField("#club2040Form", input.name);
				me.hideErrorMessages({element: input.name});
			} else {
				Utils.markInvalidField("#club2040Form", input.name);
				me.showErrorMessages({element: input.name, errorText: getTextByKey('anfix.login.typeEmail.valid')});
			}

			return;
		}
	},

	setFieldValuesInPreview: function(field) {
		if(field.name == "advisor_companyname" && !jQuery.isEmptyObject(jQuery(field).val())){
			var text = (field.value.length <= 25) ? field.value : jQuery.trim(field.value).substring(0, 25).split(" ").slice(0, -1).join(" ") + "...";
			jQuery('.inner-erea h3').html(text);
		} else if(field.type == "checkbox"){
			var html = '';
			jQuery('ul.map-list li').removeClass('first');

			if(jQuery('#advisor_accountant')[0].checked){
				jQuery('#jsMapListAccounting').show();
			} else {
				jQuery('#jsMapListAccounting').hide();
			}

			if(jQuery('#advisor_fiscal')[0].checked){
				jQuery('#jsMapListFiscal').show();
			} else {
				jQuery('#jsMapListFiscal').hide();
			}

			if(jQuery('#advisor_labor')[0].checked){
				jQuery('#jsMapListLabor').show();
			} else {
				jQuery('#jsMapListLabor').hide();
			}
			jQuery('ul.map-list li:visible').first().addClass('first');
			jQuery('ul.map-list li:visible').last().addClass('first');
		}

		this.showAddressInMap2040();
	},

	initializeMap2040: function() {
		var me = this;

		var myLatlng = new google.maps.LatLng(41.6486546, -4.7252757);

		var myOptions = {
		  zoom: 16,
		  center: myLatlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  disableDefaultUI: false,
		  mapTypeControl: false,
	        mapTypeControlOptions: {
	            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	            position: google.maps.ControlPosition.TOP_CENTER
	        },
	        panControl: false,
	        panControlOptions: {
	            position: google.maps.ControlPosition.TOP_RIGHT
	        },
	        zoomControl: false,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.LARGE,
	            position: google.maps.ControlPosition.RIGHT_TOP
	        },
	        scaleControl: false,
	        scaleControlOptions: {
	            position: google.maps.ControlPosition.TOP_LEFT
	        },
	        streetViewControl: false,
	        streetViewControlOptions: {
	            position: google.maps.ControlPosition.LEFT_TOP
	        }
		}

		me.map = new google.maps.Map(document.getElementById("user-address-map"), myOptions);

	    me.marker = new google.maps.Marker({
	        position: myLatlng,
	        map: me.map
	    });
	},

	showAddressInMap2040: function() {
		var me = this;

		if(jQuery('#club2040Form #advisor_addresstext')[0].value == "" || jQuery('#club2040Form #advisor_address_city')[0].value == ""){
			return;
		}

		var geocoder = new  google.maps.Geocoder()

		var address = jQuery('#club2040Form #advisor_addresstext')[0].value + ", " + jQuery('#club2040Form #advisor_address_city')[0].value;

		geocoder.geocode( { 'address': address }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
			  var oldZoom = me.map.getZoom();
			  me.map.setZoom(oldZoom);
			  me.map.setCenter(results[0].geometry.location);

			  me.marker.setMap(null);

			  me.marker = new google.maps.Marker({
			      map: me.map,
			      position: results[0].geometry.location
			  });
			}
		});
	},

	initAdvisorFormButtonEvents: function() {
		var me = this;

		jQuery("#club2040Form #upload-img-user").click(function(){
			me.openAdvisorUploadBrowser("user");
		});

		jQuery("#club2040Form #upload-img-logo").click(function(){
			me.openAdvisorUploadBrowser("logo");
		});

		jQuery('#club2040Form input[type=file]').change(function() {
		    me.uploadAdvisorImg(this);
		});


		jQuery(this.id+" .btn-green").click(function () {me.onClickAdvisorSubmit.call(me);});
		jQuery(me.id).on('keypress', function(e){
			if(isEnterKeyPressed(e)){
				me.onClickAdvisorSubmit();
			}
		});

	    var optionsUser = {
	            beforeSubmit:  function (){
	            	me.beforeAdvisorUploadSubmit("user");
	            },
	            resetForm: true,
	            success: me.onSuccessAdvisorUpload,
	            error: me.onFailureAdvisorUpload
	        };
	    jQuery('#club2040Form #advisor_user_upload').submit(function() {
			jQuery(this).ajaxSubmit(optionsUser);
			return false;
	    });

	    var optionsLogo = {
	            beforeSubmit:  function (){
	            	me.beforeAdvisorUploadSubmit("logo");
	            },
	            resetForm: true,
	            success: me.onSuccessAdvisorUpload,
	            error: me.onFailureAdvisorUpload
	        };
	    jQuery('#club2040Form #advisor_logo_upload').submit(function() {
			jQuery(this).ajaxSubmit(optionsLogo);
			return false;
	    });
	   	jQuery('#confirm-advisor').click(Utils.closeFullScreen);

	   	jQuery(me.id + ' .selectify').prop('form', me.id);

		if(!Utils.isMobile() && !Utils.isTablet()){
	   		jQuery(me.id).find('input, .btn-green').keydown({scope:this.id}, Utils.move);
	   	}else{
	   		jQuery(me.id+' input').keydown(function(e){
	   			if(isEnterKeyPressed(e) || e.keyCode ==9){
					me.onClickAdvisorSubmit.call(me);
				}
	   		});
	   	}
	},

	beforeAdvisorUploadSubmit: function(source) {
		var me = this;
	    //check whether browser fully supports all File API
	   if (me.File && me.FileReader && me.FileList && me.Blob){

	   		var field = (source == "user") ? jQuery("#club2040Form #advisor_user_file") : jQuery("#club2040Form #advisor_logo_file");

	        if( !field.val()) //check empty input filed
	        {
	            //TODO
	            return false
	        }

	        var fsize = field[0].files[0].size; //get file size
	        var ftype = field[0].files[0].type; // get file type

	        //allow only valid image file types
	        switch(ftype)
	        {
	            case 'image/png': case 'image/gif': case 'image/jpeg': case 'image/pjpeg':
	                break;
	            default:
	                //TODO
	                //$("#output").html("<b>"+ftype+"</b> Unsupported file type!");
	                return false
	        }

	        //Allowed file size is less than 1 MB (1048576)
	        if(fsize>1048576)
	        {
	           	//TODO
	            //$("#output").html("<b>"+fsize +"</b> Too big Image file! <br />Please reduce the size of your photo using an image editor.");
	            return false
	        }

	        //TODO: Mostrar loading

	    }
	    else
	    {
	    	//TODO
	        //Output error to older unsupported browsers that doesn't support HTML5 File API
	        //$("#output").html("Please upgrade your browser, because your current browser lacks some new features we need!");
	        return false;
	    }
	},


	openAdvisorUploadBrowser: function(source) {
		if(source == "user"){
			jQuery('#advisor_user_file').click();
		} else if(source == "logo") {
			jQuery('#advisor_logo_file').click();
		}
	},


	uploadAdvisorImg: function(input) {
		if(input.name == "advisor_user_file"){
			jQuery('#club2040Form #advisor_user_upload').submit();
		} else if(input.name == "advisor_logo_file") {
			jQuery('#club2040Form #advisor_logo_upload').submit();
		}
	},

	onSuccessAdvisorUpload: function(data) {
		if(data.result == 0){
			if(data.Source == "user"){
				var thumb = Constants.DOMAIN_CDN + "advisors/" + data.thumb;
				jQuery("img#avatarUser").css('background-image', "url('" + thumb + "')");
				jQuery("#jsUserIMG2040").val(data.thumb);
			} else if(data.Source == "logo"){
				var thumb = Constants.DOMAIN_CDN + "advisors/" + data.thumb;
				jQuery("img#avatarCompany").css('background-image', "url('" + thumb + "')");
				jQuery("#jsLogoIMG2040").val(data.thumb);
			}
		} //se podria poner de alguna manera si hemos tenido un error

		//ver si se usa
		//Utils.hideLoading();
	},

	onFailureAdvisorUpload: function(jqXHR, textStatus, errorThrown) {
		//si se ha producido un error en el servicio se lanza este metodo

		//ver si se usa
		//Utils.hideLoading();
	},


	//PENDIENTE ENVIO DEL FORMULARIO
	onClickAdvisorSubmit: function(){
		if(!this.validateAdvisors()){
			return;
		}

		/*if(this.advisorPhoneIsMobile()){
			this.showSmsValidationPanel();
		} else {*/
		this.submitAdvisorData();
		/*}*/
	},


	validateAdvisors: function() {

		if(Utils.validateEmail(jQuery("#club2040Form #advisor_email")[0].value)){
			this.hideErrorMessages({element: jQuery("#club2040Form #advisor_email")[0].name});
			return true;
		}else{
			this.showErrorMessages({element: jQuery("#club2040Form #advisor_email")[0].name, errorText: getTextByKey('anfix.login.typeEmail.valid')});
			return false;
		}

/*
		//cortar el flujo con la nueva forma
		if(jQuery("#advisorSubmit").hasClass("disable-btn")) {
			return;
		}

		return true;
*/
	},


	advisorPhoneIsMobile: function(){
		var phone = jQuery('#club2040Form #advisor_phoneNumber')[0].value;
		if(phone.substring(0,1) == "6") {
			return true;
		}
		return false;
	},


	showSmsValidationPanel: function() {
		var me = this;
		var	campaignCode = Utils.getCookie("linkCampaign") || 'ANFIXAPP',
	   		objectToJsonString = this.getAdvisorValues();

	    jQuery.ajax({
	        type: "POST",
	        dataType: 'json',
	        data: JSON.stringify(objectToJsonString),
	        contentType: 'application/json',
	        url: Constants.SMS,
	        success: function(data){
	        	if(data.result == 0){
	        		me.hide(true);
				    //getSmsAdvisorForm().timer();
				    //ver si esto se utiliza
					//Utils.hideLoading();
					//getSmsAdvisorForm().show({reset:true});
				} else {
					var error = data.statusDesc;
				    this.showErrorMessages({errorMessage: error, isKey:true});
					//Utils.hideLoading();
				}

			},
			error: function(jqXHR, textStatus, errorThrown){
				//esto no funcionara no muesta mensaje
				me.showErrorMessages({errorMessage:'Se ha producido un error al enviar el SMS.', isKey:false});
				//ver si esto se utiliza
				//Utils.hideLoading();
			}
		});
	},


	getAdvisorValues: function() {
		var me = this;
		function getValue(selector){
			return jQuery.trim(jQuery(selector).val());
		};

		var provinceId= getValue('#club2040Form #advisor_address_province');

		var index = Utils.getIndexIfObjWithAttr(Constants.PROVINCES, "ProvinceName", provinceId);
		provinceId = index!=-1 ?Constants.PROVINCES[index].ProvinceId: null;
		var provinceName = index!=-1 ? Constants.PROVINCES[index].ProvinceName : "";
		var values = {
			companyName 	: getValue('#club2040Form #advisor_companyname'),
			nifcif 			: getValue('#club2040Form #advisor_cif'),
			addressText 	: getValue('#club2040Form #advisor_addresstext'),
			addressProvince : provinceName,
			addressPostalCode 	: getValue('#club2040Form #advisor_address_postalcode'),
			addressCity 		: getValue('#club2040Form #advisor_address_city'),
			PhotoName 		: getValue('#club2040Form #jsUserIMG2040'),
			LogoName  		: getValue('#club2040Form #jsLogoIMG2040'),
			firstName  		: getValue('#club2040Form #advisor_name'),
			lastName  		: getValue('#club2040Form #advisor_surname'),
			email 			: getValue('#club2040Form #advisor_email'),
			phone 			: getValue('#club2040Form #advisor_phoneNumber')
		};
		var params = getDataFromUrl();
		if(params && params.k){
			values.inputBusinessData.Advisor.Source = params.k;
		}

		if(!jQuery.isEmptyObject(provinceId)){
			values.addressProvinceId = provinceId;
			values.addressProvince = provinceName;
		}else{
			values.ProvinceName = "";
			values.addressProvince = "";
		}

		return values;
	},

	submitAdvisorData: function() {
		var me = this;
		var objectToJsonString = me.getAdvisorValues();

		Utils.showLoading();

		me.userSignUp.saveOrUpdateStepInfo({
			step: 4,
			information: objectToJsonString,
			email: getSignupForm().getValues().EMail
		});

		jQuery.ajax({
			type: "POST",
			dataType:'json',
			data: JSON.stringify(objectToJsonString),
			contentType: 'application/json',
			//url: Utils.getCRMUrl(Constants.ADVISOR_SAVE),
			url:Constants.CREATE_ADVISOR,
			success: me.onSuccessAdvisorSave,
			error: function(jqXHR, textStatus, errorThrown){
				me.showErrorMessages({errorText:getTextByKey('anfix.advisor.save.error')})
			}
		});
	},

	backError: function() {
		jQuery("#jsFormPing").hide();
		jQuery("#jsFormConfirmation").hide();
		jQuery(".content-form").css("transform","translateX(0px)");
	},

	backErrorSms: function(eventObject) {
		jQuery(".content-form").css("transform","translateX(-955px)");
	},

	showSliderError: function(options) {
		if(options.isSms) {
			jQuery("#jsFormConfirmation").hide();
			jQuery(".content-form").css("transform","translateX(-1910px)");
			jQuery("#jsInfoConfirmationError ins").click(this.backErrorSms);
		} else {
			if(!getAdvisorForm().advisorPhoneIsMobile()) {
				jQuery("#jsFormPing").hide();
				jQuery("#jsFormConfirmation").hide();
				jQuery(".content-form").css("transform","translateX(-955px)");
			} else {
				jQuery("#jsFormConfirmation").hide();
				jQuery(".content-form").css("transform","translateX(-1910px)");
			}
			jQuery("#jsInfoConfirmationError ins").click(this.backError);
		}
	},

	showResultOk: function(options) {
		$(document.body).attr('style','overflow: hidden;');
		/*jQuery("#jsFormConfirmation").show()
		jQuery('#confirm-advisor').show();*/
		this.hide(true);
		getConfirmAdvisorForm().show();

		/*if(!getAdvisorForm().advisorPhoneIsMobile()) {
			jQuery("#jsFormPing").hide();
			jQuery(".content-form").css("transform","translateX(-955px)");
		} else {
			jQuery(".content-form").css("transform","translateX(-1910px)");
		}*/
	},

	onSuccessAdvisorSave: function(data) {
		var me = this;

		Utils.hideLoading();

		if(data.result !== 1) {
			var proxy = new Proxy();
			proxy.logger("Un gestor se ha dado de alta");
			//getSmsAdvisorForm().hide(true);
			getAdvisorForm().hide(true);
			getAdvisorForm().showResultOk();
		} else {
			getAdvisorForm().showErrorMessages({errorText:data.message});
		}
	}

};
/**
 *  * Documento Confidencial.
 *   * 
 *    * @file confirmAdvisorForm.js
 *     * @Author Jorge Pérez (jorge.perez@anfix.com)
 *      * @date October, 2015
 *       * @brief Parent with common methods
 *        */


/*GLOBAL VARIABLES*/
var confirmAdvisorForm=null;

/**GLOBAL FUNCTIONS*/
function getConfirmAdvisorForm(){
	if(jQuery.isEmptyObject(confirmAdvisorForm)){
		confirmAdvisorForm= new ConfirmAdvisorForm();
	}
	return confirmAdvisorForm;
}

/**CLASS*/
var ConfirmAdvisorForm = function(){};
ConfirmAdvisorForm.prototype = {
	id : "#confirmAdvisorForm",
	
	show: function(options){
		var me  = this;
		options = options || {};
		// options.minHeight= 1;
		Utils.show(options, me);
		jQuery('.title').html(getTextByKey('sent.mail.title'));
		jQuery('.logo').addClass('logo-ok').removeClass('logo');
    },

	hide: function(nohideFullScreen){
		Utils.hide({nohideFullScreen:nohideFullScreen}, this);
		jQuery('.logo-ok').addClass('logo').removeClass('logo-ok');
	}
	
};



/**
 *  * Documento Confidencial.
 *   *
 *    * @file freelance.js
 *     * @Author Jorge Pérez (jorge.perez@anfix.com)
 *      * @date October, 2015
 *       * @brief Parent with common methods
 *        */


/*GLOBAL VARIABLES*/
var freelance=null;

/**GLOBAL FUNCTIONS*/
function getFreelanceForm(){
	if(jQuery.isEmptyObject(freelance)){
		freelance= new FreelanceForm();
	}
	return freelance;
}

/**CLASS*/
var FreelanceForm = function(){
	this.proxy = new Proxy();
	this.userSignUp = new UserSignup();
};
FreelanceForm.prototype = {
	id : "#freelanceForm",

	data: null,

	companyId:null,

	arrayUIDs:[],

	arrayBudgets: [],

	templateDefault: null,

	templateBudgetDefault: null,

	colorBase: '#009BD5',

	sendingPreview: false,

	alreadyUpload: false,

	templateInit: {
		'5,':'#009BD5'
	},

	setUp: function(){
		var me  = this;
		jQuery('#colorPicker span').ColorPickerSliders({
            flat: true,
            previewformat: 'hsl',
            swatches:false,
            order: {
                hsl: 1
            },
            color: me.colorBase,
            onchange:function(container, color){
            	var color= color.tiny.toHexString();
            	var span = jQuery(me.id+" .base-color");
            	span.css("background-color", color);
            },
            change: function(container, color){
            	var color= color.tiny.toHexString();
            	var span = jQuery(me.id+" .base-color");
            	span.css("background-color", color);
            	if(jQuery.isEmptyObject(me.templateDefault) || me.sendingPreview){
            		return;
            	}

            	var templateSettingsArray = [];
            	if(Utils.getCookie('accessCode')){
	            	for(templateSettingIndex=0; templateSettingIndex < me.templateDefault.TemplateSettings.length; templateSettingIndex++){
			    		var templateSetting =me.templateDefault.TemplateSettings[templateSettingIndex];
			    		if(templateSetting.TemplateSettingTypeId === Constants.COLOR_SETTING_KEY && templateSetting.TemplateSettingKey !== 'ColorBase'){
			    			var currentColor = templateSetting.TemplateSettingValue;
			    			var newColor = Utils.transformColor(me.colorBase, color, currentColor);
			    			templateSetting.TemplateSettingValue = newColor;
			    			//templateSetting.updateColorFromBaseColor(newColor);
			    			templateSettingsArray.push(templateSetting);
			    		}else if (templateSetting.TemplateSettingKey == 'ColorBase'){
			    			templateSetting.TemplateSettingValue = color;
			    			templateSettingsArray.push(templateSetting);
			    		}
			    	}

			    	for(templateSettingIndex=0; templateSettingIndex < me.templateBudgetDefault.TemplateSettings.length; templateSettingIndex++){
			    		var templateSetting =me.templateBudgetDefault.TemplateSettings[templateSettingIndex];
			    		if(templateSetting.TemplateSettingTypeId === Constants.COLOR_SETTING_KEY && templateSetting.TemplateSettingKey !== 'ColorBase'){
			    			var currentColor = templateSetting.TemplateSettingValue;
			    			var newColor = Utils.transformColor(me.colorBase, color, currentColor);
			    			templateSetting.TemplateSettingValue = newColor;
			    			//templateSetting.updateColorFromBaseColor(newColor);
			    		}else if (templateSetting.TemplateSettingKey == 'ColorBase'){
			    			templateSetting.TemplateSettingValue = color;
			    		}
			    	}


			    	me.colorBase = color;
			    	me.sendingPreview=true;
			    	me.showLoadingTemplate(true);
	            	me.proxy.previewTemplate({
	            		CompanyId: me.companyId,
	            		TemplateId : me.templateDefault.TemplateId,
	            		TemplateSettings: templateSettingsArray,
	            		success:function(data){
	            			setTimeout(function(){me.sendingPreview=false;}, 1000);
	            			var url = Constants.DOWNLOAD_MEDIA+'uid='+data+'&show=1&height=390&width=277';
							jQuery('.templateViewer div').first().css('background-image', 'url('+Utils.getUrl(url)+')');
							me.showLoadingTemplate(false);
						}
	            	});
	            }
            }
        });
		this.addListenersTo();
	},

	getValues: function(){
		var values={};
		jQuery(this.id+" input").each(function(index){
			values[this.name] = jQuery.trim(jQuery(this).val());
        });
        return values;
	},

	showLoadingTemplate: function(show){
		jQuery(this.id+' .templateViewer .spinner')[show? 'show': 'hide']();
		jQuery(this.id+' .templateViewer > div').first()[show? 'addClass': 'removeClass']('opacity');
	},

	setDisabledSumbitButton: function(disabled){
	/*	jQuery(this.id+' .div-signup-button .btn-green').attr('disabled', disabled);
		jQuery(this.id+' .div-signup-button .btn-green')[disabled?'addClass':'removeClass']('btn-disabled');*/
	},

	show: function(options){
		this.alreadyUpload=false;
		this.showLoadingTemplate(true);
		var options = options || {};
		options.extended = true;
		// options.minHeight= 830;
		Utils.show(options, this);
		jQuery('.logo-ok').addClass('logo-star').removeClass('question');
		jQuery('.fullscreen .title').html(getTextByKey('freelance.title'));
    jQuery('.fullscreen .subtitle').html('');
		this.companyId = options.companyId;
		this.loadDefaultTemplate();
	},

	loadDefaultTemplate: function(){
		var me = this;
		this.proxy.searchTemplates({
			CompanyId: this.companyId,
			success: function(data){
				if(!jQuery.isEmptyObject(data)){
					me.initTemplates = data.slice();
					jQuery.each(data, function(i, template){
						if (template.TemplateId == Constants.TEMPLATE_ID){
							var url = Constants.DOWNLOAD_MEDIA+'uid='+template.TemplatePreviewImageUID+'&namespace=os/parc/report/template&show=1&height=390&width=277';
							jQuery('.templateViewer div').first().css('background-image', 'url('+Utils.getUrl(url)+')');
							me.showLoadingTemplate(false);
							me.templateDefault = template;
						}

						if(template.TemplateTypeId=== "5Y"){
							me.arrayUIDs.push(template);
						}else{
							me.arrayBudgets.push(template);
						}

					});
					me.loadTemplatePreviews();
					//me.markTemplateDefault();
				}
			},
			error: function(data){
				Utils.showPanelError(1, data.errorList[0]);
			}
		});
	},

	markTemplateDefault: function(){
		var me = this;
		me.proxy.markTemplateAsDefault({
			CompanyId: this.companyId,
			TemplateId: this.templateDefault.TemplateId,
			TemplateTypeId: this.templateDefault.TemplateTypeId,
			success: function(data){},
			error:function(data){
				Utils.showPanelError(1, data.errorList[0]);
			}
		});
	},

	getColorBaseFromTemplateSettings: function(templateSettingsArray){

	},

	loadTemplatePreviews: function(){
		var me = this;
		var element = null, img = null;
		var arrayTemplates =[], indexBerna = 0;
		jQuery.each(this.arrayUIDs, function(i, template){
			element = jQuery('<div />', {
				"class": "template",
				"data-id": template.TemplateId,
				"data-text": template.TemplateDescription,
				click: function () {
					me.showLoadingTemplate(true);
					var templateId = jQuery(this).attr('data-id');
					me.templateDefault = template;
					//me.markTemplateDefault();


					for(var templateSettingIndex=0; templateSettingIndex < template.TemplateSettings.length; templateSettingIndex++){
			    		var templateSetting =template.TemplateSettings[templateSettingIndex];
			    		if(templateSetting.TemplateSettingTypeId === Constants.COLOR_SETTING_KEY && templateSetting.TemplateSettingKey == 'ColorBase'){
			    			me.colorBase = templateSetting.TemplateSettingValue;
			    			if(!me.templateInit[templateId]){
			    				me.templateInit[templateId]= me.colorBase;
			    			}
			    			break;
			    		}
			    	}

			    	jQuery("#colorPicker span").trigger("colorpickersliders.updateColor", me.templateInit[templateId]);

			    	var index = Utils.getIndexIfObjWithAttr(me.arrayUIDs, "TemplateId", templateId);
					me.templateBudgetDefault = me.arrayBudgets[index];

			    	var templateSettingsArray = [], color = me.templateInit[templateId];
            	   	for(templateSettingIndex=0; templateSettingIndex < me.templateDefault.TemplateSettings.length; templateSettingIndex++){
			    		var templateSetting =me.templateDefault.TemplateSettings[templateSettingIndex];
			    		if(templateSetting.TemplateSettingTypeId === Constants.COLOR_SETTING_KEY && templateSetting.TemplateSettingKey !== 'ColorBase'){
			    			var currentColor = templateSetting.TemplateSettingValue;
			    			var newColor = Utils.transformColor(me.colorBase, color, currentColor);
			    			templateSetting.TemplateSettingValue = newColor;
			    			//templateSetting.updateColorFromBaseColor(newColor);
			    			templateSettingsArray.push(templateSetting);
			    		}else if (templateSetting.TemplateSettingKey == 'ColorBase'){
			    			templateSetting.TemplateSettingValue = color;
			    			templateSettingsArray.push(templateSetting);
			    		}
			    	}

			    	for(templateSettingIndex=0; templateSettingIndex < me.templateBudgetDefault.TemplateSettings.length; templateSettingIndex++){
			    		var templateSetting =me.templateBudgetDefault.TemplateSettings[templateSettingIndex];
			    		if(templateSetting.TemplateSettingTypeId === Constants.COLOR_SETTING_KEY && templateSetting.TemplateSettingKey !== 'ColorBase'){
			    			var currentColor = templateSetting.TemplateSettingValue;
			    			var newColor = Utils.transformColor(me.colorBase, color, currentColor);
			    			templateSetting.TemplateSettingValue = newColor;
			    			//templateSetting.updateColorFromBaseColor(newColor);
			    		}else if (templateSetting.TemplateSettingKey == 'ColorBase'){
			    			templateSetting.TemplateSettingValue = color;
			    		}
			    	}

			    	me.colorBase = color;

					jQuery(".sign, .changeColours").css("visibility", template.TemplateId!= "5Y"? "visible": "hidden");

					var url = Constants.DOWNLOAD_MEDIA+'uid='+template.TemplatePreviewImageUID+'&namespace=os/parc/report/template&show=1&height=390&width=277';
					jQuery('.templateViewer div').first().css('background-image', 'url('+Utils.getUrl(url)+')');
					me.showOrHidePreview(false);
					me.showLoadingTemplate(false);

				}
			});

			var url = Constants.PROTOCOL + '//' + Constants.WEB + "/wp-content/themes/anfix-5.0/desktop/images/templates/"+template.TemplatePreviewImageUID+".png";

			img = jQuery('<img>',{
				"class":"img-template",
				"src"	: url//Utils.getUrl(Constants.DOWNLOAD_MEDIA+'uid='+template.TemplatePreviewImageUID+'&namespace=os/parc/report/template&show=1&height=556&width=394')
			});
			element.append(img);
			if(template.TemplateId == me.templateDefault.TemplateId){
				indexBerna = i;
				element.addClass('scale-template');
			}
			arrayTemplates.push(element);

		});

		arrayTemplates = Utils.moveElementInArray(arrayTemplates, indexBerna, parseInt(arrayTemplates.length/2)+1);
		me.templateBudgetDefault = me.arrayBudgets[indexBerna];

		jQuery('.content-carousel').append(arrayTemplates);
		me.prepareCarousel();

	},

	hide: function(nohideFullScreen){
		Utils.hide({nohideFullScreen:nohideFullScreen}, this);
		jQuery('.logo-star').addClass('logo').removeClass('logo-star');
	},

	reset: function(){
		jQuery(this.id+' input').val('');
	},

	validate: function(){
		var values = this.getValues();
		if(!values.CorporateName) {
			Utils.markInvalidField(this.id,"CorporateName", false,getTextByKey('enterprise.error.corporatename'));
			Utils.showPanelError(1);
			return;
        }
        return true;
	},

	submit:function(eventObject){
		var me = eventObject ?eventObject.data.scope:this;

		var templateSettingsArray = [], templateSettingsArrayBudgets = [];

    	for(templateSettingIndex=0; templateSettingIndex < me.templateDefault.TemplateSettings.length; templateSettingIndex++){
    		var templateSetting =me.templateDefault.TemplateSettings[templateSettingIndex];
    		if(templateSetting.TemplateSettingTypeId === Constants.COLOR_SETTING_KEY){
    			templateSettingsArray.push(templateSetting);
    		}
    	}

    	for(templateSettingIndex=0; templateSettingIndex < me.templateBudgetDefault.TemplateSettings.length; templateSettingIndex++){
    		var templateSetting =me.templateBudgetDefault.TemplateSettings[templateSettingIndex];
    		if(templateSetting.TemplateSettingTypeId === Constants.COLOR_SETTING_KEY){
    			templateSettingsArrayBudgets.push(templateSetting);
    		}
    	}

    	Utils.showLoading();
		me.proxy.updateCompany({
			CompanyId: me.companyId,
			TemplateId : me.templateDefault.TemplateId,
			TemplateIdBudget: me.templateBudgetDefault.TemplateId,
			TemplateSettings: templateSettingsArray,
			TemplateSettingsBudgets: templateSettingsArrayBudgets,
			mediaUpdate: me.alreadyUpload,
			CompanyId: me.companyId,
			CompanyUID: me.companyUID,
			success:function(data){
				me.userSignUp.saveOrUpdateStepInfo({
					step: 5,
					information: {
						TemplateId: me.templateDefault.TemplateId,
						TemplateSettings: templateSettingsArray
					},
					email: getSignupForm().getValues().EMail,
					callback: function(){
						Utils.goHome();
					}
				});
				/*setTimeout(function(){
					Utils.goHome();
				}, 1500);*/

			},
			error: function(data){
				Utils.hideLoading();
				Utils.showPanelError(1, data.errorList[0]);
			}
		});
	},

	showOrHidePreview: function(showPreview){
		jQuery('.template-preview')[showPreview? 'fadeIn':'fadeOut']();
	},

	addListenersTo: function(){
		var me = this;
		jQuery(me.id+' .btn-green').on('click', {scope: me},me.submit);
		jQuery(me.id+" .templateViewer").hover(
			function(){
				jQuery(me.id+" .viewer-hover").show();
				jQuery(me.id+" .templateViewer div").first().addClass('opacity03');
			},
			function(){
				jQuery(me.id+" .viewer-hover").hide();
				jQuery(me.id+" .templateViewer div").first().removeClass('opacity03');
		}).click(function(){
			me.showOrHidePreview(true);
		});

		jQuery(me.id+' .base-color').click(function(){
			var position = jQuery(this).offset();
			jQuery('#colorPicker').fadeIn();
		});

		jQuery('.template-preview .close-preview').click(function(){me.showOrHidePreview(false)});

		jQuery(me.id+' #sign_file').change(function(){
			var file = jQuery(this)[0].files[0];
			if (file.type.indexOf("image") == 0) {
				var reader = new FileReader();
				reader.onload = function(e) {
					//jQuery(me.id+' .jcf-file').css('background-image', 'url('+e.target.result+')');

					jQuery(me.id+' .error-file').hide();
					getCropped().show({data:e.target.result, uploadFn: me.uploadLogo, scope:me});

				}

				reader.readAsDataURL(file);
			}else{
				jQuery(me.id+' .error-file').show();
			}
		});

		function FileDragHover(e) {
			e.stopPropagation();
			e.preventDefault();
			jQuery(me.id+' .sign')[e.type == "dragover" ? "addClass" : "removeClass"]("hover");
		}

		function FileSelectHandler(e) {

			// cancel event and hover styling
			FileDragHover(e);

			// fetch FileList object
			var files = e.target.files.length>0 ? e.target.files : e.dataTransfer.files;


			var file = files[0];
			if (file.type.indexOf("image") == 0) {
				var reader = new FileReader();
				reader.onload = function(e) {
					//jQuery(me.id+' .jcf-file').css('background-image', 'url('+e.target.result+')');
					jQuery(me.id+' .error-file').hide();
					getCropped().show({data:e.target.result, uploadFn: me.uploadLogo, scope:me});
				}

				reader.readAsDataURL(file);
			}else{
				jQuery(me.id+' .error-file').show();
			}
		}

		if(document.querySelector(me.id+' .sign')){
			document.querySelector(me.id+' .sign').addEventListener("dragover", FileDragHover, false);
			document.querySelector(me.id+' .sign').addEventListener("dragleave", FileDragHover, false);
			document.querySelector(me.id+' .sign').addEventListener("drop", FileSelectHandler, false);
		}

	},

	uploadLogo: function(dataBytes){
		var me = this;
		me.proxy.uploadFile({
			idFileInput:'sign_file',
			//fileList: files,
			dataBytes : dataBytes,
			success: function(data){
				me.alreadyUpload=true;
				me.companyUID = data;
			},
			error: function(data){
				Utils.showPanelError(1, data.errorList[0]);
			}
		});
	},

	prepareCarousel: function(){

		var me = this;
		var width = "385px";/*jQuery('.content-carousel .template').width();*/

		function carouselNext() {
			var index = jQuery('.content-carousel div').index(jQuery('.scale-template'));
			if(index != jQuery('.content-carousel div').length-1){
				jQuery('.content-carousel').filter(':not(:animated)').animate({
			        right: '+=' + width
			    }, 500, function () {
	                standOutTemplate(true);
			    });
			}
		}

		function standOutTemplate(direction){
			var center = jQuery(window).width()/2;
			var count =  jQuery('.content-carousel div').length;
			var index = jQuery('.content-carousel div').index(jQuery('.scale-template'));
			jQuery('.content-carousel div').eq(index).removeClass('scale-template');
			jQuery('.content-carousel div').eq(direction ? index+1: index-1).addClass('scale-template');

			if(direction && index +1  === count-1 ){
				jQuery('.control-right').hide();
			}else if(!direction && index==1){
				jQuery('.control-left').hide()
			}else{
				jQuery('.control-right, .control-left').show();
			}

		}

		jQuery('.control-left').click(function () {
		    var index = jQuery('.content-carousel div').index(jQuery('.scale-template'));
		    if(index!=0){
			    $('.content-carousel').filter(':not(:animated)').animate({
			        right: '-=' + width
			    },500, function () {
	                standOutTemplate(false);
			    });
			}
		});

		jQuery('.control-right').click(function () {
		    carouselNext();
		});
	}

};
/*
 * File:        jquery-selectify.js
 * Version:     0.2
 * Author:      Vincent Keizer (www.vicreative.nl)
 * Info:        www.vicreative.nl/projects/selectify
 *
 * Copyright 2012-2013 Vincent Keizer, all rights reserved.
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function ($) {
    // Helper methods for selectify
    var helper = {
        checkText: function (select, text) {
            // Checks if current text is still valid for keyboard input.
            if (select.data("selectify").text == text) {
                select.data("selectify").text = "";
            }
        }
    };

    // Events for selectify
    var events = {
        // Event fired when select element is activated.
        activate: function (event) {
          if(Utils.getBrowser().isIE){
            $(this).addClass("focus");
          }
          $(this).unbind("keydown")
                   .keydown(function (e) {
                       switch (e.which) {
                           case 40:
                               var hover = $(this).find(".option.hover");
                               if (!hover.length) {
                                   hover = $(this).find(".option.active");
                               }
                               var next = hover.next();
                               if (!next.length) {
                                   next = $(this).find(".option:first");
                               }
                               $(this).trigger("select", next);
                               e.preventDefault();
                               return false;
                           case 38:
                               var hover = $(this).find(".option.hover");
                               if (!hover.length) {
                                   hover = $(this).find(".option.active");
                               }
                               var prev = hover.prev();
                               if (!prev.length) {
                                   prev = $(this).find(".option:last");
                               }
                               $(this).trigger("select", prev);
                               e.preventDefault();
                               return false;
                           case 13:
                             var form = $(this).next().prop('form');
                             form = form ? form : $(this).prop('form');
                             if(!jQuery.isEmptyObject(form)) {
                                 e.data = {scope:form};
                                 e.target = $(this);
                                Utils.move(e);
                             }
                               $(this).trigger("close");
                               break;
                           case 9:
                             var form = $(this).next().prop('form');
                             form = form ? form : $(this).prop('form');
                             if(!jQuery.isEmptyObject(form)) {
                                 e.data = {scope:form};
                                 e.target = $(this);
                                 Utils.move(e);
                             }
                               $(this).trigger("removefocus");
                               break;
                           default:
                               var data = event.data.select.data("selectify");
                               var char2 = String.fromCharCode(e.which);
                               if (!char2) {
                                   data.text = "";
                                   break;
                               }
                               var text = data.text || "";
                               text = text + char2.toLowerCase();
                               data.text = text;
                               setTimeout(function () {
                                   helper.checkText(event.data.select, text);
                               }, 1000);

                               var found = $(this).find(".option[data-text^='" + text + "']:first");
                               if (found.length) {
                                   $(this).trigger("select", found);
                               }
                               break;
                       }
                   });
        },
        // Event fired when select receives focus.
        focus: function (event) {
            target = event.originalEvent ? event.originalEvent.explicitOriginalTarget || event.originalEvent.srcElement : null;

            if ($(this).hasClass("focus") && $(this).hasClass("open")) {
              return;
            }else if(!$(this).hasClass("open")){
              if(!$(this).hasClass("focus") || $(this).hasClass("navigate")){
            $(this).trigger("activate");
            $(this).trigger("open");
              }
            } else if (!$(this).hasClass("open") && (target == null || !event.data.select.has($(target)))) {
                $(this).trigger("open");
            }
            $(this).addClass("focus");  
            $(this).trigger("activate");

        },
        // Event fired when select loses focus.
        blur: function (event) {
            var select = $(this);
            if (event.data && event.data.select) {
                select = event.data.select;
            }
            if (select.hasClass("open")) {
                select.removeClass("focus")
                   .trigger("close")
                   .unbind("keydown");
                $(document).unbind("click", events.blur);
            }
            $(this).removeClass("navigate"); 
        },
        // Event fired when select is opened.
        open: function (event) {
            if (!$(this).hasClass("open"));
            {
              $('.selectify.selectify-rounded-box.open').trigger("close");
              
                // IE 10 gives us problems when scrollbar is clicked, it sends an focusout event.
                $(document).click({ select: $(this) }, events.blur);
                event.preventDefault();
                $(this).find(".options").slideDown("fast", function () {
                  var that = this;
                    $(this).parents(".selectify").addClass("open");
                    $(this).trigger("scrollTo", $(this).children(".option.active"));
                    if($(this).children(".option.active").length !== 0){
                      $(this).children(".option.active").focus();
                    }else{
                      $(this).children().first().focus();
                    }
                });
                var selectify =  $(this).hasClass('selectify') ? $(this) : $(this).parents(".selectify"),
                options = $(selectify).children('.options').children(),
                optionsHeight = $(options[0]).outerHeight() * options.length,
                scrollTop = $(window).scrollTop();
//              if(selectify.offset().top + selectify.outerHeight() + optionsHeight >= $(window).outerHeight() + scrollTop){
//                $(window).scrollTop(scrollTop + optionsHeight);
//              }
                return false;
            }
        },
        // Event fired when select is closed.
        close: function () {
            if ($(this).hasClass("open"));
            {
                $(this).removeClass("open")
                       .find(".options").slideUp();
            }
        },
        // Event fired when select is scrolled.
        scroll: function (selector, element) {
            if (!element || typeof element != "object" || !$(element).length) { return; }
            var $element = $(element);
            var currentPos = $(this).find(".options").scrollTop();
            var selectedPos = $element.position().top + currentPos;
            var containerHeight = $(this).find(".options").height();
            
            if($(element).length == 1 && currentPos == selectedPos) {
              return;
            }
            if (selectedPos < currentPos) {
                $(this).find(".options").scrollTop(selectedPos);
            }
            else if (selectedPos + $element.outerHeight() >= currentPos + containerHeight) {
                $(this).find(".options").scrollTop(selectedPos - (containerHeight - $element.outerHeight()));
            }
        },
        // Event fired when an option in select is selected.
        select: function (event, selected) {
            if (!selected && selected!="") {
                return;
            }
            if (typeof selected == "string") {
                $(this).find(".option[data-id='" + selected + "']:not(.active)").click();
                if(!jQuery.isEmptyObject(selected)){
                  $(this).find(".header div:first").addClass('selected-blue');
                }
                return;
            }
            if (typeof selected == "object") {
                var $selected = $(selected);
                var id = $selected.attr("data-id");
                event.data.select.val(id);
                $(this).find(".selected").attr("data-id", id)
                                         .html($selected.html());
                $(this).find(".option.active").removeClass("active");
                $selected.addClass("active");
                $(this).find(".option.hover").removeClass("hover");
                $(this).trigger("scrollTo", $selected);
                // Call change event on select to trigger other bound events.
                event.data.select.change();
                $(this).removeClass("navigate"); 
            }
        },
        // Event fired when change event on original element is triggered.
        change: function () {
            $(this).data("selectify").selectify.trigger("select", $(this).val());
        }
    };
 var methods = {
        init: function (args) {
            var settings = $.extend({
              'style': 'default',
              'maxItems': 10
            }, args);
            
            
            var loadDataCollection = settings.loadDataCollection==false ? false : true;
            var me = this;
            
            if(settings.collection && !settings.collection.loadData && loadDataCollection){
               _(settings.collection.models).each(function(model){ // in case collection is not empty
                 var value = model.get(settings.valueField || 'value');
                 var label = model.get(settings.labelField || 'label');
                 if(!$.isEmptyObject(value) || !$.isEmptyObject(label) || $.isNumeric(value) || $.isNumeric(label)) {
                   me.append('<option value="'+value+'">'+label+'</option>');
                 }
                }, this);
               if(settings.successCallback)
                 settings.successCallback.call();
            }else if(settings.collection && settings.collection.loadData && loadDataCollection){
              settings.collection.loadData({success:function(collection){
                _(collection.models).each(function(model){ 
                     var value = model.get(settings.valueField);
                   var label = model.get(settings.labelField);
                   if(!$.isEmptyObject(value) || !$.isEmptyObject(label)) {
                    me.append('<option value="'+value+'">'+label+'</option>');
                   }
                      }, this);
                  me.selectify('load', settings.defaultValue, settings);
                  if(settings.successCallback)
                    settings.successCallback.call();
                }
                });
            }
            

            return $(this).each(function () {
                var $this = $(this);
                var data = $this.data('selectify');

                // If the plugin hasn't been initialized yet
                if (!data) {
                    var select = $('<div />', {
                        "class": "selectify "+settings.style,
                        "id": 'selectify' + $this.attr('id'),
                        "tabindex": "0"
                    }).bind("focus", { select: $this }, events.focus)
                      .bind("removefocus", events.blur)
                      .bind("close", events.close)
                      .bind("open", events.open)
                      .bind("scrollTo", events.scroll)
                      .bind("activate", { select: $this }, events.activate)
                      .bind("select", { select: $this }, events.select);

                    var options = $("<div />", {
                        "class": 'options'
                    });
                    var selected = $("<div />", {
                        "class": jQuery.isEmptyObject($this.children(":selected").val())? 'selected': 'selected selected-blue',
                        "data-id": $this.children(":selected").val(),
                        text: $this.children(":selected").text()
                    });

                    var header = $("<div />", {
                        "class": "header",
                        click: function () {
                            if ($(this).hasClass("bg-disabled")){
                                return;
                            }

                            if ($(this).parent().hasClass("open")
                             && $(this).parent().hasClass("focus")) {
                                $(this).trigger("close");
                            }
                            else if (!$(this).parent().hasClass("focus")) {
                                $(this).trigger("activate");
                            }
                            else {
                                $(this).trigger("open");
                            }
                        },
                        mouseover: function () {
                            $(this).addClass("hover");
                        },
                        mouseout: function () {
                            $(this).removeClass("hover");
                        }
                    });

                   var icon = $("<div/>", {
                        "class": "combo-web",
                        "data-icon":settings.icon || 'L'
                    });

                    $this.children().each(function () {
                        var option = $('<div />', {
                            "class": "option",
                            "tabindex": "-1",
                            "style": $.isEmptyObject($(this).val())? "display:none;": "display:block;",
                            "data-id": $(this).val(),
                            "data-text": $(this).text().toLowerCase(),
                            html: settings.render ? settings.render(settings.collection, $(this).attr('value')) : $(this).text(),
                            click: function () {
                                $(this).trigger("select", this)
                                       .trigger("close");
                            },
                            mouseover: function () {
                                $(this).siblings().removeClass("hover");
                                $(this).addClass("hover");
                            },
                            mouseout: function () {
                                $(this).removeClass("hover");
                            }
                        });
                        options.append(option);
                    });
                    select.append(header.append(selected)
                                        .append(icon))
                          .append(options);
                    $this.before(select);
                    
                    if (settings.liquid) { 
                      select.addClass("selectify-select-liquid");
                        selected.addClass("selectify-selected-liquid");
                        options.addClass("selectify-options-liquid");
                        options.hide();
                    } else {
                      var width = settings.width || options.outerWidth() + icon.outerWidth();
                        //options.width(width);
                        select.width(width);
                        selected.css('width', (width-23)+'px');
                        //options.css("max-height", settings.maxItems * options.children().outerHeight()).hide();
                        options.css("max-height", (settings.maxItems * 30)+2).hide();
                        options.css("minWidth", width+'px');
                    }
                    
                    $this.data('selectify', {
                        target: $this,
                        selectify: select,
                        text: ""
                    }).change(events.change).hide();
                }
            });
        },
        destroy: function () {
            return this.each(function () {
                var $this = $(this),
                    data = $this.data('selectify');
                if (data) {
                    $(window).unbind('.selectify');
                    data.selectify.remove();
                    $this.removeData('selectify')
                        .unbind("change", events.change)
                        .show();
                }
            });
        },
        open: function () {
            return this.each(function () {
                var data = $(this).data("selectify");
                if (data) {
                    data.selectify.focus();
                }
            });
        },
        close: function () {
            return this.each(function () {
                var data = $(this).data('selectify');
                if (data) {
                    data.selectify.trigger("removefocus");
                }
            });
        },
        update: function (content) {
            return this.each(function () {
                var data = $(this).data('selectify');
                if (data) {
                    data.selectify.trigger("select", content);
                }
            });
        },

        load: function(valueSelected, settings){
          $this = $(this);
          var id = '#selectify' +$this.attr('id'),
            width = parseInt(jQuery(id).css('width')),
            liquid = settings.liquid || false;
          
          var form = $(this).prev().prop('form');
          $this.selectify('destroy');
          var config = {};
          if(settings){
            config=$.extend({width:width, maxItems:6, liquid: liquid}, {style: settings.style,icon:settings.icon });
          }
          $this.selectify(config);
          $(this).prev().prop('form', form);
          
          jQuery(this).selectify('update', valueSelected);
        },
        
        loadCollection : function(options){
          $this = $(this);
          var id = '#selectify' +$this.attr('id'),
              width = options.width ? options.width : parseInt(jQuery(id).css('width')),
              liquid = options.liquid || false;
           var collection = options.collection;
            $('#'+$this.attr("id")+ ' option').remove();
          _(collection.models).each(function(model){ 
        $('#'+$this.attr("id")).append('<option value="'+model.get(options.valueField)+'">'+model.get(options.labelField)+'</option>');
            }, this); 

          var form = $(this).prev().prop('form');
            $this.selectify('destroy');
            var loadDataCollection = options.loadDataCollection==false ? false : true;
            $this.selectify({width:width, maxItems:options.maxItems, liquid: liquid, render: options.render, collection: options.collection, loadDataCollection: loadDataCollection, style:options.style});
            //TODO: nuevo metodo para el refresco del combo
            /*
            var settings = $.extend({width:width, maxItems: 5, liquid: liquid}, options);
            $this.selectify(settings);
            */
            $(this).prev().prop('form', form);
            $this.selectify('update', options.defaultValue);
            if(collection.models.length>1 && options && !options.noOpen){
              $this.selectify('open');
            }
        },
        
        loadNewCollection: function(options){
          $this = $(this);
          var id = '#selectify' +$this.attr('id'),
              width = parseInt(jQuery(id).css('width')),
              liquid = options.liquid || false;
           var collection = options.collection;
            $('#'+$this.attr("id")+ ' option').remove();
            _(collection.models).each(function(model){ 
        $('#'+$this.attr("id")).append('<option value="'+model.get(options.valueField)+'">'+model.get(options.labelField)+'</option>');
            }, this);
            var form = $(this).prev().prop('form');
            $this.selectify('destroy');
            $("option",$this).remove();
            //$this.selectify({width:width, maxItems:options.maxItems, liquid: liquid});
            
            var settings = $.extend({width:width, maxItems: 5, liquid: liquid}, options);
            $this.selectify(settings);
            $(this).prev().prop('form', form);
            
            $this.selectify('update', options.defaultValue);
            if(collection.models.length>1 && options && !options.noOpen){
              $this.selectify('open');
            }
        },

        disable: function(content){
          $this = $(this);
          var id = '#selectify' +$this.attr('id');
          jQuery(id+ ' .header')[content?"addClass":"removeClass"]("bg-disabled");
          jQuery(id+ ' .selected')[content?"addClass":"removeClass"]("bg-disabled");
        },

        markValid: function(){
          $this = $(this);
          var id = '#selectify' +$this.attr('id');
          jQuery(id).removeClass('OK-combo KO-combo');
          jQuery(id).addClass('OK-combo');
        },
        markInvalid: function(){
          $this = $(this);
          var id = '#selectify' +$this.attr('id');
          jQuery(id).removeClass('OK-combo KO-combo');
          jQuery(id).addClass('KO-combo');
        },
        reset: function(resetValue){
          $this = $(this);
          var id = '#selectify' +$this.attr('id');
          jQuery(id).removeClass(' OK-combo KO-combo');
          
          if(resetValue){
             return this.each(function () {
                var data = $(this).data('selectify');
                if (data) {
                    data.selectify.trigger("select", '');
                }
            });
          }
        }
    };

    $.fn.selectify = function (options) {
        var method = options;
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.selectify');
        }
    };
})(jQuery);
var dbits,canary=244837814094590,j_lm=(canary&16777215)==15715070;function BigInteger(a,b,c){a!=null&&("number"==typeof a?this.fromNumber(a,b,c):b==null&&"string"!=typeof a?this.fromString(a,256):this.fromString(a,b))}function nbi(){return new BigInteger(null)}function am1(a,b,c,d,e,g){for(;--g>=0;){var h=b*this[a++]+c[d]+e,e=Math.floor(h/67108864);c[d++]=h&67108863}return e}
function am2(a,b,c,d,e,g){var h=b&32767;for(b>>=15;--g>=0;){var f=this[a]&32767,o=this[a++]>>15,p=b*f+o*h,f=h*f+((p&32767)<<15)+c[d]+(e&1073741823),e=(f>>>30)+(p>>>15)+b*o+(e>>>30);c[d++]=f&1073741823}return e}function am3(a,b,c,d,e,g){var h=b&16383;for(b>>=14;--g>=0;){var f=this[a]&16383,o=this[a++]>>14,p=b*f+o*h,f=h*f+((p&16383)<<14)+c[d]+e,e=(f>>28)+(p>>14)+b*o;c[d++]=f&268435455}return e}
j_lm&&navigator.appName=="Microsoft Internet Explorer"?(BigInteger.prototype.am=am2,dbits=30):j_lm&&navigator.appName!="Netscape"?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28);BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=[],rr,vv;
rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;function int2char(a){return BI_RM.charAt(a)}function intAt(a,b){var c=BI_RC[a.charCodeAt(b)];return c==null?-1:c}function bnpCopyTo(a){for(var b=this.t-1;b>=0;--b)a[b]=this[b];a.t=this.t;a.s=this.s}function bnpFromInt(a){this.t=1;this.s=a<0?-1:0;a>0?this[0]=a:a<-1?this[0]=a+DV:this.t=0}
function nbv(a){var b=nbi();b.fromInt(a);return b}
function bnpFromString(a,b){var c;if(b==16)c=4;else if(b==8)c=3;else if(b==256)c=8;else if(b==2)c=1;else if(b==32)c=5;else if(b==4)c=2;else{this.fromRadix(a,b);return}this.s=this.t=0;for(var d=a.length,e=!1,g=0;--d>=0;){var h=c==8?a[d]&255:intAt(a,d);h<0?a.charAt(d)=="-"&&(e=!0):(e=!1,g==0?this[this.t++]=h:g+c>this.DB?(this[this.t-1]|=(h&(1<<this.DB-g)-1)<<g,this[this.t++]=h>>this.DB-g):this[this.t-1]|=h<<g,g+=c,g>=this.DB&&(g-=this.DB))}if(c==8&&(a[0]&128)!=0)this.s=-1,g>0&&(this[this.t-1]|=(1<<
this.DB-g)-1<<g);this.clamp();e&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var a=this.s&this.DM;this.t>0&&this[this.t-1]==a;)--this.t}
function bnToString(a){if(this.s<0)return"-"+this.negate().toString(a);if(a==16)a=4;else if(a==8)a=3;else if(a==2)a=1;else if(a==32)a=5;else if(a==64)a=6;else if(a==4)a=2;else return this.toRadix(a);var b=(1<<a)-1,c,d=!1,e="",g=this.t,h=this.DB-g*this.DB%a;if(g-- >0){if(h<this.DB&&(c=this[g]>>h)>0)d=!0,e=int2char(c);for(;g>=0;)h<a?(c=(this[g]&(1<<h)-1)<<a-h,c|=this[--g]>>(h+=this.DB-a)):(c=this[g]>>(h-=a)&b,h<=0&&(h+=this.DB,--g)),c>0&&(d=!0),d&&(e+=int2char(c))}return d?e:"0"}
function bnNegate(){var a=nbi();BigInteger.ZERO.subTo(this,a);return a}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var b=this.s-a.s;if(b!=0)return b;var c=this.t,b=c-a.t;if(b!=0)return b;for(;--c>=0;)if((b=this[c]-a[c])!=0)return b;return 0}function nbits(a){var b=1,c;if((c=a>>>16)!=0)a=c,b+=16;if((c=a>>8)!=0)a=c,b+=8;if((c=a>>4)!=0)a=c,b+=4;if((c=a>>2)!=0)a=c,b+=2;a>>1!=0&&(b+=1);return b}
function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(a,b){var c;for(c=this.t-1;c>=0;--c)b[c+a]=this[c];for(c=a-1;c>=0;--c)b[c]=0;b.t=this.t+a;b.s=this.s}function bnpDRShiftTo(a,b){for(var c=a;c<this.t;++c)b[c-a]=this[c];b.t=Math.max(this.t-a,0);b.s=this.s}
function bnpLShiftTo(a,b){var c=a%this.DB,d=this.DB-c,e=(1<<d)-1,g=Math.floor(a/this.DB),h=this.s<<c&this.DM,f;for(f=this.t-1;f>=0;--f)b[f+g+1]=this[f]>>d|h,h=(this[f]&e)<<c;for(f=g-1;f>=0;--f)b[f]=0;b[g]=h;b.t=this.t+g+1;b.s=this.s;b.clamp()}
function bnpRShiftTo(a,b){b.s=this.s;var c=Math.floor(a/this.DB);if(c>=this.t)b.t=0;else{var d=a%this.DB,e=this.DB-d,g=(1<<d)-1;b[0]=this[c]>>d;for(var h=c+1;h<this.t;++h)b[h-c-1]|=(this[h]&g)<<e,b[h-c]=this[h]>>d;d>0&&(b[this.t-c-1]|=(this.s&g)<<e);b.t=this.t-c;b.clamp()}}
function bnpSubTo(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);c<e;)d+=this[c]-a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d-=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d-=a[c],b[c++]=d&this.DM,d>>=this.DB;d-=a.s}b.s=d<0?-1:0;d<-1?b[c++]=this.DV+d:d>0&&(b[c++]=d);b.t=c;b.clamp()}
function bnpMultiplyTo(a,b){var c=this.abs(),d=a.abs(),e=c.t;for(b.t=e+d.t;--e>=0;)b[e]=0;for(e=0;e<d.t;++e)b[e+c.t]=c.am(0,d[e],b,e,0,c.t);b.s=0;b.clamp();this.s!=a.s&&BigInteger.ZERO.subTo(b,b)}function bnpSquareTo(a){for(var b=this.abs(),c=a.t=2*b.t;--c>=0;)a[c]=0;for(c=0;c<b.t-1;++c){var d=b.am(c,b[c],a,2*c,0,1);if((a[c+b.t]+=b.am(c+1,2*b[c],a,2*c+1,d,b.t-c-1))>=b.DV)a[c+b.t]-=b.DV,a[c+b.t+1]=1}a.t>0&&(a[a.t-1]+=b.am(c,b[c],a,2*c,0,1));a.s=0;a.clamp()}
function bnpDivRemTo(a,b,c){var d=a.abs();if(!(d.t<=0)){var e=this.abs();if(e.t<d.t)b!=null&&b.fromInt(0),c!=null&&this.copyTo(c);else{c==null&&(c=nbi());var g=nbi(),h=this.s,a=a.s,f=this.DB-nbits(d[d.t-1]);f>0?(d.lShiftTo(f,g),e.lShiftTo(f,c)):(d.copyTo(g),e.copyTo(c));d=g.t;e=g[d-1];if(e!=0){var o=e*(1<<this.F1)+(d>1?g[d-2]>>this.F2:0),p=this.FV/o,o=(1<<this.F1)/o,q=1<<this.F2,n=c.t,k=n-d,j=b==null?nbi():b;g.dlShiftTo(k,j);c.compareTo(j)>=0&&(c[c.t++]=1,c.subTo(j,c));BigInteger.ONE.dlShiftTo(d,
j);for(j.subTo(g,g);g.t<d;)g[g.t++]=0;for(;--k>=0;){var l=c[--n]==e?this.DM:Math.floor(c[n]*p+(c[n-1]+q)*o);if((c[n]+=g.am(0,l,c,k,0,d))<l){g.dlShiftTo(k,j);for(c.subTo(j,c);c[n]<--l;)c.subTo(j,c)}}b!=null&&(c.drShiftTo(d,b),h!=a&&BigInteger.ZERO.subTo(b,b));c.t=d;c.clamp();f>0&&c.rShiftTo(f,c);h<0&&BigInteger.ZERO.subTo(c,c)}}}}function bnMod(a){var b=nbi();this.abs().divRemTo(a,null,b);this.s<0&&b.compareTo(BigInteger.ZERO)>0&&a.subTo(b,b);return b}function Classic(a){this.m=a}
function cConvert(a){return a.s<0||a.compareTo(this.m)>=0?a.mod(this.m):a}function cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function cMulTo(a,b,c){a.multiplyTo(b,c);this.reduce(c)}function cSqrTo(a,b){a.squareTo(b);this.reduce(b)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;
function bnpInvDigit(){if(this.t<1)return 0;var a=this[0];if((a&1)==0)return 0;var b=a&3,b=b*(2-(a&15)*b)&15,b=b*(2-(a&255)*b)&255,b=b*(2-((a&65535)*b&65535))&65535,b=b*(2-a*b%this.DV)%this.DV;return b>0?this.DV-b:-b}function Montgomery(a){this.m=a;this.mp=a.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<a.DB-15)-1;this.mt2=2*a.t}
function montConvert(a){var b=nbi();a.abs().dlShiftTo(this.m.t,b);b.divRemTo(this.m,null,b);a.s<0&&b.compareTo(BigInteger.ZERO)>0&&this.m.subTo(b,b);return b}function montRevert(a){var b=nbi();a.copyTo(b);this.reduce(b);return b}
function montReduce(a){for(;a.t<=this.mt2;)a[a.t++]=0;for(var b=0;b<this.m.t;++b){var c=a[b]&32767,d=c*this.mpl+((c*this.mph+(a[b]>>15)*this.mpl&this.um)<<15)&a.DM,c=b+this.m.t;for(a[c]+=this.m.am(0,d,a,b,0,this.m.t);a[c]>=a.DV;)a[c]-=a.DV,a[++c]++}a.clamp();a.drShiftTo(this.m.t,a);a.compareTo(this.m)>=0&&a.subTo(this.m,a)}function montSqrTo(a,b){a.squareTo(b);this.reduce(b)}function montMulTo(a,b,c){a.multiplyTo(b,c);this.reduce(c)}Montgomery.prototype.convert=montConvert;
Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(a,b){if(a>4294967295||a<1)return BigInteger.ONE;var c=nbi(),d=nbi(),e=b.convert(this),g=nbits(a)-1;for(e.copyTo(c);--g>=0;)if(b.sqrTo(c,d),(a&1<<g)>0)b.mulTo(d,e,c);else var h=c,c=d,d=h;return b.revert(c)}
function bnModPowInt(a,b){var c;c=a<256||b.isEven()?new Classic(b):new Montgomery(b);return this.exp(a,c)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;
BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;
BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);function bnClone(){var a=nbi();this.copyTo(a);return a}function bnIntValue(){if(this.s<0)if(this.t==1)return this[0]-this.DV;else{if(this.t==0)return-1}else if(this.t==1)return this[0];else if(this.t==0)return 0;return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}
function bnpChunkSize(a){return Math.floor(Math.LN2*this.DB/Math.log(a))}function bnSigNum(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function bnpToRadix(a){a==null&&(a=10);if(this.signum()==0||a<2||a>36)return"0";var b=this.chunkSize(a),b=Math.pow(a,b),c=nbv(b),d=nbi(),e=nbi(),g="";for(this.divRemTo(c,d,e);d.signum()>0;)g=(b+e.intValue()).toString(a).substr(1)+g,d.divRemTo(c,d,e);return e.intValue().toString(a)+g}
function bnpFromRadix(a,b){this.fromInt(0);b==null&&(b=10);for(var c=this.chunkSize(b),d=Math.pow(b,c),e=!1,g=0,h=0,f=0;f<a.length;++f){var o=intAt(a,f);o<0?a.charAt(f)=="-"&&this.signum()==0&&(e=!0):(h=b*h+o,++g>=c&&(this.dMultiply(d),this.dAddOffset(h,0),h=g=0))}g>0&&(this.dMultiply(Math.pow(b,g)),this.dAddOffset(h,0));e&&BigInteger.ZERO.subTo(this,this)}
function bnpFromNumber(a,b,c){if("number"==typeof b)if(a<2)this.fromInt(1);else{this.fromNumber(a,c);this.testBit(a-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);for(this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(b);)this.dAddOffset(2,0),this.bitLength()>a&&this.subTo(BigInteger.ONE.shiftLeft(a-1),this)}else{var c=[],d=a&7;c.length=(a>>3)+1;b.nextBytes(c);d>0?c[0]&=(1<<d)-1:c[0]=0;this.fromString(c,256)}}
function bnToByteArray(){var a=this.t,b=[];b[0]=this.s;var c=this.DB-a*this.DB%8,d,e=0;if(a-- >0){if(c<this.DB&&(d=this[a]>>c)!=(this.s&this.DM)>>c)b[e++]=d|this.s<<this.DB-c;for(;a>=0;)if(c<8?(d=(this[a]&(1<<c)-1)<<8-c,d|=this[--a]>>(c+=this.DB-8)):(d=this[a]>>(c-=8)&255,c<=0&&(c+=this.DB,--a)),(d&128)!=0&&(d|=-256),e==0&&(this.s&128)!=(d&128)&&++e,e>0||d!=this.s)b[e++]=d}return b}function bnEquals(a){return this.compareTo(a)==0}function bnMin(a){return this.compareTo(a)<0?this:a}
function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,b,c){var d,e,g=Math.min(a.t,this.t);for(d=0;d<g;++d)c[d]=b(this[d],a[d]);if(a.t<this.t){e=a.s&this.DM;for(d=g;d<this.t;++d)c[d]=b(this[d],e);c.t=this.t}else{e=this.s&this.DM;for(d=g;d<a.t;++d)c[d]=b(e,a[d]);c.t=a.t}c.s=b(this.s,a.s);c.clamp()}function op_and(a,b){return a&b}function bnAnd(a){var b=nbi();this.bitwiseTo(a,op_and,b);return b}function op_or(a,b){return a|b}
function bnOr(a){var b=nbi();this.bitwiseTo(a,op_or,b);return b}function op_xor(a,b){return a^b}function bnXor(a){var b=nbi();this.bitwiseTo(a,op_xor,b);return b}function op_andnot(a,b){return a&~b}function bnAndNot(a){var b=nbi();this.bitwiseTo(a,op_andnot,b);return b}function bnNot(){for(var a=nbi(),b=0;b<this.t;++b)a[b]=this.DM&~this[b];a.t=this.t;a.s=~this.s;return a}function bnShiftLeft(a){var b=nbi();a<0?this.rShiftTo(-a,b):this.lShiftTo(a,b);return b}
function bnShiftRight(a){var b=nbi();a<0?this.lShiftTo(-a,b):this.rShiftTo(a,b);return b}function lbit(a){if(a==0)return-1;var b=0;(a&65535)==0&&(a>>=16,b+=16);(a&255)==0&&(a>>=8,b+=8);(a&15)==0&&(a>>=4,b+=4);(a&3)==0&&(a>>=2,b+=2);(a&1)==0&&++b;return b}function bnGetLowestSetBit(){for(var a=0;a<this.t;++a)if(this[a]!=0)return a*this.DB+lbit(this[a]);return this.s<0?this.t*this.DB:-1}function cbit(a){for(var b=0;a!=0;)a&=a-1,++b;return b}
function bnBitCount(){for(var a=0,b=this.s&this.DM,c=0;c<this.t;++c)a+=cbit(this[c]^b);return a}function bnTestBit(a){var b=Math.floor(a/this.DB);return b>=this.t?this.s!=0:(this[b]&1<<a%this.DB)!=0}function bnpChangeBit(a,b){var c=BigInteger.ONE.shiftLeft(a);this.bitwiseTo(c,b,c);return c}function bnSetBit(a){return this.changeBit(a,op_or)}function bnClearBit(a){return this.changeBit(a,op_andnot)}function bnFlipBit(a){return this.changeBit(a,op_xor)}
function bnpAddTo(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);c<e;)d+=this[c]+a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d+=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d+=a[c],b[c++]=d&this.DM,d>>=this.DB;d+=a.s}b.s=d<0?-1:0;d>0?b[c++]=d:d<-1&&(b[c++]=this.DV+d);b.t=c;b.clamp()}function bnAdd(a){var b=nbi();this.addTo(a,b);return b}function bnSubtract(a){var b=nbi();this.subTo(a,b);return b}
function bnMultiply(a){var b=nbi();this.multiplyTo(a,b);return b}function bnSquare(){var a=nbi();this.squareTo(a);return a}function bnDivide(a){var b=nbi();this.divRemTo(a,b,null);return b}function bnRemainder(a){var b=nbi();this.divRemTo(a,null,b);return b}function bnDivideAndRemainder(a){var b=nbi(),c=nbi();this.divRemTo(a,b,c);return[b,c]}function bnpDMultiply(a){this[this.t]=this.am(0,a-1,this,0,0,this.t);++this.t;this.clamp()}
function bnpDAddOffset(a,b){if(a!=0){for(;this.t<=b;)this[this.t++]=0;for(this[b]+=a;this[b]>=this.DV;)this[b]-=this.DV,++b>=this.t&&(this[this.t++]=0),++this[b]}}function NullExp(){}function nNop(a){return a}function nMulTo(a,b,c){a.multiplyTo(b,c)}function nSqrTo(a,b){a.squareTo(b)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(a){return this.exp(a,new NullExp)}
function bnpMultiplyLowerTo(a,b,c){var d=Math.min(this.t+a.t,b);c.s=0;for(c.t=d;d>0;)c[--d]=0;var e;for(e=c.t-this.t;d<e;++d)c[d+this.t]=this.am(0,a[d],c,d,0,this.t);for(e=Math.min(a.t,b);d<e;++d)this.am(0,a[d],c,d,0,b-d);c.clamp()}function bnpMultiplyUpperTo(a,b,c){--b;var d=c.t=this.t+a.t-b;for(c.s=0;--d>=0;)c[d]=0;for(d=Math.max(b-this.t,0);d<a.t;++d)c[this.t+d-b]=this.am(b-d,a[d],c,0,0,this.t+d-b);c.clamp();c.drShiftTo(1,c)}
function Barrett(a){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*a.t,this.r2);this.mu=this.r2.divide(a);this.m=a}function barrettConvert(a){if(a.s<0||a.t>2*this.m.t)return a.mod(this.m);else if(a.compareTo(this.m)<0)return a;else{var b=nbi();a.copyTo(b);this.reduce(b);return b}}function barrettRevert(a){return a}
function barrettReduce(a){a.drShiftTo(this.m.t-1,this.r2);if(a.t>this.m.t+1)a.t=this.m.t+1,a.clamp();this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);for(this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);a.compareTo(this.r2)<0;)a.dAddOffset(1,this.m.t+1);for(a.subTo(this.r2,a);a.compareTo(this.m)>=0;)a.subTo(this.m,a)}function barrettSqrTo(a,b){a.squareTo(b);this.reduce(b)}function barrettMulTo(a,b,c){a.multiplyTo(b,c);this.reduce(c)}Barrett.prototype.convert=barrettConvert;
Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;
function bnModPow(a,b){var c=a.bitLength(),d,e=nbv(1),g;if(c<=0)return e;else d=c<18?1:c<48?3:c<144?4:c<768?5:6;g=c<8?new Classic(b):b.isEven()?new Barrett(b):new Montgomery(b);var h=[],f=3,o=d-1,p=(1<<d)-1;h[1]=g.convert(this);if(d>1){c=nbi();for(g.sqrTo(h[1],c);f<=p;)h[f]=nbi(),g.mulTo(c,h[f-2],h[f]),f+=2}for(var q=a.t-1,n,k=!0,j=nbi(),c=nbits(a[q])-1;q>=0;){c>=o?n=a[q]>>c-o&p:(n=(a[q]&(1<<c+1)-1)<<o-c,q>0&&(n|=a[q-1]>>this.DB+c-o));for(f=d;(n&1)==0;)n>>=1,--f;if((c-=f)<0)c+=this.DB,--q;if(k)h[n].copyTo(e),
k=!1;else{for(;f>1;)g.sqrTo(e,j),g.sqrTo(j,e),f-=2;f>0?g.sqrTo(e,j):(f=e,e=j,j=f);g.mulTo(j,h[n],e)}for(;q>=0&&(a[q]&1<<c)==0;)g.sqrTo(e,j),f=e,e=j,j=f,--c<0&&(c=this.DB-1,--q)}return g.revert(e)}
function bnGCD(a){var b=this.s<0?this.negate():this.clone(),a=a.s<0?a.negate():a.clone();if(b.compareTo(a)<0)var c=b,b=a,a=c;var c=b.getLowestSetBit(),d=a.getLowestSetBit();if(d<0)return b;c<d&&(d=c);d>0&&(b.rShiftTo(d,b),a.rShiftTo(d,a));for(;b.signum()>0;)(c=b.getLowestSetBit())>0&&b.rShiftTo(c,b),(c=a.getLowestSetBit())>0&&a.rShiftTo(c,a),b.compareTo(a)>=0?(b.subTo(a,b),b.rShiftTo(1,b)):(a.subTo(b,a),a.rShiftTo(1,a));d>0&&a.lShiftTo(d,a);return a}
function bnpModInt(a){if(a<=0)return 0;var b=this.DV%a,c=this.s<0?a-1:0;if(this.t>0)if(b==0)c=this[0]%a;else for(var d=this.t-1;d>=0;--d)c=(b*c+this[d])%a;return c}
function bnModInverse(a){var b=a.isEven();if(this.isEven()&&b||a.signum()==0)return BigInteger.ZERO;for(var c=a.clone(),d=this.clone(),e=nbv(1),g=nbv(0),h=nbv(0),f=nbv(1);c.signum()!=0;){for(;c.isEven();){c.rShiftTo(1,c);if(b){if(!e.isEven()||!g.isEven())e.addTo(this,e),g.subTo(a,g);e.rShiftTo(1,e)}else g.isEven()||g.subTo(a,g);g.rShiftTo(1,g)}for(;d.isEven();){d.rShiftTo(1,d);if(b){if(!h.isEven()||!f.isEven())h.addTo(this,h),f.subTo(a,f);h.rShiftTo(1,h)}else f.isEven()||f.subTo(a,f);f.rShiftTo(1,
f)}c.compareTo(d)>=0?(c.subTo(d,c),b&&e.subTo(h,e),g.subTo(f,g)):(d.subTo(c,d),b&&h.subTo(e,h),f.subTo(g,f))}if(d.compareTo(BigInteger.ONE)!=0)return BigInteger.ZERO;if(f.compareTo(a)>=0)return f.subtract(a);if(f.signum()<0)f.addTo(a,f);else return f;return f.signum()<0?f.add(a):f}
var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,
733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=67108864/lowprimes[lowprimes.length-1];
function bnIsProbablePrime(a){var b,c=this.abs();if(c.t==1&&c[0]<=lowprimes[lowprimes.length-1]){for(b=0;b<lowprimes.length;++b)if(c[0]==lowprimes[b])return!0;return!1}if(c.isEven())return!1;for(b=1;b<lowprimes.length;){for(var d=lowprimes[b],e=b+1;e<lowprimes.length&&d<lplim;)d*=lowprimes[e++];for(d=c.modInt(d);b<e;)if(d%lowprimes[b++]==0)return!1}return c.millerRabin(a)}
function bnpMillerRabin(a){var b=this.subtract(BigInteger.ONE),c=b.getLowestSetBit();if(c<=0)return!1;var d=b.shiftRight(c),a=a+1>>1;if(a>lowprimes.length)a=lowprimes.length;for(var e=nbi(),g=0;g<a;++g){e.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var h=e.modPow(d,this);if(h.compareTo(BigInteger.ONE)!=0&&h.compareTo(b)!=0){for(var f=1;f++<c&&h.compareTo(b)!=0;)if(h=h.modPowInt(2,this),h.compareTo(BigInteger.ONE)==0)return!1;if(h.compareTo(b)!=0)return!1}}return!0}
BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix;BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;
BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue=bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;
BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight=bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;
BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder;BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;BigInteger.prototype.square=bnSquare;
(function(a,b,c,d,e,g,h){function f(a){var b,d,e=this,g=a.length,f=0,h=e.i=e.j=e.m=0;e.S=[];e.c=[];for(g||(a=[g++]);f<c;)e.S[f]=f++;for(f=0;f<c;f++)b=e.S[f],h=h+b+a[f%g]&c-1,d=e.S[h],e.S[f]=d,e.S[h]=b;e.g=function(a){var b=e.S,d=e.i+1&c-1,g=b[d],f=e.j+g&c-1,h=b[f];b[d]=h;b[f]=g;for(var k=b[g+h&c-1];--a;)d=d+1&c-1,g=b[d],f=f+g&c-1,h=b[f],b[d]=h,b[f]=g,k=k*c+b[g+h&c-1];e.i=d;e.j=f;return k};e.g(c)}function o(a,b,c,d,e){c=[];e=typeof a;if(b&&e=="object")for(d in a)if(d.indexOf("S")<5)try{c.push(o(a[d],
b-1))}catch(g){}return c.length?c:a+(e!="string"?"\x00":"")}function p(a,b,d,e){a+="";for(e=d=0;e<a.length;e++){var g=b,f=e&c-1,h=(d^=b[e&c-1]*19)+a.charCodeAt(e);g[f]=h&c-1}a="";for(e in b)a+=String.fromCharCode(b[e]);return a}b.seedrandom=function(q,n){var k=[],j,q=p(o(n?[q,a]:arguments.length?q:[(new Date).getTime(),a,window],3),k);j=new f(k);p(j.S,a);b.random=function(){for(var a=j.g(d),b=h,f=0;a<e;)a=(a+f)*c,b*=c,f=j.g(1);for(;a>=g;)a/=2,b/=2,f>>>=1;return(a+f)/b};return q};h=b.pow(c,d);e=b.pow(2,
e);g=e*2;p(b.random(),a)})([],Math,256,6,52);function SeededRandom(){}function SRnextBytes(a){var b;for(b=0;b<a.length;b++)a[b]=Math.floor(Math.random()*256)}SeededRandom.prototype.nextBytes=SRnextBytes;function Arcfour(){this.j=this.i=0;this.S=[]}function ARC4init(a){var b,c,d;for(b=0;b<256;++b)this.S[b]=b;for(b=c=0;b<256;++b)c=c+this.S[b]+a[b%a.length]&255,d=this.S[b],this.S[b]=this.S[c],this.S[c]=d;this.j=this.i=0}
function ARC4next(){var a;this.i=this.i+1&255;this.j=this.j+this.S[this.i]&255;a=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=a;return this.S[a+this.S[this.i]&255]}Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;function prng_newstate(){return new Arcfour}var rng_psize=256,rng_state,rng_pool,rng_pptr;
function rng_seed_int(a){rng_pool[rng_pptr++]^=a&255;rng_pool[rng_pptr++]^=a>>8&255;rng_pool[rng_pptr++]^=a>>16&255;rng_pool[rng_pptr++]^=a>>24&255;rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}
if(rng_pool==null){rng_pool=[];rng_pptr=0;var t;if(navigator.appName=="Netscape"&&navigator.appVersion<"5"&&window.crypto){var z=window.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=z.charCodeAt(t)&255}for(;rng_pptr<rng_psize;)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=t&255;rng_pptr=0;rng_seed_time()}
function rng_get_byte(){if(rng_state==null){rng_seed_time();rng_state=prng_newstate();rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(a){var b;for(b=0;b<a.length;++b)a[b]=rng_get_byte()}function SecureRandom(){}SecureRandom.prototype.nextBytes=rng_get_bytes;
function SHA256(a){function b(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function c(a,b){return a>>>b|a<<32-b}a=function(a){for(var a=a.replace(/\r\n/g,"\n"),b="",c=0;c<a.length;c++){var h=a.charCodeAt(c);h<128?b+=String.fromCharCode(h):(h>127&&h<2048?b+=String.fromCharCode(h>>6|192):(b+=String.fromCharCode(h>>12|224),b+=String.fromCharCode(h>>6&63|128)),b+=String.fromCharCode(h&63|128))}return b}(a);return function(a){for(var b="",c=0;c<a.length*4;c++)b+="0123456789abcdef".charAt(a[c>>
2]>>(3-c%4)*8+4&15)+"0123456789abcdef".charAt(a[c>>2]>>(3-c%4)*8&15);return b}(function(a,e){var g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,
2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],f=Array(64),o,p,q,n,k,j,l,m,s,r,u,w;a[e>>5]|=128<<24-e%32;a[(e+64>>9<<4)+15]=e;for(s=0;s<a.length;s+=16){o=h[0];p=h[1];q=h[2];n=h[3];
k=h[4];j=h[5];l=h[6];m=h[7];for(r=0;r<64;r++)f[r]=r<16?a[r+s]:b(b(b(c(f[r-2],17)^c(f[r-2],19)^f[r-2]>>>10,f[r-7]),c(f[r-15],7)^c(f[r-15],18)^f[r-15]>>>3),f[r-16]),u=b(b(b(b(m,c(k,6)^c(k,11)^c(k,25)),k&j^~k&l),g[r]),f[r]),w=b(c(o,2)^c(o,13)^c(o,22),o&p^o&q^p&q),m=l,l=j,j=k,k=b(n,u),n=q,q=p,p=o,o=b(u,w);h[0]=b(o,h[0]);h[1]=b(p,h[1]);h[2]=b(q,h[2]);h[3]=b(n,h[3]);h[4]=b(k,h[4]);h[5]=b(j,h[5]);h[6]=b(l,h[6]);h[7]=b(m,h[7])}return h}(function(a){for(var b=[],c=0;c<a.length*8;c+=8)b[c>>5]|=(a.charCodeAt(c/
8)&255)<<24-c%32;return b}(a),a.length*8))}var sha256={hex:function(a){return SHA256(a)}};
function SHA1(a){function b(a,b){return a<<b|a>>>32-b}function c(a){var b="",c,d;for(c=7;c>=0;c--)d=a>>>c*4&15,b+=d.toString(16);return b}var d,e,g=Array(80),h=1732584193,f=4023233417,o=2562383102,p=271733878,q=3285377520,n,k,j,l,m,a=function(a){for(var a=a.replace(/\r\n/g,"\n"),b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);d<128?b+=String.fromCharCode(d):(d>127&&d<2048?b+=String.fromCharCode(d>>6|192):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128)),b+=String.fromCharCode(d&
63|128))}return b}(a);n=a.length;var s=[];for(d=0;d<n-3;d+=4)e=a.charCodeAt(d)<<24|a.charCodeAt(d+1)<<16|a.charCodeAt(d+2)<<8|a.charCodeAt(d+3),s.push(e);switch(n%4){case 0:d=2147483648;break;case 1:d=a.charCodeAt(n-1)<<24|8388608;break;case 2:d=a.charCodeAt(n-2)<<24|a.charCodeAt(n-1)<<16|32768;break;case 3:d=a.charCodeAt(n-3)<<24|a.charCodeAt(n-2)<<16|a.charCodeAt(n-1)<<8|128}for(s.push(d);s.length%16!=14;)s.push(0);s.push(n>>>29);s.push(n<<3&4294967295);for(a=0;a<s.length;a+=16){for(d=0;d<16;d++)g[d]=
s[a+d];for(d=16;d<=79;d++)g[d]=b(g[d-3]^g[d-8]^g[d-14]^g[d-16],1);e=h;n=f;k=o;j=p;l=q;for(d=0;d<=19;d++)m=b(e,5)+(n&k|~n&j)+l+g[d]+1518500249&4294967295,l=j,j=k,k=b(n,30),n=e,e=m;for(d=20;d<=39;d++)m=b(e,5)+(n^k^j)+l+g[d]+1859775393&4294967295,l=j,j=k,k=b(n,30),n=e,e=m;for(d=40;d<=59;d++)m=b(e,5)+(n&k|n&j|k&j)+l+g[d]+2400959708&4294967295,l=j,j=k,k=b(n,30),n=e,e=m;for(d=60;d<=79;d++)m=b(e,5)+(n^k^j)+l+g[d]+3395469782&4294967295,l=j,j=k,k=b(n,30),n=e,e=m;h=h+e&4294967295;f=f+n&4294967295;o=o+k&4294967295;
p=p+j&4294967295;q=q+l&4294967295}m=c(h)+c(f)+c(o)+c(p)+c(q);return m.toLowerCase()}
var sha1={hex:function(a){return SHA1(a)}},MD5=function(a){function b(a,b){var c,d,e,f,g;e=a&2147483648;f=b&2147483648;c=a&1073741824;d=b&1073741824;g=(a&1073741823)+(b&1073741823);return c&d?g^2147483648^e^f:c|d?g&1073741824?g^3221225472^e^f:g^1073741824^e^f:g^e^f}function c(a,c,d,e,f,g,h){a=b(a,b(b(c&d|~c&e,f),h));return b(a<<g|a>>>32-g,c)}function d(a,c,d,e,f,g,h){a=b(a,b(b(c&e|d&~e,f),h));return b(a<<g|a>>>32-g,c)}function e(a,c,d,e,f,g,h){a=b(a,b(b(c^d^e,f),h));return b(a<<g|a>>>32-g,c)}function g(a,
c,d,e,f,g,h){a=b(a,b(b(d^(c|~e),f),h));return b(a<<g|a>>>32-g,c)}function h(a){var b="",c="",d;for(d=0;d<=3;d++)c=a>>>d*8&255,c="0"+c.toString(16),b+=c.substr(c.length-2,2);return b}var f=[],o,p,q,n,k,j,l,m,a=function(a){for(var a=a.replace(/\r\n/g,"\n"),b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);d<128?b+=String.fromCharCode(d):(d>127&&d<2048?b+=String.fromCharCode(d>>6|192):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128)),b+=String.fromCharCode(d&63|128))}return b}(a),
f=function(a){var b,c=a.length;b=c+8;for(var d=((b-b%64)/64+1)*16,e=Array(d-1),f=0,g=0;g<c;)b=(g-g%4)/4,f=g%4*8,e[b]|=a.charCodeAt(g)<<f,g++;e[(g-g%4)/4]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(a);k=1732584193;j=4023233417;l=2562383102;m=271733878;for(a=0;a<f.length;a+=16)o=k,p=j,q=l,n=m,k=c(k,j,l,m,f[a+0],7,3614090360),m=c(m,k,j,l,f[a+1],12,3905402710),l=c(l,m,k,j,f[a+2],17,606105819),j=c(j,l,m,k,f[a+3],22,3250441966),k=c(k,j,l,m,f[a+4],7,4118548399),m=c(m,k,j,l,f[a+5],12,1200080426),l=c(l,
m,k,j,f[a+6],17,2821735955),j=c(j,l,m,k,f[a+7],22,4249261313),k=c(k,j,l,m,f[a+8],7,1770035416),m=c(m,k,j,l,f[a+9],12,2336552879),l=c(l,m,k,j,f[a+10],17,4294925233),j=c(j,l,m,k,f[a+11],22,2304563134),k=c(k,j,l,m,f[a+12],7,1804603682),m=c(m,k,j,l,f[a+13],12,4254626195),l=c(l,m,k,j,f[a+14],17,2792965006),j=c(j,l,m,k,f[a+15],22,1236535329),k=d(k,j,l,m,f[a+1],5,4129170786),m=d(m,k,j,l,f[a+6],9,3225465664),l=d(l,m,k,j,f[a+11],14,643717713),j=d(j,l,m,k,f[a+0],20,3921069994),k=d(k,j,l,m,f[a+5],5,3593408605),
m=d(m,k,j,l,f[a+10],9,38016083),l=d(l,m,k,j,f[a+15],14,3634488961),j=d(j,l,m,k,f[a+4],20,3889429448),k=d(k,j,l,m,f[a+9],5,568446438),m=d(m,k,j,l,f[a+14],9,3275163606),l=d(l,m,k,j,f[a+3],14,4107603335),j=d(j,l,m,k,f[a+8],20,1163531501),k=d(k,j,l,m,f[a+13],5,2850285829),m=d(m,k,j,l,f[a+2],9,4243563512),l=d(l,m,k,j,f[a+7],14,1735328473),j=d(j,l,m,k,f[a+12],20,2368359562),k=e(k,j,l,m,f[a+5],4,4294588738),m=e(m,k,j,l,f[a+8],11,2272392833),l=e(l,m,k,j,f[a+11],16,1839030562),j=e(j,l,m,k,f[a+14],23,4259657740),
k=e(k,j,l,m,f[a+1],4,2763975236),m=e(m,k,j,l,f[a+4],11,1272893353),l=e(l,m,k,j,f[a+7],16,4139469664),j=e(j,l,m,k,f[a+10],23,3200236656),k=e(k,j,l,m,f[a+13],4,681279174),m=e(m,k,j,l,f[a+0],11,3936430074),l=e(l,m,k,j,f[a+3],16,3572445317),j=e(j,l,m,k,f[a+6],23,76029189),k=e(k,j,l,m,f[a+9],4,3654602809),m=e(m,k,j,l,f[a+12],11,3873151461),l=e(l,m,k,j,f[a+15],16,530742520),j=e(j,l,m,k,f[a+2],23,3299628645),k=g(k,j,l,m,f[a+0],6,4096336452),m=g(m,k,j,l,f[a+7],10,1126891415),l=g(l,m,k,j,f[a+14],15,2878612391),
j=g(j,l,m,k,f[a+5],21,4237533241),k=g(k,j,l,m,f[a+12],6,1700485571),m=g(m,k,j,l,f[a+3],10,2399980690),l=g(l,m,k,j,f[a+10],15,4293915773),j=g(j,l,m,k,f[a+1],21,2240044497),k=g(k,j,l,m,f[a+8],6,1873313359),m=g(m,k,j,l,f[a+15],10,4264355552),l=g(l,m,k,j,f[a+6],15,2734768916),j=g(j,l,m,k,f[a+13],21,1309151649),k=g(k,j,l,m,f[a+4],6,4149444226),m=g(m,k,j,l,f[a+11],10,3174756917),l=g(l,m,k,j,f[a+2],15,718787259),j=g(j,l,m,k,f[a+9],21,3951481745),k=b(k,o),j=b(j,p),l=b(l,q),m=b(m,n);return(h(k)+h(j)+h(l)+
h(m)).toLowerCase()};function parseBigInt(a,b){return new BigInteger(a,b)}function linebrk(a,b){for(var c="",d=0;d+b<a.length;)c+=a.substring(d,d+b)+"\n",d+=b;return c+a.substring(d,a.length)}function byte2Hex(a){return a<16?"0"+a.toString(16):a.toString(16)}
function pkcs1pad2(a,b){if(b<a.length+11)throw"Message too long for RSA (n="+b+", l="+a.length+")";for(var c=[],d=a.length-1;d>=0&&b>0;){var e=a.charCodeAt(d--);e<128?c[--b]=e:e>127&&e<2048?(c[--b]=e&63|128,c[--b]=e>>6|192):(c[--b]=e&63|128,c[--b]=e>>6&63|128,c[--b]=e>>12|224)}c[--b]=0;d=new SecureRandom;for(e=[];b>2;){for(e[0]=0;e[0]==0;)d.nextBytes(e);c[--b]=e[0]}c[--b]=2;c[--b]=0;return new BigInteger(c)}
function RSAKey(){this.n=null;this.e=0;this.coeff=this.dmq1=this.dmp1=this.q=this.p=this.d=null}function RSASetPublic(a,b){a!=null&&b!=null&&a.length>0&&b.length>0?(this.n=parseBigInt(a,16),this.e=parseInt(b,16)):alert("Invalid RSA public key")}function RSADoPublic(a){return a.modPowInt(this.e,this.n)}function RSAEncrypt(a){a=pkcs1pad2(a,this.n.bitLength()+7>>3);if(a==null)return null;a=this.doPublic(a);if(a==null)return null;a=a.toString(16);return(a.length&1)==0?a:"0"+a}
RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;function pkcs1unpad2(a,b){for(var c=a.toByteArray(),d=0;d<c.length&&c[d]==0;)++d;if(c.length-d!=b-1||c[d]!=2)return null;for(++d;c[d]!=0;)if(++d>=c.length)return null;for(var e="";++d<c.length;){var g=c[d]&255;g<128?e+=String.fromCharCode(g):g>191&&g<224?(e+=String.fromCharCode((g&31)<<6|c[d+1]&63),++d):(e+=String.fromCharCode((g&15)<<12|(c[d+1]&63)<<6|c[d+2]&63),d+=2)}return e}
function RSASetPrivate(a,b,c){a!=null&&b!=null&&a.length>0&&b.length>0?(this.n=parseBigInt(a,16),this.e=parseInt(b,16),this.d=parseBigInt(c,16)):alert("Invalid RSA private key")}
function RSASetPrivateEx(a,b,c,d,e,g,h,f){a!=null&&b!=null&&a.length>0&&b.length>0?(this.n=parseBigInt(a,16),this.e=parseInt(b,16),this.d=parseBigInt(c,16),this.p=parseBigInt(d,16),this.q=parseBigInt(e,16),this.dmp1=parseBigInt(g,16),this.dmq1=parseBigInt(h,16),this.coeff=parseBigInt(f,16)):alert("Invalid RSA private key")}
function RSAGenerate(a,b){var c=new SeededRandom,d=a>>1;this.e=parseInt(b,16);for(var e=new BigInteger(b,16);;){for(;;)if(this.p=new BigInteger(a-d,1,c),this.p.subtract(BigInteger.ONE).gcd(e).compareTo(BigInteger.ONE)==0&&this.p.isProbablePrime(10))break;for(;;)if(this.q=new BigInteger(d,1,c),this.q.subtract(BigInteger.ONE).gcd(e).compareTo(BigInteger.ONE)==0&&this.q.isProbablePrime(10))break;if(this.p.compareTo(this.q)<=0){var g=this.p;this.p=this.q;this.q=g}var g=this.p.subtract(BigInteger.ONE),
h=this.q.subtract(BigInteger.ONE),f=g.multiply(h);if(f.gcd(e).compareTo(BigInteger.ONE)==0){this.n=this.p.multiply(this.q);this.d=e.modInverse(f);this.dmp1=this.d.mod(g);this.dmq1=this.d.mod(h);this.coeff=this.q.modInverse(this.p);break}}}
function RSADoPrivate(a){if(this.p==null||this.q==null)return a.modPow(this.d,this.n);for(var b=a.mod(this.p).modPow(this.dmp1,this.p),a=a.mod(this.q).modPow(this.dmq1,this.q);b.compareTo(a)<0;)b=b.add(this.p);return b.subtract(a).multiply(this.coeff).mod(this.p).multiply(this.q).add(a)}function RSADecrypt(a){a=this.doPrivate(parseBigInt(a,16));return a==null?null:pkcs1unpad2(a,this.n.bitLength()+7>>3)}RSAKey.prototype.doPrivate=RSADoPrivate;RSAKey.prototype.setPrivate=RSASetPrivate;
RSAKey.prototype.setPrivateEx=RSASetPrivateEx;RSAKey.prototype.generate=RSAGenerate;RSAKey.prototype.decrypt=RSADecrypt;var _RSASIGN_DIHEAD=[];_RSASIGN_DIHEAD.sha1="3021300906052b0e03021a05000414";_RSASIGN_DIHEAD.sha256="3031300d060960864801650304020105000420";var _RSASIGN_HASHHEXFUNC=[];_RSASIGN_HASHHEXFUNC.sha1=sha1.hex;_RSASIGN_HASHHEXFUNC.sha256=sha256.hex;
function _rsasign_getHexPaddedDigestInfoForString(a,b,c){b/=4;for(var a=(0,_RSASIGN_HASHHEXFUNC[c])(a),c="00"+_RSASIGN_DIHEAD[c]+a,a="",b=b-4-c.length,d=0;d<b;d+=2)a+="ff";return sPaddedMessageHex="0001"+a+c}function _rsasign_signString(a,b){var c=_rsasign_getHexPaddedDigestInfoForString(a,this.n.bitLength(),b);return this.doPrivate(parseBigInt(c,16)).toString(16)}
function _rsasign_signStringWithSHA1(a){a=_rsasign_getHexPaddedDigestInfoForString(a,this.n.bitLength(),"sha1");return this.doPrivate(parseBigInt(a,16)).toString(16)}function _rsasign_signStringWithSHA256(a){a=_rsasign_getHexPaddedDigestInfoForString(a,this.n.bitLength(),"sha256");return this.doPrivate(parseBigInt(a,16)).toString(16)}function _rsasign_getDecryptSignatureBI(a,b,c){var d=new RSAKey;d.setPublic(b,c);return d.doPublic(a)}
function _rsasign_getHexDigestInfoFromSig(a,b,c){return _rsasign_getDecryptSignatureBI(a,b,c).toString(16).replace(/^1f+00/,"")}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(a){for(var b in _RSASIGN_DIHEAD){var c=_RSASIGN_DIHEAD[b],d=c.length;if(a.substring(0,d)==c)return[b,a.substring(d)]}return[]}
function _rsasign_verifySignatureWithArgs(a,b,c,d){b=_rsasign_getHexDigestInfoFromSig(b,c,d);c=_rsasign_getAlgNameAndHashFromHexDisgestInfo(b);if(c.length==0)return!1;b=c[1];a=(0,_RSASIGN_HASHHEXFUNC[c[0]])(a);return b==a}function _rsasign_verifyHexSignatureForMessage(a,b){var c=parseBigInt(a,16);return _rsasign_verifySignatureWithArgs(b,c,this.n.toString(16),this.e.toString(16))}
function _rsasign_verifyString(a,b){var b=b.replace(/[ \n]+/g,""),c=this.doPublic(parseBigInt(b,16)).toString(16).replace(/^1f+00/,""),d=_rsasign_getAlgNameAndHashFromHexDisgestInfo(c);if(d.length==0)return!1;c=d[1];d=(0,_RSASIGN_HASHHEXFUNC[d[0]])(a);return c==d}RSAKey.prototype.signString=_rsasign_signString;RSAKey.prototype.signStringWithSHA1=_rsasign_signStringWithSHA1;RSAKey.prototype.signStringWithSHA256=_rsasign_signStringWithSHA256;RSAKey.prototype.verifyString=_rsasign_verifyString;
RSAKey.prototype.verifyHexSignatureForMessage=_rsasign_verifyHexSignatureForMessage;
var aes=function(){var a={Sbox:[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,
95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],ShiftRowTab:[0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11]};a.Init=
function(){a.Sbox_Inv=Array(256);for(var b=0;b<256;b++)a.Sbox_Inv[a.Sbox[b]]=b;a.ShiftRowTab_Inv=Array(16);for(b=0;b<16;b++)a.ShiftRowTab_Inv[a.ShiftRowTab[b]]=b;a.xtime=Array(256);for(b=0;b<128;b++)a.xtime[b]=b<<1,a.xtime[128+b]=b<<1^27};a.Done=function(){delete a.Sbox_Inv;delete a.ShiftRowTab_Inv;delete a.xtime};a.ExpandKey=function(b){var c=b.length,d,e=1;switch(c){case 16:d=176;break;case 24:d=208;break;case 32:d=240;break;default:alert("my.ExpandKey: Only key lengths of 16, 24 or 32 bytes allowed!")}for(var g=
c;g<d;g+=4){var h=b.slice(g-4,g);if(g%c==0){if(h=[a.Sbox[h[1]]^e,a.Sbox[h[2]],a.Sbox[h[3]],a.Sbox[h[0]]],(e<<=1)>=256)e^=283}else c>24&&g%c==16&&(h=[a.Sbox[h[0]],a.Sbox[h[1]],a.Sbox[h[2]],a.Sbox[h[3]]]);for(var f=0;f<4;f++)b[g+f]=b[g+f-c]^h[f]}};a.Encrypt=function(b,c){var d=c.length;a.AddRoundKey(b,c.slice(0,16));for(var e=16;e<d-16;e+=16)a.SubBytes(b,a.Sbox),a.ShiftRows(b,a.ShiftRowTab),a.MixColumns(b),a.AddRoundKey(b,c.slice(e,e+16));a.SubBytes(b,a.Sbox);a.ShiftRows(b,a.ShiftRowTab);a.AddRoundKey(b,
c.slice(e,d))};a.Decrypt=function(b,c){var d=c.length;a.AddRoundKey(b,c.slice(d-16,d));a.ShiftRows(b,a.ShiftRowTab_Inv);a.SubBytes(b,a.Sbox_Inv);for(d-=32;d>=16;d-=16)a.AddRoundKey(b,c.slice(d,d+16)),a.MixColumns_Inv(b),a.ShiftRows(b,a.ShiftRowTab_Inv),a.SubBytes(b,a.Sbox_Inv);a.AddRoundKey(b,c.slice(0,16))};a.SubBytes=function(a,c){for(var d=0;d<16;d++)a[d]=c[a[d]]};a.AddRoundKey=function(a,c){for(var d=0;d<16;d++)a[d]^=c[d]};a.ShiftRows=function(a,c){for(var d=[].concat(a),e=0;e<16;e++)a[e]=d[c[e]]};
a.MixColumns=function(b){for(var c=0;c<16;c+=4){var d=b[c+0],e=b[c+1],g=b[c+2],h=b[c+3],f=d^e^g^h;b[c+0]^=f^a.xtime[d^e];b[c+1]^=f^a.xtime[e^g];b[c+2]^=f^a.xtime[g^h];b[c+3]^=f^a.xtime[h^d]}};a.MixColumns_Inv=function(b){for(var c=0;c<16;c+=4){var d=b[c+0],e=b[c+1],g=b[c+2],h=b[c+3],f=d^e^g^h,o=a.xtime[f],p=a.xtime[a.xtime[o^d^g]]^f;f^=a.xtime[a.xtime[o^e^h]];b[c+0]^=p^a.xtime[d^e];b[c+1]^=f^a.xtime[e^g];b[c+2]^=p^a.xtime[g^h];b[c+3]^=f^a.xtime[h^d]}};return a}(),cryptico=function(){var a={};aes.Init();
a.b256to64=function(a){var c,d,e,g="",h=0,f=0,o=a.length;for(e=0;e<o;e++)d=a.charCodeAt(e),f==0?(g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>2&63),c=(d&3)<<4):f==1?(g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c|d>>4&15),c=(d&15)<<2):f==2&&(g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c|d>>6&3),h+=1,g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d&63)),h+=1,f+=1,f==3&&
(f=0);f>0&&(g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c),g+="=");f==1&&(g+="=");return g};a.b64to256=function(a){var c,d,e="",g=0,h=0,f=a.length;for(d=0;d<f;d++)c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(d)),c>=0&&(g&&(e+=String.fromCharCode(h|c>>6-g&255)),g=g+2&7,h=c<<g&255);return e};a.b16to64=function(a){var c,d,e="";a.length%2==1&&(a="0"+a);for(c=0;c+3<=a.length;c+=3)d=parseInt(a.substring(c,c+3),16),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>
6)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d&63);c+1==a.length?(d=parseInt(a.substring(c,c+1),16),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d<<2)):c+2==a.length&&(d=parseInt(a.substring(c,c+2),16),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>2)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((d&3)<<4));for(;(e.length&3)>0;)e+="=";return e};a.b64to16=function(a){var c="",
d,e=0,g;for(d=0;d<a.length;++d){if(a.charAt(d)=="=")break;v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(d));v<0||(e==0?(c+=int2char(v>>2),g=v&3,e=1):e==1?(c+=int2char(g<<2|v>>4),g=v&15,e=2):e==2?(c+=int2char(g),c+=int2char(v>>2),g=v&3,e=3):(c+=int2char(g<<2|v>>4),c+=int2char(v&15),e=0))}e==1&&(c+=int2char(g<<2));return c};a.string2bytes=function(a){for(var c=[],d=0;d<a.length;d++)c.push(a.charCodeAt(d));return c};a.bytes2string=function(a){for(var c="",d=0;d<
a.length;d++)c+=String.fromCharCode(a[d]);return c};a.blockXOR=function(a,c){for(var d=Array(16),e=0;e<16;e++)d[e]=a[e]^c[e];return d};a.blockIV=function(){var a=new SecureRandom,c=Array(16);a.nextBytes(c);return c};a.pad16=function(a){var c=a.slice(0),d=(16-a.length%16)%16;for(i=a.length;i<a.length+d;i++)c.push(0);return c};a.depad=function(a){for(a=a.slice(0);a[a.length-1]==0;)a=a.slice(0,a.length-1);return a};a.encryptAESCBC=function(b,c){var d=c.slice(0);aes.ExpandKey(d);for(var e=a.string2bytes(b),
e=a.pad16(e),g=a.blockIV(),h=0;h<e.length/16;h++){var f=e.slice(h*16,h*16+16),o=g.slice(h*16,h*16+16),f=a.blockXOR(o,f);aes.Encrypt(f,d);g=g.concat(f)}d=a.bytes2string(g);return a.b256to64(d)};a.decryptAESCBC=function(b,c){var d=c.slice(0);aes.ExpandKey(d);for(var b=a.b64to256(b),e=a.string2bytes(b),g=[],h=1;h<e.length/16;h++){var f=e.slice(h*16,h*16+16),o=e.slice((h-1)*16,(h-1)*16+16);aes.Decrypt(f,d);f=a.blockXOR(o,f);g=g.concat(f)}g=a.depad(g);return a.bytes2string(g)};a.wrap60=function(a){for(var c=
"",d=0;d<a.length;d++)d%60==0&&d!=0&&(c+="\n"),c+=a[d];return c};a.generateAESKey=function(){var a=Array(32);(new SecureRandom).nextBytes(a);return a};a.generateRSAKey=function(a,c){Math.seedrandom(sha256.hex(a));var d=new RSAKey;d.generate(c,"03");return d};a.publicKeyString=function(b){return pubkey=a.b16to64(b.n.toString(16))};a.publicKeyID=function(a){return MD5(a)};a.publicKeyFromString=function(b){var b=a.b64to16(b.split("|")[0]),c=new RSAKey;c.setPublic(b,"03");return c};a.encrypt=function(b,
c,d){var e="",g=a.generateAESKey();try{var h=a.publicKeyFromString(c);e+=a.b16to64(h.encrypt(a.bytes2string(g)))+"?"}catch(f){return{status:"Invalid public key"}}d&&(signString=cryptico.b16to64(d.signString(b,"sha256")),b+="::52cee64bb3a38f6403386519a39ac91c::",b+=cryptico.publicKeyString(d),b+="::52cee64bb3a38f6403386519a39ac91c::",b+=signString);e+=a.encryptAESCBC(b,g);return{status:"success",cipher:e}};a.decrypt=function(b,c){var d=b.split("?"),e=c.decrypt(a.b64to16(d[0]));if(e==null)return{status:"failure"};
e=a.string2bytes(e);d=a.decryptAESCBC(d[1],e).split("::52cee64bb3a38f6403386519a39ac91c::");if(d.length==3){var e=a.publicKeyFromString(d[1]),g=a.b64to16(d[2]);return e.verifyString(d[0],g)?{status:"success",plaintext:d[0],signature:"verified",publicKeyString:a.publicKeyString(e)}:{status:"success",plaintext:d[0],signature:"forged",publicKeyString:a.publicKeyString(e)}}else return{status:"success",plaintext:d[0],signature:"unsigned"}};return a}();
/*
 * qTip2 - Pretty powerful tooltips - v2.2.1
 * http://qtip2.com
 *
 * Copyright (c) 2014 
 * Released under the MIT licenses
 * http://jquery.org/license
 *
 * Date: Sat Sep 6 2014 11:12 GMT+0100+0100
 * Plugins: tips modal viewport svg imagemap ie6
 * Styles: core basic css3
 */
/*global window: false, jQuery: false, console: false, define: false */

/* Cache window, document, undefined */
(function( window, document, undefined ) {

// Uses AMD or browser globals to create a jQuery plugin.
(function( factory ) {
	"use strict";
	if(typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	}
	else if(jQuery && !jQuery.fn.qtip) {
		factory(jQuery);
	}
}
(function($) {
	"use strict"; // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
;// Munge the primitives - Paul Irish tip
var TRUE = true,
FALSE = false,
NULL = null,

// Common variables
X = 'x', Y = 'y',
WIDTH = 'width',
HEIGHT = 'height',

// Positioning sides
TOP = 'top',
LEFT = 'left',
BOTTOM = 'bottom',
RIGHT = 'right',
CENTER = 'center',

// Position adjustment types
FLIP = 'flip',
FLIPINVERT = 'flipinvert',
SHIFT = 'shift',

// Shortcut vars
QTIP, PROTOTYPE, CORNER, CHECKS,
PLUGINS = {},
NAMESPACE = 'qtip',
ATTR_HAS = 'data-hasqtip',
ATTR_ID = 'data-qtip-id',
WIDGET = ['ui-widget', 'ui-tooltip'],
SELECTOR = '.'+NAMESPACE,
INACTIVE_EVENTS = 'click dblclick mousedown mouseup mousemove mouseleave mouseenter'.split(' '),

CLASS_FIXED = NAMESPACE+'-fixed',
CLASS_DEFAULT = NAMESPACE + '-default',
CLASS_FOCUS = NAMESPACE + '-focus',
CLASS_HOVER = NAMESPACE + '-hover',
CLASS_DISABLED = NAMESPACE+'-disabled',

replaceSuffix = '_replacedByqTip',
oldtitle = 'oldtitle',
trackingBound,

// Browser detection
BROWSER = {
	/*
	 * IE version detection
	 *
	 * Adapted from: http://ajaxian.com/archives/attack-of-the-ie-conditional-comment
	 * Credit to James Padolsey for the original implemntation!
	 */
	ie: (function(){
		for (
			var v = 4, i = document.createElement("div");
			(i.innerHTML = "<!--[if gt IE " + v + "]><i></i><![endif]-->") && i.getElementsByTagName("i")[0];
			v+=1
		) {}
		return v > 4 ? v : NaN;
	}()),

	/*
	 * iOS version detection
	 */
	iOS: parseFloat(
		('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
		.replace('undefined', '3_2').replace('_', '.').replace('_', '')
	) || FALSE
};
;function QTip(target, options, id, attr) {
	// Elements and ID
	this.id = id;
	this.target = target;
	this.tooltip = NULL;
	this.elements = { target: target };

	// Internal constructs
	this._id = NAMESPACE + '-' + id;
	this.timers = { img: {} };
	this.options = options;
	this.plugins = {};

	// Cache object
	this.cache = {
		event: {},
		target: $(),
		disabled: FALSE,
		attr: attr,
		onTooltip: FALSE,
		lastClass: ''
	};

	// Set the initial flags
	this.rendered = this.destroyed = this.disabled = this.waiting =
		this.hiddenDuringWait = this.positioning = this.triggering = FALSE;
}
PROTOTYPE = QTip.prototype;

PROTOTYPE._when = function(deferreds) {
	return $.when.apply($, deferreds);
};

PROTOTYPE.render = function(show) {
	if(this.rendered || this.destroyed) { return this; } // If tooltip has already been rendered, exit

	var self = this,
		options = this.options,
		cache = this.cache,
		elements = this.elements,
		text = options.content.text,
		title = options.content.title,
		button = options.content.button,
		posOptions = options.position,
		namespace = '.'+this._id+' ',
		deferreds = [],
		tooltip;

	// Add ARIA attributes to target
	$.attr(this.target[0], 'aria-describedby', this._id);

	// Create public position object that tracks current position corners
	cache.posClass = this._createPosClass(
		(this.position = { my: posOptions.my, at: posOptions.at }).my
	);

	// Create tooltip element
	this.tooltip = elements.tooltip = tooltip = $('<div/>', {
		'id': this._id,
		'class': [ NAMESPACE, CLASS_DEFAULT, options.style.classes, cache.posClass ].join(' '),
		'width': options.style.width || '',
		'height': options.style.height || '',
		'tracking': posOptions.target === 'mouse' && posOptions.adjust.mouse,

		/* ARIA specific attributes */
		'role': 'alert',
		'aria-live': 'polite',
		'aria-atomic': FALSE,
		'aria-describedby': this._id + '-content',
		'aria-hidden': TRUE
	})
	.toggleClass(CLASS_DISABLED, this.disabled)
	.attr(ATTR_ID, this.id)
	.data(NAMESPACE, this)
	.appendTo(posOptions.container)
	.append(
		// Create content element
		elements.content = $('<div />', {
			'class': NAMESPACE + '-content',
			'id': this._id + '-content',
			'aria-atomic': TRUE
		})
	);

	// Set rendered flag and prevent redundant reposition calls for now
	this.rendered = -1;
	this.positioning = TRUE;

	// Create title...
	if(title) {
		this._createTitle();

		// Update title only if its not a callback (called in toggle if so)
		if(!$.isFunction(title)) {
			deferreds.push( this._updateTitle(title, FALSE) );
		}
	}

	// Create button
	if(button) { this._createButton(); }

	// Set proper rendered flag and update content if not a callback function (called in toggle)
	if(!$.isFunction(text)) {
		deferreds.push( this._updateContent(text, FALSE) );
	}
	this.rendered = TRUE;

	// Setup widget classes
	this._setWidget();

	// Initialize 'render' plugins
	$.each(PLUGINS, function(name) {
		var instance;
		if(this.initialize === 'render' && (instance = this(self))) {
			self.plugins[name] = instance;
		}
	});

	// Unassign initial events and assign proper events
	this._unassignEvents();
	this._assignEvents();

	// When deferreds have completed
	this._when(deferreds).then(function() {
		// tooltiprender event
		self._trigger('render');

		// Reset flags
		self.positioning = FALSE;

		// Show tooltip if not hidden during wait period
		if(!self.hiddenDuringWait && (options.show.ready || show)) {
			self.toggle(TRUE, cache.event, FALSE);
		}
		self.hiddenDuringWait = FALSE;
	});

	// Expose API
	QTIP.api[this.id] = this;

	return this;
};

PROTOTYPE.destroy = function(immediate) {
	// Set flag the signify destroy is taking place to plugins
	// and ensure it only gets destroyed once!
	if(this.destroyed) { return this.target; }

	function process() {
		if(this.destroyed) { return; }
		this.destroyed = TRUE;

		var target = this.target,
			title = target.attr(oldtitle),
			timer;

		// Destroy tooltip if rendered
		if(this.rendered) {
			this.tooltip.stop(1,0).find('*').remove().end().remove();
		}

		// Destroy all plugins
		$.each(this.plugins, function(name) {
			this.destroy && this.destroy();
		});

		// Clear timers
		for(timer in this.timers) {
			clearTimeout(this.timers[timer]);
		}

		// Remove api object and ARIA attributes
		target.removeData(NAMESPACE)
			.removeAttr(ATTR_ID)
			.removeAttr(ATTR_HAS)
			.removeAttr('aria-describedby');

		// Reset old title attribute if removed
		if(this.options.suppress && title) {
			target.attr('title', title).removeAttr(oldtitle);
		}

		// Remove qTip events associated with this API
		this._unassignEvents();

		// Remove ID from used id objects, and delete object references
		// for better garbage collection and leak protection
		this.options = this.elements = this.cache = this.timers =
			this.plugins = this.mouse = NULL;

		// Delete epoxsed API object
		delete QTIP.api[this.id];
	}

	// If an immediate destory is needed
	if((immediate !== TRUE || this.triggering === 'hide') && this.rendered) {
		this.tooltip.one('tooltiphidden', $.proxy(process, this));
		!this.triggering && this.hide();
	}

	// If we're not in the process of hiding... process
	else { process.call(this); }

	return this.target;
};
;function invalidOpt(a) {
	return a === NULL || $.type(a) !== 'object';
}

function invalidContent(c) {
	return !( $.isFunction(c) || (c && c.attr) || c.length || ($.type(c) === 'object' && (c.jquery || c.then) ));
}

// Option object sanitizer
function sanitizeOptions(opts) {
	var content, text, ajax, once;

	if(invalidOpt(opts)) { return FALSE; }

	if(invalidOpt(opts.metadata)) {
		opts.metadata = { type: opts.metadata };
	}

	if('content' in opts) {
		content = opts.content;

		if(invalidOpt(content) || content.jquery || content.done) {
			content = opts.content = {
				text: (text = invalidContent(content) ? FALSE : content)
			};
		}
		else { text = content.text; }

		// DEPRECATED - Old content.ajax plugin functionality
		// Converts it into the proper Deferred syntax
		if('ajax' in content) {
			ajax = content.ajax;
			once = ajax && ajax.once !== FALSE;
			delete content.ajax;

			content.text = function(event, api) {
				var loading = text || $(this).attr(api.options.content.attr) || 'Loading...',

				deferred = $.ajax(
					$.extend({}, ajax, { context: api })
				)
				.then(ajax.success, NULL, ajax.error)
				.then(function(content) {
					if(content && once) { api.set('content.text', content); }
					return content;
				},
				function(xhr, status, error) {
					if(api.destroyed || xhr.status === 0) { return; }
					api.set('content.text', status + ': ' + error);
				});

				return !once ? (api.set('content.text', loading), deferred) : loading;
			};
		}

		if('title' in content) {
			if($.isPlainObject(content.title)) {
				content.button = content.title.button;
				content.title = content.title.text;
			}

			if(invalidContent(content.title || FALSE)) {
				content.title = FALSE;
			}
		}
	}

	if('position' in opts && invalidOpt(opts.position)) {
		opts.position = { my: opts.position, at: opts.position };
	}

	if('show' in opts && invalidOpt(opts.show)) {
		opts.show = opts.show.jquery ? { target: opts.show } :
			opts.show === TRUE ? { ready: TRUE } : { event: opts.show };
	}

	if('hide' in opts && invalidOpt(opts.hide)) {
		opts.hide = opts.hide.jquery ? { target: opts.hide } : { event: opts.hide };
	}

	if('style' in opts && invalidOpt(opts.style)) {
		opts.style = { classes: opts.style };
	}

	// Sanitize plugin options
	$.each(PLUGINS, function() {
		this.sanitize && this.sanitize(opts);
	});

	return opts;
}

// Setup builtin .set() option checks
CHECKS = PROTOTYPE.checks = {
	builtin: {
		// Core checks
		'^id$': function(obj, o, v, prev) {
			var id = v === TRUE ? QTIP.nextid : v,
				new_id = NAMESPACE + '-' + id;

			if(id !== FALSE && id.length > 0 && !$('#'+new_id).length) {
				this._id = new_id;

				if(this.rendered) {
					this.tooltip[0].id = this._id;
					this.elements.content[0].id = this._id + '-content';
					this.elements.title[0].id = this._id + '-title';
				}
			}
			else { obj[o] = prev; }
		},
		'^prerender': function(obj, o, v) {
			v && !this.rendered && this.render(this.options.show.ready);
		},

		// Content checks
		'^content.text$': function(obj, o, v) {
			this._updateContent(v);
		},
		'^content.attr$': function(obj, o, v, prev) {
			if(this.options.content.text === this.target.attr(prev)) {
				this._updateContent( this.target.attr(v) );
			}
		},
		'^content.title$': function(obj, o, v) {
			// Remove title if content is null
			if(!v) { return this._removeTitle(); }

			// If title isn't already created, create it now and update
			v && !this.elements.title && this._createTitle();
			this._updateTitle(v);
		},
		'^content.button$': function(obj, o, v) {
			this._updateButton(v);
		},
		'^content.title.(text|button)$': function(obj, o, v) {
			this.set('content.'+o, v); // Backwards title.text/button compat
		},

		// Position checks
		'^position.(my|at)$': function(obj, o, v){
			'string' === typeof v && (this.position[o] = obj[o] = new CORNER(v, o === 'at'));
		},
		'^position.container$': function(obj, o, v){
			this.rendered && this.tooltip.appendTo(v);
		},

		// Show checks
		'^show.ready$': function(obj, o, v) {
			v && (!this.rendered && this.render(TRUE) || this.toggle(TRUE));
		},

		// Style checks
		'^style.classes$': function(obj, o, v, p) {
			this.rendered && this.tooltip.removeClass(p).addClass(v);
		},
		'^style.(width|height)': function(obj, o, v) {
			this.rendered && this.tooltip.css(o, v);
		},
		'^style.widget|content.title': function() {
			this.rendered && this._setWidget();
		},
		'^style.def': function(obj, o, v) {
			this.rendered && this.tooltip.toggleClass(CLASS_DEFAULT, !!v);
		},

		// Events check
		'^events.(render|show|move|hide|focus|blur)$': function(obj, o, v) {
			this.rendered && this.tooltip[($.isFunction(v) ? '' : 'un') + 'bind']('tooltip'+o, v);
		},

		// Properties which require event reassignment
		'^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)': function() {
			if(!this.rendered) { return; }

			// Set tracking flag
			var posOptions = this.options.position;
			this.tooltip.attr('tracking', posOptions.target === 'mouse' && posOptions.adjust.mouse);

			// Reassign events
			this._unassignEvents();
			this._assignEvents();
		}
	}
};

// Dot notation converter
function convertNotation(options, notation) {
	var i = 0, obj, option = options,

	// Split notation into array
	levels = notation.split('.');

	// Loop through
	while( option = option[ levels[i++] ] ) {
		if(i < levels.length) { obj = option; }
	}

	return [obj || options, levels.pop()];
}

PROTOTYPE.get = function(notation) {
	if(this.destroyed) { return this; }

	var o = convertNotation(this.options, notation.toLowerCase()),
		result = o[0][ o[1] ];

	return result.precedance ? result.string() : result;
};

function setCallback(notation, args) {
	var category, rule, match;

	for(category in this.checks) {
		for(rule in this.checks[category]) {
			if(match = (new RegExp(rule, 'i')).exec(notation)) {
				args.push(match);

				if(category === 'builtin' || this.plugins[category]) {
					this.checks[category][rule].apply(
						this.plugins[category] || this, args
					);
				}
			}
		}
	}
}

var rmove = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
	rrender = /^prerender|show\.ready/i;

PROTOTYPE.set = function(option, value) {
	if(this.destroyed) { return this; }

	var rendered = this.rendered,
		reposition = FALSE,
		options = this.options,
		checks = this.checks,
		name;

	// Convert singular option/value pair into object form
	if('string' === typeof option) {
		name = option; option = {}; option[name] = value;
	}
	else { option = $.extend({}, option); }

	// Set all of the defined options to their new values
	$.each(option, function(notation, value) {
		if(rendered && rrender.test(notation)) {
			delete option[notation]; return;
		}

		// Set new obj value
		var obj = convertNotation(options, notation.toLowerCase()), previous;
		previous = obj[0][ obj[1] ];
		obj[0][ obj[1] ] = value && value.nodeType ? $(value) : value;

		// Also check if we need to reposition
		reposition = rmove.test(notation) || reposition;

		// Set the new params for the callback
		option[notation] = [obj[0], obj[1], value, previous];
	});

	// Re-sanitize options
	sanitizeOptions(options);

	/*
	 * Execute any valid callbacks for the set options
	 * Also set positioning flag so we don't get loads of redundant repositioning calls.
	 */
	this.positioning = TRUE;
	$.each(option, $.proxy(setCallback, this));
	this.positioning = FALSE;

	// Update position if needed
	if(this.rendered && this.tooltip[0].offsetWidth > 0 && reposition) {
		this.reposition( options.position.target === 'mouse' ? NULL : this.cache.event );
	}

	return this;
};
;PROTOTYPE._update = function(content, element, reposition) {
	var self = this,
		cache = this.cache;

	// Make sure tooltip is rendered and content is defined. If not return
	if(!this.rendered || !content) { return FALSE; }

	// Use function to parse content
	if($.isFunction(content)) {
		content = content.call(this.elements.target, cache.event, this) || '';
	}

	// Handle deferred content
	if($.isFunction(content.then)) {
		cache.waiting = TRUE;
		return content.then(function(c) {
			cache.waiting = FALSE;
			return self._update(c, element);
		}, NULL, function(e) {
			return self._update(e, element);
		});
	}

	// If content is null... return false
	if(content === FALSE || (!content && content !== '')) { return FALSE; }

	// Append new content if its a DOM array and show it if hidden
	if(content.jquery && content.length > 0) {
		element.empty().append(
			content.css({ display: 'block', visibility: 'visible' })
		);
	}

	// Content is a regular string, insert the new content
	else { element.html(content); }

	// Wait for content to be loaded, and reposition
	return this._waitForContent(element).then(function(images) {
		if(self.rendered && self.tooltip[0].offsetWidth > 0) {
			self.reposition(cache.event, !images.length);
		}
	});
};

PROTOTYPE._waitForContent = function(element) {
	var cache = this.cache;

	// Set flag
	cache.waiting = TRUE;

	// If imagesLoaded is included, ensure images have loaded and return promise
	return ( $.fn.imagesLoaded ? element.imagesLoaded() : $.Deferred().resolve([]) )
		.done(function() { cache.waiting = FALSE; })
		.promise();
};

PROTOTYPE._updateContent = function(content, reposition) {
	this._update(content, this.elements.content, reposition);
};

PROTOTYPE._updateTitle = function(content, reposition) {
	if(this._update(content, this.elements.title, reposition) === FALSE) {
		this._removeTitle(FALSE);
	}
};

PROTOTYPE._createTitle = function()
{
	var elements = this.elements,
		id = this._id+'-title';

	// Destroy previous title element, if present
	if(elements.titlebar) { this._removeTitle(); }

	// Create title bar and title elements
	elements.titlebar = $('<div />', {
		'class': NAMESPACE + '-titlebar ' + (this.options.style.widget ? createWidgetClass('header') : '')
	})
	.append(
		elements.title = $('<div />', {
			'id': id,
			'class': NAMESPACE + '-title',
			'aria-atomic': TRUE
		})
	)
	.insertBefore(elements.content)

	// Button-specific events
	.delegate('.qtip-close', 'mousedown keydown mouseup keyup mouseout', function(event) {
		$(this).toggleClass('ui-state-active ui-state-focus', event.type.substr(-4) === 'down');
	})
	.delegate('.qtip-close', 'mouseover mouseout', function(event){
		$(this).toggleClass('ui-state-hover', event.type === 'mouseover');
	});

	// Create button if enabled
	if(this.options.content.button) { this._createButton(); }
};

PROTOTYPE._removeTitle = function(reposition)
{
	var elements = this.elements;

	if(elements.title) {
		elements.titlebar.remove();
		elements.titlebar = elements.title = elements.button = NULL;

		// Reposition if enabled
		if(reposition !== FALSE) { this.reposition(); }
	}
};
;PROTOTYPE._createPosClass = function(my) {
	return NAMESPACE + '-pos-' + (my || this.options.position.my).abbrev();
};

PROTOTYPE.reposition = function(event, effect) {
	if(!this.rendered || this.positioning || this.destroyed) { return this; }

	// Set positioning flag
	this.positioning = TRUE;

	var cache = this.cache,
		tooltip = this.tooltip,
		posOptions = this.options.position,
		target = posOptions.target,
		my = posOptions.my,
		at = posOptions.at,
		viewport = posOptions.viewport,
		container = posOptions.container,
		adjust = posOptions.adjust,
		method = adjust.method.split(' '),
		tooltipWidth = tooltip.outerWidth(FALSE),
		tooltipHeight = tooltip.outerHeight(FALSE),
		targetWidth = 0,
		targetHeight = 0,
		type = tooltip.css('position'),
		position = { left: 0, top: 0 },
		visible = tooltip[0].offsetWidth > 0,
		isScroll = event && event.type === 'scroll',
		win = $(window),
		doc = container[0].ownerDocument,
		mouse = this.mouse,
		pluginCalculations, offset, adjusted, newClass;

	// Check if absolute position was passed
	if($.isArray(target) && target.length === 2) {
		// Force left top and set position
		at = { x: LEFT, y: TOP };
		position = { left: target[0], top: target[1] };
	}

	// Check if mouse was the target
	else if(target === 'mouse') {
		// Force left top to allow flipping
		at = { x: LEFT, y: TOP };

		// Use the mouse origin that caused the show event, if distance hiding is enabled
		if((!adjust.mouse || this.options.hide.distance) && cache.origin && cache.origin.pageX) {
			event =  cache.origin;
		}

		// Use cached event for resize/scroll events
		else if(!event || (event && (event.type === 'resize' || event.type === 'scroll'))) {
			event = cache.event;
		}

		// Otherwise, use the cached mouse coordinates if available
		else if(mouse && mouse.pageX) {
			event = mouse;
		}

		// Calculate body and container offset and take them into account below
		if(type !== 'static') { position = container.offset(); }
		if(doc.body.offsetWidth !== (window.innerWidth || doc.documentElement.clientWidth)) {
			offset = $(document.body).offset();
		}

		// Use event coordinates for position
		position = {
			left: event.pageX - position.left + (offset && offset.left || 0),
			top: event.pageY - position.top + (offset && offset.top || 0)
		};

		// Scroll events are a pain, some browsers
		if(adjust.mouse && isScroll && mouse) {
			position.left -= (mouse.scrollX || 0) - win.scrollLeft();
			position.top -= (mouse.scrollY || 0) - win.scrollTop();
		}
	}

	// Target wasn't mouse or absolute...
	else {
		// Check if event targetting is being used
		if(target === 'event') {
			if(event && event.target && event.type !== 'scroll' && event.type !== 'resize') {
				cache.target = $(event.target);
			}
			else if(!event.target) {
				cache.target = this.elements.target;
			}
		}
		else if(target !== 'event'){
			cache.target = $(target.jquery ? target : this.elements.target);
		}
		target = cache.target;

		// Parse the target into a jQuery object and make sure there's an element present
		target = $(target).eq(0);
		if(target.length === 0) { return this; }

		// Check if window or document is the target
		else if(target[0] === document || target[0] === window) {
			targetWidth = BROWSER.iOS ? window.innerWidth : target.width();
			targetHeight = BROWSER.iOS ? window.innerHeight : target.height();

			if(target[0] === window) {
				position = {
					top: (viewport || target).scrollTop(),
					left: (viewport || target).scrollLeft()
				};
			}
		}

		// Check if the target is an <AREA> element
		else if(PLUGINS.imagemap && target.is('area')) {
			pluginCalculations = PLUGINS.imagemap(this, target, at, PLUGINS.viewport ? method : FALSE);
		}

		// Check if the target is an SVG element
		else if(PLUGINS.svg && target && target[0].ownerSVGElement) {
			pluginCalculations = PLUGINS.svg(this, target, at, PLUGINS.viewport ? method : FALSE);
		}

		// Otherwise use regular jQuery methods
		else {
			targetWidth = target.outerWidth(FALSE);
			targetHeight = target.outerHeight(FALSE);
			position = target.offset();
		}

		// Parse returned plugin values into proper variables
		if(pluginCalculations) {
			targetWidth = pluginCalculations.width;
			targetHeight = pluginCalculations.height;
			offset = pluginCalculations.offset;
			position = pluginCalculations.position;
		}

		// Adjust position to take into account offset parents
		position = this.reposition.offset(target, position, container);

		// Adjust for position.fixed tooltips (and also iOS scroll bug in v3.2-4.0 & v4.3-4.3.2)
		if((BROWSER.iOS > 3.1 && BROWSER.iOS < 4.1) ||
			(BROWSER.iOS >= 4.3 && BROWSER.iOS < 4.33) ||
			(!BROWSER.iOS && type === 'fixed')
		){
			position.left -= win.scrollLeft();
			position.top -= win.scrollTop();
		}

		// Adjust position relative to target
		if(!pluginCalculations || (pluginCalculations && pluginCalculations.adjustable !== FALSE)) {
			position.left += at.x === RIGHT ? targetWidth : at.x === CENTER ? targetWidth / 2 : 0;
			position.top += at.y === BOTTOM ? targetHeight : at.y === CENTER ? targetHeight / 2 : 0;
		}
	}

	// Adjust position relative to tooltip
	position.left += adjust.x + (my.x === RIGHT ? -tooltipWidth : my.x === CENTER ? -tooltipWidth / 2 : 0);
	position.top += adjust.y + (my.y === BOTTOM ? -tooltipHeight : my.y === CENTER ? -tooltipHeight / 2 : 0);

	// Use viewport adjustment plugin if enabled
	if(PLUGINS.viewport) {
		adjusted = position.adjusted = PLUGINS.viewport(
			this, position, posOptions, targetWidth, targetHeight, tooltipWidth, tooltipHeight
		);

		// Apply offsets supplied by positioning plugin (if used)
		if(offset && adjusted.left) { position.left += offset.left; }
		if(offset && adjusted.top) {  position.top += offset.top; }

		// Apply any new 'my' position
		if(adjusted.my) { this.position.my = adjusted.my; }
	}

	// Viewport adjustment is disabled, set values to zero
	else { position.adjusted = { left: 0, top: 0 }; }

	// Set tooltip position class if it's changed
	if(cache.posClass !== (newClass = this._createPosClass(this.position.my))) {
		tooltip.removeClass(cache.posClass).addClass( (cache.posClass = newClass) );
	}

	// tooltipmove event
	if(!this._trigger('move', [position, viewport.elem || viewport], event)) { return this; }
	delete position.adjusted;

	// If effect is disabled, target it mouse, no animation is defined or positioning gives NaN out, set CSS directly
	if(effect === FALSE || !visible || isNaN(position.left) || isNaN(position.top) || target === 'mouse' || !$.isFunction(posOptions.effect)) {
		tooltip.css(position);
	}

	// Use custom function if provided
	else if($.isFunction(posOptions.effect)) {
		posOptions.effect.call(tooltip, this, $.extend({}, position));
		tooltip.queue(function(next) {
			// Reset attributes to avoid cross-browser rendering bugs
			$(this).css({ opacity: '', height: '' });
			if(BROWSER.ie) { this.style.removeAttribute('filter'); }

			next();
		});
	}

	// Set positioning flag
	this.positioning = FALSE;

	return this;
};

// Custom (more correct for qTip!) offset calculator
PROTOTYPE.reposition.offset = function(elem, pos, container) {
	if(!container[0]) { return pos; }

	var ownerDocument = $(elem[0].ownerDocument),
		quirks = !!BROWSER.ie && document.compatMode !== 'CSS1Compat',
		parent = container[0],
		scrolled, position, parentOffset, overflow;

	function scroll(e, i) {
		pos.left += i * e.scrollLeft();
		pos.top += i * e.scrollTop();
	}

	// Compensate for non-static containers offset
	do {
		if((position = $.css(parent, 'position')) !== 'static') {
			if(position === 'fixed') {
				parentOffset = parent.getBoundingClientRect();
				scroll(ownerDocument, -1);
			}
			else {
				parentOffset = $(parent).position();
				parentOffset.left += (parseFloat($.css(parent, 'borderLeftWidth')) || 0);
				parentOffset.top += (parseFloat($.css(parent, 'borderTopWidth')) || 0);
			}

			pos.left -= parentOffset.left + (parseFloat($.css(parent, 'marginLeft')) || 0);
			pos.top -= parentOffset.top + (parseFloat($.css(parent, 'marginTop')) || 0);

			// If this is the first parent element with an overflow of "scroll" or "auto", store it
			if(!scrolled && (overflow = $.css(parent, 'overflow')) !== 'hidden' && overflow !== 'visible') { scrolled = $(parent); }
		}
	}
	while((parent = parent.offsetParent));

	// Compensate for containers scroll if it also has an offsetParent (or in IE quirks mode)
	if(scrolled && (scrolled[0] !== ownerDocument[0] || quirks)) {
		scroll(scrolled, 1);
	}

	return pos;
};

// Corner class
var C = (CORNER = PROTOTYPE.reposition.Corner = function(corner, forceY) {
	corner = ('' + corner).replace(/([A-Z])/, ' $1').replace(/middle/gi, CENTER).toLowerCase();
	this.x = (corner.match(/left|right/i) || corner.match(/center/) || ['inherit'])[0].toLowerCase();
	this.y = (corner.match(/top|bottom|center/i) || ['inherit'])[0].toLowerCase();
	this.forceY = !!forceY;

	var f = corner.charAt(0);
	this.precedance = (f === 't' || f === 'b' ? Y : X);
}).prototype;

C.invert = function(z, center) {
	this[z] = this[z] === LEFT ? RIGHT : this[z] === RIGHT ? LEFT : center || this[z];
};

C.string = function(join) {
	var x = this.x, y = this.y;

	var result = x !== y ?
		(x === 'center' || y !== 'center' && (this.precedance === Y || this.forceY) ? 
			[y,x] : [x,y]
		) :
	[x];

	return join !== false ? result.join(' ') : result;
};

C.abbrev = function() {
	var result = this.string(false);
	return result[0].charAt(0) + (result[1] && result[1].charAt(0) || '');
};

C.clone = function() {
	return new CORNER( this.string(), this.forceY );
};

;
PROTOTYPE.toggle = function(state, event) {
	var cache = this.cache,
		options = this.options,
		tooltip = this.tooltip;

	// Try to prevent flickering when tooltip overlaps show element
	if(event) {
		if((/over|enter/).test(event.type) && cache.event && (/out|leave/).test(cache.event.type) &&
			options.show.target.add(event.target).length === options.show.target.length &&
			tooltip.has(event.relatedTarget).length) {
			return this;
		}

		// Cache event
		cache.event = $.event.fix(event);
	}

	// If we're currently waiting and we've just hidden... stop it
	this.waiting && !state && (this.hiddenDuringWait = TRUE);

	// Render the tooltip if showing and it isn't already
	if(!this.rendered) { return state ? this.render(1) : this; }
	else if(this.destroyed || this.disabled) { return this; }

	var type = state ? 'show' : 'hide',
		opts = this.options[type],
		otherOpts = this.options[ !state ? 'show' : 'hide' ],
		posOptions = this.options.position,
		contentOptions = this.options.content,
		width = this.tooltip.css('width'),
		visible = this.tooltip.is(':visible'),
		animate = state || opts.target.length === 1,
		sameTarget = !event || opts.target.length < 2 || cache.target[0] === event.target,
		identicalState, allow, showEvent, delay, after;

	// Detect state if valid one isn't provided
	if((typeof state).search('boolean|number')) { state = !visible; }

	// Check if the tooltip is in an identical state to the new would-be state
	identicalState = !tooltip.is(':animated') && visible === state && sameTarget;

	// Fire tooltip(show/hide) event and check if destroyed
	allow = !identicalState ? !!this._trigger(type, [90]) : NULL;

	// Check to make sure the tooltip wasn't destroyed in the callback
	if(this.destroyed) { return this; }

	// If the user didn't stop the method prematurely and we're showing the tooltip, focus it
	if(allow !== FALSE && state) { this.focus(event); }

	// If the state hasn't changed or the user stopped it, return early
	if(!allow || identicalState) { return this; }

	// Set ARIA hidden attribute
	$.attr(tooltip[0], 'aria-hidden', !!!state);

	// Execute state specific properties
	if(state) {
		// Store show origin coordinates
		this.mouse && (cache.origin = $.event.fix(this.mouse));

		// Update tooltip content & title if it's a dynamic function
		if($.isFunction(contentOptions.text)) { this._updateContent(contentOptions.text, FALSE); }
		if($.isFunction(contentOptions.title)) { this._updateTitle(contentOptions.title, FALSE); }

		// Cache mousemove events for positioning purposes (if not already tracking)
		if(!trackingBound && posOptions.target === 'mouse' && posOptions.adjust.mouse) {
			$(document).bind('mousemove.'+NAMESPACE, this._storeMouse);
			trackingBound = TRUE;
		}

		// Update the tooltip position (set width first to prevent viewport/max-width issues)
		if(!width) { tooltip.css('width', tooltip.outerWidth(FALSE)); }
		this.reposition(event, arguments[2]);
		if(!width) { tooltip.css('width', ''); }

		// Hide other tooltips if tooltip is solo
		if(!!opts.solo) {
			(typeof opts.solo === 'string' ? $(opts.solo) : $(SELECTOR, opts.solo))
				.not(tooltip).not(opts.target).qtip('hide', $.Event('tooltipsolo'));
		}
	}
	else {
		// Clear show timer if we're hiding
		clearTimeout(this.timers.show);

		// Remove cached origin on hide
		delete cache.origin;

		// Remove mouse tracking event if not needed (all tracking qTips are hidden)
		if(trackingBound && !$(SELECTOR+'[tracking="true"]:visible', opts.solo).not(tooltip).length) {
			$(document).unbind('mousemove.'+NAMESPACE);
			trackingBound = FALSE;
		}

		// Blur the tooltip
		this.blur(event);
	}

	// Define post-animation, state specific properties
	after = $.proxy(function() {
		if(state) {
			// Prevent antialias from disappearing in IE by removing filter
			if(BROWSER.ie) { tooltip[0].style.removeAttribute('filter'); }

			// Remove overflow setting to prevent tip bugs
			tooltip.css('overflow', '');

			// Autofocus elements if enabled
			if('string' === typeof opts.autofocus) {
				$(this.options.show.autofocus, tooltip).focus();
			}

			// If set, hide tooltip when inactive for delay period
			this.options.show.target.trigger('qtip-'+this.id+'-inactive');
		}
		else {
			// Reset CSS states
			tooltip.css({
				display: '',
				visibility: '',
				opacity: '',
				left: '',
				top: ''
			});
		}

		// tooltipvisible/tooltiphidden events
		this._trigger(state ? 'visible' : 'hidden');
	}, this);

	// If no effect type is supplied, use a simple toggle
	if(opts.effect === FALSE || animate === FALSE) {
		tooltip[ type ]();
		after();
	}

	// Use custom function if provided
	else if($.isFunction(opts.effect)) {
		tooltip.stop(1, 1);
		opts.effect.call(tooltip, this);
		tooltip.queue('fx', function(n) {
			after(); n();
		});
	}

	// Use basic fade function by default
	else { tooltip.fadeTo(90, state ? 1 : 0, after); }

	// If inactive hide method is set, active it
	if(state) { opts.target.trigger('qtip-'+this.id+'-inactive'); }

	return this;
};

PROTOTYPE.show = function(event) { return this.toggle(TRUE, event); };

PROTOTYPE.hide = function(event) { return this.toggle(FALSE, event); };
;PROTOTYPE.focus = function(event) {
	if(!this.rendered || this.destroyed) { return this; }

	var qtips = $(SELECTOR),
		tooltip = this.tooltip,
		curIndex = parseInt(tooltip[0].style.zIndex, 10),
		newIndex = QTIP.zindex + qtips.length,
		focusedElem;

	// Only update the z-index if it has changed and tooltip is not already focused
	if(!tooltip.hasClass(CLASS_FOCUS)) {
		// tooltipfocus event
		if(this._trigger('focus', [newIndex], event)) {
			// Only update z-index's if they've changed
			if(curIndex !== newIndex) {
				// Reduce our z-index's and keep them properly ordered
				qtips.each(function() {
					if(this.style.zIndex > curIndex) {
						this.style.zIndex = this.style.zIndex - 1;
					}
				});

				// Fire blur event for focused tooltip
				qtips.filter('.' + CLASS_FOCUS).qtip('blur', event);
			}

			// Set the new z-index
			tooltip.addClass(CLASS_FOCUS)[0].style.zIndex = newIndex;
		}
	}

	return this;
};

PROTOTYPE.blur = function(event) {
	if(!this.rendered || this.destroyed) { return this; }

	// Set focused status to FALSE
	this.tooltip.removeClass(CLASS_FOCUS);

	// tooltipblur event
	this._trigger('blur', [ this.tooltip.css('zIndex') ], event);

	return this;
};
;PROTOTYPE.disable = function(state) {
	if(this.destroyed) { return this; }

	// If 'toggle' is passed, toggle the current state
	if(state === 'toggle') {
		state = !(this.rendered ? this.tooltip.hasClass(CLASS_DISABLED) : this.disabled);
	}

	// Disable if no state passed
	else if('boolean' !== typeof state) {
		state = TRUE;
	}

	if(this.rendered) {
		this.tooltip.toggleClass(CLASS_DISABLED, state)
			.attr('aria-disabled', state);
	}

	this.disabled = !!state;

	return this;
};

PROTOTYPE.enable = function() { return this.disable(FALSE); };
;PROTOTYPE._createButton = function()
{
	var self = this,
		elements = this.elements,
		tooltip = elements.tooltip,
		button = this.options.content.button,
		isString = typeof button === 'string',
		close = isString ? button : 'Close tooltip';

	if(elements.button) { elements.button.remove(); }

	// Use custom button if one was supplied by user, else use default
	if(button.jquery) {
		elements.button = button;
	}
	else {
		elements.button = $('<a />', {
			'class': 'qtip-close ' + (this.options.style.widget ? '' : NAMESPACE+'-icon'),
			'title': close,
			'aria-label': close
		})
		.prepend(
			$('<span />', {
				'class': 'ui-icon ui-icon-close',
				'html': '&times;'
			})
		);
	}

	// Create button and setup attributes
	elements.button.appendTo(elements.titlebar || tooltip)
		.attr('role', 'button')
		.click(function(event) {
			if(!tooltip.hasClass(CLASS_DISABLED)) { self.hide(event); }
			return FALSE;
		});
};

PROTOTYPE._updateButton = function(button)
{
	// Make sure tooltip is rendered and if not, return
	if(!this.rendered) { return FALSE; }

	var elem = this.elements.button;
	if(button) { this._createButton(); }
	else { elem.remove(); }
};
;// Widget class creator
function createWidgetClass(cls) {
	return WIDGET.concat('').join(cls ? '-'+cls+' ' : ' ');
}

// Widget class setter method
PROTOTYPE._setWidget = function()
{
	var on = this.options.style.widget,
		elements = this.elements,
		tooltip = elements.tooltip,
		disabled = tooltip.hasClass(CLASS_DISABLED);

	tooltip.removeClass(CLASS_DISABLED);
	CLASS_DISABLED = on ? 'ui-state-disabled' : 'qtip-disabled';
	tooltip.toggleClass(CLASS_DISABLED, disabled);

	tooltip.toggleClass('ui-helper-reset '+createWidgetClass(), on).toggleClass(CLASS_DEFAULT, this.options.style.def && !on);

	if(elements.content) {
		elements.content.toggleClass( createWidgetClass('content'), on);
	}
	if(elements.titlebar) {
		elements.titlebar.toggleClass( createWidgetClass('header'), on);
	}
	if(elements.button) {
		elements.button.toggleClass(NAMESPACE+'-icon', !on);
	}
};
;function delay(callback, duration) {
	// If tooltip has displayed, start hide timer
	if(duration > 0) {
		return setTimeout(
			$.proxy(callback, this), duration
		);
	}
	else{ callback.call(this); }
}

function showMethod(event) {
	if(this.tooltip.hasClass(CLASS_DISABLED)) { return; }

	// Clear hide timers
	clearTimeout(this.timers.show);
	clearTimeout(this.timers.hide);

	// Start show timer
	this.timers.show = delay.call(this,
		function() { this.toggle(TRUE, event); },
		this.options.show.delay
	);
}

function hideMethod(event) {
	if(this.tooltip.hasClass(CLASS_DISABLED) || this.destroyed) { return; }

	// Check if new target was actually the tooltip element
	var relatedTarget = $(event.relatedTarget),
		ontoTooltip = relatedTarget.closest(SELECTOR)[0] === this.tooltip[0],
		ontoTarget = relatedTarget[0] === this.options.show.target[0];

	// Clear timers and stop animation queue
	clearTimeout(this.timers.show);
	clearTimeout(this.timers.hide);

	// Prevent hiding if tooltip is fixed and event target is the tooltip.
	// Or if mouse positioning is enabled and cursor momentarily overlaps
	if(this !== relatedTarget[0] &&
		(this.options.position.target === 'mouse' && ontoTooltip) ||
		(this.options.hide.fixed && (
			(/mouse(out|leave|move)/).test(event.type) && (ontoTooltip || ontoTarget))
		))
	{
		try {
			event.preventDefault();
			event.stopImmediatePropagation();
		} catch(e) {}

		return;
	}

	// If tooltip has displayed, start hide timer
	this.timers.hide = delay.call(this,
		function() { this.toggle(FALSE, event); },
		this.options.hide.delay,
		this
	);
}

function inactiveMethod(event) {
	if(this.tooltip.hasClass(CLASS_DISABLED) || !this.options.hide.inactive) { return; }

	// Clear timer
	clearTimeout(this.timers.inactive);

	this.timers.inactive = delay.call(this,
		function(){ this.hide(event); },
		this.options.hide.inactive
	);
}

function repositionMethod(event) {
	if(this.rendered && this.tooltip[0].offsetWidth > 0) { this.reposition(event); }
}

// Store mouse coordinates
PROTOTYPE._storeMouse = function(event) {
	(this.mouse = $.event.fix(event)).type = 'mousemove';
	return this;
};

// Bind events
PROTOTYPE._bind = function(targets, events, method, suffix, context) {
	if(!targets || !method || !events.length) { return; }
	var ns = '.' + this._id + (suffix ? '-'+suffix : '');
	$(targets).bind(
		(events.split ? events : events.join(ns + ' ')) + ns,
		$.proxy(method, context || this)
	);
	return this;
};
PROTOTYPE._unbind = function(targets, suffix) {
	targets && $(targets).unbind('.' + this._id + (suffix ? '-'+suffix : ''));
	return this;
};

// Global delegation helper
function delegate(selector, events, method) {
	$(document.body).delegate(selector,
		(events.split ? events : events.join('.'+NAMESPACE + ' ')) + '.'+NAMESPACE,
		function() {
			var api = QTIP.api[ $.attr(this, ATTR_ID) ];
			api && !api.disabled && method.apply(api, arguments);
		}
	);
}
// Event trigger
PROTOTYPE._trigger = function(type, args, event) {
	var callback = $.Event('tooltip'+type);
	callback.originalEvent = (event && $.extend({}, event)) || this.cache.event || NULL;

	this.triggering = type;
	this.tooltip.trigger(callback, [this].concat(args || []));
	this.triggering = FALSE;

	return !callback.isDefaultPrevented();
};

PROTOTYPE._bindEvents = function(showEvents, hideEvents, showTargets, hideTargets, showMethod, hideMethod) {
	// Get tasrgets that lye within both
	var similarTargets = showTargets.filter( hideTargets ).add( hideTargets.filter(showTargets) ),
		toggleEvents = [];

	// If hide and show targets are the same...
	if(similarTargets.length) {

		// Filter identical show/hide events
		$.each(hideEvents, function(i, type) {
			var showIndex = $.inArray(type, showEvents);

			// Both events are identical, remove from both hide and show events
			// and append to toggleEvents
			showIndex > -1 && toggleEvents.push( showEvents.splice( showIndex, 1 )[0] );
		});

		// Toggle events are special case of identical show/hide events, which happen in sequence
		if(toggleEvents.length) {
			// Bind toggle events to the similar targets
			this._bind(similarTargets, toggleEvents, function(event) {
				var state = this.rendered ? this.tooltip[0].offsetWidth > 0 : false;
				(state ? hideMethod : showMethod).call(this, event);
			});

			// Remove the similar targets from the regular show/hide bindings
			showTargets = showTargets.not(similarTargets);
			hideTargets = hideTargets.not(similarTargets);
		}
	}

	// Apply show/hide/toggle events
	this._bind(showTargets, showEvents, showMethod);
	this._bind(hideTargets, hideEvents, hideMethod);
};

PROTOTYPE._assignInitialEvents = function(event) {
	var options = this.options,
		showTarget = options.show.target,
		hideTarget = options.hide.target,
		showEvents = options.show.event ? $.trim('' + options.show.event).split(' ') : [],
		hideEvents = options.hide.event ? $.trim('' + options.hide.event).split(' ') : [];

	// Catch remove/removeqtip events on target element to destroy redundant tooltips
	this._bind(this.elements.target, ['remove', 'removeqtip'], function(event) {
		this.destroy(true);
	}, 'destroy');

	/*
	 * Make sure hoverIntent functions properly by using mouseleave as a hide event if
	 * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
	 */
	if(/mouse(over|enter)/i.test(options.show.event) && !/mouse(out|leave)/i.test(options.hide.event)) {
		hideEvents.push('mouseleave');
	}

	/*
	 * Also make sure initial mouse targetting works correctly by caching mousemove coords
	 * on show targets before the tooltip has rendered. Also set onTarget when triggered to
	 * keep mouse tracking working.
	 */
	this._bind(showTarget, 'mousemove', function(event) {
		this._storeMouse(event);
		this.cache.onTarget = TRUE;
	});

	// Define hoverIntent function
	function hoverIntent(event) {
		// Only continue if tooltip isn't disabled
		if(this.disabled || this.destroyed) { return FALSE; }

		// Cache the event data
		this.cache.event = event && $.event.fix(event);
		this.cache.target = event && $(event.target);

		// Start the event sequence
		clearTimeout(this.timers.show);
		this.timers.show = delay.call(this,
			function() { this.render(typeof event === 'object' || options.show.ready); },
			options.prerender ? 0 : options.show.delay
		);
	}

	// Filter and bind events
	this._bindEvents(showEvents, hideEvents, showTarget, hideTarget, hoverIntent, function() {
		if(!this.timers) { return FALSE; }
		clearTimeout(this.timers.show);
	});

	// Prerendering is enabled, create tooltip now
	if(options.show.ready || options.prerender) { hoverIntent.call(this, event); }
};

// Event assignment method
PROTOTYPE._assignEvents = function() {
	var self = this,
		options = this.options,
		posOptions = options.position,

		tooltip = this.tooltip,
		showTarget = options.show.target,
		hideTarget = options.hide.target,
		containerTarget = posOptions.container,
		viewportTarget = posOptions.viewport,
		documentTarget = $(document),
		bodyTarget = $(document.body),
		windowTarget = $(window),

		showEvents = options.show.event ? $.trim('' + options.show.event).split(' ') : [],
		hideEvents = options.hide.event ? $.trim('' + options.hide.event).split(' ') : [];


	// Assign passed event callbacks
	$.each(options.events, function(name, callback) {
		self._bind(tooltip, name === 'toggle' ? ['tooltipshow','tooltiphide'] : ['tooltip'+name], callback, null, tooltip);
	});

	// Hide tooltips when leaving current window/frame (but not select/option elements)
	if(/mouse(out|leave)/i.test(options.hide.event) && options.hide.leave === 'window') {
		this._bind(documentTarget, ['mouseout', 'blur'], function(event) {
			if(!/select|option/.test(event.target.nodeName) && !event.relatedTarget) {
				this.hide(event);
			}
		});
	}

	// Enable hide.fixed by adding appropriate class
	if(options.hide.fixed) {
		hideTarget = hideTarget.add( tooltip.addClass(CLASS_FIXED) );
	}

	/*
	 * Make sure hoverIntent functions properly by using mouseleave to clear show timer if
	 * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
	 */
	else if(/mouse(over|enter)/i.test(options.show.event)) {
		this._bind(hideTarget, 'mouseleave', function() {
			clearTimeout(this.timers.show);
		});
	}

	// Hide tooltip on document mousedown if unfocus events are enabled
	if(('' + options.hide.event).indexOf('unfocus') > -1) {
		this._bind(containerTarget.closest('html'), ['mousedown', 'touchstart'], function(event) {
			var elem = $(event.target),
				enabled = this.rendered && !this.tooltip.hasClass(CLASS_DISABLED) && this.tooltip[0].offsetWidth > 0,
				isAncestor = elem.parents(SELECTOR).filter(this.tooltip[0]).length > 0;

			if(elem[0] !== this.target[0] && elem[0] !== this.tooltip[0] && !isAncestor &&
				!this.target.has(elem[0]).length && enabled
			) {
				this.hide(event);
			}
		});
	}

	// Check if the tooltip hides when inactive
	if('number' === typeof options.hide.inactive) {
		// Bind inactive method to show target(s) as a custom event
		this._bind(showTarget, 'qtip-'+this.id+'-inactive', inactiveMethod, 'inactive');

		// Define events which reset the 'inactive' event handler
		this._bind(hideTarget.add(tooltip), QTIP.inactiveEvents, inactiveMethod);
	}

	// Filter and bind events
	this._bindEvents(showEvents, hideEvents, showTarget, hideTarget, showMethod, hideMethod);

	// Mouse movement bindings
	this._bind(showTarget.add(tooltip), 'mousemove', function(event) {
		// Check if the tooltip hides when mouse is moved a certain distance
		if('number' === typeof options.hide.distance) {
			var origin = this.cache.origin || {},
				limit = this.options.hide.distance,
				abs = Math.abs;

			// Check if the movement has gone beyond the limit, and hide it if so
			if(abs(event.pageX - origin.pageX) >= limit || abs(event.pageY - origin.pageY) >= limit) {
				this.hide(event);
			}
		}

		// Cache mousemove coords on show targets
		this._storeMouse(event);
	});

	// Mouse positioning events
	if(posOptions.target === 'mouse') {
		// If mouse adjustment is on...
		if(posOptions.adjust.mouse) {
			// Apply a mouseleave event so we don't get problems with overlapping
			if(options.hide.event) {
				// Track if we're on the target or not
				this._bind(showTarget, ['mouseenter', 'mouseleave'], function(event) {
					if(!this.cache) {return FALSE; }
					this.cache.onTarget = event.type === 'mouseenter';
				});
			}

			// Update tooltip position on mousemove
			this._bind(documentTarget, 'mousemove', function(event) {
				// Update the tooltip position only if the tooltip is visible and adjustment is enabled
				if(this.rendered && this.cache.onTarget && !this.tooltip.hasClass(CLASS_DISABLED) && this.tooltip[0].offsetWidth > 0) {
					this.reposition(event);
				}
			});
		}
	}

	// Adjust positions of the tooltip on window resize if enabled
	if(posOptions.adjust.resize || viewportTarget.length) {
		this._bind( $.event.special.resize ? viewportTarget : windowTarget, 'resize', repositionMethod );
	}

	// Adjust tooltip position on scroll of the window or viewport element if present
	if(posOptions.adjust.scroll) {
		this._bind( windowTarget.add(posOptions.container), 'scroll', repositionMethod );
	}
};

// Un-assignment method
PROTOTYPE._unassignEvents = function() {
	var options = this.options,
		showTargets = options.show.target,
		hideTargets = options.hide.target,
		targets = $.grep([
			this.elements.target[0],
			this.rendered && this.tooltip[0],
			options.position.container[0],
			options.position.viewport[0],
			options.position.container.closest('html')[0], // unfocus
			window,
			document
		], function(i) {
			return typeof i === 'object';
		});

	// Add show and hide targets if they're valid
	if(showTargets && showTargets.toArray) {
		targets = targets.concat(showTargets.toArray());
	}
	if(hideTargets && hideTargets.toArray) {
		targets = targets.concat(hideTargets.toArray());
	}

	// Unbind the events
	this._unbind(targets)
		._unbind(targets, 'destroy')
		._unbind(targets, 'inactive');
};

// Apply common event handlers using delegate (avoids excessive .bind calls!)
$(function() {
	delegate(SELECTOR, ['mouseenter', 'mouseleave'], function(event) {
		var state = event.type === 'mouseenter',
			tooltip = $(event.currentTarget),
			target = $(event.relatedTarget || event.target),
			options = this.options;

		// On mouseenter...
		if(state) {
			// Focus the tooltip on mouseenter (z-index stacking)
			this.focus(event);

			// Clear hide timer on tooltip hover to prevent it from closing
			tooltip.hasClass(CLASS_FIXED) && !tooltip.hasClass(CLASS_DISABLED) && clearTimeout(this.timers.hide);
		}

		// On mouseleave...
		else {
			// When mouse tracking is enabled, hide when we leave the tooltip and not onto the show target (if a hide event is set)
			if(options.position.target === 'mouse' && options.position.adjust.mouse &&
				options.hide.event && options.show.target && !target.closest(options.show.target[0]).length) {
				this.hide(event);
			}
		}

		// Add hover class
		tooltip.toggleClass(CLASS_HOVER, state);
	});

	// Define events which reset the 'inactive' event handler
	delegate('['+ATTR_ID+']', INACTIVE_EVENTS, inactiveMethod);
});
;// Initialization method
function init(elem, id, opts) {
	var obj, posOptions, attr, config, title,

	// Setup element references
	docBody = $(document.body),

	// Use document body instead of document element if needed
	newTarget = elem[0] === document ? docBody : elem,

	// Grab metadata from element if plugin is present
	metadata = (elem.metadata) ? elem.metadata(opts.metadata) : NULL,

	// If metadata type if HTML5, grab 'name' from the object instead, or use the regular data object otherwise
	metadata5 = opts.metadata.type === 'html5' && metadata ? metadata[opts.metadata.name] : NULL,

	// Grab data from metadata.name (or data-qtipopts as fallback) using .data() method,
	html5 = elem.data(opts.metadata.name || 'qtipopts');

	// If we don't get an object returned attempt to parse it manualyl without parseJSON
	try { html5 = typeof html5 === 'string' ? $.parseJSON(html5) : html5; } catch(e) {}

	// Merge in and sanitize metadata
	config = $.extend(TRUE, {}, QTIP.defaults, opts,
		typeof html5 === 'object' ? sanitizeOptions(html5) : NULL,
		sanitizeOptions(metadata5 || metadata));

	// Re-grab our positioning options now we've merged our metadata and set id to passed value
	posOptions = config.position;
	config.id = id;

	// Setup missing content if none is detected
	if('boolean' === typeof config.content.text) {
		attr = elem.attr(config.content.attr);

		// Grab from supplied attribute if available
		if(config.content.attr !== FALSE && attr) { config.content.text = attr; }

		// No valid content was found, abort render
		else { return FALSE; }
	}

	// Setup target options
	if(!posOptions.container.length) { posOptions.container = docBody; }
	if(posOptions.target === FALSE) { posOptions.target = newTarget; }
	if(config.show.target === FALSE) { config.show.target = newTarget; }
	if(config.show.solo === TRUE) { config.show.solo = posOptions.container.closest('body'); }
	if(config.hide.target === FALSE) { config.hide.target = newTarget; }
	if(config.position.viewport === TRUE) { config.position.viewport = posOptions.container; }

	// Ensure we only use a single container
	posOptions.container = posOptions.container.eq(0);

	// Convert position corner values into x and y strings
	posOptions.at = new CORNER(posOptions.at, TRUE);
	posOptions.my = new CORNER(posOptions.my);

	// Destroy previous tooltip if overwrite is enabled, or skip element if not
	if(elem.data(NAMESPACE)) {
		if(config.overwrite) {
			elem.qtip('destroy', true);
		}
		else if(config.overwrite === FALSE) {
			return FALSE;
		}
	}

	// Add has-qtip attribute
	elem.attr(ATTR_HAS, id);

	// Remove title attribute and store it if present
	if(config.suppress && (title = elem.attr('title'))) {
		// Final attr call fixes event delegatiom and IE default tooltip showing problem
		elem.removeAttr('title').attr(oldtitle, title).attr('title', '');
	}

	// Initialize the tooltip and add API reference
	obj = new QTip(elem, config, id, !!attr);
	elem.data(NAMESPACE, obj);

	return obj;
}

// jQuery $.fn extension method
QTIP = $.fn.qtip = function(options, notation, newValue)
{
	var command = ('' + options).toLowerCase(), // Parse command
		returned = NULL,
		args = $.makeArray(arguments).slice(1),
		event = args[args.length - 1],
		opts = this[0] ? $.data(this[0], NAMESPACE) : NULL;

	// Check for API request
	if((!arguments.length && opts) || command === 'api') {
		return opts;
	}

	// Execute API command if present
	else if('string' === typeof options) {
		this.each(function() {
			var api = $.data(this, NAMESPACE);
			if(!api) { return TRUE; }

			// Cache the event if possible
			if(event && event.timeStamp) { api.cache.event = event; }

			// Check for specific API commands
			if(notation && (command === 'option' || command === 'options')) {
				if(newValue !== undefined || $.isPlainObject(notation)) {
					api.set(notation, newValue);
				}
				else {
					returned = api.get(notation);
					return FALSE;
				}
			}

			// Execute API command
			else if(api[command]) {
				api[command].apply(api, args);
			}
		});

		return returned !== NULL ? returned : this;
	}

	// No API commands. validate provided options and setup qTips
	else if('object' === typeof options || !arguments.length) {
		// Sanitize options first
		opts = sanitizeOptions($.extend(TRUE, {}, options));

		return this.each(function(i) {
			var api, id;

			// Find next available ID, or use custom ID if provided
			id = $.isArray(opts.id) ? opts.id[i] : opts.id;
			id = !id || id === FALSE || id.length < 1 || QTIP.api[id] ? QTIP.nextid++ : id;

			// Initialize the qTip and re-grab newly sanitized options
			api = init($(this), id, opts);
			if(api === FALSE) { return TRUE; }
			else { QTIP.api[id] = api; }

			// Initialize plugins
			$.each(PLUGINS, function() {
				if(this.initialize === 'initialize') { this(api); }
			});

			// Assign initial pre-render events
			api._assignInitialEvents(event);
		});
	}
};

// Expose class
$.qtip = QTip;

// Populated in render method
QTIP.api = {};
;$.each({
	/* Allow other plugins to successfully retrieve the title of an element with a qTip applied */
	attr: function(attr, val) {
		if(this.length) {
			var self = this[0],
				title = 'title',
				api = $.data(self, 'qtip');

			if(attr === title && api && 'object' === typeof api && api.options.suppress) {
				if(arguments.length < 2) {
					return $.attr(self, oldtitle);
				}

				// If qTip is rendered and title was originally used as content, update it
				if(api && api.options.content.attr === title && api.cache.attr) {
					api.set('content.text', val);
				}

				// Use the regular attr method to set, then cache the result
				return this.attr(oldtitle, val);
			}
		}

		return $.fn['attr'+replaceSuffix].apply(this, arguments);
	},

	/* Allow clone to correctly retrieve cached title attributes */
	clone: function(keepData) {
		var titles = $([]), title = 'title',

		// Clone our element using the real clone method
		elems = $.fn['clone'+replaceSuffix].apply(this, arguments);

		// Grab all elements with an oldtitle set, and change it to regular title attribute, if keepData is false
		if(!keepData) {
			elems.filter('['+oldtitle+']').attr('title', function() {
				return $.attr(this, oldtitle);
			})
			.removeAttr(oldtitle);
		}

		return elems;
	}
}, function(name, func) {
	if(!func || $.fn[name+replaceSuffix]) { return TRUE; }

	var old = $.fn[name+replaceSuffix] = $.fn[name];
	$.fn[name] = function() {
		return func.apply(this, arguments) || old.apply(this, arguments);
	};
});

/* Fire off 'removeqtip' handler in $.cleanData if jQuery UI not present (it already does similar).
 * This snippet is taken directly from jQuery UI source code found here:
 *     http://code.jquery.com/ui/jquery-ui-git.js
 */
if(!$.ui) {
	$['cleanData'+replaceSuffix] = $.cleanData;
	$.cleanData = function( elems ) {
		for(var i = 0, elem; (elem = $( elems[i] )).length; i++) {
			if(elem.attr(ATTR_HAS)) {
				try { elem.triggerHandler('removeqtip'); }
				catch( e ) {}
			}
		}
		$['cleanData'+replaceSuffix].apply(this, arguments);
	};
}
;// qTip version
QTIP.version = '2.2.1';

// Base ID for all qTips
QTIP.nextid = 0;

// Inactive events array
QTIP.inactiveEvents = INACTIVE_EVENTS;

// Base z-index for all qTips
QTIP.zindex = 15000;

// Define configuration defaults
QTIP.defaults = {
	prerender: FALSE,
	id: FALSE,
	overwrite: TRUE,
	suppress: TRUE,
	content: {
		text: TRUE,
		attr: 'title',
		title: FALSE,
		button: FALSE
	},
	position: {
		my: 'top left',
		at: 'bottom right',
		target: FALSE,
		container: FALSE,
		viewport: FALSE,
		adjust: {
			x: 0, y: 0,
			mouse: TRUE,
			scroll: TRUE,
			resize: TRUE,
			method: 'flipinvert flipinvert'
		},
		effect: function(api, pos, viewport) {
			$(this).animate(pos, {
				duration: 200,
				queue: FALSE
			});
		}
	},
	show: {
		target: FALSE,
		event: 'mouseenter',
		effect: TRUE,
		delay: 90,
		solo: FALSE,
		ready: FALSE,
		autofocus: FALSE
	},
	hide: {
		target: FALSE,
		event: 'mouseleave',
		effect: TRUE,
		delay: 0,
		fixed: FALSE,
		inactive: FALSE,
		leave: 'window',
		distance: FALSE
	},
	style: {
		classes: '',
		widget: FALSE,
		width: FALSE,
		height: FALSE,
		def: TRUE
	},
	events: {
		render: NULL,
		move: NULL,
		show: NULL,
		hide: NULL,
		toggle: NULL,
		visible: NULL,
		hidden: NULL,
		focus: NULL,
		blur: NULL
	}
};
;var TIP,

// .bind()/.on() namespace
TIPNS = '.qtip-tip',

// Common CSS strings
MARGIN = 'margin',
BORDER = 'border',
COLOR = 'color',
BG_COLOR = 'background-color',
TRANSPARENT = 'transparent',
IMPORTANT = ' !important',

// Check if the browser supports <canvas/> elements
HASCANVAS = !!document.createElement('canvas').getContext,

// Invalid colour values used in parseColours()
INVALID = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i;

// Camel-case method, taken from jQuery source
// http://code.jquery.com/jquery-1.8.0.js
function camel(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/*
 * Modified from Modernizr's testPropsAll()
 * http://modernizr.com/downloads/modernizr-latest.js
 */
var cssProps = {}, cssPrefixes = ["Webkit", "O", "Moz", "ms"];
function vendorCss(elem, prop) {
	var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
		props = (prop + ' ' + cssPrefixes.join(ucProp + ' ') + ucProp).split(' '),
		cur, val, i = 0;

	// If the property has already been mapped...
	if(cssProps[prop]) { return elem.css(cssProps[prop]); }

	while((cur = props[i++])) {
		if((val = elem.css(cur)) !== undefined) {
			return cssProps[prop] = cur, val;
		}
	}
}

// Parse a given elements CSS property into an int
function intCss(elem, prop) {
	return Math.ceil(parseFloat(vendorCss(elem, prop)));
}


// VML creation (for IE only)
if(!HASCANVAS) {
	var createVML = function(tag, props, style) {
		return '<qtipvml:'+tag+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(props||'')+
			' style="behavior: url(#default#VML); '+(style||'')+ '" />';
	};
}

// Canvas only definitions
else {
	var PIXEL_RATIO = window.devicePixelRatio || 1,
		BACKING_STORE_RATIO = (function() {
			var context = document.createElement('canvas').getContext('2d');
			return context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio ||
					context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || 1;
		}()),
		SCALE = PIXEL_RATIO / BACKING_STORE_RATIO;
}


function Tip(qtip, options) {
	this._ns = 'tip';
	this.options = options;
	this.offset = options.offset;
	this.size = [ options.width, options.height ];

	// Initialize
	this.init( (this.qtip = qtip) );
}

$.extend(Tip.prototype, {
	init: function(qtip) {
		var context, tip;

		// Create tip element and prepend to the tooltip
		tip = this.element = qtip.elements.tip = $('<div />', { 'class': NAMESPACE+'-tip' }).prependTo(qtip.tooltip);

		// Create tip drawing element(s)
		if(HASCANVAS) {
			// save() as soon as we create the canvas element so FF2 doesn't bork on our first restore()!
			context = $('<canvas />').appendTo(this.element)[0].getContext('2d');

			// Setup constant parameters
			context.lineJoin = 'miter';
			context.miterLimit = 100000;
			context.save();
		}
		else {
			context = createVML('shape', 'coordorigin="0,0"', 'position:absolute;');
			this.element.html(context + context);

			// Prevent mousing down on the tip since it causes problems with .live() handling in IE due to VML
			qtip._bind( $('*', tip).add(tip), ['click', 'mousedown'], function(event) { event.stopPropagation(); }, this._ns);
		}

		// Bind update events
		qtip._bind(qtip.tooltip, 'tooltipmove', this.reposition, this._ns, this);

		// Create it
		this.create();
	},

	_swapDimensions: function() {
		this.size[0] = this.options.height;
		this.size[1] = this.options.width;
	},
	_resetDimensions: function() {
		this.size[0] = this.options.width;
		this.size[1] = this.options.height;
	},

	_useTitle: function(corner) {
		var titlebar = this.qtip.elements.titlebar;
		return titlebar && (
			corner.y === TOP || (corner.y === CENTER && this.element.position().top + (this.size[1] / 2) + this.options.offset < titlebar.outerHeight(TRUE))
		);
	},

	_parseCorner: function(corner) {
		var my = this.qtip.options.position.my;

		// Detect corner and mimic properties
		if(corner === FALSE || my === FALSE) {
			corner = FALSE;
		}
		else if(corner === TRUE) {
			corner = new CORNER( my.string() );
		}
		else if(!corner.string) {
			corner = new CORNER(corner);
			corner.fixed = TRUE;
		}

		return corner;
	},

	_parseWidth: function(corner, side, use) {
		var elements = this.qtip.elements,
			prop = BORDER + camel(side) + 'Width';

		return (use ? intCss(use, prop) : (
			intCss(elements.content, prop) ||
			intCss(this._useTitle(corner) && elements.titlebar || elements.content, prop) ||
			intCss(elements.tooltip, prop)
		)) || 0;
	},

	_parseRadius: function(corner) {
		var elements = this.qtip.elements,
			prop = BORDER + camel(corner.y) + camel(corner.x) + 'Radius';

		return BROWSER.ie < 9 ? 0 :
			intCss(this._useTitle(corner) && elements.titlebar || elements.content, prop) ||
			intCss(elements.tooltip, prop) || 0;
	},

	_invalidColour: function(elem, prop, compare) {
		var val = elem.css(prop);
		return !val || (compare && val === elem.css(compare)) || INVALID.test(val) ? FALSE : val;
	},

	_parseColours: function(corner) {
		var elements = this.qtip.elements,
			tip = this.element.css('cssText', ''),
			borderSide = BORDER + camel(corner[ corner.precedance ]) + camel(COLOR),
			colorElem = this._useTitle(corner) && elements.titlebar || elements.content,
			css = this._invalidColour, color = [];

		// Attempt to detect the background colour from various elements, left-to-right precedance
		color[0] = css(tip, BG_COLOR) || css(colorElem, BG_COLOR) || css(elements.content, BG_COLOR) ||
			css(elements.tooltip, BG_COLOR) || tip.css(BG_COLOR);

		// Attempt to detect the correct border side colour from various elements, left-to-right precedance
		color[1] = css(tip, borderSide, COLOR) || css(colorElem, borderSide, COLOR) ||
			css(elements.content, borderSide, COLOR) || css(elements.tooltip, borderSide, COLOR) || elements.tooltip.css(borderSide);

		// Reset background and border colours
		$('*', tip).add(tip).css('cssText', BG_COLOR+':'+TRANSPARENT+IMPORTANT+';'+BORDER+':0'+IMPORTANT+';');

		return color;
	},

	_calculateSize: function(corner) {
		var y = corner.precedance === Y,
			width = this.options['width'],
			height = this.options['height'],
			isCenter = corner.abbrev() === 'c',
			base = (y ? width: height) * (isCenter ? 0.5 : 1),
			pow = Math.pow,
			round = Math.round,
			bigHyp, ratio, result,

		smallHyp = Math.sqrt( pow(base, 2) + pow(height, 2) ),
		hyp = [ (this.border / base) * smallHyp, (this.border / height) * smallHyp ];

		hyp[2] = Math.sqrt( pow(hyp[0], 2) - pow(this.border, 2) );
		hyp[3] = Math.sqrt( pow(hyp[1], 2) - pow(this.border, 2) );

		bigHyp = smallHyp + hyp[2] + hyp[3] + (isCenter ? 0 : hyp[0]);
		ratio = bigHyp / smallHyp;

		result = [ round(ratio * width), round(ratio * height) ];
		return y ? result : result.reverse();
	},

	// Tip coordinates calculator
	_calculateTip: function(corner, size, scale) {
		scale = scale || 1;
		size = size || this.size;

		var width = size[0] * scale,
			height = size[1] * scale,
			width2 = Math.ceil(width / 2), height2 = Math.ceil(height / 2),

		// Define tip coordinates in terms of height and width values
		tips = {
			br:	[0,0,		width,height,	width,0],
			bl:	[0,0,		width,0,		0,height],
			tr:	[0,height,	width,0,		width,height],
			//tl:	[0,0,		0,height,		width,height],
			tl:	[0,height,	width2,0,		width,height],
			tc:	[0,height,	width2,0,		width,height],
			bc:	[0,0,		width,0,		width2,height],
			rc:	[0,0,		width,height2,	0,height],
			lc:	[width,0,	width,height,	0,height2]
		};

		// Set common side shapes
		tips.lt = tips.br; tips.rt = tips.bl;
		tips.lb = tips.tr; tips.rb = tips.tl;

		return tips[ corner.abbrev() ];
	},

	// Tip coordinates drawer (canvas)
	_drawCoords: function(context, coords) {
		context.beginPath();
		context.moveTo(coords[0], coords[1]);
		context.lineTo(coords[2], coords[3]);
		context.lineTo(coords[4], coords[5]);
		context.closePath();
	},

	create: function() {
		// Determine tip corner
		var c = this.corner = (HASCANVAS || BROWSER.ie) && this._parseCorner(this.options.corner);

		// If we have a tip corner...
		if( (this.enabled = !!this.corner && this.corner.abbrev() !== 'c') ) {
			// Cache it
			this.qtip.cache.corner = c.clone();

			// Create it
			this.update();
		}

		// Toggle tip element
		this.element.toggle(this.enabled);

		return this.corner;
	},

	update: function(corner, position) {
		if(!this.enabled) { return this; }

		var elements = this.qtip.elements,
			tip = this.element,
			inner = tip.children(),
			options = this.options,
			curSize = this.size,
			mimic = options.mimic,
			round = Math.round,
			color, precedance, context,
			coords, bigCoords, translate, newSize, border, BACKING_STORE_RATIO;

		// Re-determine tip if not already set
		if(!corner) { corner = this.qtip.cache.corner || this.corner; }

		// Use corner property if we detect an invalid mimic value
		if(mimic === FALSE) { mimic = corner; }

		// Otherwise inherit mimic properties from the corner object as necessary
		else {
			mimic = new CORNER(mimic);
			mimic.precedance = corner.precedance;

			if(mimic.x === 'inherit') { mimic.x = corner.x; }
			else if(mimic.y === 'inherit') { mimic.y = corner.y; }
			else if(mimic.x === mimic.y) {
				mimic[ corner.precedance ] = corner[ corner.precedance ];
			}
		}
		precedance = mimic.precedance;

		// Ensure the tip width.height are relative to the tip position
		if(corner.precedance === X) { this._swapDimensions(); }
		else { this._resetDimensions(); }

		// Update our colours
		color = this.color = this._parseColours(corner);

		// Detect border width, taking into account colours
		if(color[1] !== TRANSPARENT) {
			// Grab border width
			border = this.border = this._parseWidth(corner, corner[corner.precedance]);

			// If border width isn't zero, use border color as fill if it's not invalid (1.0 style tips)
			if(options.border && border < 1 && !INVALID.test(color[1])) { color[0] = color[1]; }

			// Set border width (use detected border width if options.border is true)
			this.border = border = options.border !== TRUE ? options.border : border;
		}

		// Border colour was invalid, set border to zero
		else { this.border = border = 0; }

		// Determine tip size
		newSize = this.size = this._calculateSize(corner);
		tip.css({
			width: newSize[0],
			height: newSize[1],
			lineHeight: newSize[1]+'px'
		});

		// Calculate tip translation
		if(corner.precedance === Y) {
			translate = [
				round(mimic.x === LEFT ? border : mimic.x === RIGHT ? newSize[0] - curSize[0] - border : (newSize[0] - curSize[0]) / 2),
				round(mimic.y === TOP ? newSize[1] - curSize[1] : 0)
			];
		}
		else {
			translate = [
				round(mimic.x === LEFT ? newSize[0] - curSize[0] : 0),
				round(mimic.y === TOP ? border : mimic.y === BOTTOM ? newSize[1] - curSize[1] - border : (newSize[1] - curSize[1]) / 2)
			];
		}

		// Canvas drawing implementation
		if(HASCANVAS) {
			// Grab canvas context and clear/save it
			context = inner[0].getContext('2d');
			context.restore(); context.save();
			context.clearRect(0,0,6000,6000);

			// Calculate coordinates
			coords = this._calculateTip(mimic, curSize, SCALE);
			bigCoords = this._calculateTip(mimic, this.size, SCALE);

			// Set the canvas size using calculated size
			inner.attr(WIDTH, newSize[0] * SCALE).attr(HEIGHT, newSize[1] * SCALE);
			inner.css(WIDTH, newSize[0]).css(HEIGHT, newSize[1]);

			// Draw the outer-stroke tip
			this._drawCoords(context, bigCoords);
			context.fillStyle = color[1];
			context.fill();

			// Draw the actual tip
			context.translate(translate[0] * SCALE, translate[1] * SCALE);
			this._drawCoords(context, coords);
			context.fillStyle = color[0];
			context.fill();
		}

		// VML (IE Proprietary implementation)
		else {
			// Calculate coordinates
			coords = this._calculateTip(mimic);

			// Setup coordinates string
			coords = 'm' + coords[0] + ',' + coords[1] + ' l' + coords[2] +
				',' + coords[3] + ' ' + coords[4] + ',' + coords[5] + ' xe';

			// Setup VML-specific offset for pixel-perfection
			translate[2] = border && /^(r|b)/i.test(corner.string()) ?
				BROWSER.ie === 8 ? 2 : 1 : 0;

			// Set initial CSS
			inner.css({
				coordsize: (newSize[0]+border) + ' ' + (newSize[1]+border),
				antialias: ''+(mimic.string().indexOf(CENTER) > -1),
				left: translate[0] - (translate[2] * Number(precedance === X)),
				top: translate[1] - (translate[2] * Number(precedance === Y)),
				width: newSize[0] + border,
				height: newSize[1] + border
			})
			.each(function(i) {
				var $this = $(this);

				// Set shape specific attributes
				$this[ $this.prop ? 'prop' : 'attr' ]({
					coordsize: (newSize[0]+border) + ' ' + (newSize[1]+border),
					path: coords,
					fillcolor: color[0],
					filled: !!i,
					stroked: !i
				})
				.toggle(!!(border || i));

				// Check if border is enabled and add stroke element
				!i && $this.html( createVML(
					'stroke', 'weight="'+(border*2)+'px" color="'+color[1]+'" miterlimit="1000" joinstyle="miter"'
				) );
			});
		}

		// Opera bug #357 - Incorrect tip position
		// https://github.com/Craga89/qTip2/issues/367
		window.opera && setTimeout(function() {
			elements.tip.css({
				display: 'inline-block',
				visibility: 'visible'
			});
		}, 1);

		// Position if needed
		if(position !== FALSE) { this.calculate(corner, newSize); }
	},

	calculate: function(corner, size) {
		if(!this.enabled) { return FALSE; }

		var self = this,
			elements = this.qtip.elements,
			tip = this.element,
			userOffset = this.options.offset,
			isWidget = elements.tooltip.hasClass('ui-widget'),
			position = {  },
			precedance, corners;

		// Inherit corner if not provided
		corner = corner || this.corner;
		precedance = corner.precedance;

		// Determine which tip dimension to use for adjustment
		size = size || this._calculateSize(corner);

		// Setup corners and offset array
		corners = [ corner.x, corner.y ];
		if(precedance === X) { corners.reverse(); }

		// Calculate tip position
		$.each(corners, function(i, side) {
			var b, bc, br;

			if(side === CENTER) {
				b = precedance === Y ? LEFT : TOP;
				position[ b ] = '50%';
				position[MARGIN+'-' + b] = -Math.round(size[ precedance === Y ? 0 : 1 ] / 2) + userOffset;
			}else {
				b = self._parseWidth(corner, side, elements.tooltip);
				bc = self._parseWidth(corner, side, elements.content);
				br = self._parseRadius(corner);

				position[ side ] = Math.max(-self.border, i ? bc : (userOffset + (br > b ? br : -b)));
			}
			
			if(side === LEFT){
				position[ side ] = 12;
			}
		});

		// Adjust for tip size
		position[ corner[precedance] ] -= size[ precedance === X ? 0 : 1 ];

		// Set and return new position
		tip.css({ margin: '', top: '', bottom: '', left: '', right: '' }).css(position);
		return position;
	},

	reposition: function(event, api, pos, viewport) {
		if(!this.enabled) { return; }

		var cache = api.cache,
			newCorner = this.corner.clone(),
			adjust = pos.adjusted,
			method = api.options.position.adjust.method.split(' '),
			horizontal = method[0],
			vertical = method[1] || method[0],
			shift = { left: FALSE, top: FALSE, x: 0, y: 0 },
			offset, css = {}, props;

		function shiftflip(direction, precedance, popposite, side, opposite) {
			// Horizontal - Shift or flip method
			if(direction === SHIFT && newCorner.precedance === precedance && adjust[side] && newCorner[popposite] !== CENTER) {
				newCorner.precedance = newCorner.precedance === X ? Y : X;
			}
			else if(direction !== SHIFT && adjust[side]){
				newCorner[precedance] = newCorner[precedance] === CENTER ?
					(adjust[side] > 0 ? side : opposite) : (newCorner[precedance] === side ? opposite : side);
			}
		}

		function shiftonly(xy, side, opposite) {
			if(newCorner[xy] === CENTER) {
				css[MARGIN+'-'+side] = shift[xy] = offset[MARGIN+'-'+side] - adjust[side];
			}
			else {
				props = offset[opposite] !== undefined ?
					[ adjust[side], -offset[side] ] : [ -adjust[side], offset[side] ];

				if( (shift[xy] = Math.max(props[0], props[1])) > props[0] ) {
					pos[side] -= adjust[side];
					shift[side] = FALSE;
				}

				css[ offset[opposite] !== undefined ? opposite : side ] = shift[xy];
			}
		}

		// If our tip position isn't fixed e.g. doesn't adjust with viewport...
		if(this.corner.fixed !== TRUE) {
			// Perform shift/flip adjustments
			shiftflip(horizontal, X, Y, LEFT, RIGHT);
			shiftflip(vertical, Y, X, TOP, BOTTOM);

			// Update and redraw the tip if needed (check cached details of last drawn tip)
			if(newCorner.string() !== cache.corner.string() || cache.cornerTop !== adjust.top || cache.cornerLeft !== adjust.left) {
				this.update(newCorner, FALSE);
			}
		}

		// Setup tip offset properties
		offset = this.calculate(newCorner);

		// Readjust offset object to make it left/top
		if(offset.right !== undefined) { offset.left = -offset.right; }
		if(offset.bottom !== undefined) { offset.top = -offset.bottom; }
		offset.user = this.offset;

		// Perform shift adjustments
		if(shift.left = (horizontal === SHIFT && !!adjust.left)) { shiftonly(X, LEFT, RIGHT); }
		if(shift.top = (vertical === SHIFT && !!adjust.top)) { shiftonly(Y, TOP, BOTTOM); }

		/*
		* If the tip is adjusted in both dimensions, or in a
		* direction that would cause it to be anywhere but the
		* outer border, hide it!
		*/
		this.element.css(css).toggle(
			!((shift.x && shift.y) || (newCorner.x === CENTER && shift.y) || (newCorner.y === CENTER && shift.x))
		);

		// Adjust position to accomodate tip dimensions
		pos.left -= offset.left.charAt ? offset.user :
			horizontal !== SHIFT || shift.top || !shift.left && !shift.top ? offset.left + this.border : 0;
		pos.top -= offset.top.charAt ? offset.user :
			vertical !== SHIFT || shift.left || !shift.left && !shift.top ? offset.top + this.border : 0;

		// Cache details
		cache.cornerLeft = adjust.left; cache.cornerTop = adjust.top;
		cache.corner = newCorner.clone();
	},

	destroy: function() {
		// Unbind events
		this.qtip._unbind(this.qtip.tooltip, this._ns);

		// Remove the tip element(s)
		if(this.qtip.elements.tip) {
			this.qtip.elements.tip.find('*')
				.remove().end().remove();
		}
	}
});

TIP = PLUGINS.tip = function(api) {
	return new Tip(api, api.options.style.tip);
};

// Initialize tip on render
TIP.initialize = 'render';

// Setup plugin sanitization options
TIP.sanitize = function(options) {
	if(options.style && 'tip' in options.style) {
		var opts = options.style.tip;
		if(typeof opts !== 'object') { opts = options.style.tip = { corner: opts }; }
		if(!(/string|boolean/i).test(typeof opts.corner)) { opts.corner = TRUE; }
	}
};

// Add new option checks for the plugin
CHECKS.tip = {
	'^position.my|style.tip.(corner|mimic|border)$': function() {
		// Make sure a tip can be drawn
		this.create();

		// Reposition the tooltip
		this.qtip.reposition();
	},
	'^style.tip.(height|width)$': function(obj) {
		// Re-set dimensions and redraw the tip
		this.size = [ obj.width, obj.height ];
		this.update();

		// Reposition the tooltip
		this.qtip.reposition();
	},
	'^content.title|style.(classes|widget)$': function() {
		this.update();
	}
};

// Extend original qTip defaults
$.extend(TRUE, QTIP.defaults, {
	style: {
		tip: {
			corner: TRUE,
			mimic: FALSE,
			width: 6,
			height: 6,
			border: TRUE,
			offset: 0
		}
	}
});
;var MODAL, OVERLAY,
	MODALCLASS = 'qtip-modal',
	MODALSELECTOR = '.'+MODALCLASS;

OVERLAY = function()
{
	var self = this,
		focusableElems = {},
		current, onLast,
		prevState, elem;

	// Modified code from jQuery UI 1.10.0 source
	// http://code.jquery.com/ui/1.10.0/jquery-ui.js
	function focusable(element) {
		// Use the defined focusable checker when possible
		if($.expr[':'].focusable) { return $.expr[':'].focusable; }

		var isTabIndexNotNaN = !isNaN($.attr(element, 'tabindex')),
			nodeName = element.nodeName && element.nodeName.toLowerCase(),
			map, mapName, img;

		if('area' === nodeName) {
			map = element.parentNode;
			mapName = map.name;
			if(!element.href || !mapName || map.nodeName.toLowerCase() !== 'map') {
				return false;
			}
			img = $('img[usemap=#' + mapName + ']')[0];
			return !!img && img.is(':visible');
		}
		return (/input|select|textarea|button|object/.test( nodeName ) ?
				!element.disabled :
				'a' === nodeName ?
					element.href || isTabIndexNotNaN :
					isTabIndexNotNaN
			);
	}

	// Focus inputs using cached focusable elements (see update())
	function focusInputs(blurElems) {
		// Blurring body element in IE causes window.open windows to unfocus!
		if(focusableElems.length < 1 && blurElems.length) { blurElems.not('body').blur(); }

		// Focus the inputs
		else { focusableElems.first().focus(); }
	}

	// Steal focus from elements outside tooltip
	function stealFocus(event) {
		if(!elem.is(':visible')) { return; }

		var target = $(event.target),
			tooltip = current.tooltip,
			container = target.closest(SELECTOR),
			targetOnTop;

		// Determine if input container target is above this
		targetOnTop = container.length < 1 ? FALSE :
			(parseInt(container[0].style.zIndex, 10) > parseInt(tooltip[0].style.zIndex, 10));

		// If we're showing a modal, but focus has landed on an input below
		// this modal, divert focus to the first visible input in this modal
		// or if we can't find one... the tooltip itself
		if(!targetOnTop && target.closest(SELECTOR)[0] !== tooltip[0]) {
			focusInputs(target);
		}

		// Detect when we leave the last focusable element...
		onLast = event.target === focusableElems[focusableElems.length - 1];
	}

	$.extend(self, {
		init: function() {
			// Create document overlay
			elem = self.elem = $('<div />', {
				id: 'qtip-overlay',
				html: '<div></div>',
				mousedown: function() { return FALSE; }
			})
			.hide();

			// Make sure we can't focus anything outside the tooltip
			$(document.body).bind('focusin'+MODALSELECTOR, stealFocus);

			// Apply keyboard "Escape key" close handler
			$(document).bind('keydown'+MODALSELECTOR, function(event) {
				if(current && current.options.show.modal.escape && event.keyCode === 27) {
					current.hide(event);
				}
			});

			// Apply click handler for blur option
			elem.bind('click'+MODALSELECTOR, function(event) {
				if(current && current.options.show.modal.blur) {
					current.hide(event);
				}
			});

			return self;
		},

		update: function(api) {
			// Update current API reference
			current = api;

			// Update focusable elements if enabled
			if(api.options.show.modal.stealfocus !== FALSE) {
				focusableElems = api.tooltip.find('*').filter(function() {
					return focusable(this);
				});
			}
			else { focusableElems = []; }
		},

		toggle: function(api, state, duration) {
			var docBody = $(document.body),
				tooltip = api.tooltip,
				options = api.options.show.modal,
				effect = options.effect,
				type = state ? 'show': 'hide',
				visible = elem.is(':visible'),
				visibleModals = $(MODALSELECTOR).filter(':visible:not(:animated)').not(tooltip),
				zindex;

			// Set active tooltip API reference
			self.update(api);

			// If the modal can steal the focus...
			// Blur the current item and focus anything in the modal we an
			if(state && options.stealfocus !== FALSE) {
				focusInputs( $(':focus') );
			}

			// Toggle backdrop cursor style on show
			elem.toggleClass('blurs', options.blur);

			// Append to body on show
			if(state) {
				elem.appendTo(document.body);
			}

			// Prevent modal from conflicting with show.solo, and don't hide backdrop is other modals are visible
			if((elem.is(':animated') && visible === state && prevState !== FALSE) || (!state && visibleModals.length)) {
				return self;
			}

			// Stop all animations
			elem.stop(TRUE, FALSE);

			// Use custom function if provided
			if($.isFunction(effect)) {
				effect.call(elem, state);
			}

			// If no effect type is supplied, use a simple toggle
			else if(effect === FALSE) {
				elem[ type ]();
			}

			// Use basic fade function
			else {
				elem.fadeTo( parseInt(duration, 10) || 90, state ? 1 : 0, function() {
					if(!state) { elem.hide(); }
				});
			}

			// Reset position and detach from body on hide
			if(!state) {
				elem.queue(function(next) {
					elem.css({ left: '', top: '' });
					if(!$(MODALSELECTOR).length) { elem.detach(); }
					next();
				});
			}

			// Cache the state
			prevState = state;

			// If the tooltip is destroyed, set reference to null
			if(current.destroyed) { current = NULL; }

			return self;
		}
	});

	self.init();
};
OVERLAY = new OVERLAY();

function Modal(api, options) {
	this.options = options;
	this._ns = '-modal';

	this.init( (this.qtip = api) );
}

$.extend(Modal.prototype, {
	init: function(qtip) {
		var tooltip = qtip.tooltip;

		// If modal is disabled... return
		if(!this.options.on) { return this; }

		// Set overlay reference
		qtip.elements.overlay = OVERLAY.elem;

		// Add unique attribute so we can grab modal tooltips easily via a SELECTOR, and set z-index
		tooltip.addClass(MODALCLASS).css('z-index', QTIP.modal_zindex + $(MODALSELECTOR).length);

		// Apply our show/hide/focus modal events
		qtip._bind(tooltip, ['tooltipshow', 'tooltiphide'], function(event, api, duration) {
			var oEvent = event.originalEvent;

			// Make sure mouseout doesn't trigger a hide when showing the modal and mousing onto backdrop
			if(event.target === tooltip[0]) {
				if(oEvent && event.type === 'tooltiphide' && /mouse(leave|enter)/.test(oEvent.type) && $(oEvent.relatedTarget).closest(OVERLAY.elem[0]).length) {
					try { event.preventDefault(); } catch(e) {}
				}
				else if(!oEvent || (oEvent && oEvent.type !== 'tooltipsolo')) {
					this.toggle(event, event.type === 'tooltipshow', duration);
				}
			}
		}, this._ns, this);

		// Adjust modal z-index on tooltip focus
		qtip._bind(tooltip, 'tooltipfocus', function(event, api) {
			// If focus was cancelled before it reached us, don't do anything
			if(event.isDefaultPrevented() || event.target !== tooltip[0]) { return; }

			var qtips = $(MODALSELECTOR),

			// Keep the modal's lower than other, regular qtips
			newIndex = QTIP.modal_zindex + qtips.length,
			curIndex = parseInt(tooltip[0].style.zIndex, 10);

			// Set overlay z-index
			OVERLAY.elem[0].style.zIndex = newIndex - 1;

			// Reduce modal z-index's and keep them properly ordered
			qtips.each(function() {
				if(this.style.zIndex > curIndex) {
					this.style.zIndex -= 1;
				}
			});

			// Fire blur event for focused tooltip
			qtips.filter('.' + CLASS_FOCUS).qtip('blur', event.originalEvent);

			// Set the new z-index
			tooltip.addClass(CLASS_FOCUS)[0].style.zIndex = newIndex;

			// Set current
			OVERLAY.update(api);

			// Prevent default handling
			try { event.preventDefault(); } catch(e) {}
		}, this._ns, this);

		// Focus any other visible modals when this one hides
		qtip._bind(tooltip, 'tooltiphide', function(event) {
			if(event.target === tooltip[0]) {
				$(MODALSELECTOR).filter(':visible').not(tooltip).last().qtip('focus', event);
			}
		}, this._ns, this);
	},

	toggle: function(event, state, duration) {
		// Make sure default event hasn't been prevented
		if(event && event.isDefaultPrevented()) { return this; }

		// Toggle it
		OVERLAY.toggle(this.qtip, !!state, duration);
	},

	destroy: function() {
		// Remove modal class
		this.qtip.tooltip.removeClass(MODALCLASS);

		// Remove bound events
		this.qtip._unbind(this.qtip.tooltip, this._ns);

		// Delete element reference
		OVERLAY.toggle(this.qtip, FALSE);
		delete this.qtip.elements.overlay;
	}
});


MODAL = PLUGINS.modal = function(api) {
	return new Modal(api, api.options.show.modal);
};

// Setup sanitiztion rules
MODAL.sanitize = function(opts) {
	if(opts.show) {
		if(typeof opts.show.modal !== 'object') { opts.show.modal = { on: !!opts.show.modal }; }
		else if(typeof opts.show.modal.on === 'undefined') { opts.show.modal.on = TRUE; }
	}
};

// Base z-index for all modal tooltips (use qTip core z-index as a base)
QTIP.modal_zindex = QTIP.zindex - 200;

// Plugin needs to be initialized on render
MODAL.initialize = 'render';

// Setup option set checks
CHECKS.modal = {
	'^show.modal.(on|blur)$': function() {
		// Initialise
		this.destroy();
		this.init();

		// Show the modal if not visible already and tooltip is visible
		this.qtip.elems.overlay.toggle(
			this.qtip.tooltip[0].offsetWidth > 0
		);
	}
};

// Extend original api defaults
$.extend(TRUE, QTIP.defaults, {
	show: {
		modal: {
			on: FALSE,
			effect: TRUE,
			blur: TRUE,
			stealfocus: TRUE,
			escape: TRUE
		}
	}
});
;PLUGINS.viewport = function(api, position, posOptions, targetWidth, targetHeight, elemWidth, elemHeight)
{
	var target = posOptions.target,
		tooltip = api.elements.tooltip,
		my = posOptions.my,
		at = posOptions.at,
		adjust = posOptions.adjust,
		method = adjust.method.split(' '),
		methodX = method[0],
		methodY = method[1] || method[0],
		viewport = posOptions.viewport,
		container = posOptions.container,
		cache = api.cache,
		adjusted = { left: 0, top: 0 },
		fixed, newMy, containerOffset, containerStatic,
		viewportWidth, viewportHeight, viewportScroll, viewportOffset;

	// If viewport is not a jQuery element, or it's the window/document, or no adjustment method is used... return
	if(!viewport.jquery || target[0] === window || target[0] === document.body || adjust.method === 'none') {
		return adjusted;
	}

	// Cach container details
	containerOffset = container.offset() || adjusted;
	containerStatic = container.css('position') === 'static';

	// Cache our viewport details
	fixed = tooltip.css('position') === 'fixed';
	viewportWidth = viewport[0] === window ? viewport.width() : viewport.outerWidth(FALSE);
	viewportHeight = viewport[0] === window ? viewport.height() : viewport.outerHeight(FALSE);
	viewportScroll = { left: fixed ? 0 : viewport.scrollLeft(), top: fixed ? 0 : viewport.scrollTop() };
	viewportOffset = viewport.offset() || adjusted;

	// Generic calculation method
	function calculate(side, otherSide, type, adjust, side1, side2, lengthName, targetLength, elemLength) {
		var initialPos = position[side1],
			mySide = my[side],
			atSide = at[side],
			isShift = type === SHIFT,
			myLength = mySide === side1 ? elemLength : mySide === side2 ? -elemLength : -elemLength / 2,
			atLength = atSide === side1 ? targetLength : atSide === side2 ? -targetLength : -targetLength / 2,
			sideOffset = viewportScroll[side1] + viewportOffset[side1] - (containerStatic ? 0 : containerOffset[side1]),
			overflow1 = sideOffset - initialPos,
			overflow2 = initialPos + elemLength - (lengthName === WIDTH ? viewportWidth : viewportHeight) - sideOffset,
			offset = myLength - (my.precedance === side || mySide === my[otherSide] ? atLength : 0) - (atSide === CENTER ? targetLength / 2 : 0);

		// shift
		if(isShift) {
			offset = (mySide === side1 ? 1 : -1) * myLength;

			// Adjust position but keep it within viewport dimensions
			position[side1] += overflow1 > 0 ? overflow1 : overflow2 > 0 ? -overflow2 : 0;
			position[side1] = Math.max(
				-containerOffset[side1] + viewportOffset[side1],
				initialPos - offset,
				Math.min(
					Math.max(
						-containerOffset[side1] + viewportOffset[side1] + (lengthName === WIDTH ? viewportWidth : viewportHeight),
						initialPos + offset
					),
					position[side1],

					// Make sure we don't adjust complete off the element when using 'center'
					mySide === 'center' ? initialPos - myLength : 1E9
				)
			);

		}

		// flip/flipinvert
		else {
			// Update adjustment amount depending on if using flipinvert or flip
			adjust *= (type === FLIPINVERT ? 2 : 0);

			// Check for overflow on the left/top
			if(overflow1 > 0 && (mySide !== side1 || overflow2 > 0)) {
				position[side1] -= offset + adjust;
				newMy.invert(side, side1);
			}

			// Check for overflow on the bottom/right
			else if(overflow2 > 0 && (mySide !== side2 || overflow1 > 0)  ) {
				position[side1] -= (mySide === CENTER ? -offset : offset) + adjust;
				newMy.invert(side, side2);
			}

			// Make sure we haven't made things worse with the adjustment and reset if so
			if(position[side1] < viewportScroll && -position[side1] > overflow2) {
				position[side1] = initialPos; newMy = my.clone();
			}
		}

		return position[side1] - initialPos;
	}

	// Set newMy if using flip or flipinvert methods
	if(methodX !== 'shift' || methodY !== 'shift') { newMy = my.clone(); }

	// Adjust position based onviewport and adjustment options
	adjusted = {
		left: methodX !== 'none' ? calculate( X, Y, methodX, adjust.x, LEFT, RIGHT, WIDTH, targetWidth, elemWidth ) : 0,
		top: methodY !== 'none' ? calculate( Y, X, methodY, adjust.y, TOP, BOTTOM, HEIGHT, targetHeight, elemHeight ) : 0,
		my: newMy
	};

	return adjusted;
};
;PLUGINS.polys = {
	// POLY area coordinate calculator
	//	Special thanks to Ed Cradock for helping out with this.
	//	Uses a binary search algorithm to find suitable coordinates.
	polygon: function(baseCoords, corner) {
		var result = {
			width: 0, height: 0,
			position: {
				top: 1e10, right: 0,
				bottom: 0, left: 1e10
			},
			adjustable: FALSE
		},
		i = 0, next,
		coords = [],
		compareX = 1, compareY = 1,
		realX = 0, realY = 0,
		newWidth, newHeight;

		// First pass, sanitize coords and determine outer edges
		i = baseCoords.length; while(i--) {
			next = [ parseInt(baseCoords[--i], 10), parseInt(baseCoords[i+1], 10) ];

			if(next[0] > result.position.right){ result.position.right = next[0]; }
			if(next[0] < result.position.left){ result.position.left = next[0]; }
			if(next[1] > result.position.bottom){ result.position.bottom = next[1]; }
			if(next[1] < result.position.top){ result.position.top = next[1]; }

			coords.push(next);
		}

		// Calculate height and width from outer edges
		newWidth = result.width = Math.abs(result.position.right - result.position.left);
		newHeight = result.height = Math.abs(result.position.bottom - result.position.top);

		// If it's the center corner...
		if(corner.abbrev() === 'c') {
			result.position = {
				left: result.position.left + (result.width / 2),
				top: result.position.top + (result.height / 2)
			};
		}
		else {
			// Second pass, use a binary search algorithm to locate most suitable coordinate
			while(newWidth > 0 && newHeight > 0 && compareX > 0 && compareY > 0)
			{
				newWidth = Math.floor(newWidth / 2);
				newHeight = Math.floor(newHeight / 2);

				if(corner.x === LEFT){ compareX = newWidth; }
				else if(corner.x === RIGHT){ compareX = result.width - newWidth; }
				else{ compareX += Math.floor(newWidth / 2); }

				if(corner.y === TOP){ compareY = newHeight; }
				else if(corner.y === BOTTOM){ compareY = result.height - newHeight; }
				else{ compareY += Math.floor(newHeight / 2); }

				i = coords.length; while(i--)
				{
					if(coords.length < 2){ break; }

					realX = coords[i][0] - result.position.left;
					realY = coords[i][1] - result.position.top;

					if((corner.x === LEFT && realX >= compareX) ||
					(corner.x === RIGHT && realX <= compareX) ||
					(corner.x === CENTER && (realX < compareX || realX > (result.width - compareX))) ||
					(corner.y === TOP && realY >= compareY) ||
					(corner.y === BOTTOM && realY <= compareY) ||
					(corner.y === CENTER && (realY < compareY || realY > (result.height - compareY)))) {
						coords.splice(i, 1);
					}
				}
			}
			result.position = { left: coords[0][0], top: coords[0][1] };
		}

		return result;
	},

	rect: function(ax, ay, bx, by) {
		return {
			width: Math.abs(bx - ax),
			height: Math.abs(by - ay),
			position: {
				left: Math.min(ax, bx),
				top: Math.min(ay, by)
			}
		};
	},

	_angles: {
		tc: 3 / 2, tr: 7 / 4, tl: 5 / 4,
		bc: 1 / 2, br: 1 / 4, bl: 3 / 4,
		rc: 2, lc: 1, c: 0
	},
	ellipse: function(cx, cy, rx, ry, corner) {
		var c = PLUGINS.polys._angles[ corner.abbrev() ],
			rxc = c === 0 ? 0 : rx * Math.cos( c * Math.PI ),
			rys = ry * Math.sin( c * Math.PI );

		return {
			width: (rx * 2) - Math.abs(rxc),
			height: (ry * 2) - Math.abs(rys),
			position: {
				left: cx + rxc,
				top: cy + rys
			},
			adjustable: FALSE
		};
	},
	circle: function(cx, cy, r, corner) {
		return PLUGINS.polys.ellipse(cx, cy, r, r, corner);
	}
};
;PLUGINS.svg = function(api, svg, corner)
{
	var doc = $(document),
		elem = svg[0],
		root = $(elem.ownerSVGElement),
		ownerDocument = elem.ownerDocument,
		strokeWidth2 = (parseInt(svg.css('stroke-width'), 10) || 0) / 2,
		frameOffset, mtx, transformed, viewBox,
		len, next, i, points,
		result, position, dimensions;

	// Ascend the parentNode chain until we find an element with getBBox()
	while(!elem.getBBox) { elem = elem.parentNode; }
	if(!elem.getBBox || !elem.parentNode) { return FALSE; }

	// Determine which shape calculation to use
	switch(elem.nodeName) {
		case 'ellipse':
		case 'circle':
			result = PLUGINS.polys.ellipse(
				elem.cx.baseVal.value,
				elem.cy.baseVal.value,
				(elem.rx || elem.r).baseVal.value + strokeWidth2,
				(elem.ry || elem.r).baseVal.value + strokeWidth2,
				corner
			);
		break;

		case 'line':
		case 'polygon':
		case 'polyline':
			// Determine points object (line has none, so mimic using array)
			points = elem.points || [
				{ x: elem.x1.baseVal.value, y: elem.y1.baseVal.value },
				{ x: elem.x2.baseVal.value, y: elem.y2.baseVal.value }
			];

			for(result = [], i = -1, len = points.numberOfItems || points.length; ++i < len;) {
				next = points.getItem ? points.getItem(i) : points[i];
				result.push.apply(result, [next.x, next.y]);
			}

			result = PLUGINS.polys.polygon(result, corner);
		break;

		// Unknown shape or rectangle? Use bounding box
		default:
			result = elem.getBBox();
			result = {
				width: result.width,
				height: result.height,
				position: {
					left: result.x,
					top: result.y
				}
			};
		break;
	}

	// Shortcut assignments
	position = result.position;
	root = root[0];

	// Convert position into a pixel value
	if(root.createSVGPoint) {
		mtx = elem.getScreenCTM();
		points = root.createSVGPoint();

		points.x = position.left;
		points.y = position.top;
		transformed = points.matrixTransform( mtx );
		position.left = transformed.x;
		position.top = transformed.y;
	}

	// Check the element is not in a child document, and if so, adjust for frame elements offset
	if(ownerDocument !== document && api.position.target !== 'mouse') {
		frameOffset = $((ownerDocument.defaultView || ownerDocument.parentWindow).frameElement).offset();
		if(frameOffset) {
			position.left += frameOffset.left;
			position.top += frameOffset.top;
		}
	}

	// Adjust by scroll offset of owner document
	ownerDocument = $(ownerDocument);
	position.left += ownerDocument.scrollLeft();
	position.top += ownerDocument.scrollTop();

	return result;
};
;PLUGINS.imagemap = function(api, area, corner, adjustMethod)
{
	if(!area.jquery) { area = $(area); }

	var shape = (area.attr('shape') || 'rect').toLowerCase().replace('poly', 'polygon'),
		image = $('img[usemap="#'+area.parent('map').attr('name')+'"]'),
		coordsString = $.trim(area.attr('coords')),
		coordsArray = coordsString.replace(/,$/, '').split(','),
		imageOffset, coords, i, next, result, len;

	// If we can't find the image using the map...
	if(!image.length) { return FALSE; }

	// Pass coordinates string if polygon
	if(shape === 'polygon') {
		result = PLUGINS.polys.polygon(coordsArray, corner);
	}

	// Otherwise parse the coordinates and pass them as arguments
	else if(PLUGINS.polys[shape]) {
		for(i = -1, len = coordsArray.length, coords = []; ++i < len;) {
			coords.push( parseInt(coordsArray[i], 10) );
		}

		result = PLUGINS.polys[shape].apply(
			this, coords.concat(corner)
		);
	}

	// If no shapre calculation method was found, return false
	else { return FALSE; }

	// Make sure we account for padding and borders on the image
	imageOffset = image.offset();
	imageOffset.left += Math.ceil((image.outerWidth(FALSE) - image.width()) / 2);
	imageOffset.top += Math.ceil((image.outerHeight(FALSE) - image.height()) / 2);

	// Add image position to offset coordinates
	result.position.left += imageOffset.left;
	result.position.top += imageOffset.top;

	return result;
};
;var IE6,

/*
 * BGIFrame adaption (http://plugins.jquery.com/project/bgiframe)
 * Special thanks to Brandon Aaron
 */
BGIFRAME = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" ' +
	' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); ' +
		'-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';

function Ie6(api, qtip) {
	this._ns = 'ie6';
	this.init( (this.qtip = api) );
}

$.extend(Ie6.prototype, {
	_scroll : function() {
		var overlay = this.qtip.elements.overlay;
		overlay && (overlay[0].style.top = $(window).scrollTop() + 'px');
	},

	init: function(qtip) {
		var tooltip = qtip.tooltip,
			scroll;

		// Create the BGIFrame element if needed
		if($('select, object').length < 1) {
			this.bgiframe = qtip.elements.bgiframe = $(BGIFRAME).appendTo(tooltip);

			// Update BGIFrame on tooltip move
			qtip._bind(tooltip, 'tooltipmove', this.adjustBGIFrame, this._ns, this);
		}

		// redraw() container for width/height calculations
		this.redrawContainer = $('<div/>', { id: NAMESPACE+'-rcontainer' })
			.appendTo(document.body);

		// Fixup modal plugin if present too
		if( qtip.elements.overlay && qtip.elements.overlay.addClass('qtipmodal-ie6fix') ) {
			qtip._bind(window, ['scroll', 'resize'], this._scroll, this._ns, this);
			qtip._bind(tooltip, ['tooltipshow'], this._scroll, this._ns, this);
		}

		// Set dimensions
		this.redraw();
	},

	adjustBGIFrame: function() {
		var tooltip = this.qtip.tooltip,
			dimensions = {
				height: tooltip.outerHeight(FALSE),
				width: tooltip.outerWidth(FALSE)
			},
			plugin = this.qtip.plugins.tip,
			tip = this.qtip.elements.tip,
			tipAdjust, offset;

		// Adjust border offset
		offset = parseInt(tooltip.css('borderLeftWidth'), 10) || 0;
		offset = { left: -offset, top: -offset };

		// Adjust for tips plugin
		if(plugin && tip) {
			tipAdjust = (plugin.corner.precedance === 'x') ? [WIDTH, LEFT] : [HEIGHT, TOP];
			offset[ tipAdjust[1] ] -= tip[ tipAdjust[0] ]();
		}

		// Update bgiframe
		this.bgiframe.css(offset).css(dimensions);
	},

	// Max/min width simulator function
	redraw: function() {
		if(this.qtip.rendered < 1 || this.drawing) { return this; }

		var tooltip = this.qtip.tooltip,
			style = this.qtip.options.style,
			container = this.qtip.options.position.container,
			perc, width, max, min;

		// Set drawing flag
		this.qtip.drawing = 1;

		// If tooltip has a set height/width, just set it... like a boss!
		if(style.height) { tooltip.css(HEIGHT, style.height); }
		if(style.width) { tooltip.css(WIDTH, style.width); }

		// Simulate max/min width if not set width present...
		else {
			// Reset width and add fluid class
			tooltip.css(WIDTH, '').appendTo(this.redrawContainer);

			// Grab our tooltip width (add 1 if odd so we don't get wrapping problems.. huzzah!)
			width = tooltip.width();
			if(width % 2 < 1) { width += 1; }

			// Grab our max/min properties
			max = tooltip.css('maxWidth') || '';
			min = tooltip.css('minWidth') || '';

			// Parse into proper pixel values
			perc = (max + min).indexOf('%') > -1 ? container.width() / 100 : 0;
		max = ((max.indexOf('%') > -1 ? perc : 1) * parseInt(max, 10)) || width;
			min = ((min.indexOf('%') > -1 ? perc : 1) * parseInt(min, 10)) || 0;

			// Determine new dimension size based on max/min/current values
			width = max + min ? Math.min(Math.max(width, min), max) : width;

			// Set the newly calculated width and remvoe fluid class
			tooltip.css(WIDTH, Math.round(width)).appendTo(container);
		}

		// Set drawing flag
		this.drawing = 0;

		return this;
	},

	destroy: function() {
		// Remove iframe
		this.bgiframe && this.bgiframe.remove();

		// Remove bound events
		this.qtip._unbind([window, this.qtip.tooltip], this._ns);
	}
});

IE6 = PLUGINS.ie6 = function(api) {
	// Proceed only if the browser is IE6
	return BROWSER.ie === 6 ? new Ie6(api) : FALSE;
};

IE6.initialize = 'render';

CHECKS.ie6 = {
	'^content|style$': function() {
		this.redraw();
	}
};
;}));
}( window, document ));
// TinyColor v0.9.16
// https://github.com/bgrins/TinyColor
// 2013-08-10, Brian Grinstead, MIT License

(function() {

var trimLeft = /^[\s,#]+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathRandom = math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (typeof color == "object" && color.hasOwnProperty("_tc_id")) {
       return color;
    }

    var rgb = inputToRGB(color);
    var r = rgb.r,
        g = rgb.g,
        b = rgb.b,
        a = rgb.a,
        roundA = mathRound(100*a) / 100,
        format = opts.format || rgb.format;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (r < 1) { r = mathRound(r); }
    if (g < 1) { g = mathRound(g); }
    if (b < 1) { b = mathRound(b); }

    return {
        ok: rgb.ok,
        format: format,
        _tc_id: tinyCounter++,
        alpha: a,
        getAlpha: function() {
            return a;
        },
        setAlpha: function(value) {
            a = boundAlpha(value);
            roundA = mathRound(100*a) / 100;
        },
        toHsv: function() {
            var hsv = rgbToHsv(r, g, b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: a };
        },
        toHsvString: function() {
            var hsv = rgbToHsv(r, g, b);
            var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
            return (a == 1) ?
              "hsv("  + h + ", " + s + "%, " + v + "%)" :
              "hsva(" + h + ", " + s + "%, " + v + "%, "+ roundA + ")";
        },
        toHsl: function() {
            var hsl = rgbToHsl(r, g, b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: a };
        },
        toHslString: function() {
            var hsl = rgbToHsl(r, g, b);
            var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
            return (a == 1) ?
              "hsl("  + h + ", " + s + "%, " + l + "%)" :
              "hsla(" + h + ", " + s + "%, " + l + "%, "+ roundA + ")";
        },
        toHex: function(allow3Char) {
            return rgbToHex(r, g, b, allow3Char);
        },
        toHexString: function(allow3Char) {
            return '#' + rgbToHex(r, g, b, allow3Char);
        },
        toRgb: function() {
            return { r: mathRound(r), g: mathRound(g), b: mathRound(b), a: a };
        },
        toRgbString: function() {
            return (a == 1) ?
              "rgb("  + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ")" :
              "rgba(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ", " + roundA + ")";
        },
        toPercentageRgb: function() {
            return { r: mathRound(bound01(r, 255) * 100) + "%", g: mathRound(bound01(g, 255) * 100) + "%", b: mathRound(bound01(b, 255) * 100) + "%", a: a };
        },
        toPercentageRgbString: function() {
            return (a == 1) ?
              "rgb("  + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%)" :
              "rgba(" + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%, " + roundA + ")";
        },
        toName: function() {
            if (a === 0) {
                return "transparent";
            }

            return hexNames[rgbToHex(r, g, b, true)] || false;
        },
        toFilter: function(secondColor) {
            var hex = rgbToHex(r, g, b);
            var secondHex = hex;
            var alphaHex = Math.round(parseFloat(a) * 255).toString(16);
            var secondAlphaHex = alphaHex;
            var gradientType = opts && opts.gradientType ? "GradientType = 1, " : "";

            if (secondColor) {
                var s = tinycolor(secondColor);
                secondHex = s.toHex();
                secondAlphaHex = Math.round(parseFloat(s.alpha) * 255).toString(16);
            }

            return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr=#" + pad2(alphaHex) + hex + ",endColorstr=#" + pad2(secondAlphaHex) + secondHex + ")";
        },
        toString: function(format) {
            var formatSet = !!format;
            format = format || this.format;

            var formattedString = false;
            var hasAlphaAndFormatNotSet = !formatSet && a < 1 && a > 0;
            var formatWithAlpha = hasAlphaAndFormatNotSet && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

            if (format === "rgb") {
                formattedString = this.toRgbString();
            }
            if (format === "prgb") {
                formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
                formattedString = this.toHexString();
            }
            if (format === "hex3") {
                formattedString = this.toHexString(true);
            }
            if (format === "name") {
                formattedString = this.toName();
            }
            if (format === "hsl") {
                formattedString = this.toHslString();
            }
            if (format === "hsv") {
                formattedString = this.toHsvString();
            }

            if (formatWithAlpha) {
                return this.toRgbString();
            }

            return formattedString || this.toHexString();
        }
    };
}

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
            color.s = convertToPercentage(color.s);
            color.v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, color.s, color.v);
            ok = true;
            format = "hsv";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
            color.s = convertToPercentage(color.s);
            color.l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, color.s, color.l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

tinycolor.desaturate = function (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
};
tinycolor.saturate = function (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
};
tinycolor.greyscale = function(color) {
    return tinycolor.desaturate(color, 100);
};
tinycolor.lighten = function(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
};
tinycolor.darken = function (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
};
tinycolor.complement = function(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
};


// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

tinycolor.triad = function(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
};
tinycolor.tetrad = function(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
};
tinycolor.splitcomplement = function(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
};
tinycolor.analogous = function(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
};
tinycolor.monochromatic = function(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/AERT#color-contrast>

// `readability`
// Analyze the 2 colors and returns an object with the following properties:
//    `brightness`: difference in brightness between the two colors
//    `color`: difference in color/hue between the two colors
tinycolor.readability = function(color1, color2) {
    var a = tinycolor(color1).toRgb();
    var b = tinycolor(color2).toRgb();
    var brightnessA = (a.r * 299 + a.g * 587 + a.b * 114) / 1000;
    var brightnessB = (b.r * 299 + b.g * 587 + b.b * 114) / 1000;
    var colorDiff = (
        Math.max(a.r, b.r) - Math.min(a.r, b.r) +
        Math.max(a.g, b.g) - Math.min(a.g, b.g) +
        Math.max(a.b, b.b) - Math.min(a.b, b.b)
    );

    return {
        brightness: Math.abs(brightnessA - brightnessB),
        color: colorDiff
    };
};

// `readable`
// http://www.w3.org/TR/AERT#color-contrast
// Ensure that foreground and background color combinations provide sufficient contrast.
// *Example*
//    tinycolor.readable("#000", "#111") => false
tinycolor.readable = function(color1, color2) {
    var readability = tinycolor.readability(color1, color2);
    return readability.brightness > 125 && readability.color > 500;
};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// *Example*
//    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
tinycolor.mostReadable = function(baseColor, colorList) {
    var bestColor = null;
    var bestScore = 0;
    var bestIsReadable = false;
    for (var i=0; i < colorList.length; i++) {

        // We normalize both around the "acceptable" breaking point,
        // but rank brightness constrast higher than hue.

        var readability = tinycolor.readability(baseColor, colorList[i]);
        var readable = readability.brightness > 125 && readability.color > 500;
        var score = 3 * (readability.brightness / 125) + (readability.color / 500);

        if ((readable && ! bestIsReadable) ||
            (readable && bestIsReadable && score > bestScore) ||
            ((! readable) && (! bestIsReadable) && score > bestScore)) {
            bestIsReadable = readable;
            bestScore = score;
            bestColor = tinycolor(colorList[i]);
        }
    }
    return bestColor;
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse an integer into hex
function parseHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseHex(match[1]),
            g: parseHex(match[2]),
            b: parseHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseHex(match[1] + '' + match[1]),
            g: parseHex(match[2] + '' + match[2]),
            b: parseHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (typeof define !== "undefined") {
    define(function () {return tinycolor;});
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})();/*jshint undef: true, unused:true, browser:true */
/*global jQuery: true, tinycolor: false */

/*!=========================================================================
 *  jQuery Color Picker Sliders
 *  v4.1.7
 *
 *  An advanced responsive color selector with color swatches and support for
 *  human perceived lightness. Works in all modern browsers and on touch devices.
 *
 *      https://github.com/istvan-ujjmeszaros/jquery-colorpickersliders
 *      http://virtuosoft.eu/code/jquery-colorpickersliders/
 *
 *  Copyright 2013 István Ujj-Mészáros
 *
 *  Thanks for the contributors:
 *      imaguiraga - https://github.com/imaguiraga
 *      balmasich - https://github.com/balmasich
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  Requirements:
 *
 *      TinyColor: https://github.com/bgrins/TinyColor
 *
 *  Using color math algorithms from EasyRGB Web site:
 *      http://www.easyrgb.com/index.php?X=MATH
 * ====================================================================== */

(function($) {
    "use strict";

    $.fn.ColorPickerSliders = function(options) {

        return this.each(function() {

            var alreadyinitialized = false,
                    settings,
                    triggerelement = $(this),
                    triggerelementisinput = triggerelement.is("input"),
                    container,
                    elements,
                    swatches,
                    rendermode = false,
                    MAXLIGHT = 101, // 101 needed for bright colors (maybe due to rounding errors)
                    dragTarget = false,
                    lastUpdateTime = 0,
                    color = {
                        tiny: null,
                        hsla: null,
                        rgba: null,
                        cielch: null
                    },
            MAXVALIDCHROMA = 144;   // maximum valid chroma value found convertible to rgb (blue)

            init();

            function init() {
                if (alreadyinitialized) {
                    return;
                }

                alreadyinitialized = true;

                rendermode = $.fn.ColorPickerSliders.detectWhichGradientIsSupported();

                if (rendermode === "filter") {
                    rendermode = false;
                }

                if (!rendermode && $.fn.ColorPickerSliders.svgSupported()) {
                    rendermode = "svg";
                }

                _initSettings();

                // force preview when browser doesn't support css gradients
                if ((!settings.order.hasOwnProperty('preview') || settings.order.preview === false) && !rendermode) {
                    settings.order.preview = 10;
                }

                _buildHtml();
                _initElements();

                if (triggerelementisinput) {
                    color.tiny = tinycolor(triggerelement.val());

                    if (!color.tiny.format) {
                        color.tiny = tinycolor(settings.color);
                    }
                }
                else {
                    color.tiny = tinycolor(settings.color);
                }

                color.hsla = color.tiny.toHsl();
                color.rgba = color.tiny.toRgb();
                color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                _renderSwatches();
                _bindEvents();

                _updateAllElements();
            }

            function updateColor(newcolor, disableinputupdate) {
                var updatedcolor = tinycolor(newcolor);

                if (updatedcolor.format) {
                    container.removeClass("cp-unconvertible-cie-color");

                    color.tiny = updatedcolor;
                    color.hsla = updatedcolor.toHsl();
                    color.rgba = updatedcolor.toRgb();
                    color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                    _updateAllElements(disableinputupdate);

                    return true;
                }
                else {
                    return false;
                }
            }

            function showPopup() {
                container.data("justshown", true);

                $('.cp-container.cp-popup').hide();

                var viewportwidth = $(window).width(),
                        offset = triggerelement.offset(),
                        popuporiginalwidth;

                popuporiginalwidth = container.data('popup-original-width');

                if (typeof popuporiginalwidth === "undefined") {
                    popuporiginalwidth = container.outerWidth();
                    container.data('popup-original-width', popuporiginalwidth);
                }

                if (offset.left + popuporiginalwidth + 12 <= viewportwidth) {
                    container.css('left', offset.left).width(popuporiginalwidth);
                }
                else if (popuporiginalwidth <= viewportwidth) {
                    container.css('left', viewportwidth - popuporiginalwidth - 12).width(popuporiginalwidth);
                }
                else {
                    container.css('left', 0).width(viewportwidth - 12);
                }

                container.css('top', offset.top + triggerelement.outerHeight()).show();
            }

            function hidePopup() {
                container.hide();
            }

            function _initSettings() {
                settings = $.extend({
                    color: 'hsl(342, 52%, 70%)',
                    preventtouchkeyboardonshow: true,
                    swatches: ['FFFFFF', 'C0C0C0', '808080', '000000', 'FF0000', '800000', 'FFFF00', '808000', '00FF00', '008000', '00FFFF', '008080', '0000FF', '000080', 'FF00FF', '800080'],
                    customswatches: 'colorpickkersliders', // false or a grop name
                    connectedinput: false, // can be a jquery object or a selector
                    flat: false,
                    disableautopopup: false,
                    updateinterval: 30, // update interval of the sliders while in drag (ms)
                    previewontriggerelement: true,
                    previewcontrasttreshold: 15,
                    previewformat: 'rgb', // rgb/hsl/hex
                    erroneousciecolormarkers: true,
                    invalidcolorsopacity: 1, // everything below 1 causes slightly slower responses
                    finercierangeedges: true, // can be disabled for faster responses
                    titleswatchesadd: "Add color to swatches",
                    titleswatchesremove: "Remove color from swatches",
                    titleswatchesreset: "Reset to default swatches",
                    order: {},
                    labels: {},
                    onchange: function() {
                    }
                }, options);

                if (options.hasOwnProperty('order')) {
                    settings.order = $.extend({
                        opacity: false,
                        hsl: false,
                        rgb: false,
                        cie: false,
                        preview: false
                    }, options.order);
                }
                else {
                    settings.order = {
                        opacity: 0,
                        hsl: 1,
                        rgb: 2,
                        cie: 3, // cie sliders can increase response time of all sliders!
                        preview: 4
                    };
                }

                if (!options.hasOwnProperty('labels')) {
                    options.labels = {};
                }

                settings.labels = $.extend({
                    hslhue: 'HSL-Hue',
                    hslsaturation: 'HSL-Saturation',
                    hsllightness: 'HSL-Lightness',
                    rgbred: 'RGB-Red',
                    rgbgreen: 'RGB-Green',
                    rgbblue: 'RGB-Blue',
                    cielightness: 'CIE-Lightness',
                    ciechroma: 'CIE-Chroma',
                    ciehue: 'CIE-hue',
                    opacity: 'Opacity',
                    preview: 'Preview'
                }, options.labels);
            }

            function _buildHtml() {
                var sliders = [],
                        color_picker_html = '';

                if (settings.order.opacity !== false) {
                    sliders[settings.order.opacity] = '<div class="cp-slider cp-opacity cp-transparency"><span>' + settings.labels.opacity + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.hsl !== false) {
                    sliders[settings.order.hsl] = '<div class="cp-slider cp-hslhue cp-transparency"><span>' + settings.labels.hslhue + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-hslsaturation cp-transparency"><span>' + settings.labels.hslsaturation + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-hsllightness cp-transparency"><span>' + settings.labels.hsllightness + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.rgb !== false) {
                    sliders[settings.order.rgb] = '<div class="cp-slider cp-rgbred cp-transparency"><span>' + settings.labels.rgbred + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbgreen cp-transparency"><span>' + settings.labels.rgbgreen + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbblue cp-transparency"><span>' + settings.labels.rgbblue + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.cie !== false) {
                    sliders[settings.order.cie] = '<div class="cp-slider cp-cielightness cp-transparency"><span>' + settings.labels.cielightness + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciechroma cp-transparency"><span>' + settings.labels.ciechroma + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciehue cp-transparency"><span>' + settings.labels.ciehue + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.preview !== false) {
                    sliders[settings.order.preview] = '<div class="cp-preview cp-transparency"><input type="text" readonly="readonly"></div>';
                }

                color_picker_html += '<div class="cp-sliders">';

                for (var i = 0; i < sliders.length; i++) {
                    if (typeof sliders[i] === "undefined") {
                        continue;
                    }

                    color_picker_html += sliders[i];
                }

                color_picker_html += '</div>';

                if (settings.swatches) {
                    color_picker_html += '<div class="cp-swatches"><button type="button" class="add" title="' + settings.titleswatchesadd + '"></button><button type="button" class="remove" title="' + settings.titleswatchesremove + '"></button><button type="button" class="reset" title="' + settings.titleswatchesreset + '"></button><ul></ul><div style="clear:both"></div></div>';
                }

                if (settings.flat) {
                    if (triggerelementisinput) {
                        container = $('<div class="cp-container"></div>').insertAfter(triggerelement);
                    }
                    else {
                        container = $('<div class="cp-container"></div>');
                        triggerelement.append(container);
                    }
                }
                else {
                    container = $('<div class="cp-container"></div>').appendTo('body');
                }

                container.append(color_picker_html);

                if (settings.connectedinput instanceof jQuery) {
                    settings.connectedinput.add(triggerelement);
                }
                else if (settings.connectedinput === false) {
                    settings.connectedinput = triggerelement;
                }
                else {
                    settings.connectedinput = $(settings.connectedinput).add(triggerelement);
                }

                if (!settings.flat) {
                    container.addClass('cp-popup');
                }
            }

            function _initElements() {
                elements = {
                    connectedinput: false,
                    actualswatch: false,
                    swatchescontainer: $(".cp-swatches", container),
                    swatches: $(".cp-swatches ul", container),
                    swatches_add: $(".cp-swatches button.add", container),
                    swatches_remove: $(".cp-swatches button.remove", container),
                    swatches_reset: $(".cp-swatches button.reset", container),
                    all_sliders: $(".cp-sliders, .cp-preview input", container),
                    sliders: {
                        hue: $(".cp-hslhue span", container),
                        hue_marker: $(".cp-hslhue .cp-marker", container),
                        saturation: $(".cp-hslsaturation span", container),
                        saturation_marker: $(".cp-hslsaturation .cp-marker", container),
                        lightness: $(".cp-hsllightness span", container),
                        lightness_marker: $(".cp-hsllightness .cp-marker", container),
                        opacity: $(".cp-opacity span", container),
                        opacity_marker: $(".cp-opacity .cp-marker", container),
                        red: $(".cp-rgbred span", container),
                        red_marker: $(".cp-rgbred .cp-marker", container),
                        green: $(".cp-rgbgreen span", container),
                        green_marker: $(".cp-rgbgreen .cp-marker", container),
                        blue: $(".cp-rgbblue span", container),
                        blue_marker: $(".cp-rgbblue .cp-marker", container),
                        cielightness: $(".cp-cielightness span", container),
                        cielightness_marker: $(".cp-cielightness .cp-marker", container),
                        ciechroma: $(".cp-ciechroma span", container),
                        ciechroma_marker: $(".cp-ciechroma .cp-marker", container),
                        ciehue: $(".cp-ciehue span", container),
                        ciehue_marker: $(".cp-ciehue .cp-marker", container),
                        preview: $(".cp-preview input", container)
                    }
                };

                if (settings.connectedinput) {
                    if (settings.connectedinput instanceof jQuery) {
                        elements.connectedinput = settings.connectedinput;
                    }
                    else {
                        elements.connectedinput = $(settings.connectedinput);
                    }
                }

                if (!settings.customswatches) {
                    elements.swatches_add.hide();
                    elements.swatches_remove.hide();
                    elements.swatches_reset.hide();
                }
            }

            function  destroyColorPicker() {
                if (container  instanceof jQuery) {
                    hidePopup();
                    container.remove();
                    alreadyinitialized = false;
                }
            }

            function  resetColorPicker() {
                init();
            }

            function _bindEvents() {
                triggerelement.on('colorpickersliders.destroy', function() {
                    destroyColorPicker();
                });

                triggerelement.on('colorpickersliders.reset', function() {
                    resetColorPicker();
                });

                triggerelement.on('colorpickersliders.updateColor', function(e, newcolor) {
                    updateColor(newcolor);
                });

                triggerelement.on('colorpickersliders.showPopup', function() {
                    showPopup();
                });

                triggerelement.on('colorpickersliders.hidePopup', function() {
                    hidePopup();
                });

                $(document).on("colorpickersliders.changeswatches", function() {
                    _renderSwatches();
                });

                if (!settings.flat && !settings.disableautopopup) {
                    // we need tabindex defined to be focusable
                    if (typeof triggerelement.attr("tabindex") === "undefined") {
                        triggerelement.attr("tabindex", -1);
                    }

                    if (settings.preventtouchkeyboardonshow) {
                        $(triggerelement).prop("readonly", true);

                        $(triggerelement).on("click", function(ev) {
                            if (container.data("justshown")) {
                                container.data("justshown", false);
                            }
                            else {
                                $(triggerelement).prop("readonly", false);
                                ev.stopPropagation();
                            }
                        });
                    }

                    // buttons doesn't get focus in webkit browsers
                    // https://bugs.webkit.org/show_bug.cgi?id=22261
                    // and only input and button are focusable on iPad
                    // so it is safer to register click on any other than inputs
                    if (!triggerelementisinput) {
                        $(triggerelement).on("click", function(ev) {
                            showPopup();

                            ev.stopPropagation();
                        });

                        $(document).on("click", function() {
                            hidePopup();
                        });
                    }

                    $(triggerelement).on("focus", function(ev) {
                        showPopup();

                        ev.stopPropagation();
                    });

                    $(triggerelement).on("blur", function(ev) {
                        hidePopup();

                        if (settings.preventtouchkeyboardonshow) {
                            $(triggerelement).prop("readonly", true);
                        }

                        ev.stopPropagation();
                    });

                    container.on("touchstart mousedown", function(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();

                        return false;
                    });
                }

                container.on("contextmenu", function(ev) {
                    ev.preventDefault();
                    return false;
                });

                elements.swatches.on("click", "li span", function(ev) {
                    var color = $(this).css("background-color");
                    updateColor(color);
                    ev.preventDefault();
                });

                elements.swatches_add.on("click", function(ev) {
                    _addCurrentColorToSwatches();
                    ev.preventDefault();
                });

                elements.swatches_remove.on("click", function(ev) {
                    _removeActualColorFromSwatches();
                    ev.preventDefault();
                });

                elements.swatches_reset.on("click", function(ev) {
                    _resetSwatches();
                    ev.preventDefault();
                });

                elements.sliders.hue.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "hue";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 'h', 3.6 * percent);

                    _updateAllElements();
                });

                elements.sliders.saturation.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "saturation";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 's', percent / 100);

                    _updateAllElements();
                });

                elements.sliders.lightness.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "lightness";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 'l', percent / 100);

                    _updateAllElements();
                });

                elements.sliders.opacity.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "opacity";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 'a', percent / 100);

                    _updateAllElements();
                });

                elements.sliders.red.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "red";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('rgba', 'r', 2.55 * percent);

                    _updateAllElements();
                });

                elements.sliders.green.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "green";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('rgba', 'g', 2.55 * percent);

                    _updateAllElements();
                });

                elements.sliders.blue.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "blue";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('rgba', 'b', 2.55 * percent);

                    _updateAllElements();
                });

                elements.sliders.cielightness.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "cielightness";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);

                    _updateAllElements();
                });

                elements.sliders.ciechroma.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "ciechroma";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);

                    _updateAllElements();
                });

                elements.sliders.ciehue.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "ciehue";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('cielch', 'h', 3.6 * percent);

                    _updateAllElements();
                });

                elements.sliders.preview.on("click", function() {
                    this.select();
                });

                $(document).on("touchmove mousemove", function(ev) {
                    if (!dragTarget) {
                        return;
                    }

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    switch (dragTarget) {
                        case "hue":
                            _updateColorsProperty('hsla', 'h', 3.6 * percent);
                            break;
                        case "saturation":
                            _updateColorsProperty('hsla', 's', percent / 100);
                            break;
                        case "lightness":
                            _updateColorsProperty('hsla', 'l', percent / 100);
                            break;
                        case "opacity":
                            _updateColorsProperty('hsla', 'a', percent / 100);
                            break;
                        case "red":
                            _updateColorsProperty('rgba', 'r', 2.55 * percent);
                            break;
                        case "green":
                            _updateColorsProperty('rgba', 'g', 2.55 * percent);
                            break;
                        case "blue":
                            _updateColorsProperty('rgba', 'b', 2.55 * percent);
                            break;
                        case "cielightness":
                            _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);
                            break;
                        case "ciechroma":
                            _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);
                            break;
                        case "ciehue":
                            _updateColorsProperty('cielch', 'h', 3.6 * percent);
                            break;
                    }

                    _updateAllElements();

                    ev.preventDefault();
                });

                $(document).on("touchend mouseup", function(ev) {
                    if (ev.which > 1) {
                        return;
                    }

                    if (dragTarget) {
                        dragTarget = false;
                        ev.preventDefault();
                        settings.change(container, color);
                    }
                });

                if (elements.connectedinput) {
                    elements.connectedinput.on('keyup change', function() {
                        var $input = $(this);

                        updateColor($input.val(), true);
                    });
                }

            }

            function _parseCustomSwatches() {
                swatches = [];

                for (var i = 0; i < settings.swatches.length; i++) {
                    var color = tinycolor(settings.swatches[i]);

                    if (color.format) {
                        swatches.push(color.toRgbString());
                    }
                }
            }

            function _renderSwatches() {
                if (!settings.swatches) {
                    return;
                }

                if (settings.customswatches) {
                    var customswatches = false;

                    try {
                        customswatches = JSON.parse(localStorage.getItem("swatches-" + settings.customswatches));
                    }
                    catch (err) {
                    }

                    if (customswatches) {
                        swatches = customswatches;
                    }
                    else {
                        _parseCustomSwatches();
                    }
                }
                else {
                    _parseCustomSwatches();
                }

                if (swatches instanceof Array) {
                    elements.swatches.html("");
                    for (var i = 0; i < swatches.length; i++) {
                        var color = tinycolor(swatches[i]);

                        if (color.format) {
                            elements.swatches.append($("<li></li>").append($("<span></span>").css("background-color", color.toRgbString())));
                        }
                    }
                }

                _findActualColorsSwatch();
            }

            function _findActualColorsSwatch() {
                var found = false;

                $("span", elements.swatches).filter(function() {
                    var swatchcolor = $(this).css('background-color');

                    swatchcolor = tinycolor(swatchcolor);
                    swatchcolor.alpha = Math.round(swatchcolor.alpha * 100) / 100;

                    if (swatchcolor.toRgbString() === color.tiny.toRgbString()) {
                        found = true;

                        var currentswatch = $(this).parent();

                        if (!currentswatch.is(elements.actualswatch)) {
                            if (elements.actualswatch) {
                                elements.actualswatch.removeClass("actual");
                            }
                            elements.actualswatch = currentswatch;
                            currentswatch.addClass("actual");
                        }
                    }
                });

                if (!found) {
                    if (elements.actualswatch) {
                        elements.actualswatch.removeClass("actual");
                        elements.actualswatch = false;
                    }
                }

                if (elements.actualswatch) {
                    elements.swatches_add.prop("disabled", true);
                    elements.swatches_remove.prop("disabled", false);
                }
                else {
                    elements.swatches_add.prop("disabled", false);
                    elements.swatches_remove.prop("disabled", true);
                }
            }

            function _storeSwatches() {
                localStorage.setItem("swatches-" + settings.customswatches, JSON.stringify(swatches));
            }

            function _addCurrentColorToSwatches() {
                swatches.unshift(color.tiny.toRgbString());
                _storeSwatches();

                $(document).trigger("colorpickersliders.changeswatches");
            }

            function _removeActualColorFromSwatches() {
                var index = swatches.indexOf(color.tiny.toRgbString());

                if (index !== -1) {
                    swatches.splice(index, 1);

                    _storeSwatches();
                    $(document).trigger("colorpickersliders.changeswatches");
                }
            }

            function _resetSwatches() {
                if (confirm("Do you really want to reset the swatches? All customizations will be lost!")) {
                    _parseCustomSwatches();

                    _storeSwatches();

                    $(document).trigger("colorpickersliders.changeswatches");
                }
            }

            function _updateColorsProperty(format, property, value) {
                switch (format) {
                    case 'hsla':

                        color.hsla[property] = value;
                        color.tiny = tinycolor({h: color.hsla.h, s: color.hsla.s, l: color.hsla.l, a: color.hsla.a});
                        color.rgba = color.tiny.toRgb();
                        color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                        container.removeClass("cp-unconvertible-cie-color");

                        break;

                    case 'rgba':

                        color.rgba[property] = value;
                        color.tiny = tinycolor({r: color.rgba.r, g: color.rgba.g, b: color.rgba.b, a: color.hsla.a});
                        color.hsla = color.tiny.toHsl();
                        color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                        container.removeClass("cp-unconvertible-cie-color");

                        break;

                    case 'cielch':

                        color.cielch[property] = value;
                        color.rgba = $.fn.ColorPickerSliders.lch2rgb(color.cielch);
                        color.tiny = tinycolor(color.rgba);
                        color.hsla = color.tiny.toHsl();

                        if (settings.erroneousciecolormarkers) {
                            if (color.rgba.isok) {
                                container.removeClass("cp-unconvertible-cie-color");
                            }
                            else {
                                container.addClass("cp-unconvertible-cie-color");
                            }
                        }

                        break;
                }
            }

            function _updateMarkerPosition(slidername, ev) {
                var percent = $.fn.ColorPickerSliders.calculateEventPositionPercentage(ev, elements.sliders[slidername]);

                elements.sliders[slidername + '_marker'].data("position", percent);

                return percent;
            }

            var updateAllElementsTimeout;

            function _updateAllElementsTimer(disableinputupdate) {
                updateAllElementsTimeout = setTimeout(function() {
                    _updateAllElements(disableinputupdate);
                }, settings.updateinterval);
            }

            function _updateAllElements(disableinputupdate) {
                clearTimeout(updateAllElementsTimeout);

                Date.now = Date.now || function() { return +new Date; };

                if (Date.now() - lastUpdateTime < settings.updateinterval) {
                    _updateAllElementsTimer(disableinputupdate);
                    return;
                }

                if (typeof disableinputupdate === "undefined") {
                    disableinputupdate = false;
                }

                lastUpdateTime = Date.now();

                if (settings.order.opacity !== false) {
                    _renderOpacity();
                }

                if (settings.order.hsl !== false) {
                    _renderHue();
                    _renderSaturation();
                    _renderLightness();
                }

                if (settings.order.rgb !== false) {
                    _renderRed();
                    _renderGreen();
                    _renderBlue();
                }

                if (settings.order.cie !== false) {
                    _renderCieLightness();
                    _renderCieChroma();
                    _renderCieHue();
                }

                if (settings.order.preview !== false) {
                    _renderPreview();
                }

                if (!disableinputupdate) {
                    _updateConnectedInput();
                }

                if ((100 - color.cielch.l) * color.cielch.a < settings.previewcontrasttreshold) {
                    elements.all_sliders.css('color', '#000');
                    if (triggerelementisinput && settings.previewontriggerelement) {
                        triggerelement.css('background', color.tiny.toRgbString()).css('color', '#000');
                    }
                }
                else {
                    elements.all_sliders.css('color', '#fff');
                    if (triggerelementisinput && settings.previewontriggerelement) {
                        triggerelement.css('background', color.tiny.toRgbString()).css('color', '#fff');
                    }
                }

                _findActualColorsSwatch();

                settings.onchange(container, color);

                triggerelement.data("color", color);
            }

            function _updateConnectedInput() {
                if (elements.connectedinput) {
                    elements.connectedinput.each(function(index, element) {
                        var $element = $(element),
                            format = $element.data('color-format') || settings.previewformat;

                        switch (format) {
                            case 'hex':
                                $element.val(color.tiny.toHexString());
                                break;
                            case 'hsl':
                                $element.val(color.tiny.toHslString());
                                break;
                            case 'rgb':
                                /* falls through */
                            default:
                                $element.val(color.tiny.toRgbString());
                                break;
                        }
                    });
                }
            }

            function _renderHue() {
                setGradient(elements.sliders.hue, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "h", 0, 360, 7));

                elements.sliders.hue_marker.css("left", color.hsla.h / 360 * 100 + "%");
            }

            function _renderSaturation() {
                setGradient(elements.sliders.saturation, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "s", 0, 1, 2));

                elements.sliders.saturation_marker.css("left", color.hsla.s * 100 + "%");
            }

            function _renderLightness() {
                setGradient(elements.sliders.lightness, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "l", 0, 1, 3));

                elements.sliders.lightness_marker.css("left", color.hsla.l * 100 + "%");
            }

            function _renderOpacity() {
                setGradient(elements.sliders.opacity, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "a", 0, 1, 2));

                elements.sliders.opacity_marker.css("left", color.hsla.a * 100 + "%");
            }

            function _renderRed() {
                setGradient(elements.sliders.red, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, "r", 0, 255, 2));

                elements.sliders.red_marker.css("left", color.rgba.r / 255 * 100 + "%");
            }

            function _renderGreen() {
                setGradient(elements.sliders.green, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, "g", 0, 255, 2));

                elements.sliders.green_marker.css("left", color.rgba.g / 255 * 100 + "%");
            }

            function _renderBlue() {
                setGradient(elements.sliders.blue, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, "b", 0, 255, 2));

                elements.sliders.blue_marker.css("left", color.rgba.b / 255 * 100 + "%");
            }

            function _extendCieGradientStops(gradientstops, property) {
                if (settings.invalidcolorsopacity === 1 || !settings.finercierangeedges) {
                    return gradientstops;
                }

                gradientstops.sort(function(a, b) {
                    return a.position - b.position;
                });

                var tmparray = [];

                for (var i = 1; i < gradientstops.length; i++) {
                    if (gradientstops[i].isok !== gradientstops[i - 1].isok) {
                        var steps = Math.round(gradientstops[i].position) - Math.round(gradientstops[i - 1].position),
                                extendedgradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(gradientstops[i].rawcolor, property, gradientstops[i - 1].rawcolor[property], gradientstops[i].rawcolor[property], steps, settings.invalidcolorsopacity, gradientstops[i - 1].position, gradientstops[i].position);

                        for (var j = 0; j < extendedgradientstops.length; j++) {
                            if (extendedgradientstops[j].isok !== gradientstops[i - 1].isok) {
                                tmparray.push(extendedgradientstops[j]);

                                if (j > 0) {
                                    tmparray.push(extendedgradientstops[j - 1]);
                                }

                                break;
                            }
                        }
                    }
                }

                return $.merge(tmparray, gradientstops);
            }

            function _renderCieLightness() {
                var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, "l", 0, 100, 10, settings.invalidcolorsopacity);

                gradientstops = _extendCieGradientStops(gradientstops, "l");

                setGradient(elements.sliders.cielightness, gradientstops);

                elements.sliders.cielightness_marker.css("left", color.cielch.l / MAXLIGHT * 100 + "%");
            }

            function _renderCieChroma() {
                var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, "c", 0, MAXVALIDCHROMA, 5, settings.invalidcolorsopacity);

                gradientstops = _extendCieGradientStops(gradientstops, "c");

                setGradient(elements.sliders.ciechroma, gradientstops);

                elements.sliders.ciechroma_marker.css("left", color.cielch.c / MAXVALIDCHROMA * 100 + "%");
            }

            function _renderCieHue() {
                var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, "h", 0, 360, 28, settings.invalidcolorsopacity);

                gradientstops = _extendCieGradientStops(gradientstops, "h");

                setGradient(elements.sliders.ciehue, gradientstops);

                elements.sliders.ciehue_marker.css("left", color.cielch.h / 360 * 100 + "%");
            }

            function _renderPreview() {
                elements.sliders.preview.css("background", $.fn.ColorPickerSliders.csscolor(color.rgba));

                var colorstring;

                switch (settings.previewformat) {
                    case 'hex':
                        colorstring = color.tiny.toHexString();
                        break;
                    case 'hsl':
                        colorstring = color.tiny.toHslString();
                        break;
                    case 'rgb':
                        /* falls through */
                    default:
                        colorstring = color.tiny.toRgbString();
                        break;
                }

                elements.sliders.preview.val(colorstring);
            }

            function setGradient(element, gradientstops) {
                gradientstops.sort(function(a, b) {
                    return a.position - b.position;
                });

                switch(rendermode) {
                    case "noprefix":
                        $.fn.ColorPickerSliders.renderNoprefix(element, gradientstops);
                        break;
                    case "webkit":
                        $.fn.ColorPickerSliders.renderWebkit(element, gradientstops);
                        break;
                    case "ms":
                        $.fn.ColorPickerSliders.renderMs(element, gradientstops);
                        break;
                    case "svg": // can not repeat, radial can be only a covering ellipse (maybe there is a workaround, need more investigation)
                        $.fn.ColorPickerSliders.renderSVG(element, gradientstops);
                        break;
                    case "oldwebkit":   // can not repeat, no percent size with radial gradient (and no ellipse)
                        $.fn.ColorPickerSliders.renderOldwebkit(element, gradientstops);
                        break;
                }
            };

        });

    };

    $.fn.ColorPickerSliders.getEventCoordinates = function(ev) {
        if (typeof ev.pageX !== "undefined") {
            return {
                pageX: ev.originalEvent.pageX,
                pageY: ev.originalEvent.pageY
            };
        }
        else if (typeof ev.originalEvent.touches !== "undefined") {
            return {
                pageX: ev.originalEvent.touches[0].pageX,
                pageY: ev.originalEvent.touches[0].pageY
            };
        }
    };

    $.fn.ColorPickerSliders.calculateEventPositionPercentage = function(ev, containerElement) {
        var c = $.fn.ColorPickerSliders.getEventCoordinates(ev);

        var xsize = containerElement.width(),
                offsetX = c.pageX - containerElement.offset().left;

        var percent = offsetX / xsize * 100;

        if (percent < 0) {
            percent = 0;
        }

        if (percent > 100) {
            percent = 100;
        }

        return percent;
    };

    $.fn.ColorPickerSliders.getScaledGradientStops = function(color, scalableproperty, minvalue, maxvalue, steps, invalidcolorsopacity, minposition, maxposition) {
        if (typeof invalidcolorsopacity === "undefined") {
            invalidcolorsopacity = 1;
        }

        if (typeof minposition === "undefined") {
            minposition = 0;
        }

        if (typeof maxposition === "undefined") {
            maxposition = 100;
        }

        var gradientStops = [],
                diff = maxvalue - minvalue,
                isok = true;

        for (var i = 0; i < steps; ++i) {
            var currentstage = i / (steps - 1),
                    modifiedcolor = $.fn.ColorPickerSliders.modifyColor(color, scalableproperty, currentstage * diff + minvalue),
                    csscolor;

            if (invalidcolorsopacity < 1) {
                var stagergb = $.fn.ColorPickerSliders.lch2rgb(modifiedcolor, invalidcolorsopacity);

                isok = stagergb.isok;
                csscolor = $.fn.ColorPickerSliders.csscolor(stagergb, invalidcolorsopacity);
            }
            else {
                csscolor = $.fn.ColorPickerSliders.csscolor(modifiedcolor, invalidcolorsopacity);
            }

            gradientStops[i] = {
                color: tinycolor(csscolor).toRgbString(),
                position: Math.round((currentstage * (maxposition - minposition) + minposition) * 100) / 100,
                isok: isok,
                rawcolor: modifiedcolor
            };
        }

        return gradientStops;
    };

    $.fn.ColorPickerSliders.getGradientStopsCSSString = function(gradientstops) {
        var gradientstring = "",
            oldwebkit = "",
            svgstoppoints = "";

        for (var i = 0; i < gradientstops.length; i++) {
            var el = gradientstops[i];

            gradientstring += "," + el.color + " " + el.position + "%";
            oldwebkit += ",color-stop(" + el.position + "%," + el.color + ")";

            var svgcolor = tinycolor(el.color);

            svgstoppoints += '<stop ' + 'stop-color="' + svgcolor.toHexString() + '" stop-opacity="' + svgcolor.toRgb().a + '"' + ' offset="' + el.position/100 + '"/>';
        }

        return {
            noprefix: gradientstring,
            oldwebkit: oldwebkit,
            svg: svgstoppoints
        };
    };

    $.fn.ColorPickerSliders.renderNoprefix = function(element, gradientstops) {
        var css = "linear-gradient(to right",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderWebkit = function(element, gradientstops) {
        var css = "-webkit-linear-gradient(left",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderOldwebkit = function(element, gradientstops) {
        var css = "-webkit-gradient(linear, 0% 0%, 100% 0%",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).oldwebkit;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderMs = function(element, gradientstops) {
        var css = "-ms-linear-gradient(to right",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderSVG = function(element, gradientstops) {
        var svg = "",
            svgstoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).svg;

        svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">';
        svg += svgstoppoints;
        svg += '</linearGradient><rect x="0" y="0" width="1" height="1" fill="url(#vsgg)" /></svg>';
        svg = "url(data:image/svg+xml;base64," + $.fn.ColorPickerSliders.base64encode(svg) + ")";

        element.css("background-image", svg);
    };

    /* source: http://phpjs.org/functions/base64_encode/ */
    $.fn.ColorPickerSliders.base64encode = function(data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = "",
            tmp_arr = [];

        if (!data) {
            return data;
        }

        do {
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join('');

        var r = data.length % 3;

        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
    };

    $.fn.ColorPickerSliders.isGoodRgb = function(rgb) {
        // the default acceptable values are out of 0..255 due to
        // rounding errors with yellow and blue colors (258, -1)
        var maxacceptable = 258;
        var minacceptable = -1;

        if (rgb.r > maxacceptable || rgb.g > maxacceptable || rgb.b > maxacceptable || rgb.r < minacceptable || rgb.g < minacceptable || rgb.b < minacceptable) {
            return false;
        }
        else {
            rgb.r = Math.min(255, rgb.r);
            rgb.g = Math.min(255, rgb.g);
            rgb.b = Math.min(255, rgb.b);
            rgb.r = Math.max(0, rgb.r);
            rgb.g = Math.max(0, rgb.g);
            rgb.b = Math.max(0, rgb.b);

            return true;
        }
    };

    $.fn.ColorPickerSliders.rgb2lch = function(rgb) {
        var lch = $.fn.ColorPickerSliders.CIELab2CIELCH($.fn.ColorPickerSliders.XYZ2CIELab($.fn.ColorPickerSliders.rgb2XYZ(rgb)));

        if (rgb.hasOwnProperty('a')) {
            lch.a = rgb.a;
        }

        return lch;
    };

    $.fn.ColorPickerSliders.lch2rgb = function(lch, invalidcolorsopacity) {
        if (typeof invalidcolorsopacity === "undefined") {
            invalidcolorsopacity = 1;
        }

        var rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(lch)));

        if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
            if (lch.hasOwnProperty('a')) {
                rgb.a = lch.a;
            }

            rgb.isok = true;

            return rgb;
        }

        var tmp = $.extend({}, lch),
                lastbadchroma = tmp.c,
                lastgoodchroma = -1,
                loops = 0;

        do {
            ++loops;

            tmp.c = lastgoodchroma + ((lastbadchroma - lastgoodchroma) / 2);

            rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(tmp)));

            if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
                lastgoodchroma = tmp.c;
            }
            else {
                lastbadchroma = tmp.c;
            }
        } while (Math.abs(lastbadchroma - lastgoodchroma) > 0.9 && loops < 100);

        if (lch.hasOwnProperty('a')) {
            rgb.a = lch.a;
        }

        rgb.r = Math.max(0, rgb.r);
        rgb.g = Math.max(0, rgb.g);
        rgb.b = Math.max(0, rgb.b);

        rgb.r = Math.min(255, rgb.r);
        rgb.g = Math.min(255, rgb.g);
        rgb.b = Math.min(255, rgb.b);

        if (invalidcolorsopacity < 1) {
            if (rgb.hasOwnProperty('a')) {
                rgb.a = rgb.a * invalidcolorsopacity;
            }
            else {
                rgb.a = invalidcolorsopacity;
            }
        }

        rgb.isok = false;

        return rgb;
    };

    $.fn.ColorPickerSliders.modifyColor = function(color, property, value) {
        var modifiedcolor = $.extend({}, color);

        if (!color.hasOwnProperty(property)) {
            throw("Missing color property: " + property);
        }

        modifiedcolor[property] = value;

        return modifiedcolor;
    };

    $.fn.ColorPickerSliders.csscolor = function(color, invalidcolorsopacity) {
        if (typeof invalidcolorsopacity === "undefined") {
            invalidcolorsopacity = 1;
        }

        var $return = false,
                tmpcolor = $.extend({}, color);

        if (tmpcolor.hasOwnProperty('c')) {
            // CIE-LCh
            tmpcolor = $.fn.ColorPickerSliders.lch2rgb(tmpcolor, invalidcolorsopacity);
        }

        if (tmpcolor.hasOwnProperty('h')) {
            // HSL
            $return = "hsla(" + tmpcolor.h + "," + tmpcolor.s * 100 + "%," + tmpcolor.l * 100 + "%," + tmpcolor.a + ")";
        }

        if (tmpcolor.hasOwnProperty('r')) {
            // RGB
            if (tmpcolor.a < 1) {
                $return = "rgba(" + Math.round(tmpcolor.r) + "," + Math.round(tmpcolor.g) + "," + Math.round(tmpcolor.b) + "," + tmpcolor.a + ")";
            }
            else {
                $return = "rgb(" + Math.round(tmpcolor.r) + "," + Math.round(tmpcolor.g) + "," + Math.round(tmpcolor.b) + ")";
            }
        }

        return $return;
    };

    $.fn.ColorPickerSliders.rgb2XYZ = function(rgb) {
        var XYZ = {};

        var r = (rgb.r / 255);
        var g = (rgb.g / 255);
        var b = (rgb.b / 255);

        if (r > 0.04045) {
            r = Math.pow(((r + 0.055) / 1.055), 2.4);
        }
        else {
            r = r / 12.92;
        }

        if (g > 0.04045) {
            g = Math.pow(((g + 0.055) / 1.055), 2.4);
        }
        else {
            g = g / 12.92;
        }

        if (b > 0.04045) {
            b = Math.pow(((b + 0.055) / 1.055), 2.4);
        }
        else {
            b = b / 12.92;
        }

        r = r * 100;
        g = g * 100;
        b = b * 100;

        // Observer = 2°, Illuminant = D65
        XYZ.x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        XYZ.y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        XYZ.z = r * 0.0193 + g * 0.1192 + b * 0.9505;

        return XYZ;
    };

    $.fn.ColorPickerSliders.XYZ2CIELab = function(XYZ) {
        var CIELab = {};

        // Observer = 2°, Illuminant = D65
        var X = XYZ.x / 95.047;
        var Y = XYZ.y / 100.000;
        var Z = XYZ.z / 108.883;

        if (X > 0.008856) {
            X = Math.pow(X, 0.333333333);
        }
        else {
            X = 7.787 * X + 0.137931034;
        }

        if (Y > 0.008856) {
            Y = Math.pow(Y, 0.333333333);
        }
        else {
            Y = 7.787 * Y + 0.137931034;
        }

        if (Z > 0.008856) {
            Z = Math.pow(Z, 0.333333333);
        }
        else {
            Z = 7.787 * Z + 0.137931034;
        }

        CIELab.l = (116 * Y) - 16;
        CIELab.a = 500 * (X - Y);
        CIELab.b = 200 * (Y - Z);

        return CIELab;
    };

    $.fn.ColorPickerSliders.CIELab2CIELCH = function(CIELab) {
        var CIELCH = {};

        CIELCH.l = CIELab.l;
        CIELCH.c = Math.sqrt(Math.pow(CIELab.a, 2) + Math.pow(CIELab.b, 2));

        CIELCH.h = Math.atan2(CIELab.b, CIELab.a);  //Quadrant by signs

        if (CIELCH.h > 0) {
            CIELCH.h = (CIELCH.h / Math.PI) * 180;
        }
        else {
            CIELCH.h = 360 - (Math.abs(CIELCH.h) / Math.PI) * 180;
        }

        return CIELCH;
    };

    $.fn.ColorPickerSliders.CIELCH2CIELab = function(CIELCH) {
        var CIELab = {};

        CIELab.l = CIELCH.l;
        CIELab.a = Math.cos(CIELCH.h * 0.01745329251) * CIELCH.c;
        CIELab.b = Math.sin(CIELCH.h * 0.01745329251) * CIELCH.c;

        return CIELab;
    };

    $.fn.ColorPickerSliders.CIELab2XYZ = function(CIELab) {
        var XYZ = {};

        XYZ.y = (CIELab.l + 16) / 116;
        XYZ.x = CIELab.a / 500 + XYZ.y;
        XYZ.z = XYZ.y - CIELab.b / 200;

        if (Math.pow(XYZ.y, 3) > 0.008856) {
            XYZ.y = Math.pow(XYZ.y, 3);
        }
        else {
            XYZ.y = (XYZ.y - 0.137931034) / 7.787;
        }

        if (Math.pow(XYZ.x, 3) > 0.008856) {
            XYZ.x = Math.pow(XYZ.x, 3);
        }
        else {
            XYZ.x = (XYZ.x - 0.137931034) / 7.787;
        }

        if (Math.pow(XYZ.z, 3) > 0.008856) {
            XYZ.z = Math.pow(XYZ.z, 3);
        }
        else {
            XYZ.z = (XYZ.z - 0.137931034) / 7.787;
        }

        // Observer = 2°, Illuminant = D65
        XYZ.x = 95.047 * XYZ.x;
        XYZ.y = 100.000 * XYZ.y;
        XYZ.z = 108.883 * XYZ.z;

        return XYZ;
    };

    $.fn.ColorPickerSliders.XYZ2rgb = function(XYZ) {
        var rgb = {};

        // Observer = 2°, Illuminant = D65
        XYZ.x = XYZ.x / 100;        // X from 0 to 95.047
        XYZ.y = XYZ.y / 100;        // Y from 0 to 100.000
        XYZ.z = XYZ.z / 100;        // Z from 0 to 108.883

        rgb.r = XYZ.x * 3.2406 + XYZ.y * -1.5372 + XYZ.z * -0.4986;
        rgb.g = XYZ.x * -0.9689 + XYZ.y * 1.8758 + XYZ.z * 0.0415;
        rgb.b = XYZ.x * 0.0557 + XYZ.y * -0.2040 + XYZ.z * 1.0570;

        if (rgb.r > 0.0031308) {
            rgb.r = 1.055 * (Math.pow(rgb.r, 0.41666667)) - 0.055;
        }
        else {
            rgb.r = 12.92 * rgb.r;
        }

        if (rgb.g > 0.0031308) {
            rgb.g = 1.055 * (Math.pow(rgb.g, 0.41666667)) - 0.055;
        }
        else {
            rgb.g = 12.92 * rgb.g;
        }

        if (rgb.b > 0.0031308) {
            rgb.b = 1.055 * (Math.pow(rgb.b, 0.41666667)) - 0.055;
        }
        else {
            rgb.b = 12.92 * rgb.b;
        }

        rgb.r = Math.round(rgb.r * 255);
        rgb.g = Math.round(rgb.g * 255);
        rgb.b = Math.round(rgb.b * 255);

        return rgb;
    };

    $.fn.ColorPickerSliders.detectWhichGradientIsSupported = function() {
        var testelement = document.createElement('detectGradientSupport').style;

        try {
            testelement.backgroundImage = "linear-gradient(to top left, #9f9, white)";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "noprefix";
            }

            testelement.backgroundImage = "-webkit-linear-gradient(left top, #9f9, white)";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "webkit";
            }

            testelement.backgroundImage = "-ms-linear-gradient(left top, #9f9, white)";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "ms";
            }

            testelement.backgroundImage = "-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "oldwebkit";
            }
        }
        catch(err) {
            try {
                testelement.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#000000',GradientType=0)";
                if (testelement.filter.indexOf("DXImageTransform") !== -1) {
                    return "filter";
                }
            }
            catch(err) {}
        }

        return false;
    };

    $.fn.ColorPickerSliders.svgSupported = function() {
        return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
    };

})(jQuery);
$.widget("MyWidget.paginatedAutocomplete", $.ui.autocomplete, {

	options: {
        minLength: 1,
        sourceUrl: '',
        pageSize: 10,
        source: function (request, response) {

            var self = this;

            $.ajax({
                url: this.options.sourceUrl,
                type:"GET",
                dataType: "json",
                data: {	pageSize: self.options.pageSize,
						search: request.term,
						pageIndex: self._pageIndex
				},
                success: function (data) {

                    var items = data.data;

                    self._totalItems = data.total;
                    
                    // Create a menu item for each of the items on the page.                    
                    response($.map(items, function (item) {
                        return {
                            label: item.text,
                            value: item.value
                        }
                    }));
                }
            });
        },
        focus: function () {

            // prevent value inserted on focus
            return false;
        }
    },
    search: function (value, event) {

        // Start a fresh search; Hide pagination panel and reset to 1st page.
        this._pageIndex = 0;
        
        $.ui.autocomplete.prototype.search.call(this, value, event);
    },
    select: function (item) {

        var self = this;

        // Apply the item's label to the autocomplete textbox.        
        this._value(item.value);

        // Keep track of the selected item.
        self._previousSelectedItem = item;
    },	
    close: function (event) {

        // Close the pagination panel when the selection pop-up is closed.
        this._paginationContainerElement.css('display', 'none');

        $.ui.autocomplete.prototype.close.call(this, event);
    },
    _previousSelectedItem: null,
    _totalPages: null,
    _totalItems: null,
    _pageIndex: 0,	
    _create: function () {

        var self = this;

        // Create the DOM structure to support the paginated autocomplete.

        this.element.after("<div class='ui-autocomplete-pagination-results'></div>");
        this._resultsContainerElement = this.element.next("div.ui-autocomplete-pagination-results");
        this._resultsContainerElement.after("<div style='display:none; min-width:320px;' class='ui-autocomplete-pagination-container'>" +
                                                "<button type='button' class='first-page'></button>" +
                                                "<button type='button' class='previous-page'></button>" +
                                                "<div class='ui-autocomplete-pagination-details'>" + 
                                                "</div>" +
                                                "<button type='button' class='last-page'></button>" +
                                                "<button type='button' class='next-page'></button>" +
                                            "</div>");
        this._paginationElements = this._resultsContainerElement.next("div.ui-autocomplete-pagination-container");
 
        this._paginationContainerElement = this._resultsContainerElement.next("div.ui-autocomplete-pagination-container");
        this._nextPageElement = this._paginationContainerElement.find("button.next-page");
        this._previousPageElement = this._paginationContainerElement.find("button.previous-page");
        this._firstPageElement = this._paginationContainerElement.find("button.first-page");
        this._lastPageElement = this._paginationContainerElement.find("button.last-page");
        this._paginationDetailsElement = this._paginationContainerElement.find("div.ui-autocomplete-pagination-details");

        this._nextPageElement.button({ text: false, icons: { primary: "ui-icon ui-icon-arrowthick-1-e" } });
        this._previousPageElement.button({ text: false, icons: { primary: "ui-icon-arrowthick-1-w" } });
        this._firstPageElement.button({ text: false, icons: { primary: "ui-icon-arrowthick-1-n" } });
        this._lastPageElement.button({ text: false, icons: { primary: "ui-icon-arrowthick-1-s" } });

        // Append the menu items (and related content) to the specified element.
        if (this.options.appendTo !== null) {
            this._paginationContainerElement.appendTo(this._resultsContainerElement);
            this._paginationElements.appendTo(this._resultsContainerElement);
            this._resultsContainerElement.appendTo(this.options.appendTo);
            this.options.appendTo = this._resultsContainerElement;
        }
        else {
            this.options.appendTo = this._resultsContainerElement;
        }

        // Hide default JQuery Autocomplete details (want to use our own blurb).
        $(this.element).next("span.ui-helper-hidden-accessible").css("display", "none");

        // Event handler(s) for the next/previous pagination buttons.
        this._on(this._nextPageElement, {
            click: this._nextPage
        });
        this._on(this._previousPageElement, {
            click: this._previousPage
        });
        this._on(this._firstPageElement, {
            click: this._firstPage
        });
        this._on(this._lastPageElement, {
            click: this._lastPage
        });

        // Event handler(s) for the autocomplete textbox.
        this._on(this.element, {
            blur: function (event) {
                // When losing focus hide the pagination panel
                this._pageIndex = 0;
            },
            paginatedautocompleteopen: function (event) {

                // Autocomplete menu is now visible.

                // Update pagination information.

                var self = this,
                    paginationFrom = null,
                    paginationTo = null,
                    menuOffset = this.menu.element.offset();

                self._totalPages = Math.ceil(self._totalItems / self.options.pageSize);

                paginationFrom = self._pageIndex * self.options.pageSize + 1;
                paginationTo = ((self._pageIndex * self.options.pageSize) + self.options.pageSize);

                if (paginationTo > self._totalItems) {
                    paginationTo = self._totalItems;
                }

                if(self._totalPages>1){
                	self._paginationContainerElement.css('display', 'inline');
	                // Align the pagination container with the menu.
	                this._paginationContainerElement.offset({ top: menuOffset.top+ this.menu.element.height() , left: menuOffset.left });

	                // Modify the list generated by the autocomplete so that it appears below the pagination controls.
	                this._resultsContainerElement
	                    .find("ul")
	                    .css({  "padding-bottom"   : "0px", 
	                            "z-index"       : "1000"});


	                self._firstPageElement.attr('disabled', self._pageIndex!=0? false:true); 
			        self._previousPageElement.attr('disabled', self._pageIndex!=0? false:true);
			        self._nextPageElement.attr('disabled', self._pageIndex!=self._totalPages-1? false:true);
			        self._lastPageElement.attr('disabled', self._pageIndex!=self._totalPages-1? false:true);
	                
	                this._paginationDetailsElement.html("Página " + (self._pageIndex+1) + " de " + self._totalPages.toString());
	            }else{
	            	self._paginationContainerElement.css('display', 'none');
	            }
            }
        });

        // Event handler(s) for the pagination panel.
        this._on(this._paginationContainerElement, {

            mousedown: function (event) {

                // The following will prevent the pagination panel and selection menu from losing focus (and disappearing).

                // Prevent moving focus out of the text field
                event.preventDefault();

                // IE doesn't prevent moving focus even with event.preventDefault()
                // so we set a flag to know when we should ignore the blur event
                this.cancelBlur = true;
                this._delay(function () {
                    delete this.cancelBlur;
                });
            }
        });

        // Now we're going to let the default _create() to do it's thing. This will create the autocomplete pop-up selection menu.
        $.ui.autocomplete.prototype._create.call(this);

        // Event handler(s) for the autocomplete pop-up selection menu.
        this._on(this.menu.element, {

            menuselect: function (event, ui) {
		event.preventDefault();
		event.stopPropagation();
                var item = ui.item.data("ui-autocomplete-item");    // Get the selected item.

                this.select(item);
            }
        });

    },
    _nextPage: function (event) {
        if (this._pageIndex < this._totalPages - 1) {
            this._pageIndex++;
            $.ui.autocomplete.prototype._search.call(this, this.term);
        }
    },
    _lastPage: function (event) {
        this._pageIndex = this._totalPages - 1;
        $.ui.autocomplete.prototype._search.call(this, this.term);
    },
    _firstPage: function (event) {
        this._pageIndex=0;
        $.ui.autocomplete.prototype._search.call(this, this.term);
    },
    _previousPage: function (event) {
        if (this._pageIndex > 0) {
            this._pageIndex--;
            $.ui.autocomplete.prototype._search.call(this, this.term);
        }
    },
    _change: function (event) {

        // Clear the textbox if an item wasn't selected from the menu.
        /*if (((this.selectedItem === null) && (this._previousSelectedItem === null)) ||
            (this.selectedItem === null) && (this._previousSelectedItem !== null) && (this._previousSelectedItem.label !== this._value())) {

            // Clear values.
            this._value("");
        }*/

        $.ui.autocomplete.prototype._change.call(this, event);
    },		
	_destroy: function () {		
		this._paginationContainerElement.remove();
		this._resultsContainerElement.remove();
	    $.ui.autocomplete.prototype._destroy.call(this);	
	},	
	__response : function ( content ) {
		var self = this;
	
		self._totalItemsOnPage = content.length;	
	
		/*if (self._totalItemsOnPage > 0) {
			self._paginationContainerElement.css('display', 'inline');
		}
		else {
			self._paginationContainerElement.css('display', 'none');
		}   */ 

		$.ui.autocomplete.prototype.__response.call(this, content);		
	},
	_renderItem : function( ul, item ) {
		var text = item.label;
		var searchText =item.text.toLocaleUpperCase();

		function escapeRegExp(str) {
		    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		}

		function replaceAll(str, find, replace) {
		  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
		}



	    return $( "<li class='ui-menu-item'></li>" )
	    .data( "item.autocomplete", item )
	    .append( "<span>"+ replaceAll(text, searchText, "<b>"+searchText+"</b>") + "</span>" )
	    .appendTo( ul );
	}
})(jQuery);

$.widget.bridge("paginatedAutocomplete", $.MyWidget.paginatedAutocomplete);
$.widget("MyWidget.comboAutocomplete", $.ui.autocomplete, {

    options: {
        minLength: 1,
        sourceUrl: '',
        pageSize: 10,
        source: function (request, response) {

            var self = this;

            $.ajax({
                url: this.options.sourceUrl,
                type:"GET",
                dataType: "json",
                data: { pageSize: self.options.pageSize,
                        search: request.term,
                        pageIndex: self._pageIndex
                },
                success: function (data) {

                    var items = data.data;

                    self._totalItems = data.total;
                    
                    // Create a menu item for each of the items on the page.                    
                    response($.map(items, function (item) {
                        return {
                            label: item.text,
                            value: item.value
                        }
                    }));
                }
            });
        },
        focus: function () {

            // prevent value inserted on focus
            return false;
        }
    },
    search: function (value, event) {

        // Start a fresh search; Hide pagination panel and reset to 1st page.
        //this._pageIndex = 0;
        
        $.ui.autocomplete.prototype.search.call(this, value, event);
    },
    select: function (item) {

        var self = this;

        // Apply the item's label to the autocomplete textbox.        
        this._value(item.value);

        // Keep track of the selected item.
        self._previousSelectedItem = item;
    },  
    close: function (event) {
       $.ui.autocomplete.prototype.close.call(this, event);
    },

    open: function (event) {
       var list =  this._resultsContainerElement.find("ul");
       var position = list.offset().top;
       list.css( "top" , position.top+1);
       $.ui.autocomplete.prototype.opne.call(this, event);
    },
    _previousSelectedItem: null,
    _totalPages: null,
    _totalItems: null,
    _pageIndex: 0,  
    _create: function () {

        var self = this;

       /*
        this.element.after("<div class='ui-autocomplete-pagination-results'></div>");
        this._resultsContainerElement = this.element.next("div.ui-autocomplete-pagination-results");
        this._resultsContainerElement.after("<div style='display:none; min-width:320px;' class='ui-autocomplete-pagination-container'>" +
                                                "<button type='button' class='first-page'></button>" +
                                                "<button type='button' class='previous-page'></button>" +
                                                "<div class='ui-autocomplete-pagination-details'>" + 
                                                "</div>" +
                                                "<button type='button' class='last-page'></button>" +
                                                "<button type='button' class='next-page'></button>" +
                                            "</div>");
        this._paginationElements = this._resultsContainerElement.next("div.ui-autocomplete-pagination-container");
 
        this._paginationContainerElement = this._resultsContainerElement.next("div.ui-autocomplete-pagination-container");
        this._nextPageElement = this._paginationContainerElement.find("button.next-page");
        this._previousPageElement = this._paginationContainerElement.find("button.previous-page");
        this._firstPageElement = this._paginationContainerElement.find("button.first-page");
        this._lastPageElement = this._paginationContainerElement.find("button.last-page");
        this._paginationDetailsElement = this._paginationContainerElement.find("div.ui-autocomplete-pagination-details");

        this._nextPageElement.button({ text: false, icons: { primary: "ui-icon ui-icon-arrowthick-1-e" } });
        this._previousPageElement.button({ text: false, icons: { primary: "ui-icon-arrowthick-1-w" } });
        this._firstPageElement.button({ text: false, icons: { primary: "ui-icon-arrowthick-1-n" } });
        this._lastPageElement.button({ text: false, icons: { primary: "ui-icon-arrowthick-1-s" } });

        // Append the menu items (and related content) to the specified element.
        if (this.options.appendTo !== null) {
            this._paginationContainerElement.appendTo(this._resultsContainerElement);
            this._paginationElements.appendTo(this._resultsContainerElement);
            this._resultsContainerElement.appendTo(this.options.appendTo);
            this.options.appendTo = this._resultsContainerElement;
        }
        else {
            this.options.appendTo = this._resultsContainerElement;
        }

        // Hide default JQuery Autocomplete details (want to use our own blurb).
        $(this.element).next("span.ui-helper-hidden-accessible").css("display", "none");

        // Event handler(s) for the next/previous pagination buttons.
        this._on(this._nextPageElement, {
            click: this._nextPage
        });
        this._on(this._previousPageElement, {
            click: this._previousPage
        });
        this._on(this._firstPageElement, {
            click: this._firstPage
        });
        this._on(this._lastPageElement, {
            click: this._lastPage
        });*/

        // Event handler(s) for the autocomplete textbox.
        this._on(this.element, {
            blur: function (event) {
                // When losing focus hide the pagination panel
                this._pageIndex = 0;
            },
            paginatedautocompleteopen: function (event) {

                // Autocomplete menu is now visible.

                // Update pagination information.

                /*var self = this,
                    paginationFrom = null,
                    paginationTo = null,
                    menuOffset = this.menu.element.offset();

                self._totalPages = Math.ceil(self._totalItems / self.options.pageSize);

                paginationFrom = self._pageIndex * self.options.pageSize + 1;
                paginationTo = ((self._pageIndex * self.options.pageSize) + self.options.pageSize);

                if (paginationTo > self._totalItems) {
                    paginationTo = self._totalItems;
                }

                if(self._totalPages>1){
                    self._paginationContainerElement.css('display', 'inline');
                    // Align the pagination container with the menu.
                    this._paginationContainerElement.offset({ top: menuOffset.top+ this.menu.element.height() , left: menuOffset.left });

                    // Modify the list generated by the autocomplete so that it appears below the pagination controls.
                    this._resultsContainerElement
                        .find("ul")
                        .css({  "padding-bottom"   : "0px", 
                                "z-index"       : "1000"});


                   
                    this._paginationDetailsElement.html("Página " + (self._pageIndex+1) + " de " + self._totalPages.toString());
                }else{
                    self._paginationContainerElement.css('display', 'none');
                }*/
            }
        });

        // Event handler(s) for the pagination panel.
       /* this._on(this._paginationContainerElement, {

            mousedown: function (event) {

                // The following will prevent the pagination panel and selection menu from losing focus (and disappearing).

                // Prevent moving focus out of the text field
                event.preventDefault();

                // IE doesn't prevent moving focus even with event.preventDefault()
                // so we set a flag to know when we should ignore the blur event
                this.cancelBlur = true;
                this._delay(function () {
                    delete this.cancelBlur;
                });
            }
        });*/

        // Now we're going to let the default _create() to do it's thing. This will create the autocomplete pop-up selection menu.
        $.ui.autocomplete.prototype._create.call(this);

        // Event handler(s) for the autocomplete pop-up selection menu.
        this._on(this.menu.element, {

            menuselect: function (event, ui) {

                var item = ui.item.data("ui-autocomplete-item");    // Get the selected item.

                this.select(item);
            }
        });

    },
    
    _change: function (event) {

        // Clear the textbox if an item wasn't selected from the menu.
        if (((this.selectedItem === null) && (this._previousSelectedItem === null)) ||
            (this.selectedItem === null) && (this._previousSelectedItem !== null) && (this._previousSelectedItem.label !== this._value())) {

            // Clear values.
            this._value("");
        }

        $.ui.autocomplete.prototype._change.call(this, event);
    },      
    _destroy: function () {     
        /*this._paginationContainerElement.remove();
        this._resultsContainerElement.remove();*/
        $.ui.autocomplete.prototype._destroy.call(this);    
    }, 

    _open: function(event){
          var list =  this.menu.element;
                   var position = list.offset().top;
                   list.css( "top" , position.top+1);
         $.ui.autocomplete.prototype.open.call(this); 
    },
  
    __response : function ( content ) {
        var self = this;
    
        self._totalItemsOnPage = content.length;    

        $.ui.autocomplete.prototype.__response.call(this, content);     
    },
    _renderItem : function( ul, item ) {
        var text = item.label;
        var searchText =this.term;

        function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }

        function replaceAll(str, find, replace) {
          return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }



        return $( "<li class='ui-menu-item'></li>" )
        .data( "item.autocomplete", item )
        .append( "<span>"+ replaceAll(text, searchText, "<b>"+searchText+"</b>") + "</span>" )
        .appendTo( ul );
    }
});

$.widget.bridge("comboAutocomplete", $.MyWidget.comboAutocomplete);
/*! cropit - v0.4.5 <https://github.com/scottcheng/cropit> */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["cropit"] = factory(require("jquery"));
	else
		root["cropit"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _cropit = __webpack_require__(2);

	var _cropit2 = _interopRequireDefault(_cropit);

	var _constants = __webpack_require__(4);

	var _utils = __webpack_require__(6);

	var applyOnEach = function applyOnEach($el, callback) {
	  return $el.each(function () {
	    var cropit = _jquery2['default'].data(this, _constants.PLUGIN_KEY);

	    if (!cropit) {
	      return;
	    }
	    callback(cropit);
	  });
	};

	var callOnFirst = function callOnFirst($el, method, options) {
	  var cropit = $el.first().data(_constants.PLUGIN_KEY);

	  if (!cropit || !_jquery2['default'].isFunction(cropit[method])) {
	    return null;
	  }
	  return cropit[method](options);
	};

	var methods = {
	  init: function init(options) {
	    return this.each(function () {
	      // Only instantiate once per element
	      if (_jquery2['default'].data(this, _constants.PLUGIN_KEY)) {
	        return;
	      }

	      var cropit = new _cropit2['default'](_jquery2['default'], this, options);
	      _jquery2['default'].data(this, _constants.PLUGIN_KEY, cropit);
	    });
	  },

	  destroy: function destroy() {
	    return this.each(function () {
	      _jquery2['default'].removeData(this, _constants.PLUGIN_KEY);
	    });
	  },

	  isZoomable: function isZoomable() {
	    return callOnFirst(this, 'isZoomable');
	  },

	  'export': function _export(options) {
	    return callOnFirst(this, 'getCroppedImageData', options);
	  },

	  imageState: function imageState() {
	    return callOnFirst(this, 'getImageState');
	  },

	  imageSize: function imageSize() {
	    return callOnFirst(this, 'getImageSize');
	  },

	  prop: function prop(name, value) {
	    if ((0, _utils.exists)(value)) {
	      return applyOnEach(this, function (cropit) {
	        cropit['set' + (0, _utils.capitalize)(name)](value);
	      });
	    } else {
	      return callOnFirst(this, 'get' + (0, _utils.capitalize)(name));
	    }
	  },

	  disable: function disable() {
	    return applyOnEach(this, function (cropit) {
	      cropit.disable();
	    });
	  },

	  reenable: function reenable() {
	    return applyOnEach(this, function (cropit) {
	      cropit.reenable();
	    });
	  }
	};

	_jquery2['default'].fn.cropit = function (method) {
	  if (methods[method]) {
	    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	  } else if (['imageSrc', 'offset', 'previewSize', 'zoom', 'initialZoom', 'exportZoom', 'minZoom', 'maxZoom'].indexOf(method) >= 0) {
	    return methods.prop.apply(this, arguments);
	  } else {
	    return methods.init.apply(this, arguments);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Zoomer = __webpack_require__(3);

	var _Zoomer2 = _interopRequireDefault(_Zoomer);

	var _constants = __webpack_require__(4);

	var _options = __webpack_require__(5);

	var _utils = __webpack_require__(6);

	var Cropit = (function () {
	  function Cropit(jQuery, element, options) {
	    _classCallCheck(this, Cropit);

	    this.$el = (0, _jquery2['default'])(element);

	    var defaults = (0, _options.loadDefaults)(this.$el);
	    this.options = _jquery2['default'].extend({}, defaults, options);

	    this.init();
	  }

	  _createClass(Cropit, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      this.image = new Image();
	      this.preImage = new Image();
	      this.image.onload = this.onImageLoaded.bind(this);
	      this.preImage.onload = this.onPreImageLoaded.bind(this);
	      this.image.onerror = this.preImage.onerror = function () {
	        _this.onImageError.call(_this, _constants.ERRORS.IMAGE_FAILED_TO_LOAD);
	      };

	      this.$fileInput = this.options.$fileInput.attr({ accept: 'image/*' });
	      this.$preview = this.options.$preview.css({ backgroundRepeat: 'no-repeat' });
	      this.$zoomSlider = this.options.$zoomSlider.attr({ min: 0, max: 1, step: 0.01 });

	      this.previewSize = {
	        w: this.options.width || this.$preview.width(),
	        h: this.options.height || this.$preview.height()
	      };
	      if (this.options.width) {
	        this.$preview.width(this.previewSize.w);
	      }
	      if (this.options.height) {
	        this.$preview.height(this.previewSize.h);
	      }

	      if (this.options.imageBackground) {
	        if (_jquery2['default'].isArray(this.options.imageBackgroundBorderWidth)) {
	          this.imageBgBorderWidthArray = this.options.imageBackgroundBorderWidth;
	        } else {
	          this.imageBgBorderWidthArray = [];
	          [0, 1, 2, 3].forEach(function (i) {
	            _this.imageBgBorderWidthArray[i] = _this.options.imageBackgroundBorderWidth;
	          });
	        }

	        var $previewContainer = this.options.$previewContainer;
	        this.$imageBg = (0, _jquery2['default'])('<img />').addClass(_constants.CLASS_NAMES.IMAGE_BACKGROUND).attr('alt', '').css('position', 'absolute');
	        this.$imageBgContainer = (0, _jquery2['default'])('<div />').addClass(_constants.CLASS_NAMES.IMAGE_BACKGROUND_CONTAINER).css({
	          position: 'absolute',
	          zIndex: 0,
	          left: -this.imageBgBorderWidthArray[3] + window.parseInt(this.$preview.css('border-left-width') || 0),
	          top: -this.imageBgBorderWidthArray[0] + window.parseInt(this.$preview.css('border-top-width') || 0),
	          width: this.previewSize.w + this.imageBgBorderWidthArray[1] + this.imageBgBorderWidthArray[3],
	          height: this.previewSize.h + this.imageBgBorderWidthArray[0] + this.imageBgBorderWidthArray[2]
	        }).append(this.$imageBg);
	        if (this.imageBgBorderWidthArray[0] > 0) {
	          this.$imageBgContainer.css('overflow', 'hidden');
	        }
	        $previewContainer.css('position', 'relative').prepend(this.$imageBgContainer);
	        this.$preview.css('position', 'relative');

	        this.$preview.hover(function () {
	          _this.$imageBg.addClass(_constants.CLASS_NAMES.PREVIEW_HOVERED);
	        }, function () {
	          _this.$imageBg.removeClass(_constants.CLASS_NAMES.PREVIEW_HOVERED);
	        });
	      }

	      this.setInitialZoom(this.options.initialZoom);

	      this.imageLoaded = false;

	      this.moveContinue = false;

	      this.zoomer = new _Zoomer2['default']();

	      if (this.options.allowDragNDrop) {
	        //_jquery2['default'].event.props.push('dataTransfer');
	        _jquery2['default'].event.addProp('dataTransfer');
	      }

	      this.bindListeners();

	      if (this.options.imageState && this.options.imageState.src) {
	        this.loadImage(this.options.imageState.src);
	      }
	    }
	  }, {
	    key: 'bindListeners',
	    value: function bindListeners() {
	      this.$fileInput.on('change.cropit', this.onFileChange.bind(this));
	      this.$preview.on(_constants.EVENTS.PREVIEW, this.onPreviewEvent.bind(this));
	      this.$zoomSlider.on(_constants.EVENTS.ZOOM_INPUT, this.onZoomSliderChange.bind(this));

	      if (this.options.allowDragNDrop) {
	        this.$preview.on('dragover.cropit dragleave.cropit', this.onDragOver.bind(this));
	        this.$preview.on('drop.cropit', this.onDrop.bind(this));
	      }
	    }
	  }, {
	    key: 'unbindListeners',
	    value: function unbindListeners() {
	      this.$fileInput.off('change.cropit');
	      this.$preview.off(_constants.EVENTS.PREVIEW);
	      this.$preview.off('dragover.cropit dragleave.cropit drop.cropit');
	      this.$zoomSlider.off(_constants.EVENTS.ZOOM_INPUT);
	    }
	  }, {
	    key: 'onFileChange',
	    value: function onFileChange(e) {
	      this.options.onFileChange(e);

	      if (this.$fileInput.get(0).files) {
	        this.loadFileReader(this.$fileInput.get(0).files[0]);
	      }
	    }
	  }, {
	    key: 'loadFileReader',
	    value: function loadFileReader(file) {
	      var fileReader = new FileReader();
	      if (file && file.type.match('image')) {
	        fileReader.readAsDataURL(file);
	        fileReader.onload = this.onFileReaderLoaded.bind(this);
	        fileReader.onerror = this.onFileReaderError.bind(this);
	      } else if (file) {
	        this.onFileReaderError();
	      }
	    }
	  }, {
	    key: 'onFileReaderLoaded',
	    value: function onFileReaderLoaded(e) {
	      this.loadImage(e.target.result);
	    }
	  }, {
	    key: 'onFileReaderError',
	    value: function onFileReaderError() {
	      this.options.onFileReaderError();
	    }
	  }, {
	    key: 'onDragOver',
	    value: function onDragOver(e) {
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'copy';
	      this.$preview.toggleClass(_constants.CLASS_NAMES.DRAG_HOVERED, e.type === 'dragover');
	    }
	  }, {
	    key: 'onDrop',
	    value: function onDrop(e) {
	      var _this2 = this;

	      e.preventDefault();
	      e.stopPropagation();

	      var files = Array.prototype.slice.call(e.dataTransfer.files, 0);
	      files.some(function (file) {
	        if (!file.type.match('image')) {
	          return false;
	        }

	        _this2.loadFileReader(file);
	        return true;
	      });

	      this.$preview.removeClass(_constants.CLASS_NAMES.DRAG_HOVERED);
	    }
	  }, {
	    key: 'loadImage',
	    value: function loadImage(imageSrc) {
	      if (!imageSrc) {
	        return;
	      }

	      this.options.onImageLoading();
	      this.setImageLoadingClass();

	      this.preImage.src = imageSrc;
	    }
	  }, {
	    key: 'setImageSrc',
	    value: function setImageSrc(imageSrc) {
	      this.loadImage(imageSrc);
	    }
	  }, {
	    key: 'onPreImageLoaded',
	    value: function onPreImageLoaded() {
	      if (this.options.smallImage === 'reject' && (this.preImage.width * this.options.maxZoom < this.previewSize.w * this.options.exportZoom || this.preImage.height * this.options.maxZoom < this.previewSize.h * this.options.exportZoom)) {
	        this.onImageError(_constants.ERRORS.SMALL_IMAGE);
	        if (this.image.src) {
	          this.setImageLoadedClass();
	        }
	        return;
	      }

	      if (this.options.allowCrossOrigin) {
	        this.image.crossOrigin = this.preImage.src.indexOf('data:') === 0 ? null : 'Anonymous';
	      }

	      this.image.src = this.imageSrc = this.preImage.src;
	    }
	  }, {
	    key: 'onImageLoaded',
	    value: function onImageLoaded() {
	      this.imageSize = {
	        w: this.image.width,
	        h: this.image.height
	      };

	      this.setupZoomer(this.options.imageState && this.options.imageState.zoom || this.initialZoom);
	      if (this.options.imageState && this.options.imageState.offset) {
	        this.setOffset(this.options.imageState.offset);
	      } else {
	        this.centerImage();
	      }

	      this.options.imageState = {};

	      this.$preview.css('background-image', 'url(' + this.imageSrc + ')');
	      if (this.options.imageBackground) {
	        this.$imageBg.attr('src', this.imageSrc);
	      }

	      this.setImageLoadedClass();

	      this.imageLoaded = true;

	      this.options.onImageLoaded();
	    }
	  }, {
	    key: 'onImageError',
	    value: function onImageError() {
	      this.options.onImageError.apply(this, arguments);
	      this.removeImageLoadingClass();
	    }
	  }, {
	    key: 'setImageLoadingClass',
	    value: function setImageLoadingClass() {
	      this.$preview.removeClass(_constants.CLASS_NAMES.IMAGE_LOADED).addClass(_constants.CLASS_NAMES.IMAGE_LOADING);
	    }
	  }, {
	    key: 'setImageLoadedClass',
	    value: function setImageLoadedClass() {
	      this.$preview.removeClass(_constants.CLASS_NAMES.IMAGE_LOADING).addClass(_constants.CLASS_NAMES.IMAGE_LOADED);
	    }
	  }, {
	    key: 'removeImageLoadingClass',
	    value: function removeImageLoadingClass() {
	      this.$preview.removeClass(_constants.CLASS_NAMES.IMAGE_LOADING);
	    }
	  }, {
	    key: 'getEventPosition',
	    value: function getEventPosition(e) {
	      if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
	        e = e.originalEvent.touches[0];
	      }
	      if (e.clientX && e.clientY) {
	        return { x: e.clientX, y: e.clientY };
	      }
	    }
	  }, {
	    key: 'onPreviewEvent',
	    value: function onPreviewEvent(e) {
	      if (!this.imageLoaded) {
	        return;
	      }

	      this.moveContinue = false;
	      this.$preview.off(_constants.EVENTS.PREVIEW_MOVE);

	      if (e.type === 'mousedown' || e.type === 'touchstart') {
	        this.origin = this.getEventPosition(e);
	        this.moveContinue = true;
	        this.$preview.on(_constants.EVENTS.PREVIEW_MOVE, this.onMove.bind(this));
	      } else {
	        (0, _jquery2['default'])(document.body).focus();
	      }

	      e.stopPropagation();
	      return false;
	    }
	  }, {
	    key: 'onMove',
	    value: function onMove(e) {
	      var eventPosition = this.getEventPosition(e);

	      if (this.moveContinue && eventPosition) {
	        this.setOffset({
	          x: this.offset.x + eventPosition.x - this.origin.x,
	          y: this.offset.y + eventPosition.y - this.origin.y
	        });
	      }

	      this.origin = eventPosition;

	      e.stopPropagation();
	      return false;
	    }
	  }, {
	    key: 'setOffset',
	    value: function setOffset(position) {
	      if (!position || !(0, _utils.exists)(position.x) || !(0, _utils.exists)(position.y)) {
	        return;
	      }

	      this.offset = this.fixOffset(position);
	      this.$preview.css('background-position', '' + this.offset.x + 'px ' + this.offset.y + 'px');
	      if (this.options.imageBackground) {
	        this.$imageBg.css({
	          left: this.offset.x + this.imageBgBorderWidthArray[3],
	          top: this.offset.y + this.imageBgBorderWidthArray[0]
	        });
	      }

	      this.options.onOffsetChange(position);
	    }
	  }, {
	    key: 'fixOffset',
	    value: function fixOffset(offset) {
	      if (!this.imageLoaded) {
	        return offset;
	      }

	      var ret = { x: offset.x, y: offset.y };

	      if (!this.options.freeMove) {
	        if (this.imageSize.w * this.zoom >= this.previewSize.w) {
	          ret.x = Math.min(0, Math.max(ret.x, this.previewSize.w - this.imageSize.w * this.zoom));
	        } else {
	          ret.x = Math.max(0, Math.min(ret.x, this.previewSize.w - this.imageSize.w * this.zoom));
	        }

	        if (this.imageSize.h * this.zoom >= this.previewSize.h) {
	          ret.y = Math.min(0, Math.max(ret.y, this.previewSize.h - this.imageSize.h * this.zoom));
	        } else {
	          ret.y = Math.max(0, Math.min(ret.y, this.previewSize.h - this.imageSize.h * this.zoom));
	        }
	      }

	      ret.x = (0, _utils.round)(ret.x);
	      ret.y = (0, _utils.round)(ret.y);

	      return ret;
	    }
	  }, {
	    key: 'centerImage',
	    value: function centerImage() {
	      if (!this.imageSize || !this.zoom) {
	        return;
	      }

	      this.setOffset({
	        x: (this.previewSize.w - this.imageSize.w * this.zoom) / 2,
	        y: (this.previewSize.h - this.imageSize.h * this.zoom) / 2
	      });
	    }
	  }, {
	    key: 'onZoomSliderChange',
	    value: function onZoomSliderChange() {
	      if (!this.imageLoaded) {
	        return;
	      }

	      this.zoomSliderPos = Number(this.$zoomSlider.val());
	      var newZoom = this.zoomer.getZoom(this.zoomSliderPos);
	      if (newZoom === this.zoom) {
	        return;
	      }
	      this.setZoom(newZoom);
	    }
	  }, {
	    key: 'enableZoomSlider',
	    value: function enableZoomSlider() {
	      this.$zoomSlider.removeAttr('disabled');
	      this.options.onZoomEnabled();
	    }
	  }, {
	    key: 'disableZoomSlider',
	    value: function disableZoomSlider() {
	      this.$zoomSlider.attr('disabled', true);
	      this.options.onZoomDisabled();
	    }
	  }, {
	    key: 'setupZoomer',
	    value: function setupZoomer(zoom) {
	      this.zoomer.setup({
	        imageSize: this.imageSize,
	        previewSize: this.previewSize,
	        exportZoom: this.options.exportZoom,
	        maxZoom: this.options.maxZoom,
	        minZoom: this.options.minZoom,
	        smallImage: this.options.smallImage
	      });
	      this.setZoom((0, _utils.exists)(zoom) ? zoom : this.zoom);

	      if (this.isZoomable()) {
	        this.enableZoomSlider();
	      } else {
	        this.disableZoomSlider();
	      }
	    }
	  }, {
	    key: 'setZoom',
	    value: function setZoom(newZoom) {
	      newZoom = this.fixZoom(newZoom);

	      var updatedWidth = (0, _utils.round)(this.imageSize.w * newZoom);
	      var updatedHeight = (0, _utils.round)(this.imageSize.h * newZoom);

	      if (this.imageLoaded) {
	        var oldZoom = this.zoom;

	        var newX = this.previewSize.w / 2 - (this.previewSize.w / 2 - this.offset.x) * newZoom / oldZoom;
	        var newY = this.previewSize.h / 2 - (this.previewSize.h / 2 - this.offset.y) * newZoom / oldZoom;

	        this.zoom = newZoom;
	        this.setOffset({ x: newX, y: newY });
	      } else {
	        this.zoom = newZoom;
	      }

	      this.zoomSliderPos = this.zoomer.getSliderPos(this.zoom);
	      this.$zoomSlider.val(this.zoomSliderPos);

	      this.$preview.css('background-size', '' + updatedWidth + 'px ' + updatedHeight + 'px');
	      if (this.options.imageBackground) {
	        this.$imageBg.css({
	          width: updatedWidth,
	          height: updatedHeight
	        });
	      }

	      this.options.onZoomChange(newZoom);
	    }
	  }, {
	    key: 'fixZoom',
	    value: function fixZoom(zoom) {
	      return this.zoomer.fixZoom(zoom);
	    }
	  }, {
	    key: 'isZoomable',
	    value: function isZoomable() {
	      return this.zoomer.isZoomable();
	    }
	  }, {
	    key: 'getCroppedImageData',
	    value: function getCroppedImageData(exportOptions) {
	      if (!this.imageSrc) {
	        return;
	      }

	      var exportDefaults = {
	        type: 'image/png',
	        quality: 0.75,
	        originalSize: false,
	        fillBg: '#fff'
	      };
	      exportOptions = _jquery2['default'].extend({}, exportDefaults, exportOptions);

	      var exportZoom = exportOptions.originalSize ? 1 / this.zoom : this.options.exportZoom;

	      var zoomedSize = {
	        w: this.zoom * exportZoom * this.imageSize.w,
	        h: this.zoom * exportZoom * this.imageSize.h
	      };

	      var canvas = (0, _jquery2['default'])('<canvas />').attr({
	        width: this.previewSize.w * exportZoom,
	        height: this.previewSize.h * exportZoom
	      }).get(0);
	      var canvasContext = canvas.getContext('2d');

	      if (exportOptions.type === 'image/jpeg') {
	        canvasContext.fillStyle = exportOptions.fillBg;
	        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	      }

	      if(!this.offset){
	      	this.offset= {
	      		x:0,
	      		y:0
	      	}
	      }
	      canvasContext.drawImage(this.image, this.offset.x * exportZoom, this.offset.y * exportZoom, zoomedSize.w, zoomedSize.h);

	      return canvas.toDataURL(exportOptions.type, exportOptions.quality);
	    }
	  }, {
	    key: 'getImageState',
	    value: function getImageState() {
	      return {
	        src: this.imageSrc,
	        offset: this.offset,
	        zoom: this.zoom
	      };
	    }
	  }, {
	    key: 'getImageSrc',
	    value: function getImageSrc() {
	      return this.imageSrc;
	    }
	  }, {
	    key: 'getOffset',
	    value: function getOffset() {
	      return this.offset;
	    }
	  }, {
	    key: 'getZoom',
	    value: function getZoom() {
	      return this.zoom;
	    }
	  }, {
	    key: 'getImageSize',
	    value: function getImageSize() {
	      if (!this.imageSize) {
	        return null;
	      }

	      return {
	        width: this.imageSize.w,
	        height: this.imageSize.h
	      };
	    }
	  }, {
	    key: 'getInitialZoom',
	    value: function getInitialZoom() {
	      return this.options.initialZoom;
	    }
	  }, {
	    key: 'setInitialZoom',
	    value: function setInitialZoom(initialZoomOption) {
	      this.options.initialZoom = initialZoomOption;
	      if (initialZoomOption === 'min') {
	        this.initialZoom = 0; // Will be fixed when image loads
	      } else if (initialZoomOption === 'image') {
	        this.initialZoom = 1;
	      } else {
	        this.initialZoom = 0;
	      }
	    }
	  }, {
	    key: 'getExportZoom',
	    value: function getExportZoom() {
	      return this.options.exportZoom;
	    }
	  }, {
	    key: 'setExportZoom',
	    value: function setExportZoom(exportZoom) {
	      this.options.exportZoom = exportZoom;
	      this.setupZoomer();
	    }
	  }, {
	    key: 'getMinZoom',
	    value: function getMinZoom() {
	      return this.options.minZoom;
	    }
	  }, {
	    key: 'setMinZoom',
	    value: function setMinZoom(minZoom) {
	      this.options.minZoom = minZoom;
	      this.setupZoomer();
	    }
	  }, {
	    key: 'getMaxZoom',
	    value: function getMaxZoom() {
	      return this.options.maxZoom;
	    }
	  }, {
	    key: 'setMaxZoom',
	    value: function setMaxZoom(maxZoom) {
	      this.options.maxZoom = maxZoom;
	      this.setupZoomer();
	    }
	  }, {
	    key: 'getPreviewSize',
	    value: function getPreviewSize() {
	      return {
	        width: this.previewSize.w,
	        height: this.previewSize.h
	      };
	    }
	  }, {
	    key: 'setPreviewSize',
	    value: function setPreviewSize(size) {
	      if (!size || size.width <= 0 || size.height <= 0) {
	        return;
	      }

	      this.previewSize = {
	        w: size.width,
	        h: size.height
	      };
	      this.$preview.css({
	        width: this.previewSize.w,
	        height: this.previewSize.h
	      });

	      if (this.options.imageBackground) {
	        this.$imageBgContainer.css({
	          width: this.previewSize.w + this.imageBgBorderWidthArray[1] + this.imageBgBorderWidthArray[3],
	          height: this.previewSize.h + this.imageBgBorderWidthArray[0] + this.imageBgBorderWidthArray[2]
	        });
	      }

	      if (this.imageLoaded) {
	        this.setupZoomer();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this.unbindListeners();
	      this.disableZoomSlider();
	      this.$el.addClass(_constants.CLASS_NAMES.DISABLED);
	    }
	  }, {
	    key: 'reenable',
	    value: function reenable() {
	      this.bindListeners();
	      this.enableZoomSlider();
	      this.$el.removeClass(_constants.CLASS_NAMES.DISABLED);
	    }
	  }, {
	    key: '$',
	    value: function $(selector) {
	      if (!this.$el) {
	        return null;
	      }
	      return this.$el.find(selector);
	    }
	  }]);

	  return Cropit;
	})();

	exports['default'] = Cropit;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Zoomer = (function () {
	  function Zoomer() {
	    _classCallCheck(this, Zoomer);

	    this.minZoom = this.maxZoom = 1;
	  }

	  _createClass(Zoomer, [{
	    key: 'setup',
	    value: function setup(_ref) {
	      var imageSize = _ref.imageSize;
	      var previewSize = _ref.previewSize;
	      var exportZoom = _ref.exportZoom;
	      var maxZoom = _ref.maxZoom;
	      var minZoom = _ref.minZoom;
	      var smallImage = _ref.smallImage;

	      var widthRatio = previewSize.w / imageSize.w;
	      var heightRatio = previewSize.h / imageSize.h;

	      if (minZoom === 'fit') {
	        this.minZoom = Math.min(widthRatio, heightRatio);
	      } else {
	        this.minZoom = Math.max(widthRatio, heightRatio);
	      }

	      if (smallImage === 'allow') {
	        this.minZoom = Math.min(this.minZoom, 1);
	      }

	      this.maxZoom = Math.max(this.minZoom, maxZoom / exportZoom);
	    }
	  }, {
	    key: 'getZoom',
	    value: function getZoom(sliderPos) {
	      if (!this.minZoom || !this.maxZoom) {
	        return null;
	      }

	      return sliderPos * (this.maxZoom - this.minZoom) + this.minZoom;
	    }
	  }, {
	    key: 'getSliderPos',
	    value: function getSliderPos(zoom) {
	      if (!this.minZoom || !this.maxZoom) {
	        return null;
	      }

	      if (this.minZoom === this.maxZoom) {
	        return 0;
	      } else {
	        return (zoom - this.minZoom) / (this.maxZoom - this.minZoom);
	      }
	    }
	  }, {
	    key: 'isZoomable',
	    value: function isZoomable() {
	      if (!this.minZoom || !this.maxZoom) {
	        return null;
	      }

	      return this.minZoom !== this.maxZoom;
	    }
	  }, {
	    key: 'fixZoom',
	    value: function fixZoom(zoom) {
	      return Math.max(this.minZoom, Math.min(this.maxZoom, zoom));
	    }
	  }]);

	  return Zoomer;
	})();

	exports['default'] = Zoomer;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var PLUGIN_KEY = 'cropit';

	exports.PLUGIN_KEY = PLUGIN_KEY;
	var CLASS_NAMES = {
	  PREVIEW: 'cropit-image-preview',
	  PREVIEW_CONTAINER: 'cropit-image-preview-container',
	  FILE_INPUT: 'cropit-image-input',
	  ZOOM_SLIDER: 'cropit-image-zoom-input',
	  IMAGE_BACKGROUND: 'cropit-image-background',
	  IMAGE_BACKGROUND_CONTAINER: 'cropit-image-background-container',
	  PREVIEW_HOVERED: 'cropit-preview-hovered',
	  DRAG_HOVERED: 'cropit-drag-hovered',
	  IMAGE_LOADING: 'cropit-image-loading',
	  IMAGE_LOADED: 'cropit-image-loaded',
	  DISABLED: 'cropit-disabled'
	};

	exports.CLASS_NAMES = CLASS_NAMES;
	var ERRORS = {
	  IMAGE_FAILED_TO_LOAD: { code: 0, message: 'Image failed to load.' },
	  SMALL_IMAGE: { code: 1, message: 'Image is too small.' }
	};

	exports.ERRORS = ERRORS;
	var eventName = function eventName(events) {
	  return events.map(function (e) {
	    return '' + e + '.cropit';
	  }).join(' ');
	};
	var EVENTS = {
	  PREVIEW: eventName(['mousedown', 'mouseup', 'mouseleave', 'touchstart', 'touchend', 'touchcancel', 'touchleave']),
	  PREVIEW_MOVE: eventName(['mousemove', 'touchmove']),
	  ZOOM_INPUT: eventName(['mousemove', 'touchmove', 'change'])
	};
	exports.EVENTS = EVENTS;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _constants = __webpack_require__(4);

	var options = {
	  elements: [{
	    name: '$preview',
	    description: 'The HTML element that displays image preview.',
	    defaultSelector: '.' + _constants.CLASS_NAMES.PREVIEW
	  }, {
	    name: '$fileInput',
	    description: 'File input element.',
	    defaultSelector: 'input.' + _constants.CLASS_NAMES.FILE_INPUT
	  }, {
	    name: '$zoomSlider',
	    description: 'Range input element that controls image zoom.',
	    defaultSelector: 'input.' + _constants.CLASS_NAMES.ZOOM_SLIDER
	  }, {
	    name: '$previewContainer',
	    description: 'Preview container. Only needed when `imageBackground` is true.',
	    defaultSelector: '.' + _constants.CLASS_NAMES.PREVIEW_CONTAINER
	  }].map(function (o) {
	    o.type = 'jQuery element';
	    o['default'] = '$imageCropper.find(\'' + o.defaultSelector + '\')';
	    return o;
	  }),

	  values: [{
	    name: 'width',
	    type: 'number',
	    description: 'Width of image preview in pixels. If set, it will override the CSS property.',
	    'default': null
	  }, {
	    name: 'height',
	    type: 'number',
	    description: 'Height of image preview in pixels. If set, it will override the CSS property.',
	    'default': null
	  }, {
	    name: 'imageBackground',
	    type: 'boolean',
	    description: 'Whether or not to display the background image beyond the preview area.',
	    'default': false
	  }, {
	    name: 'imageBackgroundBorderWidth',
	    type: 'array or number',
	    description: 'Width of background image border in pixels.\n        The four array elements specify the width of background image width on the top, right, bottom, left side respectively.\n        The background image beyond the width will be hidden.\n        If specified as a number, border with uniform width on all sides will be applied.',
	    'default': [0, 0, 0, 0]
	  }, {
	    name: 'exportZoom',
	    type: 'number',
	    description: 'The ratio between the desired image size to export and the preview size.\n        For example, if the preview size is `300px * 200px`, and `exportZoom = 2`, then\n        the exported image size will be `600px * 400px`.\n        This also affects the maximum zoom level, since the exported image cannot be zoomed to larger than its original size.',
	    'default': 1
	  }, {
	    name: 'allowDragNDrop',
	    type: 'boolean',
	    description: 'When set to true, you can load an image by dragging it from local file browser onto the preview area.',
	    'default': true
	  }, {
	    name: 'minZoom',
	    type: 'string',
	    description: 'This options decides the minimal zoom level of the image.\n        If set to `\'fill\'`, the image has to fill the preview area, i.e. both width and height must not go smaller than the preview area.\n        If set to `\'fit\'`, the image can shrink further to fit the preview area, i.e. at least one of its edges must not go smaller than the preview area.',
	    'default': 'fill'
	  }, {
	    name: 'maxZoom',
	    type: 'number',
	    description: 'Determines how big the image can be zoomed. E.g. if set to 1.5, the image can be zoomed to 150% of its original size.',
	    'default': 1
	  }, {
	    name: 'initialZoom',
	    type: 'string',
	    description: 'Determines the zoom when an image is loaded.\n        When set to `\'min\'`, image is zoomed to the smallest when loaded.\n        When set to `\'image\'`, image is zoomed to 100% when loaded.',
	    'default': 'min'
	  }, {
	    name: 'freeMove',
	    type: 'boolean',
	    description: 'When set to true, you can freely move the image instead of being bound to the container borders',
	    'default': false
	  }, {
	    name: 'smallImage',
	    type: 'string',
	    description: 'When set to `\'reject\'`, `onImageError` would be called when cropit loads an image that is smaller than the container.\n        When set to `\'allow\'`, images smaller than the container can be zoomed down to its original size, overiding `minZoom` option.\n        When set to `\'stretch\'`, the minimum zoom of small images would follow `minZoom` option.',
	    'default': 'reject'
	  }, {
	    name: 'allowCrossOrigin',
	    type: 'boolean',
	    description: 'Set to true if you need to crop image served from other domains.',
	    'default': false
	  }],

	  callbacks: [{
	    name: 'onFileChange',
	    description: 'Called when user selects a file in the select file input.',
	    params: [{
	      name: 'event',
	      type: 'object',
	      description: 'File change event object'
	    }]
	  }, {
	    name: 'onFileReaderError',
	    description: 'Called when `FileReader` encounters an error while loading the image file.'
	  }, {
	    name: 'onImageLoading',
	    description: 'Called when image starts to be loaded.'
	  }, {
	    name: 'onImageLoaded',
	    description: 'Called when image is loaded.'
	  }, {
	    name: 'onImageError',
	    description: 'Called when image cannot be loaded.',
	    params: [{
	      name: 'error',
	      type: 'object',
	      description: 'Error object.'
	    }, {
	      name: 'error.code',
	      type: 'number',
	      description: 'Error code. `0` means generic image loading failure. `1` means image is too small.'
	    }, {
	      name: 'error.message',
	      type: 'string',
	      description: 'A message explaining the error.'
	    }]
	  }, {
	    name: 'onZoomEnabled',
	    description: 'Called when image the zoom slider is enabled.'
	  }, {
	    name: 'onZoomDisabled',
	    description: 'Called when image the zoom slider is disabled.'
	  }, {
	    name: 'onZoomChange',
	    description: 'Called when zoom changes.',
	    params: [{
	      name: 'zoom',
	      type: 'number',
	      description: 'New zoom.'
	    }]
	  }, {
	    name: 'onOffsetChange',
	    description: 'Called when image offset changes.',
	    params: [{
	      name: 'offset',
	      type: 'object',
	      description: 'New offset, with `x` and `y` values.'
	    }]
	  }].map(function (o) {
	    o.type = 'function';return o;
	  })
	};

	var loadDefaults = function loadDefaults($el) {
	  var defaults = {};
	  if ($el) {
	    options.elements.forEach(function (o) {
	      defaults[o.name] = $el.find(o.defaultSelector);
	    });
	  }
	  options.values.forEach(function (o) {
	    defaults[o.name] = o['default'];
	  });
	  options.callbacks.forEach(function (o) {
	    defaults[o.name] = function () {};
	  });

	  return defaults;
	};

	exports.loadDefaults = loadDefaults;
	exports['default'] = options;

/***/ },
/* 6 */
/***/ function(module, exports) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var exists = function exists(v) {
	  return typeof v !== 'undefined';
	};

	exports.exists = exists;
	var round = function round(x) {
	  return +(Math.round(x * 100) + 'e-2');
	};

	exports.round = round;
	var capitalize = function capitalize(s) {
	  return s.charAt(0).toUpperCase() + s.slice(1);
	};
	exports.capitalize = capitalize;

/***/ }
/******/ ])
});
;
/**
 * Documento Confidencial.
 * 
 * @file cropped.js
 * @Author Jorge Pérez (jorge.perez@anfix.com)
 * @date January, 2013
 * @brief js for div called userForm
 */


/*GLOBAL VARIABLES*/
var cropped=null;

function getCropped() {
	if(jQuery.isEmptyObject(cropped)){
		cropped= new Cropped();
	}
	return cropped;
};


/**CLASS*/
var Cropped = function(){
	this.userSignUp = new UserSignup();
	this.proxy = new Proxy();
};
Cropped.prototype = {
	id: '.cropped-container',


	setUp: function(){
		this.addListenersTo();
	},

	show: function(options){
		var me = this;
		options = options || {};
		Utils.show(options,this);
		me.uploadFn = options.uploadFn;
		me.scope = options.scope;
		jQuery("#maskModal").css("display","block");

		jQuery(me.id + ' .image-editor').cropit({
          imageState: {
            src: options.data
          },
          minZoom:'fit',
          smallImage:true,
          originalSize:true,
          onZoomChange: function(newZoom){
          	jQuery('.image-editor').cropit('exportZoom');
          	var a =jQuery('.image-editor').cropit('export');
          	jQuery('.crop-square').attr('src', a);
          },
          onOffsetChange: function(){
          	var a =jQuery('.image-editor').cropit('export');
          	jQuery('.crop-square').attr('src', a);
          }
        });

	},

	hide: function(){
		jQuery("#maskModal").css("display","none");
		jQuery('.image-editor').cropit('destroy');
		//Utils.hide(null, this);
		jQuery(this.id).hide();
	},


	submit: function(eventObject){
		var imageData = jQuery('.image-editor').cropit('export');
		jQuery('#freelanceForm .jcf-file').css('background-image', 'url('+imageData+')');
		jQuery('#freelanceForm .jcf-file').css('background-color', '#fff');
		this.uploadFn.call(this.scope, imageData);
		this.hide();
	},
	

	addListenersTo: function(){
		var me = this;
	
		jQuery(me.id+' .crop-close,'+ me.id+' .crop-cancel').click(function(){me.hide(false);});
		jQuery(me.id+' .crop-accept').click(function(){me.submit()});

	}
	
};

/**
 * Created by takuro wada
 */

(function($){

    $.fn.polymerForm = function(options){
        var setting = $.extend({
            label_default: "",
            base_color: "#a7b3b8",
            active_color: "#6cc0e0",
            bar_height: "1px",
            label_color: "#9aa8ad",
            origin: "center",
            margin_top: "10px",
            margin_bottom: "0px",
	    data_anchor: false
        }, options);

        this.each(function(){
            var thiz = $(this);
            var label_name = $(this).attr('label') ||  $(this).attr('data-label')  ||setting.label_default;
            var base_color = $(this).attr('base-color') || setting.base_color;
            var active_color = $(this).attr('active-color') || $(this).attr('data-active-color') || setting.active_color;
            var margin_top = $(this).attr('margin-top') || setting.margin_top;
            var margin_bottom = $(this).attr('margin-bottom') || setting.margin_bottom;
            var bar_height = $(this).attr('bar-height') || setting.bar_height;
            var label_color = $(this).attr('label-color') || setting.label_color;
            var origin = $(this).attr('origin') || setting.origin;
            var required = $(this).attr('data-required') || false;
	    var anchor = $(this).attr('data-anchor') || setting.data_anchor;

            var width = anchor ?  "100%" : thiz.css('width');


            // Validation
            if(origin !== 'left' && origin !== 'right' && origin !== 'center'){
                origin = 'center';
            }

            var initail_val = $(this).val();

            var $polymer_form = $("<div class='polymer-form'>")
            var $dom_label = $("<label class='placeholder'  for="+thiz.attr('id')+"></label>").text(label_name);
            var $error_div = $("<div class='error-div'></div>");
            var $div_bar = $("<div class='bar'></div>");
            var $div_bar_in = $("<div class='bar-in'></div>");
            var $span_label = $('<span>*</span>');

            // Set style
            $polymer_form.css({'margin-top': margin_top, 'margin-bottom': margin_bottom, 'width': width});
            var floatInput  =jQuery(this).css('float');
            if(floatInput){
                $polymer_form.css('float',floatInput);
                jQuery(this).css('float', 'none');
            }
            var marginLeft  =jQuery(this).css('margin-left');
            if(marginLeft && marginLeft!='0px'){
                $polymer_form.css('margin-left',marginLeft);
                jQuery(this).css('marginLeft', '0px');
            }
            $div_bar.css({backgroundColor: base_color, height: bar_height});
            $div_bar_in.css({backgroundColor: active_color, height: bar_height});
            $div_bar.append($div_bar_in);
            $dom_label.css({'color': label_color});

            if(required){
                $dom_label.append($span_label);
            }


            ///// Get origin style
            var origin_style = {};
            switch (origin){
                case 'left':
                    origin_style = {'position': 'absolute'};
                    break;
                case 'right':
                    origin_style = {'position': 'absolute', 'right': '0'};
                    break;
            }
            $div_bar_in.css(origin_style);

            $(this).wrap($polymer_form);
            $(this).after($dom_label);
            $(this).after($div_bar);
            $div_bar.after($error_div);


            $(this).focus(function(){
                var bar = $(this).parent().find(".bar-in");
                bar.addClass("active");
                $(this).parent().addClass("dirty");
            });
            $(this).blur(function(){
                var bar = $(this).parent().find(".bar-in");
                bar.removeClass("active");
                if($(this).val() == ""){
                    $(this).parent().removeClass("dirty");
                }
            });
            $(this).change(function(){
                if(thiz.val() !== '') {
                    $(this).parent().addClass("dirty");
                }
            });
            $dom_label.click(function(){
                thiz.focus();
            });

        });

        return this;
    };

}(jQuery));
