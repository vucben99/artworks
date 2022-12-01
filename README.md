# artworks

1. Telepítsd a Node.js és Git alkalmazásokat: https://nodejs.org/ és https://git-scm.com/  (vs code?)
   Terminálon adjuk ki a következő parancsokat:
2. Leklónozzuk a repositoryt: 

   ```git clone https://github.com/vucben99/artworks.git```
   
3. Belépünk az alkalmazás mappájába:
    ``` cd .\artworks\```
    
4. Telepítjük az alkalmazáshoz szükséges library-ket (a node package manager telepíti a package.json-beli dependency-ket):
    ```npm install```
    
5. (opcionális) Ha gyorsan kiváncsiak vagyunk a kódra...:
    ```code .```
    ```npm run dev```
    
6. A deploy-hoz szükséges fájlokat megépítjük. Ezek a fájlok a "dist" mappában keletkeznek.
    ```npm run build```
    
7. Megnézzük a gyors és hatékony kódot:
    ```npm run preview```
