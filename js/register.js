const inputs = document.querySelectorAll("input");
console.log(inputs);

const patterns = {
    phone1:/^(7|8|9)[0-9]{9}$/,
    phone2:/^(7|8|9)[0-9]{9}$/,
    contact:/^(7|8|9)[0-9]{9}$/,
    name:/^[a-zA-Z ]+$/,
	//event:/^[a-zA-Z ]+$/,
	state:/^[a-zA-Z ]+$/,
	city:/^[a-zA-Z ]+$/,
	college:/^[a-zA-Z ]+$/,
	zipcode:/^[0-9]{6}$/,
	branch:/^[a-zA-Z ]+$/,
	year:/^[12345](st|nd|rd|th)$/,
    email:/^[a-zA-Z_0-9]+@(gmail|hotmail|yahoo).(com|in)$/
};
function validate(field,regex){
    if(regex.test(field.value))
    {
     field.style.borderBottom = "2px solid green";
    }
    else{
        field.style.borderBottom="2px solid red";
    }
}
Array.from(inputs).forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
});

const hospitality = document.querySelectorAll('#hospitality');
//console.log(hospitality);
const hospitality_info = document.querySelectorAll('#hospitality_info');
    //console.log(hospitality_info);
Array.from(hospitality).forEach(function(radio){
    radio.addEventListener('click',function(el){
        if(el.target.attributes.value.value == "yes")
        {
           
           hospitality_info[0].style.display="inline";
           hospitality_info[1].style.display="inline";
        }
        else if(el.target.attributes.value.value == "no")
        {
           hospitality_info[0].style.display="none";
           hospitality_info[1].style.display="none";
        }
    });
});

const category = document.querySelectorAll('#category');
const teammates = document.querySelector('#teammates');
const teamname = document.querySelector('#teamname');
const leader = document.querySelector('#leader');
Array.from(category).forEach(function(radio){
    radio.addEventListener('click',function(el){
        if(el.target.attributes.value.value=="solo"){
              teammates.style.display = "none";
              teamname.style.display = "none";
              leader.attributes.placeholder.value="Name";
        }
       else if(el.target.attributes.value.value=="duet"){
           teammates.style.display = "inline";
            leader.attributes.placeholder.value="Name of Leader";
        }
        else if(el.target.attributes.value.value=="team"){
            teammates.style.display = "inline";
            teamname.style.display= "inline";
            leader.attributes.placeholder.value="Name of Leader";
        }
    })
})