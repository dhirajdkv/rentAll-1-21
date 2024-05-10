import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SingleOrder from './SingleOrder';
import { STATUSES } from '../../store/statuses';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SingleOrder Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            orders: {
                status: STATUSES.IDLE,
            }
        });
    });

    const renderComponent = (orderId) => render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[`/order/${orderId}`]}>
                <Route path="/order/:id">
                    <SingleOrder />
                </Route>
            </MemoryRouter>
        </Provider>
    );

    test('renders loader during data fetching', () => {
        store = mockStore({
            orders: {
                status: STATUSES.LOADING,
            }
        });

        renderComponent('123');
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders SingleOrderDetails after data is fetched', () => {
        store = mockStore({
            orders: {
                status: STATUSES.SUCCESS,
            }
        });

        renderComponent('123');
        expect(screen.getByTestId('single-order-details')).toBeInTheDocument();
    });

    test('dispatches getSingleOrder on mount', () => {
        const orderId = '123';
        renderComponent(orderId);

        const actions = store.getActions();
        expect(actions[0]).toEqual(getSingleOrder(orderId));
    });
});
