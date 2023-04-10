#!/usr/bin/env php
<?php

$ROLE = empty($argv[1]) ? 'owner' : $argv[1];
$tempFolder = 'temp_'.$ROLE;

function rrmdir($dir)
{
    if (is_dir($dir)) {
        $objects = scandir($dir);
        foreach ($objects as $object) {
            if ($object != "." && $object != "..") {
                if (is_dir($dir . DIRECTORY_SEPARATOR . $object) && !is_link($dir . "/" . $object)) {
                    rrmdir($dir . DIRECTORY_SEPARATOR . $object);
                } else {
                    unlink($dir . DIRECTORY_SEPARATOR . $object);
                }
            }
        }
        rmdir($dir);
    }
}

if (is_dir("$tempFolder/$ROLE")) {
    // move all files from the /out directory to the role root directory
    rrmdir($ROLE);
    mkdir($ROLE);
    $outFiles = glob("$tempFolder/$ROLE/out/*");
    foreach ($outFiles as $outFile) {
        $dest = str_replace("$tempFolder/$ROLE/out", $ROLE, $outFile);
        if (is_dir($outFile)) {
            mkdir($dest);
            $subFiles = glob("$outFile/*");
            foreach ($subFiles as $subFile) {
                $subDest = str_replace("$tempFolder/$ROLE/out", $ROLE, $subFile);
                if (is_dir($subFile)) {
                    mkdir($subDest);
                } else {
                    copy($subFile, $subDest);
                }
            }
        } else {
            copy($outFile, $dest);
        }
    }

    // delete the /out directory
    rrmdir("$ROLE/out");

    // condition to check if the role is not videos or tutorials
    if ($ROLE != "videos" && $ROLE != "tutorials") {
        // delete the index.html file in the role root directory
        unlink("$ROLE/index.html");
    } else {
        // perform search and replace in index.html for the /en/ folder in any href tags and remove the /en/ from the phrase using perl
        $content = file_get_contents("$ROLE/index.html");
        $content = str_replace('href="en/', 'href="', $content);
        file_put_contents("$ROLE/index.html", $content);
    }

    // move all items from $role/en/js to $role/js
    $jsFiles = glob("$ROLE/en/js/*");
    foreach ($jsFiles as $jsFile) {
        $dest = str_replace("$ROLE/en/js", "$ROLE/js", $jsFile);
        copy($jsFile, $dest);
    }

    // delete the $role/en/js directory
    rrmdir("$ROLE/en/js");

    // delete all files in /$ROLE/js/
    // except toc.js, fuzzydata.js, and the /algolia folder
    $jsFiles = glob("$ROLE/js/*");
    foreach ($jsFiles as $jsFile) {
        if (is_file($jsFile) && !in_array(basename($jsFile), ['toc.js', 'fuzzydata.js']) && strpos($jsFile, '/algolia/') === false) {
            unlink($jsFile);
        }
    }

    // move all items from $role/en/ to the role root directory
    $enFiles = glob("$ROLE/en/*");
    foreach ($enFiles as $enFile) {
        $dest = str_replace("$ROLE/en", "$ROLE", $enFile);
        if (is_dir($enFile)) {
            mkdir($dest);
            $subFiles = glob("$enFile/*");
            foreach ($subFiles as $subFile) {
                $subDest = str_replace("$ROLE/en", "$ROLE", $subFile);
                if (is_dir($subFile)) {
                    mkdir($subDest);
                } else {
                    copy($subFile, $subDest);
                }
            }
        } else {
            copy($enFile, $dest);
        }
    }
    // delete the $role/en directory
    rrmdir("$ROLE/en");

    // rename $role.html to index.html
    rename("$ROLE/$ROLE.html", "$ROLE/index.html");

    // move all items from $role/en/$role to the primary $role directory
    $subFiles = glob("$ROLE/$ROLE/*");
    foreach ($subFiles as $subFile) {
        $dest = str_replace("$ROLE/$ROLE", "$ROLE", $subFile);
        if (is_dir($subFile)) {
            mkdir($dest);
            $subSubFiles = glob("$subFile/*");
            foreach ($subSubFiles as $subSubFile) {
                $subSubDest = str_replace("$ROLE/$ROLE", "$ROLE", $subSubFile);
                if (is_dir($subSubFile)) {
                    mkdir($subSubDest);
                } else {
                    copy($subSubFile, $subSubDest);
                }
            }
        } else {
            copy($subFile, $dest);
        }
    }

    // delete the $role/$role directory
    rrmdir("$ROLE/$ROLE");

    // move all files from $role/image to the /image directory
    $imageFiles = glob("$ROLE/image/*");
    foreach ($imageFiles as $imageFile) {
        $dest = "./image/" . basename($imageFile);
        copy($imageFile, $dest);
    }

    // delete the $role/image directory
    rrmdir("$ROLE/image");

    // find .html files $ROLE folder and perform search and replace for the asset paths
    $htmlFiles = glob("$ROLE/*.html");
    foreach ($htmlFiles as $htmlFile) {
        $content = file_get_contents($htmlFile);
        $content = preg_replace_callback('/(\.\.\/)+(?=css\/|js\/)/', function ($matches) use ($ROLE) {
            return "/cloud-docs/" . $matches[0];
        }, $content);
        $content = preg_replace('/href="' . $ROLE . '\/"/', 'href="/cloud-docs/' . $ROLE . '/"', $content);
        $content = preg_replace('/href="\/cloud-docs\/js\//', 'href="/cloud-docs/' . $ROLE . '/js/', $content);
        file_put_contents($htmlFile, $content);
    }

    // find specific URLs creating issues and revert back
    $htmlFiles = glob("$ROLE/*.html");
    foreach ($htmlFiles as $htmlFile) {
        $content = file_get_contents($htmlFile);
        $content = str_replace([
            'https://cdnjs.cloudflare.com/ajax/libs/highlight./cloud-docs/js/10.1.2/styles/googlecode.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/highlight./cloud-docs/js/10.1.2/highlight.min.js',
            'https://cdn.jsdelivr.net/autocomplete./cloud-docs/js/0/autocomplete.jquery.min.js',
        ], [
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/googlecode.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js',
            'https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.jquery.min.js',
        ], $content);
        file_put_contents($htmlFile, $content);
    }
    // replace asset paths for toc.js and fuzzydata.js to fall under respective role folder
    $htmlFiles = glob("$ROLE/*.html");
    foreach ($htmlFiles as $htmlFile) {
        $content = file_get_contents($htmlFile);
        $content = str_replace('"/cloud-docs/js/toc.js', '"/cloud-docs/' . $ROLE . '/js/toc.js', $content);
        $content = str_replace('"/cloud-docs/js/fuzzydata.js', '"/cloud-docs/' . $ROLE . '/js/fuzzydata.js', $content);
        file_put_contents($htmlFile, $content);
    }

    // find toc.js and fuzzydata.js files in the $ROLE folder
    // perform a search and replace to remove secondary role
    // change $ROLE.html to index.html
    $jsFiles = glob("$ROLE/js/{toc,fuzzydata}.js") + glob("$ROLE/index.html");
    foreach ($jsFiles as $jsFile) {
        $content = file_get_contents($jsFile);
        $content = str_replace('"' . $ROLE . '/', '"/cloud-docs/' . $ROLE . '/', $content);
        $content = str_replace('"' . $ROLE . '.html', '"/cloud-docs/' . $ROLE . '/index.html', $content);
        file_put_contents($jsFile, $content);
    }

    // find img tags and replace the src attribute with /cloud-docs/image/
    $htmlFiles = glob("$ROLE/*.html");
    foreach ($htmlFiles as $htmlFile) {
        $content = file_get_contents($htmlFile);
        $content = preg_replace_callback('/<img[^>]+src="(\.\.\/)*image\/([^"]+)"/', function ($matches) {
            return '<img src="/cloud-docs/image/' . $matches[2] . '"';
        }, $content);
        file_put_contents($htmlFile, $content);
    }

    // find create-toc.js and remove prefix to allow smooth flow
    $createTocFiles = glob("create-toc.js");
    foreach ($createTocFiles as $createTocFile) {
        $content = file_get_contents($createTocFile);
        $content = preg_replace('/^.*prefix \+= \'..\/\';.*$/m', '', $content);
        file_put_contents($createTocFile, $content);
    }

    // if $ROLE is videos or tutorials, prefix URLs in toc.js
    if ($ROLE == "videos" || $ROLE == "tutorials") {
        $tocFiles = glob("$ROLE/js/toc.js");
        foreach ($tocFiles as $tocFile) {
            $content = file_get_contents($tocFile);
            $content = preg_replace('/"url": "([^\/])/', '"url": "/cloud-docs/' . $ROLE . '/$1', $content);
            file_put_contents($tocFile, $content);
        }
    }
}

// Remove the temporary folder
rrmdir($tempFolder);

?>