import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../Components/Header';
import ThemeContextProvider from '../Contexts/ThemeContextProvider';
import { store } from '../Redux/store';
import { StaticRouter } from 'react-router-dom/server';

test('Testing Header', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <Header />
        </ThemeContextProvider>
      </Provider>
    </StaticRouter>
  );
  const ele = header.getByText('Hustlers');
  expect(ele.innerHTML).toBe('Hustlers');
});
