
function ErrorMessage(props) {
	if('err' in props){
		return(
			<div>
				<h1>{props.err}</h1>
			</div>
		)
	}
}
export default ErrorMessage;