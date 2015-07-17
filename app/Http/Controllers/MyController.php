<?php
/**
 * Created on 7/8/15 at 11:51 PM.
 * User: kkopicki
 */

namespace jeep\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class UserController extends Controller {
    /**
     * Show the profile for a given user.
     *
     * @param int $id
     * @return Response
     */

    public function showProfile($id) {
        return view('user.profile', ['user' => User::findOrFail($id)]);
    }
}