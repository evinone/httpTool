import React, { Component } from "react";
import InputSearch from '../components/InputSearch';
import HttpCard from "../components/HttpCard";
// import CardHome from "../components/CardHome";
import { connect } from 'react-redux';
import { changeHttpCode, searchHttpCode } from "../store/actions/httpList";


// 改变code  搜索code,改变return  
class IndexPage extends Component {
  render () {

  
  const { httpCode, httpReturn, changeHttpCode, searchHttpCode } = this.props;
  
  // console.log('httpcode_______', httpCode)
  // console.log('return___________', httpReturn)
  return (
  <div>
    
      <InputSearch 
       changeHttpCode={ changeHttpCode }
       searchHttpCode={ searchHttpCode }
       />
      <HttpCard 
       httpReturn={ httpReturn }
       searchHttpCode={ searchHttpCode }
        />
  </div>
  )
}
};

export default connect(

  function mapStateToProps (state) {
    return {
      httpCode: state.httpList.httpCode,
      httpReturn: state.httpList.httpReturn,
    }
  },
  function mapDispatchToProps (dispatch) {
    return {
      changeHttpCode: (code) => dispatch(changeHttpCode(code)),
      searchHttpCode: (code) => dispatch(searchHttpCode(code)),
    }
  }
)(IndexPage);
