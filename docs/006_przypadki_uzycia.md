# Dokumentacja: Przypadki użycia

## Czym są przypadki użycia?

Przypadki użycia (ang. *use cases*) to technika modelowania systemów w analizie i projektowaniu, która opisuje interakcje użytkownika (lub innego systemu) z systemem w celu osiągnięcia określonego celu. Są używane do dokumentowania wymagań funkcjonalnych systemu i pomagają zrozumieć, jakie funkcje system musi realizować.

---

## Do czego służą przypadki użycia?

- **Określenie wymagań**: Przypadki użycia pomagają określić, co system musi robić z perspektywy użytkownika.
- **Komunikacja z interesariuszami**: Pozwalają na klarowną komunikację między zespołem projektowym a klientem.
- **Planowanie**: Służą jako podstawa do podziału pracy nad systemem na mniejsze zadania.
- **Testowanie**: Mogą być wykorzystywane do opracowywania scenariuszy testowych.

---

## Jak się tworzy przypadki użycia?

### 1. **Identyfikacja aktorów**
- Aktorami mogą być ludzie, urządzenia lub inne systemy wchodzące w interakcję z systemem.
- Przykłady: "Klient", "Bankomat", "System bankowy".

### 2. **Zdefiniowanie przypadków użycia**
- Każdy przypadek użycia opisuje jedną funkcję systemu widzianą z perspektywy aktora.
- Przykłady: "Zalogowanie się do systemu", "Wykonanie przelewu", "Sprawdzenie salda".

### 3. **Rysowanie diagramu przypadków użycia**
- Diagram składa się z:
    - **Aktorów**: Oznaczanych za pomocą postaci człowieka.
    - **Przypadków użycia**: Owalne kształty opisujące funkcje systemu.
    - **Systemu**: Prostokąt, w którym znajdują się przypadki użycia.
    - **Połączeń**: Strzałki lub linie reprezentujące relacje między aktorami a przypadkami użycia.

---

## Co oznaczają poszczególne elementy diagramu przypadków użycia?

1. **Aktorzy**:
    - Reprezentowani jako postacie człowieka.
    - Symbolizują użytkownika, który wchodzi w interakcję z systemem.

2. **Przypadki użycia**:
    - Owalne kształty, które symbolizują funkcje lub działania systemu.

3. **System**:
    - Prostokąt, w którym znajdują się przypadki użycia, reprezentujący granice systemu.

4. **Połączenia**:
    - Linie proste: Oznaczają komunikację między aktorem a przypadkiem użycia.
    - Strzałki:
        - **Extend**: Przypadek użycia, który jest opcjonalnym rozszerzeniem innego przypadku.
        - **Include**: Przypadek użycia, który jest zawsze wywoływany przez inny przypadek.


# Dokumentacja elementów diagramu przypadków użycia

| **Element**        | **Nazwa**             | **Opis**                                                                 |
|---------------------|-----------------------|---------------------------------------------------------------------------|
| **Aktor**           | Klient               | Osoba korzystająca z systemu bankowego w celu wykonania operacji finansowych. |
| **Aktor**           | System Bankowy       | System przetwarzający żądania klientów, np. logowanie czy realizację przelewów. |
| **Przypadek użycia**| Zalogowanie się      | Proces uwierzytelnienia klienta za pomocą danych logowania (login i hasło).   |
| **Przypadek użycia**| Wykonanie przelewu   | Operacja polegająca na wysłaniu środków na konto odbiorcy.                 |
| **Związek**         | Komunikacja          | Relacja między Klientem a systemem oraz systemem a przypadkami użycia.    |
| **System**          | System Bankowy       | Granice systemu, w których realizowane są przypadki użycia.               |
| **Include**         | Weryfikacja danych   | Funkcja wykonywana wewnętrznie w przypadku użycia "Wykonanie przelewu".   |
| **Extend**          | Powiadomienia e-mail | Opcjonalne rozszerzenie procesu "Wykonanie przelewu", wysyłające potwierdzenie. |

>🎯  **Zadanie**<br>
Należy wykonać tabelę oraz diagram przypadków użycia oraz tabelę powyżej. Całość powinna zaleźć się w repozytorium projektu w `docs` w katalogu `funkcjonalności\nazwa_funkcjonalnosci\` 
Zawartość katalogu ( dokumentacja ) jest wykonana przez jednego członka zespołu. Każdym ma swój katalog za który jest odpowiedzialny.
W katalogu powinien znaleźć się opis funkcjonalności diagram przypadku użycia oraz tabela powyżej.

> ⚠️ **Uwaga:**  
> **Poniżej link do diagramu przypadku użycia, który można użyć. Dokument należy skopiować na swój `Google Drive`**
https://docs.google.com/drawings/d/1mhsG9cjXUajDcqRVUCO55IxN6Z9gVdWdMy59G4Grrh0/edit?usp=sharing