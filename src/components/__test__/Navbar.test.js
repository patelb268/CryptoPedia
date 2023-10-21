import React from 'react';
import {screen, render,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter} from 'react-router-dom'; // Import MemoryRouter
import Navbar from '../Navbar';

describe('Navbar Unit Test',()=>{

  test('Navbar elements renders without crashing in initially', async() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  
    //render nav collapsed
    const menuIcon = screen.getByLabelText('right');
    expect(menuIcon).toBeInTheDocument();
  
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  
    const homeLabel = screen.getByLabelText(/Home/i);
    expect(homeLabel).toBeInTheDocument();
  
    //icons are present
    const homeIcon = screen.getByLabelText('home');
    expect(homeIcon).toBeInTheDocument();
    const fundIcon = screen.getByLabelText('fund');
    expect (fundIcon).toBeInTheDocument();
    const bulbIcon = screen.getByLabelText('bulb');
    expect(bulbIcon).toBeInTheDocument();
  
  });
  
  
  
  test('Navbar Links', async() => {
    render(
      
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
      const newsLink = screen.getByText(/News/i);
      expect(newsLink).toHaveAttribute('href', '/news');
  
      const cryptoLink = screen.getByText(/Cryptocurrencies/i);
      expect(cryptoLink).toHaveAttribute('href', '/cryptocurrencies');
     
      const homelink = screen.getByText(/Home/i);
      expect(homelink).toHaveAttribute('href', '/');   
  });
  
  test('if navbar collapsible', async() => {
  
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    const collapsed = screen.getByLabelText('right');
    expect(collapsed).toBeInTheDocument();
  
    fireEvent.click(collapsed);
  
    // expect(collapsed).toBeInTheDocument(); will thorw error
  
    const expanded = screen.getByLabelText('left');
    expect(expanded).toBeInTheDocument();
  
    const title = screen.getByTestId('navbar-title');
    expect(title).toBeInTheDocument();
  
    fireEvent.click(expanded);
  
    const collapsed2 = screen.getByLabelText('right');
    expect(collapsed2).toBeInTheDocument();
  });
  
});