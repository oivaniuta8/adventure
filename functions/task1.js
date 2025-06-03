// Function Declaration
function getRectangleArea(width, height) {
  const area = width * height;
  return area;
}

console.log(getRectangleArea(5, 10));

//Function Expression
const getRectangleAreaExp = function(width, height) {
    const area = width * height;
    return area;
  };
  
  console.log(getRectangleAreaExp(5, 10)); 

//Arrow Function 

const getRectangleAreaArrow = (width, height) => {
    return width * height;
  };
  
  console.log(getRectangleAreaArrow(5, 10)); 
  
  

  