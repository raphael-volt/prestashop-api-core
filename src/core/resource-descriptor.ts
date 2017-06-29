enum PROPERIES_KEYS {
    NAME,
    TRANSLATABLE,
    REQUIRED,
    READONLY,
    VALIDATOR_METHOD,
    VALIDATOR_MAX
}

enum METHODSS_KEYS {
    GET,
    POST,
    PUT,
    DELETE
}

enum ASSOCIATIONS_KEYS {
    NAME,
    NODE_NAME,
    PROPERTIES
}

export type MethodDescriptor = [boolean, boolean, boolean, boolean]

export type ResourceProperty = [string, boolean, boolean, boolean, string, number]

export type AssociationNodeProperty = [string, boolean]
export type Association = [string, string, AssociationNodeProperty[]]


export type AssociationsDescriptor = Association[]

export class ResourceDescriptor {

    constructor(
        protected readonly _resource: string,
        protected readonly _nodeName: string,
        protected readonly _methods: MethodDecorator,
        protected readonly _properties: ResourceProperty[],
        protected readonly _associations?: AssociationsDescriptor
    ) {

    }
    
    get ressource(): string {
        return this._resource
    }

    get nodeName(): string {
        return this._nodeName
    }

    get allowGet(): boolean {
        return this._methods[METHODSS_KEYS.GET]
    }

    get allowPost(): boolean {
        return this._methods[METHODSS_KEYS.POST]
    }

    get allowPut(): boolean {
        return this._methods[METHODSS_KEYS.PUT]
    }
    get allowDelete(): boolean {
        return this._methods[METHODSS_KEYS.DELETE]
    }

    get associations(): AssociationsDescriptor {
        return this._associations
    }

    get associationsNames(): string[] {
        let names: string[] = []
        for (let name of this._associations)
            names.push(name[ASSOCIATIONS_KEYS.NAME])
        return names
    }

    getAssociation(name): Association {
        for (const association of this._associations)
            if (association[ASSOCIATIONS_KEYS.NAME] == name)
                return association
        return undefined
    }
    
    getAssociationNodeName(association: Association): string {
        return association[ASSOCIATIONS_KEYS.NODE_NAME]
    }

    getAssociationNodeProperties(association: Association): AssociationNodeProperty[] {
        return association[ASSOCIATIONS_KEYS.PROPERTIES]
    }

    getProperty(name: string): PropertyDescriptor {
        for(const property of this._properties) {
            if(property[ASSOCIATIONS_KEYS.NAME] == name)
                return property
        }
        return undefined
    }

    isReadOnly(property: ResourceProperty): boolean {
        return property[PROPERIES_KEYS.READONLY]
    }

    isTranslatable(property: ResourceProperty): boolean {
        return property[PROPERIES_KEYS.TRANSLATABLE]
    }

    isRequired(property: ResourceProperty): boolean {
        return property[PROPERIES_KEYS.REQUIRED]
    }

    getValidatorMethod(property: ResourceProperty): string {
        return property[PROPERIES_KEYS.VALIDATOR_METHOD]
    }

    getValidatorMax(property: ResourceProperty): number {
        return property[PROPERIES_KEYS.VALIDATOR_MAX]
    }
}
