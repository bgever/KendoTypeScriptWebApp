Kendo UI & TypeScript Definition Files Sample Problem
=====================================================

This solution should demonstrate a problem with Visual Studio 2013 Update 3 that renders thousands of errors on build.

How to reproduce?
-----------------

Build the solution from Visual Studio.

How to resolve the problem?
---------------------------

Exclude the following files from the project:


    kendo.dataviz.d.ts
    kendo.mobile.d.ts
    kendo.web.d.ts