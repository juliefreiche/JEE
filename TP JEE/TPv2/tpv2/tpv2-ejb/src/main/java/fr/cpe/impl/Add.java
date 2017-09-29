package fr.cpe.impl;

import java.util.List;

import javax.ejb.Stateless;

import fr.cpe.IAdd;

@Stateless
public class Add implements IAdd{
//	public double resultatAddition(List<Double> liNombre) {
//		double somme=(double) 0;
//		for(double nbCourant:liNombre){
//			somme=somme+nbCourant;
//		}
//		
//		return somme;
//		}
		
		@Override
		public double resultatAddition(List<Double> liNombre){
			return liNombre.stream().mapToDouble(Double::doubleValue).sum();
		}
	
}
