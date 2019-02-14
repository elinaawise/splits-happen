(() => {
    'use strict';
    
    function parseAllIntValues (test) {
        var turnsByFrame = test.split("");
        var line = [];
        for (var i = 0; i < turnsByFrame.length; i++) {
            if (!isNaN(parseInt(turnsByFrame[i], 10))) {
                line[i] = parseInt(turnsByFrame[i], 10);
            } else if (turnsByFrame[i] != undefined) {
                line[i] = turnsByFrame[i];
            }
        }
        return line;
    }
 
    function bowledStrike (frame) {
        var score = 0;
        
        if (frame == 'X') {
			score += 10;
		} 
		if (frame == '/') {
		    score += frame;
		} 
		if (!isNaN(frame)) {
    		score += frame;
		}
		
		return score;
    }
    
    function calculateScore(line) {
        var lineScore =0;
        var frame = 0;
    	for (var i = 0; i < line.length; i++) {
    	    if (frame == 10) {
    	        break;
    	    }
      		if (line[i] == 'X') {
      		    lineScore += 10;
    			if (line[i+2] =='/') {
    			    lineScore += 10;
    			} else {
    			    lineScore += bowledStrike(line[i+1]) + bowledStrike(line[i+2]);
    			}
    			frame++;
    		} else if (line[i] =='/') {
    			lineScore += 10 - line[i-1];

    			if(line[i+1] =='X') {
    			    lineScore += 10;
    			} else if (!isNaN(line[i+1])) {
    			    lineScore += line[i+1];
    			}
    			frame++;
    		} else if (line[i] == '-') {
    		    if (!isNaN(line[i+1])) {
    		        i++;
        		    lineScore += line[i];
        		    frame++;
   		        }
    		} else if (!isNaN(line[i])) {
		        lineScore += line[i];
		        if (line[i+1] == '-') {
		            frame++;
		        } else if (!isNaN(line[i+1])) {
		            lineScore += line[i+1];
		            i++;
		            frame++;
		        }
    		}
    	}
    	return lineScore;
    }

    function bowlingLine(test) {
        var line = parseAllIntValues(test);
    	return calculateScore(line);
    }

    console.log('Bowling line XXXXXXXXXXXX');
    console.log('Score ', bowlingLine('XXXXXXXXXXXX'));
    console.log('Bowling line 9-9-9-9-9-9-9-9-9-9-');
    console.log('Score ', bowlingLine('9-9-9-9-9-9-9-9-9-9-'));
    console.log('Bowling line 5/5/5/5/5/5/5/5/5/5/5');
    console.log('Score ', bowlingLine('5/5/5/5/5/5/5/5/5/5/5'));
    console.log('Bowling line X7/9-X-88/-6XXX81');
    console.log('Score ', bowlingLine('X7/9-X-88/-6XXX81'));
  
})();