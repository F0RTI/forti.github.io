<?php
require_once '../app/models/User.php';
require '../db/db.php';

global $db;

class UserController {
    private $userModel;

    public function __construct($db) {
        $this->userModel = new User($db);
    }

    public function getUsers() {
        $users = $this->userModel->getAllUsers();
        echo json_encode($users);
    }

    public function getUser($id) {
        $user = $this->userModel->getUserById($id);
        echo json_encode($user);
    }
}

$controller = new UserController($db);

if ($_GET['action'] === 'users') {
    $controller->getUsers();
} elseif ($_GET['action'] === 'user' && isset($_GET['id'])) {
    $controller->getUser($_GET['id']);
}
