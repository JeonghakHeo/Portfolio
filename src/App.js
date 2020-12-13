import './App.css';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Header from './components/Header';
import Resume from './components/pages/Resume'
import Portfolio from './components/pages/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <Container className='app_container'>
      <Grid container spacing='5'>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
            <Header />
            <div className='main-content container_shadow'>
              <Switch>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/" component={Resume} />
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container >
  );
}

export default App;
