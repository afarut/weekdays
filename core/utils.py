from django.template.defaultfilters import slugify as django_slugify
from core.constants import ALPHABET


def slugify(s):
    return django_slugify("".join(ALPHABET.get(w, w) for w in s.lower()))
