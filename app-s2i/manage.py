#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")

    from django.core.management import execute_from_command_line

    if sys.argv[1] != 'migrate': # we are not using a database but the entrypoint calls migrate.
        execute_from_command_line(sys.argv)
