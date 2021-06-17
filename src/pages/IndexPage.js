import React, { Component } from "react";
import InputSearch from '../components/InputSearch';
import HttpCard from "../components/HttpCard";
import CardHome from "../components/CardHome";
import { connect } from 'react-redux';
import { changeHttpCode } from "../store/actions/httpList";


// 改变code  搜索code,改变return  
class IndexPage extends Component {
  render () {

  
  const { httpCode, httpMsg, httpReturn } = this.props;
  
  console.log('httpcode_______', httpCode)
  console.log('msg________', httpMsg)
  console.log('return___________', httpReturn)
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
      httpCode: state.httpList.httpCode,
      httpMsg: state.httpList.httpMsg,
      httpReturn: state.httpList.httpReturn,
    }
  },
  function mapDispatchToProps (dispatch) {
    return {
      changeHttpCode: (code) => dispatch(changeHttpCode(code))
    }
  }
)(IndexPage);
