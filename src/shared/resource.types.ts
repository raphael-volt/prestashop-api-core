
import { AbstractResource } from '../../core/abstract-resource'

export interface Address extends AbstractResource {
    address1?: string
    address2?: string
    alias?: string
    city?: string
    company?: string
    date_add?: Date
    date_upd?: Date
    deleted?: boolean
    dni?: string
    firstname?: string
    id_country?: number
    id_customer?: number | null
    id_manufacturer?: number | null
    id_state?: number | null
    id_supplier?: number | null
    id_warehouse?: number | null
    lastname?: string
    other?: string
    phone?: string
    phone_mobile?: string
    postcode?: string
    vat_number?: string
}

export interface Carrier extends AbstractResource {
    delay?: string
    active?: boolean
    deleted?: boolean
    external_module_name?: string
    grade?: string
    id_reference?: string
    id_tax_rules_group?: string
    is_free?: boolean
    is_module?: boolean
    max_depth?: string
    max_height?: string
    max_weight?: number
    max_width?: string
    name?: string
    need_range?: string
    position?: string
    range_behavior?: boolean
    shipping_external?: string
    shipping_handling?: boolean
    shipping_method?: string
    url?: string
}

export interface CartRule extends AbstractResource {
    name?: string
    active?: boolean
    carrier_restriction?: boolean
    cart_rule_restriction?: boolean
    code?: string
    country_restriction?: boolean
    date_add?: Date
    date_from?: Date
    date_to?: Date
    date_upd?: Date
    description?: string
    free_shipping?: boolean
    gift_product?: number
    gift_product_attribute?: number
    group_restriction?: boolean
    highlight?: boolean
    id_customer?: number
    minimum_amount?: number
    minimum_amount_currency?: number
    minimum_amount_shipping?: boolean
    minimum_amount_tax?: boolean
    partial_use?: boolean
    priority?: string
    product_restriction?: boolean
    quantity?: string
    quantity_per_user?: string
    reduction_amount?: number
    reduction_currency?: number
    reduction_percent?: string
    reduction_product?: number
    reduction_tax?: boolean
    shop_restriction?: boolean
}

export interface Cart extends AbstractResource {
    allow_seperated_package?: boolean
    date_add?: Date
    date_upd?: Date
    delivery_option?: string
    gift?: boolean
    gift_message?: string
    id_address_delivery?: number
    id_address_invoice?: number
    id_carrier?: number
    id_currency?: number
    id_customer?: number
    id_guest?: number
    id_lang?: number
    id_shop?: number
    id_shop_group?: number
    mobile_theme?: boolean
    recyclable?: boolean
    secure_key?: string

    associations?: {
        cart_rows: {
            id_address_delivery,
            id_product,
            id_product_attribute,
            quantity
        }[]
    }
}

export interface Category extends AbstractResource {
    description?: string
    link_rewrite?: string
    meta_description?: string
    meta_keywords?: string
    meta_title?: string
    name?: string
    active?: boolean
    date_add?: Date
    date_upd?: Date
    id_parent?: string
    id_shop_default?: number
    is_root_category?: boolean
    level_depth?: string
    nb_products_recursive?: string
    position?: string

    associations?: {
        categories: {
            id?
        }[],
        products: {
            id?
        }[]
    }
}

export interface Combination extends AbstractResource {
    available_date?: string
    default_on?: boolean
    ean13?: number
    ecotax?: string
    id_product?: number
    location?: string
    minimal_quantity?: number
    price?: string
    quantity?: number
    reference?: string
    supplier_reference?: string
    unit_price_impact?: string
    upc?: number
    weight?: number
    wholesale_price?: string

    associations?: {
        images: {
            id?
        }[],
        product_option_values: {
            id?
        }[]
    }
}

export interface Configuration extends AbstractResource {
    date_add?: Date
    date_upd?: Date
    id_shop?: number
    id_shop_group?: number
    name?: string
    value?: string
}

export interface Contact extends AbstractResource {
    description?: string
    name?: string
    customer_service?: boolean
    email?: string
}

