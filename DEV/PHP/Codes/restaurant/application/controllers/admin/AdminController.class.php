<?php

class AdminController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $http->redirectTo('../');
    }

    public function httpPostMethod(Http $http, array $formFields)
    {

    }
}
