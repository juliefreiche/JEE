package fr.cpe.jms.producer.impl;


import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.Queue;

import fr.cpe.jms.producer.IHelloJmsProducer;

@Startup
@Singleton
public class HelloJmsProducer implements IHelloJmsProducer{
	
	@Resource(name="java:/asi2-hello")
	private Queue queue;
	
	@Inject	
	private JMSContext context;
	
	@Override
	public void sayHello(String name) {
		context.createProducer()
		.send(queue,name);
	}
	
	@PostConstruct
	private void exec(){
		sayHello("world !");
	}

}
