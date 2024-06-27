                     
<h1 align="center" style="font-weight: bold;">RULibrary 💻</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#routes">API Endpoints</a>
<a href="#colab">Collaborators</a>
<a href="#contribute">Contribute</a> 
</p>


<p align="center">Welcome to our lifesaving platform! Whether you're looking for blood donors or seeking to donate, our website connects you with a network of generous donors ready to help. Simply search by blood type and location to find a match, or submit a request to alert nearby donors in times of urgent need. Stay informed and inspired with our informative blog, featuring stories, tips, and important updates on blood donation. Join us in making a difference, one donation at a time!.</p>


<p align="center">
<a href="https://najmulislamnajim.github.io/bloodbank/">📱 Visit this Project</a>
</p>
 
<h2 id="technologies">💻 Technologies</h2>

list of all technologies we used
- Django
- Django REST Framework
- MySQL
- HTML
- CSS
- Bootstrap
 
<h2 id="started">🚀 Getting started</h2>

Skip for now
 
<h3>Prerequisites</h3>

```bash
pip install -r requirements.txt
```

Run this command to install all prerequisites. Or have a look on 'requirements.txt'.


 
<h3>Cloning</h3>


```bash
git clone https://github.com/najmulislamnajim/bloodbank.git
git clone https://github.com/najmulislamnajim/blood-bank-server.git
```

Run this command to clone this project.
 
<h3>Config .env variables</h2>

Use the `.env` as reference to create your configuration file `.env` with your 
Google, GitHub Credentials

```yaml
EMAIL= ''
EMAIL_PASSWORD='' 
```
 
<h3>Starting</h3>

How to start this project

```bash
python manage.py runserver
```
 
<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET https://bloodbankbd.pythonanywhere.com/donor/list/</kbd>     | Donor List
| <kbd>GET https://bloodbankbd.pythonanywhere.com/blog/list/    | Blog List 
 
<h2 id="contribute">📫 Contribute</h2>



1. `git clone git clone https://github.com/najmulislamnajim/bloodbank.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append a screenshot of visual modifications and wait for the review!
 
<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](#)
```bash
git pull
```
[💾 Commit pattern](#)
```bash
git add .
git commit -m"your commit title"
git push
```
