/**
 * Created by colus on 2017. 4. 29..
 */
import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class TitleContent extends React.Component {

  constructor(props) {
    super(props);

    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    window.location.assign(`${this.props.apiServerUrl}/download?url=${encodeURIComponent(this.props.resumeUrl)}`);
  }

  render() {
    const baseStyle = {
      // color: '#cdbfe3',
      color: '#fff',
      // backgroundColor: '#6f5499',
      backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x400)',
      backgroundSize: 'cover',
      paddingBottom: '6px' };
    const nameStyle = { color: '#fff' };
    const imgStyle = { height: '150px' };

    return (
        <Jumbotron id="content" tabIndex="-1" style={baseStyle}>
          <Grid fluid>
            <Row>
              <Col>
                <h2 style={nameStyle}>{this.props.name}</h2>
                <h2>{this.props.moto}</h2>
                <p className="lead">
                  <a className="btn btn-outline-inverse btn-lg hidden-print" href="#" onClick={this.handleDownload} role="button">Download PDF</a>
                </p>
              </Col>
            </Row>
          </Grid>
          <h6 className="visible-lg-inline-block">
            <span className="glyphicon glyphicon-console"/>
            This page is designed using Node.js, Express.js, React.js, Redux, MariaDB, Bootstrap, Phantom.js, TeamCity, Docker, AWS.
          </h6>
        </Jumbotron>
    );
  }
}

TitleContent.propTypes = {
  name: React.PropTypes.string,
  moto: React.PropTypes.string,
  resumeUrl: React.PropTypes.string,
  apiServerUrl: React.PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    name: state.User.user_name,
    moto: state.User.moto,
    resumeUrl: state.resume_short_url,
    apiServerUrl: state.api_server_url
  };
};

export default connect(mapStateToProps)(TitleContent);