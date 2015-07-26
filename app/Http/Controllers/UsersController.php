<?php
/**
 * Created on 7/8/15 at 11:51 PM.
 * User: kkopicki
 */

namespace jeep\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class UsersController extends Controller {
    /**
     * The user repository instance.
     */
    protected $users;

    /**
     * Create a new Controller instance.
     *
     * @param UserRepository $users
     */
    public function __construct(UserRepository $users) {
        $this->users = $users;
    }

    /**
     * Show the profile for a given user.
     *
     * @param int $id
     * @return Response
     */
    public function showProfile($id) {
        return view('users.profile', ['user' => User::findOrFail($id)]);
    }

    /**
     * Save a user.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request) {
        $name = $request->input('name');
        $email = $request->input('emailaddress');
    }
}