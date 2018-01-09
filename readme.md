# Introduction

This is an API driven movie search app that uses The Movie Database (TMDb) API to display a list of movies based on user entered movie name.

This product uses the TMDb API but is not endorsed or certified by TMDb.

To view the results, visit <https://jessicakarpovich.github.io/movie-search-app/>.

# Project Setup

Before you get started, check to make sure you have Sass, nvm, node, gulp, and gulp-sass. 

1. If you haven’t already, install Sass by going through the steps explained [here](http://sass-lang.com/install) on the official documentation.

2. Next, install or update nvm by following the steps [here](https://github.com/creationix/nvm) under **Installation**.

3. Once complete, scroll down to the **Usage** section on the above link and follow the steps to install node.

4. Follow the instructions under **Getting Started** [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) to install the gulp command globally and in your project directory.

5. Install the gulp-sass plugin by following the [instructions](https://www.npmjs.com/package/gulp-sass/).


## Optional Steps ##
If you plan on making changes to the sass files, run `gulp watch` in the terminal to have the CSS immediately updated. 

-*Note:* Before using the above command, you may need to install Browsersync, or to remove some code from the gulpfile. 

Browsersync allows you to see your changes applied live in your browser. To install it go [here](https://browsersync.io/#install).


# Current Functionality #

So far, only the home page is complete. When the user enters a search term into the search box and either presses enter or clicks the search icon, the result of their search is displayed below. 

-If the search found matches, they will be displayed using a 3-column layout.

-If there are no results, it will say "No matching results." and show what the user entered. 

## Layout ##

The design is currently not responsive and therefore may look incorrect on small or very large displays. 
