


// this will set the cursor blink all through out

document.onmousedown = (e) => {
    e.preventDefault();
  }


  window.onload = function(){

    // geo_location();   
    container_terminal.innerHTML=`
    <label id="lbl_cmd">jp_portfolio<span id="copyright_sign">&#169;</span>2022:~> </label>
    <input id="cmd_input" type="text" autofocus spellcheck="false" autocomplete="off"/>`;

   
  } // onload event




  
  // // when enter key is pressed
  document.addEventListener("keyup", function(event) {

    
      
    if (event.keyCode === 13) {
     
      var open_swal = Swal.isVisible();  //this will detrmine is Sweet alert pop up is open 
      if (open_swal === true) {
       console.log("There is an open Sweet Alert prompt.");  // console log the message.
       document.querySelector(".swal2-confirm").click(); // will click the enter button
      } else {
        
      // Will run if no SWAL is open
      try {

      event.preventDefault();   
      var initial_input = document.getElementById("cmd_input").value;
      var cmd_input = document.getElementById("cmd_input").value.toString().replace(/\s/g, '').toLowerCase(); // user input convert to string remove spaces and lower case
      cmd_history.push(initial_input); // push to empty array for cmd history



      // this is variable which purpose is to create an element
      var container_terminal = document.getElementById("cmd");  
      var output = document.getElementById("output");
      var new_cmd_div = document.createElement('div'); // DIV or element creation 
      new_cmd_div.id = 'command_result';  // this is the id name that will generate after command is entered 
      new_cmd_div.className += "command_result";  // this is the class name that will generate after command is entered 



      // SWITCH STATEMENT 

      switch (cmd_input) {
        case "help":         
          new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
            <br><p id="result">${help}</p>`;
            container_terminal.insertBefore(new_cmd_div, output);
            clear_input();
          break;


          //_______________________________________________//
          case "github":  // will redirect to my github page  
          window.open("https://github.com/rockstartraders");  
          new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
          <br><p id="result">${github}</p>`;       
            container_terminal.insertBefore(new_cmd_div, output);
            clear_input();           
          break;  

        //_______________________________________________//  
        case "cls":
        case "clear":
            clear();
            clear_input(); 
        break;  

        //_______________________________________________//
        case "cv":  // CV command
        new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
        <br><p id="result">${cv}</p>`;
        container_terminal.insertBefore(new_cmd_div, output);   
        clear_input();
        break; 

        //_______________________________________________//
        case "":  // Empty input
        // alert(`\nPlease enter a command or type help to view the list of commands available.`);        
        Swal.fire({
          title: 'No User Input!',
          html: `<p id="sweetalert">Type <span id="main_title_color">help</span> to view the list of commands available.</p>`,          
          icon: 'error',
          // confirmButtonText: 'Got It',
          showConfirmButton:false,
          allowOutsideClick:false,
          timer: 2000
                        
        })
        break; 

        //_______________________________________________//

        case "cd":  // common linux command
        case "ls": 
        case "pwd": 
        case "cat": 
        case "mkdir": 
        case "find": 
        case "rmdir": 
        case "sudo": 
        case "su": 
        case "ipconfig": 
        case "ifconfig": 
        case "history": 
        case "man": 
        case "hostname": 
        case "echo": 
        case "uname": 
        case "ping":    
        case "wget":      
        case "kill": 
        case "head": 
        case "top":
        case "tail":  
        new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
        <br><p id="result">${generic_unix}</p>`;
        container_terminal.insertBefore(new_cmd_div, output);   
        clear_input();
        break; 


         //_______________________________________________//
        case "exit":  // exit  with sweet alert message
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thank You!',
          showConfirmButton: false,
          timer: 2000
        }).then(function (){
          window.close();
        })
        
        
        break; 
         //_______________________________________________//
         case "email":  // exit  with sweet alert message
      
      
      Swal.fire({
        title: 'Enter your email',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="email @ddress" spellcheck="false">',
        focusConfirm: false,
        allowOutsideClick:false,
        confirmButtonText: 'Next',
        preConfirm: () => {

           var visitors_email =  document.getElementById('swal-input1').value;

           var valid_email = visitors_email.includes("@");

           if (valid_email === false) {
            
            Swal.fire({
              title: 'Please Enter a Valid Email',               
              icon: 'error',
              // confirmButtonText: 'Got It',
              showConfirmButton:false,
              allowOutsideClick:false,
              timer: 2000
                            
            }) // end of IF statement for valid_email 


           } else {
             
            Swal.fire({
              title: 'Enter your message',
              html:              
                '<textarea aria-label="Type your message here" class="swal2-textarea" placeholder="Type your message here..." id="swal2-input" spellcheck="false"></textarea>',
              focusConfirm: false,
              allowOutsideClick:false,      
              confirmButtonText: 'Send',        
              preConfirm: () => {
                
                var templateParams = {
                  from_name: visitors_email,
                  message: document.getElementById('swal2-input').value
              };

                // OLD FUNCTION AND NO LONGER WORKING
                // var textarea_email = document.getElementById('swal2-input').value;
                // email sending function using smtp JS                                   

                //Email.send
                   
                  //
                    // SecureToken: "34022397-ca6a-49c9-9034-26fadc6ef4cb",     // Working from mailtrap ==> no more                  
                    // SecureToken: "3800d57c-de68-4815-927d-b4ab65f502c3",    // new gmail account     
                    // SecureToken: "ef1dd425-64f1-49ec-bfcc-e55533fa0006", // this is elastic email / https://elasticemail.com/account#/settings/new/create-smtp 
                    // To : 'jamespaulespea@gmail.com',
                    // From : 'espenajameswebsite@gmail.com',
                    // Subject : "Message from your Portfolio",
                    // Body :  "<br><br><br>"+ "Message from: " + visitors_email + "<br><br>" + "Message is:"+ "<br>" + textarea_email

                // this is the new parameter using emailjs 
                emailjs.send("Jeng","template_cb3pmcq", templateParams).then(function(){

                    Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email Sent',
                    showConfirmButton: false,
                    allowOutsideClick:false,      
                    timer: 2000    // end of sweet alert message
                  }) .then(function (){
                    new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
                    <br><p id="result">${email}</p>`;
                    container_terminal.insertBefore(new_cmd_div, output);   
                    clear_input();
                  }) // end of function after sweet alert || will display text after

                }) // end of then function after email sending                
              } // end of preconfirm for else block
            }) // nested function after first fire inc;uding then or promise  
           } // end of else
                    
        } 
      })// of of main SWAl function

      
      break; 
       //_______________________________________________//

      case "pseinfo":  // Project ==> My PSE INFO.
      case "my-pse-info":  // Project ==> My PSE INFO.
      case "mypseinfo":  // Project ==> My PSE INFO.
      
       new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
       <br><p id="result">${mypseinfo}</p>`;
       container_terminal.insertBefore(new_cmd_div, output);   
       clear_input();  
      break;         
        //_______________________________________________//

      case "jconverter":  // Project ==> Jengs currency converter
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${jconverter}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
         
      //_______________________________________________//  
    
      case "alt2":  // Project ==> Jengs currency converter
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${alt2}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   

      clear_input();  

      break; 
    //_______________________________________________//  
          
      case "net2shell":  // Project ==> Jengs currency converter
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${net2shell}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

      case "psecli":
      case "pse-cli":  // Project ==> Jengs currency converter
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${pse_cli}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

      case "hashcheck":
      case "hash-check":  // Project ==> Jengs currency converter
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${hash_check}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

      case "mycveinfo":
      case "my-cve-info":
      case "my-cve":
      case "cve":  // Project ==> Jengs currency converter
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${my_cve}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

     
      case "jmplayer": 
      case "jamesmediaplayer": 
      case "james-media-player":  // Project ==> Jengs currency converter
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${james_media_player}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

      
      case "programming":  // COmmand for programming
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${programming}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

      case "about":  // COmmand for programming
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${about}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

      case "project":  // COmmand for projects
      case "projects":  // COmmand for projects
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${projects}</p>`;
      container_terminal.insertBefore(new_cmd_div, output);   
      clear_input();  
      break; 
        
      //_______________________________________________//  

      case "ip":  // COmmand for projects
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${ip}</p>`;            
      
      container_terminal.insertBefore(new_cmd_div, output);   
      ipcheck();    // IP function   
      clear_input();         
      break;         
      //_______________________________________________//  

      case "quote":  // COmmand for projects
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${quote}</p>`;         
      container_terminal.insertBefore(new_cmd_div, output);     

      random_quote();
      clear_input();             
      break; 
        
      //_______________________________________________// 

      case "xtra":  // COmmand for extra
      case "extra":  // COmmand for extra
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${extra}</p>`;         
      container_terminal.insertBefore(new_cmd_div, output);          
      clear_input();       
      break; 
        
      //_______________________________________________// 

      case "weather":  // COmmand for extra
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${weathernow}</p>`;         
      container_terminal.insertBefore(new_cmd_div, output);
      getLocation();  //  get geo location firsth then will run the weather API.
      clear_input();  
      break; 
        
      //_______________________________________________// 

      case "skills":  // COmmand for skills
      case "skill":
      new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
      <br><p id="result">${skills}</p>`;         
      container_terminal.insertBefore(new_cmd_div, output);          
      clear_input();       
      break; 
        
      //_______________________________________________// 











      
        // Default catch handler
        default:
          new_cmd_div.innerHTML =` <label id="lbl_cmd">my_portfolio<span id="copyright_sign">&#169;</span>2021:~> <span id="input_white_color">${initial_input}</span></label>
          <br><p id="result"><br>The command <b>${initial_input}</b> is not recognized, Please check your spelling or type <b>help</b> for command reference.</p>`;
          container_terminal.insertBefore(new_cmd_div, output);   
          clear_input();
      }


      // Catch fnction for error
      } catch (error) {
        // alert("Sorry something went wrong please try again later.");
        Swal.fire({
          title: 'Sorry something went wrong please try again later.',
          // html: `<p id="sweetalert">Type <span id="main_title_color">help</span> to view the list of commands available.</p>`,          
          icon: 'error',
          // confirmButtonText: 'Got It',
          showConfirmButton:false,
          allowOutsideClick:false,
          timer: 3000
                        
        })
        console.log(error);
      } // end of catch 

    


     
    } // end of if
  } // end of else 
  }); // end of enter event 





  // function to clear Input after enter key event
  function clear_input(){
    var cmd_input = document.getElementById("cmd_input");
    cmd_input.value = "";
  }


  // clear terminal 
  function clear(){
    var divsToRemove = document.getElementsByClassName("command_result");
    for (var i = divsToRemove.length-1; i >= 0; i--) {
      divsToRemove[i].remove();
    }

    // URL reference: https://stackoverflow.com/questions/56652087/how-to-remove-multiple-divs-with-same-class-from-html-page
  } // end of clear function



// Function to TOGGLE HISTORY listed from ARRAY
// Reference https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array

  function cmd_history_upkey() {  // USING UP ARROR KEY 
    var cmd_input = document.getElementById("cmd_input"); // I need to declare it again here for it to work 
    i = i + 1; // increase i by one
    i = i % cmd_history.length; // if we've gone too high, start from `0` again   
    cmd_input.value = cmd_history[i];   // give us back the item and will display inside input button
}


function cmd_history_downkey() { // USING DOWN ARROW KEY 
  var cmd_input = document.getElementById("cmd_input"); // I need to declare it again here for it to work 
  if (i === 0) { // i would become 0
      i = cmd_history.length; // so put it at the other end of the array
  }
  i = i - 1; // decrease by one
  cmd_input.value = cmd_history[i];   // give us back the item and will display inside input button
}


function cmd_history_tabkey() {  // USING UP ARROR KEY 
  var cmd_input = document.getElementById("cmd_input"); // I need to declare it again here for it to work 
  tab_index = tab_index + 1; // increase index by one
  tab_index = tab_index % history_for_tabkey.length; // if we've gone too high, start from `0` again   
  cmd_input.value = history_for_tabkey[tab_index];   // give us back the item and will display inside input button
}


    // // Keyboard event for arrow up / history of command
    document.addEventListener("keydown", function(event) {

      if (event.keyCode === 38) {
        
       event.preventDefault();

     if (cmd_history.length === 0) {
      
      Swal.fire({
        title: 'History Is Empty!',
        icon: 'info',
        // confirmButtonText: 'Got It'
        showConfirmButton:false,
        allowOutsideClick:false,
        timer: 2000
      })
     } else {
      cmd_history_upkey();  // function to toggle history using arrow UP KEY
     } // end of else
      
        
      } // end of if
    }); // end of arrow up event 




    // // event for arrow down / history of command
    document.addEventListener("keydown", function(event) {

      if (event.keyCode === 40) {
        
       event.preventDefault();

       if (cmd_history.length === 0) {
        Swal.fire({
          title: 'History Is Empty!',
          icon: 'info',
          // confirmButtonText: 'Got It'
          showConfirmButton:false,
          allowOutsideClick:false,
          timer: 2000
        })
      } else {
        cmd_history_downkey(); // function to toggle history using arrow DOWN KEY  
      } // end of else
  
       
        
      } // end of if
    }); // end of arrow down event 



    
    // // Keyboard event for TAB KEY / history of command or saved command
    document.addEventListener("keydown", function(event) {

      if (event.keyCode === 9) {
        
       event.preventDefault();

     
       cmd_history_tabkey();  // function to toggle history using  TAB KEY
   
      
        
      } // end of if
    }); // end of TAB KEY event 




// This is the function for getting Geo Location 
// URL: https://www.w3schools.com/html/html5_geolocation.asp



function getLocation() {
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    lat.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat.innerHTML = position.coords.latitude ; 
  long.innerHTML = position.coords.longitude;  
  weather();
}



// End of getting GEO Location function





 // Weather command

async function weather(){
  
  
  var lat = document.getElementById("lat").textContent;
  var long = document.getElementById("long").textContent;
  var weather_div = document.getElementById("weather_");
  
try {

  

  // Openweather Map Data
  var weather_raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=767a7cce68ed2b3098d41e24364ec56c`);
  var weather_result = await weather_raw.json();

  var weather_description = await weather_result.weather[0].description;  // description of weather
  var weather_icon = await weather_result.weather[0].icon;  // ICON
  var weather_temp = await weather_result.main.temp;  // Temp in Celsius
  var weather_humidity = await weather_result.main.humidity;  // Humidity
  var weather_cityname = await weather_result.name;  // City Name
  var weather_country = await weather_result.sys.country;  // City Name


  

  weather_div.innerHTML = `
        <div id="weather_img">       
          <br>
          <img id= "weather_icon" src="/IMG/openweathermap/${weather_icon}.svg" > 
          <br id="linebreak_notvisible">         
      </div>
      <div id="weather_temp_container">
          <br id="linebreak_notvisible">
          <p id="weather_temp">${Math.round(weather_temp)}&#8451;</p>
          <br id="linebreak_notvisible">
          <p id="weather_status_description">${weather_description}</p>           
          <p id="weather_humidity"><span id="about_highlight">Humidity</span>: ${weather_humidity}%</p>
          <p id="weather_coordinate"><span id="about_highlight">Coord</span>: ${lat}, <span id="coord_indent">${long}</span></p>
          <p id="weather_country"><span id="about_highlight">Location</span>: <br id="linebreak_notvisible">${weather_cityname}, ${weather_country}</p>     
          <br>  
     </div>
  `; // end of inner HTML 

  // change DIV name 
  weather_div.setAttribute("id", "weather_div2");
  

  

  
} catch (error){
  console.log(error);
  Swal.fire({
    title: `Sorry but we are unable to retrieve weather data.<br>Please try again later.`,  
    icon: 'error',
    // confirmButtonText: 'Got It',
    showConfirmButton:false,
    allowOutsideClick:false,
    timer: 2000                        
  }).then(function (){
    // Error renderer when error occurs
    weather_div.innerHTML = `
        <div id="weather_img">
        <!--Reuse property-->
        <p id="ip_header">Unable to retrieve Weather data due to network and API fetching issues.</p>        
     </div>
  `; // end of inner HTML 

     // this will change the div name do that it will render a new one.
     weather_div.setAttribute("id", "weather_div2");
  })
} // end of catch
}// end of weather function






// fnction for extra command IP address
async function ipcheck(){

  // to get the DIV 
  var ip_info_renderer = document.getElementById("ip_info");

  try {

    // this is the I API 
    var ip_json = await fetch('https://ipapi.co/json/');
    var ip_info = await ip_json.json();

    var ip_address = await ip_info.ip;
    var ip_version = await ip_info.version;     
    var ip_region = await ip_info.region;
    var ip_country_name = await ip_info.country_name;
    var ip_country_latitude = await ip_info.latitude;
    var ip_country_longitude = await ip_info.longitude;
    var ip_country_asn= await ip_info.asn;
    var ip_country_org= await ip_info.org;


    ip_info_renderer.innerHTML = `
      <p id="ip_header">Below are the details linked to your Public IP.</p>
      <div id="ipinfocontainer">
      <p id="ip_title"><span id="important">IP Address</span>: <span id="ipaddress"> ${ip_address}</span></p>
      <p id="ip_title"><span id="important">IP Version</span>: <span id="ipversion"> ${ip_version}</span></p>
      <p id="ip_title"><span id="important">Country Origin</span>: <span id="ipcountry"> ${ip_country_name}</span></p>
      <p id="ip_title"> <span id="important">Region</span>: <span id="ipcity"> ${ip_region}</span></p>
      <p id="ip_title"> <span id="important">Latitude</span>: <span id="iplat"> ${ip_country_latitude}</span></p>
      <p id="ip_title"><span id="important">Longitude</span>: <span id="iplong"> ${ip_country_longitude}</span></p>
      <p id="ip_title"><span id="important">ASN</span>: <span id="ipasn"> ${ip_country_asn}</span></p>
      <p id="ip_title"><span id="important">IP Provider</span>: <span id="iporg"> ${ip_country_org}</span></p>
      </div> 
      `;


      // this will change the div name do that it will render a new one.
      ip_info_renderer.setAttribute("id", "ip_info_2");

    
  } catch (error) {
    Swal.fire({
      title: `Sorry but we are unable to retrieve your IP Info.<br>Please try again later.`,
      // html: `<p id="sweetalert">Type <span id="main_title_color">help</span> to view the list of commands available.</p>`,          
      icon: 'error',
      // confirmButtonText: 'Got It',
      showConfirmButton:false,
      allowOutsideClick:false,
      timer: 2000                        
    }).then(function (){
      // Error renderer
      ip_info_renderer.innerHTML = `
      <p id="ip_header">Unable to retrieve IP Details due to network and API fetching issues.</p>`;

       // this will change the div name do that it will render a new one.
       ip_info_renderer.setAttribute("id", "ip_info_2");
    })
  } // end of catch

}// end of IPcheck function



// this is the function for random QUOTE

async function random_quote(){
   
   // to get the DIV 
  var quote_container = document.getElementById("quote_container");


  try {

      var raw_quote =  await fetch('https://api.quotable.io/random?tags=famous-quotes'); // Quote API 
      var quote_random = await raw_quote.json();  // JSON FORMAT 

      var content = await quote_random.content;
      var author = await quote_random.author;


      // IF else for undefined condition 
    if (content === undefined || author === undefined ) {
      Swal.fire({
        title: `Failed to fetch a Quote.<br>Please try again later.`,             
        icon: 'error',     
        showConfirmButton:false,
        allowOutsideClick:false,
        timer: 2000                        
      }).then(function (){
        // Error renderer
        quote_container.innerHTML = `
        <p id="main_quote">Unable to pull up a <span id="main_title_color">Quote</span> due to network and API fetching issues.</p>`;
  
         // this will change the div name do that it will render a new one.
         quote_container.setAttribute("id", "quote_container2");
      })
    } else {

      quote_container.innerHTML = `
      
      <p id="main_quote"><q>${content}</q></p>  
      <br>  
      <p id="author"> -${author}</p>
      <br>
      `; // end of innerhtml 
       // this will change the div name do that it will render a new one.
       quote_container.setAttribute("id", "quote_container2");
    }

   

     
    
  } catch (error) {
    Swal.fire({
      title: `Failed to fetch a Quote.<br>Please try again later.`,             
      icon: 'error',     
      showConfirmButton:false,
      allowOutsideClick:false,
      timer: 2000                        
    }).then(function (){
      // Error renderer
      quote_container.innerHTML = `
      <p id="main_quote">Unable to pull up a <span id="main_title_color">Quote</span> due to network and API fetching issues.</p>`;

       // this will change the div name do that it will render a new one.
       quote_container.setAttribute("id", "quote_container2");
    })
  } // end of catch



}// end of random quote



// scroll = setInterval(function(){ window.scrollBy(0, 1000);}, 100);
// // clearInterval(scroll);

// document.addEventListener('onscroll', function (){
//   scrollToBottom ();
// })


// scrollingElement = (document.scrollingElement || document.body)
//  function scrollToBottom () {
//    scrollingElement.scrollTop = scrollingElement.scrollHeight;
// }


