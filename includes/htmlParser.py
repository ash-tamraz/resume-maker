
import numpy as np
from sklearn.datasets import load_files
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import CountVectorizer
from pprint import pprint
import re


loading_html = load_files("./job-ad-files/train", description=None, categories=None,
load_content=True, shuffle=False, encoding=None, decode_error='strict',
random_state=0)

text_train, y_train = loading_html.data, loading_html.target
vect = CountVectorizer().fit(text_train)
X_train = vect.transform(text_train)
feature_names = vect.get_feature_names()

scores = cross_val_score(LogisticRegression(), X_train, y_train, cv=5)

print("Mean cross validation accuracy: {:2f}".format(np.mean(scores)))
#print("Number of features: {}".format(len(feature_names)))
#print("First 20 features:\n{}".format(feature_names[:20]))
#print("Features 900 to 920:\n{}".format(feature_names[900:920]))
#print("Every 100th feature:\n{}".format(feature_names[::100]))
# Right now, just try to find the list of qualifications in the page
# can switch to looking for keywords in general if that turns out to be
# easier.

# this will be a list of the contents of the files, still in raw html
#raw_html = loading_html.data

#this finds html tags that self close
#x = re.findall('<\w+.*/>', raw_html[0])

#x = re.findall('<([a-zA-Z]+).*\1>', raw_html[len(raw_html)-1])

#vect = CountVectorizer(token_pattern='(\x3C[A-Za-z]+\x3E.*\x3C)', analyzer='word')
#vect.fit_transform(raw_html)

#print("Vocab content:\n\n {}".format(vect.vocabulary_))
#print("Results of regex search")
#for i in x:
#  print(i)
#print("Data passed in:\n\n {}".format(x))
#print("Data passed in:\n\n{}".format(raw_html[1]))

#print("Samples per class (training): {}".format(np.bincount(y_train)))
