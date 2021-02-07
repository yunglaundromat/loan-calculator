import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Segment, Container, Statistic, Divider, Message } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  state = {
    amount: 0,
    term: 0,
    rаte: 0,
    amountFormError: false,
    rateFormError: false
  }

  onCalculateClick() {
    console.log("function hit!")
  }

  onFormChange = (e, value) => {
    if (e.target.name === 'amount') {
      let amount;
      amount = parseInt(e.target.value)
      this.setState({amount: amount})
      if (amount >= 1000 && amount <= 1000000) {
        this.setState({amountFormError: false})
      } else {
        this.setState({amountFormError: true})
      }
    } else if (e.target.name === 'rate') {
      let rate;
      rate = parseInt(e.target.rate)
      this.setState({rate: rate})
      if (rate > 100 || rate < 0.1) {
        this.setState({amountFormError: true})
      }
    } else if (e.target.name === 'year') {
      let term;
      term = e.target.value * 12
      this.setState({term: term}, () => console.log(this.state.term))
    } else if (e.target.name === 'months') {
      this.setState({term: e.target.value}, () => console.log(this.state.term))
    }
  }

  toggleAmountFormError() {

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
                     {this.state.amountFormError === true ?
                     <Message
                        error
                        header='Action Forbidden'
                        content='You can only sign up for an account once with a given e-mail address.'
                     /> : null}
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
