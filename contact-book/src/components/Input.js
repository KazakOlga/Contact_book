import React from 'react'
import './Input.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const Input = (props) => {
    const {
        onSubmit,
    } = props
    const inputRef = React.useRef(null)

    const [inputValue, setInputValue] = React.useState('')
    const [surnameValue, setSurnameValue] = React.useState('')
    const [emailValue, setEmaileValue] = React.useState('')
    const [phoneValue, setPhoneValue] = React.useState('')
    const [phone2Value, setPhone2Value] = React.useState('')
    const [instagramValue, setInstagramValue] = React.useState('')
    

    const handleChangeName = (e) => {
        setInputValue(e.target.value)
    }
    const handleChangeSurname = (e) => {
        setSurnameValue(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmaileValue(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhoneValue(e.target.value)
    }
    const handleChangePhone2 = (e) => {
        setPhone2Value(e.target.value)
    }
    const handleChangeInstagram = (e) => {
        setInstagramValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue,surnameValue,emailValue,phoneValue,phone2Value,instagramValue)
            setEmaileValue('')
            setInputValue('')
            setSurnameValue('')
            setPhoneValue('')
            setPhone2Value('')
            setInstagramValue('')
            setTimeout(() => inputRef.current?.focus(), 200)
        }
    }

    return (
        <div className="cont">
        <form className="app__form bordered " onSubmit={handleSubmit}>
            <div className="form">
            <div>
                <div className="inputs">
            <TextField
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered "
                variant="outlined"
                label="Name"
                placeholder="Name"
                value={inputValue}
                onChange={handleChangeName}
            />
            </div>
            <div className="inputs">
            <TextField
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered "
                variant="outlined"
                label="Surname"
                placeholder="Surname"
                value={surnameValue}
                onChange={handleChangeSurname}
            />
            </div>
            <div className="inputs">
            <TextField
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered "
                variant="outlined"
                label="Email"
                placeholder="Email"
                value={emailValue}
                onChange={handleChangeEmail}
            />
            </div>
            </div>
            <div>
            <div className="inputs">
            <TextField
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered "
                variant="outlined"
                label="Phone number"
                placeholder="Phone number"
                value={phoneValue}
                onChange={handleChangePhone}
            />
            </div>
            <div className="inputs">
            <TextField
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered "
                variant="outlined"
                label="Phone number 2"
                placeholder="Phone number 2"
                value={phone2Value}
                onChange={handleChangePhone2}
            />
            </div>
            <div className="inputs">
             <TextField
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered "
                variant="outlined"
                label="Instagram"
                placeholder="Instagram"
                value={instagramValue}
                onChange={handleChangeInstagram}
            />
            </div>
            </div>
            </div>
            <div className="button_add">
            <Button
                color="primary"
                type="submit"
                variant="contained"
                tabIndex={-1}
                title="Отправить"
            >Add
            </Button>
            </div>
        </form>
        </div>
    )
}

export default Input