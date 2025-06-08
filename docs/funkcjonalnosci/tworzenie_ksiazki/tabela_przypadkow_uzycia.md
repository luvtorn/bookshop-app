| **Element**          | **Nazwa**                                  | **Opis**                                                                     |
| -------------------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| **Aktor**            | Administrator / Użytkownik z uprawnieniami | Osoba posiadająca prawo do dodawania książek do systemu.                     |
| **Aktor**            | System Księgarni                           | Backend, który obsługuje operacje tworzenia i zapisywania książek.           |
| **Przypadek użycia** | Tworzenie książki                          | Dodanie nowej książki poprzez formularz.                                     |
| **Include**          | Walidacja formularza                       | Sprawdzenie poprawności danych wejściowych (np. tytuł nie może być pusty).   |
| **Include**          | Wybór kategorii i cech                     | Wybór wielu kategorii i cech książki z listy.                                |
| **Extend**           | Powiadomienie o sukcesie                   | Wyświetlenie komunikatu po pomyślnym dodaniu książki.                        |
| **Związek**          | Komunikacja                                | Interakcja pomiędzy użytkownikiem a systemem w kontekście tworzenia książki. |
| **System**           | System Tworzenia Książki                   | Moduł aplikacji odpowiedzialny za rejestrowanie nowych książek.              |
