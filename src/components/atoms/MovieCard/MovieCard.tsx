import { Card, Rate, Row, Typography } from 'antd';
import { MovieCardProps } from './types';

import S from './MovieCard.module.scss';

export const MovieCard = ({
  isFetching,
  name,
  description,
  totalRating,
}: MovieCardProps) => {
  return (
    <Card className={S.card} loading={isFetching} >
      <Card.Meta
        title={
          <Row align='middle' justify='space-evenly'>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {name}
            </Typography.Title>
            <Rate disabled value={totalRating} />
          </Row>
        }
        description={description}
      />
    </Card>
  );
};
