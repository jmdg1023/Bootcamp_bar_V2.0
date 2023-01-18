import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
import { StoreProvider } from './utils/GlobalState';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <StoreProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/menu/:id" element={<Detail />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
