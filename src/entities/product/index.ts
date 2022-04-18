import {categorySchema, ICategory} from "../category"
import {IVariation, variationSchema} from "../variation"
import {attributeSchema, AttributeType} from "../attribute";
import * as yup from "yup";
export { ProductCard } from "./ui/ProductCard";

export type ProductId = string


export type ProductNameType = {
    title: string
    subtitle: string
}

export type VisibilityType = 'published' | 'hidden'

export interface IVerifiedProduct {
    id: ProductId
    productName: ProductNameType
    attributes: Array<AttributeType>
    variations: Array<IVariation>
    visibility: VisibilityType
    categories: Array<ICategory>
}

export const productNameSchema = yup.object().shape({
    title: yup.string().min(2).max(50).required(),
    subtitle: yup.string().min(2).max(50).required(),
})

export const productSchema = yup.object().shape({
    id: yup.string().required(),
    productName: productNameSchema.required(),
    attributes: yup.array().of(attributeSchema).min(1),
    variations: yup.array().of(variationSchema),
    visibility: yup.string().matches(/(published|hidden)/),
    categories: yup.array().of(categorySchema).min(1)
})

export const verifyProduct = (product: any): IVerifiedProduct | null => {
    if(productSchema.validateSync(product)){
        return product
    }
    return null
}


export default {
    verifyProduct,
    productSchema,
    productNameSchema
}