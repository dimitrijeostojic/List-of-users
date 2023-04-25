import React, { useState, useRef } from 'react'
import classes from './AddUser.module.css'
import Card from './../UI/Card';
import Button from './../UI/Button';
import ErrorModal from './../UI/ErrorModal';
import Wrapper from './../Helpers/Wrapper';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid username and age'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (age must be > 0)'
            })
            return
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const closeModalHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type="text" placeholder='Enter your username' ref={nameInputRef} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type="number" placeholder='Enter your age' ref={ageInputRef} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser