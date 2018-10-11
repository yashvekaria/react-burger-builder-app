import  React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../axios-order';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
         this.setState({ loading: true });
        const orderData = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Yash Vekaria',
                address: {
                    street: '8 Hatheesing Park',
                    zipCode: '380051',
                    country: 'India'
                },
                email: 'yashvekaria@gmail.com'
            },
            paymentMethod: 'Cash',
            deliveryMethod: 'fastest'
        };

        axios.post('/order.json', orderData)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false });
            });
        //console.log(this.props.ingredients);
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postalcode" placeholder="Postal Code" />
                    <Button btnType="Success" onClick={() => this.orderHandler()}>ORDER</Button>
                </form>
            </div>
        )
    }

}

export default ContactData;