# Niyya Women — site informations

Base statique HTML/CSS/JS pour les pages publiques d'information de Niyya Women.

## Pages

- `index.html` — accueil informations
- `a-propos.html` — à propos
- `faq.html` — FAQ
- `cgu.html` — CGU
- `confidentialite.html` — politique de confidentialité
- `mentions-legales.html` — mentions légales
- `signaler-un-probleme.html` — formulaire de signalement

## Important

Les contenus juridiques sont des structures avec placeholders et ne constituent pas la version juridique finale. Les informations doivent être complétées et validées avant publication.

Le formulaire de signalement envoie un JSON à `/api/report-problem/` (modifiable avec `data-report-endpoint` sur le formulaire). Cette route doit être fournie par l'API Django et valider `category`, `email` et `message` avant l'envoi.

Pour envoyer les courriels avec Infomaniak, configurez SMTP côté serveur Django, jamais dans le JavaScript public : serveur `mail.infomaniak.com`, port `465`, SSL implicite (`EMAIL_USE_SSL=True`, `EMAIL_USE_TLS=False`), avec les identifiants stockés dans des variables d'environnement. Le port 465 utilise techniquement TLS implicite, même s'il est appelé « SSL » dans les paramètres SMTP.
