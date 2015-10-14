function click(value) {
	//do nothing if the object didn't reach the finnish position
	if (position.translation[0] != interpolator.keyValue[1][0]) return 0;
	//swap start <-> finnish
	tmp = interpolator.keyValue[1][0];
	interpolator.keyValue[1][0] = interpolator.keyValue[0][0];
	interpolator.keyValue[0][0] = tmp;
	//start timer
	startTimer = value;								
}