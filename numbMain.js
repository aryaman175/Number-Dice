 let x = screen.width/3 -70  ; // coordinates of first guy
 let y = 100;  //
 let f =3.5; //multipling factor for y coords
 let openList =[];    // all canvases on screen
 let cnvList =[];     // all canvases
 let parasList;       // all 6 paras

$(document).ready(function() {
   // grabbing list to append buttons
  let myButton = document.getElementById("roll")      // rolling
  let listButton = document.getElementById("bList")   // Customize
  let myList = document.querySelector("ul")
  let parasList = document.querySelectorAll("p");
  // let warning = document.getElementById("warn"); // warning

  // constant position for all 6 paras
  for (let i=0;i<parasList.length;i++)
  {
    parasList[i].style.left = (i%3 + 1)*x - 1.5*a + "px";
    parasList[i].style.top = (Math.floor(i/3)*f + 1)*y - 40 + "px";
  }

  // position elements
  myButton.style.left = 3*x + 50 + "px";  // 50 pixels left of 3rd guy
  myButton.style.top = y + 2*a +200 + "px"; // 2*a to avoid getting hidden by canvas
  myButton.style.fontSize = "30px";

  myList.style.left = 3*x + 50 + "px"; // 50 pixels left of 3rd guy
  myList.style.top = y +a/4 - 70 +"px";   // aligning with boxes

  listButton.style.left = 3*x + 50 + "px"; // 50 pixels left of 3rd guy
  listButton.style.top = y - 70 +"px";  // just above list

  // rolling button
  $(myButton).on("click",function()
 {
    for (let k=0;k<openList.length;k++)
    {
      openList[k].clicked = true;
    }
  })
  // button for opening list
  $(listButton).on("click",function()
 {
    $(myList).slideToggle()
  })

  // buttons in the list
  $("li button").on("click",function()
  {
    // resetiing all headers
    for (let i=0;i<parasList.length;i++)
    {
      parasList[i].innerHTML = "";
    }
    // removing warning
  //  $(warning).hide();

    let tempIndex = this.id[1];
    // cnv index
    let myCnv =cnvList[tempIndex];

      if(myCnv.openIndex>=0)
      {
        // closing the button
        // changing button look
        (this).style.color = "black";
        // array stuff
        openList.splice(myCnv.openIndex,1)
        myCnv.openIndex =-1;
        //resetting other indices
        for(let j=0;j<openList.length;j++)
        {
          openList[j].openIndex = j;
          //updating pos
          openList[j].x = (j%3 + 1)*x - 2*a;
          openList[j].y = (Math.floor(j/3)*f + 1)*y + 25
        }
      }
      else
      {
        if(openList.length==6)
        {
          alert("Max number of dice is 6!")
        }
        else
        {
        // chnging button look
        (this).style.color = "#0050b3"
        // array stuff
        openList.push(myCnv)
        // updating index
        let myIndex = openList.length-1;
        myCnv.openIndex = myIndex;
        // updating pos
        myCnv.x = (myIndex %3 + 1)*x - 2*a;
        myCnv.y = (Math.floor(myIndex/3) * f + 1)*y + 25;
      }
    }
  })
});

// creating 2D links array
var links =[]
for(let i=0;i<10;i++)
{
  links[i]=[]
}

//CANVAS 1
links[0].push(n1,n2,n3,n4,n5,n6)
var c1 = new p5(sketch)
c1.heading = "Numbers";

// CANVAS 2
links[1].push(d1,d2,d3,d4,d5,d6)
var c2 = new p5(sketch)
c2.heading = "Dots";

//CANAVAS 3
links[2].push(ten1,ten2,ten3,ten4,ten5,ten6)
var c3 = new p5(sketch)
c3.heading = "10-60";

// CANVAS 4
links[3].push(ten8,ten7,ten9,ten8,ten7,ten9)
var c4 = new p5(sketch)
c4.heading = "70-90";
