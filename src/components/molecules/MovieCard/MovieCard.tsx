import { Card, Col, Image, Rate, Row } from 'antd';
import Placeholder from '../../../app/assets/imgs/placeholder.png';

type MovieCardProps = {
  isFetching: boolean;
  name: string;
  description: string;
  totalRating: number;
  poster: {
    url: string;
    previewUrl: string;
  };
};

export const MovieCard = ({
  isFetching,
  name,
  description,
  totalRating,
  poster,
}: MovieCardProps) => {
  const imageUrl = poster?.url || Placeholder;
  const previewUrl = poster?.previewUrl || Placeholder;

  return (
    <Card
      loading={isFetching}
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          preview={false}
          alt={name}
          src={imageUrl}
          fallback={previewUrl}
        />
      }
    >
      <Card.Meta title={name} description={description} />
      <Row style={{ marginTop: 10 }}>
        <Col span={12}>
          <Rate disabled value={totalRating} />
        </Col>
      </Row>
    </Card>
  );
};
