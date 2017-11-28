var serviceURL = "http://www.agmp.org.br/services/";

var blog;

$('#blogListPage').bind('pageinit', function(event) {
	getblogList();
});

function getblogList() {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'listar_samp_especialistas.php?id='+id, function(data) {
		$('#blogList li').remove();
		blog = data.items;
		$.each(blog, function(index, blog) {
			$('#blogList').append('<li class="ui-corner-all" style="margin: 10px 20px"><a href="tel:' + blog.tel + '" data-role="button" data-icon="tel" class="phone_icon"></a>' +
					'<h4>' + blog.nome + '</h4>' +
					'<p><strong>Telefone</strong>: ' + blog.tel + '</p>' +
					'<p><strong>Endereço</strong>: ' + blog.logradouro + ' ' + blog.endereco + ' ' + blog.complemento + ' - ' + blog.bairro + '<br><strong>CEP</strong>: ' + blog.cep + '<br><strong>Cidade</strong>: ' + blog.cidade  + ' (' + blog.estado + ') </p>' +
					'</li>' +
					'');
		});
		$('#blogList').listview('refresh');
	});
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
