




/* from gk */

function f2gk()
			{
				var username=document.getElementById('username').value;
				var email=document.getElementById('email').value;
				var password=document.getElementById('password').value;
				var phone=document.getElementById("phone").value;
				
				
				localStorage.setItem('user',username);
				localStorage.setItem('useremail',email);
				localStorage.setItem('userpwd',password);
				localStorage.setItem('userph',phone);
				
				   var namecheck=/[A-Za-z. ]{4,20}$/;
    
                    var pwdcheck=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,30}$/;

                  var phonecheck=/[789][0-9]{9}$/;
				
                    var emailcheck=/^\S+@\S+\.\S+$/;
				
				

				
				if(!(namecheck.test(username)))
					{
						
			           alert("Enter valid userName");
						document.getElementById('username').value="";
                          document.getElementById('username').focus();
						
						
						return false;
					}
				
				
				if(!(emailcheck.test(email)))
					{
						alert("Plese valid email address");
						document.getElementById('email').value="";
                        document.getElementById('email').focus();
						
						return false;
					}
				
				if(!(pwdcheck.test(password)))
					{
						alert("Password is incorrect");
						
						document.getElementById('password').value="";
                        document.getElementById('password').focus();
						return false;
					}
				if(!(phonecheck.test(phone)))
					{
						alert("Phone number is incorrect");
						
						document.getElementById('phone').value="";
                        document.getElementById('phone').focus();
						return false;
					}
		          alert("successful singup");
				return true;
				
				
			}


function f1gk()
			{	
				var name=document.getElementById('username').value;
				var email=document.getElementById('email').value;
				var password=document.getElementById('password').value;
				
				
				
				var getuser= localStorage.getItem('user')
				var getemail = localStorage.getItem('useremail');
				var getpwd=localStorage.getItem('userpwd');
				
				
				
				
				if(name==getuser&& email==getemail&&password==getpwd)
					{
						alert("LOGIN SUCCESSFULL");
						return true;
					}
				else
				{
					alert("INCORRECT DETAILS")
					return false;
				}
				return true;
					
			}


/* from gk */

/*  Mani tools eraser */

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var colorPicker = document.getElementById("colorPicker");
var backgroundColorPicker = document.getElementById("backgroundColorPicker");
var randomGradientButton = document.getElementById("randomGradientButton");
var range1 = document.querySelector("#text1").value;
var erasing = document.getElementById("eraser");
var drawingTool = erasing.value;
let painting = false;
let isErasing = false; 


var tempCanvas = document.createElement("canvas");
var tempCtx = tempCanvas.getContext("2d");
tempCanvas.width = canvas.width;
tempCanvas.height = canvas.height;

canvas.addEventListener("mousedown", () => {
  painting = true;
  ctx.beginPath();
  tempCtx.beginPath();
});

canvas.addEventListener("mouseup", () => {
  painting = false;
  ctx.closePath();
  tempCtx.closePath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!painting) return;

  ctx.lineWidth = document.getElementById("text1").value; 
  ctx.lineCap = "round";
  ctx.strokeStyle = colorPicker.value;

  tempCtx.lineWidth = ctx.lineWidth;
  tempCtx.lineCap = ctx.lineCap;
  tempCtx.strokeStyle = ctx.strokeStyle;

  if (isErasing) {
  
    ctx.globalCompositeOperation = "destination-out";
    tempCtx.globalCompositeOperation = "destination-out";
  }

  ctx.lineTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
  ctx.stroke();

  tempCtx.lineTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
  tempCtx.stroke();
});

canvas.addEventListener("mouseleave", () => {
  painting = false;
  ctx.closePath();
  tempCtx.closePath();
});

document.getElementById("eraser").addEventListener("click", () => {
  painting = false;
  ctx.strokeStyle = "#ffff";
  tempCtx.strokeStyle = "#ffff";
  isErasing = true; 
});

document.getElementById("brush").addEventListener("click", () => {
  isErasing = false; 
  ctx.globalCompositeOperation = "source-over";
  tempCtx.globalCompositeOperation = "source-over"; 
});
backgroundColorPicker.addEventListener('input', setBackgroundColor);
function setBackgroundColor() {
  ctx.fillStyle = backgroundColorPicker.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tempCtx.clearRect(0, 0, canvas.width, canvas.height);
}

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomGradient() {
  var color1 = generateRandomColor();
  var color2 = generateRandomColor();
  var color3 = generateRandomColor();
  var direction = Math.floor(Math.random() * 360);
  var gradient = `linear-gradient(${direction}deg, ${color1}, ${color2},${color3})`;
  canvas.style.background = gradient;
}

