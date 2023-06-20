

// ARRAY TO STORE HSTORY AND INPUT 

var cmd_history = []
i = 0;
// n = cmd_history.length;   // history



// ARRAY of common and generic command
var history_for_tabkey = ["exit", "help", "about", "projects", "programming", "skills", "github", "email", "extra"],  // for tab key 
tab_index = 0;


 
// GLOBAL SCOPE VARIABLE 
var container_terminal = document.getElementById("container_terminal");
var output = document.getElementById("ouput");
var lbl_cmd = document.getElementById("lbl_cmd");
var cmd_input = document.getElementById("cmd_input");


// for sweetalert2 

var email_txtarea = document.getElementById("email_txtarea");




// COMMAND VARIABLES AND TEXT WILL START HERE

var help= `
<div id="help_container">   
        <br>
        <P id="help_banner">Below are the list of commands you can use to navigate or to know more about me.</P> 
        <br>  
        <p id="about_help"><span id="main_title_color">about</span>&emsp;-&emsp;Display a neofetch like information about myself.</p>  
        <p id="cv_help"><span id="main_title_color">cv</span>&emsp;-&emsp;Download a copy of my CV.</p>
        <p id="exit_help"><span id="main_title_color">clear</span>&emsp;-&emsp;Clear output.</p> 
        <p id="email_help"><span id="main_title_color">email</span>&emsp;-&emsp;Send me an email.</p>
        <p id="github_help"><span id="main_title_color">github</span>&emsp;-&emsp;Will redirect you to my GITHUB Repository.</p>
        <p id="programming_help"><span id="main_title_color">programming</span>&emsp;-&emsp;Display all programming and other relevant languages and stuffs I know.</p>
        <p id="projects_help"><span id="main_title_color">projects</span>&emsp;-&emsp;Display list of projects/applications I created.</p>       
        <p id="skills_help"><span id="main_title_color">skills</span>&emsp;-&emsp;Will display my Tech related skills.</p>
        <p id="extra_help"><span id="main_title_color">extra</span>&emsp;-&emsp;Other commands or functions I created just for fun.</p>  
        <p id="exit_help"><span id="main_title_color">exit</span>&emsp;-&emsp;To close this site.</p> 
        <br><br>        
        <P id="help_footer_note">Please note that the above commands are <b>not case sensitive</b>.</P>    
    </div><br>
`;  // end of HELP command


// GITGUB COMMAND

var github=`<br><P id="github_output">Redirected to James a.k.a <b>@rockstartraders</b> GITHUB Repository. </P>`;

// cv COMMAND

var cv=`<P id="cv_output">I'm so sorry but for security reason I decided to remove my <span id="main_title_color">cv</span> as well as other sensitive information of myself.<br><br id="linebreak_notvisible">Please send me an <span id="main_title_color">email</span> and I will be glad to give you a copy as soon as possible.<br><br>With Thanks.</P>`;

// Generic LINUX command 

var generic_unix=`<P id="generic_unix_output">Wow a <b>UNIX command</b> indeed but I do not have any output for that.<br>You can try <span id="main_title_color">help</span> for other option. </P>`;

// Email command

var email=`<P id="email_output">Thank you so much for spending some time communicating with me. <br> <br id="linebreak_notvisible">I really do appreciate it and I will get back to you as soon as possible.</P>`;
var emailerror=`<P id="email_output">Sorry but you entered an invalid email address.<br>You may want to try it again ?</P>`;

var mypseinfo = `
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">My PSE Info.</span> - A simple Android Application to view PSE data.</p>
<br>  
<p id="tech_used">Core Technology used is <b>Javascript</b> with the help of Apache Cordova as framework<br> and Materialize Css for its UI. </p>  
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project/PSE_info.gif" class="my_pse_info" width="350" height="100">
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of mypseinfo

var jconverter = `
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">Jengs Currency Converter (android)</span> - A simple currency conversion application <br>created using basic web technology.</p>
<br>  
<p id="tech_used">Core Technology used is <b>Javascript</b> with the help of Apache Cordova as framework<br> and Materialize Css for its UI and few JS libraries.</p>  
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project/Jengs-Currency-Converter.gif" class="jengs_converter" width="300" height="100">
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of jconverter

