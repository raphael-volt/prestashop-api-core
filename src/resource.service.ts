import { Injectable } from "@angular/core";
import { Http } from '@angular/http'
import { AbstractResourceService } from './core/abstract-resource.service'
import { ResourceDescriptor } from './core/resource-descriptor'
import { ApiConfigService } from './api-config.service'
import {
    Address,
    Carrier,
    Cart,
    CartRule,
    Category,
    Combination,
    Configuration,
    Contact,
    Content,
    Country,
    Currency,
    Customer,
    CustomerMessage,
    CustomerThread,
    Customization,
    CustomizationField,
    Delivery,
    Employee,
    Group,
    Guest,
    ImageType,
    Language,
    Manufacturer,
    Order,
    OrderCarrier,
    OrderCartRule,
    OrderDetail,
    OrderHistory,
    OrderInvoice,
    OrderPayment,
    OrderSlip,
    OrderState,
    PriceRange,
    Product,
    ProductFeature,
    ProductFeatureValue,
    ProductOption,
    ProductOptionValue,
    ProductSupplier,
    Shop,
    ShopGroup,
    ShopUrl,
    SpecificPrice,
    SpecificPriceRule,
    State,
    Stock,
    StockAvailable,
    StockMovementReason,
    StockMvt,
    Store,
    Supplier,
    SupplyOrder,
    SupplyOrderDetail,
    SupplyOrderHistory,
    SupplyOrderReceiptHistory,
    SupplyOrderState,
    Tag,
    Tax,
    TaxRule,
    TaxRuleGroup,
    TranslatedConfiguration,
    Warehouse,
    WarehouseProductLocation,
    WeightRange,
    Zone
} from './shared/resource.types'

@Injectable()
export class AddressService extends AbstractResourceService<Address> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "addresses", "address",
                [true, true, true, true],
                [
                    ["address1", false, true, false, "isAddress", 128],
                    ["address2", false, false, false, "isAddress", 128],
                    ["alias", false, true, false, "isGenericName", 32],
                    ["city", false, true, false, "isCityName", 64],
                    ["company", false, false, false, "isGenericName", 64],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["dni", false, false, false, "isDniLite", 16],
                    ["firstname", false, true, false, "isName", 32],
                    ["id_country", false, true, false, "isUnsignedId", 0],
                    ["id_customer", false, false, false, "isNullOrUnsignedId", 0],
                    ["id_manufacturer", false, false, false, "isNullOrUnsignedId", 0],
                    ["id_state", false, false, false, "isNullOrUnsignedId", 0],
                    ["id_supplier", false, false, false, "isNullOrUnsignedId", 0],
                    ["id_warehouse", false, false, false, "isNullOrUnsignedId", 0],
                    ["lastname", false, true, false, "isName", 32],
                    ["other", false, false, false, "isMessage", 300],
                    ["phone", false, false, false, "isPhoneNumber", 32],
                    ["phone_mobile", false, false, false, "isPhoneNumber", 32],
                    ["postcode", false, false, false, "isPostCode", 12],
                    ["vat_number", false, false, false, "isGenericName", 0]
                ]
            )
        )
    }
}

@Injectable()
export class CarrierService extends AbstractResourceService<Carrier> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "carriers", "carrier",
                [true, true, true, true],
                [
                    ["delay", true, true, false, "isGenericName", 128],
                    ["active", false, true, false, "isBool", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["external_module_name", false, false, false, "", 64],
                    ["grade", false, false, false, "isUnsignedInt", 1],
                    ["id_reference", false, false, false, "", 0],
                    ["id_tax_rules_group", false, false, false, "", 0],
                    ["is_free", false, false, false, "isBool", 0],
                    ["is_module", false, false, false, "isBool", 0],
                    ["max_depth", false, false, false, "isUnsignedInt", 0],
                    ["max_height", false, false, false, "isUnsignedInt", 0],
                    ["max_weight", false, false, false, "isFloat", 0],
                    ["max_width", false, false, false, "isUnsignedInt", 0],
                    ["name", false, true, false, "isCarrierName", 64],
                    ["need_range", false, false, false, "", 0],
                    ["position", false, false, false, "", 0],
                    ["range_behavior", false, false, false, "isBool", 0],
                    ["shipping_external", false, false, false, "", 0],
                    ["shipping_handling", false, false, false, "isBool", 0],
                    ["shipping_method", false, false, false, "isUnsignedInt", 0],
                    ["url", false, false, false, "isAbsoluteUrl", 0]
                ]
            )
        )
    }
}

