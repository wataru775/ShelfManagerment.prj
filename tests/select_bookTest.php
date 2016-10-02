<?php

require_once __DIR__ . "/../src/select_book.json";

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class select_bookTest extends PHPUnit_Framework_TestCase {

    public function testComp_mcode() {
        $this->assertTrue(select_book::comp_mcode("", "") == 0);
        $this->assertTrue(select_book::comp_mcode("は-8-5", "は-8-5") == 0);
        $this->assertTrue(select_book::comp_mcode("は-8-5", "は-8-6") < 0);
        $this->assertTrue(select_book::comp_mcode("は-8-6", "は-8-5") > 0);
        $this->assertTrue(select_book::comp_mcode("は-8-16", "は-8-5") > 0);
        $this->assertTrue(select_book::comp_mcode("は-8-6", "は-8-15") < 0);

        $this->assertTrue(select_book::comp_mcode("は-6-5", "は-8-6") < 0);
        $this->assertTrue(select_book::comp_mcode("は-8-5", "は-6-6") > 0);

        $this->assertTrue(select_book::comp_mcode("あ-8-5", "い-6-6") < 0);
        $this->assertTrue(select_book::comp_mcode("う-8-5", "い-6-6") > 0);

        $this->assertTrue(select_book::comp_mcode("は-6", "は-6-6") < 0);
        $this->assertTrue(select_book::comp_mcode("は-5", "は-6-6") < 0);

        $this->assertTrue(select_book::comp_mcode("は-5", "6-6") < 0);

        }

}
