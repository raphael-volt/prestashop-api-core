import { AbstractResource } from "./abstract-resource";
export abstract class AbstractResourceDescriptor<T extends AbstractResource> {
    constructor(
        protected readonly _resource: string,
        protected readonly _nodeName: string,
        protected readonly _get: boolean,
        protected readonly _post: boolean,
        protected readonly _put: boolean,
        protected readonly _delete: boolean,
        protected readonly _properties: {
            [name: string]: [boolean, boolean, boolean, string, number]
        },
        protected readonly _associations?: {
            [name: string]: {
                [nodeName: string]: {
                    [property: string]: boolean
                }
            }
        }
    ) {

    }
}