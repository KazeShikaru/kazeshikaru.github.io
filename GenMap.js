function GenMap(rect,mousefunc,keyfunc){
  var Map {
    var images = [new Image(), new Image()];
    var vals = [false,false,false];
    checkmousefunc : function checkFunctions(locmousefunc) {

      if(checkBound1(rect,locmousefunc)){
        vals[0]=true;
      }
      if(checkBound2(rect,locmousefunc)){
        vals[1]=true;
      }
    };

    checkkeyfunc : functions checkKeyFunctions(keyfunc){
      if(keyfunc == 113 || keyfunc == 81 ){

      }


    }

    var total = ["Map",images,vals];

  }


  return Map;



}

function checkBound1(rect,mousefunc){
  if(mousefunc.clientX-rect.left>336 && mousefunc.clientY-rect.top>263 &&mousefunc.clientY-rect.top<263+75 &&mousefunc.clientX-rect.left<336+300){
      //c.clearRect(0,0,981,600);
      return true;
      //soup();
  }
  return false;
}

function checkBound2(rect,mousefunc){
  if(mousefunc.clientX-rect.left>336 && mousefunc.clientY-rect.top>263 &&mousefunc.clientY-rect.top<263+75 &&mousefunc.clientX-rect.left<336+300){
      //c.clearRect(0,0,981,600);
      return true;
      //soup();
  }
  return false;
}
