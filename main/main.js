// Write your cade below:
function main(numberA, numberB) {
	var nA = stringToNumber(numberA);
	var nB = stringToNumber(numberB);
	console.log(nA);
	console.log(nB);
	var countA = 0;
	var countB = 0;

	nB.forEach(function(ele){
		if(nA.indexOf(ele) >= 0){
			if(nA.indexOf(ele) == nB.indexOf(ele)){
				countA ++;
			}else{
				countB++;
			}
		}
			
	});
	return countA.toString()+'A'+countB.toString()+'B';
};
function stringToNumber(str){
	var temp = str.split('');
	for (var index = 0; index < temp.length ; index++)
	{
		temp[index] = parseInt(temp[index]);
	}
	return temp;
}
module.exports = main;