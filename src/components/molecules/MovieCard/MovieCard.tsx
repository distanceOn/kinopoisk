import { Card, Col, Image, Rate, Row } from 'antd';

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
  return (
    <Card
      loading={isFetching}
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          preview={false}
          alt={name}
          src={poster.url}
          fallback={poster.previewUrl}
        />
      }
    >
      <Card.Meta title={name} description={description} />
      <Row style={{ marginTop: 10 }}>
        <Col span={12}>
          <Rate disabled defaultValue={totalRating} />
        </Col>
      </Row>
    </Card>
  );
};
