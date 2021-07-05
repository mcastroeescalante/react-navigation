import React, {useState, useEffect, useRef, useLayoutEffect, useReducer} from 'react';

const initalState = {count:0}

const reducer = (state:any, action:any)=>{
    switch(action.type){
        case 'increase':
            return {count:state.count+1}
        case 'decrease':
            return {count:state.count-1}
        default:
            throw new Error('Reducer failed!')
    }
}

export const Home:React.FC = () =>{

    const [state, dispatch] = useReducer(reducer, initalState)
	const [count, setCount] = useState<number>(0);
	const [todo, setTodo] = useState<any>([{todo:'one'}]);
	const refDiv = useRef<HTMLDivElement | null>(null);
	const [clicked, setClicked] = useState<boolean>(false);
	// component didmount
	useEffect(() => {
		const loadAPI  = () => [''];
		loadAPI();
 		console.log('Component did mount correctly');
	},[])


	useLayoutEffect(() => {
		console.log('FROM USE LAYOUT EFFECT');
	});
	
	useEffect(() => {
		if(clicked){
			console.log('Click cambio de estado')
		}	
	},[clicked])

	useEffect(() => {
		console.log('useEffect');
	})

	useEffect(() => {
		if(refDiv.current !== undefined){
			console.log('element exist', refDiv.current);
		}
	}, [refDiv])

	const handleTodo = () => {
		setTodo((prevState:any) => {
			return[...prevState, {todo:'other'}]
		})
	}

	const handleClick = () => {
		setCount(count+1);
		setClicked(true);
	}


	return<>
	<h1>HOME PAGE</h1>
		<div>
			<p>You clicked: {count} times the button</p>
			<button onClick={handleClick}>Add up</button>
		</div>
		<div ref={refDiv}>
			<p>Hola</p>
		</div>
		<div>
			<h3>TODO list:</h3>
			<ul>
			{todo.map((item:any)=> <li key={item.todo}>{item.todo}</li>)}
			</ul>
			<button onClick={handleTodo}>Add one</button>
            <div>
                <h3>Count state: {state.count}</h3>
                <button onClick={()=>dispatch({type:'increase'})}>Add!</button>
                <button onClick={()=>dispatch({type:'decrease'})}>Delete!</button>
            </div>
		</div>
	</>
};