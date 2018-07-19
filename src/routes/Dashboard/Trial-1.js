/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Row, Card, List, Avatar, Button } from 'antd';

import { Radar } from 'components/Charts';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './Trial-1.less';

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const members = [
  {
    id: 'members-1',
    title: '科学搬砖组',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    link: '',
  },
  {
    id: 'members-2',
    title: '程序员日常',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
    link: '',
  },
  {
    id: 'members-3',
    title: '设计天团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
    link: '',
  },
  {
    id: 'members-4',
    title: '中二少女团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    link: '',
  },
  {
    id: 'members-5',
    title: '骗你学计算机',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    link: '',
  },
];

@connect(({ project, activities, chart, loading }) => ({
  project,
  activities,
  chart,
  projectLoading: loading.effects['project/fetchNotice'],
  activitiesLoading: loading.effects['activities/fetchList'],
}))
export default class Workplace extends PureComponent {
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

  renderActivities() {
    const {
      activities: { list },
    } = this.props;
    return list.map(item => {
      const events = item.template.split(/@\{([^{}]*)\}/gi).map(key => {
        if (item[key]) {
          return (
            <a href={item[key].link} key={item[key].name}>
              {item[key].name}
            </a>
          );
        }
        return key;
      });
      return (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatar} />}
            title={
              <span>
                <a className={styles.username}>{item.user.name}</a>
                &nbsp;
                <span className={styles.event}>{events}</span>
              </span>
            }
            description={
              <span className={styles.datetime} title={item.updatedAt}>
                {moment(item.updatedAt).fromNow()}
              </span>
            }
          />
        </List.Item>
      );
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
        {/* <Row gutter={24}> */}
        {/* <Card */}
        {/* className={styles.projectList} */}
        {/* style={{ marginBottom: 24 }} */}
        {/* title="进行中的项目" */}
        {/* bordered={false} */}
        {/* extra={<Link to="/">全部项目</Link>} */}
        {/* loading={projectLoading} */}
        {/* bodyStyle={{ padding: 0 }} */}
        {/* cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} */}
        {/* > */}
        {/* {notice.map(item => ( */}
        {/* <Card.Grid className={styles.projectGrid} key={item.id}> */}
        {/* <Card bodyStyle={{ padding: 0 }} bordered={false}> */}
        {/* <Card.Meta */}
        {/* title={ */}
        {/* <div className={styles.cardTitle}> */}
        {/* <Avatar size="small" src={item.logo} /> */}
        {/* <Link to={item.href}>{item.title}</Link> */}
        {/* </div> */}
        {/* } */}
        {/* description={item.description} */}
        {/* /> */}
        {/* <div className={styles.projectItemContent}> */}
        {/* <Link to={item.memberLink}>{item.member || ''}</Link> */}
        {/* {item.updatedAt && ( */}
        {/* <span className={styles.datetime} title={item.updatedAt}> */}
        {/* {moment(item.updatedAt).fromNow()} */}
        {/* </span> */}
        {/* )} */}
        {/* </div> */}
        {/* </Card> */}
        {/* </Card.Grid> */}
        {/* ))} */}
        {/* </Card> */}
        {/* </Row> */}
        <Row>
          <Button ghost>我是一个幽灵按钮-A</Button>
          <Button shape="circle" size="large">
            我是一个按钮-A
          </Button>
          <Button type="primary">我是一个按钮-A</Button>
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
