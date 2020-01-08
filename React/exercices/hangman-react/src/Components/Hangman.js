import React, { Component } from "react";
import { randomWord } from "./words";


//Here we import all the images from the folder images.
import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

class Hangman extends Component {

	// Here we declare the state with the desired variables. 
	// guessed is equal to a new Set. this is similar to the objects, but it is easier to use methods to 
	// know the elements inside the set and also include new elements. The idea is that each time we click in a
	// letter we add this letter to the set guessed.
	// answer is equal to the function created for choosing a random word from the array. this is imported at the
	// beggining of the file. maxWrong is the maximum number of tries that the user has to guess the word. And 
	// images is the array with the imported images
	constructor(props) {
		super(props);
		this.state = { 
			mistake: 0, 
			guessed: new Set(), 
			answer: randomWord(), 
			maxWrong: 6,
			images: [step0, step1, step2, step3, step4, step5, step6]};
	}


	// Here in this function we use to write the word with the '_' in case the user has no guessed. Here we use map
	// to check if the letter is in the guesses that the user has done. For this the method .has is used. this method
	// is similar to the includes method for the arrays. This .has method will check if the letter between parenthesis ()
	// exist in the set. for example if our set has the letters set = 'a','b','c' then if we use the method .has as 
	// set.has('c'), this method will return true. if we use set.has('d') then this will return false as the letter 'd'
	// is not in the set. In case of true we return the letter and in case of false we return '_'. so that we only show
	// the letters the user has guessed.
	guessedWord() {
		return this.state.answer.split("").map(letter => {
			if(this.state.guessed.has(letter)){
				return letter
			}else {
				return '_'
			}
		});
	}

	
	handleGuess = (evt) => {
		// Here we obtain the letter from the button value. Then if the letter is not inside the answer, we add 1 to the
		// mistake count.
		let letter = evt.target.value;
		let mistake = this.state.mistake;
		if(!this.state.answer.includes(letter)){
			mistake = mistake + 1
		}

		// Then here we add the letter to the set using the method .add which is similar to the method push in the arrays. 
		// finally we assign this values to the state using the this.setSate() method
		this.setState({ 
			guessed: this.state.guessed.add(letter),
			mistake: mistake
		});
	}

	// Here we generate the buttons using the map method. We create a string with all the letters, then split to convert it
	// array and use the method map. With the map method we create a jsx code with the button for each letter. 
	// we need to include the key to prevent warnings from the map method. also  the value to obtain it when we click,
	// then add the onClick event and assign it to the handleguess function. Finally we want to disable the button once we
	// make click on it, then we check if the letter has been guessed before by looking at the guessed set. if the word is
	// the set then means the user guessed before and we need to disable the button.
	generateButtons() {
		return "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>{ 
			return(
			<button
				className='letter-red'
				key={letter}
				value={letter}
				onClick={this.handleGuess}
				disabled={this.state.guessed.has(letter)}
			>
				{letter}
			</button>
		)});
	}

	//Here we just set the values of the variables in the state to the default values to initiate the game again. 
	// Also we use the randomWord again to obtain a different word from before.
	resetButton = () => {
		this.setState({
			mistake: 0,
			guessed: new Set(),
			answer: randomWord()
		});
	};

	render() {

		// Here we check if the user has lost or not. if the number of mistakes is higher thant the number
		// of maximum guesses then the user has lost.
		const gameOver = this.state.mistake >= this.state.maxWrong;

		// Here we check if the user has won. For this we check if the guessedWord by the user is equal to the answer.
		// if they are equal isWinner will be true.
		const isWinner = this.guessedWord().join("") === this.state.answer;

		// Here we show the result of the game, if the user is still playing we show the buttons by calling the 
		// generateButtons function.
		let gameStat = this.generateButtons();

		// if the user won, we change the gameStat to the winning message.
		if (isWinner) {
			gameStat = "YOU WON";
		}

		// if the user lost, we change the gameStat to the loser message.
		if (gameOver) {
			gameStat = "YOU LOST";
		}

		return (
			<div className='Hangman'>
				<nav className='navbar navbar-expand-lg'>
					<div className='collapse navbar-collapse' id='navbarText'>
					<a className='navbar-brand text-light' href='/'>
						Hangman. <small>Do (or) Die</small>
					</a>
					<span className='navbar-text text-primary'>Guessed wrong: {this.state.mistake}</span>
					</div>
				</nav>

				<div className='text-center'>
					<img src={this.state.images[this.state.mistake]} alt=' ' />
				</div>
				<p className='text-center text-light'>can you guess the Programming Language ?</p>

				{/* Here depending on the result we show the word the user has guessed so far if he is still playing 
					or the complete word if the user lost. This is done by conditional rendering with the new sintax for
					the if statement*/}
				<p className='Hangman-word text-center'>
					{!gameOver ? this.guessedWord() : this.state.answer}{" "}
				</p>

				{/* Here we add the buttons if the user is playing or the win or lost message if the game is finished.
					We do it by calling the variable gameStat */}
				<div className='text-center text-warning mt-4'>{gameStat}</div>

				<div>
					<p className='text-center'>
						<button className='Hangman-reset' onClick={this.resetButton}>
							Reset
						</button>
					</p>
				</div>

			</div>
		);
	}
}

export default Hangman;
