# Aplikacja MVC

Ten projekt to aplikacja oparta na React, która stosuje architekturę Model-View-Controller (MVC). Umożliwia użytkownikom odkrywanie książek, autorów, epok, gatunków i audiobooków, korzystając z danych pobieranych z API Wolne Lektury.

## Framework i Architektura

Aplikacja jest zbudowana przy użyciu React, popularnej biblioteki JavaScript do budowania interfejsów użytkownika. Architektura stosuje wzorzec MVC:

- **Model**: Reprezentuje dane i logikę biznesową. W tej aplikacji dane są pobierane z API Wolne Lektury.
- **View**: Reprezentuje komponenty interfejsu użytkownika. Komponenty React są używane do renderowania interfejsu.
- **Controller**: Obsługuje dane wejściowe użytkownika i aktualizuje model oraz widok odpowiednio. Do tego celu używane są hooki React i obsługa zdarzeń.

## Narzędzia i Biblioteki Używane

### a. Generatory

- **Create React App**: Używany do wygenerowania początkowej struktury projektu i konfiguracji.

### b. Routery

- **React Router**: Używany do obsługi routingu w aplikacji. Umożliwia nawigację między różnymi stronami, takimi jak Strona Główna, Autorzy, Epoki, Audiobooki i Gatunki.

### c. Szablony

- **JSX**: Używany do definiowania struktury komponentów React. JSX pozwala na pisanie składni podobnej do HTML w JavaScript.

### d. Konektory do Baz Danych

- **Axios**: Używany do wykonywania żądań HTTP do API Wolne Lektury w celu pobierania danych.

### e. Integracja z REST API

- **API Wolne Lektury**: Aplikacja pobiera dane z tego publicznego API, aby wyświetlać książki, autorów, epoki, gatunki i audiobooki.

## Jak Uruchomić Projekt

1. Sklonuj repozytorium.
2. Zainstaluj zależności używając `npm install`.
3. Uruchom serwer deweloperski używając `npm start`.
4. Otwórz aplikację w przeglądarce pod adresem `http://localhost:3000`.
