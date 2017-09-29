package fr.cpe;

import java.util.List;

import javax.ejb.Local;

@Local
public interface IAdd {
	double resultatAddition(List<Double> liNombre);
}
