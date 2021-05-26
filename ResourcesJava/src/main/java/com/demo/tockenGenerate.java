package com.demo;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.util.*;   


import org.json.JSONObject;



public class tockenGenerate {

	public static String holaMundo(String correo) {
		System.out.println(correo);
			String secretKey = "123";
			
			Date date1 = new Date();
			Date date2 = new Date (new Date (). getTime () + (30 * 1000));
			System.out.println(date1);
			System.out.println(date2);
			if(date1.before(date2)){
				long codigoGenerado = (long) (Math.random()*100000+1);
				System.out.println(codigoGenerado);
				JSONObject myObject = new JSONObject();
				myObject.put("codigo", String.valueOf(codigoGenerado));
				myObject.put("fechaCreado", String.valueOf(date1));
				myObject.put("fechaFinal", String.valueOf(date2));
				myObject.put("correo", correo);
				System.out.println(myObject);
				enviarMensaje(String.valueOf(codigoGenerado), correo);
				return String.valueOf(myObject);
            } 
			
			
			return null;
		
	}
	private static void enviarMensaje(String codigo, String correo) {
		String destinatario = correo;
		String asunto= "Intento de inicio de sesion";
		String cuerpo = "Codigo de activacion con duracion de 30 segundos\n\n"
				+ "Para el inicio de sesion en tu cuenta, por favor in gresar el siguiente codigo:\n\n "+ codigo;
		  // Esto es lo que va delante de @gmail.com en tu cuenta de correo. Es el remitente también.
	   String remitente = "bryamgmfn@gmail.com";  //Para la dirección nomcuenta@gmail.com

	    Properties props = System.getProperties();
	    props.put("mail.smtp.host", "smtp.gmail.com");  //El servidor SMTP de Google
	    props.put("mail.smtp.user", remitente);
	    props.put("mail.smtp.clave", "magaly00");    //La clave de la cuenta
	    props.put("mail.smtp.auth", "true");    //Usar autenticación mediante usuario y clave
	    props.put("mail.smtp.starttls.enable", "true"); //Para conectar de manera segura al servidor SMTP
	    props.put("mail.smtp.port", "587"); //El puerto SMTP seguro de Google

	    Session session = Session.getDefaultInstance(props);
	    MimeMessage message = new MimeMessage(session);

	    try {
	        message.setFrom(new InternetAddress(remitente));
	        message.addRecipients(Message.RecipientType.TO, destinatario);
	        message.setSubject(asunto);
	        message.setText(cuerpo);
	        Transport transport = session.getTransport("smtp");
	        transport.connect("smtp.gmail.com", remitente, "magaly00");
	        transport.sendMessage(message, message.getAllRecipients());
	        transport.close();
	    }
	    catch (MessagingException me) {
	        me.printStackTrace();   //Si se produce un error
	    }
	}
	

	
	

}
