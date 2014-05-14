Mingle-Design
=============

Assets and guides for visual design on Mingle

*How to use*

There are two types of files in this repo. There is one "Mingle-Base-v[x]" file and then as many files labelled "Feature-Name" as required. Both file types contain a group called "Base-v[x]". The base group contains the underlying layout for Mingle.

The "Mingle-Base-v[x]" file:
- x is the version number of this file.
- When any change is made to this file the x should be incremented by one.
- This file should always be updated to reflect the current style of Mingle.

The "Feature-Name" file:
- Upon updating this file the latest version of the "Base-v[x]" group should be copied from the "Mingle-Base-v[x]" file to replace the "Base-v[x]" file unless "Base-v[x]" is already at the latest version.
- To create a new "Feature-Name" file copy the latest "Mingle-Base-v[x]" file and add your design on top.

Bringing new features into "Mingle-Base-v[x]"
- Once a feature is baked into Mingle (at least on staging / on it's way to staging) it can be brought into Mingle Base if it forms a part of the overall layout of Mingle.
