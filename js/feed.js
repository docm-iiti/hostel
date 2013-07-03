$(document).ready(function(){

	//Settings
	var feedScrollTime = 500;
	var feedScrollTimeInterval = 5000;

	/* ------Enter the feeds here------
	
	Template: 
	newFeed({title:"Enter title here", 
		description:"Enter description here", 
		date:"Enter date here"});

	-----------------------/**/

	newFeed({title:"Test Post No.1", 
		description:"Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em" 
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", 
		date:"April 1 2000"});
	
	newFeed({title:"Post No.2", 
		description:"Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", 
		date:"April 1 2000"});
	
	newFeed({title:"Test Post 3", 
		description:"Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", 
		date:"April 1 2000"});
	
	newFeed({title:"Fourth Post", 
		description:"Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em" 
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em"
			+ "Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", 
		date:"April 1 2000"});
	
	newFeed({title:"Test Post No.6", 
		description:"Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", 
		date:"April 1 2000"});
	
	newFeed({title:"Test Post No.5", 
		description:"Dear Slim, I wrote but you still ain't callin I left my cell, my pager, and my home phone at the bottom I sent two letters back in autumn, you must not-a got 'em", 
		date:"April 1 2000"});



	//scrolling

	var curfeedno = 0;
	var postheight = 268;
	var autoplay = true;
	function scrollToNextFeed(){
		if(autoplay){
			if (curfeedno == noOfFeeds-1) {curfeedno=0;} else {curfeedno++;};
			// $("#feedmain").animate({scrollTop: ($("#feedmain>.feedpost").eq(curfeedno)).position().top}, feedScrollTimeInterval);
			$("#feedmain").animate({scrollTop: (curfeedno*postheight)}, feedScrollTime);
		}
	}

	setInterval(scrollToNextFeed, feedScrollTimeInterval);
	$("#feed").mouseenter(function(){
		autoplay = false;
	});
	$("#feed").mouseleave(function(){
		autoplay = true;
	});

});


var noOfFeeds = 0;
function newFeed(feed){
	noOfFeeds++;

	var head = document.createTextNode(feed.title);
	var des = document.createTextNode(feed.description);
	var date = document.createTextNode(feed.date);

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
