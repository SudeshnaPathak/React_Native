function AuthCheck(WrappedComponent)
{
    return function EnhancedComponent(props)
    {
        return(
            <div>
                {props.isLoggedIn ? 
                <div style={{backgroundColor: 'lightgreen', padding: '20px'}}>
                    <WrappedComponent  {...props}/> 
                </div> : 
                <h1>Invalid User</h1>}
            </div>
        )
       
    }
}

export default AuthCheck;