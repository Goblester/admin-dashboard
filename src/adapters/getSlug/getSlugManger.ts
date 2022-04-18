import GetSlugAdapter from "./getSlugAdapter";
import slugify from "slugify";


const getSlugManager: GetSlugAdapter = {
    getSlug: (value: string) =>{
        if(!value) return ''
        return slugify(value)
    }
}


export default getSlugManager