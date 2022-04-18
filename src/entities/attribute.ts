import {EntityId} from "../shared/shared-kernel";
import * as yup from "yup";


export type AttributeType = {
    id: EntityId
    name: string
    nameSlug: string
    value: string
    valueSlug: string
}

export const attributeSchema = yup.object().shape({
    id: yup.string().required().max(50),
    name: yup.string().required().max(50),
    nameSlug: yup.string().required().max(50),
    value: yup.string().required().max(50),
    valueSlug: yup.string().required().max(50)
})

export const validateAttribute = (attribute: any): AttributeType | null => {
    if(attributeSchema.validateSync(attribute)){
        return attribute
    }

    return null
}