@Injectable()
export class CartService extends AbstractResourceService<Cart> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "carts", "cart",
                [true, true, true, true],
                [
                    ["allow_seperated_package", false, false, false, "isBool", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["delivery_option", false, false, false, "", 0],
                    ["gift", false, false, false, "isBool", 0],
                    ["gift_message", false, false, false, "isMessage", 0],
                    ["id_address_delivery", false, false, false, "isUnsignedId", 0],
                    ["id_address_invoice", false, false, false, "isUnsignedId", 0],
                    ["id_carrier", false, false, false, "isUnsignedId", 0],
                    ["id_currency", false, true, false, "isUnsignedId", 0],
                    ["id_customer", false, false, false, "isUnsignedId", 0],
                    ["id_guest", false, false, false, "isUnsignedId", 0],
                    ["id_lang", false, true, false, "isUnsignedId", 0],
                    ["id_shop", false, false, false, "isUnsignedId", 0],
                    ["id_shop_group", false, false, false, "isUnsignedId", 0],
                    ["mobile_theme", false, false, false, "isBool", 0],
                    ["recyclable", false, false, false, "isBool", 0],
                    ["secure_key", false, false, false, "", 32]
                ],
                [
                    ["cart_rows", "cart_row", [
                            ["id_address_delivery", true],
                            ["id_product", true],
                            ["id_product_attribute", true],
                            ["quantity", true]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class CartRuleService extends AbstractResourceService<CartRule> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "cart_rules", "cart_rule",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isCleanHtml", 254],
                    ["active", false, false, false, "isBool", 0],
                    ["carrier_restriction", false, false, false, "isBool", 0],
                    ["cart_rule_restriction", false, false, false, "isBool", 0],
                    ["code", false, false, false, "isCleanHtml", 254],
                    ["country_restriction", false, false, false, "isBool", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_from", false, true, false, "isDate", 0],
                    ["date_to", false, true, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["description", false, false, false, "isCleanHtml", 65534],
                    ["free_shipping", false, false, false, "isBool", 0],
                    ["gift_product", false, false, false, "isUnsignedId", 0],
                    ["gift_product_attribute", false, false, false, "isUnsignedId", 0],
                    ["group_restriction", false, false, false, "isBool", 0],
                    ["highlight", false, false, false, "isBool", 0],
                    ["id_customer", false, false, false, "isUnsignedId", 0],
                    ["minimum_amount", false, false, false, "isFloat", 0],
                    ["minimum_amount_currency", false, false, false, "isInt", 0],
                    ["minimum_amount_shipping", false, false, false, "isBool", 0],
                    ["minimum_amount_tax", false, false, false, "isBool", 0],
                    ["partial_use", false, false, false, "isBool", 0],
                    ["priority", false, false, false, "isUnsignedInt", 0],
                    ["product_restriction", false, false, false, "isBool", 0],
                    ["quantity", false, false, false, "isUnsignedInt", 0],
                    ["quantity_per_user", false, false, false, "isUnsignedInt", 0],
                    ["reduction_amount", false, false, false, "isFloat", 0],
                    ["reduction_currency", false, false, false, "isUnsignedId", 0],
                    ["reduction_percent", false, false, false, "isPercentage", 0],
                    ["reduction_product", false, false, false, "isInt", 0],
                    ["reduction_tax", false, false, false, "isBool", 0],
                    ["shop_restriction", false, false, false, "isBool", 0]
                ]
            )
        )
    }
}

@Injectable()
export class CategoryService extends AbstractResourceService<Category> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "categories", "category",
                [true, true, true, true],
                [
                    ["description", true, false, false, "isCleanHtml", 0],
                    ["link_rewrite", true, true, false, "isLinkRewrite", 128],
                    ["meta_description", true, false, false, "isGenericName", 255],
                    ["meta_keywords", true, false, false, "isGenericName", 255],
                    ["meta_title", true, false, false, "isGenericName", 128],
                    ["name", true, true, false, "isCatalogName", 128],
                    ["active", false, true, false, "isBool", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["id_parent", false, false, false, "isUnsignedInt", 0],
                    ["id_shop_default", false, false, false, "isUnsignedId", 0],
                    ["is_root_category", false, false, false, "isBool", 0],
                    ["level_depth", false, false, false, "isUnsignedInt", 0],
                    ["nb_products_recursive", false, false, false, "", 0],
                    ["position", false, false, false, "", 0]
                ],
                [
                    ["categories", "category", [
                            ["id", false]
                        ]
                    ],
                    ["products", "product", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class CombinationService extends AbstractResourceService<Combination> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "combinations", "combination",
                [true, true, true, true],
                [
                    ["available_date", false, false, false, "isDateFormat", 0],
                    ["default_on", false, false, false, "isBool", 0],
                    ["ean13", false, false, false, "isEan13", 13],
                    ["ecotax", false, false, false, "isPrice", 20],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["location", false, false, false, "isGenericName", 64],
                    ["minimal_quantity", false, true, false, "isUnsignedId", 0],
                    ["price", false, false, false, "isNegativePrice", 20],
                    ["quantity", false, false, false, "isInt", 10],
                    ["reference", false, false, false, "", 32],
                    ["supplier_reference", false, false, false, "", 32],
                    ["unit_price_impact", false, false, false, "isNegativePrice", 20],
                    ["upc", false, false, false, "isUpc", 12],
                    ["weight", false, false, false, "isFloat", 0],
                    ["wholesale_price", false, false, false, "isPrice", 27]
                ],
                [
                    ["images", "image", [
                            ["id", false]
                        ]
                    ],
                    ["product_option_values", "product_option_value", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class ConfigurationService extends AbstractResourceService<Configuration> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "configurations", "configuration",
                [true, true, true, true],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["id_shop", false, false, false, "isUnsignedId", 0],
                    ["id_shop_group", false, false, false, "isUnsignedId", 0],
                    ["name", false, true, false, "isConfigName", 254],
                    ["value", false, false, false, "", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ContactService extends AbstractResourceService<Contact> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "contacts", "contact",
                [true, true, true, true],
                [
                    ["description", true, false, false, "isCleanHtml", 0],
                    ["name", true, true, false, "isGenericName", 32],
                    ["customer_service", false, false, false, "isBool", 0],
                    ["email", false, false, false, "isEmail", 128]
                ]
            )
        )
    }
}

@Injectable()
export class ContentService extends AbstractResourceService<Content> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "content_management_system", "content",
                [true, true, true, true],
                [
                    ["content", true, false, false, "isCleanHtml", 3999999999999],
                    ["link_rewrite", true, true, false, "isLinkRewrite", 128],
                    ["meta_description", true, false, false, "isGenericName", 255],
                    ["meta_keywords", true, false, false, "isGenericName", 255],
                    ["meta_title", true, true, false, "isGenericName", 128],
                    ["active", false, false, false, "", 0],
                    ["id_cms_category", false, false, false, "isUnsignedInt", 0],
                    ["indexation", false, false, false, "", 0],
                    ["position", false, false, false, "", 0]
                ]
            )
        )
    }
}

@Injectable()
export class CountryService extends AbstractResourceService<Country> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "countries", "country",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 64],
                    ["active", false, false, false, "isBool", 0],
                    ["call_prefix", false, false, false, "isInt", 0],
                    ["contains_states", false, true, false, "isBool", 0],
                    ["display_tax_label", false, true, false, "isBool", 0],
                    ["id_currency", false, false, false, "isUnsignedId", 0],
                    ["id_zone", false, true, false, "isUnsignedId", 0],
                    ["iso_code", false, true, false, "isLanguageIsoCode", 3],
                    ["need_identification_number", false, true, false, "isBool", 0],
                    ["need_zip_code", false, false, false, "isBool", 0],
                    ["zip_code_format", false, false, false, "isZipCodeFormat", 0]
                ]
            )
        )
    }
}

@Injectable()
export class CurrencyService extends AbstractResourceService<Currency> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "currencies", "currency",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["blank", false, false, false, "isInt", 0],
                    ["conversion_rate", false, true, false, "isUnsignedFloat", 0],
                    ["decimals", false, true, false, "isBool", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["format", false, true, false, "isUnsignedId", 0],
                    ["iso_code", false, true, false, "isLanguageIsoCode", 3],
                    ["iso_code_num", false, false, false, "isNumericIsoCode", 3],
                    ["name", false, true, false, "isGenericName", 32],
                    ["sign", false, true, false, "isGenericName", 8]
                ]
            )
        )
    }
}

@Injectable()
export class CustomerService extends AbstractResourceService<Customer> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "customers", "customer",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["ape", false, false, false, "isApe", 0],
                    ["birthday", false, false, false, "isBirthDate", 0],
                    ["company", false, false, false, "isGenericName", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["email", false, true, false, "isEmail", 128],
                    ["firstname", false, true, false, "isName", 32],
                    ["id_default_group", false, false, false, "", 0],
                    ["id_gender", false, false, false, "isUnsignedId", 0],
                    ["id_lang", false, false, false, "isUnsignedId", 0],
                    ["id_risk", false, false, false, "isUnsignedInt", 0],
                    ["id_shop", false, false, false, "isUnsignedId", 0],
                    ["id_shop_group", false, false, false, "isUnsignedId", 0],
                    ["ip_registration_newsletter", false, false, false, "", 0],
                    ["is_guest", false, false, false, "isBool", 0],
                    ["last_passwd_gen", false, false, false, "", 0],
                    ["lastname", false, true, false, "isName", 32],
                    ["max_payment_days", false, false, false, "isUnsignedInt", 0],
                    ["newsletter", false, false, false, "isBool", 0],
                    ["newsletter_date_add", false, false, false, "", 0],
                    ["note", false, false, false, "isCleanHtml", 65000],
                    ["optin", false, false, false, "isBool", 0],
                    ["outstanding_allow_amount", false, false, false, "isFloat", 0],
                    ["passwd", false, true, false, "isPasswd", 32],
                    ["secure_key", false, false, false, "isMd5", 0],
                    ["show_public_prices", false, false, false, "isBool", 0],
                    ["siret", false, false, false, "isSiret", 0],
                    ["website", false, false, false, "isUrl", 0]
                ],
                [
                    ["groups", "group", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class CustomerMessageService extends AbstractResourceService<CustomerMessage> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "customer_messages", "customer_message",
                [true, true, true, true],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["file_name", false, false, false, "", 0],
                    ["id_customer_thread", false, false, false, "", 0],
                    ["id_employee", false, false, false, "isUnsignedId", 0],
                    ["ip_address", false, false, false, "isIp2Long", 15],
                    ["message", false, true, false, "isCleanHtml", 16777216],
                    ["private", false, false, false, "", 0],
                    ["read", false, false, false, "isBool", 0],
                    ["user_agent", false, false, false, "", 0]
                ]
            )
        )
    }
}

