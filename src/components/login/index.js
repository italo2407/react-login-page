import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './login.css';

const Avatar = ({foto,userName}) => (
		<div style={{width:"100%"}}>
			<div className="login-form-avatar">
				<img src={`img/${foto}.jpg`} alt="AVATAR" />
			</div>
			<span className="login-form-title login-form-title-padding">{userName}</span>
		</div>
	);

const SocialNetworkItem = ({socialNetwork}) => (
		<a href="#" class="login-social-item">
			<img src={`img/${socialNetwork}.png`} alt={socialNetwork} />
		</a>
	);

const ValidateAlert = () => (
		<span className="alert-icon">
			<FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
		</span>
	);

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
				email: '',
				password: '',
				formErrors: {email: '', password: ''},
    			emailValid: true,
    			passwordValid: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value },
						() => { this.validateField(name, value) });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password, returnUrl } = this.state;

		// stop here if form is invalid
		if (!(username && password)) {
				return;
		}
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
	  
		switch(fieldName) {
		  case 'email':
			emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
			fieldValidationErrors.email = emailValid ? '' : 'Valid email is: a@b.c';
			break;
		  case 'password':
			passwordValid = value.length >= 4;
			fieldValidationErrors.password = passwordValid ? '': 'Password is too short';
			break;
		  default:
			break;
		}
		this.setState({ formErrors: fieldValidationErrors,
						emailValid: emailValid,
						passwordValid: passwordValid
					  });
	}

    render() {
		debugger;
		const { email, password, emailValid, passwordValid, formErrors } = this.state;
		const socialNetowrks=["facebook","twitter","google"];
		const classLoginBtn=(!emailValid || !passwordValid) ? "login-form-btn-disabled":"login-form-btn-enabled";

		return (
        	<div className="login">
				<form className="login-form validate-form">
					<Avatar foto="foto" userName="Italo Barboza" />

					<div className={emailValid ? "input-container" : "input-container alert-validate"} data-validate ={formErrors.email}>
						{ !emailValid && <ValidateAlert/>}
						<input className={!email ? "input" : "input has-val"} type="text" name="email" onChange={this.handleChange}/>
						<span className="focus-input" data-placeholder="Email"></span>
					</div>

					<div className={passwordValid ? "input-container" : "input-container alert-validate"} data-validate ={formErrors.password}>
						{ !passwordValid && <ValidateAlert/>}
						<input className={!password ? "input" : "input has-val"} type="password" name="password" onChange={this.handleChange}/>
						<span className="focus-input" data-placeholder="Password"></span>
					</div>
					
					<div className="login-form-btn-container">
						<button className={`login-form-btn ${classLoginBtn}`} disabled={!emailValid || !passwordValid} >
							Login
						</button>
					</div>

					<div className="social-media-login-text">
						<span>
							Or Login Using
						</span>
					</div>

					<div className="social-media-container">
						{socialNetowrks.map( name => {
										return <SocialNetworkItem socialNetwork={name}/>
						})}
					</div>

				</form>
		</div>
      );
    }
  }
  
export default Login;
  