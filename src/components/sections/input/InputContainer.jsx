import React, { Component } from 'react';

import "./input.styles.scss";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            sender: "",
            recipient: "",
            amount: "",
            message: "",
            disabledButton: false,
            errors: {
                name: "",
                sender: "",
                recipient: "",
                amount: "",
                message: "",
            }
        }
        this.initialState = {
            ...this.state
        }
        this.handleChange = this.handleChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.submitInput = this.submitInput.bind(this);
        this.submitInput = this.submitInput.bind(this);
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case "name":
            case "sender":
            case "recipient":
            case "message":
                errors[name] = value.length <= 0 ? "INVALID " + name : "";
                break;
            case "amount":
                errors[name] = value <= 0 ? "INVALID " + name : "";
            default:
                break;
        }

        this.setState({
            errors,
            [name]: value
        });
    }

    clearInput = () => {
        this.setState({
            ...this.initialState
        })
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            val => {
                if (val.length > 0) {
                    valid = false;
                }
            }
        )
        return valid;
    }

    submitInput = (e) => {
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
            alert("VALID");
        } else {
            alert("INVALID");
        }
    }

    render() {
        const { name, sender, recipient, amount, message, errors, disabledButton } = this.state;
        return (
            <div className="input">
                <div className="input__section">
                    <div className="input__title">
                        Add a Block
                    </div>
                    <form className="input__form" id="add-block-form" onSubmit={this.submitInput}>
                            <label className="input__label" htmlFor="name">Name</label>
                            <input 
                                className={"input__value " + (errors.name.length > 0 ? "fail" : "")}
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={this.handleChange}
                                required
                            />

                            <label className="input__label" htmlFor="sender">Sender</label>
                            <input 
                                className={"input__value " + (errors.sender.length > 0 ? "fail" : "")}
                                name="sender"
                                type="text"
                                placeholder="Sender"
                                value={sender}
                                onChange={this.handleChange}
                                required
                            />

                            <label className="input__label" htmlFor="recipient">Recipient</label>
                            <input 
                                className={"input__value " + (errors.recipient.length > 0 ? "fail" : "")}
                                name="recipient"
                                type="text"
                                placeholder="Recipient"
                                value={recipient}
                                onChange={this.handleChange}
                                required
                            />

                            <label className="input__label" htmlFor="amount">Amount</label>
                            <input 
                                className={"input__value " + (errors.amount.length > 0 ? "fail" : "")}
                                name="amount"
                                type="number"
                                placeholder="Amount"
                                value={amount}
                                onChange={this.handleChange}
                                required
                            />

                            <label className="input__label" htmlFor="message">Message</label>
                            <textarea 
                                className={"input__value text-area " + (errors.message.length > 0 ? "fail" : "")}
                                name="message"
                                form="add-block-form"
                                placeholder="Enter your message"
                                draggable="false"
                                value={message}
                                onChange={this.handleChange}
                                required
                            />
                            <button className="input__button" type="submit">Add</button>
                            <button className="input__button" type="button" onClick={this.clearInput}>Clear</button>
                    </form>
                </div>
            </div>
        );
    }

};

export default Input;