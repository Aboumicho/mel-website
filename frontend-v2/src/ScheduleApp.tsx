import Visible from "./components/Visible"
import Form from "./pages/form"
import { useSelector, useDispatch } from 'react-redux';

export const ScheduleApp = () =>{
    // const {date} = useSelector((state) => {
    //     return {
          
    //     }
    //   });
    return (
        <div className="App">
            <Visible isVisible={true}>
                <Form/>
            </Visible> 
        </div>
    )
}