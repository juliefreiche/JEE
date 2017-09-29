package fr.cpe.impl;

import javax.inject.Inject;

import org.jboss.logging.Logger;

import fr.cpe.IHello;
import fr.cpe.IHelloRestService;
import fr.cpe.jms.producer.IHelloJmsProducer;
public class HelloRestService implements IHelloRestService{
	
	Logger logger = Logger.getLogger(HelloRestService.class.getCanonicalName());
	
	@Inject
	private IHello helloService;
	
	@Inject
	private IHelloJmsProducer helloJmsProducerService;
	
	@Override
	public String hello(String name){
		logger.info(">>> hello()");
		return helloService.sayHello(name);
	}
	
}

