$(function() {
    var score = 0;
    var computerChoice = Math.floor(Math.random() * 100 + 1) + 25,
        wins = 0,
        losses = 0;
        var crystals = {};
    reset();

    /*var crystals = {
        "abc": generateRandomNumber(),
        "def": generateRandomNumber(),
        "ghi": generateRandomNumber(),
        "jkl": generateRandomNumber()
    };*/
    function reset() {
        
        score = 0;
        $(".score").text(score);
        computerChoice = Math.floor(Math.random() * 100 + 1) + 25;
        $("small").html(computerChoice);


        $("img").each(function(){
            var idOfImg = $(this).attr('id');
            crystals[idOfImg] = generateRandomNumber();
            $("span#" + idOfImg).text(crystals[idOfImg]);
            console.log(crystals[idOfImg]);
        });

        console.log(crystals);



        function generateRandomNumber() {
            return Math.floor(Math.random() * (computerChoice / 4)) + 1;
        }
        
        console.log(crystals);


        
        
    }

        $("img").click(function() {
            var imgId = $(this).attr("id");
            console.log(imgId);

            

            // imgId = "abc"
            score += crystals[imgId];

            $(".score").text(score);

            if (score === computerChoice) {
                alert("You win!");
                wins++;
                $("#wins-counter").text(wins);
                reset();
            }
            else if (score > computerChoice) {
                alert("You lose!");
                losses++;
                $("#losses-counter").text(losses);   
                reset();
            }


            /*
            //if computerChoice is equal score 
            if(computerChoice === score) {
                alert('win');
            } else if(score > computerChoice) {
                alert('lose');
            }
            */

        });
    });
