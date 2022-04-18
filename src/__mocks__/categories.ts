import {ICategory} from "../entities/category";


export const mockCategories: Array<ICategory> = [
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
    },
    {
        id: '3',
        name: 'трехместные диваны',
        slug: 'triple-sofas',
        parentId: ['1']
    },
    {
        id: '4',
        name: 'Столы',
        slug: 'Tables',
    },
    {
        id: '5',
        name: 'Кровати',
        slug: 'beds',
    },
    {
        id: '6',
        name: 'Детские кровати',
        slug: 'children-beds',
        parentId: ['5']
    },
    {
        id: '7',
        name: 'Обеденные столы',
        slug: 'lunch-tables',
        parentId: ['4']
    },
    {
        id: '8',
        name: 'Пуфы',
        slug: 'poufs',
    },
    {
        id: '9',
        name: 'В наличии',
        slug: 'stock',
    },
    {
        id: '10',
        name: 'Модульные диваны',
        slug: 'modular-sofas',
        parentId: ['1']
    },
    {
        id: '11',
        name: 'Стулья',
        slug: 'chairs',
    },
    {
        id: '12',
        name: 'Кресла',
        slug: 'arm-chairs',
    },
]