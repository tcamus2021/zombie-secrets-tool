import { Metadata } from "./metadata.type"

export type CmsResponse<T> = {
    data: T,
    meta: Metadata
}
