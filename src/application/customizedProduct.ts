import {EntityId} from "../shared/shared-kernel";
import {IVerifiedProduct, productNameSchema, ProductNameType, productSchema, verifyProduct} from "../entities/product";
import {ICategory} from "../entities/category";
import {MultipleAttributeType} from "../features/AddAttribute/ui";
import {IVariation, variationSchema} from "../entities/variation";
import * as yup from "yup";
import {attributeSchema, AttributeType} from "../entities/attribute";
import createVariations from "./createVariations";
import idCreatorManager from "../adapters/createId";
import {products} from "../__mocks__/_products";


export interface ICustomizedProduct {
    id: EntityId
    productName: ProductNameType
    categories: Array<ICategory>
    attributes: Array<MultipleAttributeType>
    variations: Array<IVariation>
    hidden: boolean
}


const multipleAttributeSchema = yup.object().shape({
    name: yup.string(),
    nameSlug: yup.string(),
    options: yup.array().min(1).of(attributeSchema)
})


export const customizedProductSchema = yup.object().shape({
    id: yup.string().required(),
    productName: productNameSchema.required(),
    hidden: yup.boolean().required(),
    categories: yup.array().min(1),
    attributes: yup.array().min(1).of(multipleAttributeSchema),
    variations: yup.array().min(1).of(variationSchema)
});


const fetchProduct = (id: EntityId): Promise<any | null> => {
    return new Promise((res) => {
        setTimeout(() => {
            const product = products.find(product => product.id === id) || null
            res(product)
        }, 1000)
    })
}
const mapProductToCustomized = (product: IVerifiedProduct | null): ICustomizedProduct | null => {
    if (!product) return null
    const attributes = product.attributes.reduce((variableAttributes: Array<MultipleAttributeType>, attribute) => {
        if (!variableAttributes.some(varAttr => attribute.nameSlug === varAttr.nameSlug)) {
            const name = attribute.name
            const nameSlug = attribute.nameSlug
            return [...variableAttributes, {name, nameSlug, options: [attribute]}]
        } else {
            return variableAttributes.map(varAttr => varAttr.nameSlug === attribute.nameSlug ? {
                ...varAttr,
                options: [...varAttr.options, attribute]
            } : varAttr)
        }
    }, [])

    const hidden = product.visibility === 'hidden'
    const variations = createVariations(attributes, {idCreator: idCreatorManager})
    return {
        id: product.id,
        productName: product.productName,
        categories: product.categories,
        attributes,
        variations,
        hidden
    }
}

const mapCustomizedProductToProduct = (customizedProduct: ICustomizedProduct): IVerifiedProduct | null => {
    const {
        id,
        productName,
        categories,
        attributes,
        variations,
        hidden
    } = customizedProduct

    const productAttributes = attributes.reduce((acc: Array<AttributeType>, attribute) => {
        return [...acc, ...attribute.options]
    }, [])

    const product = {
        id,
        productName,
        categories,
        variations,
        visibility: hidden ? 'hidden' : 'published',
        attributes: productAttributes
    }

    if (productSchema.validateSync(product)) {
        return product as IVerifiedProduct
    }

    return null

}

export const getCustomizedProduct = (productId: EntityId): Promise<ICustomizedProduct | null> => {
    debugger
    return fetchProduct(productId).then((product) => {
        debugger
        if (!product) return null
        return mapProductToCustomized(verifyProduct(product))
    })
}