export interface Content extends AbstractResource {
    content?: string
    link_rewrite?: string
    meta_description?: string
    meta_keywords?: string
    meta_title?: string
    active?: string
    id_cms_category?: string
    indexation?: string
    position?: string
}

export interface Country extends AbstractResource {
    name?: string
    active?: boolean
    call_prefix?: number
    contains_states?: boolean
    display_tax_label?: boolean
    id_currency?: number
    id_zone?: number
    iso_code?: string
    need_identification_number?: boolean
    need_zip_code?: boolean
    zip_code_format?: string
}

export interface Currency extends AbstractResource {
    active?: boolean
    blank?: number
    conversion_rate?: number
    decimals?: boolean
    deleted?: boolean
    format?: number
    iso_code?: string
    iso_code_num?: number
    name?: string
    sign?: string
}

export interface CustomerMessage extends AbstractResource {
    date_add?: Date
    date_upd?: Date
    file_name?: string
    id_customer_thread?: string
    id_employee?: number
    ip_address?: string
    message?: string
    private?: string
    read?: boolean
    user_agent?: string
}

export interface CustomerThread extends AbstractResource {
    date_add?: Date
    date_upd?: Date
    email?: string
    id_contact?: number
    id_customer?: number
    id_lang?: number
    id_order?: number
    id_product?: number
    id_shop?: number
    status?: string
    token?: string

    associations?: {
        customer_messages: {
            id?
        }[]
    }
}

export interface Customer extends AbstractResource {
    active?: boolean
    ape?: string
    birthday?: Date
    company?: string
    date_add?: Date
    date_upd?: Date
    deleted?: boolean
    email?: string
    firstname?: string
    id_default_group?: string
    id_gender?: number
    id_lang?: number
    id_risk?: string
    id_shop?: number
    id_shop_group?: number
    ip_registration_newsletter?: string
    is_guest?: boolean
    last_passwd_gen?: string
    lastname?: string
    max_payment_days?: string
    newsletter?: boolean
    newsletter_date_add?: string
    note?: string
    optin?: boolean
    outstanding_allow_amount?: number
    passwd?: string
    secure_key?: string
    show_public_prices?: boolean
    siret?: string
    website?: string

    associations?: {
        groups: {
            id?
        }[]
    }
}

export interface Customization extends AbstractResource {
    id_address_delivery?: number
    id_cart?: number
    id_product?: number
    id_product_attribute?: number
    in_cart?: boolean
    quantity?: number
    quantity_refunded?: number
    quantity_returned?: number

    associations?: {
        customized_data_images: {
            id_customization_field?,
            value?
        }[],
        customized_data_text_fields: {
            id_customization_field,
            value?
        }[]
    }
}

export interface Delivery extends AbstractResource {
    id_carrier?: number
    id_range_price?: number
    id_range_weight?: number
    id_shop?: string
    id_shop_group?: string
    id_zone?: number
    price?: string
}

export interface Employee extends AbstractResource {
    active?: boolean
    bo_color?: string
    bo_css?: string
    bo_menu?: boolean
    bo_theme?: string
    bo_width?: string
    default_tab?: number
    email?: string
    firstname?: string
    id_lang?: string
    id_last_customer?: string
    id_last_customer_message?: string
    id_last_order?: string
    id_profile?: number
    last_passwd_gen?: string
    lastname?: string
    optin?: boolean
    passwd?: string
    preselect_date_range?: string
    stats_compare_from?: Date
    stats_compare_option?: string
    stats_compare_to?: Date
    stats_date_from?: Date
    stats_date_to?: Date
}

export interface Group extends AbstractResource {
    name?: string
    date_add?: Date
    date_upd?: Date
    price_display_method?: string
    reduction?: number
    show_prices?: boolean
}

export interface Guest extends AbstractResource {
    accept_language?: string
    adobe_director?: boolean
    adobe_flash?: boolean
    apple_quicktime?: boolean
    id_customer?: number
    id_operating_system?: number
    id_web_browser?: number
    javascript?: boolean
    mobile_theme?: boolean
    real_player?: boolean
    screen_color?: number
    screen_resolution_x?: number
    screen_resolution_y?: number
    sun_java?: boolean
    windows_media?: boolean
}

