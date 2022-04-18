import {MultipleAttributeType} from "../features/AddAttribute/ui";
import IdCreatorAdapter from "../adapters/createId/idCreatorAdapter";
import {createVariation, IVariation} from "../entities/variation";


const createVariations = (attributes: Array<MultipleAttributeType>, dependencies: { idCreator: IdCreatorAdapter }): Array<IVariation> => {
    const variableAttributes = attributes.filter(attr => attr.options.length > 1)
    const borderArray = []
    let variationsAmount = 1
    for (let i = 0; i < variableAttributes.length; i++) {
        borderArray.push(variableAttributes[i].options.length)
        variationsAmount = variationsAmount * variableAttributes[i].options.length
    }
    const variations: Array<IVariation> = []
    for (let i = 1; i <= variationsAmount; i++) {
        const indexArray: Array<number> = []
        let k = i
        let j = borderArray.length - 1;
        do {
            const ind = k % borderArray[j]
            k = Math.floor(k / borderArray[j])
            indexArray.unshift(ind)
            j--;
        } while (k >= borderArray[j] || indexArray.length < borderArray.length)
        const attributes = borderArray.map((index, j) => variableAttributes[j].options[indexArray[j]])
        // entities logic insert dependencies
        const newVariation = createVariation(dependencies)(attributes)
        if (newVariation) {
            variations.push(newVariation)
        }
    }
    return variations
}



export default createVariations