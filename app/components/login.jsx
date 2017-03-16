import React from 'react';

const Login = React.createClass({
	render() {
		return (
			<div>
				<a className="hiddenanchor" id="signup"></a>
				<a className="hiddenanchor" id="signin"></a>

				<div className="login_wrapper">
					<div className="animate form login_form">
						<section className="login_content">
							<form>
								<h1>React_Helloworld_exercise</h1>
								<div>
									<input type="text" className="form-control" placeholder="please input your name" ref="name" required />
								</div>
								<div>
									<input type="text" className="form-control" placeholder="please input your email" ref="email" required />
								</div>
								<div>
									<input type="text" className="form-control" placeholder="please input your city" ref="city" required />
								</div>
								<div>
									<a className="btn btn-default submit" href="javascript:;" onClick={this.loginSubmit}>login</a>
								</div>

								<div className="clearfix"></div>

							</form>
						</section>
					</div>

				</div>
			</div>
		);
	},
	getInitialState() {
		return {
			name: '',
			email: '',
			city:''
		};
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	loginSubmit() {
		this.context.router.push('/summary'); 
	},
	componentDidMount() {
		sessionStorage.removeItem('name')
		$('body').attr('class', 'login')
	}
});

module.exports = Login;
