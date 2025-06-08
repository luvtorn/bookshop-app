# 📚 Metodologia projektu
## Podczas realizacji projektu zastosowano podejście zwinne, oparte na prostym cyklu planowania, implementacji i testowania. Na początku określono podstawowe funkcjonalności aplikacji, takie jak: rejestracja użytkownika, dodawanie i edycja książek, przeglądanie katalogu oraz system komentarzy.

### Projekt podzielono na mniejsze etapy (moduły), które były realizowane niezależnie:

* Ogika uwierzytelniania (rejestracja i logowanie użytkowników),

* Panel administracyjny dla książek (dodawanie, edytowanie, usuwanie),

* Integracja z Supabase dla przechowywania obrazów i danych,

* Implementacja interfejsu użytkownika z użyciem Tailwind CSS i React.

### W celu zapewnienia czytelnego kodu i łatwego utrzymania, zastosowano dobre praktyki:

* Podział na komponenty (Atomic Design),

* Typowanie za pomocą TypeScript,

* Zarządzanie stanem formularzy z React Hook Form,

* Asynchroniczna komunikacja z backendem przy użyciu fetch i React Query.

### Każdy etap był testowany lokalnie, a następnie wdrażany na Vercel, co umożliwiło szybki podgląd zmian i łatwe udostępnienie aplikacji do testów.