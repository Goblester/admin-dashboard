import {IVerifiedProduct} from "../entities/product";
import {v4 as uuid} from 'uuid';

export const products: Array<IVerifiedProduct> = [
    {
        id: '1',
        productName: {
            title: 'monk',
            subtitle: 'кресло-кровать'
        },
        attributes: [
            {id: '1', nameSlug: 'pa_overall_width', name: 'Габаритная ширина', value: '50 см', valueSlug: '50sm'},
            {id: '2', nameSlug: 'pa_overall_width', name: 'Габаритная ширина', value: '55 см', valueSlug: '55sm'},
            {id: '3', nameSlug: 'pa_overall_width', name: 'Габаритная ширина', value: '60 см', valueSlug: '60sm'},
            {id: '17', nameSlug: 'pa_sofa-type', name: 'Тип дивана', value: 'Угловой', valueSlug: 'corner-sofa'},
            {id: '18', nameSlug: 'pa_sofa-type', name: 'Тип дивана', value: 'Четырехместный', valueSlug: 'quadruple-sofa'},
        ],
        categories: [
            {
                id: '1',
                name: 'Диваны',
                slug: 'sofas',
            },
            {
                id: '2',
                name: 'Двуместные диваны',
                slug: 'double-sofas',
                parentId: ['1']
            }
        ],
        variations: [],
        visibility: 'published'
    },
    {
        id: '2',
        productName: {
            title: 'dublin',
            subtitle: '2-х местный диван'
        },
        attributes: [],
        categories: [],
        variations: [],
        visibility: 'published'
    },{
        id: '3',
        productName: {
            title: 'medini',
            subtitle: 'кресло-кровать'
        },
        attributes: [],
        categories: [],
        variations: [],
        visibility: 'hidden'
    },{
        id: '4',
        productName: {
            title: 'spin',
            subtitle: 'кресло дизайнерское, кожа'
        },
        attributes: [],
        categories: [],
        variations: [],
        visibility: 'published'
    },
]