var alt2 = `
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">alt2</span> - A software alternative finder for Linux.</p>
<br>  
<p id="tech_used">Technology used is <b>Python</b> using a process called web scraping,<br> with the help of Requests module and BeautifulSoup.</p>  
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project/alt2.gif" class="alt2" width="800" height="400">
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of alt2


var net2shell = `
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">net2shell</span> - A compilation of all the network command I used for Linux.</p>
<br>  
<p id="tech_used">A <b>Bash Script</b> application/compilation of network related functions and commands for Linux.</p>  
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project/net2shell.png" class="net2shell" width="800" height="400">
<br><br>
<img src="./IMG/project/net2shell2_.png" class="net2shell" width="800" height="400">
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of net2shell

var pse_cli = `
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">pse-cli</span> - A <b>Python</b>/terminal application to view PSE prices and data.</p>       
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project/pse_cli.gif" class="pse-cli" width="800" height="500">
<br>        
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of pse_cli

var hash_check = `
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">hash-check</span> - A <b>Python</b> application that can detect/convert<br>md5, sha1, sha256, sha356 and sha512 encryption.</p>       
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project//hash-check.gif" class="hash_check" width="800" height="500">
<br>        
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of hash_check


var my_cve = `
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">My-CVE-Info.</span> - A Linux application created to view <b>CVE</b> or <br><b>Common Vulnerabilities and Exposures</b> report.</p>
<br>  
<p id="tech_used">Technology used for this shell app. is <b>Python</b> with the help of <b>circl.lu</b> API.</p>  
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project/cve-info.gif" class="my_cve" width="800" height="400">
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of my_cve

var james_media_player = `
  
<div id="app_made">
<br>
<p id="app_name"><span id="main_title_color_appname">James-Media-Player</span> - A simple media player I created for myself since my Media Player<br> was acting weird and slow for me.
 Though I know that I can download a few for free <br>but I preferred creating my own.</p>
<br>  
<p id="tech_used">Technology used is just a simple <b>Visual Basic .NET</b>.</p>  
<br>         
<p id="previewtxt">Preview</p>      
<img src="./IMG/project/James Media Player.png" class="james_media_player" width="800" height="400">
<p id="github_visit">You can view all my projects and sources via my repository <br>by typing <span id="main_title_color">github</span>.</p>
<br>
</div>
`;  // end of james_media_player

var centcal = `
  
<div id="app_made">
<p id="app_name"><span id="main_title_color_appname">centcal</span> - A simple percentage calculator I created for my Mom to make her computing work easy.</p>
<br>  
<p id="tech_used">New tab will open since this is a website.</p>   
</div>
`;  // end of centcal


var steg = `
  
<div id="app_made">
<p id="app_name"><span id="main_title_color_appname">steg</span> - a.k.a Steganography is the technique of hiding secret data within an ordinary, non-secret, file or message (example is an Image) in order to avoid detection. </p>
<br>  
<p id="tech_used">New tab will open since this is a website.</p>
</div>
`;  // end of Steganography

var iplookup = `
  
<div id="app_made">
<p id="app_name"><span id="main_title_color_appname">iplookup</span> - Is just another IP look up tool, similar to other websites or apps you can see via the internet, so nothing's fancy. </p>
<br>  

</div>
`;  // end of Iplookup

var kjumble = `
  
<div id="app_made">
<p id="app_name"><span id="main_title_color_appname">kjumble</span> or <span id="main_title_color_appname">kgame</span> - A small game I created for Vocab purposes since i studied Korean/Hangeul back then.</p>
<br>  
<p id="tech_used">New tab will open since this is a website.</p>   
</div>
`;  // end of kjumble

var spanishly = `
  
<div id="app_made">
<p id="app_name"><span id="main_title_color_appname">spanishly</span> - A  small game I created for Vocab , verb conjugation (present), etc. specific for Spanish Language since I am still learning/studying it.</p>
<p id="tech_used">New tab will open since this is a website.</p>
<br>  
<p id="tech_used">Please note that this is an ongoing project still.</p>   
 
</div>
`;  // end of Spanishly

var seismic = `
  
<div id="app_made">
<p id="app_name"><span id="main_title_color_appname">seismic</span> - Earthquake data and visualization using USGS data and Leaflet.</p>
<br>  

 
</div>
`;  // end of Spanishly

var secretconversation = `
  
