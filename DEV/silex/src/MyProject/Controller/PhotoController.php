<?php
/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 19/04/17
 * Time: 10:24
 */

namespace MyProject\Controller;
use Silex\Application as App;
use Symfony\Component\HttpFoundation\Request;



class PhotoController
{

    public function httpGetMethod(App $app, Request $request)
    {

        return $app['twig']->render(
            'addPhoto.html.twig',
            [
                'email' => $request->get('email'),
                'pwd' => $request->get('password'),
                'name' => $request->get('name'),
                'firstName' => $request->get('firstName'),
                'file' => $request->files->get('image')
            ]
        );
    }

    public function httpPostMethod(App $app, Request $request)
    {
        $image= $request->files->get('image');

        $accept=["jpg","png","gif","jpeg"];
        if($image != null){
            $imageName = $image->getClientOriginalName();
            $imageExt=$image->getClientOriginalExtension();
            if(in_array($imageExt,$accept)){
                $image->move(ROOT_DIR.'/upload', $image->getClientOriginalName());
            }
        }
        else {
            echo 'toto';
            $imageName="";
        }
        return $app['twig']->render(
            'addPhoto.html.twig',
            [
                'email' => $request->get('email'),
                'pwd' => $request->get('password'),
                'name' => $request->get('name'),
                'firstName' => $request->get('firstName'),
                'file' => $imageName
            ]
        );
    }
}