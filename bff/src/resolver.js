import { getCustomer } from "./data-sources/get-customer"

export const resolver = {
    customer:  ()=>{ return {
        id: "1",
        name: "Gay",
        email: "LOL"
    }}
}