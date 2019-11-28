<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\TestEvent;

class ChatController extends Controller
{
    public function index()
    {
        return view('chat.index');
    }

    public function test()
    {
        //TODO: Upload messages to DB
        event(new TestEvent('Hello Chat'));
    }
}
