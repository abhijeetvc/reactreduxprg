import {connect} from 'react-redux'
import {addCounter} from './action'
import {bindActionCreators} from 'redux'
function AddCounter(props){

    return(
        <div>
            <button type="button" onClick={
                 (e)=>props.dispatch(addCounter())
            }>Add</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
     return{
         actions:bindActionCreators(addCounter,dispatch)
     }
}
export default connect(mapDispatchToProps)(AddCounter)

//Counter , AddCounter, ReduceCounter