import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../utils/history';
import { changeHttpCode, searchHttpCode } from '../store/actions/httpList';

const Style = {
  maxWidth: 1300,
  minHeight: 574,
  border: '1px solid',
  textAlign: 'center'
};

class CardHome extends Component {
  render () {
    
    const { httpReturn,onChangeHttpCode,onSearchHttpCode } = this.props;

    const toCard = () => {
      let code = ' ';
      onChangeHttpCode(code)
      onSearchHttpCode(code)
      history.push('/');
    };

    return (
      <>
      <div style={Style}>
        <button
          onClick={() =>{
          toCard()
          }}
          style={{ position: 'absolute', left: 0 }}
        >
          返回</button>
        <h2>{httpReturn[0].id}</h2>
        <h3>{httpReturn[0].msg}</h3>
      </div>
      </>
    )
}

}
export default connect(
  function mapStateToProps (state) {
    return {
      httpReturn: state.httpList.httpReturn
    }
  },

  function mapDispatchToProps (dispatch) {
    return {
      onChangeHttpCode: (code) => dispatch(changeHttpCode(code)),
      onSearchHttpCode: (code) => dispatch(searchHttpCode(code))
    }
  }
)(CardHome);