@Injectable()
export class CustomerThreadService extends AbstractResourceService<CustomerThread> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "customer_threads", "customer_thread",
                [true, true, true, true],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["email", false, false, false, "isEmail", 254],
                    ["id_contact", false, true, false, "isUnsignedId", 0],
                    ["id_customer", false, false, false, "isUnsignedId", 0],
                    ["id_lang", false, true, false, "isUnsignedId", 0],
                    ["id_order", false, false, false, "isUnsignedId", 0],
                    ["id_product", false, false, false, "isUnsignedId", 0],
                    ["id_shop", false, false, false, "isUnsignedId", 0],
                    ["status", false, false, false, "", 0],
                    ["token", false, true, false, "isGenericName", 0]
                ],
                [
                    ["customer_messages", "customer_message", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class CustomizationService extends AbstractResourceService<Customization> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "customizations", "customization",
                [true, true, true, true],
                [
                    ["id_address_delivery", false, true, false, "isUnsignedId", 0],
                    ["id_cart", false, true, false, "isUnsignedId", 0],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["id_product_attribute", false, true, false, "isUnsignedId", 0],
                    ["in_cart", false, true, false, "isBool", 0],
                    ["quantity", false, true, false, "isUnsignedId", 0],
                    ["quantity_refunded", false, true, false, "isUnsignedId", 0],
                    ["quantity_returned", false, true, false, "isUnsignedId", 0]
                ],
                [
                    ["customized_data_images", "customized_data_image", [
                            ["id_customization_field", false],
                            ["value", false]
                        ]
                    ],
                    ["customized_data_text_fields", "customized_data_text_field", [
                            ["id_customization_field", true],
                            ["value", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class CustomizationFieldService extends AbstractResourceService<CustomizationField> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "product_customization_fields", "customization_field",
                [true, true, true, true],
                [
                    ["name", true, true, false, "", 255],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["required", false, true, false, "isBool", 0],
                    ["type", false, true, false, "isUnsignedId", 0]
                ]
            )
        )
    }
}

@Injectable()
export class DeliveryService extends AbstractResourceService<Delivery> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "deliveries", "delivery",
                [true, true, true, true],
                [
                    ["id_carrier", false, true, false, "isUnsignedId", 0],
                    ["id_range_price", false, true, false, "isUnsignedId", 0],
                    ["id_range_weight", false, true, false, "isUnsignedId", 0],
                    ["id_shop", false, false, false, "", 0],
                    ["id_shop_group", false, false, false, "", 0],
                    ["id_zone", false, true, false, "isUnsignedId", 0],
                    ["price", false, true, false, "isPrice", 0]
                ]
            )
        )
    }
}

@Injectable()
export class EmployeeService extends AbstractResourceService<Employee> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "employees", "employee",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["bo_color", false, false, false, "isColor", 32],
                    ["bo_css", false, false, false, "isGenericName", 64],
                    ["bo_menu", false, false, false, "isBool", 0],
                    ["bo_theme", false, false, false, "isGenericName", 32],
                    ["bo_width", false, false, false, "isUnsignedInt", 0],
                    ["default_tab", false, false, false, "isInt", 0],
                    ["email", false, true, false, "isEmail", 128],
                    ["firstname", false, true, false, "isName", 32],
                    ["id_lang", false, true, false, "isUnsignedInt", 0],
                    ["id_last_customer", false, false, false, "isUnsignedInt", 0],
                    ["id_last_customer_message", false, false, false, "isUnsignedInt", 0],
                    ["id_last_order", false, false, false, "isUnsignedInt", 0],
                    ["id_profile", false, true, false, "isInt", 0],
                    ["last_passwd_gen", false, false, false, "", 0],
                    ["lastname", false, true, false, "isName", 32],
                    ["optin", false, false, false, "isBool", 0],
                    ["passwd", false, true, false, "isPasswdAdmin", 32],
                    ["preselect_date_range", false, false, false, "", 32],
                    ["stats_compare_from", false, false, false, "isDate", 0],
                    ["stats_compare_option", false, false, false, "isUnsignedInt", 0],
                    ["stats_compare_to", false, false, false, "isDate", 0],
                    ["stats_date_from", false, false, false, "isDate", 0],
                    ["stats_date_to", false, false, false, "isDate", 0]
                ]
            )
        )
    }
}

@Injectable()
export class GroupService extends AbstractResourceService<Group> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "groups", "group",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 32],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["price_display_method", false, true, false, "isPriceDisplayMethod", 0],
                    ["reduction", false, false, false, "isFloat", 0],
                    ["show_prices", false, false, false, "isBool", 0]
                ]
            )
        )
    }
}

@Injectable()
export class GuestService extends AbstractResourceService<Guest> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "guests", "guest",
                [true, true, true, true],
                [
                    ["accept_language", false, false, false, "isGenericName", 8],
                    ["adobe_director", false, false, false, "isBool", 0],
                    ["adobe_flash", false, false, false, "isBool", 0],
                    ["apple_quicktime", false, false, false, "isBool", 0],
                    ["id_customer", false, false, false, "isUnsignedId", 0],
                    ["id_operating_system", false, false, false, "isUnsignedId", 0],
                    ["id_web_browser", false, false, false, "isUnsignedId", 0],
                    ["javascript", false, false, false, "isBool", 0],
                    ["mobile_theme", false, false, false, "isBool", 0],
                    ["real_player", false, false, false, "isBool", 0],
                    ["screen_color", false, false, false, "isInt", 0],
                    ["screen_resolution_x", false, false, false, "isInt", 0],
                    ["screen_resolution_y", false, false, false, "isInt", 0],
                    ["sun_java", false, false, false, "isBool", 0],
                    ["windows_media", false, false, false, "isBool", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ImageTypeService extends AbstractResourceService<ImageType> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "image_types", "image_type",
                [true, true, true, true],
                [
                    ["categories", false, false, false, "isBool", 0],
                    ["height", false, true, false, "isImageSize", 0],
                    ["manufacturers", false, false, false, "isBool", 0],
                    ["name", false, true, false, "isImageTypeName", 64],
                    ["products", false, false, false, "isBool", 0],
                    ["scenes", false, false, false, "isBool", 0],
                    ["stores", false, false, false, "isBool", 0],
                    ["suppliers", false, false, false, "isBool", 0],
                    ["width", false, true, false, "isImageSize", 0]
                ]
            )
        )
    }
}

@Injectable()
export class LanguageService extends AbstractResourceService<Language> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "languages", "language",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["date_format_full", false, true, false, "isPhpDateFormat", 32],
                    ["date_format_lite", false, true, false, "isPhpDateFormat", 32],
                    ["is_rtl", false, false, false, "isBool", 0],
                    ["iso_code", false, true, false, "isLanguageIsoCode", 2],
                    ["language_code", false, false, false, "isLanguageCode", 5],
                    ["name", false, true, false, "isGenericName", 32]
                ]
            )
        )
    }
}

