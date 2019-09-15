// Variables
var runTimer, now, time, workoutStatus = "waiting", exerciseHTML,
    audioElement = document.createElement("audio"),
    mainInfoMsg1 = "Do eye workout without glasses or contact lenses. The face is motionless, and just the eyes are working. Avoid sudden movements with the eyes.<br><br>",
    mainInfoMsg2 = "If you had eye surgery less than 6 months ago the training not recommended, and you should wait for complete healing (6-7 months after surgery)<br><br>",
    mainInfoMsg3 = "When retinal detachment occurs, the exercises not recommended! If you have gone through an operation due to \"the sticking\" of the retina, you need to wait for 6 months after surgery. In the future, you can start exercises gently, without straining your eyes.",
    mainInfoMsg      = mainInfoMsg1 + mainInfoMsg2 + mainInfoMsg3,
    detectOrien      = function() {
      if ( window.innerWidth > window.innerHeight ) {
        hOrintation.src = "svgs/eyeworkout.svg";
      } else if ( window.innerWidth < window.innerHeight ) {
        hOrintation.src = "svgs/eyeworkout-p.svg";
      }
    },
    comingSoon       = function() {
      alertify.log('coming soon...');
    },
    readyExercise    = function(exerHTML) {
      // Hide redo/next exercise button
      redoEx.classList.add("hide");
      nextEx.classList.add("hide");
      
      // Set exercise HTML
      palmingoutput.innerHTML = exerHTML;

      // Are You Ready?
      exHeader.textContent = "Are You Ready?";
      audioElement.setAttribute("src", "media/areyouready.mp3");
      audioElement.play();
      // Get Set?
      setTimeout(function() {
        exHeader.textContent = "Get Set!";
        audioElement.setAttribute("src", "media/getset.mp3");
        audioElement.play();
      }, 1000);
    },
    blinkingExercise = function(nextFunc) {
      exHeader.textContent = "Blink quickly";
      audioElement.setAttribute("src", "media/blinkquickly.mp3");
      audioElement.play();
      
      palmingoutput.innerHTML = '<p>&nbsp;</p><svg class="blinkquickly" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202" /></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)" /><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R)" class="eyelids"><path d=" M 312.5 13.5 L 487.5 13.5 L 487.5 102.516 C 427.833 122.272 369.51 122.282 312.5 102.516 L 312.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 312.5 102.516 C 367.722 110.717 426.066 110.727 487.5 102.516 L 487.5 191.532 L 312.5 191.532 L 312.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)" /><g><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i)" class="eyelids"><path d=" M 13.5 13.5 L 188.5 13.5 L 188.5 102.516 C 128.833 122.272 70.51 122.282 13.5 102.516 L 13.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 13.5 102.516 C 68.722 110.717 127.066 110.727 188.5 102.516 L 188.5 191.532 L 13.5 191.532 L 13.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g></g></g></svg><p>&nbsp;</p>';

      // Initialize blinking onload
      TweenMax.to(".blinkquickly .toplid", 0.15, {
        y: -105, 
        x: 0, 
        force3D: true, 
        yoyo: false, 
        repeat: -1,
        repeatDelay: 0,
        ease: Power1.easeOut
      });
      TweenMax.to(".blinkquickly .bottomlid", 0.15, {
        y: 100, 
        x: 0, 
        force3D: true, 
        yoyo: false, 
        repeat: -1,
        repeatDelay: 0,
        ease: Power1.easeOut
      });

      // Stop Blinking
      setTimeout(function() {
        exHeader.textContent = "Exercise completed";
        audioElement.setAttribute("src", "media/exercisecompleted.mp3");
        audioElement.play();

        TweenMax.to(".blinkquickly .toplid", 0.15, {
          y: -105, 
          x: 0, 
          force3D: true, 
          yoyo: false, 
          repeat: 0,
          repeatDelay: 0,
          ease: Power1.easeOut
        });
        TweenMax.to(".blinkquickly .bottomlid", 0.15, {
          y: 100, 
          x: 0, 
          force3D: true, 
          yoyo: false, 
          repeat: 0,
          repeatDelay: 0,
          ease: Power1.easeOut
        });

        // Display redo/next exercise button
        redoEx.classList.remove("hide");
        nextEx.classList.remove("hide");

        // Initialize next exercise
        nextEx.onclick = function() {
          nextFunc();
          return false;
        };
      }, 5000);
    },
    palmingInstr     = function() {
      var msg1 = "The palming exercise helps with relaxing the eye muscles, and soothing the optic nerves. Even if you're not trying to improve your eyesight with eye exercises, Palming is still beneficial for eye relaxation, for instance: relieving stress after a long day's work at the computer or reading. \"Palming\" must be performed without glasses or contact lenses.<br><br>",
          msg2 = "This exercise should be performed in a sitting position, with elbows on a steady surface like a table. If you don't have a table close by, you can also use your lap. Remember that your posture plays a significant role. Take a few moments to rub your hands together until they feel warm. Interlock your fingers tightly with your palms facing each other, and cover your eyes with your hands. The bottom of your palms should be covering your nose, but your hands should not be touching your eyes, just blocking the light.<br><br>",
          msg3 = "Once again, it is crucial to remember that you should not be pressing on your eyes or cheekbones and the light should not be able to show through your fingers. Open your eyes for a moment to make sure that your fingers are closed tightly, and that the light does not pass through.<br><br>",
          msg4 = "Close your eyes and allow your eyes to relax. You can practice palming for as long as you wish. The longer your palming session, the more beneficial it is to your eyesight.<br><br>",
          msg5 = "The author of this methodology is a famous American scientist named William Bates. He spent a lot of time not only researching the field of ophthalmic diseases but also made many improvements to the field. Many of his techniques originate from Native Americans, who were known for their falcon-like eyesight.";

      Swal.fire({
        title: "Palming",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%; max-width: 300px;" viewBox="0 0 300 300" preserveAspectRatio="xMidYMin meet"><g><g class="lefthand"><path d=" M 44.123 251 L 72.979 251 C 75.635 251 77.788 248.847 77.788 246.191 L 77.788 164.434 C 77.788 161.778 75.635 159.625 72.979 159.625 L 44.123 159.625 C 41.467 159.625 39.314 161.778 39.314 164.434 L 39.314 246.191 C 39.314 248.847 41.467 251 44.123 251 Z " fill="rgb(77,124,32)" /><path d=" M 104.844 164.347 L 121.071 135.579 L 134.277 60.733 C 134.864 57.419 137.311 54.548 140.625 53.952 C 142.92 53.521 145.288 54.135 147.086 55.626 C 148.884 57.117 149.925 59.33 149.926 61.666 L 149.926 145.197 L 140.409 199.142 C 137.569 215.229 123.589 226.955 107.254 226.954 L 72.979 226.954 L 72.979 169.243 L 96.467 169.243 C 99.939 169.243 103.142 167.372 104.844 164.347 Z " fill="rgb(136,204,0)" /><path d=" M 107.258 231.779 L 107.258 231.779 L 68.151 231.779 L 68.151 164.421 L 96.474 164.421 C 96.474 164.421 96.474 164.421 96.474 164.421 C 98.202 164.421 99.8 163.485 100.635 161.988 C 100.635 161.973 100.649 161.973 100.649 161.973 L 116.459 133.925 L 129.519 59.9 C 129.965 57.366 131.117 55.004 132.845 53.104 C 134.645 51.088 137.064 49.72 139.728 49.216 C 140.505 49.072 141.283 49 142.075 49 C 145.027 49 147.892 50.022 150.167 51.909 C 153.061 54.313 154.746 57.898 154.746 61.657 C 154.746 61.657 154.746 61.671 154.746 61.671 L 154.746 145.616 L 145.156 199.986 C 145.156 199.986 145.156 199.986 145.156 199.986 C 143.587 208.885 138.921 216.963 131.996 222.78 C 125.07 228.583 116.301 231.779 107.258 231.779 C 107.258 231.779 107.258 231.779 107.258 231.779 Z  M 109.044 166.711 L 125.675 137.236 L 139.022 61.57 C 139.022 61.57 139.022 61.556 139.022 61.556 C 139.166 60.807 139.497 60.116 140.016 59.554 C 140.405 59.108 140.937 58.806 141.513 58.69 C 141.7 58.662 141.888 58.647 142.075 58.647 C 142.78 58.647 143.457 58.892 144.004 59.338 C 144.695 59.914 145.099 60.764 145.099 61.671 L 145.099 144.781 L 135.653 198.302 C 134.487 204.983 130.988 211.03 125.79 215.379 C 120.606 219.742 114.04 222.132 107.258 222.132 L 107.258 222.132 L 77.798 222.132 L 77.798 174.069 L 96.459 174.069 C 101.672 174.069 106.495 171.246 109.044 166.711 Z " fill-rule="evenodd" fill="rgb(77,124,32)" /></g><g class="righthand"><path d=" M 255.877 251 L 227.022 251 C 224.366 251 222.213 248.847 222.213 246.191 L 222.213 164.434 C 222.213 161.778 224.366 159.625 227.022 159.625 L 255.877 159.625 C 258.533 159.625 260.686 161.778 260.686 164.434 L 260.686 246.191 C 260.686 248.847 258.533 251 255.877 251 Z " fill="rgb(77,124,32)" /><path d=" M 195.156 164.347 L 178.93 135.579 L 165.723 60.733 C 165.137 57.419 162.689 54.548 159.375 53.952 C 157.08 53.521 154.712 54.135 152.914 55.626 C 151.117 57.117 150.076 59.33 150.074 61.666 L 150.074 145.197 L 159.592 199.142 C 162.432 215.229 176.411 226.955 192.746 226.954 L 227.022 226.954 L 227.022 169.243 L 203.534 169.243 C 200.061 169.243 196.858 167.372 195.156 164.347 Z " fill="rgb(136,204,0)" /><path d=" M 192.742 231.779 L 192.742 231.779 L 231.849 231.779 L 231.849 164.421 L 203.527 164.421 C 203.527 164.421 203.527 164.421 203.527 164.421 C 201.799 164.421 200.201 163.485 199.365 161.988 C 199.365 161.973 199.351 161.973 199.351 161.973 L 183.541 133.925 L 170.481 59.9 C 170.035 57.366 168.883 55.004 167.155 53.104 C 165.355 51.088 162.936 49.72 160.272 49.216 C 159.495 49.072 158.717 49 157.925 49 C 154.974 49 152.108 50.022 149.833 51.909 C 146.939 54.313 145.254 57.898 145.254 61.657 C 145.254 61.657 145.254 61.671 145.254 61.671 L 145.254 145.616 L 154.844 199.986 C 154.844 199.986 154.844 199.986 154.844 199.986 C 156.414 208.885 161.079 216.963 168.005 222.78 C 174.93 228.583 183.699 231.779 192.742 231.779 C 192.742 231.779 192.742 231.779 192.742 231.779 Z  M 190.956 166.711 L 174.326 137.236 L 160.978 61.57 C 160.978 61.57 160.978 61.556 160.978 61.556 C 160.834 60.807 160.503 60.116 159.984 59.554 C 159.596 59.108 159.063 58.806 158.487 58.69 C 158.3 58.662 158.113 58.647 157.925 58.647 C 157.22 58.647 156.543 58.892 155.996 59.338 C 155.305 59.914 154.902 60.764 154.902 61.671 L 154.902 144.781 L 164.347 198.302 C 165.514 204.983 169.013 211.03 174.211 215.379 C 179.394 219.742 185.96 222.132 192.742 222.132 L 192.742 222.132 L 222.202 222.132 L 222.202 174.069 L 203.541 174.069 C 198.329 174.069 193.505 171.246 190.956 166.711 Z " fill-rule="evenodd" fill="rgb(77,124,32)" /></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Rub your palms together"
            audioElement.setAttribute("src", "media/rubyourpalmstogether.mp3");
            audioElement.play();
            
            // Initialize rubbing hands together
            TweenMax.to(".lefthand", 0.1, {
              y: -25, 
              x: 0, 
              yoyo: true, 
              repeat: -1,
              ease: Power2.easeInOut
            });
            TweenMax.to(".righthand", 0.1, {
              y: 25, 
              x: 0, 
              yoyo: true, 
              repeat: -1,
              ease: Power2.easeInOut
            });

            // Then cover your eyes
            runTimer = setTimeout(function() {
              exHeader.textContent = "Cover your open eyes with your hands";
              audioElement.setAttribute("src", "media/coveryoureyeswithhands.mp3");
              audioElement.play();
              setTimeout(function() {
                exHeader.textContent = "Stare at your warm palms for 15 seconds";
                audioElement.setAttribute("src", "media/stareatpalms15sec.mp3");
                audioElement.play();
              }, 4000);
              
              palmingoutput.innerHTML = '<p>&nbsp;</p>' + '<svg class="palmsovereyes" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; max-width: 100%;" viewBox="0 0 666.68 389.6" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_gY99cXwOD1OxI9QZgkC9Bmaw2hoWqSpd"><rect width="666.68" height="389.6"/></clipPath></defs><g clip-path="url(#_clipPath_gY99cXwOD1OxI9QZgkC9Bmaw2hoWqSpd)"><g><g><circle vector-effect="non-scaling-stroke" cx="482.8400125639156" cy="273.6748198742788" r="101.00000000000011" fill="rgb(136,204,0)"/><circle vector-effect="non-scaling-stroke" cx="482.8400125639156" cy="273.6748198742788" r="89.15388224255216" fill="rgb(84,145,16)"/><circle vector-effect="non-scaling-stroke" cx="482.8400125639156" cy="273.6748198742788" r="86.55577268884767" fill="rgb(255,255,255)"/><clipPath id="_clipPath_WeLDxzBn8ZBAYdhhFBGUsrlm7gMp0kft"><circle vector-effect="non-scaling-stroke" cx="482.8400125639156" cy="273.6748198742788" r="86.55577268884767" fill="rgb(255,255,255)"/></clipPath><g clip-path="url(#_clipPath_WeLDxzBn8ZBAYdhhFBGUsrlm7gMp0kft)"><g><radialGradient id="_rgradient_2" fx="0.49999979612112244" fy="0.4999981560039713" cx="0.49999979612112244" cy="0.4999981560039713" r="1" gradientTransform="matrix(305.865,0,0,305.865,300.512,89.605)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"/><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="453.4445749233938" cy="242.53788388871325" r="152.93265981654383" fill="url(#_rgradient_2)"/><g><circle vector-effect="non-scaling-stroke" cx="482.8400125639156" cy="273.67481987427857" r="39.9884753726767" fill="rgb(130,195,0)"/><circle vector-effect="non-scaling-stroke" cx="482.659516644722" cy="272.08972053290756" r="25.13518144317777" fill="rgb(77,124,32)"/><circle vector-effect="non-scaling-stroke" cx="491.73967467743444" cy="261.89977882337587" r="8.410743607787879" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="482.659516644722" cy="253.48903521558765" r="3.364297443115163" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="475.6572470264342" cy="253.48903521558768" r="1.6821487215576099" fill="rgb(255,255,255)"/></g></g></g></g><g><circle vector-effect="non-scaling-stroke" cx="183.84001256391576" cy="273.6748198742788" r="101.00000000000009" fill="rgb(136,204,0)"/><circle vector-effect="non-scaling-stroke" cx="183.8400125639156" cy="273.6748198742788" r="89.15388224255213" fill="rgb(84,145,16)"/><circle vector-effect="non-scaling-stroke" cx="183.8400125639153" cy="273.67481987427857" r="86.55577268884763" fill="rgb(255,255,255)"/><clipPath id="_clipPath_loG8tvCJZNTM2sVdhDao1JgmUI6lSEgZ"><circle vector-effect="non-scaling-stroke" cx="183.8400125639153" cy="273.67481987427857" r="86.55577268884763" fill="rgb(255,255,255)"/></clipPath><g clip-path="url(#_clipPath_loG8tvCJZNTM2sVdhDao1JgmUI6lSEgZ)"><g><radialGradient id="_rgradient_3" fx="0.49999979612112255" fy="0.49999815600397146" cx="0.49999979612112255" cy="0.49999815600397146" r="1" gradientTransform="matrix(305.865,0,0,305.865,1.512,89.605)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"/><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="154.44457492339356" cy="242.53788388871325" r="152.93265981654383" fill="url(#_rgradient_3)"/><g><circle vector-effect="non-scaling-stroke" cx="183.84001256391534" cy="273.67481987427857" r="39.988475372676675" fill="rgb(130,195,0)"/><circle vector-effect="non-scaling-stroke" cx="183.65951664472195" cy="272.08972053290734" r="25.1351814431778" fill="rgb(77,124,32)"/><circle vector-effect="non-scaling-stroke" cx="192.7396746774344" cy="261.89977882337587" r="8.410743607787907" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="183.65951664472195" cy="253.48903521558768" r="3.3642974431151913" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="176.6572470264342" cy="253.48903521558768" r="1.6821487215575814" fill="rgb(255,255,255)"/></g></g></g></g></g><g><g class="lefthand" data-svg-origin="-0.00001256391351489583 0" transform="matrix(1,0,0,1,-300,0)"><path d=" M 305.085 102.407 C 320.772 102.708 333.396 115.518 333.395 131.277 L 333.395 239.817 C 333.395 250.505 332.158 261.157 329.71 271.561 L 310.575 352.886 C 306.892 368.538 292.925 379.6 276.847 379.6 L 134.212 379.6 C 123.127 379.6 112.71 374.296 106.19 365.33 L 15.523 240.66 C 6.143 227.762 8.995 209.704 21.891 200.324 C 34.789 190.944 52.848 193.796 62.227 206.693 L 85.073 238.108 L 85.073 67.752 C 85.073 51.993 97.697 39.183 113.384 38.883 C 129.571 38.573 142.822 52.131 142.822 68.323 L 142.822 194.801 L 148.597 194.801 L 148.597 38.878 C 148.597 23.119 161.221 10.308 176.908 10.008 C 193.096 9.698 206.347 23.256 206.347 39.448 L 206.347 194.801 L 212.122 194.801 L 212.122 67.031 C 212.122 51.271 224.746 38.461 240.433 38.161 C 256.62 37.851 269.871 51.409 269.871 67.601 L 269.871 194.801 L 275.646 194.801 L 275.646 131.847 C 275.646 115.656 288.897 102.098 305.085 102.407 L 305.085 102.407 Z  M 279.87 101.43 C 282.72 99.05 285.89 97.08 289.29 95.59 C 294.1 93.49 299.29 92.4 304.54 92.4 C 304.57 92.4 304.6 92.4 304.64 92.4 L 305.18 92.41 C 305.21 92.41 305.25 92.41 305.28 92.41 C 315.45 92.61 325.15 96.79 332.28 104.06 C 339.4 111.32 343.4 121.1 343.39 131.28 L 343.39 131.28 L 343.39 239.82 C 343.39 239.82 343.39 239.82 343.39 239.82 C 343.39 251.28 342.07 262.7 339.44 273.85 C 339.44 273.85 339.44 273.85 339.44 273.85 L 320.31 355.18 C 320.31 355.18 320.31 355.18 320.31 355.18 C 318 364.97 312.46 373.7 304.57 379.95 C 296.68 386.2 286.91 389.6 276.85 389.6 C 276.85 389.6 276.85 389.6 276.85 389.6 L 134.21 389.6 C 134.21 389.6 134.21 389.6 134.21 389.6 C 119.94 389.6 106.5 382.76 98.1 371.21 C 98.1 371.21 98.1 371.21 98.1 371.21 L 7.44 246.54 C 2.61 239.91 0 231.91 0 223.7 C -0.01 211.27 5.95 199.56 16.01 192.24 C 22.64 187.41 30.64 184.8 38.85 184.8 C 51.28 184.79 62.99 190.75 70.31 200.81 C 70.31 200.81 70.31 200.81 70.31 200.81 L 75.07 207.35 L 75.07 67.75 C 75.07 57.58 79.07 47.8 86.19 40.53 C 93.32 33.27 103.02 29.08 113.19 28.88 C 113.22 28.88 113.26 28.88 113.29 28.88 L 113.83 28.88 C 113.86 28.88 113.9 28.88 113.93 28.88 C 119.18 28.88 124.37 29.96 129.18 32.07 C 132.58 33.56 135.76 35.53 138.61 37.92 C 138.85 27.91 142.96 18.38 150.05 11.32 C 157.15 4.26 166.71 0.2 176.71 0.01 C 176.75 0.01 176.78 0.01 176.81 0.01 L 177.36 0 C 177.39 0 177.42 0 177.45 0 C 182.7 0 187.89 1.09 192.7 3.19 C 197.33 5.22 201.51 8.12 205.03 11.74 C 211.69 18.55 215.68 27.53 216.27 37.03 C 223.03 31.46 231.48 28.33 240.24 28.16 C 240.27 28.16 240.3 28.16 240.34 28.16 L 240.88 28.16 C 240.91 28.16 240.95 28.16 240.98 28.16 C 246.23 28.16 251.42 29.24 256.23 31.34 C 260.85 33.37 265.04 36.27 268.56 39.89 C 275.8 47.29 279.86 57.24 279.87 67.59 C 279.87 67.59 279.87 67.6 279.87 67.6 L 279.87 101.43 Z " fill-rule="evenodd" fill="rgb(77,124,32)"/><path d=" M 305.085 102.407 C 288.897 102.098 275.646 115.656 275.646 131.847 L 275.646 194.801 L 269.871 194.801 L 269.871 67.601 C 269.871 51.409 256.62 37.851 240.433 38.161 C 224.746 38.461 212.122 51.271 212.122 67.031 L 212.122 194.801 L 206.347 194.801 L 206.347 39.448 C 206.347 23.256 193.096 9.698 176.908 10.008 C 161.221 10.308 148.597 23.119 148.597 38.878 L 148.597 194.801 L 142.822 194.801 L 142.822 68.323 C 142.822 52.131 129.571 38.573 113.384 38.883 C 97.697 39.183 85.073 51.993 85.073 67.752 L 85.073 238.108 L 62.227 206.693 C 52.848 193.796 34.789 190.944 21.891 200.324 C 8.995 209.704 6.143 227.762 15.523 240.66 L 106.19 365.33 C 112.71 374.296 123.127 379.6 134.212 379.6 L 276.847 379.6 C 292.925 379.6 306.892 368.538 310.575 352.886 L 329.71 271.561 C 332.158 261.157 333.395 250.505 333.395 239.817 L 333.395 131.277 C 333.396 115.518 320.772 102.708 305.085 102.407 L 305.085 102.407 Z " fill="rgb(136,204,0)"/></g><g class="righthand" data-svg-origin="323.28997802734375 0" transform="matrix(1,0,0,1,300,0)"><path d=" M 361.597 102.407 C 377.785 102.098 391.035 115.656 391.035 131.847 L 391.035 194.801 L 396.81 194.801 L 396.81 67.601 C 396.81 51.409 410.061 37.851 426.249 38.161 C 441.936 38.461 454.56 51.271 454.56 67.031 L 454.56 194.801 L 460.335 194.801 L 460.335 39.448 C 460.335 23.256 473.586 9.698 489.773 10.008 C 505.46 10.308 518.084 23.119 518.084 38.878 L 518.084 194.801 L 523.859 194.801 L 523.859 68.323 C 523.859 52.131 537.11 38.573 553.298 38.883 C 568.985 39.183 581.609 51.993 581.609 67.752 L 581.609 238.108 L 604.455 206.693 C 613.834 193.796 631.892 190.944 644.791 200.324 C 657.687 209.704 660.538 227.762 651.159 240.66 L 560.491 365.33 C 553.971 374.296 543.555 379.6 532.469 379.6 L 389.835 379.6 C 373.756 379.6 359.789 368.538 356.106 352.886 L 336.971 271.561 C 334.523 261.157 333.287 250.505 333.287 239.817 L 333.287 131.277 C 333.286 115.518 345.91 102.708 361.597 102.407 L 361.597 102.407 Z  M 528.07 37.92 C 530.92 35.53 534.1 33.56 537.5 32.07 C 542.31 29.96 547.5 28.88 552.75 28.88 C 552.79 28.88 552.82 28.88 552.85 28.88 L 553.39 28.88 C 553.43 28.88 553.46 28.88 553.49 28.88 C 563.67 29.08 573.37 33.27 580.49 40.53 C 587.62 47.8 591.61 57.58 591.61 67.75 L 591.61 207.35 L 596.37 200.81 C 596.37 200.81 596.37 200.81 596.37 200.81 C 603.69 190.75 615.4 184.79 627.83 184.8 C 636.04 184.8 644.04 187.41 650.68 192.24 C 660.73 199.56 666.69 211.27 666.68 223.7 C 666.68 231.91 664.07 239.91 659.24 246.54 L 568.58 371.21 C 568.58 371.21 568.58 371.21 568.58 371.21 C 560.18 382.76 546.74 389.6 532.47 389.6 C 532.47 389.6 532.47 389.6 532.47 389.6 L 389.83 389.6 C 389.83 389.6 389.83 389.6 389.83 389.6 C 379.77 389.6 370 386.2 362.11 379.95 C 354.23 373.7 348.68 364.97 346.37 355.18 C 346.37 355.18 346.37 355.18 346.37 355.18 L 327.24 273.85 C 327.24 273.85 327.24 273.85 327.24 273.85 C 324.61 262.7 323.29 251.28 323.29 239.82 C 323.29 239.82 323.29 239.82 323.29 239.82 L 323.29 131.28 L 323.29 131.28 C 323.28 121.1 327.28 111.32 334.4 104.06 C 341.53 96.79 351.23 92.61 361.4 92.41 C 361.44 92.41 361.47 92.41 361.5 92.41 L 362.04 92.4 C 362.08 92.4 362.11 92.4 362.14 92.4 C 367.39 92.4 372.58 93.49 377.39 95.59 C 380.79 97.08 383.96 99.05 386.81 101.43 L 386.81 67.6 C 386.81 67.6 386.81 67.59 386.81 67.59 C 386.82 57.24 390.89 47.29 398.12 39.89 C 401.64 36.27 405.83 33.37 410.45 31.34 C 415.26 29.24 420.46 28.16 425.7 28.16 C 425.74 28.16 425.77 28.16 425.8 28.16 L 426.34 28.16 C 426.38 28.16 426.41 28.16 426.44 28.16 C 435.2 28.33 443.65 31.46 450.41 37.03 C 451 27.53 454.99 18.55 461.65 11.74 C 465.17 8.12 469.36 5.22 473.98 3.19 C 478.79 1.09 483.98 0 489.23 0 C 489.26 0 489.29 0 489.33 0 L 489.87 0.01 C 489.9 0.01 489.93 0.01 489.97 0.01 C 499.98 0.2 509.53 4.26 516.63 11.32 C 523.73 18.38 527.83 27.91 528.07 37.92 Z " fill-rule="evenodd" fill="rgb(77,124,32)"/><path d=" M 361.597 102.407 C 377.785 102.098 391.035 115.656 391.035 131.847 L 391.035 194.801 L 396.81 194.801 L 396.81 67.601 C 396.81 51.409 410.061 37.851 426.249 38.161 C 441.936 38.461 454.56 51.271 454.56 67.031 L 454.56 194.801 L 460.335 194.801 L 460.335 39.448 C 460.335 23.256 473.586 9.698 489.773 10.008 C 505.46 10.308 518.084 23.119 518.084 38.878 L 518.084 194.801 L 523.859 194.801 L 523.859 68.323 C 523.859 52.131 537.11 38.573 553.298 38.883 C 568.985 39.183 581.609 51.993 581.609 67.752 L 581.609 238.108 L 604.455 206.693 C 613.834 193.796 631.892 190.944 644.791 200.324 C 657.687 209.704 660.538 227.762 651.159 240.66 L 560.491 365.33 C 553.971 374.296 543.555 379.6 532.469 379.6 L 389.835 379.6 C 373.756 379.6 359.789 368.538 356.106 352.886 L 336.971 271.561 C 334.523 261.157 333.287 250.505 333.287 239.817 L 333.287 131.277 C 333.286 115.518 345.91 102.708 361.597 102.407 L 361.597 102.407 Z " fill="rgb(136,204,0)"/></g></g></g></svg>' + '<p>&nbsp;</p>';

              // Move hands over eyes
              TweenMax.to(".palmsovereyes .lefthand", 0.5, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power1.easeInOut
              });
              TweenMax.to(".palmsovereyes .righthand", 0.5, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power1.easeInOut
              });
              
              // Blink quickly
              setTimeout(function() {
                blinkingExercise(UpandDownInstr);

                // Redo exercise
                redoEx.onclick = function() {
                  palmingInstr();
                  return false;
                };
              }, 19000);
            }, 6000);
          }, 3000);
        }
      });
    },
    UpandDownInstr   = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "Look down. Slowly lift your eyes in a straight line up as high as they will go, without stopping to close your eyes or blink. This should take about 10 seconds from start to finish.<br><br>",
          msg3 = "(Repeat 3 times for 10 seconds)";

      Swal.fire({
        title: "Up and Down",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="updownexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202"></rect></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)"></circle><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)"></circle><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look up"
            audioElement.setAttribute("src", "media/lookup.mp3");
            audioElement.play();

            // Look up
            TweenMax.to(".updownexer .leftiris", 0.1, {
              y: -90, 
              x: 0, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".updownexer .rightiris", 0.1, {
              y: -90, 
              x: 0, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Look down
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look down"
              audioElement.setAttribute("src", "media/lookdown.mp3");
              audioElement.play();

              TweenMax.to(".updownexer .leftiris", 0.1, {
                y: 90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".updownexer .rightiris", 0.1, {
                y: 90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 3000);
            
            // Look up
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look up"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".updownexer .leftiris", 0.1, {
                y: -90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".updownexer .rightiris", 0.1, {
                y: -90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 6000);
            
            // Look down
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look down"
              audioElement.setAttribute("src", "media/down.mp3");
              audioElement.play();

              TweenMax.to(".updownexer .leftiris", 0.1, {
                y: 90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".updownexer .rightiris", 0.1, {
                y: 90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 9000);
            
            // Look up
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look up"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".updownexer .leftiris", 0.1, {
                y: -90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".updownexer .rightiris", 0.1, {
                y: -90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 12000);
            
            // Look down
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look down"
              audioElement.setAttribute("src", "media/down.mp3");
              audioElement.play();

              TweenMax.to(".updownexer .leftiris", 0.1, {
                y: 90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".updownexer .rightiris", 0.1, {
                y: 90, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 15000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(LeftRightInstr);

              // Redo exercise
              redoEx.onclick = function() {
                UpandDownInstr();
                return false;
              };
            }, 18000);
          }, 3000);
        }
      });
    },
    LeftRightInstr   = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "Slowly move your eyes from as far to the left as you can see to as far to the right as you can see in a straight line, without stopping to close your eyes or blink. This should take about 10 seconds to finish. You will gradually strengthen your eye muscles if you practice this exercise.<br><br>",
          msg3 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg4 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg5 = "(Repeat 3 times for 10 seconds).";

      Swal.fire({
        title: "Left-Right",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="leftrightexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202"></rect></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)"></circle><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)"></circle><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look left"
              audioElement.setAttribute("src", "media/lookleft.mp3");
              audioElement.play();

            // Look left
            TweenMax.to(".leftrightexer .leftiris", 0.1, {
              x: -90, 
              y: 0, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".leftrightexer .rightiris", 0.1, {
              x: -90, 
              y: 0, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Look right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look right"
              audioElement.setAttribute("src", "media/lookright.mp3");
              audioElement.play();

              TweenMax.to(".leftrightexer .leftiris", 0.1, {
                x: 90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".leftrightexer .rightiris", 0.1, {
                x: 90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 3000);
            
            // Look left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look left"
              audioElement.setAttribute("src", "media/left.mp3");
              audioElement.play();

              TweenMax.to(".leftrightexer .leftiris", 0.1, {
                x: -90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".leftrightexer .rightiris", 0.1, {
                x: -90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 6000);
            
            // Look right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look right"
              audioElement.setAttribute("src", "media/right.mp3");
              audioElement.play();

              TweenMax.to(".leftrightexer .leftiris", 0.1, {
                x: 90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".leftrightexer .rightiris", 0.1, {
                x: 90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 9000);
            
            // Look left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look left"
              audioElement.setAttribute("src", "media/left.mp3");
              audioElement.play();

              TweenMax.to(".leftrightexer .leftiris", 0.1, {
                x: -90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".leftrightexer .rightiris", 0.1, {
                x: -90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 12000);
            
            // Look right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look right"
              audioElement.setAttribute("src", "media/right.mp3");
              audioElement.play();

              TweenMax.to(".leftrightexer .leftiris", 0.1, {
                x: 90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".leftrightexer .rightiris", 0.1, {
                x: 90, 
                y: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 15000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(diagonallyInstr);

              // Redo exercise
              redoEx.onclick = function() {
                LeftRightInstr();
                return false;
              };
            }, 18000);
          }, 3000);
        }
      });
    },
    diagonallyInstr  = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "Imagine a diagonal line from the upper-left corner of your vision to lower-right corner, and lead your eyes along the diagonal, without stopping to close your eyes or blink. This should take about 10 seconds from start to finish.<br><br>",
          msg3 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg4 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg5 = "(Repeat 3 times for 10 seconds).";

      Swal.fire({
        title: "Diagonally",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="diagexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202"></rect></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)"></circle><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)"></circle><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look top-left"
            audioElement.setAttribute("src", "media/looktopleft.mp3");
            audioElement.play();
            
            // Look top-left
            TweenMax.to(".diagexer .leftiris", 0.1, {
              y: -60, 
              x: -60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".diagexer .rightiris", 0.1, {
              y: -60, 
              x: -60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".diagexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 3000);
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".diagexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 6000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".diagexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 9000);
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".diagexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 12000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".diagexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 15000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(diagonallyInstrR);

              // Redo exercise
              redoEx.onclick = function() {
                diagonallyInstr();
                return false;
              };
            }, 18000);
          }, 3000);
        }
      });
    },
    diagonallyInstrR = function() {
      var msg1 = "And now, vice versa!<br>Repeat the previous exercise, but this time, begin with the upper-right corner down to the lower-left.<br><br>",
          msg2 = "(Repeat 3 times for 10 seconds).";

      Swal.fire({
        title: "Diagonally Reverse",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="diagrexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202"></rect></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)"></circle><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)"></circle><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look top-right"
            audioElement.setAttribute("src", "media/looktopright.mp3");
            audioElement.play();
            
            // Look top-right
            TweenMax.to(".diagrexer .leftiris", 0.1, {
              y: -60, 
              x: 60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".diagrexer .rightiris", 0.1, {
              y: -60, 
              x: 60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".diagrexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagrexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 3000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/looktopright.mp3");
              audioElement.play();

              TweenMax.to(".diagrexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagrexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 6000);
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".diagrexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagrexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 9000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/looktopright.mp3");
              audioElement.play();

              TweenMax.to(".diagrexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagrexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 12000);
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".diagrexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".diagrexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 15000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(rectangleInstr);

              // Redo exercise
              redoEx.onclick = function() {
                diagonallyInstrR();
                return false;
              };
            }, 18000);
          }, 3000);
        }
      });
    },
    rectangleInstr   = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "\"Drawing\" a rectangle with your eyes.<br>Imagine that you are \"drawing\" a rectangle in the air. Bring your gave to the lower-left corner and lift your eyes to the upper-left corner. Bring your gaze across a straight line to the upper-right corner, then down to the lower-right corner. Then, across a straight line, thus returning your gaze to the starting point.<br><br>",
          msg3 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg4 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg5 = "(Repeat 2 times for 10 seconds).";

      Swal.fire({
        title: "Rectangle",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="rectexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202"></rect></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)"></circle><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)"></circle><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look bottom-left"
            audioElement.setAttribute("src", "media/lookbottomleft.mp3");
            audioElement.play();
            
            // Look bottom-left
            TweenMax.to(".rectexer .leftiris", 0.1, {
              y: 60, 
              x: -60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".rectexer .rightiris", 0.1, {
              y: 60, 
              x: -60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 2000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/topright.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 4000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 6000);
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 8000);
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 10000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/topright.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 12000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 14000);
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 16000);
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 18000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/topright.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 20000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 22000);
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".rectexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 24000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(rectangleInstrR);

              // Redo exercise
              redoEx.onclick = function() {
                rectangleInstr();
                return false;
              };
            }, 26000);
          }, 3000);
        }
      });
    },
    rectangleInstrR  = function() {
      var msg1 = "Again vice versa!<br>Repeat the exercise in the other direction. \"Draw\" rectangle in the air from the upper-left corner and proceed counterclockwise.<br><br>",
          msg2 = "(Repeat 2 times for 10 seconds).";

      Swal.fire({
        title: "Rectangle Reverse",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="rectrexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202"></rect></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)"></circle><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)"></circle><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)"></circle><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)"></circle></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"></stop><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"></stop></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)"></circle><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)"></circle></clipPath></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/looktopleft.mp3");
              audioElement.play();
            
            // Look top-left
            TweenMax.to(".rectrexer .leftiris", 0.1, {
              y: -60, 
              x: -60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".rectrexer .rightiris", 0.1, {
              y: -60, 
              x: -60, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 2000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 4000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/topright.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 6000);
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 8000);
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 10000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 12000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/topright.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 14000);
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 16000);
            
            // Look bottom-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-left"
              audioElement.setAttribute("src", "media/bottomleft.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: 60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 18000);
            
            // Look bottom-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look bottom-right"
              audioElement.setAttribute("src", "media/bottomright.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: 60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 20000);
            
            // Look top-right
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-right"
              audioElement.setAttribute("src", "media/topright.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: -60, 
                x: 60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 22000);
            
            // Look top-left
            runTimer = setTimeout(function() {
              exHeader.textContent = "Look top-left"
              audioElement.setAttribute("src", "media/topleft.mp3");
              audioElement.play();

              TweenMax.to(".rectrexer .leftiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".rectrexer .rightiris", 0.1, {
                y: -60, 
                x: -60, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 24000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(clockInstr);

              // Redo exercise
              redoEx.onclick = function() {
                rectangleInstrR();
                return false;
              };
            }, 26000);
          }, 3000);
        }
      });
    },
    clockInstr       = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "Imagine you are looking at a clock. Starting from number 12, look at where the number 3 would be, then 6, 9 and finally returning to the starting position at 12.<br><br>",
          msg3 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg4 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg5 = "(Repeat 2 times for 10 seconds).";
      
      Swal.fire({
        title: "Clock",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="clockexer" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate;width:100%" viewBox="0 0 501 202"><defs><clipPath id="_clipPath_uCuwonDsBbQW2bWC299jsoOKGKeH84FI"><rect width="501" height="202"/></clipPath></defs><g clip-path="url(#_clipPath_uCuwonDsBbQW2bWC299jsoOKGKeH84FI)"><g class="eye righteye"><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="101" fill="#8C0"/><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="89.154" fill="#549110"/><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="86.556" fill="#FFF"/><clipPath id="_clipPath_tDrXxqyoQBGkciCx6vaZdbLlRHyEpbss"><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="86.556" fill="#FFF"/></clipPath><g clip-path="url(#_clipPath_tDrXxqyoQBGkciCx6vaZdbLlRHyEpbss)"><radialGradient id="_rgradient_0" fx=".5" fy=".5" cx=".5" cy=".5" r="1" gradientTransform="translate(217.672 -83.07) scale(305.865)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#d6edb2"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.605" cy="69.863" r="152.933" fill="url(#_rgradient_0)"/><g class="rightEye"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g></g><g class="eye lefteye"><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="101" fill="#8C0"/><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="89.154" fill="#549110"/><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="86.556" fill="#FFF"/><clipPath id="_clipPath_n6u2bhKYRf5HYCRtWKfY7K0qcHBXMhby"><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="86.556" fill="#FFF"/></clipPath><g clip-path="url(#_clipPath_n6u2bhKYRf5HYCRtWKfY7K0qcHBXMhby)"><radialGradient id="_rgradient_1" fx=".5" fy=".5" cx=".5" cy=".5" r="1" gradientTransform="translate(-81.328 -83.07) scale(305.865)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#d6edb2"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.605" cy="69.863" r="152.933" fill="url(#_rgradient_1)"/><g class="leftEye"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look up at 12:00"
              audioElement.setAttribute("src", "media/moveeyescwfrom12clock.mp3");
              audioElement.play();
            
            // Look up at 12:00
            TweenLite.defaultEase = Linear.easeNone;
            TweenMax.to(".clockexer .rightEye", 0.1, {
              y: -90, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".clockexer .leftEye", 0.1, {
              y: -90, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Move around the clock to 3:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "Move around the clock to 3:00"

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 90,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 90,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 2000);
            
            // To 6:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 6:00"

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 180,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 180,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 4000);
            
            // To 9:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 9:00"

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 270,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 270,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 6000);
            
            // To 12:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 12:00"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 360,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 360,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 8000);
            
            // To 3:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 3:00"
              audioElement.setAttribute("src", "media/right.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 360 + 90,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 360 + 90,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 10000);
            
            // To 6:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 6:00"
              audioElement.setAttribute("src", "media/down.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 360 + 180,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 360 + 180,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 12000);
            
            // To 9:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 9:00"
              audioElement.setAttribute("src", "media/left.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 360 + 270,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 360 + 270,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 14000);
            
            // To 12:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 12:00"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 720,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 720,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 16000);
            
            // To 3:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 3:00"
              audioElement.setAttribute("src", "media/right.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 720 + 90,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 720 + 90,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 18000);
            
            // To 6:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 6:00"
              audioElement.setAttribute("src", "media/down.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 720 + 180,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 720 + 180,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 20000);
            
            // To 9:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 9:00"
              audioElement.setAttribute("src", "media/left.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 720 + 270,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 720 + 270,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 22000);
            
            // Back to 12:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "Back to 12:00"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: 1080,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: 1080,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 24000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(clockInstrR);

              // Redo exercise
              redoEx.onclick = function() {
                clockInstr();
                return false;
              };
            }, 26000);
          }, 3000);
        }
      });
    },
    clockInstrR      = function() {
      var msg1 = "Again vice versa!<br>Once again, imagine your clock. Start from number 12, then look where the number 9 would be, then 6, 3, and back to 12.<br><br>",
          msg2 = "(Repeat 2 times for 10 seconds).";

      Swal.fire({
        title: "Clock Reverse",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="clockexer" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate;width:100%" viewBox="0 0 501 202"><defs><clipPath id="_clipPath_uCuwonDsBbQW2bWC299jsoOKGKeH84FI"><rect width="501" height="202"/></clipPath></defs><g clip-path="url(#_clipPath_uCuwonDsBbQW2bWC299jsoOKGKeH84FI)"><g class="eye righteye"><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="101" fill="#8C0"/><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="89.154" fill="#549110"/><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="86.556" fill="#FFF"/><clipPath id="_clipPath_tDrXxqyoQBGkciCx6vaZdbLlRHyEpbss"><circle vector-effect="non-scaling-stroke" cx="400" cy="101" r="86.556" fill="#FFF"/></clipPath><g clip-path="url(#_clipPath_tDrXxqyoQBGkciCx6vaZdbLlRHyEpbss)"><radialGradient id="_rgradient_0" fx=".5" fy=".5" cx=".5" cy=".5" r="1" gradientTransform="translate(217.672 -83.07) scale(305.865)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#d6edb2"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.605" cy="69.863" r="152.933" fill="url(#_rgradient_0)"/><g class="rightEye"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)"></circle></g></g></g><g class="eye lefteye"><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="101" fill="#8C0"/><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="89.154" fill="#549110"/><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="86.556" fill="#FFF"/><clipPath id="_clipPath_n6u2bhKYRf5HYCRtWKfY7K0qcHBXMhby"><circle vector-effect="non-scaling-stroke" cx="101" cy="101" r="86.556" fill="#FFF"/></clipPath><g clip-path="url(#_clipPath_n6u2bhKYRf5HYCRtWKfY7K0qcHBXMhby)"><radialGradient id="_rgradient_1" fx=".5" fy=".5" cx=".5" cy=".5" r="1" gradientTransform="translate(-81.328 -83.07) scale(305.865)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#d6edb2"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.605" cy="69.863" r="152.933" fill="url(#_rgradient_1)"/><g class="leftEye"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)"></circle><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)"></circle><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)"></circle></g></g></g></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Look up at 12:00"
            audioElement.setAttribute("src", "media/moveeyesccwfrom12clock.mp3");
            audioElement.play();
            
            // Look up at 12:00
            TweenLite.defaultEase = Linear.easeNone;
            TweenMax.to(".clockexer .rightEye", 0.1, {
              y: -90, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".clockexer .leftEye", 0.1, {
              y: -90, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Move around the clock to 9:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "Move around the clock to 9:00"

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -90,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -90,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 2000);
            
            // To 6:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 6:00"

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -180,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -180,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 4000);
            
            // To 3:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 3:00"

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -270,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -270,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 6000);
            
            // To 12:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 12:00"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -360,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -360,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 8000);
            
            // To 9:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 9:00"
              audioElement.setAttribute("src", "media/left.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -360 + -90,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -360 + -90,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 10000);
            
            // To 6:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 6:00"
              audioElement.setAttribute("src", "media/down.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -360 + -180,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -360 + -180,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 12000);
            
            // To 3:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 3:00"
              audioElement.setAttribute("src", "media/right.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -360 + -270,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -360 + -270,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 14000);
            
            // To 12:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 12:00"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -720,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -720,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 16000);
            
            // To 9:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 9:00"
              audioElement.setAttribute("src", "media/left.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -720 + -90,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -720 + -90,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 18000);
            
            // To 6:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 6:00"
              audioElement.setAttribute("src", "media/down.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -720 + -180,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -720 + -180,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 20000);
            
            // To 3:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "To 3:00"
              audioElement.setAttribute("src", "media/right.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -720 + -270,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -720 + -270,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 22000);
            
            // Back to 12:00
            runTimer = setTimeout(function() {
              exHeader.textContent = "Back to 12:00"
              audioElement.setAttribute("src", "media/up.mp3");
              audioElement.play();

              TweenMax.to(".clockexer .rightEye", 2, {
                rotation: -1080,
                svgOrigin: "400 101",
                repeat: 0,
              });
              TweenMax.to(".clockexer .leftEye", 2, {
                rotation: -1080,
                svgOrigin: "100 101",
                repeat: 0,
              });
            }, 24000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              blinkingExercise(focusingInstr);

              // Redo exercise
              redoEx.onclick = function() {
                clockInstrR();
                return false;
              };
            }, 26000);
          }, 3000);
        }
      });
    },
    focusingInstr    = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "The purpose of this exercise is training to correct focus and alignment of your eyes. This exercise will serve as good practice for automatically adjusting the concentration of your view.<br><br>",
          msg3 = "Raise your hand in front of you about 5 inches from your eyes, and raise your thumb. Focus your gaze on the tip of your thumb. Do not move your head, start moving your hand along a straight path, do not remove your gaze from the tip of your thumb.<br><br>",
          msg4 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg5 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg6 = "(Exercise duration 30 seconds).";

      Swal.fire({
        title: "Focusing 1",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="focusingexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_6uzJjX1fWln22tb2OQNRj0KxVt0sC9h1"><rect width="501" height="202" /></clipPath></defs><g clip-path="url(#_clipPath_6uzJjX1fWln22tb2OQNRj0KxVt0sC9h1)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_ORyJFUskBxYzswREZBlp7o2RTjP5CQ1l"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_ORyJFUskBxYzswREZBlp7o2RTjP5CQ1l)"><g><radialGradient id="_rgradient_2" fx="0.49999979612112244" fy="0.4999981560039713" cx="0.49999979612112244" cy="0.4999981560039713" r="1" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_2)" /><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)" /></g></g></g></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_GvC6xYLmFc9loO1ZIN5JFqVrMCVk5zMP"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_GvC6xYLmFc9loO1ZIN5JFqVrMCVk5zMP)"><g><radialGradient id="_rgradient_3" fx="0.49999979612112255" fy="0.49999815600397146" cx="0.49999979612112255" cy="0.49999815600397146" r="1" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_3)" /><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)" /></g></g></g></g></g><g class="hand"><g><path d=" M 348.366 187.107 L 348.366 180.528 L 269.422 180.528 L 269.422 88.354 C 269.422 81.078 262.205 68.691 249.048 68.691 C 235.89 68.691 229.95 81.776 229.95 88.354 L 229.95 200.264 C 229.95 200.264 206.201 215.402 197.056 226.579 C 188.932 235.743 187.905 247.243 197.056 259.472 L 214.766 284.774 C 234.068 304.082 253.541 318.68 280.974 318.68 L 326.229 318.68 C 359.78 318.68 387.838 291.991 387.838 258.459 L 387.838 193.686 L 348.366 187.107 Z " fill="rgb(136,204,0)" /><path d=" M 269.422 227.145 C 269.422 237.69 278.303 246.315 289.158 246.315 C 300.013 246.315 308.894 237.69 308.894 227.145 L 308.894 179.949 C 308.894 169.41 300.013 160.792 289.158 160.792 C 278.303 160.792 269.422 169.41 269.422 179.949 L 269.422 227.145 Z  M 308.894 227.145 C 308.894 237.69 317.775 246.315 328.63 246.315 C 339.485 246.315 348.366 237.69 348.366 227.145 L 348.366 179.949 C 348.366 169.41 339.485 160.792 328.63 160.792 C 317.775 160.792 308.894 169.41 308.894 179.949 L 308.894 227.145 Z  M 348.366 233.723 C 348.366 244.269 357.247 252.894 368.102 252.894 C 378.957 252.894 387.838 244.269 387.838 233.723 L 387.838 186.528 C 387.838 175.989 378.957 167.371 368.102 167.371 C 357.247 167.371 348.366 175.989 348.366 186.528 L 348.366 233.723 Z " fill="rgb(136,204,0)" /></g><path d=" M 235.89 89.085 C 235.969 81.374 241.903 75.191 249.192 75.269 C 256.449 75.355 262.284 81.684 262.198 89.368 C 262.126 97.078 235.818 96.788 235.89 89.085 Z " fill="rgb(248,255,230)" /><path d=" M 229.95 259.472 L 229.95 200.264 C 229.95 200.264 220.003 206.613 210.51 214.112 L 229.95 259.472 Z " fill="rgb(98,147,2)" /></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Focus on the tip of your index finger"
            audioElement.setAttribute("src", "media/focusontipofindexfinger.mp3");
            audioElement.play();

            // Focus on the tip of your finger
            TweenMax.to(".focusingexer .leftiris", 0.1, {
              y: 10, 
              x: 40, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".focusingexer .rightiris", 0.1, {
              y: 10, 
              x: -40, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".focusingexer .hand", 0.1, {
              y: 20, 
              x: 0, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Move it back and forth slowly
            runTimer = setTimeout(function() {
              exHeader.textContent = "Move it back and forth slowly"
              audioElement.setAttribute("src", "media/moveitbackandforth.mp3");
              audioElement.play();
              
              TweenMax.to(".focusingexer .leftiris", 3, {
                y: 20, 
                x: 20, 
                yoyo: true, 
                repeat: -1,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .rightiris", 3, {
                y: 20, 
                x: -20, 
                yoyo: true, 
                repeat: -1,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .hand", 3, {
                y: 20, 
                x: -50, 
                scale: 2,
                yoyo: true, 
                repeat: -1,
                ease: Power2.easeInOut
              });
            }, 3000);
            
            // Forwards
            runTimer = setTimeout(function() {
              exHeader.textContent = "Forwards"
              audioElement.setAttribute("src", "media/forwards.mp3");
              audioElement.play();
            }, 9000);
            
            // Backwards
            runTimer = setTimeout(function() {
              exHeader.textContent = "Backwards"
              audioElement.setAttribute("src", "media/back.mp3");
              audioElement.play();
            }, 12000);
            
            // Forwards
            runTimer = setTimeout(function() {
              exHeader.textContent = "Forwards"
              audioElement.setAttribute("src", "media/forwards.mp3");
              audioElement.play();
            }, 15000);
            
            // Backwards
            runTimer = setTimeout(function() {
              exHeader.textContent = "Backwards"
              audioElement.setAttribute("src", "media/back.mp3");
              audioElement.play();
            }, 18000);
            
            // Forwards
            runTimer = setTimeout(function() {
              exHeader.textContent = "Forwards"
              audioElement.setAttribute("src", "media/forwards.mp3");
              audioElement.play();
            }, 21000);
            
            // Backwards
            runTimer = setTimeout(function() {
              exHeader.textContent = "Backwards"
              audioElement.setAttribute("src", "media/back.mp3");
              audioElement.play();
            }, 24000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              $("#nextEx").attr("aria-label", "Last Exercise").text("Last Exercise");
              blinkingExercise(focusing2Instr);

              // Redo exercise
              redoEx.onclick = function() {
                focusingInstr();
                return false;
              };
            }, 27000);
          }, 3000);
        }
      });
    },
    focusing2Instr   = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "The purpose of this exercise is training to correct focus and alignment of your eyes. This exercise will serve as good practice for automatically adjusting the concentration of your view.<br><br>",
          msg3 = "Raise your hand in front of you about 5 inches from your eyes, and raise your thumb. Focus your gaze on the tip of your thumb. Do not move your head, then focus on a point 10 meters away.<br><br>",
          msg4 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg5 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg6 = "(Repeat 3 times for 10 seconds)";

      Swal.fire({
        title: "Focusing 2",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      }).then((result) => {
        if (result.value) {
          // Ready your exercise
          exerciseHTML = '<p>&nbsp;</p>' + '<svg class="focusingexer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="_clipPath_6uzJjX1fWln22tb2OQNRj0KxVt0sC9h1"><rect width="501" height="202" /></clipPath></defs><g clip-path="url(#_clipPath_6uzJjX1fWln22tb2OQNRj0KxVt0sC9h1)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_ORyJFUskBxYzswREZBlp7o2RTjP5CQ1l"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_ORyJFUskBxYzswREZBlp7o2RTjP5CQ1l)"><g><radialGradient id="_rgradient_2" fx="0.49999979612112244" fy="0.4999981560039713" cx="0.49999979612112244" cy="0.4999981560039713" r="1" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_2)" /><g class="rightiris"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)" /></g></g></g></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_GvC6xYLmFc9loO1ZIN5JFqVrMCVk5zMP"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_GvC6xYLmFc9loO1ZIN5JFqVrMCVk5zMP)"><g><radialGradient id="_rgradient_3" fx="0.49999979612112255" fy="0.49999815600397146" cx="0.49999979612112255" cy="0.49999815600397146" r="1" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_3)" /><g class="leftiris"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)" /></g></g></g></g></g><g class="hand"><g><path d=" M 348.366 187.107 L 348.366 180.528 L 269.422 180.528 L 269.422 88.354 C 269.422 81.078 262.205 68.691 249.048 68.691 C 235.89 68.691 229.95 81.776 229.95 88.354 L 229.95 200.264 C 229.95 200.264 206.201 215.402 197.056 226.579 C 188.932 235.743 187.905 247.243 197.056 259.472 L 214.766 284.774 C 234.068 304.082 253.541 318.68 280.974 318.68 L 326.229 318.68 C 359.78 318.68 387.838 291.991 387.838 258.459 L 387.838 193.686 L 348.366 187.107 Z " fill="rgb(136,204,0)" /><path d=" M 269.422 227.145 C 269.422 237.69 278.303 246.315 289.158 246.315 C 300.013 246.315 308.894 237.69 308.894 227.145 L 308.894 179.949 C 308.894 169.41 300.013 160.792 289.158 160.792 C 278.303 160.792 269.422 169.41 269.422 179.949 L 269.422 227.145 Z  M 308.894 227.145 C 308.894 237.69 317.775 246.315 328.63 246.315 C 339.485 246.315 348.366 237.69 348.366 227.145 L 348.366 179.949 C 348.366 169.41 339.485 160.792 328.63 160.792 C 317.775 160.792 308.894 169.41 308.894 179.949 L 308.894 227.145 Z  M 348.366 233.723 C 348.366 244.269 357.247 252.894 368.102 252.894 C 378.957 252.894 387.838 244.269 387.838 233.723 L 387.838 186.528 C 387.838 175.989 378.957 167.371 368.102 167.371 C 357.247 167.371 348.366 175.989 348.366 186.528 L 348.366 233.723 Z " fill="rgb(136,204,0)" /></g><path d=" M 235.89 89.085 C 235.969 81.374 241.903 75.191 249.192 75.269 C 256.449 75.355 262.284 81.684 262.198 89.368 C 262.126 97.078 235.818 96.788 235.89 89.085 Z " fill="rgb(248,255,230)" /><path d=" M 229.95 259.472 L 229.95 200.264 C 229.95 200.264 220.003 206.613 210.51 214.112 L 229.95 259.472 Z " fill="rgb(98,147,2)" /></g></g></svg>' + '<p>&nbsp;</p>';
          readyExercise(exerciseHTML);

          // Start audio for audio exercise
          runTimer = setTimeout(function() {
            exHeader.textContent = "Focus on the tip of your index finger"
            audioElement.setAttribute("src", "media/focusontipofindexfinger.mp3");
            audioElement.play();

            // Focus on the tip of your finger
            TweenMax.to(".focusingexer .leftiris", 0.1, {
              y: 10, 
              x: 40, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".focusingexer .rightiris", 0.1, {
              y: 10, 
              x: -40, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            TweenMax.to(".focusingexer .hand", 0.1, {
              y: 20, 
              x: 0, 
              yoyo: true, 
              repeat: 0,
              ease: Power2.easeInOut
            });
            
            // Focus on something away
            runTimer = setTimeout(function() {
              exHeader.textContent = "Focus on something away"
              audioElement.setAttribute("src", "media/focusonsomethingaway.mp3");
              audioElement.play();
              
              TweenMax.to(".focusingexer .leftiris", 0.1, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .rightiris", 0.1, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .hand", 0.1, {
                y: 20, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 3000);
            
            // Focus on the tip of your index finger
            runTimer = setTimeout(function() {
              exHeader.textContent = "Focus on the tip of your index finger"
              audioElement.setAttribute("src", "media/focusontipofindexfinger.mp3");
              audioElement.play();

              TweenMax.to(".focusingexer .leftiris", 0.1, {
                y: 10, 
                x: 40, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .rightiris", 0.1, {
                y: 10, 
                x: -40, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .hand", 0.1, {
                y: 20, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 6000);
            
            // Focus on something away
            runTimer = setTimeout(function() {
              exHeader.textContent = "Focus on something away"
              audioElement.setAttribute("src", "media/focusonsomethingaway.mp3");
              audioElement.play();
              
              TweenMax.to(".focusingexer .leftiris", 0.1, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .rightiris", 0.1, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .hand", 0.1, {
                y: 20, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 9000);
            
            // Focus on the tip of your index finger
            runTimer = setTimeout(function() {
              exHeader.textContent = "Focus on the tip of your index finger"
              audioElement.setAttribute("src", "media/focusontipofindexfinger.mp3");
              audioElement.play();

              TweenMax.to(".focusingexer .leftiris", 0.1, {
                y: 10, 
                x: 40, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .rightiris", 0.1, {
                y: 10, 
                x: -40, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .hand", 0.1, {
                y: 20, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 12000);
            
            // Focus on something away
            runTimer = setTimeout(function() {
              exHeader.textContent = "Focus on something away"
              audioElement.setAttribute("src", "media/focusonsomethingaway.mp3");
              audioElement.play();
              
              TweenMax.to(".focusingexer .leftiris", 0.1, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .rightiris", 0.1, {
                y: 0, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
              TweenMax.to(".focusingexer .hand", 0.1, {
                y: 20, 
                x: 0, 
                yoyo: true, 
                repeat: 0,
                ease: Power2.easeInOut
              });
            }, 15000);
              
            // Blink quickly
            runTimer = setTimeout(function() {
              $("#nextEx").attr("aria-label", "Workout Completed").text("Workout Completed");
              blinkingExercise(workoutCompleted);

              // Redo exercise
              redoEx.onclick = function() {
                focusing2Instr();
                return false;
              };
            }, 18000);
          }, 3000);
        }
      });
    },
    workoutCompleted = function() {
      alertify.log("Workout completed!");
      audioElement.setAttribute("src", "media/workoutcompleted.mp3");
      audioElement.play();
      
      $("[data-display=mainpage]").fadeIn();
      setTimeout(function() {
        clearTimeout(runTimer);
        $(".home.leftbtns, .home.rightbtns").removeClass("hide");
        $(".exercise.rightbtns").addClass("hide");
        $("[data-display=exercise]").fadeOut();

        // Initialize blinking
        $(function() {
          $("[data-display=mainpage]").prepend('<svg class="mainpageeyes" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMax meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202" /></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)" /><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R)" class="eyelids"><path d=" M 312.5 13.5 L 487.5 13.5 L 487.5 102.516 C 427.833 122.272 369.51 122.282 312.5 102.516 L 312.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 312.5 102.516 C 367.722 110.717 426.066 110.727 487.5 102.516 L 487.5 191.532 L 312.5 191.532 L 312.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)" /><g><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i)" class="eyelids"><path d=" M 13.5 13.5 L 188.5 13.5 L 188.5 102.516 C 128.833 122.272 70.51 122.282 13.5 102.516 L 13.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 13.5 102.516 C 68.722 110.717 127.066 110.727 188.5 102.516 L 188.5 191.532 L 13.5 191.532 L 13.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g></g></g></svg>');
        });
        TweenMax.to(".mainpageeyes .toplid", 0.15, {
          y: -105, 
          x: 0, 
          force3D: true, 
          yoyo: false, 
          repeat: -1,
          repeatDelay: 4,
          ease: Power1.easeOut
        });
        TweenMax.to(".mainpageeyes .bottomlid", 0.15, {
          y: 100, 
          x: 0, 
          force3D: true, 
          yoyo: false, 
          repeat: -1,
          repeatDelay: 4,
          ease: Power1.easeOut
        });
        
        // Reset Exercise page
        exHeader.textContent = "Palming Exercise";
        $(function() {
          palmingoutput.innerHTML = '<p>&nbsp;</p>' + '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%; max-width: 300px;" viewBox="0 0 300 300" preserveAspectRatio="xMidYMin meet"><g><g class="lefthand"><path d=" M 44.123 251 L 72.979 251 C 75.635 251 77.788 248.847 77.788 246.191 L 77.788 164.434 C 77.788 161.778 75.635 159.625 72.979 159.625 L 44.123 159.625 C 41.467 159.625 39.314 161.778 39.314 164.434 L 39.314 246.191 C 39.314 248.847 41.467 251 44.123 251 Z " fill="rgb(77,124,32)" /><path d=" M 104.844 164.347 L 121.071 135.579 L 134.277 60.733 C 134.864 57.419 137.311 54.548 140.625 53.952 C 142.92 53.521 145.288 54.135 147.086 55.626 C 148.884 57.117 149.925 59.33 149.926 61.666 L 149.926 145.197 L 140.409 199.142 C 137.569 215.229 123.589 226.955 107.254 226.954 L 72.979 226.954 L 72.979 169.243 L 96.467 169.243 C 99.939 169.243 103.142 167.372 104.844 164.347 Z " fill="rgb(136,204,0)" /><path d=" M 107.258 231.779 L 107.258 231.779 L 68.151 231.779 L 68.151 164.421 L 96.474 164.421 C 96.474 164.421 96.474 164.421 96.474 164.421 C 98.202 164.421 99.8 163.485 100.635 161.988 C 100.635 161.973 100.649 161.973 100.649 161.973 L 116.459 133.925 L 129.519 59.9 C 129.965 57.366 131.117 55.004 132.845 53.104 C 134.645 51.088 137.064 49.72 139.728 49.216 C 140.505 49.072 141.283 49 142.075 49 C 145.027 49 147.892 50.022 150.167 51.909 C 153.061 54.313 154.746 57.898 154.746 61.657 C 154.746 61.657 154.746 61.671 154.746 61.671 L 154.746 145.616 L 145.156 199.986 C 145.156 199.986 145.156 199.986 145.156 199.986 C 143.587 208.885 138.921 216.963 131.996 222.78 C 125.07 228.583 116.301 231.779 107.258 231.779 C 107.258 231.779 107.258 231.779 107.258 231.779 Z  M 109.044 166.711 L 125.675 137.236 L 139.022 61.57 C 139.022 61.57 139.022 61.556 139.022 61.556 C 139.166 60.807 139.497 60.116 140.016 59.554 C 140.405 59.108 140.937 58.806 141.513 58.69 C 141.7 58.662 141.888 58.647 142.075 58.647 C 142.78 58.647 143.457 58.892 144.004 59.338 C 144.695 59.914 145.099 60.764 145.099 61.671 L 145.099 144.781 L 135.653 198.302 C 134.487 204.983 130.988 211.03 125.79 215.379 C 120.606 219.742 114.04 222.132 107.258 222.132 L 107.258 222.132 L 77.798 222.132 L 77.798 174.069 L 96.459 174.069 C 101.672 174.069 106.495 171.246 109.044 166.711 Z " fill-rule="evenodd" fill="rgb(77,124,32)" /></g><g class="righthand"><path d=" M 255.877 251 L 227.022 251 C 224.366 251 222.213 248.847 222.213 246.191 L 222.213 164.434 C 222.213 161.778 224.366 159.625 227.022 159.625 L 255.877 159.625 C 258.533 159.625 260.686 161.778 260.686 164.434 L 260.686 246.191 C 260.686 248.847 258.533 251 255.877 251 Z " fill="rgb(77,124,32)" /><path d=" M 195.156 164.347 L 178.93 135.579 L 165.723 60.733 C 165.137 57.419 162.689 54.548 159.375 53.952 C 157.08 53.521 154.712 54.135 152.914 55.626 C 151.117 57.117 150.076 59.33 150.074 61.666 L 150.074 145.197 L 159.592 199.142 C 162.432 215.229 176.411 226.955 192.746 226.954 L 227.022 226.954 L 227.022 169.243 L 203.534 169.243 C 200.061 169.243 196.858 167.372 195.156 164.347 Z " fill="rgb(136,204,0)" /><path d=" M 192.742 231.779 L 192.742 231.779 L 231.849 231.779 L 231.849 164.421 L 203.527 164.421 C 203.527 164.421 203.527 164.421 203.527 164.421 C 201.799 164.421 200.201 163.485 199.365 161.988 C 199.365 161.973 199.351 161.973 199.351 161.973 L 183.541 133.925 L 170.481 59.9 C 170.035 57.366 168.883 55.004 167.155 53.104 C 165.355 51.088 162.936 49.72 160.272 49.216 C 159.495 49.072 158.717 49 157.925 49 C 154.974 49 152.108 50.022 149.833 51.909 C 146.939 54.313 145.254 57.898 145.254 61.657 C 145.254 61.657 145.254 61.671 145.254 61.671 L 145.254 145.616 L 154.844 199.986 C 154.844 199.986 154.844 199.986 154.844 199.986 C 156.414 208.885 161.079 216.963 168.005 222.78 C 174.93 228.583 183.699 231.779 192.742 231.779 C 192.742 231.779 192.742 231.779 192.742 231.779 Z  M 190.956 166.711 L 174.326 137.236 L 160.978 61.57 C 160.978 61.57 160.978 61.556 160.978 61.556 C 160.834 60.807 160.503 60.116 159.984 59.554 C 159.596 59.108 159.063 58.806 158.487 58.69 C 158.3 58.662 158.113 58.647 157.925 58.647 C 157.22 58.647 156.543 58.892 155.996 59.338 C 155.305 59.914 154.902 60.764 154.902 61.671 L 154.902 144.781 L 164.347 198.302 C 165.514 204.983 169.013 211.03 174.211 215.379 C 179.394 219.742 185.96 222.132 192.742 222.132 L 192.742 222.132 L 222.202 222.132 L 222.202 174.069 L 203.541 174.069 C 198.329 174.069 193.505 171.246 190.956 166.711 Z " fill-rule="evenodd" fill="rgb(77,124,32)" /></g></g></svg>' + '<p>&nbsp;</p>';
              });
        
        // Hide next exercise button
        nextEx.classList.add("hide");
      }, 350);
    },
    workoutQuit      = function() {
      alertify.log("Quitted Workout!");
      audioElement.setAttribute("src", "media/workoutquit.mp3");
      audioElement.play();
      
      $("[data-display=mainpage]").fadeIn();
      setTimeout(function() {
        clearTimeout(runTimer);
        $(".home.leftbtns, .home.rightbtns").removeClass("hide");
        $(".exercise.rightbtns").addClass("hide");
        $("[data-display=exercise]").fadeOut();

        // Initialize blinking
        $(function() {
          $("[data-display=mainpage]").prepend('<svg class="mainpageeyes" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" preserveAspectRatio="xMidYMax meet"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202" /></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)" /><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R)" class="eyelids"><path d=" M 312.5 13.5 L 487.5 13.5 L 487.5 102.516 C 427.833 122.272 369.51 122.282 312.5 102.516 L 312.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 312.5 102.516 C 367.722 110.717 426.066 110.727 487.5 102.516 L 487.5 191.532 L 312.5 191.532 L 312.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)" /><g><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i)" class="eyelids"><path d=" M 13.5 13.5 L 188.5 13.5 L 188.5 102.516 C 128.833 122.272 70.51 122.282 13.5 102.516 L 13.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 13.5 102.516 C 68.722 110.717 127.066 110.727 188.5 102.516 L 188.5 191.532 L 13.5 191.532 L 13.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g></g></g></svg>');
        });
        TweenMax.to(".mainpageeyes .toplid", 0.15, {
          y: -105, 
          x: 0, 
          force3D: true, 
          yoyo: false, 
          repeat: -1,
          repeatDelay: 4,
          ease: Power1.easeOut
        });
        TweenMax.to(".mainpageeyes .bottomlid", 0.15, {
          y: 100, 
          x: 0, 
          force3D: true, 
          yoyo: false, 
          repeat: -1,
          repeatDelay: 4,
          ease: Power1.easeOut
        });
        
        // Reset Exercise page
        exHeader.textContent = "Palming Exercise";
        $(function() {
          palmingoutput.innerHTML = '<p>&nbsp;</p>' + '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%; max-width: 300px;" viewBox="0 0 300 300" preserveAspectRatio="xMidYMin meet"><g><g class="lefthand"><path d=" M 44.123 251 L 72.979 251 C 75.635 251 77.788 248.847 77.788 246.191 L 77.788 164.434 C 77.788 161.778 75.635 159.625 72.979 159.625 L 44.123 159.625 C 41.467 159.625 39.314 161.778 39.314 164.434 L 39.314 246.191 C 39.314 248.847 41.467 251 44.123 251 Z " fill="rgb(77,124,32)" /><path d=" M 104.844 164.347 L 121.071 135.579 L 134.277 60.733 C 134.864 57.419 137.311 54.548 140.625 53.952 C 142.92 53.521 145.288 54.135 147.086 55.626 C 148.884 57.117 149.925 59.33 149.926 61.666 L 149.926 145.197 L 140.409 199.142 C 137.569 215.229 123.589 226.955 107.254 226.954 L 72.979 226.954 L 72.979 169.243 L 96.467 169.243 C 99.939 169.243 103.142 167.372 104.844 164.347 Z " fill="rgb(136,204,0)" /><path d=" M 107.258 231.779 L 107.258 231.779 L 68.151 231.779 L 68.151 164.421 L 96.474 164.421 C 96.474 164.421 96.474 164.421 96.474 164.421 C 98.202 164.421 99.8 163.485 100.635 161.988 C 100.635 161.973 100.649 161.973 100.649 161.973 L 116.459 133.925 L 129.519 59.9 C 129.965 57.366 131.117 55.004 132.845 53.104 C 134.645 51.088 137.064 49.72 139.728 49.216 C 140.505 49.072 141.283 49 142.075 49 C 145.027 49 147.892 50.022 150.167 51.909 C 153.061 54.313 154.746 57.898 154.746 61.657 C 154.746 61.657 154.746 61.671 154.746 61.671 L 154.746 145.616 L 145.156 199.986 C 145.156 199.986 145.156 199.986 145.156 199.986 C 143.587 208.885 138.921 216.963 131.996 222.78 C 125.07 228.583 116.301 231.779 107.258 231.779 C 107.258 231.779 107.258 231.779 107.258 231.779 Z  M 109.044 166.711 L 125.675 137.236 L 139.022 61.57 C 139.022 61.57 139.022 61.556 139.022 61.556 C 139.166 60.807 139.497 60.116 140.016 59.554 C 140.405 59.108 140.937 58.806 141.513 58.69 C 141.7 58.662 141.888 58.647 142.075 58.647 C 142.78 58.647 143.457 58.892 144.004 59.338 C 144.695 59.914 145.099 60.764 145.099 61.671 L 145.099 144.781 L 135.653 198.302 C 134.487 204.983 130.988 211.03 125.79 215.379 C 120.606 219.742 114.04 222.132 107.258 222.132 L 107.258 222.132 L 77.798 222.132 L 77.798 174.069 L 96.459 174.069 C 101.672 174.069 106.495 171.246 109.044 166.711 Z " fill-rule="evenodd" fill="rgb(77,124,32)" /></g><g class="righthand"><path d=" M 255.877 251 L 227.022 251 C 224.366 251 222.213 248.847 222.213 246.191 L 222.213 164.434 C 222.213 161.778 224.366 159.625 227.022 159.625 L 255.877 159.625 C 258.533 159.625 260.686 161.778 260.686 164.434 L 260.686 246.191 C 260.686 248.847 258.533 251 255.877 251 Z " fill="rgb(77,124,32)" /><path d=" M 195.156 164.347 L 178.93 135.579 L 165.723 60.733 C 165.137 57.419 162.689 54.548 159.375 53.952 C 157.08 53.521 154.712 54.135 152.914 55.626 C 151.117 57.117 150.076 59.33 150.074 61.666 L 150.074 145.197 L 159.592 199.142 C 162.432 215.229 176.411 226.955 192.746 226.954 L 227.022 226.954 L 227.022 169.243 L 203.534 169.243 C 200.061 169.243 196.858 167.372 195.156 164.347 Z " fill="rgb(136,204,0)" /><path d=" M 192.742 231.779 L 192.742 231.779 L 231.849 231.779 L 231.849 164.421 L 203.527 164.421 C 203.527 164.421 203.527 164.421 203.527 164.421 C 201.799 164.421 200.201 163.485 199.365 161.988 C 199.365 161.973 199.351 161.973 199.351 161.973 L 183.541 133.925 L 170.481 59.9 C 170.035 57.366 168.883 55.004 167.155 53.104 C 165.355 51.088 162.936 49.72 160.272 49.216 C 159.495 49.072 158.717 49 157.925 49 C 154.974 49 152.108 50.022 149.833 51.909 C 146.939 54.313 145.254 57.898 145.254 61.657 C 145.254 61.657 145.254 61.671 145.254 61.671 L 145.254 145.616 L 154.844 199.986 C 154.844 199.986 154.844 199.986 154.844 199.986 C 156.414 208.885 161.079 216.963 168.005 222.78 C 174.93 228.583 183.699 231.779 192.742 231.779 C 192.742 231.779 192.742 231.779 192.742 231.779 Z  M 190.956 166.711 L 174.326 137.236 L 160.978 61.57 C 160.978 61.57 160.978 61.556 160.978 61.556 C 160.834 60.807 160.503 60.116 159.984 59.554 C 159.596 59.108 159.063 58.806 158.487 58.69 C 158.3 58.662 158.113 58.647 157.925 58.647 C 157.22 58.647 156.543 58.892 155.996 59.338 C 155.305 59.914 154.902 60.764 154.902 61.671 L 154.902 144.781 L 164.347 198.302 C 165.514 204.983 169.013 211.03 174.211 215.379 C 179.394 219.742 185.96 222.132 192.742 222.132 L 192.742 222.132 L 222.202 222.132 L 222.202 174.069 L 203.541 174.069 C 198.329 174.069 193.505 171.246 190.956 166.711 Z " fill-rule="evenodd" fill="rgb(77,124,32)" /></g></g></svg>' + '<p>&nbsp;</p>';
              });
        
        // Hide next exercise button
        nextEx.classList.add("hide");
      }, 350);
    };

// Always start view from stop
window.scrollTo(0, 0);

// Only show icon process for smaller iOS devices
// var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var iOS = !!navigator.platform && /iPhone|iPod/.test(navigator.platform);
if (iOS === true) {
  exHeader.classList.add("hide");
}

// Change Eye Workout Header Image for Portrait & Landscape
window.addEventListener("resize", function() {
  detectOrien();
});
detectOrien();

// Important reads on the side of homepage before exercise starts
function mainClickDialogs() {
  // Disclaimer
  disclaimer.onclick = function() {
    var msg1 = "I Michael Schwartz developed this workout app for myself and myself only!\n\n",
        msg2 = "I am not held liable if you do any of the workouts listed in this app!\n\n",
        msg3 = "By using this app you agree that you're doing these workouts by your own discression only!<br><br>",
        msg4 = "Contribution and Source Code: <br><a href=\"https://github.com/michaelsboost/Eye-Workout/\" target=\"_blank\">https://github.com/michaelsboost/Eye-Workout/</a>",
        msg5 = "<br><a href=\"https://play.google.com/store/apps/details?id=com.michael.workoutapp&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\" target=\"_blank\" title=\"Get it on Google Play\"><img src=\"https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png\" style=\"margin: 0 0 -20px 0;\"></a>";

    Swal.fire({
      title: "Disclaimer",
      html: msg1 + msg2 + msg3 + msg4,
      type: "warning"
    });
  };

  // Exercise Plan
  exerciseplan.onclick = function() {
    var msg1 = "A large amount of information that we \"absorb\" every day, demands from our eyes almost constant voltage. And, of course, they get tired. Many eye problems arise precisely from overexertion. Even a person with perfect eyesight needs to rest them. Otherwise, symptoms such as dry eyes redness, and blurred vision may appear. What can we say about those who have poor eyesight - in this case, resting your eyes is necessary. W. Bates, who created the vision improving system, based it largely on this fact.<br>",
    msg2 = "One method of training by William Bates takes less than 5 minutes. Exercising just 3 minutes per day, you will not only develop the eye muscles but also give them needed rest and break from the hard work.<br><br>",
    msg3 = "Training consists of 8 exercises:<br>1. \"Palming\" (Exercise last from 90 sec.)<br>2. \"Down and Up\" (10 seconds).<br>3. \"Left-Right\" (10 seconds).<br>4. \"Looking diagonally\" (2 directions of 30 seconds).<br>5. \"Rectangle\" (both sides 20 seconds)<br>6. \"Clock\" (both sides 20 seconds)<br>7. \"Focusing\" (30 seconds)<br><br>",
    msg4 = "Between exercises, to relax the eye muscles and reduce the load, perform fast light blinking. Detailed descriptions for training contained in the special field for each exercise.";

    Swal.fire({
      title: "Exercise Plan",
      html: "<p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + "</p>",
      type: "info"
    });
  };

  // William Bates
  williambates.onclick = function() {
    var msg1 = "William Horatio Bates,<br>1860-1931<br>History of Dr. W.H. Bates gathered from <a href=\"https://apps.apple.com/us/app/eye-workout/id763029932\" target=\"_blank\"><u>Eye Workout</u></a> iOS application.<br><br>A successful eye-surgeon; in 1885 William Horatio Bates graduated with a medical degree from the College of Physicians and Surgeons at Columbia University in New York. Dr. Bates became a successful and well-respected eye surgeon in New York, where he was an instructor of Opthalmology at the New York Postgraduate Medical School and Hospital from 1886 to 1891.<br><br>",
        msg2 = "Dissatisfied<br>Dr. Bates became increasingly dissatisfied with convectional ophthalmological practice, and he consequently began his research into eyesight disorders. He has observed patients with a refractive error (e.g., short sight or long sight) that seemed to spontaneously change for the better, sometimes to the point of a complete reversal of symptoms.<br><br>",
        msg3 = "This led him to question one of the most basic assumptions of the accepted practice of Opthalmology; namely; that once symptoms of refractive error were present in a particular patient, then nothing could be done other than prescribing glasses. Dr. Bates was not satisfied with the prevailing theory of accommodation (how the eye focuses). The Prevailing Theory of accommodation was and still is that the curvature of the lens of the eye is the only partially responsible for accommodation, and its inflexibility is supposedly what causes failing sight.<br><br>",
        msg4 = "For years, Dr. Bates felt there was something wrong about the procedure of prescribing glasses to patients who came to him about their eyes. \"Why\", he asked, \"If glasses are correct, must they continually be strengthened because the eyes, under their influence, have weakened? Logically, if the medicine is good, the dose should be weakened as the patient grows stronger.\"<br><br>",
        msg5 = "Dr. Bates gave up his lucrative practice and went into the laboratory at Columbia University to study eyes as they never been studied before. Disregarding all he had learned in textbooks, he experimented on eyes with an open mind. He ran experiments on animals and examined thousands of pairs of eyes. He never restricted himself to the usual eye examination room, but carried his retinoscope with him, inspecting the refracted state of the eyes of both people and animals in many different situations. He refracted eyes of people when they were happy, sad, angry, and afraid. Much of his time was spent with children, attempting to discover the cause of their eye disorders.<br><br>",
        msg6 = "His retinoscopic findings indicated that the refractive state of our eyes is not the static condition textbooks reported, but varies tremendously with our emotional state.<br><br>",
        msg7 = "Bates cured his own \"stone-hard presbyopia\"<br>In his 1920 book Perfect Sight Without Glasses, Dr. Bates writes about his eyesight improvements. He had been told by various eye specialists that his eye lens was \"as hard as a stone\" and that \"no one can do anything for you\". Nonetheless, through studying his case intensively, and finding a way not to strain his eyes when wanting to read, he regained an accommodative range of 14 inches. This means he has regained the ability to focus on objects between 4-18 inches from his eyes, so he was no longer suffering from presbyopic blur.<br><br>",
        msg8 = "The Bates Method<br>He published an account of a little girl who developed temporary myopia when she lied to him. That fact seemed very significant to him, as it was consistent with other findings of myopia which suggested that people tend to become myopic when they feel apprehensive. Dr. Bates found that the eye is never constantly the same, that refractive error changed momentarily, that mental strain and tension increased it and that relaxation decreased it. He concluded that imperfect sight was not possible without a mental strain first, that eyes are tough at their exterior, that they could mend rapidly from scratches, bumps, and even burns, but could be blinded by mental strain.<br><br>",
        msg9 = "Dr. Bates went on to formulate a new set of theories about eyesight, and he developed what later became known as \"The Bates Method\" to help people improve their sight.<br><br>",
        msg10 = "According to Dr. Bates, poor eyesight is caused primarily by 3 things:<br>1. Stress or mental strain<br>2. Poor vision habits<br>3. Wearing glasses<br><br>",
        msg11 = "Expelled<br>Ophthalmologists at the New Tork Postgraduate Medical School and Hospital he put glasses on myopic doctors and Dr. Bates then had those doctors remove their glasses, curing them of myopia. Dr. Roosa, the head of the institution, did not accept what Dr. Bates had been doing and he expelled Bates from the institution in 1891.<br><br>",
        msg12 = "Preventing myopia<br>In 1896 Dr. Bates resigned his hospital appointments and began to engage in experimental work. In 1902, he left New York and began to successfully implement his methods for preventing myopia in schoolchildren at the public schools of Grand Forks, North Dakota. In 1910 he returned to New York and worked as attending physician at the Harlem Hospital in New York City. He soon began implementing his methods for the prevention of myopia in some public schools in New York City. At Harlem Hospital, he began to work together with Emily Lierman, who had improved her eyesight using his methods (they married in 1928). They held free \"Clinic Day\" several times per week, usually having long lines of people waiting for help.<br><br>",
        msg13 = "Private practice<br>In 1923, the Clinic was discontinued at the Harlem Hospital as Bates left the hospital and began holding a \"Clinic Day\" at his private practice on Saturdays. He continued to treat patients constantly for practically all forms of imperfect sight and tended to work 10 hours per day, seven days per week.<br><br>",
        msg14 = "After his death<br>Dr. Bates died on July 10, 1931, at the age of 70. He died at his home in New York during a polio epidemic. In 1940 his wife Emily republished his book and added a useful chapter at the end with suggestions on how to use the Bates method. After legal problems of other teachers, such as Margaret Corbett's court case in 1940/1941, Emily published an edited version of the book in 1943 and called it: Better Eyesight Without Glasses.";

    Swal.fire({
      title: "William Bates",
      html: "<p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + msg6  + msg7 + msg8 + msg9 + msg10 + msg11 + msg12 + msg13 + msg14 + "</p>",
      type: "info"
    });
  };

  // Farsightedness
  farsightedness.onclick = function() {
    var msg1 = "Farsightedness refers to a greater difficulty of seeing near objects compared to distant objects.<br><br>",
        msg2 = "Causes<br>Farsightedness is the result of the visual image being focused behind the retina rather than directly on it. It may be caused by the eyeball being too small or focusing power being to weak.<br><br>",
        msg3 = "Farsightedness is often present from birth, but children have a very flexible eye lens, which helps make up for the problem. As aging occurs, glasses or contact lenses may be required to correct the vision. If you have family members who are farsighted, you are also more likely to become farsighted too.<br><br>",
        msg4 = "Symptoms:<br>Aching eyes<br>Blurred vision of close objects<br>Crossed eyes (strabismus) in some children<br>Eyestrain<br>Headache while reading<br><br>",
        msg5 = "Mild farsightedness may not cause any problems except for a need for reading glasses.<br><br>",
        msg6 = "Exams and Tests<br><br>A general eye examination to diagnose farsightedness may include the following tests:<br>Eye movement testing<br>Glaucoma testing<br>Refraction test<br>Retinal examination<br>Slit-lamp examination<br>Visual acuity<br><br>",
        msg7 = "This list is not all-inclusive, however.<br><br>Possible Complications<br>Farsightedness can be a risk factor for glaucoma and crossed eyes.";

    Swal.fire({
      title: "Farsightedness",
      html: "<p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + msg6 + msg7 + "</p>",
      type: "info"
    });
  };

  // Nearsightedness
  nearsightedness.onclick = function() {
    var msg1 = "Nearsightedness is when light entering the eye is focused incorrectly, making distant objects appear  blurred. Myopia is a type of refractive error of the eye. <br>If you are nearsighted, you have trouble seeing things that are far away.<br><br>",
        msg2 = "Causes<br>People are able to see because the front part of the eye bends (refracts) light and points it to the back surface of the eye, called the retina. <br>Nearsightedness occurs when the physical length of the eye is higher than the optical range. This makes it more difficult for the eyes to focus light directly onto the retina. If the light rays are not focused on the retina, the images you see may be blurry. Nearsightedness affects males and females equally. People who have a family history of nearsightedness are more likely to develop it. Most eyes with nearsightedness are healthy, but a small number of people with severe myopia create a form of retinal degeneration.<br><br>",
        msg3 = "Symptoms<br>A nearsighted person sees close-up objects clearly, while objects in the distance are blurred. Squinting will tend to make far away objects seem more evident. Nearsightedness is often first noticed in school-aged children or teenagers. Children often cannot read the blackboard although they can easily read a book. <br>Nearsightednessoften gets worse during a child's pubescent years. People who are nearsighted need to change classes or contact lenses often. It usually stops progressing as a person stops growing in his or her early twenties.<br><br>",
        msg4 = "Other symptoms may include:<br>Eyestrain<br>Headaches (uncommon)<br><br>",
        msg5 = "Exams and Tests<br>A nearsighted person can quickly read the Jaeger eye chart (the chart for near reading), but has trouble reading the Snellen eye chart (the chart for distance).<br><br>",
        msg6 = "A general eye examination or standard ophthalmic exam may include:<br>Eye pressure measurement (See Tonometry).<br>Refraction test, to determine the correct prescription for glasses.<br>Retinal examination.<br>Slit-lamp exam of the structures at the front of the eyes.<br>Test of color vision, to look for possible color blindness.<br>Tests of the muscles that move the eyes.<br>Visual acuity, both at a distance (Snellen), and close up (Jaeger) Outlook (Prognosis)<br><br>",
        msg7 = "Early diagnosis of nearsightedness is essential because a child can suffer socially and educationally by not being able to see well at a distance.<br><br>",
        msg8 = "Possible Complications<br>Complications can occur in people who use contact lenses (corneal ulcers and infections). Complications of laser correction are uncommon but can be serious. People with myopia can, in rare cases, develop retinal detachments or retinal degeneration.";

    Swal.fire({
      title: "Nearsightedness",
      html: "<p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + msg6 + msg7 + msg8 + "</p>",
      type: "info"
    });
  };

  // Nutrition
  nutrition.onclick = function() {
    var msg1 = "The following vitamins, minerals, and other nutrients have been shown to be essential for good vision and may protect your eyes from sight-depriving conditions and diseases.<br><br>",
        msg2 = "Incorporating the following foods in your diet will help you get the Recommended Dietary Allowance (RDA) of these important eye nutrients. Established by the Institute of Medicine (National Academy of Sciences), the RDA is the average daily dietary intake level of a nutrient sufficient to meet the requirements of nearly all healthy individuals in a specific life stage and gender group.<br><br>",
        msg3 = "While the RDA is a useful reference, some eye care practitioners recommend higher daily intakes of certain nutrients for people at risk for eye problems.<br>(In the following list, mg = milligram; mcg = microgram (1/1000 of a mg) and IU = International Unit.)<br><br>",
        msg4 = "Beta-carotene<br>Eye benefits of beta-carotene:<br>When taken in combination with zinc and vitamins C and E, beta-carotene may reduce the progress of macular degeneration.<br>Food sources: Carrots, sweet potatoes, spinach, kale, butternut squash.<br>RDA: None (most supplements contain 5,000 to 25,000 IU)<br><br>",
        msg5 = "Bioflavonoids (Flavonoids)<br>Eye benefits of bioflavonoids:<br>May protect against cataracts and macular degeneration.<br>Food sources: Tea, red wine, citrus fruits, bilberries, blueberries, cherries, legumes, soy products.<br>RDA: None<br><br>",
        msg6 = "Lutein and Zeaxanthin<br>Eye benefits of lutein and zeaxanthin: May prevent cataracts and macular degeneration.<br>Food sources: Spinach, kale, turnip greens, collard greens, squash.<br>RDA: None<br><br>",
        msg7 = "Omega-3 Fatty Acid<br>Eye benefits of omega-3 fatty acids: May help prevent macular degeneration (AMD) and dry eyes.<br>Food sources: Cold-water fish such as salmon, mackerel, and herring; fish oil supplements, freshly ground flaxseeds, walnuts.<br>RDA: None; but with regard to cardiovascular benefits, the American Heart Association recommends approximately 1,000 mg per day.<br><br>",
        msg8 = "Selenium<br>Eye benefits of selenium; When combined with carotenoids and vitamins C and E, it may reduce the risk of advanced AMD.<br>Food sources: Seafood (shrimp, crab, salmon, halibut), Brazil nuts, enriched noodles, brown rice.<br>RDA: 55 mcg for teens and adults (60 mcg for women during pregnancy and 70 mcg when breastfeeding).<br><br>",
        msg9 = "Vitamin A<br>Eye benefits of vitamin A: May protect against night-based blindness and dry eyes.<br>Food sources: Beef or chicken liver; eggs, butter, milk.<br>RDA: 3,000 IU for men; 2,333 IU for women (2,567 IU during pregnancy and 4,333 IU when breastfeeding).<br><br>",
        msg10 = "Vitamin C<br>Eye benefits of vitamin C: May reduce the risk of cataracts and macular degeneration.<br>Food sources: Sweet peppers (red or green), kale, strawberries, broccoli, oranges, cantaloupe.<br>RDA: 90 mg for men; 70 mg for women (85 mg during pregnancy and 120 mg when breastfeeding).<br><br>",
        msg11 = "Vitamin D<br>Eye benefits of vitamin D: May reduce the risk of macular degeneration.<br>Food sources: Salmon, sardines, mackerel, milk, orange juice fortified with vitamin D.<br>RDA: None, but the American Academy of Pediatrics recommends 400 IU per day for infants, children, and adolescents, and many experts recommend higher daily intakes for adults.<br>The best source of vitamin D is exposure to sunlight. Ultraviolet radiation from the sun stimulates the production of vitamin D in human skin, and just a few minutes of exposure to sunlight each day (without sunscreen) will ensure that your body is producing adequate amounts of vitamin D.<br><br>",
        msg12 = "Vitamin E<br>Eye benefits of vitamin E: When combined with carotenoids and vitamin C, it may reduce the risk of advanced AMD.<br>Food sources: Almonds, sunflower seeds, hazelnuts.<br>RDA: 15 mg for teens and adults (15 mg for women during pregnancy and 19 mg when breastfeeding).<br><br>",
        msg13 = "Zinc<br>Eye benefits of zinc: Helps vitamin A reduces the risk of night blindness and may play a role in reducing the risk of advanced AMD.<br>Food sources: Oysters, beef, Dungeness crab, turkey, (dark meat).<br>RDA: 11 mg for men; 8 mg for women (11 mg during pregnancy and 12 mg when breastfeeding).<br><br>",
        msg14 = "In general, it's best to obtain most nutrients through a healthy diet, including at least 2 servings of fish per week and plenty of colorful fruits and vegetables too.";

    Swal.fire({
      title: "Nutrition",
      html: "<p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + msg6 + msg7 + msg8 + msg9 + msg10 + msg11 + msg12 + msg13 + msg14 + "</p>",
      type: "info"
    });
  };

  // What To Read?
  whattoread.onclick = function() {
    var msg1 = "Books for perfect eyesight:<br>The Practical Guide to Natural Vision Improvement by Carina Goodrich<br><br>In this easy-to-use and intuitive book, you will be taken on a step-by-step process that will help you to:<br>- Learn the principles and techniques useful for short-sightedness (myopia), long-sightedness (hyperopia), 'over 40's reading blur (presbyopia) and astigmatism.<br>- Understand your prescription and work through reduced prescriptions and other transition tools until you no longer need corrective lenses.<br>- Set up your program of proven vision-improving activities.<br>- Understand and work with the emotional causes of visual blur.<br>- There are 264 pages with over 140 illustrations included color charts.<br>\"Carina's book is a joy to read, being clear and concise, with comprehensive sections and techniques to help you improve eyesight through natural methods. Over the years, I have seen great success in those who are dedicated to regular vision exercises. The effect of Carina's techniques can be miraculous, at all ages.\" Jenny Livanos, O.D. NSW Australia<br><br>",
        msg2 = "Bates Method Nuggets<br>The Fundamentals of Natural Vision Improvement by William H. Bates, M.D.<br>Compiled by Esther Joy Van Der Werf.<br>The Bates Method Nuggets are the golden Nuggets of the Bates Method of natural eyesight improvement. These are true gems, in their original form, the way Dr. William H. Bates published them in his monthly Better Eyesight magazines in the 1920s.<br><br>",
        msg3 = "Rather than reading the huge volume of information of all the magazines, Bates Method Nuggets contain the essence in a compact form. Subject sorts the various parts of the method, and step-by-step they provide you with a clear picture of the Bates Method in an easy and logical flow.<br><br>",
        msg4 = "This book can be used as an easy reference guide to the Bates Method and is very useful to newcomers as well as long-time Bates fans. You get the best of Dr. Bates' writings from the 10 years after he published his book!<br><br>",
        msg5 = "Love Your Eyes, How to Improve Your Eyesight Naturally! by Marie Wilson<br>Marie Wilson's 36-page booklet is packed with information along with a series of eye exercises that will help you to maintain your eyesight naturally!<br><br>",
        msg6 = "Intentions, A Path to Wholeness by Marie Wilson<br>Marie Wilson's Workbook for Self-Healing features setting intentions to change your life. Chapters include Healing from past traumas, Eating habits, Posture correction to eliminate chronic pain along with natural eyesight improvement and much more.<br><br>",
        msg7 = "The COMPLETE Magazines of William Bates<br>Esther Van Der Werf<br>The complete, unedited set (1919-1931) of Better Eyesight magazines!<br>This is the very best information on improving eyesight naturally. Learn how vision can be improved naturally, easily, and effectively.<br>If you've only ever read the 1920 book \"Perfect Sight Without Glasses\" you may think that you know the Bates Method. However, the information and case histories in this complete and unedited magazine collection will bring you to a much deeper level of understanding. These magazines reflect Dr. Bates' growth and increased skills as he continued to develop his methods of achieving a clear vision for his patients in the 10 years following the publication of his book. You'll be amazed and inspired, you'll learn, and you'll understand. A clear vision will have a new meaning.<br><br>",
        msg8 = "Total Health at the Computer How To Be Pain-Free at the Computer<br>Martin Sussman and Dr. Ernest Loewenstein with Howard Sann<br>\"The best self-help book for computer users.\"<br>Dr. Carl F. Gruning, O.D., SUNY State College of Optometry<br><br>",
        msg9 = "In this user-friendly guide, you will learn how to prevent, reduce or eliminate the 40 most commonly experienced symptoms of Computer Stress Syndrome. Wrist, hand, arm, neck and back pains of all kinds are covered. All manner of vision problems are included - including eyestrain, blurred vision, headaches, and deteriorating eyesight.<br><br>",
        msg10 = "Total Health at the Computer is solution-oriented: All you do is look up your problem, and you'll find the simple 3-MINUTE SOLUTIONS that quickly give you the relief you need from any of the symptoms of Computer Stress Syndrome.<br><br>",
        msg11 = "Magic Eye Beyond 3D: Improve Your Vision by Magic Eye Inc. & Marc Grossman, O.D., L.AC.<br>Since the 1990s, Magic Eye books have sold millions of copies, and now the creators of it have developed another magical book too. Magic Eye Beyond 3D looks at the medical benefits and scientific explanations of viewing these 3D images. Beyond 3D goes beyond, as the name suggests, reaching a wider audience with examples of its fascinating possibilities. It's more than merely improving your vision; Viewing Magic Eye images can boost your brain activity.";

    Swal.fire({
      title: "What To Read?",
      html: "<p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + msg6 + msg7 + msg8 + msg9 + msg10 + msg11 + "</p>",
      type: "question"
    });
  };

  // Main Info
  maininfo.onclick = function() {
    Swal.fire({
      title: "Main Info",
      html: "<p class=\"tl\">" + mainInfoMsg + "</p>",
      type: "info"
    });
  };
}
mainClickDialogs();

// Initialize blinking onload
TweenMax.to(".mainpageeyes .toplid", 0.15, {
  y: -105, 
  x: 0, 
  force3D: true, 
  yoyo: false, 
  repeat: -1,
  repeatDelay: 4,
  ease: Power1.easeOut
});
TweenMax.to(".mainpageeyes .bottomlid", 0.15, {
  y: 100, 
  x: 0, 
  force3D: true, 
  yoyo: false, 
  repeat: -1,
  repeatDelay: 4,
  ease: Power1.easeOut
});

// Initalize eye workout
startworkout.onclick = function() {
  Swal.fire({
    title: 'Main Info',
    html: mainInfoMsg,
    type: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Continue'
  }).then((result) => {
    if (result.value) {
//      comingSoon();
//      return false;
      $("[data-display=mainpage]").fadeOut();
      setTimeout(function() {
        $("[data-display=mainpage] svg").remove();
        $(".home.leftbtns, .home.rightbtns").addClass("hide");
        $(".exercise.rightbtns").removeClass("hide");
        $("[data-display=exercise]").fadeIn();
        palmingInstr();
      }, 350);
    }
  });
};

// Quit exercise
quitexercise.onclick = function() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You will have to start all over!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Continue'
  }).then((result) => {
    if (result.value) {
      workoutQuit();
    }
  });
};

// Shortcut Keys
window.onkeydown = function(e) {
  // Use spacebar to start workout
  if ($("[data-display=mainpage]").is(":visible")) {
    if (e.keyCode == 32 && e.target == document.body) {
      startworkout.click();
      return false;
    }
    return false;
  }
  
  // Use esc key to quit workout
  if ($("[data-display=exercise]").is(":visible")) {
    if (e.keyCode == 27 && e.target == document.body) {
      quitexercise.click();
      return false;
    }
    return false;
  }
};
shortcut.add("ctrl+r", function() {
  location.reload(true);
});
shortcut.add("meta+r", function() {
  location.reload(true);
});
shortcut.add("right", function() {
  if ($("[data-display=exercise]").is(":visible")) {
    if ($("#nextEx").is(":visible")) {
      nextEx.click();
    }
  }
  return false;
}, {
  "disable_in_input": true
});
shortcut.add("left", function() {
  if ($("[data-display=exercise]").is(":visible")) {
    if ($("#redoEx").is(":visible")) {
      redoEx.click();
    }
  }
  return false;
}, {
  "disable_in_input": true
});

// Animate button on click
$("[data-action=bounce]").on("click", function() {
  doBounce($(this), 2, '15px', 50);   
  return false;
});
function doBounce(element, times, distance, speed) {
  for(i = 0; i < times; i++) {
    element.animate({marginTop: '-='+distance},speed)
           .animate({marginTop: '+='+distance},speed);
  }        
}