export interface ImageType extends AbstractResource {
    categories?: boolean
    height?: number
    manufacturers?: boolean
    name?: string
    products?: boolean
    scenes?: boolean
    stores?: boolean
    suppliers?: boolean
    width?: number
}

export interface Language extends AbstractResource {
    active?: boolean
    date_format_full?: string
    date_format_lite?: string
    is_rtl?: boolean
    iso_code?: string
    language_code?: string
    name?: string
}

export interface Manufacturer extends AbstractResource {
    description?: string
    meta_description?: string
    meta_keywords?: string
    meta_title?: string
    short_description?: string
    active?: string
    date_add?: string
    date_upd?: string
    link_rewrite?: string
    name?: string

    associations?: {
        addresses: {
            id?
        }[]
    }
}

export interface OrderCarrier extends AbstractResource {
    date_add?: Date
    id_carrier?: number
    id_order?: number
    id_order_invoice?: number
    shipping_cost_tax_excl?: number
    shipping_cost_tax_incl?: number
    tracking_number?: string
    weight?: number
}

export interface OrderDetail extends AbstractResource {
    discount_quantity_applied?: number
    download_deadline?: string
    download_hash?: string
    download_nb?: number
    ecotax?: number
    ecotax_tax_rate?: number
    group_reduction?: number
    id_order?: number
    id_order_invoice?: number
    id_shop?: number
    id_tax_rules_group?: number
    id_warehouse?: number
    original_product_price?: string
    original_wholesale_price?: string
    product_attribute_id?: number
    product_ean13?: number
    product_id?: number
    product_name?: string
    product_price?: string
    product_quantity?: number
    product_quantity_discount?: number
    product_quantity_in_stock?: number
    product_quantity_refunded?: string
    product_quantity_reinjected?: string
    product_quantity_return?: string
    product_reference?: string
    product_supplier_reference?: string
    product_upc?: number
    product_weight?: number
    purchase_supplier_price?: string
    reduction_amount?: string
    reduction_amount_tax_excl?: string
    reduction_amount_tax_incl?: string
    reduction_percent?: number
    tax_computation_method?: number
    total_price_tax_excl?: string
    total_price_tax_incl?: string
    total_shipping_price_tax_excl?: string
    total_shipping_price_tax_incl?: string
    unit_price_tax_excl?: string
    unit_price_tax_incl?: string

    associations?: {
        taxes: {
            id?
        }[]
    }
}

export interface OrderCartRule extends AbstractResource {
    free_shipping?: boolean
    id_cart_rule?: number
    id_order?: number
    id_order_invoice?: number
    name?: string
    value?: number
    value_tax_excl?: number
}

export interface OrderHistory extends AbstractResource {
    date_add?: Date
    id_employee?: number
    id_order?: number
    id_order_state?: number
}

export interface OrderInvoice extends AbstractResource {
    date_add?: Date
    delivery_address?: string
    delivery_date?: string
    delivery_number?: number
    id_order?: number
    invoice_address?: string
    note?: string
    number?: number
    shipping_tax_computation_method?: string
    shop_address?: string
    total_discount_tax_excl?: string
    total_discount_tax_incl?: string
    total_paid_tax_excl?: string
    total_paid_tax_incl?: string
    total_products?: string
    total_products_wt?: string
    total_shipping_tax_excl?: string
    total_shipping_tax_incl?: string
    total_wrapping_tax_excl?: string
    total_wrapping_tax_incl?: string
}

export interface OrderPayment extends AbstractResource {
    amount?: string
    card_brand?: string
    card_expiration?: string
    card_holder?: string
    card_number?: string
    conversion_rate?: number
    date_add?: Date
    id_currency?: number
    order_reference?: string
    payment_method?: string
    transaction_id?: string
}