@Injectable()
export class ManufacturerService extends AbstractResourceService<Manufacturer> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "manufacturers", "manufacturer",
                [true, true, true, true],
                [
                    ["description", true, false, false, "isCleanHtml", 0],
                    ["meta_description", true, false, false, "isGenericName", 255],
                    ["meta_keywords", true, false, false, "isGenericName", 0],
                    ["meta_title", true, false, false, "isGenericName", 128],
                    ["short_description", true, false, false, "isCleanHtml", 0],
                    ["active", false, false, false, "", 0],
                    ["date_add", false, false, false, "", 0],
                    ["date_upd", false, false, false, "", 0],
                    ["link_rewrite", false, false, false, "", 0],
                    ["name", false, true, false, "isCatalogName", 64]
                ],
                [
                    ["addresses", "address", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class OrderService extends AbstractResourceService<Order> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "orders", "order",
                [true, true, true, true],
                [
                    ["carrier_tax_rate", false, false, false, "isFloat", 0],
                    ["conversion_rate", false, true, false, "isFloat", 0],
                    ["current_state", false, false, false, "isUnsignedId", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["delivery_date", false, false, false, "", 0],
                    ["delivery_number", false, false, false, "", 0],
                    ["gift", false, false, false, "isBool", 0],
                    ["gift_message", false, false, false, "isMessage", 0],
                    ["id_address_delivery", false, true, false, "isUnsignedId", 0],
                    ["id_address_invoice", false, true, false, "isUnsignedId", 0],
                    ["id_carrier", false, true, false, "isUnsignedId", 0],
                    ["id_cart", false, true, false, "isUnsignedId", 0],
                    ["id_currency", false, true, false, "isUnsignedId", 0],
                    ["id_customer", false, true, false, "isUnsignedId", 0],
                    ["id_lang", false, true, false, "isUnsignedId", 0],
                    ["id_shop", false, false, false, "isUnsignedId", 0],
                    ["id_shop_group", false, false, false, "isUnsignedId", 0],
                    ["invoice_date", false, false, false, "", 0],
                    ["invoice_number", false, false, false, "", 0],
                    ["mobile_theme", false, false, false, "isBool", 0],
                    ["module", false, true, false, "isModuleName", 0],
                    ["payment", false, true, false, "isGenericName", 0],
                    ["recyclable", false, false, false, "isBool", 0],
                    ["reference", false, false, false, "", 0],
                    ["round_mode", false, false, false, "isUnsignedId", 0],
                    ["round_type", false, false, false, "isUnsignedId", 0],
                    ["secure_key", false, false, false, "isMd5", 0],
                    ["shipping_number", false, false, false, "isTrackingNumber", 0],
                    ["total_discounts", false, false, false, "isPrice", 0],
                    ["total_discounts_tax_excl", false, false, false, "isPrice", 0],
                    ["total_discounts_tax_incl", false, false, false, "isPrice", 0],
                    ["total_paid", false, true, false, "isPrice", 0],
                    ["total_paid_real", false, true, false, "isPrice", 0],
                    ["total_paid_tax_excl", false, false, false, "isPrice", 0],
                    ["total_paid_tax_incl", false, false, false, "isPrice", 0],
                    ["total_products", false, true, false, "isPrice", 0],
                    ["total_products_wt", false, true, false, "isPrice", 0],
                    ["total_shipping", false, false, false, "isPrice", 0],
                    ["total_shipping_tax_excl", false, false, false, "isPrice", 0],
                    ["total_shipping_tax_incl", false, false, false, "isPrice", 0],
                    ["total_wrapping", false, false, false, "isPrice", 0],
                    ["total_wrapping_tax_excl", false, false, false, "isPrice", 0],
                    ["total_wrapping_tax_incl", false, false, false, "isPrice", 0],
                    ["valid", false, false, false, "", 0]
                ],
                [
                    ["order_rows", "order_row", [
                            ["id", false],
                            ["product_attribute_id", true],
                            ["product_ean13", false],
                            ["product_id", true],
                            ["product_name", false],
                            ["product_price", false],
                            ["product_quantity", true],
                            ["product_reference", false],
                            ["product_upc", false],
                            ["unit_price_tax_excl", false],
                            ["unit_price_tax_incl", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class OrderCarrierService extends AbstractResourceService<OrderCarrier> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_carriers", "order_carrier",
                [true, true, true, true],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["id_carrier", false, true, false, "isUnsignedId", 0],
                    ["id_order", false, true, false, "isUnsignedId", 0],
                    ["id_order_invoice", false, false, false, "isUnsignedId", 0],
                    ["shipping_cost_tax_excl", false, false, false, "isFloat", 0],
                    ["shipping_cost_tax_incl", false, false, false, "isFloat", 0],
                    ["tracking_number", false, false, false, "isTrackingNumber", 0],
                    ["weight", false, false, false, "isFloat", 0]
                ]
            )
        )
    }
}

@Injectable()
export class OrderCartRuleService extends AbstractResourceService<OrderCartRule> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_discounts", "order_cart_rule",
                [true, true, true, true],
                [
                    ["free_shipping", false, false, false, "isBool", 0],
                    ["id_cart_rule", false, true, false, "isUnsignedId", 0],
                    ["id_order", false, true, false, "isUnsignedId", 0],
                    ["id_order_invoice", false, false, false, "isUnsignedId", 0],
                    ["name", false, true, false, "isCleanHtml", 0],
                    ["value", false, true, false, "isFloat", 0],
                    ["value_tax_excl", false, true, false, "isFloat", 0]
                ]
            )
        )
    }
}

@Injectable()
export class OrderDetailService extends AbstractResourceService<OrderDetail> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_details", "order_detail",
                [true, true, true, true],
                [
                    ["discount_quantity_applied", false, false, false, "isInt", 0],
                    ["download_deadline", false, false, false, "isDateFormat", 0],
                    ["download_hash", false, false, false, "isGenericName", 0],
                    ["download_nb", false, false, false, "isInt", 0],
                    ["ecotax", false, false, false, "isFloat", 0],
                    ["ecotax_tax_rate", false, false, false, "isFloat", 0],
                    ["group_reduction", false, false, false, "isFloat", 0],
                    ["id_order", false, true, false, "isUnsignedId", 0],
                    ["id_order_invoice", false, false, false, "isUnsignedId", 0],
                    ["id_shop", false, true, false, "isUnsignedId", 0],
                    ["id_tax_rules_group", false, false, false, "isInt", 0],
                    ["id_warehouse", false, true, false, "isUnsignedId", 0],
                    ["original_product_price", false, false, false, "isPrice", 0],
                    ["original_wholesale_price", false, false, false, "isPrice", 0],
                    ["product_attribute_id", false, false, false, "isUnsignedId", 0],
                    ["product_ean13", false, false, false, "isEan13", 0],
                    ["product_id", false, false, false, "isUnsignedId", 0],
                    ["product_name", false, true, false, "isGenericName", 0],
                    ["product_price", false, true, false, "isPrice", 0],
                    ["product_quantity", false, true, false, "isInt", 0],
                    ["product_quantity_discount", false, false, false, "isFloat", 0],
                    ["product_quantity_in_stock", false, false, false, "isInt", 0],
                    ["product_quantity_refunded", false, false, false, "isUnsignedInt", 0],
                    ["product_quantity_reinjected", false, false, false, "isUnsignedInt", 0],
                    ["product_quantity_return", false, false, false, "isUnsignedInt", 0],
                    ["product_reference", false, false, false, "isReference", 0],
                    ["product_supplier_reference", false, false, false, "isReference", 0],
                    ["product_upc", false, false, false, "isUpc", 0],
                    ["product_weight", false, false, false, "isFloat", 0],
                    ["purchase_supplier_price", false, false, false, "isPrice", 0],
                    ["reduction_amount", false, false, false, "isPrice", 0],
                    ["reduction_amount_tax_excl", false, false, false, "isPrice", 0],
                    ["reduction_amount_tax_incl", false, false, false, "isPrice", 0],
                    ["reduction_percent", false, false, false, "isFloat", 0],
                    ["tax_computation_method", false, false, false, "isUnsignedId", 0],
                    ["total_price_tax_excl", false, false, false, "isPrice", 0],
                    ["total_price_tax_incl", false, false, false, "isPrice", 0],
                    ["total_shipping_price_tax_excl", false, false, false, "isPrice", 0],
                    ["total_shipping_price_tax_incl", false, false, false, "isPrice", 0],
                    ["unit_price_tax_excl", false, false, false, "isPrice", 0],
                    ["unit_price_tax_incl", false, false, false, "isPrice", 0]
                ],
                [
                    ["taxes", "tax", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class OrderHistoryService extends AbstractResourceService<OrderHistory> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_histories", "order_history",
                [true, true, true, true],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["id_employee", false, false, false, "isUnsignedId", 0],
                    ["id_order", false, true, false, "isUnsignedId", 0],
                    ["id_order_state", false, true, false, "isUnsignedId", 0]
                ]
            )
        )
    }
}

