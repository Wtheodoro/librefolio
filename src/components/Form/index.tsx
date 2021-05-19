import React from 'react';
import emailjs from 'emailjs-com';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import Button from '../Button';
import { Container } from './styles';

const Form: React.FC = () => {
  const { register } = useForm()

  function sendEmail(data: any) {
    console.log(data)
    data.preventDefault();

    emailjs.sendForm('service_70kfwn3', 'template_td3ojc8', data.target, 'user_CREeh4kObIP2aMSX3VN6n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      data.target.reset()
  }

  return (
    <Container>
      <form onSubmit={sendEmail}>
        <div className="top">
          <TextField
            variant="outlined"
            margin="normal"
            label="Name"
            fullWidth
            required
            {...register("name")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="E-mail"
            type="email"
            fullWidth
            required
            {...register("email")}
          />
        </div>
        <TextField
            variant="outlined"
            margin="normal"
            label="Message"
            multiline
            rows={8}
            fullWidth
            required
            {...register("message")}
          />
        <Button>Send Message</Button>
      </form>

    </Container>
  )
}

export default Form;