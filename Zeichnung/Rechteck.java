import java.awt.Rectangle;

/**
 * Ein Rechteck, das manipuliert werden kann und sich selbst auf einer Leinwand
 * zeichnet.
 * 
 * @author Michael Kölling und David J. Barnes
 * @version 2006.03.30
 */

public class Rechteck {
	private int seite1, seite2;

	private int xPosition;

	private int yPosition;

	private String farbe;

	private boolean istSichtbar;
    
	/**
	 * Erzeuge ein neues Rechteck mit einer Standardfarbe an einer
	 * Standardposition.
	 */
	 public Rechteck() {
		seite1 = 30;
		seite2 = 30;
		xPosition = 60;
		yPosition = 50;
		farbe = "rot";
		istSichtbar = false;
	}
	 
	public Rechteck(int s1, int s2,String f) {
		seite1 = s1;
		seite2 = s2;
		xPosition = 60;
		yPosition = 50;
		farbe = f;
		istSichtbar = false;
	}

	/**
	 * Mache dieses Rechteck sichtbar. Wenn es bereits sichtbar ist, tue nichts.
	 */
	public void sichtbarMachen() {
		istSichtbar = true;
		zeichnen();
	}

	/**
	 * Mache dieses Rechteck unsichtbar. Wenn es bereits unsichtbar ist, tue
	 * nichts.
	 */
	public void unsichtbarMachen() {
		loeschen();
		istSichtbar = false;
	}

	/**
	 * Bewege dieses Rechteck einige Bildschirmpunkte nach rechts.
	 */
	public void nachRechtsBewegen() {
		horizontalBewegen(20);
	}

	/**
	 * Bewege dieses Rechteck einige Bildschirmpunkte nach links.
	 */
	public void nachLinksBewegen() {
		horizontalBewegen(-20);
	}

	/**
	 * Bewege dieses Rechteck einige Bildschirmpunkte nach oben.
	 */
	public void nachObenBewegen() {
		vertikalBewegen(-20);
	}

	/**
	 * Bewege dieses Rechteck einige Bildschirmpunkte nach unten.
	 */
	public void nachUntenBewegen() {
		vertikalBewegen(20);
	}

	/**
	 * Bewege dieses Rechteck horizontal um 'entfernung' Bildschirmpunkte.
	 */
	public void horizontalBewegen(int distance) {
		loeschen();
		xPosition += distance;
		zeichnen();
	}

	/**
	 * Bewege dieses Rechteck vertikal um 'entfernung' Bildschirmpunkte.
	 */
	public void vertikalBewegen(int entfernung) {
		loeschen();
		yPosition += entfernung;
		zeichnen();
	}

	/**
	 * Bewege dieses Rechteck langsam horizontal um 'entfernung'
	 * Bildschirmpunkte.
	 */
	public void langsamHorizontalBewegen(int entfernung) {
		int delta;

		if (entfernung < 0) {
			delta = -1;
			entfernung = -entfernung;
		} else {
			delta = 1;
		}

		for (int i = 0; i < entfernung; i++) {
			xPosition += delta;
			zeichnen();
		}
	}

	/**
	 * Bewege dieses Rechteck langsam vertikal um 'entfernung' Bildschirmpunkte.
	 */
	public void langsamVertikalBewegen(int entfernung) {
		int delta;

		if (entfernung < 0) {
			delta = -1;
			entfernung = -entfernung;
		} else {
			delta = 1;
		}

		for (int i = 0; i < entfernung; i++) {
			yPosition += delta;
			zeichnen();
		}
	}

	/**
	 * Ändere die Größe dieses Rechteckes in 'neueGroesse'. 'neueGroesse' muss
	 * groesser gleich Null sein.
	 */
	public void groesseAendern(int neu1, int neu2) {
		loeschen();
		seite1 = neu1;
		seite2 = neu2;
		zeichnen();
	}

	/**
	 * Ändere die Farbe dieses Rechteckes in 'neueFarbe'. Gültige Angaben sind
	 * "rot", "gelb", "blau", "gruen", "lila" und "schwarz".
	 */
	public void farbeAendern(String neueFarbe) {
		farbe = neueFarbe;
		zeichnen();
	}

	/**
	 * Zeichne dieses Rechteck mit seinen aktuellen Werten auf den Bildschirm.
	 */
	private void zeichnen() {
		if (istSichtbar) {
			Leinwand leinwand = Leinwand.gibLeinwand();
			leinwand.zeichne(this, farbe, new Rectangle(xPosition, yPosition,
					seite1, seite2));
			leinwand.warte(10);
		}
	}

	/**
	 * Lösche dieses Rechteck vom Bildschirm.
	 */
	private void loeschen() {
		if (istSichtbar) {
			Leinwand leinwand = Leinwand.gibLeinwand();
			leinwand.entferne(this);
		}
	}
}
