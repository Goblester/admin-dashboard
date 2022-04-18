import React from "react";
import {IVariation} from "../../entities/variation";
import Grid from '@mui/material/Grid';
import {EditVariation} from "../../features/EditVariation/ui";
import AccordionLayout from "../../shared/UI/AccordionLayout";

type VariationsProps = {
    variations: Array<IVariation>
}

export const VariationList: React.FC<VariationsProps> = (props) => {
    const {
        variations
    } = props



    return (
        <Grid item xs={12}>
            {variations.map((variation: IVariation, index: number) => {
                return <AccordionLayout name={variation.id}>
                    <EditVariation index={index}/>
                </AccordionLayout>
            })}
        </Grid>
    )
}