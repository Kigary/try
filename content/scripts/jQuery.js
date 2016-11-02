function $(tagName)
{
	var tag = document.createElement(tagName);
	return tag;
}
HTMLElement.prototype.append = function(child)
{
	this.appendChild(child);
	return this;
}