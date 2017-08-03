An example of best-practice for ORM-JSON translation in TypeScript and JavaScript, free for use, released under the GNU Lesser General Public License.

If TypeScript/JavaScript objects require data validation, constraints, or other helper methods then a straight translation from JSON to an untyped object is not sufficient. The example code in this project shows how to design an entity super-class with methods to initialize from JSON and create JSON in sub-classes that provide accessor (get/set) and other helper methods. 

Details of this code may be found in the blog post <http://blog.askjoelit.com/2017/08/orm-and-json-in-javascript-and.html>.

Requires Node 6 or later.

1. Download the project.

2. Run *npm install* to install the required Node packages.

3. Run *npm run build* to compile the TypeScript modules.

4. Use *npm start* to run the program. Modify any of the code to play with how the ORM-JSON translation works.