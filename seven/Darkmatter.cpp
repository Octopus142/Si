#include "S.c"
#include "T.c"
#include <iostream>
#include <cmath>
#include <vector>

class DarkMatter {
private:
    double mass;
    double radius;
    const double G = 6.67430e-11; // Gravitational constant
    const double c = 299792458.0; // Speed of light in m/s
    const double hbar = 1.054571817e-34; // Reduced Planck constant

public:
    DarkMatter(double m, double r) : mass(m), radius(r) {}

    // Simplified Hawking radiation temperature calculation
    double calculateTemperature() const {
        return (hbar * c * c * c) / (8 * M_PI * G * mass * 1.380649e-23);
    }

    // Simplified gravitational effect calculation
    double calculateGravitationalEffect() const {
        return (G * mass) / (radius * radius);
    }

    // Conceptual dark matter density calculation
    double calculateDensity() const {
        double volume = (4.0 / 3.0) * M_PI * pow(radius, 3);
        return mass / volume;
    }

    void describe() const {
        std::cout << "Dark Matter Description based on Hawking's concepts:" << std::endl;
        std::cout << "Mass: " << mass << " kg" << std::endl;
        std::cout << "Radius: " << radius << " m" << std::endl;
        std::cout << "Theoretical Temperature: " << calculateTemperature() << " K" << std::endl;
        std::cout << "Gravitational Effect: " << calculateGravitationalEffect() << " m/s^2" << std::endl;
        std::cout << "Conceptual Density: " << calculateDensity() << " kg/m^3" << std::endl;
    }
};

int main() {
    std::vector<DarkMatter> darkMatterSamples = {
        DarkMatter(1e30, 1e6),
        DarkMatter(1e35, 1e8),
        DarkMatter(1e40, 1e10)
    };

    for (const auto& sample : darkMatterSamples) {
        sample.describe();
        std::cout << std::endl;
    }

    return 0;
}
