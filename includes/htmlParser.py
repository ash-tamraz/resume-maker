
import numpy as np
from sklearn.datasets import load_files
from sklearn.feature_extraction.text import CountVectorizer
from pprint import pprint

loading_html = load_files("./job-ad-files/", description=None, categories=None,
load_content=True, shuffle=False, encoding=None, decode_error='strict',
random_state=0)

# Right now, just try to find the list of qualifications in the page
# can switch to looking for keywords in general if that turns out to be
# easier.

# this will be a list of the contents of the files, still in raw html
raw_html = loading_html.data

vect = CountVectorizer(token_pattern='(\x3C[A-Za-z]+\x3E.*\x3C)', analyzer='word')
vect.fit_transform(raw_html)

print("Vocab content:\n {}".format(vect.vocabulary_))