@Injectable()
export class OrderInvoiceService extends AbstractResourceService<OrderInvoice> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_invoices", "order_invoice",
                [true, true, true, true],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["delivery_address", false, false, false, "isCleanHtml", 1000],
                    ["delivery_date", false, false, false, "isDateFormat", 0],
                    ["delivery_number", false, false, false, "isUnsignedId", 0],
                    ["id_order", false, true, false, "isUnsignedId", 0],
                    ["invoice_address", false, false, false, "isCleanHtml", 1000],
                    ["note", false, false, false, "isCleanHtml", 65000],
                    ["number", false, true, false, "isUnsignedId", 0],
                    ["shipping_tax_computation_method", false, false, false, "", 0],
                    ["shop_address", false, false, false, "isCleanHtml", 1000],
                    ["total_discount_tax_excl", false, false, false, "", 0],
                    ["total_discount_tax_incl", false, false, false, "", 0],
                    ["total_paid_tax_excl", false, false, false, "", 0],
                    ["total_paid_tax_incl", false, false, false, "", 0],
                    ["total_products", false, false, false, "", 0],
                    ["total_products_wt", false, false, false, "", 0],
                    ["total_shipping_tax_excl", false, false, false, "", 0],
                    ["total_shipping_tax_incl", false, false, false, "", 0],
                    ["total_wrapping_tax_excl", false, false, false, "", 0],
                    ["total_wrapping_tax_incl", false, false, false, "", 0]
                ]
            )
        )
    }
}

@Injectable()
export class OrderPaymentService extends AbstractResourceService<OrderPayment> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_payments", "order_payment",
                [true, true, true, true],
                [
                    ["amount", false, true, false, "isNegativePrice", 0],
                    ["card_brand", false, false, false, "isAnything", 254],
                    ["card_expiration", false, false, false, "isAnything", 254],
                    ["card_holder", false, false, false, "isAnything", 254],
                    ["card_number", false, false, false, "isAnything", 254],
                    ["conversion_rate", false, false, false, "isFloat", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["id_currency", false, true, false, "isUnsignedId", 0],
                    ["order_reference", false, false, false, "isAnything", 9],
                    ["payment_method", false, false, false, "isGenericName", 0],
                    ["transaction_id", false, false, false, "isAnything", 254]
                ]
            )
        )
    }
}

@Injectable()
export class OrderSlipService extends AbstractResourceService<OrderSlip> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_slip", "order_slip",
                [true, true, true, true],
                [
                    ["amount", false, false, false, "isFloat", 0],
                    ["conversion_rate", false, true, false, "isFloat", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["id_customer", false, true, false, "isUnsignedId", 0],
                    ["id_order", false, true, false, "isUnsignedId", 0],
                    ["order_slip_type", false, false, false, "isInt", 0],
                    ["partial", false, false, false, "", 0],
                    ["shipping_cost", false, false, false, "", 0],
                    ["shipping_cost_amount", false, false, false, "isFloat", 0],
                    ["total_products_tax_excl", false, true, false, "isFloat", 0],
                    ["total_products_tax_incl", false, true, false, "isFloat", 0],
                    ["total_shipping_tax_excl", false, true, false, "isFloat", 0],
                    ["total_shipping_tax_incl", false, true, false, "isFloat", 0]
                ],
                [
                    ["order_slip_details", "order_slip_detail", [
                            ["amount_tax_excl", true],
                            ["amount_tax_incl", true],
                            ["id", false],
                            ["id_order_detail", true],
                            ["product_quantity", true]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class OrderStateService extends AbstractResourceService<OrderState> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "order_states", "order_state",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 64],
                    ["template", true, false, false, "isTplName", 64],
                    ["color", false, false, false, "isColor", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["delivery", false, false, false, "isBool", 0],
                    ["hidden", false, false, false, "isBool", 0],
                    ["invoice", false, false, false, "isBool", 0],
                    ["logable", false, false, false, "isBool", 0],
                    ["module_name", false, false, false, "isModuleName", 0],
                    ["paid", false, false, false, "isBool", 0],
                    ["pdf_delivery", false, false, false, "isBool", 0],
                    ["pdf_invoice", false, false, false, "isBool", 0],
                    ["send_email", false, false, false, "isBool", 0],
                    ["shipped", false, false, false, "isBool", 0],
                    ["unremovable", false, false, false, "isBool", 0]
                ]
            )
        )
    }
}

