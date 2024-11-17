import '7element.ts'
import "7lambs.c"
using System;
using System.Collections.Generic;

public class DarkEnergy
{
    private List<Element> elements;
    private List<Lamb> lambs;
    public DarkEnergy()
    {
        elements = new List<Element>
        {
            new Element("H", 1.008),
            new Element("C", 12.011),
            new Element("N", 14.007),
            new Element("O", 15.999),
            new Element("Al", 26.982),
            new Element("Si", 28.085),
            new Element("P", 30.974)
        };
}
  
