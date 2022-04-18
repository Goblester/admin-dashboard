import * as yup from 'yup';

export type EntityId = string

export type PriceType = number

export const priceSchema = yup.number().moreThan(0)

export const percentSchema = yup.number().moreThan(0)

export type PercentType = number