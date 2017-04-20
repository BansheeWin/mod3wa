<?php

/**
 * Created by PhpStorm.
 * User: wap7
 * Date: 20/04/17
 * Time: 13:22
 */
namespace MyProject\Model;
class FlickrModel
{
    const API_KEY = '814772198ec9aa500687da8dcc184605';

    public function createUrl($sRessource,$aParams)
    {

        $sUrl = 'https://api.flickr.com/services/rest/?';

        $aData = array_merge([
            'api_key' 			=> self::API_KEY,
            'format'			=> 'json',
            'nojsoncallback' 	=> true,
            'method'			=> $sRessource
        ], $aParams);


        return $sUrl.http_build_query($aData);

    }

    public function getDataFlick($sUrl)
    {
        return json_decode(file_get_contents($sUrl),true);
    }

    public function createPhotoUrl($aPhotos){

        $aUrls=[];
        foreach($aPhotos as $photo){
            $aUrls[]="https://farm".$photo['farm'].".staticflickr.com/".$photo['server']."/".$photo['id']."_".$photo['secret'].".jpg";
        }
        return $aUrls;
    }
}