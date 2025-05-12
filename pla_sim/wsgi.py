# pla_sim/wsgi.py (Unmodified from user snippet)
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pla_sim.settings')
application = get_wsgi_application()
