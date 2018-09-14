import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
} from 'react-testing-library';
import { Home } from '.';

const okResponse = jest.fn(() =>
  Promise.resolve({
    data: {
      results: [
        {
          name: 'chewbacca',
        },
      ],
    },
  })
);

const setup = props => {
  const queries = render(<Home {...props} />);
  const querySearchInput = () => queries.queryByLabelText('Search:');
  const queryLoadingIndicator = () => queries.queryByText('loading...');
  const changeInputValue = (inputElement, newValue) =>
    fireEvent.change(inputElement, {
      bubbles: true,
      target: { value: newValue },
    });

  return {
    ...queries,
    props,
    querySearchInput,
    queryLoadingIndicator,
    changeInputValue,
  };
};

describe('Home', () => {
  it('renders an input element', () => {
    const { querySearchInput } = setup();
    const searchInput = querySearchInput();
    expect(searchInput).toBeInTheDocument();
  });

  it('renders loading indicator', () => {
    const {
      querySearchInput,
      queryLoadingIndicator,
      changeInputValue,
    } = render(<Home />);
    const inputElement = querySearchInput();
    const loadingIndicator = queryLoadingIndicator();
    expect(loadingIndicator).not.toBeInTheDocument();
    changeInputValue(inputElement, 'chewbacca');
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('renders results', async () => {
    const { querySearchInput, changeInputValue, getByText } = setup({
      searchPeople: okResponse,
    });
    const inputElement = querySearchInput();
    changeInputValue(inputElement, 'chewba');
    await waitForElement(() => getByText('chewbacca'));
  });

  it('hides loading indicator', async () => {
    const {
      querySearchInput,
      changeInputValue,
      getByText,
      queryLoadingIndicator,
    } = render({
      searchPeople: okResponse,
    });
    const inputElement = querySearchInput();
    changeInputValue(inputElement, 'chewba');
    await waitForElement(() => getByText('chewbacca'));
    const loadingIndicator = queryLoadingIndicator();
    expect(loadingIndicator).not.toBeInTheDocument();
  });
});

afterEach(cleanup);
