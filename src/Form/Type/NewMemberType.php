<?php
/**
 * Created by PhpStorm.
 * User: Emanuel
 * Date: 17.09.2019
 * Time: 20:29
 */

namespace App\Form\Type;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NewMemberType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
           ->add('member',TextareaType::class,['required' => false, 'label' => 'E-Mail Adresse von neuem Teammitglied eingeben', 'help'=> 'Es können mehrere Mitglieder auf einmal hinzugefügt werden. Jede E-Mail Adresse muss in eine neue Zeile schreiben. Wenn die E-Mail Adresse im diesem Datenschutzcenter noch nicht vorhanden ist, wird ein neues Konto angelegt und der Empfänger wird per E-Mail darüber informiert.','translation_domain' => 'form'])
            ->add('submit', SubmitType::class, ['attr' => array('class' => 'btn btn-outline-primary'), 'label' => 'Mitglied(er) Hinzufügen', 'translation_domain' => 'form']);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([

        ]);

    }
}
