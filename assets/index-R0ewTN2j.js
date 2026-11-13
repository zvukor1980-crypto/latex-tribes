(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const qo="180",Wc=0,Ta=1,Xc=2,tc=1,ec=2,En=3,kn=0,Ce=1,on=2,Fn=0,Ii=1,cs=2,Aa=3,Ra=4,qc=5,ii=100,Yc=101,jc=102,$c=103,Kc=104,Zc=200,Jc=201,Qc=202,th=203,Jr=204,Qr=205,eh=206,nh=207,ih=208,sh=209,rh=210,oh=211,ah=212,lh=213,ch=214,to=0,eo=1,no=2,Fi=3,io=4,so=5,ro=6,oo=7,Yo=0,hh=1,uh=2,On=0,dh=1,fh=2,ph=3,nc=4,mh=5,gh=6,_h=7,ic=300,Oi=301,zi=302,ao=303,lo=304,lr=306,hs=1e3,ri=1001,co=1002,Ye=1003,xh=1004,ys=1005,dn=1006,pr=1007,oi=1008,mn=1009,sc=1010,rc=1011,us=1012,jo=1013,ai=1014,fn=1015,gs=1016,$o=1017,Ko=1018,ds=1020,oc=35902,ac=35899,lc=1021,cc=1022,ln=1023,fs=1026,ps=1027,Zo=1028,Jo=1029,hc=1030,Qo=1031,ta=1033,js=33776,$s=33777,Ks=33778,Zs=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,_o=37496,xo=37808,vo=37809,yo=37810,Mo=37811,So=37812,Eo=37813,wo=37814,bo=37815,To=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Lo=37821,Do=36492,Io=36494,Uo=36495,No=36283,Fo=36284,Oo=36285,zo=36286,vh=3200,yh=3201,ea=0,Mh=1,Un="",Be="srgb",ki="srgb-linear",Qs="linear",oe="srgb",ui=7680,Ca=519,Sh=512,Eh=513,wh=514,uc=515,bh=516,Th=517,Ah=518,Rh=519,ko=35044,Pa="300 es",pn=2e3,tr=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,Bo=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Ch(i,t){return(i%t+t)%t}function gr(i,t,e){return(1-e)*i+e*t}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*_,E=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const A=Math.sqrt(w),T=Math.atan2(A,d*E);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const y=a*E;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(La.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(La.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new D,La=new Wi;class Ht{constructor(t,e,n,s,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],w=s[4],y=s[7],A=s[2],T=s[5],R=s[8];return r[0]=o*_+a*E+l*A,r[3]=o*m+a*w+l*T,r[6]=o*d+a*y+l*R,r[1]=c*_+h*E+u*A,r[4]=c*m+h*w+u*T,r[7]=c*d+h*y+u*R,r[2]=f*_+p*E+g*A,r[5]=f*m+p*w+g*T,r[8]=f*d+p*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Ht;function dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){const i=er("canvas");return i.style.display="block",i}const Da={};function ms(i){i in Da||(Da[i]=!0,console.warn(i))}function Lh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ia=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ua=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dh(){const i={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ki]:{primaries:t,whitePoint:n,transfer:Qs,toXYZ:Ia,fromXYZ:Ua,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Ia,fromXYZ:Ua,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const Jt=Dh();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Ih{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{di===void 0&&(di=er("canvas")),di.width=t.width,di.height=t.height;const s=di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uh=0;class na{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vr(s[o].image)):r.push(vr(s[o]))}else r=vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;const yr=new D;class Pe extends Vi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=ri,s=ri,r=dn,o=oi,a=ln,l=mn,c=Pe.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=zn(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yr).x}get height(){return this.source.getSize(yr).y}get depth(){return this.source.getSize(yr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=ic;Pe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(p+1)/2,A=(d+1)/2,T=(h+f)/4,R=(u+_)/4,L=(g+m)/4;return w>y&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=R/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Pe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new na(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fc extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ss.subVectors(this.max,ji),fi.subVectors(t.a,ji),pi.subVectors(t.b,ji),mi.subVectors(t.c,ji),Tn.subVectors(pi,fi),An.subVectors(mi,pi),qn.subVectors(fi,mi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-qn.z,qn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,qn.z,0,-qn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-qn.y,qn.x,0];return!Mr(e,fi,pi,mi,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,fi,pi,mi,Ss))?!1:(Es.crossVectors(Tn,An),e=[Es.x,Es.y,Es.z],Mr(e,fi,pi,mi,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xn=[new D,new D,new D,new D,new D,new D,new D,new D],tn=new D,Ms=new ci,fi=new D,pi=new D,mi=new D,Tn=new D,An=new D,qn=new D,ji=new D,Ss=new D,Es=new D,Yn=new D;function Mr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);const a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zh=new ci,$i=new D,Sr=new D;class Xi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Sr)),this.expandByPoint($i.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vn=new D,Er=new D,ws=new D,Rn=new D,wr=new D,bs=new D,br=new D;class pc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Er.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Er);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Rn.dot(this.direction),l=-Rn.dot(ws),c=Rn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Er).addScaledVector(ws,f),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){wr.subVectors(e,t),bs.subVectors(n,t),br.crossVectors(wr,bs);let o=this.direction.dot(br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const l=a*this.direction.dot(bs.crossVectors(Rn,bs));if(l<0)return null;const c=a*this.direction.dot(wr.cross(Rn));if(c<0||l+c>o)return null;const h=-a*Rn.dot(br);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kh,t,Bh)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Cn.crossVectors(n,Ve),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Cn.crossVectors(n,Ve)),Cn.normalize(),Ts.crossVectors(Ve,Cn),s[0]=Cn.x,s[4]=Ts.x,s[8]=Ve.x,s[1]=Cn.y,s[5]=Ts.y,s[9]=Ve.y,s[2]=Cn.z,s[6]=Ts.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],w=n[7],y=n[11],A=n[15],T=s[0],R=s[4],L=s[8],M=s[12],v=s[1],P=s[5],F=s[9],z=s[13],V=s[2],X=s[6],W=s[10],$=s[14],H=s[3],it=s[7],rt=s[11],Et=s[15];return r[0]=o*T+a*v+l*V+c*H,r[4]=o*R+a*P+l*X+c*it,r[8]=o*L+a*F+l*W+c*rt,r[12]=o*M+a*z+l*$+c*Et,r[1]=h*T+u*v+f*V+p*H,r[5]=h*R+u*P+f*X+p*it,r[9]=h*L+u*F+f*W+p*rt,r[13]=h*M+u*z+f*$+p*Et,r[2]=g*T+_*v+m*V+d*H,r[6]=g*R+_*P+m*X+d*it,r[10]=g*L+_*F+m*W+d*rt,r[14]=g*M+_*z+m*$+d*Et,r[3]=E*T+w*v+y*V+A*H,r[7]=E*R+w*P+y*X+A*it,r[11]=E*L+w*F+y*W+A*rt,r[15]=E*M+w*z+y*$+A*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,w=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,y=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,A=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,T=e*E+n*w+s*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=E*R,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*R,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*R,t[4]=w*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*R,t[8]=y*R,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=A*R,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,E=l*c,w=l*h,y=l*u,A=n.x,T=n.y,R=n.z;return s[0]=(1-(_+d))*A,s[1]=(p+y)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(f+d))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+w)*R,s[9]=(m-E)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gi.set(s[0],s[1],s[2]).length();const o=gi.set(s[4],s[5],s[6]).length(),a=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const c=1/r,h=1/o,u=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===pn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===tr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===pn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===tr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new D,en=new he,kh=new D(0,0,0),Bh=new D(1,1,1),Cn=new D,Ts=new D,Ve=new D,Na=new he,Fa=new Wi;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hh=0;const Oa=new D,_i=new Wi,yn=new he,As=new D,Ki=new D,Gh=new D,Vh=new Wi,za=new D(1,0,0),ka=new D(0,1,0),Ba=new D(0,0,1),Ha={type:"added"},Wh={type:"removed"},xi={type:"childadded",child:null},Tr={type:"childremoved",child:null};class ye extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new D,e=new Qe,n=new Wi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ht}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(za,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Oa.copy(t).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(za,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Ki,As,this.up):yn.lookAt(As,Ki,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(yn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ha),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wh),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ha),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new D(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new D,Mn=new D,Ar=new D,Sn=new D,vi=new D,yi=new D,Ga=new D,Rr=new D,Cr=new D,Pr=new D,Lr=new le,Dr=new le,Ir=new le;class Je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),Mn.subVectors(n,e),Ar.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(Mn),l=nn.dot(Ar),c=Mn.dot(Mn),h=Mn.dot(Ar),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lr.setScalar(0),Dr.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(t,e),Dr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lr,r.x),o.addScaledVector(Dr,r.y),o.addScaledVector(Ir,r.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),Mn.subVectors(t,e),nn.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;vi.subVectors(s,n),yi.subVectors(r,n),Rr.subVectors(t,n);const l=vi.dot(Rr),c=yi.dot(Rr);if(l<=0&&c<=0)return e.copy(n);Cr.subVectors(t,s);const h=vi.dot(Cr),u=yi.dot(Cr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(vi,o);Pr.subVectors(t,r);const p=vi.dot(Pr),g=yi.dot(Pr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(yi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ga.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ga,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(vi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Ur(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Ch(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ur(o,r,t+1/3),this.g=Ur(o,r,t),this.b=Ur(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=gc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Jt.workingToColorSpace(Re.copy(this),t),Math.round(Wt(Re.r*255,0,255))*65536+Math.round(Wt(Re.g*255,0,255))*256+Math.round(Wt(Re.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Be){Jt.workingToColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Rs);const n=gr(Pn.h,Rs.h,e),s=gr(Pn.s,Rs.s,e),r=gr(Pn.l,Rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new zt;zt.NAMES=gc;let Xh=0;class Vn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Ii,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _s extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,Cs=new xt;let qh=0;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}}class _c extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xc extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yh=0;const Ke=new he,Nr=new ye,Mi=new D,We=new ci,Zi=new ci,be=new D;class Se extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?xc:_c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(We.min,Zi.min),We.expandByPoint(be),be.addVectors(We.max,Zi.max),We.expandByPoint(be)):(We.expandByPoint(Zi.min),We.expandByPoint(Zi.max))}We.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(t,c),be.add(Mi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new D,l[L]=new D;const c=new D,h=new D,u=new D,f=new xt,p=new xt,g=new xt,_=new D,m=new D;function d(L,M,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[M].add(_),a[v].add(_),l[L].add(m),l[M].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,M=E.length;L<M;++L){const v=E[L],P=v.start,F=v.count;for(let z=P,V=P+F;z<V;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new D,y=new D,A=new D,T=new D;function R(L){A.fromBufferAttribute(s,L),T.copy(A);const M=a[L];w.copy(M),w.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(T,M);const P=y.dot(l[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,P)}for(let L=0,M=E.length;L<M;++L){const v=E[L],P=v.start,F=v.count;for(let z=P,V=P+F;z<V;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Oe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new he,jn=new pc,Ps=new Xi,Wa=new D,Ls=new D,Ds=new D,Is=new D,Fr=new D,Us=new D,Xa=new D,Ns=new D;class Pt extends ye{constructor(t=new Se,e=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Fr.fromBufferAttribute(u,t),o?Us.addScaledVector(Fr,h):Us.addScaledVector(Fr.sub(e),h))}e.add(Us)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Ps.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Ps,Wa)===null||jn.origin.distanceToSquared(Wa)>(t.far-t.near)**2))&&(Va.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Va),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=w;y<A;y+=3){const T=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);s=Fs(this,d,t,n,c,h,u,T,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=Fs(this,o,t,n,c,h,u,E,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=w;y<A;y+=3){const T=y,R=y+1,L=y+2;s=Fs(this,d,t,n,c,h,u,T,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,w=m+1,y=m+2;s=Fs(this,o,t,n,c,h,u,E,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jh(i,t,e,n,s,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===kn,a),l===null)return null;Ns.copy(a),Ns.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ns);return c<e.near||c>e.far?null:{distance:c,point:Ns.clone(),object:i}}function Fs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ls),i.getVertexPosition(l,Ds),i.getVertexPosition(c,Is);const h=jh(i,t,e,n,Ls,Ds,Is,Xa);if(h){const u=new D;Je.getBarycoord(Xa,Ls,Ds,Is,u),s&&(h.uv=Je.getInterpolatedAttribute(s,a,l,c,u,new xt)),r&&(h.uv1=Je.getInterpolatedAttribute(r,a,l,c,u,new xt)),o&&(h.normal=Je.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Je.getNormal(Ls,Ds,Is,f.normal),h.face=f,h.barycoord=u}return h}class ie extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(_,m,d,E,w,y,A,T,R,L,M){const v=y/R,P=A/L,F=y/2,z=A/2,V=T/2,X=R+1,W=L+1;let $=0,H=0;const it=new D;for(let rt=0;rt<W;rt++){const Et=rt*P-z;for(let Ft=0;Ft<X;Ft++){const se=Ft*v-F;it[_]=se*E,it[m]=Et*w,it[d]=V,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[d]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ft/R),u.push(1-rt/L),$+=1}}for(let rt=0;rt<L;rt++)for(let Et=0;Et<R;Et++){const Ft=f+Et+X*rt,se=f+Et+X*(rt+1),fe=f+(Et+1)+X*(rt+1),Yt=f+(Et+1)+X*rt;l.push(Ft,se,Yt),l.push(se,fe,Yt),H+=6}a.addGroup(p,H,M),p+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const s in n)t[s]=n[s]}return t}function $h(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Kh={clone:Bi,merge:Ie};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=$h(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new D,qa=new xt,Ya=new xt;class Xe extends yc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,qa,Ya),e.subVectors(Ya,qa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,Ei=1;class Qh extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(Si,Ei,t,e);s.layers=this.layers,this.add(s);const r=new Xe(Si,Ei,t,e);r.layers=this.layers,this.add(r);const o=new Xe(Si,Ei,t,e);o.layers=this.layers,this.add(o);const a=new Xe(Si,Ei,t,e);a.layers=this.layers,this.add(a);const l=new Xe(Si,Ei,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Si,Ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mc extends Pe{constructor(t=[],e=Oi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tu extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Fn});r.uniforms.tEquirect.value=e;const o=new Pt(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=dn),new Qh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Vt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eu={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class nr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new nr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sc extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ko,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new D;class ir{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ia extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const Ji=new D,bi=new D,Ti=new D,Ai=new xt,Qi=new xt,Ec=new he,Os=new D,ts=new D,zs=new D,ja=new xt,zr=new xt,$a=new xt;class wc extends ye{constructor(t=new ia){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nu(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new ir(n,3,0,!1)),wi.setAttribute("uv",new ir(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new xt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Ec.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ti.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ks(Os.set(-.5,-.5,0),Ti,o,bi,s,r),ks(ts.set(.5,-.5,0),Ti,o,bi,s,r),ks(zs.set(.5,.5,0),Ti,o,bi,s,r),ja.set(0,0),zr.set(1,0),$a.set(1,1);let a=t.ray.intersectTriangle(Os,ts,zs,!1,Ji);if(a===null&&(ks(ts.set(-.5,.5,0),Ti,o,bi,s,r),zr.set(0,1),a=t.ray.intersectTriangle(Os,zs,ts,!1,Ji),a===null))return;const l=t.ray.origin.distanceTo(Ji);l<t.near||l>t.far||e.push({distance:l,point:Ji.clone(),uv:Je.getInterpolation(Ji,Os,ts,zs,ja,zr,$a,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ks(i,t,e,n,s,r){Ai.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qi.x=r*Ai.x-s*Ai.y,Qi.y=s*Ai.x+r*Ai.y):Qi.copy(Ai),i.copy(t),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(Ec)}class iu extends Pe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ye,h=Ye,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ri=new he,Za=new he,Bs=[],Ja=new ci,su=new he,es=new Pt,ns=new Xi;class ru extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,su)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),Ja.copy(t.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Ja)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),ns.copy(t.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ri),Za.multiplyMatrices(n,Ri),es.matrixWorld=Za,es.raycast(t,Bs);for(let o=0,a=Bs.length;o<a;o++){const l=Bs[o];l.instanceId=r,l.object=this,e.push(l)}Bs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new iu(new Float32Array(s*this.count),s,this.count,Zo,fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kr=new D,ou=new D,au=new Ht;class ti{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=kr.subVectors(n,e).cross(ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||au.getNormalMatrix(t),s=this.coplanarPoint(kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new Xi,lu=new xt(.5,.5),Hs=new D;class sa{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],E=r[12],w=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,p-h,d-g,A-E).normalize(),s[1].setComponents(c+o,p+h,d+g,A+E).normalize(),s[2].setComponents(c+a,p+u,d+_,A+w).normalize(),s[3].setComponents(c-a,p-u,d-_,A-w).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,d-m,A-y).normalize();else if(s[4].setComponents(c-l,p-f,d-m,A-y).normalize(),e===pn)s[5].setComponents(c+l,p+f,d+m,A+y).normalize();else if(e===tr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);const e=lu.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Hs.x=s.normal.x>0?t.max.x:t.min.x,Hs.y=s.normal.y>0?t.max.y:t.min.y,Hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bc extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qa=new he,Ho=new pc,Gs=new Xi,Vs=new D;class cu extends ye{constructor(t=new Se,e=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;Qa.copy(s).invert(),Ho.copy(t.ray).applyMatrix4(Qa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Vs.fromBufferAttribute(u,m),tl(Vs,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Vs.fromBufferAttribute(u,g),tl(Vs,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tl(i,t,e,n,s,r,o){const a=Ho.distanceSqToPoint(i);if(a<e){const l=new D;Ho.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hu extends Pe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tc extends Pe{constructor(t,e,n=ai,s,r,o,a=Ye,l=Ye,c,h=fs,u=1){if(h!==fs&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new na(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ac extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bn extends Se{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,p=2*u+f,g=n*2+r,_=s+1,m=new D,d=new D;for(let E=0;E<=g;E++){let w=0,y=0,A=0,T=0;if(E<=n){const M=E/n,v=M*Math.PI/2;y=-h-t*Math.cos(v),A=t*Math.sin(v),T=-t*Math.cos(v),w=M*u}else if(E<=n+r){const M=(E-n)/r;y=-h+M*e,A=t,T=0,w=u+M*f}else{const M=(E-n-r)/n,v=M*Math.PI/2;y=h+t*Math.sin(v),A=t*Math.cos(v),T=t*Math.sin(v),w=u+f+M*u}const R=Math.max(0,Math.min(1,w/p));let L=0;E===0?L=.5/s:E===g&&(L=-.5/s);for(let M=0;M<=s;M++){const v=M/s,P=v*Math.PI*2,F=Math.sin(P),z=Math.cos(P);d.x=-A*z,d.y=y,d.z=A*F,a.push(d.x,d.y,d.z),m.set(-A*z,T,A*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+L,R)}if(E>0){const M=(E-1)*_;for(let v=0;v<s;v++){const P=M+v,F=M+v+1,z=E*_+v,V=E*_+v+1;o.push(P,F,z),o.push(F,V,z)}}}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Hi extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zt extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;E(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function E(){const y=new D,A=new D;let T=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const M=[],v=L/r,P=v*(e-t)+t;for(let F=0;F<=s;F++){const z=F/s,V=z*l+a,X=Math.sin(V),W=Math.cos(V);A.x=P*X,A.y=-v*n+m,A.z=P*W,u.push(A.x,A.y,A.z),y.set(X,R,W).normalize(),f.push(y.x,y.y,y.z),p.push(z,1-v),M.push(g++)}_.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const v=_[M][L],P=_[M+1][L],F=_[M+1][L+1],z=_[M][L+1];(t>0||M!==0)&&(h.push(v,P,z),T+=3),(e>0||M!==r-1)&&(h.push(P,F,z),T+=3)}c.addGroup(d,T,0),d+=T}function w(y){const A=g,T=new xt,R=new D;let L=0;const M=y===!0?t:e,v=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;const P=g;for(let F=0;F<=s;F++){const V=F/s*l+a,X=Math.cos(V),W=Math.sin(V);R.x=M*W,R.y=m*v,R.z=M*X,u.push(R.x,R.y,R.z),f.push(0,v,0),T.x=X*.5+.5,T.y=W*.5*v+.5,p.push(T.x,T.y),g++}for(let F=0;F<s;F++){const z=A+F,V=P+F;y===!0?h.push(V,V+1,z):h.push(V+1,V,z),L+=3}c.addGroup(d,L,y===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qe extends Zt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new qe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cr extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const w=new D,y=new D,A=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],w),p(e[T+1],y),p(e[T+2],A),l(w,y,A,E)}function l(E,w,y,A){const T=A+1,R=[];for(let L=0;L<=T;L++){R[L]=[];const M=E.clone().lerp(y,L/T),v=w.clone().lerp(y,L/T),P=T-L;for(let F=0;F<=P;F++)F===0&&L===T?R[L][F]=M:R[L][F]=M.clone().lerp(v,F/P)}for(let L=0;L<T;L++)for(let M=0;M<2*(T-L)-1;M++){const v=Math.floor(M/2);M%2===0?(f(R[L][v+1]),f(R[L+1][v]),f(R[L][v])):(f(R[L][v+1]),f(R[L+1][v+1]),f(R[L+1][v]))}}function c(E){const w=new D;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(E),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){const E=new D;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];const y=m(E)/2/Math.PI+.5,A=d(E)/Math.PI+.5;o.push(y,1-A)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const w=o[E+0],y=o[E+2],A=o[E+4],T=Math.max(w,y,A),R=Math.min(w,y,A);T>.9&&R<.1&&(w<.2&&(o[E+0]+=1),y<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,w){const y=E*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function g(){const E=new D,w=new D,y=new D,A=new D,T=new xt,R=new xt,L=new xt;for(let M=0,v=0;M<r.length;M+=9,v+=6){E.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),L.set(o[v+4],o[v+5]),A.copy(E).add(w).add(y).divideScalar(3);const P=m(A);_(T,v+0,E,P),_(R,v+2,w,P),_(L,v+4,y,P)}}function _(E,w,y,A){A<0&&E.x===1&&(o[w]=E.x-1),y.x===0&&y.z===0&&(o[w]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.vertices,t.indices,t.radius,t.details)}}class ra extends cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ra(t.radius,t.detail)}}class oa extends cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oa(t.radius,t.detail)}}class aa extends Se{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Wt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,f=new xt,p=new D,g=new D,_=new D;let m=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let E=0;E<=e;E++){const w=n+E*h*s,y=Math.sin(w),A=Math.cos(w);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*A,o.push(u.x,u.y,u.z),f.x=E/e,f.y=T/(t.length-1),a.push(f.x,f.y);const R=l[3*T+0]*y,L=l[3*T+1],M=l[3*T+0]*A;c.push(R,L,M)}}for(let E=0;E<e;E++)for(let w=0;w<t.length-1;w++){const y=w+E*t.length,A=y,T=y+t.length,R=y+t.length+1,L=y+1;r.push(A,T,L),r.push(R,L,T)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.points,t.segments,t.phiStart,t.phiLength)}}class Hn extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const E=d*f-o;for(let w=0;w<c;w++){const y=w*u-r;g.push(y,-E,0),_.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const w=E+c*d,y=E+c*(d+1),A=E+1+c*(d+1),T=E+1+c*d;p.push(w,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class la extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new D,g=new xt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const E=d+m,w=E,y=E+n+1,A=E+n+2,T=E+1;a.push(w,y,T),a.push(y,A,T)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class te extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const E=[],w=d/n;let y=0;d===0&&o===0?y=.5/e:d===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+y,1-w),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const w=h[d][E+1],y=h[d][E],A=h[d+1][E],T=h[d+1][E+1];(d!==0||o>0)&&p.push(w,y,T),(d!==n-1||l<Math.PI)&&p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fe extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new D,u=new D,f=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ce extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ca extends ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class uu extends Vn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class du extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fu extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ha extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pu extends ha{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Br=new he,el=new D,nl=new D;class Rc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),Br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const il=new he,is=new D,Hr=new D;class mu extends Rc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),n.position.copy(is),Hr.copy(n.position),Hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hr),n.updateMatrixWorld(),s.makeTranslation(-is.x,-is.y,-is.z),il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il,n.coordinateSystem,n.reversedDepth)}}class sr extends ha{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cc extends yc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class gu extends Rc{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gr extends ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new gu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _u extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function sl(i,t,e,n){const s=xu(n);switch(e){case lc:return i*t;case Zo:return i*t/s.components*s.byteLength;case Jo:return i*t/s.components*s.byteLength;case hc:return i*t*2/s.components*s.byteLength;case Qo:return i*t*2/s.components*s.byteLength;case cc:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case ta:return i*t*4/s.components*s.byteLength;case js:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(i,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(i,8)*Math.max(t,8)/2;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Do:case Io:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oo:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xu(i){switch(i){case mn:case sc:return{byteLength:1,components:1};case us:case rc:case gs:return{byteLength:2,components:1};case $o:case Ko:return{byteLength:2,components:4};case ai:case jo:case fn:return{byteLength:4,components:1};case oc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);function Pc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vu(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mu=`#ifdef USE_ALPHAHASH
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
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Du=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iu=`#ifdef USE_IRIDESCENCE
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
#endif`,Uu=`#ifdef USE_BUMPMAP
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xu=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cd=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mf=`uniform sampler2D t2D;
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
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
}`,Af=`#if DEPTH_PACKING == 3200
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
}`,Rf=`#define DISTANCE
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
}`,Cf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
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
}`,If=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,zf=`#define MATCAP
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
}`,kf=`#define MATCAP
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
}`,Bf=`#define NORMAL
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
}`,Hf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
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
}`,Vf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,qf=`#define TOON
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
}`,Yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,Zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Jf=`uniform float rotation;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:yu,alphahash_pars_fragment:Mu,alphamap_fragment:Su,alphamap_pars_fragment:Eu,alphatest_fragment:wu,alphatest_pars_fragment:bu,aomap_fragment:Tu,aomap_pars_fragment:Au,batching_pars_vertex:Ru,batching_vertex:Cu,begin_vertex:Pu,beginnormal_vertex:Lu,bsdfs:Du,iridescence_fragment:Iu,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Fu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:zu,color_fragment:ku,color_pars_fragment:Bu,color_pars_vertex:Hu,color_vertex:Gu,common:Vu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:ju,emissivemap_pars_fragment:$u,colorspace_fragment:Ku,colorspace_pars_fragment:Zu,envmap_fragment:Ju,envmap_common_pars_fragment:Qu,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:od,gradientmap_pars_fragment:ad,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:fd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:gd,lights_physical_fragment:_d,lights_physical_pars_fragment:xd,lights_fragment_begin:vd,lights_fragment_maps:yd,lights_fragment_end:Md,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:bd,map_fragment:Td,map_pars_fragment:Ad,map_particle_fragment:Rd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:Id,morphnormal_vertex:Ud,morphtarget_pars_vertex:Nd,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:zd,normal_pars_fragment:kd,normal_pars_vertex:Bd,normal_vertex:Hd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:jd,premultiplied_alpha_fragment:$d,project_vertex:Kd,dithering_fragment:Zd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:of,skinning_pars_vertex:af,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:hf,specularmap_pars_fragment:uf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:xf,worldpos_vertex:vf,background_vert:yf,background_frag:Mf,backgroundCube_vert:Sf,backgroundCube_frag:Ef,cube_vert:wf,cube_frag:bf,depth_vert:Tf,depth_frag:Af,distanceRGBA_vert:Rf,distanceRGBA_frag:Cf,equirect_vert:Pf,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:If,meshbasic_vert:Uf,meshbasic_frag:Nf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:zf,meshmatcap_frag:kf,meshnormal_vert:Bf,meshnormal_frag:Hf,meshphong_vert:Gf,meshphong_frag:Vf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:jf,points_frag:$f,shadow_vert:Kf,shadow_frag:Zf,sprite_vert:Jf,sprite_frag:Qf},ot={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},hn={basic:{uniforms:Ie([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ie([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ie([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ie([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ie([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ie([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ie([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ie([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ie([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ie([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ie([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ie([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ie([ot.lights,ot.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};hn.physical={uniforms:Ie([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ws={r:0,b:0,g:0},Kn=new Qe,tp=new he;function ep(i,t,e,n,s,r,o){const a=new zt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function _(w){let y=!1;const A=g(w);A===null?d(a,l):A&&A.isColor&&(d(A,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===lr)?(h===void 0&&(h=new Pt(new ie(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Bi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Kn.copy(y.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(Kn)),h.material.toneMapped=Jt.getTransfer(A.colorSpace)!==oe,(u!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Pt(new Hn(2,2),new gn({name:"BackgroundMaterial",uniforms:Bi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,y){w.getRGB(Ws,vc(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,y,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:_,addToRenderList:m,dispose:E}}function np(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(v,P,F,z,V){let X=!1;const W=u(z,F,P);r!==W&&(r=W,c(r.object)),X=p(v,z,F,V),X&&g(v,z,F,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(v,P,F,z),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,F){const z=F.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let W=X[z];return W===void 0&&(W=f(l()),X[z]=W),W}function f(v){const P=[],F=[],z=[];for(let V=0;V<e;V++)P[V]=0,F[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,P,F,z){const V=r.attributes,X=P.attributes;let W=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){const rt=V[H];let Et=X[H];if(Et===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(Et=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(Et=v.instanceColor)),rt===void 0||rt.attribute!==Et||Et&&rt.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(v,P,F,z){const V={},X=P.attributes;let W=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){let rt=X[H];rt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor));const Et={};Et.attribute=rt,rt&&rt.data&&(Et.data=rt.data),V[H]=Et,W++}r.attributes=V,r.attributesNum=W,r.index=z}function _(){const v=r.newAttributes;for(let P=0,F=v.length;P<F;P++)v[P]=0}function m(v){d(v,0)}function d(v,P){const F=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;F[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),V[v]!==P&&(i.vertexAttribDivisor(v,P),V[v]=P)}function E(){const v=r.newAttributes,P=r.enabledAttributes;for(let F=0,z=P.length;F<z;F++)P[F]!==v[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function w(v,P,F,z,V,X,W){W===!0?i.vertexAttribIPointer(v,P,F,V,X):i.vertexAttribPointer(v,P,F,z,V,X)}function y(v,P,F,z){_();const V=z.attributes,X=F.getAttributes(),W=P.defaultAttributeValues;for(const $ in X){const H=X[$];if(H.location>=0){let it=V[$];if(it===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const rt=it.normalized,Et=it.itemSize,Ft=t.get(it);if(Ft===void 0)continue;const se=Ft.buffer,fe=Ft.type,Yt=Ft.bytesPerElement,Y=fe===i.INT||fe===i.UNSIGNED_INT||it.gpuType===jo;if(it.isInterleavedBufferAttribute){const K=it.data,ft=K.stride,At=it.offset;if(K.isInstancedInterleavedBuffer){for(let yt=0;yt<H.locationSize;yt++)d(H.location+yt,K.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let yt=0;yt<H.locationSize;yt++)m(H.location+yt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let yt=0;yt<H.locationSize;yt++)w(H.location+yt,Et/H.locationSize,fe,rt,ft*Yt,(At+Et/H.locationSize*yt)*Yt,Y)}else{if(it.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)d(H.location+K,it.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);i.bindBuffer(i.ARRAY_BUFFER,se);for(let K=0;K<H.locationSize;K++)w(H.location+K,Et/H.locationSize,fe,rt,Et*Yt,Et/H.locationSize*K*Yt,Y)}}else if(W!==void 0){const rt=W[$];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(H.location,rt);break;case 3:i.vertexAttrib3fv(H.location,rt);break;case 4:i.vertexAttrib4fv(H.location,rt);break;default:i.vertexAttrib1fv(H.location,rt)}}}}E()}function A(){L();for(const v in n){const P=n[v];for(const F in P){const z=P[F];for(const V in z)h(z[V].object),delete z[V];delete P[F]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const F in P){const z=P[F];for(const V in z)h(z[V].object),delete z[V];delete P[F]}delete n[v.id]}function R(v){for(const P in n){const F=n[P];if(F[v.id]===void 0)continue;const z=F[v.id];for(const V in z)h(z[V].object),delete z[V];delete F[v.id]}}function L(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function ip(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function rp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ti,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,w=E*4;let y=d.clippingState||null;l.value=y,y=h(g,f,w,p);for(let A=0;A!==w;++A)y[A]=e[A];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,y=p;w!==_;++w,y+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function op(i){let t=new WeakMap;function e(o,a){return a===ao?o.mapping=Oi:a===lo&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ao||a===lo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tu(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Di=4,rl=[.125,.215,.35,.446,.526,.582],si=20,Vr=new Cc,ol=new zt;let Wr=null,Xr=0,qr=0,Yr=!1;const ei=(1+Math.sqrt(5))/2,Ci=1/ei,al=[new D(-ei,Ci,0),new D(ei,Ci,0),new D(-Ci,0,ei),new D(Ci,0,ei),new D(0,ei,-Ci),new D(0,ei,Ci),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ap=new D;class Go{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ap}=r;Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,qr),this._renderer.xr.enabled=Yr,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:gs,format:ln,colorSpace:ki,depthBuffer:!1},s=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(r)),this._blurMaterial=cp(r,t,e)}return s}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,s,r){const l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(ol),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new _s({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),m=new Pt(new ie,_);let d=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,d=!0):(_.color.copy(ol),d=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const A=this._cubeSize;Xs(s,y*A,w>2?A:0,A,A),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=al[(s-r-1)%al.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const d=[];let E=0;for(let R=0;R<si;++R){const L=R/_,M=Math.exp(-L*L/2);d.push(M),R===0?E+=M:R<m&&(E+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const y=this._sizeLods[s],A=3*y*(s>w-Di?s-w+Di:0),T=4*(this._cubeSize-y);Xs(e,A,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Vr)}}function lp(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+rl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Di?l=rl[o-i+Di-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),w=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,L=T>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(M,_*g*T),w.set(f,m*g*T);const v=[T,T,T,T,T,T];y.set(v,d*g*T)}const A=new Se;A.setAttribute("position",new Oe(E,_)),A.setAttribute("uv",new Oe(w,m)),A.setAttribute("faceIndex",new Oe(y,d)),t.push(A),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(i,t,e){const n=new li(i,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cp(i,t,e){const n=new Float32Array(si),s=new D(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function cl(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function hl(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ao||l===lo,h=l===Oi||l===zi;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Go(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Go(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function up(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dp(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let w=0,y=E.length;w<y;w+=3){const A=E[w+0],T=E[w+1],R=E[w+2];f.push(A,T,T,R,R,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let w=0,y=E.length/3-1;w<y;w+=3){const A=w+0,T=w+1,R=w+2;f.push(A,T,T,R,R,A)}}else return;const m=new(dc(f)?xc:_c)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function fp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mp(i,t,e){const n=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*u),L=new fc(R,A,T,u);L.type=fn,L.needsUpdate=!0;const M=y*4;for(let P=0;P<u;P++){const F=d[P],z=E[P],V=w[P],X=A*T*4*P;for(let W=0;W<F.count;W++){const $=W*M;g===!0&&(s.fromBufferAttribute(F,W),R[X+$+0]=s.x,R[X+$+1]=s.y,R[X+$+2]=s.z,R[X+$+3]=0),_===!0&&(s.fromBufferAttribute(z,W),R[X+$+4]=s.x,R[X+$+5]=s.y,R[X+$+6]=s.z,R[X+$+7]=0),m===!0&&(s.fromBufferAttribute(V,W),R[X+$+8]=s.x,R[X+$+9]=s.y,R[X+$+10]=s.z,R[X+$+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new xt(A,T)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function gp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Lc=new Pe,ul=new Tc(1,1),Dc=new fc,Ic=new Oh,Uc=new Mc,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=dl[s];if(r===void 0&&(r=new Float32Array(s),dl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hr(i,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;gl.set(n),i.uniformMatrix2fv(this.addr,!1,gl),we(e,n)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;ml.set(n),i.uniformMatrix3fv(this.addr,!1,ml),we(e,n)}}function Ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;pl.set(n),i.uniformMatrix4fv(this.addr,!1,pl),we(e,n)}}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ul.compareFunction=uc,r=ul):r=Lc,e.setTexture2D(t||r,s)}function Ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ic,s)}function Up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uc,s)}function Np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dc,s)}function Fp(i){switch(i){case 5126:return _p;case 35664:return xp;case 35665:return vp;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return wp;case 35667:case 35671:return bp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}function Op(i,t){i.uniform1fv(this.addr,t)}function zp(i,t){const e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function kp(i,t){const e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Bp(i,t){const e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Hp(i,t){const e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gp(i,t){const e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vp(i,t){const e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wp(i,t){i.uniform1iv(this.addr,t)}function Xp(i,t){i.uniform2iv(this.addr,t)}function qp(i,t){i.uniform3iv(this.addr,t)}function Yp(i,t){i.uniform4iv(this.addr,t)}function jp(i,t){i.uniform1uiv(this.addr,t)}function $p(i,t){i.uniform2uiv(this.addr,t)}function Kp(i,t){i.uniform3uiv(this.addr,t)}function Zp(i,t){i.uniform4uiv(this.addr,t)}function Jp(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lc,r[o])}function Qp(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ic,r[o])}function tm(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uc,r[o])}function em(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dc,r[o])}function nm(i){switch(i){case 5126:return Op;case 35664:return zp;case 35665:return kp;case 35666:return Bp;case 35674:return Hp;case 35675:return Gp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return jp;case 36294:return $p;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}}class sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nm(e.type)}}class rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function _l(i,t){i.seq.push(t),i.map[t.id]=t}function om(i,t,e){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),o=jr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_l(e,c===void 0?new im(a,i,t):new sm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new rm(a),_l(e,u)),e=u}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);om(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function xl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const am=37297;let lm=0;function cm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const vl=new Ht;function hm(i){Jt._getMatrix(vl,Jt.workingColorSpace,i);const t=`mat3( ${vl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Qs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+cm(i.getShaderSource(t),a)}else return r}function um(i,t){const e=hm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dm(i,t){let e;switch(t){case dh:e="Linear";break;case fh:e="Reinhard";break;case ph:e="Cineon";break;case nc:e="ACESFilmic";break;case gh:e="AgX";break;case _h:e="Neutral";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new D;function fm(){Jt.getLuminanceCoefficients(qs);const i=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function mm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rs(i){return i!==""}function Ml(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(_m,vm)}const xm=new Map;function vm(i,t){let e=Gt[t];if(e===void 0){const n=xm.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(ym,Mm)}function Mm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Em(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case zi:t="ENVMAP_TYPE_CUBE";break;case lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zi&&(t="ENVMAP_MODE_REFRACTION"),t}function bm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yo:t="ENVMAP_BLENDING_MULTIPLY";break;case hh:t="ENVMAP_BLENDING_MIX";break;case uh:t="ENVMAP_BLENDING_ADD";break}return t}function Tm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Am(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Sm(e),c=Em(e),h=wm(e),u=bm(e),f=Tm(e),p=pm(e),g=mm(r),_=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),d.length>0&&(d+=`
`)):(m=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),d=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Gt.tonemapping_pars_fragment:"",e.toneMapping!==On?dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,um("linearToOutputTexel",e.outputColorSpace),fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=Vo(o),o=Ml(o,e),o=Sl(o,e),a=Vo(a),a=Ml(a,e),a=Sl(a,e),o=El(o),a=El(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=E+m+o,y=E+d+a,A=xl(s,s.VERTEX_SHADER,w),T=xl(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(T)||"",X=F.trim(),W=z.trim(),$=V.trim();let H=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,T);else{const rt=yl(s,A,"vertex"),Et=yl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+rt+`
`+Et)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||$==="")&&(it=!1);it&&(P.diagnostics={runnable:H,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(A),s.deleteShader(T),L=new Js(s,_),M=gm(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,am)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pm(t),e.set(t,n)),n}}class Pm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Lm(i,t,e,n,s,r,o){const a=new mc,l=new Cm,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,P,F,z){const V=F.fog,X=z.geometry,W=M.isMeshStandardMaterial?F.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),H=$&&$.mapping===lr?$.image.height:null,it=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Et=rt!==void 0?rt.length:0;let Ft=0;X.morphAttributes.position!==void 0&&(Ft=1),X.morphAttributes.normal!==void 0&&(Ft=2),X.morphAttributes.color!==void 0&&(Ft=3);let se,fe,Yt,Y;if(it){const ne=hn[it];se=ne.vertexShader,fe=ne.fragmentShader}else se=M.vertexShader,fe=M.fragmentShader,l.update(M),Yt=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const K=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),At=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,Xt=!!M.map,Te=!!M.matcap,C=!!$,ee=!!M.aoMap,Lt=!!M.lightMap,Dt=!!M.bumpMap,ut=!!M.normalMap,Qt=!!M.displacementMap,mt=!!M.emissiveMap,Rt=!!M.metalnessMap,ge=!!M.roughnessMap,ue=M.anisotropy>0,b=M.clearcoat>0,x=M.dispersion>0,O=M.iridescence>0,q=M.sheen>0,Z=M.transmission>0,G=ue&&!!M.anisotropyMap,wt=b&&!!M.clearcoatMap,nt=b&&!!M.clearcoatNormalMap,vt=b&&!!M.clearcoatRoughnessMap,Mt=O&&!!M.iridescenceMap,tt=O&&!!M.iridescenceThicknessMap,ct=q&&!!M.sheenColorMap,Ut=q&&!!M.sheenRoughnessMap,St=!!M.specularMap,at=!!M.specularColorMap,Bt=!!M.specularIntensityMap,I=Z&&!!M.transmissionMap,et=Z&&!!M.thicknessMap,st=!!M.gradientMap,pt=!!M.alphaMap,J=M.alphaTest>0,j=!!M.alphaHash,_t=!!M.extensions;let kt=On;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(kt=i.toneMapping);const pe={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:se,fragmentShader:fe,defines:M.defines,customVertexShaderID:Yt,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:yt,batchingColor:yt&&z._colorsTexture!==null,instancing:At,instancingColor:At&&z.instanceColor!==null,instancingMorph:At&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ki,alphaToCoverage:!!M.alphaToCoverage,map:Xt,matcap:Te,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:H,aoMap:ee,lightMap:Lt,bumpMap:Dt,normalMap:ut,displacementMap:f&&Qt,emissiveMap:mt,normalMapObjectSpace:ut&&M.normalMapType===Mh,normalMapTangentSpace:ut&&M.normalMapType===ea,metalnessMap:Rt,roughnessMap:ge,anisotropy:ue,anisotropyMap:G,clearcoat:b,clearcoatMap:wt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:x,iridescence:O,iridescenceMap:Mt,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:ct,sheenRoughnessMap:Ut,specularMap:St,specularColorMap:at,specularIntensityMap:Bt,transmission:Z,transmissionMap:I,thicknessMap:et,gradientMap:st,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:J,alphaHash:j,combine:M.combine,mapUv:Xt&&_(M.map.channel),aoMapUv:ee&&_(M.aoMap.channel),lightMapUv:Lt&&_(M.lightMap.channel),bumpMapUv:Dt&&_(M.bumpMap.channel),normalMapUv:ut&&_(M.normalMap.channel),displacementMapUv:Qt&&_(M.displacementMap.channel),emissiveMapUv:mt&&_(M.emissiveMap.channel),metalnessMapUv:Rt&&_(M.metalnessMap.channel),roughnessMapUv:ge&&_(M.roughnessMap.channel),anisotropyMapUv:G&&_(M.anisotropyMap.channel),clearcoatMapUv:wt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(M.sheenRoughnessMap.channel),specularMapUv:St&&_(M.specularMap.channel),specularColorMapUv:at&&_(M.specularColorMap.channel),specularIntensityMapUv:Bt&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:et&&_(M.thicknessMap.channel),alphaMapUv:pt&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ut||ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Xt||pt),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ft,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Xt&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:mt&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Ce,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function d(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)v.push(P),v.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(v,M),w(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function w(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const v=g[M.type];let P;if(v){const F=hn[v];P=Kh.clone(F.uniforms)}else P=M.uniforms;return P}function A(M,v){let P;for(let F=0,z=h.length;F<z;F++){const V=h[F];if(V.cacheKey===v){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Am(i,v,M,r),h.push(P)),P}function T(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:L}}function Dm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Im(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Im),n.length>1&&n.sort(f||bl),s.length>1&&s.sort(f||bl)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Um(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Tl,i.set(n,[o])):s>=r.length?(o=new Tl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Om=0;function zm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function km(i){const t=new Nm,e=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new he,o=new he;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,w=0,y=0,A=0,T=0,R=0;c.sort(zm);for(let M=0,v=c.length;M<v;M++){const P=c[M],F=P.color,z=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*z,u+=F.g*z,f+=F.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],z);R++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(z),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const $=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,y++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(F).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=R,n.version=Om++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const w=c[d];if(w.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Al(i){const t=new km(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Bm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Al(i),t.set(s,[a])):r>=o.length?(a=new Al(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vm(i,t,e){let n=new sa;const s=new xt,r=new xt,o=new le,a=new du({depthPacking:yh}),l=new fu,c={},h=e.maxTextureSize,u={[kn]:Ce,[Ce]:kn,[on]:on},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Hm,fragmentShader:Gm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let d=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==En&&this.type===En,V=d===En&&this.type!==En;for(let X=0,W=T.length;X<W;X++){const $=T[X],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||z===!0||V===!0){const Et=this.type!==En?{minFilter:Ye,magFilter:Ye}:{};H.map!==null&&H.map.dispose(),H.map=new li(s.x,s.y,Et),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const rt=H.getViewportCount();for(let Et=0;Et<rt;Et++){const Ft=H.getViewport(Et);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),F.viewport(o),H.updateMatrices($,Et),n=H.getFrustum(),y(R,L,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===En&&E(H,L),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,P)};function E(T,R){const L=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,p,_,null)}function w(T,R,L,M){let v=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)v=P;else if(v=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=v.uuid,z=R.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let X=V[z];X===void 0&&(X=v.clone(),V[z]=X,R.addEventListener("dispose",A)),v=X}if(v.visible=R.visible,v.wireframe=R.wireframe,M===En?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=L}return v}function y(T,R,L,M,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===En)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const z=t.update(T),V=T.material;if(Array.isArray(V)){const X=z.groups;for(let W=0,$=X.length;W<$;W++){const H=X[W],it=V[H.materialIndex];if(it&&it.visible){const rt=w(T,it,M,v);T.onBeforeShadow(i,T,R,L,z,rt,H),i.renderBufferDirect(L,null,z,rt,T,H),T.onAfterShadow(i,T,R,L,z,rt,H)}}}else if(V.visible){const X=w(T,V,M,v);T.onBeforeShadow(i,T,R,L,z,X,null),i.renderBufferDirect(L,null,z,X,T,null),T.onAfterShadow(i,T,R,L,z,X,null)}}const F=T.children;for(let z=0,V=F.length;z<V;z++)y(F[z],R,L,M,v)}function A(T){T.target.removeEventListener("dispose",A);for(const L in c){const M=c[L],v=T.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const Wm={[to]:eo,[no]:ro,[io]:oo,[Fi]:so,[eo]:to,[ro]:no,[oo]:io,[so]:Fi};function Xm(i,t){function e(){let I=!1;const et=new le;let st=null;const pt=new le(0,0,0,0);return{setMask:function(J){st!==J&&!I&&(i.colorMask(J,J,J,J),st=J)},setLocked:function(J){I=J},setClear:function(J,j,_t,kt,pe){pe===!0&&(J*=kt,j*=kt,_t*=kt),et.set(J,j,_t,kt),pt.equals(et)===!1&&(i.clearColor(J,j,_t,kt),pt.copy(et))},reset:function(){I=!1,st=null,pt.set(-1,0,0,0)}}}function n(){let I=!1,et=!1,st=null,pt=null,J=null;return{setReversed:function(j){if(et!==j){const _t=t.get("EXT_clip_control");j?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),et=j;const kt=J;J=null,this.setClear(kt)}},getReversed:function(){return et},setTest:function(j){j?K(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(j){st!==j&&!I&&(i.depthMask(j),st=j)},setFunc:function(j){if(et&&(j=Wm[j]),pt!==j){switch(j){case to:i.depthFunc(i.NEVER);break;case eo:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=j}},setLocked:function(j){I=j},setClear:function(j){J!==j&&(et&&(j=1-j),i.clearDepth(j),J=j)},reset:function(){I=!1,st=null,pt=null,J=null,et=!1}}}function s(){let I=!1,et=null,st=null,pt=null,J=null,j=null,_t=null,kt=null,pe=null;return{setTest:function(ne){I||(ne?K(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(ne){et!==ne&&!I&&(i.stencilMask(ne),et=ne)},setFunc:function(ne,_n,cn){(st!==ne||pt!==_n||J!==cn)&&(i.stencilFunc(ne,_n,cn),st=ne,pt=_n,J=cn)},setOp:function(ne,_n,cn){(j!==ne||_t!==_n||kt!==cn)&&(i.stencilOp(ne,_n,cn),j=ne,_t=_n,kt=cn)},setLocked:function(ne){I=ne},setClear:function(ne){pe!==ne&&(i.clearStencil(ne),pe=ne)},reset:function(){I=!1,et=null,st=null,pt=null,J=null,j=null,_t=null,kt=null,pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,w=null,y=null,A=null,T=null,R=new zt(0,0,0),L=0,M=!1,v=null,P=null,F=null,z=null,V=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=$>=2);let it=null,rt={};const Et=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),se=new le().fromArray(Et),fe=new le().fromArray(Ft);function Yt(I,et,st,pt){const J=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<st;_t++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(et+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return j}const Y={};Y[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Fi),Dt(!1),ut(Ta),K(i.CULL_FACE),ee(Fn);function K(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ft(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function At(I,et){return u[I]!==et?(i.bindFramebuffer(I,et),u[I]=et,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=et),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=et),!0):!1}function yt(I,et){let st=p,pt=!1;if(I){st=f.get(et),st===void 0&&(st=[],f.set(et,st));const J=I.textures;if(st.length!==J.length||st[0]!==i.COLOR_ATTACHMENT0){for(let j=0,_t=J.length;j<_t;j++)st[j]=i.COLOR_ATTACHMENT0+j;st.length=J.length,pt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,pt=!0);pt&&i.drawBuffers(st)}function Xt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Te={[ii]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};Te[$c]=i.MIN,Te[Kc]=i.MAX;const C={[Zc]:i.ZERO,[Jc]:i.ONE,[Qc]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[eh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(I,et,st,pt,J,j,_t,kt,pe,ne){if(I===Fn){_===!0&&(ft(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),I!==qc){if(I!==m||ne!==M){if((d!==ii||y!==ii)&&(i.blendEquation(i.FUNC_ADD),d=ii,y=ii),ne)switch(I){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.ONE,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Aa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ra:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,w=null,A=null,T=null,R.set(0,0,0),L=0,m=I,M=ne}return}J=J||et,j=j||st,_t=_t||pt,(et!==d||J!==y)&&(i.blendEquationSeparate(Te[et],Te[J]),d=et,y=J),(st!==E||pt!==w||j!==A||_t!==T)&&(i.blendFuncSeparate(C[st],C[pt],C[j],C[_t]),E=st,w=pt,A=j,T=_t),(kt.equals(R)===!1||pe!==L)&&(i.blendColor(kt.r,kt.g,kt.b,pe),R.copy(kt),L=pe),m=I,M=!1}function Lt(I,et){I.side===on?ft(i.CULL_FACE):K(i.CULL_FACE);let st=I.side===Ce;et&&(st=!st),Dt(st),I.blending===Ii&&I.transparent===!1?ee(Fn):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const pt=I.stencilWrite;a.setTest(pt),pt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function ut(I){I!==Wc?(K(i.CULL_FACE),I!==P&&(I===Ta?i.cullFace(i.BACK):I===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),P=I}function Qt(I){I!==F&&(W&&i.lineWidth(I),F=I)}function mt(I,et,st){I?(K(i.POLYGON_OFFSET_FILL),(z!==et||V!==st)&&(i.polygonOffset(et,st),z=et,V=st)):ft(i.POLYGON_OFFSET_FILL)}function Rt(I){I?K(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function ge(I){I===void 0&&(I=i.TEXTURE0+X-1),it!==I&&(i.activeTexture(I),it=I)}function ue(I,et,st){st===void 0&&(it===null?st=i.TEXTURE0+X-1:st=it);let pt=rt[st];pt===void 0&&(pt={type:void 0,texture:void 0},rt[st]=pt),(pt.type!==I||pt.texture!==et)&&(it!==st&&(i.activeTexture(st),it=st),i.bindTexture(I,et||Y[I]),pt.type=I,pt.texture=et)}function b(){const I=rt[it];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Ut(I){fe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),fe.copy(I))}function St(I,et){let st=c.get(et);st===void 0&&(st=new WeakMap,c.set(et,st));let pt=st.get(I);pt===void 0&&(pt=i.getUniformBlockIndex(et,I.name),st.set(I,pt))}function at(I,et){const pt=c.get(et).get(I);l.get(et)!==pt&&(i.uniformBlockBinding(et,pt,I.__bindingPointIndex),l.set(et,pt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,rt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,w=null,y=null,A=null,T=null,R=new zt(0,0,0),L=0,M=!1,v=null,P=null,F=null,z=null,V=null,se.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ft,bindFramebuffer:At,drawBuffers:yt,useProgram:Xt,setBlending:ee,setMaterial:Lt,setFlipSided:Dt,setCullFace:ut,setLineWidth:Qt,setPolygonOffset:mt,setScissorTest:Rt,activeTexture:ge,bindTexture:ue,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Mt,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:at,texStorage2D:nt,texStorage3D:vt,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:wt,scissor:ct,viewport:Ut,reset:Bt}}function qm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):er("canvas")}function _(b,x,O){let q=1;const Z=ue(b);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(q*Z.width),wt=Math.floor(q*Z.height);u===void 0&&(u=g(G,wt));const nt=x?g(G,wt):u;return nt.width=G,nt.height=wt,nt.getContext("2d").drawImage(b,0,0,G,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+wt+")."),nt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,x,O,q,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=x;if(x===i.RED&&(O===i.FLOAT&&(G=i.R32F),O===i.HALF_FLOAT&&(G=i.R16F),O===i.UNSIGNED_BYTE&&(G=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.R8UI),O===i.UNSIGNED_SHORT&&(G=i.R16UI),O===i.UNSIGNED_INT&&(G=i.R32UI),O===i.BYTE&&(G=i.R8I),O===i.SHORT&&(G=i.R16I),O===i.INT&&(G=i.R32I)),x===i.RG&&(O===i.FLOAT&&(G=i.RG32F),O===i.HALF_FLOAT&&(G=i.RG16F),O===i.UNSIGNED_BYTE&&(G=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RG8UI),O===i.UNSIGNED_SHORT&&(G=i.RG16UI),O===i.UNSIGNED_INT&&(G=i.RG32UI),O===i.BYTE&&(G=i.RG8I),O===i.SHORT&&(G=i.RG16I),O===i.INT&&(G=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RGB8UI),O===i.UNSIGNED_SHORT&&(G=i.RGB16UI),O===i.UNSIGNED_INT&&(G=i.RGB32UI),O===i.BYTE&&(G=i.RGB8I),O===i.SHORT&&(G=i.RGB16I),O===i.INT&&(G=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),O===i.UNSIGNED_INT&&(G=i.RGBA32UI),O===i.BYTE&&(G=i.RGBA8I),O===i.SHORT&&(G=i.RGBA16I),O===i.INT&&(G=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),x===i.RGBA){const wt=Z?Qs:Jt.getTransfer(q);O===i.FLOAT&&(G=i.RGBA32F),O===i.HALF_FLOAT&&(G=i.RGBA16F),O===i.UNSIGNED_BYTE&&(G=wt===oe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(b,x){let O;return b?x===null||x===ai||x===ds?O=i.DEPTH24_STENCIL8:x===fn?O=i.DEPTH32F_STENCIL8:x===us&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ai||x===ds?O=i.DEPTH_COMPONENT24:x===fn?O=i.DEPTH_COMPONENT32F:x===us&&(O=i.DEPTH_COMPONENT16),O}function A(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ye&&b.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){const x=b.target;x.removeEventListener("dispose",T),L(x),x.isVideoTexture&&h.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),v(x)}function L(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,q=f.get(O);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys(q).length===0&&f.delete(O)}n.remove(b)}function M(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const O=b.source,q=f.get(O);delete q[x.__cacheKey],o.memory.textures--}function v(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,Z=O.length;q<Z;q++){const G=n.get(O[q]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(b)}let P=0;function F(){P=0}function z(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function V(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function X(b,x){const O=n.get(b);if(b.isVideoTexture&&Rt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,x);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function W(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Y(O,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function $(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Y(O,b,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function H(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){K(O,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const it={[hs]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},rt={[Ye]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},Et={[Sh]:i.NEVER,[Rh]:i.ALWAYS,[Eh]:i.LESS,[uc]:i.LEQUAL,[wh]:i.EQUAL,[Ah]:i.GEQUAL,[bh]:i.GREATER,[Th]:i.NOTEQUAL};function Ft(b,x){if(x.type===fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===pr||x.magFilter===ys||x.magFilter===oi||x.minFilter===dn||x.minFilter===pr||x.minFilter===ys||x.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,it[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,rt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,rt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==ys&&x.minFilter!==oi||x.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",T));const q=x.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const G=V(x);if(G!==b.__cacheKey){Z[G]===void 0&&(Z[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[G].usedTimes++;const wt=Z[b.__cacheKey];wt!==void 0&&(Z[b.__cacheKey].usedTimes--,wt.usedTimes===0&&M(x)),b.__cacheKey=G,b.__webglTexture=Z[G].texture}return O}function fe(b,x,O){return Math.floor(Math.floor(b/O)/x)}function Yt(b,x,O,q){const G=b.updateRanges;if(G.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,q,x.data);else{G.sort((tt,ct)=>tt.start-ct.start);let wt=0;for(let tt=1;tt<G.length;tt++){const ct=G[wt],Ut=G[tt],St=ct.start+ct.count,at=fe(Ut.start,x.width,4),Bt=fe(ct.start,x.width,4);Ut.start<=St+1&&at===Bt&&fe(Ut.start+Ut.count-1,x.width,4)===at?ct.count=Math.max(ct.count,Ut.start+Ut.count-ct.start):(++wt,G[wt]=Ut)}G.length=wt+1;const nt=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let tt=0,ct=G.length;tt<ct;tt++){const Ut=G[tt],St=Math.floor(Ut.start/4),at=Math.ceil(Ut.count/4),Bt=St%x.width,I=Math.floor(St/x.width),et=at,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Bt,I,et,st,O,q,x.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,nt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Y(b,x,O){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const Z=se(b,x),G=x.source;e.bindTexture(q,b.__webglTexture,i.TEXTURE0+O);const wt=n.get(G);if(G.version!==wt.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const nt=Jt.getPrimaries(Jt.workingColorSpace),vt=x.colorSpace===Un?null:Jt.getPrimaries(x.colorSpace),Mt=x.colorSpace===Un||nt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let tt=_(x.image,!1,s.maxTextureSize);tt=ge(x,tt);const ct=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type);let St=w(x.internalFormat,ct,Ut,x.colorSpace,x.isVideoTexture);Ft(q,x);let at;const Bt=x.mipmaps,I=x.isVideoTexture!==!0,et=wt.__version===void 0||Z===!0,st=G.dataReady,pt=A(x,tt);if(x.isDepthTexture)St=y(x.format===ps,x.type),et&&(I?e.texStorage2D(i.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,ct,Ut,null));else if(x.isDataTexture)if(Bt.length>0){I&&et&&e.texStorage2D(i.TEXTURE_2D,pt,St,Bt[0].width,Bt[0].height);for(let J=0,j=Bt.length;J<j;J++)at=Bt[J],I?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,ct,Ut,at.data):e.texImage2D(i.TEXTURE_2D,J,St,at.width,at.height,0,ct,Ut,at.data);x.generateMipmaps=!1}else I?(et&&e.texStorage2D(i.TEXTURE_2D,pt,St,tt.width,tt.height),st&&Yt(x,tt,ct,Ut)):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,ct,Ut,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,St,Bt[0].width,Bt[0].height,tt.depth);for(let J=0,j=Bt.length;J<j;J++)if(at=Bt[J],x.format!==ln)if(ct!==null)if(I){if(st)if(x.layerUpdates.size>0){const _t=sl(at.width,at.height,x.format,x.type);for(const kt of x.layerUpdates){const pe=at.data.subarray(kt*_t/at.data.BYTES_PER_ELEMENT,(kt+1)*_t/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,kt,at.width,at.height,1,ct,pe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,ct,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,St,at.width,at.height,tt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,ct,Ut,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,St,at.width,at.height,tt.depth,0,ct,Ut,at.data)}else{I&&et&&e.texStorage2D(i.TEXTURE_2D,pt,St,Bt[0].width,Bt[0].height);for(let J=0,j=Bt.length;J<j;J++)at=Bt[J],x.format!==ln?ct!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,ct,at.data):e.compressedTexImage2D(i.TEXTURE_2D,J,St,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,ct,Ut,at.data):e.texImage2D(i.TEXTURE_2D,J,St,at.width,at.height,0,ct,Ut,at.data)}else if(x.isDataArrayTexture)if(I){if(et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,St,tt.width,tt.height,tt.depth),st)if(x.layerUpdates.size>0){const J=sl(tt.width,tt.height,x.format,x.type);for(const j of x.layerUpdates){const _t=tt.data.subarray(j*J/tt.data.BYTES_PER_ELEMENT,(j+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ct,Ut,_t)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Ut,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,ct,Ut,tt.data);else if(x.isData3DTexture)I?(et&&e.texStorage3D(i.TEXTURE_3D,pt,St,tt.width,tt.height,tt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Ut,tt.data)):e.texImage3D(i.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,ct,Ut,tt.data);else if(x.isFramebufferTexture){if(et)if(I)e.texStorage2D(i.TEXTURE_2D,pt,St,tt.width,tt.height);else{let J=tt.width,j=tt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,St,J,j,0,ct,Ut,null),J>>=1,j>>=1}}else if(Bt.length>0){if(I&&et){const J=ue(Bt[0]);e.texStorage2D(i.TEXTURE_2D,pt,St,J.width,J.height)}for(let J=0,j=Bt.length;J<j;J++)at=Bt[J],I?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ct,Ut,at):e.texImage2D(i.TEXTURE_2D,J,St,ct,Ut,at);x.generateMipmaps=!1}else if(I){if(et){const J=ue(tt);e.texStorage2D(i.TEXTURE_2D,pt,St,J.width,J.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ut,tt)}else e.texImage2D(i.TEXTURE_2D,0,St,ct,Ut,tt);m(x)&&d(q),wt.__version=G.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function K(b,x,O){if(x.image.length!==6)return;const q=se(b,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const G=n.get(Z);if(Z.version!==G.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const wt=Jt.getPrimaries(Jt.workingColorSpace),nt=x.colorSpace===Un?null:Jt.getPrimaries(x.colorSpace),vt=x.colorSpace===Un||wt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let j=0;j<6;j++)!Mt&&!tt?ct[j]=_(x.image[j],!0,s.maxCubemapSize):ct[j]=tt?x.image[j].image:x.image[j],ct[j]=ge(x,ct[j]);const Ut=ct[0],St=r.convert(x.format,x.colorSpace),at=r.convert(x.type),Bt=w(x.internalFormat,St,at,x.colorSpace),I=x.isVideoTexture!==!0,et=G.__version===void 0||q===!0,st=Z.dataReady;let pt=A(x,Ut);Ft(i.TEXTURE_CUBE_MAP,x);let J;if(Mt){I&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Bt,Ut.width,Ut.height);for(let j=0;j<6;j++){J=ct[j].mipmaps;for(let _t=0;_t<J.length;_t++){const kt=J[_t];x.format!==ln?St!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,kt.width,kt.height,St,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,Bt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,kt.width,kt.height,St,at,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,Bt,kt.width,kt.height,0,St,at,kt.data)}}}else{if(J=x.mipmaps,I&&et){J.length>0&&pt++;const j=ue(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Bt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ct[j].width,ct[j].height,St,at,ct[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,ct[j].width,ct[j].height,0,St,at,ct[j].data);for(let _t=0;_t<J.length;_t++){const pe=J[_t].image[j].image;I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,pe.width,pe.height,St,at,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,Bt,pe.width,pe.height,0,St,at,pe.data)}}else{I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St,at,ct[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,St,at,ct[j]);for(let _t=0;_t<J.length;_t++){const kt=J[_t];I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,St,at,kt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,Bt,St,at,kt.image[j])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),G.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ft(b,x,O,q,Z,G){const wt=r.convert(O.format,O.colorSpace),nt=r.convert(O.type),vt=w(O.internalFormat,wt,nt,O.colorSpace),Mt=n.get(x),tt=n.get(O);if(tt.__renderTarget=x,!Mt.__hasExternalTextures){const ct=Math.max(1,x.width>>G),Ut=Math.max(1,x.height>>G);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,G,vt,ct,Ut,x.depth,0,wt,nt,null):e.texImage2D(Z,G,vt,ct,Ut,0,wt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),mt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,tt.__webglTexture,0,Qt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,tt.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,G=y(x.stencilBuffer,Z),wt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=Qt(x);mt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,G,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,G,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,G,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,b)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const G=q[Z],wt=r.convert(G.format,G.colorSpace),nt=r.convert(G.type),vt=w(G.internalFormat,wt,nt,G.colorSpace),Mt=Qt(x);O&&mt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,vt,x.width,x.height):mt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,vt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,vt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const Z=q.__webglTexture,G=Qt(x);if(x.depthTexture.format===fs)mt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===ps)mt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xt(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?yt(x.__webglFramebuffer[0],b):yt(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),At(x.__webglDepthbuffer[q],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),At(x.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(b,x,O){const q=n.get(b);x!==void 0&&ft(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Xt(b)}function C(b){const x=b.texture,O=n.get(b),q=n.get(x);b.addEventListener("dispose",R);const Z=b.textures,G=b.isWebGLCubeRenderTarget===!0,wt=Z.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,o.memory.textures++),G){O.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[nt]=[];for(let vt=0;vt<x.mipmaps.length;vt++)O.__webglFramebuffer[nt][vt]=i.createFramebuffer()}else O.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)O.__webglFramebuffer[nt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let nt=0,vt=Z.length;nt<vt;nt++){const Mt=n.get(Z[nt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&mt(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const vt=Z[nt];O.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[nt]);const Mt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),ct=w(vt.internalFormat,Mt,tt,vt.colorSpace,b.isXRRenderTarget===!0),Ut=Qt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,ct,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,O.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),At(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)ft(O.__webglFramebuffer[nt][vt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt);else ft(O.__webglFramebuffer[nt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let nt=0,vt=Z.length;nt<vt;nt++){const Mt=Z[nt],tt=n.get(Mt);let ct=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),Ft(ct,Mt),ft(O.__webglFramebuffer,b,Mt,i.COLOR_ATTACHMENT0+nt,ct,0),m(Mt)&&d(ct)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(nt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,q.__webglTexture),Ft(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)ft(O.__webglFramebuffer[vt],b,x,i.COLOR_ATTACHMENT0,nt,vt);else ft(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,nt,0);m(x)&&d(nt),e.unbindTexture()}b.depthBuffer&&Xt(b)}function ee(b){const x=b.textures;for(let O=0,q=x.length;O<q;O++){const Z=x[O];if(m(Z)){const G=E(b),wt=n.get(Z).__webglTexture;e.bindTexture(G,wt),d(G),e.unbindTexture()}}}const Lt=[],Dt=[];function ut(b){if(b.samples>0){if(mt(b)===!1){const x=b.textures,O=b.width,q=b.height;let Z=i.COLOR_BUFFER_BIT;const G=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(b),nt=x.length>1;if(nt)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const vt=b.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const tt=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Z,i.NEAREST),l===!0&&(Lt.length=0,Dt.length=0,Lt.push(i.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Lt.push(G),Dt.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const tt=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Qt(b){return Math.min(s.maxSamples,b.samples)}function mt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ge(b,x){const O=b.colorSpace,q=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ki&&O!==Un&&(Jt.getTransfer(O)===oe?(q!==ln||Z!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Te,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=mt}function Ym(i,t){function e(n,s=Un){let r;const o=Jt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===jo)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===lc)return i.ALPHA;if(n===cc)return i.RGB;if(n===ln)return i.RGBA;if(n===fs)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===Qo)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===js||n===$s||n===Ks||n===Zs)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mo||n===go)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_o)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xo||n===vo||n===yo||n===Mo||n===So||n===Eo||n===wo||n===bo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Io||n===Uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Do)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Fo||n===Oo||n===zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ac(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:jm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Km,d={},E=e.getContextAttributes();let w=null,y=null;const A=[],T=[],R=new xt;let L=null;const M=new Xe;M.viewport=new le;const v=new Xe;v.viewport=new le;const P=[M,v],F=new _u;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=A[Y];return K===void 0&&(K=new Or,A[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=A[Y];return K===void 0&&(K=new Or,A[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=A[Y];return K===void 0&&(K=new Or,A[Y]=K),K.getHandSpace()};function X(Y){const K=T.indexOf(Y.inputSource);if(K===-1)return;const ft=A[K];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,c||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<A.length;Y++){const K=T[Y];K!==null&&(T[Y]=null,A[Y].disconnect(K))}z=null,V=null,m.reset();for(const Y in d)delete d[Y];t.setRenderTarget(w),p=null,f=null,u=null,s=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,At=null,yt=null;E.depth&&(yt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=E.stencil?ps:fs,At=E.stencil?ds:ai);const Xt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new li(f.textureWidth,f.textureHeight,{format:ln,type:mn,depthTexture:new Tc(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ft={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new li(p.framebufferWidth,p.framebufferHeight,{format:ln,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let K=0;K<Y.removed.length;K++){const ft=Y.removed[K],At=T.indexOf(ft);At>=0&&(T[At]=null,A[At].disconnect(ft))}for(let K=0;K<Y.added.length;K++){const ft=Y.added[K];let At=T.indexOf(ft);if(At===-1){for(let Xt=0;Xt<A.length;Xt++)if(Xt>=T.length){T.push(ft),At=Xt;break}else if(T[Xt]===null){T[Xt]=ft,At=Xt;break}if(At===-1)break}const yt=A[At];yt&&yt.connect(ft)}}const H=new D,it=new D;function rt(Y,K,ft){H.setFromMatrixPosition(K.matrixWorld),it.setFromMatrixPosition(ft.matrixWorld);const At=H.distanceTo(it),yt=K.projectionMatrix.elements,Xt=ft.projectionMatrix.elements,Te=yt[14]/(yt[10]-1),C=yt[14]/(yt[10]+1),ee=(yt[9]+1)/yt[5],Lt=(yt[9]-1)/yt[5],Dt=(yt[8]-1)/yt[0],ut=(Xt[8]+1)/Xt[0],Qt=Te*Dt,mt=Te*ut,Rt=At/(-Dt+ut),ge=Rt*-Dt;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ge),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),yt[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ue=Te+Rt,b=C+Rt,x=Qt-ge,O=mt+(At-ge),q=ee*C/b*ue,Z=Lt*C/b*ue;Y.projectionMatrix.makePerspective(x,O,q,Z,ue,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Et(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let K=Y.near,ft=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),F.near=v.near=M.near=K,F.far=v.far=M.far=ft,(z!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,V=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;const At=Y.parent,yt=F.cameras;Et(F,At);for(let Xt=0;Xt<yt.length;Xt++)Et(yt[Xt],At);yt.length===2?rt(F,M,v):F.projectionMatrix.copy(M.projectionMatrix),Ft(Y,F,At)};function Ft(Y,K,ft){ft===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return d[Y]};let se=null;function fe(Y,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let At=!1;ft.length!==F.cameras.length&&(F.cameras.length=0,At=!0);for(let C=0;C<ft.length;C++){const ee=ft[C];let Lt=null;if(p!==null)Lt=p.getViewport(ee);else{const ut=u.getViewSubImage(f,ee);Lt=ut.viewport,C===0&&(t.setRenderTargetTextures(y,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(y))}let Dt=P[C];Dt===void 0&&(Dt=new Xe,Dt.layers.enable(C),Dt.viewport=new le,P[C]=Dt),Dt.matrix.fromArray(ee.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(ee.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),C===0&&(F.matrix.copy(Dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),At===!0&&F.cameras.push(Dt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const C=u.getDepthInformation(ft[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<ft.length;C++){const ee=ft[C].camera;if(ee){let Lt=d[ee];Lt||(Lt=new Ac,d[ee]=Lt);const Dt=u.getCameraImage(ee);Lt.sourceTexture=Dt}}}}for(let ft=0;ft<A.length;ft++){const At=T[ft],yt=A[ft];At!==null&&yt!==void 0&&yt.update(At,K,c||o)}se&&se(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Yt=new Pc;Yt.setAnimationLoop(fe),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const Zn=new Qe,Jm=new he;function Qm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,vc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,w,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ce&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ce&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),w=E.envMap,y=E.envMapRotation;w&&(m.envMap.value=w,Zn.copy(y),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Zn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ce&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const y=w.program;n.uniformBlockBinding(E,y)}function c(E,w){let y=s[E.id];y===void 0&&(g(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(E,A);const T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){const w=u();E.__bindingPointIndex=w;const y=i.createBuffer(),A=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=s[E.id],y=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,R=y.length;T<R;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,v=L.length;M<v;M++){const P=L[M];if(p(P,T,M,A)===!0){const F=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let X=0;X<z.length;X++){const W=z[X],$=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,w,y,A){const T=E.value,R=w+"_"+y;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const L=A[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(E){const w=E.uniforms;let y=0;const A=16;for(let R=0,L=w.length;R<L;R++){const M=Array.isArray(w[R])?w[R]:[w[R]];for(let v=0,P=M.length;v<P;v++){const F=M[v],z=Array.isArray(F.value)?F.value:[F.value];for(let V=0,X=z.length;V<X;V++){const W=z[V],$=_(W),H=y%A,it=H%$.boundary,rt=H+it;y+=it,rt!==0&&A-rt<$.storage&&(y+=A-rt),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=$.storage}}}const T=y%A;return T>0&&(y+=A-T),E.__size=y,E.__cache={},this}function _(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){const w=E.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class e0{constructor(t={}){const{canvas:e=Ph(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=Be;let T=0,R=0,L=null,M=-1,v=null;const P=new le,F=new le;let z=null;const V=new zt(0);let X=0,W=e.width,$=e.height,H=1,it=null,rt=null;const Et=new le(0,0,W,$),Ft=new le(0,0,W,$);let se=!1;const fe=new sa;let Yt=!1,Y=!1;const K=new he,ft=new D,At=new le,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Te(){return L===null?H:1}let C=n;function ee(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",J,!1),C===null){const U="webgl2";if(C=ee(U,S),C===null)throw ee(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Lt,Dt,ut,Qt,mt,Rt,ge,ue,b,x,O,q,Z,G,wt,nt,vt,Mt,tt,ct,Ut,St,at,Bt;function I(){Lt=new up(C),Lt.init(),St=new Ym(C,Lt),Dt=new sp(C,Lt,t,St),ut=new Xm(C,Lt),Dt.reversedDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Qt=new pp(C),mt=new Dm,Rt=new qm(C,Lt,ut,mt,Dt,St,Qt),ge=new op(y),ue=new hp(y),b=new vu(C),at=new np(C,b),x=new dp(C,b,Qt,at),O=new gp(C,x,b,Qt),tt=new mp(C,Dt,Rt),nt=new rp(mt),q=new Lm(y,ge,ue,Lt,Dt,at,nt),Z=new Qm(y,mt),G=new Um,wt=new Bm(Lt),Mt=new ep(y,ge,ue,ut,O,p,l),vt=new Vm(y,O,Dt),Bt=new t0(C,Qt,Dt,ut),ct=new ip(C,Lt,Qt),Ut=new fp(C,Lt,Qt),Qt.programs=q.programs,y.capabilities=Dt,y.extensions=Lt,y.properties=mt,y.renderLists=G,y.shadowMap=vt,y.state=ut,y.info=Qt}I();const et=new Zm(y,C);this.xr=et,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(W,$,!1))},this.getSize=function(S){return S.set(W,$)},this.setSize=function(S,U,k=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,$=U,e.width=Math.floor(S*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*H,$*H).floor()},this.setDrawingBufferSize=function(S,U,k){W=S,$=U,H=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Et)},this.setViewport=function(S,U,k,B){S.isVector4?Et.set(S.x,S.y,S.z,S.w):Et.set(S,U,k,B),ut.viewport(P.copy(Et).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,U,k,B){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,U,k,B),ut.scissor(F.copy(Ft).multiplyScalar(H).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){ut.setScissorTest(se=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,k=!0){let B=0;if(S){let N=!1;if(L!==null){const Q=L.texture.format;N=Q===ta||Q===Qo||Q===Jo}if(N){const Q=L.texture.type,lt=Q===mn||Q===ai||Q===us||Q===ds||Q===$o||Q===Ko,gt=Mt.getClearColor(),dt=Mt.getClearAlpha(),It=gt.r,Nt=gt.g,Tt=gt.b;lt?(g[0]=It,g[1]=Nt,g[2]=Tt,g[3]=dt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=It,_[1]=Nt,_[2]=Tt,_[3]=dt,C.clearBufferiv(C.COLOR,0,_))}else B|=C.COLOR_BUFFER_BIT}U&&(B|=C.DEPTH_BUFFER_BIT),k&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Mt.dispose(),G.dispose(),wt.dispose(),mt.dispose(),ge.dispose(),ue.dispose(),O.dispose(),at.dispose(),Bt.dispose(),q.dispose(),et.dispose(),et.removeEventListener("sessionstart",cn),et.removeEventListener("sessionend",ya),Wn.stop()};function st(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=Qt.autoReset,U=vt.enabled,k=vt.autoUpdate,B=vt.needsUpdate,N=vt.type;I(),Qt.autoReset=S,vt.enabled=U,vt.autoUpdate=k,vt.needsUpdate=B,vt.type=N}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function j(S){const U=S.target;U.removeEventListener("dispose",j),_t(U)}function _t(S){kt(S),mt.remove(S)}function kt(S){const U=mt.get(S).programs;U!==void 0&&(U.forEach(function(k){q.releaseProgram(k)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,B,N,Q){U===null&&(U=yt);const lt=N.isMesh&&N.matrixWorld.determinant()<0,gt=zc(S,U,k,B,N);ut.setMaterial(B,lt);let dt=k.index,It=1;if(B.wireframe===!0){if(dt=x.getWireframeAttribute(k),dt===void 0)return;It=2}const Nt=k.drawRange,Tt=k.attributes.position;let qt=Nt.start*It,re=(Nt.start+Nt.count)*It;Q!==null&&(qt=Math.max(qt,Q.start*It),re=Math.min(re,(Q.start+Q.count)*It)),dt!==null?(qt=Math.max(qt,0),re=Math.min(re,dt.count)):Tt!=null&&(qt=Math.max(qt,0),re=Math.min(re,Tt.count));const ve=re-qt;if(ve<0||ve===1/0)return;at.setup(N,B,gt,k,dt);let me,de=ct;if(dt!==null&&(me=b.get(dt),de=Ut,de.setIndex(me)),N.isMesh)B.wireframe===!0?(ut.setLineWidth(B.wireframeLinewidth*Te()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(N.isLine){let Ct=B.linewidth;Ct===void 0&&(Ct=1),ut.setLineWidth(Ct*Te()),N.isLineSegments?de.setMode(C.LINES):N.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else N.isPoints?de.setMode(C.POINTS):N.isSprite&&de.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))de.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ct=N._multiDrawStarts,_e=N._multiDrawCounts,Kt=N._multiDrawCount,He=dt?b.get(dt).bytesPerElement:1,hi=mt.get(B).currentProgram.getUniforms();for(let Ge=0;Ge<Kt;Ge++)hi.setValue(C,"_gl_DrawID",Ge),de.render(Ct[Ge]/He,_e[Ge])}else if(N.isInstancedMesh)de.renderInstances(qt,ve,N.count);else if(k.isInstancedBufferGeometry){const Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_e=Math.min(k.instanceCount,Ct);de.renderInstances(qt,ve,_e)}else de.render(qt,ve)};function pe(S,U,k){S.transparent===!0&&S.side===on&&S.forceSinglePass===!1?(S.side=Ce,S.needsUpdate=!0,vs(S,U,k),S.side=kn,S.needsUpdate=!0,vs(S,U,k),S.side=on):vs(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),d=wt.get(k),d.init(U),w.push(d),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const B=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const gt=Q[lt];pe(gt,k,N),B.add(gt)}else pe(Q,k,N),B.add(Q)}),d=w.pop(),B},this.compileAsync=function(S,U,k=null){const B=this.compile(S,U,k);return new Promise(N=>{function Q(){if(B.forEach(function(lt){mt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){N(S);return}setTimeout(Q,10)}Lt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ne=null;function _n(S){ne&&ne(S)}function cn(){Wn.stop()}function ya(){Wn.start()}const Wn=new Pc;Wn.setAnimationLoop(_n),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(S){ne=S,et.setAnimationLoop(S),S===null?Wn.stop():Wn.start()},et.addEventListener("sessionstart",cn),et.addEventListener("sessionend",ya),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,L),d=wt.get(S,w.length),d.init(U),w.push(d),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),fe.setFromProjectionMatrix(K,pn,U.reversedDepth),Y=this.localClippingEnabled,Yt=nt.init(this.clippingPlanes,Y),m=G.get(S,E.length),m.init(),E.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&dr(Q,U,-1/0,y.sortObjects)}dr(S,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(it,rt),Xt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Xt&&Mt.addToRenderList(m,S),this.info.render.frame++,Yt===!0&&nt.beginShadows();const k=d.state.shadowsArray;vt.render(k,S,U),Yt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let lt=0,gt=Q.length;lt<gt;lt++){const dt=Q[lt];Sa(B,N,S,dt)}Xt&&Mt.render(S);for(let lt=0,gt=Q.length;lt<gt;lt++){const dt=Q[lt];Ma(m,S,dt,dt.viewport)}}else N.length>0&&Sa(B,N,S,U),Xt&&Mt.render(S),Ma(m,S,U);L!==null&&R===0&&(Rt.updateMultisampleRenderTarget(L),Rt.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,U),at.resetDefaultState(),M=-1,v=null,w.pop(),w.length>0?(d=w[w.length-1],Yt===!0&&nt.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function dr(S,U,k,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||fe.intersectsSprite(S)){B&&At.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);const lt=O.update(S),gt=S.material;gt.visible&&m.push(S,lt,gt,k,At.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||fe.intersectsObject(S))){const lt=O.update(S),gt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),At.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),At.copy(lt.boundingSphere.center)),At.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(gt)){const dt=lt.groups;for(let It=0,Nt=dt.length;It<Nt;It++){const Tt=dt[It],qt=gt[Tt.materialIndex];qt&&qt.visible&&m.push(S,lt,qt,k,At.z,Tt)}}else gt.visible&&m.push(S,lt,gt,k,At.z,null)}}const Q=S.children;for(let lt=0,gt=Q.length;lt<gt;lt++)dr(Q[lt],U,k,B)}function Ma(S,U,k,B){const N=S.opaque,Q=S.transmissive,lt=S.transparent;d.setupLightsView(k),Yt===!0&&nt.setGlobalState(y.clippingPlanes,k),B&&ut.viewport(P.copy(B)),N.length>0&&xs(N,U,k),Q.length>0&&xs(Q,U,k),lt.length>0&&xs(lt,U,k),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Sa(S,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new li(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?gs:mn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[B.id],lt=B.viewport||P;Q.setSize(lt.z*y.transmissionResolutionScale,lt.w*y.transmissionResolutionScale);const gt=y.getRenderTarget(),dt=y.getActiveCubeFace(),It=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(V),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&Mt.render(k);const Nt=y.toneMapping;y.toneMapping=On;const Tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),Yt===!0&&nt.setGlobalState(y.clippingPlanes,B),xs(S,k,B),Rt.updateMultisampleRenderTarget(Q),Rt.updateRenderTargetMipmap(Q),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let re=0,ve=U.length;re<ve;re++){const me=U[re],de=me.object,Ct=me.geometry,_e=me.material,Kt=me.group;if(_e.side===on&&de.layers.test(B.layers)){const He=_e.side;_e.side=Ce,_e.needsUpdate=!0,Ea(de,k,B,Ct,_e,Kt),_e.side=He,_e.needsUpdate=!0,qt=!0}}qt===!0&&(Rt.updateMultisampleRenderTarget(Q),Rt.updateRenderTargetMipmap(Q))}y.setRenderTarget(gt,dt,It),y.setClearColor(V,X),Tt!==void 0&&(B.viewport=Tt),y.toneMapping=Nt}function xs(S,U,k){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=S.length;N<Q;N++){const lt=S[N],gt=lt.object,dt=lt.geometry,It=lt.group;let Nt=lt.material;Nt.allowOverride===!0&&B!==null&&(Nt=B),gt.layers.test(k.layers)&&Ea(gt,U,k,dt,Nt,It)}}function Ea(S,U,k,B,N,Q){S.onBeforeRender(y,U,k,B,N,Q),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,U,k,B,S,Q),N.transparent===!0&&N.side===on&&N.forceSinglePass===!1?(N.side=Ce,N.needsUpdate=!0,y.renderBufferDirect(k,U,B,N,S,Q),N.side=kn,N.needsUpdate=!0,y.renderBufferDirect(k,U,B,N,S,Q),N.side=on):y.renderBufferDirect(k,U,B,N,S,Q),S.onAfterRender(y,U,k,B,N,Q)}function vs(S,U,k){U.isScene!==!0&&(U=yt);const B=mt.get(S),N=d.state.lights,Q=d.state.shadowsArray,lt=N.state.version,gt=q.getParameters(S,N.state,Q,U,k),dt=q.getProgramCacheKey(gt);let It=B.programs;B.environment=S.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(S.isMeshStandardMaterial?ue:ge).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",j),It=new Map,B.programs=It);let Nt=It.get(dt);if(Nt!==void 0){if(B.currentProgram===Nt&&B.lightsStateVersion===lt)return ba(S,gt),Nt}else gt.uniforms=q.getUniforms(S),S.onBeforeCompile(gt,y),Nt=q.acquireProgram(gt,dt),It.set(dt,Nt),B.uniforms=gt.uniforms;const Tt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),ba(S,gt),B.needsLights=Bc(S),B.lightsStateVersion=lt,B.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Nt,B.uniformsList=null,Nt}function wa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Js.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ba(S,U){const k=mt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function zc(S,U,k,B,N){U.isScene!==!0&&(U=yt),Rt.resetTextureUnits();const Q=U.fog,lt=B.isMeshStandardMaterial?U.environment:null,gt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ki,dt=(B.isMeshStandardMaterial?ue:ge).get(B.envMap||lt),It=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,re=!!k.morphAttributes.color;let ve=On;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=y.toneMapping);const me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=me!==void 0?me.length:0,Ct=mt.get(B),_e=d.state.lights;if(Yt===!0&&(Y===!0||S!==v)){const Le=S===v&&B.id===M;nt.setState(B,S,Le)}let Kt=!1;B.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==_e.state.version||Ct.outputColorSpace!==gt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==dt||B.fog===!0&&Ct.fog!==Q||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==It||Ct.vertexTangents!==Nt||Ct.morphTargets!==Tt||Ct.morphNormals!==qt||Ct.morphColors!==re||Ct.toneMapping!==ve||Ct.morphTargetsCount!==de)&&(Kt=!0):(Kt=!0,Ct.__version=B.version);let He=Ct.currentProgram;Kt===!0&&(He=vs(B,U,N));let hi=!1,Ge=!1,Yi=!1;const xe=He.getUniforms(),je=Ct.uniforms;if(ut.useProgram(He.program)&&(hi=!0,Ge=!0,Yi=!0),B.id!==M&&(M=B.id,Ge=!0),hi||v!==S){ut.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),xe.setValue(C,"projectionMatrix",S.projectionMatrix),xe.setValue(C,"viewMatrix",S.matrixWorldInverse);const ze=xe.map.cameraPosition;ze!==void 0&&ze.setValue(C,ft.setFromMatrixPosition(S.matrixWorld)),Dt.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xe.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Ge=!0,Yi=!0)}if(N.isSkinnedMesh){xe.setOptional(C,N,"bindMatrix"),xe.setOptional(C,N,"bindMatrixInverse");const Le=N.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),xe.setValue(C,"boneTexture",Le.boneTexture,Rt))}N.isBatchedMesh&&(xe.setOptional(C,N,"batchingTexture"),xe.setValue(C,"batchingTexture",N._matricesTexture,Rt),xe.setOptional(C,N,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",N._indirectTexture,Rt),xe.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",N._colorsTexture,Rt));const $e=k.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&tt.update(N,k,He),(Ge||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,xe.setValue(C,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(je.envMap.value=dt,je.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(je.envMapIntensity.value=U.environmentIntensity),Ge&&(xe.setValue(C,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&kc(je,Yi),Q&&B.fog===!0&&Z.refreshFogUniforms(je,Q),Z.refreshMaterialUniforms(je,B,H,$,d.state.transmissionRenderTarget[S.id]),Js.upload(C,wa(Ct),je,Rt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Js.upload(C,wa(Ct),je,Rt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xe.setValue(C,"center",N.center),xe.setValue(C,"modelViewMatrix",N.modelViewMatrix),xe.setValue(C,"normalMatrix",N.normalMatrix),xe.setValue(C,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Le=B.uniformsGroups;for(let ze=0,fr=Le.length;ze<fr;ze++){const Xn=Le[ze];Bt.update(Xn,He),Bt.bind(Xn,He)}}return He}function kc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Bc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,k){const B=mt.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),mt.get(S.texture).__webglTexture=U,mt.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const k=mt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Hc=C.createFramebuffer();this.setRenderTarget=function(S,U=0,k=0){L=S,T=U,R=k;let B=!0,N=null,Q=!1,lt=!1;if(S){const dt=mt.get(S);if(dt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(dt.__webglFramebuffer===void 0)Rt.setupRenderTarget(S);else if(dt.__hasExternalTextures)Rt.rebindTextures(S,mt.get(S.texture).__webglTexture,mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Tt=S.depthTexture;if(dt.__boundDepthTexture!==Tt){if(Tt!==null&&mt.has(Tt)&&(S.width!==Tt.image.width||S.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(S)}}const It=S.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(lt=!0);const Nt=mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?N=Nt[U][k]:N=Nt[U],Q=!0):S.samples>0&&Rt.useMultisampledRTT(S)===!1?N=mt.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[k]:N=Nt,P.copy(S.viewport),F.copy(S.scissor),z=S.scissorTest}else P.copy(Et).multiplyScalar(H).floor(),F.copy(Ft).multiplyScalar(H).floor(),z=se;if(k!==0&&(N=Hc),ut.bindFramebuffer(C.FRAMEBUFFER,N)&&B&&ut.drawBuffers(S,N),ut.viewport(P),ut.scissor(F),ut.setScissorTest(z),Q){const dt=mt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,k)}else if(lt){const dt=U;for(let It=0;It<S.textures.length;It++){const Nt=mt.get(S.textures[It]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+It,Nt.__webglTexture,k,dt)}}else if(S!==null&&k!==0){const dt=mt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dt.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(S,U,k,B,N,Q,lt,gt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt){ut.bindFramebuffer(C.FRAMEBUFFER,dt);try{const It=S.textures[gt],Nt=It.format,Tt=It.type;if(!Dt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&k>=0&&k<=S.height-N&&(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),C.readPixels(U,k,B,N,St.convert(Nt),St.convert(Tt),Q))}finally{const It=L!==null?mt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,B,N,Q,lt,gt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt)if(U>=0&&U<=S.width-B&&k>=0&&k<=S.height-N){ut.bindFramebuffer(C.FRAMEBUFFER,dt);const It=S.textures[gt],Nt=It.format,Tt=It.type;if(!Dt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,qt),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),C.readPixels(U,k,B,N,St.convert(Nt),St.convert(Tt),0);const re=L!==null?mt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,re);const ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Lh(C,ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,qt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(qt),C.deleteSync(ve),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,k=0){const B=Math.pow(2,-k),N=Math.floor(S.image.width*B),Q=Math.floor(S.image.height*B),lt=U!==null?U.x:0,gt=U!==null?U.y:0;Rt.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,lt,gt,N,Q),ut.unbindTexture()};const Gc=C.createFramebuffer(),Vc=C.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,B=null,N=0,Q=null){Q===null&&(N!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let lt,gt,dt,It,Nt,Tt,qt,re,ve;const me=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(k!==null)lt=k.max.x-k.min.x,gt=k.max.y-k.min.y,dt=k.isBox3?k.max.z-k.min.z:1,It=k.min.x,Nt=k.min.y,Tt=k.isBox3?k.min.z:0;else{const $e=Math.pow(2,-N);lt=Math.floor(me.width*$e),gt=Math.floor(me.height*$e),S.isDataArrayTexture?dt=me.depth:S.isData3DTexture?dt=Math.floor(me.depth*$e):dt=1,It=0,Nt=0,Tt=0}B!==null?(qt=B.x,re=B.y,ve=B.z):(qt=0,re=0,ve=0);const de=St.convert(U.format),Ct=St.convert(U.type);let _e;U.isData3DTexture?(Rt.setTexture3D(U,0),_e=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Rt.setTexture2DArray(U,0),_e=C.TEXTURE_2D_ARRAY):(Rt.setTexture2D(U,0),_e=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=C.getParameter(C.UNPACK_ROW_LENGTH),He=C.getParameter(C.UNPACK_IMAGE_HEIGHT),hi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ge=C.getParameter(C.UNPACK_SKIP_ROWS),Yi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt);const xe=S.isDataArrayTexture||S.isData3DTexture,je=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const $e=mt.get(S),Le=mt.get(U),ze=mt.get($e.__renderTarget),fr=mt.get(Le.__renderTarget);ut.bindFramebuffer(C.READ_FRAMEBUFFER,ze.__webglFramebuffer),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Xn=0;Xn<dt;Xn++)xe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(S).__webglTexture,N,Tt+Xn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(U).__webglTexture,Q,ve+Xn)),C.blitFramebuffer(It,Nt,lt,gt,qt,re,lt,gt,C.DEPTH_BUFFER_BIT,C.NEAREST);ut.bindFramebuffer(C.READ_FRAMEBUFFER,null),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||mt.has(S)){const $e=mt.get(S),Le=mt.get(U);ut.bindFramebuffer(C.READ_FRAMEBUFFER,Gc),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vc);for(let ze=0;ze<dt;ze++)xe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$e.__webglTexture,N,Tt+ze):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$e.__webglTexture,N),je?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Le.__webglTexture,Q,ve+ze):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Le.__webglTexture,Q),N!==0?C.blitFramebuffer(It,Nt,lt,gt,qt,re,lt,gt,C.COLOR_BUFFER_BIT,C.NEAREST):je?C.copyTexSubImage3D(_e,Q,qt,re,ve+ze,It,Nt,lt,gt):C.copyTexSubImage2D(_e,Q,qt,re,It,Nt,lt,gt);ut.bindFramebuffer(C.READ_FRAMEBUFFER,null),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else je?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(_e,Q,qt,re,ve,lt,gt,dt,de,Ct,me.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(_e,Q,qt,re,ve,lt,gt,dt,de,me.data):C.texSubImage3D(_e,Q,qt,re,ve,lt,gt,dt,de,Ct,me):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,qt,re,lt,gt,de,Ct,me.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,qt,re,me.width,me.height,de,me.data):C.texSubImage2D(C.TEXTURE_2D,Q,qt,re,lt,gt,de,Ct,me);C.pixelStorei(C.UNPACK_ROW_LENGTH,Kt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,He),C.pixelStorei(C.UNPACK_SKIP_PIXELS,hi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Yi),Q===0&&U.generateMipmaps&&C.generateMipmap(_e),ut.unbindTexture()},this.initRenderTarget=function(S){mt.get(S).__webglFramebuffer===void 0&&Rt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Rt.setTextureCube(S,0):S.isData3DTexture?Rt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Rt.setTexture2DArray(S,0):Rt.setTexture2D(S,0),ut.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,ut.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class n0 extends Sc{constructor(){super();const t=new ie;t.deleteAttribute("uv");const e=new ce({side:Ce}),n=new ce,s=new sr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ru(t,n,6),a=new ye;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Pt(t,Pi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Pt(t,Pi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Pt(t,Pi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Pt(t,Pi(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new Pt(t,Pi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new Pt(t,Pi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Pi(i){return new uu({color:0,emissive:16777215,emissiveIntensity:i})}function an(i,t,e){return Math.max(t,Math.min(e,i))}function i0(i,t,e){return i+(t-i)*e}function Rl(i,t,e){const n=an((e-i)/(t-i),0,1);return n*n*(3-2*n)}function $r(i,t,e,n){return i0(i,t,1-Math.exp(-e*n))}function bn(i,t,e,n){const s=Math.atan2(Math.sin(t-i),Math.cos(t-i));return i+s*(1-Math.exp(-e*n))}function da(i,t,e,n,s,r){const o=s-e,a=r-n,l=i-e,c=t-n,h=o*o+a*a,u=an((l*o+c*a)/h,0,1);return Math.hypot(i-(e+o*u),t-(n+a*u))}function Nc(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Cl(i){return`Янтарь · ${Math.floor(i)}`}const Ue={x:.4,z:15.2,yaw:Math.PI},ss={x:.2,z:14.2,yaw:Math.PI*.82},sn={x:0,z:8.6},Ze={x:11.2,z:17.6},ke={x:-10.2,z:13.4},rr={x:2,z:-26},Pl=54,Gi={x:0,z:12},s0=[{id:"fruit-1",x:-20,z:3,tag:"sun_fruit"},{id:"fruit-2",x:-27,z:9,tag:"sun_fruit"},{id:"fruit-3",x:-31,z:-3,tag:"sun_fruit"},{id:"fruit-4",x:-17,z:-8,tag:"sun_fruit"},{id:"fruit-5",x:-34,z:5,tag:"sun_fruit"}],r0=[{id:"mira",name:"Мира",title:"Старейшина",greet:"Солнце тебе, сестра.",body:"athletic",skin:9263932,hairColor:14275527,hair:"bun",outfit:"sun",weapon:"staff",scale:1.02,route:[{x:1.4,z:7.6,wait:2.4},{x:-1.6,z:8.2,wait:1.6},{x:.4,z:10.2,wait:2.2}]},{id:"lada",name:"Лада",title:"Охотница",greet:"Тропа ровная. Я на страже.",body:"slim",skin:14725264,hairColor:1708558,hair:"ponytail",outfit:"strike",weapon:"spear",scale:1,route:[{x:6.5,z:6.2},{x:9.2,z:15.5},{x:-2.4,z:19.4,wait:1.2},{x:-8.4,z:8.4},{x:-3.2,z:5.6,wait:.8}]},{id:"veya",name:"Вея",title:"Хранительница обмена",greet:"Янтарь к янтарю.",body:"curvy",skin:11037509,hairColor:4856854,hair:"long",outfit:"moon",weapon:"none",scale:1,route:[{x:-8.6,z:12.6,wait:2.8},{x:-6.2,z:15.8,wait:1.5},{x:-12.2,z:14.8,wait:1.8}]}],Ll=[{id:"shena",name:"Разведчица Шена",kind:"warrior",hp:78,loot:16,detect:11,speed:3.35,body:"slim",skin:7028784,hairColor:1051660,hair:"ponytail",outfit:"strike",weapon:"blades",home:{x:-24,z:-2},route:[{x:-24,z:-2},{x:-31,z:5},{x:-28,z:-11},{x:-18,z:-7}]},{id:"runa",name:"Воительница Руна",kind:"warrior",hp:92,loot:18,detect:11.5,speed:3.15,body:"athletic",skin:12880482,hairColor:8002082,hair:"long",outfit:"moon",weapon:"spear",home:{x:14,z:-17},route:[{x:14,z:-17},{x:8,z:-15},{x:18,z:-13},{x:11,z:-21}]},{id:"jaguar",name:"Ягуар Тени",kind:"jaguar",hp:54,loot:10,detect:9.5,speed:4.4,home:{x:-33,z:-14},route:[{x:-33,z:-14},{x:-38,z:-8},{x:-29,z:-18}]}],Dl=[{x:17.5,z:8.2},{x:-16.5,z:6.4},{x:19.5,z:23},{x:-15.5,z:22.5},{x:23,z:15},{x:-21,z:17},{x:-8.5,z:2},{x:9.2,z:-2},{x:-7.4,z:-10},{x:11,z:-9},{x:-14,z:-16},{x:16,z:-8}];function jt(i,t){let e=0;e+=Math.sin(i*.05)*Math.cos(t*.045)*1.35,e+=Math.sin(i*.15+1.7)*Math.cos(t*.13+.4)*.48,e+=Math.sin((i+t)*.085)*.22;const n=Math.hypot(i-rr.x,t-rr.z);if(n<18){const a=1-n/18;e=Math.min(e,.35)-a*a*3.35}if(t<-30){const a=Rl(-30,-43,t),l=5.6+Math.sin(i*.22)*.45+Math.cos(i*.07)*.25;e=e*(1-a)+l*a,Math.abs(i-2)<2.6&&(e-=a*.85)}const s=Math.hypot(i-Gi.x,t-Gi.z);if(s<22){const a=Rl(22,8,s);e=e*(1-a)+.16*a}const r=da(i,t,0,12,2,-16);if(r<3.6){const a=(1-r/3.6)*.82;e=e*(1-a)+.2*a}const o=Math.hypot(i*.92,t*.88);if(o>46){const a=o-46;e-=a*a*.018+a*.12}return e}function o0(i){return i<-.82}function a0(i,t){const e=Math.hypot(i,t*.94);if(e<=Pl)return{x:i,z:t};const n=Pl/e;return{x:i*n,z:t*.94*n}}function l0(i,t,e){const n=[.1,.34,.12],s=[.62,.5,.28],r=[.4,.37,.33],o=[.52,.4,.24],a=[.08,.26,.24];let l=n[0],c=n[1],h=n[2];const u=(_,m)=>{l+=(_[0]-l)*m,c+=(_[1]-c)*m,h+=(_[2]-h)*m};e<-.05&&u(s,an((-.05-e)/.8,0,1)),e<-.55&&u(a,.65),e>2.1&&u(r,an((e-2.1)/3.2,0,1));const f=da(i,t,0,12,2,-16);f<3.4&&u(o,1-f/3.4);const p=Math.hypot(i-Gi.x,t-Gi.z);p<15&&u(o,.38*(1-p/15));const g=Math.sin(i*.73)*Math.cos(t*.61)*.035;return[an(l+g,0,1),an(c+g,0,1),an(h+g*.4,0,1)]}class c0{yaw=Math.PI;pitch=.42;distance=5.4;mode="orbit";frame=new D;frameDistance=3.4;frameHeight=1.45;lookHeight=1.35;bias=0;shake=0;pos=new D(0,6,20);look=new D;desired=new D;addLook(t,e,n){const s=.0022*n;this.yaw-=t*s,this.pitch=Math.max(.18,Math.min(1.15,this.pitch-e*s))}impulse(t){this.shake=Math.min(.45,this.shake+t)}update(t,e,n,s,r){if(this.shake=Math.max(0,this.shake-t*1.4),this.mode==="orbit"){const h=e*.08;this.desired.set(Math.sin(h)*16,7.2,22+Math.cos(h)*8),this.look.set(3,1.8,2)}else if(this.mode==="frame"){const h=this.frameDistance;this.desired.set(this.frame.x-Math.sin(this.yaw)*h,this.frame.y+this.frameHeight,this.frame.z-Math.cos(this.yaw)*h),this.look.set(this.frame.x-Math.cos(this.yaw)*this.bias,this.frame.y+1.25,this.frame.z+Math.sin(this.yaw)*this.bias)}else{const h=n.y+1.45;let u=this.distance;const f=1.7,p=g=>{for(let _=1;_<=6;_++){const m=g*(_/6),d=n.x-Math.sin(this.yaw)*Math.cos(this.pitch)*m,E=n.z-Math.cos(this.yaw)*Math.cos(this.pitch)*m,w=h+Math.sin(this.pitch)*m;if(w<jt(d,E)+.45)return!1;for(const y of s)if(w<y.h&&Math.hypot(d-y.x,E-y.z)<y.r+.28)return!1}return!0};for(;u>f&&!p(u);)u-=.28;this.desired.set(n.x-Math.sin(this.yaw)*Math.cos(this.pitch)*u,h+Math.sin(this.pitch)*u,n.z-Math.cos(this.yaw)*Math.cos(this.pitch)*u),this.look.set(n.x,n.y+this.lookHeight,n.z)}const a=this.pos.distanceTo(this.desired)>6?14:this.mode==="follow"?9:6;this.pos.x=$r(this.pos.x,this.desired.x,a,t),this.pos.y=$r(this.pos.y,this.desired.y,a,t),this.pos.z=$r(this.pos.z,this.desired.z,a,t);const l=Math.sin(e*37)*this.shake,c=Math.cos(e*31)*this.shake;r.position.set(this.pos.x+l,this.pos.y+c,this.pos.z),r.lookAt(this.look)}}class Il{id;name;radius=.55;loot;root=new Vt;position={x:0,y:0,z:0};yaw=0;hp;maxHp;alive=!0;ai="patrol";lastDamage=0;rewarded=!1;detect;speed;home;route;index=0;legs=[];body;attackT=0;attacking=!1;hitSent=!1;attackCd=.8;retreatT=0;knockX=0;knockZ=0;phase=0;mat;constructor(t){this.id=t.id,this.name=t.name,this.loot=t.loot,this.detect=t.detect,this.speed=t.speed,this.maxHp=t.hp,this.hp=t.hp,this.home={...t.home},this.route=t.route.map(a=>({...a})),this.position.x=t.home.x,this.position.z=t.home.z,this.mat=new ce({color:2759700,roughness:.82,metalness:.04});const e=new ce({color:1314316,roughness:.7});this.body=new Pt(new te(.38,12,10),this.mat),this.body.scale.set(1.05,.72,1.55),this.body.position.y=.48,this.body.castShadow=!0,this.root.add(this.body);const n=new Pt(new te(.22,10,8),this.mat);n.scale.set(1.1,.9,1.15),n.position.set(0,.62,.48),n.castShadow=!0,this.root.add(n);const s=this.mat;for(const a of[-1,1]){const l=new Pt(new qe(.06,.14,5),s);l.position.set(a*.12,.84,.42),this.root.add(l);const c=new Pt(new te(.03,6,6),new ce({color:16766314,emissive:16761162,emissiveIntensity:.6}));c.position.set(a*.08,.66,.66),this.root.add(c)}const r=new Pt(new te(.12,8,6),e);r.scale.set(1.4,.4,1),r.position.set(0,.62,-.05),this.root.add(r);const o=new Pt(new Bn(.04,.45,2,5),this.mat);o.position.set(0,.55,-.7),o.rotation.x=.8,this.root.add(o);for(const[a,l]of[[-.16,.28],[.16,.28],[-.16,-.32],[.16,-.32]]){const c=new Vt;c.position.set(a,.42,l);const h=new Pt(new Bn(.05,.22,2,5),this.mat);h.position.y=-.16,h.castShadow=!0,c.add(h),this.root.add(c),this.legs.push(c)}this.root.name=t.id}reset(){this.hp=this.maxHp,this.alive=!0,this.ai="patrol",this.rewarded=!1,this.position.x=this.home.x,this.position.z=this.home.z,this.root.visible=!0,this.attacking=!1}silence(){this.alive=!1,this.hp=0,this.rewarded=!0,this.root.visible=!1}hurt(t,e,n){return this.alive?(this.hp=Math.max(0,this.hp-t),this.knockX+=e,this.knockZ+=n,this.lastDamage=t,this.mat.emissive.set(16769712),(this.ai==="patrol"||this.ai==="return")&&(this.ai="chase"),this.hp<=0&&(this.alive=!1,this.root.rotation.z=1.2),t):0}update(t,e,n,s){if(this.attackCd=Math.max(0,this.attackCd-t),!this.alive){this.root.position.y=jt(this.position.x,this.position.z)+.05,this.mat.emissiveIntensity=0;return}if(this.mat.emissiveIntensity=Math.max(0,this.mat.emissiveIntensity-t*4),this.knockX*this.knockX+this.knockZ*this.knockZ>1e-4){const h=s.resolve(this.position.x+this.knockX*t,this.position.z+this.knockZ*t,this.radius,this.position.x,this.position.z);this.position.x=h.x,this.position.z=h.z;const u=Math.exp(-6*t);this.knockX*=u,this.knockZ*=u}const r=n.x-this.position.x,o=n.z-this.position.z,a=Math.hypot(r,o);this.hp/this.maxHp<.28&&a<12&&this.ai!=="retreat"&&this.ai!=="return"&&(this.ai="retreat",this.retreatT=2.4);let l=!1;this.attacking?(this.attackT+=t,this.yaw=bn(this.yaw,Math.atan2(r,o),12,t),this.position.x+=Math.sin(this.yaw)*7*t,this.position.z+=Math.cos(this.yaw)*7*t,this.attackT>.45&&(this.attacking=!1)):this.ai==="patrol"?(l=this.seek(this.route[this.index].x,this.route[this.index].z,t,this.speed*.45,s),Math.hypot(this.route[this.index].x-this.position.x,this.route[this.index].z-this.position.z)<.5&&(this.index=(this.index+1)%this.route.length),n.alive&&a<this.detect&&(this.ai="chase")):this.ai==="chase"?!n.alive||a>this.detect*1.8?this.ai="return":a<1.8&&this.attackCd<=0?(this.attacking=!0,this.attackT=0,this.hitSent=!1,this.attackCd=1.4,this.ai="attack"):l=this.seek(n.x,n.z,t,this.speed,s):this.ai==="attack"?this.attacking||(this.ai=a<this.detect?"chase":"return"):this.ai==="retreat"?(this.retreatT-=t,l=this.seek(this.position.x-r,this.position.z-o,t,this.speed,s),(this.retreatT<=0||a>14)&&(this.ai="return")):(l=this.seek(this.home.x,this.home.z,t,this.speed*.7,s),Math.hypot(this.home.x-this.position.x,this.home.z-this.position.z)<.6&&(this.ai="patrol"),n.alive&&a<this.detect*.7&&this.hp/this.maxHp>.4&&(this.ai="chase")),(l||this.attacking)&&(this.phase+=t*(this.attacking?14:9)),this.legs.forEach((h,u)=>{h.rotation.x=Math.sin(this.phase+u)*(l||this.attacking?.7:.05)}),this.body.position.y=.48+Math.sin(e*2)*.02;const c=jt(this.position.x,this.position.z);this.position.y=c,this.root.position.set(this.position.x,c,this.position.z),this.root.rotation.y=this.yaw,this.root.rotation.z=0}pollAttack(){return!this.alive||!this.attacking||this.hitSent||this.attackT<.18||this.attackT>.32?!1:(this.hitSent=!0,!0)}seek(t,e,n,s,r){const o=t-this.position.x,a=e-this.position.z,l=Math.hypot(o,a);if(l<.35)return!1;const c=Math.min(s*n,l),h=r.resolve(this.position.x+o/l*c,this.position.z+a/l*c,this.radius,this.position.x,this.position.z);return this.position.x=h.x,this.position.z=h.z,this.yaw=bn(this.yaw,Math.atan2(o,a),7,n),!0}}const ht={maxHp:100,maxStamina:100,walk:3.15,run:6.15,accel:4.2,dodgeSpeed:12.5,dodgeTime:.42,dodgeIframe:.32,dodgeCost:18,jumpTime:.62,jumpCost:8,jumpHeight:1.15,lightDamage:18,lightTime:.48,lightHit:.2,lightCost:8,lightRange:2.35,lightArc:1.35,heavyDamage:36,heavyTime:.86,heavyHit:.5,heavyCost:28,heavyRange:2.65,heavyArc:1.7,specialDamage:34,specialRadius:3.7,specialCost:30,specialCd:8,specialHit:.48,blockFactor:.28,blockDrain:16,staminaRegen:24,staminaDelay:.55,playerRadius:.42,knockLight:3.2,knockHeavy:6.5,knockSpecial:7.5,fruitValue:7,respawnPenalty:.1,enemyAttack:12,enemyRange:2.05,enemyArc:1.2,creatureAttack:10,creatureRange:1.85},Ul=[0,40,90];function Wo(i){return i<=1?Ul[1]:i===2?Ul[2]:null}function fa(i){switch(i){case"light":return ht.lightTime;case"heavy":return ht.heavyTime;case"dodge":return ht.dodgeTime;case"jump":return ht.jumpTime;case"hit":return .38;case"wave":return 1.25;case"dead":return 1.2;default:return 1/0}}function rn(i){return i==="light"||i==="heavy"||i==="dodge"||i==="jump"||i==="hit"||i==="dead"}function h0(){return{hipY:0,hipRx:0,hipRy:0,torsoRx:.05,torsoRy:0,torsoRz:0,headRx:-.05,headRy:0,armLx:.18,armLy:0,armLz:-.38,foreLx:-.28,armRx:.22,armRy:0,armRz:.42,foreRx:-.34,legLx:-.04,shinLx:.1,legRx:.05,shinRx:.1}}function Ni(i,t,e){const n=h0(),s=Math.sin(e*2.1)*.012;if(t.action==="walk"||t.action==="run"){const o=t.action==="run",a=o?.95:.62,l=Math.sin(t.phase);n.legLx=l*a,n.legRx=-l*a,n.shinLx=.12+Math.max(0,-Math.sin(t.phase+.4))*(o?1.05:.75),n.shinRx=.12+Math.max(0,Math.sin(t.phase+.4))*(o?1.05:.75),n.armLx=-l*(o?.8:.5)+.1,n.armRx=l*(o?.8:.5)+.12,n.hipY=Math.abs(Math.sin(t.phase*2))*(o?.07:.04),n.hipRy=-l*.1,n.torsoRy=l*.14,n.torsoRx=o?.18:.08}else if(t.action==="light"){const o=Math.min(1,t.time/ht.lightTime),a=o<.38?o/.38:Math.max(0,1-(o-.38)/.62);n.armRx=.9-a*2.5,n.armRy=-.4*(1-a),n.foreRx=-.2-a*.3,n.torsoRy=-.45+a*1.05,n.torsoRx=.12,n.armRz=.15}else if(t.action==="heavy"){const o=Math.min(1,t.time/ht.heavyTime);if(o<.48){const a=o/.48;n.armRx=.2+(-2.5-.2)*a,n.armLx=.2+(-2.3-.2)*a,n.torsoRx=.05-.4*a,n.foreRx=-.5,n.foreLx=-.45}else{const a=(o-.48)/.52;n.armRx=-2.5+3.3*a,n.armLx=-2.3+2.9*a,n.torsoRx=-.35+.8*a,n.foreRx=-.4,n.foreLx=-.35}}else if(t.action==="block")n.armRx=-1.05,n.armLx=-.95,n.armRz=-.15,n.armLz=.2,n.foreRx=-1.25,n.foreLx=-1.2,n.torsoRx=.18,n.legLx=.28,n.legRx=.22,n.shinLx=.4,n.shinRx=.34,n.hipY=-.08;else if(t.action==="hit"){const o=Math.sin(Math.min(1,t.time/.38)*Math.PI);n.torsoRx=-.35*o,n.torsoRy=.45*o,n.headRx=-.25*o,n.armRx=.7*o,n.armLx=.4*o}else if(t.action==="dodge"){const o=Math.sin(Math.min(1,t.time/ht.dodgeTime)*Math.PI);n.torsoRx=.75*o,n.torsoRz=.35*o,n.legLx=-.7*o,n.legRx=-.35*o,n.shinLx=.5*o,n.hipY=-.12*o,n.armRx=-.4*o,n.armLx=.5*o}else if(t.action==="jump"){const o=Math.sin(Math.min(1,t.time/ht.jumpTime)*Math.PI);n.legLx=-.55*o,n.legRx=-.4*o,n.shinLx=.85*o,n.shinRx=.75*o,n.armRx=-1.1*o,n.armLx=-1*o,n.torsoRx=-.1*o}else if(t.action==="wave"){const o=Math.sin(Math.min(1,t.time/1.25)*Math.PI);n.armRx=-1.7*o,n.foreRx=-.5*o,n.headRy=.25*o,n.armRz=.2}else if(t.action==="work"){const o=Math.sin(e*2.5);n.armRx=.7+o*.18,n.armLx=.75-o*.16,n.foreRx=-1.05,n.foreLx=-.95,n.torsoRx=.28,n.headRx=.15}else if(t.action==="dead"){const o=Math.min(1,t.time/.55);n.hipRx=1.15*o,n.torsoRx=.4*o,n.armLx=.5*o,n.armRx=-.2*o,n.legLx=.3*o,n.legRx=-.2*o}else n.hipY=Math.sin(e*1.6)*.012,n.armLx=.18+Math.sin(e*1.3)*.03,n.armRx=.22+Math.sin(e*1.3+1)*.03;i.hips.position.y=i.hipBase+n.hipY,i.hips.rotation.set(n.hipRx,n.hipRy,0),i.torso.rotation.set(n.torsoRx,n.torsoRy,n.torsoRz),i.torso.scale.set(1+s*.4,1+s,1+s*.2),i.head.rotation.set(n.headRx+Math.sin(e*1.4)*.02,n.headRy,0),i.armL.rotation.set(n.armLx,n.armLy,n.armLz),i.foreL.rotation.set(n.foreLx,0,0),i.armR.rotation.set(n.armRx,n.armRy,n.armRz),i.foreR.rotation.set(n.foreRx,0,0),i.legL.rotation.set(n.legLx,0,0),i.shinL.rotation.set(n.shinLx,0,0),i.legR.rotation.set(n.legRx,0,0),i.shinR.rotation.set(n.shinRx,0,0);const r=Math.sin(e*1.7)*.04;for(const o of Object.values(i.hair))o.rotation.z=r,o.rotation.x=Math.sin(e*1.3)*.03}const Li={strike:{id:"strike",name:"Племя Удара",outfit:"Чёрный лак",color:1315864,trim:14726222,glow:16757575,special:"Раскол удара",summary:"Чёрный лак и прямой удар. Племя держится дисциплины, строя и честного поединка. Ранг растёт от пройденных испытаний, а не от громких слов.",rankNote:"Верность подруг проверяют на тренировочном круге."},moon:{id:"moon",name:"Кровавая Луна",outfit:"Алый лак",color:12852274,trim:15779178,glow:16734826,special:"Серп луны",summary:"Алый лак хранит ночные обряды мужества. Племя славится клятвами верности и ритуалами перед боем: каждая воительница отвечает за сестру на тропе.",rankNote:"Лунный совет отмечает тех, кто не бросает своих."},sun:{id:"sun",name:"Золотое Солнце",outfit:"Белый лак с золотом",color:16774372,trim:15778122,glow:16769162,special:"Солнечный венец",summary:"Белый лак с золотой кромкой — цвет совета, обмена и солнечных клятв. Старейшины держат остров единым: споры решают испытанием, словом и общим костром.",rankNote:"Голос в совете дают тем, кто принёс пользу племени."}},u0={slim:{hip:.155,waist:.122,chest:.172,shoulder:.176,thigh:.068,shin:.052,arm:.04,hipY:.9,thighLen:.4,shinLen:.4,armLen:.29,foreLen:.27},athletic:{hip:.19,waist:.148,chest:.21,shoulder:.214,thigh:.084,shin:.064,arm:.05,hipY:.93,thighLen:.41,shinLen:.4,armLen:.3,foreLen:.28},curvy:{hip:.25,waist:.178,chest:.255,shoulder:.205,thigh:.108,shin:.078,arm:.052,hipY:.9,thighLen:.39,shinLen:.38,armLen:.29,foreLen:.27}};function Nl(i){return new ca({color:i,roughness:.34,metalness:.02,clearcoat:1,clearcoatRoughness:.16,sheen:.22,sheenRoughness:.45,sheenColor:new zt(16769456),envMapIntensity:.62})}function Dn(i,t){return new Bn(i,Math.max(.04,t-i*2),2,7)}function bt(i,t,e,n=0,s=0,r=0){const o=new Pt(t,e);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function pa(i){const t=u0[i.body],e=Nl(1315864),n=Nl(789520),s=new ce({color:14726222,metalness:1,roughness:.28}),r=new ce({color:16757575,emissive:16757575,emissiveIntensity:.7,roughness:.35}),o=new ca({color:i.skin,roughness:.58,metalness:0,clearcoat:.12,clearcoatRoughness:.4,sheen:.3,sheenColor:new zt(16761512)}),a=new ce({color:i.hairColor,roughness:.62,metalness:.04}),l=new ce({color:1708560,roughness:.45}),c=new ce({color:16052714,roughness:.35}),h=new ce({color:1313802,roughness:.3}),u=new Vt;u.scale.setScalar(i.scale??1);const f=new Vt;f.position.y=t.hipY,u.add(f);const p=new Pt(new Hi(.46,14),new _s({color:0,transparent:!0,opacity:.28,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.045,p.castShadow=!1,u.add(p),bt(f,new te(t.hip*.92,12,10),e,0,.02,0);const g=new Vt;g.position.y=.04,f.add(g);const _=[new xt(t.hip*.72,-.02),new xt(t.hip,.06),new xt(t.hip*.84,.16),new xt(t.waist,.26),new xt(t.waist*1.08,.36),new xt(t.chest,.46),new xt(t.chest*.78,.54),new xt(.075,.6)];bt(g,new aa(_,14),e);const m=bt(g,new Fe(t.waist*1.15,.014,6,16),s,0,.2,0);m.rotation.x=Math.PI/2,bt(g,new Zt(.055,.07,.08,8),o,0,.62,0);const d=new Vt;d.position.set(0,.74,.01),g.add(d),bt(d,new te(.112,16,14),o);const E=bt(d,new te(.026,8,8),c,-.042,.02,.1),w=bt(d,new te(.026,8,8),c,.042,.02,.1);E.scale.z=.65,w.scale.z=.65,bt(d,new te(.013,8,8),h,-.042,.018,.118),bt(d,new te(.013,8,8),h,.042,.018,.118);const y=bt(d,new ie(.04,.008,.012),a,-.042,.055,.1),A=bt(d,new ie(.04,.008,.012),a,.042,.055,.1);y.rotation.z=.25,A.rotation.z=-.25,bt(d,new ie(.018,.028,.02),o,0,-.005,.118);const T=bt(d,new ie(.04,.01,.016),o,0,-.052,.112);T.scale.y=1;const R=o.clone();R.color.offsetHSL(0,.05,-.08),T.material=R,bt(d,new te(.03,8,8),o,-.12,-.01,0),bt(d,new te(.03,8,8),o,.12,-.01,0);const L=bt(d,new qe(.012,.04,6),s,-.125,-.04,.02),M=bt(d,new qe(.012,.04,6),s,.125,-.04,.02);L.rotation.z=Math.PI,M.rotation.z=Math.PI;const v={braid:p0(a,s),long:m0(a),ponytail:g0(a,s),bun:_0(a,s)};for(const Rt of Object.values(v))d.add(Rt);const P=new Vt,F=bt(P,new Fe(.11,.012,6,16),s,0,.09,0);F.rotation.x=Math.PI/2;for(let Rt=0;Rt<6;Rt++){const ge=bt(P,new qe(.018,.16,5),Rt%2?s:l,0,.2,0),ue=Rt/6*Math.PI*2;ge.position.set(Math.sin(ue)*.09,.18,Math.cos(ue)*.05),ge.rotation.x=-.3,ge.rotation.z=Math.sin(ue)*.3}d.add(P);const z=new Vt;z.position.set(-t.shoulder,.48,0),g.add(z),bt(z,Dn(t.arm,t.armLen),e,0,-t.armLen/2,0);const V=new Vt;V.position.y=-t.armLen,z.add(V),bt(V,Dn(t.arm*.86,t.foreLen),e,0,-t.foreLen/2,0);const X=bt(V,new Zt(t.arm*1.15,t.arm,.08,8),s,0,-.08,0);X.castShadow=!0,bt(V,new te(t.arm*.95,8,8),e,0,-t.foreLen,0);const W=new Vt;W.position.set(t.shoulder,.48,0),g.add(W),bt(W,Dn(t.arm,t.armLen),e,0,-t.armLen/2,0);const $=new Vt;$.position.y=-t.armLen,W.add($),bt($,Dn(t.arm*.86,t.foreLen),e,0,-t.foreLen/2,0),bt($,new Zt(t.arm*1.15,t.arm,.08,8),s,0,-.08,0);const H=bt($,new te(t.arm*.95,8,8),e,0,-t.foreLen,0),it=new Vt;it.position.set(0,-t.foreLen,.04),V.add(it),Fl(it,s,l,.9);const rt={spear:new Vt,blades:new Vt,staff:new Vt};H.add(rt.spear),d0(rt.spear,s,l),H.add(rt.blades),Fl(rt.blades,s,l,1);const Et=bt(rt.blades,new ie(.03,.55,.008),l,.08,.12,0);Et.rotation.z=.4,H.add(rt.staff),f0(rt.staff,s,l);const Ft=new Vt,se=bt(Ft,new te(.09,10,8),e,-t.shoulder-.02,.5,0),fe=bt(Ft,new te(.09,10,8),e,t.shoulder+.02,.5,0);se.scale.set(1.35,.72,1.05),fe.scale.set(1.35,.72,1.05),bt(Ft,new Fe(.075,.01,6,10),s,-t.shoulder-.02,.5,0),bt(Ft,new Fe(.075,.01,6,10),s,t.shoulder+.02,.5,0),g.add(Ft);const Yt=new Vt,Y=(Rt,ge,ue)=>{const b=bt(Yt,new ie(.018,ue,.012),r,Rt,ge,t.chest*.92);return b.castShadow=!1,b};Y(-t.waist*.7,.34,.28),Y(t.waist*.7,.34,.28),Y(0,.52,.06),g.add(Yt);const K=bt(g,new Fe(.09,.012,6,14),s,0,.56,.04);K.rotation.x=Math.PI/2.4;const ft=bt(g,new te(.02,8,8),r,0,.5,.1);ft.name="bead",K.add(ft);const At={strike:new Vt,moon:new Vt,sun:new Vt},yt=bt(At.strike,new ie(.09,.016,.012),s,-.03,.42,t.chest+.01),Xt=bt(At.strike,new ie(.09,.016,.012),s,.03,.42,t.chest+.01);yt.rotation.z=.7,Xt.rotation.z=-.7,bt(At.moon,new Fe(.055,.01,6,14),s,0,.42,t.chest+.01).scale.set(1,1,.4);const C=bt(At.sun,new Zt(.055,.055,.012,12),s,0,.42,t.chest+.02);C.rotation.x=Math.PI/2;for(const Rt of Object.values(At))g.add(Rt);const ee=new Vt;ee.position.set(-t.hip*.48,-.02,0),f.add(ee),bt(ee,Dn(t.thigh,t.thighLen),e,0,-t.thighLen/2,0);const Lt=new Vt;Lt.position.y=-t.thighLen,ee.add(Lt),bt(Lt,Dn(t.shin,t.shinLen),n,0,-t.shinLen/2,0);const Dt=bt(Lt,new ie(t.shin*1.5,.06,.16),n,0,-t.shinLen,.04);Dt.castShadow=!0,bt(Lt,new Fe(t.shin*1.05,.01,5,8),s,0,-.08,0).rotation.x=Math.PI/2;const ut=new Vt;ut.position.set(t.hip*.48,-.02,0),f.add(ut),bt(ut,Dn(t.thigh,t.thighLen),e,0,-t.thighLen/2,0);const Qt=new Vt;Qt.position.y=-t.thighLen,ut.add(Qt),bt(Qt,Dn(t.shin,t.shinLen),n,0,-t.shinLen/2,0),bt(Qt,new ie(t.shin*1.5,.06,.16),n,0,-t.shinLen,.04),bt(Qt,new Fe(t.shin*1.05,.01,5,8),s,0,-.08,0).rotation.x=Math.PI/2;const mt={root:u,hips:f,torso:g,head:d,armL:z,foreL:V,armR:W,foreR:$,legL:ee,shinL:Lt,legR:ut,shinR:Qt,hipBase:t.hipY,hair:v,weapons:rt,leftBlade:it,shoulders:Ft,crown:P,glow:Yt,necklace:K,marks:At,blob:p,suit:e,boot:n,trim:s,glowMat:r,skinMat:o,hairMat:a};return ma(mt,i),mt}function d0(i,t,e){const n=bt(i,new Zt(.018,.02,1.45,6),e,0,.35,0);n.castShadow=!0;const s=bt(i,new qe(.045,.22,6),t,0,1.15,0);s.castShadow=!0,i.rotation.x=.55}function Fl(i,t,e,n){const s=bt(i,new ie(.035*n,.62*n,.01),e,0,.18,.04);s.rotation.x=.4,bt(i,new ie(.09,.02,.02),t,0,-.02,0)}function f0(i,t,e){bt(i,new Zt(.022,.026,1.35,7),e,0,.25,0);const n=bt(i,new te(.07,10,8),t,0,.98,0);n.castShadow=!0,bt(i,new Fe(.09,.012,6,10),t,0,.98,0),i.rotation.x=.4}function ur(i){const t=new Pt(new te(.12,14,10),i);return t.scale.set(1.05,.58,1.02),t.position.set(0,.075,-.03),t.castShadow=!0,t}function p0(i,t){const e=new Vt;e.add(ur(i));for(let s=0;s<6;s++){const r=new Pt(new te(.045-s*.004,8,6),i);r.position.set(0,-.08-s*.07,-.1),r.castShadow=!0,e.add(r)}const n=new Pt(new Fe(.03,.006,4,8),t);return n.position.set(0,-.1,-.1),n.rotation.x=Math.PI/2,e.add(n),e}function m0(i){const t=new Vt;t.add(ur(i));const e=new Pt(new Bn(.09,.34,2,6),i);e.position.set(0,-.22,-.08),e.castShadow=!0,t.add(e);const n=new Pt(new Bn(.035,.22,2,5),i);n.position.set(-.1,-.16,.02),n.rotation.z=.15,t.add(n);const s=n.clone();return s.position.x=.1,s.rotation.z=-.15,t.add(s),t}function g0(i,t){const e=new Vt;e.add(ur(i));const n=new Pt(new te(.06,8,8),i);n.position.set(0,.06,-.1),e.add(n);const s=new Pt(new Bn(.04,.32,2,6),i);s.position.set(0,-.16,-.12),s.castShadow=!0,e.add(s);const r=new Pt(new Fe(.045,.008,4,8),t);return r.position.set(0,.02,-.1),r.rotation.x=Math.PI/2,e.add(r),e}function _0(i,t){const e=new Vt;e.add(ur(i));const n=new Pt(new te(.07,10,8),i);n.position.set(0,.14,-.02),n.castShadow=!0,e.add(n);const s=new Pt(new Zt(.008,.008,.16,5),t);return s.rotation.z=Math.PI/2,s.position.set(0,.15,-.02),e.add(s),e}function ma(i,t){const e=Li[t.outfit];i.suit.color.set(e.color),i.suit.sheenColor.set(e.trim),i.suit.roughness=t.outfit==="sun"?.24:.36,i.suit.envMapIntensity=.62,i.boot.color.set(e.color).multiplyScalar(t.outfit==="sun"?.82:.42),t.outfit!=="sun"&&i.boot.color.lerp(new zt(460553),.45),i.boot.roughness=.16,i.boot.clearcoat=1,i.trim.color.set(e.trim),i.glowMat.color.set(e.glow),i.glowMat.emissive.set(e.glow);for(const n of Object.keys(i.hair))i.hair[n].visible=n===t.hair;for(const n of Object.keys(i.weapons))i.weapons[n].visible=t.weapon===n;i.leftBlade.visible=t.weapon==="blades",i.shoulders.visible=t.shoulders,i.crown.visible=t.crown,i.glow.visible=t.glow,i.necklace.visible=t.necklace;for(const n of Object.keys(i.marks))i.marks[n].visible=n===t.outfit}function or(i,t){i.glow.visible&&(i.glowMat.emissiveIntensity=.55+Math.sin(t*3.1)*.35)}function Fc(i,t){i.suit.emissive.set(t?16773848:0),i.suit.emissiveIntensity=t?.55:0}class Ol{id;name;radius=.44;loot;detect;rig;position={x:0,y:0,z:0};yaw=0;hp;maxHp;alive=!0;ai="patrol";anim={action:"idle",time:0,phase:0};lastDamage=0;rewarded=!1;speed;home;route;index=0;wait=.4;attackCd=.6;retreatT=0;hitSent=!1;knockX=0;knockZ=0;flash=0;iframe=0;aggroDelay=0;constructor(t){if(t.kind!=="warrior"||!t.body||!t.outfit||!t.hair||!t.weapon||t.skin===void 0||t.hairColor===void 0)throw new Error(`Враг ${t.id} собран не как воительница`);this.id=t.id,this.name=t.name,this.loot=t.loot,this.detect=t.detect,this.speed=t.speed,this.maxHp=t.hp,this.hp=t.hp,this.home={...t.home},this.route=t.route.map(n=>({...n})),this.position.x=t.home.x,this.position.z=t.home.z;const e={body:t.body,skin:t.skin,hairColor:t.hairColor,outfit:t.outfit,hair:t.hair,weapon:t.weapon,shoulders:t.id==="runa",crown:!1,glow:t.id==="shena",necklace:!0};this.rig=pa(e),this.rig.root.name=t.id,ma(this.rig,e)}reset(){this.hp=this.maxHp,this.alive=!0,this.ai="patrol",this.rewarded=!1,this.position.x=this.home.x,this.position.z=this.home.z,this.rig.root.visible=!0,this.anim.action="idle",this.anim.time=0,this.knockX=0,this.knockZ=0,this.aggroDelay=0}silence(){this.alive=!1,this.hp=0,this.rewarded=!0,this.rig.root.visible=!1}hurt(t,e,n){return!this.alive||this.iframe>0?0:(this.hp=Math.max(0,this.hp-t),this.knockX+=e,this.knockZ+=n,this.flash=.1,this.lastDamage=t,(this.ai==="patrol"||this.ai==="return")&&(this.ai="chase"),this.hp<=0?(this.alive=!1,this.anim.action="dead",this.anim.time=0):this.anim.action!=="light"&&(this.anim.action="hit",this.anim.time=0,this.hitSent=!0),t)}update(t,e,n,s){if(this.attackCd=Math.max(0,this.attackCd-t),this.iframe=Math.max(0,this.iframe-t),this.flash=Math.max(0,this.flash-t),!this.alive){this.anim.time+=t,Ni(this.rig,this.anim,e),this.sync(),this.anim.time>2.2&&(this.rig.root.visible=!1);return}this.applyKnock(t,s);const r=n.x-this.position.x,o=n.z-this.position.z,a=Math.hypot(r,o);this.hp/this.maxHp<.3&&a<14&&this.ai!=="retreat"&&this.ai!=="return"&&(this.ai="retreat",this.retreatT=2.8);let l=!1;if(this.ai==="patrol"){const c=this.route[this.index];l=this.seek(c.x,c.z,t,this.speed*.62,s),Math.hypot(c.x-this.position.x,c.z-this.position.z)<.55&&(this.wait-=t,l=!1,this.wait<=0&&(this.index=(this.index+1)%this.route.length,this.wait=.7)),n.alive&&a<this.detect&&(this.ai="chase",this.aggroDelay=.45),this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+3*t))}else if(this.ai==="chase")this.aggroDelay=Math.max(0,this.aggroDelay-t),!n.alive||a>this.detect*1.9?this.ai="return":this.aggroDelay>0?this.yaw=bn(this.yaw,Math.atan2(r,o),8,t):a<2.05?this.ai="attack":l=this.seek(n.x,n.z,t,this.speed,s);else if(this.ai==="attack")this.yaw=bn(this.yaw,Math.atan2(r,o),10,t),this.anim.action!=="light"&&this.attackCd<=0&&a<2.35&&(this.anim.action="light",this.anim.time=0,this.hitSent=!1,this.attackCd=1.25),a>2.6&&this.anim.action!=="light"&&(this.ai="chase");else if(this.ai==="retreat"){this.retreatT-=t;const c=a<.2?1:4/a;l=this.seek(this.position.x-r*c,this.position.z-o*c,t,this.speed*1.1,s),(this.retreatT<=0||a>16)&&(this.ai="return")}else l=this.seek(this.home.x,this.home.z,t,this.speed*.75,s),Math.hypot(this.home.x-this.position.x,this.home.z-this.position.z)<.7&&(this.ai="patrol"),n.alive&&a<this.detect*.75&&this.hp/this.maxHp>.45&&(this.ai="chase");rn(this.anim.action)&&this.anim.action!=="dead"?(this.anim.time+=t,this.anim.time>=fa(this.anim.action)&&(this.anim.action=l?"walk":"idle")):this.anim.action!=="light"&&(this.anim.action=l?"walk":this.ai==="patrol"?"work":"idle",this.anim.time+=t,l&&(this.anim.phase+=t*7)),Ni(this.rig,this.anim,e),or(this.rig,e),Fc(this.rig,this.flash>0),this.sync()}pollAttack(){return!this.alive||this.hitSent||this.anim.action!=="light"||this.anim.time<.2||this.anim.time>.34?!1:(this.hitSent=!0,!0)}seek(t,e,n,s,r){const o=t-this.position.x,a=e-this.position.z,l=Math.hypot(o,a);if(l<.3)return!1;const c=Math.min(s*n,l),h=r.resolve(this.position.x+o/l*c,this.position.z+a/l*c,this.radius,this.position.x,this.position.z);return this.position.x=h.x,this.position.z=h.z,this.yaw=bn(this.yaw,Math.atan2(o,a),8,n),!0}applyKnock(t,e){if(this.knockX*this.knockX+this.knockZ*this.knockZ<1e-4)return;const n=e.resolve(this.position.x+this.knockX*t,this.position.z+this.knockZ*t,this.radius,this.position.x,this.position.z);this.position.x=n.x,this.position.z=n.z;const s=Math.exp(-6*t);this.knockX*=s,this.knockZ*=s}sync(){const t=jt(this.position.x,this.position.z);this.position.y=t,this.rig.root.position.set(this.position.x,t,this.position.z),this.rig.root.rotation.y=this.yaw}}class x0{id="heroine";radius=ht.playerRadius;rig;appearance;position=new D;yaw=Math.PI;hp=ht.maxHp;maxHp=ht.maxHp;stamina=ht.maxStamina;maxStamina=ht.maxStamina;alive=!0;blocking=!1;iframe=0;specialCd=0;anim={action:"idle",time:0,phase:0};lastDamage=0;knockX=0;knockZ=0;speed=0;staminaDelay=0;jumpT=0;jumping=!1;dodgeT=0;dodging=!1;dodgeX=0;dodgeZ=0;meleeSent=!1;specialPending=!1;specialSent=!1;flash=0;weakToast=0;constructor(t){this.appearance={...t},this.rig=pa(this.appearance),this.rig.root.name="heroine"}applyLoadout(t){this.appearance={...this.appearance,outfit:t.outfit,hair:t.hair,weapon:t.weapon,shoulders:t.shoulders,crown:t.crown,glow:t.glow,necklace:t.necklace},ma(this.rig,this.appearance)}hurt(t,e,n){if(!this.alive||this.iframe>0)return 0;let s=t;return this.blocking&&this.stamina>1?(s*=ht.blockFactor,this.stamina=Math.max(0,this.stamina-10),this.knockX+=e*.25,this.knockZ+=n*.25):(this.knockX+=e,this.knockZ+=n,(!rn(this.anim.action)||this.anim.action==="light")&&(this.anim.action="hit",this.anim.time=0,this.meleeSent=!0)),this.hp=Math.max(0,this.hp-s),this.flash=.12,this.lastDamage=s,this.hp<=0&&(this.alive=!1,this.blocking=!1,this.anim.action="dead",this.anim.time=0),s}healFull(){this.hp=this.maxHp,this.stamina=this.maxStamina,this.alive=!0}update(t,e,n,s,r){let o=null;if(this.iframe=Math.max(0,this.iframe-t),this.specialCd=Math.max(0,this.specialCd-t),this.weakToast=Math.max(0,this.weakToast-t),this.flash=Math.max(0,this.flash-t),!this.alive)return this.anim.time+=t,Ni(this.rig,this.anim,r),this.sync(jt(this.position.x,this.position.z)),null;e?(o=this.readInput(e,s,t),this.move(t,e,n,s)):rn(this.anim.action)||(this.anim.action="idle"),rn(this.anim.action)?(this.anim.time+=t,this.anim.action!=="dead"&&this.anim.time>=fa(this.anim.action)&&(this.anim.action="idle",this.anim.time=0,this.jumping=!1,this.dodging=!1)):this.anim.time+=t,this.staminaDelay>0?this.staminaDelay-=t:this.blocking||(this.stamina=Math.min(this.maxStamina,this.stamina+ht.staminaRegen*t)),this.blocking&&(this.stamina=Math.max(0,this.stamina-ht.blockDrain*t),this.staminaDelay=ht.staminaDelay,this.stamina<=0&&(this.blocking=!1));const a=jt(this.position.x,this.position.z);let l=0;if(this.jumping){this.jumpT+=t;const c=this.jumpT/ht.jumpTime;l=Math.sin(Math.min(1,c)*Math.PI)*ht.jumpHeight,c>=1&&(this.jumping=!1)}else if(this.dodging){this.dodgeT+=t;const c=this.dodgeT/ht.dodgeTime;l=Math.sin(Math.min(1,c)*Math.PI)*.42,c>=1&&(this.dodging=!1,this.iframe=0)}return this.position.y=a+l,this.sync(a+l),Ni(this.rig,this.anim,r),or(this.rig,r),Fc(this.rig,this.flash>0),o}playIdle(t,e){rn(this.anim.action)||(this.anim.action="idle"),this.anim.time+=t;const n=jt(this.position.x,this.position.z);this.position.y=n,this.sync(n),Ni(this.rig,this.anim,e),or(this.rig,e)}pollMelee(){return this.specialPending||this.meleeSent||!this.alive?null:this.anim.action==="light"&&this.anim.time>=ht.lightHit&&this.anim.time<ht.lightHit+.12?(this.meleeSent=!0,"light"):this.anim.action==="heavy"&&this.anim.time>=ht.heavyHit&&this.anim.time<ht.heavyHit+.12?(this.meleeSent=!0,"heavy"):null}pollSpecial(){return!this.specialPending||this.specialSent?!1:this.anim.time>=ht.specialHit?(this.specialSent=!0,this.specialPending=!1,!0):!1}readInput(t,e,n){if(this.blocking=t.block&&!this.dodging&&!this.jumping&&this.anim.action!=="light"&&this.anim.action!=="heavy",this.blocking&&!rn(this.anim.action)&&(this.anim.action="block"),t.dodge&&!this.dodging&&!this.jumping){if(this.stamina<ht.dodgeCost)return this.weak();this.stamina-=ht.dodgeCost,this.staminaDelay=ht.staminaDelay,this.dodging=!0,this.dodgeT=0,this.iframe=ht.dodgeIframe;const s=Math.hypot(t.moveX,t.moveY);if(s>.15){const r=Math.sin(e),o=Math.cos(e),a=Math.cos(e),l=-Math.sin(e);this.dodgeX=(r*t.moveY+a*t.moveX)/s,this.dodgeZ=(o*t.moveY+l*t.moveX)/s}else this.dodgeX=Math.sin(this.yaw),this.dodgeZ=Math.cos(this.yaw);this.anim.action="dodge",this.anim.time=0,this.meleeSent=!0,this.blocking=!1}else if(t.jump&&!this.jumping&&!this.dodging&&!rn(this.anim.action)){if(this.stamina<ht.jumpCost)return this.weak();this.stamina-=ht.jumpCost,this.staminaDelay=ht.staminaDelay,this.jumping=!0,this.jumpT=0,this.anim.action="jump",this.anim.time=0}else if(t.special&&!rn(this.anim.action)){if(this.specialCd>0)return null;if(this.stamina<ht.specialCost)return this.weak();this.stamina-=ht.specialCost,this.staminaDelay=ht.staminaDelay,this.specialCd=ht.specialCd,this.specialPending=!0,this.specialSent=!1,this.yaw=e,this.anim.action="heavy",this.anim.time=0,this.meleeSent=!0,this.blocking=!1}else if((t.heavy||t.light)&&!rn(this.anim.action)){const s=t.heavy,r=s?ht.heavyCost:ht.lightCost;if(this.stamina<r)return this.weak();this.stamina-=r,this.staminaDelay=ht.staminaDelay,this.yaw=e,this.anim.action=s?"heavy":"light",this.anim.time=0,this.meleeSent=!1,this.blocking=!1}return null}move(t,e,n,s){if(this.knockX*this.knockX+this.knockZ*this.knockZ>1e-4){const a=this.position.x+this.knockX*t,l=this.position.z+this.knockZ*t,c=n.resolve(a,l,this.radius,this.position.x,this.position.z);this.position.x=c.x,this.position.z=c.z;const h=Math.exp(-7*t);this.knockX*=h,this.knockZ*=h}if(this.dodging){const a=this.position.x+this.dodgeX*ht.dodgeSpeed*t,l=this.position.z+this.dodgeZ*ht.dodgeSpeed*t,c=n.resolve(a,l,this.radius,this.position.x,this.position.z);this.position.x=c.x,this.position.z=c.z,this.yaw=bn(this.yaw,Math.atan2(this.dodgeX,this.dodgeZ),10,t);return}if(this.anim.action==="light"||this.anim.action==="heavy"||this.anim.action==="hit")return;const r=Math.hypot(e.moveX,e.moveY),o=r>.12?this.blocking?ht.walk*.55:r>.72?ht.run:ht.walk:0;if(this.speed+=(o-this.speed)*Math.min(1,t*ht.accel),r>.12){const a=Math.sin(s),l=Math.cos(s),c=Math.cos(s),h=-Math.sin(s),u=a*e.moveY+c*e.moveX,f=l*e.moveY+h*e.moveX,p=Math.hypot(u,f)||1,g=this.position.x+u/p*this.speed*t,_=this.position.z+f/p*this.speed*t,m=n.resolve(g,_,this.radius,this.position.x,this.position.z);this.position.x=m.x,this.position.z=m.z,this.yaw=bn(this.yaw,Math.atan2(u,f),this.blocking?6:10,t),this.anim.phase+=t*(this.speed>4.4?10.5:7.2),!rn(this.anim.action)&&!this.blocking&&(this.anim.action=this.speed>4.4?"run":"walk")}else!rn(this.anim.action)&&!this.blocking&&(this.anim.action="idle",this.speed=0)}weak(){return this.weakToast>0?null:(this.weakToast=.8,"Мало сил")}sync(t){this.rig.root.position.set(this.position.x,t,this.position.z),this.rig.root.rotation.y=this.yaw}}class v0{id;name;title;greet;radius=.4;rig;position;yaw=0;route;index=0;wait=0;greetT=0;nextGreet=0;anim={action:"idle",time:0,phase:0};bubble=null;constructor(t){this.id=t.id,this.name=t.name,this.title=t.title,this.greet=t.greet,this.route=t.route;const e={body:t.body,skin:t.skin,hairColor:t.hairColor,outfit:t.outfit,hair:t.hair,weapon:t.weapon,shoulders:t.id==="mira",crown:t.id==="mira",glow:!1,necklace:t.id!=="lada",scale:t.scale};this.rig=pa(e),this.rig.root.name=t.id,this.position={x:t.route[0].x,y:0,z:t.route[0].z}}update(t,e,n,s){this.greetT=Math.max(0,this.greetT-t),this.nextGreet=Math.max(0,this.nextGreet-t),this.greetT<=0&&(this.bubble=null);const r=this.route[this.index];let o=!1;const a=n?Math.hypot(n.x-this.position.x,n.z-this.position.z):99,l=n!==null&&a<4.2&&!s;if(l)this.yaw=bn(this.yaw,Math.atan2(n.x-this.position.x,n.z-this.position.z),7,t),this.anim.action!=="wave"&&(this.anim.action="wave",this.anim.time=0),this.nextGreet<=0&&(this.bubble=this.greet,this.greetT=2.4,this.nextGreet=12);else if(s)this.anim.action!=="wave"&&(this.anim.action="idle");else{const h=r.x-this.position.x,u=r.z-this.position.z,f=Math.hypot(h,u);if(f<.35)this.wait-=t,this.wait<=0&&(this.index=(this.index+1)%this.route.length,this.wait=this.route[this.index].wait??.4),this.anim.action="work";else{const p=Math.min(1.7*t,f);this.position.x+=h/f*p,this.position.z+=u/f*p,this.yaw=bn(this.yaw,Math.atan2(h,u),6,t),o=!0,this.anim.action="walk",this.anim.phase+=t*6}}this.anim.action==="wave"?(this.anim.time+=t,this.anim.time>fa("wave")&&!l&&(this.anim.action="idle")):this.anim.time+=t,!o&&this.anim.action==="walk"&&(this.anim.action="idle");const c=jt(this.position.x,this.position.z);this.position.y=c,this.rig.root.position.set(this.position.x,c,this.position.z),this.rig.root.rotation.y=this.yaw,Ni(this.rig,this.anim,e),or(this.rig,e)}}function Kr(i,t,e,n,s,r){const o=Math.sin(i.yaw),a=Math.cos(i.yaw),l=Math.cos(e/2),c=[];for(const h of r){if(!h.alive||h.id===i.id)continue;const u=h.x-i.x,f=h.z-i.z,p=Math.hypot(u,f);if(p>t+h.radius||p<.001||u/p*o+f/p*a<l)continue;const _=h.hurt(n,u/p*s,f/p*s);_>0&&c.push({id:h.id,damage:_,x:h.x,z:h.z})}return c}function y0(i,t,e,n,s){const r=[];for(const o of s){if(!o.alive||o.id===i.id)continue;const a=o.x-i.x,l=o.z-i.z,c=Math.hypot(a,l);if(c>t+o.radius||c<.001)continue;const h=o.hurt(e,a/c*n,l/c*n);h>0&&r.push({id:o.id,damage:h,x:o.x,z:o.z})}return r}const M0={range:ht.lightRange,arc:ht.lightArc,damage:ht.lightDamage,knock:ht.knockLight},S0={range:ht.heavyRange,arc:ht.heavyArc,damage:ht.heavyDamage,knock:ht.knockHeavy};class E0{volume=.7;ctx=null;ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}play(t){if(this.volume<=.01||!this.ctx)return;const e=this.ctx,n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.connect(r),r.connect(e.destination);const o=.08*this.volume;let a=220,l=.12,c="triangle";t==="swing"?(a=320,l=.09):t==="heavy"?(a=140,l=.2,c="sawtooth"):t==="hit"?(a=180,l=.08,c="square"):t==="hurt"?(a=110,l=.18,c="sawtooth"):t==="pickup"?(a=660,l=.12,c="sine"):t==="buy"?(a=520,l=.16,c="triangle"):t==="special"?(a=90,l=.28,c="sawtooth"):t==="block"?(a=200,l=.07,c="square"):(a=480,l=.05),s.type=c,s.frequency.setValueAtTime(a,n),s.frequency.exponentialRampToValueAtTime(Math.max(40,a*.7),n+l),r.gain.setValueAtTime(o,n),r.gain.exponentialRampToValueAtTime(1e-4,n+l),s.start(n),s.stop(n+l+.02)}}const w0=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD"]);class b0{constructor(t,e,n){this.knob=n,window.addEventListener("keydown",s=>{if(s.repeat)return;!(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement)&&w0.has(s.code)&&s.preventDefault(),this.keys.add(s.code),this.edges.add(s.code)}),window.addEventListener("keyup",s=>{this.keys.delete(s.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.rmb=!1,this.releaseStick()}),t.addEventListener("contextmenu",s=>s.preventDefault()),t.addEventListener("mousedown",s=>{s.button===0&&(this.lmb=!0),s.button===2&&(this.rmb=!0),this.pointerLock&&!document.pointerLockElement&&t.requestPointerLock()}),window.addEventListener("mouseup",s=>{s.button===2&&(this.rmb=!1)}),window.addEventListener("mousemove",s=>{document.pointerLockElement===t&&(this.lookX+=s.movementX,this.lookY+=s.movementY)}),t.addEventListener("touchstart",s=>this.onLookStart(s),{passive:!1}),t.addEventListener("touchmove",s=>this.onLookMove(s),{passive:!1}),t.addEventListener("touchend",s=>this.onLookEnd(s)),t.addEventListener("touchcancel",s=>this.onLookEnd(s)),e.addEventListener("touchstart",s=>this.onStickStart(s),{passive:!1}),e.addEventListener("touchmove",s=>this.onStickMove(s),{passive:!1}),e.addEventListener("touchend",s=>this.onStickEnd(s)),e.addEventListener("touchcancel",s=>this.onStickEnd(s)),document.querySelectorAll("[data-touch]").forEach(s=>{const r=s.dataset.touch;s.addEventListener("touchstart",o=>{o.preventDefault(),o.stopPropagation(),r==="block"?this.blockToggle=!this.blockToggle:r==="attack"?this.touchEdges.attack=!0:r==="heavy"?this.touchEdges.heavy=!0:r==="dodge"?this.touchEdges.dodge=!0:r==="special"?this.touchEdges.special=!0:r==="interact"&&(this.touchEdges.interact=!0),s.classList.toggle("is-on",r==="block"?this.blockToggle:!0)},{passive:!1}),s.addEventListener("touchend",()=>{r!=="block"&&s.classList.remove("is-on")})}),document.addEventListener("gesturestart",s=>s.preventDefault())}knob;pointerLock=!1;blockToggle=!1;keys=new Set;edges=new Set;lookX=0;lookY=0;lmb=!1;rmb=!1;stickX=0;stickY=0;stickId=null;stickOrigin={x:0,y:0};lookTouches=new Map;touchEdges={attack:!1,heavy:!1,dodge:!1,special:!1,interact:!1};consumeKey(t){return this.edges.has(t)?(this.edges.delete(t),!0):!1}consumeLook(){const t={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,t}frame(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),t+=this.stickX,e+=this.stickY;const n=Math.hypot(t,e);n>1&&(t/=n,e/=n);const s=this.consumeKey("Space"),r=n>.2,o={moveX:t,moveY:e,jump:s&&!r,dodge:s&&r||this.consumeKey("ShiftLeft")||this.consumeKey("ShiftRight")||this.touchEdges.dodge,light:this.lmb||this.touchEdges.attack,heavy:this.consumeKey("KeyF")||this.touchEdges.heavy,block:this.rmb||this.blockToggle,special:this.consumeKey("KeyQ")||this.touchEdges.special,interact:this.consumeKey("KeyE")||this.touchEdges.interact};return this.lmb=!1,this.touchEdges={attack:!1,heavy:!1,dodge:!1,special:!1,interact:!1},o}syncBlockButton(){document.querySelector('[data-touch="block"]')?.classList.toggle("is-on",this.blockToggle)}onLookStart(t){for(const e of Array.from(t.changedTouches))e.clientX>window.innerWidth*.4&&this.lookTouches.set(e.identifier,{x:e.clientX,y:e.clientY})}onLookMove(t){let e=!1;for(const n of Array.from(t.changedTouches)){const s=this.lookTouches.get(n.identifier);s&&(this.lookX+=n.clientX-s.x,this.lookY+=n.clientY-s.y,s.x=n.clientX,s.y=n.clientY,e=!0)}e&&t.preventDefault()}onLookEnd(t){for(const e of Array.from(t.changedTouches))this.lookTouches.delete(e.identifier)}onStickStart(t){t.preventDefault();const e=t.changedTouches[0];!e||this.stickId!==null||(this.stickId=e.identifier,this.stickOrigin={x:e.clientX,y:e.clientY})}onStickMove(t){if(this.stickId!==null){t.preventDefault();for(const e of Array.from(t.changedTouches)){if(e.identifier!==this.stickId)continue;const n=e.clientX-this.stickOrigin.x,s=e.clientY-this.stickOrigin.y,r=46,o=Math.hypot(n,s)||1,a=Math.min(r,o);this.stickX=n/o*(a/r),this.stickY=-s/o*(a/r),this.knob.style.transform=`translate(${n/o*a}px, ${s/o*a}px)`}}}onStickEnd(t){for(const e of Array.from(t.changedTouches))e.identifier===this.stickId&&this.releaseStick()}releaseStick(){this.stickId=null,this.stickX=0,this.stickY=0,this.knob.style.transform="translate(0px, 0px)"}}const In=[{id:"gifts",title:"Дары джунглей",giver:"mira",currency:35,items:["upgrade:necklace"],rank:1,loyalty:[{id:"mira",amount:1}],stages:[{type:"collect",tag:"sun_fruit",count:4,detail:(i,t)=>`Соберите солнечные плоды на западе: ${i}/${t}`},{type:"talk",npc:"mira",key:"gifts-return",detail:"Вернитесь к старейшине Мире у костра"}]},{id:"scouts",title:"След соперниц",giver:"mira",currency:40,items:["upgrade:shoulders"],rank:1,loyalty:[{id:"mira",amount:1},{id:"lada",amount:1}],stages:[{type:"kill",ids:["shena","runa"],detail:(i,t)=>`Одолейте разведчиц чужого берега: ${i}/${t}`}]},{id:"token",title:"Знак мира",giver:"mira",currency:50,items:["upgrade:crown"],rank:1,loyalty:[{id:"mira",amount:1},{id:"lada",amount:1}],stages:[{type:"talk",npc:"lada",key:"token-lada",detail:"Передайте знак мира охотнице Ладе"},{type:"talk",npc:"mira",key:"token-mira",detail:"Вернитесь к старейшине Мире с ответом"}]}],T0="latex-tribes",Gn="saves",ga="slot1",_a="latex-tribes-save",Oc="latex-tribes-settings",ar={quality:"auto",sensitivity:1,volume:.7,seenHint:!1};function os(i={...ar}){const t={};for(const e of In)t[e.id]={status:"locked",stage:0};return{version:1,name:"Кайра",loadout:{outfit:"strike",hair:"braid",weapon:"spear",shoulders:!1,crown:!1,glow:!1,necklace:!1},owned:["outfit:strike","weapon:spear","hair:braid"],currency:0,x:Ue.x,z:Ue.z,yaw:Ue.yaw,hp:100,maxHp:100,stamina:100,maxStamina:100,collected:[],defeated:[],enemyHp:{},quests:t,buildingLevel:1,loyalty:{mira:1,lada:1,veya:1},rank:0,settings:{...i}}}function xa(){return new Promise((i,t)=>{const e=indexedDB.open(T0,1);e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(Gn)||n.createObjectStore(Gn)},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error??new Error("indexedDB"))})}async function A0(i){const t=await xa();await new Promise((e,n)=>{const s=t.transaction(Gn,"readwrite");s.objectStore(Gn).put(i,ga),s.oncomplete=()=>e(),s.onerror=()=>n(s.error??new Error("idb put"))}),t.close()}async function R0(){const i=await xa(),t=await new Promise((e,n)=>{const r=i.transaction(Gn,"readonly").objectStore(Gn).get(ga);r.onsuccess=()=>e(r.result??null),r.onerror=()=>n(r.error??new Error("idb get"))});return i.close(),t}function C0(){try{const i=localStorage.getItem(_a);if(!i)return null;const t=JSON.parse(i);return t?.version!==1?null:t}catch{return null}}function P0(){try{const i=localStorage.getItem(Oc);if(!i)return{...ar};const t=JSON.parse(i);return{quality:t.quality??"auto",sensitivity:typeof t.sensitivity=="number"?t.sensitivity:1,volume:typeof t.volume=="number"?t.volume:.7,seenHint:!!t.seenHint}}catch{return{...ar}}}function L0(i){localStorage.setItem(Oc,JSON.stringify(i))}async function D0(i){localStorage.setItem(_a,JSON.stringify(i)),L0(i.settings);try{return await A0(i),"idb"}catch{return"local"}}async function zl(){try{const t=await R0();if(t?.version===1)return kl(t)}catch{}const i=C0();return i?kl(i):null}async function I0(){localStorage.removeItem(_a);try{const i=await xa();await new Promise((t,e)=>{const n=i.transaction(Gn,"readwrite");n.objectStore(Gn).delete(ga),n.oncomplete=()=>t(),n.onerror=()=>e(n.error??new Error("idb delete"))}),i.close()}catch{}}function kl(i){const t=os(i.settings??ar);return{...t,...i,version:1,loadout:{...t.loadout,...i.loadout},settings:{...t.settings,...i.settings},owned:Array.isArray(i.owned)?i.owned:t.owned,collected:Array.isArray(i.collected)?i.collected:[],defeated:Array.isArray(i.defeated)?i.defeated:[],enemyHp:i.enemyHp??{},quests:{...t.quests,...i.quests},loyalty:{...t.loyalty,...i.loyalty},buildingLevel:U0(i.buildingLevel)}}function U0(i){return i>=3?3:i===2?2:1}const Xo=[{id:"outfit:strike",name:"Чёрный лак Удара",slot:"outfit",price:0,description:"Базовое облачение Племени Удара. Гладкий чёрный лак, золотая кромка.",outfit:"strike"},{id:"outfit:moon",name:"Алый лак Луны",slot:"outfit",price:48,description:"Облачение Кровавой Луны. Тёмный алый лак и лунный знак на груди.",outfit:"moon"},{id:"outfit:sun",name:"Белый лак Солнца",slot:"outfit",price:48,description:"Облачение Золотого Солнца. Светлый лак, золотой диск и тёплая кромка.",outfit:"sun"},{id:"weapon:spear",name:"Копьё тропы",slot:"weapon",price:0,description:"Длинное копьё для прямого удара.",weapon:"spear"},{id:"weapon:blades",name:"Парные клинки",slot:"weapon",price:34,description:"Два коротких клинка. Быстрый рисунок боя.",weapon:"blades"},{id:"weapon:staff",name:"Посох совета",slot:"weapon",price:34,description:"Тяжёлый посох с золотым навершием.",weapon:"staff"},{id:"hair:braid",name:"Боевая коса",slot:"hair",price:0,description:"Плотная коса за спиной.",hair:"braid"},{id:"hair:long",name:"Свободные пряди",slot:"hair",price:18,description:"Длинные волосы с боковыми прядями.",hair:"long"},{id:"hair:ponytail",name:"Высокий хвост",slot:"hair",price:18,description:"Хвост охотницы, перехваченный кольцом.",hair:"ponytail"},{id:"hair:bun",name:"Узел старейшин",slot:"hair",price:18,description:"Высокий узел с золотой спицей.",hair:"bun"},{id:"upgrade:shoulders",name:"Наплечники стражи",slot:"upgrade",price:36,description:"Лаковые наплечники с золотым краем. Видны сразу.",flag:"shoulders"},{id:"upgrade:crown",name:"Венец испытания",slot:"upgrade",price:52,description:"Обруч с перьями и зубцами. Знак пройденного ранга.",flag:"crown"},{id:"upgrade:glow",name:"Светящаяся смола",slot:"upgrade",price:22,description:"Тёплые смоляные полосы вдоль брони.",flag:"glow"},{id:"upgrade:necklace",name:"Ожерелье костра",slot:"upgrade",price:16,description:"Янтарные бусины на золотом обруче.",flag:"necklace"}],N0=new Map(Xo.map(i=>[i.id,i]));function Bl(i){return N0.get(i)}const F0={outfit:"Облачения",weapon:"Оружие",hair:"Причёски",upgrade:"Украшения"},Hl={low:{name:"low",dpr:1,shadows:!1,shadowSize:512,trees:26,bushes:16,rocks:8,terrain:46,far:95,fog:.03,flies:10,antialias:!1,torchLights:!1,transmission:!1},medium:{name:"medium",dpr:1.35,shadows:!0,shadowSize:1024,trees:48,bushes:28,rocks:14,terrain:70,far:140,fog:.02,flies:24,antialias:!0,torchLights:!0,transmission:!0},high:{name:"high",dpr:1.75,shadows:!0,shadowSize:2048,trees:74,bushes:40,rocks:18,terrain:96,far:190,fog:.0155,flies:36,antialias:!0,torchLights:!0,transmission:!0}};function O0(){const i=navigator,t=window.matchMedia("(pointer: coarse)").matches,e=navigator.maxTouchPoints>1,n=Math.min(window.innerWidth,window.innerHeight)<520;return t&&e||e&&n?"low":i.deviceMemory&&i.deviceMemory<=4?"medium":"high"}function Ys(i){return i==="auto"?O0():i}function z0(i,t){return i==="mira"?k0(t):i==="lada"?B0(t):i==="veya"?H0(t):i==="hut"?G0(t):i==="fire"?V0():{speaker:"Остров",loyalty:"",text:"Ветер шевелит знамёна.",choices:[{id:"bye",label:"Отойти"}]}}function va(i,t){return`Доверие: ${i.loyalty(t)}`}function k0(i){const t=i.quest("gifts"),e=i.quest("scouts"),n=i.quest("token"),s={speaker:"Старейшина Мира",loyalty:va(i,"mira")};return t.status==="locked"?{...s,text:`${i.name}, остров Виа проверяет всякую, кто ступает на тропу. Племя узнаёт своих по делам. В западных джунглях созрели солнечные плоды — принеси четыре.`,choices:[{id:"start-gifts",label:"Берусь за поручение"},{id:"bye",label:"Позже"}]}:t.status==="active"&&t.stage===0?{...s,text:"Плоды светятся между корней на западе. Четыре — и сбор засчитан. Тропа сама покажет, если смотреть под листву.",choices:[{id:"bye",label:"Иду в чащу"}]}:t.status==="active"&&t.stage>=1?{...s,text:"Плоды на месте. Джунгли тебя не отвергли. Это первый ранг — не венец, но уже голос.",choices:[{id:"turnin-gifts",label:"Отдать плоды"}]}:e.status==="locked"?{...s,text:"Пока ты ходила в чащу, на тропах видели разведчиц чужого берега. Это не война, а испытание границ. Шена ходит на западе, Руна — у озера. Одолей обеих. Если отступят, не добивай из злости.",choices:[{id:"start-scouts",label:"Принимаю испытание"},{id:"bye",label:"Сначала подготовлюсь"}]}:e.status==="active"?{...s,text:"Шена держит западную чащу, Руна стоит у кромки озера. Бей прямо и береги силы: блок и рывок честнее слепой ярости.",choices:[{id:"bye",label:"Поняла"}]}:n.status==="locked"?{...s,text:"Ты выстояла. Отнеси Ладе знак мира — чёрное перо на шнурке. Пусть охотницы знают: рубеж спокоен, и ты с племенем.",choices:[{id:"start-token",label:"Отнесу знак"},{id:"bye",label:"Чуть позже"}]}:n.status==="active"&&n.stage===0?{...s,text:"Лада обходит частокол и тропу к водопаду. Знак при ней станет словом, а не украшением.",choices:[{id:"bye",label:"Найду Ладу"}]}:n.status==="active"&&n.stage>=1?{...s,text:"Лада приняла знак. Племя поднимает твой голос: ты больше не гостья тропы. Дом можно растить, союзниц — звать.",choices:[{id:"turnin-token",label:"Принять ответ племени"}]}:{...s,text:`${i.name}, остров запомнил твои испытания. Тренируй удар, укрепляй дом, держи костёр. Впереди ещё тропы, храмы и чужие берега — но сегодня племя стоит.`,choices:[{id:"bye",label:"Я рядом"}]}}function B0(i){const t=i.quest("token"),e=i.quest("scouts"),n={speaker:"Охотница Лада",loyalty:va(i,"lada")};return t.status==="active"&&t.stage===0?{...n,text:"Ты от Миры? Вижу знак. Рубеж постоит, разведчицы больше не ходят как хозяева. Скажи старейшине: охотницы с тобой.",choices:[{id:"token-lada",label:"Передать знак"}]}:e.status==="active"?{...n,text:"Чужие следы свежие, но это испытание, не облава. Шена любит заходить слева, Руна бьёт копьём в лоб. Я прикрою деревню.",choices:[{id:"bye",label:"Спасибо, сестра"}]}:{...n,text:"Наши костры горят ровно. Если услышишь ягуара в западной тени — не спиной к нему. Зверь не из племени, ему довольно рывка.",choices:[{id:"bye",label:"Буду смотреть"}]}}function H0(i){return{speaker:"Вея",loyalty:va(i,"veya"),text:"Смола, перья и сталь. Янтарь меняет облик воительницы — и только его, никаких чужих монет. Выбирай, что поможет в испытаниях.",choices:[{id:"shop",label:"Открыть обмен"},{id:"bye",label:"Просто смотрю"}]}}function G0(i){const t=Wo(i.buildingLevel),e=["","Хижина воительницы","Дом стражи","Чертог племени"],n=["","Тесная хижина у тропы. Здесь можно держать оружие и спать у своего огня.","Дом стражи: крыльцо, стойка с копьями и знамя. Племя видит, что ты остаёшься.","Чертог племени. Факелы, золотая кромка и учебный двор. Отсюда уже зовут союзниц."][i.buildingLevel],s=[];return t!==null&&s.push({id:"upgrade",label:i.currency>=t?`Улучшить за ${t} янтаря`:`Нужно ${t} янтаря`}),s.push({id:"bye",label:"Отойти"}),{speaker:e[i.buildingLevel]??"Хижина",loyalty:"",text:n,choices:s}}function V0(){return{speaker:"Костёр племени",loyalty:"",text:"Пламя ровное. У костра можно перевести дух и закрыть раны перед новой тропой.",choices:[{id:"rest",label:"Отдохнуть"},{id:"bye",label:"Отойти"}]}}class W0{state={};completed=[];constructor(t){this.reset(t)}reset(t){this.state={};for(const e of In)this.state[e.id]=t?.[e.id]?{status:t[e.id].status,stage:t[e.id].stage}:{status:"locked",stage:0};this.completed=[]}start(t){const e=this.state[t];return!e||e.status!=="locked"?!1:(e.status="active",e.stage=0,!0)}markTalk(t,e){const n=this.state[t],s=In.find(o=>o.id===t);if(!n||!s||n.status!=="active"||n.stage!==e)return!1;const r=s.stages[e];return!r||r.type!=="talk"?!1:(n.stage+=1,n.stage>=s.stages.length&&(n.status="done",this.completed.push(s)),!0)}refresh(t,e){const n=[];for(const r of In){const o=this.state[r.id];if(o.status!=="active")continue;let a=0;for(;o.status==="active"&&a++<4;){const l=r.stages[o.stage];if(!l||l.type==="talk"||!this.stageMet(l,t,e))break;o.stage+=1,o.stage>=r.stages.length?(o.status="done",this.completed.push(r)):n.push({quest:r,detail:this.stageDetail(r.stages[o.stage],t,e)})}}return{completed:this.completed.splice(0),advanced:n}}view(t,e){const n=In.find(r=>this.state[r.id].status==="active");if(!n){const r=In.every(o=>this.state[o.id].status==="done");return{title:r?"Остров спокоен":"Нет поручения",detail:r?"Испытания Миры пройдены. Укрепляйте дом и зовите союзниц.":"Поговорите со старейшиной Мирой у костра.",empty:r?"done":"none"}}const s=n.stages[this.state[n.id].stage];return{title:n.title,detail:s?this.stageDetail(s,t,e):"",empty:null}}markers(t,e,n){const s=In.find(a=>this.state[a.id].status==="active");if(!s)return[];const r=s.stages[this.state[s.id].stage];if(!r)return[];if(r.type==="collect")return t.filter(a=>a.tag===r.tag&&!a.collected).map(a=>({x:a.x,z:a.z}));if(r.type==="kill")return n.filter(a=>r.ids.includes(a.id)&&a.alive).map(a=>({x:a.x,z:a.z}));const o=e.find(a=>a.id===r.npc);return o?[{x:o.x,z:o.z}]:[]}stageMet(t,e,n){return t.type==="collect"?e.filter(s=>s.startsWith("fruit-")).length>=t.count||e.length>=t.count:t.type==="kill"?t.ids.every(s=>n.has(s)):!1}stageDetail(t,e,n){return t.type==="collect"?t.detail(Math.min(t.count,e.length),t.count):t.type==="kill"?t.detail(t.ids.filter(s=>n.has(s)).length,t.ids.length):t.detail}}const Jn=["Новичок тропы","Собирательница","Охотница острова","Стражница племени","Голос Виа"];class X0{constructor(t){this.canvas=t}canvas;render(t){const e=this.canvas.getContext("2d");if(!e)return;const n=this.canvas.width,s=this.canvas.height,r=3.05,o=l=>n/2+(l-t.x)*r,a=l=>s/2+(l-t.z)*r;e.clearRect(0,0,n,s),e.save(),e.beginPath(),e.arc(n/2,s/2,n/2-1,0,Math.PI*2),e.clip(),e.fillStyle="#102016",e.fillRect(0,0,n,s),e.fillStyle="#1c6d78",e.beginPath(),e.ellipse(o(2),a(-26),15*r,12*r,0,0,Math.PI*2),e.fill(),e.fillStyle="#3e6a34",e.beginPath(),e.arc(o(0),a(12),9*r,0,Math.PI*2),e.fill(),e.fillStyle="#d7b15e",e.fillRect(o(t.hutX)-3,a(t.hutZ)-3,6,6),e.fillStyle="#f2d48a";for(const l of t.fruits)e.beginPath(),e.arc(o(l.x),a(l.z),3,0,Math.PI*2),e.fill();e.fillStyle="#9ad7ff";for(const l of t.npcs)e.beginPath(),e.arc(o(l.x),a(l.z),3.5,0,Math.PI*2),e.fill();e.fillStyle="#e25b4a";for(const l of t.enemies)e.beginPath(),e.arc(o(l.x),a(l.z),3.5,0,Math.PI*2),e.fill();e.strokeStyle="#fff6d2",e.lineWidth=2;for(const l of t.markers)e.beginPath(),e.arc(o(l.x),a(l.z),6,0,Math.PI*2),e.stroke();e.restore(),e.save(),e.translate(n/2,s/2),e.rotate(-t.yaw),e.fillStyle="#ffe7a8",e.beginPath(),e.moveTo(0,8),e.lineTo(5,-6),e.lineTo(-5,-6),e.closePath(),e.fill(),e.restore()}}class q0{floaters=[];plates=[];modalResolve=null;hooks;constructor(t){this.hooks=t,document.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n==="play"?t.play():n==="continue"?t.continue():(n==="heroine"||n==="tribe"||n==="shop"||n==="settings")&&t.open(n)})}),document.querySelector("#panel-close")?.addEventListener("click",()=>t.close()),document.querySelector("#modal-yes")?.addEventListener("click",()=>this.finishModal(!0)),document.querySelector("#modal-no")?.addEventListener("click",()=>this.finishModal(!1))}setBoot(t){document.querySelector("#boot")?.toggleAttribute("hidden",!t)}showFail(){document.querySelector("#boot")?.setAttribute("hidden",""),document.querySelector("#webgl-fail")?.removeAttribute("hidden")}setMenu(t){document.querySelector("#main-menu")?.toggleAttribute("hidden",!t)}setContinueEnabled(t){const e=document.querySelector("#btn-continue");e&&(e.disabled=!t)}setHud(t){document.querySelector("#hud")?.toggleAttribute("hidden",!t)}setTouch(t){document.querySelector("#touch")?.toggleAttribute("hidden",!t)}setPrompt(t){const e=document.querySelector("#interact-prompt");e&&(e.textContent=t,e.toggleAttribute("hidden",t.length===0))}setBars(t,e,n,s){const r=document.querySelector("#hp-fill"),o=document.querySelector("#st-fill"),a=document.querySelector("#hp-text");r&&(r.style.transform=`scaleX(${Math.max(0,t)/e})`),o&&(o.style.transform=`scaleX(${Math.max(0,n)/s})`),a&&(a.textContent=String(Math.ceil(Math.max(0,t))))}setQuest(t,e){const n=document.querySelector("#quest-title"),s=document.querySelector("#quest-detail");n&&(n.textContent=t),s&&(s.textContent=e)}setCurrency(t){const e=document.querySelector("#currency");e&&(e.textContent=Cl(t))}setSpecial(t,e,n){const s=document.querySelector("#special-name"),r=document.querySelector("#special-cd");s&&(s.textContent=t>.05?t.toFixed(1):n),r&&(r.style.width=`${Math.max(0,1-t/e)*100}%`)}setBlock(t){document.querySelector('[data-ability="block"]')?.classList.toggle("is-on",t)}setHurt(t){document.querySelector("#vignette")?.classList.toggle("hurt",t)}setFade(t){const e=document.querySelector("#fade");e&&(e.style.opacity=String(t))}setHint(t){const e=document.querySelector("#hint");e&&(e.textContent=t??"",e.toggleAttribute("hidden",!t))}showDialog(t){document.querySelector("#dialog")?.removeAttribute("hidden");const e=document.querySelector("#dialog-name"),n=document.querySelector("#dialog-loyalty"),s=document.querySelector("#dialog-text"),r=document.querySelector("#dialog-choices");if(e&&(e.textContent=t.speaker),n&&(n.textContent=t.loyalty),s&&(s.textContent=t.text),!!r){r.replaceChildren();for(const o of t.choices){const a=document.createElement("button");a.type="button",a.className="choice",a.textContent=o.label,a.addEventListener("click",()=>this.hooks.choice(o.id)),r.append(a)}}}hideDialog(){document.querySelector("#dialog")?.setAttribute("hidden","")}confirm(t){const e=document.querySelector("#modal"),n=document.querySelector("#modal-text");return n&&(n.textContent=t),e?.removeAttribute("hidden"),new Promise(s=>{this.modalResolve=s})}dismissModal(){return this.modalResolve?(this.finishModal(!1),!0):!1}showShop(t){this.openShell("Магазин");const e=this.body(),n=document.createElement("p");n.className="lore",n.textContent=`${Cl(t.currency)}. Покупка сразу меняет облик или дом.`,e.append(n);const s=["outfit","weapon","hair","upgrade"];for(const h of s){const u=document.createElement("h3");u.className="slot-title",u.textContent=F0[h],e.append(u);for(const f of Xo.filter(p=>p.slot===h))e.append(this.itemRow(f,t))}const r=document.createElement("h3");r.className="slot-title",r.textContent="Постройка",e.append(r);const o=document.createElement("div");o.className="item";const a=document.createElement("strong");a.textContent=t.buildingName;const l=document.createElement("p");l.textContent=t.buildingText,o.append(a,l);const c=document.createElement("button");c.type="button",c.className="text-btn",t.nextCost===null?(c.textContent="Чертог готов",c.disabled=!0):(c.textContent=t.currency>=t.nextCost?`Улучшить · ${t.nextCost}`:`Нужно ${t.nextCost}`,c.disabled=t.currency<t.nextCost,c.addEventListener("click",()=>this.hooks.upgrade())),o.append(c),e.append(o)}showHeroine(t){this.openShell("Героиня");const e=this.body(),n=document.createElement("p");n.className="lore",n.textContent=`${t.rank}. Облачение, оружие и волосы меняются сразу.`;const s=document.createElement("label");s.className="slider",s.textContent="Имя";const r=document.createElement("input");r.type="text",r.maxLength=16,r.value=t.name,r.addEventListener("change",()=>this.hooks.rename(r.value)),s.append(r),e.append(n,s);for(const o of t.loyalty){const a=document.createElement("p");a.className="lore",a.textContent=`${o.name}: доверие ${o.value}`,e.append(a)}for(const o of Xo)t.owned.includes(o.id)&&e.append(this.itemRow(o,{...t,currency:9999,buildingLevel:1,buildingName:"",buildingText:"",nextCost:null}))}showTribe(t){this.openShell("Племя");const e=this.body(),n=document.createElement("p");n.className="lore",n.textContent=`Твой ранг: ${t.rank}. Сейчас на тебе знак: ${t.active}.`,e.append(n);for(const r of t.lines){const o=document.createElement("article");o.className="tribe-card";const a=document.createElement("h3");a.textContent=r.current?`${r.name} — твоё`:r.name;const l=document.createElement("p");l.className="eyebrow",l.textContent=r.outfit;const c=document.createElement("p");c.className="lore",c.textContent=r.summary,o.append(a,l,c),e.append(o)}const s=document.createElement("h3");s.className="slot-title",s.textContent="Поручения",e.append(s);for(const r of t.quests){const o=document.createElement("p");o.className="lore",o.textContent=`${r.title}: ${r.status}`,e.append(o)}}showSettings(t){this.openShell("Настройки");const e=this.body(),n=document.createElement("div");n.className="slot-title",n.textContent="Графика";const s=document.createElement("div");s.className="settings-row";const r=[{id:"auto",label:"Авто"},{id:"low",label:"Низкое"},{id:"medium",label:"Среднее"},{id:"high",label:"Высокое"}];for(const p of r){const g=document.createElement("button");g.type="button",g.className="text-btn",g.textContent=p.label,g.classList.toggle("is-on",t.quality===p.id),g.addEventListener("click",()=>this.hooks.quality(p.id)),s.append(g)}const o=this.slider("Чувствительность камеры",t.sensitivity,.4,1.8,p=>this.hooks.sensitivity(p)),a=this.slider("Звук",t.volume,0,1,p=>this.hooks.volume(p)),l=document.createElement("p");l.className="help",l.textContent=t.touch?"iPhone: левый джойстик — ход. Справа: Удар, Сила, Рывок, Блок, Особая, Действие. Проведите пальцем по правой части экрана, чтобы повернуть камеру. Блок включается нажатием.":"WASD или стрелки — ход. Мышь — обзор после щелчка. Пробел на месте — прыжок, в движении — уклонение с краткой неуязвимостью. Shift — рывок. ЛКМ — лёгкий удар. F — тяжёлый удар, тратит силы. ПКМ — блок. Q — особый приём. E — говорить и собирать. Esc — меню.";const c=document.createElement("div");c.className="settings-row";const h=document.createElement("button");h.type="button",h.className="text-btn",h.textContent="Сохранить",h.addEventListener("click",()=>this.hooks.save());const u=document.createElement("button");u.type="button",u.className="text-btn",u.textContent="В главное меню",u.addEventListener("click",()=>this.hooks.quit());const f=document.createElement("button");f.type="button",f.className="text-btn",f.textContent="Стереть сохранение",f.addEventListener("click",()=>this.hooks.wipe()),c.append(h,u,f),e.append(n,s,o,a,l,c)}showPause(){this.openShell("Пауза");const t=this.body(),e=[{label:"Продолжить",run:()=>this.hooks.close()},{label:"Героиня",run:()=>this.hooks.open("heroine")},{label:"Племя",run:()=>this.hooks.open("tribe")},{label:"Магазин",run:()=>this.hooks.open("shop")},{label:"Настройки",run:()=>this.hooks.open("settings")},{label:"Сохранить",run:()=>this.hooks.save()},{label:"В главное меню",run:()=>this.hooks.quit()}],n=document.createElement("div");n.className="menu-list";for(const s of e){const r=document.createElement("button");r.type="button",r.textContent=s.label,r.addEventListener("click",()=>s.run()),n.append(r)}t.append(n)}hidePanel(){document.querySelector("#panel")?.setAttribute("hidden","")}toast(t){const e=document.querySelector("#toasts");if(!e)return;const n=document.createElement("div");n.className="toast",n.textContent=t,e.append(n),window.setTimeout(()=>n.remove(),2800)}floater(t,e,n,s,r){const o=document.querySelector("#float-layer");if(!o)return;const a=document.createElement("div");a.className=`floater ${r}`,a.textContent=s,o.append(a),this.floaters.push({el:a,x:t,y:e,z:n,life:.9,max:.9})}setPlates(t){const e=document.querySelector("#plate-layer");if(e){for(;this.plates.length<t.length;){const n=document.createElement("div");n.className="plate",e.append(n),this.plates.push({el:n,x:0,y:0,z:0})}this.plates.forEach((n,s)=>{const r=t[s];if(!r){n.el.style.display="none";return}n.x=r.x,n.y=r.y,n.z=r.z,n.el.style.display="block";const o=r.hp===void 0?"":`<div class="mini"><i style="width:${Math.round(r.hp*100)}%"></i></div>`;n.el.innerHTML=`<b></b><span></span>${o}`;const a=n.el.querySelector("b"),l=n.el.querySelector("span");a&&(a.textContent=r.title),l&&(l.textContent=r.sub)})}}project(t,e){const n=window.innerWidth,s=window.innerHeight,r=new D;t.getWorldDirection(r);const o=(a,l,c,h,u)=>{const f=new D(l,c,h);return f.clone().sub(t.position).dot(r)<=.15?(a.style.display="none",!1):(f.project(t),a.style.display="block",a.style.left=`${(f.x*.5+.5)*n}px`,a.style.top=`${(-f.y*.5+.5)*s-u}px`,!0)};this.floaters=this.floaters.filter(a=>(a.life-=e,a.y+=e*.7,a.life<=0?(a.el.remove(),!1):(a.el.style.opacity=String(Math.max(0,a.life/a.max)),o(a.el,a.x,a.y,a.z,0),!0)));for(const a of this.plates)a.el.style.display!=="none"&&o(a.el,a.x,a.y,a.z,0)}openShell(t){const e=document.querySelector("#panel-title");e&&(e.textContent=t),document.querySelector("#panel")?.removeAttribute("hidden"),this.body().replaceChildren()}body(){const t=document.querySelector("#panel-body");if(!t)throw new Error("panel");return t}itemRow(t,e){const n=document.createElement("div");n.className="item";const s=document.createElement("strong");s.textContent=t.name;const r=document.createElement("p");r.textContent=t.description;const o=document.createElement("button");o.type="button",o.className="text-btn";const a=e.owned.includes(t.id);return this.isWorn(t,e.loadout)?(o.textContent="Надето",o.disabled=!0):a?(o.textContent="Надеть",o.dataset.buy=t.id,o.addEventListener("click",()=>this.hooks.buy(t.id))):e.currency<t.price?(o.textContent=`${t.price} янтаря`,o.disabled=!0):(o.textContent=t.price===0?"Взять":`Купить · ${t.price}`,o.dataset.buy=t.id,o.addEventListener("click",()=>this.hooks.buy(t.id))),n.append(s,o,r),n}isWorn(t,e){return t.outfit?e.outfit===t.outfit:t.weapon?e.weapon===t.weapon:t.hair?e.hair===t.hair:t.flag?e[t.flag]:!1}slider(t,e,n,s,r){const o=document.createElement("label");o.className="slider",o.textContent=t;const a=document.createElement("input");return a.type="range",a.min=String(n),a.max=String(s),a.step="0.05",a.value=String(e),a.addEventListener("input",()=>r(Number(a.value))),o.append(a),o}finishModal(t){document.querySelector("#modal")?.setAttribute("hidden","");const e=this.modalResolve;this.modalResolve=null,e?.(t)}}class Y0{solids=[];setTrees(t){this.solids=this.solids.filter(e=>!e.id.startsWith("tree")),this.solids.push(...t)}setSolid(t){this.solids=this.solids.filter(e=>e.id!==t.id),this.solids.push(t)}resolve(t,e,n,s,r){let o=t,a=e;for(let h=0;h<2;h++){const u=a0(o,a);o=u.x,a=u.z;for(const f of this.solids){const p=o-f.x,g=a-f.z,_=Math.hypot(p,g),m=n+f.r;if(_<m)if(_<1e-4)o+=m;else{const d=(m-_)/_;o+=p*d,a+=g*d}}}const l=jt(o,a),c=jt(s,r);return o0(l)||l-c>.9?{x:s,z:r}:{x:o,z:a}}}function Gl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Se;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Vl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][f]);const g=Vl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vl(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Oe(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Wl=new Zt(.22,.32,1,6),j0=new qe(.18,1.5,5),Xl=new oa(.7,0),$0=new te(.45,7,6),K0=new ra(.7,0);function Qn(i,t,e,n,s,r,o,a,l,c){let h=i.clone();const u=new he,f=new Wi().setFromEuler(new Qe(s,r,o));if(u.compose(new D(t,e,n),f,new D(a,l,c)),h.applyMatrix4(u),h.getIndex()&&(h=h.toNonIndexed()),h.getAttribute("normal")||h.computeVertexNormals(),!h.getAttribute("uv")){const p=h.getAttribute("position").count;h.setAttribute("uv",new Oe(new Float32Array(p*2),2))}return h}function ql(i,t){const e=Math.hypot(i*.92,t*.88);if(e>45||e<7)return!1;const n=jt(i,t);return!(n<-.25||n>4||Math.hypot(i-Gi.x,t-Gi.z)<15||Math.hypot(i-rr.x,t-rr.z)<16||da(i,t,0,12,2,-16)<3.8||t<-30&&Math.abs(i-2)<5||Math.hypot(i+24,t+2)<3.5||Math.hypot(i-14,t+17)<3.5||Math.hypot(i+33,t+14)<3)}function Yl(i){const t=Nc(20261113),e=[],n=[],s=[];let r=0,o=0;const a=(g,_,m=1)=>{const d=jt(g,_);let E=g,w=d,y=_;const A=(t()-.5)*.35,T=t()*Math.PI*2;for(let R=0;R<4;R++){const L=1.05*m;e.push(Qn(Wl,E,w+L*.5,y,A,T,0,(1-R*.12)*m,L,(1-R*.12)*m)),E+=Math.sin(T)*Math.sin(A)*L,y+=Math.cos(T)*Math.sin(A)*L,w+=Math.cos(A)*L*.92}for(let R=0;R<6;R++){const L=T+R/6*Math.PI*2;n.push(Qn(j0,E,w,y,1.05,L,.2,.35*m,1.15*m,.35*m))}s.push({id:`tree-${g.toFixed(1)}-${_.toFixed(1)}`,x:g,z:_,r:.55*m,h:6}),r+=1},l=(g,_)=>{const m=jt(g,_),d=2.2+t()*1.3;e.push(Qn(Wl,g,m+d*.5,_,0,0,0,.85,d,.85)),n.push(Qn(Xl,g,m+d+.45,_,0,t()*3,0,1.7,1.15,1.7)),n.push(Qn(Xl,g+.3,m+d+.1,_-.2,0,0,0,1.2,.9,1.2)),s.push({id:`tree-${g.toFixed(1)}-${_.toFixed(1)}`,x:g,z:_,r:.6,h:5}),r+=1};for(const g of Dl)a(g.x,g.z,1.05);for(;r<i.trees+Dl.length&&o<4e3;){o+=1;const g=(t()*2-1)*48,_=(t()*2-1)*46;ql(g,_)&&(t()>.42?a(g,_,.85+t()*.4):l(g,_))}for(let g=0;g<i.bushes;g++){const _=(t()*2-1)*46,m=(t()*2-1)*44;if(!ql(_,m))continue;const d=jt(_,m);n.push(Qn($0,_,d+.3,m,0,t(),0,1.1,.7,1.1)),s.push({id:`tree-bush-${g}`,x:_,z:m,r:.4,h:1.2})}for(let g=0;g<i.rocks;g++){const _=(t()*2-1)*44,m=(t()*2-1)*42;if(Math.hypot(_,m-12)<10)continue;const d=jt(_,m);d<-.4||d>5||(e.push(Qn(K0,_,d+.25,m,t(),t(),t(),.8+t(),.5+t()*.4,.8+t())),s.push({id:`tree-rock-${g}`,x:_,z:m,r:.7,h:1.4}))}const c=new ce({color:5913380,roughness:.92,metalness:0}),h=new ce({color:1735220,roughness:.78,metalness:0}),u=new Vt;u.name="foliage";const f=Gl(e,!1),p=Gl(n,!1);if(f){const g=new Pt(f,c);g.castShadow=i.name==="high",g.receiveShadow=!0,u.add(g)}if(p){const g=new Pt(p,h);g.castShadow=!1,g.receiveShadow=!0,u.add(g)}for(const g of e)g.dispose();for(const g of n)g.dispose();return{group:u,solids:s}}const Nn=new ce({color:7030320,roughness:.86}),Ne=new ce({color:3810840,roughness:.8}),as=new ce({color:8156780,roughness:.92}),ls=new ce({color:8003116,roughness:.7,side:on}),ni=new ce({color:14726222,metalness:1,roughness:.3}),Zr=new ce({color:4074008,roughness:.9}),jl=new ce({color:16742962,emissive:16734746,emissiveIntensity:.8});function Ot(i,t,e,n,s,r){const o=new Pt(t,e);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function Z0(){const i=new Vt;i.name="village";const t=[],e=[],n=[],s=jt(sn.x,sn.z),r=Ot(i,new Zt(.85,.95,.28,8),as,sn.x,s+.1,sn.z);r.receiveShadow=!0;for(let f=0;f<4;f++){const p=Ot(i,new Zt(.08,.08,1.1,5),Ne,sn.x,s+.28,sn.z);p.rotation.z=Math.PI/2,p.rotation.y=f/4*Math.PI}const o=new wc(new ia({color:16757082,transparent:!0,opacity:.9,depthWrite:!1,blending:cs}));o.position.set(sn.x,s+.7,sn.z),o.scale.set(.8,1.2,1),i.add(o),e.push(o);const a=new sr(16747066,18,11,2);a.position.set(sn.x,s+1.1,sn.z),i.add(a),n.push(a);for(const f of[-1,1]){const p=new Vt,g=sn.z-1.5,_=f*2.4,m=jt(_,g);Ot(p,new Zt(.18,.24,2.4,6),Ne,0,1.2,0),Ot(p,new ie(.55,.7,.2),Nn,0,2.15,0);const d=Ot(p,new te(.06,6,6),jl,f*-.12,2.25,.1);d.castShadow=!1,Ot(p,new te(.06,6,6),jl,f*.12,2.25,.1),p.position.set(_,m,g),i.add(p)}const l=jt(ke.x,ke.z);Ot(i,new ie(3.4,.18,1.8),Nn,ke.x,l+.7,ke.z);for(const[f,p]of[[-1.4,-.7],[1.4,-.7],[-1.4,.7],[1.4,.7]])Ot(i,new Zt(.08,.08,1.6,5),Ne,ke.x+f,l+1.5,ke.z+p);const c=Ot(i,new ie(3.8,.08,2.2),ls,ke.x,l+2.35,ke.z);c.material=ls,Ot(i,new Zt(.22,.26,.35,8),as,ke.x-.7,l+.95,ke.z),Ot(i,new te(.16,8,8),ni,ke.x+.55,l+.95,ke.z+.2);const h=Ot(i,new Hn(.7,1.1),ls,ke.x+1.9,l+1.7,ke.z);t.push(h);for(let f=0;f<5;f++){const p=6-f*2.1,g=jt(.2,p),_=Ot(i,new ie(1.6,.08,.42),Nn,.2,g+.08,p);_.receiveShadow=!0}const u=Ot(i,new Zt(.1,.1,1.6,5),Ne,-2.2,jt(-2.2,10)+.28,10);return u.rotation.z=Math.PI/2,{group:i,lights:n,banners:t,flames:e}}function J0(i,t){const e=new Vt;e.name="hut";const n=[],s=[],r=[],o=jt(Ze.x,Ze.z);if(e.position.set(Ze.x,o,Ze.z),i<=1){Ot(e,new Zt(2.05,2.2,2.15,8),Nn,0,1.1,0);const a=Ot(e,new qe(3.1,1.7,8),Zr,0,2.8,0);a.castShadow=!0,Ot(e,new ie(.7,1.3,.08),Ne,0,.7,2.05)}else if(i===2){Ot(e,new Zt(3.15,3.3,.45,10),as,0,.22,0),Ot(e,new Zt(2.9,3.05,2.5,10),Nn,0,1.6,0),Ot(e,new qe(4.2,1.8,10),Zr,0,3.5,0),Ot(e,new ie(2.4,.16,1.4),Nn,0,.4,3.3),Ot(e,new Zt(.08,.08,1.5,5),Ne,-.9,1.15,3.3),Ot(e,new Zt(.08,.08,1.5,5),Ne,.9,1.15,3.3);const a=Ot(e,new Hn(.85,1.4),ls,2.4,2.2,.4);n.push(a),Ot(e,new Zt(.05,.05,2.2,5),Ne,2.4,1.1,.4),Ot(e,new ie(.15,1.5,.15),Ne,-2.5,.9,1.2),Ot(e,new Zt(.02,.02,1.5,4),ni,-2.2,1.5,1.2).rotation.z=.4;const l=new sr(16756832,t?10:0,8,2);l.position.set(1.2,2.2,2.4),e.add(l),r.push(l);const c=$l(1.2,2.1,2.4);e.add(c),s.push(c),Ot(e,new ie(.8,1.5,.08),Ne,0,.8,2.95)}else{Ot(e,new Zt(4.15,4.4,.55,12),as,0,.28,0);const a=Ot(e,new Fe(4.2,.06,6,20),ni,0,.6,0);a.rotation.x=Math.PI/2,Ot(e,new Zt(3.7,3.95,3.1,12),Nn,0,2,0),Ot(e,new Fe(3.85,.05,6,20),ni,0,3.4,0).rotation.x=Math.PI/2,Ot(e,new qe(5.2,2.1,12),Zr,0,4.5,0),Ot(e,new qe(2.2,1.3,10),ni,0,5.7,0),Ot(e,new ie(3.2,.18,1.8),as,0,.45,4.4),Ot(e,new Zt(.1,.1,2.2,6),Ne,-1.3,1.5,4.4),Ot(e,new Zt(.1,.1,2.2,6),Ne,1.3,1.5,4.4);const l=Ot(e,new ie(1.1,2.1,.08),new ce({color:16756832,emissive:16742962,emissiveIntensity:.45}),0,1.15,3.75);l.castShadow=!1,[[-3.6,2.2],[3.6,2.2],[-2.4,-3.2],[2.8,-2.6]].forEach(([h,u],f)=>{Ot(e,new Zt(.07,.09,1.8,5),Ne,h,.9,u);const p=$l(h,1.85,u);e.add(p),s.push(p);const g=new sr(16749392,t?12:0,7,2);if(g.position.set(h,1.9,u),e.add(g),r.push(g),f<2){const _=Ot(e,new Hn(.9,1.5),f===0?ls:ni,h,2.3,u+.2);n.push(_)}}),Ot(e,new Zt(.12,.16,2.4,6),Ne,-3.2,1.2,4.6),Ot(e,new te(.28,8,8),Nn,-3.2,2.5,4.6),Ot(e,new Zt(.12,.16,2.4,6),Ne,3.3,1.2,4.2),Ot(e,new ie(.7,.9,.15),ni,3.3,2.5,4.2)}return{group:e,lights:r,banners:n,flames:s}}function $l(i,t,e){const n=new wc(new ia({color:16761194,transparent:!0,opacity:.92,depthWrite:!1,blending:cs}));return n.position.set(i,t,e),n.scale.set(.38,.62,1),n}class Q0{scene=new Sc;collision=new Y0;sun;sunTarget=new ye;buildingLevel=1;profile;terrain=null;terrainMat;foliage=null;dressing;hut=null;water;waterTime;ocean;sky;flies;flyBase;fallTime;fruits=[];constructor(t,e){this.profile=t,this.buildingLevel=e,this.scene.background=new zt(12878954),this.scene.fog=new nr(12878954,t.fog);const n=new pu(16765608,1915426,.85);this.scene.add(n),this.sun=new Gr(16761994,2.7),this.sun.castShadow=t.shadows,this.configureShadow(),this.scene.add(this.sun),this.scene.add(this.sunTarget),this.sun.target=this.sunTarget;const s=new Gr(9352408,.55);s.position.set(-18,10,8),this.scene.add(s);const r=new Gr(16747082,1.15);r.position.set(-12,8,-20),this.scene.add(r),this.terrainMat=new ce({color:16777215,roughness:.94,metalness:0,vertexColors:!0,map:tg()}),this.buildTerrain(),this.sky=eg(),this.scene.add(this.sky);const o=new ce({color:1732230,roughness:.18,metalness:.2,transparent:!0,opacity:.82});this.ocean=new Pt(new Hi(220,40),o),this.ocean.rotation.x=-Math.PI/2,this.ocean.position.y=-1.35,this.scene.add(this.ocean),this.waterTime={value:0},this.water=this.makeWater(t),this.scene.add(this.water);const a=ng();this.fallTime=a.time,this.scene.add(a.group),this.dressing=Z0(),this.scene.add(this.dressing.group),this.collision.setSolid({id:"stall",x:-10.2,z:13.4,r:1.7,h:3}),this.collision.setSolid({id:"fire",x:0,z:8.6,r:.9,h:1.2}),this.placeHut(e,t.torchLights);const l=Yl(t);this.foliage=l.group,this.scene.add(l.group),this.collision.setTrees(l.solids);for(const h of s0)this.addFruit(h);const c=Kl(t.flies);this.flies=c.points,this.flyBase=c.base,this.scene.add(this.flies)}setFruit(t,e){const n=this.fruits.find(s=>s.def.id===t);n&&(n.collected=e,n.mesh.visible=!e)}resetFruits(){for(const t of this.fruits)t.collected=!1,t.mesh.visible=!0}fruitSpots(){return this.fruits.map(t=>({id:t.def.id,tag:t.def.tag,x:t.def.x,z:t.def.z,collected:t.collected}))}setBuildingLevel(t){this.buildingLevel=t,this.placeHut(t,this.profile.torchLights)}applyQuality(t){this.profile=t,this.scene.fog=new nr(12878954,t.fog),this.sun.castShadow=t.shadows,this.configureShadow(),this.buildTerrain(),this.foliage&&(this.scene.remove(this.foliage),Zl(this.foliage));const e=Yl(t);this.foliage=e.group,this.scene.add(e.group),this.collision.setTrees(e.solids),this.scene.remove(this.water),this.water.geometry.dispose(),this.water.material.dispose(),this.water=this.makeWater(t),this.scene.add(this.water),this.placeHut(this.buildingLevel,t.torchLights),this.resizeFlies(t.flies)}update(t,e,n){this.waterTime.value=t,this.fallTime.value=t,this.sky.position.set(e.position.x,0,e.position.z),this.sun.position.set(n.x+26,n.y+32,n.z+12),this.sunTarget.position.set(n.x,n.y+1,n.z);const s=o=>{o&&(o.banners.forEach((a,l)=>{a.rotation.y=Math.sin(t*1.6+l)*.18,a.rotation.z=Math.sin(t*2.1+l)*.05}),o.flames.forEach((a,l)=>{const c=1+Math.sin(t*9+l)*.12;a.scale.set(.4*c,.7*(1.05+Math.sin(t*11+l)*.1),1)}))};s(this.dressing),s(this.hut),this.dressing.lights[0]&&(this.dressing.lights[0].intensity=16+Math.sin(t*8)*3);for(const o of this.fruits)o.collected||(o.mesh.position.y=jt(o.def.x,o.def.z)+.85+Math.sin(t*2+o.def.x)*.12);const r=this.flies.geometry.getAttribute("position");for(let o=0;o<r.count;o++){const a=this.flyBase[o*3]+Math.sin(t*.7+o)*.8,l=this.flyBase[o*3+2]+Math.cos(t*.6+o*1.3)*.8;r.setXYZ(o,a,jt(a,l)+1.4+Math.sin(t*1.4+o)*.4,l)}r.needsUpdate=!0}placeHut(t,e){this.hut&&(this.scene.remove(this.hut.group),Zl(this.hut.group)),this.hut=J0(t,e),this.scene.add(this.hut.group);const n=t>=3?4.5:t===2?3.35:2.35;this.collision.setSolid({id:"hut",x:11.2,z:17.6,r:n,h:6})}buildTerrain(){this.terrain&&(this.scene.remove(this.terrain),this.terrain.geometry.dispose());const t=this.profile.terrain,e=150,n=[],s=[],r=[],o=[],a=t+1;for(let c=0;c<=t;c++)for(let h=0;h<=t;h++){const u=(h/t-.5)*e,f=(c/t-.5)*e,p=jt(u,f);n.push(u,p,f),s.push(...l0(u,f,p)),r.push(h/8,c/8)}for(let c=0;c<t;c++)for(let h=0;h<t;h++){const u=c*a+h;o.push(u,u+a,u+1,u+1,u+a,u+a+1)}const l=new Se;l.setAttribute("position",new $t(n,3)),l.setAttribute("color",new $t(s,3)),l.setAttribute("uv",new $t(r,2)),l.setIndex(o),l.computeVertexNormals(),this.terrain=new Pt(l,this.terrainMat),this.terrain.receiveShadow=!0,this.terrain.name="terrain",this.scene.add(this.terrain)}makeWater(t){const e=new Hi(16,40),n=t.transmission?new ca({color:1866886,roughness:.08,metalness:.02,transmission:.62,thickness:.8,transparent:!0,opacity:.9,clearcoat:1,clearcoatRoughness:.08,ior:1.33}):new ce({color:1866886,roughness:.16,metalness:.08,transparent:!0,opacity:.82});n.onBeforeCompile=r=>{r.uniforms.uTime=this.waterTime,r.vertexShader=`uniform float uTime;
${r.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
         transformed.z += sin(position.x * 0.45 + uTime * 1.3) * 0.07 + cos(position.y * 0.5 + uTime * 0.9) * 0.05;`)};const s=new Pt(e,n);return s.rotation.x=-Math.PI/2,s.position.set(2,-.55,-26),s.receiveShadow=!0,s}configureShadow(){this.sun.castShadow=this.profile.shadows;const t=this.profile.shadowSize;this.sun.shadow.mapSize.set(t,t);const e=this.sun.shadow.camera;e.near=2,e.far=70,e.left=-20,e.right=20,e.top=20,e.bottom=-20,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04}addFruit(t){const e=new Vt,n=jt(t.x,t.z),s=new Pt(new te(.18,10,8),new ce({color:16757818,emissive:16747034,emissiveIntensity:.55,roughness:.35}));s.castShadow=!0,e.add(s);const r=new Pt(new qe(.08,.16,5),new ce({color:3115578,roughness:.7}));r.position.y=.16,e.add(r),e.position.set(t.x,n+.85,t.z),this.scene.add(e),this.fruits.push({def:t,mesh:e,collected:!1})}resizeFlies(t){this.scene.remove(this.flies),this.flies.geometry.dispose();const e=Kl(t);this.flies=e.points,this.flyBase=e.base,this.scene.add(this.flies)}}function tg(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d");if(!t)throw new Error("canvas");const e=t.createImageData(128,128);for(let s=0;s<16384;s++){const r=70+s*17%50;e.data[s*4]=r,e.data[s*4+1]=r,e.data[s*4+2]=r,e.data[s*4+3]=255}t.putImageData(e,0,0);const n=new hu(i);return n.wrapS=hs,n.wrapT=hs,n.colorSpace=Be,n}function eg(){const i=new gn({side:Ce,depthWrite:!1,uniforms:{},vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vPos;
      void main() {
        vec3 dir = normalize(vPos);
        float h = dir.y;
        vec3 top = vec3(0.16, 0.09, 0.28);
        vec3 mid = vec3(0.93, 0.48, 0.32);
        vec3 low = vec3(0.98, 0.72, 0.46);
        vec3 col = mix(low, mid, smoothstep(-0.05, 0.18, h));
        col = mix(col, top, smoothstep(0.12, 0.75, h));
        float sun = pow(max(dot(dir, normalize(vec3(0.55, 0.28, 0.15))), 0.0), 48.0);
        col += vec3(1.0, 0.72, 0.4) * sun;
        float cloud = smoothstep(0.45, 0.8, sin(dir.x * 7.0 + dir.z * 5.0) * 0.5 + 0.5);
        col = mix(col, vec3(1.0, 0.86, 0.75), cloud * smoothstep(0.05, 0.35, h) * 0.25);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),t=new Pt(new te(380,24,16),i);return t.frustumCulled=!1,t}function ng(){const i={value:0},t=new gn({transparent:!0,depthWrite:!1,uniforms:{uTime:i},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime;
      void main(){
        float streaks = sin(vUv.x * 48.0 + sin(vUv.y * 6.0)) * 0.5 + 0.5;
        float flow = fract(vUv.y * 3.0 - uTime * 0.85);
        float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float alpha = edge * (0.35 + streaks * 0.65) * (0.5 + flow * 0.5);
        vec3 col = mix(vec3(0.45, 0.72, 0.78), vec3(0.95, 0.98, 1.0), streaks);
        gl_FragColor = vec4(col, alpha * 0.75);
      }
    `}),e=new Vt,n=new Pt(new Hn(4.2,9),t);n.position.set(2,3.6,-34),n.frustumCulled=!1,e.add(n);const s=n.clone();s.position.z=-33.6,s.position.x=2.4,s.scale.x=.72,e.add(s);const r=new ce({color:6971992,roughness:.95});for(const a of[-1,1]){const l=new Pt(new Zt(1.1,1.6,8,6),r);l.position.set(2+a*3.4,3.2,-35),l.castShadow=!0,l.receiveShadow=!0,e.add(l)}const o=new Pt(new Hi(2.4,16),new _s({color:14021364,transparent:!0,opacity:.28,depthWrite:!1}));return o.rotation.x=-Math.PI/2,o.position.set(2,-.4,-30.5),e.add(o),{group:e,time:i}}function Kl(i){const t=Nc(77),e=new Float32Array(i*3);for(let r=0;r<i;r++)e[r*3]=(t()*2-1)*30,e[r*3+1]=1.5,e[r*3+2]=(t()*2-1)*24+4;const n=new Se;n.setAttribute("position",new Oe(e.slice(),3));const s=new bc({color:16769704,size:.12,transparent:!0,opacity:.85,depthWrite:!1,blending:cs});return{points:new cu(n,s),base:e}}function Zl(i){i.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose()})}const Jl=["","Хижина воительницы","Дом стражи","Чертог племени"],ig=["","Тесная хижина у тропы. Здесь держат копьё и спят у своего огня.","Дом стражи: каменный пояс, крыльцо, стойка и знамя.","Чертог племени. Факелы, золотая кромка и учебный двор."];class sg{canvas;renderer;camera;world;hero;npcs=[];enemies=[];jaguar;quests=new W0;input;ui;audio=new E0;cameraRig=new c0;minimap;profile=os();quality=Ys("auto");mode="menu";inWorld=!1;hasSave=!1;time=0;last=0;started=!1;framing="auto";prompt="";dialogNpc="";saveDelay=-1;hintT=0;hurtT=0;deathT=0;rings=[];constructor(){this.canvas=document.querySelector("#game-canvas");const t=document.querySelector("#stick"),e=document.querySelector("#knob");this.minimap=new X0(document.querySelector("#minimap")),this.input=new b0(this.canvas,t,e),this.ui=new q0({play:()=>{this.onPlay()},continue:()=>this.onContinue(),open:n=>this.openPanel(n),close:()=>this.closePanel(),buy:n=>this.buy(n),upgrade:()=>this.tryUpgrade(),choice:n=>this.onChoice(n),quality:n=>this.setQuality(n),sensitivity:n=>{this.profile.settings.sensitivity=n,this.requestSave()},volume:n=>{this.profile.settings.volume=n,this.audio.volume=n,this.requestSave()},rename:n=>this.rename(n),save:()=>{this.flushSave(!0)},quit:()=>{this.quitToMenu()},wipe:()=>{this.wipe()}}),window.addEventListener("pointerdown",()=>this.audio.ensure()),window.addEventListener("resize",()=>this.resize())}async boot(){const t=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;document.body.classList.toggle("is-touch",t);const e=P0(),n=await zl();this.profile=n??os(e),n||(this.profile.settings={...this.profile.settings,...e}),this.hasSave=!!n,this.quality=Ys(this.profile.settings.quality);const s=Hl[this.quality];try{this.renderer=new e0({canvas:this.canvas,antialias:s.antialias,alpha:!1,powerPreference:"high-performance"})}catch{this.ui.showFail();return}if(!this.renderer.getContext()){this.ui.showFail();return}this.renderer.outputColorSpace=Be,this.renderer.toneMapping=nc,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.type=ec,this.renderer.setClearColor(12878954),this.camera=new Xe(t?64:56,1,.12,s.far),this.world=new Q0(s,this.profile.buildingLevel);const r=new Go(this.renderer);this.world.scene.environment=r.fromScene(new n0,.04).texture,this.world.scene.environmentIntensity=.55,r.dispose(),this.hero=new x0({body:"athletic",skin:12880482,hairColor:1708558,outfit:this.profile.loadout.outfit,hair:this.profile.loadout.hair,weapon:this.profile.loadout.weapon,shoulders:this.profile.loadout.shoulders,crown:this.profile.loadout.crown,glow:this.profile.loadout.glow,necklace:this.profile.loadout.necklace}),this.world.scene.add(this.hero.rig.root),this.npcs=r0.map(a=>{const l=new v0(a);return this.world.scene.add(l.rig.root),l}),this.enemies=Ll.filter(a=>a.kind==="warrior").map(a=>{const l=new Ol(a);return this.world.scene.add(l.rig.root),l});const o=Ll.find(a=>a.kind==="jaguar");if(!o)throw new Error("Нет ягуара в реестре");this.jaguar=new Il(o),this.world.scene.add(this.jaguar.root),this.applyWorldState(),this.placeShowcase(),this.pushQuality(!1),this.resize(),this.ui.setContinueEnabled(this.hasSave),this.ui.setBoot(!1),this.mode="menu",this.present(),this.last=performance.now(),this.started=!0,requestAnimationFrame(this.loop)}api(){return{getState:()=>this.getState(),save:()=>this.flushSave(!0),load:()=>this.load(),newGame:()=>this.startNewGame(),teleport:(t,e)=>this.teleport(t,e),face:(t,e)=>this.face(t,e),frameHero:()=>{this.framing="hero"},frameHut:()=>{this.framing="hut"},grant:t=>{this.profile.currency+=t,this.refreshHud()},setBuilding:t=>{this.profile.buildingLevel=an(Math.round(t),1,3),this.world.setBuildingLevel(this.profile.buildingLevel)},interact:()=>this.interact(),buy:t=>this.buy(t)}}getState(){const t=this.quests.view(this.profile.collected,this.defeated());return{mode:this.mode,x:this.hero.position.x,y:this.hero.position.y,z:this.hero.position.z,yaw:this.hero.yaw,hp:this.hero.hp,stamina:this.hero.stamina,maxHp:this.hero.maxHp,maxStamina:this.hero.maxStamina,currency:this.profile.currency,loadout:{...this.profile.loadout},owned:[...this.profile.owned],buildingLevel:this.profile.buildingLevel,quests:structuredClone(this.quests.state),collected:[...this.profile.collected],defeated:[...this.profile.defeated],name:this.profile.name,rank:Jn[an(this.profile.rank,0,Jn.length-1)],specialCd:this.hero.specialCd,enemies:this.foes().map(e=>({id:e.id,name:e.name,hp:e.hp,alive:e.alive,x:e.position.x,z:e.position.z,state:e.ai})),resources:this.world.fruitSpots(),prompt:this.prompt,dialogOpen:this.mode==="dialog",quality:this.quality,questTitle:t.title}}loop=t=>{if(!this.started)return;const e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.time+=e,this.tick(e),this.renderer.render(this.world.scene,this.camera),requestAnimationFrame(this.loop)};tick(t){this.audio.volume=this.profile.settings.volume;const e=this.input.consumeLook();this.mode!=="menu"&&this.cameraRig.addLook(e.x,e.y,this.profile.settings.sensitivity);const n=this.input.consumeKey("Escape"),s=this.mode==="dialog"&&this.input.consumeKey("KeyE"),r=this.input.frame();if(n?this.onEscape():s&&document.querySelector("#dialog-choices .choice")?.click(),this.mode==="play"){Math.hypot(r.moveX,r.moveY)>.2&&(this.framing="auto");const l=this.hero.update(t,r,this.world.collision,this.cameraRig.yaw,this.time);l&&this.ui.toast(l),r.interact&&this.interact(),this.resolvePlayerAttack();const c={x:this.hero.position.x,z:this.hero.position.z,alive:this.hero.alive};for(const h of this.enemies)h.update(t,this.time,c,this.world.collision);this.jaguar.update(t,this.time,c,this.world.collision),this.resolveEnemyAttack(),this.separate(),this.collectDeaths(),this.hero.alive||(this.mode="dead",this.deathT=0,this.present())}else this.mode==="dead"?(this.hero.update(t,null,this.world.collision,this.cameraRig.yaw,this.time),this.deathT+=t,this.ui.setFade(Math.min(1,this.deathT/.7)),this.deathT>1.45&&this.respawn()):this.hero.playIdle(t,this.time);const o=this.mode==="dialog"||this.mode==="pause"||this.mode==="dead",a=this.mode==="play"||this.mode==="dialog"||this.mode==="menu";for(const l of this.npcs)l.update(t,this.time,a?{x:this.hero.position.x,z:this.hero.position.z}:null,o);this.world.update(this.time,this.camera,this.hero.position),this.updateCamera(t),this.updateRings(t),this.updatePrompt(),this.refreshHud(),this.projectLabels(),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&this.ui.setHint(null)),this.hurtT>0&&(this.hurtT-=t,this.hurtT<=0&&this.ui.setHurt(!1)),this.saveDelay>=0&&this.mode==="play"&&(this.saveDelay-=t,this.saveDelay<0&&this.flushSave(!1))}resolvePlayerAttack(){const t=this.foes().map(s=>this.asCombatant(s)),e={id:this.hero.id,x:this.hero.position.x,z:this.hero.position.z,yaw:this.hero.yaw},n=this.hero.pollMelee();if(n){this.audio.play(n==="heavy"?"heavy":"swing");const s=n==="heavy"?S0:M0;this.applyHits(Kr(e,s.range,s.arc,s.damage,s.knock,t),!1)}this.hero.pollSpecial()&&(this.audio.play("special"),this.spawnRing(this.hero.position.x,this.hero.position.y,this.hero.position.z),this.cameraRig.impulse(.16),this.applyHits(y0(e,ht.specialRadius,ht.specialDamage,ht.knockSpecial,t),!1))}resolveEnemyAttack(){const t=this.asCombatant(this.hero);for(const e of this.enemies)e.pollAttack()&&(this.audio.play("swing"),this.applyHits(Kr({id:e.id,x:e.position.x,z:e.position.z,yaw:e.yaw},ht.enemyRange,ht.enemyArc,ht.enemyAttack,4.2,[t]),!0));this.jaguar.pollAttack()&&this.applyHits(Kr({id:this.jaguar.id,x:this.jaguar.position.x,z:this.jaguar.position.z,yaw:this.jaguar.yaw},ht.creatureRange,1.4,ht.creatureAttack,3.4,[t]),!0)}applyHits(t,e){for(const n of t){const s=jt(n.x,n.z)+1.7;this.ui.floater(n.x,s,n.z,String(Math.round(n.damage)),e?"hurt":"hit"),this.audio.play(e?this.hero.blocking?"block":"hurt":"hit"),this.cameraRig.impulse(e?.14:.07),e&&(this.hurtT=.22,this.ui.setHurt(!0))}}collectDeaths(){for(const t of this.foes())t.alive||t.rewarded||(t.rewarded=!0,this.profile.defeated.includes(t.id)||this.profile.defeated.push(t.id),this.profile.currency+=t.loot,this.ui.floater(t.position.x,t.position.y+1.8,t.position.z,`+${t.loot}`,"loot"),this.ui.toast(`${t.name} повержена. +${t.loot} янтаря`),this.onProgress(),this.requestSave())}separate(){for(const t of this.foes()){if(!t.alive)continue;const e=this.hero.position.x-t.position.x,n=this.hero.position.z-t.position.z,s=Math.hypot(e,n)||1e-4,r=this.hero.radius+t.radius;if(s>=r)continue;const o=(r-s)/s,a=this.world.collision.resolve(this.hero.position.x+e*o*.65,this.hero.position.z+n*o*.65,this.hero.radius,this.hero.position.x,this.hero.position.z);this.hero.position.x=a.x,this.hero.position.z=a.z;const l=this.world.collision.resolve(t.position.x-e*o*.35,t.position.z-n*o*.35,t.radius,t.position.x,t.position.z);t.position.x=l.x,t.position.z=l.z,this.hero.rig.root.position.x=this.hero.position.x,this.hero.rig.root.position.z=this.hero.position.z,t instanceof Ol?(t.rig.root.position.x=t.position.x,t.rig.root.position.z=t.position.z):(t.root.position.x=t.position.x,t.root.position.z=t.position.z)}}interact(){const t=this.nearestInteractable();if(t){if(t.kind==="fruit"){if(this.profile.collected.includes(t.id))return;this.profile.collected.push(t.id),this.profile.currency+=ht.fruitValue,this.world.setFruit(t.id,!0),this.audio.play("pickup"),this.ui.toast(`Солнечный плод. +${ht.fruitValue} янтаря`),this.ui.floater(t.x,jt(t.x,t.z)+1.4,t.z,`+${ht.fruitValue}`,"loot"),this.onProgress(),this.requestSave();return}if(t.kind==="stall"){this.openPanel("shop");return}this.openDialog(t.id)}}nearestInteractable(){const t=[];for(const s of this.npcs)t.push({id:s.id,kind:"npc",x:s.position.x,z:s.position.z,r:2.35});for(const s of this.world.fruitSpots())s.collected||t.push({id:s.id,kind:"fruit",x:s.x,z:s.z,r:1.7});t.push({id:"stall",kind:"stall",x:-10.2,z:13.4,r:2.5}),t.push({id:"hut",kind:"hut",x:Ze.x,z:Ze.z,r:3.2}),t.push({id:"fire",kind:"fire",x:0,z:8.6,r:2.2});let e=null,n=1/0;for(const s of t){const r=Math.hypot(this.hero.position.x-s.x,this.hero.position.z-s.z);r<s.r&&r<n&&(e=s,n=r)}return e}openDialog(t){this.dialogNpc=t,this.mode="dialog",this.present(),this.ui.showDialog(z0(t,{name:this.profile.name,quest:e=>this.quests.state[e]??{status:"locked",stage:0},loyalty:e=>this.profile.loyalty[e]??0,buildingLevel:this.profile.buildingLevel,currency:this.profile.currency}))}onChoice(t){if(t==="bye"){this.closePanel();return}if(t==="shop"){this.ui.hideDialog(),this.openPanel("shop");return}if(t==="rest"){this.hero.healFull(),this.ui.toast("У костра силы вернулись"),this.audio.play("ui"),this.closePanel();return}if(t==="upgrade"){this.tryUpgrade();return}if(t==="start-gifts"&&this.quests.start("gifts")){this.onProgress(),this.ui.toast("Поручение: Дары джунглей"),this.profile.loyalty.mira+=1,this.requestSave(),this.closePanel();return}if(t==="turnin-gifts"&&this.quests.markTalk("gifts",1)){this.onProgress(),this.openDialog("mira");return}if(t==="start-scouts"&&this.quests.start("scouts")){this.ui.toast("Испытание: След соперниц"),this.requestSave(),this.closePanel();return}if(t==="start-token"&&this.quests.start("token")){this.ui.toast("Отнесите знак Ладе"),this.requestSave(),this.closePanel();return}if(t==="token-lada"&&this.quests.markTalk("token",0)){this.ui.toast("Лада приняла знак. Вернитесь к Мире"),this.profile.loyalty.lada+=1,this.requestSave(),this.closePanel();return}if(t==="turnin-token"&&this.quests.markTalk("token",1)){this.onProgress(),this.closePanel();return}this.closePanel()}onProgress(){const t=this.quests.refresh(this.profile.collected,this.defeated());for(const e of t.completed){this.profile.currency+=e.currency,this.profile.rank=Math.min(Jn.length-1,this.profile.rank+e.rank);for(const n of e.items)this.profile.owned.includes(n)||this.profile.owned.push(n),this.equip(n);for(const n of e.loyalty)this.profile.loyalty[n.id]=(this.profile.loyalty[n.id]??0)+n.amount;this.ui.toast(`${e.title} выполнено. +${e.currency} янтаря`),this.audio.play("buy")}for(const e of t.advanced)this.ui.toast(e.detail);this.profile.quests=structuredClone(this.quests.state)}buy(t){const e=Bl(t);if(!e)return!1;if(!this.profile.owned.includes(t)){if(this.profile.currency<e.price)return this.ui.toast("Не хватает янтаря"),!1;this.profile.currency-=e.price,this.profile.owned.push(t)}return this.equip(t),this.audio.play("buy"),this.ui.toast(`Надето: ${e.name}`),this.requestSave(),this.mode==="shop"&&this.ui.showShop(this.shopModel()),this.mode==="heroine"&&this.ui.showHeroine(this.heroModel()),!0}equip(t){const e=Bl(t);!e||!this.profile.owned.includes(t)||(e.outfit&&(this.profile.loadout.outfit=e.outfit),e.weapon&&(this.profile.loadout.weapon=e.weapon),e.hair&&(this.profile.loadout.hair=e.hair),e.flag&&(this.profile.loadout[e.flag]=!0),this.hero.applyLoadout(this.profile.loadout))}tryUpgrade(){const t=Wo(this.profile.buildingLevel);if(t!==null){if(this.profile.currency<t){this.ui.toast("Не хватает янтаря");return}this.profile.currency-=t,this.profile.buildingLevel+=1,this.world.setBuildingLevel(this.profile.buildingLevel),this.audio.play("buy"),this.ui.toast(`${Jl[this.profile.buildingLevel]} построено`),this.requestSave(),this.mode==="shop"&&this.ui.showShop(this.shopModel()),this.mode==="dialog"&&this.dialogNpc==="hut"&&this.openDialog("hut")}}async onPlay(){this.hasSave&&!await this.ui.confirm("Начать заново? Текущее сохранение заменится, когда игра сохранится.")||this.startNewGame()}startNewGame(){const t={...this.profile.settings};if(this.profile=os(t),this.quests.reset(),this.applyWorldState(),this.hero.position.set(Ue.x,jt(Ue.x,Ue.z),Ue.z),this.hero.yaw=Ue.yaw,this.hero.healFull(),this.cameraRig.yaw=Ue.yaw,this.cameraRig.pitch=.42,this.inWorld=!0,this.framing="auto",this.mode="play",!this.profile.settings.seenHint){const e=document.body.classList.contains("is-touch");this.ui.setHint(e?"Джойстик слева, кнопки справа. Палец по правой части экрана поворачивает камеру.":"WASD — ход, мышь — обзор, ЛКМ — удар, F — сильный, пробел — прыжок и рывок, E — говорить."),this.profile.settings.seenHint=!0,this.hintT=9}this.present(),this.requestSave(!0)}onContinue(){this.hasSave&&(this.applyWorldState(),this.hero.hp<=0&&this.hero.healFull(),this.hero.alive=!0,this.hero.position.set(this.profile.x,jt(this.profile.x,this.profile.z),this.profile.z),this.hero.yaw=this.profile.yaw,this.cameraRig.yaw=this.profile.yaw,this.inWorld=!0,this.framing="auto",this.mode="play",this.present())}openPanel(t){this.mode=t,this.present(),t==="shop"?this.ui.showShop(this.shopModel()):t==="heroine"?this.ui.showHeroine(this.heroModel()):t==="tribe"?this.ui.showTribe(this.tribeModel()):t==="settings"?this.ui.showSettings(this.settingsModel()):this.ui.showPause()}closePanel(){this.ui.hideDialog(),this.ui.hidePanel(),this.mode=this.inWorld?"play":"menu",this.inWorld||this.placeShowcase(),this.present()}onEscape(){if(!this.ui.dismissModal()){if(this.mode==="dialog"){this.closePanel();return}if(this.mode==="shop"||this.mode==="heroine"||this.mode==="tribe"||this.mode==="settings"){this.inWorld?this.openPanel("pause"):this.closePanel();return}if(this.mode==="pause"){this.closePanel();return}this.mode==="play"&&this.openPanel("pause")}}async quitToMenu(){this.inWorld&&(this.capture(),await this.flushSave(!1)),this.inWorld=!1,this.mode="menu",this.framing="auto",this.placeShowcase(),this.ui.hideDialog(),this.ui.hidePanel(),this.present()}async wipe(){if(!await this.ui.confirm("Стереть сохранение острова?"))return;await I0();const e={...this.profile.settings};this.profile=os(e),this.quests.reset(),this.hasSave=!1,this.inWorld=!1,this.applyWorldState(),this.placeShowcase(),this.ui.setContinueEnabled(!1),this.ui.toast("Сохранение стёрто"),this.mode="menu",this.present()}async load(){const t=await zl();return t?(this.profile=t,this.hasSave=!0,this.quality=Ys(this.profile.settings.quality),this.pushQuality(!0),this.applyWorldState(),this.hero.position.set(this.profile.x,jt(this.profile.x,this.profile.z),this.profile.z),this.hero.yaw=this.profile.yaw,this.hero.alive=this.hero.hp>0,this.inWorld||this.placeShowcase(),this.ui.toast("Сохранение загружено"),this.present(),!0):(this.ui.toast("Сохранения нет"),!1)}respawn(){const t=Math.floor(this.profile.currency*ht.respawnPenalty);this.profile.currency=Math.max(0,this.profile.currency-t),this.hero.position.set(Ue.x,jt(Ue.x,Ue.z),Ue.z),this.hero.yaw=Ue.yaw,this.cameraRig.yaw=Ue.yaw,this.hero.healFull(),this.hero.alive=!0,this.hero.anim.action="idle",this.hero.anim.time=0,this.hero.iframe=1.3,this.hero.rig.root.visible=!0,this.input.blockToggle=!1,this.input.syncBlockButton(),this.ui.setFade(0),this.ui.toast(t>0?`Ты очнулась у костра. Потеряно ${t} янтаря`:"Ты очнулась у костра племени"),this.mode="play",this.present()}setQuality(t){this.profile.settings.quality=t,this.quality=Ys(t),this.pushQuality(!0),this.ui.showSettings(this.settingsModel()),this.requestSave()}pushQuality(t){const e=Hl[this.quality];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dpr)),this.renderer.shadowMap.enabled=e.shadows,this.camera.far=e.far,this.camera.fov=document.body.classList.contains("is-touch")?64:56,this.camera.updateProjectionMatrix(),t&&this.world.applyQuality(e);const n=!e.shadows;this.hero.rig.blob.visible=n;for(const s of this.npcs)s.rig.blob.visible=n;for(const s of this.enemies)s.rig.blob.visible=n;this.resize()}applyWorldState(){this.hero.applyLoadout(this.profile.loadout),this.hero.maxHp=this.profile.maxHp,this.hero.hp=this.profile.hp,this.hero.maxStamina=this.profile.maxStamina,this.hero.stamina=this.profile.stamina,this.world.setBuildingLevel(this.profile.buildingLevel),this.world.resetFruits();for(const t of this.profile.collected)this.world.setFruit(t,!0);for(const t of this.enemies)t.reset(),this.profile.defeated.includes(t.id)?t.silence():this.profile.enemyHp[t.id]!==void 0&&(t.hp=this.profile.enemyHp[t.id]);this.jaguar.reset(),this.profile.defeated.includes(this.jaguar.id)?this.jaguar.silence():this.profile.enemyHp[this.jaguar.id]!==void 0&&(this.jaguar.hp=this.profile.enemyHp[this.jaguar.id]),this.quests.reset(this.profile.quests)}capture(){if(this.inWorld){this.profile.x=this.hero.position.x,this.profile.z=this.hero.position.z,this.profile.yaw=this.hero.yaw,this.profile.hp=this.hero.hp,this.profile.stamina=this.hero.stamina,this.profile.quests=structuredClone(this.quests.state),this.profile.enemyHp={};for(const t of this.foes())t.alive&&(this.profile.enemyHp[t.id]=t.hp)}}async flushSave(t){this.capture(),await D0(this.profile),this.hasSave=!0,this.ui.setContinueEnabled(!0),t&&this.ui.toast("Сохранено")}requestSave(t=!1){t?this.flushSave(!1):this.saveDelay=.4}placeShowcase(){this.hero.position.set(ss.x,jt(ss.x,ss.z),ss.z),this.hero.yaw=ss.yaw,this.hero.rig.root.position.set(this.hero.position.x,this.hero.position.y,this.hero.position.z),this.hero.rig.root.rotation.y=this.hero.yaw}teleport(t,e){this.hero.position.set(t,jt(t,e),e),this.framing="auto",this.hero.rig.root.position.copy(this.hero.position)}face(t,e){this.hero.yaw=Math.atan2(t-this.hero.position.x,e-this.hero.position.z),this.cameraRig.yaw=this.hero.yaw,this.cameraRig.pitch=.36,this.hero.rig.root.rotation.y=this.hero.yaw}present(){const t=this.mode==="shop"||this.mode==="heroine"||this.mode==="tribe"||this.mode==="settings"||this.mode==="pause",e=this.mode==="play"||this.mode==="dialog"||this.mode==="dead";this.ui.setMenu(this.mode==="menu"&&!t),this.ui.setHud(e);const n=document.body.classList.contains("is-touch");this.ui.setTouch(n&&(this.mode==="play"||this.mode==="dialog")),this.input.pointerLock=this.mode==="play"&&!n,this.mode!=="play"&&document.pointerLockElement&&document.exitPointerLock(),this.mode!=="dialog"&&this.ui.hideDialog(),t||this.ui.hidePanel(),this.refreshHud()}refreshHud(){if(!this.hero)return;this.ui.setBars(this.hero.hp,this.hero.maxHp,this.hero.stamina,this.hero.maxStamina),this.ui.setCurrency(this.profile.currency);const t=this.quests.view(this.profile.collected,this.defeated());if(this.ui.setQuest(t.title,t.detail),this.ui.setSpecial(this.hero.specialCd,ht.specialCd,Li[this.profile.loadout.outfit].special),this.ui.setBlock(this.hero.blocking),this.mode==="play"||this.mode==="dialog"||this.mode==="dead"){const e=this.world.fruitSpots(),n=this.quests.markers(e,this.npcs.map(s=>({id:s.id,x:s.position.x,z:s.position.z})),this.foes().map(s=>({id:s.id,x:s.position.x,z:s.position.z,alive:s.alive})));this.minimap.render({x:this.hero.position.x,z:this.hero.position.z,yaw:this.hero.yaw,npcs:this.npcs.map(s=>({x:s.position.x,z:s.position.z})),enemies:this.foes().filter(s=>s.alive).map(s=>({x:s.position.x,z:s.position.z})),fruits:e.filter(s=>!s.collected),markers:n,hutX:Ze.x,hutZ:Ze.z})}}updatePrompt(){if(this.mode!=="play"){this.prompt="",this.ui.setPrompt("");return}const t=this.nearestInteractable();if(!t){this.prompt="",this.ui.setPrompt("");return}const e=document.body.classList.contains("is-touch"),n={npc:"Говорить",fruit:"Собрать плод",stall:"Открыть обмен",hut:"Осмотреть дом",fire:"Подойти к костру"},s=this.npcs.find(o=>o.id===t.id),r=s?s.name:n[t.kind]??"Действие";this.prompt=e?r:`E — ${r}`,this.ui.setPrompt(this.prompt)}projectLabels(){const t=[];if(this.mode==="play"||this.mode==="menu"||this.mode==="dialog"){for(const e of this.npcs)Math.hypot(e.position.x-this.hero.position.x,e.position.z-this.hero.position.z)>18&&this.mode!=="menu"||t.push({x:e.position.x,y:e.position.y+2.15,z:e.position.z,title:e.name,sub:e.bubble??e.title});if(this.mode==="play")for(const e of this.foes())!e.alive||Math.hypot(e.position.x-this.hero.position.x,e.position.z-this.hero.position.z)>20||t.push({x:e.position.x,y:e.position.y+(e instanceof Il?1.5:2.15),z:e.position.z,title:e.name,sub:e.ai==="retreat"?"Отступает":e.ai==="attack"?"Удар":"",hp:e.hp/e.maxHp})}this.ui.setPlates(t),this.ui.project(this.camera,.016)}updateCamera(t){const e=this.mode==="shop"||this.mode==="heroine"||this.framing==="hero";this.framing==="hut"?(this.cameraRig.mode="frame",this.cameraRig.frame.set(Ze.x,jt(Ze.x,Ze.z),Ze.z),this.cameraRig.frameDistance=this.profile.buildingLevel>=3?16:12,this.cameraRig.frameHeight=5.2,this.cameraRig.yaw=.55,this.cameraRig.bias=0):e?(this.cameraRig.mode="frame",this.cameraRig.frame.set(this.hero.position.x,this.hero.position.y,this.hero.position.z),this.cameraRig.yaw=this.hero.yaw+.7,this.cameraRig.frameDistance=4.8,this.cameraRig.frameHeight=1.65,this.cameraRig.bias=.9):this.mode==="menu"?this.cameraRig.mode="orbit":(this.cameraRig.mode="follow",this.cameraRig.bias=0),this.cameraRig.update(t,this.time,this.hero.position,this.world.collision.solids,this.camera)}updateRings(t){this.rings=this.rings.filter(e=>{e.life-=t;const n=1+(.45-e.life)*10;e.mesh.scale.setScalar(Math.max(.2,n));const s=e.mesh.material;return s.opacity=Math.max(0,e.life/.45),e.life<=0?(this.world.scene.remove(e.mesh),e.mesh.geometry.dispose(),s.dispose(),!1):!0})}spawnRing(t,e,n){const s=new Pt(new la(.25,.42,24),new _s({color:16766858,transparent:!0,opacity:.85,side:on,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(t,e+.12,n),this.world.scene.add(s),this.rings.push({mesh:s,life:.45})}shopModel(){return{currency:this.profile.currency,loadout:this.profile.loadout,owned:this.profile.owned,buildingLevel:this.profile.buildingLevel,buildingName:Jl[this.profile.buildingLevel]??"Хижина",buildingText:ig[this.profile.buildingLevel]??"",nextCost:Wo(this.profile.buildingLevel)}}heroModel(){return{name:this.profile.name,rank:Jn[an(this.profile.rank,0,Jn.length-1)],loadout:this.profile.loadout,owned:this.profile.owned,loyalty:[{name:"Мира",value:this.profile.loyalty.mira??0},{name:"Лада",value:this.profile.loyalty.lada??0},{name:"Вея",value:this.profile.loyalty.veya??0}]}}tribeModel(){const t=this.profile.loadout.outfit;return{active:Li[t].name,rank:Jn[an(this.profile.rank,0,Jn.length-1)],lines:["strike","moon","sun"].map(e=>({name:Li[e].name,outfit:Li[e].outfit,summary:Li[e].summary,current:e===t})),quests:In.map(e=>({title:e.title,status:this.quests.state[e.id]?.status==="done"?"выполнено":this.quests.state[e.id]?.status==="active"?"в пути":"ещё впереди"}))}}settingsModel(){return{quality:this.profile.settings.quality,sensitivity:this.profile.settings.sensitivity,volume:this.profile.settings.volume,touch:document.body.classList.contains("is-touch")}}rename(t){const e=t.replace(/[^\p{L}\p{N} \-]/gu,"").trim().slice(0,16);this.profile.name=e||"Кайра",this.requestSave(),this.ui.toast(`Имя: ${this.profile.name}`)}defeated(){return new Set(this.profile.defeated)}foes(){return[...this.enemies,this.jaguar]}asCombatant(t){return{id:t.id,x:t.position.x,z:t.position.z,yaw:t.yaw,alive:t.alive,radius:t.radius,hurt:(e,n,s)=>t.hurt(e,n,s)}}resize(){if(!this.renderer||!this.camera)return;const t=window.innerWidth,e=Math.max(1,window.innerHeight);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}}document.addEventListener("touchmove",i=>{i.touches.length>1&&i.preventDefault()},{passive:!1});const Ql=new sg;Ql.boot().then(()=>{window.__TRIBES__=Ql.api()});
