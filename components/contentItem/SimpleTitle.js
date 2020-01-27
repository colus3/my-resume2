/**
 * Created by colus on 2017. 4. 30..
 */
import React from 'react';
import { connect } from 'react-redux';

class SimpleTitle extends React.Component {
  constructor(props) {
    super(props);

    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    window.location.assign(`${this.props.apiServerUrl}/download?url=${encodeURIComponent(this.props.resumeUrl)}`);
  }


  render() {
    return (
        <div className="visible-md-block visible-lg-block">
          <br/><br/>
          <img src={this.props.image} className="img-responsive img-circle center-block"
               alt="My Photo" style={{width: '200px'}}/>
          <br/>
          <h2>{this.props.name}</h2>
          <h2>{this.props.moto}</h2>
          <p className="lead">
            <a className="btn btn-default btn-lg hidden-print" href="#" onClick={this.handleDownload}
               role="button">Download PDF</a>
          </p>
        </div>
    );
  }
}

SimpleTitle.propTypes = {
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  moto: React.PropTypes.string,
  resumeUrl: React.PropTypes.string,
  apiServerUrl: React.PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    image: state.User.image,
    name: state.User.user_name,
    moto: state.User.moto,
    resumeUrl: state.resume_short_url,
    apiServerUrl: state.api_server_url
  };
};

export default connect(mapStateToProps)(SimpleTitle);