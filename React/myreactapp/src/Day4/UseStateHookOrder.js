
export const UseStateHookOrder = () => 
{
        const [item, setItem] = React.useState(0);
        //Not allowed to use useState inside if condition or loops or nested functions. 
        // It should be used at the top level of the component.Otherswise, it will throw an error. 
        // The reason is that React relies on the order of hooks to manage state and effects correctly. Slots are reserved for each hook
        // If you use hooks conditionally, it can lead to unpredictable behavior and bugs in your application.
        // if(item > 0)
        // {
        // const [discount, setDiscount] = React.useState(" ");
        // const [total, setTotal] = React.useState(100);
        // }

        return(
            <div>Cart is loaded</div>
        )
}