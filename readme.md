[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21777886&assignment_repo_type=AssignmentRepo)

# opgave

## probeer zoveel als mogelijk de forumieren te doen werken

de url van de api: https://o-apiandclient-render.onrender.com/

API Structuur:

1. /geschenken <br>
   get - / --> lijst geschenken <br>
   get - /:ID --> 1 geschenk<br>
   put - / --> geschenk toevoegen<br>
   delete - /:ID --> geschenk wissen<br>

2. /kinderen<br>
   get - / --> lijst kinderen<br>
   get - /:ID --> 1 kind + detail<br>
   put - / --> kind toevoegen<br>
   patch - /wisGeschenk/:ID --> wis geschenk uit de lijst<br> body = geschenk params = kind
   patch - /addGeschenk/:ID --> voeg geschenk toe aan de lijst<br> body = geschenk params = kind

### voeg geschenken toe, of wis geschenken.

1. Je selecteerd een kind
2. de geschenken van dit kind verschijnen in de ul
3. via de dropdown van addgeschenk voeg je geschenken toe
4. via de dropdown van verwijdergeschenken wis je een geschenk uit zijn lijst
5. zorg ervoor dat de lijst met geschenken (ul) telkens upgedate wordt.

### voeg een kind toe aan de lijst

1. voeg een kind toe aan de reeds bestaande lijst
2. zorg ervoor de bovenste dropdown met alle kinderen altijd up-to-date is - ook na het toevoegen van een kind.

veel succes
