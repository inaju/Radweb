var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var express=require('express')

//new thing


dataSize=200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024200 * 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024* 1024 * 1024* 1024* 1024* 1024* 1024

upload_path='C:\\Users\\Mitchel Inaju\\Desktop\\web_projects\\'
//C:/Users/Mitchel Inaju/Desktop/web_projects

http.createServer(function (req, res) {
  //this is the formidable function that does all the work
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      form.maxFieldsSize =  dataSize
      form.maxFileSize = dataSize
      var oldpath = files.filetoupload.path;
      var newpath = upload_path + files.filetoupload.name;

      console.log('this is the old path: '+oldpath)
      console.log('this is the new path: '+newpath)
      //console.log(files)
      fs.copyFile(oldpath,newpath,function(){
        console.log('yes sir')
      })

        if(err) throw err

        res.write('File uploaded and moved!');

        fs.readFile('./link.html', null, function (error, data) {
                if (error) {
                    respe.writeHead(404);
                    respone.write('Whoops! File not found!');
                } else {
                    res.write(data);
                }
                res.end();
            });



 });

} else {
  //reads HTML file
    fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                respe.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });

  }

}).listen(3000);
