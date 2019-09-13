// Variables
var counter = 0, countPause = 1, unsupportedBrowser,
    now, time, today, workoutStatus = "waiting", 
    audioElement     = document.createElement("audio"),
    audioElement2    = document.createElement("audio"),
    mainInfoMsg1 = "Do eye workout without glasses or contact lenses. The face is motionless, and just the eyes are working. Avoid sudden movements with the eyes.<br><br>",
    mainInfoMsg2 = "If you had eye surgery less than 6 months ago the training not recommended, and you should wait for complete healing (6-7 months after surgery)<br><br>",
    mainInfoMsg3 = "When retinal detachment occurs, the exercises not recommended! If you have gone through an operation due to \"the sticking\" of the retina, you need to wait for 6 months after surgery. In the future, you can start exercises gently, without straining your eyes.",
    mainInfoMsg = mainInfoMsg1 + mainInfoMsg2 + mainInfoMsg3,
    goSound          = function() {
      audioElement.setAttribute("src", "https://michaelsboost.com/Michaels-Workout-App/media/go.mp3");
      audioElement.play();
    },
    breakSound       = function() {
      audioElement.setAttribute("src", "https://michaelsboost.com/Michaels-Workout-App/media/break.mp3");
      audioElement.play();
    },
    errorSound       = function() {
      audioElement.setAttribute("src", "https://michaelsboost.com/Michaels-Workout-App/media/error.mp3");
      audioElement.play();
    },
    abortSound       = function() {
      audioElement.setAttribute("src", "https://michaelsboost.com/Michaels-Workout-App/media/abort.mp3");
      audioElement.play();
    },
    finishedSound    = function() {
      audioElement.setAttribute("src", "https://michaelsboost.com/Michaels-Workout-App/media/complete.mp3");
      audioElement.play();
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
          // Hide next exercise button
          nextEx.classList.add("hide");
          
          // Are You Ready?
          exHeader.textContent = "Are You Ready?";
          // Get Set?
          setTimeout(function() {
            exHeader.textContent = "Get Set?";
          }, 1000);

          // Start audio for audio exercise
          setTimeout(function() {
            exHeader.textContent = "Rub your palms together"
            
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
            setTimeout(function() {
              exHeader.textContent = "Cover your open eyes with your hands"
              setTimeout(function() {
                exHeader.textContent = "Stare at your warm palms for 15 seconds";
              }, 4000);
              
              palmingoutput.innerHTML = '<p>&nbsp;</p><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width: 100%;" viewBox="0 0 666.7 389.6" width="666.7pt" height="389.6pt" preserveAspectRatio="xMidYMin"><defs><clipPath id="_clipPath_RSvnDKtq9RvmjJuGLB2Dz1cSSHSRVntu"><rect width="666.7" height="389.6"/></clipPath></defs><g clip-path="url(#_clipPath_RSvnDKtq9RvmjJuGLB2Dz1cSSHSRVntu)"><g><g><circle vector-effect="non-scaling-stroke" cx="482.3597796566942" cy="278.5999999994109" r="101.00000000000011" fill="rgb(136,204,0)"/><circle vector-effect="non-scaling-stroke" cx="482.3597796566942" cy="278.59999999941095" r="89.1538822425521" fill="rgb(84,145,16)"/><circle vector-effect="non-scaling-stroke" cx="482.3597796566942" cy="278.59999999941095" r="86.55577268884761" fill="rgb(255,255,255)"/><clipPath id="_clipPath_yAI3UgZKOn85Z24nTuTLFvbHKxhysGyl"><circle vector-effect="non-scaling-stroke" cx="482.3597796566942" cy="278.59999999941095" r="86.55577268884761" fill="rgb(255,255,255)"/></clipPath><g clip-path="url(#_clipPath_yAI3UgZKOn85Z24nTuTLFvbHKxhysGyl)"><g><radialGradient id="_rgradient_4" fx="0.49999979612112244" fy="0.4999981560039713" cx="0.49999979612112244" cy="0.4999981560039713" r="1" gradientTransform="matrix(305.865,0,0,305.865,300.032,94.53)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"/><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="452.9643420161724" cy="247.46306401384552" r="152.93265981654383" fill="url(#_rgradient_4)"/><g><circle vector-effect="non-scaling-stroke" cx="482.3597796566942" cy="278.5999999994109" r="39.9884753726767" fill="rgb(130,195,0)"/><circle vector-effect="non-scaling-stroke" cx="482.17928373750055" cy="277.01490065803966" r="25.13518144317777" fill="rgb(77,124,32)"/><circle vector-effect="non-scaling-stroke" cx="491.25944177021324" cy="266.8249589485081" r="8.410743607787879" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="482.17928373750055" cy="258.41421534072" r="3.364297443115163" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="475.177014119213" cy="258.41421534072" r="1.6821487215576099" fill="rgb(255,255,255)"/></g></g></g></g><g><circle vector-effect="non-scaling-stroke" cx="183.3597796566944" cy="278.59999999941095" r="101.00000000000011" fill="rgb(136,204,0)"/><circle vector-effect="non-scaling-stroke" cx="183.3597796566944" cy="278.59999999941107" r="89.15388224255213" fill="rgb(84,145,16)"/><circle vector-effect="non-scaling-stroke" cx="183.35977965669412" cy="278.5999999994109" r="86.55577268884764" fill="rgb(255,255,255)"/><clipPath id="_clipPath_MIEPW1lXzyvvf1wk6UOSnEiCBXkAGzFq"><circle vector-effect="non-scaling-stroke" cx="183.35977965669412" cy="278.5999999994109" r="86.55577268884764" fill="rgb(255,255,255)"/></clipPath><g clip-path="url(#_clipPath_MIEPW1lXzyvvf1wk6UOSnEiCBXkAGzFq)"><g><radialGradient id="_rgradient_5" fx="0.49999979612112255" fy="0.49999815600397146" cx="0.49999979612112255" cy="0.49999815600397146" r="1" gradientTransform="matrix(305.865,0,0,305.865,1.032,94.53)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)"/><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)"/></radialGradient><circle vector-effect="non-scaling-stroke" cx="153.96434201617234" cy="247.46306401384547" r="152.93265981654383" fill="url(#_rgradient_5)"/><g><circle vector-effect="non-scaling-stroke" cx="183.35977965669412" cy="278.59999999941084" r="39.988475372676675" fill="rgb(130,195,0)"/><circle vector-effect="non-scaling-stroke" cx="183.17928373750055" cy="277.0149006580396" r="25.13518144317777" fill="rgb(77,124,32)"/><circle vector-effect="non-scaling-stroke" cx="192.25944177021313" cy="266.824958948508" r="8.410743607787907" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="183.17928373750055" cy="258.4142153407199" r="3.364297443115163" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="176.17701411921303" cy="258.4142153407199" r="1.6821487215576099" fill="rgb(255,255,255)"/></g></g></g></g></g><g><path d=" M 305.085 102.407 C 320.772 102.708 333.396 115.518 333.395 131.277 L 333.395 239.817 C 333.395 250.505 332.158 261.157 329.71 271.561 L 310.575 352.886 C 306.892 368.538 292.925 379.6 276.847 379.6 L 134.212 379.6 C 123.127 379.6 112.71 374.296 106.19 365.33 L 15.523 240.66 C 6.143 227.762 8.995 209.704 21.891 200.324 C 34.789 190.944 52.848 193.796 62.227 206.693 L 85.073 238.108 L 85.073 67.752 C 85.073 51.993 97.697 39.183 113.384 38.883 C 129.571 38.573 142.822 52.131 142.822 68.323 L 142.822 194.801 L 148.597 194.801 L 148.597 38.878 C 148.597 23.119 161.221 10.308 176.908 10.008 C 193.096 9.698 206.347 23.256 206.347 39.448 L 206.347 194.801 L 212.122 194.801 L 212.122 67.031 C 212.122 51.271 224.746 38.461 240.433 38.161 C 256.62 37.851 269.871 51.409 269.871 67.601 L 269.871 194.801 L 275.646 194.801 L 275.646 131.847 C 275.646 115.656 288.897 102.098 305.085 102.407 L 305.085 102.407 Z  M 279.87 101.43 C 282.72 99.05 285.89 97.08 289.29 95.59 C 294.1 93.49 299.29 92.4 304.54 92.4 C 304.57 92.4 304.6 92.4 304.64 92.4 L 305.18 92.41 C 305.21 92.41 305.25 92.41 305.28 92.41 C 315.45 92.61 325.15 96.79 332.28 104.06 C 339.4 111.32 343.4 121.1 343.39 131.28 L 343.39 131.28 L 343.39 239.82 C 343.39 239.82 343.39 239.82 343.39 239.82 C 343.39 251.28 342.07 262.7 339.44 273.85 C 339.44 273.85 339.44 273.85 339.44 273.85 L 320.31 355.18 C 320.31 355.18 320.31 355.18 320.31 355.18 C 318 364.97 312.46 373.7 304.57 379.95 C 296.68 386.2 286.91 389.6 276.85 389.6 C 276.85 389.6 276.85 389.6 276.85 389.6 L 134.21 389.6 C 134.21 389.6 134.21 389.6 134.21 389.6 C 119.94 389.6 106.5 382.76 98.1 371.21 C 98.1 371.21 98.1 371.21 98.1 371.21 L 7.44 246.54 C 2.61 239.91 0 231.91 0 223.7 C -0.01 211.27 5.95 199.56 16.01 192.24 C 22.64 187.41 30.64 184.8 38.85 184.8 C 51.28 184.79 62.99 190.75 70.31 200.81 C 70.31 200.81 70.31 200.81 70.31 200.81 L 75.07 207.35 L 75.07 67.75 C 75.07 57.58 79.07 47.8 86.19 40.53 C 93.32 33.27 103.02 29.08 113.19 28.88 C 113.22 28.88 113.26 28.88 113.29 28.88 L 113.83 28.88 C 113.86 28.88 113.9 28.88 113.93 28.88 C 119.18 28.88 124.37 29.96 129.18 32.07 C 132.58 33.56 135.76 35.53 138.61 37.92 C 138.85 27.91 142.96 18.38 150.05 11.32 C 157.15 4.26 166.71 0.2 176.71 0.01 C 176.75 0.01 176.78 0.01 176.81 0.01 L 177.36 0 C 177.39 0 177.42 0 177.45 0 C 182.7 0 187.89 1.09 192.7 3.19 C 197.33 5.22 201.51 8.12 205.03 11.74 C 211.69 18.55 215.68 27.53 216.27 37.03 C 223.03 31.46 231.48 28.33 240.24 28.16 C 240.27 28.16 240.3 28.16 240.34 28.16 L 240.88 28.16 C 240.91 28.16 240.95 28.16 240.98 28.16 C 246.23 28.16 251.42 29.24 256.23 31.34 C 260.85 33.37 265.04 36.27 268.56 39.89 C 275.8 47.29 279.86 57.24 279.87 67.59 C 279.87 67.59 279.87 67.6 279.87 67.6 L 279.87 101.43 Z " fill-rule="evenodd" fill="rgb(77,124,32)"/><mask id="_mask_wgREZw2W5jLqDOV4GTBWk1DEqGNJETGd" x="-200%" y="-200%" width="400%" height="400%"><rect x="-200%" y="-200%" width="400%" height="400%" style="fill:white;"/><path d=" M 305.085 102.407 C 288.897 102.098 275.646 115.656 275.646 131.847 L 275.646 194.801 L 269.871 194.801 L 269.871 67.601 C 269.871 51.409 256.62 37.851 240.433 38.161 C 224.746 38.461 212.122 51.271 212.122 67.031 L 212.122 194.801 L 206.347 194.801 L 206.347 39.448 C 206.347 23.256 193.096 9.698 176.908 10.008 C 161.221 10.308 148.597 23.119 148.597 38.878 L 148.597 194.801 L 142.822 194.801 L 142.822 68.323 C 142.822 52.131 129.571 38.573 113.384 38.883 C 97.697 39.183 85.073 51.993 85.073 67.752 L 85.073 238.108 L 62.227 206.693 C 52.848 193.796 34.789 190.944 21.891 200.324 C 8.995 209.704 6.143 227.762 15.523 240.66 L 106.19 365.33 C 112.71 374.296 123.127 379.6 134.212 379.6 L 276.847 379.6 C 292.925 379.6 306.892 368.538 310.575 352.886 L 329.71 271.561 C 332.158 261.157 333.395 250.505 333.395 239.817 L 333.395 131.277 C 333.396 115.518 320.772 102.708 305.085 102.407 L 305.085 102.407 Z " fill="black" stroke="none"/></mask><path d=" M 305.085 102.407 C 288.897 102.098 275.646 115.656 275.646 131.847 L 275.646 194.801 L 269.871 194.801 L 269.871 67.601 C 269.871 51.409 256.62 37.851 240.433 38.161 C 224.746 38.461 212.122 51.271 212.122 67.031 L 212.122 194.801 L 206.347 194.801 L 206.347 39.448 C 206.347 23.256 193.096 9.698 176.908 10.008 C 161.221 10.308 148.597 23.119 148.597 38.878 L 148.597 194.801 L 142.822 194.801 L 142.822 68.323 C 142.822 52.131 129.571 38.573 113.384 38.883 C 97.697 39.183 85.073 51.993 85.073 67.752 L 85.073 238.108 L 62.227 206.693 C 52.848 193.796 34.789 190.944 21.891 200.324 C 8.995 209.704 6.143 227.762 15.523 240.66 L 106.19 365.33 C 112.71 374.296 123.127 379.6 134.212 379.6 L 276.847 379.6 C 292.925 379.6 306.892 368.538 310.575 352.886 L 329.71 271.561 C 332.158 261.157 333.395 250.505 333.395 239.817 L 333.395 131.277 C 333.396 115.518 320.772 102.708 305.085 102.407 L 305.085 102.407 Z " fill="rgb(136,204,0)" mask="url(#_mask_wgREZw2W5jLqDOV4GTBWk1DEqGNJETGd)" vector-effect="non-scaling-stroke" stroke-width="20" stroke="rgb(77,124,32)" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"/><path d=" M 305.085 102.407 C 288.897 102.098 275.646 115.656 275.646 131.847 L 275.646 194.801 L 269.871 194.801 L 269.871 67.601 C 269.871 51.409 256.62 37.851 240.433 38.161 C 224.746 38.461 212.122 51.271 212.122 67.031 L 212.122 194.801 L 206.347 194.801 L 206.347 39.448 C 206.347 23.256 193.096 9.698 176.908 10.008 C 161.221 10.308 148.597 23.119 148.597 38.878 L 148.597 194.801 L 142.822 194.801 L 142.822 68.323 C 142.822 52.131 129.571 38.573 113.384 38.883 C 97.697 39.183 85.073 51.993 85.073 67.752 L 85.073 238.108 L 62.227 206.693 C 52.848 193.796 34.789 190.944 21.891 200.324 C 8.995 209.704 6.143 227.762 15.523 240.66 L 106.19 365.33 C 112.71 374.296 123.127 379.6 134.212 379.6 L 276.847 379.6 C 292.925 379.6 306.892 368.538 310.575 352.886 L 329.71 271.561 C 332.158 261.157 333.395 250.505 333.395 239.817 L 333.395 131.277 C 333.396 115.518 320.772 102.708 305.085 102.407 L 305.085 102.407 Z " fill="rgb(136,204,0)"/><path d=" M 361.597 102.407 C 377.785 102.098 391.035 115.656 391.035 131.847 L 391.035 194.801 L 396.81 194.801 L 396.81 67.601 C 396.81 51.409 410.061 37.851 426.249 38.161 C 441.936 38.461 454.56 51.271 454.56 67.031 L 454.56 194.801 L 460.335 194.801 L 460.335 39.448 C 460.335 23.256 473.586 9.698 489.773 10.008 C 505.46 10.308 518.084 23.119 518.084 38.878 L 518.084 194.801 L 523.859 194.801 L 523.859 68.323 C 523.859 52.131 537.11 38.573 553.298 38.883 C 568.985 39.183 581.609 51.993 581.609 67.752 L 581.609 238.108 L 604.455 206.693 C 613.834 193.796 631.892 190.944 644.791 200.324 C 657.687 209.704 660.538 227.762 651.159 240.66 L 560.491 365.33 C 553.971 374.296 543.555 379.6 532.469 379.6 L 389.835 379.6 C 373.756 379.6 359.789 368.538 356.106 352.886 L 336.971 271.561 C 334.523 261.157 333.287 250.505 333.287 239.817 L 333.287 131.277 C 333.286 115.518 345.91 102.708 361.597 102.407 L 361.597 102.407 Z  M 528.07 37.92 C 530.92 35.53 534.1 33.56 537.5 32.07 C 542.31 29.96 547.5 28.88 552.75 28.88 C 552.79 28.88 552.82 28.88 552.85 28.88 L 553.39 28.88 C 553.43 28.88 553.46 28.88 553.49 28.88 C 563.67 29.08 573.37 33.27 580.49 40.53 C 587.62 47.8 591.61 57.58 591.61 67.75 L 591.61 207.35 L 596.37 200.81 C 596.37 200.81 596.37 200.81 596.37 200.81 C 603.69 190.75 615.4 184.79 627.83 184.8 C 636.04 184.8 644.04 187.41 650.68 192.24 C 660.73 199.56 666.69 211.27 666.68 223.7 C 666.68 231.91 664.07 239.91 659.24 246.54 L 568.58 371.21 C 568.58 371.21 568.58 371.21 568.58 371.21 C 560.18 382.76 546.74 389.6 532.47 389.6 C 532.47 389.6 532.47 389.6 532.47 389.6 L 389.83 389.6 C 389.83 389.6 389.83 389.6 389.83 389.6 C 379.77 389.6 370 386.2 362.11 379.95 C 354.23 373.7 348.68 364.97 346.37 355.18 C 346.37 355.18 346.37 355.18 346.37 355.18 L 327.24 273.85 C 327.24 273.85 327.24 273.85 327.24 273.85 C 324.61 262.7 323.29 251.28 323.29 239.82 C 323.29 239.82 323.29 239.82 323.29 239.82 L 323.29 131.28 L 323.29 131.28 C 323.28 121.1 327.28 111.32 334.4 104.06 C 341.53 96.79 351.23 92.61 361.4 92.41 C 361.44 92.41 361.47 92.41 361.5 92.41 L 362.04 92.4 C 362.08 92.4 362.11 92.4 362.14 92.4 C 367.39 92.4 372.58 93.49 377.39 95.59 C 380.79 97.08 383.96 99.05 386.81 101.43 L 386.81 67.6 C 386.81 67.6 386.81 67.59 386.81 67.59 C 386.82 57.24 390.89 47.29 398.12 39.89 C 401.64 36.27 405.83 33.37 410.45 31.34 C 415.26 29.24 420.46 28.16 425.7 28.16 C 425.74 28.16 425.77 28.16 425.8 28.16 L 426.34 28.16 C 426.38 28.16 426.41 28.16 426.44 28.16 C 435.2 28.33 443.65 31.46 450.41 37.03 C 451 27.53 454.99 18.55 461.65 11.74 C 465.17 8.12 469.36 5.22 473.98 3.19 C 478.79 1.09 483.98 0 489.23 0 C 489.26 0 489.29 0 489.33 0 L 489.87 0.01 C 489.9 0.01 489.93 0.01 489.97 0.01 C 499.98 0.2 509.53 4.26 516.63 11.32 C 523.73 18.38 527.83 27.91 528.07 37.92 Z " fill-rule="evenodd" fill="rgb(77,124,32)"/><mask id="_mask_GtW982g0MqkPPf7K9iBScqO6PQ7Yy6is" x="-200%" y="-200%" width="400%" height="400%"><rect x="-200%" y="-200%" width="400%" height="400%" style="fill:white;"/><path d=" M 361.597 102.407 C 377.785 102.098 391.035 115.656 391.035 131.847 L 391.035 194.801 L 396.81 194.801 L 396.81 67.601 C 396.81 51.409 410.061 37.851 426.249 38.161 C 441.936 38.461 454.56 51.271 454.56 67.031 L 454.56 194.801 L 460.335 194.801 L 460.335 39.448 C 460.335 23.256 473.586 9.698 489.773 10.008 C 505.46 10.308 518.084 23.119 518.084 38.878 L 518.084 194.801 L 523.859 194.801 L 523.859 68.323 C 523.859 52.131 537.11 38.573 553.298 38.883 C 568.985 39.183 581.609 51.993 581.609 67.752 L 581.609 238.108 L 604.455 206.693 C 613.834 193.796 631.892 190.944 644.791 200.324 C 657.687 209.704 660.538 227.762 651.159 240.66 L 560.491 365.33 C 553.971 374.296 543.555 379.6 532.469 379.6 L 389.835 379.6 C 373.756 379.6 359.789 368.538 356.106 352.886 L 336.971 271.561 C 334.523 261.157 333.287 250.505 333.287 239.817 L 333.287 131.277 C 333.286 115.518 345.91 102.708 361.597 102.407 L 361.597 102.407 Z " fill="black" stroke="none"/></mask><path d=" M 361.597 102.407 C 377.785 102.098 391.035 115.656 391.035 131.847 L 391.035 194.801 L 396.81 194.801 L 396.81 67.601 C 396.81 51.409 410.061 37.851 426.249 38.161 C 441.936 38.461 454.56 51.271 454.56 67.031 L 454.56 194.801 L 460.335 194.801 L 460.335 39.448 C 460.335 23.256 473.586 9.698 489.773 10.008 C 505.46 10.308 518.084 23.119 518.084 38.878 L 518.084 194.801 L 523.859 194.801 L 523.859 68.323 C 523.859 52.131 537.11 38.573 553.298 38.883 C 568.985 39.183 581.609 51.993 581.609 67.752 L 581.609 238.108 L 604.455 206.693 C 613.834 193.796 631.892 190.944 644.791 200.324 C 657.687 209.704 660.538 227.762 651.159 240.66 L 560.491 365.33 C 553.971 374.296 543.555 379.6 532.469 379.6 L 389.835 379.6 C 373.756 379.6 359.789 368.538 356.106 352.886 L 336.971 271.561 C 334.523 261.157 333.287 250.505 333.287 239.817 L 333.287 131.277 C 333.286 115.518 345.91 102.708 361.597 102.407 L 361.597 102.407 Z " fill="rgb(136,204,0)" mask="url(#_mask_GtW982g0MqkPPf7K9iBScqO6PQ7Yy6is)" vector-effect="non-scaling-stroke" stroke-width="20" stroke="rgb(77,124,32)" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"/><path d=" M 361.597 102.407 C 377.785 102.098 391.035 115.656 391.035 131.847 L 391.035 194.801 L 396.81 194.801 L 396.81 67.601 C 396.81 51.409 410.061 37.851 426.249 38.161 C 441.936 38.461 454.56 51.271 454.56 67.031 L 454.56 194.801 L 460.335 194.801 L 460.335 39.448 C 460.335 23.256 473.586 9.698 489.773 10.008 C 505.46 10.308 518.084 23.119 518.084 38.878 L 518.084 194.801 L 523.859 194.801 L 523.859 68.323 C 523.859 52.131 537.11 38.573 553.298 38.883 C 568.985 39.183 581.609 51.993 581.609 67.752 L 581.609 238.108 L 604.455 206.693 C 613.834 193.796 631.892 190.944 644.791 200.324 C 657.687 209.704 660.538 227.762 651.159 240.66 L 560.491 365.33 C 553.971 374.296 543.555 379.6 532.469 379.6 L 389.835 379.6 C 373.756 379.6 359.789 368.538 356.106 352.886 L 336.971 271.561 C 334.523 261.157 333.287 250.505 333.287 239.817 L 333.287 131.277 C 333.286 115.518 345.91 102.708 361.597 102.407 L 361.597 102.407 Z " fill="rgb(136,204,0)"/></g></g></svg>';
              
              // Blink quickly
              setTimeout(function() {
                exHeader.textContent = "Blink quickly";
                palmingoutput.innerHTML = '<p>&nbsp;</p><svg class="blinkquickly" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; width:100%;" viewBox="0 0 501 202" width="501pt" height="202pt" preserveAspectRatio="xMidYMin"><defs><clipPath id="_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6"><rect width="501" height="202" /></clipPath></defs><g clip-path="url(#_clipPath_pWFUjqryexT3w1Xyz9Ir1RCexbenTqY6)"><g><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000013" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd"><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000017" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_nXnWzWQZVJf3WgZlx2PUH7ezR2SPcbhd)"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,217.672,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="370.6045623594781" cy="69.86306401443477" r="152.93265981654383" fill="url(#_rgradient_0)" /><g><circle vector-effect="non-scaling-stroke" cx="399.9999999999999" cy="101.00000000000011" r="39.9884753726767" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="99.41490065862888" r="25.13518144317777" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="408.89966211351896" cy="89.2249589490973" r="8.410743607787879" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="399.81950408080627" cy="80.8142153413092" r="3.364297443115163" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="392.81723446251874" cy="80.8142153413092" r="1.6821487215576099" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R"><circle vector-effect="non-scaling-stroke" cx="400" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_RQ8VXRAh2Vvq3L3BYfmXzpFdvjiKeK3R)" class="eyelids"><path d=" M 312.5 13.5 L 487.5 13.5 L 487.5 102.516 C 427.833 122.272 369.51 122.282 312.5 102.516 L 312.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 312.5 102.516 C 367.722 110.717 426.066 110.727 487.5 102.516 L 487.5 191.532 L 312.5 191.532 L 312.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g><g><circle vector-effect="non-scaling-stroke" cx="101.00000000000013" cy="101.00000000000018" r="101.00000000000011" fill="rgb(136,204,0)" /><circle vector-effect="non-scaling-stroke" cx="101.0000000000001" cy="101.00000000000027" r="89.15388224255213" fill="rgb(84,145,16)" /><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /><clipPath id="_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN"><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000011" r="86.55577268884764" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_OpWKe2KrnuaLnmXneJruEQiTSQ0mj1tN)"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(305.865,0,0,305.865,-81.328,-83.07)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,255)" /><stop offset="100%" stop-opacity="1" style="stop-color:rgb(214,237,178)" /></radialGradient><circle vector-effect="non-scaling-stroke" cx="71.60456235947805" cy="69.86306401443471" r="152.93265981654383" fill="url(#_rgradient_1)" /><g><circle vector-effect="non-scaling-stroke" cx="100.99999999999983" cy="101.00000000000006" r="39.988475372676675" fill="rgb(130,195,0)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="99.41490065862882" r="25.135181443177785" fill="rgb(77,124,32)" /><circle vector-effect="non-scaling-stroke" cx="109.89966211351884" cy="89.22495894909724" r="8.410743607787907" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="100.81950408080627" cy="80.81421534130914" r="3.364297443115177" fill="rgb(255,255,255)" /><circle vector-effect="non-scaling-stroke" cx="93.81723446251874" cy="80.81421534130914" r="1.6821487215575956" fill="rgb(255,255,255)" /></g></g><clipPath id="_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i"><circle vector-effect="non-scaling-stroke" cx="101.00000000000011" cy="100.99999999999994" r="87.5" fill="rgb(255,255,255)" /></clipPath><g clip-path="url(#_clipPath_ljJqvodtt6AXKjmoE1LJLIsUeoCvgB8i)" class="eyelids"><path d=" M 13.5 13.5 L 188.5 13.5 L 188.5 102.516 C 128.833 122.272 70.51 122.282 13.5 102.516 L 13.5 13.5 Z " fill="rgb(66,113,13)" class="toplid" /><path d=" M 13.5 102.516 C 68.722 110.717 127.066 110.727 188.5 102.516 L 188.5 191.532 L 13.5 191.532 L 13.5 102.516 Z " fill="rgb(66,113,13)" class="bottomlid" /></g></g></g></g></svg><p>&nbsp;</p>';

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

                  // Display next exercise button
                  nextEx.classList.remove("hide");

                  // Initialize next exercise
                  nextEx.onclick = function() {
                    alertify.log('coming soon...');
                    // UpandDownInstr();
                    return false;
                  };
                }, 5000);
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
      });
    },
    diagonallyInstrR = function() {
      var msg1 = "And now, vice versa!<br>Repeat the previous exercise, but this time, begin with the upper-right corner down to the lower-left.<br><br>",
          msg2 = "(Repeat 3 times for 10 seconds).";

      Swal.fire({
        title: "Diagonally Reverse",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + "</p>",
        type: "info"
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
      });
    },
    rectangleInstrR  = function() {
      var msg1 = "Again vice versa!<br>Repeat the exercise in the other direction. \"Draw\" rectangle in the air from the upper-left corner and proceed counterclockwise.<br><br>",
          msg2 = "(Repeat 2 times for 10 seconds).";

      Swal.fire({
        title: "Rectangle Reverse",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + "</p>",
        type: "info"
      });
    },
    clockInstr       = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "Imagine you are looking at a clock. Starting from number 12, look at where the number 3 would be, then 6, 9 and finally returning to the starting position at 19.<br><br>",
          msg3 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg4 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg5 = "(Repeat 2 times for 10 seconds).";
      
      Swal.fire({
        title: "Clock",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      });
    },
    clockInstrR      = function() {
      var msg1 = "Again vice versa!<br>Once again, imagine your clock. Start from number 12, then look where the number 9 would be, then 6, 3, and back to 12.<br><br>",
          msg2 = "(Repeat 2 times for 10 seconds).";

      Swal.fire({
        title: "Clock Reverse",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + "</p>",
        type: "info"
      });
    },
    snakeInstr       = function() {
      var msg1 = "Keep your head motionless. Only allow your eyes to do the work.<br><br>",
          msg2 = "Visualize a snake in front of you. Take your eyes to the head of the snake and \"draw\" the snake from its head down to its tail, and back up again from its tail to its head, up - down - up - down...<br><br>",
          msg3 = "As you know, the majority of vision problems are caused by a disability or overstrain of the eye muscles.<br><br>",
          msg4 = "The movements should be smooth and do not cause any discomfort.<br><br>",
          msg5 = "(Exercise duration 10 seconds).";

      Swal.fire({
        title: "Snake",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
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
        title: "Focusing",
        html: "<p class=\"tc\" style=\"font-size: 1em; margin: 0 0 1em 0; text-decoration: underline;\">Instructions for this exercise</p><p class=\"tl\">" + msg1 + msg2 + msg3 + msg4 + msg5 + "</p>",
        type: "info"
      });
    };

// Are You Ready?
// Get Set?
// Start audio for audio exercise

// Always start view from stop
window.scrollTo(0, 0);

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
    msg3 = "Training consists of 8 exercises:<br>1. \"Palming\" (Exercise last from 90 sec.)<br>2. \"Down and Up\" (10 seconds).<br>3. \"Left-Right\" (10 seconds).<br>4. \"Looking diagonally\" (2 directions of 30 seconds).<br>5. \"Rectangle\" (both sides 20 seconds)<br>6. \"Clock\" (both sides 20 seconds)<br>7. \"Snake\" (20 seconds)<br>8. \"Focusing\" (30 seconds)<br><br>",
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
      $("[data-display=mainpage]").fadeOut();
      setTimeout(function() {
        $("[data-display=mainpage] svg").remove();
        $(".home.leftbtns, .home.rightbtns").addClass("hide");
        //$(".exercise.rightbtns").removeClass("hide");
        $("[data-display=exercise]").fadeIn();
        palmingInstr();
      }, 350);
    }
  });
};

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