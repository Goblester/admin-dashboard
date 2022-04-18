import IdCreatorAdapter from "./idCreatorAdapter";
import {v4} from "uuid";


const idCreatorManager: IdCreatorAdapter = {
    getId: v4
}

export default idCreatorManager