export interface OrderSlip extends AbstractResource {
    amount?: number
    conversion_rate?: number
    date_add?: Date
    date_upd?: Date
    id_customer?: number
    id_order?: number
    order_slip_type?: number
    partial?: string
    shipping_cost?: string
    shipping_cost_amount?: number
    total_products_tax_excl?: number
    total_products_tax_incl?: number
    total_shipping_tax_excl?: number
    total_shipping_tax_incl?: number

    associations?: {
        order_slip_details: {
            amount_tax_excl,
            amount_tax_incl,
            id?,
            id_order_detail,
            product_quantity
        }[]
    }
}

export interface OrderState extends AbstractResource {
    name?: string
    template?: string
    color?: string
    deleted?: boolean
    delivery?: boolean
    hidden?: boolean
    invoice?: boolean
    logable?: boolean
    module_name?: string
    paid?: boolean
    pdf_delivery?: boolean
    pdf_invoice?: boolean
    send_email?: boolean
    shipped?: boolean
    unremovable?: boolean
}

export interface Order extends AbstractResource {
    carrier_tax_rate?: number
    conversion_rate?: number
    current_state?: number
    date_add?: Date
    date_upd?: Date
    delivery_date?: string
    delivery_number?: string
    gift?: boolean
    gift_message?: string
    id_address_delivery?: number
    id_address_invoice?: number
    id_carrier?: number
    id_cart?: number
    id_currency?: number
    id_customer?: number
    id_lang?: number
    id_shop?: number
    id_shop_group?: number
    invoice_date?: string
    invoice_number?: string
    mobile_theme?: boolean
    module?: string
    payment?: string
    recyclable?: boolean
    reference?: string
    round_mode?: number
    round_type?: number
    secure_key?: string
    shipping_number?: string
    total_discounts?: string
    total_discounts_tax_excl?: string
    total_discounts_tax_incl?: string
    total_paid?: string
    total_paid_real?: string
    total_paid_tax_excl?: string
    total_paid_tax_incl?: string
    total_products?: string
    total_products_wt?: string
    total_shipping?: string
    total_shipping_tax_excl?: string
    total_shipping_tax_incl?: string
    total_wrapping?: string
    total_wrapping_tax_excl?: string
    total_wrapping_tax_incl?: string
    valid?: string

    associations?: {
        order_rows: {
            id?,
            product_attribute_id,
            product_ean13?,
            product_id,
            product_name?,
            product_price?,
            product_quantity,
            product_reference?,
            product_upc?,
            unit_price_tax_excl?,
            unit_price_tax_incl?
        }[]
    }
}

export interface PriceRange extends AbstractResource {
    delimiter1?: number
    delimiter2?: number
    id_carrier?: number
}

export interface CustomizationField extends AbstractResource {
    name?: string
    id_product?: number
    required?: boolean
    type?: number
}

export interface ProductFeatureValue extends AbstractResource {
    value?: string
    custom?: boolean
    id_feature?: number
}

export interface ProductFeature extends AbstractResource {
    name?: string
    position?: number
}

export interface ProductOptionValue extends AbstractResource {
    name?: string
    color?: string
    id_attribute_group?: number
    position?: number
}

export interface ProductOption extends AbstractResource {
    name?: string
    public_name?: string
    group_type?: string
    is_color_group?: boolean
    position?: number

    associations?: {
        product_option_values: {
            id?
        }[]
    }
}

export interface ProductSupplier extends AbstractResource {
    id_currency?: number
    id_product?: number
    id_product_attribute?: number
    id_supplier?: number
    product_supplier_price_te?: string
    product_supplier_reference?: string
}