@Injectable()
export class PriceRangeService extends AbstractResourceService<PriceRange> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "price_ranges", "price_range",
                [true, true, true, true],
                [
                    ["delimiter1", false, true, false, "isUnsignedFloat", 0],
                    ["delimiter2", false, true, false, "isUnsignedFloat", 0],
                    ["id_carrier", false, true, false, "isInt", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ProductService extends AbstractResourceService<Product> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "products", "product",
                [true, true, true, true],
                [
                    ["available_later", true, false, false, "IsGenericName", 255],
                    ["available_now", true, false, false, "isGenericName", 255],
                    ["description", true, false, false, "isCleanHtml", 0],
                    ["description_short", true, false, false, "isCleanHtml", 0],
                    ["link_rewrite", true, true, false, "isLinkRewrite", 128],
                    ["meta_description", true, false, false, "isGenericName", 255],
                    ["meta_keywords", true, false, false, "isGenericName", 255],
                    ["meta_title", true, false, false, "isGenericName", 128],
                    ["name", true, true, false, "isCatalogName", 128],
                    ["active", false, false, false, "isBool", 0],
                    ["additional_shipping_cost", false, false, false, "isPrice", 0],
                    ["advanced_stock_management", false, false, false, "isBool", 0],
                    ["available_date", false, false, false, "isDateFormat", 0],
                    ["available_for_order", false, false, false, "isBool", 0],
                    ["cache_default_attribute", false, false, false, "", 0],
                    ["cache_has_attachments", false, false, false, "isBool", 0],
                    ["cache_is_pack", false, false, false, "isBool", 0],
                    ["condition", false, false, false, "isGenericName", 0],
                    ["customizable", false, false, false, "isUnsignedInt", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["depth", false, false, false, "isUnsignedFloat", 0],
                    ["ean13", false, false, false, "isEan13", 13],
                    ["ecotax", false, false, false, "isPrice", 0],
                    ["height", false, false, false, "isUnsignedFloat", 0],
                    ["id_category_default", false, false, false, "isUnsignedId", 0],
                    ["id_default_combination", false, false, false, "", 0],
                    ["id_default_image", false, false, false, "", 0],
                    ["id_manufacturer", false, false, false, "isUnsignedId", 0],
                    ["id_product_redirected", false, false, false, "isUnsignedId", 0],
                    ["id_shop_default", false, false, false, "isUnsignedId", 0],
                    ["id_supplier", false, false, false, "isUnsignedId", 0],
                    ["id_tax_rules_group", false, false, false, "isUnsignedId", 0],
                    ["indexed", false, false, false, "isBool", 0],
                    ["is_virtual", false, false, false, "isBool", 0],
                    ["location", false, false, false, "isReference", 64],
                    ["manufacturer_name", false, false, false, "", 0],
                    ["minimal_quantity", false, false, false, "isUnsignedInt", 0],
                    ["new", false, false, false, "", 0],
                    ["on_sale", false, false, false, "isBool", 0],
                    ["online_only", false, false, false, "isBool", 0],
                    ["pack_stock_type", false, false, false, "isUnsignedInt", 0],
                    ["position_in_category", false, false, false, "", 0],
                    ["price", false, true, false, "isPrice", 0],
                    ["quantity", false, false, false, "", 0],
                    ["quantity_discount", false, false, false, "isBool", 0],
                    ["redirect_type", false, false, false, "isString", 0],
                    ["reference", false, false, false, "isReference", 32],
                    ["show_price", false, false, false, "isBool", 0],
                    ["supplier_reference", false, false, false, "isReference", 32],
                    ["text_fields", false, false, false, "isUnsignedInt", 0],
                    ["type", false, false, false, "", 0],
                    ["unit_price_ratio", false, false, false, "", 0],
                    ["unity", false, false, false, "isString", 0],
                    ["upc", false, false, false, "isUpc", 12],
                    ["uploadable_files", false, false, false, "isUnsignedInt", 0],
                    ["visibility", false, false, false, "isProductVisibility", 0],
                    ["weight", false, false, false, "isUnsignedFloat", 0],
                    ["wholesale_price", false, false, false, "isPrice", 0],
                    ["width", false, false, false, "isUnsignedFloat", 0]
                ],
                [
                    ["accessories", "product", [
                            ["id", true]
                        ]
                    ],
                    ["categories", "category", [
                            ["id", true]
                        ]
                    ],
                    ["combinations", "combination", [
                            ["id", true]
                        ]
                    ],
                    ["images", "image", [
                            ["id", false]
                        ]
                    ],
                    ["product_bundle", "product", [
                            ["id", true],
                            ["quantity", false]
                        ]
                    ],
                    ["product_features", "product_feature", [
                            ["id", true],
                            ["id_feature_value", true]
                        ]
                    ],
                    ["product_option_values", "product_option_value", [
                            ["id", true]
                        ]
                    ],
                    ["stock_availables", "stock_available", [
                            ["id", true],
                            ["id_product_attribute", true]
                        ]
                    ],
                    ["tags", "tag", [
                            ["id", true]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class ProductFeatureService extends AbstractResourceService<ProductFeature> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "product_features", "product_feature",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 128],
                    ["position", false, false, false, "isInt", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ProductFeatureValueService extends AbstractResourceService<ProductFeatureValue> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "product_feature_values", "product_feature_value",
                [true, true, true, true],
                [
                    ["value", true, true, false, "isGenericName", 255],
                    ["custom", false, false, false, "isBool", 0],
                    ["id_feature", false, true, false, "isUnsignedId", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ProductOptionService extends AbstractResourceService<ProductOption> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "product_options", "product_option",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 128],
                    ["public_name", true, true, false, "isGenericName", 64],
                    ["group_type", false, true, false, "", 0],
                    ["is_color_group", false, false, false, "isBool", 0],
                    ["position", false, false, false, "isInt", 0]
                ],
                [
                    ["product_option_values", "product_option_value", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class ProductOptionValueService extends AbstractResourceService<ProductOptionValue> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "product_option_values", "product_option_value",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 128],
                    ["color", false, false, false, "isColor", 0],
                    ["id_attribute_group", false, true, false, "isUnsignedId", 0],
                    ["position", false, false, false, "isInt", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ProductSupplierService extends AbstractResourceService<ProductSupplier> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "product_suppliers", "product_supplier",
                [true, true, true, true],
                [
                    ["id_currency", false, false, false, "isUnsignedId", 0],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["id_product_attribute", false, true, false, "isUnsignedId", 0],
                    ["id_supplier", false, true, false, "isUnsignedId", 0],
                    ["product_supplier_price_te", false, false, false, "isPrice", 0],
                    ["product_supplier_reference", false, false, false, "isReference", 32]
                ]
            )
        )
    }
}

@Injectable()
export class ShopService extends AbstractResourceService<Shop> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "shops", "shop",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["id_category", false, true, false, "", 0],
                    ["id_shop_group", false, true, false, "", 0],
                    ["id_theme", false, true, false, "", 0],
                    ["name", false, true, false, "isGenericName", 64]
                ]
            )
        )
    }
}

@Injectable()
export class ShopGroupService extends AbstractResourceService<ShopGroup> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "shop_groups", "shop_group",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["name", false, true, false, "isGenericName", 64],
                    ["share_customer", false, false, false, "isBool", 0],
                    ["share_order", false, false, false, "isBool", 0],
                    ["share_stock", false, false, false, "isBool", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ShopUrlService extends AbstractResourceService<ShopUrl> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "shop_urls", "shop_url",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["domain", false, true, false, "isCleanHtml", 255],
                    ["domain_ssl", false, false, false, "isCleanHtml", 255],
                    ["id_shop", false, true, false, "", 0],
                    ["main", false, false, false, "isBool", 0],
                    ["physical_uri", false, false, false, "", 64],
                    ["virtual_uri", false, false, false, "", 64]
                ]
            )
        )
    }
}

@Injectable()
export class SpecificPriceService extends AbstractResourceService<SpecificPrice> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "specific_prices", "specific_price",
                [true, true, true, true],
                [
                    ["from", false, true, false, "isDateFormat", 0],
                    ["from_quantity", false, true, false, "isUnsignedInt", 0],
                    ["id_cart", false, true, false, "isUnsignedId", 0],
                    ["id_country", false, true, false, "isUnsignedId", 0],
                    ["id_currency", false, true, false, "isUnsignedId", 0],
                    ["id_customer", false, true, false, "isUnsignedId", 0],
                    ["id_group", false, true, false, "isUnsignedId", 0],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["id_product_attribute", false, false, false, "isUnsignedId", 0],
                    ["id_shop", false, true, false, "isUnsignedId", 0],
                    ["id_shop_group", false, false, false, "isUnsignedId", 0],
                    ["id_specific_price_rule", false, false, false, "isUnsignedId", 0],
                    ["price", false, true, false, "isNegativePrice", 0],
                    ["reduction", false, true, false, "isPrice", 0],
                    ["reduction_tax", false, true, false, "isBool", 0],
                    ["reduction_type", false, true, false, "isReductionType", 0],
                    ["to", false, true, false, "isDateFormat", 0]
                ]
            )
        )
    }
}

