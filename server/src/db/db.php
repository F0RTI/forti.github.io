<?php
global $db;

class db {
    private mysqli $query;
    public stdClass $store;

    public function __construct() {
        $this->store = new stdClass();
        $this->store->data = [];
        $this->store->errors = [];

        $this->newQuery();
        $this->query->close();
    }

    private function newQuery() {
        $this->query = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

        if ($this->query->connect_error) {
            Util::info("DB connection failed: " . $this->query->connect_error, EInfoType::ERROR);
        } else {
            $result = $this->query->query("SHOW DATABASES LIKE '" . DB_NAME . "'");

            if ($result->num_rows != 0) {
                $sql = @file_get_contents(__DIR__ . '/init.sql');

                if ($sql === false) {
                    // TODO [db][] = 'Error reading file init.sql';
                    $this->store->errors['db'] = [
                        'Error reading file init.sql'
                    ];
                }

                if ($this->query->multi_query($sql)) {
                    do {} while ($this->query->next_result());
                    
                    $this->store->successes['db'] = [
                        'DB init successfully!'
                    ];
                } else {
                    $this->store->errors['db'] = [
                        'SQL in file init.sql: ' . $this->query->error
                    ];
                }
            }
        }
    }
}

$db = new db();