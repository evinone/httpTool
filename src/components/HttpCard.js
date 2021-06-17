import React from 'react';
import { Card, Row, Col } from 'antd';

const cardStyle = {
  border: '1px solid',
};
const rowStyle = {

}
const colStyle = {
  display: 'inline-block'
};

const cardOnClick = () => {
  console.log('跳转CardHome________')
};

const HttpCard = () => {

  return (
    <div  style={ cardStyle }>
      <Row>
        <Col span={6} style={ colStyle }>
        <Card title="404" onClick={cardOnClick}>
          <span>404是由于</span>
        </Card>
        </Col>
      </Row>
    </div>
  )
};

export default HttpCard;