$(document).ready(function() {
	$("#cbTabs").tabs({
		heightStyle: "fill",
		cache: true,
		activate: function(e, ui) {
			switch($("#cbTabs").tabs("option","active")){
				case 1:
					$(ui.newPanel).html("");
					$.post("ajax/complaint/newtab.php", {}, function(data){
						for (var i = 0; i < data.length; i++) {
							datai = data[i];
							var post = cbPost(datai.complaintid, datai.complaint, datai.name, datai.rollno, datai.votes, datai.time, datai.voted);
							$(ui.newPanel).append(post);
							$(post).slideUp(0);
							$(post).slideDown(500);
						};
					}, "json");
					break;
				case 2:
					$(ui.newPanel).html("");
					$.post("ajax/complaint/toptab.php", {}, function(data){
						for (var i = 0; i < data.length; i++) {
							datai = data[i];
							var post = cbPost(datai.complaintid, datai.complaint, datai.name, datai.rollno, datai.votes, datai.time, datai.voted);
							$(ui.newPanel).append(post);
							$(post).slideUp(0);
							$(post).slideDown(500);
						};
					}, "json");
					break;
				case 3:
					$(ui.newPanel).html("");
					$.post("ajax/complaint/alltab.php", {}, function(data){
						for (var i = 0; i < data.length; i++) {
							datai = data[i];
							var post = cbPost(datai.complaintid, datai.complaint, datai.name, datai.rollno, datai.votes, datai.time, datai.voted);
							$(ui.newPanel).append(post);
							$(post).slideUp(0);
							$(post).slideDown(1000);
						};
					}, "json");
					break;
			}
		}
	});

	$("#bSendComplaint").button().click(function(){
		$("#complaintMsg").text("Sending..");
		$.post("ajax/complaint/add.php", {comp: $("#complaintInp").val()}, function(data){
			$("#complaintMsg").html(data);
		});
	});
});

function cbPost(complaintid, complaint, poster, rollno, votes, time, voted){
	var postdiv = document.createElement("div");
	var votesdiv = document.createElement("div");
	var infodiv = document.createElement("div");
	var compdiv = document.createElement("div");
	var notvotesdiv = document.createElement("div");
	var plusdiv = document.createElement("div");

	plusdiv.setAttribute("complaintid", complaintid);
	plusdiv.setAttribute("voted", voted);

	plusdiv.setAttribute("class", "cbplus");
	votesdiv.setAttribute("class", "cbvotes");
	notvotesdiv.setAttribute("class", "cbnotvotes");
	postdiv.setAttribute("class", "cbpost");
	infodiv.setAttribute("class", "cbinfo");
	compdiv.setAttribute("class", "cbcomp");

	if(!poster){
		poster = rollno;
	}

	$(plusdiv).button({
      icons: {
        primary: "ui-icon-plusthick"
      },
      text: false
    });

	compdiv.innerHTML = "<a href=complaintPage.php?comp="+complaintid+">"+"#"+complaintid+" "+complaint+"</a>";
	infodiv.innerHTML = ("submitted by <a href='profile.php?rollno=" 
		+ rollno + "'>" + poster + "</a> at " + time);
	votesdiv.appendChild(document.createTextNode(votes));

	notvotesdiv.appendChild(compdiv);
	notvotesdiv.appendChild(infodiv);

	postdiv.appendChild(plusdiv);
	postdiv.appendChild(votesdiv);
	postdiv.appendChild(notvotesdiv);

	if(voted=='1'){
		$(plusdiv).button("option", "icons", {primary: "ui-icon-minusthick"});
	}

	$(plusdiv).click(function(){
		var btn = $(this);
		if(btn.attr("voted") == "1"){
			$.post("ajax/complaint/vote.php", {complaintid: btn.attr("complaintid"), vote: 0}, function(data){
				if(data == "1"){ //unvoted
					btn.button("option", "icons", {primary: "ui-icon-plusthick"});
					btn.next().html((+btn.next().html())-1);
				} else { //alredy unvoted
					alert("It looks like you already unvoted on this complaint.");
				}
				btn.attr("voted", 0);
			});
		}else{
			$.post("ajax/complaint/vote.php", {complaintid: btn.attr("complaintid"), vote: 1}, function(data){
				if(data == "1"){ //voted
					btn.button("option", "icons", {primary: "ui-icon-minusthick"});
					btn.next().html((+btn.next().html())+1);
				} else { //already voted
					alert("It looks like you already voted on this complaint.");
				}
				btn.attr("voted", 1);
			});
		}
	});

	return postdiv;
}