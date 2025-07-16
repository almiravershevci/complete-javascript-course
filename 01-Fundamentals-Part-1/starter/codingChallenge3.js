/* There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times.
 The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, 
and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110. */


const scoreDolphins1 = 200;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;

const scoreKoalas1 = 300;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

const avgDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const avgKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

if(avgDolphins > avgKoalas && avgDolphins >= 100){
    console.log('dolphins win the trophy');
}else if(avgKoalas > avgDolphins && avgKoalas >= 100){
    console.log('koalas win the trophy');
}else if(avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100){
    console.log('both win the trophy');
}else{
    console.log('no one wins the trophy');
}