<div id="app_made">
<p id="app_name"><span id="main_title_color_appname">secret-conversation</span> - A simple web app that will convert Plain text value to an encrypted text and will convert back to Plain text if needed. </p>
<br>  
<p id="tech_used">New tab will open since this is a website.</p>   
</div>
`;  // end of Steganography


// Programing command

var programming = `
<div id="programming_cmd">
        <br>
        <P id="programming_bannertxt">Below are the list of programming, scripting languages and frameworks I know and using.</P> 
        <div id="programming_icons">
            <br>
            <p id="webtechnology">Web Languages</p>  
            <br> 
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><i class="devicon-html5-plain-wordmark colored" id="html5_icon" title="HTML5"></i></a>
            <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><i class="devicon-css3-plain-wordmark colored" id="css3_icon" title="CSS3"></i></a>
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"> <i class="devicon-javascript-plain colored"  id="js_icon" title="Vanilla Javascript"></i></a>
            <a href="https://jquery.com/" target="_blank"> <i class="devicon-jquery-plain-wordmark colored"  id="jquery_icon" title="JQuery"></i>  </a>
            <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank"> <i class="devicon-markdown-original" id="MD_icon" title="Markdown for GITHUB"></i> </a>
            <a href="https://nodejs.org/en/" target="_blank">  <i class="devicon-nodejs-plain-wordmark colored" id="nodejs_icon" title="Node JS"></i>  </a>   
            <a href="https://www.npmjs.com/" target="_blank">  <i class="devicon-npm-original-wordmark colored" id="npm_icon" title="Node Package Manager"></i>  </a>
            <br><br><br>
            <p id="scripting_languages">Scripting and Automation</p> 
            <br>
            <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" target="_blank"> <i class="devicon-bash-plain" id="bash_icon" title="Bash"></i></a>      
            <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"> <img id="python_icon" title="Python" src="./IMG/icons/python-original-wordmark.svg" /></a>  
            <br><br><br>
            <p id="db_and_versionctrl">Database and Version Control</p> 
            <a href="https://en.wikipedia.org/wiki/MySQL" target="_blank"> <img id="mysql_icon" title="My SQL" src="./IMG/icons/mysql-original-wordmark.svg" /></a>
            <a href="https://git-scm.com/" target="_blank"> <i class="devicon-git-plain-wordmark colored" id="git_icon" title="GIT"></i></a>                      
            <br>
            <p id="designsystem">Design System</p>   
            <a href="https://materializecss.com/" target="_blank"> <i class="devicon-materialui-plain colored" id="materialui_icon" title="Googles Material UI"></i></a>     
            <a href="https://tailwindcss.com/" target="_blank"> <i class="devicon-tailwindcss-original-wordmark colored" id="tailwind_icon" title="Tailwindcss"></i></a>  
            <br>
            <br>
            <p id="appdevelopment">Mobile App. development and Framework</p> 
            <a href="https://dart.dev/" target="_blank"><i class="devicon-dart-plain-wordmark colored" id="dart_icon" title="Dart"></i></a>                        
            <div id="flutter_margin">
                <a href="https://flutter.dev/" target="_blank"><i class="devicon-flutter-plain colored" id="flutter_icon" title="Flutter"></i></a>                
            </div>
            <br>   
            <br>             
            <p id="others">Others</p>  
            <a href="https://en.wikipedia.org/wiki/Linux" target="_blank"> <img id="linux_icon" title="Linux" src="./IMG/icons/linux-original.svg" /></a> 
            <a href="https://www.debian.org/" target="_blank"><i class="devicon-debian-plain-wordmark colored"  id="debian_icon" title="Debian Distro."></i></a>
            <a href="https://www.electronjs.org/" target="_blank"> <i class="devicon-electron-original " id="electron_icon" title="Electron JS"></i></a>    
            <br id="linebreak_notvisible">
            <br id="linebreak_notvisible">
            <p id="others_bottom_txt">Frameworks and Systems I used [<b>Doesnt have an available icons</b>]: </p>         
            <br>  
            <a href="https://cordova.apache.org/" target="_blank"><p id="framework_no_icon">1.Apache Cordova</p></a>      
            <a href="https://metroui.org.ua/" target="_blank"><p id="framework_no_icon">2.Metro UI</p></a>
            <a href="https://designmodo.github.io/Flat-UI/" target="_blank"><p id="framework_no_icon">3.Flat UI by designmodo</p></a>
            <a href="https://www.tutorialspoint.com/vb.net/index.htm" target="_blank"><p id="framework_no_icon">4.Visual Basic .NET</p></a>
            <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank"><p id="framework_no_icon">5.REST API Integration</p> </a>
            <a href="https://reactjs.org/" target="_blank"><p id="framework_no_icon">6.Basic of React JS, but I still prefer Vanilla JS though.</p></a>
            <a href="https://neutralino.js.org/" target="_blank"><p id="framework_no_icon">7.Neutralinojs [Electron and NWJS alternative]</p></a>
        </div>   
        </div>

