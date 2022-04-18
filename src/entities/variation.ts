import {attributeSchema, AttributeType} from "./attribute";
import {EntityId, PercentType, PriceType} from "../shared/shared-kernel";
import * as yup from "yup";
import IdCreatorAdapter from "../adapters/createId/idCreatorAdapter";

export type VariationPriceType = {
    regular: PriceType
    percentDiscount: PercentType
    sale: PriceType
}

export interface IVariation  {
    id: EntityId
    price: VariationPriceType
    attributes: Array<AttributeType>
}

const priceSchema = yup.object().shape({
    regular: yup.number().required(),
    percentDiscount: yup.number().required(),
    sale: yup.number().required()
})

export const variationSchema = yup.object().shape({
    id: yup.string().required().max(50),
    price: priceSchema.required(),
    attributes: yup.array().of(attributeSchema).min(1)
})



const arrayHasDuplicates = (array: Array<any>) => {
    return (new Set(array)).size !== array.length;
}

export const validateVariation = (variation: any): IVariation | null => {
    if(variationSchema.validateSync(variation) && !arrayHasDuplicates(variation?.attributes?.map((attr: AttributeType) => attr.valueSlug))){
        return variation as IVariation
    }
    return null
}

export const createVariation = (dependencies: { idCreator: IdCreatorAdapter}) => (attributes: Array<AttributeType> ): IVariation | null => {
    const {idCreator} = dependencies
    const variation = {
        id: idCreator.getId(),
        price: {regular: 0, percentDiscount: 0, sale: 0},
        attributes: attributes
    }
    return validateVariation(variation)
}