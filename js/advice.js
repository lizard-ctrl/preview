function refreshPage(){
		window.location.reload();
}
//apis https://api.adviceslip.com/#top
$("document").ready(function(){
	 function getData(advice){
		 $.ajax({
			 url: "https://api.adviceslip.com/advice/search/e",
			 success: function(data) {
				 handleData(data)
			 }
		 });
	 }
	 var advice = "advice"
	 getData(advice)

	function handleData(data){
//		console.log(data);
		var result = $.parseJSON( data );
    var resultObj = result.slips;
    console.log(resultObj)


      let myArray = resultObj;
      for(let i = 0; i < myArray.length; i++){
         console.log(myArray[i].advice);
         document.getElementById('textAreaInput').insertAdjacentHTML("beforeend",myArray[i].advice + " ");
		}

	}
})

function hideMe() {
  var element = document.getElementById("one");
  element.classList.add("hide");
	document.getElementById("center").classList.remove("hide");
	document.getElementById("face").classList.remove("hide");
	document.getElementById("bg").classList.add("hide");
	console.log("hey")
}


document.querySelector('#input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
			document.getElementById("nextbutton").classList.remove("hide");

			document.getElementById("input").value;
			document.getElementById('user').innerHTML = document.getElementById('input').value;
			document.getElementById("input").classList.add("hide");

    }
});

