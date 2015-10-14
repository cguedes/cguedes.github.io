function set_fraction(frac, timestamp){
					if(status == false) { 
						k = rotacao1 * frac;
						value_changed[0] = 0;
						value_changed[1] = 0;
						value_changed[2] = 1;
						value_changed[3] = k;
						if(k==rotacao1) status = true;
					}else {
						k = rotacao2 * (1-frac);
						value_changed[0] = 0;
						value_changed[1] = 0;
						value_changed[2] = 1;
						value_changed[3] = k;
						if(k==0) status = false;
					}
				}