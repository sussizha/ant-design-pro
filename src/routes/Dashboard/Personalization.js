/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { Row, Card, List, Avatar, Button } from 'antd';

export default class Personalization extends PureComponent {
  render() {
    return (
      <Row>
        <Button ghost>我是一个幽灵按钮</Button>
        <Button type="primary" onClick={() => alert('a')}>
          我是一个按钮-A
        </Button>
        <Card
          title="Sussie_reverse"
          bordered={false}
          extra={<a href="http://www.baidu.com/">链接文本</a>}
          cover={<img alt="" src={require('C:/Users/Public/Pictures/Sample Pictures/喵.jpg')} />}
        >
          <Card.Grid>
            <Card.Meta description="第一个小网格" title="第一个小网格的标题" />
          </Card.Grid>
          <Card.Grid>
            <Card.Meta description="第一个小网格" title="第一个小网格的标题" />
          </Card.Grid>
          <Card.Grid>
            <Card.Meta description="第一个小网格" title="第一个小网格的标题" />
          </Card.Grid>
        </Card>
      </Row>
    );
  }
}
