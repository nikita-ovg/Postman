**Responce**
  ```sh
{
    "token": "/s34lfgbj/hrfjrs362/jjd909/36337kjkWpqc5402kmtltluktkr36226404821evny"
}
```

**Tests**
var kil = pm.response.json();
pm.environment.set("token", kil.token);
