import React, { Component } from "react";
import InputSearch from '../components/InputSearch';
import HttpCard from "../components/HttpCard";
import CardHome from "../components/CardHome";
import { connect } from 'react-redux';
import { changeHttpCode } from "../store/actions/httpList";


class IndexPage extends Component {
  render () {

  
  const { httpCode } = this.props;
  
  console.log(httpCode)
  return (
  <div>
    
      <InputSearch />
      <HttpCard />
      <CardHome />
  </div>
  )
}
};

export default connect(

  function mapStateToProps (state) {
    return {
      httpCode: state.httpList.httpCode
    }
  },
  function mapDispatchToProps (dispatch) {
    return {
      changeHttpCode: (code) => dispatch(changeHttpCode(code))
    }
  }
)(IndexPage);
