import { Col, Image, List, Row } from 'antd';
import { Person } from '../../../../utils/types';
import Placeholder from '../../../../app/assets/imgs/placeholder.png';

import { ItemProps } from '../types';

export const ActorItem = <T,>({ renderItem, onClick }: ItemProps<T>) => {
  const { description, name, photo, enName } = renderItem as Person;

  const totalImage = photo ? photo : Placeholder;

  return (
    <List.Item>
      <Row align='middle'>
        <Col style={{ marginRight: '10px' }} span={2}>
          <Image src={totalImage} preview={false} />
        </Col>
        <Col>
          {name ? name : enName}
          <br />
          {description}
        </Col>
      </Row>
    </List.Item>
  );
};
