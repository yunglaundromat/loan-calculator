import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Segment, Container, Statistic, Divider } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  state = {
    amount: '',
    term: '',
    rаte: ''
  }

  onCalculateClick() {
    console.log("function hit!")
  }

  onFormChange = (e, value) => {
    if (e.target.name === 'amount') {
      this.setState({amount: e.target.value}, () => console.log(this.state.amount))
    } else if (e.target.name === 'rate') {
      this.setState({rate: e.target.value}, () => console.log(this.state.rate))
    } else if (e.target.name === 'year') {
      let term;
      term = e.target.value * 12
      this.setState({term: term}, () => console.log(this.state.term))
    } else if (e.target.name === 'months') {
      this.setState({term: e.target.value}, () => console.log(this.state.term))
    }

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
           <Segment inverted>
             <Grid columns={2} stackable centered>
               <Grid.Column>
                 <Form size='large'>
                   <Segment stacked>
                     <Form.Input
                      name='amount'
                      label='Loan amount'
                      icon='dollar sign'
                      iconPosition='left'
                      type='number'
                      onChange={(e, target) => this.onFormChange(e, target)}
                     />
                     <Form.Input
                       name='rate'
                       label='Interest rate per year'
                       icon='percent'
                       iconPosition='right'
                       type='number'
                       onChange={(e, target) => this.onFormChange(e, target)}
                     />
                     <Form.Input
                       name='year'
                       label='Loan term (years)'
                       type='number'
                       onChange={(e, target) => this.onFormChange(e, target)}
                     />
                     <Form.Input
                       name='months'
                       label='Loan term (months)'
                       type='number'
                       onChange={(e, target) => this.onFormChange(e, target)}
                     />
                     <Button color='teal' fluid size='large' onClick={this.onCalculateClick}>
                       Calculate
                     </Button>
                   </Segment>
                 </Form>
               </Grid.Column>
               <Grid.Column stretched verticalAlign='middle'>
                 <Statistic.Group horizontal inverted>
                   <Statistic>
                     <Statistic.Value>$6000</Statistic.Value>
                     <Statistic.Label>Principal Paid</Statistic.Label>
                   </Statistic>
                   <Statistic>
                     <Statistic.Value>$1000</Statistic.Value>
                     <Statistic.Label>Interest Paid</Statistic.Label>
                   </Statistic>
                  </Statistic.Group>
                  <Divider inverted/>
                  <Statistic inverted>
                    <Statistic.Value>$100</Statistic.Value>
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
