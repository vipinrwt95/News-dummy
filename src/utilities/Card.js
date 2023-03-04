import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageHoverZoom from './ImageHoverZoom';


const CardDetails=(props)=> {
    console.log(props.image)
    return (
    
    <Card style={{ width: '25rem', margin:'10px'}}>
      <ImageHoverZoom image={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.subtitle}
        </Card.Text>
        <Button style={{backgroundColor:'#563d7c',color:'white'}} >Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default CardDetails;