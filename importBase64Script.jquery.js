jQuery.extend({

    /**
     * Takes a script decodes the base64 src, puts it into the body of the script tag,
     * then puts it in whatever parent specified.
     * 
     * @TODO Add more configuration options (append vs prepend etc)
     * 
     * @requires https://plugins.jquery.com/base64/
     *
     * @param  {Object} script The script tag that should be manipulated
     * @param  {Object} parent The parent element to append the final script tag to.
     *
     * @return {Object}        The script tag in question
     */
    importBase64Script : function ( script, parent ) {

        // Check for base64 library
        if ( typeof $.base64 === 'undefined' )
            throw 'No $.base64 found!';

        // Sanitize our script var
        // Normalize our script object
        script = ( script instanceof jQuery ? script : $(script) );

        // Check if it is a script tag
        if ( script[0].tagName !== "SCRIPT" )
            throw "Not a script tag";

        // Set default parent value
        parent = parent || $('head');
        // Normalize our parent var
        parent = ( parent instanceof jQuery ? parent : $(parent) );

        // We're gonna extract the base64 value
        var re        = /data:[a-z]+\/[a-z]+;base64,([0-9a-zA-Z\=\+]+)/,
        base64Content = script.prop('src').match(re)[1],
        scriptContent = $.base64.decode( base64Content );

        // Drop the decoded javascript into the contents of the script tag
        script.html( scriptContent );
        // Clear src value
        script.prop('src','');

        // Append it to the parent
        parent.append(script);

        return script;

    }
});
