import React,{useState,useEffect} from 'react';
import { addDoc, todoRef, getDocs, collection, todoRefAlt } from '../config/firebase';
import '.././App.css'

const Home = () => {

// FOR ADDING ITEMS TO FIREBASE
const [ inputValue, setinputValue ] = useState('');
// FOR GETTING VALUES OF TODO FROM FIREBASE
const [ todoItems, settodoItems ] = useState([]);

	const handleInput = (e) => {
		setinputValue(e.target.value);
		// console.log(e.target.value)
	}


	const onFinish = () => {
		const obj = {task: inputValue}
		addDoc(todoRef, obj);
		console.log("Item Added")
	}


// For Practice
	// const onFinishAlt = () => {
	// 	const objAlt = {full_name: inputValue, source:"gstore"}
	// 	addDoc(todoRefAlt, objAlt);
	// 	console.log("Name Added")
	// }


// FOR GETTING VALUES OF TODO FROM FIREBASE
	useEffect(() => {        //runs first of all & only one time
		getTodos()
	},[])

	const getTodos = async() => {
		const querySnapshot = await getDocs(todoRef);
		let arr = [] ;

		querySnapshot.forEach( (doc) => {
			// arr.push({id: doc.id, value: doc.data().inputValue });

			// settodoItems([...arr])

			// OR
			arr.push({id: doc.id, ...doc.data() });
			settodoItems(arr)		

			// console.log(doc)
			// console.log(doc.id)
			console.log(doc.data())
			// console.log(value)

		} )	
	}
// console.log(todoItems)
// console.log(todoRef)


// 	// FOR PRACTICE (Get names-reference)
// 	const getNames = async() => {
// 		const querySnapshot = await getDocs(todoRefAlt);
// 		let arr = [] ;

// 		querySnapshot.forEach( (doc) => {
// 			// arr.push({id: doc.id, value: doc.data().inputValue });

// 			// settodoItems([...arr])

// 			// OR
// 			arr.push({id: doc.id, ...doc.data() });
// 			settodoItems(arr)		
// 		} )	
// 	}



	// TODO UI HTML
	return(
		<div className="main-div">
		<div className="container" className="center-div">
		<h1>Todo with Firebase</h1>
		<input type="text" onChange={handleInput} />
		{<br/>}
		<button onClick={onFinish}>Add Task</button>
 {/*For Practice*/}
		{/*<button onClick={onFinishAlt}>Add Name</button>*/}
	{
		todoItems.map((items, index)=>{
			return(
				<div key={index}>
					<p>{todoItems.index}</p>
				</div>
		)
		})
	}

		</div>
		</div>
		);
}

export default Home;