| **Element**          | **Nazwa**                      | **Opis**                                                                    |
| -------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| **Aktor**            | Użytkownik                     | Osoba, która rejestruje się lub loguje do systemu.                          |
| **Aktor**            | System Aplikacji               | Backend odpowiedzialny za obsługę procesu uwierzytelniania.                 |
| **Przypadek użycia** | Rejestracja                    | Utworzenie konta użytkownika poprzez podanie e-maila i hasła.               |
| **Przypadek użycia** | Logowanie                      | Proces uwierzytelniania i udzielania dostępu na podstawie danych logowania. |
| **Include**          | Walidacja danych wejściowych   | Weryfikacja poprawności e-maila i siły hasła.                               |
| **Extend**           | Komunikaty o błędach           | Wyświetlenie informacji o błędach, np. "nieprawidłowe dane logowania".      |
| **Związek**          | Komunikacja                    | Relacja między użytkownikiem a systemem i jego funkcjonalnościami.          |
| **System**           | System Rejestracji i Logowania | Logiczna granica systemu uwierzytelniania użytkowników.                     |
