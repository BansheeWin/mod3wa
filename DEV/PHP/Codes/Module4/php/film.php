<?php
$movies =
[
    [ 'title' => 'X-Men: Days of Future Past','duration' => 124, 'cover' => 'xmen.jpg','synopsis' => "Les X-Men envoient Wolverine dans le passé pour changer un événement historique majeur, qui pourrait impacter mondialement humains et mutants."],
    
    [ 'title' => 'Grace de Monaco','duration' => 96,'cover' => 'grace.jpg','synopsis' => "Lorsqu'elle épouse le Prince Rainier en 1956, Grace Kelly est alors une immense star de cinéma, promise à une carrière extraordinaire. Six ans plus tard, alors que son couple rencontre de sérieuses difficultés, Alfred Hitchcock lui propose de revenir à Hollywood, pour incarner Marnie dans son prochain film. Mais c'est aussi le moment ou la France menace d'annexer Monaco, ce petit pays dont elle est maintenant la Princesse. Grace est déchirée. Il lui faudra choisir entre la flamme artistique qui la consume encore ou devenir définitivement : Son Altesse Sérénissime, la Princesse Grace de Monaco."],
    
    [ 'title' => 'Captain America 2','duration' => 136, 'cover' => 'captain-america-2.jpg','synopsis' => "Après les événements cataclysmiques de New York de The Avengers, Steve Rogers aka Captain America vit tranquillement à Washington, D.C. et essaye de s'adapter au monde moderne. Mais quand un collègue du S.H.I.E.L.D. est attaqué, Steve se retrouve impliqué dans un réseau d'intrigues qui met le monde en danger. S'associant à Black Widow, Captain America lutte pour dénoncer une conspiration grandissante, tout en repoussant des tueurs professionnels envoyés pour le faire taire. Quand l'étendue du plan maléfique est révélée, Captain America et Black Widow sollicite l'aide d'un nouvel allié, le Faucon. Cependant, ils se retrouvent bientôt face à un inattendu et redoutable ennemi - le Soldat de l'Hiver."],
    
    [ 'title' => 'Les yeux jaunes des crocodiles','duration' => 121, 'cover' => 'yeux-jaunes.jpg','synopsis' => "Deux sœurs que tout oppose. Joséphine, historienne spécialisée dans le XIIème siècle, confrontée aux difficultés de la vie, et Iris, outrageusement belle, menant une vie de parisienne aisée et futile. Un soir, lors d’un dîner mondain, Iris se vante d’écrire un roman. Prise dans son mensonge, elle persuade sa sœur, abandonnée par son mari et couverte de dettes, d’écrire ce roman qu’Iris signera, lui laissant l’argent. Le succès du livre va changer à jamais leur relation et transformer radicalement leurs vies."],
    
    [ 'title' => 'Rio 2','duration' => 88,  'cover' => 'rio-2.jpg','synopsis' => "Blu a pris son envol et se sent désormais chez lui à Rio de Janeiro, aux côtés de Perla et de leurs trois enfants. Mais la vie de perroquet ne s’apprend pas en ville et Perla insiste pour que la famille s’installe dans la forêt amazonienne alors qu'ils découvrent que d'autres aras bleus y vivent."],
    
    [ 'title' => 'The Amazing Spider Man 2','duration' => 145, 'cover' => 'spiderman.jpg','synopsis' => "Ce n’est un secret pour personne que le combat le plus rude de Spider-Man est celui qu’il mène contre lui-même en tentant de concilier la vie quotidienne de Peter Parker et les lourdes responsabilités de Spider-Man. Mais Peter Parker va se rendre compte qu’il fait face à un conflit de bien plus grande ampleur. Être Spider-Man, quoi de plus grisant ? Peter Parker trouve son bonheur entre sa vie de héros, bondissant d’un gratte-ciel à l’autre, et les doux moments passés aux côté de Gwen. Mais être Spider-Man a un prix : il est le seul à pouvoir protéger ses concitoyens new-yorkais des abominables méchants qui menacent la ville.  Face à Electro, Peter devra affronter un ennemi nettement plus puissant que lui.  Au retour de son vieil ami Harry Osborn, il se rend compte que tous ses ennemis ont un point commun : OsCorp.."],
    
    [ 'title' => "Qu'est ce qu'on a fait au bon Dieu ?", 'duration' => 114, 'cover' => 'bon-dieu.jpg','synopsis' => "Claude et Marie Verneuil, issus de la grande bourgeoisie catholique provinciale sont des parents plutôt 'vieille France'. Mais ils se sont toujours obligés à faire preuve d'ouverture d'esprit...Les pilules furent cependant bien difficiles à avaler quand leur première fille épousa un musulman, leur seconde un juif et leur troisième un chinois.Leurs espoirs de voir enfin l'une d'elles se marier à l'église se cristallisent donc sur la cadette, qui, alléluia, vient de rencontrer un bon catholique."],
    
    [ 'title' => 'Grand Budapest Hotel','duration' => 128, 'cover' => 'budapest-hotel.jpg','synopsis' => "Le film retrace les aventures de Gustave H, l’homme aux clés d’or d’un célèbre hôtel européen de l’entre-deux-guerres et du garçon d’étage Zéro Moustafa, son allié le plus fidèle.
    La recherche d’un tableau volé, oeuvre inestimable datant de la Renaissance et un conflit autour d’un important héritage familial forment la trame de cette histoire au coeur de la vieille Europe en pleine mutation."]
];

$film=$_GET['title'];
foreach($movies as $movie){
    if($movie['title']==$film){
        $title=$movie['title'];
        $duration=$movie['duration'];
        $img=$movie['cover'];
        $synopsis=$movie['synopsis'];   
    }
}
include('utilities.php');
include('../views/movie.phtml');