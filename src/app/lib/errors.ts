export function getAuthErrorMessage(error?: string): string {
  switch (error) {
    case "CredentialsSignin":
      return "Nieprawidłowy e-mail lub hasło.";
    case "AccessDenied":
      return "Nie masz dostępu do tego zasobu.";
    case "OAuthAccountNotLinked":
      return "Konto z tym adresem e-mail jest już powiązane z inną metodą logowania.";
    case "Configuration":
      return "Błąd konfiguracji serwera. Skontaktuj się z administratorem.";
    case "Verification":
      return "Link weryfikacyjny wygasł lub jest nieprawidłowy.";
    case "Callback":
      return "Błąd przy powrocie z dostawcy logowania.";
    case "Default":
      return "Wystąpił nieznany błąd.";

    case "Email and password required":
      return "E-mail i hasło są wymagane.";
    case "User already exists":
      return "Użytkownik z tym adresem e-mail już istnieje.";
    case "Invalid email":
      return "Nieprawidłowy adres e-mail.";
    case "Password too short":
      return "Hasło jest zbyt krótkie. Minimalna długość to 6 znaków.";
    
    default:
      return "Wystąpił błąd. Spróbuj ponownie.";
  }
}
