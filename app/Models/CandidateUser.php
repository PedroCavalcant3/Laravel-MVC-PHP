<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CandidateUser extends Model
{
    protected $table = 'candidate_user';
    protected $fillable = ['candidate_id','user_id'];
}
