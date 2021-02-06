import logo from './logo.svg';
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon, Container, Statistic } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  state = {
    amount: '',
    term: '',
    rаte: ''
  }

  componentDidMount() {
    console.log("App rendered!")
  }

  render() {
    return(
      <Container style={{ marginTop: '6em' }}>
        <Header as='h1' icon inverted textAlign='center'>
         <Image src='/figtechlogo.png' centered size="massive"/>
        </Header>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 700 }}>
           <Header as='h2' color='teal' textAlign='center'>
              Let's calculate your loan payments!
           </Header>
           <Segment>
             <Grid columns={2} stackable centered="true">
               <Grid.Column>
                 <Form size='large'>
                   <Segment stacked>
                     <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                     <Form.Input
                       fluid
                       icon='lock'
                       iconPosition='left'
                       placeholder='Password'
                       type='password'
                     />
                     <Button color='teal' fluid size='large'>
                       Calculate
                     </Button>
                   </Segment>
                 </Form>
               </Grid.Column>
               <Grid.Column stretched>
                 <Statistic>
                   <Statistic.Value>$555</Statistic.Value>
                   <Statistic.Label>Per Month</Statistic.Label>
                 </Statistic>
               </Grid.Column>
             </Grid>
           </Segment>
          </Grid.Column>
        </Grid>
      </Container>
)
  }
}

export default App;
