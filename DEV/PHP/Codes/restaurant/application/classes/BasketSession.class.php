<?php

class BasketSession
{
    public function __construct()
    {
        if(session_status() == PHP_SESSION_NONE)
        {
            // Démarrage du module PHP de gestion des sessions.
            session_start();
        }
    }

    public function create()
    {
        $_SESSION['basket'] = [];
    }

    public function destroy()
    {
        // Destruction de l'ensemble de la session.
        unset($_SESSION['basket']);
    }

    public function deleteProduct($iIdMeal)
    {
        if (isset($_SESSION['basket'][$iIdMeal])) {
            unset($_SESSION['basket'][$iIdMeal]);
        }
    }

    public function setBasket($iIdMeal, $iQte)
    {
        if (!isset($_SESSION['basket'][$iIdMeal])) {
            $_SESSION['basket'][$iIdMeal] = (int)$iQte;
        } else {
            $_SESSION['basket'][$iIdMeal] += (int)$iQte;
        }
    }

    public function getBasket()
    {
        // Retourne la session.
        if ($this->basketExists()) {
            return $_SESSION['basket'];
        }
        return array();
    }

    public function basketExists()
    {
        if(array_key_exists('basket', $_SESSION) == true)
        {
            if(empty($_SESSION['basket']) == false)
            {
                return true;
            }
        }
        return false;
    }
}