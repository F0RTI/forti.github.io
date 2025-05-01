<?php
class User {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllUsers() {
        $query = $this->db->query("SELECT * FROM users");
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUserById($id) {
        $query = $this->db->prepare("SELECT * FROM users WHERE id = ?");
        $query->execute([$id]);
        return $query->fetch(PDO::FETCH_ASSOC);
    }
}