export interface Product extends AbstractResource {
    available_later?: string
    available_now?: string
    description?: string
    description_short?: string
    link_rewrite?: string
    meta_description?: string
    meta_keywords?: string
    meta_title?: string
    name?: string
    active?: boolean
    additional_shipping_cost?: string
    advanced_stock_management?: boolean
    available_date?: string
    available_for_order?: boolean
    cache_default_attribute?: string
    cache_has_attachments?: boolean
    cache_is_pack?: boolean
    condition?: string
    customizable?: string
    date_add?: Date
    date_upd?: Date
    depth?: number
    ean13?: number
    ecotax?: string
    height?: number
    id_category_default?: number
    id_default_combination?: string
    id_default_image?: string
    id_manufacturer?: number
    id_product_redirected?: number
    id_shop_default?: number
    id_supplier?: number
    id_tax_rules_group?: number
    indexed?: boolean
    is_virtual?: boolean
    location?: string
    manufacturer_name?: string
    minimal_quantity?: string
    new?: string
    on_sale?: boolean
    online_only?: boolean
    pack_stock_type?: string
    position_in_category?: string
    price?: string
    quantity?: string
    quantity_discount?: boolean
    redirect_type?: string
    reference?: string
    show_price?: boolean
    supplier_reference?: string
    text_fields?: string
    type?: string
    unit_price_ratio?: string
    unity?: string
    upc?: number
    uploadable_files?: string
    visibility?: string
    weight?: number
    wholesale_price?: string
    width?: number

    associations?: {
        accessories: {
            id
        }[],
        categories: {
            id
        }[],
        combinations: {
            id
        }[],
        images: {
            id?
        }[],
        product_bundle: {
            id,
            quantity?
        }[],
        product_features: {
            id,
            id_feature_value
        }[],
        product_option_values: {
            id
        }[],
        stock_availables: {
            id,
            id_product_attribute
        }[],
        tags: {
            id
        }[]
    }
}

export interface ShopGroup extends AbstractResource {
    active?: boolean
    deleted?: boolean
    name?: string
    share_customer?: boolean
    share_order?: boolean
    share_stock?: boolean
}

export interface ShopUrl extends AbstractResource {
    active?: boolean
    domain?: string
    domain_ssl?: string
    id_shop?: string
    main?: boolean
    physical_uri?: string
    virtual_uri?: string
}

export interface Shop extends AbstractResource {
    active?: boolean
    deleted?: boolean
    id_category?: string
    id_shop_group?: string
    id_theme?: string
    name?: string
}

export interface SpecificPriceRule extends AbstractResource {
    from?: string
    from_quantity?: string
    id_country?: number
    id_currency?: number
    id_group?: number
    id_shop?: number
    name?: string
    price?: string
    reduction?: string
    reduction_tax?: boolean
    reduction_type?: string
    to?: string
}

export interface SpecificPrice extends AbstractResource {
    from?: string
    from_quantity?: string
    id_cart?: number
    id_country?: number
    id_currency?: number
    id_customer?: number
    id_group?: number
    id_product?: number
    id_product_attribute?: number
    id_shop?: number
    id_shop_group?: number
    id_specific_price_rule?: number
    price?: string
    reduction?: string
    reduction_tax?: boolean
    reduction_type?: string
    to?: string
}

export interface State extends AbstractResource {
    active?: boolean
    id_country?: number
    id_zone?: number
    iso_code?: string
    name?: string
}

export interface StockAvailable extends AbstractResource {
    depends_on_stock?: boolean
    id_product?: number
    id_product_attribute?: number
    id_shop?: number
    id_shop_group?: number
    out_of_stock?: number
    quantity?: number
}

export interface StockMovementReason extends AbstractResource {
    name?: string
    date_add?: Date
    date_upd?: Date
    deleted?: string
    sign?: string
}

export interface StockMvt extends AbstractResource {
    product_name?: string
    current_wa?: string
    date_add?: Date
    ean13?: string
    id_currency?: string
    id_employee?: number
    id_order?: number
    id_product?: string
    id_product_attribute?: string
    id_stock?: number
    id_stock_mvt_reason?: number
    id_supply_order?: number
    id_warehouse?: string
    last_wa?: string
    management_type?: string
    physical_quantity?: string
    price_te?: string
    reference?: string
    sign?: number
    upc?: string
}

export interface Stock extends AbstractResource {
    ean13?: number
    id_product?: number
    id_product_attribute?: number
    id_warehouse?: number
    physical_quantity?: string
    price_te?: string
    real_quantity?: string
    reference?: string
    upc?: number
    usable_quantity?: number
}

