function profileCtrl($scope, $http, $routeParams){
  $http.post('profile/getuserdata.php', {rollno: $routeParams.userID}).success(function(data) {
    $scope.data = data;
  });
  //updating user data
    // name
    $("#editData").click(function(){
      $("#editDataMsg").html("<img style='height:25px;' src='images/loading.gif'></img>");
      $.post('ajax/update.php', {name: $("#editName").val(), branch: $("#editBranch").val()})
        .done(function(){$("#editDataMsg").html("Saved.");})
        .fail(function(){$("#editDataMsg").html("Server error.");});
    });
  // update password
  $('#bChangePass').click(function(){
    $('#passChangeMsg').html("<img style='width:20px;height:20px;' src='images/loading.gif'></img>");
    $.post('ajax/accountChangePass.php', {oldPass: $('#oldPass').val(),
        newPass: $('#newPass').val(), newPassConf: $('#newPassConf').val()}, function(data){
      $('#passChangeMsg').text(data);
      $('#oldPass').val('');
      $('#newPass').val('');
      $('#newPassConf').val('');
    });
  });
}
function complaintCtrl($scope, $http){
  $http.post("ajax/complaint/alltab.php").success(function(data){
    $scope.complaints = data;
  });
  $scope.order = "-time";
  $scope.vote = function(c){
    var id = c.complaintid;
    if(c.voted == "1"){
      $http.post("ajax/complaint/vote.php", {complaintid: c.complaintid, vote: 0}).success(function(data){
        if(data == "1"){ //unvoted
          c.votes--;
        } else { //alredy unvoted
          alert("It looks like you already unvoted on this complaint.");
        }
        c.voted = 0;
      });
    }else{
      $http.post("ajax/complaint/vote.php", {complaintid: c.complaintid, vote: 1}).success(function(data){
        if(data == "1"){ //voted
          c.votes++;
        } else { //already voted
          alert("It looks like you already voted on this complaint.");
        }
        c.voted = 1;
      });
    }
  }
}
function memeCtrl($scope, $http){
  $http.post("ajax/meme/allmemes.php").success(function(data){
    $scope.memes = data;
  });
  $scope.order = "-time";
  $("#memeReload").click(function(){
    $http.post("ajax/meme/allmemes.php").success(function(data){
      $scope.memes = data;
    });
  });
  // $scope.vote = function(c){
  //  var id = c.complaintid;
  //  if(c.voted == "1"){
  //    $http.post("ajax/meme/vote.php", {complaintid: c.complaintid, vote: 0}).success(function(data){
  //      if(data == "1"){ //unvoted
  //        c.votes--;
  //      } else { //alredy unvoted
  //        alert("It looks like you already unvoted on this complaint.");
  //      }
  //      c.voted = 0;
  //    });
  //  }else{
  //    $http.post("ajax/meme/vote.php", {complaintid: c.complaintid, vote: 1}).success(function(data){
  //      if(data == "1"){ //voted
  //        c.votes++;
  //      } else { //already voted
  //        alert("It looks like you already voted on this complaint.");
  //      }
  //      c.voted = 1;
  //    });
  //  }
  // }
}