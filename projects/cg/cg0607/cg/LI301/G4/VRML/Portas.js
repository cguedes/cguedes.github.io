function set_fraction(frac, timestamp){
					if(status == false) { 
						k = rotacao * frac;
						value_changed[0] = 0;
						value_changed[1] = 1;
						value_changed[2] = 0;
						value_changed[3] = k;
						if(k==rotacao) status = true;
					}else {
						k = rotacao * (1-frac);
						value_changed[0] = 0;
						value_changed[1] = 1;
						value_changed[2] = 0;
						value_changed[3] = k;
						if(k==0) status = false;
					}
				}