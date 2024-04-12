import { Card, Col, Image, Rate, Row } from 'antd';
import { useMovieService } from '../../../hooks/api/useMovieService';

export const MovieCard = () => {
  const { isFetching, name, description, totalRating, poster } =
    useMovieService();

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
