document.addEventListener('DOMContentLoaded',(event)=>{

	//image upload 
	const imageupload=document.querySelector("#imageupload");
	const previous=document.querySelector("#previous");
	let currentObjectUrl=null;
	imageupload.addEventListener('change',(e)=>{
		const file=e.target.files[0];
		if(currentObjectUrl)
		{
			URL.revokeObjectURL(currentObjectUrl)
			currentObjectUrl=null;
		}
		if(file)
		{
			currentObjectUrl=URL.createObjectURL(file);
			previous.src=currentObjectUrl
			previous.style.display="block";
		}
         else{
             previous.src="#";
			 previous.style.display="none";
		 }
		 })//change event 
	//load event 
	previous.addEventListener('load',(e)=>{
		//URL.revokeObjectURL(currentObjectUrl);
		const cover=document.querySelector("#cover");
		cover.classList.remove("bgfirst");
		cover.classList.add("bgsecond");
		const btn=document.createElement("button")
		btn.type="submit"
		btn.textContent="Submit"
		cover.appendChild(btn)
	}
	)
})
//event 
//click ,dblclick,mouseover,mouseenter,mouseleave,change,blur,focus