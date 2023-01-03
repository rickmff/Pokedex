export function toQueryParams (object: any) {
    return new URLSearchParams(object).toString()
}