export interface Store extends AbstractResource {
    active?: boolean
    address1?: string
    address2?: string
    city?: string
    date_add?: Date
    date_upd?: Date
    email?: string
    fax?: string
    hours?: string
    id_country?: number
    id_state?: number | null
    latitude?: string
    longitude?: string
    name?: string
    note?: string
    phone?: string
    postcode?: string
}

export interface Supplier extends AbstractResource {
    description?: string
    meta_description?: string
    meta_keywords?: string
    meta_title?: string
    active?: string
    date_add?: Date
    date_upd?: Date
    link_rewrite?: string
    name?: string
}

export interface SupplyOrderDetail extends AbstractResource {
    discount_rate?: number
    discount_value_te?: string
    ean13?: number
    exchange_rate?: number
    id_product?: number
    id_product_attribute?: number
    id_supply_order?: number
    name?: string
    price_te?: string
    price_ti?: string
    price_with_discount_te?: string
    price_with_order_discount_te?: string
    quantity_expected?: string
    quantity_received?: string
    reference?: string
    supplier_reference?: string
    tax_rate?: number
    tax_value?: string
    tax_value_with_order_discount?: number
    unit_price_te?: string
    upc?: number
}

export interface SupplyOrderHistory extends AbstractResource {
    date_add?: Date
    employee_firstname?: string
    employee_lastname?: string
    id_employee?: number
    id_state?: number
    id_supply_order?: number
}

export interface SupplyOrderReceiptHistory extends AbstractResource {
    date_add?: Date
    employee_firstname?: string
    employee_lastname?: string
    id_employee?: number
    id_supply_order_detail?: number
    id_supply_order_state?: number
    quantity?: string
}

export interface SupplyOrderState extends AbstractResource {
    name?: string
    color?: string
    delivery_note?: boolean
    editable?: boolean
    enclosed?: boolean
    pending_receipt?: boolean
    receipt_state?: boolean
}

export interface SupplyOrder extends AbstractResource {
    date_add?: Date
    date_delivery_expected?: Date
    date_upd?: Date
    discount_rate?: number
    discount_value_te?: string
    id_currency?: number
    id_lang?: number
    id_supplier?: number
    id_supply_order_state?: number
    id_warehouse?: number
    is_template?: boolean
    reference?: string
    supplier_name?: string
    total_tax?: string
    total_te?: string
    total_ti?: string
    total_with_discount_te?: string

    associations?: {
        supply_order_details: {
            id?,
            id_product?,
            id_product_attribute?,
            product_name?,
            supplier_reference?
        }[]
    }
}

export interface Tag extends AbstractResource {
    id_lang?: number
    name?: string
}

export interface TaxRuleGroup extends AbstractResource {
    active?: boolean
    date_add?: Date
    date_upd?: Date
    deleted?: boolean
    name?: string
}

export interface TaxRule extends AbstractResource {
    behavior?: string
    description?: string
    id_country?: number
    id_state?: number
    id_tax?: number
    id_tax_rules_group?: number
    zipcode_from?: string
    zipcode_to?: string
}

export interface Tax extends AbstractResource {
    name?: string
    active?: string
    deleted?: string
    rate?: number
}

export interface TranslatedConfiguration extends AbstractResource {
    value?: string
    date_add?: Date
    date_upd?: Date
    id_shop?: number
    id_shop_group?: number
    name?: string
}

export interface WarehouseProductLocation extends AbstractResource {
    id_product?: number
    id_product_attribute?: number
    id_warehouse?: number
    location?: string
}

export interface Warehouse extends AbstractResource {
    deleted?: string
    id_address?: number
    id_currency?: number
    id_employee?: number
    management_type?: string
    name?: string
    reference?: string
    valuation?: string

    associations?: {
        carriers: {
            id?
        }[],
        shops: {
            id?,
            name?
        }[],
        stocks: {
            id?
        }[]
    }
}

export interface WeightRange extends AbstractResource {
    delimiter1?: number
    delimiter2?: number
    id_carrier?: number
}

export interface Zone extends AbstractResource {
    active?: boolean
    name?: string
}