generateRandomGradient();


function function1() {
  var my1 = document.getElementById("check1");
  
    if (my1.checked) {
     
      isErasing = false;
      ctx.globalCompositeOperation = "source-over"; 
      tempCtx.globalCompositeOperation = "source-over";
  
      var canvas = document.querySelector(".brushcontainer");
      canvas.style.cursor = 'url("./images/brush.png"), auto';
      canvas.addEventListener("mousemove", (e) => {
        if (!painting) return;
  
        ctx.lineWidth = document.getElementById("text1").value;
        ctx.lineCap = "";
        ctx.strokeStyle = colorPicker.value; 
  
        tempCtx.lineWidth = ctx.lineWidth;
        tempCtx.lineCap = ctx.lineCap;
        tempCtx.strokeStyle = ctx.strokeStyle;
  
        tempCtx.lineTo(
          e.clientX - canvas.getBoundingClientRect().left,
          e.clientY - canvas.getBoundingClientRect().top
        );
        tempCtx.stroke();
      });
    } else {
      var canvas = document.querySelector(".brushcontainer");
      canvas.style.cursor = '';
    }
  }
  
  function function2() {
    var my1 = document.getElementById("check2");
  
    if (my1.checked) {
     
      isErasing = false;
      ctx.globalCompositeOperation = "source-over"; 
      tempCtx.globalCompositeOperation = "source-over"; 
  
      var canvas = document.querySelector(".brushcontainer");
      canvas.style.cursor = 'url("./images/pen.png"), auto';
  
      canvas.addEventListener("mousedown", () => {
        painting = true;
        ctx.beginPath();
        tempCtx.beginPath();
      });
  
      canvas.addEventListener("mouseup", () => {
        painting = false;
        ctx.closePath();
        tempCtx.closePath();
      });
  
      canvas.addEventListener("mousemove", (e) => {
        if (!painting) return;
  
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = colorPicker.value; 
  
        tempCtx.lineWidth = ctx.lineWidth;
        tempCtx.lineCap = ctx.lineCap;
        tempCtx.strokeStyle = ctx.strokeStyle;
  
        ctx.lineTo(
          e.clientX - canvas.getBoundingClientRect().left,
          e.clientY - canvas.getBoundingClientRect().top
        );
        ctx.stroke();
  
        tempCtx.lineTo(
          e.clientX - canvas.getBoundingClientRect().left,
          e.clientY - canvas.getBoundingClientRect().top
        );
        tempCtx.stroke();
      });
  
      canvas.addEventListener("mouseleave", () => {
        painting = false;
        ctx.closePath();
        tempCtx.closePath();
      });
    } else {
      var canvas = document.querySelector(".brushcontainer");
      canvas.style.cursor = '';
    }
  }
  
  function function3() {
    var my1 = document.getElementById("check3");
  
    if (my1.checked) {
     
      isErasing = true;
      ctx.globalCompositeOperation = "destination-out";
      tempCtx.globalCompositeOperation = "destination-out";
  
      var canvas = document.querySelector(".brushcontainer");
      canvas.style.cursor = 'url("./images/eraser.png"), auto';
  
      canvas.addEventListener("mousemove", (e) => {
        if (!painting) return;
  
        ctx.lineWidth = document.getElementById("text1").value; 
        ctx.lineCap = "";
        ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
  
        tempCtx.lineWidth = ctx.lineWidth;
        tempCtx.lineCap = ctx.lineCap;
        tempCtx.strokeStyle = ctx.strokeStyle;
  
        tempCtx.lineTo(
          e.clientX - canvas.getBoundingClientRect().left,
          e.clientY - canvas.getBoundingClientRect().top
        );
        tempCtx.stroke();
      });
    } else {
       canvas = document.querySelector(".brushcontainer");
      isErasing = false;
      canvas.style.cursor = '';
    }
  }
  
 
  
  function function5() {
    console.log(document.querySelector("#text1").value);
  }

/*  Mani tools eraser */

/*  Mani tools eraser */

/* frames team */

function greenevent() {
    let targetElement =  document.getElementById("canvas");
    // console.log(targetElement);
    targetElement.style.border = "10px solid green";
 }
 
 function blueevent() {
     let targetElement =  document.getElementById("canvas");
     // console.log(targetElement);
     targetElement.style.border = "10px dashed blue";
  }
 
  function redevent() {
     let targetElement =  document.getElementById("canvas");
     // console.log(targetElement);
     targetElement.style.border = "10px double red";
  }
 
  function yellowevent() {
     let targetElement =  document.getElementById("canvas");
     // console.log(targetElement);
     targetElement.style.border = "10px ridge yellow";
  }
  function pinkevent() {
     let targetElement =  document.getElementById("canvas");
     // console.log(targetElement);
     targetElement.style.border = "10px inset pink";
  }

