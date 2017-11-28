var serviceURL = "http://www.agmp.org.br/services/";

var blog;

$('#blogListPage').bind('pageinit', function(event) {
	getblogList();
});

function getblogList() {
	$.getJSON(serviceURL + 'listar_posts.php', function(data) {
		$('#blogList li').remove();
		blog = data.items;
		$.each(blog, function(index, blog) {
			$('#blogList').append('<li><a href="agmp.html?id=' + blog.id + '">' +
					'<img src="http://www.agmp.org.br/images/fotos/' + blog.foto + '"/>' +
					'<h4>' + blog.assunto + '</h4>' +
					'<p>' + blog.nome + '</p></a></li>');
		});
		$('#blogList').listview('refresh');
	});
}