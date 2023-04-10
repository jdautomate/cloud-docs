<?php

require __DIR__ . '/vendor/autoload.php';

$ROLE = empty($argv[1]) ? 'owner' : $argv[1];

use Algolia\AlgoliaSearch\SearchClient;

// Replace with your Algolia credentials
$client = SearchClient::create(
    "RSWCYN6WCZ",
    "55875d58e6cef237168cfb500fe51014"
);

// Replace with the name of your index
$indexName = 'docs_index';

$current_script_directory = dirname(__FILE__);
$base_directory = dirname($current_script_directory);
$folderPath = $base_directory . '/' . $ROLE . '/js/algolia';

$dir = opendir($folderPath);
while (false !== ($entry = readdir($dir))) {
    if (strpos($entry, '.json') !== false) {
        $filePath = $folderPath . '/' . $entry;
        // Read the contents of the file
        $fileContent = file_get_contents($filePath);

        // Parse the file contents into an array of objects
        $objects = json_decode($fileContent, true);

        // Add an objectID and update the URL for each object
        foreach ($objects as &$object) {
            if (!isset($object['objectID'])) {
                // Generate objectID based on the URL
                $object['objectID'] = md5($object['url']);
            }
            // Update the URL
            if (isset($object['url'])) {
                // Replace .html with /index.html when followed by a hash, and only if the URL ends with $ROLE.html
                if (strpos($object['url'], $ROLE . '.html') !== false) {
                    $object['url'] = preg_replace('/(\.html)/', '/index.html', $object['url']);
                }   
                
                // Add the https://openvpn.net/cloud-docs/ prefix and role if not already present
                if (strpos($object['url'], $ROLE) === false) {
                    $object['url'] = 'https://openvpn.net/cloud-docs/' . $ROLE . '/' . $object['url'];
                } else {
                    $object['url'] = 'https://openvpn.net/cloud-docs/' . $object['url'];
                }
            }
        }

        try {
            // Update the Algolia index with the new records
            $index = $client->initIndex($indexName);
            $index->saveObjects($objects); // The saveObjects method updates existing objects or creates new ones
        } catch (\Algolia\AlgoliaSearch\Exceptions\AlgoliaException $e) {
            // Log or display the error message
            echo 'Error for '.$ROLE.': ' . $e->getMessage().'<br>';
        }
    }
}
closedir($dir);

