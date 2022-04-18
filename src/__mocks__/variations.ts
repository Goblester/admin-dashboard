import {IVariation} from "../entities/variation";


export const mockVariations: Array<IVariation> = [
    {
        id: '1',
        attributes: [
            {id: '1', nameSlug: 'pa_overall_width', name: 'Габаритная ширина', value: '50 см', valueSlug: '50sm'},
            {id: '17', nameSlug: 'pa_sofa-type', name: 'Тип дивана', value: 'Угловой', valueSlug: 'corner-sofa'}
        ],
        price: {regular: 1000, percentDiscount: 0, sale: 0}
    },
    {id: '2', attributes: [], price: {regular: 1500, percentDiscount: 0, sale: 0}},
    {id: '3', attributes: [], price: {regular: 1500, percentDiscount: 0, sale: 0}},
    {id: '4', attributes: [], price: {regular: 1000, percentDiscount: 0, sale: 0}},
    {id: '5', attributes: [], price: {regular: 1000, percentDiscount: 10, sale: 0}},
    {id: '6', attributes: [], price: {regular: 1000, percentDiscount: 0, sale: 0}},
    {id: '7', attributes: [], price: {regular: 1000, percentDiscount: 0, sale: 500}},
    {id: '8', attributes: [], price: {regular: 1000, percentDiscount: 0, sale: 0}},
]