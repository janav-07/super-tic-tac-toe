		var tltl = document.getElementById('tl-tl');
		var tltm = document.getElementById('tl-tm');
		var tltr = document.getElementById('tl-tr');
		var tlml = document.getElementById('tl-ml');
		var tlmm = document.getElementById('tl-mm');
		var tlmr = document.getElementById('tl-mr');
		var tlbl = document.getElementById('tl-bl');
		var tlbm = document.getElementById('tl-bm');
		var tlbr = document.getElementById('tl-br');
		var tmtl = document.getElementById('tm-tl');
		var tmtm = document.getElementById('tm-tm');
		var tmtr = document.getElementById('tm-tr');
		var tmml = document.getElementById('tm-ml');
		var tmmm = document.getElementById('tm-mm');
		var tmmr = document.getElementById('tm-mr');
		var tmbl = document.getElementById('tm-bl');
		var tmbm = document.getElementById('tm-bm');
		var tmbr = document.getElementById('tm-br');
		var trtl = document.getElementById('tr-tl');
		var trtm = document.getElementById('tr-tm');
		var trtr = document.getElementById('tr-tr');
		var trml = document.getElementById('tr-ml');
		var trmm = document.getElementById('tr-mm');
		var trmr = document.getElementById('tr-mr');
		var trbl = document.getElementById('tr-bl');
		var trbm = document.getElementById('tr-bm');
		var trbr = document.getElementById('tr-br');
		var mltl = document.getElementById('ml-tl');
		var mltm = document.getElementById('ml-tm');
		var mltr = document.getElementById('ml-tr');
		var mlml = document.getElementById('ml-ml');
		var mlmm = document.getElementById('ml-mm');
		var mlmr = document.getElementById('ml-mr');
		var mlbl = document.getElementById('ml-bl');
		var mlbm = document.getElementById('ml-bm');
		var mlbr = document.getElementById('ml-br');
		var mmtl = document.getElementById('mm-tl');
		var mmtm = document.getElementById('mm-tm');
		var mmtr = document.getElementById('mm-tr');
		var mmml = document.getElementById('mm-ml');
		var mmmm = document.getElementById('mm-mm');
		var mmmr = document.getElementById('mm-mr');
		var mmbl = document.getElementById('mm-bl');
		var mmbm = document.getElementById('mm-bm');
		var mmbr = document.getElementById('mm-br');
		var mrtl = document.getElementById('mr-tl');
		var mrtm = document.getElementById('mr-tm');
		var mrtr = document.getElementById('mr-tr');
		var mrml = document.getElementById('mr-ml');
		var mrmm = document.getElementById('mr-mm');
		var mrmr = document.getElementById('mr-mr');
		var mrbl = document.getElementById('mr-bl');
		var mrbm = document.getElementById('mr-bm');
		var mrbr = document.getElementById('mr-br');
		var bltl = document.getElementById('bl-tl');
		var bltm = document.getElementById('bl-tm');
		var bltr = document.getElementById('bl-tr');
		var blml = document.getElementById('bl-ml');
		var blmm = document.getElementById('bl-mm');
		var blmr = document.getElementById('bl-mr');
		var blbl = document.getElementById('bl-bl');
		var blbm = document.getElementById('bl-bm');
		var blbr = document.getElementById('bl-br');
		var bmtl = document.getElementById('bm-tl');
		var bmtm = document.getElementById('bm-tm');
		var bmtr = document.getElementById('bm-tr');
		var bmml = document.getElementById('bm-ml');
		var bmmm = document.getElementById('bm-mm');
		var bmmr = document.getElementById('bm-mr');
		var bmbl = document.getElementById('bm-bl');
		var bmbm = document.getElementById('bm-bm');
		var bmbr = document.getElementById('bm-br');
		var brtl = document.getElementById('br-tl');
		var brtm = document.getElementById('br-tm');
		var brtr = document.getElementById('br-tr');
		var brml = document.getElementById('br-ml');
		var brmm = document.getElementById('br-mm');
		var brmr = document.getElementById('br-mr');
		var brbl = document.getElementById('br-bl');
		var brbm = document.getElementById('br-bm');
		var brbr = document.getElementById('br-br');
		
		var tl = [tltl, tltm, tltr, tlml, tlmm, tlmr, tlbl, tlbm, tlbr];
		var tm = [tmtl, tmtm, tmtr, tmml, tmmm, tmmr, tmbl, tmbm, tmbr];
		var tr = [trtl, trtm, trtr, trml, trmm, trmr, trbl, trbm, trbr];
		var ml = [mltl, mltm, mltr, mlml, mlmm, mlmr, mlbl, mlbm, mlbr];
		var mm = [mmtl, mmtm, mmtr, mmml, mmmm, mmmr, mmbl, mmbm, mmbr];
		var mr = [mrtl, mrtm, mrtr, mrml, mrmm, mrmr, mrbl, mrbm, mrbr];
		var bl = [bltl, bltm, bltr, blml, blmm, blmr, blbl, blbm, blbr];
		var bm = [bmtl, bmtm, bmtr, bmml, bmmm, bmmr, bmbl, bmbm, bmbr];
		var br = [brtl, brtm, brtr, brml, brmm, brmr, brbl, brbm, brbr];
		
		var all = [tl, tm, tr, ml, mm, mr, bl, bm, br];
		
		var currentPlayer = "🍄";
		var gameOver = false;
		var removeHighlights = true;
		
		var owners = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		var taken = [];
		var takenString = [];
		var currentlyAllowed = [tltl, tltm, tltr, tlml, tlmm, tlmr, tlbl, tlbm, tlbr, tmtl, tmtm, tmtr, tmml, tmmm, tmmr, tmbl, tmbm, tmbr, trtl, trtm, trtr, trml, trmm, trmr, trbl, trbm, trbr, mltl, mltm, mltr, mlml, mlmm, mlmr, mlbl, mlbm, mlbr, mmtl, mmtm, mmtr, mmml, mmmm, mmmr, mmbl, mmbm, mmbr, mrtl, mrtm, mrtr, mrml, mrmm, mrmr, mrbl, mrbm, mrbr, bltl, bltm, bltr, blml, blmm, blmr, blbl, blbm, blbr, bmtl, bmtm, bmtr, bmml, bmmm, bmmr, bmbl, bmbm, bmbr, brtl, brtm, brtr, brml, brmm, brmr, brbl, brbm, brbr];
		var allowed = [tltl, tltm, tltr, tlml, tlmm, tlmr, tlbl, tlbm, tlbr, tmtl, tmtm, tmtr, tmml, tmmm, tmmr, tmbl, tmbm, tmbr, trtl, trtm, trtr, trml, trmm, trmr, trbl, trbm, trbr, mltl, mltm, mltr, mlml, mlmm, mlmr, mlbl, mlbm, mlbr, mmtl, mmtm, mmtr, mmml, mmmm, mmmr, mmbl, mmbm, mmbr, mrtl, mrtm, mrtr, mrml, mrmm, mrmr, mrbl, mrbm, mrbr, bltl, bltm, bltr, blml, blmm, blmr, blbl, blbm, blbr, bmtl, bmtm, bmtr, bmml, bmmm, bmmr, bmbl, bmbm, bmbr, brtl, brtm, brtr, brml, brmm, brmr, brbl, brbm, brbr];
		const everything = [tltl, tltm, tltr, tlml, tlmm, tlmr, tlbl, tlbm, tlbr, tmtl, tmtm, tmtr, tmml, tmmm, tmmr, tmbl, tmbm, tmbr, trtl, trtm, trtr, trml, trmm, trmr, trbl, trbm, trbr, mltl, mltm, mltr, mlml, mlmm, mlmr, mlbl, mlbm, mlbr, mmtl, mmtm, mmtr, mmml, mmmm, mmmr, mmbl, mmbm, mmbr, mrtl, mrtm, mrtr, mrml, mrmm, mrmr, mrbl, mrbm, mrbr, bltl, bltm, bltr, blml, blmm, blmr, blbl, blbm, blbr, bmtl, bmtm, bmtr, bmml, bmmm, bmmr, bmbl, bmbm, bmbr, brtl, brtm, brtr, brml, brmm, brmr, brbl, brbm, brbr];
		
		function action(quadrant, subQuadrant) {
			square = document.getElementById(quadrant + "-" + subQuadrant);
			if (allowed.includes(square) == true && currentlyAllowed.includes(square) == true) {
				
				for (let i = currentlyAllowed.length; i >= 0; i--) {
					if (taken.includes(currentlyAllowed[i])) {
						currentlyAllowed.splice(i, 1);
					}
				}
				if (removeHighlights == true) {
					for (let i = 0; i < currentlyAllowed.length; i++) {
						currentlyAllowed[i].classList.remove("highlight");
					}
				}
				document.getElementById(quadrant + "-" + subQuadrant).innerHTML = currentPlayer;
				
				if (currentPlayer == "🍄") {
					currentPlayer = "🪙";
					square.classList.add("highlightX");
				} else if (currentPlayer == "🪙") {
					currentPlayer = "🍄";
					square.classList.add("highlightO");
				}
				document.getElementById('nextPlayer').innerHTML = "Next Player: " + currentPlayer;
				
				taken.push(square);
				takenString.push(quadrant + subQuadrant);
				
				index = allowed.indexOf(square);
				if (index >= 0) {
					allowed.splice(index, 1);
				}
				
				document.getElementById('boardInput').classList.add("invisible");
				document.getElementById('setBoard').classList.replace("center", "invisible");
				document.getElementById('undo').classList.replace("invisible", "center");
				
				analyze(subQuadrant);
					
			}
		}
		
		var startBoard = document.getElementById('gameBoard').innerHTML;
		
		function analyze(subQuadrant) {
			var tltlv = document.getElementById('tl-tl').innerHTML;
			var tltmv = document.getElementById('tl-tm').innerHTML;
			var tltrv = document.getElementById('tl-tr').innerHTML;
			var tlmlv = document.getElementById('tl-ml').innerHTML;
			var tlmmv = document.getElementById('tl-mm').innerHTML;
			var tlmrv = document.getElementById('tl-mr').innerHTML;
			var tlblv = document.getElementById('tl-bl').innerHTML;
			var tlbmv = document.getElementById('tl-bm').innerHTML;
			var tlbrv = document.getElementById('tl-br').innerHTML;
			var tmtlv = document.getElementById('tm-tl').innerHTML;
			var tmtmv = document.getElementById('tm-tm').innerHTML;
			var tmtrv = document.getElementById('tm-tr').innerHTML;
			var tmmlv = document.getElementById('tm-ml').innerHTML;
			var tmmmv = document.getElementById('tm-mm').innerHTML;
			var tmmrv = document.getElementById('tm-mr').innerHTML;
			var tmblv = document.getElementById('tm-bl').innerHTML;
			var tmbmv = document.getElementById('tm-bm').innerHTML;
			var tmbrv = document.getElementById('tm-br').innerHTML;
			var trtlv = document.getElementById('tr-tl').innerHTML;
			var trtmv = document.getElementById('tr-tm').innerHTML;
			var trtrv = document.getElementById('tr-tr').innerHTML;
			var trmlv = document.getElementById('tr-ml').innerHTML;
			var trmmv = document.getElementById('tr-mm').innerHTML;
			var trmrv = document.getElementById('tr-mr').innerHTML;
			var trblv = document.getElementById('tr-bl').innerHTML;
			var trbmv = document.getElementById('tr-bm').innerHTML;
			var trbrv = document.getElementById('tr-br').innerHTML;
			var mltlv = document.getElementById('ml-tl').innerHTML;
			var mltmv = document.getElementById('ml-tm').innerHTML;
			var mltrv = document.getElementById('ml-tr').innerHTML;
			var mlmlv = document.getElementById('ml-ml').innerHTML;
			var mlmmv = document.getElementById('ml-mm').innerHTML;
			var mlmrv = document.getElementById('ml-mr').innerHTML;
			var mlblv = document.getElementById('ml-bl').innerHTML;
			var mlbmv = document.getElementById('ml-bm').innerHTML;
			var mlbrv = document.getElementById('ml-br').innerHTML;
			var mmtlv = document.getElementById('mm-tl').innerHTML;
			var mmtmv = document.getElementById('mm-tm').innerHTML;
			var mmtrv = document.getElementById('mm-tr').innerHTML;
			var mmmlv = document.getElementById('mm-ml').innerHTML;
			var mmmmv = document.getElementById('mm-mm').innerHTML;
			var mmmrv = document.getElementById('mm-mr').innerHTML;
			var mmblv = document.getElementById('mm-bl').innerHTML;
			var mmbmv = document.getElementById('mm-bm').innerHTML;
			var mmbrv = document.getElementById('mm-br').innerHTML;
			var mrtlv = document.getElementById('mr-tl').innerHTML;
			var mrtmv = document.getElementById('mr-tm').innerHTML;
			var mrtrv = document.getElementById('mr-tr').innerHTML;
			var mrmlv = document.getElementById('mr-ml').innerHTML;
			var mrmmv = document.getElementById('mr-mm').innerHTML;
			var mrmrv = document.getElementById('mr-mr').innerHTML;
			var mrblv = document.getElementById('mr-bl').innerHTML;
			var mrbmv = document.getElementById('mr-bm').innerHTML;
			var mrbrv = document.getElementById('mr-br').innerHTML;
			var bltlv = document.getElementById('bl-tl').innerHTML;
			var bltmv = document.getElementById('bl-tm').innerHTML;
			var bltrv = document.getElementById('bl-tr').innerHTML;
			var blmlv = document.getElementById('bl-ml').innerHTML;
			var blmmv = document.getElementById('bl-mm').innerHTML;
			var blmrv = document.getElementById('bl-mr').innerHTML;
			var blblv = document.getElementById('bl-bl').innerHTML;
			var blbmv = document.getElementById('bl-bm').innerHTML;
			var blbrv = document.getElementById('bl-br').innerHTML;
			var bmtlv = document.getElementById('bm-tl').innerHTML;
			var bmtmv = document.getElementById('bm-tm').innerHTML;
			var bmtrv = document.getElementById('bm-tr').innerHTML;
			var bmmlv = document.getElementById('bm-ml').innerHTML;
			var bmmmv = document.getElementById('bm-mm').innerHTML;
			var bmmrv = document.getElementById('bm-mr').innerHTML;
			var bmblv = document.getElementById('bm-bl').innerHTML;
			var bmbmv = document.getElementById('bm-bm').innerHTML;
			var bmbrv = document.getElementById('bm-br').innerHTML;
			var brtlv = document.getElementById('br-tl').innerHTML;
			var brtmv = document.getElementById('br-tm').innerHTML;
			var brtrv = document.getElementById('br-tr').innerHTML;
			var brmlv = document.getElementById('br-ml').innerHTML;
			var brmmv = document.getElementById('br-mm').innerHTML;
			var brmrv = document.getElementById('br-mr').innerHTML;
			var brblv = document.getElementById('br-bl').innerHTML;
			var brbmv = document.getElementById('br-bm').innerHTML;
			var brbrv = document.getElementById('br-br').innerHTML;
			
			var tlv = [tltlv, tltmv, tltrv, tlmlv, tlmmv, tlmrv, tlblv, tlbmv, tlbrv];
			var tmv = [tmtlv, tmtmv, tmtrv, tmmlv, tmmmv, tmmrv, tmblv, tmbmv, tmbrv];
			var trv = [trtlv, trtmv, trtrv, trmlv, trmmv, trmrv, trblv, trbmv, trbrv];
			var mlv = [mltlv, mltmv, mltrv, mlmlv, mlmmv, mlmrv, mlblv, mlbmv, mlbrv];
			var mmv = [mmtlv, mmtmv, mmtrv, mmmlv, mmmmv, mmmrv, mmblv, mmbmv, mmbrv];
			var mrv = [mrtlv, mrtmv, mrtrv, mrmlv, mrmmv, mrmrv, mrblv, mrbmv, mrbrv];
			var blv = [bltlv, bltmv, bltrv, blmlv, blmmv, blmrv, blblv, blbmv, blbrv];
			var bmv = [bmtlv, bmtmv, bmtrv, bmmlv, bmmmv, bmmrv, bmblv, bmbmv, bmbrv];
			var brv = [brtlv, brtmv, brtrv, brmlv, brmmv, brmrv, brblv, brbmv, brbrv];
			
			var allv = [tlv, tmv, trv, mlv, mmv, mrv, blv, bmv, brv];
			
			for (let i = 0; i < allv.length; i++) {
				if (allv[i][0] == allv[i][1] && allv[i][0] == allv[i][2] && allv[i][0] !== "") {
					claim(i, allv[i][0]);
					owners[i] = allv[i][0];
					block(i);
				}
				else if (allv[i][3] == allv[i][4] && allv[i][3] == allv[i][5] && allv[i][3] !== "") {
					claim(i, allv[i][3]);
					owners[i] = allv[i][3];
					block(i);
				}
				else if (allv[i][6] == allv[i][7] && allv[i][6] == allv[i][8] && allv[i][6] !== "") {
					claim(i, allv[i][6]);
					owners[i] = allv[i][6];
					block(i);
				}
				else if (allv[i][0] == allv[i][3] && allv[i][0] == allv[i][6] && allv[i][0] !== "") {
					claim(i, allv[i][0]);
					owners[i] = allv[i][0];
					block(i);
				}
				else if (allv[i][1] == allv[i][4] && allv[i][1] == allv[i][7] && allv[i][1] !== "") {
					claim(i, allv[i][1]);
					owners[i] = allv[i][1];
					block(i);
				}
				else if (allv[i][2] == allv[i][5] && allv[i][2] == allv[i][8] && allv[i][2] !== "") {
					claim(i, allv[i][2]);
					owners[i] = allv[i][2];
					block(i);
				}
				else if (allv[i][0] == allv[i][4] && allv[i][0] == allv[i][8] && allv[i][0] !== "") {
					claim(i, allv[i][0]);
					owners[i] = allv[i][0];
					block(i);
				}
				else if (allv[i][2] == allv[i][4] && allv[i][2] == allv[i][6] && allv[i][2] !== "") {
					claim(i, allv[i][2]);
					owners[i] = allv[i][2];
					block(i);
				}
				else if (allv[i][0] !== "" && allv[i][1] !== "" && allv[i][2] !== "" && allv[i][3] !== "" && allv[i][4] !== "" && allv[i][5] !== "" && allv[i][6] !== "" && allv[i][7] !== "" && allv[i][8] !== "") {
					tie(i);
				}
			}
			
			if (owners[0] == owners[1] && owners[0] == owners[2] && owners[0] !== 0 && owners[0] !== 1) {
				win(owners[0]);
			}
			else if (owners[3] == owners[4] && owners[3] == owners[5] && owners[3] !== 0 && owners[3] !== 1) {
				win(owners[3]);
			}
			else if (owners[6] == owners[7] && owners[6] == owners[8] && owners[6] !== 0 && owners[6] !== 1) {
				win(owners[6]);
			}
			else if (owners[0] == owners[3] && owners[0] == owners[6] && owners[0] !== 0 && owners[0] !== 1) {
				win(owners[0]);	
			}
			else if (owners[1] == owners[4] && owners[1] == owners[7] && owners[1] !== 0 && owners[1] !== 1) {
				win(owners[1]);	
			}
			else if (owners[2] == owners[5] && owners[2] == owners[8] && owners[2] !== 0 && owners[2] !== 1) {
				win(owners[2]);	
			}
			else if (owners[0] == owners[4] && owners[0] == owners[8] && owners[0] !== 0 && owners[0] !== 1) {
				win(owners[0]);
			}
			else if (owners[2] == owners[4] && owners[2] == owners[6] && owners[2] !== 0 && owners[2] !== 1) {
				win(owners[2]);	
			}
			else if (owners[0] !== 0 && owners[1] !== 0 && owners[2] !== 0 && owners[3] !== 0 && owners[4] !== 0 && owners[5] !== 0 && owners[6] !== 0 && owners[7] !== 0 && owners[8] !== 0) {
				tie(9)
			}
			
			currentlyAllowed = [];
			removeHighlights = true;
			
			if (subQuadrant == "tl") {
				if (owners[0] == 0) {
					currentlyAllowed = tl;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "tm") {
				if (owners[1] == 0) {
					currentlyAllowed = tm;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "tr") {
				if (owners[2] == 0) {
					currentlyAllowed = tr;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "ml") {
				if (owners[3] == 0) {
					currentlyAllowed = ml;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "mm") {
				if (owners[4] == 0) {
					currentlyAllowed = mm;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "mr") {
				if (owners[5] == 0) {
					currentlyAllowed = mr;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "bl") {
				if (owners[6] == 0) {
					currentlyAllowed = bl;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "bm") {
				if (owners[7] == 0) {
					currentlyAllowed = bm;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			if (subQuadrant == "br") {
				if (owners[8] == 0) {
					currentlyAllowed = br;
				}
				else {
					currentlyAllowed = everything;
				}
			}
			
			if (currentlyAllowed == everything) {
				removeHighlights = false;
			}
			else {
				for (let i = currentlyAllowed.length; i >= 0; i--) {
					if (taken.includes(currentlyAllowed[i])) {
						currentlyAllowed.splice(i, 1);
					}
				}
				
				for (let i = 0; i < currentlyAllowed.length; i++) {
					currentlyAllowed[i].classList.add("highlight");
				}
			}
		}
		
		function claim(box, player) {
			if (player == "🍄") {
				if (box == 0) {
					document.getElementById('tl').classList.add("highlightX");
				}
				if (box == 1) {
					document.getElementById('tm').classList.add("highlightX");
				}
				if (box == 2) {
					document.getElementById('tr').classList.add("highlightX");
				}
				if (box == 3) {
					document.getElementById('ml').classList.add("highlightX");
				}
				if (box == 4) {
					document.getElementById('mm').classList.add("highlightX");
				}
				if (box == 5) {
					document.getElementById('mr').classList.add("highlightX");
				}
				if (box == 6) {
					document.getElementById('bl').classList.add("highlightX");
				}
				if (box == 7) {
					document.getElementById('bm').classList.add("highlightX");
				}
				if (box == 8) {
					document.getElementById('br').classList.add("highlightX");
				}
			}
			if (player == "🪙") {
				if (box == 0) {
					document.getElementById('tl').classList.add("highlightO");
				}
				if (box == 1) {
					document.getElementById('tm').classList.add("highlightO");
				}
				if (box == 2) {
					document.getElementById('tr').classList.add("highlightO");
				}
				if (box == 3) {
					document.getElementById('ml').classList.add("highlightO");
				}
				if (box == 4) {
					document.getElementById('mm').classList.add("highlightO");
				}
				if (box == 5) {
					document.getElementById('mr').classList.add("highlightO");
				}
				if (box == 6) {
					document.getElementById('bl').classList.add("highlightO");
				}
				if (box == 7) {
					document.getElementById('bm').classList.add("highlightO");
				}
				if (box == 8) {
					document.getElementById('br').classList.add("highlightO");
				}
			}
		}
		
		function block(box) {
			for (let i = 0; i < all[box].length; i++) {
				index = allowed.indexOf(all[box][i]);
				if (index >= 0) {
					allowed.splice(index, 1);
				}
			}
		}
		
		function win(player) {
			for (let i = currentlyAllowed.length; i >= 0; i--) {
				if (taken.includes(currentlyAllowed[i])) {
					currentlyAllowed.splice(i, 1);
				}
			}
			for (let i = 0; i < currentlyAllowed.length; i++) {
				currentlyAllowed[i].classList.remove("highlight");
			}
			document.getElementById("winner").innerHTML = player + " Wins!";
			document.getElementById("resetButton").classList.replace("invisible", "center");
			outputCode = takenString.join("-");
			document.getElementById("copyCode").innerHTML = "Game ID: " + outputCode.toString();
			document.getElementById("copyButton").classList.replace("invisible", "center");
			allowed = [];
		}
		
		function tie(box) {
			if (box !== 9) {
				owners[box] = 1;
			}
			if (box == 9) {
				for (let i = currentlyAllowed.length; i >= 0; i--) {
					if (taken.includes(currentlyAllowed[i])) {
						currentlyAllowed.splice(i, 1);
					}
				}
				for (let i = 0; i < currentlyAllowed.length; i++) {
					currentlyAllowed[i].classList.remove("highlight");
				}	
				document.getElementById("winner").innerHTML = "It's a Tie!";
				document.getElementById("resetButton").classList.replace("invisible", "center");
				outputCode = takenString.join("-");
				document.getElementById("copyCode").innerHTML = "Game ID: " + outputCode.toString();
				document.getElementById("copyButton").classList.replace("invisible", "center");
				allowed = [];
			}
		}
		
		function setBoard(boardID) {
			
			document.getElementById('gameBoard').innerHTML = startBoard;
			document.getElementById('nextPlayer').innerHTML = "Next Player: 🍄";
			
			tltl = document.getElementById('tl-tl');
			tltm = document.getElementById('tl-tm');
			tltr = document.getElementById('tl-tr');
			tlml = document.getElementById('tl-ml');
			tlmm = document.getElementById('tl-mm');
			tlmr = document.getElementById('tl-mr');
			tlbl = document.getElementById('tl-bl');
			tlbm = document.getElementById('tl-bm');
			tlbr = document.getElementById('tl-br');
			tmtl = document.getElementById('tm-tl');
			tmtm = document.getElementById('tm-tm');
			tmtr = document.getElementById('tm-tr');
			tmml = document.getElementById('tm-ml');
			tmmm = document.getElementById('tm-mm');
			tmmr = document.getElementById('tm-mr');
			tmbl = document.getElementById('tm-bl');
			tmbm = document.getElementById('tm-bm');
			tmbr = document.getElementById('tm-br');
			trtl = document.getElementById('tr-tl');
			trtm = document.getElementById('tr-tm');
			trtr = document.getElementById('tr-tr');
			trml = document.getElementById('tr-ml');
			trmm = document.getElementById('tr-mm');
			trmr = document.getElementById('tr-mr');
			trbl = document.getElementById('tr-bl');
			trbm = document.getElementById('tr-bm');
			trbr = document.getElementById('tr-br');
			mltl = document.getElementById('ml-tl');
			mltm = document.getElementById('ml-tm');
			mltr = document.getElementById('ml-tr');
			mlml = document.getElementById('ml-ml');
			mlmm = document.getElementById('ml-mm');
			mlmr = document.getElementById('ml-mr');
			mlbl = document.getElementById('ml-bl');
			mlbm = document.getElementById('ml-bm');
			mlbr = document.getElementById('ml-br');
			mmtl = document.getElementById('mm-tl');
			mmtm = document.getElementById('mm-tm');
			mmtr = document.getElementById('mm-tr');
			mmml = document.getElementById('mm-ml');
			mmmm = document.getElementById('mm-mm');
			mmmr = document.getElementById('mm-mr');
			mmbl = document.getElementById('mm-bl');
			mmbm = document.getElementById('mm-bm');
			mmbr = document.getElementById('mm-br');
			mrtl = document.getElementById('mr-tl');
			mrtm = document.getElementById('mr-tm');
			mrtr = document.getElementById('mr-tr');
			mrml = document.getElementById('mr-ml');
			mrmm = document.getElementById('mr-mm');
			mrmr = document.getElementById('mr-mr');
			mrbl = document.getElementById('mr-bl');
			mrbm = document.getElementById('mr-bm');
			mrbr = document.getElementById('mr-br');
			bltl = document.getElementById('bl-tl');
			bltm = document.getElementById('bl-tm');
			bltr = document.getElementById('bl-tr');
			blml = document.getElementById('bl-ml');
			blmm = document.getElementById('bl-mm');
			blmr = document.getElementById('bl-mr');
			blbl = document.getElementById('bl-bl');
			blbm = document.getElementById('bl-bm');
			blbr = document.getElementById('bl-br');
			bmtl = document.getElementById('bm-tl');
			bmtm = document.getElementById('bm-tm');
			bmtr = document.getElementById('bm-tr');
			bmml = document.getElementById('bm-ml');
			bmmm = document.getElementById('bm-mm');
			bmmr = document.getElementById('bm-mr');
			bmbl = document.getElementById('bm-bl');
			bmbm = document.getElementById('bm-bm');
			bmbr = document.getElementById('bm-br');
			brtl = document.getElementById('br-tl');
			brtm = document.getElementById('br-tm');
			brtr = document.getElementById('br-tr');
			brml = document.getElementById('br-ml');
			brmm = document.getElementById('br-mm');
			brmr = document.getElementById('br-mr');
			brbl = document.getElementById('br-bl');
			brbm = document.getElementById('br-bm');
			brbr = document.getElementById('br-br');
			
			tl = [tltl, tltm, tltr, tlml, tlmm, tlmr, tlbl, tlbm, tlbr];
			tm = [tmtl, tmtm, tmtr, tmml, tmmm, tmmr, tmbl, tmbm, tmbr];
			tr = [trtl, trtm, trtr, trml, trmm, trmr, trbl, trbm, trbr];
			ml = [mltl, mltm, mltr, mlml, mlmm, mlmr, mlbl, mlbm, mlbr];
			mm = [mmtl, mmtm, mmtr, mmml, mmmm, mmmr, mmbl, mmbm, mmbr];
			mr = [mrtl, mrtm, mrtr, mrml, mrmm, mrmr, mrbl, mrbm, mrbr];
			bl = [bltl, bltm, bltr, blml, blmm, blmr, blbl, blbm, blbr];
			bm = [bmtl, bmtm, bmtr, bmml, bmmm, bmmr, bmbl, bmbm, bmbr];
			br = [brtl, brtm, brtr, brml, brmm, brmr, brbl, brbm, brbr];
			
			all = [tl, tm, tr, ml, mm, mr, bl, bm, br];
			
			currentPlayer = "🍄";
			gameOver = false;
			removeHighlights = true;
			
			owners = [0, 0, 0, 0, 0, 0, 0, 0, 0];
			taken = [];
			takenString = [];
			currentlyAllowed = [tltl, tltm, tltr, tlml, tlmm, tlmr, tlbl, tlbm, tlbr, tmtl, tmtm, tmtr, tmml, tmmm, tmmr, tmbl, tmbm, tmbr, trtl, trtm, trtr, trml, trmm, trmr, trbl, trbm, trbr, mltl, mltm, mltr, mlml, mlmm, mlmr, mlbl, mlbm, mlbr, mmtl, mmtm, mmtr, mmml, mmmm, mmmr, mmbl, mmbm, mmbr, mrtl, mrtm, mrtr, mrml, mrmm, mrmr, mrbl, mrbm, mrbr, bltl, bltm, bltr, blml, blmm, blmr, blbl, blbm, blbr, bmtl, bmtm, bmtr, bmml, bmmm, bmmr, bmbl, bmbm, bmbr, brtl, brtm, brtr, brml, brmm, brmr, brbl, brbm, brbr];
			allowed = [tltl, tltm, tltr, tlml, tlmm, tlmr, tlbl, tlbm, tlbr, tmtl, tmtm, tmtr, tmml, tmmm, tmmr, tmbl, tmbm, tmbr, trtl, trtm, trtr, trml, trmm, trmr, trbl, trbm, trbr, mltl, mltm, mltr, mlml, mlmm, mlmr, mlbl, mlbm, mlbr, mmtl, mmtm, mmtr, mmml, mmmm, mmmr, mmbl, mmbm, mmbr, mrtl, mrtm, mrtr, mrml, mrmm, mrmr, mrbl, mrbm, mrbr, bltl, bltm, bltr, blml, blmm, blmr, blbl, blbm, blbr, bmtl, bmtm, bmtr, bmml, bmmm, bmmr, bmbl, bmbm, bmbr, brtl, brtm, brtr, brml, brmm, brmr, brbl, brbm, brbr];
			
			while (boardID.length > 0) {
				action(boardID.substring(0, 2), boardID.substring(2, 4));
				boardID = boardID.slice(5);
			}
		}
		
		function undo() {
			var currentBoard = takenString.join("-");
			newBoard = currentBoard.slice(0, -5);
			setBoard(newBoard);
		}
		
		function copy() {
			navigator.clipboard.writeText(takenString.join("-").toString());
		}
		
		function reload() {
			location.reload();
		}