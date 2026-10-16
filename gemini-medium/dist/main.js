var fK="186",Z9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},K9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vK=0,tQ=1,bK=2;var b6=1,h7=2,U6=3,H6=0,Z8=1,yJ=2,j8=0,h6=1,eQ=2,J$=3,Q$=4,hK=5;var N6=100,xK=101,gK=102,pK=103,mK=104,dK=200,lK=201,uK=202,cK=203,nK=204,sK=205,iK=206,oK=207,aK=208,rK=209,tK=210,eK=211,JW=212,QW=213,$W=214,ZW=0,KW=1,WW=2,$$=3,XW=4,YW=5,UW=6,HW=7,NW=0,qW=1,EW=2,_8=0,Z$=1,K$=2,W$=3,x6=4,X$=5,Y$=6,U$=7;var q6=301,L9=302,x7=303,g7=304,g6=306,W9=1000,p7=1001,FW=1002,X9=1003,OW=1004;var p6=1005;var K8=1006,m7=1007;var V9=1008;var P8=1009,GW=1010,DW=1011,m6=1012,H$=1013,Y9=1014,i8=1015,y8=1016,N$=1017,q$=1018,E6=1020,RW=35902,LW=35899,VW=1021,MW=1022,f8=1023,M9=1026,k9=1027,kW=1028,E$=1029,B9=1030,F$=1031;var O$=1033,d7=33776,l7=33777,u7=33778,c7=33779,G$=35840,D$=35841,R$=35842,L$=35843,V$=36196,M$=37492,k$=37496,B$=37488,I$=37489,n7=37490,z$=37491,A$=37808,_$=37809,P$=37810,C$=37811,T$=37812,w$=37813,S$=37814,j$=37815,y$=37816,f$=37817,v$=37818,b$=37819,h$=37820,x$=37821,g$=36492,p$=36494,m$=36495,d$=36283,l$=36284,s7=36285,u$=36286;var c$=0,BW=1,o8="",F6="srgb",n$="srgb-linear",s$="linear",PJ="srgb";var IW=512,zW=513,AW=514,i7=515,_W=516,PW=517,o7=518,CW=519;var i$="300 es",o$=2000;function lX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function uX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function v6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function TW(){let J=v6("canvas");return J.style.display="block",J}var QK={},X6=null;function a$(...J){let Q="THREE."+J.shift();if(X6)X6("log",Q,...J);else console.log(Q,...J)}function wW(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function n0(...J){J=wW(J);let Q="THREE."+J.shift();if(X6)X6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function i0(...J){J=wW(J);let Q="THREE."+J.shift();if(X6)X6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function R9(...J){let Q=J.join(" ");if(Q in QK)return;QK[Q]=!0,n0(...J)}function SW(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var jW={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class v8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var oJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$K=1234567,S6=Math.PI/180,Y6=180/Math.PI;function O6(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(oJ[J&255]+oJ[J>>8&255]+oJ[J>>16&255]+oJ[J>>24&255]+"-"+oJ[Q&255]+oJ[Q>>8&255]+"-"+oJ[Q>>16&15|64]+oJ[Q>>24&255]+"-"+oJ[$&63|128]+oJ[$>>8&255]+"-"+oJ[$>>16&255]+oJ[$>>24&255]+oJ[Z&255]+oJ[Z>>8&255]+oJ[Z>>16&255]+oJ[Z>>24&255]).toLowerCase()}function WJ(J,Q,$){return Math.max(Q,Math.min($,J))}function r$(J,Q){return(J%Q+Q)%Q}function cX(J,Q,$,Z,K){return Z+(J-Q)*(K-Z)/($-Q)}function nX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function j6(J,Q,$){return(1-$)*J+$*Q}function sX(J,Q,$,Z){return j6(J,Q,1-Math.exp(-$*Z))}function iX(J,Q=1){return Q-Math.abs(r$(J,Q*2)-Q)}function oX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function aX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function rX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function tX(J,Q){return J+Math.random()*(Q-J)}function eX(J){return J*(0.5-Math.random())}function JY(J){if(J!==void 0)$K=J;let Q=$K+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function QY(J){return J*S6}function $Y(J){return J*Y6}function ZY(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function KY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function WY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function XY(J,Q,$,Z,K){let{cos:W,sin:X}=Math,Y=W($/2),U=X($/2),H=W((Q+Z)/2),q=X((Q+Z)/2),F=W((Q-Z)/2),N=X((Q-Z)/2),O=W((Z-Q)/2),R=X((Z-Q)/2);switch(K){case"XYX":J.set(Y*q,U*F,U*N,Y*H);break;case"YZY":J.set(U*N,Y*q,U*F,Y*H);break;case"ZXZ":J.set(U*F,U*N,Y*q,Y*H);break;case"XZX":J.set(Y*q,U*R,U*O,Y*H);break;case"YXY":J.set(U*O,Y*q,U*R,Y*H);break;case"ZYZ":J.set(U*R,U*O,Y*q,Y*H);break;default:n0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function K6(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function tJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var s0={DEG2RAD:S6,RAD2DEG:Y6,generateUUID:O6,clamp:WJ,euclideanModulo:r$,mapLinear:cX,inverseLerp:nX,lerp:j6,damp:sX,pingpong:iX,smoothstep:oX,smootherstep:aX,randInt:rX,randFloat:tX,randFloatSpread:eX,seededRandom:JY,degToRad:QY,radToDeg:$Y,isPowerOfTwo:ZY,ceilPowerOfTwo:KY,floorPowerOfTwo:WY,setQuaternionFromProperEuler:XY,normalize:tJ,denormalize:K6};class A0{static{A0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class D8{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],U=$[Z+1],H=$[Z+2],q=$[Z+3],F=K[W+0],N=K[W+1],O=K[W+2],R=K[W+3];if(q!==R||Y!==F||U!==N||H!==O){let _=Y*F+U*N+H*O+q*R;if(_<0)F=-F,N=-N,O=-O,R=-R,_=-_;let G=1-X;if(_<0.9995){let E=Math.acos(_),P=Math.sin(E);G=Math.sin(G*E)/P,X=Math.sin(X*E)/P,Y=Y*G+F*X,U=U*G+N*X,H=H*G+O*X,q=q*G+R*X}else{Y=Y*G+F*X,U=U*G+N*X,H=H*G+O*X,q=q*G+R*X;let E=1/Math.sqrt(Y*Y+U*U+H*H+q*q);Y*=E,U*=E,H*=E,q*=E}}J[Q]=Y,J[Q+1]=U,J[Q+2]=H,J[Q+3]=q}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],U=$[Z+2],H=$[Z+3],q=K[W],F=K[W+1],N=K[W+2],O=K[W+3];return J[Q]=X*O+H*q+Y*N-U*F,J[Q+1]=Y*O+H*F+U*q-X*N,J[Q+2]=U*O+H*N+X*F-Y*q,J[Q+3]=H*O-X*q-Y*F-U*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,U=X($/2),H=X(Z/2),q=X(K/2),F=Y($/2),N=Y(Z/2),O=Y(K/2);switch(W){case"XYZ":this._x=F*H*q+U*N*O,this._y=U*N*q-F*H*O,this._z=U*H*O+F*N*q,this._w=U*H*q-F*N*O;break;case"YXZ":this._x=F*H*q+U*N*O,this._y=U*N*q-F*H*O,this._z=U*H*O-F*N*q,this._w=U*H*q+F*N*O;break;case"ZXY":this._x=F*H*q-U*N*O,this._y=U*N*q+F*H*O,this._z=U*H*O+F*N*q,this._w=U*H*q-F*N*O;break;case"ZYX":this._x=F*H*q-U*N*O,this._y=U*N*q+F*H*O,this._z=U*H*O-F*N*q,this._w=U*H*q+F*N*O;break;case"YZX":this._x=F*H*q+U*N*O,this._y=U*N*q+F*H*O,this._z=U*H*O-F*N*q,this._w=U*H*q-F*N*O;break;case"XZY":this._x=F*H*q-U*N*O,this._y=U*N*q-F*H*O,this._z=U*H*O+F*N*q,this._w=U*H*q+F*N*O;break;default:n0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],U=Q[2],H=Q[6],q=Q[10],F=$+X+q;if(F>0){let N=0.5/Math.sqrt(F+1);this._w=0.25/N,this._x=(H-Y)*N,this._y=(K-U)*N,this._z=(W-Z)*N}else if($>X&&$>q){let N=2*Math.sqrt(1+$-X-q);this._w=(H-Y)/N,this._x=0.25*N,this._y=(Z+W)/N,this._z=(K+U)/N}else if(X>q){let N=2*Math.sqrt(1+X-$-q);this._w=(K-U)/N,this._x=(Z+W)/N,this._y=0.25*N,this._z=(Y+H)/N}else{let N=2*Math.sqrt(1+q-$-X);this._w=(W-Z)/N,this._x=(K+U)/N,this._y=(Y+H)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(WJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,U=Q._z,H=Q._w;return this._x=$*H+W*X+Z*U-K*Y,this._y=Z*H+W*Y+K*X-$*U,this._z=K*H+W*U+$*Y-Z*X,this._w=W*H-$*X-Z*Y-K*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let U=Math.acos(X),H=Math.sin(U);Y=Math.sin(Y*U)/H,Q=Math.sin(Q*U)/H,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{C.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(ZK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(ZK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,U=2*(W*Z-X*$),H=2*(X*Q-K*Z),q=2*(K*$-W*Q);return this.x=Q+Y*U+W*q-X*H,this.y=$+Y*H+X*U-K*q,this.z=Z+Y*q+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return AQ.copy(this).projectOnVector(J),this.sub(AQ)}reflect(J){return this.sub(AQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var AQ=new C,ZK=new D8;class t0{static{t0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U)}set(J,Q,$,Z,K,W,X,Y,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=X,H[3]=Q,H[4]=K,H[5]=Y,H[6]=$,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],U=$[1],H=$[4],q=$[7],F=$[2],N=$[5],O=$[8],R=Z[0],_=Z[3],G=Z[6],E=Z[1],P=Z[4],T=Z[7],B=Z[2],A=Z[5],w=Z[8];return K[0]=W*R+X*E+Y*B,K[3]=W*_+X*P+Y*A,K[6]=W*G+X*T+Y*w,K[1]=U*R+H*E+q*B,K[4]=U*_+H*P+q*A,K[7]=U*G+H*T+q*w,K[2]=F*R+N*E+O*B,K[5]=F*_+N*P+O*A,K[8]=F*G+N*T+O*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8];return Q*W*H-Q*X*U-$*K*H+$*X*Y+Z*K*U-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],q=H*W-X*U,F=X*Y-H*K,N=U*K-W*Y,O=Q*q+$*F+Z*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/O;return J[0]=q*R,J[1]=(Z*U-H*$)*R,J[2]=(X*$-Z*W)*R,J[3]=F*R,J[4]=(H*Q-Z*Y)*R,J[5]=(Z*K-X*Q)*R,J[6]=N*R,J[7]=($*Y-U*Q)*R,J[8]=(W*Q-$*K)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),U=Math.sin(K);return this.set($*Y,$*U,-$*(Y*W+U*X)+W+J,-Z*U,Z*Y,-Z*(-U*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return R9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_Q.makeScale(J,Q)),this}rotate(J){return R9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_Q.makeRotation(-J)),this}translate(J,Q){return R9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_Q.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var _Q=new t0,KK=new t0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),WK=new t0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function YY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=n8(K.r),K.g=n8(K.g),K.b=n8(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=W6(K.r),K.g=W6(K.g),K.b=W6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return R9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return R9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:KK,fromXYZ:WK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:KK,fromXYZ:WK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var EJ=YY();function n8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function W6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var c9;class t${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(c9===void 0)c9=v6("canvas");c9.width=J.width,c9.height=J.height;let Z=c9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=c9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=v6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=n8(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(n8(Q[$]/255)*255);else Q[$]=n8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return n0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var UY=0;class d6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:UY++}),this.uuid=O6(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(PQ(Z[W].image));else K.push(PQ(Z[W]))}else K=PQ(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function PQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return t$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return n0("Texture: Unable to serialize Texture."),{}}var HY=0,CQ=new C;class sJ extends v8{constructor(J=sJ.DEFAULT_IMAGE,Q=sJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,U=sJ.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:HY++}),this.uuid=O6(),this.name="",this.source=new d6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new A0(0,0),this.repeat=new A0(1,1),this.center=new A0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new t0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(CQ).x}get height(){return this.source.getSize(CQ).y}get depth(){return this.source.getSize(CQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){n0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){n0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}sJ.DEFAULT_IMAGE=null;sJ.DEFAULT_MAPPING=300;sJ.DEFAULT_ANISOTROPY=1;class wJ{static{wJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,U=Y[0],H=Y[4],q=Y[8],F=Y[1],N=Y[5],O=Y[9],R=Y[2],_=Y[6],G=Y[10];if(Math.abs(H-F)<0.01&&Math.abs(q-R)<0.01&&Math.abs(O-_)<0.01){if(Math.abs(H+F)<0.1&&Math.abs(q+R)<0.1&&Math.abs(O+_)<0.1&&Math.abs(U+N+G-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let P=(U+1)/2,T=(N+1)/2,B=(G+1)/2,A=(H+F)/4,w=(q+R)/4,z=(O+_)/4;if(P>T&&P>B)if(P<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(P),Z=A/$,K=w/$;else if(T>B)if(T<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(T),$=A/Z,K=z/Z;else if(B<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(B),$=w/K,Z=z/K;return this.set($,Z,K,Q),this}let E=Math.sqrt((_-O)*(_-O)+(q-R)*(q-R)+(F-H)*(F-H));if(Math.abs(E)<0.001)E=1;return this.x=(_-O)/E,this.y=(q-R)/E,this.z=(F-H)/E,this.w=Math.acos((U+N+G-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this.w=WJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this.w=WJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e$ extends v8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new wJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new wJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new sJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new d6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class N8 extends e${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class a7 extends sJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class JZ extends sJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class zJ{static{zJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,U,H,q,F,N,O,R,_){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U,H,q,F,N,O,R,_)}set(J,Q,$,Z,K,W,X,Y,U,H,q,F,N,O,R,_){let G=this.elements;return G[0]=J,G[4]=Q,G[8]=$,G[12]=Z,G[1]=K,G[5]=W,G[9]=X,G[13]=Y,G[2]=U,G[6]=H,G[10]=q,G[14]=F,G[3]=N,G[7]=O,G[11]=R,G[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/n9.setFromMatrixColumn(J,0).length(),K=1/n9.setFromMatrixColumn(J,1).length(),W=1/n9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),q=Math.sin(K);if(J.order==="XYZ"){let F=W*H,N=W*q,O=X*H,R=X*q;Q[0]=Y*H,Q[4]=-Y*q,Q[8]=U,Q[1]=N+O*U,Q[5]=F-R*U,Q[9]=-X*Y,Q[2]=R-F*U,Q[6]=O+N*U,Q[10]=W*Y}else if(J.order==="YXZ"){let F=Y*H,N=Y*q,O=U*H,R=U*q;Q[0]=F+R*X,Q[4]=O*X-N,Q[8]=W*U,Q[1]=W*q,Q[5]=W*H,Q[9]=-X,Q[2]=N*X-O,Q[6]=R+F*X,Q[10]=W*Y}else if(J.order==="ZXY"){let F=Y*H,N=Y*q,O=U*H,R=U*q;Q[0]=F-R*X,Q[4]=-W*q,Q[8]=O+N*X,Q[1]=N+O*X,Q[5]=W*H,Q[9]=R-F*X,Q[2]=-W*U,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let F=W*H,N=W*q,O=X*H,R=X*q;Q[0]=Y*H,Q[4]=O*U-N,Q[8]=F*U+R,Q[1]=Y*q,Q[5]=R*U+F,Q[9]=N*U-O,Q[2]=-U,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,N=W*U,O=X*Y,R=X*U;Q[0]=Y*H,Q[4]=R-F*q,Q[8]=O*q+N,Q[1]=q,Q[5]=W*H,Q[9]=-X*H,Q[2]=-U*H,Q[6]=N*q+O,Q[10]=F-R*q}else if(J.order==="XZY"){let F=W*Y,N=W*U,O=X*Y,R=X*U;Q[0]=Y*H,Q[4]=-q,Q[8]=U*H,Q[1]=F*q+R,Q[5]=W*H,Q[9]=N*q-O,Q[2]=O*q-N,Q[6]=X*H,Q[10]=R*q+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(NY,J,qY)}lookAt(J,Q,$){let Z=this.elements;if(U8.subVectors(J,Q),U8.lengthSq()===0)U8.z=1;if(U8.normalize(),t8.crossVectors($,U8),t8.lengthSq()===0){if(Math.abs($.z)===1)U8.x+=0.0001;else U8.z+=0.0001;U8.normalize(),t8.crossVectors($,U8)}return t8.normalize(),E7.crossVectors(U8,t8),Z[0]=t8.x,Z[4]=E7.x,Z[8]=U8.x,Z[1]=t8.y,Z[5]=E7.y,Z[9]=U8.y,Z[2]=t8.z,Z[6]=E7.z,Z[10]=U8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],U=$[12],H=$[1],q=$[5],F=$[9],N=$[13],O=$[2],R=$[6],_=$[10],G=$[14],E=$[3],P=$[7],T=$[11],B=$[15],A=Z[0],w=Z[4],z=Z[8],D=Z[12],k=Z[1],x=Z[5],j=Z[9],y=Z[13],p=Z[2],S=Z[6],m=Z[10],e=Z[14],n=Z[3],H0=Z[7],r=Z[11],K0=Z[15];return K[0]=W*A+X*k+Y*p+U*n,K[4]=W*w+X*x+Y*S+U*H0,K[8]=W*z+X*j+Y*m+U*r,K[12]=W*D+X*y+Y*e+U*K0,K[1]=H*A+q*k+F*p+N*n,K[5]=H*w+q*x+F*S+N*H0,K[9]=H*z+q*j+F*m+N*r,K[13]=H*D+q*y+F*e+N*K0,K[2]=O*A+R*k+_*p+G*n,K[6]=O*w+R*x+_*S+G*H0,K[10]=O*z+R*j+_*m+G*r,K[14]=O*D+R*y+_*e+G*K0,K[3]=E*A+P*k+T*p+B*n,K[7]=E*w+P*x+T*S+B*H0,K[11]=E*z+P*j+T*m+B*r,K[15]=E*D+P*y+T*e+B*K0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],U=J[13],H=J[2],q=J[6],F=J[10],N=J[14],O=J[3],R=J[7],_=J[11],G=J[15],E=Y*N-U*F,P=X*N-U*q,T=X*F-Y*q,B=W*N-U*H,A=W*F-Y*H,w=W*q-X*H;return Q*(R*E-_*P+G*T)-$*(O*E-_*B+G*A)+Z*(O*P-R*B+G*w)-K*(O*T-R*A+_*w)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],U=J[6],H=J[10];return Q*(W*H-X*U)-$*(K*H-X*Y)+Z*(K*U-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],q=J[9],F=J[10],N=J[11],O=J[12],R=J[13],_=J[14],G=J[15],E=Q*X-$*W,P=Q*Y-Z*W,T=Q*U-K*W,B=$*Y-Z*X,A=$*U-K*X,w=Z*U-K*Y,z=H*R-q*O,D=H*_-F*O,k=H*G-N*O,x=q*_-F*R,j=q*G-N*R,y=F*G-N*_,p=E*y-P*j+T*x+B*k-A*D+w*z;if(p===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/p;return J[0]=(X*y-Y*j+U*x)*S,J[1]=(Z*j-$*y-K*x)*S,J[2]=(R*w-_*A+G*B)*S,J[3]=(F*A-q*w-N*B)*S,J[4]=(Y*k-W*y-U*D)*S,J[5]=(Q*y-Z*k+K*D)*S,J[6]=(_*T-O*w-G*P)*S,J[7]=(H*w-F*T+N*P)*S,J[8]=(W*j-X*k+U*z)*S,J[9]=($*k-Q*j-K*z)*S,J[10]=(O*A-R*T+G*E)*S,J[11]=(q*T-H*A-N*E)*S,J[12]=(X*D-W*x-Y*z)*S,J[13]=(Q*x-$*D+Z*z)*S,J[14]=(R*P-O*B-_*E)*S,J[15]=(H*B-q*P+F*E)*S,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,U=K*W,H=K*X;return this.set(U*W+$,U*X-Z*Y,U*Y+Z*X,0,U*X+Z*Y,H*X+$,H*Y-Z*W,0,U*Y-Z*X,H*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,U=K+K,H=W+W,q=X+X,F=K*U,N=K*H,O=K*q,R=W*H,_=W*q,G=X*q,E=Y*U,P=Y*H,T=Y*q,B=$.x,A=$.y,w=$.z;return Z[0]=(1-(R+G))*B,Z[1]=(N+T)*B,Z[2]=(O-P)*B,Z[3]=0,Z[4]=(N-T)*A,Z[5]=(1-(F+G))*A,Z[6]=(_+E)*A,Z[7]=0,Z[8]=(O+P)*w,Z[9]=(_-E)*w,Z[10]=(1-(F+R))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=n9.set(Z[0],Z[1],Z[2]).length(),X=n9.set(Z[4],Z[5],Z[6]).length(),Y=n9.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;I8.copy(this);let U=1/W,H=1/X,q=1/Y;return I8.elements[0]*=U,I8.elements[1]*=U,I8.elements[2]*=U,I8.elements[4]*=H,I8.elements[5]*=H,I8.elements[6]*=H,I8.elements[8]*=q,I8.elements[9]*=q,I8.elements[10]*=q,Q.setFromRotationMatrix(I8),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2*K/(Q-J),q=2*K/($-Z),F=(Q+J)/(Q-J),N=($+Z)/($-Z),O,R;if(Y)O=K/(W-K),R=W*K/(W-K);else if(X===2000)O=-(W+K)/(W-K),R=-2*W*K/(W-K);else if(X===2001)O=-W/(W-K),R=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=F,U[12]=0,U[1]=0,U[5]=q,U[9]=N,U[13]=0,U[2]=0,U[6]=0,U[10]=O,U[14]=R,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2/(Q-J),q=2/($-Z),F=-(Q+J)/(Q-J),N=-($+Z)/($-Z),O,R;if(Y)O=1/(W-K),R=W/(W-K);else if(X===2000)O=-2/(W-K),R=-(W+K)/(W-K);else if(X===2001)O=-1/(W-K),R=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=0,U[12]=F,U[1]=0,U[5]=q,U[9]=0,U[13]=N,U[2]=0,U[6]=0,U[10]=O,U[14]=R,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var n9=new C,I8=new zJ,NY=new C(0,0,0),qY=new C(1,1,1),t8=new C,E7=new C,U8=new C,XK=new zJ,YK=new D8;class s8{constructor(J=0,Q=0,$=0,Z=s8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],U=Z[5],H=Z[9],q=Z[2],F=Z[6],N=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(WJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,N),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-WJ(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(X,N),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-q,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(WJ(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-q,N),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-WJ(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(F,N),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(WJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-q,K);else this._x=0,this._y=Math.atan2(X,N);break;case"XZY":if(this._z=Math.asin(-WJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,U),this._y=Math.atan2(X,K);else this._x=Math.atan2(-H,N),this._y=0;break;default:n0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return XK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(XK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return YK.setFromEuler(this),this.setFromQuaternion(YK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}s8.DEFAULT_ORDER="XYZ";class l6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var EY=0,UK=new C,s9=new D8,m8=new zJ,F7=new C,_6=new C,FY=new C,OY=new D8,HK=new C(1,0,0),NK=new C(0,1,0),qK=new C(0,0,1),EK={type:"added"},GY={type:"removed"},i9={type:"childadded",child:null},TQ={type:"childremoved",child:null};class xJ extends v8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:EY++}),this.uuid=O6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xJ.DEFAULT_UP.clone();let J=new C,Q=new s8,$=new D8,Z=new C(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new zJ},normalMatrix:{value:new t0}}),this.matrix=new zJ,this.matrixWorld=new zJ,this.matrixAutoUpdate=xJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return s9.setFromAxisAngle(J,Q),this.quaternion.multiply(s9),this}rotateOnWorldAxis(J,Q){return s9.setFromAxisAngle(J,Q),this.quaternion.premultiply(s9),this}rotateX(J){return this.rotateOnAxis(HK,J)}rotateY(J){return this.rotateOnAxis(NK,J)}rotateZ(J){return this.rotateOnAxis(qK,J)}translateOnAxis(J,Q){return UK.copy(J).applyQuaternion(this.quaternion),this.position.add(UK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(HK,J)}translateY(J){return this.translateOnAxis(NK,J)}translateZ(J){return this.translateOnAxis(qK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(m8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)F7.copy(J);else F7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),_6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)m8.lookAt(_6,F7,this.up);else m8.lookAt(F7,_6,this.up);if(this.quaternion.setFromRotationMatrix(m8),Z)m8.extractRotation(Z.matrixWorld),s9.setFromRotationMatrix(m8),this.quaternion.premultiply(s9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return i0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(EK),i9.child=J,this.dispatchEvent(i9),i9.child=null;else i0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(GY),TQ.child=J,this.dispatchEvent(TQ),TQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),m8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),m8.multiply(J.parent.matrixWorld);return J.applyMatrix4(m8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(EK),i9.child=J,this.dispatchEvent(i9),i9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_6,J,FY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_6,OY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let U=0,H=Y.length;U<H;U++){let q=Y[U];K(J.shapes,q)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,U=this.material.length;Y<U;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),U=W(J.textures),H=W(J.images),q=W(J.shapes),F=W(J.skeletons),N=W(J.animations),O=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(H.length>0)$.images=H;if(q.length>0)$.shapes=q;if(F.length>0)$.skeletons=F;if(N.length>0)$.animations=N;if(O.length>0)$.nodes=O}return $.object=Z,$;function W(X){let Y=[];for(let U in X){let H=X[U];delete H.metadata,Y.push(H)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xJ.DEFAULT_UP=new C(0,1,0);xJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;xJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class JJ extends xJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var DY={type:"move"};class u6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new JJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new JJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new JJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let R of J.hand.values()){let _=Q.getJointPose(R,$),G=this._getHandJoint(U,R);if(_!==null)G.matrix.fromArray(_.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,G.jointRadius=_.radius;G.visible=_!==null}let H=U.joints["index-finger-tip"],q=U.joints["thumb-tip"],F=H.position.distanceTo(q.position),N=0.02,O=0.005;if(U.inputState.pinching&&F>N+O)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&F<=N-O)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(DY)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new JJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var yW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},e8={h:0,s:0,l:0},O7={h:0,s:0,l:0};function wQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class _0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,EJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=EJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,EJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=EJ.workingColorSpace){if(J=r$(J,1),Q=WJ(Q,0,1),$=WJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=wQ(W,K,J+0.3333333333333333),this.g=wQ(W,K,J),this.b=wQ(W,K,J-0.3333333333333333)}return EJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)n0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:n0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else n0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=yW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else n0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=n8(J.r),this.g=n8(J.g),this.b=n8(J.b),this}copyLinearToSRGB(J){return this.r=W6(J.r),this.g=W6(J.g),this.b=W6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return EJ.workingToColorSpace(aJ.copy(this),J),Math.round(WJ(aJ.r*255,0,255))*65536+Math.round(WJ(aJ.g*255,0,255))*256+Math.round(WJ(aJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=EJ.workingColorSpace){EJ.workingToColorSpace(aJ.copy(this),Q);let{r:$,g:Z,b:K}=aJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,U,H=(X+W)/2;if(X===W)Y=0,U=0;else{let q=W-X;switch(U=H<=0.5?q/(W+X):q/(2-W-X),W){case $:Y=(Z-K)/q+(Z<K?6:0);break;case Z:Y=(K-$)/q+2;break;case K:Y=($-Z)/q+4;break}Y/=6}return J.h=Y,J.s=U,J.l=H,J}getRGB(J,Q=EJ.workingColorSpace){return EJ.workingToColorSpace(aJ.copy(this),Q),J.r=aJ.r,J.g=aJ.g,J.b=aJ.b,J}getStyle(J="srgb"){EJ.workingToColorSpace(aJ.copy(this),J);let{r:Q,g:$,b:Z}=aJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(e8),this.setHSL(e8.h+J,e8.s+Q,e8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(e8),J.getHSL(O7);let $=j6(e8.h,O7.h,Q),Z=j6(e8.s,O7.s,Q),K=j6(e8.l,O7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var aJ=new _0;_0.NAMES=yW;class c6{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new _0(J),this.density=Q}clone(){return new c6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class r7 extends xJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new s8,this.environmentIntensity=1,this.environmentRotation=new s8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var z8=new C,d8=new C,SQ=new C,l8=new C,o9=new C,a9=new C,FK=new C,jQ=new C,yQ=new C,fQ=new C,vQ=new wJ,bQ=new wJ,hQ=new wJ;class G8{constructor(J=new C,Q=new C,$=new C){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),z8.subVectors(J,Q),Z.cross(z8);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){z8.subVectors(Z,Q),d8.subVectors($,Q),SQ.subVectors(J,Q);let W=z8.dot(z8),X=z8.dot(d8),Y=z8.dot(SQ),U=d8.dot(d8),H=d8.dot(SQ),q=W*U-X*X;if(q===0)return K.set(0,0,0),null;let F=1/q,N=(U*Y-X*H)*F,O=(W*H-X*Y)*F;return K.set(1-N-O,O,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,l8)===null)return!1;return l8.x>=0&&l8.y>=0&&l8.x+l8.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,l8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,l8.x),Y.addScaledVector(W,l8.y),Y.addScaledVector(X,l8.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return vQ.setScalar(0),bQ.setScalar(0),hQ.setScalar(0),vQ.fromBufferAttribute(J,Q),bQ.fromBufferAttribute(J,$),hQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(vQ,K.x),W.addScaledVector(bQ,K.y),W.addScaledVector(hQ,K.z),W}static isFrontFacing(J,Q,$,Z){return z8.subVectors($,Q),d8.subVectors(J,Q),z8.cross(d8).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return z8.subVectors(this.c,this.b),d8.subVectors(this.a,this.b),z8.cross(d8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return G8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return G8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return G8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return G8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return G8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;o9.subVectors(Z,$),a9.subVectors(K,$),jQ.subVectors(J,$);let Y=o9.dot(jQ),U=a9.dot(jQ);if(Y<=0&&U<=0)return Q.copy($);yQ.subVectors(J,Z);let H=o9.dot(yQ),q=a9.dot(yQ);if(H>=0&&q<=H)return Q.copy(Z);let F=Y*q-H*U;if(F<=0&&Y>=0&&H<=0)return W=Y/(Y-H),Q.copy($).addScaledVector(o9,W);fQ.subVectors(J,K);let N=o9.dot(fQ),O=a9.dot(fQ);if(O>=0&&N<=O)return Q.copy(K);let R=N*U-Y*O;if(R<=0&&U>=0&&O<=0)return X=U/(U-O),Q.copy($).addScaledVector(a9,X);let _=H*O-N*q;if(_<=0&&q-H>=0&&N-O>=0)return FK.subVectors(K,Z),X=(q-H)/(q-H+(N-O)),Q.copy(Z).addScaledVector(FK,X);let G=1/(_+R+F);return W=R*G,X=F*G,Q.copy($).addScaledVector(o9,W).addScaledVector(a9,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class I9{constructor(J=new C(1/0,1/0,1/0),Q=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(A8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(A8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=A8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,A8);else A8.fromBufferAttribute(K,W);A8.applyMatrix4(J.matrixWorld),this.expandByPoint(A8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();G7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();G7.copy($.boundingBox)}G7.applyMatrix4(J.matrixWorld),this.union(G7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,A8),A8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(P6),D7.subVectors(this.max,P6),r9.subVectors(J.a,P6),t9.subVectors(J.b,P6),e9.subVectors(J.c,P6),J9.subVectors(t9,r9),Q9.subVectors(e9,t9),F9.subVectors(r9,e9);let Q=[0,-J9.z,J9.y,0,-Q9.z,Q9.y,0,-F9.z,F9.y,J9.z,0,-J9.x,Q9.z,0,-Q9.x,F9.z,0,-F9.x,-J9.y,J9.x,0,-Q9.y,Q9.x,0,-F9.y,F9.x,0];if(!xQ(Q,r9,t9,e9,D7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!xQ(Q,r9,t9,e9,D7))return!1;return R7.crossVectors(J9,Q9),Q=[R7.x,R7.y,R7.z],xQ(Q,r9,t9,e9,D7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,A8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(A8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return u8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),u8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),u8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),u8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),u8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),u8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),u8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),u8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(u8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var u8=[new C,new C,new C,new C,new C,new C,new C,new C],A8=new C,G7=new I9,r9=new C,t9=new C,e9=new C,J9=new C,Q9=new C,F9=new C,P6=new C,D7=new C,R7=new C,O9=new C;function xQ(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){O9.fromArray(J,W);let Y=K.x*Math.abs(O9.x)+K.y*Math.abs(O9.y)+K.z*Math.abs(O9.z),U=Q.dot(O9),H=$.dot(O9),q=Z.dot(O9);if(Math.max(-Math.max(U,H,q),Math.min(U,H,q))>Y)return!1}return!0}var hJ=new C,L7=new A0,RY=0;class $8 extends v8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)L7.fromBufferAttribute(this,Q),L7.applyMatrix3(J),this.setXY(Q,L7.x,L7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyMatrix3(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyMatrix4(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyNormalMatrix(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)hJ.fromBufferAttribute(this,Q),hJ.transformDirection(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=K6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=tJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=K6(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=K6(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=K6(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=K6(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),Z=tJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),Z=tJ(Z,this.array),K=tJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class t7 extends $8{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class e7 extends $8{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class OJ extends $8{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var LY=new I9,C6=new C,gQ=new C;class z9{constructor(J=new C,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else LY.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;C6.subVectors(J,this.center);let Q=C6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(C6,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else gQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(C6.copy(J.center).add(gQ)),this.expandByPoint(C6.copy(J.center).sub(gQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var VY=0,F8=new zJ,pQ=new xJ,J6=new C,H8=new I9,T6=new I9,nJ=new C;class fJ extends v8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VY++}),this.uuid=O6(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((lX(J))?e7:t7)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new t0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return F8.makeRotationFromQuaternion(J),this.applyMatrix4(F8),this}rotateX(J){return F8.makeRotationX(J),this.applyMatrix4(F8),this}rotateY(J){return F8.makeRotationY(J),this.applyMatrix4(F8),this}rotateZ(J){return F8.makeRotationZ(J),this.applyMatrix4(F8),this}translate(J,Q,$){return F8.makeTranslation(J,Q,$),this.applyMatrix4(F8),this}scale(J,Q,$){return F8.makeScale(J,Q,$),this.applyMatrix4(F8),this}lookAt(J){return pQ.lookAt(J),pQ.updateMatrix(),this.applyMatrix4(pQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(J6).negate(),this.translate(J6.x,J6.y,J6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new OJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)n0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new I9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){i0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(H8.setFromBufferAttribute(K),this.morphTargetsRelative)nJ.addVectors(this.boundingBox.min,H8.min),this.boundingBox.expandByPoint(nJ),nJ.addVectors(this.boundingBox.max,H8.max),this.boundingBox.expandByPoint(nJ);else this.boundingBox.expandByPoint(H8.min),this.boundingBox.expandByPoint(H8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))i0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new z9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){i0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(J){let $=this.boundingSphere.center;if(H8.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(T6.setFromBufferAttribute(X),this.morphTargetsRelative)nJ.addVectors(H8.min,T6.min),H8.expandByPoint(nJ),nJ.addVectors(H8.max,T6.max),H8.expandByPoint(nJ);else H8.expandByPoint(T6.min),H8.expandByPoint(T6.max)}H8.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)nJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(nJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let U=0,H=X.count;U<H;U++){if(nJ.fromBufferAttribute(X,U),Y)J6.fromBufferAttribute(J,U),nJ.add(J6);Z=Math.max(Z,$.distanceToSquared(nJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))i0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){i0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new $8(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let z=0;z<$.count;z++)X[z]=new C,Y[z]=new C;let U=new C,H=new C,q=new C,F=new A0,N=new A0,O=new A0,R=new C,_=new C;function G(z,D,k){U.fromBufferAttribute($,z),H.fromBufferAttribute($,D),q.fromBufferAttribute($,k),F.fromBufferAttribute(K,z),N.fromBufferAttribute(K,D),O.fromBufferAttribute(K,k),H.sub(U),q.sub(U),N.sub(F),O.sub(F);let x=1/(N.x*O.y-O.x*N.y);if(!isFinite(x))return;R.copy(H).multiplyScalar(O.y).addScaledVector(q,-N.y).multiplyScalar(x),_.copy(q).multiplyScalar(N.x).addScaledVector(H,-O.x).multiplyScalar(x),X[z].add(R),X[D].add(R),X[k].add(R),Y[z].add(_),Y[D].add(_),Y[k].add(_)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let z=0,D=E.length;z<D;++z){let k=E[z],x=k.start,j=k.count;for(let y=x,p=x+j;y<p;y+=3)G(J.getX(y+0),J.getX(y+1),J.getX(y+2))}let P=new C,T=new C,B=new C,A=new C;function w(z){B.fromBufferAttribute(Z,z),A.copy(B);let D=X[z];P.copy(D),P.sub(B.multiplyScalar(B.dot(D))).normalize(),T.crossVectors(A,D);let x=T.dot(Y[z])<0?-1:1;W.setXYZW(z,P.x,P.y,P.z,x)}for(let z=0,D=E.length;z<D;++z){let k=E[z],x=k.start,j=k.count;for(let y=x,p=x+j;y<p;y+=3)w(J.getX(y+0)),w(J.getX(y+1)),w(J.getX(y+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new $8(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,N=$.count;F<N;F++)$.setXYZ(F,0,0,0);let Z=new C,K=new C,W=new C,X=new C,Y=new C,U=new C,H=new C,q=new C;if(J)for(let F=0,N=J.count;F<N;F+=3){let O=J.getX(F+0),R=J.getX(F+1),_=J.getX(F+2);Z.fromBufferAttribute(Q,O),K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,_),H.subVectors(W,K),q.subVectors(Z,K),H.cross(q),X.fromBufferAttribute($,O),Y.fromBufferAttribute($,R),U.fromBufferAttribute($,_),X.add(H),Y.add(H),U.add(H),$.setXYZ(O,X.x,X.y,X.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(_,U.x,U.y,U.z)}else for(let F=0,N=Q.count;F<N;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),H.subVectors(W,K),q.subVectors(Z,K),H.cross(q),$.setXYZ(F+0,H.x,H.y,H.z),$.setXYZ(F+1,H.x,H.y,H.z),$.setXYZ(F+2,H.x,H.y,H.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)nJ.fromBufferAttribute(J,Q),nJ.normalize(),J.setXYZ(Q,nJ.x,nJ.y,nJ.z)}toNonIndexed(){function J(X,Y){let{array:U,itemSize:H,normalized:q}=X,F=new U.constructor(Y.length*H),N=0,O=0;for(let R=0,_=Y.length;R<_;R++){if(X.isInterleavedBufferAttribute)N=Y[R]*X.data.stride+X.offset;else N=Y[R]*H;for(let G=0;G<H;G++)F[O++]=U[N++]}return new $8(F,H,q)}if(this.index===null)return n0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new fJ,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],U=J(Y,$);Q.setAttribute(X,U)}let K=this.morphAttributes;for(let X in K){let Y=[],U=K[X];for(let H=0,q=U.length;H<q;H++){let F=U[H],N=J(F,$);Y.push(N)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let U=W[X];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],H=[];for(let q=0,F=U.length;q<F;q++){let N=U[q];H.push(N.toJSON(J.data))}if(H.length>0)Z[Y]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone(Q))}let K=J.morphAttributes;for(let U in K){let H=[],q=K[U];for(let F=0,N=q.length;F<N;F++)H.push(q[F].clone(Q));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let q=W[U];this.addGroup(q.start,q.count,q.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var mQ=new C,MY=new C,kY=new t0;class O8{constructor(J=new C(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=mQ.subVectors($,Q).cross(MY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(mQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||kY.getNormalMatrix(J),Z=this.coplanarPoint(mQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var BY=0;class a8 extends v8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:BY++}),this.uuid=O6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){n0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){n0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new _0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new O8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new A0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new A0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var c8=new C,dQ=new C,V7=new C,M7=new C;class U9{constructor(J=new C,Q=new C(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,c8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=c8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return c8.copy(this.origin).addScaledVector(this.direction,Q),c8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){dQ.copy(J).add(Q).multiplyScalar(0.5),V7.copy(Q).sub(J).normalize(),M7.copy(this.origin).sub(dQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(V7),X=M7.dot(this.direction),Y=-M7.dot(V7),U=M7.lengthSq(),H=Math.abs(1-W*W),q,F,N,O;if(H>0)if(q=W*Y-X,F=W*X-Y,O=K*H,q>=0)if(F>=-O)if(F<=O){let R=1/H;q*=R,F*=R,N=q*(q+W*F+2*X)+F*(W*q+F+2*Y)+U}else F=K,q=Math.max(0,-(W*F+X)),N=-q*q+F*(F+2*Y)+U;else F=-K,q=Math.max(0,-(W*F+X)),N=-q*q+F*(F+2*Y)+U;else if(F<=-O)q=Math.max(0,-(-W*K+X)),F=q>0?-K:Math.min(Math.max(-K,-Y),K),N=-q*q+F*(F+2*Y)+U;else if(F<=O)q=0,F=Math.min(Math.max(-K,-Y),K),N=F*(F+2*Y)+U;else q=Math.max(0,-(W*K+X)),F=q>0?K:Math.min(Math.max(-K,-Y),K),N=-q*q+F*(F+2*Y)+U;else F=W>0?-K:K,q=Math.max(0,-(W*F+X)),N=-q*q+F*(F+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,q);if(Z)Z.copy(dQ).addScaledVector(V7,F);return N}intersectSphere(J,Q){if(J.radius<0)return null;c8.subVectors(J.center,this.origin);let $=c8.dot(this.direction),Z=c8.dot(c8)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,U=1/this.direction.x,H=1/this.direction.y,q=1/this.direction.z,F=this.origin;if(U>=0)$=(J.min.x-F.x)*U,Z=(J.max.x-F.x)*U;else $=(J.max.x-F.x)*U,Z=(J.min.x-F.x)*U;if(H>=0)K=(J.min.y-F.y)*H,W=(J.max.y-F.y)*H;else K=(J.max.y-F.y)*H,W=(J.min.y-F.y)*H;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(q>=0)X=(J.min.z-F.z)*q,Y=(J.max.z-F.z)*q;else X=(J.max.z-F.z)*q,Y=(J.min.z-F.z)*q;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,c8)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,X=this.direction,Y=X.x,U=X.y,H=X.z,q=J.x-W.x,F=J.y-W.y,N=J.z-W.z,O=Q.x-W.x,R=Q.y-W.y,_=Q.z-W.z,G=$.x-W.x,E=$.y-W.y,P=$.z-W.z,T=Math.abs(Y),B=Math.abs(U),A=Math.abs(H),w,z,D,k,x,j,y,p,S,m,e,n;if(T>=B&&T>=A)if(D=Y,j=q,S=O,n=G,Y>=0)w=U,z=H,k=F,x=N,y=R,p=_,m=E,e=P;else w=H,z=U,k=N,x=F,y=_,p=R,m=P,e=E;else if(B>=A)if(D=U,j=F,S=R,n=E,U>=0)w=H,z=Y,k=N,x=q,y=_,p=O,m=P,e=G;else w=Y,z=H,k=q,x=N,y=O,p=_,m=G,e=P;else if(D=H,j=N,S=_,n=P,H>=0)w=Y,z=U,k=q,x=F,y=O,p=R,m=G,e=E;else w=U,z=Y,k=F,x=q,y=R,p=O,m=E,e=G;if(D===0)return null;let H0=w/D,r=z/D,K0=1/D,N0=k-H0*j,l0=x-r*j,g0=y-H0*S,GJ=p-r*S,r0=m-H0*n,a=e-r*n,O0=r0*GJ-a*g0,q0=N0*a-l0*r0,p0=g0*l0-GJ*N0;if(Z){if(O0<0||q0<0||p0<0)return null}else if((O0<0||q0<0||p0<0)&&(O0>0||q0>0||p0>0))return null;let T0=O0+q0+p0;if(T0===0)return null;let h0=K0*(O0*j+q0*S+p0*n);if(T0>0?h0<0:h0>0)return null;return this.at(h0/T0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W8 extends a8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var OK=new zJ,G9=new U9,k7=new z9,GK=new C,B7=new C,I7=new C,z7=new C,lQ=new C,A7=new C,DK=new C,_7=new C;class o extends xJ{constructor(J=new fJ,Q=new W8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){A7.set(0,0,0);for(let Y=0,U=K.length;Y<U;Y++){let H=X[Y],q=K[Y];if(H===0)continue;if(lQ.fromBufferAttribute(q,J),W)A7.addScaledVector(lQ,H);else A7.addScaledVector(lQ.sub(Q),H)}Q.add(A7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(k7.copy($.boundingSphere),k7.applyMatrix4(K),G9.copy(J.ray).recast(J.near),k7.containsPoint(G9.origin)===!1){if(G9.intersectSphere(k7,GK)===null)return;if(G9.origin.distanceToSquared(GK)>(J.far-J.near)**2)return}if(OK.copy(K).invert(),G9.copy(J.ray).applyMatrix4(OK),$.boundingBox!==null){if(G9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,G9)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,q=K.attributes.normal,F=K.groups,N=K.drawRange;if(X!==null)if(Array.isArray(W))for(let O=0,R=F.length;O<R;O++){let _=F[O],G=W[_.materialIndex],E=Math.max(_.start,N.start),P=Math.min(X.count,Math.min(_.start+_.count,N.start+N.count));for(let T=E,B=P;T<B;T+=3){let A=X.getX(T),w=X.getX(T+1),z=X.getX(T+2);if(Z=P7(this,G,J,$,U,H,q,A,w,z),Z)Z.faceIndex=Math.floor(T/3),Z.face.materialIndex=_.materialIndex,Q.push(Z)}}else{let O=Math.max(0,N.start),R=Math.min(X.count,N.start+N.count);for(let _=O,G=R;_<G;_+=3){let E=X.getX(_),P=X.getX(_+1),T=X.getX(_+2);if(Z=P7(this,W,J,$,U,H,q,E,P,T),Z)Z.faceIndex=Math.floor(_/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let O=0,R=F.length;O<R;O++){let _=F[O],G=W[_.materialIndex],E=Math.max(_.start,N.start),P=Math.min(Y.count,Math.min(_.start+_.count,N.start+N.count));for(let T=E,B=P;T<B;T+=3){let A=T,w=T+1,z=T+2;if(Z=P7(this,G,J,$,U,H,q,A,w,z),Z)Z.faceIndex=Math.floor(T/3),Z.face.materialIndex=_.materialIndex,Q.push(Z)}}else{let O=Math.max(0,N.start),R=Math.min(Y.count,N.start+N.count);for(let _=O,G=R;_<G;_+=3){let E=_,P=_+1,T=_+2;if(Z=P7(this,W,J,$,U,H,q,E,P,T),Z)Z.faceIndex=Math.floor(_/3),Q.push(Z)}}}}function IY(J,Q,$,Z,K,W,X,Y){let U;if(Q.side===1)U=Z.intersectTriangle(X,W,K,!0,Y);else U=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(U===null)return null;_7.copy(Y),_7.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(_7);if(H<$.near||H>$.far)return null;return{distance:H,point:_7.clone(),object:J}}function P7(J,Q,$,Z,K,W,X,Y,U,H){J.getVertexPosition(Y,B7),J.getVertexPosition(U,I7),J.getVertexPosition(H,z7);let q=IY(J,Q,$,Z,B7,I7,z7,DK);if(q){let F=new C;if(G8.getBarycoord(DK,B7,I7,z7,F),K)q.uv=G8.getInterpolatedAttribute(K,Y,U,H,F,new A0);if(W)q.uv1=G8.getInterpolatedAttribute(W,Y,U,H,F,new A0);if(X){if(q.normal=G8.getInterpolatedAttribute(X,Y,U,H,F,new C),q.normal.dot(Z.direction)>0)q.normal.multiplyScalar(-1)}let N={a:Y,b:U,c:H,normal:new C,materialIndex:0};G8.getNormal(B7,I7,z7,N.normal),q.face=N,q.barycoord=F}return q}class QZ extends sJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,U=1003,H=1003,q,F){super(null,W,X,Y,U,H,Z,K,q,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var D9=new z9,zY=new A0(0.5,0.5),C7=new C;class n6{constructor(J=new O8,Q=new O8,$=new O8,Z=new O8,K=new O8,W=new O8){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],U=K[3],H=K[4],q=K[5],F=K[6],N=K[7],O=K[8],R=K[9],_=K[10],G=K[11],E=K[12],P=K[13],T=K[14],B=K[15];if(Z[0].setComponents(U-W,N-H,G-O,B-E).normalize(),Z[1].setComponents(U+W,N+H,G+O,B+E).normalize(),Z[2].setComponents(U+X,N+q,G+R,B+P).normalize(),Z[3].setComponents(U-X,N-q,G-R,B-P).normalize(),$)Z[4].setComponents(Y,F,_,T).normalize(),Z[5].setComponents(U-Y,N-F,G-_,B-T).normalize();else if(Z[4].setComponents(U-Y,N-F,G-_,B-T).normalize(),Q===2000)Z[5].setComponents(U+Y,N+F,G+_,B+T).normalize();else if(Q===2001)Z[5].setComponents(Y,F,_,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();D9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();D9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(D9)}intersectsSprite(J){D9.center.set(0,0,0);let Q=zY.distanceTo(J.center);return D9.radius=0.7071067811865476+Q,D9.applyMatrix4(J.matrixWorld),this.intersectsSphere(D9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(C7.x=Z.normal.x>0?J.max.x:J.min.x,C7.y=Z.normal.y>0?J.max.y:J.min.y,C7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(C7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s6 extends a8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var v7=new C,b7=new C,RK=new zJ,w6=new U9,T7=new z9,uQ=new C,LK=new C;class $Z extends xJ{constructor(J=new fJ,Q=new s6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,K=Q.count;Z<K;Z++)v7.fromBufferAttribute(Q,Z-1),b7.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=v7.distanceTo(b7);J.setAttribute("lineDistance",new OJ($,1))}else n0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(T7.copy($.boundingSphere),T7.applyMatrix4(Z),T7.radius+=K,J.ray.intersectsSphere(T7)===!1)return;RK.copy(Z).invert(),w6.copy(J.ray).applyMatrix4(RK);let X=K/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,U=this.isLineSegments?2:1,H=$.index,F=$.attributes.position;if(H!==null){let N=Math.max(0,W.start),O=Math.min(H.count,W.start+W.count);for(let R=N,_=O-1;R<_;R+=U){let G=H.getX(R),E=H.getX(R+1),P=w7(this,J,w6,Y,G,E,R);if(P)Q.push(P)}if(this.isLineLoop){let R=H.getX(O-1),_=H.getX(N),G=w7(this,J,w6,Y,R,_,O-1);if(G)Q.push(G)}}else{let N=Math.max(0,W.start),O=Math.min(F.count,W.start+W.count);for(let R=N,_=O-1;R<_;R+=U){let G=w7(this,J,w6,Y,R,R+1,R);if(G)Q.push(G)}if(this.isLineLoop){let R=w7(this,J,w6,Y,O-1,N,O-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}}function w7(J,Q,$,Z,K,W,X){let Y=J.geometry.attributes.position;if(v7.fromBufferAttribute(Y,K),b7.fromBufferAttribute(Y,W),$.distanceSqToSegment(v7,b7,uQ,LK)>Z)return;uQ.applyMatrix4(J.matrixWorld);let H=Q.ray.origin.distanceTo(uQ);if(H<Q.near||H>Q.far)return;return{distance:H,point:LK.clone().applyMatrix4(J.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:J}}var VK=new C,MK=new C;class JQ extends $Z{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,K=Q.count;Z<K;Z+=2)VK.fromBufferAttribute(Q,Z),MK.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+VK.distanceTo(MK);J.setAttribute("lineDistance",new OJ($,1))}else n0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class i6 extends a8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var kK=new zJ,aQ=new U9,S7=new z9,j7=new C;class QQ extends xJ{constructor(J=new fJ,Q=new i6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(S7.copy($.boundingSphere),S7.applyMatrix4(Z),S7.radius+=K,J.ray.intersectsSphere(S7)===!1)return;kK.copy(Z).invert(),aQ.copy(J.ray).applyMatrix4(kK);let X=K/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,U=$.index,q=$.attributes.position;if(U!==null){let F=Math.max(0,W.start),N=Math.min(U.count,W.start+W.count);for(let O=F,R=N;O<R;O++){let _=U.getX(O);j7.fromBufferAttribute(q,_),BK(j7,_,Y,Z,J,Q,this)}}else{let F=Math.max(0,W.start),N=Math.min(q.count,W.start+W.count);for(let O=F,R=N;O<R;O++)j7.fromBufferAttribute(q,O),BK(j7,O,Y,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}}function BK(J,Q,$,Z,K,W,X){let Y=aQ.distanceSqToPoint(J);if(Y<$){let U=new C;aQ.closestPointToPoint(J,U),U.applyMatrix4(Z);let H=K.ray.origin.distanceTo(U);if(H<K.near||H>K.far)return;W.push({distance:H,distanceToRay:Math.sqrt(Y),point:U,index:Q,face:null,faceIndex:null,barycoord:null,object:X})}}class $Q extends sJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,U,H){super(J,Q,$,Z,K,W,X,Y,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class r8 extends sJ{constructor(J,Q,$,Z,K,W,X,Y,U){super(J,Q,$,Z,K,W,X,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class A9 extends sJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,U,H=1026,q=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:q};super(F,Z,K,W,X,Y,H,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new d6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class ZZ extends A9{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,U=1026){let H={width:J,height:J,depth:1},q=[H,H,H,H,H,H];super(J,J,Q,$,Z,K,W,X,Y,U);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class ZQ extends sJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class v0 extends fJ{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],U=[],H=[],q=[],F=0,N=0;O("z","y","x",-1,-1,$,Q,J,W,K,0),O("z","y","x",1,-1,$,Q,-J,W,K,1),O("x","z","y",1,1,J,$,Q,Z,W,2),O("x","z","y",1,-1,J,$,-Q,Z,W,3),O("x","y","z",1,-1,J,Q,$,Z,K,4),O("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new OJ(U,3)),this.setAttribute("normal",new OJ(H,3)),this.setAttribute("uv",new OJ(q,2));function O(R,_,G,E,P,T,B,A,w,z,D){let k=T/w,x=B/z,j=T/2,y=B/2,p=A/2,S=w+1,m=z+1,e=0,n=0,H0=new C;for(let r=0;r<m;r++){let K0=r*x-y;for(let N0=0;N0<S;N0++){let l0=N0*k-j;H0[R]=l0*E,H0[_]=K0*P,H0[G]=p,U.push(H0.x,H0.y,H0.z),H0[R]=0,H0[_]=0,H0[G]=A>0?1:-1,H.push(H0.x,H0.y,H0.z),q.push(N0/w),q.push(1-r/z),e+=1}}for(let r=0;r<z;r++)for(let K0=0;K0<w;K0++){let N0=F+K0+S*r,l0=F+K0+S*(r+1),g0=F+(K0+1)+S*(r+1),GJ=F+(K0+1)+S*r;Y.push(N0,l0,GJ),Y.push(l0,g0,GJ),n+=6}X.addGroup(N,n,D),N+=n,F+=e}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new v0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class o6 extends fJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let K=[],W=[],X=[],Y=[],U=new C,H=new A0;W.push(0,0,0),X.push(0,0,1),Y.push(0.5,0.5);for(let q=0,F=3;q<=Q;q++,F+=3){let N=$+q/Q*Z;U.x=J*Math.cos(N),U.y=J*Math.sin(N),W.push(U.x,U.y,U.z),X.push(0,0,1),H.x=(W[F]/J+1)/2,H.y=(W[F+1]/J+1)/2,Y.push(H.x,H.y)}for(let q=1;q<=Q;q++)K.push(q,q+1,0);this.setIndex(K),this.setAttribute("position",new OJ(W,3)),this.setAttribute("normal",new OJ(X,3)),this.setAttribute("uv",new OJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o6(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class FJ extends fJ{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let U=this;Z=Math.floor(Z),K=Math.floor(K);let H=[],q=[],F=[],N=[],O=0,R=[],_=$/2,G=0;if(E(),W===!1){if(J>0)P(!0);if(Q>0)P(!1)}this.setIndex(H),this.setAttribute("position",new OJ(q,3)),this.setAttribute("normal",new OJ(F,3)),this.setAttribute("uv",new OJ(N,2));function E(){let T=new C,B=new C,A=0,w=(Q-J)/$;for(let z=0;z<=K;z++){let D=[],k=z/K,x=k*(Q-J)+J;for(let j=0;j<=Z;j++){let y=j/Z,p=y*Y+X,S=Math.sin(p),m=Math.cos(p);B.x=x*S,B.y=-k*$+_,B.z=x*m,q.push(B.x,B.y,B.z),T.set(S,w,m).normalize(),F.push(T.x,T.y,T.z),N.push(y,1-k),D.push(O++)}R.push(D)}for(let z=0;z<Z;z++)for(let D=0;D<K;D++){let k=R[D][z],x=R[D+1][z],j=R[D+1][z+1],y=R[D][z+1];if(J>0||D!==0)H.push(k,x,y),A+=3;if(Q>0||D!==K-1)H.push(x,j,y),A+=3}U.addGroup(G,A,0),G+=A}function P(T){let B=O,A=new A0,w=new C,z=0,D=T===!0?J:Q,k=T===!0?1:-1;for(let j=1;j<=Z;j++)q.push(0,_*k,0),F.push(0,k,0),N.push(0.5,0.5),O++;let x=O;for(let j=0;j<=Z;j++){let p=j/Z*Y+X,S=Math.cos(p),m=Math.sin(p);w.x=D*m,w.y=_*k,w.z=D*S,q.push(w.x,w.y,w.z),F.push(0,k,0),A.x=S*0.5+0.5,A.y=m*0.5*k+0.5,N.push(A.x,A.y),O++}for(let j=0;j<Z;j++){let y=B+j,p=x+j;if(T===!0)H.push(p,p+1,y);else H.push(p+1,p,y);z+=3}U.addGroup(G,z,T===!0?1:2),G+=z}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new FJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class eJ extends FJ{constructor(J=1,Q=1,$=32,Z=1,K=!1,W=0,X=Math.PI*2){super(0,J,Q,$,Z,K,W,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:X}}static fromJSON(J){return new eJ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class KQ extends fJ{constructor(J=[],Q=[],$=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:Z};let K=[],W=[];if(X(Z),U($),H(),this.setAttribute("position",new OJ(K,3)),this.setAttribute("normal",new OJ(K.slice(),3)),this.setAttribute("uv",new OJ(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function X(E){let P=new C,T=new C,B=new C;for(let A=0;A<Q.length;A+=3)N(Q[A+0],P),N(Q[A+1],T),N(Q[A+2],B),Y(P,T,B,E)}function Y(E,P,T,B){let A=B+1,w=[];for(let z=0;z<=A;z++){w[z]=[];let D=E.clone().lerp(T,z/A),k=P.clone().lerp(T,z/A),x=A-z;for(let j=0;j<=x;j++)if(j===0&&z===A)w[z][j]=D;else w[z][j]=D.clone().lerp(k,j/x)}for(let z=0;z<A;z++)for(let D=0;D<2*(A-z)-1;D++){let k=Math.floor(D/2);if(D%2===0)F(w[z][k+1]),F(w[z+1][k]),F(w[z][k]);else F(w[z][k+1]),F(w[z+1][k+1]),F(w[z+1][k])}}function U(E){let P=new C;for(let T=0;T<K.length;T+=3)P.x=K[T+0],P.y=K[T+1],P.z=K[T+2],P.normalize().multiplyScalar(E),K[T+0]=P.x,K[T+1]=P.y,K[T+2]=P.z}function H(){let E=new C;for(let P=0;P<K.length;P+=3){E.x=K[P+0],E.y=K[P+1],E.z=K[P+2];let T=_(E)/2/Math.PI+0.5,B=G(E)/Math.PI+0.5;W.push(T,1-B)}O(),q()}function q(){for(let E=0;E<W.length;E+=6){let P=W[E+0],T=W[E+2],B=W[E+4],A=Math.max(P,T,B),w=Math.min(P,T,B);if(A>0.9&&w<0.1){if(P<0.2)W[E+0]+=1;if(T<0.2)W[E+2]+=1;if(B<0.2)W[E+4]+=1}}}function F(E){K.push(E.x,E.y,E.z)}function N(E,P){let T=E*3;P.x=J[T+0],P.y=J[T+1],P.z=J[T+2]}function O(){let E=new C,P=new C,T=new C,B=new C,A=new A0,w=new A0,z=new A0;for(let D=0,k=0;D<K.length;D+=9,k+=6){E.set(K[D+0],K[D+1],K[D+2]),P.set(K[D+3],K[D+4],K[D+5]),T.set(K[D+6],K[D+7],K[D+8]),A.set(W[k+0],W[k+1]),w.set(W[k+2],W[k+3]),z.set(W[k+4],W[k+5]),B.copy(E).add(P).add(T).divideScalar(3);let x=_(B);R(A,k+0,E,x),R(w,k+2,P,x),R(z,k+4,T,x)}}function R(E,P,T,B){if(B<0&&E.x===1)W[P]=E.x-1;if(T.x===0&&T.z===0)W[P]=B/2/Math.PI+0.5}function _(E){return Math.atan2(E.z,-E.x)}function G(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new KQ(J.vertices,J.indices,J.radius,J.detail)}}class G6 extends KQ{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,Z=1/$,K=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-Z,-$,0,-Z,$,0,Z,-$,0,Z,$,-Z,-$,0,-Z,$,0,Z,-$,0,Z,$,0,-$,0,-Z,$,0,-Z,-$,0,Z,$,0,Z],W=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(K,W,J,Q);this.type="DodecahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new G6(J.radius,J.detail)}}class C8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){n0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let X=0,Y=K-1,U;while(X<=Y)if(Z=Math.floor(X+(Y-X)/2),U=$[Z]-W,U<0)X=Z+1;else if(U>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===W)return Z/(K-1);let H=$[Z],F=$[Z+1]-H,N=(W-H)/F;return(Z+N)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),X=this.getPoint(K),Y=Q||(W.isVector2?new A0:new C);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new C,Z=[],K=[],W=[],X=new C,Y=new zJ;for(let N=0;N<=J;N++){let O=N/J;Z[N]=this.getTangentAt(O,new C)}K[0]=new C,W[0]=new C;let U=Number.MAX_VALUE,H=Math.abs(Z[0].x),q=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(H<=U)U=H,$.set(1,0,0);if(q<=U)U=q,$.set(0,1,0);if(F<=U)$.set(0,0,1);X.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],X),W[0].crossVectors(Z[0],K[0]);for(let N=1;N<=J;N++){if(K[N]=K[N-1].clone(),W[N]=W[N-1].clone(),X.crossVectors(Z[N-1],Z[N]),X.length()>Number.EPSILON){X.normalize();let O=Math.acos(WJ(Z[N-1].dot(Z[N]),-1,1));K[N].applyMatrix4(Y.makeRotationAxis(X,O))}W[N].crossVectors(Z[N],K[N])}if(Q===!0){let N=Math.acos(WJ(K[0].dot(K[J]),-1,1));if(N/=J,Z[0].dot(X.crossVectors(K[0],K[J]))>0)N=-N;for(let O=1;O<=J;O++)K[O].applyMatrix4(Y.makeRotationAxis(Z[O],N*O)),W[O].crossVectors(Z[O],K[O])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class WQ extends C8{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,Q=new A0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let X=this.aStartAngle+J*K,Y=this.aX+this.xRadius*Math.cos(X),U=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let H=Math.cos(this.aRotation),q=Math.sin(this.aRotation),F=Y-this.aX,N=U-this.aY;Y=F*H-N*q+this.aX,U=F*q+N*H+this.aY}return $.set(Y,U)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class KZ extends WQ{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function WZ(){let J=0,Q=0,$=0,Z=0;function K(W,X,Y,U){J=W,Q=Y,$=-3*W+3*X-2*Y-U,Z=2*W-2*X+Y+U}return{initCatmullRom:function(W,X,Y,U,H){K(X,Y,H*(Y-W),H*(U-X))},initNonuniformCatmullRom:function(W,X,Y,U,H,q,F){let N=(X-W)/H-(Y-W)/(H+q)+(Y-X)/q,O=(Y-X)/q-(U-X)/(q+F)+(U-Y)/F;N*=q,O*=q,K(X,Y,N,O)},calc:function(W){let X=W*W,Y=X*W;return J+Q*W+$*X+Z*Y}}}var IK=new C,zK=new C,cQ=new WZ,nQ=new WZ,sQ=new WZ;class H9 extends C8{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new C){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/K)+1)*K;else if(Y===0&&X===K-1)X=K-2,Y=1;let U,H;if(this.closed||X>0)U=Z[(X-1)%K];else zK.subVectors(Z[0],Z[1]).add(Z[0]),U=zK;let q=Z[X%K],F=Z[(X+1)%K];if(this.closed||X+2<K)H=Z[(X+2)%K];else IK.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),H=IK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,O=Math.pow(U.distanceToSquared(q),N),R=Math.pow(q.distanceToSquared(F),N),_=Math.pow(F.distanceToSquared(H),N);if(R<0.0001)R=1;if(O<0.0001)O=R;if(_<0.0001)_=R;cQ.initNonuniformCatmullRom(U.x,q.x,F.x,H.x,O,R,_),nQ.initNonuniformCatmullRom(U.y,q.y,F.y,H.y,O,R,_),sQ.initNonuniformCatmullRom(U.z,q.z,F.z,H.z,O,R,_)}else if(this.curveType==="catmullrom")cQ.initCatmullRom(U.x,q.x,F.x,H.x,this.tension),nQ.initCatmullRom(U.y,q.y,F.y,H.y,this.tension),sQ.initCatmullRom(U.z,q.z,F.z,H.z,this.tension);return $.set(cQ.calc(Y),nQ.calc(Y),sQ.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new C().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function AK(J,Q,$,Z,K){let W=(Z-Q)*0.5,X=(K-$)*0.5,Y=J*J,U=J*Y;return(2*$-2*Z+W+X)*U+(-3*$+3*Z-2*W-X)*Y+W*J+$}function AY(J,Q){let $=1-J;return $*$*Q}function _Y(J,Q){return 2*(1-J)*J*Q}function PY(J,Q){return J*J*Q}function y6(J,Q,$,Z){return AY(J,Q)+_Y(J,$)+PY(J,Z)}function CY(J,Q){let $=1-J;return $*$*$*Q}function TY(J,Q){let $=1-J;return 3*$*$*J*Q}function wY(J,Q){return 3*(1-J)*J*J*Q}function SY(J,Q){return J*J*J*Q}function f6(J,Q,$,Z,K){return CY(J,Q)+TY(J,$)+wY(J,Z)+SY(J,K)}class XZ extends C8{constructor(J=new A0,Q=new A0,$=new A0,Z=new A0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new A0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(f6(J,Z.x,K.x,W.x,X.x),f6(J,Z.y,K.y,W.y,X.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class YZ extends C8{constructor(J=new C,Q=new C,$=new C,Z=new C){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new C){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(f6(J,Z.x,K.x,W.x,X.x),f6(J,Z.y,K.y,W.y,X.y),f6(J,Z.z,K.z,W.z,X.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class UZ extends C8{constructor(J=new A0,Q=new A0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new A0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new A0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class HZ extends C8{constructor(J=new C,Q=new C){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new C){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new C){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class NZ extends C8{constructor(J=new A0,Q=new A0,$=new A0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new A0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(y6(J,Z.x,K.x,W.x),y6(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class XQ extends C8{constructor(J=new C,Q=new C,$=new C){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new C){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(y6(J,Z.x,K.x,W.x),y6(J,Z.y,K.y,W.y),y6(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class qZ extends C8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new A0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),X=K-W,Y=Z[W===0?W:W-1],U=Z[W],H=Z[W>Z.length-2?Z.length-1:W+1],q=Z[W>Z.length-3?Z.length-1:W+2];return $.set(AK(X,Y.x,U.x,H.x,q.x),AK(X,Y.y,U.y,H.y,q.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new A0().fromArray(Z))}return this}}var jY=Object.freeze({__proto__:null,ArcCurve:KZ,CatmullRomCurve3:H9,CubicBezierCurve:XZ,CubicBezierCurve3:YZ,EllipseCurve:WQ,LineCurve:UZ,LineCurve3:HZ,QuadraticBezierCurve:NZ,QuadraticBezierCurve3:XQ,SplineCurve:qZ});class R8 extends fJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),U=X+1,H=Y+1,q=J/X,F=Q/Y,N=[],O=[],R=[],_=[];for(let G=0;G<H;G++){let E=G*F-W;for(let P=0;P<U;P++){let T=P*q-K;O.push(T,-E,0),R.push(0,0,1),_.push(P/X),_.push(1-G/Y)}}for(let G=0;G<Y;G++)for(let E=0;E<X;E++){let P=E+U*G,T=E+U*(G+1),B=E+1+U*(G+1),A=E+1+U*G;N.push(P,T,A),N.push(T,B,A)}this.setIndex(N),this.setAttribute("position",new OJ(O,3)),this.setAttribute("normal",new OJ(R,3)),this.setAttribute("uv",new OJ(_,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new R8(J.width,J.height,J.widthSegments,J.heightSegments)}}class _9 extends fJ{constructor(J=0.5,Q=1,$=32,Z=1,K=0,W=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:Z,thetaStart:K,thetaLength:W},$=Math.max(3,$),Z=Math.max(1,Z);let X=[],Y=[],U=[],H=[],q=J,F=(Q-J)/Z,N=new C,O=new A0;for(let R=0;R<=Z;R++){for(let _=0;_<=$;_++){let G=K+_/$*W;N.x=q*Math.cos(G),N.y=q*Math.sin(G),Y.push(N.x,N.y,N.z),U.push(0,0,1),O.x=(N.x/Q+1)/2,O.y=(N.y/Q+1)/2,H.push(O.x,O.y)}q+=F}for(let R=0;R<Z;R++){let _=R*($+1);for(let G=0;G<$;G++){let E=G+_,P=E,T=E+$+1,B=E+$+2,A=E+1;X.push(P,T,A),X.push(T,B,A)}}this.setIndex(X),this.setAttribute("position",new OJ(Y,3)),this.setAttribute("normal",new OJ(U,3)),this.setAttribute("uv",new OJ(H,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class mJ extends fJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,W=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(W+X,Math.PI),U=0,H=[],q=new C,F=new C,N=[],O=[],R=[],_=[];for(let G=0;G<=$;G++){let E=[],P=G/$,T=W+P*X,B=J*Math.cos(T),A=Math.sqrt(J*J-B*B),w=0;if(G===0&&W===0)w=0.5/Q;else if(G===$&&Y===Math.PI)w=-0.5/Q;for(let z=0;z<=Q;z++){let D=z/Q,k=Z+D*K;q.x=-A*Math.cos(k),q.y=B,q.z=A*Math.sin(k),O.push(q.x,q.y,q.z),F.copy(q).normalize(),R.push(F.x,F.y,F.z),_.push(D+w,1-P),E.push(U++)}H.push(E)}for(let G=0;G<$;G++)for(let E=0;E<Q;E++){let P=H[G][E+1],T=H[G][E],B=H[G+1][E],A=H[G+1][E+1];if(G!==0||W>0)N.push(P,T,A);if(G!==$-1||Y<Math.PI)N.push(T,B,A)}this.setIndex(N),this.setAttribute("position",new OJ(O,3)),this.setAttribute("normal",new OJ(R,3)),this.setAttribute("uv",new OJ(_,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new mJ(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class a6 extends fJ{constructor(J=1,Q=0.4,$=12,Z=48,K=Math.PI*2,W=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:X},$=Math.floor($),Z=Math.floor(Z);let Y=[],U=[],H=[],q=[],F=new C,N=new C,O=new C;for(let R=0;R<=$;R++){let _=W+R/$*X;for(let G=0;G<=Z;G++){let E=G/Z*K;N.x=(J+Q*Math.cos(_))*Math.cos(E),N.y=(J+Q*Math.cos(_))*Math.sin(E),N.z=Q*Math.sin(_),U.push(N.x,N.y,N.z),F.x=J*Math.cos(E),F.y=J*Math.sin(E),O.subVectors(N,F).normalize(),H.push(O.x,O.y,O.z),q.push(G/Z),q.push(R/$)}}for(let R=1;R<=$;R++)for(let _=1;_<=Z;_++){let G=(Z+1)*R+_-1,E=(Z+1)*(R-1)+_-1,P=(Z+1)*(R-1)+_,T=(Z+1)*R+_;Y.push(G,E,T),Y.push(E,P,T)}this.setIndex(Y),this.setAttribute("position",new OJ(U,3)),this.setAttribute("normal",new OJ(H,3)),this.setAttribute("uv",new OJ(q,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a6(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class r6 extends fJ{constructor(J=new XQ(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),Q=64,$=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:K};let W=J.computeFrenetFrames(Q,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let X=new C,Y=new C,U=new A0,H=new C,q=[],F=[],N=[],O=[];R(),this.setIndex(O),this.setAttribute("position",new OJ(q,3)),this.setAttribute("normal",new OJ(F,3)),this.setAttribute("uv",new OJ(N,2));function R(){for(let P=0;P<Q;P++)_(P);_(K===!1?Q:0),E(),G()}function _(P){H=J.getPointAt(P/Q,H);let T=W.normals[P],B=W.binormals[P];for(let A=0;A<=Z;A++){let w=A/Z*Math.PI*2,z=Math.sin(w),D=-Math.cos(w);Y.x=D*T.x+z*B.x,Y.y=D*T.y+z*B.y,Y.z=D*T.z+z*B.z,Y.normalize(),F.push(Y.x,Y.y,Y.z),X.x=H.x+$*Y.x,X.y=H.y+$*Y.y,X.z=H.z+$*Y.z,q.push(X.x,X.y,X.z)}}function G(){for(let P=1;P<=Q;P++)for(let T=1;T<=Z;T++){let B=(Z+1)*(P-1)+(T-1),A=(Z+1)*P+(T-1),w=(Z+1)*P+T,z=(Z+1)*(P-1)+T;O.push(B,A,z),O.push(A,w,z)}}function E(){for(let P=0;P<=Q;P++)for(let T=0;T<=Z;T++)U.x=P/Q,U.y=T/Z,N.push(U.x,U.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new r6(new jY[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function P9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(_K(K))if(K.isRenderTargetTexture)n0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(_K(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function rJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=P9(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function _K(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function yY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function EZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return EJ.workingColorSpace}var fW={clone:P9,merge:rJ},fY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class L8 extends a8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fY,this.fragmentShader=vY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=P9(J.uniforms),this.uniformsGroups=yY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new _0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new A0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new C().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new wJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new t0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new zJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class FZ extends L8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class d0 extends a8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new A0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class YQ extends d0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new A0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return WJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class OZ extends a8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class GZ extends a8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Q6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function iQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class C9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class DZ extends C9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let U=($-Q)*0.5,H=this.valueSize;this._weightPrev=U/(Q-X),this._weightNext=U/(Y-$),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this._offsetPrev,q=this._offsetNext,F=this._weightPrev,N=this._weightNext,O=($-Q)/(Z-Q),R=O*O,_=R*O,G=-F*_+2*F*R-F*O,E=(1+F)*_+(-1.5-2*F)*R+(-0.5+F)*O+1,P=(-1-N)*_+(1.5+N)*R+0.5*O,T=N*_-N*R;for(let B=0;B!==X;++B)K[B]=G*W[H+B]+E*W[U+B]+P*W[Y+B]+T*W[q+B];return K}}class RZ extends C9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=($-Q)/(Z-Q),q=1-H;for(let F=0;F!==X;++F)K[F]=W[U+F]*q+W[Y+F]*H;return K}}class LZ extends C9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class VZ extends C9{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this.inTangents,q=this.outTangents;if(!H||!q){let O=($-Q)/(Z-Q),R=1-O;for(let _=0;_!==X;++_)K[_]=W[U+_]*R+W[Y+_]*O;return K}let F=X*2,N=J-1;for(let O=0;O!==X;++O){let R=W[U+O],_=W[Y+O],G=N*F+O*2,E=q[G],P=q[G+1],T=J*F+O*2,B=H[T],A=H[T+1],w=hY($,Q,E,B,Z);K[O]=vW(w,R,P,A,_)}return K}}function vW(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function bY(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function hY(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let X=0;X<8;X++){let Y=vW(W,Q,$,Z,K)-J;if(Math.abs(Y)<0.0000000001)break;let U=bY(W,Q,$,Z,K);if(Math.abs(U)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/U))}return W}class V8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Q6(Q,this.TimeBufferType),this.values=Q6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:Q6(J.times,Array),values:Q6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(iQ(J.settings))$.settings={inTangents:Q6(J.settings.inTangents,Array),outTangents:Q6(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new LZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new RZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new DZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new VZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return n0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(iQ(this.settings))PK(this.settings.inTangents,J),PK(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)i0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)i0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){i0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){i0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(uX(Z))for(let X=0,Y=Z.length;X!==Y;++X){let U=Z[X];if(isNaN(U)){i0("KeyframeTrack: Value is not a valid number.",this,X,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,U=J[X],H=J[X+1];if(U!==H&&(X!==1||U!==J[0]))if(!Z){let q=X*$,F=q-$,N=q+$;for(let O=0;O!==$;++O){let R=Q[q+O];if(R!==Q[F+O]||R!==Q[N+O]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let q=X*$,F=W*$;for(let N=0;N!==$;++N)Q[F+N]=Q[q+N]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,U=0;U!==$;++U)Q[Y+U]=Q[X+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,iQ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function PK(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}V8.prototype.ValueTypeName="";V8.prototype.TimeBufferType=Float32Array;V8.prototype.ValueBufferType=Float32Array;V8.prototype.DefaultInterpolation=2301;class T9 extends V8{constructor(J,Q,$){super(J,Q,$)}}T9.prototype.ValueTypeName="bool";T9.prototype.ValueBufferType=Array;T9.prototype.DefaultInterpolation=2300;T9.prototype.InterpolantFactoryMethodLinear=void 0;T9.prototype.InterpolantFactoryMethodSmooth=void 0;class MZ extends V8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}MZ.prototype.ValueTypeName="color";class kZ extends V8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}kZ.prototype.ValueTypeName="number";class BZ extends C9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),U=J*X;for(let H=U+X;U!==H;U+=4)D8.slerpFlat(K,0,W,U-X,W,U,Y);return K}}class UQ extends V8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new BZ(this.times,this.values,this.getValueSize(),J)}}UQ.prototype.ValueTypeName="quaternion";UQ.prototype.InterpolantFactoryMethodSmooth=void 0;class w9 extends V8{constructor(J,Q,$){super(J,Q,$)}}w9.prototype.ValueTypeName="string";w9.prototype.ValueBufferType=Array;w9.prototype.DefaultInterpolation=2300;w9.prototype.InterpolantFactoryMethodLinear=void 0;w9.prototype.InterpolantFactoryMethodSmooth=void 0;class IZ extends V8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}IZ.prototype.ValueTypeName="vector";class zZ{constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(H){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,X)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),Y)return Y(H);return H},this.setURLModifier=function(H){return Y=H,this},this.addHandler=function(H,q){return U.push(H,q),this},this.removeHandler=function(H){let q=U.indexOf(H);if(q!==-1)U.splice(q,2);return this},this.getHandler=function(H){for(let q=0,F=U.length;q<F;q+=2){let N=U[q],O=U[q+1];if(N.global)N.lastIndex=0;if(N.test(H))return O}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var bW=new zZ;class AZ{constructor(J){if(this.manager=J!==void 0?J:bW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}AZ.DEFAULT_MATERIAL_NAME="__DEFAULT";class D6 extends xJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new _0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class HQ extends D6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var oQ=new zJ,CK=new C,TK=new C;class NQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new A0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new zJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new n6,this._frameExtents=new A0(1,1),this._viewportCount=1,this._viewports=[new wJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;CK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(CK),TK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(TK),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){oQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(oQ,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,X=Z?Z.w/K.y:1,Y=Z?Z.x/K.x:0,U=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+U,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+U,0,0,0.5,0.5,0,0,0,1);Q.multiply(oQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var y7=new C,f7=new D8,S8=new C;class qQ extends xJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zJ,this.projectionMatrix=new zJ,this.projectionMatrixInverse=new zJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(y7,f7,S8),S8.x===1&&S8.y===1&&S8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(y7,f7,S8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(y7,f7,S8),S8.x===1&&S8.y===1&&S8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(y7,f7,S8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var $9=new C,wK=new A0,SK=new A0;class Q8 extends qQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=Y6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(S6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return Y6*2*Math.atan(Math.tan(S6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){$9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set($9.x,$9.y).multiplyScalar(-J/$9.z),$9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set($9.x,$9.y).multiplyScalar(-J/$9.z)}getViewSize(J,Q){return this.getViewBounds(J,wK,SK),Q.subVectors(SK,wK)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(S6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/U,Z*=W.width/Y,$*=W.height/U}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class hW extends NQ{constructor(){super(new Q8(90,1,0.5,500));this.isPointLightShadow=!0}}class S9 extends D6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new hW}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class j9 extends qQ{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,X-=H*this.view.offsetY,Y=X-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class xW extends NQ{constructor(){super(new j9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class EQ extends D6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xJ.DEFAULT_UP),this.updateMatrix(),this.target=new xJ,this.shadow=new xW}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class FQ extends D6{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var $6=-90,Z6=1;class _Z extends xJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new Q8($6,Z6,J,Q);Z.layers=this.layers,this.add(Z);let K=new Q8($6,Z6,J,Q);K.layers=this.layers,this.add(K);let W=new Q8($6,Z6,J,Q);W.layers=this.layers,this.add(W);let X=new Q8($6,Z6,J,Q);X.layers=this.layers,this.add(X);let Y=new Q8($6,Z6,J,Q);Y.layers=this.layers,this.add(Y);let U=new Q8($6,Z6,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,U,H]=this.children,q=J.getRenderTarget(),F=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let _=!1;if(J.isWebGLRenderer===!0)_=J.state.buffers.depth.getReversed();else _=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),_&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),_&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),_&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),_&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),_&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),_&&J.autoClear===!1)J.clearDepth();J.render(Q,H),J.setRenderTarget(q,F,N),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class PZ extends Q8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var CZ="\\[\\]\\.:\\/",xY=new RegExp("["+CZ+"]","g"),TZ="[^"+CZ+"]",gY="[^"+CZ.replace("\\.","")+"]",pY=/((?:WC+[\/:])*)/.source.replace("WC",TZ),mY=/(WCOD+)?/.source.replace("WCOD",gY),dY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",TZ),lY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",TZ),uY=new RegExp("^"+pY+mY+dY+lY+"$"),cY=["material","materials","bones","map"];class gW{constructor(J,Q,$){let Z=$||kJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class kJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||kJ.parseTrackName(Q),this.node=kJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new kJ(J,Q,$);else return new kJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(xY,"")}static parseTrackName(J){let Q=uY.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(cY.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=kJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){n0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){i0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){i0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){i0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){i0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){i0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){i0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){i0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=Q.nodeName;i0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){i0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){i0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kJ.Composite=gW;kJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kJ.prototype.GetterByBindingType=[kJ.prototype._getValue_direct,kJ.prototype._getValue_array,kJ.prototype._getValue_arrayElement,kJ.prototype._getValue_toArray];kJ.prototype.SetterByBindingTypeAndVersioning=[[kJ.prototype._setValue_direct,kJ.prototype._setValue_direct_setNeedsUpdate,kJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_array,kJ.prototype._setValue_array_setNeedsUpdate,kJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_arrayElement,kJ.prototype._setValue_arrayElement_setNeedsUpdate,kJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kJ.prototype._setValue_fromArray,kJ.prototype._setValue_fromArray_setNeedsUpdate,kJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eq=new Float32Array(1);var jK=new zJ;class OQ{constructor(J,Q,$=0,Z=1/0){this.ray=new U9(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new l6,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else i0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return jK.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jK),this}intersectObject(J,Q=!0,$=[]){return rQ(J,this,$,Q),$.sort(yK),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)rQ(J[Z],this,$,Q);return $.sort(yK),$}}function yK(J,Q){return J.distance-Q.distance}function rQ(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)rQ(W[X],Q,$,!0)}}class GQ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,n0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class t6{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=WJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(WJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class wZ{static{wZ.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}class DQ extends v8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function SZ(J,Q,$,Z){let K=nY(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function nY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)n0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function YX(){let J=null,Q=!1,$=null,Z=null;function K(W,X){Z=J.requestAnimationFrame(K),$(W,X)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function sY(J){let Q=new WeakMap;function $(Y,U){let{array:H,usage:q}=Y,F=H.byteLength,N=J.createBuffer();J.bindBuffer(U,N),J.bufferData(U,H,q),Y.onUploadCallback();let O;if(H instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)O=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(Y.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)O=J.SHORT;else if(H instanceof Uint32Array)O=J.UNSIGNED_INT;else if(H instanceof Int32Array)O=J.INT;else if(H instanceof Int8Array)O=J.BYTE;else if(H instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:N,type:O,bytesPerElement:H.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,U,H){let{array:q,updateRanges:F}=U;if(J.bindBuffer(H,Y),F.length===0)J.bufferSubData(H,0,q);else{F.sort((O,R)=>O.start-R.start);let N=0;for(let O=1;O<F.length;O++){let R=F[N],_=F[O];if(_.start<=R.start+R.count+1)R.count=Math.max(R.count,_.start+_.count-R.start);else++N,F[N]=_}F.length=N+1;for(let O=0,R=F.length;O<R;O++){let _=F[O];J.bufferSubData(H,_.start*q.BYTES_PER_ELEMENT,q,_.start,_.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function X(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let q=Q.get(Y);if(!q||q.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let H=Q.get(Y);if(H===void 0)Q.set(Y,$(Y,U));else if(H.version<Y.version){if(H.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,Y,U),H.version=Y.version}}return{get:K,remove:W,update:X}}var iY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oY=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$U=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ZU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,DU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VU=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,MU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zU="gl_FragColor = linearToOutputTexel( gl_FragColor );",AU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_U=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,PU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nU=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sU=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oU=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aU=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$H=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NH=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FH=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RH=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IH=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_H=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vH=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hH=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mH=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dH=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lH=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oH=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F5=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M5=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XJ={alphahash_fragment:iY,alphahash_pars_fragment:oY,alphamap_fragment:aY,alphamap_pars_fragment:rY,alphatest_fragment:tY,alphatest_pars_fragment:eY,aomap_fragment:JU,aomap_pars_fragment:QU,batching_pars_vertex:$U,batching_vertex:ZU,begin_vertex:KU,beginnormal_vertex:WU,bsdfs:XU,iridescence_fragment:YU,bumpmap_pars_fragment:UU,clipping_planes_fragment:HU,clipping_planes_pars_fragment:NU,clipping_planes_pars_vertex:qU,clipping_planes_vertex:EU,color_fragment:FU,color_pars_fragment:OU,color_pars_vertex:GU,color_vertex:DU,common:RU,cube_uv_reflection_fragment:LU,defaultnormal_vertex:VU,displacementmap_pars_vertex:MU,displacementmap_vertex:kU,emissivemap_fragment:BU,emissivemap_pars_fragment:IU,colorspace_fragment:zU,colorspace_pars_fragment:AU,envmap_fragment:_U,envmap_common_pars_fragment:PU,envmap_pars_fragment:CU,envmap_pars_vertex:TU,envmap_physical_pars_fragment:pU,envmap_vertex:wU,fog_vertex:SU,fog_pars_vertex:jU,fog_fragment:yU,fog_pars_fragment:fU,gradientmap_pars_fragment:vU,lightmap_pars_fragment:bU,lights_lambert_fragment:hU,lights_lambert_pars_fragment:xU,lights_pars_begin:gU,lights_toon_fragment:mU,lights_toon_pars_fragment:dU,lights_phong_fragment:lU,lights_phong_pars_fragment:uU,lights_physical_fragment:cU,lights_physical_pars_fragment:nU,lights_fragment_begin:sU,lights_fragment_maps:iU,lights_fragment_end:oU,lightprobes_pars_fragment:aU,logdepthbuf_fragment:rU,logdepthbuf_pars_fragment:tU,logdepthbuf_pars_vertex:eU,logdepthbuf_vertex:JH,map_fragment:QH,map_pars_fragment:$H,map_particle_fragment:ZH,map_particle_pars_fragment:KH,metalnessmap_fragment:WH,metalnessmap_pars_fragment:XH,morphinstance_vertex:YH,morphcolor_vertex:UH,morphnormal_vertex:HH,morphtarget_pars_vertex:NH,morphtarget_vertex:qH,normal_fragment_begin:EH,normal_fragment_maps:FH,normal_pars_fragment:OH,normal_pars_vertex:GH,normal_vertex:DH,normalmap_pars_fragment:RH,clearcoat_normal_fragment_begin:LH,clearcoat_normal_fragment_maps:VH,clearcoat_pars_fragment:MH,iridescence_pars_fragment:kH,opaque_fragment:BH,packing:IH,premultiplied_alpha_fragment:zH,project_vertex:AH,dithering_fragment:_H,dithering_pars_fragment:PH,roughnessmap_fragment:CH,roughnessmap_pars_fragment:TH,shadowmap_pars_fragment:wH,shadowmap_pars_vertex:SH,shadowmap_vertex:jH,shadowmask_pars_fragment:yH,skinbase_vertex:fH,skinning_pars_vertex:vH,skinning_vertex:bH,skinnormal_vertex:hH,specularmap_fragment:xH,specularmap_pars_fragment:gH,tonemapping_fragment:pH,tonemapping_pars_fragment:mH,transmission_fragment:dH,transmission_pars_fragment:lH,uv_pars_fragment:uH,uv_pars_vertex:cH,uv_vertex:nH,worldpos_vertex:sH,background_vert:iH,background_frag:oH,backgroundCube_vert:aH,backgroundCube_frag:rH,cube_vert:tH,cube_frag:eH,depth_vert:J5,depth_frag:Q5,distance_vert:$5,distance_frag:Z5,equirect_vert:K5,equirect_frag:W5,linedashed_vert:X5,linedashed_frag:Y5,meshbasic_vert:U5,meshbasic_frag:H5,meshlambert_vert:N5,meshlambert_frag:q5,meshmatcap_vert:E5,meshmatcap_frag:F5,meshnormal_vert:O5,meshnormal_frag:G5,meshphong_vert:D5,meshphong_frag:R5,meshphysical_vert:L5,meshphysical_frag:V5,meshtoon_vert:M5,meshtoon_frag:k5,points_vert:B5,points_frag:I5,shadow_vert:z5,shadow_frag:A5,sprite_vert:_5,sprite_frag:P5},P0={common:{diffuse:{value:new _0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new t0},alphaMap:{value:null},alphaMapTransform:{value:new t0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new t0}},envmap:{envMap:{value:null},envMapRotation:{value:new t0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new t0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new t0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new t0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new t0},normalScale:{value:new A0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new t0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new t0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new t0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new t0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new _0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new _0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new t0},alphaTest:{value:0},uvTransform:{value:new t0}},sprite:{diffuse:{value:new _0(16777215)},opacity:{value:1},center:{value:new A0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new t0},alphaMap:{value:null},alphaMapTransform:{value:new t0},alphaTest:{value:0}}},h8={basic:{uniforms:rJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.fog]),vertexShader:XJ.meshbasic_vert,fragmentShader:XJ.meshbasic_frag},lambert:{uniforms:rJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new _0(0)},envMapIntensity:{value:1}}]),vertexShader:XJ.meshlambert_vert,fragmentShader:XJ.meshlambert_frag},phong:{uniforms:rJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new _0(0)},specular:{value:new _0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:XJ.meshphong_vert,fragmentShader:XJ.meshphong_frag},standard:{uniforms:rJ([P0.common,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.roughnessmap,P0.metalnessmap,P0.fog,P0.lights,{emissive:{value:new _0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:XJ.meshphysical_vert,fragmentShader:XJ.meshphysical_frag},toon:{uniforms:rJ([P0.common,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.gradientmap,P0.fog,P0.lights,{emissive:{value:new _0(0)}}]),vertexShader:XJ.meshtoon_vert,fragmentShader:XJ.meshtoon_frag},matcap:{uniforms:rJ([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,{matcap:{value:null}}]),vertexShader:XJ.meshmatcap_vert,fragmentShader:XJ.meshmatcap_frag},points:{uniforms:rJ([P0.points,P0.fog]),vertexShader:XJ.points_vert,fragmentShader:XJ.points_frag},dashed:{uniforms:rJ([P0.common,P0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:XJ.linedashed_vert,fragmentShader:XJ.linedashed_frag},depth:{uniforms:rJ([P0.common,P0.displacementmap]),vertexShader:XJ.depth_vert,fragmentShader:XJ.depth_frag},normal:{uniforms:rJ([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,{opacity:{value:1}}]),vertexShader:XJ.meshnormal_vert,fragmentShader:XJ.meshnormal_frag},sprite:{uniforms:rJ([P0.sprite,P0.fog]),vertexShader:XJ.sprite_vert,fragmentShader:XJ.sprite_frag},background:{uniforms:{uvTransform:{value:new t0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:XJ.background_vert,fragmentShader:XJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new t0}},vertexShader:XJ.backgroundCube_vert,fragmentShader:XJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:XJ.cube_vert,fragmentShader:XJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:XJ.equirect_vert,fragmentShader:XJ.equirect_frag},distance:{uniforms:rJ([P0.common,P0.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:XJ.distance_vert,fragmentShader:XJ.distance_frag},shadow:{uniforms:rJ([P0.lights,P0.fog,{color:{value:new _0(0)},opacity:{value:1}}]),vertexShader:XJ.shadow_vert,fragmentShader:XJ.shadow_frag}};h8.physical={uniforms:rJ([h8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new t0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new t0},clearcoatNormalScale:{value:new A0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new t0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new t0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new t0},sheen:{value:0},sheenColor:{value:new _0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new t0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new t0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new t0},transmissionSamplerSize:{value:new A0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new t0},attenuationDistance:{value:0},attenuationColor:{value:new _0(0)},specularColor:{value:new _0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new t0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new t0},anisotropyVector:{value:new A0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new t0}}]),vertexShader:XJ.meshphysical_vert,fragmentShader:XJ.meshphysical_frag};var RQ={r:0,b:0,g:0},C5=new zJ,UX=new t0;UX.set(-1,0,0,0,1,0,0,0,1);function T5(J,Q,$,Z,K,W){let X=new _0(0),Y=K===!0?0:1,U,H,q=null,F=0,N=null;function O(P){let T=P.isScene===!0?P.background:null;if(T&&T.isTexture){let B=P.backgroundBlurriness>0;T=Q.get(T,B)}return T}function R(P){let T=!1,B=O(P);if(B===null)G(X,Y);else if(B&&B.isColor)G(B,1),T=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||T)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function _(P,T){let B=O(T);if(B&&(B.isCubeTexture||B.mapping===g6)){if(H===void 0)H=new o(new v0(1,1,1),new L8({name:"BackgroundCubeMaterial",uniforms:P9(h8.backgroundCube.uniforms),vertexShader:h8.backgroundCube.vertexShader,fragmentShader:h8.backgroundCube.fragmentShader,side:Z8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(A,w,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=B,H.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(C5.makeRotationFromEuler(T.backgroundRotation)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply(UX);if(H.material.toneMapped=EJ.getTransfer(B.colorSpace)!==PJ,q!==B||F!==B.version||N!==J.toneMapping)H.material.needsUpdate=!0,q=B,F=B.version,N=J.toneMapping;H.layers.enableAll(),P.unshift(H,H.geometry,H.material,0,0,null)}else if(B&&B.isTexture){if(U===void 0)U=new o(new R8(2,2),new L8({name:"BackgroundMaterial",uniforms:P9(h8.background.uniforms),vertexShader:h8.background.vertexShader,fragmentShader:h8.background.fragmentShader,side:H6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=B,U.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,U.material.toneMapped=EJ.getTransfer(B.colorSpace)!==PJ,B.matrixAutoUpdate===!0)B.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(B.matrix),q!==B||F!==B.version||N!==J.toneMapping)U.material.needsUpdate=!0,q=B,F=B.version,N=J.toneMapping;U.layers.enableAll(),P.unshift(U,U.geometry,U.material,0,0,null)}}function G(P,T){P.getRGB(RQ,EZ(J)),$.buffers.color.setClear(RQ.r,RQ.g,RQ.b,T,W)}function E(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(P,T=1){X.set(P),Y=T,G(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(P){Y=P,G(X,Y)},render:R,addToRenderList:_,dispose:E}}function w5(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=N(null),W=K,X=!1;function Y(j,y,p,S,m){let e=!1,n=F(j,S,p,y);if(W!==n)W=n,H(W.object);if(e=O(j,S,p,m),e)R(j,S,p,m);if(m!==null)Q.update(m,J.ELEMENT_ARRAY_BUFFER);if(e||X){if(X=!1,B(j,y,p,S),m!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(m).buffer)}}function U(){return J.createVertexArray()}function H(j){return J.bindVertexArray(j)}function q(j){return J.deleteVertexArray(j)}function F(j,y,p,S){let m=S.wireframe===!0,e=Z[y.id];if(e===void 0)e={},Z[y.id]=e;let n=j.isInstancedMesh===!0?j.id:0,H0=e[n];if(H0===void 0)H0={},e[n]=H0;let r=H0[p.id];if(r===void 0)r={},H0[p.id]=r;let K0=r[m];if(K0===void 0)K0=N(U()),r[m]=K0;return K0}function N(j){let y=[],p=[],S=[];for(let m=0;m<$;m++)y[m]=0,p[m]=0,S[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:p,attributeDivisors:S,object:j,attributes:{},index:null}}function O(j,y,p,S){let m=W.attributes,e=y.attributes,n=0,H0=p.getAttributes();for(let r in H0)if(H0[r].location>=0){let N0=m[r],l0=e[r];if(l0===void 0){if(r==="instanceMatrix"&&j.instanceMatrix)l0=j.instanceMatrix;if(r==="instanceColor"&&j.instanceColor)l0=j.instanceColor}if(N0===void 0)return!0;if(N0.attribute!==l0)return!0;if(l0&&N0.data!==l0.data)return!0;n++}if(W.attributesNum!==n)return!0;if(W.index!==S)return!0;return!1}function R(j,y,p,S){let m={},e=y.attributes,n=0,H0=p.getAttributes();for(let r in H0)if(H0[r].location>=0){let N0=e[r];if(N0===void 0){if(r==="instanceMatrix"&&j.instanceMatrix)N0=j.instanceMatrix;if(r==="instanceColor"&&j.instanceColor)N0=j.instanceColor}let l0={};if(l0.attribute=N0,N0&&N0.data)l0.data=N0.data;m[r]=l0,n++}W.attributes=m,W.attributesNum=n,W.index=S}function _(){let j=W.newAttributes;for(let y=0,p=j.length;y<p;y++)j[y]=0}function G(j){E(j,0)}function E(j,y){let{newAttributes:p,enabledAttributes:S,attributeDivisors:m}=W;if(p[j]=1,S[j]===0)J.enableVertexAttribArray(j),S[j]=1;if(m[j]!==y)J.vertexAttribDivisor(j,y),m[j]=y}function P(){let{newAttributes:j,enabledAttributes:y}=W;for(let p=0,S=y.length;p<S;p++)if(y[p]!==j[p])J.disableVertexAttribArray(p),y[p]=0}function T(j,y,p,S,m,e,n){if(n===!0)J.vertexAttribIPointer(j,y,p,m,e);else J.vertexAttribPointer(j,y,p,S,m,e)}function B(j,y,p,S){_();let m=S.attributes,e=p.getAttributes(),n=y.defaultAttributeValues;for(let H0 in e){let r=e[H0];if(r.location>=0){let K0=m[H0];if(K0===void 0){if(H0==="instanceMatrix"&&j.instanceMatrix)K0=j.instanceMatrix;if(H0==="instanceColor"&&j.instanceColor)K0=j.instanceColor}if(K0!==void 0){let{normalized:N0,itemSize:l0}=K0,g0=Q.get(K0);if(g0===void 0)continue;let{buffer:GJ,type:r0,bytesPerElement:a}=g0,O0=r0===J.INT||r0===J.UNSIGNED_INT||K0.gpuType===H$;if(K0.isInterleavedBufferAttribute){let q0=K0.data,p0=q0.stride,T0=K0.offset;if(q0.isInstancedInterleavedBuffer){for(let h0=0;h0<r.locationSize;h0++)E(r.location+h0,q0.meshPerAttribute);if(j.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=q0.meshPerAttribute*q0.count}else for(let h0=0;h0<r.locationSize;h0++)G(r.location+h0);J.bindBuffer(J.ARRAY_BUFFER,GJ);for(let h0=0;h0<r.locationSize;h0++)T(r.location+h0,l0/r.locationSize,r0,N0,p0*a,(T0+l0/r.locationSize*h0)*a,O0)}else{if(K0.isInstancedBufferAttribute){for(let q0=0;q0<r.locationSize;q0++)E(r.location+q0,K0.meshPerAttribute);if(j.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=K0.meshPerAttribute*K0.count}else for(let q0=0;q0<r.locationSize;q0++)G(r.location+q0);J.bindBuffer(J.ARRAY_BUFFER,GJ);for(let q0=0;q0<r.locationSize;q0++)T(r.location+q0,l0/r.locationSize,r0,N0,l0*a,l0/r.locationSize*q0*a,O0)}}else if(n!==void 0){let N0=n[H0];if(N0!==void 0)switch(N0.length){case 2:J.vertexAttrib2fv(r.location,N0);break;case 3:J.vertexAttrib3fv(r.location,N0);break;case 4:J.vertexAttrib4fv(r.location,N0);break;default:J.vertexAttrib1fv(r.location,N0)}}}}P()}function A(){k();for(let j in Z){let y=Z[j];for(let p in y){let S=y[p];for(let m in S){let e=S[m];for(let n in e)q(e[n].object),delete e[n];delete S[m]}}delete Z[j]}}function w(j){if(Z[j.id]===void 0)return;let y=Z[j.id];for(let p in y){let S=y[p];for(let m in S){let e=S[m];for(let n in e)q(e[n].object),delete e[n];delete S[m]}}delete Z[j.id]}function z(j){for(let y in Z){let p=Z[y];for(let S in p){let m=p[S];if(m[j.id]===void 0)continue;let e=m[j.id];for(let n in e)q(e[n].object),delete e[n];delete m[j.id]}}}function D(j){for(let y in Z){let p=Z[y],S=j.isInstancedMesh===!0?j.id:0,m=p[S];if(m===void 0)continue;for(let e in m){let n=m[e];for(let H0 in n)q(n[H0].object),delete n[H0];delete m[e]}if(delete p[S],Object.keys(p).length===0)delete Z[y]}}function k(){if(x(),X=!0,W===K)return;W=K,H(W.object)}function x(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:k,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:D,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:G,disableUnusedAttributes:P}}function S5(J,Q,$){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),$.update(H,Z,1)}function X(U,H,q){if(q===0)return;J.drawArraysInstanced(Z,U,H,q),$.update(H,Z,q)}function Y(U,H,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,q);let N=0;for(let O=0;O<q;O++)N+=H[O];$.update(N,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function j5(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let z=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(z){if(z!==f8&&Z.convert(z)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(z){let D=z===y8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(z!==P8&&z!==i8&&!D&&Z.convert(z)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function U(z){if(z==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";z="mediump"}if(z==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=$.precision!==void 0?$.precision:"highp",q=U(H);if(q!==H)n0("WebGLRenderer:",H,"not supported, using",q,"instead."),H=q;let F=$.logarithmicDepthBuffer===!0,N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&N===!1)n0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=J.getParameter(J.MAX_TEXTURE_SIZE),G=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),P=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),T=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:X,textureTypeReadable:Y,precision:H,logarithmicDepthBuffer:F,reversedDepthBuffer:N,maxTextures:O,maxVertexTextures:R,maxTextureSize:_,maxCubemapSize:G,maxAttributes:E,maxVertexUniforms:P,maxVaryings:T,maxFragmentUniforms:B,maxSamples:A,samples:w}}function y5(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new O8,Y=new t0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(F,N){let O=F.length!==0||N||Z!==0||K;return K=N,Z=F.length,O},this.beginShadows=function(){W=!0,q(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,N){$=q(F,N,0)},this.setState=function(F,N,O){let{clippingPlanes:R,clipIntersection:_,clipShadows:G}=F,E=J.get(F);if(!K||R===null||R.length===0||W&&!G)if(W)q(null);else H();else{let P=W?0:Z,T=P*4,B=E.clippingState||null;U.value=B,B=q(R,N,T,O);for(let A=0;A!==T;++A)B[A]=$[A];E.clippingState=B,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=P}};function H(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function q(F,N,O,R){let _=F!==null?F.length:0,G=null;if(_!==0){if(G=U.value,R!==!0||G===null){let E=O+_*4,P=N.matrixWorldInverse;if(Y.getNormalMatrix(P),G===null||G.length<E)G=new Float32Array(E);for(let T=0,B=O;T!==_;++T,B+=4)X.copy(F[T]).applyMatrix4(P,Y),X.normal.toArray(G,B),G[B+3]=X.constant}U.value=G,U.needsUpdate=!0}return Q.numPlanes=_,Q.numIntersection=0,G}}var L6=4,f5=6,v5=20,b5=256,e6=new j9,pW=new _0,jZ=null,yZ=0,fZ=0,vZ=!1,h5=new C,y9=new C;class xZ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=h5}=K;jZ=this._renderer.getRenderTarget(),yZ=this._renderer.getActiveCubeFace(),fZ=this._renderer.getActiveMipmapLevel(),vZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=lW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=dW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(jZ,yZ,fZ),this._renderer.xr.enabled=vZ,J.scissorTest=!1,R6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===q6||J.mapping===L9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);jZ=this._renderer.getRenderTarget(),yZ=this._renderer.getActiveCubeFace(),fZ=this._renderer.getActiveMipmapLevel(),vZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:K8,minFilter:K8,generateMipmaps:!1,type:y8,format:f8,colorSpace:n$,depthBuffer:!1},Z=mW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=mW(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=x5(K)),this._blurMaterial=p5(K,J,Q),this._ggxMaterial=g5(K,J,Q)}return Z}_compileMaterial(J){let Q=new o(new fJ,J);this._renderer.compile(Q,e6)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new Q8(90,1,Q,$),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],q=this._renderer,F=q.autoClear,N=q.toneMapping;if(q.getClearColor(pW),q.toneMapping=_8,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(Z),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new o(new v0,new W8({name:"PMREM.Background",side:Z8,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,_=R.material,G=!1,E=J.background;if(E){if(E.isColor)_.color.copy(E),J.background=null,G=!0}else _.color.copy(pW),G=!0;for(let P=0;P<6;P++){let T=P%3;if(T===0)Y.up.set(0,U[P],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+H[P],K.y,K.z);else if(T===1)Y.up.set(0,0,U[P]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+H[P],K.z);else Y.up.set(0,U[P],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+H[P]);let B=this._cubeSize;if(R6(Z,T*B,P>2?B:0,B,B),q.setRenderTarget(Z),G)q.render(R,Y);q.render(J,Y)}q.toneMapping=N,q.autoClear=F,J.background=E}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===q6||J.mapping===L9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=lW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=dW();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;R6(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,e6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,U=$/(this._lodMeshes.length-1),H=Q/(this._lodMeshes.length-1),q=Math.sqrt(U*U-H*H),F=U*1.25,N=q*F,{_lodMax:O}=this,R=this._sizeLods[$],_=3*R*($>O-L6?$-O+L6:0),G=4*(this._cubeSize-R);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=O-Q,R6(K,_,G,3*R,2*R),Z.setRenderTarget(K),Z.render(X,e6),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=O-$,R6(J,_,G,3*R,2*R),Z.setRenderTarget(J),Z.render(X,e6)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[Z];Y.material=X;let U=X.uniforms;U.envMap.value=J.texture,U.sigma.value=K,U.mipInt.value=this._lodMax-$;let H=this._sizeLods[Z],q=3*H*(Z>this._lodMax-L6?Z-this._lodMax+L6:0),F=4*(this._cubeSize-H);R6(Q,q,F,3*H,2*H),W.setRenderTarget(Q),W.render(Y,e6)}}function x5(J){let Q=[],$=[],Z=J,K=J-L6+1+f5;for(let W=0;W<K;W++){let X=Math.pow(2,Z);Q.push(X);let Y=1/(X-2),U=-Y,H=1+Y,q=[U,U,H,U,H,H,U,U,H,H,U,H],F=6,N=6,O=3,R=new Float32Array(O*N*F),_=new Float32Array(O*N*F);for(let E=0;E<F;E++){let P=E%3*2/3-1,T=E>2?0:-1,B=[P,T,0,P+0.6666666666666666,T,0,P+0.6666666666666666,T+1,0,P,T,0,P+0.6666666666666666,T+1,0,P,T+1,0];R.set(B,O*N*E);for(let A=0;A<N;A++){let w=q[A*2]*2-1,z=q[A*2+1]*2-1;if(E===0)y9.set(1,z,w);else if(E===1)y9.set(-w,1,-z);else if(E===2)y9.set(-w,z,1);else if(E===3)y9.set(-1,z,-w);else if(E===4)y9.set(-w,-1,z);else y9.set(w,z,-1);y9.toArray(_,(E*N+A)*O)}}let G=new fJ;if(G.setAttribute("position",new $8(R,O)),G.setAttribute("outputDirection",new $8(_,O)),$.push(new o(G,null)),Z>L6)Z--}return{lodMeshes:$,sizeLods:Q}}function mW(J,Q,$){let Z=new N8(J,Q,$);return Z.texture.mapping=g6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function R6(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function g5(J,Q,$){return new L8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b5,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:VQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:j8,depthTest:!1,depthWrite:!1})}function p5(J,Q,$){return new L8({name:"SphericalGaussianBlur",defines:{SAMPLES:v5,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:VQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:j8,depthTest:!1,depthWrite:!1})}function dW(){return new L8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:VQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:j8,depthTest:!1,depthWrite:!1})}function lW(){return new L8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:VQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:j8,depthTest:!1,depthWrite:!1})}function VQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class mZ extends N8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new $Q(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new v0(5,5,5),K=new L8({name:"CubemapFromEquirect",uniforms:P9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:Z8,blending:j8});K.uniforms.tEquirect.value=Q;let W=new o(Z,K),X=Q.minFilter;if(Q.minFilter===V9)Q.minFilter=K8;return new _Z(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function m5(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(N,O=!1){if(N===null||N===void 0)return null;if(O)return X(N);return W(N)}function W(N){if(N&&N.isTexture){let O=N.mapping;if(O===x7||O===g7)if(Q.has(N)){let R=Q.get(N).texture;return Y(R,N.mapping)}else{let R=N.image;if(R&&R.height>0){let _=new mZ(R.height);return _.fromEquirectangularTexture(J,N),Q.set(N,_),N.addEventListener("dispose",H),Y(_.texture,N.mapping)}else return null}}return N}function X(N){if(N&&N.isTexture){let O=N.mapping,R=O===x7||O===g7,_=O===q6||O===L9;if(R||_){let G=$.get(N),E=G!==void 0?G.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==E){if(Z===null)Z=new xZ(J);return G=R?Z.fromEquirectangular(N,G):Z.fromCubemap(N,G),G.texture.pmremVersion=N.pmremVersion,$.set(N,G),G.texture}else if(G!==void 0)return G.texture;else{let P=N.image;if(R&&P&&P.height>0||_&&P&&U(P)){if(Z===null)Z=new xZ(J);return G=R?Z.fromEquirectangular(N):Z.fromCubemap(N),G.texture.pmremVersion=N.pmremVersion,$.set(N,G),N.addEventListener("dispose",q),G.texture}else return null}}}return N}function Y(N,O){if(O===x7)N.mapping=q6;else if(O===g7)N.mapping=L9;return N}function U(N){let O=0,R=6;for(let _=0;_<R;_++)if(N[_]!==void 0)O++;return O===R}function H(N){let O=N.target;O.removeEventListener("dispose",H);let R=Q.get(O);if(R!==void 0)Q.delete(O),R.dispose()}function q(N){let O=N.target;O.removeEventListener("dispose",q);let R=$.get(O);if(R!==void 0)$.delete(O),R.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function d5(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)R9("WebGLRenderer: "+Z+" extension not supported.");return K}}}function l5(J,Q,$,Z){let K={},W=new WeakMap;function X(F){let N=F.target;if(N.index!==null)Q.remove(N.index);for(let R in N.attributes)Q.remove(N.attributes[R]);N.removeEventListener("dispose",X),delete K[N.id];let O=W.get(N);if(O)Q.remove(O),W.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;$.memory.geometries--}function Y(F,N){if(K[N.id]===!0)return N;return N.addEventListener("dispose",X),K[N.id]=!0,$.memory.geometries++,N}function U(F){let N=F.attributes;for(let O in N)Q.update(N[O],J.ARRAY_BUFFER)}function H(F){let N=[],O=F.index,R=F.attributes.position,_=0;if(R===void 0)return;if(O!==null){let P=O.array;_=O.version;for(let T=0,B=P.length;T<B;T+=3){let A=P[T+0],w=P[T+1],z=P[T+2];N.push(A,w,w,z,z,A)}}else{let P=R.array;_=R.version;for(let T=0,B=P.length/3-1;T<B;T+=3){let A=T+0,w=T+1,z=T+2;N.push(A,w,w,z,z,A)}}let G=new(R.count>=65535?e7:t7)(N,1);G.version=_;let E=W.get(F);if(E)Q.remove(E);W.set(F,G)}function q(F){let N=W.get(F);if(N){let O=F.index;if(O!==null){if(N.version<O.version)H(F)}}else H(F);return W.get(F)}return{get:Y,update:U,getWireframeAttribute:q}}function u5(J,Q,$){let Z;function K(F){Z=F}let W,X;function Y(F){W=F.type,X=F.bytesPerElement}function U(F,N){J.drawElements(Z,N,W,F*X),$.update(N,Z,1)}function H(F,N,O){if(O===0)return;J.drawElementsInstanced(Z,N,W,F*X,O),$.update(N,Z,O)}function q(F,N,O){if(O===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,W,F,0,O);let _=0;for(let G=0;G<O;G++)_+=N[G];$.update(_,Z,1)}this.setMode=K,this.setIndex=Y,this.render=U,this.renderInstances=H,this.renderMultiDraw=q}function c5(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:i0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function n5(J,Q,$){let Z=new WeakMap,K=new wJ;function W(X,Y,U){let H=X.morphTargetInfluences,q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=q!==void 0?q.length:0,N=Z.get(Y);if(N===void 0||N.count!==F){let k=function(){z.dispose(),Z.delete(Y),Y.removeEventListener("dispose",k)};if(N!==void 0)N.texture.dispose();let O=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,_=Y.morphAttributes.color!==void 0,G=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],P=Y.morphAttributes.color||[],T=0;if(O===!0)T=1;if(R===!0)T=2;if(_===!0)T=3;let B=Y.attributes.position.count*T,A=1;if(B>Q.maxTextureSize)A=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let w=new Float32Array(B*A*4*F),z=new a7(w,B,A,F);z.type=i8,z.needsUpdate=!0;let D=T*4;for(let x=0;x<F;x++){let j=G[x],y=E[x],p=P[x],S=B*A*4*x;for(let m=0;m<j.count;m++){let e=m*D;if(O===!0)K.fromBufferAttribute(j,m),w[S+e+0]=K.x,w[S+e+1]=K.y,w[S+e+2]=K.z,w[S+e+3]=0;if(R===!0)K.fromBufferAttribute(y,m),w[S+e+4]=K.x,w[S+e+5]=K.y,w[S+e+6]=K.z,w[S+e+7]=0;if(_===!0)K.fromBufferAttribute(p,m),w[S+e+8]=K.x,w[S+e+9]=K.y,w[S+e+10]=K.z,w[S+e+11]=p.itemSize===4?K.w:1}}N={count:F,texture:z,size:new A0(B,A)},Z.set(Y,N),Y.addEventListener("dispose",k)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let O=0;for(let _=0;_<H.length;_++)O+=H[_];let R=Y.morphTargetsRelative?1:1-O;U.getUniforms().setValue(J,"morphTargetBaseInfluence",R),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function s5(J,Q,$,Z,K){let W=new WeakMap;function X(H){let q=K.render.frame,F=H.geometry,N=Q.get(H,F);if(W.get(N)!==q)Q.update(N),W.set(N,q);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==q){if($.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)$.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,q)}}if(H.isSkinnedMesh){let O=H.skeleton;if(W.get(O)!==q)O.update(),W.set(O,q)}return N}function Y(){W=new WeakMap}function U(H){let q=H.target;if(q.removeEventListener("dispose",U),Z.releaseStatesOfObject(q),$.remove(q.instanceMatrix),q.instanceColor!==null)$.remove(q.instanceColor)}return{update:X,dispose:Y}}var i5={[Z$]:"LINEAR_TONE_MAPPING",[K$]:"REINHARD_TONE_MAPPING",[W$]:"CINEON_TONE_MAPPING",[x6]:"ACES_FILMIC_TONE_MAPPING",[Y$]:"AGX_TONE_MAPPING",[U$]:"NEUTRAL_TONE_MAPPING",[X$]:"CUSTOM_TONE_MAPPING"};function o5(J,Q,$,Z,K,W){let X=new N8(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,U=null,H=new fJ;H.setAttribute("position",new OJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new OJ([0,2,0,0,2,0],2));let q=new FZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),F=new o(H,q),N=new j9(-1,1,1,-1,0,1),O=null,R=null,_=!1,G,E=null,P=[],T=!1;this.setSize=function(B,A){if(X.setSize(B,A),Y!==null)Y.setSize(B,A);if(U!==null)U.setSize(B,A);for(let w=0;w<P.length;w++){let z=P[w];if(z.setSize)z.setSize(B,A)}},this.setEffects=function(B){P=B,T=P.length>0&&P[0].isRenderPass===!0;let{width:A,height:w}=X;if(P.length>0&&Y===null)Y=new N8(A,w,{type:y8,depthBuffer:!1,stencilBuffer:!1}),U=new N8(A,w,{type:y8,depthBuffer:!1,stencilBuffer:!1});for(let z=0;z<P.length;z++){let D=P[z];if(D.setSize)D.setSize(A,w)}},this.begin=function(B,A){if(_)return!1;if(B.toneMapping===_8&&P.length===0)return!1;if(E=A,A!==null){let{width:w,height:z}=A;if(X.width!==w||X.height!==z)this.setSize(w,z)}if(T===!1)B.setRenderTarget(X);return G=B.toneMapping,B.toneMapping=_8,!0},this.hasRenderPass=function(){return T},this.end=function(B,A){B.toneMapping=G,_=!0;let w=X,z=Y;for(let D=0;D<P.length;D++){let k=P[D];if(k.enabled===!1)continue;if(k.render(B,z,w,A),k.needsSwap!==!1)w=z,z=z===Y?U:Y}if(O!==B.outputColorSpace||R!==B.toneMapping){if(O=B.outputColorSpace,R=B.toneMapping,q.defines={},EJ.getTransfer(O)===PJ)q.defines.SRGB_TRANSFER="";let D=i5[R];if(D)q.defines[D]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=w.texture,B.setRenderTarget(E),B.render(F,N),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(U!==null)U.dispose();H.dispose(),q.dispose()}}var HX=new sJ,gZ=new A9(1,1),NX=new a7,qX=new JZ,EX=new $Q,uW=[],cW=[],nW=new Float32Array(16),sW=new Float32Array(9),iW=new Float32Array(4);function V6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=uW[K];if(W===void 0)W=new Float32Array(K),uW[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function dJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function lJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function MQ(J,Q){let $=cW[Q];if($===void 0)$=new Int32Array(Q),cW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function a5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function r5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(dJ($,Q))return;J.uniform2fv(this.addr,Q),lJ($,Q)}}function t5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(dJ($,Q))return;J.uniform3fv(this.addr,Q),lJ($,Q)}}function e5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(dJ($,Q))return;J.uniform4fv(this.addr,Q),lJ($,Q)}}function JN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(dJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),lJ($,Q)}else{if(dJ($,Z))return;iW.set(Z),J.uniformMatrix2fv(this.addr,!1,iW),lJ($,Z)}}function QN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(dJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),lJ($,Q)}else{if(dJ($,Z))return;sW.set(Z),J.uniformMatrix3fv(this.addr,!1,sW),lJ($,Z)}}function $N(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(dJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),lJ($,Q)}else{if(dJ($,Z))return;nW.set(Z),J.uniformMatrix4fv(this.addr,!1,nW),lJ($,Z)}}function ZN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function KN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(dJ($,Q))return;J.uniform2iv(this.addr,Q),lJ($,Q)}}function WN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(dJ($,Q))return;J.uniform3iv(this.addr,Q),lJ($,Q)}}function XN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(dJ($,Q))return;J.uniform4iv(this.addr,Q),lJ($,Q)}}function YN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function UN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(dJ($,Q))return;J.uniform2uiv(this.addr,Q),lJ($,Q)}}function HN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(dJ($,Q))return;J.uniform3uiv(this.addr,Q),lJ($,Q)}}function NN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(dJ($,Q))return;J.uniform4uiv(this.addr,Q),lJ($,Q)}}function qN(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)gZ.compareFunction=$.isReversedDepthBuffer()?o7:i7,W=gZ;else W=HX;$.setTexture2D(Q||W,K)}function EN(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||qX,K)}function FN(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||EX,K)}function ON(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||NX,K)}function GN(J){switch(J){case 5126:return a5;case 35664:return r5;case 35665:return t5;case 35666:return e5;case 35674:return JN;case 35675:return QN;case 35676:return $N;case 5124:case 35670:return ZN;case 35667:case 35671:return KN;case 35668:case 35672:return WN;case 35669:case 35673:return XN;case 5125:return YN;case 36294:return UN;case 36295:return HN;case 36296:return NN;case 35678:case 36198:case 36298:case 36306:case 35682:return qN;case 35679:case 36299:case 36307:return EN;case 35680:case 36300:case 36308:case 36293:return FN;case 36289:case 36303:case 36311:case 36292:return ON}}function DN(J,Q){J.uniform1fv(this.addr,Q)}function RN(J,Q){let $=V6(Q,this.size,2);J.uniform2fv(this.addr,$)}function LN(J,Q){let $=V6(Q,this.size,3);J.uniform3fv(this.addr,$)}function VN(J,Q){let $=V6(Q,this.size,4);J.uniform4fv(this.addr,$)}function MN(J,Q){let $=V6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function kN(J,Q){let $=V6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function BN(J,Q){let $=V6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function IN(J,Q){J.uniform1iv(this.addr,Q)}function zN(J,Q){J.uniform2iv(this.addr,Q)}function AN(J,Q){J.uniform3iv(this.addr,Q)}function _N(J,Q){J.uniform4iv(this.addr,Q)}function PN(J,Q){J.uniform1uiv(this.addr,Q)}function CN(J,Q){J.uniform2uiv(this.addr,Q)}function TN(J,Q){J.uniform3uiv(this.addr,Q)}function wN(J,Q){J.uniform4uiv(this.addr,Q)}function SN(J,Q,$){let Z=this.cache,K=Q.length,W=MQ($,K);if(!dJ(Z,W))J.uniform1iv(this.addr,W),lJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=gZ;else X=HX;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function jN(J,Q,$){let Z=this.cache,K=Q.length,W=MQ($,K);if(!dJ(Z,W))J.uniform1iv(this.addr,W),lJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||qX,W[X])}function yN(J,Q,$){let Z=this.cache,K=Q.length,W=MQ($,K);if(!dJ(Z,W))J.uniform1iv(this.addr,W),lJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||EX,W[X])}function fN(J,Q,$){let Z=this.cache,K=Q.length,W=MQ($,K);if(!dJ(Z,W))J.uniform1iv(this.addr,W),lJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||NX,W[X])}function vN(J){switch(J){case 5126:return DN;case 35664:return RN;case 35665:return LN;case 35666:return VN;case 35674:return MN;case 35675:return kN;case 35676:return BN;case 5124:case 35670:return IN;case 35667:case 35671:return zN;case 35668:case 35672:return AN;case 35669:case 35673:return _N;case 5125:return PN;case 36294:return CN;case 36295:return TN;case 36296:return wN;case 35678:case 36198:case 36298:case 36306:case 35682:return SN;case 35679:case 36299:case 36307:return jN;case 35680:case 36300:case 36308:case 36293:return yN;case 36289:case 36303:case 36311:case 36292:return fN}}class FX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=GN(Q.type)}}class OX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=vN(Q.type)}}class GX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var bZ=/(\w+)(\])?(\[|\.)?/g;function oW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function bN(J,Q,$){let Z=J.name,K=Z.length;bZ.lastIndex=0;while(!0){let W=bZ.exec(Z),X=bZ.lastIndex,Y=W[1],U=W[2]==="]",H=W[3];if(U)Y=Y|0;if(H===void 0||H==="["&&X+2===K){oW($,H===void 0?new FX(Y,J,Q):new OX(Y,J,Q));break}else{let F=$.map[Y];if(F===void 0)F=new GX(Y),oW($,F);$=F}}}class $7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);bN(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function aW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var hN=37297,xN=0;function gN(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var rW=new t0;function pN(J){EJ._getMatrix(rW,EJ.workingColorSpace,J);let Q=`mat3( ${rW.elements.map(($)=>$.toFixed(4))} )`;switch(EJ.getTransfer(J)){case s$:return[Q,"LinearTransferOETF"];case PJ:return[Q,"sRGBTransferOETF"];default:return n0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function tW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+gN(J.getShaderSource(Q),Y)}else return W}function mN(J,Q){let $=pN(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var dN={[Z$]:"Linear",[K$]:"Reinhard",[W$]:"Cineon",[x6]:"ACESFilmic",[Y$]:"AgX",[U$]:"Neutral",[X$]:"Custom"};function lN(J,Q){let $=dN[Q];if($===void 0)return n0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var LQ=new C;function uN(){EJ.getLuminanceCoefficients(LQ);let J=LQ.x.toFixed(4),Q=LQ.y.toFixed(4),$=LQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function cN(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Q7).join(`
`)}function nN(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function sN(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function Q7(J){return J!==""}function eW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function JX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var iN=/^[ \t]*#include +<([\w\d./]+)>/gm;function pZ(J){return J.replace(iN,aN)}var oN=new Map;function aN(J,Q){let $=XJ[Q];if($===void 0){let Z=oN.get(Q);if(Z!==void 0)$=XJ[Z],n0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return pZ($)}var rN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function QX(J){return J.replace(rN,tN)}function tN(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function $X(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var eN={[b6]:"SHADOWMAP_TYPE_PCF",[U6]:"SHADOWMAP_TYPE_VSM"};function Jq(J){return eN[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qq={[q6]:"ENVMAP_TYPE_CUBE",[L9]:"ENVMAP_TYPE_CUBE",[g6]:"ENVMAP_TYPE_CUBE_UV"};function $q(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Qq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zq={[L9]:"ENVMAP_MODE_REFRACTION"};function Kq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Zq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wq={[NW]:"ENVMAP_BLENDING_MULTIPLY",[qW]:"ENVMAP_BLENDING_MIX",[EW]:"ENVMAP_BLENDING_ADD"};function Xq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Wq[J.combine]||"ENVMAP_BLENDING_NONE"}function Yq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function Uq(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,U=Jq($),H=$q($),q=Kq($),F=Xq($),N=Yq($),O=cN($),R=nN(W),_=K.createProgram(),G,E,P=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(G=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(Q7).join(`
`),G.length>0)G+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(Q7).join(`
`),E.length>0)E+=`
`}else G=[$X($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+q:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Q7).join(`
`),E=[$X($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+H:"",$.envMap?"#define "+q:"",$.envMap?"#define "+F:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==_8?"#define TONE_MAPPING":"",$.toneMapping!==_8?XJ.tonemapping_pars_fragment:"",$.toneMapping!==_8?lN("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",XJ.colorspace_pars_fragment,mN("linearToOutputTexel",$.outputColorSpace),uN(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(Q7).join(`
`);if(X=pZ(X),X=eW(X,$),X=JX(X,$),Y=pZ(Y),Y=eW(Y,$),Y=JX(Y,$),X=QX(X),Y=QX(Y),$.isRawShaderMaterial!==!0)P=`#version 300 es
`,G=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+G,E=["#define varying in",$.glslVersion===i$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===i$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let T=P+G+X,B=P+E+Y,A=aW(K,K.VERTEX_SHADER,T),w=aW(K,K.FRAGMENT_SHADER,B);if(K.attachShader(_,A),K.attachShader(_,w),$.index0AttributeName!==void 0)K.bindAttribLocation(_,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(_,0,"position");K.linkProgram(_);function z(j){if(J.debug.checkShaderErrors){let y=K.getProgramInfoLog(_)||"",p=K.getShaderInfoLog(A)||"",S=K.getShaderInfoLog(w)||"",m=y.trim(),e=p.trim(),n=S.trim(),H0=!0,r=!0;if(K.getProgramParameter(_,K.LINK_STATUS)===!1)if(H0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,_,A,w);else{let K0=tW(K,A,"vertex"),N0=tW(K,w,"fragment");i0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(_,K.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+m+`
`+K0+`
`+N0)}else if(m!=="")n0("WebGLProgram: Program Info Log:",m);else if(e===""||n==="")r=!1;if(r)j.diagnostics={runnable:H0,programLog:m,vertexShader:{log:e,prefix:G},fragmentShader:{log:n,prefix:E}}}K.deleteShader(A),K.deleteShader(w),D=new $7(K,_),k=sN(K,_)}let D;this.getUniforms=function(){if(D===void 0)z(this);return D};let k;this.getAttributes=function(){if(k===void 0)z(this);return k};let x=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(x===!1)x=K.getProgramParameter(_,hN);return x},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(_),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=xN++,this.cacheKey=Q,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var Hq=0;class DX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new RX(J),Q.set(J,$);return $}}class RX{constructor(J){this.id=Hq++,this.code=J,this.usedTimes=0}}function Nq(J){return J===B9||J===n7||J===s7}function qq(J,Q,$,Z,K,W){let X=new l6,Y=new DX,U=new Set,H=[],q=new Map,F=Z.logarithmicDepthBuffer,N=Z.precision,O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(U.add(D),D===0)return"uv";return`uv${D}`}function _(D,k,x,j,y,p){let S=j.fog,m=y.geometry,e=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?j.environment:null,n=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,H0=Q.get(D.envMap||e,n),r=!!H0&&H0.mapping===g6?H0.image.height:null,K0=O[D.type];if(D.precision!==null){if(N=Z.getMaxPrecision(D.precision),N!==D.precision)n0("WebGLProgram.getParameters:",D.precision,"not supported, using",N,"instead.")}let N0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,l0=N0!==void 0?N0.length:0,g0=0;if(m.morphAttributes.position!==void 0)g0=1;if(m.morphAttributes.normal!==void 0)g0=2;if(m.morphAttributes.color!==void 0)g0=3;let GJ,r0,a,O0;if(K0){let $J=h8[K0];GJ=$J.vertexShader,r0=$J.fragmentShader}else{GJ=D.vertexShader,r0=D.fragmentShader;let $J=Y.getVertexShaderStage(D),YJ=Y.getFragmentShaderStage(D);Y.update(D,$J,YJ),a=$J.id,O0=YJ.id}let q0=J.getRenderTarget(),p0=J.state.buffers.depth.getReversed(),T0=y.isInstancedMesh===!0,h0=y.isBatchedMesh===!0,CJ=!!D.map,KJ=!!D.matcap,QJ=!!H0,NJ=!!D.aoMap,e0=!!D.lightMap,HJ=!!D.bumpMap&&D.wireframe===!1,DJ=!!D.normalMap,bJ=!!D.displacementMap,AJ=!!D.emissiveMap,TJ=!!D.metalnessMap,v=!!D.roughnessMap,SJ=D.anisotropy>0,qJ=D.clearcoat>0,VJ=D.dispersion>0,I=D.retroreflectivity>0,L=D.iridescence>0,f=D.sheen>0,s=D.transmission>0,U0=SJ&&!!D.anisotropyMap,D0=qJ&&!!D.clearcoatMap,M0=qJ&&!!D.clearcoatNormalMap,b=qJ&&!!D.clearcoatRoughnessMap,g=L&&!!D.iridescenceMap,Q0=L&&!!D.iridescenceThicknessMap,W0=f&&!!D.sheenColorMap,X0=f&&!!D.sheenRoughnessMap,Z0=!!D.specularMap,E0=!!D.specularColorMap,B0=!!D.specularIntensityMap,F0=s&&!!D.transmissionMap,V=s&&!!D.thicknessMap,$0=!!D.gradientMap,d=!!D.alphaMap,Y0=D.alphaTest>0,G0=!!D.alphaHash,J0=!!D.extensions,L0=_8;if(D.toneMapped){if(q0===null||q0.isXRRenderTarget===!0)L0=J.toneMapping}let u0={shaderID:K0,shaderType:D.type,shaderName:D.name,vertexShader:GJ,fragmentShader:r0,defines:D.defines,customVertexShaderID:a,customFragmentShaderID:O0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:N,batching:h0,batchingColor:h0&&y._colorsTexture!==null,instancing:T0,instancingColor:T0&&y.instanceColor!==null,instancingMorph:T0&&y.morphTexture!==null,outputColorSpace:q0===null?J.outputColorSpace:q0.isXRRenderTarget===!0?q0.texture.colorSpace:EJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:CJ,matcap:KJ,envMap:QJ,envMapMode:QJ&&H0.mapping,envMapCubeUVHeight:r,aoMap:NJ,lightMap:e0,bumpMap:HJ,normalMap:DJ,displacementMap:bJ,emissiveMap:AJ,normalMapObjectSpace:DJ&&D.normalMapType===BW,normalMapTangentSpace:DJ&&D.normalMapType===c$,packedNormalMap:DJ&&D.normalMapType===c$&&Nq(D.normalMap.format),metalnessMap:TJ,roughnessMap:v,anisotropy:SJ,anisotropyMap:U0,clearcoat:qJ,clearcoatMap:D0,clearcoatNormalMap:M0,clearcoatRoughnessMap:b,dispersion:VJ,retroreflection:I,iridescence:L,iridescenceMap:g,iridescenceThicknessMap:Q0,sheen:f,sheenColorMap:W0,sheenRoughnessMap:X0,specularMap:Z0,specularColorMap:E0,specularIntensityMap:B0,transmission:s,transmissionMap:F0,thicknessMap:V,gradientMap:$0,opaque:D.transparent===!1&&D.blending===h6&&D.alphaToCoverage===!1,alphaMap:d,alphaTest:Y0,alphaHash:G0,combine:D.combine,mapUv:CJ&&R(D.map.channel),aoMapUv:NJ&&R(D.aoMap.channel),lightMapUv:e0&&R(D.lightMap.channel),bumpMapUv:HJ&&R(D.bumpMap.channel),normalMapUv:DJ&&R(D.normalMap.channel),displacementMapUv:bJ&&R(D.displacementMap.channel),emissiveMapUv:AJ&&R(D.emissiveMap.channel),metalnessMapUv:TJ&&R(D.metalnessMap.channel),roughnessMapUv:v&&R(D.roughnessMap.channel),anisotropyMapUv:U0&&R(D.anisotropyMap.channel),clearcoatMapUv:D0&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:M0&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:g&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Q0&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:W0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:X0&&R(D.sheenRoughnessMap.channel),specularMapUv:Z0&&R(D.specularMap.channel),specularColorMapUv:E0&&R(D.specularColorMap.channel),specularIntensityMapUv:B0&&R(D.specularIntensityMap.channel),transmissionMapUv:F0&&R(D.transmissionMap.channel),thicknessMapUv:V&&R(D.thicknessMap.channel),alphaMapUv:d&&R(D.alphaMap.channel),vertexTangents:!!m.attributes.tangent&&(DJ||SJ),vertexNormals:!!m.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!m.attributes.uv&&(CJ||d),fog:!!S,useFog:D.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||m.attributes.normal===void 0&&DJ===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:p0,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:m.attributes.position!==void 0,morphTargets:m.morphAttributes.position!==void 0,morphNormals:m.morphAttributes.normal!==void 0,morphColors:m.morphAttributes.color!==void 0,morphTargetsCount:l0,morphTextureStride:g0,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:p.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&x.length>0,shadowMapType:J.shadowMap.type,toneMapping:L0,decodeVideoTexture:CJ&&D.map.isVideoTexture===!0&&EJ.getTransfer(D.map.colorSpace)===PJ,decodeVideoTextureEmissive:AJ&&D.emissiveMap.isVideoTexture===!0&&EJ.getTransfer(D.emissiveMap.colorSpace)===PJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===yJ,flipSided:D.side===Z8,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:J0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J0&&D.extensions.multiDraw===!0||h0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return u0.vertexUv1s=U.has(1),u0.vertexUv2s=U.has(2),u0.vertexUv3s=U.has(3),U.clear(),u0}function G(D){let k=[];if(D.shaderID)k.push(D.shaderID);else k.push(D.customVertexShaderID),k.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let x in D.defines)k.push(x),k.push(D.defines[x]);if(D.isRawShaderMaterial===!1)E(k,D),P(k,D),k.push(J.outputColorSpace);return k.push(D.customProgramCacheKey),k.join()}function E(D,k){D.push(k.precision),D.push(k.outputColorSpace),D.push(k.envMapMode),D.push(k.envMapCubeUVHeight),D.push(k.mapUv),D.push(k.alphaMapUv),D.push(k.lightMapUv),D.push(k.aoMapUv),D.push(k.bumpMapUv),D.push(k.normalMapUv),D.push(k.displacementMapUv),D.push(k.emissiveMapUv),D.push(k.metalnessMapUv),D.push(k.roughnessMapUv),D.push(k.anisotropyMapUv),D.push(k.clearcoatMapUv),D.push(k.clearcoatNormalMapUv),D.push(k.clearcoatRoughnessMapUv),D.push(k.iridescenceMapUv),D.push(k.iridescenceThicknessMapUv),D.push(k.sheenColorMapUv),D.push(k.sheenRoughnessMapUv),D.push(k.specularMapUv),D.push(k.specularColorMapUv),D.push(k.specularIntensityMapUv),D.push(k.transmissionMapUv),D.push(k.thicknessMapUv),D.push(k.combine),D.push(k.fogExp2),D.push(k.sizeAttenuation),D.push(k.morphTargetsCount),D.push(k.morphAttributeCount),D.push(k.numSunLights),D.push(k.numDirLights),D.push(k.numPointLights),D.push(k.numSpotLights),D.push(k.numSpotLightMaps),D.push(k.numHemiLights),D.push(k.numRectAreaLights),D.push(k.numSunLightShadows),D.push(k.numDirLightShadows),D.push(k.numPointLightShadows),D.push(k.numSpotLightShadows),D.push(k.numSpotLightShadowsWithMaps),D.push(k.numLightProbes),D.push(k.shadowMapType),D.push(k.toneMapping),D.push(k.numClippingPlanes),D.push(k.numClipIntersection),D.push(k.depthPacking)}function P(D,k){if(X.disableAll(),k.instancing)X.enable(0);if(k.instancingColor)X.enable(1);if(k.instancingMorph)X.enable(2);if(k.matcap)X.enable(3);if(k.envMap)X.enable(4);if(k.normalMapObjectSpace)X.enable(5);if(k.normalMapTangentSpace)X.enable(6);if(k.clearcoat)X.enable(7);if(k.iridescence)X.enable(8);if(k.alphaTest)X.enable(9);if(k.vertexColors)X.enable(10);if(k.vertexAlphas)X.enable(11);if(k.vertexUv1s)X.enable(12);if(k.vertexUv2s)X.enable(13);if(k.vertexUv3s)X.enable(14);if(k.vertexTangents)X.enable(15);if(k.anisotropy)X.enable(16);if(k.alphaHash)X.enable(17);if(k.batching)X.enable(18);if(k.dispersion)X.enable(19);if(k.retroreflection)X.enable(24);if(k.batchingColor)X.enable(20);if(k.gradientMap)X.enable(21);if(k.packedNormalMap)X.enable(22);if(k.vertexNormals)X.enable(23);if(D.push(X.mask),X.disableAll(),k.fog)X.enable(0);if(k.useFog)X.enable(1);if(k.flatShading)X.enable(2);if(k.logarithmicDepthBuffer)X.enable(3);if(k.reversedDepthBuffer)X.enable(4);if(k.skinning)X.enable(5);if(k.morphTargets)X.enable(6);if(k.morphNormals)X.enable(7);if(k.morphColors)X.enable(8);if(k.premultipliedAlpha)X.enable(9);if(k.shadowMapEnabled)X.enable(10);if(k.doubleSided)X.enable(11);if(k.flipSided)X.enable(12);if(k.useDepthPacking)X.enable(13);if(k.dithering)X.enable(14);if(k.transmission)X.enable(15);if(k.sheen)X.enable(16);if(k.opaque)X.enable(17);if(k.pointsUvs)X.enable(18);if(k.decodeVideoTexture)X.enable(19);if(k.decodeVideoTextureEmissive)X.enable(20);if(k.alphaToCoverage)X.enable(21);if(k.numLightProbeGrids>0)X.enable(22);if(k.hasPositionAttribute)X.enable(23);D.push(X.mask)}function T(D){let k=O[D.type],x;if(k){let j=h8[k];x=fW.clone(j.uniforms)}else x=D.uniforms;return x}function B(D,k){let x=q.get(k);if(x!==void 0)++x.usedTimes;else x=new Uq(J,k,D,K),H.push(x),q.set(k,x);return x}function A(D){if(--D.usedTimes===0){let k=H.indexOf(D);H[k]=H[H.length-1],H.pop(),q.delete(D.cacheKey),D.destroy()}}function w(D){Y.remove(D)}function z(){Y.dispose()}return{getParameters:_,getProgramCacheKey:G,getUniforms:T,acquireProgram:B,releaseProgram:A,releaseShaderCache:w,programs:H,dispose:z}}function Eq(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,U){J.get(X)[Y]=U}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function Fq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function ZX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function KX(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(N){let O=0;if(N.isInstancedMesh)O+=2;if(N.isSkinnedMesh)O+=1;return O}function Y(N,O,R,_,G,E){let P=J[Q];if(P===void 0)P={id:N.id,object:N,geometry:O,material:R,materialVariant:X(N),groupOrder:_,renderOrder:N.renderOrder,z:G,group:E},J[Q]=P;else P.id=N.id,P.object=N,P.geometry=O,P.material=R,P.materialVariant=X(N),P.groupOrder=_,P.renderOrder=N.renderOrder,P.z=G,P.group=E;return Q++,P}function U(N,O,R,_,G,E,P){if(P.reversedDepth===!0)G=-G;let T=Y(N,O,R,_,G,E);if(R.transmission>0)Z.push(T);else if(R.transparent===!0)K.push(T);else $.push(T)}function H(N,O,R,_,G,E){let P=Y(N,O,R,_,G,E);if(R.transmission>0)Z.unshift(P);else if(R.transparent===!0)K.unshift(P);else $.unshift(P)}function q(N,O){if($.length>1)$.sort(N||Fq);if(Z.length>1)Z.sort(O||ZX);if(K.length>1)K.sort(O||ZX)}function F(){for(let N=Q,O=J.length;N<O;N++){let R=J[N];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:F,sort:q}}function Oq(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new KX,J.set(Z,[X]);else if(K>=W.length)X=new KX,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function Gq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new C,color:new _0};break;case"SpotLight":$={position:new C,direction:new C,color:new _0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new C,color:new _0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new C,skyColor:new _0,groundColor:new _0};break;case"RectAreaLight":$={color:new _0,position:new C,halfWidth:new C,halfHeight:new C};break}return J[Q.id]=$,$}}}function Dq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new A0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new A0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new A0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var Rq=0;function Lq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Vq(J){let Q=new Gq,$=Dq(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new C);let K=new C,W=new zJ,X=new zJ;function Y(H){let q=0,F=0,N=0;for(let y=0;y<9;y++)Z.probe[y].set(0,0,0);let O=0,R=0,_=0,G=0,E=0,P=0,T=0,B=0,A=0,w=0,z=0,D=0,k=0,x=0;H.sort(Lq);for(let y=0,p=H.length;y<p;y++){let S=H[y],m=S.color,e=S.intensity,n=S.distance,H0=null;if(S.shadow&&S.shadow.map)if(S.shadow.map.texture.format===B9)H0=S.shadow.map.texture;else H0=S.shadow.map.depthTexture||S.shadow.map.texture;if(S.isAmbientLight)q+=m.r*e,F+=m.g*e,N+=m.b*e;else if(S.isLightProbe){for(let r=0;r<9;r++)Z.probe[r].addScaledVector(S.sh.coefficients[r],e);x++}else if(S.isSunLight){let r=Q.get(S);if(r.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let K0=S.shadow,N0=$.get(S);N0.shadowIntensity=K0.intensity,N0.shadowBias=K0.bias,N0.shadowNormalBias=K0.normalBias,N0.shadowRadius=K0.radius,N0.shadowMapSize.copy(K0.mapSize).multiply(K0.getFrameExtents()),Z.sunShadow[R]=N0,Z.sunShadowMap[R]=H0;let l0=K0.getViewportCount();for(let g0=0;g0<l0;g0++)Z.sunShadowMatrix[_+g0]=K0.getMatrix(g0),Z.sunShadowCascade[_+g0]=K0._cascadeData[g0];_+=l0,R++}Z.sun[O]=r,O++}else if(S.isDirectionalLight){let r=Q.get(S);if(r.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let K0=S.shadow,N0=$.get(S);N0.shadowIntensity=K0.intensity,N0.shadowBias=K0.bias,N0.shadowNormalBias=K0.normalBias,N0.shadowRadius=K0.radius,N0.shadowMapSize=K0.mapSize,Z.directionalShadow[G]=N0,Z.directionalShadowMap[G]=H0,Z.directionalShadowMatrix[G]=S.shadow.matrix,A++}Z.directional[G]=r,G++}else if(S.isSpotLight){let r=Q.get(S);r.position.setFromMatrixPosition(S.matrixWorld),r.color.copy(m).multiplyScalar(e),r.distance=n,r.coneCos=Math.cos(S.angle),r.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),r.decay=S.decay,Z.spot[P]=r;let K0=S.shadow;if(S.map){if(Z.spotLightMap[D]=S.map,D++,K0.updateMatrices(S),S.castShadow)k++}if(Z.spotLightMatrix[P]=K0.matrix,S.castShadow){let N0=$.get(S);N0.shadowIntensity=K0.intensity,N0.shadowBias=K0.bias,N0.shadowNormalBias=K0.normalBias,N0.shadowRadius=K0.radius,N0.shadowMapSize=K0.mapSize,Z.spotShadow[P]=N0,Z.spotShadowMap[P]=H0,z++}P++}else if(S.isRectAreaLight){let r=Q.get(S);r.color.copy(m).multiplyScalar(e),r.halfWidth.set(S.width*0.5,0,0),r.halfHeight.set(0,S.height*0.5,0),Z.rectArea[T]=r,T++}else if(S.isPointLight){let r=Q.get(S);if(r.color.copy(S.color).multiplyScalar(S.intensity),r.distance=S.distance,r.decay=S.decay,S.castShadow){let K0=S.shadow,N0=$.get(S);N0.shadowIntensity=K0.intensity,N0.shadowBias=K0.bias,N0.shadowNormalBias=K0.normalBias,N0.shadowRadius=K0.radius,N0.shadowMapSize=K0.mapSize,N0.shadowCameraNear=K0.camera.near,N0.shadowCameraFar=K0.camera.far,Z.pointShadow[E]=N0,Z.pointShadowMap[E]=H0,Z.pointShadowMatrix[E]=S.shadow.matrix,w++}Z.point[E]=r,E++}else if(S.isHemisphereLight){let r=Q.get(S);r.skyColor.copy(S.color).multiplyScalar(e),r.groundColor.copy(S.groundColor).multiplyScalar(e),Z.hemi[B]=r,B++}}if(T>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=P0.LTC_FLOAT_1,Z.rectAreaLTC2=P0.LTC_FLOAT_2;else Z.rectAreaLTC1=P0.LTC_HALF_1,Z.rectAreaLTC2=P0.LTC_HALF_2;Z.ambient[0]=q,Z.ambient[1]=F,Z.ambient[2]=N;let j=Z.hash;if(j.sunLength!==O||j.directionalLength!==G||j.pointLength!==E||j.spotLength!==P||j.rectAreaLength!==T||j.hemiLength!==B||j.numSunShadows!==R||j.numDirectionalShadows!==A||j.numPointShadows!==w||j.numSpotShadows!==z||j.numSpotMaps!==D||j.numLightProbes!==x)Z.sun.length=O,Z.directional.length=G,Z.spot.length=P,Z.rectArea.length=T,Z.point.length=E,Z.hemi.length=B,Z.sunShadow.length=R,Z.sunShadowMap.length=R,Z.sunShadowMatrix.length=_,Z.sunShadowCascade.length=_,Z.directionalShadow.length=A,Z.directionalShadowMap.length=A,Z.directionalShadowMatrix.length=A,Z.pointShadow.length=w,Z.pointShadowMap.length=w,Z.pointShadowMatrix.length=w,Z.spotShadow.length=z,Z.spotShadowMap.length=z,Z.spotLightMatrix.length=z+D-k,Z.spotLightMap.length=D,Z.numSpotLightShadowsWithMaps=k,Z.numLightProbes=x,j.sunLength=O,j.directionalLength=G,j.pointLength=E,j.spotLength=P,j.rectAreaLength=T,j.hemiLength=B,j.numSunShadows=R,j.numDirectionalShadows=A,j.numPointShadows=w,j.numSpotShadows=z,j.numSpotMaps=D,j.numLightProbes=x,Z.version=Rq++}function U(H,q){let F=0,N=0,O=0,R=0,_=0,G=0,E=q.matrixWorldInverse;for(let P=0,T=H.length;P<T;P++){let B=H[P];if(B.isSunLight){let A=Z.sun[F];A.direction.setFromMatrixPosition(B.matrixWorld),A.direction.transformDirection(E),F++}else if(B.isDirectionalLight){let A=Z.directional[N];A.direction.setFromMatrixPosition(B.matrixWorld),K.setFromMatrixPosition(B.target.matrixWorld),A.direction.sub(K),A.direction.transformDirection(E),N++}else if(B.isSpotLight){let A=Z.spot[R];A.position.setFromMatrixPosition(B.matrixWorld),A.position.applyMatrix4(E),A.direction.setFromMatrixPosition(B.matrixWorld),K.setFromMatrixPosition(B.target.matrixWorld),A.direction.sub(K),A.direction.transformDirection(E),R++}else if(B.isRectAreaLight){let A=Z.rectArea[_];A.position.setFromMatrixPosition(B.matrixWorld),A.position.applyMatrix4(E),X.identity(),W.copy(B.matrixWorld),W.premultiply(E),X.extractRotation(W),A.halfWidth.set(B.width*0.5,0,0),A.halfHeight.set(0,B.height*0.5,0),A.halfWidth.applyMatrix4(X),A.halfHeight.applyMatrix4(X),_++}else if(B.isPointLight){let A=Z.point[O];A.position.setFromMatrixPosition(B.matrixWorld),A.position.applyMatrix4(E),O++}else if(B.isHemisphereLight){let A=Z.hemi[G];A.direction.setFromMatrixPosition(B.matrixWorld),A.direction.transformDirection(E),G++}}}return{setup:Y,setupView:U,state:Z}}function WX(J){let Q=new Vq(J),$=[],Z=[],K=[];function W(N){F.camera=N,$.length=0,Z.length=0,K.length=0}function X(N){$.push(N)}function Y(N){Z.push(N)}function U(N){K.push(N)}function H(){Q.setup($)}function q(N){Q.setupView($,N)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:H,setupLightsView:q,pushLight:X,pushShadow:Y,pushLightProbeGrid:U}}function Mq(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new WX(J),Q.set(K,[Y]);else if(W>=X.length)Y=new WX(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var kq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bq=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Iq=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],zq=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],XX=new zJ,J7=new C,hZ=new C;function Aq(J,Q,$){let Z=new n6,K=new A0,W=new A0,X=new wJ,Y=new OZ,U=new GZ,H={},q=$.maxTextureSize,F={[H6]:Z8,[Z8]:H6,[yJ]:yJ},N=new L8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new A0},radius:{value:4}},vertexShader:kq,fragmentShader:Bq}),O=N.clone();O.defines.HORIZONTAL_PASS=1;let R=new fJ;R.setAttribute("position",new $8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let _=new o(R,N),G=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b6;let E=this.type;this.render=function(w,z,D){if(G.enabled===!1)return;if(G.autoUpdate===!1&&G.needsUpdate===!1)return;if(w.length===0)return;if(this.type===h7)n0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=b6;let k=J.getRenderTarget(),x=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),y=J.state;if(y.setBlending(j8),y.buffers.depth.getReversed()===!0)y.buffers.color.setClear(0,0,0,0);else y.buffers.color.setClear(1,1,1,1);y.buffers.depth.setTest(!0),y.setScissorTest(!1);let p=E!==this.type;if(p)z.traverse(function(S){if(S.material)if(Array.isArray(S.material))S.material.forEach((m)=>m.needsUpdate=!0);else S.material.needsUpdate=!0});for(let S=0,m=w.length;S<m;S++){let e=w[S],n=e.shadow;if(n===void 0){n0("WebGLShadowMap:",e,"has no shadow.");continue}if(n.autoUpdate===!1&&n.needsUpdate===!1)continue;K.copy(n.mapSize);let H0=n.getFrameExtents();if(K.multiply(H0),W.copy(n.mapSize),K.x>q||K.y>q){if(K.x>q)W.x=Math.floor(q/H0.x),K.x=W.x*H0.x,n.mapSize.x=W.x;if(K.y>q)W.y=Math.floor(q/H0.y),K.y=W.y*H0.y,n.mapSize.y=W.y}let r=J.state.buffers.depth.getReversed();if(n.camera._reversedDepth=r,n.map===null||p===!0){if(n.map!==null){if(n.map.depthTexture!==null)n.map.depthTexture.dispose(),n.map.depthTexture=null;n.map.dispose()}if(this.type===U6){if(e.isPointLight){n0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}n.map=new N8(K.x,K.y,{format:B9,type:y8,minFilter:K8,magFilter:K8,generateMipmaps:!1}),n.map.texture.name=e.name+".shadowMap",n.map.depthTexture=new A9(K.x,K.y,i8),n.map.depthTexture.name=e.name+".shadowMapDepth",n.map.depthTexture.format=M9,n.map.depthTexture.compareFunction=null,n.map.depthTexture.minFilter=X9,n.map.depthTexture.magFilter=X9}else{if(e.isPointLight)n.map=new mZ(K.x),n.map.depthTexture=new ZZ(K.x,Y9);else n.map=new N8(K.x,K.y),n.map.depthTexture=new A9(K.x,K.y,Y9);if(n.map.depthTexture.name=e.name+".shadowMap",n.map.depthTexture.format=M9,this.type===b6)n.map.depthTexture.compareFunction=r?o7:i7,n.map.depthTexture.minFilter=K8,n.map.depthTexture.magFilter=K8;else n.map.depthTexture.compareFunction=null,n.map.depthTexture.minFilter=X9,n.map.depthTexture.magFilter=X9}n.camera.updateProjectionMatrix()}if(n.map.isWebGLCubeRenderTarget!==!0&&(n.map.width!==K.x||n.map.height!==K.y))n.map.setSize(K.x,K.y);let K0=n.map.isWebGLCubeRenderTarget?6:n.getViewportCount();if(e.isPointLight!==!0)n.updateMatrices(e,D);for(let N0=0;N0<K0;N0++){let l0=n.getCamera(N0);if(e.isPointLight){let{camera:g0,matrix:GJ}=n,r0=e.distance||g0.far;if(r0!==g0.far)g0.far=r0,g0.updateProjectionMatrix();J7.setFromMatrixPosition(e.matrixWorld),g0.position.copy(J7),hZ.copy(g0.position),hZ.add(Iq[N0]),g0.up.copy(zq[N0]),g0.lookAt(hZ),g0.updateMatrixWorld(),GJ.makeTranslation(-J7.x,-J7.y,-J7.z),XX.multiplyMatrices(g0.projectionMatrix,g0.matrixWorldInverse),n._frustum.setFromProjectionMatrix(XX,g0.coordinateSystem,g0.reversedDepth)}if(n.map.isWebGLCubeRenderTarget)J.setRenderTarget(n.map,N0),J.clear();else{if(N0===0)J.setRenderTarget(n.map),J.clear();let g0=n.getViewport(N0);X.set(W.x*g0.x,W.y*g0.y,W.x*g0.z,W.y*g0.w),y.viewport(X)}Z=n.getFrustum(N0),B(z,D,l0,e,this.type)}if(n.isPointLightShadow!==!0&&this.type===U6)P(n,D);n.needsUpdate=!1}E=this.type,G.needsUpdate=!1,J.setRenderTarget(k,x,j)};function P(w,z){let D=Q.update(_);if(N.defines.VSM_SAMPLES!==w.blurSamples)N.defines.VSM_SAMPLES=w.blurSamples,O.defines.VSM_SAMPLES=w.blurSamples,N.needsUpdate=!0,O.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new N8(K.x,K.y,{format:B9,type:y8});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);N.uniforms.shadow_pass.value=w.map.depthTexture,N.uniforms.resolution.value.set(w.map.width,w.map.height),N.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(z,null,D,N,_,null),O.uniforms.shadow_pass.value=w.mapPass.texture,O.uniforms.resolution.value.set(w.map.width,w.map.height),O.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(z,null,D,O,_,null)}function T(w,z,D,k){let x=null,j=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(j!==void 0)x=j;else if(x=D.isPointLight===!0?U:Y,J.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let y=x.uuid,p=z.uuid,S=H[y];if(S===void 0)S={},H[y]=S;let m=S[p];if(m===void 0)m=x.clone(),S[p]=m,z.addEventListener("dispose",A);x=m}if(x.visible=z.visible,x.wireframe=z.wireframe,k===U6)x.side=z.shadowSide!==null?z.shadowSide:z.side;else x.side=z.shadowSide!==null?z.shadowSide:F[z.side];if(x.alphaMap=z.alphaMap,x.alphaTest=z.alphaToCoverage===!0?0.5:z.alphaTest,x.map=z.map,x.clipShadows=z.clipShadows,x.clippingPlanes=z.clippingPlanes,x.clipIntersection=z.clipIntersection,x.displacementMap=z.displacementMap,x.displacementScale=z.displacementScale,x.displacementBias=z.displacementBias,x.wireframeLinewidth=z.wireframeLinewidth,x.linewidth=z.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let y=J.properties.get(x);y.light=D}return x}function B(w,z,D,k,x){if(w.visible===!1)return;if(w.layers.test(z.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&x===U6)&&(!w.frustumCulled||w.intersectsFrustum(Z))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let p=Q.update(w),S=w.material;if(Array.isArray(S)){let m=p.groups;for(let e=0,n=m.length;e<n;e++){let H0=m[e],r=S[H0.materialIndex];if(r&&r.visible){let K0=T(w,r,k,x);w.onBeforeShadow(J,w,z,D,p,K0,H0),J.renderBufferDirect(D,null,p,K0,w,H0),w.onAfterShadow(J,w,z,D,p,K0,H0)}}}else if(S.visible){let m=T(w,S,k,x);w.onBeforeShadow(J,w,z,D,p,m,null),J.renderBufferDirect(D,null,p,m,w,null),w.onAfterShadow(J,w,z,D,p,m,null)}}}let y=w.children;for(let p=0,S=y.length;p<S;p++)B(y[p],z,D,k,x)}function A(w){w.target.removeEventListener("dispose",A);for(let D in H){let k=H[D],x=w.target.uuid;if(x in k)k[x].dispose(),delete k[x]}}}function _q(J,Q){function $(){let V=!1,$0=new wJ,d=null,Y0=new wJ(0,0,0,0);return{setMask:function(G0){if(d!==G0&&!V)J.colorMask(G0,G0,G0,G0),d=G0},setLocked:function(G0){V=G0},setClear:function(G0,J0,L0,u0,$J){if($J===!0)G0*=u0,J0*=u0,L0*=u0;if($0.set(G0,J0,L0,u0),Y0.equals($0)===!1)J.clearColor(G0,J0,L0,u0),Y0.copy($0)},reset:function(){V=!1,d=null,Y0.set(-1,0,0,0)}}}function Z(){let V=!1,$0=!1,d=null,Y0=null,G0=null;return{setReversed:function(J0){if($0!==J0){let L0=Q.get("EXT_clip_control");if(J0)L0.clipControlEXT(L0.LOWER_LEFT_EXT,L0.ZERO_TO_ONE_EXT);else L0.clipControlEXT(L0.LOWER_LEFT_EXT,L0.NEGATIVE_ONE_TO_ONE_EXT);$0=J0;let u0=G0;G0=null,this.setClear(u0)}},getReversed:function(){return $0},setTest:function(J0){if(J0)q0(J.DEPTH_TEST);else p0(J.DEPTH_TEST)},setMask:function(J0){if(d!==J0&&!V)J.depthMask(J0),d=J0},setFunc:function(J0){if($0)J0=jW[J0];if(Y0!==J0){switch(J0){case ZW:J.depthFunc(J.NEVER);break;case KW:J.depthFunc(J.ALWAYS);break;case WW:J.depthFunc(J.LESS);break;case $$:J.depthFunc(J.LEQUAL);break;case XW:J.depthFunc(J.EQUAL);break;case YW:J.depthFunc(J.GEQUAL);break;case UW:J.depthFunc(J.GREATER);break;case HW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}Y0=J0}},setLocked:function(J0){V=J0},setClear:function(J0){if(G0!==J0){if(G0=J0,$0)J0=1-J0;J.clearDepth(J0)}},reset:function(){V=!1,d=null,Y0=null,G0=null,$0=!1}}}function K(){let V=!1,$0=null,d=null,Y0=null,G0=null,J0=null,L0=null,u0=null,$J=null;return{setTest:function(YJ){if(!V)if(YJ)q0(J.STENCIL_TEST);else p0(J.STENCIL_TEST)},setMask:function(YJ){if($0!==YJ&&!V)J.stencilMask(YJ),$0=YJ},setFunc:function(YJ,gJ,E8){if(d!==YJ||Y0!==gJ||G0!==E8)J.stencilFunc(YJ,gJ,E8),d=YJ,Y0=gJ,G0=E8},setOp:function(YJ,gJ,E8){if(J0!==YJ||L0!==gJ||u0!==E8)J.stencilOp(YJ,gJ,E8),J0=YJ,L0=gJ,u0=E8},setLocked:function(YJ){V=YJ},setClear:function(YJ){if($J!==YJ)J.clearStencil(YJ),$J=YJ},reset:function(){V=!1,$0=null,d=null,Y0=null,G0=null,J0=null,L0=null,u0=null,$J=null}}}let W=new $,X=new Z,Y=new K,U=new WeakMap,H=new WeakMap,q={},F={},N={},O=new WeakMap,R=[],_=null,G=!1,E=null,P=null,T=null,B=null,A=null,w=null,z=null,D=new _0(0,0,0),k=0,x=!1,j=null,y=null,p=null,S=null,m=null,e=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),n=!1,H0=0,r=J.getParameter(J.VERSION);if(r.indexOf("WebGL")!==-1)H0=parseFloat(/^WebGL (\d)/.exec(r)[1]),n=H0>=1;else if(r.indexOf("OpenGL ES")!==-1)H0=parseFloat(/^OpenGL ES (\d)/.exec(r)[1]),n=H0>=2;let K0=null,N0={},l0=J.getParameter(J.SCISSOR_BOX),g0=J.getParameter(J.VIEWPORT),GJ=new wJ().fromArray(l0),r0=new wJ().fromArray(g0);function a(V,$0,d,Y0){let G0=new Uint8Array(4),J0=J.createTexture();J.bindTexture(V,J0),J.texParameteri(V,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(V,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let L0=0;L0<d;L0++)if(V===J.TEXTURE_3D||V===J.TEXTURE_2D_ARRAY)J.texImage3D($0,0,J.RGBA,1,1,Y0,0,J.RGBA,J.UNSIGNED_BYTE,G0);else J.texImage2D($0+L0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,G0);return J0}let O0={};O0[J.TEXTURE_2D]=a(J.TEXTURE_2D,J.TEXTURE_2D,1),O0[J.TEXTURE_CUBE_MAP]=a(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),O0[J.TEXTURE_2D_ARRAY]=a(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),O0[J.TEXTURE_3D]=a(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),q0(J.DEPTH_TEST),X.setFunc($$),HJ(!1),DJ(tQ),q0(J.CULL_FACE),NJ(j8);function q0(V){if(q[V]!==!0)J.enable(V),q[V]=!0}function p0(V){if(q[V]!==!1)J.disable(V),q[V]=!1}function T0(V,$0){if(N[V]!==$0){if(J.bindFramebuffer(V,$0),N[V]=$0,V===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=$0;if(V===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=$0;return!0}return!1}function h0(V,$0){let d=R,Y0=!1;if(V){if(d=O.get($0),d===void 0)d=[],O.set($0,d);let G0=V.textures;if(d.length!==G0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let J0=0,L0=G0.length;J0<L0;J0++)d[J0]=J.COLOR_ATTACHMENT0+J0;d.length=G0.length,Y0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,Y0=!0;if(Y0)J.drawBuffers(d)}function CJ(V){if(_!==V)return J.useProgram(V),_=V,!0;return!1}let KJ={[N6]:J.FUNC_ADD,[xK]:J.FUNC_SUBTRACT,[gK]:J.FUNC_REVERSE_SUBTRACT};KJ[pK]=J.MIN,KJ[mK]=J.MAX;let QJ={[dK]:J.ZERO,[lK]:J.ONE,[uK]:J.SRC_COLOR,[nK]:J.SRC_ALPHA,[tK]:J.SRC_ALPHA_SATURATE,[aK]:J.DST_COLOR,[iK]:J.DST_ALPHA,[cK]:J.ONE_MINUS_SRC_COLOR,[sK]:J.ONE_MINUS_SRC_ALPHA,[rK]:J.ONE_MINUS_DST_COLOR,[oK]:J.ONE_MINUS_DST_ALPHA,[eK]:J.CONSTANT_COLOR,[JW]:J.ONE_MINUS_CONSTANT_COLOR,[QW]:J.CONSTANT_ALPHA,[$W]:J.ONE_MINUS_CONSTANT_ALPHA};function NJ(V,$0,d,Y0,G0,J0,L0,u0,$J,YJ){if(V===j8){if(G===!0)p0(J.BLEND),G=!1;return}if(G===!1)q0(J.BLEND),G=!0;if(V!==hK){if(V!==E||YJ!==x){if(P!==N6||A!==N6)J.blendEquation(J.FUNC_ADD),P=N6,A=N6;if(YJ)switch(V){case h6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case eQ:J.blendFunc(J.ONE,J.ONE);break;case J$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case Q$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:i0("WebGLState: Invalid blending: ",V);break}else switch(V){case h6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case eQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case J$:i0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q$:i0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:i0("WebGLState: Invalid blending: ",V);break}T=null,B=null,w=null,z=null,D.set(0,0,0),k=0,E=V,x=YJ}return}if(G0=G0||$0,J0=J0||d,L0=L0||Y0,$0!==P||G0!==A)J.blendEquationSeparate(KJ[$0],KJ[G0]),P=$0,A=G0;if(d!==T||Y0!==B||J0!==w||L0!==z)J.blendFuncSeparate(QJ[d],QJ[Y0],QJ[J0],QJ[L0]),T=d,B=Y0,w=J0,z=L0;if(u0.equals(D)===!1||$J!==k)J.blendColor(u0.r,u0.g,u0.b,$J),D.copy(u0),k=$J;E=V,x=!1}function e0(V,$0){V.side===yJ?p0(J.CULL_FACE):q0(J.CULL_FACE);let d=V.side===Z8;if($0)d=!d;HJ(d),V.blending===h6&&V.transparent===!1?NJ(j8):NJ(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),X.setFunc(V.depthFunc),X.setTest(V.depthTest),X.setMask(V.depthWrite),W.setMask(V.colorWrite);let Y0=V.stencilWrite;if(Y.setTest(Y0),Y0)Y.setMask(V.stencilWriteMask),Y.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),Y.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass);AJ(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?q0(J.SAMPLE_ALPHA_TO_COVERAGE):p0(J.SAMPLE_ALPHA_TO_COVERAGE)}function HJ(V){if(j!==V){if(V)J.frontFace(J.CW);else J.frontFace(J.CCW);j=V}}function DJ(V){if(V!==vK){if(q0(J.CULL_FACE),V!==y)if(V===tQ)J.cullFace(J.BACK);else if(V===bK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else p0(J.CULL_FACE);y=V}function bJ(V){if(V!==p){if(n)J.lineWidth(V);p=V}}function AJ(V,$0,d){if(V){if(q0(J.POLYGON_OFFSET_FILL),S!==$0||m!==d){if(S=$0,m=d,X.getReversed())$0=-$0;J.polygonOffset($0,d)}}else p0(J.POLYGON_OFFSET_FILL)}function TJ(V){if(V)q0(J.SCISSOR_TEST);else p0(J.SCISSOR_TEST)}function v(V){if(V===void 0)V=J.TEXTURE0+e-1;if(K0!==V)J.activeTexture(V),K0=V}function SJ(V,$0,d){if(d===void 0)if(K0===null)d=J.TEXTURE0+e-1;else d=K0;let Y0=N0[d];if(Y0===void 0)Y0={type:void 0,texture:void 0},N0[d]=Y0;if(Y0.type!==V||Y0.texture!==$0){if(K0!==d)J.activeTexture(d),K0=d;J.bindTexture(V,$0||O0[V]),Y0.type=V,Y0.texture=$0}}function qJ(){let V=N0[K0];if(V!==void 0&&V.type!==void 0)J.bindTexture(V.type,null),V.type=void 0,V.texture=void 0}function VJ(){try{J.compressedTexImage2D(...arguments)}catch(V){i0("WebGLState:",V)}}function I(){try{J.compressedTexImage3D(...arguments)}catch(V){i0("WebGLState:",V)}}function L(){try{J.texSubImage2D(...arguments)}catch(V){i0("WebGLState:",V)}}function f(){try{J.texSubImage3D(...arguments)}catch(V){i0("WebGLState:",V)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(V){i0("WebGLState:",V)}}function U0(){try{J.compressedTexSubImage3D(...arguments)}catch(V){i0("WebGLState:",V)}}function D0(){try{J.texStorage2D(...arguments)}catch(V){i0("WebGLState:",V)}}function M0(){try{J.texStorage3D(...arguments)}catch(V){i0("WebGLState:",V)}}function b(){try{J.texImage2D(...arguments)}catch(V){i0("WebGLState:",V)}}function g(){try{J.texImage3D(...arguments)}catch(V){i0("WebGLState:",V)}}function Q0(V){if(F[V]!==void 0)return F[V];else return J.getParameter(V)}function W0(V,$0){if(F[V]!==$0)J.pixelStorei(V,$0),F[V]=$0}function X0(V){if(GJ.equals(V)===!1)J.scissor(V.x,V.y,V.z,V.w),GJ.copy(V)}function Z0(V){if(r0.equals(V)===!1)J.viewport(V.x,V.y,V.z,V.w),r0.copy(V)}function E0(V,$0){let d=H.get($0);if(d===void 0)d=new WeakMap,H.set($0,d);let Y0=d.get(V);if(Y0===void 0)Y0=J.getUniformBlockIndex($0,V.name),d.set(V,Y0)}function B0(V,$0){let Y0=H.get($0).get(V);if(U.get($0)!==Y0)J.uniformBlockBinding($0,Y0,V.__bindingPointIndex),U.set($0,Y0)}function F0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},F={},K0=null,N0={},N={},O=new WeakMap,R=[],_=null,G=!1,E=null,P=null,T=null,B=null,A=null,w=null,z=null,D=new _0(0,0,0),k=0,x=!1,j=null,y=null,p=null,S=null,m=null,GJ.set(0,0,J.canvas.width,J.canvas.height),r0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:q0,disable:p0,bindFramebuffer:T0,drawBuffers:h0,useProgram:CJ,setBlending:NJ,setMaterial:e0,setFlipSided:HJ,setCullFace:DJ,setLineWidth:bJ,setPolygonOffset:AJ,setScissorTest:TJ,activeTexture:v,bindTexture:SJ,unbindTexture:qJ,compressedTexImage2D:VJ,compressedTexImage3D:I,texImage2D:b,texImage3D:g,pixelStorei:W0,getParameter:Q0,updateUBOMapping:E0,uniformBlockBinding:B0,texStorage2D:D0,texStorage3D:M0,texSubImage2D:L,texSubImage3D:f,compressedTexSubImage2D:s,compressedTexSubImage3D:U0,scissor:X0,viewport:Z0,reset:F0}}function Pq(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new A0,q=new WeakMap,F=new Set,N,O=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function _(I,L){return R?new OffscreenCanvas(I,L):v6("canvas")}function G(I,L,f){let s=1,U0=VJ(I);if(U0.width>f||U0.height>f)s=f/Math.max(U0.width,U0.height);if(s<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let D0=Math.floor(s*U0.width),M0=Math.floor(s*U0.height);if(N===void 0)N=_(D0,M0);let b=L?_(D0,M0):N;return b.width=D0,b.height=M0,b.getContext("2d").drawImage(I,0,0,D0,M0),n0("WebGLRenderer: Texture has been resized from ("+U0.width+"x"+U0.height+") to ("+D0+"x"+M0+")."),b}else{if("data"in I)n0("WebGLRenderer: Image in DataTexture is too big ("+U0.width+"x"+U0.height+").");return I}return I}function E(I){return I.generateMipmaps}function P(I){J.generateMipmap(I)}function T(I){if(I.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(I.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function B(I,L,f,s,U0,D0=!1){if(I!==null){if(J[I]!==void 0)return J[I];n0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let M0;if(s){if(M0=Q.get("EXT_texture_norm16"),!M0)n0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let b=L;if(L===J.RED){if(f===J.FLOAT)b=J.R32F;if(f===J.HALF_FLOAT)b=J.R16F;if(f===J.UNSIGNED_BYTE)b=J.R8;if(f===J.UNSIGNED_SHORT&&M0)b=M0.R16_EXT;if(f===J.SHORT&&M0)b=M0.R16_SNORM_EXT}if(L===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)b=J.R8UI;if(f===J.UNSIGNED_SHORT)b=J.R16UI;if(f===J.UNSIGNED_INT)b=J.R32UI;if(f===J.BYTE)b=J.R8I;if(f===J.SHORT)b=J.R16I;if(f===J.INT)b=J.R32I}if(L===J.RG){if(f===J.FLOAT)b=J.RG32F;if(f===J.HALF_FLOAT)b=J.RG16F;if(f===J.UNSIGNED_BYTE)b=J.RG8;if(f===J.UNSIGNED_SHORT&&M0)b=M0.RG16_EXT;if(f===J.SHORT&&M0)b=M0.RG16_SNORM_EXT}if(L===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)b=J.RG8UI;if(f===J.UNSIGNED_SHORT)b=J.RG16UI;if(f===J.UNSIGNED_INT)b=J.RG32UI;if(f===J.BYTE)b=J.RG8I;if(f===J.SHORT)b=J.RG16I;if(f===J.INT)b=J.RG32I}if(L===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)b=J.RGB8UI;if(f===J.UNSIGNED_SHORT)b=J.RGB16UI;if(f===J.UNSIGNED_INT)b=J.RGB32UI;if(f===J.BYTE)b=J.RGB8I;if(f===J.SHORT)b=J.RGB16I;if(f===J.INT)b=J.RGB32I}if(L===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)b=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)b=J.RGBA16UI;if(f===J.UNSIGNED_INT)b=J.RGBA32UI;if(f===J.BYTE)b=J.RGBA8I;if(f===J.SHORT)b=J.RGBA16I;if(f===J.INT)b=J.RGBA32I}if(L===J.RGB){if(f===J.UNSIGNED_SHORT&&M0)b=M0.RGB16_EXT;if(f===J.SHORT&&M0)b=M0.RGB16_SNORM_EXT;if(f===J.UNSIGNED_INT_5_9_9_9_REV)b=J.RGB9_E5;if(f===J.UNSIGNED_INT_10F_11F_11F_REV)b=J.R11F_G11F_B10F}if(L===J.RGBA){let g=D0?s$:EJ.getTransfer(U0);if(f===J.FLOAT)b=J.RGBA32F;if(f===J.HALF_FLOAT)b=J.RGBA16F;if(f===J.UNSIGNED_BYTE)b=g===PJ?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT&&M0)b=M0.RGBA16_EXT;if(f===J.SHORT&&M0)b=M0.RGBA16_SNORM_EXT;if(f===J.UNSIGNED_SHORT_4_4_4_4)b=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)b=J.RGB5_A1}if(b===J.R16F||b===J.R32F||b===J.RG16F||b===J.RG32F||b===J.RGBA16F||b===J.RGBA32F)Q.get("EXT_color_buffer_float");return b}function A(I,L){let f;if(I){if(L===null||L===Y9||L===E6)f=J.DEPTH24_STENCIL8;else if(L===i8)f=J.DEPTH32F_STENCIL8;else if(L===m6)f=J.DEPTH24_STENCIL8,n0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===Y9||L===E6)f=J.DEPTH_COMPONENT24;else if(L===i8)f=J.DEPTH_COMPONENT32F;else if(L===m6)f=J.DEPTH_COMPONENT16;return f}function w(I,L){if(E(I)===!0||I.isFramebufferTexture&&I.minFilter!==X9&&I.minFilter!==K8)return Math.log2(Math.max(L.width,L.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return L.mipmaps.length;else return 1}function z(I){let L=I.target;if(L.removeEventListener("dispose",z),k(L),L.isVideoTexture)q.delete(L);if(L.isHTMLTexture)F.delete(L)}function D(I){let L=I.target;L.removeEventListener("dispose",D),j(L)}function k(I){let L=Z.get(I);if(L.__webglInit===void 0)return;let f=I.source,s=O.get(f);if(s){let U0=s[L.__cacheKey];if(U0.usedTimes--,U0.usedTimes===0)x(I);if(Object.keys(s).length===0)O.delete(f)}Z.remove(I)}function x(I){let L=Z.get(I);J.deleteTexture(L.__webglTexture);let f=I.source,s=O.get(f);delete s[L.__cacheKey],X.memory.textures--}function j(I){let L=Z.get(I);if(I.depthTexture)I.depthTexture.dispose(),Z.remove(I.depthTexture);if(I.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(L.__webglFramebuffer[s]))for(let U0=0;U0<L.__webglFramebuffer[s].length;U0++)J.deleteFramebuffer(L.__webglFramebuffer[s][U0]);else J.deleteFramebuffer(L.__webglFramebuffer[s]);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer[s])}else{if(Array.isArray(L.__webglFramebuffer))for(let s=0;s<L.__webglFramebuffer.length;s++)J.deleteFramebuffer(L.__webglFramebuffer[s]);else J.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)J.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let s=0;s<L.__webglColorRenderbuffer.length;s++)if(L.__webglColorRenderbuffer[s])J.deleteRenderbuffer(L.__webglColorRenderbuffer[s])}if(L.__webglDepthRenderbuffer)J.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let f=I.textures;for(let s=0,U0=f.length;s<U0;s++){let D0=Z.get(f[s]);if(D0.__webglTexture)J.deleteTexture(D0.__webglTexture),X.memory.textures--;Z.remove(f[s])}Z.remove(I)}let y=0;function p(){y=0}function S(){return y}function m(I){y=I}function e(){let I=y;if(I>=K.maxTextures)n0("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+K.maxTextures);return y+=1,I}function n(I){let L=[];return L.push(I.wrapS),L.push(I.wrapT),L.push(I.wrapR||0),L.push(I.magFilter),L.push(I.minFilter),L.push(I.anisotropy),L.push(I.internalFormat),L.push(I.format),L.push(I.type),L.push(I.generateMipmaps),L.push(I.premultiplyAlpha),L.push(I.flipY),L.push(I.unpackAlignment),L.push(I.colorSpace),L.join()}function H0(I,L){let f=Z.get(I);if(I.isVideoTexture)SJ(I);if(I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&f.__version!==I.version){let s=I.image;if(s===null)n0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)n0("WebGLRenderer: Texture marked for update but image is incomplete");else{p0(f,I,L);return}}else if(I.isExternalTexture)f.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+L)}function r(I,L){let f=Z.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&f.__version!==I.version){p0(f,I,L);return}else if(I.isExternalTexture)f.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+L)}function K0(I,L){let f=Z.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&f.__version!==I.version){p0(f,I,L);return}$.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+L)}function N0(I,L){let f=Z.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&f.__version!==I.version){T0(f,I,L);return}$.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+L)}let l0={[W9]:J.REPEAT,[p7]:J.CLAMP_TO_EDGE,[FW]:J.MIRRORED_REPEAT},g0={[X9]:J.NEAREST,[OW]:J.NEAREST_MIPMAP_NEAREST,[p6]:J.NEAREST_MIPMAP_LINEAR,[K8]:J.LINEAR,[m7]:J.LINEAR_MIPMAP_NEAREST,[V9]:J.LINEAR_MIPMAP_LINEAR},GJ={[IW]:J.NEVER,[CW]:J.ALWAYS,[zW]:J.LESS,[i7]:J.LEQUAL,[AW]:J.EQUAL,[o7]:J.GEQUAL,[_W]:J.GREATER,[PW]:J.NOTEQUAL};function r0(I,L){if(L.type===i8&&Q.has("OES_texture_float_linear")===!1&&(L.magFilter===K8||L.magFilter===m7||L.magFilter===p6||L.magFilter===V9||L.minFilter===K8||L.minFilter===m7||L.minFilter===p6||L.minFilter===V9))n0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,l0[L.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,l0[L.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,l0[L.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,g0[L.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,g0[L.minFilter]),L.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,GJ[L.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===X9)return;if(L.minFilter!==p6&&L.minFilter!==V9)return;if(L.type===i8&&Q.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||Z.get(L).__currentAnisotropy){let f=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(I,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,K.getMaxAnisotropy())),Z.get(L).__currentAnisotropy=L.anisotropy}}}function a(I,L){let f=!1;if(I.__webglInit===void 0)I.__webglInit=!0,L.addEventListener("dispose",z);let s=L.source,U0=O.get(s);if(U0===void 0)U0={},O.set(s,U0);let D0=n(L);if(D0!==I.__cacheKey){if(U0[D0]===void 0)U0[D0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,f=!0;U0[D0].usedTimes++;let M0=U0[I.__cacheKey];if(M0!==void 0){if(U0[I.__cacheKey].usedTimes--,M0.usedTimes===0)x(L)}I.__cacheKey=D0,I.__webglTexture=U0[D0].texture}return f}function O0(I,L,f){return Math.floor(Math.floor(I/f)/L)}function q0(I,L,f,s){let D0=I.updateRanges;if(D0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,L.width,L.height,f,s,L.data);else{D0.sort((W0,X0)=>W0.start-X0.start);let M0=0;for(let W0=1;W0<D0.length;W0++){let X0=D0[M0],Z0=D0[W0],E0=X0.start+X0.count,B0=O0(Z0.start,L.width,4),F0=O0(X0.start,L.width,4);if(Z0.start<=E0+1&&B0===F0&&O0(Z0.start+Z0.count-1,L.width,4)===B0)X0.count=Math.max(X0.count,Z0.start+Z0.count-X0.start);else++M0,D0[M0]=Z0}D0.length=M0+1;let b=$.getParameter(J.UNPACK_ROW_LENGTH),g=$.getParameter(J.UNPACK_SKIP_PIXELS),Q0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,L.width);for(let W0=0,X0=D0.length;W0<X0;W0++){let Z0=D0[W0],E0=Math.floor(Z0.start/4),B0=Math.ceil(Z0.count/4),F0=E0%L.width,V=Math.floor(E0/L.width),$0=B0,d=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,F0),$.pixelStorei(J.UNPACK_SKIP_ROWS,V),$.texSubImage2D(J.TEXTURE_2D,0,F0,V,$0,1,f,s,L.data)}I.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,b),$.pixelStorei(J.UNPACK_SKIP_PIXELS,g),$.pixelStorei(J.UNPACK_SKIP_ROWS,Q0)}}function p0(I,L,f){let s=J.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(L.isData3DTexture)s=J.TEXTURE_3D;let U0=a(I,L),D0=L.source;$.bindTexture(s,I.__webglTexture,J.TEXTURE0+f);let M0=Z.get(D0);if(D0.version!==M0.__version||U0===!0){if($.activeTexture(J.TEXTURE0+f),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let d=EJ.getPrimaries(EJ.workingColorSpace),Y0=L.colorSpace===o8?null:EJ.getPrimaries(L.colorSpace),G0=L.colorSpace===o8||d===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,G0)}$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment);let g=G(L.image,!1,K.maxTextureSize);g=qJ(L,g);let Q0=W.convert(L.format,L.colorSpace),W0=W.convert(L.type),X0=B(L.internalFormat,Q0,W0,L.normalized,L.colorSpace,L.isVideoTexture);r0(s,L);let Z0,E0=L.mipmaps,B0=L.isVideoTexture!==!0,F0=M0.__version===void 0||U0===!0,V=D0.dataReady,$0=w(L,g);if(L.isDepthTexture){if(X0=A(L.format===k9,L.type),F0)if(B0)$.texStorage2D(J.TEXTURE_2D,1,X0,g.width,g.height);else $.texImage2D(J.TEXTURE_2D,0,X0,g.width,g.height,0,Q0,W0,null)}else if(L.isDataTexture)if(E0.length>0){if(B0&&F0)$.texStorage2D(J.TEXTURE_2D,$0,X0,E0[0].width,E0[0].height);for(let d=0,Y0=E0.length;d<Y0;d++)if(Z0=E0[d],B0){if(V)$.texSubImage2D(J.TEXTURE_2D,d,0,0,Z0.width,Z0.height,Q0,W0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,d,X0,Z0.width,Z0.height,0,Q0,W0,Z0.data);L.generateMipmaps=!1}else if(B0){if(F0)$.texStorage2D(J.TEXTURE_2D,$0,X0,g.width,g.height);if(V)q0(L,g,Q0,W0)}else $.texImage2D(J.TEXTURE_2D,0,X0,g.width,g.height,0,Q0,W0,g.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(B0&&F0)$.texStorage3D(J.TEXTURE_2D_ARRAY,$0,X0,E0[0].width,E0[0].height,g.depth);for(let d=0,Y0=E0.length;d<Y0;d++)if(Z0=E0[d],L.format!==f8)if(Q0!==null)if(B0){if(V)if(L.layerUpdates.size>0){let G0=SZ(Z0.width,Z0.height,L.format,L.type);for(let J0 of L.layerUpdates){let L0=Z0.data.subarray(J0*G0/Z0.data.BYTES_PER_ELEMENT,(J0+1)*G0/Z0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,d,0,0,J0,Z0.width,Z0.height,1,Q0,L0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,d,0,0,0,Z0.width,Z0.height,g.depth,Q0,Z0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,d,X0,Z0.width,Z0.height,g.depth,0,Z0.data,0,0);else n0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(B0){if(V)$.texSubImage3D(J.TEXTURE_2D_ARRAY,d,0,0,0,Z0.width,Z0.height,g.depth,Q0,W0,Z0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,d,X0,Z0.width,Z0.height,g.depth,0,Q0,W0,Z0.data);if(L.layerUpdates.size>0)L.clearLayerUpdates()}else{if(B0&&F0)$.texStorage2D(J.TEXTURE_2D,$0,X0,E0[0].width,E0[0].height);for(let d=0,Y0=E0.length;d<Y0;d++)if(Z0=E0[d],L.format!==f8)if(Q0!==null)if(B0){if(V)$.compressedTexSubImage2D(J.TEXTURE_2D,d,0,0,Z0.width,Z0.height,Q0,Z0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,d,X0,Z0.width,Z0.height,0,Z0.data);else n0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(B0){if(V)$.texSubImage2D(J.TEXTURE_2D,d,0,0,Z0.width,Z0.height,Q0,W0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,d,X0,Z0.width,Z0.height,0,Q0,W0,Z0.data)}else if(L.isDataArrayTexture)if(B0){if(F0)$.texStorage3D(J.TEXTURE_2D_ARRAY,$0,X0,g.width,g.height,g.depth);if(V)if(L.layerUpdates.size>0){let d=SZ(g.width,g.height,L.format,L.type);for(let Y0 of L.layerUpdates){let G0=g.data.subarray(Y0*d/g.data.BYTES_PER_ELEMENT,(Y0+1)*d/g.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,Y0,g.width,g.height,1,Q0,W0,G0)}L.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,g.width,g.height,g.depth,Q0,W0,g.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,X0,g.width,g.height,g.depth,0,Q0,W0,g.data);else if(L.isData3DTexture)if(B0){if(F0)$.texStorage3D(J.TEXTURE_3D,$0,X0,g.width,g.height,g.depth);if(V)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,g.width,g.height,g.depth,Q0,W0,g.data)}else $.texImage3D(J.TEXTURE_3D,0,X0,g.width,g.height,g.depth,0,Q0,W0,g.data);else if(L.isFramebufferTexture){if(F0)if(B0)$.texStorage2D(J.TEXTURE_2D,$0,X0,g.width,g.height);else{let{width:d,height:Y0}=g;for(let G0=0;G0<$0;G0++)$.texImage2D(J.TEXTURE_2D,G0,X0,d,Y0,0,Q0,W0,null),d>>=1,Y0>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in J){let d=J.canvas;if(!d.hasAttribute("layoutsubtree"))d.setAttribute("layoutsubtree","true");if(g.parentNode!==d){d.appendChild(g),F.add(L),d.onpaint=(Y0)=>{let G0=Y0.changedElements;for(let J0 of F)if(G0.includes(J0.image))J0.needsUpdate=!0},d.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,g);else{let{RGBA:G0,RGBA:J0,UNSIGNED_BYTE:L0}=J;J.texElementImage2D(J.TEXTURE_2D,0,G0,J0,L0,g)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(E0.length>0){if(B0&&F0){let d=VJ(E0[0]);$.texStorage2D(J.TEXTURE_2D,$0,X0,d.width,d.height)}for(let d=0,Y0=E0.length;d<Y0;d++)if(Z0=E0[d],B0){if(V)$.texSubImage2D(J.TEXTURE_2D,d,0,0,Q0,W0,Z0)}else $.texImage2D(J.TEXTURE_2D,d,X0,Q0,W0,Z0);L.generateMipmaps=!1}else if(B0){if(F0){let d=VJ(g);$.texStorage2D(J.TEXTURE_2D,$0,X0,d.width,d.height)}if(V)$.texSubImage2D(J.TEXTURE_2D,0,0,0,Q0,W0,g)}else $.texImage2D(J.TEXTURE_2D,0,X0,Q0,W0,g);if(E(L))P(s);if(M0.__version=D0.version,L.onUpdate)L.onUpdate(L)}I.__version=L.version}function T0(I,L,f){if(L.image.length!==6)return;let s=a(I,L),U0=L.source;$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+f);let D0=Z.get(U0);if(U0.version!==D0.__version||s===!0){$.activeTexture(J.TEXTURE0+f);let M0=EJ.getPrimaries(EJ.workingColorSpace),b=L.colorSpace===o8?null:EJ.getPrimaries(L.colorSpace),g=L.colorSpace===o8||M0===b?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,g);let Q0=L.isCompressedTexture||L.image[0].isCompressedTexture,W0=L.image[0]&&L.image[0].isDataTexture,X0=[];for(let J0=0;J0<6;J0++){if(!Q0&&!W0)X0[J0]=G(L.image[J0],!0,K.maxCubemapSize);else X0[J0]=W0?L.image[J0].image:L.image[J0];X0[J0]=qJ(L,X0[J0])}let Z0=X0[0],E0=W.convert(L.format,L.colorSpace),B0=W.convert(L.type),F0=B(L.internalFormat,E0,B0,L.normalized,L.colorSpace),V=L.isVideoTexture!==!0,$0=D0.__version===void 0||s===!0,d=U0.dataReady,Y0=w(L,Z0);r0(J.TEXTURE_CUBE_MAP,L);let G0;if(Q0){if(V&&$0)$.texStorage2D(J.TEXTURE_CUBE_MAP,Y0,F0,Z0.width,Z0.height);for(let J0=0;J0<6;J0++){G0=X0[J0].mipmaps;for(let L0=0;L0<G0.length;L0++){let u0=G0[L0];if(L.format!==f8)if(E0!==null)if(V){if(d)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0,0,0,u0.width,u0.height,E0,u0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0,F0,u0.width,u0.height,0,u0.data);else n0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(V){if(d)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0,0,0,u0.width,u0.height,E0,B0,u0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0,F0,u0.width,u0.height,0,E0,B0,u0.data)}}}else{if(G0=L.mipmaps,V&&$0){if(G0.length>0)Y0++;let J0=VJ(X0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,Y0,F0,J0.width,J0.height)}for(let J0=0;J0<6;J0++)if(W0){if(V){if(d)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,X0[J0].width,X0[J0].height,E0,B0,X0[J0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,F0,X0[J0].width,X0[J0].height,0,E0,B0,X0[J0].data);for(let L0=0;L0<G0.length;L0++){let $J=G0[L0].image[J0].image;if(V){if(d)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0+1,0,0,$J.width,$J.height,E0,B0,$J.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0+1,F0,$J.width,$J.height,0,E0,B0,$J.data)}}else{if(V){if(d)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,E0,B0,X0[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,F0,E0,B0,X0[J0]);for(let L0=0;L0<G0.length;L0++){let u0=G0[L0];if(V){if(d)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0+1,0,0,E0,B0,u0.image[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,L0+1,F0,E0,B0,u0.image[J0])}}}if(E(L))P(J.TEXTURE_CUBE_MAP);if(D0.__version=U0.version,L.onUpdate)L.onUpdate(L)}I.__version=L.version}function h0(I,L,f,s,U0,D0){let M0=W.convert(f.format,f.colorSpace),b=W.convert(f.type),g=B(f.internalFormat,M0,b,f.normalized,f.colorSpace),Q0=Z.get(L),W0=Z.get(f);if(W0.__renderTarget=L,!Q0.__hasExternalTextures){let X0=Math.max(1,L.width>>D0),Z0=Math.max(1,L.height>>D0);if(U0===J.TEXTURE_3D||U0===J.TEXTURE_2D_ARRAY)$.texImage3D(U0,D0,g,X0,Z0,L.depth,0,M0,b,null);else $.texImage2D(U0,D0,g,X0,Z0,0,M0,b,null)}if($.bindFramebuffer(J.FRAMEBUFFER,I),v(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,U0,W0.__webglTexture,0,TJ(L));else if(U0===J.TEXTURE_2D||U0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&U0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,U0,W0.__webglTexture,D0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function CJ(I,L,f){if(J.bindRenderbuffer(J.RENDERBUFFER,I),L.depthBuffer){let s=L.depthTexture,U0=s&&s.isDepthTexture?s.type:null,D0=A(L.stencilBuffer,U0),M0=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,TJ(L),D0,L.width,L.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,TJ(L),D0,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,D0,L.width,L.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,M0,J.RENDERBUFFER,I)}else{let s=L.textures;for(let U0=0;U0<s.length;U0++){let D0=s[U0],M0=W.convert(D0.format,D0.colorSpace),b=W.convert(D0.type),g=B(D0.internalFormat,M0,b,D0.normalized,D0.colorSpace);if(v(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,TJ(L),g,L.width,L.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,TJ(L),g,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,g,L.width,L.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function KJ(I,L,f){let s=L.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,I),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let U0=Z.get(L.depthTexture);if(U0.__renderTarget=L,!U0.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;if(s){if(U0.__webglInit===void 0)U0.__webglInit=!0,L.depthTexture.addEventListener("dispose",z);if(U0.__webglTexture===void 0){U0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,U0.__webglTexture),r0(J.TEXTURE_CUBE_MAP,L.depthTexture);let Q0=W.convert(L.depthTexture.format),W0=W.convert(L.depthTexture.type),X0;if(L.depthTexture.format===M9)X0=J.DEPTH_COMPONENT24;else if(L.depthTexture.format===k9)X0=J.DEPTH24_STENCIL8;for(let Z0=0;Z0<6;Z0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,X0,L.width,L.height,0,Q0,W0,null)}}else H0(L.depthTexture,0);let D0=U0.__webglTexture,M0=TJ(L),b=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+f:J.TEXTURE_2D,g=L.depthTexture.format===k9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(L.depthTexture.format===M9)if(v(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,g,b,D0,0,M0);else J.framebufferTexture2D(J.FRAMEBUFFER,g,b,D0,0);else if(L.depthTexture.format===k9)if(v(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,g,b,D0,0,M0);else J.framebufferTexture2D(J.FRAMEBUFFER,g,b,D0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function QJ(I){let L=Z.get(I),f=I.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==I.depthTexture){let s=I.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(s){let U0=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,s.removeEventListener("dispose",U0)};s.addEventListener("dispose",U0),L.__depthDisposeCallback=U0}L.__boundDepthTexture=s}if(I.depthTexture&&!L.__autoAllocateDepthBuffer)if(f)for(let s=0;s<6;s++)KJ(L.__webglFramebuffer[s],I,s);else{let s=I.texture.mipmaps;if(s&&s.length>0)KJ(L.__webglFramebuffer[0],I,0);else KJ(L.__webglFramebuffer,I,0)}else if(f){L.__webglDepthbuffer=[];for(let s=0;s<6;s++)if($.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[s]),L.__webglDepthbuffer[s]===void 0)L.__webglDepthbuffer[s]=J.createRenderbuffer(),CJ(L.__webglDepthbuffer[s],I,!1);else{let U0=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,D0=L.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,D0),J.framebufferRenderbuffer(J.FRAMEBUFFER,U0,J.RENDERBUFFER,D0)}}else{let s=I.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer);if(L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=J.createRenderbuffer(),CJ(L.__webglDepthbuffer,I,!1);else{let U0=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,D0=L.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,D0),J.framebufferRenderbuffer(J.FRAMEBUFFER,U0,J.RENDERBUFFER,D0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function NJ(I,L,f){let s=Z.get(I);if(L!==void 0)h0(s.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)QJ(I)}function e0(I){let L=I.texture,f=Z.get(I),s=Z.get(L);I.addEventListener("dispose",D);let U0=I.textures,D0=I.isWebGLCubeRenderTarget===!0,M0=U0.length>1;if(!M0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=L.version,X.memory.textures++}if(D0){f.__webglFramebuffer=[];for(let b=0;b<6;b++)if(L.mipmaps&&L.mipmaps.length>0){f.__webglFramebuffer[b]=[];for(let g=0;g<L.mipmaps.length;g++)f.__webglFramebuffer[b][g]=J.createFramebuffer()}else f.__webglFramebuffer[b]=J.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){f.__webglFramebuffer=[];for(let b=0;b<L.mipmaps.length;b++)f.__webglFramebuffer[b]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(M0)for(let b=0,g=U0.length;b<g;b++){let Q0=Z.get(U0[b]);if(Q0.__webglTexture===void 0)Q0.__webglTexture=J.createTexture(),X.memory.textures++}if(I.samples>0&&v(I)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let b=0;b<U0.length;b++){let g=U0[b];f.__webglColorRenderbuffer[b]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[b]);let Q0=W.convert(g.format,g.colorSpace),W0=W.convert(g.type),X0=B(g.internalFormat,Q0,W0,g.normalized,g.colorSpace,I.isXRRenderTarget===!0),Z0=TJ(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,Z0,X0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+b,J.RENDERBUFFER,f.__webglColorRenderbuffer[b])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),CJ(f.__webglDepthRenderbuffer,I,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(D0){$.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),r0(J.TEXTURE_CUBE_MAP,L);for(let b=0;b<6;b++)if(L.mipmaps&&L.mipmaps.length>0)for(let g=0;g<L.mipmaps.length;g++)h0(f.__webglFramebuffer[b][g],I,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+b,g);else h0(f.__webglFramebuffer[b],I,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+b,0);if(E(L))P(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(M0){for(let b=0,g=U0.length;b<g;b++){let Q0=U0[b],W0=Z.get(Q0),X0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)X0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(X0,W0.__webglTexture),r0(X0,Q0),h0(f.__webglFramebuffer,I,Q0,J.COLOR_ATTACHMENT0+b,X0,0),E(Q0))P(X0)}$.unbindTexture()}else{let b=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)b=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(b,s.__webglTexture),r0(b,L),L.mipmaps&&L.mipmaps.length>0)for(let g=0;g<L.mipmaps.length;g++)h0(f.__webglFramebuffer[g],I,L,J.COLOR_ATTACHMENT0,b,g);else h0(f.__webglFramebuffer,I,L,J.COLOR_ATTACHMENT0,b,0);if(E(L))P(b);$.unbindTexture()}if(I.depthBuffer)QJ(I)}function HJ(I){let L=I.textures;for(let f=0,s=L.length;f<s;f++){let U0=L[f];if(E(U0)){let D0=T(I),M0=Z.get(U0).__webglTexture;$.bindTexture(D0,M0),P(D0),$.unbindTexture()}}}let DJ=[],bJ=[];function AJ(I){if(I.samples>0){if(v(I)===!1){let{textures:L,width:f,height:s}=I,U0=J.COLOR_BUFFER_BIT,D0=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,M0=Z.get(I),b=L.length>1;if(b)for(let Q0=0;Q0<L.length;Q0++)$.bindFramebuffer(J.FRAMEBUFFER,M0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Q0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,M0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Q0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,M0.__webglMultisampledFramebuffer);let g=I.texture.mipmaps;if(g&&g.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,M0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,M0.__webglFramebuffer);for(let Q0=0;Q0<L.length;Q0++){if(I.resolveDepthBuffer){if(I.depthBuffer)U0|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)U0|=J.STENCIL_BUFFER_BIT}if(b){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,M0.__webglColorRenderbuffer[Q0]);let W0=Z.get(L[Q0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,W0,0)}if(J.blitFramebuffer(0,0,f,s,0,0,f,s,U0,J.NEAREST),U===!0){if(DJ.length=0,bJ.length=0,DJ.push(J.COLOR_ATTACHMENT0+Q0),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1)DJ.push(D0),bJ.push(D0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,bJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,DJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),b)for(let Q0=0;Q0<L.length;Q0++){$.bindFramebuffer(J.FRAMEBUFFER,M0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Q0,J.RENDERBUFFER,M0.__webglColorRenderbuffer[Q0]);let W0=Z.get(L[Q0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,M0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Q0,J.TEXTURE_2D,W0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,M0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&U){let L=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[L])}}}function TJ(I){return Math.min(K.maxSamples,I.samples)}function v(I){let L=Z.get(I);return I.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function SJ(I){let L=X.render.frame;if(q.get(I)!==L)q.set(I,L),I.update()}function qJ(I,L){let{colorSpace:f,format:s,type:U0}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return L;if(f!==n$&&f!==o8)if(EJ.getTransfer(f)===PJ){if(s!==f8||U0!==P8)n0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else i0("WebGLTextures: Unsupported texture color space:",f);return L}function VJ(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement)H.width=I.naturalWidth||I.width,H.height=I.naturalHeight||I.height;else if(typeof VideoFrame<"u"&&I instanceof VideoFrame)H.width=I.displayWidth,H.height=I.displayHeight;else H.width=I.width,H.height=I.height;return H}this.allocateTextureUnit=e,this.resetTextureUnits=p,this.getTextureUnits=S,this.setTextureUnits=m,this.setTexture2D=H0,this.setTexture2DArray=r,this.setTexture3D=K0,this.setTextureCube=N0,this.rebindTextures=NJ,this.setupRenderTarget=e0,this.updateRenderTargetMipmap=HJ,this.updateMultisampleRenderTarget=AJ,this.setupDepthRenderbuffer=QJ,this.setupFrameBufferTexture=h0,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function Cq(J,Q){function $(Z,K=o8){let W,X=EJ.getTransfer(K);if(Z===P8)return J.UNSIGNED_BYTE;if(Z===N$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===q$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===RW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===LW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===GW)return J.BYTE;if(Z===DW)return J.SHORT;if(Z===m6)return J.UNSIGNED_SHORT;if(Z===H$)return J.INT;if(Z===Y9)return J.UNSIGNED_INT;if(Z===i8)return J.FLOAT;if(Z===y8)return J.HALF_FLOAT;if(Z===VW)return J.ALPHA;if(Z===MW)return J.RGB;if(Z===f8)return J.RGBA;if(Z===M9)return J.DEPTH_COMPONENT;if(Z===k9)return J.DEPTH_STENCIL;if(Z===kW)return J.RED;if(Z===E$)return J.RED_INTEGER;if(Z===B9)return J.RG;if(Z===F$)return J.RG_INTEGER;if(Z===O$)return J.RGBA_INTEGER;if(Z===d7||Z===l7||Z===u7||Z===c7)if(X===PJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===d7)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===l7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===u7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===c7)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===d7)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===l7)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===u7)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===c7)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===G$||Z===D$||Z===R$||Z===L$)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===G$)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===D$)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===R$)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===L$)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===V$||Z===M$||Z===k$||Z===B$||Z===I$||Z===n7||Z===z$)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===V$||Z===M$)return X===PJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===k$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===B$)return W.COMPRESSED_R11_EAC;if(Z===I$)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===n7)return W.COMPRESSED_RG11_EAC;if(Z===z$)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===A$||Z===_$||Z===P$||Z===C$||Z===T$||Z===w$||Z===S$||Z===j$||Z===y$||Z===f$||Z===v$||Z===b$||Z===h$||Z===x$)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===A$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===_$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===P$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===C$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===T$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===w$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===S$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===j$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===y$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===f$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===v$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===b$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===h$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===x$)return X===PJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===g$||Z===p$||Z===m$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===g$)return X===PJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===p$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===m$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===d$||Z===l$||Z===s7||Z===u$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===d$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===l$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===s7)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===u$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===E6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var Tq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wq=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new ZQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new L8({vertexShader:Tq,fragmentShader:wq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new o(new R8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VX extends v8{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,U=null,H=null,q=null,F=null,N=null,O=null,R=typeof XRWebGLBinding<"u",_=new LX,G={},E=Q.getContextAttributes(),P=null,T=null,B=[],A=[],w=new A0,z=null,D=null,k=new Q8;k.viewport=new wJ;let x=new Q8;x.viewport=new wJ;let j=[k,x],y=new PZ,p=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let O0=B[a];if(O0===void 0)O0=new u6,B[a]=O0;return O0.getTargetRaySpace()},this.getControllerGrip=function(a){let O0=B[a];if(O0===void 0)O0=new u6,B[a]=O0;return O0.getGripSpace()},this.getHand=function(a){let O0=B[a];if(O0===void 0)O0=new u6,B[a]=O0;return O0.getHandSpace()};function m(a){let O0=A.indexOf(a.inputSource);if(O0===-1)return;let q0=B[O0];if(q0!==void 0)q0.update(a.inputSource,a.frame,U||W),q0.dispatchEvent({type:a.type,data:a.inputSource})}function e(){Z.removeEventListener("select",m),Z.removeEventListener("selectstart",m),Z.removeEventListener("selectend",m),Z.removeEventListener("squeeze",m),Z.removeEventListener("squeezestart",m),Z.removeEventListener("squeezeend",m),Z.removeEventListener("end",e),Z.removeEventListener("inputsourceschange",n);for(let a=0;a<B.length;a++){let O0=A[a];if(O0===null)continue;A[a]=null,B[a].disconnect(O0)}p=null,S=null,_.reset();for(let a in G)delete G[a];if(J.setRenderTarget(P),N=null,F=null,q=null,Z=null,T=null,r0.stop(),$.isPresenting=!1,J.setPixelRatio(z),J.setSize(w.width,w.height,!1),D!==null){let a=D.camera;a.fov=D.fov,a.zoom=D.zoom,a.updateProjectionMatrix(),D=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(K=a,$.isPresenting===!0)n0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if(X=a,$.isPresenting===!0)n0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(a){U=a},this.getBaseLayer=function(){return F!==null?F:N},this.getBinding=function(){if(q===null&&R)q=new XRWebGLBinding(Z,Q);return q},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(a){if(Z=a,Z!==null){if(P=J.getRenderTarget(),Z.addEventListener("select",m),Z.addEventListener("selectstart",m),Z.addEventListener("selectend",m),Z.addEventListener("squeeze",m),Z.addEventListener("squeezestart",m),Z.addEventListener("squeezeend",m),Z.addEventListener("end",e),Z.addEventListener("inputsourceschange",n),E.xrCompatible!==!0)await Q.makeXRCompatible();if(z=J.getPixelRatio(),J.getSize(w),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let q0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};N=new XRWebGLLayer(Z,Q,q0),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),T=new N8(N.framebufferWidth,N.framebufferHeight,{format:f8,type:P8,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let q0=null,p0=null,T0=null;if(E.depth)T0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,q0=E.stencil?k9:M9,p0=E.stencil?E6:Y9;let h0={colorFormat:Q.RGBA8,depthFormat:T0,scaleFactor:K};q=this.getBinding(),F=q.createProjectionLayer(h0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),T=new N8(F.textureWidth,F.textureHeight,{format:f8,type:P8,depthTexture:new A9(F.textureWidth,F.textureHeight,p0,void 0,void 0,void 0,void 0,void 0,void 0,q0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(Y),U=null,W=await Z.requestReferenceSpace(X),r0.setContext(Z),r0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function n(a){for(let O0=0;O0<a.removed.length;O0++){let q0=a.removed[O0],p0=A.indexOf(q0);if(p0>=0)A[p0]=null,B[p0].disconnect(q0)}for(let O0=0;O0<a.added.length;O0++){let q0=a.added[O0],p0=A.indexOf(q0);if(p0===-1){for(let h0=0;h0<B.length;h0++)if(h0>=A.length){A.push(q0),p0=h0;break}else if(A[h0]===null){A[h0]=q0,p0=h0;break}if(p0===-1)break}let T0=B[p0];if(T0)T0.connect(q0)}}let H0=new C,r=new C;function K0(a,O0,q0){H0.setFromMatrixPosition(O0.matrixWorld),r.setFromMatrixPosition(q0.matrixWorld);let p0=H0.distanceTo(r),T0=O0.projectionMatrix.elements,h0=q0.projectionMatrix.elements,CJ=T0[14]/(T0[10]-1),KJ=T0[14]/(T0[10]+1),QJ=(T0[9]+1)/T0[5],NJ=(T0[9]-1)/T0[5],e0=(T0[8]-1)/T0[0],HJ=(h0[8]+1)/h0[0],DJ=CJ*e0,bJ=CJ*HJ,AJ=p0/(-e0+HJ),TJ=AJ*-e0;if(O0.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.translateX(TJ),a.translateZ(AJ),a.matrixWorld.compose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),T0[10]===-1)a.projectionMatrix.copy(O0.projectionMatrix),a.projectionMatrixInverse.copy(O0.projectionMatrixInverse);else{let v=CJ+AJ,SJ=KJ+AJ,qJ=DJ-TJ,VJ=bJ+(p0-TJ),I=QJ*KJ/SJ*v,L=NJ*KJ/SJ*v;a.projectionMatrix.makePerspective(qJ,VJ,I,L,v,SJ),a.projectionMatrixInverse.copy(a.projectionMatrix).invert()}}function N0(a,O0){if(O0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(O0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(Z===null)return;let{near:O0,far:q0}=a;if(_.texture!==null){if(_.depthNear>0)O0=_.depthNear;if(_.depthFar>0)q0=_.depthFar}if(y.near=x.near=k.near=O0,y.far=x.far=k.far=q0,p!==y.near||S!==y.far)Z.updateRenderState({depthNear:y.near,depthFar:y.far}),p=y.near,S=y.far;y.layers.mask=a.layers.mask|6,k.layers.mask=y.layers.mask&-5,x.layers.mask=y.layers.mask&-3;let p0=a.parent,T0=y.cameras;N0(y,p0);for(let h0=0;h0<T0.length;h0++)N0(T0[h0],p0);if(T0.length===2)K0(y,k,x);else y.projectionMatrix.copy(k.projectionMatrix);if(D===null&&a.isPerspectiveCamera)D={camera:a,fov:a.fov,zoom:a.zoom};l0(a,y,p0)};function l0(a,O0,q0){if(q0===null)a.matrix.copy(O0.matrixWorld);else a.matrix.copy(q0.matrixWorld),a.matrix.invert(),a.matrix.multiply(O0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(O0.projectionMatrix),a.projectionMatrixInverse.copy(O0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=Y6*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return y},this.getFoveation=function(){if(F===null&&N===null)return;return Y},this.setFoveation=function(a){if(Y=a,F!==null)F.fixedFoveation=a;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=a},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)},this.getCameraTexture=function(a){return G[a]};let g0=null;function GJ(a,O0){if(H=O0.getViewerPose(U||W),O=O0,H!==null){let q0=H.views;if(N!==null)J.setRenderTargetFramebuffer(T,N.framebuffer),J.setRenderTarget(T);let p0=!1;if(q0.length!==y.cameras.length)y.cameras.length=0,p0=!0;for(let KJ=0;KJ<q0.length;KJ++){let QJ=q0[KJ],NJ=null;if(N!==null)NJ=N.getViewport(QJ);else{let HJ=q.getViewSubImage(F,QJ);if(NJ=HJ.viewport,KJ===0)J.setRenderTargetTextures(T,HJ.colorTexture,HJ.depthStencilTexture),J.setRenderTarget(T)}let e0=j[KJ];if(e0===void 0)e0=new Q8,e0.layers.enable(KJ),e0.viewport=new wJ,j[KJ]=e0;if(e0.matrix.fromArray(QJ.transform.matrix),e0.matrix.decompose(e0.position,e0.quaternion,e0.scale),e0.projectionMatrix.fromArray(QJ.projectionMatrix),e0.projectionMatrixInverse.copy(e0.projectionMatrix).invert(),e0.viewport.set(NJ.x,NJ.y,NJ.width,NJ.height),KJ===0)y.matrix.copy(e0.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale);if(p0===!0)y.cameras.push(e0)}let T0=Z.enabledFeatures;if(T0&&T0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){q=$.getBinding();let KJ=q.getDepthInformation(q0[0]);if(KJ&&KJ.isValid&&KJ.texture)_.init(KJ,Z.renderState)}if(T0&&T0.includes("camera-access")&&R){J.state.unbindTexture(),q=$.getBinding();for(let KJ=0;KJ<q0.length;KJ++){let QJ=q0[KJ].camera;if(QJ){let NJ=G[QJ];if(!NJ)NJ=new ZQ,G[QJ]=NJ;let e0=q.getCameraImage(QJ);NJ.sourceTexture=e0}}}}for(let q0=0;q0<B.length;q0++){let p0=A[q0],T0=B[q0];if(p0!==null&&T0!==void 0)T0.update(p0,O0,U||W)}if(g0)g0(a,O0);if(O0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:O0});O=null}let r0=new YX;r0.setAnimationLoop(GJ),this.setAnimationLoop=function(a){g0=a},this.dispose=function(){}}}var Sq=new zJ,MX=new t0;MX.set(-1,0,0,0,1,0,0,0,1);function jq(J,Q){function $(G,E){if(G.matrixAutoUpdate===!0)G.updateMatrix();E.value.copy(G.matrix)}function Z(G,E){if(E.color.getRGB(G.fogColor.value,EZ(J)),E.isFog)G.fogNear.value=E.near,G.fogFar.value=E.far;else if(E.isFogExp2)G.fogDensity.value=E.density}function K(G,E,P,T,B){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(G,E);else if(E.isMeshLambertMaterial){if(W(G,E),E.envMap)G.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(G,E),F(G,E);else if(E.isMeshPhongMaterial){if(W(G,E),q(G,E),E.envMap)G.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(G,E),N(G,E),E.isMeshPhysicalMaterial)O(G,E,B)}else if(E.isMeshMatcapMaterial)W(G,E),R(G,E);else if(E.isMeshDepthMaterial)W(G,E);else if(E.isMeshDistanceMaterial)W(G,E),_(G,E);else if(E.isMeshNormalMaterial)W(G,E);else if(E.isLineBasicMaterial){if(X(G,E),E.isLineDashedMaterial)Y(G,E)}else if(E.isPointsMaterial)U(G,E,P,T);else if(E.isSpriteMaterial)H(G,E);else if(E.isShadowMaterial)G.color.value.copy(E.color),G.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(G,E){if(G.opacity.value=E.opacity,E.color)G.diffuse.value.copy(E.color);if(E.emissive)G.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)G.map.value=E.map,$(E.map,G.mapTransform);if(E.alphaMap)G.alphaMap.value=E.alphaMap,$(E.alphaMap,G.alphaMapTransform);if(E.bumpMap){if(G.bumpMap.value=E.bumpMap,$(E.bumpMap,G.bumpMapTransform),G.bumpScale.value=E.bumpScale,E.side===Z8)G.bumpScale.value*=-1}if(E.normalMap){if(G.normalMap.value=E.normalMap,$(E.normalMap,G.normalMapTransform),G.normalScale.value.copy(E.normalScale),E.side===Z8)G.normalScale.value.negate()}if(E.displacementMap)G.displacementMap.value=E.displacementMap,$(E.displacementMap,G.displacementMapTransform),G.displacementScale.value=E.displacementScale,G.displacementBias.value=E.displacementBias;if(E.emissiveMap)G.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,G.emissiveMapTransform);if(E.specularMap)G.specularMap.value=E.specularMap,$(E.specularMap,G.specularMapTransform);if(E.alphaTest>0)G.alphaTest.value=E.alphaTest;let P=Q.get(E),T=P.envMap,B=P.envMapRotation;if(T){if(G.envMap.value=T,G.envMapRotation.value.setFromMatrix4(Sq.makeRotationFromEuler(B)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)G.envMapRotation.value.premultiply(MX);G.reflectivity.value=E.reflectivity,G.ior.value=E.ior,G.refractionRatio.value=E.refractionRatio}if(E.lightMap)G.lightMap.value=E.lightMap,G.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,G.lightMapTransform);if(E.aoMap)G.aoMap.value=E.aoMap,G.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,G.aoMapTransform)}function X(G,E){if(G.diffuse.value.copy(E.color),G.opacity.value=E.opacity,E.map)G.map.value=E.map,$(E.map,G.mapTransform)}function Y(G,E){G.dashSize.value=E.dashSize,G.totalSize.value=E.dashSize+E.gapSize,G.scale.value=E.scale}function U(G,E,P,T){if(G.diffuse.value.copy(E.color),G.opacity.value=E.opacity,G.size.value=E.size*P,G.scale.value=T*0.5,E.map)G.map.value=E.map,$(E.map,G.uvTransform);if(E.alphaMap)G.alphaMap.value=E.alphaMap,$(E.alphaMap,G.alphaMapTransform);if(E.alphaTest>0)G.alphaTest.value=E.alphaTest}function H(G,E){if(G.diffuse.value.copy(E.color),G.opacity.value=E.opacity,G.rotation.value=E.rotation,E.map)G.map.value=E.map,$(E.map,G.mapTransform);if(E.alphaMap)G.alphaMap.value=E.alphaMap,$(E.alphaMap,G.alphaMapTransform);if(E.alphaTest>0)G.alphaTest.value=E.alphaTest}function q(G,E){G.specular.value.copy(E.specular),G.shininess.value=Math.max(E.shininess,0.0001)}function F(G,E){if(E.gradientMap)G.gradientMap.value=E.gradientMap}function N(G,E){if(G.metalness.value=E.metalness,E.metalnessMap)G.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,G.metalnessMapTransform);if(G.roughness.value=E.roughness,E.roughnessMap)G.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,G.roughnessMapTransform);if(E.envMap)G.envMapIntensity.value=E.envMapIntensity}function O(G,E,P){if(G.ior.value=E.ior,E.sheen>0){if(G.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),G.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)G.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,G.sheenColorMapTransform);if(E.sheenRoughnessMap)G.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,G.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(G.clearcoat.value=E.clearcoat,G.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)G.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,G.clearcoatMapTransform);if(E.clearcoatRoughnessMap)G.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,G.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(G.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,G.clearcoatNormalMapTransform),G.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===Z8)G.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)G.dispersion.value=E.dispersion;if(E.retroreflectivity>0)G.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(G.iridescence.value=E.iridescence,G.iridescenceIOR.value=E.iridescenceIOR,G.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],G.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)G.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,G.iridescenceMapTransform);if(E.iridescenceThicknessMap)G.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,G.iridescenceThicknessMapTransform)}if(E.transmission>0){if(G.transmission.value=E.transmission,G.transmissionSamplerMap.value=P.texture,G.transmissionSamplerSize.value.set(P.width,P.height),E.transmissionMap)G.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,G.transmissionMapTransform);if(G.thickness.value=E.thickness,E.thicknessMap)G.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,G.thicknessMapTransform);G.attenuationDistance.value=E.attenuationDistance,G.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(G.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)G.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,G.anisotropyMapTransform)}if(G.specularIntensity.value=E.specularIntensity,G.specularColor.value.copy(E.specularColor),E.specularColorMap)G.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,G.specularColorMapTransform);if(E.specularIntensityMap)G.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,G.specularIntensityMapTransform)}function R(G,E){if(E.matcap)G.matcap.value=E.matcap}function _(G,E){let P=Q.get(E).light;G.referencePosition.value.setFromMatrixPosition(P.matrixWorld),G.nearDistance.value=P.shadow.camera.near,G.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function yq(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(B,A){let w=A.program;Z.uniformBlockBinding(B,w)}function H(B,A){let w=K[B.id];if(w===void 0)G(B),w=q(B),K[B.id]=w,B.addEventListener("dispose",P);let z=A.program;Z.updateUBOMapping(B,z);let D=Q.render.frame;if(W[B.id]!==D)N(B),W[B.id]=D}function q(B){let A=F();B.__bindingPointIndex=A;let w=J.createBuffer(),z=B.__size,D=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,z,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,w),w}function F(){for(let B=0;B<Y;B++)if(X.indexOf(B)===-1)return X.push(B),B;return i0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(B){let A=K[B.id],w=B.uniforms,z=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let D=0,k=w.length;D<k;D++){let x=w[D];if(Array.isArray(x))for(let j=0,y=x.length;j<y;j++)O(x[j],D,j,z);else O(x,D,0,z)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(B,A,w,z){if(_(B,A,w,z)===!0){let{__offset:D,value:k}=B;if(Array.isArray(k)){let x=0;for(let j=0;j<k.length;j++){let y=k[j],p=E(y);if(R(y,B.__data,x),typeof y!=="number"&&typeof y!=="boolean"&&!y.isMatrix3&&!ArrayBuffer.isView(y))x+=p.storage/Float32Array.BYTES_PER_ELEMENT}}else R(k,B.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,B.__data)}}function R(B,A,w){if(typeof B==="number"||typeof B==="boolean")A[0]=B;else if(B.isMatrix3)A[0]=B.elements[0],A[1]=B.elements[1],A[2]=B.elements[2],A[3]=0,A[4]=B.elements[3],A[5]=B.elements[4],A[6]=B.elements[5],A[7]=0,A[8]=B.elements[6],A[9]=B.elements[7],A[10]=B.elements[8],A[11]=0;else if(ArrayBuffer.isView(B))A.set(new B.constructor(B.buffer,B.byteOffset,A.length));else B.toArray(A,w)}function _(B,A,w,z){let D=B.value,k=A+"_"+w;if(z[k]===void 0){if(typeof D==="number"||typeof D==="boolean")z[k]=D;else if(ArrayBuffer.isView(D))z[k]=D.slice();else z[k]=D.clone();return!0}else{let x=z[k];if(typeof D==="number"||typeof D==="boolean"){if(x!==D)return z[k]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(x.equals(D)===!1)return x.copy(D),!0}return!1}function G(B){let A=B.uniforms,w=0,z=16;for(let k=0,x=A.length;k<x;k++){let j=Array.isArray(A[k])?A[k]:[A[k]];for(let y=0,p=j.length;y<p;y++){let S=j[y],m=Array.isArray(S.value)?S.value:[S.value];for(let e=0,n=m.length;e<n;e++){let H0=m[e],r=E(H0),K0=w%z,N0=K0%r.boundary,l0=K0+N0;if(w+=N0,l0!==0&&z-l0<r.storage)w+=z-l0;S.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=w,w+=r.storage}}}let D=w%z;if(D>0)w+=z-D;return B.__size=w,B.__cache={},this}function E(B){let A={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")A.boundary=4,A.storage=4;else if(B.isVector2)A.boundary=8,A.storage=8;else if(B.isVector3||B.isColor)A.boundary=16,A.storage=12;else if(B.isVector4)A.boundary=16,A.storage=16;else if(B.isMatrix3)A.boundary=48,A.storage=48;else if(B.isMatrix4)A.boundary=64,A.storage=64;else if(B.isTexture)n0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(B))A.boundary=16,A.storage=B.byteLength;else n0("WebGLRenderer: Unsupported uniform value type.",B);return A}function P(B){let A=B.target;A.removeEventListener("dispose",P);let w=X.indexOf(A.__bindingPointIndex);X.splice(w,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function T(){for(let B in K)J.deleteBuffer(K[B]);X=[],K={},W={}}return{bind:U,update:H,dispose:T}}var fq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),b8=null;function vq(){if(b8===null)b8=new QZ(fq,16,16,B9,y8),b8.name="DFG_LUT",b8.minFilter=K8,b8.magFilter=K8,b8.wrapS=p7,b8.wrapT=p7,b8.generateMipmaps=!1,b8.needsUpdate=!0;return b8}class dZ{constructor(J={}){let{canvas:Q=TW(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:F=!1,outputBufferType:N=P8}=J;this.isWebGLRenderer=!0;let O;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");O=$.getContextAttributes().alpha}else O=W;let R=N,_=new Set([O$,F$,E$]),G=new Set([P8,Y9,m6,E6,N$,q$]),E=new Uint32Array(4),P=new Int32Array(4),T=new C,B=null,A=null,w=[],z=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,x=!1,j=null,y=null,p=null,S=null;this._outputColorSpace=F6;let m=0,e=0,n=null,H0=-1,r=null,K0=new wJ,N0=new wJ,l0=null,g0=new _0(0),GJ=0,r0=Q.width,a=Q.height,O0=1,q0=null,p0=null,T0=new wJ(0,0,r0,a),h0=new wJ(0,0,r0,a),CJ=!1,KJ=new n6,QJ=!1,NJ=!1,e0=new zJ,HJ=new C,DJ=new wJ,bJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},AJ=!1;function TJ(){return n===null?O0:1}let v=$;function SJ(M,h){return Q.getContext(M,h)}let qJ,VJ,I,L,f,s,U0,D0,M0,b,g,Q0,W0,X0,Z0,E0,B0,F0,V,$0,d,Y0,G0;try{let M={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:q};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${fK}`);if(Q.addEventListener("webglcontextlost",u0,!1),Q.addEventListener("webglcontextrestored",$J,!1),Q.addEventListener("webglcontextcreationerror",YJ,!1),v===null){if(v=SJ("webgl2",M),v===null)if(SJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}J0()}catch(M){throw Q.removeEventListener("webglcontextlost",u0,!1),Q.removeEventListener("webglcontextrestored",$J,!1),Q.removeEventListener("webglcontextcreationerror",YJ,!1),i0("WebGLRenderer: "+M.message),M}function J0(){if(qJ=new d5(v),qJ.init(),d=new Cq(v,qJ),VJ=new j5(v,qJ,J,d),I=new _q(v,qJ),VJ.reversedDepthBuffer&&F)I.buffers.depth.setReversed(!0);y=v.createFramebuffer(),p=v.createFramebuffer(),S=v.createFramebuffer(),L=new c5(v),f=new Eq,s=new Pq(v,qJ,I,f,VJ,d,L),U0=new m5(k),D0=new sY(v),Y0=new w5(v,D0),M0=new l5(v,D0,L,Y0),b=new s5(v,M0,D0,Y0,L),F0=new n5(v,VJ,s),Z0=new y5(f),g=new qq(k,U0,qJ,VJ,Y0,Z0),Q0=new jq(k,f),W0=new Oq,X0=new Mq(qJ),B0=new T5(k,U0,I,b,O,Y),E0=new Aq(k,b,VJ),G0=new yq(v,L,VJ,I),V=new S5(v,qJ,L),$0=new u5(v,qJ,L),L.programs=g.programs,k.capabilities=VJ,k.extensions=qJ,k.properties=f,k.renderLists=W0,k.shadowMap=E0,k.state=I,k.info=L}if(R!==P8)D=new o5(R,Q.width,Q.height,X,Z,K);let L0=new VX(k,v);this.xr=L0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let M=qJ.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=qJ.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return O0},this.setPixelRatio=function(M){if(M===void 0)return;O0=M,this.setSize(r0,a,!1)},this.getSize=function(M){return M.set(r0,a)},this.setSize=function(M,h,i=!0){if(L0.isPresenting){n0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(r0=M,a=h,Q.width=Math.floor(M*O0),Q.height=Math.floor(h*O0),i===!0)Q.style.width=M+"px",Q.style.height=h+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,M,h)},this.getDrawingBufferSize=function(M){return M.set(r0*O0,a*O0).floor()},this.setDrawingBufferSize=function(M,h,i){r0=M,a=h,O0=i,Q.width=Math.floor(M*i),Q.height=Math.floor(h*i),this.setViewport(0,0,M,h)},this.setEffects=function(M){if(R===P8){i0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let h=0;h<M.length;h++)if(M[h].isOutputPass===!0){n0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K0)},this.getViewport=function(M){return M.copy(T0)},this.setViewport=function(M,h,i,c){if(M.isVector4)T0.set(M.x,M.y,M.z,M.w);else T0.set(M,h,i,c);I.viewport(K0.copy(T0).multiplyScalar(O0).round())},this.getScissor=function(M){return M.copy(h0)},this.setScissor=function(M,h,i,c){if(M.isVector4)h0.set(M.x,M.y,M.z,M.w);else h0.set(M,h,i,c);I.scissor(N0.copy(h0).multiplyScalar(O0).round())},this.getScissorTest=function(){return CJ},this.setScissorTest=function(M){I.setScissorTest(CJ=M)},this.setOpaqueSort=function(M){q0=M},this.setTransparentSort=function(M){p0=M},this.getClearColor=function(M){return M.copy(B0.getClearColor())},this.setClearColor=function(){B0.setClearColor(...arguments)},this.getClearAlpha=function(){return B0.getClearAlpha()},this.setClearAlpha=function(){B0.setClearAlpha(...arguments)},this.clear=function(M=!0,h=!0,i=!0){let c=0;if(M){let u=!1;if(n!==null){let C0=n.texture.format;u=_.has(C0)}if(u){let C0=n.texture.type,w0=G.has(C0),I0=B0.getClearColor(),b0=B0.getClearAlpha(),x0=I0.r,o0=I0.g,ZJ=I0.b;if(w0)E[0]=x0,E[1]=o0,E[2]=ZJ,E[3]=b0,v.clearBufferuiv(v.COLOR,0,E);else P[0]=x0,P[1]=o0,P[2]=ZJ,P[3]=b0,v.clearBufferiv(v.COLOR,0,P)}else c|=v.COLOR_BUFFER_BIT}if(h)c|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(i)c|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(c!==0)v.clear(c)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),j=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",u0,!1),Q.removeEventListener("webglcontextrestored",$J,!1),Q.removeEventListener("webglcontextcreationerror",YJ,!1),B0.dispose(),W0.dispose(),X0.dispose(),f.dispose(),U0.dispose(),b.dispose(),Y0.dispose(),G0.dispose(),g.dispose(),L0.dispose(),L0.removeEventListener("sessionstart",m9),L0.removeEventListener("sessionend",z6),p8.stop()};function u0(M){M.preventDefault(),a$("WebGLRenderer: Context Lost."),x=!0}function $J(){a$("WebGLRenderer: Context Restored."),x=!1;let M=L.autoReset,h=E0.enabled,i=E0.autoUpdate,c=E0.needsUpdate,u=E0.type;J0(),L.autoReset=M,E0.enabled=h,E0.autoUpdate=i,E0.needsUpdate=c,E0.type=u}function YJ(M){i0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function gJ(M){let h=M.target;h.removeEventListener("dispose",gJ),E8(h)}function E8(M){B6(M),f.remove(M)}function B6(M){let h=f.get(M).programs;if(h!==void 0){if(h.forEach(function(i){g.releaseProgram(i)}),M.isShaderMaterial)g.releaseShaderCache(M)}}this.renderBufferDirect=function(M,h,i,c,u,C0){if(h===null)h=bJ;let w0=u.isMesh&&u.matrixWorld.determinantAffine()<0,I0=u9(M,h,i,c,u);I.setMaterial(c,w0);let b0=i.index,x0=1;if(c.wireframe===!0){if(b0=M0.getWireframeAttribute(i),b0===void 0)return;x0=2}let o0=i.drawRange,ZJ=i.attributes.position,y0=o0.start*x0,LJ=(o0.start+o0.count)*x0;if(C0!==null)y0=Math.max(y0,C0.start*x0),LJ=Math.min(LJ,(C0.start+C0.count)*x0);if(b0!==null)y0=Math.max(y0,0),LJ=Math.min(LJ,b0.count);else if(ZJ!==void 0&&ZJ!==null)y0=Math.max(y0,0),LJ=Math.min(LJ,ZJ.count);let jJ=LJ-y0;if(jJ<0||jJ===1/0)return;Y0.setup(u,c,I0,i,b0);let _J,RJ=V;if(b0!==null)_J=D0.get(b0),RJ=$0,RJ.setIndex(_J);if(u.isMesh)if(c.wireframe===!0)I.setLineWidth(c.wireframeLinewidth*TJ()),RJ.setMode(v.LINES);else RJ.setMode(v.TRIANGLES);else if(u.isLine){let cJ=c.linewidth;if(cJ===void 0)cJ=1;if(I.setLineWidth(cJ*TJ()),u.isLineSegments)RJ.setMode(v.LINES);else if(u.isLineLoop)RJ.setMode(v.LINE_LOOP);else RJ.setMode(v.LINE_STRIP)}else if(u.isPoints)RJ.setMode(v.POINTS);else if(u.isSprite)RJ.setMode(v.TRIANGLES);if(u.isBatchedMesh)if(!qJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:cJ,_multiDrawCounts:S0,_multiDrawCount:l}=u,t=b0?D0.get(b0).bytesPerElement:1,k0=f.get(c).currentProgram.getUniforms();for(let j0=0;j0<l;j0++)k0.setValue(v,"_gl_DrawID",j0),RJ.render(cJ[j0]/t,S0[j0])}else RJ.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else if(u.isInstancedMesh)RJ.renderInstances(y0,jJ,u.count);else if(i.isInstancedBufferGeometry){let cJ=i._maxInstanceCount!==void 0?i._maxInstanceCount:1/0,S0=Math.min(i.instanceCount,cJ);RJ.renderInstances(y0,jJ,S0)}else RJ.render(y0,jJ)};function I6(M,h,i,c){if(j!==null&&M.isNodeMaterial)j.setObject(c,M);if(QJ===!0)Z0.setState(M,i,!1);if(M.transparent===!0&&M.side===yJ&&M.forceSinglePass===!1)M.side=Z8,M.needsUpdate=!0,B8(M,h,c),M.side=H6,M.needsUpdate=!0,B8(M,h,c),M.side=yJ;else B8(M,h,c)}this.compile=function(M,h,i=null){if(i===null)i=M;if(j!==null)j.renderStart(M,h,i);if(A=X0.get(i),A.init(h),z.push(A),i.traverseVisible(function(u){if(u.isLight&&u.layers.test(h.layers)){if(A.pushLight(u),u.castShadow)A.pushShadow(u)}}),M!==i)M.traverseVisible(function(u){if(u.isLight&&u.layers.test(h.layers)){if(A.pushLight(u),u.castShadow)A.pushShadow(u)}});if(A.setupLights(),j!==null)j.updateLights(A.state.lightsArray);if(NJ=this.localClippingEnabled,QJ=Z0.init(this.clippingPlanes,NJ),QJ===!0)Z0.setGlobalState(this.clippingPlanes,h);if(j!==null)E0.render(A.state.shadowsArray,i,h);let c=new Set;if(M.traverse(function(u){if(!(u.isMesh||u.isPoints||u.isLine||u.isSprite))return;let C0=u.material;if(C0)if(Array.isArray(C0))for(let w0=0;w0<C0.length;w0++){let I0=C0[w0];I6(I0,i,h,u),c.add(I0)}else I6(C0,i,h,u),c.add(C0)}),A=z.pop(),j!==null)j.renderEnd();return c},this.compileAsync=function(M,h,i=null){let c=this.compile(M,h,i);return new Promise((u)=>{function C0(){if(c.forEach(function(w0){let b0=f.get(w0).currentProgram;if(b0===void 0||b0.isReady())c.delete(w0)}),c.size===0){u(M);return}setTimeout(C0,10)}if(qJ.get("KHR_parallel_shader_compile")!==null)C0();else setTimeout(C0,10)})};let p9=null;function Y7(M){if(p9)p9(M)}function m9(){p8.stop()}function z6(){p8.start()}let p8=new YX;if(p8.setAnimationLoop(Y7),typeof self<"u")p8.setContext(self);this.setAnimationLoop=function(M){p9=M,L0.setAnimationLoop(M),M===null?p8.stop():p8.start()},L0.addEventListener("sessionstart",m9),L0.addEventListener("sessionend",z6),this.render=function(M,h){if(h!==void 0&&h.isCamera!==!0){i0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(j!==null)j.renderStart(M,h);let i=L0.enabled===!0&&L0.isPresenting===!0,c=D!==null&&(n===null||i)&&D.begin(k,n);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(L0.enabled===!0&&L0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(L0.cameraAutoUpdate===!0)L0.updateCamera(h);h=L0.getCamera()}if(M.isScene===!0)M.onBeforeRender(k,M,h,n);if(A=X0.get(M,z.length),A.init(h),A.state.textureUnits=s.getTextureUnits(),z.push(A),e0.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),KJ.setFromProjectionMatrix(e0,o$,h.reversedDepth),NJ=this.localClippingEnabled,QJ=Z0.init(this.clippingPlanes,NJ),B=W0.get(M,w.length),B.init(),w.push(B),L0.enabled===!0&&L0.isPresenting===!0){let w0=k.xr.getDepthSensingMesh();if(w0!==null)iJ(w0,h,-1/0,k.sortObjects)}if(iJ(M,h,0,k.sortObjects),B.finish(),j!==null)j.updateLights(A.state.lightsArray);if(k.sortObjects===!0)B.sort(q0,p0);if(AJ=L0.enabled===!1||L0.isPresenting===!1||L0.hasDepthSensing()===!1,AJ)B0.addToRenderList(B,M);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(QJ===!0)Z0.beginShadows();let u=A.state.shadowsArray;if(E0.render(u,M,h),QJ===!0)Z0.endShadows();if((c&&D.hasRenderPass())===!1){let{opaque:w0,transmissive:I0}=B;if(A.setupLights(),h.isArrayCamera){let b0=h.cameras;if(I0.length>0)for(let x0=0,o0=b0.length;x0<o0;x0++){let ZJ=b0[x0];d9(w0,I0,M,ZJ)}if(AJ)B0.render(M);for(let x0=0,o0=b0.length;x0<o0;x0++){let ZJ=b0[x0];M8(B,M,ZJ,ZJ.viewport)}}else{if(I0.length>0)d9(w0,I0,M,h);if(AJ)B0.render(M);M8(B,M,h)}}if(n!==null&&e===0)s.updateMultisampleRenderTarget(n),s.updateRenderTargetMipmap(n);if(c)D.end(k);if(M.isScene===!0)M.onAfterRender(k,M,h);if(Y0.resetDefaultState(),H0=-1,r=null,z.pop(),z.length>0){if(A=z[z.length-1],s.setTextureUnits(A.state.textureUnits),QJ===!0)Z0.setGlobalState(k.clippingPlanes,A.state.camera)}else A=null;if(w.pop(),w.length>0)B=w[w.length-1];else B=null;if(j!==null)j.renderEnd()};function iJ(M,h,i,c){if(M.visible===!1)return;if(M.layers.test(h.layers)){if(M.isGroup)i=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(h)}else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight){if(A.pushLight(M),M.castShadow)A.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(KJ)){if(c)DJ.setFromMatrixPosition(M.matrixWorld).applyMatrix4(e0);let w0=b.update(M),I0=M.material;if(I0.visible)B.push(M,w0,I0,i,DJ.z,null,h)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||M.intersectsFrustum(KJ)){let w0=b.update(M),I0=M.material;if(c){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();DJ.copy(M.boundingSphere.center)}else{if(w0.boundingSphere===null)w0.computeBoundingSphere();DJ.copy(w0.boundingSphere.center)}DJ.applyMatrix4(M.matrixWorld).applyMatrix4(e0)}if(Array.isArray(I0)){let b0=w0.groups;for(let x0=0,o0=b0.length;x0<o0;x0++){let ZJ=b0[x0],y0=I0[ZJ.materialIndex];if(y0&&y0.visible)B.push(M,w0,y0,i,DJ.z,ZJ,h)}}else if(I0.visible)B.push(M,w0,I0,i,DJ.z,null,h)}}}let C0=M.children;for(let w0=0,I0=C0.length;w0<I0;w0++)iJ(C0[w0],h,i,c)}function M8(M,h,i,c){let{opaque:u,transmissive:C0,transparent:w0}=M;if(A.setupLightsView(i),QJ===!0)Z0.setGlobalState(k.clippingPlanes,i);if(c)I.viewport(K0.copy(c));if(u.length>0)k8(u,h,i);if(C0.length>0)k8(C0,h,i);if(w0.length>0)k8(w0,h,i);I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function d9(M,h,i,c){if((i.isScene===!0?i.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[c.id]===void 0){let y0=qJ.has("EXT_color_buffer_half_float")||qJ.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[c.id]=new N8(1,1,{generateMipmaps:!0,type:y0?y8:P8,minFilter:V9,samples:Math.max(4,VJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:EJ.workingColorSpace})}let C0=A.state.transmissionRenderTarget[c.id],w0=c.viewport||K0;C0.setSize(w0.z*k.transmissionResolutionScale,w0.w*k.transmissionResolutionScale);let I0=k.getRenderTarget(),b0=k.getActiveCubeFace(),x0=k.getActiveMipmapLevel();if(k.setRenderTarget(C0),k.getClearColor(g0),GJ=k.getClearAlpha(),GJ<1)k.setClearColor(16777215,0.5);if(k.clear(),AJ)B0.render(i);let o0=k.toneMapping;k.toneMapping=_8;let ZJ=c.viewport;if(c.viewport!==void 0)c.viewport=void 0;if(A.setupLightsView(c),QJ===!0)Z0.setGlobalState(k.clippingPlanes,c);if(k8(M,i,c),s.updateMultisampleRenderTarget(C0),s.updateRenderTargetMipmap(C0),qJ.has("WEBGL_multisampled_render_to_texture")===!1){let y0=!1;for(let LJ=0,jJ=h.length;LJ<jJ;LJ++){let _J=h[LJ],{object:RJ,geometry:cJ,material:S0,group:l}=_J;if(S0.side===yJ&&RJ.layers.test(c.layers)){let t=S0.side;S0.side=Z8,S0.needsUpdate=!0,l9(RJ,i,c,cJ,S0,l),S0.side=t,S0.needsUpdate=!0,y0=!0}}if(y0===!0)s.updateMultisampleRenderTarget(C0),s.updateRenderTargetMipmap(C0)}if(k.setRenderTarget(I0,b0,x0),k.setClearColor(g0,GJ),ZJ!==void 0)c.viewport=ZJ;k.toneMapping=o0}function k8(M,h,i){let c=h.isScene===!0?h.overrideMaterial:null;for(let u=0,C0=M.length;u<C0;u++){let w0=M[u],{object:I0,geometry:b0,group:x0}=w0,o0=w0.material;if(o0.allowOverride===!0&&c!==null)o0=c;if(I0.layers.test(i.layers))l9(I0,h,i,b0,o0,x0)}}function l9(M,h,i,c,u,C0){if(j!==null&&u.isNodeMaterial)j.setObject(M,u);if(M.onBeforeRender(k,h,i,c,u,C0),M.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),u.onBeforeRender(k,h,i,c,M,C0),u.transparent===!0&&u.side===yJ&&u.forceSinglePass===!1)u.side=Z8,u.needsUpdate=!0,k.renderBufferDirect(i,h,c,u,M,C0),u.side=H6,u.needsUpdate=!0,k.renderBufferDirect(i,h,c,u,M,C0),u.side=yJ;else k.renderBufferDirect(i,h,c,u,M,C0);M.onAfterRender(k,h,i,c,u,C0)}function B8(M,h,i){if(h.isScene!==!0)h=bJ;let c=f.get(M),u=A.state.lights,C0=A.state.shadowsArray,w0=u.state.version,I0=g.getParameters(M,u.state,C0,h,i,A.state.lightProbeGridArray),b0=g.getProgramCacheKey(I0),x0=c.programs;c.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?h.environment:null,c.fog=h.fog;let o0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(c.envMap=U0.get(M.envMap||c.environment,o0),c.envMapRotation=c.environment!==null&&M.envMap===null?h.environmentRotation:M.envMapRotation,x0===void 0)M.addEventListener("dispose",gJ),x0=new Map,c.programs=x0;let ZJ=x0.get(b0);if(ZJ!==void 0){if(c.currentProgram===ZJ&&c.lightsStateVersion===w0)return U7(M,I0),ZJ}else{if(I0.uniforms=g.getUniforms(M),j!==null&&M.isNodeMaterial)j.build(M,i,I0);M.onBeforeCompile(I0,k),ZJ=g.acquireProgram(I0,b0),x0.set(b0,ZJ),c.uniforms=I0.uniforms}let y0=c.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)y0.clippingPlanes=Z0.uniform;if(U7(M,I0),c.needsLights=q7(M),c.lightsStateVersion=w0,c.needsLights)y0.ambientLightColor.value=u.state.ambient,y0.lightProbe.value=u.state.probe,y0.sunLights.value=u.state.sun,y0.sunLightShadows.value=u.state.sunShadow,y0.directionalLights.value=u.state.directional,y0.directionalLightShadows.value=u.state.directionalShadow,y0.spotLights.value=u.state.spot,y0.spotLightShadows.value=u.state.spotShadow,y0.rectAreaLights.value=u.state.rectArea,y0.ltc_1.value=u.state.rectAreaLTC1,y0.ltc_2.value=u.state.rectAreaLTC2,y0.pointLights.value=u.state.point,y0.pointLightShadows.value=u.state.pointShadow,y0.hemisphereLights.value=u.state.hemi,y0.sunShadowMatrix.value=u.state.sunShadowMatrix,y0.sunShadowCascade.value=u.state.sunShadowCascade,y0.directionalShadowMatrix.value=u.state.directionalShadowMatrix,y0.spotLightMatrix.value=u.state.spotLightMatrix,y0.spotLightMap.value=u.state.spotLightMap,y0.pointShadowMatrix.value=u.state.pointShadowMatrix;return c.lightProbeGrid=A.state.lightProbeGridArray.length>0,c.currentProgram=ZJ,c.uniformsList=null,ZJ}function E9(M){if(M.uniformsList===null){let h=M.currentProgram.getUniforms();M.uniformsList=$7.seqWithValue(h.seq,M.uniforms)}return M.uniformsList}function U7(M,h){let i=f.get(M);i.outputColorSpace=h.outputColorSpace,i.batching=h.batching,i.batchingColor=h.batchingColor,i.instancing=h.instancing,i.instancingColor=h.instancingColor,i.instancingMorph=h.instancingMorph,i.skinning=h.skinning,i.morphTargets=h.morphTargets,i.morphNormals=h.morphNormals,i.morphColors=h.morphColors,i.morphTargetsCount=h.morphTargetsCount,i.numClippingPlanes=h.numClippingPlanes,i.numIntersection=h.numClipIntersection,i.vertexAlphas=h.vertexAlphas,i.vertexTangents=h.vertexTangents,i.toneMapping=h.toneMapping}function H7(M,h){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;T.setFromMatrixPosition(h.matrixWorld);for(let i=0,c=M.length;i<c;i++){let u=M[i];if(u.texture!==null&&u.boundingBox.containsPoint(T))return u}return null}function u9(M,h,i,c,u){if(h.isScene!==!0)h=bJ;s.resetTextureUnits();let C0=h.fog,w0=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?h.environment:null,I0=n===null?k.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:EJ.workingColorSpace,b0=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap,x0=U0.get(c.envMap||w0,b0),o0=c.vertexColors===!0&&!!i.attributes.color&&i.attributes.color.itemSize===4,ZJ=!!i.attributes.tangent&&(!!c.normalMap||c.anisotropy>0),y0=!!i.morphAttributes.position,LJ=!!i.morphAttributes.normal,jJ=!!i.morphAttributes.color,_J=_8;if(c.toneMapped){if(n===null||n.isXRRenderTarget===!0)_J=k.toneMapping}let RJ=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,cJ=RJ!==void 0?RJ.length:0,S0=f.get(c),l=A.state.lights;if(QJ===!0){if(NJ===!0||M!==r){let f0=M===r&&c.id===H0;Z0.setState(c,M,f0)}}let t=!1;if(c.version===S0.__version){if(S0.needsLights&&S0.lightsStateVersion!==l.state.version)t=!0;else if(S0.outputColorSpace!==I0)t=!0;else if(u.isBatchedMesh&&S0.batching===!1)t=!0;else if(!u.isBatchedMesh&&S0.batching===!0)t=!0;else if(u.isBatchedMesh&&S0.batchingColor===!0&&u._colorsTexture===null)t=!0;else if(u.isBatchedMesh&&S0.batchingColor===!1&&u._colorsTexture!==null)t=!0;else if(u.isInstancedMesh&&S0.instancing===!1)t=!0;else if(!u.isInstancedMesh&&S0.instancing===!0)t=!0;else if(u.isSkinnedMesh&&S0.skinning===!1)t=!0;else if(!u.isSkinnedMesh&&S0.skinning===!0)t=!0;else if(u.isInstancedMesh&&S0.instancingColor===!0&&u.instanceColor===null)t=!0;else if(u.isInstancedMesh&&S0.instancingColor===!1&&u.instanceColor!==null)t=!0;else if(u.isInstancedMesh&&S0.instancingMorph===!0&&u.morphTexture===null)t=!0;else if(u.isInstancedMesh&&S0.instancingMorph===!1&&u.morphTexture!==null)t=!0;else if(S0.envMap!==x0)t=!0;else if(c.fog===!0&&S0.fog!==C0)t=!0;else if(S0.numClippingPlanes!==void 0&&(S0.numClippingPlanes!==Z0.numPlanes||S0.numIntersection!==Z0.numIntersection))t=!0;else if(S0.vertexAlphas!==o0)t=!0;else if(S0.vertexTangents!==ZJ)t=!0;else if(S0.morphTargets!==y0)t=!0;else if(S0.morphNormals!==LJ)t=!0;else if(S0.morphColors!==jJ)t=!0;else if(S0.toneMapping!==_J)t=!0;else if(S0.morphTargetsCount!==cJ)t=!0;else if(!!S0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)t=!0}else t=!0,S0.__version=c.version;let k0=S0.currentProgram;if(t===!0){if(k0=B8(c,h,u),j&&c.isNodeMaterial)j.onUpdateProgram(c,k0,S0)}let j0=!1,V0=!1,c0=!1,R0=k0.getUniforms(),z0=S0.uniforms;if(I.useProgram(k0.program))j0=!0,V0=!0,c0=!0;if(c.id!==H0)H0=c.id,V0=!0;if(S0.needsLights){let f0=H7(A.state.lightProbeGridArray,u);if(S0.lightProbeGrid!==f0)S0.lightProbeGrid=f0,V0=!0}if(j0||r!==M){if(I.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();R0.setValue(v,"projectionMatrix",M.projectionMatrix),R0.setValue(v,"viewMatrix",M.matrixWorldInverse);let UJ=R0.map.cameraPosition;if(UJ!==void 0)UJ.setValue(v,HJ.setFromMatrixPosition(M.matrixWorld));if(VJ.logarithmicDepthBuffer)R0.setValue(v,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial)R0.setValue(v,"isOrthographic",M.isOrthographicCamera===!0);if(r!==M)r=M,V0=!0,c0=!0}if(S0.needsLights){if(l.state.sunShadowMap.length>0)R0.setValue(v,"sunShadowMap",l.state.sunShadowMap,s);if(l.state.directionalShadowMap.length>0)R0.setValue(v,"directionalShadowMap",l.state.directionalShadowMap,s);if(l.state.spotShadowMap.length>0)R0.setValue(v,"spotShadowMap",l.state.spotShadowMap,s);if(l.state.pointShadowMap.length>0)R0.setValue(v,"pointShadowMap",l.state.pointShadowMap,s)}if(u.isSkinnedMesh){R0.setOptional(v,u,"bindMatrix"),R0.setOptional(v,u,"bindMatrixInverse");let f0=u.skeleton;if(f0){if(f0.boneTexture===null)f0.computeBoneTexture();R0.setValue(v,"boneTexture",f0.boneTexture,s)}}if(u.isBatchedMesh){if(R0.setOptional(v,u,"batchingTexture"),R0.setValue(v,"batchingTexture",u._matricesTexture,s),R0.setOptional(v,u,"batchingIdTexture"),R0.setValue(v,"batchingIdTexture",u._indirectTexture,s),R0.setOptional(v,u,"batchingColorTexture"),u._colorsTexture!==null)R0.setValue(v,"batchingColorTexture",u._colorsTexture,s)}let m0=i.morphAttributes;if(m0.position!==void 0||m0.normal!==void 0||m0.color!==void 0)F0.update(u,i,k0);if(V0||S0.receiveShadow!==u.receiveShadow)S0.receiveShadow=u.receiveShadow,R0.setValue(v,"receiveShadow",u.receiveShadow);if((c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial)&&c.envMap===null&&h.environment!==null)z0.envMapIntensity.value=h.environmentIntensity;if(z0.dfgLUT!==void 0)z0.dfgLUT.value=vq();if(V0){if(R0.setValue(v,"toneMappingExposure",k.toneMappingExposure),S0.needsLights)N7(z0,c0);if(C0&&c.fog===!0)Q0.refreshFogUniforms(z0,C0);if(Q0.refreshMaterialUniforms(z0,c,O0,a,A.state.transmissionRenderTarget[M.id]),S0.needsLights&&S0.lightProbeGrid){let f0=S0.lightProbeGrid;z0.probesSH.value=f0.texture,z0.probesMin.value.copy(f0.boundingBox.min),z0.probesMax.value.copy(f0.boundingBox.max),z0.probesResolution.value.copy(f0.resolution)}$7.upload(v,E9(S0),z0,s)}if(c.isShaderMaterial&&c.uniformsNeedUpdate===!0)$7.upload(v,E9(S0),z0,s),c.uniformsNeedUpdate=!1;if(c.isSpriteMaterial)R0.setValue(v,"center",u.center);if(R0.setValue(v,"modelViewMatrix",u.modelViewMatrix),R0.setValue(v,"normalMatrix",u.normalMatrix),R0.setValue(v,"modelMatrix",u.matrixWorld),c.uniformsGroups!==void 0){let f0=c.uniformsGroups;for(let UJ=0,IJ=f0.length;UJ<IJ;UJ++){let a0=f0[UJ];G0.update(a0,k0),G0.bind(a0,k0)}}return k0}function N7(M,h){M.ambientLightColor.needsUpdate=h,M.lightProbe.needsUpdate=h,M.sunLights.needsUpdate=h,M.sunLightShadows.needsUpdate=h,M.directionalLights.needsUpdate=h,M.directionalLightShadows.needsUpdate=h,M.pointLights.needsUpdate=h,M.pointLightShadows.needsUpdate=h,M.spotLights.needsUpdate=h,M.spotLightShadows.needsUpdate=h,M.rectAreaLights.needsUpdate=h,M.hemisphereLights.needsUpdate=h}function q7(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return e},this.getRenderTarget=function(){return n},this.setRenderTargetTextures=function(M,h,i){let c=f.get(M);if(c.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,c.__autoAllocateDepthBuffer===!1)c.__useRenderToTexture=!1;f.get(M.texture).__webglTexture=h,f.get(M.depthTexture).__webglTexture=c.__autoAllocateDepthBuffer?void 0:i,c.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,h){let i=f.get(M);i.__webglFramebuffer=h,i.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(M,h=0,i=0){n=M,m=h,e=i;let c=null,u=!1,C0=!1;if(M){let I0=f.get(M);if(I0.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(v.FRAMEBUFFER,I0.__webglFramebuffer),K0.copy(M.viewport),N0.copy(M.scissor),l0=M.scissorTest,I.viewport(K0),I.scissor(N0),I.setScissorTest(l0),H0=-1;return}else if(I0.__webglFramebuffer===void 0)s.setupRenderTarget(M);else if(I0.__hasExternalTextures)s.rebindTextures(M,f.get(M.texture).__webglTexture,f.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let o0=M.depthTexture;if(I0.__boundDepthTexture!==o0){if(o0!==null&&f.has(o0)&&(M.width!==o0.image.width||M.height!==o0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(M)}}let b0=M.texture;if(b0.isData3DTexture||b0.isDataArrayTexture||b0.isCompressedArrayTexture)C0=!0;let x0=f.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(x0[h]))c=x0[h][i];else c=x0[h];u=!0}else if(M.samples>0&&s.useMultisampledRTT(M)===!1)c=f.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(x0))c=x0[i];else c=x0;K0.copy(M.viewport),N0.copy(M.scissor),l0=M.scissorTest}else K0.copy(T0).multiplyScalar(O0).floor(),N0.copy(h0).multiplyScalar(O0).floor(),l0=CJ;if(i!==0)c=y;if(I.bindFramebuffer(v.FRAMEBUFFER,c))I.drawBuffers(M,c);if(I.viewport(K0),I.scissor(N0),I.setScissorTest(l0),u){let I0=f.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+h,I0.__webglTexture,i)}else if(C0){let I0=h;for(let b0=0;b0<M.textures.length;b0++){let x0=f.get(M.textures[b0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+b0,x0.__webglTexture,i,I0)}}else if(M!==null&&i!==0){let I0=f.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,I0.__webglTexture,i)}H0=-1};function A6(M){let h=f.get(M);if(h.__readFormat!==M.format||h.__readType!==M.type)h.__readFormat=M.format,h.__readType=M.type,h.__formatReadable=VJ.textureFormatReadable(M.format),h.__typeReadable=VJ.textureTypeReadable(M.type);return h}if(this.readRenderTargetPixels=function(M,h,i,c,u,C0,w0,I0=0){if(!(M&&M.isWebGLRenderTarget)){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let b0=f.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&w0!==void 0)b0=b0[w0];if(b0){I.bindFramebuffer(v.FRAMEBUFFER,b0);try{let x0=M.textures[I0],o0=x0.format,ZJ=x0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+I0);let y0=A6(x0);if(y0.__formatReadable===!1){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(y0.__typeReadable===!1){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=M.width-c&&(i>=0&&i<=M.height-u))v.readPixels(h,i,c,u,d.convert(o0),d.convert(ZJ),C0)}finally{let x0=n!==null?f.get(n).__webglFramebuffer:null;I.bindFramebuffer(v.FRAMEBUFFER,x0)}}},this.readRenderTargetPixelsAsync=async function(M,h,i,c,u,C0,w0,I0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let b0=f.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&w0!==void 0)b0=b0[w0];if(b0)if(h>=0&&h<=M.width-c&&(i>=0&&i<=M.height-u)){I.bindFramebuffer(v.FRAMEBUFFER,b0);let x0=M.textures[I0],o0=x0.format,ZJ=x0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+I0);let y0=A6(x0);if(y0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(y0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let LJ=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,LJ),v.bufferData(v.PIXEL_PACK_BUFFER,C0.byteLength,v.STREAM_READ),v.readPixels(h,i,c,u,d.convert(o0),d.convert(ZJ),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let jJ=n!==null?f.get(n).__webglFramebuffer:null;I.bindFramebuffer(v.FRAMEBUFFER,jJ);let _J=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await SW(v,_J,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,LJ),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,C0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(LJ),v.deleteSync(_J),C0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,h=null,i=0){let c=Math.pow(2,-i),u=Math.floor(M.image.width*c),C0=Math.floor(M.image.height*c),w0=h!==null?h.x:0,I0=h!==null?h.y:0;s.setTexture2D(M,0),v.copyTexSubImage2D(v.TEXTURE_2D,i,0,0,w0,I0,u,C0),I.unbindTexture()},this.copyTextureToTexture=function(M,h,i=null,c=null,u=0,C0=0){let w0,I0,b0,x0,o0,ZJ,y0,LJ,jJ,_J=M.isCompressedTexture?M.mipmaps[C0]:M.image;if(i!==null)w0=i.max.x-i.min.x,I0=i.max.y-i.min.y,b0=i.isBox3?i.max.z-i.min.z:1,x0=i.min.x,o0=i.min.y,ZJ=i.isBox3?i.min.z:0;else{let z0=Math.pow(2,-u);if(w0=Math.floor(_J.width*z0),I0=Math.floor(_J.height*z0),M.isDataArrayTexture)b0=_J.depth;else if(M.isData3DTexture)b0=Math.floor(_J.depth*z0);else b0=1;x0=0,o0=0,ZJ=0}if(c!==null)y0=c.x,LJ=c.y,jJ=c.z;else y0=0,LJ=0,jJ=0;let RJ=d.convert(h.format),cJ=d.convert(h.type),S0;if(h.isData3DTexture)s.setTexture3D(h,0),S0=v.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)s.setTexture2DArray(h,0),S0=v.TEXTURE_2D_ARRAY;else s.setTexture2D(h,0),S0=v.TEXTURE_2D;I.activeTexture(v.TEXTURE0),I.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,h.flipY),I.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),I.pixelStorei(v.UNPACK_ALIGNMENT,h.unpackAlignment);let l=I.getParameter(v.UNPACK_ROW_LENGTH),t=I.getParameter(v.UNPACK_IMAGE_HEIGHT),k0=I.getParameter(v.UNPACK_SKIP_PIXELS),j0=I.getParameter(v.UNPACK_SKIP_ROWS),V0=I.getParameter(v.UNPACK_SKIP_IMAGES);I.pixelStorei(v.UNPACK_ROW_LENGTH,_J.width),I.pixelStorei(v.UNPACK_IMAGE_HEIGHT,_J.height),I.pixelStorei(v.UNPACK_SKIP_PIXELS,x0),I.pixelStorei(v.UNPACK_SKIP_ROWS,o0),I.pixelStorei(v.UNPACK_SKIP_IMAGES,ZJ);let c0=M.isDataArrayTexture||M.isData3DTexture,R0=h.isDataArrayTexture||h.isData3DTexture;if(M.isDepthTexture){let z0=f.get(M),m0=f.get(h),f0=f.get(z0.__renderTarget),UJ=f.get(m0.__renderTarget);I.bindFramebuffer(v.READ_FRAMEBUFFER,f0.__webglFramebuffer),I.bindFramebuffer(v.DRAW_FRAMEBUFFER,UJ.__webglFramebuffer);for(let IJ=0;IJ<b0;IJ++){if(c0)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,f.get(M).__webglTexture,u,ZJ+IJ),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,f.get(h).__webglTexture,C0,jJ+IJ);v.blitFramebuffer(x0,o0,w0,I0,y0,LJ,w0,I0,v.DEPTH_BUFFER_BIT,v.NEAREST)}I.bindFramebuffer(v.READ_FRAMEBUFFER,null),I.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(u!==0||M.isRenderTargetTexture||f.has(M)){let z0=f.get(M),m0=f.get(h);I.bindFramebuffer(v.READ_FRAMEBUFFER,p),I.bindFramebuffer(v.DRAW_FRAMEBUFFER,S);for(let f0=0;f0<b0;f0++){if(c0)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,z0.__webglTexture,u,ZJ+f0);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,z0.__webglTexture,u);if(R0)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,m0.__webglTexture,C0,jJ+f0);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,m0.__webglTexture,C0);if(u!==0)v.blitFramebuffer(x0,o0,w0,I0,y0,LJ,w0,I0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(R0)v.copyTexSubImage3D(S0,C0,y0,LJ,jJ+f0,x0,o0,w0,I0);else v.copyTexSubImage2D(S0,C0,y0,LJ,x0,o0,w0,I0)}I.bindFramebuffer(v.READ_FRAMEBUFFER,null),I.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(R0)if(M.isDataTexture||M.isData3DTexture)v.texSubImage3D(S0,C0,y0,LJ,jJ,w0,I0,b0,RJ,cJ,_J.data);else if(h.isCompressedArrayTexture)v.compressedTexSubImage3D(S0,C0,y0,LJ,jJ,w0,I0,b0,RJ,_J.data);else v.texSubImage3D(S0,C0,y0,LJ,jJ,w0,I0,b0,RJ,cJ,_J);else if(M.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,C0,y0,LJ,w0,I0,RJ,cJ,_J.data);else if(M.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,C0,y0,LJ,_J.width,_J.height,RJ,_J.data);else v.texSubImage2D(v.TEXTURE_2D,C0,y0,LJ,w0,I0,RJ,cJ,_J);if(I.pixelStorei(v.UNPACK_ROW_LENGTH,l),I.pixelStorei(v.UNPACK_IMAGE_HEIGHT,t),I.pixelStorei(v.UNPACK_SKIP_PIXELS,k0),I.pixelStorei(v.UNPACK_SKIP_ROWS,j0),I.pixelStorei(v.UNPACK_SKIP_IMAGES,V0),C0===0&&h.generateMipmaps)v.generateMipmap(S0);I.unbindTexture()},this.initRenderTarget=function(M){if(f.get(M).__webglFramebuffer===void 0)s.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)s.setTextureCube(M,0);else if(M.isData3DTexture)s.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)s.setTexture2DArray(M,0);else s.setTexture2D(M,0);I.unbindTexture()},this.resetState=function(){m=0,e=0,n=null,I.reset(),Y0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return o$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=EJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=EJ._getUnpackColorSpace()}}var kX={type:"change"},uZ={type:"start"},IX={type:"end"},kQ=new U9,BX=new O8,bq=Math.cos(70*s0.DEG2RAD),uJ=new C,X8=2*Math.PI,BJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lZ=0.000001;class cZ extends DQ{constructor(J,Q=null){super(J,Q);if(this.state=BJ.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Z9.ROTATE,MIDDLE:Z9.DOLLY,RIGHT:Z9.PAN},this.touches={ONE:K9.ROTATE,TWO:K9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new D8,this._lastTargetPosition=new C,this._quat=new D8().setFromUnitVectors(J.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new t6,this._sphericalDelta=new t6,this._scale=1,this._panOffset=new C,this._rotateStart=new A0,this._rotateEnd=new A0,this._rotateDelta=new A0,this._panStart=new A0,this._panEnd=new A0,this._panDelta=new A0,this._dollyStart=new A0,this._dollyEnd=new A0,this._dollyDelta=new A0,this._dollyDirection=new C,this._mouse=new A0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xq.bind(this),this._onPointerDown=hq.bind(this),this._onPointerUp=gq.bind(this),this._onContextMenu=nq.bind(this),this._onMouseWheel=dq.bind(this),this._onKeyDown=lq.bind(this),this._onTouchStart=uq.bind(this),this._onTouchMove=cq.bind(this),this._onMouseDown=pq.bind(this),this._onMouseMove=mq.bind(this),this._interceptControlDown=sq.bind(this),this._interceptControlUp=iq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=BJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kX),this.update(),this.state=BJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(uJ.copy(Q).sub(this.target),uJ.applyQuaternion(this._quat),this._spherical.setFromVector3(uJ),this.autoRotate&&this.state===BJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=X8;else if($>Math.PI)$-=X8;if(Z<-Math.PI)Z+=X8;else if(Z>Math.PI)Z-=X8;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(uJ.setFromSpherical(this._spherical),uJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(uJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=uJ.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),K=!!Y}else if(this.object.isOrthographicCamera){let X=new C(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=Y!==this.object.zoom;let U=new C(this._mouse.x,this._mouse.y,0);U.unproject(this.object),this.object.position.sub(U).add(X),this.object.updateMatrixWorld(),W=uJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(kQ.origin.copy(this.object.position),kQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kQ.direction))<bq)this.object.lookAt(this.target);else BX.setFromNormalAndCoplanarPoint(this.object.up,this.target),kQ.intersectPlane(BX,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>lZ||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lZ||this._lastTargetPosition.distanceToSquared(this.target)>lZ)return this.dispatchEvent(kX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return X8/60*this.autoRotateSpeed*J;else return X8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){uJ.setFromMatrixColumn(Q,0),uJ.multiplyScalar(-J),this._panOffset.add(uJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)uJ.setFromMatrixColumn(Q,1);else uJ.setFromMatrixColumn(Q,0),uJ.crossVectors(this.object.up,uJ);uJ.multiplyScalar(J),this._panOffset.add(uJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;uJ.copy(Z).sub(this.target);let K=uJ.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/$.clientHeight,this.object.matrix),this._panUp(2*Q*K/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,K=Q-$.top,W=$.width,X=$.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(X8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(X8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-X8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),K=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(X8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(X8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new A0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function hq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function xq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function gq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(IX),this.state=BJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function pq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Z9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=BJ.DOLLY;break;case Z9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=BJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=BJ.ROTATE}break;case Z9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=BJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=BJ.PAN}break;default:this.state=BJ.NONE}if(this.state!==BJ.NONE)this.dispatchEvent(uZ)}function mq(J){switch(this.state){case BJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case BJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case BJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function dq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==BJ.NONE)return;J.preventDefault(),this.dispatchEvent(uZ),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(IX)}function lq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function uq(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case K9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=BJ.TOUCH_ROTATE;break;case K9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=BJ.TOUCH_PAN;break;default:this.state=BJ.NONE}break;case 2:switch(this.touches.TWO){case K9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=BJ.TOUCH_DOLLY_PAN;break;case K9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=BJ.TOUCH_DOLLY_ROTATE;break;default:this.state=BJ.NONE}break;default:this.state=BJ.NONE}if(this.state!==BJ.NONE)this.dispatchEvent(uZ)}function cq(J){switch(this._trackPointer(J),this.state){case BJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case BJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case BJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case BJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=BJ.NONE}}function nq(J){if(this.enabled===!1)return;J.preventDefault()}function sq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function iq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function N9(J,Q,$=1,Z=1,K=!0){let W=document.createElement("canvas");W.width=J,W.height=J;let X=W.getContext("2d");Q(X,J);let Y=new r8(W);return Y.wrapS=W9,Y.wrapT=W9,Y.repeat.set($,Z),Y.colorSpace=K?F6:o8,Y.needsUpdate=!0,Y}function zX(){let J=N9(256,(z,D)=>{z.fillStyle="#c86446",z.fillRect(0,0,D,D);let k=16,x=12,j=D/k,y=D/x;for(let p=0;p<k;p++)for(let S=0;S<x;S++){let m=(Math.sin(p*3.1+S*7.7)*0.5+0.5)*22-11,e=Math.min(255,Math.max(0,202+m)),n=Math.min(255,Math.max(0,102+m*0.7)),H0=Math.min(255,Math.max(0,72+m*0.5));z.fillStyle=`rgb(${e|0},${n|0},${H0|0})`,z.fillRect(S*y+1,p*j+1,y-2,j-2),z.fillStyle="rgba(70, 25, 15, 0.22)",z.fillRect(S*y,p*j+j-2,y,2)}},3,3,!0),Q=N9(256,(z,D)=>{z.fillStyle="#808080",z.fillRect(0,0,D,D);let k=16,x=12,j=D/k,y=D/x;for(let p=0;p<k;p++)for(let S=0;S<x;S++){let m=z.createLinearGradient(0,p*j,0,(p+1)*j);m.addColorStop(0,"#d8d8d8"),m.addColorStop(0.8,"#707070"),m.addColorStop(1,"#303030"),z.fillStyle=m,z.fillRect(S*y+1,p*j,y-2,j)}},3,3,!1),$=new d0({map:J,bumpMap:Q,bumpScale:0.04,roughness:0.68,metalness:0.05}),Z=N9(256,(z,D)=>{z.fillStyle="#8d9aa6",z.fillRect(0,0,D,D);let k=24,x=D/k;for(let j=0;j<k;j++)z.fillStyle=j%2===0?"rgba(255,255,255,0.06)":"rgba(30,45,60,0.06)",z.fillRect(j*x,0,x*0.7,D),z.fillStyle="rgba(220,230,240,0.22)",z.fillRect(j*x,0,1.5,D);for(let j=0;j<D;j+=24)z.fillStyle="rgba(40,55,70,0.12)",z.fillRect(0,j,D,1.5)},2,1,!0),K=new d0({map:Z,bumpMap:Z,bumpScale:0.025,roughness:0.46,metalness:0.28}),W=N9(256,(z,D)=>{z.fillStyle="#d98f76",z.fillRect(0,0,D,D);for(let k=0;k<D;k+=16){z.fillStyle=k%32===0?"rgba(238, 198, 172, 0.22)":"rgba(182, 96, 74, 0.16)",z.fillRect(0,k,D,8);for(let x=0;x<D;x+=28){let j=(k%32===0?0:14)+x;z.strokeStyle="rgba(115, 58, 44, 0.14)",z.strokeRect(j%D,k,28,16)}}},2,2,!0),X=new d0({map:W,bumpMap:W,bumpScale:0.02,roughness:0.76,metalness:0.03}),Y=N9(256,(z,D)=>{z.fillStyle="#ece5d8",z.fillRect(0,0,D,D);for(let k=0;k<D;k+=18)for(let x=0;x<D;x+=32){let j=(k/18%2===0?0:16)+x,y=(Math.sin(x*1.7+k*2.3)*0.5+0.5)*10-5;z.fillStyle=`rgb(${235+y|0}, ${228+y|0}, ${214+y|0})`,z.fillRect(j%D,k,31,17)}},2,2,!0),U=new d0({map:Y,bumpMap:Y,bumpScale:0.018,roughness:0.7,metalness:0.04}),H=N9(256,(z,D)=>{z.fillStyle="#c8baa5",z.fillRect(0,0,D,D);for(let k=0;k<D;k+=14)for(let x=0;x<D;x+=24){let j=(k/14%2===0?0:12)+x,y=Math.sin(x*3.1+k*1.9)*12;z.fillStyle=`rgb(${198+y|0}, ${182+y|0}, ${160+y|0})`,z.fillRect(j%D+1,k+1,22,12)}},3,3,!0),q=new d0({map:H,bumpMap:H,bumpScale:0.035,roughness:0.75,metalness:0.04}),F=N9(256,(z,D)=>{z.fillStyle="#d5ccb9",z.fillRect(0,0,D,D);for(let k=0;k<D;k+=12)for(let x=0;x<D;x+=14){let j=(Math.cos(x*2.5+k*3.7)*0.5+0.5)*14-7;z.fillStyle=`rgb(${212+j|0}, ${203+j|0}, ${186+j|0})`,z.beginPath(),z.roundRect(x+1,k+1,11,9,2),z.fill()}},8,8,!0),N=new d0({map:F,bumpMap:F,bumpScale:0.018,roughness:0.78,metalness:0.05}),O=N9(256,(z,D)=>{z.fillStyle="#555b64",z.fillRect(0,0,D,D);for(let k=0;k<900;k++){let x=k*73%D,j=k*137%D;z.fillStyle=k%2===0?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.045)",z.fillRect(x,j,3,3)}},6,6,!0),R=new d0({map:O,bumpMap:O,bumpScale:0.012,roughness:0.72,metalness:0.08}),_=new d0({color:14242623,roughness:0.42,metalness:0.35}),G=new d0({color:14476008,roughness:0.35,metalness:0.55}),E=new d0({color:16041298,roughness:0.22,metalness:0.85,emissive:new _0(5585416),emissiveIntensity:0.25}),P=[],T=[],B=[],A=[],w=[16769436,16764016,16773314,16758876];for(let z=0;z<16;z++){let D=new _0(w[z%w.length]),k=new d0({color:3886430,roughness:0.2,metalness:0.4,emissive:D,emissiveIntensity:0});P.push({mat:k,phase:z/16*0.65,warmColor:D})}return{roadMaterial:R,cobbleMaterial:N,terracottaRoof:$,leadDome:K,hagiaSophiaWall:X,limestoneWall:U,galataStone:q,bridgeRed:_,bridgeCable:G,goldFinial:E,puddleMeshes:B,snowCapMeshes:A,windowMaterials:P,beaconMaterials:T,updateEnvironment({nightFactor:z,wetness:D,snowAmount:k,time:x}){let j=s0.clamp(D,0,1);R.roughness=s0.lerp(0.72,0.16,j),R.metalness=s0.lerp(0.08,0.42,j),R.color.setHex(16777215).lerp(new _0(11385028),j*0.35),N.roughness=s0.lerp(0.78,0.22,j),N.metalness=s0.lerp(0.05,0.32,j),$.roughness=s0.lerp(0.68,0.32,j);for(let p=0;p<B.length;p++){let S=B[p];S.visible=j>0.03;let m=s0.smoothstep(j,0.02,0.85);S.scale.set(m,1,m)}let y=s0.clamp(k,0,1);for(let p=0;p<A.length;p++){let S=A[p];S.visible=y>0.02,S.scale.setScalar(s0.lerp(0.01,1,y))}for(let p=0;p<P.length;p++){let S=P[p],m=s0.smoothstep(z,0.18+S.phase*0.45,0.35+S.phase*0.45),e=0.92+0.08*Math.sin(x*(1.2+p%5*0.3)+p*2.1);S.mat.emissiveIntensity=m*1.45*e,S.mat.color.setHex(3886430).lerp(S.warmColor,m*0.85)}for(let p=0;p<T.length;p++){let S=T[p],m=0.75+0.25*Math.sin(x*2.6+p*0.7);S.emissiveIntensity=s0.lerp(0.15,2.2*m,z)}}}}function BQ(J=new Date){try{let Q=new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Istanbul",weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(J),$={};for(let H of Q)$[H.type]=H.value;let Z=parseInt($.hour||"9",10)%24,K=parseInt($.minute||"16",10),W=parseInt($.second||"0",10),X=Z+K/60+W/3600,Y=`${($.weekday||"FRI").toUpperCase()}, ${($.month||"OCT").toUpperCase()} ${$.day||"16"}`,U=`${String(Z).padStart(2,"0")}:${String(K).padStart(2,"0")}`;return{hourDecimal:X,dateFormatted:Y,timeFormatted:U}}catch{let Q=J.getHours(),$=J.getMinutes();return{hourDecimal:Q+$/60,dateFormatted:"FRI, OCT 16",timeFormatted:`${String(Q).padStart(2,"0")}:${String($).padStart(2,"0")}`}}}function oq(J,Q){if(J===45||J===48)return{condition:"fog",label:"Bosphorus Mist"};if(J>=71&&J<=86)return{condition:"snow",label:"Light Snow"};if(J>=51&&J<=67||J>=80&&J<=82||J>=95)return{condition:"rain",label:"Istanbul Rain"};if(Q>=26)return{condition:"windy",label:"Poyraz Breeze"};if(J===3)return{condition:"cloudy",label:"Overcast"};if(J===1||J===2)return{condition:"partly_cloudy",label:"Partly Cloudy"};return{condition:"clear",label:"Clear Sky"}}async function nZ(){try{let J=new AbortController,Q=setTimeout(()=>J.abort(),4500),$="https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FIstanbul",Z=await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FIstanbul",{signal:J.signal});if(clearTimeout(Q),!Z.ok)throw Error("Weather status "+Z.status);let K=await Z.json(),W=Math.round(Number(K?.current?.temperature_2m??18)),X=Number(K?.current?.weather_code??1),Y=Number(K?.current?.wind_speed_10m??14),U=oq(X,Y);return{temperatureC:W,condition:U.condition,windSpeedKmh:Y,label:U.label,isLive:!0}}catch{return{temperatureC:18,condition:"partly_cloudy",windSpeedKmh:15,label:"Mild Bosphorus Breeze",isLive:!0}}}function AX(J,Q){let $=Q?'<path d="M38 18a12 12 0 1 0 12 16 10 10 0 0 1-12-16z" fill="#F6D365" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/>':`<circle cx="32" cy="28" r="10.5" fill="#FFB830" stroke="#2C3545" stroke-width="2.2"/>
       <g stroke="#FFB830" stroke-width="2.4" stroke-linecap="round">
         <line x1="32" y1="11" x2="32" y2="14"/>
         <line x1="32" y1="42" x2="32" y2="45"/>
         <line x1="15" y1="28" x2="18" y2="28"/>
         <line x1="46" y1="28" x2="49" y2="28"/>
         <line x1="20" y1="16" x2="22.2" y2="18.2"/>
         <line x1="41.8" y1="37.8" x2="44" y2="40"/>
         <line x1="44" y1="16" x2="41.8" y2="18.2"/>
         <line x1="22.2" y1="37.8" x2="20" y2="40"/>
       </g>`,Z='<path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/>';switch(J){case"clear":return`<svg viewBox="0 0 64 56" width="52" height="46" aria-hidden="true">${$}</svg>`;case"partly_cloudy":return`<svg viewBox="0 0 64 56" width="52" height="46" aria-hidden="true">
        <g transform="translate(-6,-4) scale(0.9)">${$}</g>
        <g transform="translate(2,3)"><path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/></g>
      </svg>`;case"cloudy":return`<svg viewBox="0 0 64 56" width="52" height="46" aria-hidden="true">
        <g transform="translate(-5,-3) scale(0.92)" opacity="0.7"><path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/></g>
        <g transform="translate(3,3)"><path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/></g>
      </svg>`;case"rain":return`<svg viewBox="0 0 64 56" width="52" height="46" aria-hidden="true">
        <g transform="translate(0,-3)"><path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/></g>
        <g stroke="#4DA6FF" stroke-width="2.4" stroke-linecap="round">
          <line x1="24" y1="43" x2="21" y2="51"/>
          <line x1="33" y1="43" x2="30" y2="51"/>
          <line x1="42" y1="43" x2="39" y2="51"/>
        </g>
      </svg>`;case"windy":return`<svg viewBox="0 0 64 56" width="52" height="46" aria-hidden="true">
        <g transform="translate(-2,-4) scale(0.9)"><path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/></g>
        <g fill="none" stroke="#3D6B8E" stroke-width="2.3" stroke-linecap="round">
          <path d="M12 42h30a4 4 0 1 0-4-4"/>
          <path d="M16 48h22a3.5 3.5 0 1 1-3.5 3.5"/>
        </g>
      </svg>`;case"fog":return`<svg viewBox="0 0 64 56" width="52" height="46" aria-hidden="true">
        <g transform="translate(0,-5) scale(0.94)" opacity="0.88"><path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/></g>
        <g stroke="#5A6B7C" stroke-width="2.4" stroke-linecap="round">
          <line x1="16" y1="41" x2="48" y2="41"/>
          <line x1="20" y1="46" x2="44" y2="46"/>
          <line x1="14" y1="51" x2="42" y2="51"/>
        </g>
      </svg>`;case"snow":return`<svg viewBox="0 0 64 56" width="52" height="46" aria-hidden="true">
        <g transform="translate(0,-3)"><path d="M22 41h22a8.5 8.5 0 0 0 1.2-16.9A11.5 11.5 0 0 0 23 21.5 9.2 9.2 0 0 0 22 41z" fill="#FFFFFF" stroke="#2C3545" stroke-width="2.2" stroke-linejoin="round"/></g>
        <g fill="#70B5F9">
          <circle cx="24" cy="46" r="2.3"/>
          <circle cx="33" cy="49" r="2.3"/>
          <circle cx="42" cy="46" r="2.3"/>
        </g>
      </svg>`}}class sZ{state;scene;sunLight;hemiLight;ambientLight;fog;rainLines;rainPositions;splashGroup;splashes=[];snowPoints;snowPositions;cloudGroup;clouds=[];liveWeatherData={temperatureC:18,condition:"partly_cloudy",windSpeedKmh:14,label:"Mild Bosphorus Breeze",isLive:!0};constructor(J){this.scene=J;let Q=BQ();this.state={hourDecimal:Q.hourDecimal,timePreset:"live",weatherMode:"live",currentWeather:this.liveWeatherData,nightFactor:0,sunsetFactor:0,wetness:0,cloudiness:0.25,fogStrength:0,snowAmount:0,windStrength:0.55,bgHex:new _0(15328472)},this.hemiLight=new HQ(16775403,10203329,1.15),this.hemiLight.position.set(0,30,0),J.add(this.hemiLight),this.ambientLight=new FQ(16774370,0.45),J.add(this.ambientLight),this.sunLight=new EQ(16773590,1.9),this.sunLight.position.set(18,26,14),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=68;let $=18.5;this.sunLight.shadow.camera.left=-$,this.sunLight.shadow.camera.right=$,this.sunLight.shadow.camera.top=$,this.sunLight.shadow.camera.bottom=-$,this.sunLight.shadow.bias=-0.0005,this.sunLight.shadow.normalBias=0.02,J.add(this.sunLight),this.fog=new c6(15328472,0.0025),J.fog=this.fog;let Z=420;this.rainPositions=new Float32Array(Z*6);for(let N=0;N<Z;N++){let O=(Math.random()-0.5)*26,R=Math.random()*16+1,_=(Math.random()-0.5)*26,G=N*6;this.rainPositions[G]=O,this.rainPositions[G+1]=R,this.rainPositions[G+2]=_,this.rainPositions[G+3]=O-0.18,this.rainPositions[G+4]=R-0.85,this.rainPositions[G+5]=_-0.1}let K=new fJ;K.setAttribute("position",new $8(this.rainPositions,3));let W=new s6({color:12115199,transparent:!0,opacity:0.55});this.rainLines=new JQ(K,W),this.rainLines.visible=!1,J.add(this.rainLines),this.splashGroup=new JJ;let X=new _9(0.05,0.11,12);X.rotateX(-Math.PI/2);let Y=new W8({color:14216959,transparent:!0,opacity:0.45,side:yJ});for(let N=0;N<45;N++){let O=new o(X,Y);O.position.set((Math.random()-0.5)*22,0.25,(Math.random()-0.5)*22),this.splashGroup.add(O),this.splashes.push({mesh:O,phase:Math.random()})}this.splashGroup.visible=!1,J.add(this.splashGroup);let U=320;this.snowPositions=new Float32Array(U*3);for(let N=0;N<U;N++)this.snowPositions[N*3]=(Math.random()-0.5)*26,this.snowPositions[N*3+1]=Math.random()*15+0.5,this.snowPositions[N*3+2]=(Math.random()-0.5)*26;let H=new fJ;H.setAttribute("position",new $8(this.snowPositions,3));let q=new i6({color:16777215,size:0.16,transparent:!0,opacity:0.85});this.snowPoints=new QQ(H,q),this.snowPoints.visible=!1,J.add(this.snowPoints),this.cloudGroup=new JJ;let F=new mJ(1,14,12);for(let N=0;N<6;N++){let O=new JJ,R=[],_=4+N%3;for(let T=0;T<_;T++){let B=new d0({color:16777215,roughness:0.92,metalness:0,transparent:!0,opacity:0.82});R.push(B);let A=new o(F,B);A.position.set((T-_/2)*0.72,T%2*0.18,Math.sin(T*2.1)*0.35);let w=0.65+(T===1||T===2?0.3:0);A.scale.set(w,0.42,0.58),A.castShadow=!0,O.add(A)}let G=-11+N*4.4,E=-9+N%3*6.5-2,P=9.2+N%2*1.1;O.position.set(G,P,E),this.cloudGroup.add(O),this.clouds.push({group:O,baseX:G,baseZ:E,baseY:P,speed:0.22+N%3*0.08,mats:R})}J.add(this.cloudGroup)}setLiveWeather(J){if(this.liveWeatherData=J,this.state.weatherMode==="live")this.state.currentWeather=J}cycleWeatherMode(){let J=["live","clear","rain","partly_cloudy","fog","windy","snow"],Q=(J.indexOf(this.state.weatherMode)+1)%J.length,$=J[Q];if(this.state.weatherMode=$,$==="live")return this.state.currentWeather=this.liveWeatherData,`Live Weather (${this.liveWeatherData.label})`;let Z={clear:{temperatureC:21,condition:"clear",windSpeedKmh:11,label:"Sunny Istanbul",isLive:!1},partly_cloudy:{temperatureC:18,condition:"partly_cloudy",windSpeedKmh:14,label:"Partly Cloudy",isLive:!1},cloudy:{temperatureC:15,condition:"cloudy",windSpeedKmh:18,label:"Overcast Sky",isLive:!1},rain:{temperatureC:13,condition:"rain",windSpeedKmh:22,label:"Bosphorus Showers",isLive:!1},fog:{temperatureC:12,condition:"fog",windSpeedKmh:8,label:"Golden Horn Mist",isLive:!1},windy:{temperatureC:16,condition:"windy",windSpeedKmh:34,label:"Strong Poyraz Wind",isLive:!1},snow:{temperatureC:1,condition:"snow",windSpeedKmh:16,label:"Winter Snowfall",isLive:!1}};return this.state.currentWeather=Z[$],Z[$].label}cycleTimePreset(){let J=["live","morning","afternoon","sunset","evening","night"],Q=(J.indexOf(this.state.timePreset)+1)%J.length;return this.state.timePreset=J[Q],{live:"Live Istanbul Time",morning:"Morning (09:15)",afternoon:"Afternoon (14:30)",sunset:"Golden Sunset (18:15)",evening:"Blue Hour (19:45)",night:"Istanbul Night (22:30)"}[this.state.timePreset]}update(J,Q){let Z=BQ().hourDecimal;if(this.state.timePreset==="morning")Z=9.25;else if(this.state.timePreset==="afternoon")Z=14.5;else if(this.state.timePreset==="sunset")Z=18.25;else if(this.state.timePreset==="evening")Z=19.75;else if(this.state.timePreset==="night")Z=22.5;this.state.hourDecimal=Z;let K=0,W=0;if(Z<5.5||Z>=20.5)K=1;else if(Z>=5.5&&Z<7.5)K=1-(Z-5.5)/2,W=Math.sin((Z-5.5)/2*Math.PI)*0.75;else if(Z>=17.2&&Z<20.5)K=(Z-17.2)/3.3,W=Math.sin((Z-17.2)/3.3*Math.PI);let X=Math.min(1,J*3);this.state.nightFactor=s0.lerp(this.state.nightFactor,K,X),this.state.sunsetFactor=s0.lerp(this.state.sunsetFactor,W,X);let Y=this.state.currentWeather.condition,U=Y==="rain"?1:0,H=Y==="snow"?1:0,q=Y==="fog"?1:Y==="rain"?0.35:0,F=Y==="rain"||Y==="cloudy"||Y==="snow"?1:Y==="partly_cloudy"||Y==="windy"?0.55:Y==="fog"?0.7:0.12,N=Y==="windy"?1.95:Y==="rain"?1.25:s0.clamp(this.state.currentWeather.windSpeedKmh/24,0.35,1.5);this.state.wetness=s0.lerp(this.state.wetness,U,X*0.8),this.state.snowAmount=s0.lerp(this.state.snowAmount,H,X*0.6),this.state.fogStrength=s0.lerp(this.state.fogStrength,q,X),this.state.cloudiness=s0.lerp(this.state.cloudiness,F,X),this.state.windStrength=s0.lerp(this.state.windStrength,N,X);let O=(Z-6)/12*Math.PI,R=Math.max(0.28,Math.sin(Math.max(0.15,Math.min(Math.PI-0.15,O)))),_=Z/24*Math.PI*2-Math.PI*0.65;this.sunLight.position.set(Math.cos(_)*22,14+R*15,Math.sin(_)*22);let G=new _0(15394007),E=new _0(14015972),P=new _0(15254960),T=new _0(1910842),B=G.clone();B.lerp(E,this.state.cloudiness*0.65+this.state.fogStrength*0.35),B.lerp(P,this.state.sunsetFactor*0.75),B.lerp(T,this.state.nightFactor),this.state.bgHex.copy(B),this.scene.background=B,this.fog.color.copy(B),this.fog.density=s0.lerp(0.0022,0.022,this.state.fogStrength);let A=new _0(16774108),w=new _0(16751194),z=new _0(7114441),D=A.clone().lerp(w,this.state.sunsetFactor).lerp(z,this.state.nightFactor);this.sunLight.color.copy(D);let k=1-this.state.cloudiness*0.38;this.sunLight.intensity=s0.lerp(1.95*k,0.55,this.state.nightFactor),this.hemiLight.intensity=s0.lerp(1.18,0.48,this.state.nightFactor),this.hemiLight.color.copy(D).lerp(new _0(16777215),0.35),this.hemiLight.groundColor.setHex(9413557).lerp(new _0(1581618),this.state.nightFactor);for(let y=0;y<this.clouds.length;y++){let p=this.clouds[y],S=y<Math.ceil(this.state.cloudiness*this.clouds.length);p.group.visible=S&&this.state.cloudiness>0.16;let m=28,e=(p.baseX+Q*p.speed*this.state.windStrength+14)%m-14;p.group.position.x=e,p.group.position.y=p.baseY+Math.sin(Q*0.8+y)*0.12;let n=s0.lerp(0.65,1.15,this.state.cloudiness);p.group.scale.setScalar(n);for(let H0 of p.mats)H0.color.setHex(16777215).lerp(new _0(10136250),this.state.wetness*0.45),H0.color.lerp(new _0(16760736),this.state.sunsetFactor*0.45),H0.color.lerp(new _0(3820646),this.state.nightFactor*0.72)}let x=Y==="rain"||this.state.wetness>0.35;if(this.rainLines.visible=x,this.splashGroup.visible=x,x){let y=this.rainPositions,p=0.14*this.state.windStrength;for(let S=0;S<y.length;S+=6){if(y[S]-=p*J*18,y[S+1]-=J*21,y[S+1]<0.2)y[S]=(Math.random()-0.5)*25,y[S+1]=14+Math.random()*4,y[S+2]=(Math.random()-0.5)*25;y[S+3]=y[S]-p*1.3,y[S+4]=y[S+1]-0.85,y[S+5]=y[S+2]-0.08}this.rainLines.geometry.attributes.position.needsUpdate=!0;for(let S of this.splashes){S.phase=(S.phase+J*2.2)%1;let m=0.3+S.phase*1.4;S.mesh.scale.set(m,1,m)}}let j=Y==="snow"||this.state.snowAmount>0.25;if(this.snowPoints.visible=j,j){let y=this.snowPositions;for(let p=0;p<y.length;p+=3)if(y[p]+=Math.sin(Q*1.5+p)*J*0.5,y[p+1]-=J*2.8,y[p+2]+=Math.cos(Q*1.2+p)*J*0.4,y[p+1]<0.2)y[p]=(Math.random()-0.5)*25,y[p+1]=14+Math.random()*3,y[p+2]=(Math.random()-0.5)*25;this.snowPoints.geometry.attributes.position.needsUpdate=!0}}}function _X(J,Q){let $=new JJ;J.add($);let Z=[],K=[],W=[],X=[],Y=[],U=[],H=[],q=0;function F(l,t,k0,j0,V0,c0=0.14){let R0={id:t,title:k0,subtitle:j0,category:V0,root:l,baseY:l.position.y,hoverLift:c0};l.traverse((z0)=>{z0.userData.interactiveMeta=R0}),Z.push(R0)}let N=new d0({color:16251903,roughness:0.85,metalness:0.05});function O(l,t,k0,j0,V0,c0=!0,R0=0.82){let z0=new JJ;z0.position.set(k0,j0,V0);let m0=new mJ(t,24,16,0,Math.PI*2,0,Math.PI*0.52),f0=new o(m0,Q.leadDome);f0.scale.y=R0,f0.castShadow=!0,f0.receiveShadow=!0,z0.add(f0);let UJ=new mJ(t*1.015,18,12,0,Math.PI*2,0,Math.PI*0.36),IJ=new o(UJ,N);if(IJ.scale.y=R0,IJ.position.y=0.01,IJ.visible=!1,z0.add(IJ),Q.snowCapMeshes.push(IJ),c0){let a0=new o(new FJ(0.015,0.028,t*0.42,8),Q.goldFinial);a0.position.y=t*R0+t*0.18,z0.add(a0);let MJ=new o(new a6(t*0.11,0.018,8,16,Math.PI*1.45),Q.goldFinial);MJ.position.y=t*R0+t*0.42,MJ.rotation.z=Math.PI*0.25,z0.add(MJ)}return l.add(z0),z0}function R(l,t,k0,j0,V0,c0,R0=2,z0=0.17){let m0=new JJ;m0.position.set(t,k0,j0);let f0=new o(new v0(z0*2.5,V0*0.2,z0*2.5),c0);f0.position.y=V0*0.1,f0.castShadow=!0,f0.receiveShadow=!0,m0.add(f0);let UJ=new o(new FJ(z0*0.78,z0,V0*0.65,14),c0);UJ.position.y=V0*0.2+V0*0.325,UJ.castShadow=!0,UJ.receiveShadow=!0,m0.add(UJ);for(let pJ=0;pJ<R0;pJ++){let Y8=V0*(0.48+pJ/Math.max(1,R0)*0.32),w8=new o(new FJ(z0*1.28,z0*1.05,0.12,16),Q.limestoneWall);w8.position.y=Y8,w8.castShadow=!0,m0.add(w8)}let IJ=V0*0.22,a0=new o(new eJ(z0*0.82,IJ,14),Q.leadDome);a0.position.y=V0*0.85+IJ*0.5,a0.castShadow=!0,m0.add(a0);let MJ=new o(new FJ(0.012,0.02,0.26,6),Q.goldFinial);return MJ.position.y=V0*0.85+IJ+0.12,m0.add(MJ),l.add(m0),m0}function _(l,t,k0,j0,V0=1){let c0=1.05*V0,R0=new o(new FJ(0.02*V0,0.025*V0,c0,8),Q.bridgeCable);R0.position.set(t,k0+c0*0.5,j0),l.add(R0);let z0=document.createElement("canvas");z0.width=128,z0.height=84;let m0=z0.getContext("2d");m0.fillStyle="#e30a17",m0.fillRect(0,0,128,84),m0.fillStyle="#ffffff",m0.beginPath(),m0.arc(48,42,20,0,Math.PI*2),m0.fill(),m0.fillStyle="#e30a17",m0.beginPath(),m0.arc(53,42,16,0,Math.PI*2),m0.fill(),m0.fillStyle="#ffffff",m0.beginPath(),m0.arc(74,42,6,0,Math.PI*2),m0.fill();let f0=new r8(z0);f0.colorSpace=F6;let UJ=0.52*V0,IJ=0.34*V0,a0=new R8(UJ,IJ,8,4);a0.translate(UJ*0.5,0,0);let MJ=new d0({map:f0,roughness:0.6,side:yJ}),pJ=new o(a0,MJ);pJ.position.set(t,k0+c0-IJ*0.55,j0),pJ.castShadow=!0,l.add(pJ);let Y8=a0.attributes.position;W.push({mesh:pJ,geo:a0,basePos:new Float32Array(Y8.array),phase:Math.random()*Math.PI*2})}let G=new d0({color:7032373,roughness:0.85}),E=new d0({color:3893573,roughness:0.78}),P=new d0({color:6065222,roughness:0.75}),T=new d0({color:13929275,roughness:0.75});function B(l,t,k0,j0="cypress",V0=1){let c0=new JJ;c0.position.set(l,t,k0);let R0=new o(new FJ(0.045*V0,0.07*V0,0.38*V0,7),G);if(R0.position.y=0.19*V0,R0.castShadow=!0,c0.add(R0),j0==="cypress"){let z0=new o(new eJ(0.22*V0,1.05*V0,9),E);z0.position.y=0.72*V0,z0.castShadow=!0,z0.receiveShadow=!0,c0.add(z0)}else{let z0=j0==="autumn"?T:P,m0=new o(new G6(0.34*V0,1),z0);m0.position.set(0,0.58*V0,0),m0.scale.set(1.1,0.88,1.1),m0.castShadow=!0,m0.receiveShadow=!0,c0.add(m0);let f0=new o(new G6(0.24*V0,1),z0);f0.position.set(0.14*V0,0.72*V0,0.1*V0),f0.castShadow=!0,c0.add(f0);let UJ=new o(new mJ(0.28*V0,10,8,0,Math.PI*2,0,Math.PI*0.45),N);UJ.position.set(0,0.68*V0,0),UJ.visible=!1,c0.add(UJ),Q.snowCapMeshes.push(UJ)}$.add(c0),K.push({mesh:c0,phase:(l*1.7+k0*2.3)%(Math.PI*2),baseRotZ:0,baseRotX:0})}let A=new d0({color:2897213,roughness:0.5,metalness:0.6});function w(l,t,k0){let j0=new JJ;j0.position.set(l,t,k0);let V0=new o(new FJ(0.025,0.035,0.68,8),A);V0.position.y=0.34,V0.castShadow=!0,j0.add(V0);let c0=new d0({color:16773836,emissive:new _0(16758861),emissiveIntensity:0,roughness:0.2});Y.push(c0);let R0=new o(new mJ(0.075,10,10),c0);R0.position.y=0.71,j0.add(R0),$.add(j0)}let z=new d0({color:6061209,roughness:0.05,metalness:0.88,transparent:!0,opacity:0.68});function D(l,t,k0,j0=0.55,V0=0.38,c0=0){let R0=new o6(1,18);R0.rotateX(-Math.PI/2);let z0=new o(R0,z);z0.position.set(l,t+0.012,k0),z0.scale.set(j0,1,V0),z0.rotation.y=c0,z0.visible=!1,$.add(z0),Q.puddleMeshes.push(z0)}let k=new d0({color:3291458,roughness:0.65,metalness:0.15}),x=new d0({color:14076856,roughness:0.72,metalness:0.05}),j=new d0({color:1460579,roughness:0.9}),y=new o(new v0(24.6,1.1,24.6),k);y.position.y=-0.62,y.receiveShadow=!0,y.castShadow=!0,$.add(y);let p=new o(new v0(24,0.32,24),x);p.position.y=-0.08,p.receiveShadow=!0,$.add(p);let S=new o(new R8(23.4,23.4),j);S.rotation.x=-Math.PI/2,S.position.y=0.02,$.add(S);let m=document.createElement("canvas");m.width=256,m.height=256;let e=m.getContext("2d");e.fillStyle="#8080ff",e.fillRect(0,0,256,256);for(let l=0;l<180;l++){let t=l*53%256,k0=l*97%256,j0=14+l%18,V0=e.createRadialGradient(t,k0,1,t,k0,j0);V0.addColorStop(0,"rgba(165, 165, 255, 0.35)"),V0.addColorStop(1,"rgba(128, 128, 255, 0)"),e.fillStyle=V0,e.beginPath(),e.arc(t,k0,j0,0,Math.PI*2),e.fill()}let n=new r8(m);n.wrapS=W9,n.wrapT=W9,n.repeat.set(7,7);let H0=new R8(23.2,23.2,56,56);H0.rotateX(-Math.PI/2);let r=new YQ({color:1931414,emissive:new _0(468278),emissiveIntensity:0.22,roughness:0.16,metalness:0.12,clearcoat:0.85,clearcoatRoughness:0.14,normalMap:n,normalScale:new A0(0.28,0.28),transparent:!0,opacity:0.91}),K0=new o(H0,r);K0.position.y=0.15,K0.receiveShadow=!0,$.add(K0);let N0=new Float32Array(H0.attributes.position.count);for(let l=0;l<N0.length;l++)N0[l]=H0.attributes.position.getY(l);let l0=new d0({color:8233821,roughness:0.86,metalness:0.02}),g0=new d0({color:7312465,roughness:0.88});function GJ(l,t,k0,j0,V0=0.44,c0=Q.cobbleMaterial){let R0=new JJ;R0.position.set(l,0,t);let z0=new o(new v0(k0,V0,j0),Q.limestoneWall);z0.position.y=V0*0.5,z0.castShadow=!0,z0.receiveShadow=!0,R0.add(z0);let m0=new o(new v0(k0-0.12,0.06,j0-0.12),c0);return m0.position.y=V0+0.02,m0.receiveShadow=!0,R0.add(m0),$.add(R0),R0}GJ(-4.4,6.4,14,9.8,0.44,Q.cobbleMaterial);let r0=new o(new v0(12.2,0.36,7.2),Q.cobbleMaterial);r0.position.set(-4.2,0.62,7.2),r0.castShadow=!0,r0.receiveShadow=!0,$.add(r0);let a=new o(new v0(3.4,0.08,5.4),l0);a.position.set(-3.4,0.82,7),a.receiveShadow=!0,$.add(a),GJ(-5.2,-6.2,12.4,9.2,0.44,Q.cobbleMaterial);let O0=new o(new v0(8.8,0.46,6.4),Q.cobbleMaterial);O0.position.set(-5.6,0.68,-6.6),O0.castShadow=!0,O0.receiveShadow=!0,$.add(O0);let q0=new o(new FJ(2.6,3.1,0.52,16),Q.limestoneWall);q0.position.set(-5.8,1.15,-6.8),q0.castShadow=!0,q0.receiveShadow=!0,$.add(q0),GJ(2.4,-7.8,4.6,6,0.44,Q.cobbleMaterial),GJ(8.6,0.6,5.6,20.4,0.44,Q.cobbleMaterial);let p0=new o(new v0(3.8,0.65,15.6),g0);p0.position.set(9.3,0.76,1.2),p0.castShadow=!0,p0.receiveShadow=!0,$.add(p0);let T0=new JJ;T0.position.set(-7.2,0.8,7.1),$.add(T0);let h0=new o(new v0(3.3,1.85,2.8),Q.hagiaSophiaWall);h0.position.y=0.925,h0.castShadow=!0,h0.receiveShadow=!0,T0.add(h0);let CJ=new o(new FJ(1.18,1.24,0.52,24),Q.hagiaSophiaWall);CJ.position.y=2.02,CJ.castShadow=!0,T0.add(CJ);let KJ=Q.windowMaterials[0].mat;for(let l=0;l<16;l++){let t=l/16*Math.PI*2,k0=new o(new v0(0.09,0.18,0.06),KJ);k0.position.set(Math.cos(t)*1.2,2.04,Math.sin(t)*1.2),k0.rotation.y=-t,T0.add(k0)}O(T0,1.16,0,2.24,0,!0,0.78),O(T0,0.76,-1.12,1.78,0,!1,0.75),O(T0,0.76,1.12,1.78,0,!1,0.75),O(T0,0.42,-1.45,1.45,-0.68,!1,0.72),O(T0,0.42,-1.45,1.45,0.68,!1,0.72),O(T0,0.42,1.45,1.45,-0.68,!1,0.72),O(T0,0.42,1.45,1.45,0.68,!1,0.72);for(let l of[-1,1])for(let t of[-0.85,0,0.85]){let k0=new o(new v0(0.36,1.65,0.45),Q.hagiaSophiaWall);k0.position.set(t,0.82,l*1.52),k0.castShadow=!0,k0.receiveShadow=!0,T0.add(k0)}R(T0,-1.85,0,-1.55,3.65,Q.hagiaSophiaWall,1,0.19),R(T0,1.85,0,-1.55,3.75,Q.limestoneWall,1,0.18),R(T0,-1.85,0,1.55,3.75,Q.limestoneWall,1,0.18),R(T0,1.85,0,1.55,3.85,Q.limestoneWall,2,0.2);let QJ=new JJ;QJ.position.set(0,0,-2.15);let NJ=new o(new FJ(0.45,0.48,0.38,8),Q.limestoneWall);NJ.position.y=0.19,NJ.castShadow=!0,QJ.add(NJ),O(QJ,0.46,0,0.38,0,!0,0.75),T0.add(QJ);let e0=new S9(16757844,0,6.5,1.6);e0.position.set(-7.2,2.6,7.1),$.add(e0),U.push(e0),F(T0,"hagia-sophia","Hagia Sophia • Ayasofya","537 AD Monumental Dome & Four Minarets","landmark",0.16);let HJ=new JJ;HJ.position.set(-0.2,0.8,7.5),$.add(HJ);let DJ=new o(new v0(2.85,1.72,2.75),Q.limestoneWall);DJ.position.y=0.86,DJ.castShadow=!0,DJ.receiveShadow=!0,HJ.add(DJ);let bJ=new o(new FJ(1.02,1.08,0.48,20),Q.limestoneWall);bJ.position.y=1.88,bJ.castShadow=!0,HJ.add(bJ),O(HJ,1,0,2.08,0,!0,0.84),O(HJ,0.66,-0.92,1.68,0,!1,0.8),O(HJ,0.66,0.92,1.68,0,!1,0.8),O(HJ,0.66,0,1.68,-0.92,!1,0.8),O(HJ,0.66,0,1.68,0.92,!1,0.8);for(let l of[-0.95,0.95])for(let t of[-0.95,0.95])O(HJ,0.38,l,1.62,t,!1,0.78);let AJ=-2.15,TJ=[{x:0,z:AJ-0.85,w:2.65,d:0.28},{x:-1.2,z:AJ,w:0.28,d:1.75},{x:1.2,z:AJ,w:0.28,d:1.75}];for(let l of TJ){let t=new o(new v0(l.w,0.72,l.d),Q.limestoneWall);t.position.set(l.x,0.36,l.z),t.castShadow=!0,t.receiveShadow=!0,HJ.add(t)}for(let l of[-0.9,-0.45,0,0.45,0.9])O(HJ,0.18,l,0.72,AJ-0.85,!1,0.8);R(HJ,-1.55,0,1.45,3.75,Q.limestoneWall,3,0.16),R(HJ,1.55,0,1.45,3.75,Q.limestoneWall,3,0.16),R(HJ,-1.55,0,-1.25,3.65,Q.limestoneWall,3,0.16),R(HJ,1.55,0,-1.25,3.65,Q.limestoneWall,3,0.16),R(HJ,-1.45,0,-3.05,3.15,Q.limestoneWall,2,0.15),R(HJ,1.45,0,-3.05,3.15,Q.limestoneWall,2,0.15);let v=new S9(16763514,0,6.5,1.6);v.position.set(-0.2,2.6,7.5),$.add(v),U.push(v),F(HJ,"blue-mosque","The Blue Mosque • Sultanahmet","1616 Imperial Mosque with Six Minarets & Courtyard","landmark",0.16);let SJ=new JJ;SJ.position.set(-3.4,0.84,7),$.add(SJ);let qJ=new o(new v0(0.42,0.36,0.42),Q.limestoneWall);qJ.position.set(0,0.18,0.8),qJ.castShadow=!0,SJ.add(qJ);let VJ=new o(new FJ(0.08,0.16,1.65,4),Q.hagiaSophiaWall);VJ.position.set(0,1.18,0.8),VJ.rotation.y=Math.PI*0.25,VJ.castShadow=!0,SJ.add(VJ);let I=new JJ;I.position.set(0,0,-1.2);let L=new o(new FJ(0.38,0.42,0.45,8),Q.limestoneWall);L.position.y=0.225,L.castShadow=!0,I.add(L),O(I,0.36,0,0.45,0,!0,0.85),SJ.add(I),F(SJ,"sultanahmet-square","Sultanahmet Meydanı • Hippodrome","Ancient Obelisk, German Fountain & Gardens","district",0.1);let f=new JJ;f.position.set(-5.8,1.4,-6.8),$.add(f);let s=new o(new FJ(0.96,1.04,0.55,24),Q.galataStone);s.position.y=0.275,s.castShadow=!0,s.receiveShadow=!0,f.add(s);let U0=new o(new FJ(0.88,0.94,2.75,24),Q.galataStone);U0.position.y=1.92,U0.castShadow=!0,U0.receiveShadow=!0,f.add(U0);for(let l of[1.2,2.15,2.95]){let t=new o(new FJ(0.93,0.93,0.08,24),Q.limestoneWall);t.position.y=l,f.add(t)}for(let l=0;l<2;l++){let t=l===0?1.65:2.55,k0=l===0?8:12;for(let j0=0;j0<k0;j0++){let V0=j0/k0*Math.PI*2,c0=Q.windowMaterials[(j0+l*3)%Q.windowMaterials.length].mat,R0=new o(new v0(0.14,0.24,0.06),c0);R0.position.set(Math.cos(V0)*0.9,t,Math.sin(V0)*0.9),R0.rotation.y=-V0,f.add(R0)}}let D0=new o(new FJ(1.08,0.92,0.22,24),Q.limestoneWall);D0.position.y=3.35,D0.castShadow=!0,f.add(D0);let M0=new o(new FJ(1.09,1.09,0.14,24,1,!0),A);M0.position.y=3.52,f.add(M0);let b=new o(new FJ(0.84,0.86,0.55,24),Q.galataStone);b.position.y=3.72,b.castShadow=!0,f.add(b);let g=new o(new eJ(0.92,1.75,24),Q.leadDome);g.position.y=4.86,g.castShadow=!0,f.add(g);let Q0=new o(new eJ(0.93,1.3,18),N);Q0.position.y=5.1,Q0.visible=!1,f.add(Q0),Q.snowCapMeshes.push(Q0);let W0=new o(new FJ(0.02,0.04,0.48,8),Q.goldFinial);W0.position.y=5.92,f.add(W0);let X0=new o(new mJ(0.065,10,10),Q.goldFinial);X0.position.y=5.82,f.add(X0);let Z0=new S9(16758876,0,7,1.5);Z0.position.set(-5.8,5.1,-6.8),$.add(Z0),U.push(Z0),F(f,"galata-tower","Galata Tower • Galata Kulesi","1348 Genoese Watchtower Overlooking the Golden Horn","landmark",0.18);let E0=new JJ;E0.position.set(2.9,0.14,3.2),$.add(E0);let B0=new o(new FJ(1.35,1.62,0.36,12),Q.galataStone);B0.position.y=0.16,B0.castShadow=!0,B0.receiveShadow=!0,E0.add(B0);let F0=new o(new FJ(1.12,1.18,0.32,8),Q.limestoneWall);F0.position.y=0.44,F0.castShadow=!0,F0.receiveShadow=!0,E0.add(F0);let V=new o(new v0(1.15,0.58,0.92),Q.limestoneWall);V.position.set(-0.1,0.85,0),V.castShadow=!0,E0.add(V);let $0=new o(new eJ(0.84,0.32,4),Q.terracottaRoof);$0.position.set(-0.1,1.3,0),$0.rotation.y=Math.PI*0.25,$0.castShadow=!0,E0.add($0);let d=new o(new FJ(0.34,0.42,1.65,8),Q.limestoneWall);d.position.set(0.18,1.42,0),d.castShadow=!0,E0.add(d);let Y0=new o(new FJ(0.46,0.38,0.14,8),A);Y0.position.set(0.18,2.28,0),E0.add(Y0);let G0=new d0({color:16771230,emissive:new _0(16760138),emissiveIntensity:0.4,roughness:0.15});Q.beaconMaterials.push(G0);let J0=new o(new FJ(0.28,0.28,0.28,8),G0);J0.position.set(0.18,2.48,0),E0.add(J0),O(E0,0.34,0.18,2.62,0,!1,1.05),_(E0,0.18,2.95,0,0.85);let L0=new JJ;L0.position.set(3.08,2.62,3.2),$.add(L0);let u0=new S9(16761446,0,5.5,1.6);u0.position.set(2.9,1.9,3.2),$.add(u0),U.push(u0),F(E0,"maidens-tower","Maiden's Tower • Kız Kulesi","Historic Bosphorus Islet Lighthouse & Watchtower","landmark",0.16);let $J=new JJ;$J.position.set(1.6,0.46,-5.6),$.add($J);let YJ=new o(new v0(2.1,0.22,1.85),Q.limestoneWall);YJ.position.y=0.11,YJ.castShadow=!0,YJ.receiveShadow=!0,$J.add(YJ);let gJ=new o(new v0(1.42,1.15,1.32),Q.limestoneWall);gJ.position.y=0.78,gJ.castShadow=!0,gJ.receiveShadow=!0,$J.add(gJ);let E8=Q.windowMaterials[3].mat;for(let l of[-1,1])for(let t of[-0.36,0,0.36]){let k0=new o(new v0(0.18,0.62,0.05),E8);k0.position.set(t,0.82,l*0.67),$J.add(k0);let j0=new o(new v0(0.05,0.62,0.18),E8);j0.position.set(l*0.72,0.82,t),$J.add(j0)}O($J,0.64,0,1.36,0,!0,0.92),R($J,-0.82,0.2,-0.72,2.65,Q.limestoneWall,1,0.12),R($J,0.82,0.2,-0.72,2.65,Q.limestoneWall,1,0.12),F($J,"ortakoy-mosque","Ortaköy Mosque • Büyük Mecidiye Camii","1854 Neo-Baroque Waterfront Mosque on the Bosphorus","landmark",0.15);let B6=new JJ;$.add(B6);let I6=new C(2.2,0.44,-8.2),p9=new C(8.6,0.44,-1.8),Y7=I6.clone().add(p9).multiplyScalar(0.5),m9=p9.clone().sub(I6),z6=m9.length(),p8=Math.atan2(m9.x,m9.z),iJ=new JJ;iJ.position.set(Y7.x,0,Y7.z),iJ.rotation.y=p8,B6.add(iJ);let M8=3.55,d9=6.95,k8=z6*0.34,l9=1.48,B8=z6+3.4,E9=new o(new v0(l9,0.22,B8),Q.roadMaterial);E9.position.y=M8,E9.castShadow=!0,E9.receiveShadow=!0,iJ.add(E9);let U7=new d0({color:15265266,roughness:0.4,metalness:0.4});for(let l of[-l9*0.51,l9*0.51]){let t=new o(new v0(0.08,0.28,B8),U7);t.position.set(l,M8+0.04,0),iJ.add(t)}let H7=new o(new v0(0.05,0.04,B8),new W8({color:16041298}));H7.position.set(0,M8+0.12,0),iJ.add(H7);for(let l of[-k8,k8]){for(let t of[-0.62,0.62]){let k0=new o(new v0(0.36,0.65,0.46),Q.limestoneWall);k0.position.set(t,0.32,l),k0.castShadow=!0,iJ.add(k0);let j0=new o(new v0(0.24,d9,0.28),Q.bridgeRed);j0.position.set(t,d9*0.5+0.4,l),j0.castShadow=!0,iJ.add(j0)}for(let t of[2.1,3.4,5.2,6.95]){let k0=new o(new v0(1.42,0.18,0.22),Q.bridgeRed);k0.position.set(0,t,l),k0.castShadow=!0,iJ.add(k0)}}let u9=28,N7=-B8*0.48,q7=B8*0.48;function A6(l){let t=Math.abs(l),k0=d9+0.4;if(t<=k8){let j0=l/k8;return M8+0.35+(k0-(M8+0.35))*(j0*j0)}else{let j0=(t-k8)/(B8*0.48-k8);return s0.lerp(k0,M8+0.15,Math.min(1,j0))}}for(let l of[-0.62,0.62]){let t=[];for(let c0=0;c0<=u9;c0++){let R0=s0.lerp(N7,q7,c0/u9);t.push(new C(l,A6(R0),R0))}let k0=new H9(t),j0=new r6(k0,36,0.042,8,!1),V0=new o(j0,Q.bridgeCable);V0.castShadow=!0,iJ.add(V0);for(let c0=1;c0<u9;c0++){let R0=s0.lerp(N7,q7,c0/u9),z0=A6(R0),m0=z0-(M8+0.1);if(m0>0.18){let IJ=new o(new FJ(0.012,0.012,m0,5),Q.bridgeCable);IJ.position.set(l,M8+0.1+m0*0.5,R0),iJ.add(IJ)}let f0=new d0({color:16734797,emissive:new _0(16726831),emissiveIntensity:0.2,roughness:0.2}),UJ=new o(new mJ(0.06,8,8),f0);UJ.position.set(l,z0+0.03,R0),iJ.add(UJ),H.push({mat:f0,idx:c0})}}F(B6,"bosphorus-bridge","15 July Martyrs Bridge • Boğaziçi Köprüsü","Intercontinental Suspension Bridge Linking Europe & Asia","bridge",0.08);let M=new JJ;M.position.set(-5.8,0,-0.2),$.add(M);let h=3.05,i=new o(new v0(1.52,0.18,h),Q.roadMaterial);i.position.y=0.62,i.castShadow=!0,i.receiveShadow=!0,M.add(i);let c=new o(new v0(1.38,0.36,h-0.3),Q.limestoneWall);c.position.y=0.36,M.add(c);for(let l=0;l<5;l++){let t=-1+l*0.5,k0=Q.windowMaterials[(l+6)%Q.windowMaterials.length].mat;for(let j0 of[-0.7,0.7]){let V0=new o(new v0(0.04,0.22,0.32),k0);V0.position.set(j0,0.38,t),M.add(V0)}}F(M,"galata-bridge","Galata Bridge • Galata Köprüsü","Bascule Bridge Spanning the Golden Horn","bridge",0.08);function u(l,t,k0,j0,V0,c0){let R0=new JJ;R0.position.set(l,0.44,t),R0.rotation.y=k0;let z0=new o(new v0(1.5,0.16,0.95),Q.limestoneWall);z0.position.set(0,-0.12,0.55),z0.receiveShadow=!0,R0.add(z0);let m0=new o(new v0(1.28,0.64,0.78),Q.limestoneWall);m0.position.set(0,0.32,0),m0.castShadow=!0,m0.receiveShadow=!0,R0.add(m0);let f0=new o(new v0(1.48,0.12,0.96),Q.leadDome);f0.position.set(0,0.68,0),f0.castShadow=!0,R0.add(f0),O(R0,0.28,0,0.72,0,!1,0.75),_(R0,0.55,0.72,0.32,0.65);let UJ=Q.windowMaterials[4].mat;for(let IJ of[-0.36,0,0.36]){let a0=new o(new v0(0.22,0.34,0.81),UJ);a0.position.set(IJ,0.3,0),R0.add(a0)}$.add(R0),F(R0,j0,V0,c0,"landmark",0.12)}u(-1.8,1.65,Math.PI,"eminonu-iskele","Eminönü Ferry Pier • Eminönü İskelesi","Historic Bosphorus & Golden Horn Ferry Terminal"),u(-1.2,-1.85,0,"karakoy-iskele","Karaköy Pier • Karaköy İskelesi","Gateway to Galata & Beyoğlu"),u(6.15,2.4,-Math.PI*0.5,"uskudar-iskele","Üsküdar Pier • Üsküdar İskelesi","Asian Shore Commuter Ferry Terminal");let w0=[15257512,14393724,12898752,14467768,15130312,13075051,11913171].map((l)=>new d0({color:l,roughness:0.76,metalness:0.03})),I0=new d0({color:13912894,roughness:0.65}),b0=new d0({color:3896214,roughness:0.65});function x0(l){let t=new JJ;if(t.position.set(l.x,l.y,l.z),l.rotY)t.rotation.y=l.rotY;let k0=w0[l.colorIdx%w0.length],j0=new o(new v0(l.w,l.h,l.d),k0);if(j0.position.y=l.h*0.5,j0.castShadow=!0,j0.receiveShadow=!0,t.add(j0),l.hasCumba){let f0=new o(new v0(l.w*0.56,l.h*0.52,0.24),k0);f0.position.set(0,l.h*0.65,l.d*0.5+0.09),f0.castShadow=!0,t.add(f0)}let V0=Math.min(0.45,Math.max(0.24,l.w*0.28)),c0=new o(new eJ(Math.hypot(l.w,l.d)*0.55,V0,4),Q.terracottaRoof);c0.position.y=l.h+V0*0.5-0.02,c0.rotation.y=Math.PI*0.25,c0.scale.set(l.w/Math.max(0.5,l.d),1,1),c0.castShadow=!0,c0.receiveShadow=!0,t.add(c0);let R0=new o(new eJ(Math.hypot(l.w,l.d)*0.54,V0*0.85,4),N);R0.position.y=l.h+V0*0.55,R0.rotation.y=Math.PI*0.25,R0.scale.set(l.w/Math.max(0.5,l.d),1,1),R0.visible=!1,t.add(R0),Q.snowCapMeshes.push(R0);let z0=Math.max(1,Math.round(l.h/0.42)),m0=Math.max(1,Math.round(l.w/0.36));for(let f0=0;f0<z0;f0++)for(let UJ=0;UJ<m0;UJ++){let IJ=(l.colorIdx*3+f0*5+UJ*2)%Q.windowMaterials.length,a0=Q.windowMaterials[IJ].mat,MJ=(UJ-(m0-1)*0.5)*(l.w/(m0+0.4)),pJ=0.24+f0*(l.h/(z0+0.2));for(let Y8 of[-1,1]){let w8=new o(new v0(0.13,0.19,0.04),a0);w8.position.set(MJ,pJ,Y8*(l.d*0.5+0.01)),t.add(w8)}}if(l.hasAwning){let f0=new JJ;f0.position.set(0,0.32,l.d*0.5+0.02);let UJ=new o(new v0(l.w*0.82,0.05,0.32),l.colorIdx%2===0?I0:b0);UJ.position.set(0,-0.04,0.14),UJ.rotation.x=0.32,f0.add(UJ),t.add(f0),X.push({mesh:f0,phase:l.x*1.9+l.z,baseRotX:0})}if($.add(t),l.districtLabel)F(t,`house-${l.x.toFixed(1)}-${l.z.toFixed(1)}`,l.districtLabel,"Traditional Istanbul Architecture & Rooftops","district",0.1)}let o0=new JJ;o0.position.set(-8.6,0.44,2.8),$.add(o0);let ZJ=new o(new v0(2.6,0.68,0.92),Q.limestoneWall);ZJ.position.set(0,0.34,0),ZJ.castShadow=!0,ZJ.receiveShadow=!0,o0.add(ZJ);let y0=new o(new v0(0.92,0.68,2.2),Q.limestoneWall);y0.position.set(-0.84,0.34,0.95),y0.castShadow=!0,y0.receiveShadow=!0,o0.add(y0);for(let l=0;l<4;l++)O(o0,0.32,-0.9+l*0.6,0.68,0,!1,0.72);for(let l=1;l<3;l++)O(o0,0.32,-0.84,0.68,l*0.68,!1,0.72);F(o0,"spice-bazaar","Spice Bazaar • Mısır Çarşısı","1660 Ottoman Covered Spice & Turkish Delight Market","landmark",0.12);let LJ=[{x:-10.1,y:0.8,z:9.8,w:1.15,h:1.1,d:0.95,colorIdx:0,hasCumba:!0,hasAwning:!0,districtLabel:"Sultanahmet Timber House"},{x:-8.6,y:0.8,z:10.1,w:1.1,h:1.25,d:0.9,colorIdx:1,hasCumba:!0,districtLabel:"Historic Ottoman Konak"},{x:-6.8,y:0.8,z:10.2,w:1.25,h:1.05,d:0.95,colorIdx:5,hasCumba:!0,hasAwning:!0},{x:-4.8,y:0.8,z:10.1,w:1.2,h:1.3,d:0.95,colorIdx:2,hasCumba:!1},{x:-2.8,y:0.8,z:10.2,w:1.15,h:1.15,d:0.92,colorIdx:3,hasCumba:!0,hasAwning:!0},{x:1.6,y:0.44,z:3.6,w:1.1,h:1.15,d:0.95,colorIdx:4,hasCumba:!0,districtLabel:"Cankurtaran Waterfront House"},{x:1.5,y:0.44,z:5.1,w:1.05,h:1.3,d:0.9,colorIdx:6,hasCumba:!0},{x:-5.2,y:0.44,z:2.7,w:1.2,h:1.1,d:0.9,colorIdx:0,hasAwning:!0,districtLabel:"Eminönü Merchant House"},{x:-3.6,y:0.44,z:2.7,w:1.1,h:1.25,d:0.88,colorIdx:1,hasCumba:!0,hasAwning:!0},{x:-10.2,y:0.44,z:5.2,w:1.1,h:1.2,d:1,colorIdx:3,hasCumba:!0}];for(let l of LJ)x0(l);let jJ=[{x:-8.6,y:0.9,z:-6.8,w:1.15,h:1.45,d:1,colorIdx:1,hasAwning:!0,districtLabel:"Galata Historic Apartment"},{x:-8.4,y:0.9,z:-5.1,w:1.1,h:1.35,d:0.95,colorIdx:4,hasCumba:!0,hasAwning:!0},{x:-8.2,y:0.9,z:-8.5,w:1.25,h:1.5,d:1.05,colorIdx:0,districtLabel:"Pera Levantine Building"},{x:-6.2,y:0.9,z:-9.4,w:1.35,h:1.55,d:1,colorIdx:3,hasAwning:!0,districtLabel:"Beyoğlu Istiklal Facade"},{x:-4.4,y:0.9,z:-9.3,w:1.2,h:1.4,d:0.95,colorIdx:2,hasCumba:!0},{x:-2.8,y:0.9,z:-8.2,w:1.15,h:1.35,d:0.95,colorIdx:5,hasAwning:!0},{x:-2.6,y:0.9,z:-6.4,w:1.1,h:1.45,d:0.92,colorIdx:6,districtLabel:"Serdar-ı Ekrem Townhouse"},{x:-3.2,y:0.44,z:-3.2,w:1.25,h:1.2,d:0.95,colorIdx:0,hasAwning:!0,districtLabel:"Karaköy Café Block"},{x:-7.8,y:0.44,z:-3.1,w:1.2,h:1.25,d:0.95,colorIdx:1,hasAwning:!0},{x:-10.1,y:0.44,z:-4.2,w:1.15,h:1.3,d:1,colorIdx:4},{x:-10.1,y:0.44,z:-7.6,w:1.15,h:1.4,d:1,colorIdx:5}];for(let l of jJ)x0(l);let _J=[{x:7.2,y:0.44,z:-4.5,w:1.1,h:1.15,d:1.1,rotY:-Math.PI*0.5,colorIdx:5,hasCumba:!0,districtLabel:"Bosphorus Waterfront Yalı"},{x:7.2,y:0.44,z:-2.8,w:1.05,h:1.05,d:1.05,rotY:-Math.PI*0.5,colorIdx:0,hasCumba:!0},{x:7.2,y:0.44,z:5.2,w:1.15,h:1.2,d:1.05,rotY:-Math.PI*0.5,colorIdx:6,hasCumba:!0,districtLabel:"Salacak Coastal Mansion"},{x:7.2,y:0.44,z:7,w:1.1,h:1.1,d:1,rotY:-Math.PI*0.5,colorIdx:1,hasCumba:!0,hasAwning:!0},{x:9.2,y:1.08,z:-5.8,w:1.2,h:1.25,d:1,rotY:-Math.PI*0.5,colorIdx:4,hasCumba:!0},{x:9.2,y:1.08,z:0.2,w:1.25,h:1.35,d:1.05,rotY:-Math.PI*0.5,colorIdx:2,districtLabel:"Üsküdar Hill Residence"},{x:9.2,y:1.08,z:3.8,w:1.2,h:1.25,d:1,rotY:-Math.PI*0.5,colorIdx:3,hasCumba:!0},{x:9.2,y:1.08,z:7.6,w:1.15,h:1.2,d:1,rotY:-Math.PI*0.5,colorIdx:0}];for(let l of _J)x0(l);function RJ(l,t,k0,j0,V0,c0=0){let R0=new o(new v0(j0,0.04,V0),Q.roadMaterial);R0.position.set(l,t,k0),R0.rotation.y=c0,R0.receiveShadow=!0,$.add(R0)}RJ(-4.4,0.46,3.85,11.8,0.92),RJ(-5.8,0.46,2.4,1.1,2.2),RJ(-5.8,0.46,-2.35,1.1,1.6),RJ(-4.6,0.46,-3.95,10.6,0.92),RJ(6.95,0.46,0.6,0.88,18.8),D(-3.4,0.85,5.6,0.65,0.42,0.3),D(-5.1,0.85,7.8,0.55,0.38,-0.4),D(-1.9,0.85,6.2,0.48,0.35,0.8),D(-5.8,1.41,-5.2,0.52,0.36,0.2),D(1.6,0.47,-7.1,0.5,0.36,-0.2),D(-2.4,0.47,2.1,0.58,0.4,0.1);let cJ=[[-5.1,0.8,5.4,"cypress",1.1],[-5.1,0.8,8.6,"cypress",1.15],[-9.2,0.8,6.2,"cypress",1.05],[-9.2,0.8,8.1,"plane",1.1],[-4.3,0.82,6.1,"plane",1],[-2.5,0.82,6.1,"autumn",0.95],[-4.3,0.82,8.1,"cypress",1.05],[-2.5,0.82,8.1,"plane",1.05],[1.8,0.8,8.8,"cypress",1.15],[1.7,0.8,6.4,"plane",1],[-4.1,1.4,-6.2,"cypress",1],[-7.3,1.4,-6.3,"plane",0.95],[-6.9,0.9,-4.6,"autumn",0.95],[-3.9,0.9,-5,"cypress",1.05],[-9.5,0.9,-9.2,"plane",1.1],[0.6,0.44,-7.2,"plane",1],[3.6,0.44,-6.4,"cypress",1.05],[8.4,1.08,-3.8,"cypress",1.15],[9.8,1.08,-2.2,"plane",1.15],[8.5,1.08,1.8,"cypress",1.1],[9.9,1.08,2.5,"autumn",1.05],[8.5,1.08,5.6,"plane",1.1],[9.8,1.08,6.2,"cypress",1.2],[9.6,1.08,-7.8,"cypress",1.1]];for(let[l,t,k0,j0,V0]of cJ)B(l,t,k0,j0,V0);let S0=[[-4.4,0.82,5.2],[-2.4,0.82,5.2],[-4.4,0.82,8.8],[-2.4,0.82,8.8],[-5.2,0.44,1.8],[-0.6,0.44,1.8],[-4.8,1.4,-5.4],[-6.8,1.4,-5.4],[1.2,0.44,-6.8],[6.4,0.44,1.2],[6.4,0.44,3.8]];for(let[l,t,k0]of S0)w(l,t,k0);return{rootGroup:$,waterMesh:K0,interactives:Z,swayingTrees:K,wavingFlags:W,flutterAwnings:X,streetLampMaterials:Y,uplightSpots:U,bridgeLightSpheres:H,maidenBeaconPivot:L0,triggerBridgeLightWave(){q=4.5},updateWaterAndFoliage(l,t,k0,j0){if(q>0)q=Math.max(0,q-0.03);n.offset.x=l*0.035*t,n.offset.y=l*0.024*t;let V0=H0.attributes.position,c0=0.032*s0.clamp(t,0.5,2.2);for(let a0=0;a0<V0.count;a0++){let MJ=V0.getX(a0),pJ=V0.getZ(a0),Y8=Math.sin(MJ*0.85+l*2.1*t)*0.6+Math.cos(pJ*0.95-l*1.7*t)*0.4;V0.setY(a0,N0[a0]+Y8*c0)}V0.needsUpdate=!0;let R0=new _0(1931414),z0=new _0(2578542),m0=new _0(731458);r.color.copy(R0).lerp(z0,j0*0.55).lerp(m0,k0*0.82);let f0=0.035*t;for(let a0=0;a0<K.length;a0++){let MJ=K[a0];MJ.mesh.rotation.z=MJ.baseRotZ+Math.sin(l*2.2*t+MJ.phase)*f0,MJ.mesh.rotation.x=MJ.baseRotX+Math.cos(l*1.7*t+MJ.phase)*f0*0.6}for(let a0=0;a0<W.length;a0++){let MJ=W[a0],pJ=MJ.geo.attributes.position;for(let Y8=0;Y8<pJ.count;Y8++){let w8=MJ.basePos[Y8*3],mX=MJ.basePos[Y8*3+1],dX=Math.sin(w8*10-l*(5.5*t)+MJ.phase)*(w8*0.22*t);pJ.setXYZ(Y8,w8,mX,dX)}pJ.needsUpdate=!0}for(let a0=0;a0<X.length;a0++){let MJ=X[a0];MJ.mesh.rotation.x=MJ.baseRotX+Math.sin(l*4.5*t+MJ.phase)*0.04*t}let UJ=s0.smoothstep(k0,0.15,0.55)*2.1;for(let a0 of Y)a0.emissiveIntensity=UJ;for(let a0 of U)a0.intensity=s0.smoothstep(k0,0.2,0.65)*4.2;let IJ=Math.max(k0,q>0?0.85:0);for(let a0 of H){let pJ=(0.98+(Math.sin(l*3.2-a0.idx*0.35)*0.5+0.5)*0.08+(q>0?l*0.25:0))%1;a0.mat.emissive.setHSL(pJ,0.92,0.55),a0.mat.color.setHSL(pJ,0.85,0.6),a0.mat.emissiveIntensity=s0.lerp(0.15,2.4+q*0.4,IJ)}L0.rotation.y=l*1.1}}}class PX{ctx=null;muted=!1;listeners=[];constructor(){if(typeof window<"u"){let J=()=>{if(!this.ctx){let Q=window.AudioContext||window.webkitAudioContext;if(Q)try{this.ctx=new Q}catch{}}else if(this.ctx.state==="suspended")this.ctx.resume().catch(()=>{})};window.addEventListener("pointerdown",J,{passive:!0})}}onEvent(J){this.listeners.push(J)}emit(J,Q,$=!1){for(let Z of this.listeners)Z(J,Q);if(this.muted||!this.ctx||this.ctx.state!=="running")return;try{let Z=this.ctx.currentTime,K=this.ctx.createGain();K.connect(this.ctx.destination);let W=$?0.045:0.015;if(J==="ferry_horn"){let X=this.ctx.createOscillator(),Y=this.ctx.createOscillator();X.type="triangle",Y.type="sine",X.frequency.setValueAtTime(130.8,Z),Y.frequency.setValueAtTime(196,Z),K.gain.setValueAtTime(0.0001,Z),K.gain.linearRampToValueAtTime(W,Z+0.12),K.gain.exponentialRampToValueAtTime(0.0001,Z+0.95),X.connect(K),Y.connect(K),X.start(Z),Y.start(Z),X.stop(Z+1),Y.stop(Z+1)}else if(J==="tram_bell")for(let X=0;X<2;X++){let Y=Z+X*0.14,U=this.ctx.createOscillator(),H=this.ctx.createGain();U.type="sine",U.frequency.setValueAtTime(1320,Y),H.gain.setValueAtTime(W*0.9,Y),H.gain.exponentialRampToValueAtTime(0.0001,Y+0.22),U.connect(H),H.connect(this.ctx.destination),U.start(Y),U.stop(Y+0.24)}else if(J==="landmark_chime"||J==="bridge_lights"){let X=this.ctx.createOscillator();X.type="sine",X.frequency.setValueAtTime(523.25,Z),X.frequency.exponentialRampToValueAtTime(659.25,Z+0.18),K.gain.setValueAtTime(W*0.8,Z),K.gain.exponentialRampToValueAtTime(0.0001,Z+0.35),X.connect(K),X.start(Z),X.stop(Z+0.38)}else if(J==="car_honk"){let X=this.ctx.createOscillator();X.type="sawtooth",X.frequency.setValueAtTime(340,Z),K.gain.setValueAtTime(W*0.5,Z),K.gain.exponentialRampToValueAtTime(0.0001,Z+0.16),X.connect(K),X.start(Z),X.stop(Z+0.18)}else if(J==="seagull_flock"){let X=this.ctx.createOscillator();X.type="sine",X.frequency.setValueAtTime(1600,Z),X.frequency.linearRampToValueAtTime(2100,Z+0.08),X.frequency.exponentialRampToValueAtTime(1150,Z+0.32),K.gain.setValueAtTime(0.0001,Z),K.gain.linearRampToValueAtTime(W*0.5,Z+0.05),K.gain.exponentialRampToValueAtTime(0.0001,Z+0.35),X.connect(K),X.start(Z),X.stop(Z+0.38)}}catch{}}}var q8=new PX;function CX(J,Q,$,Z){let K=new JJ;J.add(K);let W=null,X=7.5;function Y(b,g,Q0,W0,X0,Z0=0.1){let E0={id:g,title:Q0,subtitle:W0,category:X0,root:b,baseY:b.position.y,hoverLift:Z0};b.traverse((B0)=>{B0.userData.interactiveMeta=E0}),$.push(E0)}let U=new d0({color:16777215,emissive:new _0(16773565),emissiveIntensity:0.1,roughness:0.2}),H=new d0({color:16726832,emissive:new _0(16721435),emissiveIntensity:0.15,roughness:0.25}),q=new W8({color:16774084,transparent:!0,opacity:0,depthWrite:!1,side:yJ}),F=new d0({color:16250352,roughness:0.45}),N=new d0({color:1985851,roughness:0.55}),O=new d0({color:15906613,roughness:0.42}),R=new d0({color:2237995,roughness:0.5}),_=document.createElement("canvas");_.width=128,_.height=256;let G=_.getContext("2d"),E=G.createLinearGradient(64,10,64,250);E.addColorStop(0,"rgba(255,255,255,0.75)"),E.addColorStop(0.4,"rgba(225,245,255,0.35)"),E.addColorStop(1,"rgba(225,245,255,0)"),G.strokeStyle=E,G.lineWidth=10,G.beginPath(),G.moveTo(64,14),G.lineTo(18,240),G.moveTo(64,14),G.lineTo(110,240),G.stroke(),G.fillStyle=E,G.beginPath(),G.moveTo(64,18),G.lineTo(32,230),G.lineTo(96,230),G.closePath(),G.fill();let P=new r8(_),T=new W8({map:P,transparent:!0,opacity:0.65,depthWrite:!1}),B=new W8({color:15791352,transparent:!0,opacity:0.45});function A(b,g,Q0){let W0=new JJ;W0.position.y=0.16;let X0=new o(new v0(0.62,0.22,1.55),F);X0.position.y=0.11,X0.castShadow=!0,X0.receiveShadow=!0,W0.add(X0);let Z0=new o(new eJ(0.44,0.48,4),F);Z0.rotation.x=Math.PI*0.5,Z0.rotation.z=Math.PI*0.25,Z0.scale.set(1,1,0.36),Z0.position.set(0,0.11,0.98),Z0.castShadow=!0,W0.add(Z0);let E0=Z0.clone();E0.rotation.x=-Math.PI*0.5,E0.position.set(0,0.11,-0.98),W0.add(E0);let B0=new o(new v0(0.64,0.06,1.58),N);B0.position.y=0.04,W0.add(B0);let F0=new o(new v0(0.54,0.2,1.26),F);F0.position.y=0.3,F0.castShadow=!0,W0.add(F0);let V=new o(new v0(0.44,0.16,0.92),F);V.position.y=0.46,V.castShadow=!0,W0.add(V);let $0=Q.windowMaterials[1].mat,d=new o(new v0(0.56,0.09,1.12),$0);d.position.y=0.31,W0.add(d);let Y0=new o(new v0(0.46,0.08,0.78),$0);Y0.position.y=0.46,W0.add(Y0);let G0=new o(new FJ(0.085,0.095,0.34,12),O);G0.position.set(0,0.68,0.05),G0.castShadow=!0,W0.add(G0);let J0=new o(new FJ(0.088,0.088,0.08,12),R);J0.position.set(0,0.83,0.05),W0.add(J0);let L0=new R8(0.95,1.9);L0.rotateX(-Math.PI*0.5),L0.translate(0,0.01,-1.65);let u0=new o(L0,T);W0.add(u0);let $J=[];for(let YJ=0;YJ<4;YJ++){let gJ=new o(new mJ(0.06,8,8),B);gJ.position.set(0,0.9,0.05),W0.add(gJ),$J.push({mesh:gJ,age:YJ*0.25})}return K.add(W0),Y(W0,Q0,b,g,"ferry",0.1),{group:W0,wakeMesh:u0,smokePuffs:$J}}let w=[],z=A("Şehir Hatları Ferry • Moda","Eminönü ↔ Üsküdar Commuter Line","ferry-eminonu-uskudar");w.push({...z,waypoints:[new C(-1.8,0.16,0.65),new C(0.4,0.16,1.1),new C(2.8,0.16,1.65),new C(5.05,0.16,2.35)],currentSeg:0,t:0.15,speed:0.92,dockTimer:0,direction:1,name:"Eminönü–Üsküdar Ferry"});let D=A("Şehir Hatları Ferry • Paşabahçe","Karaköy ↔ Ortaköy Bosphorus Line","ferry-karakoy-ortakoy");w.push({...D,waypoints:[new C(-1.2,0.16,-0.8),new C(1.2,0.16,-1.6),new C(3.4,0.16,-3.4),new C(5.4,0.16,-5.8),new C(6.8,0.16,-8.2)],currentSeg:1,t:0.4,speed:0.98,dockTimer:0,direction:1,name:"Karaköy–Bosphorus Ferry"});let k=A("Şehir Hatları Ferry • Barış Manço","Kadıköy ↔ Beşiktaş Bosphorus Line","ferry-kadikoy-besiktas");w.push({...k,waypoints:[new C(4.3,0.16,9.2),new C(4.5,0.16,5.4),new C(4.2,0.16,0.8),new C(1.8,0.16,-3.5)],currentSeg:0,t:0.65,speed:0.88,dockTimer:0,direction:1,name:"Kadıköy–Beşiktaş Ferry"});let x=[],j=[3698596,13126449,2976335,13935475],y=[[new C(-4.2,0.15,-0.1),new C(-2.6,0.15,-0.3),new C(-0.2,0.15,0.1),new C(-2.4,0.15,0.4)],[new C(1.5,0.15,4.6),new C(3.8,0.15,4.8),new C(4.4,0.15,2.2),new C(1.6,0.15,2.1)],[new C(2.8,0.15,-2.5),new C(5.6,0.15,-4.6),new C(4.8,0.15,-7.8),new C(2.6,0.15,-4.8)],[new C(3.2,0.15,6.2),new C(5.2,0.15,7.8),new C(5.4,0.15,9.8),new C(3,0.15,8.5)]];for(let b=0;b<y.length;b++){let g=new JJ,Q0=new d0({color:j[b%j.length],roughness:0.55}),W0=new o(new v0(0.26,0.11,0.62),Q0);W0.position.y=0.06,W0.castShadow=!0,g.add(W0);let X0=new o(new v0(0.18,0.12,0.24),F);X0.position.set(0,0.16,-0.04),g.add(X0);let Z0=new R8(0.45,0.85);Z0.rotateX(-Math.PI*0.5),Z0.translate(0,0.01,-0.62);let E0=new o(Z0,T);g.add(E0),K.add(g),Y(g,`bosphorus-boat-${b}`,"Bosphorus Taka • Fishing Boat","Traditional Wooden Boat on the Strait","ferry",0.08),x.push({group:g,wakeMesh:E0,curve:new H9(y[b],!0),t:b*0.27%1,speed:0.042+b%2*0.012,phase:b*1.7})}let p=[];function S(b,g,Q0){let W0=new JJ;W0.position.set(b,g,Q0);let X0=new o(new FJ(0.02,0.025,0.55,6),R);X0.position.y=0.275,W0.add(X0);let Z0=new o(new v0(0.08,0.22,0.08),R);Z0.position.y=0.56,W0.add(Z0);let E0=new d0({color:4460817,emissive:new _0(16722731),emissiveIntensity:0}),B0=new d0({color:4469521,emissive:new _0(16762923),emissiveIntensity:0}),F0=new d0({color:1131554,emissive:new _0(2883438),emissiveIntensity:1.5}),V=new o(new mJ(0.026,8,8),E0);V.position.set(0,0.62,0.04);let $0=new o(new mJ(0.026,8,8),B0);$0.position.set(0,0.56,0.04);let d=new o(new mJ(0.026,8,8),F0);d.position.set(0,0.5,0.04),W0.add(V,$0,d),K.add(W0);let Y0={state:"green",redMat:E0,yellowMat:B0,greenMat:F0};return p.push(Y0),Y0}S(-5.2,0.46,3.35),S(-5.2,0.46,-3.45);let m=[16106545,16106545,14239803,4881563,15394527,4016210];function e(b,g=!1){let Q0=new JJ,W0=!g&&b%m.length<2,X0=g?13187883:m[b%m.length],Z0=new d0({color:X0,roughness:0.35,metalness:0.25}),E0=g?0.26:0.22,B0=g?0.22:0.11,F0=g?0.62:0.38,V=new o(new v0(E0,B0,F0),Z0);if(V.position.y=B0*0.5+0.03,V.castShadow=!0,Q0.add(V),!g){let Y0=new o(new v0(E0*0.86,0.09,F0*0.54),Z0);if(Y0.position.set(0,B0+0.06,-0.02),Y0.castShadow=!0,Q0.add(Y0),W0){let G0=new o(new v0(0.08,0.035,0.04),U);G0.position.set(0,B0+0.12,0),Q0.add(G0)}}for(let Y0 of[-E0*0.34,E0*0.34]){let G0=new o(new v0(0.04,0.035,0.02),U);G0.position.set(Y0,0.07,F0*0.5+0.005),Q0.add(G0);let J0=new o(new v0(0.045,0.035,0.02),H);J0.position.set(Y0,0.07,-F0*0.5-0.005),Q0.add(J0)}let $0=new eJ(0.24,0.68,10,1,!0);$0.rotateX(Math.PI*0.5),$0.translate(0,0.04,F0*0.5+0.34);let d=new o($0,q);return Q0.add(d),K.add(Q0),Y(Q0,`vehicle-${Math.random().toFixed(4)}`,g?"IETT Municipal Bus":W0?"Istanbul Yellow Taksi":"City Commuter Car",W0?"Classic Yellow Cab Driving Through Istanbul":"Live City Traffic","vehicle",0.06),{group:Q0,headlightBeam:d,isTaxi:W0}}let n=[];function H0(b,g,Q0,W0){for(let X0=0;X0<g;X0++){let Z0=X0===0&&g>=4,{group:E0,headlightBeam:B0,isTaxi:F0}=e(X0,Z0),V=X0%(b.length-1),$0=b[V],d=b[V+1],Y0=$0.distanceTo(d),G0=X0*0.37%0.85*Y0;n.push({group:E0,headlightBeam:B0,path:b,segIndex:V,segDist:G0,segLen:Y0,speed:Q0,maxSpeed:Q0*(0.9+X0%3*0.12),stopCheck:W0,isTaxi:F0})}}let r=[new C(-9.5,0.48,3.68),new C(-6,0.48,3.68),new C(-6,0.72,1.2),new C(-6,0.72,-1.6),new C(-6,0.48,-3.8),new C(-0.6,0.48,-3.8),new C(-0.6,0.48,-4.1),new C(-5.6,0.48,-4.1),new C(-5.6,0.72,-1.6),new C(-5.6,0.72,1.2),new C(-5.6,0.48,4.02),new C(-9.5,0.48,4.02),new C(-9.5,0.48,3.68)];H0(r,7,1.45,{segIndex:0,tStop:0.82,lightGroupIdx:0});let K0=new C(2.2,3.68,-8.2),N0=new C(8.6,3.68,-1.8),l0=N0.clone().sub(K0).normalize(),g0=new C(-l0.z,0,l0.x),GJ=K0.clone().addScaledVector(l0,-1.5).addScaledVector(g0,0.34),r0=N0.clone().addScaledVector(l0,1.5).addScaledVector(g0,0.34),a=N0.clone().addScaledVector(l0,1.5).addScaledVector(g0,-0.34),O0=K0.clone().addScaledVector(l0,-1.5).addScaledVector(g0,-0.34);H0([GJ,r0],6,2.05),H0([a,O0],6,1.95),H0([new C(6.8,0.48,-8.2),new C(6.8,0.48,9.2)],4,1.55),H0([new C(7.1,0.48,9.2),new C(7.1,0.48,-8.2)],4,1.5);let q0=new JJ,p0=new d0({color:13117481,roughness:0.38}),T0=new d0({color:16050901,roughness:0.45}),h0=new o(new v0(0.28,0.24,0.72),p0);h0.position.y=0.15,h0.castShadow=!0,q0.add(h0);let CJ=new o(new v0(0.29,0.08,0.73),T0);CJ.position.y=0.18,q0.add(CJ);let KJ=new o(new v0(0.26,0.05,0.68),Q.leadDome);KJ.position.y=0.29,q0.add(KJ);let QJ=new o(new mJ(0.032,8,8),U);QJ.position.set(0,0.12,0.37),q0.add(QJ),K.add(q0),Y(q0,"istiklal-tram","Nostalgic Red Tram • İstiklal Caddesi","Historic Taksim–Tünel Heritage Streetcar","tram",0.08);let NJ=new H9([new C(-8.8,0.91,-7.8),new C(-6.2,0.91,-8.45),new C(-3.6,0.91,-7.4),new C(-3.6,0.91,-5.2),new C(-7.6,0.91,-5.2)],!0),e0=0.1,DJ=[14242639,3899041,15114565,5081966,8147605,3426654].map((b)=>new d0({color:b,roughness:0.7})),bJ=new d0({color:15912886,roughness:0.65}),AJ=[new d0({color:15087942,roughness:0.5,side:yJ}),new d0({color:4553629,roughness:0.5,side:yJ}),new d0({color:16032353,roughness:0.5,side:yJ}),new d0({color:2792847,roughness:0.5,side:yJ})],TJ=[],v=[{center:new C(-3.4,0.84,6.8),rx:2.2,rz:2.2,count:22},{center:new C(-6.8,0.82,4.9),rx:1.4,rz:0.9,count:12},{center:new C(-0.2,0.82,5.1),rx:1.2,rz:0.9,count:12},{center:new C(-2.2,0.46,2.1),rx:2.1,rz:0.55,count:12},{center:new C(-5.8,1.41,-5.6),rx:1.6,rz:1.1,count:12},{center:new C(1.6,0.46,-7),rx:1.3,rz:0.8,count:10},{center:new C(6.3,0.46,2.4),rx:0.4,rz:2.2,count:8}],SJ=new FJ(0.032,0.042,0.13,7),qJ=new mJ(0.03,7,7),VJ=new eJ(0.11,0.055,8,1,!0);for(let b=0;b<v.length;b++){let g=v[b];for(let Q0=0;Q0<g.count;Q0++){let W0=new JJ,X0=new o(SJ,DJ[(Q0+b)%DJ.length]);X0.position.y=0.065,X0.castShadow=!0,W0.add(X0);let Z0=new o(qJ,bJ);Z0.position.y=0.155,W0.add(Z0);let E0=new JJ;E0.position.set(0.02,0.21,0);let B0=new o(VJ,AJ[(Q0+b*2)%AJ.length]);E0.add(B0),E0.scale.setScalar(0.001),E0.visible=!1,W0.add(E0);let F0=[];for(let V=0;V<4;V++){let $0=V/4*Math.PI*2+Q0*0.73,d=0.35+(Q0*31+V*17)%65/100;F0.push(new C(g.center.x+Math.cos($0)*g.rx*d,g.center.y,g.center.z+Math.sin($0)*g.rz*d))}W0.position.copy(F0[0]),K.add(W0),TJ.push({group:W0,umbrella:E0,waypoints:F0,targetIdx:1,pos:F0[0].clone(),speed:0.28+Q0%5*0.05,pauseTimer:Q0%4*0.6,phase:Q0*1.3})}}let I=new d0({color:16448767,roughness:0.5}),L=new v0(0.11,0.014,0.045);L.translate(0.055,0,0);function f(){let b=new JJ,g=new o(L,I),Q0=new o(L,I);return Q0.rotation.y=Math.PI,b.add(g,Q0),{group:b,leftWing:g,rightWing:Q0}}let s=[],U0=[{c:new C(-7.2,4.4,7.1),r:1.65,count:6},{c:new C(-0.2,4.3,7.5),r:1.55,count:5},{c:new C(-5.8,6.8,-6.8),r:1.35,count:5},{c:new C(2.9,3.6,3.2),r:1.25,count:5}];for(let b of U0)for(let g=0;g<b.count;g++){let{group:Q0,leftWing:W0,rightWing:X0}=f();K.add(Q0),s.push({group:Q0,leftWing:W0,rightWing:X0,center:b.c,radius:b.r+g%3*0.28,angle:g/b.count*Math.PI*2,speed:0.72+g%3*0.14,flapSpeed:8.5+g%4*1.2,baseY:b.c.y+g%3*0.22})}let D0=[];function M0(b){let g=[],Q0=new C((Math.random()-0.5)*2,0.18,(Math.random()-0.5)*2).normalize();for(let W0=0;W0<7;W0++){let{group:X0,leftWing:Z0,rightWing:E0}=f(),B0=new C((W0-3)*0.25,Math.abs(W0-3)*0.08,-Math.abs(W0-3)*0.22);X0.position.copy(b).add(B0),K.add(X0),g.push({group:X0,leftWing:Z0,rightWing:E0,offset:B0,phase:W0*0.8})}D0.push({birds:g,origin:b.clone(),velocity:Q0.multiplyScalar(2.6),age:0,maxAge:7.5}),q8.emit("seagull_flock","Seagulls over the Bosphorus")}return{spawnSeagullFlockFrom:M0,dispatchFerryNow(b=0){let g=w[b%w.length];if(g)g.dockTimer=0,q8.emit("ferry_horn",g.name,!0),W=`${g.name} departing pier`},ringTramBell(){q8.emit("tram_bell","İstiklal Nostalgic Tram",!0),W="Nostalgic Tram ringing bell in Beyoğlu"},getRecentAmbientToast(){let b=W;return W=null,b},update(b,g,Q0){let W0=g%13.8;for(let F0=0;F0<p.length;F0++){let V=p[F0],$0=(W0+F0*4.5)%13.8;if($0<7)V.state="green",V.greenMat.emissiveIntensity=1.8,V.yellowMat.emissiveIntensity=0,V.redMat.emissiveIntensity=0;else if($0<8.8)V.state="yellow",V.greenMat.emissiveIntensity=0,V.yellowMat.emissiveIntensity=1.8,V.redMat.emissiveIntensity=0;else V.state="red",V.greenMat.emissiveIntensity=0,V.yellowMat.emissiveIntensity=0,V.redMat.emissiveIntensity=1.8}let X0=Math.max(Q0.nightFactor,Q0.wetness*0.75,Q0.fogStrength*0.85);U.emissiveIntensity=s0.lerp(0.15,2.4,X0),H.emissiveIntensity=s0.lerp(0.25,2.2,X0),q.opacity=s0.smoothstep(X0,0.25,0.85)*0.26;for(let F0=0;F0<n.length;F0++){let V=n[F0],$0=V.maxSpeed;if(V.stopCheck&&V.segIndex===V.stopCheck.segIndex){let L0=p[V.stopCheck.lightGroupIdx],u0=V.segDist/Math.max(0.01,V.segLen);if(L0&&L0.state!=="green"&&u0>V.stopCheck.tStop-0.18&&u0<V.stopCheck.tStop+0.02)$0=0}if(V.speed=s0.lerp(V.speed,$0,Math.min(1,b*6)),V.segDist+=V.speed*b,V.segDist>=V.segLen){V.segDist=0,V.segIndex=(V.segIndex+1)%(V.path.length-1);let L0=V.path[V.segIndex],u0=V.path[V.segIndex+1];V.segLen=Math.max(0.01,L0.distanceTo(u0))}let d=V.path[V.segIndex],Y0=V.path[V.segIndex+1],G0=V.segDist/Math.max(0.01,V.segLen);V.group.position.lerpVectors(d,Y0,G0);let J0=Math.atan2(Y0.x-d.x,Y0.z-d.z);V.group.rotation.y=J0}e0=(e0+b*0.048)%1;let Z0=NJ.getPointAt(e0),E0=NJ.getPointAt((e0+0.01)%1);q0.position.copy(Z0),q0.lookAt(E0);for(let F0=0;F0<w.length;F0++){let V=w[F0];if(V.dockTimer>0)V.dockTimer-=b,V.wakeMesh.visible=!1,V.group.position.y=0.16+Math.sin(g*2.2+F0)*0.012;else{V.wakeMesh.visible=!0;let $0=V.waypoints[V.currentSeg],d=V.waypoints[V.currentSeg+V.direction],Y0=$0.distanceTo(d);if(V.t+=V.speed*b/Math.max(0.1,Y0),V.t>=1){if(V.t=0,V.currentSeg+=V.direction,V.currentSeg>=V.waypoints.length-1)V.currentSeg=V.waypoints.length-1,V.direction=-1,V.dockTimer=3.8;else if(V.currentSeg<=0)V.currentSeg=0,V.direction=1,V.dockTimer=3.8}else{let G0=V.waypoints[V.currentSeg],J0=V.waypoints[V.currentSeg+V.direction],u0=V.direction===1&&V.currentSeg===V.waypoints.length-2||V.direction===-1&&V.currentSeg===1?s0.smoothstep(V.t,0,1):V.t;V.group.position.lerpVectors(G0,J0,u0),V.group.position.y=0.16+Math.sin(g*2.5+F0)*0.016*Q0.windStrength,V.group.rotation.z=Math.sin(g*2.1+F0)*0.025*Q0.windStrength;let $J=Math.atan2(J0.x-G0.x,J0.z-G0.z);V.group.rotation.y=$J}}for(let $0 of V.smokePuffs){$0.age=($0.age+b*0.55)%1,$0.mesh.position.y=0.88+$0.age*0.55,$0.mesh.position.z=0.05-$0.age*0.35;let d=0.4+$0.age*1.4;$0.mesh.scale.setScalar(d)}}for(let F0=0;F0<x.length;F0++){let V=x[F0];V.t=(V.t+V.speed*b)%1;let $0=V.curve.getPointAt(V.t),d=V.curve.getPointAt((V.t+0.015)%1);V.group.position.copy($0),V.group.position.y=0.15+Math.sin(g*3.1+V.phase)*0.018*Q0.windStrength,V.group.lookAt(d.x,V.group.position.y,d.z),V.group.rotation.z=Math.cos(g*2.6+V.phase)*0.04*Q0.windStrength}let B0=Q0.wetness>0.32;for(let F0=0;F0<TJ.length;F0++){let V=TJ[F0];if(B0){V.umbrella.visible=!0;let J0=s0.lerp(V.umbrella.scale.x,1,Math.min(1,b*6));V.umbrella.scale.setScalar(J0)}else if(V.umbrella.visible){let J0=s0.lerp(V.umbrella.scale.x,0.001,Math.min(1,b*6));if(V.umbrella.scale.setScalar(J0),J0<0.02)V.umbrella.visible=!1}if(V.pauseTimer>0){V.pauseTimer-=b,V.group.position.y=V.pos.y;continue}let $0=V.waypoints[V.targetIdx],d=$0.x-V.pos.x,Y0=$0.z-V.pos.z,G0=Math.hypot(d,Y0);if(G0<0.08){if(V.targetIdx=(V.targetIdx+1)%V.waypoints.length,(F0+V.targetIdx)%3===0)V.pauseTimer=0.9+F0%4*0.45}else{let J0=Math.min(G0,V.speed*b);V.pos.x+=d/G0*J0,V.pos.z+=Y0/G0*J0,V.group.position.x=V.pos.x,V.group.position.z=V.pos.z,V.group.position.y=V.pos.y+Math.abs(Math.sin(g*9.5+V.phase))*0.026,V.group.rotation.y=Math.atan2(d,Y0)}}for(let F0=0;F0<s.length;F0++){let V=s[F0];V.angle+=V.speed*b;let $0=V.center.x+Math.cos(V.angle)*V.radius,d=V.center.z+Math.sin(V.angle)*V.radius,Y0=V.baseY+Math.sin(g*1.8+F0)*0.16;V.group.position.set($0,Y0,d),V.group.rotation.y=-V.angle;let G0=Math.sin(g*V.flapSpeed+F0)*0.48;V.leftWing.rotation.z=G0,V.rightWing.rotation.z=-G0}for(let F0=D0.length-1;F0>=0;F0--){let V=D0[F0];if(V.age+=b,V.age>=V.maxAge){for(let d of V.birds)K.remove(d.group);D0.splice(F0,1);continue}V.origin.addScaledVector(V.velocity,b);let $0=Math.atan2(V.velocity.x,V.velocity.z);for(let d of V.birds){d.group.position.copy(V.origin).add(d.offset),d.group.rotation.y=$0;let Y0=Math.sin(g*10.5+d.phase)*0.55;d.leftWing.rotation.z=Y0,d.rightWing.rotation.z=-Y0}}if(X-=b,X<=0){X=10+Math.random()*6;let F0=Math.floor(Math.random()*4);if(F0===0)M0(new C(-5.8,5.2,-6.8)),W="A flock of seagulls takes flight from Galata Tower";else if(F0===1)M0(new C(-7.2,3.8,7.1)),W="Seagulls soaring above Hagia Sophia & the Bosphorus";else if(F0===2)Z(),W="15 July Martyrs Bridge lights shimmering over the strait";else q8.emit("ferry_horn","Şehir Hatları Ferry"),W="A Şehir Hatları ferry sounds its horn on the Bosphorus"}}}}var tZ=document.getElementById("stage-container"),g8=document.getElementById("city-canvas"),aq=document.getElementById("editorial-header"),jX=document.getElementById("weather-icon-btn"),yX=document.getElementById("date-line"),fX=document.getElementById("temp-line"),X7=document.getElementById("hover-card"),rq=document.getElementById("hover-title"),tq=document.getElementById("hover-subtitle"),zQ=document.getElementById("ambient-whisper"),x9=new dZ({canvas:g8,antialias:!0,powerPreference:"high-performance"});x9.setPixelRatio(Math.min(window.devicePixelRatio||1,2));x9.setSize(1080,1080,!1);x9.shadowMap.enabled=!0;x9.shadowMap.type=h7;x9.toneMapping=x6;x9.toneMappingExposure=1.08;var q9=new r7;q9.background=new _0(15394007);var IQ=23.5,T8=new j9(-IQ/2,IQ/2,IQ/2,-IQ/2,-50,120),k6=new C(0,1.35,0),iZ=28,oZ=s0.degToRad(36.5),TX=s0.degToRad(-42),vX=new C(k6.x+Math.sin(TX)*Math.cos(oZ)*iZ,k6.y+Math.sin(oZ)*iZ,k6.z+Math.cos(TX)*Math.cos(oZ)*iZ);T8.position.copy(vX);T8.zoom=1.04;T8.lookAt(k6);T8.updateProjectionMatrix();var J8=new cZ(T8,g8);J8.target.copy(k6);J8.enableDamping=!0;J8.dampingFactor=0.065;J8.rotateSpeed=0.75;J8.panSpeed=0.85;J8.zoomSpeed=1;J8.minZoom=0.68;J8.maxZoom=2.65;J8.minPolarAngle=s0.degToRad(20);J8.maxPolarAngle=s0.degToRad(68);J8.screenSpacePanning=!0;J8.update();var JK=zX(),vJ=new sZ(q9),v9=_X(q9,JK),K7=CX(q9,JK,v9.interactives,()=>v9.triggerBridgeLightWave()),bX=new _9(0.12,0.24,28);bX.rotateX(-Math.PI*0.5);var hX=new W8({color:16770206,transparent:!0,opacity:0,side:yJ}),h9=new o(bX,hX);h9.position.y=0.5;h9.visible=!1;q9.add(h9);var M6=99,wX="",aZ=null;function x8(J){if(zQ.textContent=J,zQ.classList.add("visible"),aZ)clearTimeout(aZ);aZ=setTimeout(()=>{zQ.classList.remove("visible")},3200)}function g9(){let J=BQ(),Q=vJ.state.currentWeather,$=vJ.state.nightFactor>0.55,Z=`${Q.condition}-${$?"n":"d"}`;if(Z!==wX)jX.innerHTML=AX(Q.condition,$),wX=Z;let K=vJ.state.timePreset==="live"?J.timeFormatted:vJ.state.timePreset.toUpperCase();yX.textContent=`${J.dateFormatted} • ${K}`,fX.textContent=`${Q.temperatureC}°C`,aq.classList.toggle("is-night",$)}g9();nZ().then((J)=>{vJ.setLiveWeather(J),g9()});setInterval(()=>{nZ().then((J)=>{vJ.setLiveWeather(J),g9()})},300000);jX.addEventListener("click",(J)=>{J.stopPropagation();let Q=vJ.cycleWeatherMode();g9(),q8.emit("landmark_chime",Q,!0),x8(`Weather: ${Q}`)});yX.addEventListener("click",(J)=>{J.stopPropagation();let Q=vJ.cycleTimePreset();g9(),q8.emit("landmark_chime",Q,!0),x8(`Time: ${Q}`)});fX.addEventListener("click",(J)=>{J.stopPropagation();let Q=vJ.cycleWeatherMode();g9(),q8.emit("landmark_chime",Q,!0),x8(`Weather: ${Q}`)});var W7=new OQ,b9=new A0(-99,-99),f9=null,eZ={x:0,y:0};function xX(J){let Q=g8.getBoundingClientRect();b9.x=(J.clientX-Q.left)/Q.width*2-1,b9.y=-((J.clientY-Q.top)/Q.height)*2+1;let $=tZ.getBoundingClientRect(),Z=(J.clientX-$.left)/$.width*1080,K=(J.clientY-$.top)/$.height*1080;X7.style.left=`${Math.min(920,Math.max(160,Z))}px`,X7.style.top=`${Math.max(72,K-24)}px`}g8.addEventListener("pointermove",(J)=>{xX(J)});g8.addEventListener("pointerleave",()=>{b9.set(-99,-99),f9=null,X7.classList.remove("visible")});g8.addEventListener("pointerdown",(J)=>{eZ={x:J.clientX,y:J.clientY}});g8.addEventListener("pointerup",(J)=>{if(Math.hypot(J.clientX-eZ.x,J.clientY-eZ.y)>6)return;xX(J),W7.setFromCamera(b9,T8);let $=W7.intersectObjects(q9.children,!0),Z=null,K=null;for(let W of $)if(W.object.userData?.interactiveMeta){Z=W.object.userData.interactiveMeta,K=W.point;break}if(Z&&K)if(h9.position.set(K.x,K.y+0.08,K.z),h9.visible=!0,M6=0,Z.category==="landmark"){let W=new C;Z.root.getWorldPosition(W),W.y+=2.2,K7.spawnSeagullFlockFrom(W),q8.emit("landmark_chime",Z.title,!0),x8(`${Z.title}`)}else if(Z.category==="ferry")K7.dispatchFerryNow(),x8(`${Z.title} • Sounding Bosphorus Horn`);else if(Z.category==="bridge")v9.triggerBridgeLightWave(),q8.emit("bridge_lights",Z.title,!0),x8(`${Z.title} • Illuminating Suspension Cables`);else if(Z.category==="tram")K7.ringTramBell();else if(Z.category==="vehicle")q8.emit("car_honk",Z.title,!0),x8(`${Z.title}`);else q8.emit("landmark_chime",Z.title,!0),x8(`${Z.title}`)});g8.addEventListener("dblclick",()=>{T8.position.copy(vX),J8.target.copy(k6),T8.zoom=1.04,T8.updateProjectionMatrix(),J8.update(),x8("Isometric View Reset")});function gX(){let{innerWidth:J,innerHeight:Q}=window,$=Math.min(J,Q,1080);tZ.style.width=`${$}px`,tZ.style.height=`${$}px`}window.addEventListener("resize",gX);gX();var SX=new GQ,rZ=0;function pX(){requestAnimationFrame(pX);let J=Math.min(SX.getDelta(),0.05),Q=SX.elapsedTime;J8.update(),vJ.update(J,Q),document.body.style.backgroundColor=`#${vJ.state.bgHex.getHexString()}`,JK.updateEnvironment({nightFactor:vJ.state.nightFactor,wetness:vJ.state.wetness,snowAmount:vJ.state.snowAmount,time:Q}),v9.updateWaterAndFoliage(Q,vJ.state.windStrength,vJ.state.nightFactor,vJ.state.wetness),K7.update(J,Q,{nightFactor:vJ.state.nightFactor,wetness:vJ.state.wetness,windStrength:vJ.state.windStrength,fogStrength:vJ.state.fogStrength});let $=K7.getRecentAmbientToast();if($&&!zQ.classList.contains("visible"))x8($);if(b9.x>-2&&b9.y>-2){W7.setFromCamera(b9,T8);let Z=W7.intersectObjects(v9.rootGroup.children,!0),K=null;for(let W of Z)if(W.object.userData?.interactiveMeta){K=W.object.userData.interactiveMeta;break}if(!K){let W=W7.intersectObjects(q9.children,!0);for(let X of W)if(X.object.userData?.interactiveMeta){K=X.object.userData.interactiveMeta;break}}if(K!==f9)if(f9=K,f9)rq.textContent=f9.title,tq.textContent=f9.subtitle,X7.classList.add("visible"),g8.style.cursor="pointer";else X7.classList.remove("visible"),g8.style.cursor="grab"}for(let Z=0;Z<v9.interactives.length;Z++){let K=v9.interactives[Z];if(K.category==="ferry"||K.category==="vehicle"||K.category==="tram")continue;let W=K===f9?K.baseY+(K.hoverLift??0.12):K.baseY;K.root.position.y=s0.lerp(K.root.position.y,W,Math.min(1,J*10))}if(M6<1){M6+=J*1.8;let Z=0.5+M6*4.5;if(h9.scale.set(Z,1,Z),hX.opacity=Math.max(0,(1-M6)*0.75),M6>=1)h9.visible=!1}if(rZ+=J,rZ>1)rZ=0,g9();x9.render(q9,T8)}pX();