@Injectable()
export class SpecificPriceRuleService extends AbstractResourceService<SpecificPriceRule> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "specific_price_rules", "specific_price_rule",
                [true, true, true, true],
                [
                    ["from", false, false, false, "isDateFormat", 0],
                    ["from_quantity", false, true, false, "isUnsignedInt", 0],
                    ["id_country", false, true, false, "isUnsignedId", 0],
                    ["id_currency", false, true, false, "isUnsignedId", 0],
                    ["id_group", false, true, false, "isUnsignedId", 0],
                    ["id_shop", false, true, false, "isUnsignedId", 0],
                    ["name", false, true, false, "isGenericName", 0],
                    ["price", false, true, false, "isNegativePrice", 0],
                    ["reduction", false, true, false, "isPrice", 0],
                    ["reduction_tax", false, true, false, "isBool", 0],
                    ["reduction_type", false, true, false, "isReductionType", 0],
                    ["to", false, false, false, "isDateFormat", 0]
                ]
            )
        )
    }
}

@Injectable()
export class StateService extends AbstractResourceService<State> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "states", "state",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["id_country", false, true, false, "isUnsignedId", 0],
                    ["id_zone", false, true, false, "isUnsignedId", 0],
                    ["iso_code", false, true, false, "isStateIsoCode", 7],
                    ["name", false, true, false, "isGenericName", 32]
                ]
            )
        )
    }
}

@Injectable()
export class StockService extends AbstractResourceService<Stock> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "stocks", "stock",
                [true, false, false, false],
                [
                    ["ean13", false, false, false, "isEan13", 0],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["id_product_attribute", false, true, false, "isUnsignedId", 0],
                    ["id_warehouse", false, true, false, "isUnsignedId", 0],
                    ["physical_quantity", false, true, false, "isUnsignedInt", 0],
                    ["price_te", false, true, false, "isPrice", 0],
                    ["real_quantity", false, false, false, "", 0],
                    ["reference", false, false, false, "isReference", 0],
                    ["upc", false, false, false, "isUpc", 0],
                    ["usable_quantity", false, true, false, "isInt", 0]
                ]
            )
        )
    }
}

@Injectable()
export class StockAvailableService extends AbstractResourceService<StockAvailable> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "stock_availables", "stock_available",
                [true, false, true, false],
                [
                    ["depends_on_stock", false, true, false, "isBool", 0],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["id_product_attribute", false, true, false, "isUnsignedId", 0],
                    ["id_shop", false, false, false, "isUnsignedId", 0],
                    ["id_shop_group", false, false, false, "isUnsignedId", 0],
                    ["out_of_stock", false, true, false, "isInt", 0],
                    ["quantity", false, true, false, "isInt", 0]
                ]
            )
        )
    }
}

@Injectable()
export class StockMovementReasonService extends AbstractResourceService<StockMovementReason> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "stock_movement_reasons", "stock_movement_reason",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 255],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["deleted", false, false, false, "", 0],
                    ["sign", false, false, false, "", 0]
                ]
            )
        )
    }
}

@Injectable()
export class StockMvtService extends AbstractResourceService<StockMvt> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "stock_movements", "stock_mvt",
                [true, false, false, false],
                [
                    ["product_name", true, false, false, "", 0],
                    ["current_wa", false, false, false, "isPrice", 0],
                    ["date_add", false, true, false, "isDate", 0],
                    ["ean13", false, false, false, "", 0],
                    ["id_currency", false, false, false, "", 0],
                    ["id_employee", false, true, false, "isUnsignedId", 0],
                    ["id_order", false, false, false, "isUnsignedId", 0],
                    ["id_product", false, false, false, "", 0],
                    ["id_product_attribute", false, false, false, "", 0],
                    ["id_stock", false, true, false, "isUnsignedId", 0],
                    ["id_stock_mvt_reason", false, true, false, "isUnsignedId", 0],
                    ["id_supply_order", false, false, false, "isUnsignedId", 0],
                    ["id_warehouse", false, false, false, "", 0],
                    ["last_wa", false, false, false, "isPrice", 0],
                    ["management_type", false, false, false, "", 0],
                    ["physical_quantity", false, true, false, "isUnsignedInt", 0],
                    ["price_te", false, true, false, "isPrice", 0],
                    ["reference", false, false, false, "", 0],
                    ["sign", false, true, false, "isInt", 0],
                    ["upc", false, false, false, "", 0]
                ]
            )
        )
    }
}

@Injectable()
export class StoreService extends AbstractResourceService<Store> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "stores", "store",
                [true, true, true, true],
                [
                    ["active", false, true, false, "isBool", 0],
                    ["address1", false, true, false, "isAddress", 128],
                    ["address2", false, false, false, "isAddress", 128],
                    ["city", false, true, false, "isCityName", 64],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["email", false, false, false, "isEmail", 128],
                    ["fax", false, false, false, "isPhoneNumber", 16],
                    ["hours", false, false, false, "isSerializedArray", 65000],
                    ["id_country", false, true, false, "isUnsignedId", 0],
                    ["id_state", false, false, false, "isNullOrUnsignedId", 0],
                    ["latitude", false, false, false, "isCoordinate", 13],
                    ["longitude", false, false, false, "isCoordinate", 13],
                    ["name", false, true, false, "isGenericName", 128],
                    ["note", false, false, false, "isCleanHtml", 65000],
                    ["phone", false, false, false, "isPhoneNumber", 16],
                    ["postcode", false, false, false, "", 12]
                ]
            )
        )
    }
}

@Injectable()
export class SupplierService extends AbstractResourceService<Supplier> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "suppliers", "supplier",
                [true, true, true, true],
                [
                    ["description", true, false, false, "isCleanHtml", 0],
                    ["meta_description", true, false, false, "isGenericName", 255],
                    ["meta_keywords", true, false, false, "isGenericName", 255],
                    ["meta_title", true, false, false, "isGenericName", 128],
                    ["active", false, false, false, "", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["link_rewrite", false, false, false, "", 0],
                    ["name", false, true, false, "isCatalogName", 64]
                ]
            )
        )
    }
}

@Injectable()
export class SupplyOrderService extends AbstractResourceService<SupplyOrder> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "supply_orders", "supply_order",
                [true, false, false, false],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_delivery_expected", false, true, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["discount_rate", false, false, false, "isFloat", 0],
                    ["discount_value_te", false, false, false, "isPrice", 0],
                    ["id_currency", false, true, false, "isUnsignedId", 0],
                    ["id_lang", false, true, false, "isUnsignedId", 0],
                    ["id_supplier", false, true, false, "isUnsignedId", 0],
                    ["id_supply_order_state", false, true, false, "isUnsignedId", 0],
                    ["id_warehouse", false, true, false, "isUnsignedId", 0],
                    ["is_template", false, false, false, "isBool", 0],
                    ["reference", false, true, false, "isGenericName", 0],
                    ["supplier_name", false, false, false, "isCatalogName", 0],
                    ["total_tax", false, false, false, "isPrice", 0],
                    ["total_te", false, false, false, "isPrice", 0],
                    ["total_ti", false, false, false, "isPrice", 0],
                    ["total_with_discount_te", false, false, false, "isPrice", 0]
                ],
                [
                    ["supply_order_details", "supply_order_detail", [
                            ["id", false],
                            ["id_product", false],
                            ["id_product_attribute", false],
                            ["product_name", false],
                            ["supplier_reference", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class SupplyOrderDetailService extends AbstractResourceService<SupplyOrderDetail> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "supply_order_details", "supply_order_detail",
                [true, false, false, false],
                [
                    ["discount_rate", false, true, false, "isFloat", 0],
                    ["discount_value_te", false, true, false, "isPrice", 0],
                    ["ean13", false, false, false, "isEan13", 0],
                    ["exchange_rate", false, true, false, "isFloat", 0],
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["id_product_attribute", false, true, false, "isUnsignedId", 0],
                    ["id_supply_order", false, true, false, "isUnsignedId", 0],
                    ["name", false, true, false, "isGenericName", 0],
                    ["price_te", false, true, false, "isPrice", 0],
                    ["price_ti", false, true, false, "isPrice", 0],
                    ["price_with_discount_te", false, true, false, "isPrice", 0],
                    ["price_with_order_discount_te", false, true, false, "isPrice", 0],
                    ["quantity_expected", false, true, false, "isUnsignedInt", 0],
                    ["quantity_received", false, false, false, "isUnsignedInt", 0],
                    ["reference", false, false, false, "isReference", 0],
                    ["supplier_reference", false, false, false, "isReference", 0],
                    ["tax_rate", false, true, false, "isFloat", 0],
                    ["tax_value", false, true, false, "isPrice", 0],
                    ["tax_value_with_order_discount", false, true, false, "isFloat", 0],
                    ["unit_price_te", false, true, false, "isPrice", 0],
                    ["upc", false, false, false, "isUpc", 0]
                ]
            )
        )
    }
}