`;  // end of programming CMD


var about = `
<div id="about_container">
<br>
<div id="image_left">
    <img id="my_img" src="./IMG/profile/profile.png">
</div>
<div id="about_text_right">
    <p id="my_name">@James Paul Espeña</p>
    <p id="my_separator">---------------------</p>          
    <p id="my_origin"><span id="about_highlight">Origin:</span> Cavite, Philippines</p>
    <p id="my_nationality"><span id="about_highlight">Nationality:</span> Filipino</p>
    <p id="my_email"> <span id="about_highlight">Email Address:</span><a id="my_email" href="mailto:jamespaulespea@gmail.com" title="You can also type the email command which is easier I think.\nPlease give that a try.">jamespaulespea@gmail.com</p></a>
    <p id="my_employed"><span id="about_highlight">Currently Employed:</span> YES</p>
    <!--Will be using Same ID same everything will be the same from here-->
    <p id="my_employed"><span id="about_highlight">Nature of Work:</span> I.T and Service Related</p>
    <p id="my_employed"><span id="about_highlight">Love to Design and Develop Applications:</span> YES</p>           
    <p id="my_employed"><span id="about_highlight">Can Do Freelance Work:</span> YES</p>
    <p id="my_employed"><span id="about_highlight">Confident and can Communicate:</span> YES </p>
    <p id="my_employed"><span id="about_highlight">Passionate:</span> YES</p>
    <p id="my_employed"><span id="about_highlight">Team Player and Cooperative:</span> YES</p>
    <p id="my_employed"><span id="about_highlight">Tech-savvy:</span> Definitely</p>           
    <p id="my_employed"><span id="about_highlight">Fast Learner and Resourceful:</span> Without a doubt it's a YES</p>
    <p id="my_employed"><span id="about_highlight">Adaptive to Changes in Technology and Work Environment:</span> YES</p>
    <p id="my_employed"><span id="about_highlight">A Linux Fanboy:</span> Indeed <span id="emoji">😂</span></p>
    <br>
    <div id="color_bottom">
    <p id="my_employed"><span id="primary_color">    </span><span id="second_color">    </span><span id="third_color">    </span><span id="fourth_color">    </span><span id="fifth_color">    </span><span id="sixth_color">    </span><span id="seventh_color">    </span><span id="eighth_color">    </span>           
 </p>
 <br>
 </div> <!--end of div for color-->          
</div>
</div> <!--End of Main Div-->

`; // end of about


var projects = `
<div id="projects_made">
<br>
<p id="projects_made_header">Below are the few list of Applications and Programs I created.<br><br id="linebreak_notvisible">       
You can type the <b>project name</b> to view its description and snippets.<br>       
Example: <span id="main_title_color_appname">alt2</span></p><br>

<p id="projects_made_pseinfo"><span id="main_title_color_appname">my-pse-info</span> or <span id="main_title_color_appname">pseinfo</span> - A simple Android Application to view PSE data.</p>
<p id="projects_made_jconverter"><span id="main_title_color_appname">jconverter</span> - A simple currency conversion app. for Android.</p>
<p id="app_nameprojects_made_alt2"><span id="main_title_color_appname">alt2</span> - A software alternative finder for Linux.</p>
<p id="app_nameprojects_made_alt2shell"><span id="main_title_color_appname">net2shell</span> - A compilation of all the network command I used for Linux.</p>
<p id="app_nameprojects_made_psecli"><span id="main_title_color_appname">pse-cli</span> - A cli application to view PSE data and price.</p>   
<p id="app_nameprojects_made_hashcheck"><span id="main_title_color_appname">hash-check</span> - Application that can detect/convert md5, sha1, sha256, sha356 and sha512 encryption.</p> 
<p id="app_nameprojects_made_mycve"><span id="main_title_color_appname">my-cve</span> - Application to view CVE or Common Vulnerabilities and Exposures report.</p>       
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">jmplayer</span> - A simple media player for Windows.</p>
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">centcal</span> - A simple percentage calculator I created for my Mom.</p>
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">secret-conversation</span> - A web app that will convert Plain text value to an encrypted text & vice versa.</p>
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">steg</span> - Hide secret message into an image.</p>
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">iplookup</span> - Is just another IP look up tool created by me.</p>
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">kjumble</span> or <span id="main_title_color_appname">kgame</span> - A small game I created for Vocab purposes since i studied Korean/Hangeul back then.</p>
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">seismic</span> - Earthquake data and visualization using USGS data and Leaflet.</p>
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">spanishly</span> - A  small game I created for Vocab , verb conjugation (present), etc. specific for Spanish Language since I am still learning/studying it.</p>
<p id="app_nameprojects_made_footer_note">I still have a lot of projects not included here, Please feel free to visit my <span id="main_title_color">github</span> page for reference.</p>
<br>
</div> <!--End of projects_made div-->
`; // End of Projects command





var ip=`
<div id="ip_info">
</div> <!--End of IP info-->
`; // end of IP command



// just reuse same div || this is for QUOTE 

var quote=`
<div id="quote_container">
</div> <!--End of QUOTE -->
`; // end of IP command



// This section is for EXTRA 
// I'm Tired of reating new CSS RUle
// Will reuse existing instead. 



var extra = `
<div id="projects_made">
<br>
<p id="projects_made_header">Here are some  <span id="main_title_color_appname">extra</span> commands I created for you to play with and<br><br id="linebreak_notvisible">       
to showcase my skills and familiarity as well when it comes to integrating REST API's.<br></p>

