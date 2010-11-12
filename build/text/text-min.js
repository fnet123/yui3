YUI.add("text-accentfold",function(E){var C=E.Array,B=E.Text,A=B.Data.AccentFold,D={canFold:function(F){var G;for(G in A){if(A.hasOwnProperty(G)&&F.search(A[G])!==-1){return true;}}return false;},compare:function(G,F,H){var I=D.fold(G),J=D.fold(F);return H?!!H(I,J):I===J;},filter:function(G,F){return C.filter(G,function(H){return F(D.fold(H));});},fold:function(F){if(E.Lang.isArray(F)){return C.map(F,D.fold);}F=F.toLowerCase();E.Object.each(A,function(H,G){F=F.replace(H,G);});return F;}};B.AccentFold=D;},"@VERSION@",{requires:["array-extras","text-data-accentfold"]});YUI.add("text-data-accentfold",function(A){A.namespace("Text.Data").AccentFold={0:/[⁰₀⓪０]/gi,1:/[¹₁①１]/gi,2:/[²₂②２]/gi,3:/[³₃③３]/gi,4:/[⁴₄④４]/gi,5:/[⁵₅⑤５]/gi,6:/[⁶₆⑥６]/gi,7:/[⁷₇⑦７]/gi,8:/[⁸₈⑧８]/gi,9:/[⁹₉⑨９]/gi,a:/[ªà-åāăąǎǟǡǻȁȃȧᵃḁẚạảấầẩẫậắằẳẵặⓐａ]/gi,b:/[ᵇḃḅḇⓑｂ]/gi,c:/[çćĉċčᶜḉⓒｃ]/gi,d:/[ďᵈḋḍḏḑḓⅾⓓｄ]/gi,e:/[è-ëēĕėęěȅȇȩᵉḕḗḙḛḝẹẻẽếềểễệₑℯⓔｅ]/gi,f:/[ᶠḟⓕｆ]/gi,g:/[ĝğġģǧǵᵍḡℊⓖｇ]/gi,h:/[ĥȟʰḣḥḧḩḫẖℎⓗｈ]/gi,i:/[ì-ïĩīĭįĳǐȉȋᵢḭḯỉịⁱℹⅰⓘｉ]/gi,j:/[ĵǰʲⓙⱼｊ]/gi,k:/[ķǩᵏḱḳḵⓚｋ]/gi,l:/[ĺļľŀǉˡḷḹḻḽℓⅼⓛｌ]/gi,m:/[ᵐḿṁṃⅿⓜｍ]/gi,n:/[ñńņňǹṅṇṉṋⁿⓝｎ]/gi,o:/[ºò-öōŏőơǒǫǭȍȏȫȭȯȱᵒṍṏṑṓọỏốồổỗộớờởỡợₒℴⓞｏ]/gi,p:/[ᵖṕṗⓟｐ]/gi,q:/[ʠⓠｑ]/gi,r:/[ŕŗřȑȓʳᵣṙṛṝṟⓡｒ]/gi,s:/[śŝşšſșˢṡṣṥṧṩẛⓢｓ]/gi,t:/[ţťțᵗṫṭṯṱẗⓣｔ]/gi,u:/[ù-üũūŭůűųưǔǖǘǚǜȕȗᵘᵤṳṵṷṹṻụủứừửữựⓤｕ]/gi,v:/[ᵛᵥṽṿⅴⓥｖ]/gi,w:/[ŵʷẁẃẅẇẉẘⓦｗ]/gi,x:/[ˣẋẍₓⅹⓧｘ]/gi,y:/[ýÿŷȳʸẏẙỳỵỷỹⓨｙ]/gi,z:/[źżžᶻẑẓẕⓩｚ]/gi};},"@VERSION@");YUI.add("text-data-wordbreak",function(A){A.namespace("Text.Data").WordBreak={aletter:"[A-Za-zÀ-ÖØ-öø-ƿǀ-ʯʰ-ˁˆ-ˑˠ-ˤˬˮҊ-ԣᴀ-ᶿḀ-ἕⅠ-ↈⱠ-Ɐⱱ-ⱽ]",midnumlet:"['\\.‘’․﹒＇．]",midletter:"[:··״‧︓﹕：]",midnum:"[,;;։،؍٬߸⁄︐︔﹐﹔，；]",numeric:"[0-9٠-٩٫۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹]",cr:"\\r",lf:"\\n",newline:"[\u000B\u000C\u0085\u2028\u2029]",extend:"[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2\u1DC0-\u1DE6\u1DFC-\u1DFF\u200C\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26\uFF9E\uFF9F]",format:"[\u00AD\u0600-\u0603\u06DD\u070F\u17B4\u17B5\u200E\u200F\u202A-\u202E\u2060-\u2064\u206A-\u206F\uFEFF\uFFF9-\uFFFB]",katakana:"[\u3031-\u3035\u309B\u309C\u30A0-\u30FA\u30FC-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF9D]",extendnumlet:"[_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F]",punctuation:"[!-#%-*,-/\\:;?@\\[-\\]_\\{\\}¡«·»¿;·՚-՟։\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1361-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30\u2E31\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]"};},"@VERSION@");YUI.add("text-wordbreak",function(D){var N=D.Text,K=N.Data.WordBreak,G=0,E=1,L=2,S=3,Q=4,C=5,I=6,M=7,T=8,O=9,R=10,F=11,P=12,H=[new RegExp(K.aletter),new RegExp(K.midnumlet),new RegExp(K.midletter),new RegExp(K.midnum),new RegExp(K.numeric),new RegExp(K.cr),new RegExp(K.lf),new RegExp(K.newline),new RegExp(K.extend),new RegExp(K.format),new RegExp(K.katakana),new RegExp(K.extendnumlet)],B="",A=new RegExp("^"+K.punctuation+"$"),U=/\s/,J={getWords:function(a,e){var Z=0,V=J._classify(a),b=V.length,W=[],c=[],Y,d,X;if(!e){e={};}if(e.ignoreCase){a=a.toLowerCase();}d=e.includePunctuation;X=e.includeWhitespace;for(;Z<b;++Z){Y=a.charAt(Z);W.push(Y);if(J._isWordBoundary(V,Z)){W=W.join(B);if(W&&(X||!U.test(W))&&(d||!A.test(W))){c.push(W);
}W=[];}}return c;},getUniqueWords:function(W,V){return D.Array.unique(J.getWords(W,V));},isWordBoundary:function(W,V){return J._isWordBoundary(J._classify(W),V);},_classify:function(a){var X,W=[],Z=0,Y,c,V=a.length,d=H.length,b;for(;Z<V;++Z){X=a.charAt(Z);b=P;for(Y=0;Y<d;++Y){c=H[Y];if(c&&c.test(X)){b=Y;break;}}W.push(b);}return W;},_isWordBoundary:function(Z,W){var V,X=Z[W],a=Z[W+1],Y;if(X===G&&a===G){return false;}Y=Z[W+2];if(X===G&&(a===L||a===E)&&Y===G){return false;}V=Z[W-1];if((X===L||X===E)&&a===G&&V===G){return false;}if((X===Q||X===G)&&(a===Q||a===G)){return false;}if((X===S||X===E)&&a===Q&&V===Q){return false;}if(X===Q&&(a===S||a===E)&&Y===Q){return false;}if(X===T||X===O||V===T||V===O||a===T||a===O){return false;}if(X===C&&a===I){return false;}if(X===M||X===C||X===I){return true;}if(a===M||a===C||a===I){return true;}if(X===R&&a===R){return false;}if(a===F&&(X===G||X===Q||X===R||X===F)){return false;}if(X===F&&(a===G||a===Q||a===R)){return false;}return true;}};N.WordBreak=J;},"@VERSION@",{requires:["array-extras","text-data-wordbreak"]});YUI.add("text",function(A){},"@VERSION@",{use:["text-accentfold","text-wordbreak"]});