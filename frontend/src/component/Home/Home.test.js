import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from './Home'; // Adjust the import path as necessary

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home Component', () => {
    let store;
    
    beforeEach(() => {
        store = mockStore({
            products: {
                data: [],
                status: 'idle',
            }
        });
    });

    test('should render without crashing', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByText('Load More')).toBeInTheDocument();
    });

    test('should display loading state correctly', () => {
        store = mockStore({
            products: {
                data: [],
                status: 'loading',
            }
        });

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.queryByText('Load More')).not.toBeInTheDocument();
        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(0);
    });

    test('should display products when loaded', async () => {
        const products = [
            { _id: '1', name: 'Product 1' },
            { _id: '2', name: 'Product 2' },
        ];

        store = mockStore({
            products: {
                data: products,
                status: 'succeeded',
            }
        });

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        );

        await waitFor(() => {
            products.forEach(product => {
                expect(screen.getByText(product.name)).toBeInTheDocument();
            });
        });
    });
});
