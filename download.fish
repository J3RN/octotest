#!/usr/bin/env fish

set file_extensions "(png|jpg|gif)"

for line in (curl https://octodex.github.com | grep "width=\"424\"")
	set url (echo $line | grep -Eo "/images/.*\.$file_extensions")
	set name (echo $line | grep -Eo "alt=\".*\"" | grep -Eo "\".*\"" | tr -d '"' | sed 's/the //')
	if test \( -n $url \) -a \( -n $name \)
		curl -o cats/$name(echo $url | grep -Eo "\.$file_extensions") https://octodex.github.com/$url
	else
		echo "Couldn't find cat in $line"
	end
end
