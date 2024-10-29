
/**
 * Verwaltet das Ausgabefenster.
 * 
 * @author Albert Wiedemann
 * @version 1.0
 */

import java. awt. *;
import java.awt.event.*;

class OBERFLAECHE
{
    /** H&ouml;he des Anzeigefensters */
    private static final int hoeheFenster = 800;
    /** Breite des Anzeigefensters */
    private static final int breiteFenster = 1000;
    /** Anzeigegr&ouml;&szlig;e f&uuml;r eine Lampe */
    private static final int rasterGroesse = 30;
    /** Umrechnung Meter nach Pixel */
    private static final float meter2pixel = 5.0f;
    private static OBERFLAECHE o = null;
    private Frame fenster = null;
    
    /**
     * Baut die Bedienoberfl&auml;che auf
     */
    private OBERFLAECHE ()
    {

        fenster = new Frame ("Zeichenfl\u00E4che");
        fenster. setResizable (false);
        fenster. setSize (breiteFenster, hoeheFenster);
        fenster. setVisible (true);
        fenster. setLayout (null);
        fenster. setBackground (Color.white);
        fenster.addWindowListener(new WindowClosingAdapter(true));
        Canvas hintergrund = new Canvas () {
             /**
             * Zeichnet das Hintergrundmuster.
             */
            public void paint (Graphics g)
            {
                g. setColor (Color. lightGray);
                for (int i = 1; i <= hoeheFenster / (rasterGroesse * 2); i++)
                {
                    g. drawLine (0, hoeheFenster / 2 + i * rasterGroesse, breiteFenster - 1, hoeheFenster / 2 + i * rasterGroesse);
                    g. drawLine (0, hoeheFenster / 2 - i * rasterGroesse, breiteFenster - 1, hoeheFenster / 2 - i * rasterGroesse);
                }
                for (int i = 1; i <= breiteFenster / (rasterGroesse * 2); i++)
                {
                    g. drawLine (breiteFenster / 2 + i * rasterGroesse, 0, breiteFenster / 2 + i * rasterGroesse, hoeheFenster - 1);
                    g. drawLine (breiteFenster / 2 - i * rasterGroesse, 0, breiteFenster / 2 - i * rasterGroesse, hoeheFenster - 1);
                }
                g. setColor (Color. black);
                g. drawLine (0, hoeheFenster / 2, breiteFenster - 1, hoeheFenster / 2);
                g. drawLine (breiteFenster / 2, 0, breiteFenster / 2, hoeheFenster - 1);
            }
        };
        hintergrund. setVisible (true);
        hintergrund. setSize (breiteFenster, hoeheFenster);
        hintergrund. setLocation (0, 0);
        fenster. add (hintergrund);
    }

    /**
     * Gibt das Ausgabefenster zur&uuml;ck und erzeugt es gegebenenfalls.
     * @return Ausgabefenster
     */
    public static Frame FensterGeben ()
    {
        if (o == null)
        {
            o = new OBERFLAECHE ();
        }
        return o. fenster;
    }

    /**
     * Gibt die Rastergr&ouml;&szlig;e zur&uuml;ck.
     * @return Ausgabefenster
     */
    public static int RasterGroesseGeben ()
    {
        return rasterGroesse;
    }

    /**
     * Gibt die Breite des Fensters zur&uuml;ck.
     * @return Fensterbreite
     */
    public static int FensterBreiteGeben ()
    {
        return breiteFenster;
    }

    /**
     * Gibt die H&ouml;he des Fensters zur&uuml;ck.
     * @return Fensterh&ouml;he
     */
    public static int FensterHoeheGeben ()
    {
        return hoeheFenster;
    }

    /**
     * Gibt die H&ouml;he des Fensters zur&uuml;ck.
     * @return Fensterh&ouml;he
     */
    public static float MeterAlsPixelGeben ()
    {
        return meter2pixel;
    }
}

class WindowClosingAdapter extends WindowAdapter {
	
	boolean exitSystem;
	
	//Konstruktor, ist exitSystem true, wird das gesamte Programm beendet
	
	public WindowClosingAdapter(boolean exitSystem){
		this.exitSystem=exitSystem;
	}
	
	
	//Standardkonstruktor; schließt nur das Fenster
	
	public WindowClosingAdapter(){
		exitSystem=false;
	}
	
	
	public void windowClosing(WindowEvent e){
		e.getWindow().setVisible(false);
		e.getWindow().dispose();
		
		if (exitSystem){
			System.exit(1);
		}
		
	}
}

