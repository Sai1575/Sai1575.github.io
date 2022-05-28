var names=new Array();
names[0]="Abhinav";
names[1]="gambhir";
names[2]="virat";
names[3]="jhoni";
names[4]="kapil";
names[5]="jev";
names[6]="sachin";
names[7]="dravid";
names[8]="dada";
names[9]="rohit";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)===']' || names[i].charAt(0)==='j'){
		console.log("Goodbye"+names[i])
	}
	else{
		console.log("Hello"+ names[i])
	}
	
}