@Injectable()
export class SupplyOrderHistoryService extends AbstractResourceService<SupplyOrderHistory> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "supply_order_histories", "supply_order_history",
                [true, false, false, false],
                [
                    ["date_add", false, true, false, "isDate", 0],
                    ["employee_firstname", false, false, false, "isName", 0],
                    ["employee_lastname", false, false, false, "isName", 0],
                    ["id_employee", false, true, false, "isUnsignedId", 0],
                    ["id_state", false, true, false, "isUnsignedId", 0],
                    ["id_supply_order", false, true, false, "isUnsignedId", 0]
                ]
            )
        )
    }
}

@Injectable()
export class SupplyOrderReceiptHistoryService extends AbstractResourceService<SupplyOrderReceiptHistory> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "supply_order_receipt_histories", "supply_order_receipt_history",
                [true, false, false, false],
                [
                    ["date_add", false, false, false, "isDate", 0],
                    ["employee_firstname", false, false, false, "isName", 0],
                    ["employee_lastname", false, false, false, "isName", 0],
                    ["id_employee", false, true, false, "isUnsignedId", 0],
                    ["id_supply_order_detail", false, true, false, "isUnsignedId", 0],
                    ["id_supply_order_state", false, true, false, "isUnsignedId", 0],
                    ["quantity", false, true, false, "isUnsignedInt", 0]
                ]
            )
        )
    }
}

@Injectable()
export class SupplyOrderStateService extends AbstractResourceService<SupplyOrderState> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "supply_order_states", "supply_order_state",
                [true, false, false, false],
                [
                    ["name", true, true, false, "isGenericName", 128],
                    ["color", false, false, false, "isColor", 0],
                    ["delivery_note", false, false, false, "isBool", 0],
                    ["editable", false, false, false, "isBool", 0],
                    ["enclosed", false, false, false, "isBool", 0],
                    ["pending_receipt", false, false, false, "isBool", 0],
                    ["receipt_state", false, false, false, "isBool", 0]
                ]
            )
        )
    }
}

@Injectable()
export class TagService extends AbstractResourceService<Tag> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "tags", "tag",
                [true, true, true, true],
                [
                    ["id_lang", false, true, false, "isUnsignedId", 0],
                    ["name", false, true, false, "isGenericName", 32]
                ]
            )
        )
    }
}

@Injectable()
export class TaxService extends AbstractResourceService<Tax> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "taxes", "tax",
                [true, true, true, true],
                [
                    ["name", true, true, false, "isGenericName", 32],
                    ["active", false, false, false, "", 0],
                    ["deleted", false, false, false, "", 0],
                    ["rate", false, true, false, "isFloat", 0]
                ]
            )
        )
    }
}

@Injectable()
export class TaxRuleService extends AbstractResourceService<TaxRule> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "tax_rules", "tax_rule",
                [true, true, true, true],
                [
                    ["behavior", false, false, false, "isUnsignedInt", 0],
                    ["description", false, false, false, "isString", 0],
                    ["id_country", false, true, false, "isUnsignedId", 0],
                    ["id_state", false, false, false, "isUnsignedId", 0],
                    ["id_tax", false, true, false, "isUnsignedId", 0],
                    ["id_tax_rules_group", false, true, false, "isUnsignedId", 0],
                    ["zipcode_from", false, false, false, "isPostCode", 0],
                    ["zipcode_to", false, false, false, "isPostCode", 0]
                ]
            )
        )
    }
}

@Injectable()
export class TaxRuleGroupService extends AbstractResourceService<TaxRuleGroup> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "tax_rule_groups", "tax_rule_group",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["deleted", false, false, false, "isBool", 0],
                    ["name", false, true, false, "isGenericName", 64]
                ]
            )
        )
    }
}

@Injectable()
export class TranslatedConfigurationService extends AbstractResourceService<TranslatedConfiguration> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "translated_configurations", "translated_configuration",
                [true, true, true, true],
                [
                    ["value", true, false, false, "", 0],
                    ["date_add", false, false, false, "isDate", 0],
                    ["date_upd", false, false, false, "isDate", 0],
                    ["id_shop", false, false, false, "isUnsignedId", 0],
                    ["id_shop_group", false, false, false, "isUnsignedId", 0],
                    ["name", false, true, false, "isConfigName", 32]
                ]
            )
        )
    }
}

@Injectable()
export class WarehouseService extends AbstractResourceService<Warehouse> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "warehouses", "warehouse",
                [true, true, true, false],
                [
                    ["deleted", false, false, false, "", 0],
                    ["id_address", false, true, false, "isUnsignedId", 0],
                    ["id_currency", false, true, false, "isUnsignedId", 0],
                    ["id_employee", false, true, false, "isUnsignedId", 0],
                    ["management_type", false, true, false, "isStockManagement", 0],
                    ["name", false, true, false, "isString", 45],
                    ["reference", false, true, false, "isString", 45],
                    ["valuation", false, false, false, "", 0]
                ],
                [
                    ["carriers", "carrier", [
                            ["id", false]
                        ]
                    ],
                    ["shops", "shop", [
                            ["id", false],
                            ["name", false]
                        ]
                    ],
                    ["stocks", "stock", [
                            ["id", false]
                        ]
                    ]
                ]
            )
        )
    }
}

@Injectable()
export class WarehouseProductLocationService extends AbstractResourceService<WarehouseProductLocation> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "warehouse_product_locations", "warehouse_product_location",
                [true, false, false, false],
                [
                    ["id_product", false, true, false, "isUnsignedId", 0],
                    ["id_product_attribute", false, true, false, "isUnsignedId", 0],
                    ["id_warehouse", false, true, false, "isUnsignedId", 0],
                    ["location", false, false, false, "isReference", 64]
                ]
            )
        )
    }
}

@Injectable()
export class WeightRangeService extends AbstractResourceService<WeightRange> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "weight_ranges", "weight_range",
                [true, true, true, true],
                [
                    ["delimiter1", false, true, false, "isUnsignedFloat", 0],
                    ["delimiter2", false, true, false, "isUnsignedFloat", 0],
                    ["id_carrier", false, true, false, "isInt", 0]
                ]
            )
        )
    }
}

@Injectable()
export class ZoneService extends AbstractResourceService<Zone> {
	constructor(http: Http, configService: ApiConfigService) {
        super(http, configService, 
            new ResourceDescriptor(
                "zones", "zone",
                [true, true, true, true],
                [
                    ["active", false, false, false, "isBool", 0],
                    ["name", false, true, false, "isGenericName", 64]
                ]
            )
        )
    }
}
