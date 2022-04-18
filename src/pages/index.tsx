import {Route, Routes} from "react-router-dom";
import {ProductListPage} from "./ProductListPage/ProductListPage";
import {ProductPage} from "./ProductPage/ProductPage";


export const Routing = () => {
    return (
        <Routes>
            <Route path={'/products'} element={<ProductListPage/>}/>
            <Route path={'/products/:productId'} element={<ProductPage/>}/>
            <Route path={'/test'} element={<ProductPage/>}/>
        </Routes>
    )
}