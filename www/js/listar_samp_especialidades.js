var serviceURL = "http://www.agmp.org.br/services/";

var blog;

$('#blogListPage').bind('pageinit', function(event) {
	getblogList();
});

function getblogList() {
	$.getJSON(serviceURL + 'listar_samp_especialidades.php', function(data) {
		$('#blogList li').remove();
		blog = data.items;
		$.each(blog, function(index, blog) {
			$('#blogList').append('<li class="ui-corner-all" style="margin: 10px 20px"><a href="samp_especialistas.html?id=' + blog.id + '"  data-ajax="false" data-icon="arrow-l" data-theme="c">' +
					'<h4>' + blog.categoria + '</h4>' +
					'');
		});
		$('#blogList').listview('refresh');
	});
}