function changeColor(){
    let colorValue = document.getElementById("favcolor").value;
    let targetElement =  document.getElementById("canvas");
 
    targetElement.style.borderColor = colorValue;
   
    
    }
    function changeBorderStyle() {
          var frame = document.getElementById('canvas');
          var borderStyle = document.getElementById('border-style').value;
          frame.style.borderStyle = borderStyle;

    }

   
let number = 0 ;

function decrease() {
    if (number > 0) {
    number -= 3;
    var changeWidth = number + "px";
    console.log(number);

    let pixelElement = document.getElementById("pixel");
    var frame = document.getElementById('canvas');
    pixelElement.textContent = number;
    frame.style.borderWidth = changeWidth;

    }
    
    
};

function increase() {
    number += 10;
    var changeWidth = number + "px";
    console.log(number);

    let pixelElement = document.getElementById("pixel");
    var frame = document.getElementById('canvas');
    pixelElement.textContent = number;
    frame.style.borderWidth = changeWidth;
    
}

var radius = 0;

function decreaseRadius() {
    if (radius > 0) {
        radius -= 10;
     var changeRadius = radius + "px";
    let pixelRadius = document.getElementById("pixelRadius");
    var frame = document.getElementById('canvas');
    pixelRadius.textContent = radius;
    frame.style.borderRadius = changeRadius;

    }
    
  

}

function increaseRadius() {
   radius += 5;
    
    var changeRadius = radius + "px";

    let pixelRadius = document.getElementById("pixelRadius");
    var frame = document.getElementById('canvas');
    pixelRadius.textContent = radius;
    frame.style.borderRadius = changeRadius;

}



 /* frames team */

/* imran js */  


var im = document.getElementById('canvas');
  ctx = im.getContext('2d');
            // let backgroundImage = null;

      var imageUpload = document.getElementById('imageupload');
      imageUpload.addEventListener('change', (e) => {
          var file = e.target.files[0];
          if (file) {
              var image = new Image();
              image.src = URL.createObjectURL(file);
              image.onload = () => {
                  ctx.drawImage(image, 0, 0, im.width, im.height);
                  backgroundImage = image;
              };
          }
      });

            var writeButton = document.getElementById('writebutton');
            writeButton.addEventListener('click', () => {
                var textInput = document.getElementById('textinput').value;
                if (textInput && backgroundImage) {
                    ctx.drawImage(backgroundImage, 0, 0, im.width, im.height);
                    ctx.font = '30px Arial';
                    // ctx.fillStyle = 'red';
                    ctx.fillText(textInput, 345, 30);
                }
                
            });

          // showvalue() 

          function showvalue() {
            var inputVal = document.getElementById('textinput').value;
            document.getElementById('textinput').value = inputVal;
          }


            var saveButton = document.getElementById('savebutton');
            saveButton.addEventListener('click', () => 
            {
                var imageURI = im.toDataURL('image/png');
                var a = document.createElement('a');
                a.href = imageURI;
                a.download = 'modified_image.png';
                a.click();
            });



            var imageInput = document.getElementById('imageupload');
            var paintCanvas = document.getElementById('canvas');
    
            imageInput.addEventListener('change', function(event) {
            var file = event.target.files[0];

            if (file) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    var img = new Image();
                    img.src = e.target.result;

                    img.onload = function() {
                        // Draw the image on the canvas
                        ctx.drawImage(img, 0, 0, paintCanvas.width, paintCanvas.height);
                    };
                };

                reader.readAsDataURL(file);
            }
        }); 


        var canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');

        var backgroundImage = new Image();
        var selectedBackground = null; 

        // Function to set the canvas background
        function setBackground() {
            if (selectedBackground) {
                backgroundImage.src = selectedBackground;
                backgroundImage.onload = function() {
                    ctx.drawImage(backgroundImage, 0, 0, im.width, im.height);
                };
            }
        }

        // Event listener for clicking on carousel images
        var carouselImages = document.querySelectorAll('.carousel-image');
        carouselImages.forEach(image => {
            image.addEventListener('click', () => {
                selectedBackground = image.src;
                setBackground();
            });
        });
