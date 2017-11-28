$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'listar_samp_especialistas.php?id='+id, displayblog);
});

function displayblog(data) {
	var blog = data.item;
	console.log(blog);
	$('#blogTitle').text(blog.nome);
	$('#city').text(blog.cidade);
	console.log(blog.estado);
	if (blog.nome) {
		$('#actionList').append('<li><a href="tel:' + blog.nome + '"><h3>Call Office</h3>' +
				'<p>' + blog.nome + '</p></a></li>');
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
