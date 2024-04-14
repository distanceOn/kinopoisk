import { Card, Rate, Row, Typography } from 'antd';
import { MovieCardProps } from './types';

export const MovieCard = ({
  isFetching,
  name,
  description,
  totalRating,
}: MovieCardProps) => {
  return (
    <Card style={{ width: '100%' }} loading={isFetching} hoverable>
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
