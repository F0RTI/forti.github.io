<?php 
global $store;

$store = new Store();

class Store {
    private $store = [];

    public function set($key, $value) {
        $this->store[$key] = $value;
    }

    public function get($key) {
        return isset($this->store[$key]) ? $this->store[$key] : null;
    }
}