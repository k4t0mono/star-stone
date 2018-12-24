import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'


class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        const ex = props.expense ? props.expense : {};
        this.state = {
            description: ex.description ? ex.description : '',
            note: ex.note ? ex.expense.note : '',
            amount: ex.amount ? (ex.amount/100).toString() : '',
            created_at: ex.created_at ? moment(ex.created_at) : moment(),
            calendar_focused: false,
            error_msg: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChage = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/))
            this.setState(() => ({ amount }));
    }

    onDateChange = (created_at) => {
        if(created_at)
            this.setState(() => ({ created_at }))
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendar_focused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error_msg: 'Description and Amount are required' }))
            return;
        } else {
            this.setState(() => ({ error_msg: '' }))
        }
        
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            created_at: this.state.created_at.valueOf(),
            note: this.state.note,
        });
    }

    render() {
        return (
            <div>
                { this.state.error_msg && <p>{ this.state.error_msg }</p> }
                <form onSubmit={ this.onSubmit }>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus={ true }
                        value={ this.state.description }
                        onChange={ this.onDescriptionChange }
                    />

                    <input
                        type="text"
                        placeholder="Amount"
                        value={ this.state.amount }
                        onChange={ this.onAmountChage }
                    />

                    <SingleDatePicker
                        date={ this.state.created_at }
                        onDateChange={ this.onDateChange }
                        focused={ this.state.calendar_focused }
                        onFocusChange={ this.onCalendarFocusChange }
                        id={ 'calendar' }
                        numberOfMonths={ 1 }
                        isOutsideRange={ () => (false) }
                    />

                    <textarea
                        placeholder="Notes"
                        value={ this.state.note }
                        onChange={ this.onNoteChange }
                    >
                    </textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }

}

export default ExpenseForm;