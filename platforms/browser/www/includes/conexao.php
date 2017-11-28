<? 
session_start();
$host = "186.202.152.114"; // host do mysql
$user = "nateia17"; // usuário
$pass = "uk5fv5"; // senha do usuário
$base = "nateia17"; // nome da base de dados

// conecta o mysql
$conn = mysql_connect($host, $user, $pass) or die ("<br><br><center>Problemas ao conectar no servidor: " . mysql_error() . "</center>");
// seleciona a base de dados
$banc = mysql_select_db($base) or die ("<br><br><center>Problemas ao selecionar a base de dados do sistemas: " . mysql_error() . "</center>");


?>