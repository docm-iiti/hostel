$(document).ready(function(){

	//Enter the feeds here
	newFeed("Test Post No.1", "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 1 2000");
	newFeed("Test Post No.2", "Dear Slim, I wroter, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 1 2000");
	newFeed("Test Post 3!!", "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 2 2000");
	newFeed("Test Post No.4", "wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 1 2000");
	newFeed("Test Post No.5", "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 1 2000");
	newFeed("Six", "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 1 2000");
	newFeed("Post No.7", "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 5 2022");
	newFeed("Test Post", "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "September 1 2000");
	newFeed("Test Post", "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", "April 1 2000");


});

function newFeed(title, description, date){
	var head = document.createTextNode(title);
	var des = document.createTextNode(description);
	var date = document.createTextNode(date);

	var h3head = document.createElement('h3');
	h3head.setAttribute("class", "feedposthead");
	h3head.appendChild(head);

	var pdes = document.createElement('p');
	pdes.setAttribute("class", "feedpostdes");
	pdes.appendChild(des);

	var pdate = document.createElement('p');
	pdate.setAttribute("class", "feedpostdate")
	pdate.appendChild(date);

	var post = document.createElement('div');
	post.setAttribute("class", "feedpost");
	post.appendChild(h3head);
	post.appendChild(pdes);
	post.appendChild(pdate);

	$("#feedmain").append(post);
}
