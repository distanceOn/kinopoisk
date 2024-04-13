import { Col, Row } from 'antd';
import React from 'react';

type DetailsTemplateProps = {
  card: React.ReactNode;
  carousel1: React.ReactNode;
  carousel2: React.ReactNode;
};

export const DetailsTemplate = ({
  card,
  carousel1,
  carousel2,
}: DetailsTemplateProps) => {
  return (
    <div className='details-template'>
      <Row gutter={16}>
        <Col span={12}>{card}</Col>
        <Col span={12}>
          {carousel1}
          {carousel2}
        </Col>
      </Row>
    </div>
  );
};
