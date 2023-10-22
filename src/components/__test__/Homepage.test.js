import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import store from '../../app/store';
import Homepage from '../Homepage';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';


describe('Homepage Unit Test', () => {
  test('renders loading message', async () => {
    render(
        <Provider store={store}>
            <Homepage />
        </Provider>        
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
   
});

// it('renders content after data is fetched', async () => {
   
// });
  


//   test('renders statistics correctly', async () => {
//     // ... your existing statistics test
//   });

//   test('renders top 10 cryptocurrencies correctly', async () => {
//     // ... your existing top 10 cryptos test
//   });

//   test('renders current affairs correctly', async () => {
//     // ... your existing current affairs test
//   });

//   test('navigates to Cryptocurrencies page on "Show More" click', async () => {
//     // ... test navigation to /cryptocurrencies
//   });

//   test('navigates to News page on "Show More" click', async () => {
//     // ... test navigation to /news
//   });

//   test('matches snapshot', () => {
//     // ... snapshot testing
//   });

});


