// Comments.js
import React, { useEffect } from 'react'

const Comments = ({ fullUrl, id }) => {
    useEffect(() => {
        const DISQUS_SCRIPT = 'disq_script'
        const sd = document.getElementById(DISQUS_SCRIPT)
        if (!sd) {
            var disqus_config = function() {                
                this.page.url = fullUrl
                this.page.identifier = id
            }

            const d = document
            const s = d.createElement('script')
            s.src = 'https://https-algorithms-study-herokuapp-com.disqus.com/embed.js'
            s.id = DISQUS_SCRIPT
            s.async = true
            s.setAttribute('data-timestamp', +new Date())

            d.body.appendChild(s)
        } else {
            window.DISQUS.reset({
            reload: true,
            config: disqus_config,
            })
        }
    }, [])
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
        }}>
            <div id="disqus_thread" style={{width: '90%'}}></div>
        </div>
    )
}

export default Comments