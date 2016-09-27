<?php
require_once __DIR__ . "/../src/select_book.json";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class select_bookTest extends PHPUnit_Framework_TestCase{
    
    
    public function testPrintError(){
        $this->assertEquals(
            json_encode(
                array(
                    "IsValid" => "FALSE",
                    "ERROR" => "Message"
                ),JSON_UNESCAPED_UNICODE),
            printError("Message")
        );
    }

}

