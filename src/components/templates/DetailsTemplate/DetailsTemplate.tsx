import { Col, Row, Typography } from 'antd';

import S from './DetailsTemplate.module.scss';
import { DetailsTemplateProps } from './types';

export const DetailsTemplate = ({
  image,
  text,
  carousel1,
  carousel2,
  details,
}: DetailsTemplateProps) => {
  return (
    <div className={S.container}>
      <Row wrap={true} gutter={16}>
        <Col xs={24} sm={24} md={8}>
          {image}
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Row className={S.posters}>
            <Col span={24}>{carousel1}</Col>
          </Row>
          <Row>{text}</Row>
          <Row className={S.container} justify='space-evenly'>
            <Col span={8} className={S.similar__text}>
              <Typography.Text style={{ color: '#fff' }}>
                ПОХОЖИЕ ФИЛЬМЫ
              </Typography.Text>
            </Col>
            <Col span={8}>{carousel2}</Col>
          </Row>
        </Col>
        <Col className={S.details} xs={24} sm={24} md={8}>
          {details}
        </Col>
      </Row>
    </div>
  );
};
