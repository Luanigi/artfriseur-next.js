/**
 * @author Luan
 * @version 1.0.0 v
 */
public class Sonne
{
    // Bezugsobjekte

    // Attribute
    Kreis sonne;

    int PosX;
    int PosY;
    
    // Konstruktor
    public Sonne()
    {   
        for (int i = 0; i < 10; i++) {
            
        }
        sonne = new Kreis();
            sonne.sichtbarMachen();
            sonne.farbeAendern("gelb");
            sonne.groesseAendern(135);
            sonne.horizontalBewegen(20);
            sonne.vertikalBewegen(-40);
    }

    // Dienste
    void verschieben(int PosX, int PosY) {
           sonne.horizontalBewegen(PosX);
           sonne.vertikalBewegen(PosY);
    }
    
    
}
