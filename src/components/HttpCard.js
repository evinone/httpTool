import React from 'react';
import { Card, Row, Col } from 'antd';
import { history } from '../utils/history';

const cardStyle = {
  margin: '16px',
  minHeight: '280px'
};
const colStyle = {
  display: 'inline-block'
};

const DrawCard = ({httpReturn, searchHttpCode}) => {

  const cardOnClick = (code) => {
    searchHttpCode(code);
    history.push('/home');

  };

  return <>
  {
      httpReturn.map((val, index) => {
        return (
          <Col span={7} style={ colStyle } key={index} >
            <Card
            key={index}
            title={val.id}
            onClick={() => cardOnClick(val.id)}
            style={cardStyle}
            >
              <span>{val.msg}</span>
            </Card>
          </Col>
        )
      })
  }
  </>
}

const HttpCard = ({httpReturn, searchHttpCode}) => {
  return (
    <div>
      <Row>
          <DrawCard httpReturn={ httpReturn } searchHttpCode={ searchHttpCode } />
      </Row>
    </div>
  )
};

export default HttpCard;