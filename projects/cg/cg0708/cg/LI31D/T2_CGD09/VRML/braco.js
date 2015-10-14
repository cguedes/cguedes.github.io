function set_position(frac, time){

					if(status == false) { 
						coord[1]=4.0 * init * frac * (2.0 -frac);
						if(coord[1]==init)status = true;
					}else {
						coord[1]=-4.0 * init * frac * (2.0 -frac);
						if(coord[1]==0)status = false;
					}


	

	
}