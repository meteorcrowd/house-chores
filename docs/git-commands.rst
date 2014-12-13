##################
using git
##################

This guide explains the branching strategy used and a command synopsis for git.

*********
Branching strategy
*********

* master branch is a copy of what is running in production.  Stable and tested branch
* development branch is a branch where developed features are merged. Base branch of all feature branches
* d/feature branch (e.g. d/mobile, d/relations) are branches from development, used to develop a single feature

*********
git commands
*********

Creating a new branch
=========

.. code-block:: bash
  git checkout -b d/feature

You immediatly also checkout the branch


Updating a feature branch
=========

If you want to update your feature branch with updates from the development branch, use git pull

.. code-block:: bash
  git pull development


Merging a branch
=========

First checkout the development (or other) branch

.. code-block:: bash
  git checkout development

Then merge the feature branch into the development branch

.. code-block:: bash
  git merge d/feature


Removing a remote branch
=========

When you want to delete a branch, first delete it on the repository

.. code-block:: bash
   git push --delete origin d/feature


Removing a local branch
=========

You can remove the branch locally on your computer.

.. code-block:: bash
  git branch -D d/feature


Pruning stale remote branches
=========

When someone deletes a branch on the repository, it does not delete the local references to the remote branch. In order to remove them, you can prune them all with a single command.

.. code-block:: bash
  git remote prune origin

http://stackoverflow.com/questions/4040717/git-remote-prune-what-am-i-doing-wrong
