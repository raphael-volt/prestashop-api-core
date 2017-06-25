export abstract class AbstractResource {
    id?: number
    associations?: {
        [name: string]: {
            [name: string]: string
        }[]
    }
}