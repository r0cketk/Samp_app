$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getblog.php?id='+id, displayblog);
});

function displayblog(data) {
	var blog = data.item;
	console.log(blog);
	$('#blogPic').attr('src', 'pics/' + blog.picture);
	$('#fullName').text(blog.firstName + ' ' + blog.lastName);
	$('#blogTitle').text(blog.title);
	$('#city').text(blog.city);
	console.log(blog.officePhone);
	if (blog.managerId>0) {
		$('#actionList').append('<li><a href="blog.html?id=' + blog.managerId + '"><h3>View Manager</h3>' +
				'<p>' + blog.managerFirstName + ' ' + blog.managerLastName + '</p></a></li>');
	}
	if (blog.reportCount>0) {
		$('#actionList').append('<li><a href="bloglist.html?id=' + blog.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + blog.reportCount + '</p></a></li>');
	}
	if (blog.email) {
		$('#actionList').append('<li><a href="mailto:' + blog.email + '"><h3>Email</h3>' +
				'<p>' + blog.email + '</p></a></li>');
	}
	if (blog.officePhone) {
		$('#actionList').append('<li><a href="tel:' + blog.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + blog.officePhone + '</p></a></li>');
	}
	if (blog.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + blog.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + blog.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + blog.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + blog.cellPhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
