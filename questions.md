1. What is the difference between Component and PureComponent? Give an example where it might break my app.

    A React component is re-rendered when 
    - it's Parent re-render
    - State, Props or Context changes

    PureComponent is a way to skip unwanted re-renders. React does a shallow comparison of props to see if things have changed. If they are equal, the re-render is bailed out. React.memo is the PureComponent equivalent for functional components.

    But shallow comparison of nested data structures can result in false positives. For example, when a deeply nested value in an object prop has changed. For such scenarios PureComponents fails to update the state.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

    When context change the component will re-render even when using shouldComponentUpdate. Can't understand what is meant by _dangerous_.

3. Describe 3 ways to pass information from a component to its PARENT.
    - Passing down a callback function from parent to child as props
    - Using React Context API
    - Global state management solutions like Redux

4. Give 2 ways to prevent components from re-rendering.
- Returning `false` in shouldComponentUpdate()
- Using PureComponent for class components or React memo for functional components

5. What is a fragment and why do we need it? Give an example where it might
break my app.
    Fragment lets you group components without creating an extra node. 
    Can be used as `<React.Fragment></React.Fragment>` or `<></>`.


6. Give 3 examples of the HOC pattern.

    Higher Order Component is one way to re-use logic in React. A Higher Order Component (HOC) receives another component as a parameter. The HOC contains certain logic that we want to apply to the passed component. HOC returns the element after applying that logic.

    Two practical examples I can think of are:
    - [withRouter](https://v5.reactrouter.com/web/api/withRouter) in React Router
    - [connect](https://react-redux.js.org/api/connect) in redux

7. What's the difference in handling exceptions in promises, callbacks and async…await?
- Promises and callback use .catch() or second callback passed to .then()
    ```
    fetch('...').then(()=>// on resolve).catch(()=>// on reject/error)
    fetch('...').then(()=>// on resolve,()=>// on reject/error)
    ```
- Aysnc...await uses try...catch 
    ```
    async getData(){
        try{
            const data=await fetch('...')
        }catch{
            // on reject/error
        }
    }
    ```

8. How many arguments does setState take and why is it async.
    setState takes two arguments.
    - setState(updater,[callback])

        - _updater_ can be a function with signature `(state,props)=>stateChange`. Instead of function we can pass an object as well
        - _callback_ is optional and it is guaranteed to run after the state update.

    - States are updated only after all the event handlers are run. The updated are batched in order to avoid multiple re-renders and working with half-baked(updated) renders.

9. List the steps needed to migrate a Class to Function Component.
    - Declare the function with Component name
    - Convert props to function arguments. Update the usage `this.props` with `props`.
    - Replace lifeCycle methods with React hooks
    - Use useState or useReducer instead of this.setState
    - PureComponent can use React memo instead
    - The function should return the JSX inside Class component's render() method
 

10. List a few ways styles can be used with components.
    - Inline stylesheet with style
    - External stylesheet with className
    - CSS in JS
        - styled components
        - emotion

11. How to render an HTML string coming from the server

    `dangerouslySetInnerHTML` can be used for this.
    ```
    const sanitizer = dompurify.sanitize;
    return <div dangerouslySetInnerHTML={{__html: sanitizer(title)}} />;
    ```