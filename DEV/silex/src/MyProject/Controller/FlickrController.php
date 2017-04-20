<?php
namespace MyProject\Controller;

use Silex\Application;
use MyProject\Model\FlickrModel;
use Symfony\Component\HttpFoundation\Request;


class FlickrController
{

    public function searchFlickr(Application $app,Request $request){

        $query=$request->get('search');

        if(empty($query)){
            return $app['twig']->render('flickrView.html.twig');
        }else {
            $aData = ['content_type' => $request->get('choice'),'per_page' => $request->get('results'), 'tags' => $query];

            $oFlickrModel = new FlickrModel();

            $url=$oFlickrModel->createUrl('flickr.photos.search',$aData);

            $response=$oFlickrModel->getDataFlick($url);


            $photo_array = $oFlickrModel->createPhotoUrl($response['photos']['photo']);


            return $app['twig']->render('flickrView.html.twig', [
                'photo_array' => $photo_array
            ]);
        }
    }

}