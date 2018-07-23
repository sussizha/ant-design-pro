/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Card, List, Avatar, Button } from 'antd';

import { Radar } from 'components/Charts';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './Trial-1.less';

@connect(({ project, activities, chart, loading }) => ({
  project,
  activities,
  chart,
  projectLoading: loading.effects['project/fetchNotice'],
  activitiesLoading: loading.effects['activities/fetchList'],
}))
export default class Trial extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'activities/fetchList',
    });
    dispatch({
      type: 'chart/fetch',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  render() {
    // const {
    //   project: { notice },
    //   projectLoading,
    //   activitiesLoading,
    //   chart: { radarData },
    // } = this.props;

    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>早安，曲丽丽，祝你开心每一天！</div>
          <div>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>项目数</p>
          <p>60</p>
        </div>
        <div className={styles.statItem}>
          <p>团队内排名</p>
          <p>
            8
            <span> / 24</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    );

    return (
      <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}>
        <Row>
          <Button ghost>我是一个幽灵按钮-A</Button>
          <Button type="primary" onClick={() => alert('a')}>
            我是一个按钮-A
          </Button>
        </Row>
        <Row>
          <p />
        </Row>
        <Row gutter={24}>
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
      </PageHeaderLayout>
    );
  }
}
