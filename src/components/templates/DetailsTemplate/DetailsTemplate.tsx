import { Col, Row, Typography } from 'antd';
import React from 'react';

type DetailsTemplateProps = {
  image: React.ReactNode;
  text: React.ReactNode;
  carousel1: React.ReactNode;
  carousel2: React.ReactNode;
  details: React.ReactNode;
};

export const DetailsTemplate = ({
  image,
  text,
  carousel1,
  carousel2,
  details,
}: DetailsTemplateProps) => {
  return (
    <div style={{ paddingTop: '10px' }}>
      <Row wrap={true} gutter={16}>
        <Col xs={24} sm={24} md={8}>
          {image}
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Row style={{ maxHeight: '30vh' }}>
            <Col span={24}>{carousel1}</Col>
          </Row>
          <Row>{text}</Row>
          <Row style={{ marginTop: '10px' }} justify='space-evenly'>
            <Col
              span={8}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography.Text style={{ color: '#fff' }}>
                ПОХОЖИЕ ФИЛЬМЫ
              </Typography.Text>
            </Col>
            <Col span={8}>{carousel2}</Col>
          </Row>
        </Col>
        <Col
          style={{
            backgroundColor: '#fff',
            maxHeight: '85vh',
            overflowY: 'auto',
            borderRadius: '10px',
          }}
          xs={24}
          sm={24}
          md={8}
        >
          {details}
        </Col>
      </Row>
    </div>
  );
};
