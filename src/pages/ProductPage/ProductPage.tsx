import React, {memo, useEffect, useState} from "react";
import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box/Box";
import {Form, Formik} from "formik";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import {Checkbox, FormControlLabel} from "@mui/material";
import Button from "@mui/material/Button/Button";
import {mockAttributes} from "../../__mocks__/attributes";
import {mockCategories} from "../../__mocks__/categories";
import {VariationList} from "../../widgets/VariationList/ui";
import idCreatorManager from "../../adapters/createId";
import TabsWrapper from "../../shared/UI/Tabs";
import {useParams} from "react-router-dom";
import createVariations from "../../application/createVariations";
import {appActions} from "../../app/appReducer";
import {useAppDispatch} from "../../app/hooks";
import {customizedProductSchema, getCustomizedProduct, ICustomizedProduct} from "../../application/customizedProduct";
import SelectProductName from "../../features/SelectProductName";
import SelectCategory from "../../features/SelectCategory";
import AddAttribute from "features/AddAttribute";
import ChangeAttribute from "../../features/ChangeAttributes";
import {StandardLayout} from "../../widgets/StandardLayout/ui";


const tabs = ['Имя', 'Категории', 'Атрибуты', 'Вариации']

export const ProductPage: React.FC = memo(() => {

    const dispatch = useAppDispatch()

    const {productId} = useParams()

    const [activeTab, setActiveTab] = useState(0)

    const [product, setProduct] = useState<ICustomizedProduct | null>(null)

    useEffect(() => {
        if (productId) {
            dispatch(appActions.changeStatus({status: 'loading', message: 'product is loading'}))
            getCustomizedProduct(productId)
                .then(product => {
                    if (product) {
                        dispatch(appActions.changeStatus({status: 'success', message: 'product loaded'}))
                        setProduct(product)
                    }
                }).catch(error => dispatch(appActions.changeStatus({status: 'error', message: error.message})))
        }
    }, [productId])


    if (!product) return <div>Product is loading...</div>


    return (
        <Box component="main"
             sx={{
                 flexGrow: 1,
                 py: 8
             }}>
            <Container maxWidth={false}>
                <Typography component={'h1'} sx={theme => ({...theme.typography.h3, marginBottom: '40px'})}>
                    Настройте товар
                </Typography>
                <Grid item xs={8}>
                    <Formik initialValues={product}
                            isInitialValid={false}
                            validationSchema={customizedProductSchema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}>
                        {(formik) => (
                            <Form>
                                <Grid container spacing={2} xs={8}>
                                    <Grid item xs={7}>
                                        <TabsWrapper activeTab={activeTab}
                                                     onChange={(newTab: number) => setActiveTab(newTab)} tabs={tabs}/>
                                    </Grid>

                                    {activeTab === 2 && <Grid item xs={3}>
                                        <Button variant={'contained'} onClick={() => {
                                            const variations = createVariations(formik.values.attributes, {idCreator: idCreatorManager})
                                            formik.setFieldValue('variations', variations)
                                        }}>Создать вариации</Button>
                                    </Grid>}

                                    <Grid item xs={2}>
                                        <FormControlLabel control={<Checkbox name={'hidden'}
                                                                             value={formik.values.hidden}
                                                                             onChange={formik.handleChange}/>}
                                                          label={'Скрыть товар'}/>
                                    </Grid>

                                    <Grid container item spacing={2}>
                                        {activeTab === 0 &&
                                        <Grid item container xs={12} spacing={2}><SelectProductName/></Grid>}
                                        {activeTab === 1 &&
                                        <Grid item container xs={12}><SelectCategory
                                            categories={mockCategories}/></Grid>}
                                        {activeTab === 2 && <Grid item container xs={12} spacing={2}>
                                            <AddAttribute attributes={mockAttributes}/>
                                            <ChangeAttribute attributes={mockAttributes}/>
                                        </Grid>}
                                        {activeTab === 3 && <VariationList variations={product?.variations}/>}

                                        <Grid item xs={12}>
                                            <Button type={'submit'}
                                                    variant={'contained'}
                                                    disabled={!formik.isValid}>Сохранить</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>


                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Container>
        </Box>
    )
})
