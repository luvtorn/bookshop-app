📚 Bookshop — internetowy sklep z książkami
-------------------------------------------

Nowoczesna aplikacja webowa do przeglądania, dodawania i edytowania książek z obsługą przesyłania okładek i zarządzaniem użytkownikami.

### 🚀 Technologie

*   **Next.js** – renderowanie po stronie serwera i routing
    
*   **TypeScript** – statyczne typowanie
    
*   **Tailwind CSS** i/lub **MUI** – nowoczesny wygląd UI
    
*   **React Hook Form** – obsługa formularzy
    
*   **Prisma** – ORM do obsługi bazy danych
    
*   **Supabase Storage** – przechowywanie i obsługa obrazów
    
*   **PostgreSQL** – relacyjna baza danych
    
*   **Axios** – zapytania HTTP
    

### 📦 Instalacja i uruchomienie
```bash
# 1. Sklonuj repozytorium
    git clone https://github.com/luvtorn/bookshop.git  
    cd bookshop  
# 2. Zainstaluj zależności  
    npm install  
# 3. Skonfiguruj plik .env.local  
    cp .env.example .env.local  
# 4. Uruchom aplikację  
    npm run dev
```
    
### ⚙️ Zmienne środowiskowe (.env.local)
```js
    DATABASE_URL=postgresql://...  
    NEXT_PUBLIC_SUPABASE_URL=https://...  
    NEXT_PUBLIC_SUPABASE_ANON_KEY=...  
    SUPABASE_SERVICE_ROLE_KEY=...
```
        

### 🧱 Struktura projektu
```
/app  ┣ 📁 components   # Komponenty interfejsu użytkownika  
      ┣ 📁 pages             # Backend  
      ┣ 📁 api               # API (wewnętrzne)  
      ┣ 📁 lib               # Narzędzia  
      ┣ 📁 prisma            # Schemat bazy danych i migracje  
      ┣ 📄 types.ts          # Typy globalne  
      ┗ 📄 README.md         # Dokumentacja projektu   
```

### 🧩 Główne funkcjonalności

* ✅ Przeglądanie listy książek
* ✅ Rejestracja i logowanie
* ✅ Dodawanie książek wraz z obrazem
* ✅ Edytowanie i usuwanie książek (tylko przez właściciela)
* ✅ Obsługa formularzy z walidacją
* ✅ Przesyłanie plików do Supabase

### 🔒 Uwierzytelnianie

Aplikacja wykorzystuje prosty system rejestracji i logowania z przechowywaniem danych użytkowników w bazie PostgreSQL.

### 📌 Przyszłe plany

*   Filtrowanie i sortowanie książek
    
*   Stronicowanie
    
*   Kategorie i tagi
    
*   System ocen lub komentarzy
    

### 🧑‍💻 Autor

**Mikołaj Germanenka**📍 Poznań, Polska📫 kolyangermanenko@gmail.com