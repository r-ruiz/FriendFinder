var friendsData = require("../data/friends.js");

function apiRoutes(app) {

    // GET route
    // =============================================================
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // A POST routes
    // =============================================================
    app.post("/api/friends", function (req, res) {

        // Parse new friend
        // =============================================================
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
            for(var i=0; i < req.body.scores.length; i++){
                scoresArray.push( parseInt(req.body.scores[i]) )
            }
        newFriend.scores = scoresArray;

        // Look up a match
        // =============================================================
        var compareArray = [];
        for(var i=0; i < friendsData.length; i++){

            // Find the score
            // =============================================================
            var friendCompare = 0;
            for(var j=0; j < newFriend.scores.length; j++){
                friendCompare += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
            }
            compareArray.push(friendCompare);
        }

        // Determine the best match
        // =============================================================
        var celebMatch = 0;
        for(var i=1; i < compareArray.length; i++){
            // Lower number means a better match
            // =============================================================
            if(compareArray[i] <= compareArray[celebMatch]){
                celebMatch = i;
            }
        }
        var bestFriendMatch = friendsData[celebMatch];
        res.json(bestFriendMatch);
        // Push to the friends data array
        // =============================================================
        friendsData.push(newFriend);
    });
}

// Export for use in main server.js file
// =============================================================
module.exports = apiRoutes;