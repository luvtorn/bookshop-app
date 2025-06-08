# Arkusz Projektowania Funkcjonalności

| Sekcja                          | Szczegóły                                                                                       |
|---------------------------------|-------------------------------------------------------------------------------------------------|
| **Pracownik Nadzorujący Kontakt z Klientem** |Mikołaj Germanenka                                                                                                 |
| Imię i Nazwisko                 |Mikołaj Germanenka                                                                                                 |
| Adres email                     | kolyangermanenko@gmail.com                                                                                                |
| **Opis Klienta**                | luvtorn's org – wewnętrzny projekt stworzony w ramach praktyk zawodowych                                                                                                |
| Nazwa Funkcjonalności           | Rejestracja i logowanie użytkowników                                                                                                 |
| **Cel Funkcjonalności**         | Umożliwienie nowym użytkownikom tworzenia konta oraz bezpiecznego logowania się do aplikacji.                                        |
| **Funkcjonalność**              | Formularze umożliwiające rejestrację i logowanie użytkowników przy użyciu adresu e-mail i hasła. Dane przesyłane są na backend, gdzie hasła są haszowane i zapisywane w bazie danych. System uwzględnia walidację danych oraz komunikaty błędów (np. błędny e-mail, nieprawidłowe hasło). Po zalogowaniu użytkownik otrzymuje token JWT umożliwiający dostęp do zasobów chronionych.                                                               |
| **Opis Elementów Graficznych**  | Formularze rejestracji i logowania posiadają jednolity styl zgodny z całą aplikacją: responsywny układ, ikonki, etykiety pól, komunikaty walidacyjne. Przyciski do zatwierdzania formularzy są wizualnie wyróżnione.                                                          |
| **Opis Techniczny**             |                                                                                                 |
| Technologia Wykonania           | Frontend: React (Next.js), Tailwind CSS. Backend: Next.js API routes, Prisma ORM, bcrypt, JWT.                                 |
| Zależności                      | Biblioteki: bcrypt (haszowanie haseł), jsonwebtoken, zod (walidacja), @prisma/client. Integracja z bazą danych PostgreSQL przez Prisma.                            |
| **Baza Danych**                 |                                                                                                 |
| Struktura Bazy Danych           | Tabela User: id (PK), email (unikalny), hashedPassword, createdAt, updatedAt. Relacje z tabelami komentarzy i zamówień w przyszłości.                                               |
| **Testowanie**                  |                                                                                                 |
| Scenariusz Testowy              | 1. Użytkownik wprowadza poprawne dane – oczekiwane logowanie i przekierowanie. 2. Wprowadzenie niepoprawnych danych – komunikat o błędzie. 3. Próba rejestracji na istniejący adres e-mail – błąd z informacją. 4. Sprawdzenie przechowywania hasła – w bazie zapisany jako hash |                                                                  |
| **Bezpieczeństwo**              | Hasła haszowane za pomocą bcrypt, tokeny JWT przechowywane bezpiecznie po stronie klienta, walidacja danych wejściowych, zabezpieczenie endpointów przed atakami XSS i SQL Injection.                         |

