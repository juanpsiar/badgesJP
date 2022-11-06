import React from 'react'

class BadgeForm extends React.Component {
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // });
  // };

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}></input>

            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}></input>
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}></input>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}></input>
          </div>
          <button
            //type='button'
            onClick={this.handleClick}
            className="btn btn-primary">
            Save
          </button>
          {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
        </form>
      </div>
    )
  }
}

export default BadgeForm
