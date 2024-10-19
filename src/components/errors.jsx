import Alert from 'react-bootstrap/Alert';

function ErrorMessage(props) {

	if('message' in props){
		return(
			 <Alert key='danger' variant='danger'>
          		Error fetching city: {props.message} (Code: {props.code}).
       		 </Alert>
			
		)
	}
}
export default ErrorMessage;