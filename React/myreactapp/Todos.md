1.What is the diff bet library and framework?
 
2.What is Virtual DOM? HOw is it useful?

3.What is npx?

4.What is the difference b/w npx and npm?

5.Difference b/w package.json and package-lock.json?

6.Frontend Industry list of standard folder structure? 

[React Virtual DOM](https://refine.dev/blog/react-virtual-dom/)

React Class Component Lifecycle

The lifecycle of a React class component represents the series of phases it undergoes from its creation to its removal from the DOM. These phases are divided into Mounting, Updating, and Unmounting,
 
1. Mounting Phase (Creation)This phase occurs when an instance of a component is being created and inserted into the DOM. The methods run in this exact order:constructor(props): Initializes local state and binds event handlers. Always call super(props) first.static getDerivedStateFromProps(props, state): Invoked right before render(). It returns an object to update the state based on prop changes, or null to update nothing.render(): The only required method. It examines this.props and this.state and outputs the JSX markup. It must remain pure and free of side effects.componentDidMount(): Invoked immediately after a component is mounted into the DOM tree. This is the ideal place to run side effects like API data fetching, setting up timers, or adding DOM event listeners.
 
2. Updating Phase (Growth)An update is triggered whenever a component's props or state change, causing a UI re-render. The methods execute in this sequence:static getDerivedStateFromProps(props, state): Called first during an update to see if state needs syncing with new props.shouldComponentUpdate(nextProps, nextState): Returns a boolean (true by default) determining whether React should continue re-rendering. Useful for performance optimization.render(): Re-runs to generate the updated JSX structure.getSnapshotBeforeUpdate(prevProps, prevState): Invoked right before the virtual DOM changes are committed to the actual DOM. Any value returned here is passed as a third argument to componentDidUpdate().componentDidUpdate(prevProps, prevState, snapshot): Executes immediately after the DOM update is finalized. Ideal for executing network requests that depend on comparing old vs. new values.
 
3. Unmounting Phase (Removal)This final phase handles cleaning up the component before it is destroyed and removed from the screen.componentWillUnmount(): Invoked immediately before a component is unmounted. You must perform all structural cleanup here, such as invalidating active timers, canceling pending network requests, or removing manual event listeners to prevent dangerous memory leaks. Never call this.setState() inside this hook.

[React Class Component Lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Rules for Hook in React
1. call hook at the top level of Component function
- not inside the loop
- not inside any condition
- not inside nested function
- not in try/catch block

2. call hook from function only
- component function
- custom hook function

3. follow the order