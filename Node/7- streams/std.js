// process.stdout.write('Hello');

// process.stdout.write(' world \n\n\n\n');

let questions = [
    "what is your name",
    "what is your hobby",
    "what is your preferred programming language"
]

let answers = [];


function ask(i){
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(" > ");
}

process.stdin.on('data' , function(){
   // process.stdout.write("\n " + data.toString().trim() + "/n");
   answers.push( data.toString().trim());
   if(answers.length)
})
ask(0);

