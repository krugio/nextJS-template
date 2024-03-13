"use client";
import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store";
import { QueryClient, QueryClientProvider } from 'react-query'
export const queryClient = new QueryClient();

const ReduxProvider = ({ children }) => {
  return   <QueryClientProvider client={queryClient}> <Provider store={store}> {children} </Provider></QueryClientProvider>;
};

export default ReduxProvider;