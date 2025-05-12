# manage.py (Unmodified from user snippet)
#!/usr/bin/env python
import os
import sys

def main():
    """Django's command-line utility for administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pla_sim.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Make sure it's installed and "
            "available on your PYTHONPATH environment variable."
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
