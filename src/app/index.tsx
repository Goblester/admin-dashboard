import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { theme } from './theme';
import {DashboardLayout} from "../components/dashboard-layout";
import { Routing } from '../pages';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./providers/redux/store";
import AppSnackBar from "../widgets/AppSnackBar";
import {StandardLayout} from "../widgets/StandardLayout/ui";



function Index() {


  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <Provider store={store}>
                  <CssBaseline />
                  <StandardLayout>
                      <Routing/>
                  </StandardLayout>
                  <AppSnackBar/>
              </Provider>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default Index;
