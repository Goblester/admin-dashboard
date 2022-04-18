import * as yup from 'yup';
import {EntityId} from "../shared/shared-kernel";


export interface ICategory {
    id: EntityId
    parentId?: Array<EntityId>
    name: string
    slug: string
}

export const categorySchema = yup.object().shape({
    id: yup.string().required(),
    parentId: yup.array().of(yup.string()),
    name: yup.string().required(),
    slug: yup.string().required()
})

export const validateCategory = (category: any): ICategory | null => {
    if(categorySchema.validateSync(category)){
        return category as ICategory
    }
    return null
}