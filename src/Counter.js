import {connect} from 'react-redux'

function Counter(props){

  //  const[count,setCount]=React.useState(0)

    return(
        <div>
           <h1>React Redux Demo</h1>
           <p>Count : {props.count}</p>
        </div>
    )
}

function mapStateToProps(state){
    return{
        count:state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter) 

