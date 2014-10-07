Bootstrap Laces
===============

Small utility library for use (primarily) with Bootstrap 3+.


Required Variables
------------------

* @brand-light
* @brand-dark
* @brand-primary
* @brand-success
* @brand-info
* @brand-warning
* @brand-danger
* @brand-black
* @border-color
* @border-radius-base


Use
---

### LESS ###

To use the LESS version, you can do a standard @import

```CSS
@import (less) "bl-utilities.less"
```

For this to compile correctly in your project, you must have the variables from the "Required Variables"
section above imported before this file is imported


### CSS ###

To use the CSS version, you can do a standard HTML link

```HTML
<link rel="stylesheet" type="text/css" href="css/bl-utilities.css" />
```

Use of the CSS version will default you to the styles used in the most recent build. These
colors are a close approximation of what Bootstrap has included in their variables.less document.