<p id="projects_made_pseinfo"><span id="main_title_color_appname">ip</span> - Will display information related to your Public IP Address.</p>
<p id="projects_made_jconverter"><span id="main_title_color_appname">quote</span> - Random Quotes from various / famous people.</p>
<p id="app_nameprojects_made_alt2" class="weather_not_to_display_in_mobile"><span id="main_title_color_appname">weather</span> - Will display current weather data [Geo Location Specific].</p>
 <!--<p id="app_nameprojects_made_alt2shell"><span id="main_title_color_appname">net2shell</span> - A compilation of all the network command I used for Linux.</p>
<p id="app_nameprojects_made_psecli"><span id="main_title_color_appname">pse-cli</span> - A cli application to view PSE data and price.</p>   
<p id="app_nameprojects_made_hashcheck"><span id="main_title_color_appname">hash-check</span> - Application that can detect/convert md5, sha1, sha256, sha356 and sha512 encryption.</p> 
<p id="app_nameprojects_made_mycve"><span id="main_title_color_appname">my-cve</span> - Application to view CVE or Common Vulnerabilities and Exposures report.</p>       
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">jmplayer</span> - A simple media player for Windows.</p>
<p id="app_nameprojects_made_footer_note">I still have a lot of projects not included here, Please feel free to visit my <span id="main_title_color">github</span> page for reference.</p> -->
<br>
</div> <!--End of projects_made div-->
`; // end of Extra command



// this is for skills command \\ lazy to configure a new ID and div so reusing an existing CSS
var skills = `
<div id="projects_made">
<br>
<p id="projects_made_header">I do have a lot of computer related skills still that I failed to link here which I'm willing to discuss when needed and ask. <br></p>

<p id="projects_made_pseinfo"><span id="main_title_color_appname">Administration</span> (Windows Server 2012 and 2016).</p>
<br id="linebreak_notvisible">
<p id="app_nameprojects_made_jmplayer"><span id="main_title_color_appname">Linux Administration</span></p>
<br id="linebreak_notvisible">
<p id="projects_made_jconverter"><span id="main_title_color_appname">Computer Troubleshooting </span> (Software and Hardware).</p>
<br id="linebreak_notvisible">
<p id="app_nameprojects_made_alt2" class="weather_not_to_display_in_mobile"><span id="main_title_color_appname">Networking</span></p>
<br id="linebreak_notvisible">
<p id="app_nameprojects_made_alt2shell"><span id="main_title_color_appname">Programming and Application Development</span> (See <span id="main_title_color_appname">projects</span> or <span id="main_title_color_appname">github</span> command to view some of my works).</p>
<br id="linebreak_notvisible">
<p id="app_nameprojects_made_psecli"><span id="main_title_color_appname">Cooking</span> (Not tech relevant but this is my favorite skill among others 😁).</p>   
<br>


</div> <!--End of projects_made div-->
<P id="help_footer_note"> Please note that the above information or notes are <b>NOT commands</b>.</P>  

`; // end of Extra command


// GBL Variable for Weather LAT and LONG 



var lat = document.getElementById("lat");
var long = document.getElementById("long");


// Var for weather command
var weathernow = `
<div id="weather_"></div> 
`;  // end of weather command

