// setupTests.js
Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });