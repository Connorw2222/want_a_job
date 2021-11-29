import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from "./components/footer";
import Header from "./components/header";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/signup";
import MembershipPlans from "./pages/Membership";
import AddJob from "./pages/AddJob";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import SingleJob from "./pages/SingleJob";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/membership" component={MembershipPlans} />
            <Route exact path="/addjob" component={AddJob} />
            <Route exact path="/job/:id" component={SingleJob} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApolloProvider>
      <Footer />
    </div>
  );
}

export default App;
