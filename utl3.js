utl = {};

//*******************************
utl.eid = function(id)
{
return document.getElementById(id);
}

//*******************************
// First param is ID of scope element,
// second is tag name.
//-------------------------------
utl.tag = function(id, tag)
{
return document.getElementById(id).getElementsByTagName(tag);
}
//*******************************

utl.name = function(nm)
{
return document.getElementsByName(nm);
}
