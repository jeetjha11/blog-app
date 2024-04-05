<?php
require_once '../includes/config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if ($id) {
        $sql = "SELECT * FROM posts WHERE post_id = $id";
        $result = $conn->query($sql);
        $post = $result->fetch_assoc();

        echo json_encode($post);
    } else {
        $sql = "SELECT * FROM posts";
        $result = $conn->query($sql);
        $posts = [];

        while ($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }

        echo json_encode($posts);
    }
} else if ($method == 'POST') {
    $post_title = $_POST['post_title'];
    $post_content = $_POST['post_content'];

    $sql = "INSERT INTO posts (post_title, post_content, posted_on) VALUES ('$post_title', '$post_content', NOW())";
    $conn->query($sql);

    echo json_encode(['message' => 'Post created']);
}

$conn->close();