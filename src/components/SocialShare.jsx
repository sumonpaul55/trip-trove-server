import React from 'react';
import { ShareSocial } from 'react-share-social'

const SocialShare = ({ url }) => {
    return <ShareSocial
        url={url}
        socialTypes={['facebook', 'twitter', 'linkedin']}
    />
};

export default SocialShare;