type Props = {
    isVisible: boolean,
    children: JSX.Element,
  };
  
const Visible : React.FC<Props> = ({isVisible, children}) =>{ 
    const display = () => {
        if(isVisible){
            return (
            <div>{children}</div>)
        }
        else{
            return( null);
        }
    }

    return (
        <div>
            {display()}
        </div>
        )
}

export default Visible;