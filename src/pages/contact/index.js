import React, { useState } from "react";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import styles from "./Contact.module.scss";
import Layout from "@/components/Layout/Layout";
import TypedHeaderBasic from "@/components/TypedHeader/TypedHeaderBasic";

const Contact = (props) => {

  const [ formSent, setFormSent ] = useState(false)
  const { register, handleSubmit } = useForm()
  const { submit } = useWeb3Forms({
    access_key: 'af3e402f-a0f7-4a93-94bc-15501059ba5d',
    settings: {
      from_name: 'Studio Suzan Schapendonk',
      subject: 'Nieuw bericht via je Website',
    },
    onSuccess: (message, data) => {
      setFormSent(true);
      console.log(message);
    },
    onError: (message, data) => {
      console.log(message);
    },
  });

  return (
    <Layout title="Contact" route="/contact">
    <div className={styles.container}>
        <div>
          <TypedHeaderBasic title="Contact" />
          {!formSent ? ( 
            <form onSubmit={handleSubmit(submit)}>
              <label><span>Naam:</span> 
              <input
                type='text'
                {...register('name', {
                  required: 'Vul je naam in',
                  maxLength: 80,
                })}
              /></label>
              <label><span>Email:</span> 
              <input
                type='email'
                {...register('email', {
                  required: 'Vul je email in',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Voer een geldig emailadres in',
                  },
                })}
              /></label>
              <label><span>Bericht:</span> 
              <textarea
                {...register('message', {
                  required: 'Vul je bericht in',
                })}
              /></label>
              <button type='submit'>Versturen</button>
            </form> ) : 'Bericht verstuurd' }
        </div>
    </div>
    </Layout>
  );
};

export default Contact;