var totalEarnings = 0;
var pointsPerClick = 2;
var myVar = setInterval(functie, 200);
var cumparabonusuri=[2,4,8,16,32,64,128,256,512];
var x2=2;
var x4=4;
var x8=8;
var x16=16;
var x32=32;
var x64=64;
var x128=128;
var x256=256;
var x512=512;
var newpricex=[200,400,800,16000,32000,64000,128000,256000,512000];

function cumpara2x(){
	if( totalEarnings >= newpricex[0] ){
		totalEarnings = totalEarnings - newpricex[0];
		pointsPerClick = pointsPerClick * x2;
		newpricex[0] = newpricex[0]+ ( newpricex[0] * 0.9 );
	}
}
function cumpara4x(){
	if( totalEarnings >= newpricex[1] ){
		totalEarnings = totalEarnings - newpricex[1];
		pointsPerClick = pointsPerClick * x4;
		newpricex[1] = newpricex[1]+ ( newpricex[1] * 0.9 );
	}
}
function cumpara8x(){
	if( totalEarnings >= newpricex[2] ){
		totalEarnings = totalEarnings - newpricex[2];
		pointsPerClick = pointsPerClick * x8;
		newpricex[2] = newpricex[2]+ ( newpricex[2] * 0.9 );
	}
}
function cumpara16x(){
	if( totalEarnings >= newpricex[3] ){
		totalEarnings = totalEarnings - newpricex[3];
		pointsPerClick = pointsPerClick * x16;
		newpricex[3] = newpricex[3]+ ( newpricex[3] * 0.9 );
	}
}
function cumpara32x(){
	if( totalEarnings >= newpricex[4] ){
		totalEarnings = totalEarnings - newpricex[4];
		pointsPerClick = pointsPerClick * x32;
		newpricex[4] = newpricex[4]+ ( newpricex[4] * 0.9 );
	}
}
function cumpara64x(){
	if( totalEarnings >= newpricex[5] ){
		totalEarnings = totalEarnings - newpricex[5];
		pointsPerClick = pointsPerClick * x64;
		newpricex[5] = newpricex[5]+ ( newpricex[5] * 0.9 );
	}
}
function cumpara128x(){
	if( totalEarnings >= newpricex[6] ){
		totalEarnings = totalEarnings - newpricex[6];
		pointsPerClick = pointsPerClick * x128;
		newpricex[6] = newpricex[6]+ ( newpricex[6] * 0.9 );
	}
}
function cumpara256x(){
	if( totalEarnings >= newpricex[7] ){
		totalEarnings = totalEarnings - newpricex[7];
		pointsPerClick = pointsPerClick * x256;
		newpricex[7] = newpricex[7]+ ( newpricex[7] * 0.9 );
	}
}
function cumpara512x(){
	if( totalEarnings >= newpricex[8] ){
		totalEarnings = totalEarnings - newpricex[8];
		pointsPerClick = pointsPerClick * x512;
		newpricex[8] = newpricex[8]+ ( newpricex[8] * 0.9 );
	}
}

function dreivan(){
	
totalEarnings = totalEarnings + pointsPerClick;
	document.getElementById("Metinul").style.transform="scale(0.96)";
	
	
};
function ridicare(){
	document.getElementById("Metinul").style.transform="scale(1)";
	
}
	
	

function functie(){
	document.getElementById("maniMei").innerHTML = totalEarnings;
	document.getElementById("2x").innerHTML = "2x Clicks | " + newpricex[0] + " Yang";
	document.getElementById("4x").innerHTML = "4x Clicks | " + newpricex[1] + " Yang";
	document.getElementById("8x").innerHTML = "8x Clicks | " + newpricex[2] + " Yang";
	document.getElementById("16x").innerHTML = "16x Clicks | " + newpricex[3] + " Yang";
	document.getElementById("32x").innerHTML = "32x Clicks | " + newpricex[4] + " Yang";
	document.getElementById("64x").innerHTML = "64x Clicks | " + newpricex[5] + " Yang";
	document.getElementById("128x").innerHTML = "128x Clicks | " + newpricex[6] + " Yang";
	document.getElementById("256x").innerHTML = "256x Clicks | " + newpricex[7] + " Yang";
	document.getElementById("512x").innerHTML = "512x Clicks | " + newpricex[8] + " Yang";
	
	
};
