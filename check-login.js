$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

$ok = true;

if ( !isset($username) || empty($username) ) {
    $ok = false;
}

if ( !isset($password) || empty($password) ) {
    $ok = false;
}

if ($ok) {
    if ($username === 'dcode' && $password === 'dcode') {
        $ok = true;
    } else {
        $ok = false;
    }
}
