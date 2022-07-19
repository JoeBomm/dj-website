import React from "react";
import PayPal from '../pictures/paypal.png';
import CashApp from '../pictures/cashapp.png';

export default function Contact(){
    return (
        <section id="contact">
            <div class="container">
                <div class="container-fluid">
                    <h1>Contact</h1>
                    <div class="row justify-content-center">
                        <div class="service-item card col-lg-4 col-md-6">
                            <h1 id="contact-title">Drop Me a Line</h1>
                            <h2 id="contact-name">Fadia Dhager</h2>
                            <h3 id="contact-body">H: 313-265-7392</h3>  
                            <h3 id="contact-body">M: 313-800-1262</h3>

                            <a href='https://www.instagram.com/djfadia' class="btn btn-primary text-uppercase">
                            Check out my Instagram</a>
                        </div>
                        <div class="service-item card col-lg-4 col-md-6">
                            <div class="card-body">
                                <h1 id="deposit-title">Make a Deposit</h1>
                                <a href="https://account.venmo.com/pay?txn=pay&note=DJ%20Deposit&recipients={user_name}" target="_blank"><img src={PayPal}/></a>
                                <a href = "https://cash.app/${user_name}" target="_blank"><img src={CashApp}/></a>
                                <h3 id="contact-body">Click on the either icon to pay your deposit with PayPal or CashApp</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
