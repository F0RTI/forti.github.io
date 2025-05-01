<?php 


class Util {
    static function log (string $filePath, string $fileName, $fileData) {
        $fileURL = $_SERVER['DOCUMENT_ROOT'] . $filePath . $fileName;
        file_put_contents($fileURL, $fileData);
    }

    static function info (string $message, EInfoType $type = EInfoType::UNKNOWN) { 

        switch ($type) {
            case EInfoType::SUCCESS:
                $message = "SUCCESS: " . $message;
                break;
            case EInfoType::WARNING:
                $message = "WARNING: " . $message;
                break;
            case EInfoType::ERROR:
                $message = "ERROR: " . $message;
                break;
            default:
                $message = "MESSAGE: " . $message;
        }

        if (DEBUG_LOG) error_log($message);
        if (DEBUG) die($message);
    }
}