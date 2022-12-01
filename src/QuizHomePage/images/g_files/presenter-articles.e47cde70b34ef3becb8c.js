!function(e){function t(t){for(var n,r,s=t[0],l=t[1],d=t[2],p=0,g=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);g.length;)g.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},o={6:0},a=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/verso/static/";var s=window.webpackJsonpVerso=window.webpackJsonpVerso||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([2642,0,1]),i()}({129:function(e,t,i){const{default:n,css:o}=i(3),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=i(4),{BaseText:l}=i(10),{BREAKPOINTS:d}=i(6),c=i(11),p=n.header.withConfig({displayName:"UtilityLedeHeader"})`
  ${({contentAlign:e})=>e?(e=>`\n  text-align: ${e};\n`)(e):""}
  ${({theme:e,hasBackground:t})=>t?(e=>`\n  ${r(e,"background-color","colors.discovery.body.white.background")};\n`)(e):""}
  ${({hasImage:e})=>e?`\n      display: grid;\n      grid-template-columns: repeat(8, 1fr);\n      grid-column-gap: 1.5rem;\n      align-items: center;\n      padding: ${a(12)} 0 ${a(100)} 0;\n      @media  (min-width: 0) and (max-width: ${d.md}){\n          grid-gap: ${a(2)};\n          grid-template-columns: repeat(4, 1fr);\n          padding: ${a(5)} 0 ${a(5)} 0;\n          justify-items: center;\n      }\n      `:""}
  ${({alternativeStyle:e})=>e?`\n    grid-gap: ${a(2)} 0;\n    @media (min-width: 0) and (max-width: ${d.md}){\n      grid-gap: ${a(4)} 0;\n    }\n    `:""}
`,g=n.div.withConfig({displayName:"UtilityLedeWrapper"})`
  grid-auto-flow: row;
  grid-column: 4 / span 5;

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-gap: ${a(2)} 0;
    grid-column: 1 / span 4;
  }

  ${e=>!0===e.alternativeStyle?`\n        grid-gap: ${a(2)} 0;\n        @media (min-width: 0) and (max-width: ${d.md}){\n            grid-gap: ${a(4)} 0;\n        }\n        `:""}
`,u=n(l).withConfig({displayName:"UtilityLedeHedText"})`
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.hed")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.page-hed-section")};\n        `:""}
  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: 0 0 ${a(2,"px")};`}

  ${e=>!0===e.hasInverted&&o`
      ${({theme:e})=>r(e,"color","colors.discovery.body.white.context-texture")};
      ${({theme:e})=>s(e,"typography.definitions.discovery.hed-core-primary")};
      line-height: 25px;
      font-size: 20px;
    `}
`;u.defaultProps={as:"h1",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-break-out"};const m=n(l).withConfig({displayName:"UtilityLedeDekText"})`
  a {
    ${({theme:e})=>r(e,"color","colors.discovery.body.white.accent")};
  }

  p {
    margin: 0; /* overwrite native browser margins for paragraph tags */
  }
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.description.feature")};\n        a {\n          ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        }\n        `:""}

  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: ${a(2,"px")} 0 0;`}

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-row: 2;
  }
`;m.defaultProps={as:"h2",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const h=n(c).withConfig({displayName:"UtilityLedeImage"})`
  grid-column: 1 / span 3;
  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-column: 2 / span 2;
    grid-row: 1;
  }
  ${e=>!0===e.hasImage?`\n      @media (min-width: 0) and (max-width: ${d.md}){\n        padding-bottom: 0;\n      }\n      `:""}
`;e.exports={UtilityLedeHeader:p,UtilityLedeWrapper:g,UtilityLedeHedText:u,UtilityLedeDekText:m,UtilityLedeImage:h}},130:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getColorStyles:r}=i(4),{BREAKPOINTS:s}=i(6),l=n.div.withConfig({displayName:"ToggleChipListWrapper"})`
  ${({hasToggleGridColor:e,theme:t})=>e&&`\n  ${r(t,"background-color","colors.background.light")};\n  border-bottom:${a(4)} solid ;\n  ${r(t,"border-color","colors.background.light")};\n  `}
  display: flex;
  flex-direction: column;
  ${({contentAlign:e})=>"left"===e?"align-items: flex-start":"center"===e?"align-items: center":"right"===e&&"align-items: flex-end"}
`,d=n(o).withConfig({displayName:"LabelText"})`
  margin: 0 0 ${a(1)};

  ${({hasIncreasedBottomMargin:e})=>e&&` \n    margin: 0 0 ${a(2)};\n  `}

  ${({hasLargeLabel:e})=>e&&" \n    font-size: 1rem;\n    letter-spacing: 1px;\n  "}

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?r(t,"color","colors.interactive.base.white"):""}
`;d.defaultProps={as:"div",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.label"};const c=n.div.withConfig({displayName:"ListWrapper"})`
  display: flex;
  flex-direction: row;
  padding: 0 ${a(3)};
  width: 100%;
  gap: ${a(1.5)};

  ${({hasNoHorizontalScroll:e})=>e&&" &::-webkit-scrollbar \n    {\n      display: none;\n    }"}

  ${({layout:e})=>"wrap"===e?"flex-wrap: wrap;":"overflow-x: auto;"}
  
  ${({contentAlign:e,layout:t})=>{if("nowrap"===t)return"";switch(e){case"left":return"justify-content: flex-start;";case"center":return"justify-content: center;";case"right":return"justify-content: flex-end;";default:return""}}}
  
  ${({hasToggleGridColor:e})=>e&&`--grid-margin: ${a(3)};`}
  ${({isReadViewShopViewEnabled:e})=>e&&`\n        padding:${a(.5)};\n         gap: ${a(.5)};\n        `}
`,p=n.div.withConfig({displayName:"ListItemWrapper"})`
  ${({contentAlign:e,layout:t,hasSpacing:i})=>{if("wrap"===t)return"";let n=e;switch(i&&(n="centerWithPadding"),n){case"center":return"\n        &:first-child {\n          margin-left: auto;\n        }\n\n        &:last-child {\n          margin-right: auto;\n        }\n      ";case"right":return"\n        &:first-child {\n          margin-left: auto;\n        }\n      ";case"centerWithPadding":return`\n        @media (min-width: ${s.md}) {\n          &:first-child {\n            margin-left: auto;\n          }\n\n          &:last-child {\n            margin-right: auto;\n          }\n        }\n\n        @media (min-width: ${s.sm}) and (max-width: ${s.md}) {\n          &:first-child {\n            margin-left: 1.5rem;\n          }\n  \n          &:last-child {\n            margin-right: 1.5rem;\n          }\n        }          \n        `;default:return""}}}
`,g=n(o).withConfig({displayName:"HelperText"})`
  margin: ${a(1)} 0 0;
`;g.defaultProps={as:"div",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"},e.exports={ToggleChipListWrapper:l,LabelText:d,ListWrapper:c,ListItemWrapper:p,HelperText:g}},1419:function(e,t,i){const n=i(1),o=i(0),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceWrapper:c}=i(1420),{trackComponent:p}=i(5),g=({className:e,items:t,isMusicReview:i})=>(o.useEffect(()=>{p("InfoSlice")},[]),t&&0!==t.length?o.createElement(c,{className:e},o.createElement(d,{isMusicReview:i},t.map(e=>{const{key:t,value:i}=e;return t&&i?o.createElement(l,{key:t.toString().toLowerCase()},o.createElement(s,null,o.createElement(r,null,t),o.createElement(a,null,i))):null}))):null);g.propTypes={className:n.string,isMusicReview:n.bool,items:n.arrayOf(n.shape({key:n.string,value:n.string}))},g.defaultProps={isMusicReview:!1},e.exports=g},1420:function(e,t,i){const n=i(3).default,{calculateSpacing:o,getColorStyles:a}=i(4),{BaseText:r}=i(10),{BREAKPOINTS:s}=i(6),{maxThresholds:l}=i(16),d=n(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=n(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${o(1)};
  vertical-align: top;
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=n.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${o(.5)} 0;
`,g=n.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    margin: 0 auto;
  }
  @media (min-width: ${s.md}) {
    margin-right: ${o(3)};

    :last-child {
      margin-right: ${o(0)};
    }
  }
`,u=n.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${o(1.5)} 0;
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,m=n.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:g,InfoSliceList:u,InfoSliceWrapper:m}},1428:function(e,t,i){const{asVariation:n}=i(12),o=i(1438),a=i(1456),r=i(1459);o.TextAboveCenterGridWidth=n(o,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),o.TextAboveCenterGridWidthTopCardSmall=n(o,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveCenterFullBleed=n(o,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),o.TextAboveCenterFullBleedNoContributor=n(o,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextAboveCenterFullBleedTop=n(o,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedGridWidthCard=n(o,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedCard=n(o,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),o.TextAboveLeftSmall=n(o,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveLeftSmallWithRule=n(o,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveCenterSmallWithRule=n(o,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.InlineImage=n(o,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveLeftFullBleed=n(o,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),o.TextAboveLeftGridWidth=n(o,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),o.TextAboveLeftGridWidthCard=n(o,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),o.TextAboveLeftNoImg=n(o,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),o.TextBelowCenterGridWidth=n(o,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),o.TextBelowCenterFullBleed=n(o,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowCenterFullBleedNoContributor=n(o,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextBelowLeftGridWidth=n(o,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),o.TextBelowLeftGridWidthCard=n(o,"TextBelowLeftGridWidthCard",{contentAlign:"left",contentPosition:"below",contentStyle:"card"}),o.TextBelowLeftFullBleed=n(o,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowFullBleedDenseCard=n(o,"TextBelowFullBleedDenseCard",{contentAlign:"left",contentPosition:"below",contentStyle:"dense-card",mediaWidth:"fullbleed"}),o.TextOverlay=n(a,"TextOverlayContentHeader",{}),o.TextOverlayWithLogo=n(a,"TextOverlayContentHeaderWithLogo",{isFeatured:!0}),o.TextOverlayCenterFullBleedGradient=n(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),o.SplitScreenImgLeft=n(o,"SplitScreenImgLeft",{contentAlign:"left",contentPosition:"end"}),o.SplitScreenImgRight=n(o,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),o.SplitScreenImgRightContentCenter=n(o,"SplitScreenImgRightContentCenter",{contentAlign:"center",contentPosition:"start",contentStyle:"card",mediaWidth:"grid"}),o.AssetMiddleCenterBig=n(o,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),o.AssetMiddleCenterFullBleed=n(o,"AssetMiddleCenterFullBleed",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"grid"}),o.SubjectFocus=n(o,"SubjectFocus",{contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),o.SplitScreenImageRightFullBleed=n(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageRightInset=n(r,"SplitScreenImageRightInset",{},{isInset:!0,isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageLeftFullBleed=n(r,"SplitScreenImageLeftFullBleed",{},{isTextRight:!0,showContributorImage:!1}),o.SplitScreenImageLeftInset=n(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1}),o.BusinessContentHeader=n(o,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),o.PodcastContentHeader=n(o,"PodcastContentHeader",{contentAlign:"center",contentPosition:"below",shouldUseSmallLede:!0,showPodcastButton:!0,hasDivider:!0},{hideLedeCaption:!0}),e.exports=o},1429:function(e,t,i){e.exports=i(1439)},1430:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1452);e.exports=n(o,"ReviewRatingData")},1431:function(e,t,i){e.exports=i(1419)},1438:function(e,t,i){const n=i(8),o=i(1),a=i(0),r=i(136),{withLightbox:s}=i(1429),l=i(75),{trackComponent:d}=i(5),c=i(21),p=i(46),g=i(37),u=i(177),m=i(91),h=i(109),y=i(11),b=i(1444),f=i(178),C=i(1451),{useNativeShare:v}=i(93),{getThemedBylineVariation:S}=i(253),{ContentHeaderSocialIcons:w}=i(446),{ContentHeaderWrapper:k,ContentHeaderOffersData:x,ContentHeaderLeadOverride:$,ContentHeaderAccreditationBottom:T,ContentHeaderContainer:E,ContentHeaderPublishDate:N,ContentHeaderLeadAssetWrapper:L,ContentHeaderBylines:B,ContentHeaderPersistentAside:I,PodcastContentHeaderDivider:P}=i(251),{ContentHeaderDek:A}=i(246),{getOverrideBehaviour:D}=i(436),R=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:i,business:o,bylineVariation:r,captionStyle:l,captionWidth:c,className:p,contentHeaderCategories:g,contentSponsorNames:u,contributorImage:m,contributors:h,ctaText:y,dangerousDek:R,dangerousHed:M,dividerType:O,externalLinks:H,hasDesktopTitleBlockDivider:_,hasLedeLightboxButton:W,hasLightbox:G,hasSlideshow:j,hasStaticPositionedAward:F,hasStickyBoxIndexPosition:V,hasStickySocialIcons:U,hideByLine:z,hideContributors:q,hideDangerousDek:K,hideRubric:Z,hideSocialIconsOnMobile:X,hideTopDisclaimerOnMobile:Y,hideTopRating:J,hidePublishDate:Q,interactiveOverride:ee,isBusinessContentHeader:te,isLiveStoryType:ie,isStoryLive:ne,issueDate:oe,issueLink:ae,lede:re,ledeSocialIcons:se,offers:le,persistentAsideAlign:de,price:ce,publishDate:pe,rating:ge,reviewRating:ue,rubric:me,rubricVariation:he,itemsCount:ye,hasContributorImageBackground:be,metadataVideo:fe,showContentDivider:Ce,showContributorImage:ve,showSponsorBlock:Se,showHeaderButton:we,hideIssueDate:ke,hideIssueDatePipeSeparator:xe,hideLede:$e,hideLedeCaption:Te,hasDisabledCloseOnClickForLightbox:Ee,hasNarrowHeader:Ne,podcastPagePrimaryCta:Le,shouldDisplayPremiereDate:Be,shouldShortenHeadline:Ie,showFullWidthLeadImage:Pe,showIssueCopyByDate:Ae,showTextOverlayDek:De,slideShowVariation:Re,socialIconsToHide:Me,socialMedia:Oe,socialTitle:He,socialDescription:_e,stickySocialAnchorBottom:We,stickySocialAnchorTop:Ge,theme:je,sponsoredContentHeaderProps:Fe,sponsorByline:Ve,variations:{assetPosition:Ue,copyWidth:ze,contentAlign:qe,contentPosition:Ke,contentStyle:Ze,hasExtraSpaceBetweenSeparator:Xe=!1,hasLedeLightbox:Ye,hasNoRowPadding:Je,hasInlinePublishDate:Qe,hasXsNavSpacing:et,ledeAlign:tt,leadRailAnchor:it,mediaWidth:nt,publishDatePosition:ot="bottom",reducedSpacings:at=!1,hasDivider:rt,showPodcastButton:st,shouldUseSmallLede:lt},hasNativeShareButton:dt,shouldEnableNativeShareOnDesktop:ct,showBreadCrumb:pt,venueAwards:gt,hasInvertedCaption:ut,hasInvertedLedeBackground:mt,variationName:ht})=>{a.useEffect(()=>{d("ContentHeader",ht)},[]);const yt="middle"===Ue,bt=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(h)&&Qe,ft="storyimage"===D(ee),Ct=S({bylineVariation:r,theme:je}),vt=a.createElement(b,{authorsPosition:t,business:o,bylineVariation:Ct,contentHeaderCategories:g,contentSponsorNames:u,contributors:h,dangerousHed:M,dividerType:O,externalLinks:H,hasContentDivider:Ce,hasDesktopTitleBlockDivider:_,hasDivider:rt,hasNoRowPadding:Je,hasExtraSpaceBetweenSeparator:Xe,hideIssueDate:ke,hideIssueDatePipeSeparator:xe,hideRubric:Z,hidePublishDate:Q,isBusinessContentHeader:te,isLiveStoryType:ie,isStoryLive:ne,issueDate:oe,issueLink:ae,itemsCount:ye,metadataVideo:fe,podcastPagePrimaryCta:Le,price:ce,publishDate:pe,publishDatePosition:ot,rubric:me,rubricVariation:he,showIssueCopyByDate:Ae,showPodcastButton:st,theme:je});let St=f;G&&Ye&&(St=e?s(f,e,j,Re,Ee):s(f,[re]));const{showNativeShareButton:wt,pageUrl:kt}=v(dt,ct),xt="hidden"!==t,$t=h&&Object.keys(h).length>1,Tt=h&&!q&&a.createElement(B,{contributors:h,bylineVariation:Ct,isCompact:!1,inlinePublishDate:bt}),Et=!Q&&a.createElement(N,{inlinePublishDate:bt,"data-testid":"ContentHeaderPublishDate",mediaWidth:nt,contentAlign:qe},pe);return a.createElement(k,{className:n("content-header",{[p]:p}),isLiveStoryType:ie,publishDatePosition:ot,hasXsNavSpacing:et,contentAlign:qe,assetPosition:Ue,shouldShowAuthorsInTitleBlock:xt,captionStyle:l,copyWidth:ze,mediaWidth:nt,contentStyle:Ze,contentPosition:Ke,isBusinessContentHeader:te,shouldShortenHeadline:Ie,reducedSpacings:at,hasInvertedCaption:ut,containerTheme:je,shouldBylineContentStacked:$t,hasExtraSpaceBetweenSeparator:Xe,hasLede:!!re,hasNarrowHeader:Ne,showBreadCrumb:pt,showTextOverlayDek:De},a.createElement(E,{containerTheme:je,mediaWidth:nt,showFullWidthLeadImage:Pe,contentStyle:Ze,contentPosition:Ke,"data-testid":"ContentHeaderContainer"},M&&vt,a.createElement(C,{bylinesBlock:Tt,contributorImage:m,dangerousDek:R,hideDangerousDek:K,dividerType:O,hasContributorImageBackground:be,hasDesktopTitleBlockDivider:_,hasLede:!!re,hideTopRating:J,hasStickySocialIcons:U,hideByLine:z,hideSocialIconsOnMobile:X,isBusinessContentHeader:te,isMiddleImage:yt,isSponsoredContent:u.length>0,isLiveStoryType:ie,isStoryLive:ne,metadataVideo:fe,publishDateBlock:Et,publishDatePosition:ot,rating:ge,reviewRating:ue,shouldDisplayPremiereDate:Be,shouldShowAuthorsInTitleBlock:xt,showContributorImage:ve,showSponsorBlock:Se,socialIconsToHide:Me,socialMedia:Oe,socialTitle:He,socialDescription:_e,sponsorByline:Ve,sponsoredContentHeaderProps:Fe,pageUrl:kt,showNativeShareButton:wt,venueAwards:gt,mediaWidth:nt,contentAlign:qe,contentPosition:Ke,theme:je}),a.createElement(x,{ctaText:y,hideTopDisclaimerOnMobile:Y,offers:le,showHeaderButton:we,buttonPosition:"content-header"}),ft?a.createElement($,{contentPosition:Ke,dangerouslySetInnerHTML:{__html:ee.markup}}):!$e&&re&&a.createElement(L,{awards:i,hasLightboxButton:W,hasStaticPositionedAward:F,hideLedeCaption:Te,hasDisabledCloseOnClickForLightbox:Ee,lede:re,captionWidth:c,shouldRenderRailAnchor:it,shouldUseSmallLede:lt,socialIcons:se,mediaWidth:nt,containerTheme:je,hasInvertedLedeBackground:mt,ledeAlign:tt,showFullWidthLeadImage:Pe,isBusinessContentHeader:te,as:St,className:n({["lead-asset--width-"+nt]:nt})}),!K&&R&&yt&&a.createElement(T,null,a.createElement(A,{dangerouslySetInnerHTML:{__html:R},assetPosition:Ue,mediaWidth:nt,"data-testid":"ContentHeaderDek"})),rt&&a.createElement(P,null)),!wt&&U&&Oe&&a.createElement(I,{attributes:{shouldFadeOnMove:!0},align:de,anchorBottom:We,anchorTop:Ge,hasStickyBoxIndexPosition:V,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(w,Object.assign({},Oe,{className:"social-icons--share"}))))};R.propTypes={additionalPhotos:o.array,authorsTitleBlockPosition:o.oneOf(["above","below","hidden"]),awards:o.array,business:o.shape({address:o.object,phone:o.string,email:o.string,socialMedia:o.array}),bylineVariation:o.string,captionStyle:o.oneOf(["default","span-content-well"]),captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contentSponsorNames:o.array,contributorImage:o.shape(y.propTypes),contributors:o.shape(g.propTypes.contributors),ctaText:o.string,dangerousDek:o.string,dangerousHed:o.string,dividerType:o.oneOf(["both","bottom","top"]),externalLinks:o.array,hasContributorImageBackground:o.bool,hasDesktopTitleBlockDivider:o.bool,hasDisabledCloseOnClickForLightbox:o.bool,hasInvertedCaption:o.bool,hasInvertedLedeBackground:o.bool,hasLedeLightboxButton:o.bool,hasLightbox:o.bool,hasNarrowHeader:o.bool,hasNativeShareButton:o.bool,hasSlideshow:o.bool,hasStaticPositionedAward:o.bool,hasStickyBoxIndexPosition:o.bool,hasStickySocialIcons:o.bool,hideByLine:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hideLede:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,hideTopDisclaimerOnMobile:o.bool,hideTopRating:o.bool,interactiveOverride:o.shape({markup:o.string,behavior:o.string}),isBusinessContentHeader:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,itemsCount:o.shape(l.propTypes),lede:o.oneOfType([o.shape(y.propTypes),o.shape(u.propTypes),o.shape(m.propTypes)]),ledeSocialIcons:o.shape(c.propTypes),metadataVideo:o.shape({isLive:o.bool,premiereDate:o.string,premiereGap:o.number,series:o.string,videoLength:o.number}),offers:o.array,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),podcastPagePrimaryCta:o.string,price:o.string,publishDate:o.string.isRequired,rating:o.shape(h.propTypes),reviewRating:o.number,rubric:o.shape(p.propTypes),rubricVariation:o.string,shouldDisplayPremiereDate:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldShortenHeadline:o.bool,showBreadCrumb:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showFullWidthLeadImage:o.bool,showHeaderButton:o.bool,showIssueCopyByDate:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,slideShowVariation:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(c.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(y.propTypes),sponsorName:o.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:o.oneOf(["standard","inverted","special","live"]),variationName:o.string,variations:o.shape({assetPosition:o.oneOf(["bottom","middle"]),contentAlign:o.oneOf(["center","left"]),contentPosition:o.oneOf(["above","below","start","end"]),contentStyle:o.oneOf(["card","dense-card","item"]),copyWidth:o.oneOf(["grid","fullbleed"]),hasDivider:o.bool,hasExtraSpaceBetweenSeparator:o.bool,hasInlinePublishDate:o.bool,hasLedeLightbox:o.bool,hasNoRowPadding:o.bool,hasXsNavSpacing:o.bool,leadRailAnchor:o.bool,ledeAlign:o.oneOf(["default","center"]),mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:o.oneOf(["top","bottom"]),reducedSpacings:o.bool,shouldUseSmallLede:o.bool,showPodcastButton:o.bool}),venueAwards:o.string},R.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",contentSponsorNames:[],dividerType:"both",externalLinks:[],hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldDisplayPremiereDate:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{contentAlign:"center",contentPosition:"above",hasDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1,shouldUseSmallLede:!1,showPodcastButton:!1}},R.displayName="ContentHeader",e.exports=R},1439:function(e,t,i){const n=i(0),o=i(154),a=i(8),{createGlobalStyle:r}=i(3),s=i(1440),l=i(45),d=i(1574),c=i(1409),p=i(1408),{useIntl:g}=i(2),u=i(1442).default,m=i(439),h=i(1443),y=i(33),{trackComponent:b}=i(5),{LightboxCloseButtonIcon:f,LightboxSwipe:C,LightboxWrapper:v,LightboxSlidesWrapper:S}=i(495),{getColorToken:w,getZIndex:k}=i(4);let x;const $=r`
  .lightbox {
    height: 100vh;
  }

  .body__lightbox--open {
    overflow: hidden;
  }

  .lightbox__overlay {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${k("hyperstitialLayer")};
    background-color: ${({theme:e})=>w(e,"colors.consumption.lead.standard.background")};

    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`;e.exports={withLightbox:(e,t,i,r,w=!1,k)=>T=>{const[E,N]=n.useState(-1),{formatMessage:L}=g(),B=e=>i&&N(s(E+e,0,t.length-1)),I=E>-1,P=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||N(void 0)},A={transform:`translate(${"listicle"===r?"0":-100*E/t.length}%)`},D=()=>{x&&(x.style.height=window.innerHeight+"px")};n.useEffect(()=>{b("LightBox",k)}),n.useEffect(()=>{const e=l(D,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),n.useEffect(()=>{!I&&x&&p.enableBodyScroll(x)},[I]);const R=(e,t)=>w?{}:t.reduce((t,i)=>Object.assign(Object.assign({},t),{[i]:t=>P(e||t)}),{});return n.createElement(v,null,n.createElement(m.Provider,{value:{expandHandler:e=>N(d(t,{id:e})),isInSlides:e=>c(t,{id:e})}},n.createElement(e,Object.assign({},T))),n.createElement(o,{className:a("lightbox "+(r?r+"-variation":"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:I,onAfterOpen:()=>{p.disableBodyScroll(x),D()},onRequestClose:()=>{N(void 0)},contentRef:e=>{e&&(x=e)},closeTimeoutMS:200,contentLabel:L(u.contentLabel)},n.createElement(f,{ButtonIcon:y,isIconButton:!0,className:r?r+"-variation-close":"",dataAttrs:{"data-action":"close"},label:L(u.closeButtonIconLabel),onClickHandler:P,role:"button",ariaLabel:L(u.closeButtonIconLabel)}),n.createElement(C,Object.assign({},R("swipeClose",["onSwipeDown","onSwipeUp"]),{onSwipeRight:()=>B(-1),onSwipeLeft:()=>B(1),shouldPreventDefaultEvent:!0}),n.createElement(S,Object.assign({className:r?r+"-variation-slide-wrapper":"",style:A},R("",["onMouseDown","onTouchEnd"])),t.map(e=>n.createElement(h,Object.assign({},e,{className:r?r+"-variation-slide":"",key:e.id}))))),n.createElement($,null)))}}},1440:function(e,t,i){var n=i(1441),o=i(1566);e.exports=function(e,t,i){return void 0===i&&(i=t,t=void 0),void 0!==i&&(i=(i=o(i))==i?i:0),void 0!==t&&(t=(t=o(t))==t?t:0),n(o(e),t,i)}},1441:function(e,t){e.exports=function(e,t,i){return e==e&&(void 0!==i&&(e=e<=i?e:i),void 0!==t&&(e=e>=t?e:t)),e}},1442:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})},1443:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(1),a=i(0),r=i(66),s=i(11),l=i(51),{LightboxSlideWrapper:d,LightboxSlideTopSpacer:c,LightboxSlideImageCaptionOuter:p,LightboxSlideCaptionContainer:g}=i(495),u=e=>{var{caption:t,className:i,credit:o,dangerousCredit:l,dangerousCaption:u}=e,m=n(e,["caption","className","credit","dangerousCredit","dangerousCaption"]);const[h,y]=a.useState("landscape");return a.createElement(d,{className:i,screenOrientation:h},a.createElement(c,null),a.createElement(p,null,a.createElement(s,Object.assign({},m,{contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?y("portrait"):e>t?y("landscape"):e===t&&y("square")}})),a.createElement(g,null,a.createElement(r,{dangerousCaptionText:t||u,dangerousCredit:o||l,hasLinebreak:"portrait"===h}))))};u.propTypes=Object.assign(Object.assign({},l.propTypes),{caption:o.string,credit:o.string,dangerousCaption:o.string,dangerousCredit:o.string}),e.exports=u},1444:function(e,t,i){const n=i(1),o=i(0),{asConfiguredComponent:a}=i(9),r=i(75),s=i(46),l=i(496),d=i(497),c=i(1445),p=i(498),g=i(1449),u=i(128),{ContentHeaderContentDivider:m,ContentHeaderLowerBylineDateBlock:h,ContentHeaderItemCount:y,ContentHeaderHed:b,ContentHeaderTitleBlockWrapper:f,PodcastButtonWrapper:C,PodcastButton:v,PodcastLink:S}=i(175),w=e=>e.length>0?e[0]:null,k=({authorsPosition:e,business:t,bylineVariation:i,contentHeaderCategories:n,contentSponsorNames:a,contributors:r,dangerousHed:s,dividerType:k,externalLinks:x,hasContentDivider:$,hasDesktopTitleBlockDivider:T,hasExtraSpaceBetweenSeparator:E,hideIssueDate:N,hideIssueDatePipeSeparator:L,hasNoRowPadding:B,hidePublishDate:I,hideRubric:P,isBusinessContentHeader:A,isLiveStoryType:D,isStoryLive:R,issueDate:M,issueLink:O,itemsCount:H,metadataVideo:_,price:W,podcastPagePrimaryCta:G,publishDate:j,publishDatePosition:F,rubric:V,rubricVariation:U,shouldDisplayLiveIndicator:z,showIssueCopyByDate:q,showItemCount:K,showPodcastButton:Z,theme:X})=>{const Y=$&&"above"!==e,J="inverted"===X,Q=J?"outlined":"filled",ee=T&&("both"===k||"top"===k);return o.createElement(f,{rowWithTopBorder:ee,isBusinessContentHeader:A,"data-testid":"ContentHeaderTitleBlockWrapper"},_.isLive&&z&&o.createElement(u,null),o.createElement(c,{authorsPosition:e,bylineVariation:i,contributors:r,hasExtraSpaceBetweenSeparator:E,hasNoRowPadding:B,hideIssueDate:N,hideIssueDatePipeSeparator:L,hidePublishDate:I,hideRubric:P,isLiveStoryType:D,isStoryLive:R,issueDate:M,issueLink:O,price:W,publishDate:j,publishDatePosition:F,rubric:V,rubricVariation:U,showIssueCopyByDate:q,sponsorName:w(a),theme:X}),o.createElement(p,Object.assign({},n)),o.createElement(b,{dangerouslySetInnerHTML:{__html:s},"data-testid":"ContentHeaderHed"}),"below"===e&&o.createElement(h,null,o.createElement(l,{bylineVariation:i,contributors:r}),o.createElement(d,{hasExtraSpaceBetweenSeparator:E,hidePublishDate:I,publishDate:j})),K&&H&&o.createElement(y,Object.assign({},H)),Y&&o.createElement(m,null),A&&o.createElement(g,{address:null==t?void 0:t.address,phone:null==t?void 0:t.phone,email:null==t?void 0:t.email,socialMedia:null==t?void 0:t.socialMedia,link:null==t?void 0:t.url}),Z&&G&&o.createElement(C,null,o.createElement(v,{btnStyle:Q,href:G,label:"Start Listening Now",target:"blank",inputKind:"link"}),x.length>0&&o.createElement(S,{isInverted:J,href:x[0].url,target:"blank"},"Or, choose where to Listen")))};k.propTypes={authorsPosition:n.oneOf(["above","below","hidden"]),business:n.shape({address:n.object,phone:n.string,email:n.string,socialMedia:n.array,url:n.string}),bylineVariation:n.string,contentHeaderCategories:n.shape({title:n.string,tags:n.array,hasCategoryEyebrow:n.boolean}),contentSponsorNames:n.array,contributors:n.object,dangerousHed:n.string.isRequired,dividerType:n.string,externalLinks:n.array,hasContentDivider:n.bool,hasDesktopTitleBlockDivider:n.bool,hasDivider:n.bool,hasExtraSpaceBetweenSeparator:n.bool,hasNoRowPadding:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,isBusinessContentHeader:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,itemsCount:n.shape(r.propTypes),metadataVideo:n.shape({isLive:n.bool,premiereDate:n.string,series:n.string,videoLength:n.number}),podcastPagePrimaryCta:n.string,price:n.string,publishDate:n.string,publishDatePosition:n.oneOf(["top","bottom"]),rubric:n.shape(s.propTypes),rubricVariation:n.string,shouldDisplayLiveIndicator:n.bool,showIssueCopyByDate:n.bool,showItemCount:n.bool,showPodcastButton:n.bool,theme:n.oneOf(["standard","inverted","special"])},k.defaultProps={authorsPosition:"hidden",contentHeaderCategories:{hasCategoryEyebrow:!1},contentSponsorNames:[],dividerType:"both",hasDesktopTitleBlockDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasNoRowPadding:!1,hideIssueDate:!0,hideIssueDatePipeSeparator:!1,hidePublishDate:!1,hideRubric:!1,isBusinessContentHeader:!1,metadataVideo:{},publishDatePosition:"bottom",shouldDisplayLiveIndicator:!1,showIssueCopyByDate:!1,showItemCount:!1,showPodcastButton:!1,theme:"standard"},k.displayName="TitleBlock",e.exports=a(k,"TitleBlock"),e.exports.TitleBlock=k},1445:function(e,t,i){const n=i(1),o=i(0),a=i(128),r=i(46),s=i(496),l=i(1446),d=i(497),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:g,ContentHeaderRubricPrice:u,ContentHeaderRubricContainer:m,ContentHeaderLiveIndicator:h}=i(166),y=({authorsPosition:e,bylineVariation:t,contributors:i,hasExtraSpaceBetweenSeparator:n,hideIssueDate:y,hideIssueDatePipeSeparator:b,hidePublishDate:f,hideRubric:C,isLiveStoryType:v,isStoryLive:S,issueDate:w,issueLink:k,price:x,publishDate:$,publishDatePosition:T,rubric:E,rubricVariation:N,showIssueCopyByDate:L,sponsorName:B})=>{const I=r[N]||r,P=!y&&w&&E,A=("above"===e||"top"===T)&&!B;return v&&S?o.createElement(h,null,o.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(E||w||i)||C?null:(E||w||i)&&o.createElement(p,{hasIssueDateAndRubricBlock:P,"data-testid":"ContentHeaderRubric"},"above"===e&&o.createElement(s,{bylineVariation:t,contributors:i}),o.createElement(g,{"data-testid":"ContentHeaderRubricDateBlock"},E&&o.createElement(m,Object.assign({},E,{isVerticalAlign:"above"===e||"top"===T||P,as:I})),x&&o.createElement(u,null,"/ ",x),B&&o.createElement(c,{hasExtraSpaceBetweenSeparator:n,items:[{name:B}]}),A&&o.createElement(d,{hasExtraSpaceBetweenSeparator:n,hidePublishDate:f,publishDate:$})),o.createElement(l,{hideIssueDate:y,hideIssueDatePipeSeparator:b,issueDate:w,issueLink:k,showIssueCopyByDate:L}))};y.propTypes={authorsPosition:n.string,bylineVariation:n.string,contributors:n.object,hasExtraSpaceBetweenSeparator:n.bool,hasNoRowPadding:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,price:n.string,publishDate:n.string,publishDatePosition:n.string,rubric:n.shape(r.propTypes),rubricVariation:n.string,showIssueCopyByDate:n.bool,sponsorName:n.string},y.defaultProps={isLiveStoryType:!1,isStoryLive:!1},e.exports=y},1446:function(e,t,i){const n=i(1),o=i(0),{ContentHeaderRubricIssueDate:a}=i(166),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:i,issueLink:n,showIssueCopyByDate:r})=>e||!i?null:o.createElement(a,{name:`${i}${r?" Issue":""}`,url:n,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,issueDate:n.string,issueLink:n.string,showIssueCopyByDate:n.bool},e.exports=r},1447:function(e,t,i){const n=i(1),o=i(0),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=i(1448),c=({title:e,tags:t})=>o.createElement(a,null,o.createElement(r,null,e),o.createElement(s,null,t.map(e=>o.createElement(l,{key:e.name},o.createElement(d,{href:e.slug},e.name)))));c.propTypes={tags:n.array,title:n.string},c.defaultProps={tags:[]},c.displayName="Categories",e.exports=c},1448:function(e,t,i){const{default:n}=i(3),{BaseText:o,BaseLink:a}=i(10),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=i(4),d=n.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=n(o).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=n.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,g=n.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,u=n(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;u.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:g,CategoriesLink:u}},1449:function(e,t,i){const n=i(0),o=i(1),{AddressBlockWrapper:a,HeaderSocialInformation:r}=i(175),s=i(242),l=i(243),d=i(1450),c=({address:e,email:t,phone:i,socialMedia:o,link:c})=>{if(!e&&!i&&!t)return null;const{street:p,city:g,state:u,postalCode:m,country:h}=e,y=[];return[p,g,u,m,h].forEach(e=>{e&&y.push(e)}),n.createElement(a,null,e&&n.createElement("div",{"data-testid":"HeaderAddressDetails"},p&&n.createElement("span",{"data-testid":"HeaderAddressStreet"},p),g&&n.createElement("span",{"data-testid":"HeaderAddressCity"},y[0]!==g&&", ",g),u&&n.createElement("span",{"data-testid":"HeaderAddressState"},y[0]!==u&&", ",u),m&&n.createElement("span",{"data-testid":"HeaderAddressPostalCode"},y[0]!==m&&", ",m),h&&n.createElement("span",{"data-testid":"HeaderAddressCountry"},y[0]!==h&&", ",h)),i&&n.createElement("div",{"data-testid":"HeaderAddressPhone",dangerouslySetInnerHTML:{__html:i}}),n.createElement(r,null,t&&n.createElement("a",{"data-testid":"HeaderAddressEmail",href:"mailto:"+t,"aria-label":t,rel:"nofollow noopener noreferrer",target:"_blank"},s()),c&&n.createElement("a",{"data-testid":"HeaderAddressEmail",href:c,"aria-label":c,rel:"nofollow noopener noreferrer",target:"_blank"},d()),(null==o?void 0:o.length)>0&&n.createElement("a",{"data-testid":"HeaderAddressInstagram",href:o[0].handle,"aria-label":o[0].network,rel:"nofollow noopener noreferrer",target:"_blank"},l())))};c.propTypes={address:o.object,email:o.string,link:o.string,phone:o.string,socialMedia:o.array},e.exports=c},1450:function(e,t,i){const n=i(0),{useIntl:o}=i(2),a=i(7).default;e.exports=()=>{const{formatMessage:e}=o();return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},n.createElement("title",null,e(a.weblink)),n.createElement("path",{d:"M15.8136 11.1823L17.6157 9.38027C18.3786 8.68488 19.3802 8.31019 20.4122 8.33408C21.4443 8.35797 22.4275 8.77861 23.1574 9.50857C23.8874 10.2385 24.3081 11.2217 24.3319 12.2537C24.3558 13.2858 23.9812 14.2874 23.2858 15.0503L20.7101 17.6169C20.3389 17.9894 19.8978 18.2851 19.412 18.4868C18.9263 18.6885 18.4056 18.7924 17.8796 18.7924C17.3537 18.7924 16.8329 18.6885 16.3472 18.4868C15.8615 18.2851 15.4203 17.9894 15.0491 17.6169M16.8524 21.4857L15.0503 23.2878C14.2874 23.9832 13.2858 24.3578 12.2537 24.334C11.2217 24.3101 10.2385 23.8894 9.50858 23.1595C8.77861 22.4295 8.35797 21.4463 8.33408 20.4143C8.3102 19.3822 8.68488 18.3807 9.38029 17.6177L11.9559 15.0512C12.3271 14.6786 12.7682 14.3829 13.254 14.1812C13.7397 13.9795 14.2604 13.8756 14.7864 13.8756C15.3123 13.8756 15.8331 13.9795 16.3188 14.1812C16.8045 14.3829 17.2457 14.6786 17.6169 15.0512",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}},1451:function(e,t,i){const n=i(0),{useIntl:o}=i(2),a=i(1),r=i(499),s=i(1430),l=i(11),d=i(109),c=i(21),p=i(165),g=i(164).default,u=i(500),m=i(440),{ContentHeaderByline:h,ContentHeaderAccreditationSocialIcons:y,ContentHeaderContributorImage:b,ContentHeaderNativeShareButton:f,ContentHeaderBylineContent:C,ContentHeaderDekRewards:v,ContentHeaderAccreditation:S,ContentHeaderDek:w,SummaryPremiereWrapper:k}=i(246),x=({venueAwards:e})=>n.createElement(n.Fragment,null,e&&n.createElement(v,{dangerouslySetInnerHTML:{__html:e}}));x.propTypes={venueAwards:a.string};const $=({bylinesBlock:e,contributorImage:t,dangerousDek:i,dividerType:a,hasContributorImageBackground:l,hasDesktopTitleBlockDivider:c,hasLede:v,hasStickySocialIcons:$,hideByLine:T,hideDangerousDek:E,hideSocialIconsOnMobile:N,hideTopRating:L,isBusinessContentHeader:B,isMiddleImage:I,isSponsoredContent:P,showSponsorBlock:A,sponsorByline:D,sponsoredContentHeaderProps:R,isLiveStoryType:M,metadataVideo:O,publishDateBlock:H,publishDatePosition:_,rating:W,reviewRating:G,shouldShowAuthorsInTitleBlock:j,showContributorImage:F,socialIconsToHide:V,socialMedia:U,socialTitle:z,socialDescription:q,pageUrl:K,shouldDisplayPremiereDate:Z,showNativeShareButton:X,venueAwards:Y,theme:J})=>{const{rating:Q,count:ee}=W||{},te=x({venueAwards:Y}),ie={showDek:!E&&i&&!I,showVenueAwards:Y,showByline:!j&&!P&&!T,showNativeShareButton:X,socialMedia:U},{isLive:ne,premiereGap:oe,premiereDate:ae}=O,{formatMessage:re}=o();return n.createElement(S,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:j,isBusinessContentHeader:B,hasLede:v,rowWithBottomBorder:c&&("both"===a||"bottom"===a),visibilityInfo:ie,"data-testid":"ContentHeaderAccreditation"},ie.showDek&&n.createElement(w,{dangerouslySetInnerHTML:{__html:i},as:"div"}),Z&&ae&&!ne&&n.createElement(k,null,n.createElement(m,{premiereDate:ae,premiereGap:oe,containerTheme:J,hideTimeStampIcon:!0})),M&&A&&n.createElement(u,{sponsorByline:D,sponsoredContentHeaderProps:Object.assign({},R),theme:J}),te,G&&!L&&n.createElement(s,{rating:G}),ie.showByline&&n.createElement(h,{isLiveStoryType:M,sponsorName:null==R?void 0:R.sponsorName,showSponsorBlock:A},F&&t&&n.createElement(b,Object.assign({},t,{sizes:"66px",hasContributorImageBackground:l,isBusinessContentHeader:B})),n.createElement(C,null,e,"bottom"===_&&H)),X?n.createElement(f,null,n.createElement(p,{shareData:{url:K,title:z,text:q}})):U&&n.createElement(y,Object.assign({},U,{className:"content-header__social-share",hideSocialIconsOnMobile:N,hasStickySocialIcons:$,socialIconsToHide:V})),!!Q&&!!ee&&n.createElement(d,{averageRatingCount:Math.round(10*Q)/10,hasBorderTop:!0,link:{label:re(g.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=r(t);window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:ee}))};$.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},$.defaultProps={hideByLine:!1,hideDangerousDek:!1,isLiveStoryType:!1,metadataVideo:{},shouldDisplayPremiereDate:!1,showSponsorBlock:!1,socialIconsToHide:[],theme:"standard"},e.exports=$},1452:function(e,t,i){const n=i(1),o=i(8),a=i(0),{useIntl:r}=i(2),s=i(438),l=i(14),d=i(99),{trackComponent:c}=i(5),p=i(1453).default,{ReviewRatingDataLabel:g,ReviewRatingDataWrapper:u,ReviewRatingDataValue:m,ReviewRatingDataExplainer:h,ReviewRatingDataExplainerModal:y,ReviewRatingDataExplainerModalList:b,ReviewRatingDataExplainerModalListRating:f,ReviewRatingDataExplainerModalListDescribe:C}=i(1454),v=({className:e,rating:t,ratingList:i})=>{a.useEffect(()=>{c("ReviewRatingData")},[]);const n=r(),[v,S]=a.useState(!0),w=()=>{S(!v)},k=a.createElement(y,{className:"review-rating-data__rating-explainer-modal"},i.map((e,t)=>a.createElement(b,{key:e},a.createElement(f,{as:"span"},t+1),a.createElement(C,{as:"span"},e))));return a.createElement(u,{className:o("review-rating-data",e)},a.createElement(g,{className:"review-rating-data__label"},n.formatMessage(p.dataLabel)),a.createElement(m,null,t,"/10"),a.createElement(h,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:n.formatMessage(p.buttonLabel),onClickHandler:w,role:"button"}),!v&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:w,shouldUseArrow:!0},k)))};v.propTypes={className:n.string,rating:n.number,ratingList:n.array},v.defaultProps={rating:0,ratingList:[]},v.displayName="ReviewRatingData",e.exports=v},1453:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},1454:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=i(4),l=n.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=n(o).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=n(o).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=n.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,g=n.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,u=n.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,m=n.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,h=n.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:g,ReviewRatingDataExplainerModalList:u,ReviewRatingDataExplainerModalListRating:m,ReviewRatingDataExplainerModalListDescribe:h}},1455:function(e,t,i){const{default:n}=i(3),{BREAKPOINTS:o}=i(6),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(4),l=i(11),{SpanWrapper:d}=i(84),c=i(34),p=n.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,g=n(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,u=n.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${o.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,m=n(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:g,SponsoredContent:u,SponsoredContentCampaignLink:m}},1456:function(e,t,i){const n=i(1457);e.exports=n},1457:function(e,t,i){const n=i(0),o=i(1),a=i(66),r=i(46),s=i(165),l=i(37),d=i(11),c=i(177),p=i(91),g=i(21),u=i(498),m=i(1458),h=i(128),{useNativeShare:y}=i(93),{TextOverlayLogo:b,TextOverlayLogoLink:f,TextOverlayLogoImage:C,TextOverlayWrapper:v,ImageWrapper:S,Content:w,ContentAlign:k,Hed:x,DekWrapper:$,Dek:T,Figure:E,ContentDivider:N,ContributorImage:L,Accreditation:B,PublishDate:I,DekAndCaption:P,ContentGrid:A}=i(501),D=i(244),R=i(500),M=({background:e,bylineVariation:t,contentAlign:i,contentHeaderCategories:o,contributorImage:c,contributors:p,dangerousDek:M,dangerousHed:O,hasNativeShareButton:H,hideContributors:_,hideDangerousDek:W,hideLedeCaption:G,hidePublishDate:j,hideShareButtons:F,hideRubric:V,isLiveStoryType:U,isStoryLive:z,lede:q,ledeCaption:K,logoImage:Z,logoBaseUrl:X,numberOfLinesToClamp:Y,publishDate:J,rubric:Q,shouldUseCutomColorLiveIndicator:ee,showContentDivider:te,showContributorImage:ie,showLogo:ne,showTextOverlayDek:oe,showSponsorBlock:ae,socialDescription:re,socialMedia:se,socialTitle:le,sponsoredContentHeaderProps:de,sponsorByline:ce,theme:pe})=>{const{showNativeShareButton:ge,pageUrl:ue}=y(H),me="inverted"===pe,he=q&&!G&&(q.caption&&q.caption.trim()||q.credit&&q.credit.trim()||K);return n.createElement(v,{"data-testid":"ContentHeader"},n.createElement(S,{background:e,contentAlign:i},n.createElement(m,{lede:q}),ne&&Z?n.createElement(b,null,n.createElement(f,{href:X},n.createElement(C,Object.assign({},Z)))):null,n.createElement(A,{contentAlign:i},n.createElement(w,null,!V&&(U&&z?n.createElement(k,{contentAlign:i},n.createElement(h,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:ee})):Q?n.createElement(k,{contentAlign:i,"data-testid":"ContentHeaderRubric"},n.createElement(r.Inverted,Object.assign({},Q))):null),n.createElement(k,{contentAlign:i},n.createElement(u,Object.assign({},o))),n.createElement(x,{dangerouslySetInnerHTML:{__html:O},"data-testid":"ContentHeaderHed",contentAlign:i}),!W&&M&&oe&&n.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:i,"data-testid":"ContentHeaderDek",isInverted:me}),te&&n.createElement(N,{contentAlign:i}),U&&ae?n.createElement(R,{sponsorByline:ce,sponsoredContentHeaderProps:Object.assign({},de)}):null,ie&&c&&n.createElement(L,{contentAlign:i},n.createElement(d,Object.assign({},c))),n.createElement(B,{contentAlign:i},p&&!_&&n.createElement(l,{contributors:p,bylineVariation:t,contentAlign:i,isCompact:!1}),!j&&n.createElement(I,{"data-testid":"ContentHeaderPublishDate",contentAlign:i},J)),!F&&(ge?n.createElement(k,{contentAlign:i,bottomSpacing:4},n.createElement(s,{hasDarkBackground:!0,shareData:{url:ue,title:le,text:re},theme:"inverted"})):se&&n.createElement(k,{contentAlign:i,bottomSpacing:4},n.createElement(g.Footer,Object.assign({},se))))))),(he||M&&!W)&&n.createElement(P,{isInverted:me},he&&n.createElement(E,{contentAlign:i},n.createElement(a,{dangerousCaptionText:q.caption,dangerousCredit:U?q.credit||K:q.credit,topSpacing:0,theme:pe})),!W&&M&&!oe&&n.createElement($,null,n.createElement(D,{isCollapsible:!0,lines:Y},n.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:i,"data-testid":"ContentHeaderDek",isInverted:me})))))};M.defaultProps={background:"gradient",bylineVariation:"Inverted",contentAlign:"center",hideContributors:!1,hideDangerousDek:!1,hideLedeCaption:!1,isLiveStoryType:!1,isStoryLive:!1,logoBaseUrl:"/",numberOfLinesToClamp:2,shouldUseCutomColorLiveIndicator:!1,showContentDivider:!1,showContributorImage:!0,showSponsorBlock:!1,showTextOverlayDek:!1},M.propTypes={background:o.oneOf(["gradient","solid"]),bylineVariation:o.string,contentAlign:o.oneOf(["center","left"]),contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contributorImage:o.shape(d.propTypes),contributors:o.shape(l.propTypes.contributors),dangerousDek:o.string,dangerousHed:o.string,hasNativeShareButton:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideShareButtons:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,lede:o.oneOfType([o.shape(d.propTypes),o.shape(c.propTypes),o.shape(p.propTypes)]),ledeCaption:o.string,logoBaseUrl:o.string,logoImage:o.shape(d.propTypes),numberOfLinesToClamp:o.number,publishDate:o.string,rubric:o.shape(r.propTypes),shouldUseCutomColorLiveIndicator:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showLogo:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,socialDescription:o.string,socialMedia:o.shape(g.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(d.propTypes),sponsorName:o.string}),theme:o.oneOf(["standard","inverted","special"])},M.displayName="TextOverlay",e.exports=M},1458:function(e,t,i){const n=i(0),o=i(1),a=i(11),r=i(177),s=i(91),{transformLegacySources:l}=i(93),{Image:d}=i(501),c=({lede:e})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,i="gallery"===e.modelName,o=l(e);return n.createElement(d,null,!t&&!i&&n.createElement(a,Object.assign({},o)),t&&e.scriptEmbedUrl&&n.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl}),i&&n.createElement(r,Object.assign({},e,{showNoAdsFromParent:!0})))};c.defaultProps={lede:null},c.propTypes={lede:o.oneOfType([o.shape(a.propTypes),o.shape(r.propTypes),o.shape(s.propTypes)])},c.displayName="ImageBlock",e.exports=c},1459:function(e,t,i){e.exports=i(1460)},1460:function(e,t,i){const n=i(8),o=i(1),a=i(0),{useIntl:r}=i(2),s=i(44),l=i(1461).default,{mapSourcesToSegmentedSources:d}=i(135),c=i(1462),p=i(11),g=i(46),u=i(1431),m=i(1463),h=i(37),y=i(136),b=i(21),f=i(109),C=i(499),{formatInfoSliceItems:v}=i(1467),S=i(165),{useNativeShare:w}=i(93),{getThemedBylineVariation:k}=i(253),{trackComponent:x}=i(5),{SplitScreenContentHeaderArtist:$,SplitScreenContentHeaderArtistSlash:T,SplitScreenContentHeaderArtistWrapper:E,SplitScreenContentHeaderByline:N,SplitScreenContentHeaderCaption:L,SplitScreenContentHeaderContributorImage:B,SplitScreenContentHeaderDek:I,SplitScreenContentHeaderDekDown:P,SplitScreenContentHeaderDivider:A,SplitScreenContentHeaderHed:D,SplitScreenContentHeaderMain:R,SplitScreenContentHeaderInfoSlice:M,SplitScreenContentHeaderForMusicReview:O,SplitScreenContentHeaderNativeShareButton:H,SplitScreenContentHeaderPublishDate:_,SplitScreenContentHeaderRating:W,SplitScreenContentHeaderRubric:G,SplitScreenContentHeaderRubricIssueDate:j,SplitScreenContentHeaderSignageRubric:F,SplitScreenContentHeaderSocialShare:V,SplitScreenContentHeaderTitleBlock:U,SplitScreenContentHeaderWrapper:z,SplitScreenContentHeaderScoreBox:q,SplitScreenContentHeaderLeadWrapper:K,SplitScreenContentHeaderArtistLink:Z,SplitScreenContentHeaderGrid:X,SplitScreenContentHeaderPersistentAside:Y,SplitScreenContentHeaderReleaseYear:J}=i(252),{SplitScreenContentHeaderSocialIcons:Q}=i(445),{doHideBookmark:ee,doDisplayBookmark:te}=i(441),ie=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:i,hideContributors:n,hideIssueDate:o,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:u,rubricVariation:m,hideRubric:h,themedBylineVariation:y})=>{const b=g[m]||g,f=g.Item,C=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},C&&!n&&"top"===t&&a.createElement(N,{contributors:e,bylineVariation:y,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:i}),u&&!h&&a.createElement(G,Object.assign({as:b},u)),!o&&s&&a.createElement(j,{as:f,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},c))};ie.propTypes={contributors:o.object,contributorsPosition:o.oneOf(["top","bottom"]),hasInvertedBylineLink:o.bool,hideContributors:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,publishDate:o.string,publishDatePosition:o.oneOf(["top","bottom"]),rubric:o.shape(g.propTypes),rubricVariation:o.string,themedBylineVariation:o.string};const ne=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(F,{name:e})):null;ne.propTypes={shouldDisplaySignage:o.bool,signage:o.string};const oe=(e,t,i,n,o)=>n&&a.createElement(V,Object.assign({},n,{hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIconsOnMobile:t,socialIconsToHide:i,socialMediaPositionInMobile:o})),ae=(e,t)=>((null==t?void 0:t.caption)||(null==t?void 0:t.credit))&&!e&&a.createElement(X,null,a.createElement(L,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:re,useEffect:se}=a,le=({artists:e,brandSlug:t,captionPosition:o,className:p,contentAlign:g,contributorImage:h,dangerousHed:y,dangerousDek:b,hasContributorImageBackground:f,hasInvertedBylineLink:L,hasMargin:G,hasStickySocialIcons:j,hasNativeShareButton:F,hideContributorTitle:V,hideContributors:le,hideDangerousDek:de,hideIssueDate:ce,hidePublishDate:pe,hideRubric:ge,socialIconsToHide:ue,hideSocialIconsOnMobile:me,hideCaption:he,imageAlignment:ye,infoSliceFields:be,isInset:fe,isMusicReview:Ce,isTextRight:ve,isTrackReview:Se,issueDate:we,issueDatePostfix:ke,issueLink:xe,isSplitScreenArtistLarge:$e,rubric:Te,rubricVariation:Ee,contributors:Ne,contributorsPosition:Le,bylineVariation:Be,persistentAsideAlign:Ie,publishDate:Pe,publishDatePosition:Ae,lede:De,ledeContentAlign:Re,musicRating:Me,shouldEnableNativeShareOnDesktop:Oe,shouldFitToViewport:He,showBookmarked:_e,shouldHeaderFitToViewport:We,showContentDivider:Ge,showContributorImage:je,showHeaderDivider:Fe,socialDescription:Ve,socialMedia:Ue,socialMediaPositionInMobile:ze,socialTitle:qe,stickySocialAnchorBottom:Ke,stickySocialAnchorTop:Ze,theme:Xe,rating:Ye,signage:Je,shouldDisplaySignage:Qe,showReviewLink:et,textAlign:tt})=>{a.useEffect(()=>{x("SplitScreenContentHeader")},[]);const it=k({bylineVariation:Be,theme:Xe}),{showNativeShareButton:nt,pageUrl:ot}=w(F,Oe),{score:at,isBestNewMusic:rt,isBestNewReissue:st}=Me,lt=v(be),dt=null==be?void 0:be.releaseYear,ct=(e=>{if(!e)return;const t=Object.assign({},e);return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=d(e.sources)),t})(De),pt="cnevideo"===(null==De?void 0:De.modelName),gt=!De||pt,{rating:ut,count:mt}=Ye||{},{BookmarkIcon:ht}=i(156),yt=Ce?O:R,{formatMessage:bt}=r(),ft={},Ct=re();"belowImage"===o&&(ft.captionCredit=ae(he,De)),"inLeadWrapperBelowImg"===ze&&(ft.socialMedia=oe(j,me,ue,Ue,ze));const vt=()=>{(e=>{const t=e.current&&e.current.offsetTop,i=window.pageYOffset;return Math.abs(i)>Math.abs(t)})(Ct)?te():ee()};return se(()=>{const e=s(vt,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}),a.createElement(z,{className:n("content-header",{[p]:p}),contentHeaderTheme:Xe,isFullWidth:gt,isTextRight:ve,isInset:fe,imageAlignment:ye,ledeContentAlign:Re,shouldFitToViewport:!He,isMusicReview:Ce,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:Fe,socialMediaPositionInMobile:ze,shouldHeaderFitToViewport:We,captionPosition:o,hidePublishDate:pe,mediaContentType:(null==ct?void 0:ct.contentType)||"",hasInvertedBylineLink:L,hasMargin:G},a.createElement(yt,{shouldFitToViewport:!He},a.createElement(U,{contentAlign:g,textAlign:tt},a.createElement(ne,{signage:Je,shouldDisplaySignage:Qe}),a.createElement(ie,Object.assign({},{contributors:Ne,contributorsPosition:Le,rubric:Te,rubricVariation:Ee,hideContributors:le,hideIssueDate:ce,hidePublishDate:pe,issueDate:we,issueDatePostfix:ke,issueLink:xe,publishDate:Pe,publishDatePosition:Ae,hideRubric:ge,hasInvertedBylineLink:L,themedBylineVariation:it})),a.createElement(D,{dangerouslySetInnerHTML:{__html:y},"data-testid":"ContentHeaderHed",isMusicReview:Ce}),Ge&&a.createElement(A,{ledeContentAlign:Re}),e&&Ce?a.createElement(E,{isMusicReview:Ce},0===e.length&&a.createElement($,{isSplitScreenArtistLarge:$e},bt(l.variousArtists)),e.map((t,i)=>a.createElement(a.Fragment,{key:i},a.createElement(Z,{key:i,href:"/".concat(t.uri)},a.createElement($,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:$e})),!(i===e.length-1)&&a.createElement(T,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:$e})))):!de&&b&&a.createElement(I,{dangerouslySetInnerHTML:{__html:b}}),je&&h&&a.createElement(B,Object.assign({},h,{sizes:"66px",hasContributorImageBackground:f})),Ne&&!le&&"bottom"===Le&&a.createElement(N,{contributors:Ne,bylineVariation:it,isCompact:!1,hasInvertedBylineLink:L}),!pe&&"bottom"===Ae&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},Pe),(Ce||Se)&&dt&&a.createElement(J,{"data-testid":"SplitScreenContentHeaderReleaseYear"},dt),_e&&a.createElement("div",{ref:Ct},a.createElement(ht,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!ut&&!!mt&&a.createElement(W,{averageRatingCount:Math.round(10*ut)/10,brandSlug:t,hasBorderTop:!0,link:et&&{label:bt(l.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=C(t);null==t||t.focus(),window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:mt}),nt?a.createElement(H,null,a.createElement(S,{shareData:{url:ot,title:qe,text:Ve}})):oe(j,me,ue,Ue,ze)),a.createElement(K,{isMusicReview:Ce},a.createElement(c,Object.assign({lede:ct,isCNEVideo:pt},ft)),Ce&&a.createElement(q,null,a.createElement(m,{rating:at,isBestNewMusic:rt,isBestNewReissue:st,isTrackReview:Se})))),"belowHeader"===o&&ae(he,De),Ne&&le&&a.createElement(N,{contributors:Ne,bylineVariation:V?"Item":Be,isCompact:!1,isMusicReview:Ce}),lt.length>0&&a.createElement(X,null,a.createElement(M,null,a.createElement(u,{items:lt,isMusicReview:Ce}))),!de&&Ce&&b&&a.createElement(X,null,a.createElement(P,{dangerouslySetInnerHTML:{__html:b}})),!nt&&j&&Ue&&a.createElement(Y,{align:Ie,attributes:{shouldFadeOnMove:!0},anchorBottom:Ke,anchorTop:Ze,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(Q,Object.assign({},Ue,{bookmarkTrackingType:"sticky",className:"social-icons--share"}))))};le.propTypes={artists:o.array,brandSlug:o.string,bylineVariation:o.string,captionPosition:o.oneOf(["belowHeader","belowImage"]),className:o.string,contentAlign:o.oneOf(["center","left"]),contributorImage:o.shape(p.propTypes),contributors:o.shape(h.propTypes.contributors),contributorsPosition:o.oneOf(["top","bottom"]),dangerousDek:o.string,dangerousHed:o.string.isRequired,hasContributorImageBackground:o.bool,hasInvertedBylineLink:o.bool,hasMargin:o.bool,hasNativeShareButton:o.bool,hasStickySocialIcons:o.bool,hideCaption:o.bool,hideContributors:o.bool,hideContributorTitle:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,imageAlignment:o.oneOf(["center","top","left","right","bottom"]),infoSliceFields:o.object,isInset:o.bool,isMusicReview:o.bool,isSplitScreenArtistLarge:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,isTextRight:o.bool,isTrackReview:o.bool,lede:o.oneOfType([o.shape(p.propTypes)]),ledeContentAlign:o.oneOf(["left","center"]),musicRating:o.object,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),publishDate:o.string.isRequired,publishDatePosition:o.oneOf(["top","bottom"]),rating:o.shape(f.propTypes),rubric:o.shape(g.propTypes),rubricVariation:o.string,shouldDisplaySignage:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldFitToViewport:o.bool,shouldHeaderFitToViewport:o.bool,showBookmarked:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showHeaderDivider:o.bool,showReviewLink:o.bool,signage:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(b.propTypes),socialMediaPositionInMobile:o.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:o.string,stickySocialAnchorBottom:y.propTypes.anchorBottom,stickySocialAnchorTop:y.propTypes.anchorTop,textAlign:o.oneOf(["left","center"]),theme:o.oneOf(["standard","inverted","special"])},le.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},le.displayName="SplitScreenContentHeader",e.exports=le},1461:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},1462:function(e,t,i){const n=i(0),o=i(1),a=i(91),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=i(252),l=({captionCredit:e,className:t,isCNEVideo:i,lede:o,socialMedia:l})=>o?i?o.scriptEmbedUrl?n.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},n.createElement(a,{hasMargins:!1,shouldAutoplay:!0,scriptUrl:o.scriptEmbedUrl})):null:n.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},n.createElement(r,Object.assign({},o)),e,l):null;l.propTypes={captionCredit:o.object,className:o.string,isCNEVideo:o.bool,lede:o.object,socialMedia:o.object},e.exports=l},1463:function(e,t,i){e.exports=i(1464)},1464:function(e,t,i){const n=i(0),{useIntl:o}=i(2),a=i(1),{BestNewMusicArrows:r}=i(1465),s=i(1466).default,l=i(76),{trackComponent:d}=i(5),{BestNewMusicText:c,Rating:p,ScoreBoxWrapper:g,ScoreCircle:u}=i(502),m=({rating:e,isBestNewMusic:t,isBestNewReissue:i,palette:a,isTrackReview:m})=>{n.useEffect(()=>{d("ScoreBox")},[]);const{formatMessage:h}=o(),y=m&&t;if(m&&!t)return null;const b=e<10?Number(e).toFixed(1):e,f=t||i,C=t&&i;return n.createElement(l,{palette:a},n.createElement(g,null,f&&n.createElement(r,{isBestBoth:C,isBest:f}),!y&&n.createElement(u,{isBest:f,isBestBoth:C},n.createElement(p,{isBest:f,isBestBoth:C},b)),f&&n.createElement(c,{isBestBoth:C,isBest:f},!y&&t&&n.createElement("div",null," ",h(s.BestNewMusic)," "),!y&&i&&n.createElement("div",null," ",h(s.BestNewReissue)),y&&n.createElement("div",null," ",h(s.BestNewTrack)))))};m.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},m.defaultProps={isBestNewMusic:!1,isBestNewReissue:!1,palette:"standard"},e.exports=m},1465:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const n=i(0),o=i(1),{SvgWrapper:a,SvgStyle:r}=i(502);t.BestNewMusicArrows=e=>n.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},n.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},n.createElement("g",null,n.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),n.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),n.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:o.bool,isBestBoth:o.bool,theme:o.string}},1466:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},1467:function(e,t){const i={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const t=[];return Object.keys(e).forEach(n=>{e[n]&&e[n].length&&i[n]&&t.push({key:i[n],value:e[n]})}),t}}},1479:function(e,t,i){const{asConfiguredComponent:n}=i(9),{asThemedComponent:o}=i(30),a=i(1428);e.exports=o(n(a,"ContentHeader"))},1484:function(e,t,i){e.exports=i(1495)},1495:function(e,t,i){const n=i(1),o=i(0),{connect:a}=i(20),{useIntl:r}=i(2),s=i(1496).default,l=i(27).default,d=i(33),c=i(11),{googleAnalytics:p}=i(13),{asConfiguredComponent:g}=i(9),{doCloseModal:u}=i(160),{trackComponent:m}=i(5),{SignInModalBaseWrapper:h,SignInModalCloseButton:y,SignInModalButtons:b,SignInModalDek:f,SignInModalHed:C,SignInModalEmail:v,SignInModalSignInSection:S,SignInModalSpotIllustration:w,SignInModalSignInLink:k,SignInModalHedSpanTag:x}=i(1497),$=({analyticsType:e,authSource:t,brandIdentityAssets:i,className:n,closeButtonCallback:a,dangerousDek:g,dangerousHed:$,dangerousHedSpanTag:T,hasLargeMargins:E,hasRoundedCornersButtons:N,isVisible:L,redirectURL:B,source:I,type:P})=>{o.useEffect(()=>{m("SignInModal")},[]);const A=t=>p.emitGoogleTrackingEvent(t,{signInModalType:e});L&&A("signin-modal-impression");let D=`${l.oidcAuth}?redirectURL=${encodeURIComponent(B)}&skipAccountLink=true&authSource=${t}`;I&&(D=`${D}&source=${I}`);const R=i.signInModalAsset[P]||i.signInModalAsset.default,{formatMessage:M}=r();return o.createElement(h,{className:n,hasLargeMargins:E,closeTimeoutMS:400,isOpen:L},o.createElement(y,{isIconButton:!0,ariaLabel:M(s.closeButtonAriaLabel),label:M(s.closeButtonLabel),onClickHandler:()=>{u(),A("signin-modal-close"),a&&a()},role:"button",ButtonIcon:d}),o.createElement(C,null,$||M(s.hed),o.createElement(x,null,T||M(s.hedSpanTag))),o.createElement(w,null,o.createElement(c,Object.assign({},R))),o.createElement(f,{dangerouslySetInnerHTML:{__html:g}}),o.createElement(b,{hasRoundedCornersButtons:N},o.createElement(v,{label:M(s.oidcSignUpButtonLabel),href:D,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:()=>A("signin-modal-oidc-sign-in-click"),"data-testid":"SignInModalEmail"})),o.createElement(S,null,M(s.oidcSignInText)," ",o.createElement(k,{href:D,onClick:()=>A("signin-modal-oidc-sign-in-click")},M(s.oidcSignInLinkText)),"voting"===P&&o.createElement("div",null,"  »")))};$.displayName="SignInModal",$.defaultProps={authSource:"sign-in-modal",hasLargeMargins:!1,redirectURL:"/",type:"default"},$.propTypes={analyticsType:n.string.isRequired,authSource:n.string,brandIdentityAssets:n.shape({signInModalAsset:n.shape({default:n.object,crosswords:n.object,voting:n.object})}).isRequired,className:n.string,closeButtonCallback:n.func,dangerousDek:n.string,dangerousHed:n.string,dangerousHedSpanTag:n.string,hasLargeMargins:n.bool,hasRoundedCornersButtons:n.bool,isVisible:n.bool,redirectURL:n.string,source:n.string,type:n.oneOf(["default","crosswords","voting"])};const T=g($,"SignInModal");e.exports=a(e=>{const{signInModalConfig:t,brandIdentityAssets:i}=e;return Object.assign({brandIdentityAssets:i},t)})(T)},1496:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},1497:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(0),a=i(154),r=i(1),{default:s,css:l}=i(3),{BaseText:d,BaseLink:c}=i(10),{calculateSpacing:p}=i(4),{BREAKPOINTS:g,ZINDEX_MAP:u}=i(6),m=i(14),{getColorToken:h,getTypographyStyles:y}=i(4),{ResponsiveImagePicture:b}=i(24),{ButtonWrapper:f}=i(29),C=s(d).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;C.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const v=s.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,S=s.p.withConfig({displayName:"SignInModalDek"})`
  ${y("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${h("colors.discover.body.white.description")};
  @media (max-width: ${g.md}) {
    margin-bottom: ${p(3)};
  }
`,w=s(d).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${p(1.5)} auto;
  text-align: center;

  ${b} {
    width: 200px;
    height: 170px;
  }
`;w.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const k=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${p(1)};
  width: 100%;
`,x=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,$=s(m.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${p(1)};
  right: ${p(1)};
  padding: 0;
  fill: ${h("colors.discovery.body.light.context-tertiary")};

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,T=s(m.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,E=s.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${p(2)};
  width: 100%;

  ${T} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${f} {\n      border-radius: 4px;\n    }\n  `}
`,N=l`
  &&& {
    padding: ${p(8)} ${p(5)};
    min-height: ${p(62)};
  }
  ${w} {
    margin: ${p(1.5)} auto;

    ${b} {
      width: 175px;
      height: 175px;
    }
  }

  ${S} {
    margin-bottom: ${p(2)};
  }

  ${E} {
    margin-bottom: ${p(4)};

    @media (max-width: ${g.md}) {
      padding-bottom: 0;
    }
  }
`;function L(e){var{className:t}=e,i=n(e,["className"]);const r=t+"__content",s=t+"__overlay";return o.createElement(a,Object.assign({portalClassName:t,className:r,overlayClassName:s},i))}L.propTypes={className:r.string};const B=s(L).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${u.interstitialLayer};

    background-color: rgba(
      ${h("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${h("colors.background.white")};
    padding: ${p(5)};
    width: ${p(60)};
    max-height: calc(100% - ${p(1,"px")});
    overflow-y: auto;

    @media (max-width: ${g.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${p(2,"px")}));

      margin: 0 ${p(2,"px")};
      padding: ${p(4)} ${p(5)}
        ${p(4)} ${p(5)};
      width: auto;
      min-width: ${p(38)};
      max-width: ${p(60)};
    }

    ${k}
    ${x}
    ${({hasLargeMargins:e})=>!0===e&&N}
  }
`,I=s(d).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;I.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const P=s(c).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${u.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;P.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:B,SignInModalCloseButton:$,SignInModalButtons:E,SignInModalDek:S,SignInModalEmail:T,SignInModalHed:C,SignInModalSignInSection:I,SignInModalSignInLink:P,SignInModalSpotIllustration:w,SignInModalHedSpanTag:v}},1516:function(e,t,i){e.exports=i(1613)},1517:function(e,t,i){const{css:n,default:o}=i(3),{calculateSpacing:a,minScreen:r,minMaxScreen:s,getColorToken:l,getTypographyStyles:d,getColorStyles:c}=i(4),{CarouselControlButton:p,CarouselList:g,CarouselWrapper:u}=i(47),m=i(19),{BREAKPOINTS:h}=i(6),y=i(78),b=o(m.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${s(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${a(3)};
      padding-left: ${a(3)};
    }
    padding-right: ${a(4)};
    padding-left: ${a(4)};
  }

  &.grid {
    row-gap: ${a(6)};
  }
`,f=o(m.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${s(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${a(3)};
      padding-left: ${a(3)};
    }
    padding-right: ${a(4)};
    padding-left: ${a(4)};
  }

  &.grid {
    row-gap: ${a(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}

    ${({hasGridBottomPadding:e=!1})=>e&&`padding-bottom:${a(8)};`}
  }
`,C=o.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:t})=>t&&`border-bottom: 1px solid ${l(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:t})=>e&&!t?`padding: ${a(4)} 0 ${a(4)};`:""}
`,v=o.div.withConfig({displayName:"TitleToggleChipListWrapper"})`
  ${({shouldUseAlternativeTitleStyle:e})=>e&&n`
      .section-title {
        margin: 0;
        padding-top: 0;

        @media (max-width: ${h.md}) {
          h2 {
            text-align: center;
          }
        }
      }

      @media (max-width: ${h.md}) {
        .list-wrapper {
          overflow-y: hidden;
          overflow-x: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }

      @media (min-width: ${h.md}) {
        ${c("border-color","colors.consumption.lead.standard.context-signature")};

        display: flex;
        align-items: center;
        border-top: 2px solid;
        gap: 2rem;

        .clip-list {
          margin: 0;

          .list-wrapper {
            padding: 0;
            gap: ${a(3)};

            button {
              border-radius: 0;
              background: none;
              padding: 0.2rem 0;
              font-size: 13px;
              font-weight: bold;

              &[aria-checked='false'] {
                ${c("color","colors.interactive.base.border")};
              }

              &[aria-checked='true'] {
                ${c("color","colors.interactive.base.black")};
                border-bottom: 1px solid;
              }

              &:hover,
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    `}
`,S=o.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const t=a(4);return`margin: ${e?t:"0"} 0 ${t} 0;`}}

  ${({hasPadding:e})=>e&&`padding-left: ${a(3)};\n    padding-right:  ${a(3)};\n   `}
  
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,w=o.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${a(4)};`:`margin: ${a(4)} 0 0 0;`}
`,k=o.div.withConfig({displayName:"CarouselWrapper"})`
  ${p} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`,x=o.section.withConfig({displayName:"EditorsPicksCarousel"})`
  display: grid;
  grid-template-columns: 100%;
  margin-top: ${a(4)};
  overflow-x: hidden;
  @media (min-width: ${h.lg}) {
    grid-column-gap: ${a(4)};
    grid-template-columns: calc(20% - ${a(4)}) 80%;
    ${u} {
      margin-top: 0;
    }
  }
  ${g} {
    margin: 0;
  }
`,$=o.div.withConfig({displayName:"EditorCard"})`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  @media (min-width: ${h.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    margin: ${a(4)} 0;
  }
`,T=o(y).withConfig({displayName:"EditorResponsiveAsset"})`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`,E=o.div.withConfig({displayName:"EditorDetails"})`
  margin-left: ${a(1)};
  @media (min-width: ${h.lg}) {
    grid-column: 1;
    margin: ${a(1)} 0 0;
  }
`,N=o.div.withConfig({displayName:"EditorName"})`
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,L=o.div.withConfig({displayName:"EditorTitle"})`
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,B=o.div.withConfig({displayName:"EditorDescription"})`
  grid-column: 1 / span 2;
  margin-top: ${a(1.5)};
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.description-embed")}
  @media (min-width: ${h.lg}) {
    margin-top: ${a(2.5)};
  }
`;e.exports={CarouselWrapper:k,ChipWrapper:w,EditorCard:$,EditorDescription:B,EditorDetails:E,EditorName:N,EditorResponsiveAsset:T,EditorsPicksCarousel:x,EditorTitle:L,FilterableSummaryListDynamicGridItemLayout:f,FilterableSummaryListGrid:b,FilterableSummaryListWrapper:C,TitleWrapper:S,TitleToggleChipListWrapper:v}},155:function(e,t,i){e.exports=i(158)},1560:function(e,t,i){const{default:n,createGlobalStyle:o,css:a}=i(3),{BREAKPOINTS:r}=i(6),{calculateSpacing:s,getColorStyles:l,getTypographyStyles:d,minScreen:c,minMaxScreen:p,getColorToken:g,getLinkStyles:u}=i(4),{withRecircContextProvider:m}=i(168),h=m(i(79)),{getPattern:y}=i(431),b=i(14),{ConfiguredDisclaimer:f}=i(97),{BodyWrapper:C}=i(169),v=i(490),{SectionTitleHed:S}=i(69),{LinkStackContent:w}=i(491),{RecircMostPopularWrapper:k,RecircMostPopularHeading:x}=i(484),{StickyBoxWrapper:$,StickyBoxPrimary:T}=i(467),{IframeEmbedWrapper:E}=i(269),{ResponsiveCartoonWrapper:N}=i(237),{GalleryEmbedHr:L}=i(174),{AssetEmbedAssetContainer:B}=i(106),{GridItem:I,GridWrapper:P}=i(25),A=i(136),{SocialIconsListItem:D}=i(28),{ResponsiveCartoonCaption:R}=i(237),M=a`
  ${({theme:e})=>y(e,"page-background")}
  .grid-layout__content {
    ${c(r.md)} {
      grid-column: 3 / span 8;
    }

    ${c(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${p(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${c(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${k} {
      &:first-child {
        margin-top: 0;

        ${x} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,O=n(h).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${M}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:t,hasContentHeaderLogo:i})=>!t&&i&&(e=>e?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,H=o`
    .channel--body {
      ${M}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${c(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${s(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${R} .underline {
          font-style: inherit;
        }
      }
  
      .article__body > .body__inner-container > {
        ${E}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${E} {
            margin-top: 0;
          }
      }

      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${c(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${$} {
             top: 90px;
           }
         }
     
         ${k} {
           &:first-child {
             margin-top: 0;
     
             ${x} {
               margin-top: 0;
             }
           }
         }
       }

  `,_=n("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${I} {\n      grid-column: 1 / -1;\n    }`}
`,W=n("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>y(e,"lede-background")}
`,G=n("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>y(e,"lede-background")}
  padding-top: ${s(2)};

  @media (min-width: 1208px) {
    padding-top: ${s(4)};
  }

  ${({togglePaddingTop:e})=>"large"===e&&`padding-top: ${s(4)};\n       ${c(r.md)}{ \n        padding-top: ${s(6)};\n       }\n      `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${c(r.lg)} {  padding-top: ${s(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${c(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&a`
      ${N}::before, ${N}::after {
        border: none;
      }

      ${N} {
        ${l("background-color","colors.background.brand")};
        border: none;
        padding: ${s(3)} ${s(6)};

        ${c(r.lg)} {
          ${D} a {
            width: ${s(5)};
          }
        }
      }
    `}
`,j=n("div").withConfig({displayName:"ArticlePageChunks"})`
  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${L}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${B} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${c(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${P} {
      display: block;
    }

    ${P} > p {
      font-size: 17px;
    }
  }
`,F=n(b.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${c(r.md)} {
    display: none;
  }
`,V=n(f).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${d("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${d("typography.definitions.globalEditorial.context-secondary")};
  }
  ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body")};
  ${c(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }
`,U=n("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${c(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${N} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&a`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${C} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${g("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>u(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${g("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}
`,z=n("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,q=n(A).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${$},
  ${$} > ${T} {
    height: 100%;
  }

  > aside > ${$} {
    position: static;
  }
`,K=n("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${$} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,Z=n("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,X=n("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,Y=n("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,J=n("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,Q=n.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${({adRail:e})=>!e&&`\n     > ${I} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${I} {
    margin-bottom: ${s(2)};
  }
`,ee=n.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${I} {
    grid-column: 1 / -1;
    ${c(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${c(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,te=n.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${I} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ie=n.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${I} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ne=n(v).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${S} {
    margin: 0;
  }

  ${w} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`;e.exports={ArticlePageBase:O,ArticlePageGlobalStyle:H,ArticlePageLedeBackground:W,ArticlePageContentBackGround:G,ArticlePageChunks:j,ArticlePageBodyMobileTruncatedBtn:F,ArticlePageChunksContent:U,ArticlePageMainContent:z,ArticlePageDisclaimer:V,ArticlePageSplitAdRail:q,ArticlePageSplitAdRailContent:K,ArticlePageSplitAdRailTop:Z,ArticlePageSplitAdRailMiddle:X,ArticlePageSplitAdRailBottom:Y,ArticlePageBodyGridContainer:J,ArticlePageChunksGrid:Q,ArticlePageContentFooterGrid:ee,ArticlePageDisclaimerGrid:te,ContentWrapperGrid:ie,LinkStackArticlePage:ne,PaywallInlineBarrierWithWrapperGrid:_}},1570:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1578);e.exports=n(o,"BreadcrumbTrail")},1578:function(e,t,i){const n=i(1),o=i(0),a=i(76),r=i(19),{getSeparatorIconComponent:s}=i(1579),{BreadcrumbTrailWrapper:l,BreadcrumbTrailScrollContainer:d,BreadcrumbTrailItem:c}=i(1582),{trackComponent:p}=i(5),g=({hierarchy:e,shouldRemoveBackgroundColor:t,theme:i,shouldUseContentHeaderColorForLink:n,separatorIcon:g})=>(o.useEffect(()=>{p("BreadcrumbTrail")},[]),o.createElement(a,{palette:i},o.createElement(l,{"data-testid":"BreadcrumbTrail",shouldRemoveBackgroundColor:t},e&&e.length>0&&o.createElement(r.WithMargins,null,o.createElement(d,null,e.map((e,t)=>{const{name:i,slug:a}=e||{};return o.createElement(c,{key:t,shouldUseContentHeaderColorForLink:n},a?o.createElement("a",{className:"breadCrumbLink",href:a},i):o.createElement("span",null,i),s(g))}))))));g.displayName="BreadcrumbTrail",g.defaultProps={separatorIcon:{name:"Chevron",type:"standard"},shouldRemoveBackgroundColor:!1,theme:"standard"},g.propTypes={hierarchy:n.array.isRequired,separatorIcon:n.shape({name:n.string,type:n.oneOf(["standard","thin","thinner"])}),shouldRemoveBackgroundColor:n.bool,shouldUseContentHeaderColorForLink:n.bool,theme:n.string},e.exports=g},1579:function(e,t,i){const n=i(0),{getIconComponent:o}=i(1580);e.exports={getSeparatorIconComponent:e=>{const{name:t,type:i}=e,a=o(t,i)||o("Chevron","standard");return n.createElement(a,Object.assign({},{width:"1rem",height:"1rem"}))}}},158:function(e,t,i){const{asVariation:n}=i(12),o=i(159);o.ContentCenterNoBackground=n(o,"ContentCenterNoBackground",{contentAlign:"center",hasBackground:!1}),o.ContentRightNoBackground=n(o,"ContentRightNoBackground",{contentAlign:"right",hasBackground:!1}),o.ContentLeftNoBackground=n(o,"ContentLeftNoBackground",{contentAlign:"left",hasBackground:!1}),e.exports=o},1580:function(e,t,i){const n={standard:i(111),thin:i(479),thinner:i(1581)};e.exports={getIconComponent:(e,t="standard")=>{if(!e)return null;const i=n[t][e];return i||null}}},1581:function(e,t,i){e.exports={Bookmark:i(167),BookmarkActivated:i(104),Email:i(473),Facebook:i(474),Twitter:i(476),Print:i(477),Shopping:i(475)}},1582:function(e,t,i){const{default:n}=i(3),{BaseText:o}=i(10),{calculateSpacing:a,getLinkStyles:r,getColorStyles:s}=i(4),{BREAKPOINTS:l}=i(6),{isInverted:d}=i(31),c=n.div.withConfig({displayName:"BreadcrumbTrailWrapper"})`
  ${({theme:e,shouldRemoveBackgroundColor:t})=>{const i=d(e)?"colors.background.black":"colors.background.light";return t?"background-color: transparent;":s(e,"background-color",i)+";"}};

  padding-top: ${a(2.4)};
  padding-bottom: ${a(2.4)};
  width: 100%;

  @media (max-width: ${l.md}) {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,p=n.div.withConfig({displayName:"BreadcrumbTrailScrollContainer"})`
  display: flex;
  width: max-content;
`,g=n(o).withConfig({displayName:"BreadcrumbTrailItem"})`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  ${({theme:e})=>d(e)&&`\n      ${s(e,"color","colors.consumption.lead.inverted.link")};`}

  a:active,
  a:link {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .icon {
    margin: 0 ${a(.2)};

    path {
      ${({theme:e})=>d(e)&&`\n          ${s(e,"fill","colors.consumption.lead.inverted.link")};\n        `}
    }
  }

  &:last-of-type {
    a {
      ${({theme:e,shouldUseContentHeaderColorForLink:t})=>{const i=d(e)?r(e,"colors.consumption.lead.inverted.link",null):r(e,"colors.discovery.lead.secondary.link",null);return t?r(e,"colors.consumption.lead.standard.context-signature",null):i}}

      &:active,
      &:link {
        text-decoration: none;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    span {
      ${({theme:e})=>s(e,"color","colors.discovery.lead.secondary.link")};
    }

    .icon {
      display: none;
    }
  }
`;g.defaultProps={typeIdentity:"typography.definitions.globalEditorial.tags"},e.exports={BreadcrumbTrailWrapper:c,BreadcrumbTrailScrollContainer:p,BreadcrumbTrailItem:g}},1583:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({bylineBrandXAdvertiser:{id:"SponsoredContentHeader.BylineBrandXAdvertiser",defaultMessage:"{brandName} X",description:"Byline text when it's a brand and an advertiser"},bylineBrandedContent:{id:"SponsoredContentHeader.BylineBrandedContent",defaultMessage:"Branded Content By",description:"Byline text for branded content"},bylineCreated:{id:"SponsoredContentHeader.BylineCreated",defaultMessage:"Created By {brandName} For",description:"Byline text for created by brand"},bylinePaidPost:{id:"SponsoredContentHeader.BylinePaidPost",defaultMessage:"PAID POST",description:"Byline text for a paid post"},bylineProduced:{id:"SponsoredContentHeader.BylineProduced",defaultMessage:"Produced By",description:"Byline text for produced by"},bylineProducedByAdvertiser:{id:"SponsoredContentHeader.BylineProducedByAdvertiser",defaultMessage:"Produced By",description:"Byline text for produced by advertiser"},bylineProducedByBrand:{id:"SponsoredContentHeader.BylineProducedByBrand",defaultMessage:"Produced By {brandName} With",description:"Byline text for produced by brand"},bylineSponsored:{id:"SponsoredContentHeader.BylineSponsored",defaultMessage:"Sponsored content",description:"Byline text for sponsored content"},bylineSponsoredContent:{id:"SponsoredContentHeader.BylineSponsoredContent",defaultMessage:"Sponsored Content By",description:"Byline text for sponsored content with a sponsor name"},bylineInCollaboration:{id:"SponsoredContentHeader.BylineInCollaboration",defaultMessage:"In Collaboration With",description:"Byline text for in collaboration with"},bylineSponsoredBy:{id:"SponsoredContentHeader.BylineSponsoredBy",defaultMessage:"Sponsored By",description:"Byline text for sponsored by"},bylineInPartnership:{id:"SponsoredContentHeader.BylineInPartnership",defaultMessage:"In Partnership With",description:"Byline text for in partnership with"},bylineAdvertisementFeatureWith:{id:"SponsoredContentHeader.BylineAdvertisementFeatureWith",defaultMessage:"Advertisement Feature With",description:"Byline text for advertisement feature with"},bylineOriginalContentBy:{id:"SponsoredContentHeader.BylineOriginalContentBy",defaultMessage:"Original Content By",description:"Byline text for Original Content By"},sponsoredLinkCTA:{id:"SponsoredContentHeader.SponsoredLinkCTA",defaultMessage:"Click to go to {sponsorName}'s website",description:"Call to action for sponsored link"}})},1584:function(e,t,i){const{default:n,css:o}=i(3),{BREAKPOINTS:a,ZINDEX_MAP:r}=i(6),{applyGridSpacing:s,cssVariablesGrid:l}=i(17),{calculateSpacing:d,minScreen:c,maxScreen:p,minMaxScreen:g,getColorToken:u,getTypographyStyles:m,firstLetterDropCap:h}=i(4),y=i(14),{universalGridCore:b}=i(57),f=i(58),{RowWrapper:C}=i(472),v=i(19),{GridItem:S}=i(25),w=i(487),{SummaryRiverSection:k}=i(470),{SummaryCollageOneGridWithMargin:x}=i(1600),{SectionTitleHed:$}=i(69),T=`\n  ${l()}\n  ${s("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${a.xxl};\n`,E=n(f).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:e})=>e?"":"margin-top: 0;"}
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,N=n(y.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,L=n(E).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:e})=>e?"":`margin-top: ${d(7)};`}

  ${({hasPlpFilterableContainerLightBackgroundColor:e,theme:t,isInvertedTheme:i})=>e?`background-color: ${u(t,"colors.discovery.body.light.background")};`:i?`background-color: ${u(t,"colors.consumption.lead.inverted.background")};`:""}

  ${({hasMediumMargin:e,hasNoBottomMargin:t,hasReducedMargin:i,isNativeAd:n})=>e?`margin-bottom: ${d(4)};`:t||n&&i?"margin-bottom: 0;":i?`margin-bottom: ${d(2)};`:`margin-bottom: ${d(7)};`}

  ${({hasMarginBottomMultiPackageRow:e})=>e?`\n          ${c(a.lg)} {\n            margin-bottom: ${d(5)};\n          }\n          ${g(a.md,a.lg)} {\n            margin-bottom: ${d(4)};\n          }\n          ${g(0,a.md)} {\n            margin-bottom: ${d(3)};\n          }`:""}

  ${({hasStickyLinkBanner:e})=>e?`\n        position: sticky;\n        top: 0px;\n        z-index: ${r.interstitialLayer};\n      `:""} 

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${c(a.lg)} {
    ${C}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${$} {
        ${m("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${x} {
      padding-left: var(--grid-gap);
    }
    ${k} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,B=n(v.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:e,theme:t})=>e?`\n    border-top:1px solid ${u(t,"colors.discovery.body.white.divider")};\n    \n    border-bottom:1px solid ${u(t,"colors.discovery.body.white.divider")};`:""}

  ${S} {
    grid-column: 1/-1;

    ${c(a.md)} {
      grid-column: 3/11;
    }
  }
`,I=n(w).withConfig({displayName:"MultiPackageBody"})`
  p.has-dropcap {
    margin-top: ${d(4,"px")};

    &::first-letter {
      ${h};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${u("colors.consumption.lead.standard.heading")};
      }
    }
  }
  ${({constrainPagragraph:e})=>e&&`\n    inline-embed{\n      display: block;\n      p {\n        display:inline-block;\n        max-width: ${d(40.875)};\n        ${c(a.lg)} {\n          max-width: ${d(91.5)};\n        }\n      }\n    }\n  `}
`,P=o`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${d(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${m("typography.definitions.discovery.description-core")};
      font-size: ${d(4)};
    }

    .verso-features {
      margin-bottom: ${d(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${p(a.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${d(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${d(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${g(0,a.xl)} {
        display: block;
      }

      ${c(a.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${g(0,a.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${d(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${g(0,a.lg)} {
        padding-bottom: ${d(2)};
      }

      ${c(a.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${m("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${m("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${d(5.5)};
    }

    .verso-embed-row {
      margin: ${d(4)} 0;
    }

    ${I} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${m("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${d(2.5)};
      text-decoration: none;
      color: ${u("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,A=n.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:e})=>e&&`padding-bottom: ${d(10,"px")};`}

  ${({customClass:e})=>e&&"puzzles-games-landing-page"===e&&P}
  ${({hasMarginBottomMultiPackageRow:e})=>e?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}
`,D=n.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:e})=>(e=>`\n    background: ${u(e,"colors.consumption.body.inverted.display-texture")};\n    ${c(a.md)} {\n      width: ${a.md};\n      padding: ${d(3)} ${d(9)} ${d(5)} ${d(9)};\n    }\n    padding: ${d(2)} ${d(5)} ${d(3.5)} ${d(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${d(2.4,"rem")};\n            font-size: ${d(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${c(a.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${d(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${d(1)};\n        }\n      }\n    }\n  }\n  `)(e)}
`,R=n(L).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,M=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${T}
`,O=n.div.withConfig({displayName:"EventsListWrapper"})`
  ${l()}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${c(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,H=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${T}
`,_=n.div.withConfig({displayName:"NewsletterWrapper"})`
  ${T}

  padding-top: ${d(6)};
  padding-bottom: ${d(6)};

  ${c(a.md)} {
    padding-top: ${d(9)};
    padding-bottom: ${d(9)};
  }
`,W=n.div.withConfig({displayName:"CMUnitWrapper"})`
  ${T}

  ${c(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,G=n.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${b(!0)}
  ${s("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${c(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,j=n(v).withConfig({displayName:"GridWrapper"})`
  ${T}
`,F=n.div.withConfig({displayName:"EmbedWrapper"})`
  ${T}
`,V=n.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:e})=>e?`\n        ${l()}\n        ${s("padding",!0)}`:""+T}
`,U=n("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${l()}
  ${s("padding")}
  margin: 0 auto;
  margin-bottom: ${d(4)};
  width: 100%;
  max-width: ${a.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${u(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${d(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${m("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,z=n.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${b()}
  ${s("padding")}
`;e.exports={CMUnitWrapper:W,DiscoveryQuoteRow:B,EmbedWrapper:F,GridWrapper:j,EventsListWrapper:O,MultiPackageContainer:A,MultiPackageRow:L,MultiPackageBody:I,MultiPackageReadMore:R,NewsFeedWrapper:H,NewsletterWrapper:_,PromoBoxWrapper:M,SubTopicDiscoveryWrapper:G,TickerWrapper:V,MultipackageNoItemsBlock:U,MultiPackageBodyWrapperGrid:z,SectionJumpLinksWrapper:D,UtilityButton:N}},159:function(e,t,i){const n=i(1),o=i(8),a=i(0),r=i(11),{trackComponent:s}=i(5),{UtilityLedeHeader:l,UtilityLedeWrapper:d,UtilityLedeHedText:c,UtilityLedeDekText:p,UtilityLedeImage:g}=i(129),u=({ariaLive:e,className:t,dangerousDek:i,dangerousHed:n,image:r,shouldUseAlternativeStyle:u,hasInverted:m,variations:h,variationName:y})=>{a.useEffect(()=>{s("UtilityLede",y)},[]);const b=r&&Object.keys(r).length>0;return a.createElement(l,{className:o("utility-lede",t),"aria-live":e,"aria-label":"UtilityPageHeader",contentAlign:h.contentAlign,hasBackground:h.hasBackground,hasImage:b,alternativeStyle:u},r&&a.createElement(g,Object.assign({hasImage:b},r)),a.createElement(d,{alternativeStyle:u},a.createElement(c,{"data-testid":"UtilityLedeHedText",hasImage:b,dangerouslySetInnerHTML:{__html:n},hasInverted:m}),i&&a.createElement(p,{"data-testid":"UtilityLedeDekText",hasImage:b,dangerouslySetInnerHTML:{__html:i}})))};u.propTypes={ariaLive:n.string,className:n.string,dangerousDek:n.string,dangerousHed:n.string.isRequired,hasInverted:n.bool,image:n.shape(r.propTypes),shouldUseAlternativeStyle:n.bool,variationName:n.string,variations:n.shape({contentAlign:n.oneOf(["center","left","right"]),hasBackground:n.bool})},u.defaultProps={shouldUseAlternativeStyle:!1,variations:{contentAlign:"center",hasBackground:!0}},e.exports=u},1600:function(e,t,i){const{default:n,css:o}=i(3),{BREAKPOINTS:a}=i(6),{applyGridSpacing:r,cssVariablesGrid:s}=i(17),{RubricLink:l}=i(73),{calculateSpacing:d,minScreen:c,minMaxScreen:p,getTypographyStyles:g,getColorToken:u}=i(4),{BaseLink:m}=i(10),{SocialIconsList:h}=i(28),{SpanWrapper:y}=i(84),b=n.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:e})=>!e&&`\n      margin-bottom: ${d(2)};\n\n      ${c(a.md)} {\n        margin-bottom: ${d(1)};\n      }\n\n      ${c(a.lg)} {\n        margin-bottom: ${d(0)};\n      }\n    `}
`,f=n.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }
`,C=n(m).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${g("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${d(2)};
  vertical-align: top;
  ${c(a.lg)} {
    margin-bottom: ${d(4)};
  }
`;C.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const v=o`
  ${s()}
  ${r("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${g("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${g("typography.definitions.discovery.description-feature")};
      }
    }
  }

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${u("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${h} {
    justify-content: center;
  }

  ${c(a.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,S=n.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${a.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${a.md}) {
      padding-bottom: 0;
    }
  }
`,w=o`
  &&& {
    grid-gap: ${d(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${S} {
    display: grid;
    align-items: center;
  }

  ${y}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;

      picture {
        max-width: 300px;
        ${c(a.lg)} {
          max-width: 400px;
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${c(a.lg)} {
        margin-top: ${d(2)};
        width: 85%;
      }
    }
  }
`,k=o`
  ${p(0,a.lg)} {
    .summary-item__asset-container {
      ${r("margin",!0)};
    }
  }
`,x=o`
  &&& {
    grid-template-rows: unset;
    background-color: ${u("colors.discovery.body.dark.background")};
    max-width: ${a.xxl};

    ${p(a.sm,a.md)} {
      column-gap: ${d(9)};
      margin: ${d(0)};
      padding: ${d(0)};
    }
    ${c(a.md)} {
      column-gap: ${d(3)};
      margin: ${d(0)};
      padding: ${d(5)} ${d(3)};
    }
    ${c(a.lg)} {
      margin: ${d(0)};
      padding: ${d(7)} ${d(6)};
    }
    ${c(a.xl)} {
      column-gap: 2rem;
      margin: ${d(0)};
      padding: ${d(10)} ${d(8)};
    }
    ${c(a.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${d(10)} ${d(8)};
    }
  }
  ${l} {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${u("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${g("typography.definitions.discovery.hed-core-primary")}
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${c(a.md)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
    }
    ${c(a.lg)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
      padding: ${d(0)};
    }
    ${c(a.xl)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-4)};
      padding: ${d(0)};
    }
    ${c(a.xxl)} {
      grid-column: 2 / -2;
      margin: ${d(0)};
      padding: ${d(0)};
    }

    .summary-item__asset-container {
      ${c(a.md)} {
        margin-left: ${d(-3)};
      }
      ${c(a.xl)} {
        margin-left: ${d(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${d(0)};
    ${c(a.md)} {
      padding-right: ${d(3)};
    }
    ${c(a.lg)} {
      padding-right: ${d(5)};
    }
    ${c(a.xl)} {
      padding-right: ${d(3)};
    }
    ${c(a.xxl)} {
      padding-right: ${d(6)};
    }
  }
`,$=n.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${v}
  ${({isSingleFeature:e})=>e&&w}

  ${({hasFullWidthImage:e})=>e&&k}
  
  ${({isFullBleedDarkBackground:e})=>e&&x}
`,T=n.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:e})=>e&&o`
      background-color: ${u("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`;e.exports={SummaryCollageOneTitle:b,SummaryCollageOneCtaLink:f,SummaryCollageOneGridWithMargin:$,SummaryCollageOneIsFullBleed:T,SummaryCollageOneItemComponent:S,SummaryCollageOneAnchorLink:C}},1613:function(e,t,i){const n=i(0),o=i(1),{trackComponent:a}=i(5),r=({children:e,name:t})=>{if(n.useEffect(()=>{a("Slot")},[]),!t)throw new Error("A slot must contain a name!");return e};r.propTypes={children:o.node.isRequired,name:o.string.isRequired};e.exports={Slot:r,getSlots:(e,t=[])=>{const i=new Set(t),o={};let a;const s=[];return n.Children.forEach(e,e=>{a=e.props.name,s.push(e.props.url),e.type===r&&a&&(0===i.size||i.has(a))&&(o[a]=e)}),{slots:o,urlData:s}}}},1614:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1615);e.exports=n(o,"FilterableSummaryList")},1615:function(e,t,i){const n=i(0),o=i(36),a=i(1),{useIntl:r}=i(2),{calculateSpacing:s}=i(4),{getSlots:l}=i(1516),d=i(241),c=i(247),p=i(39),{Disclaimer:g}=i(97),u=i(100),{trackComponent:m}=i(5),{componentTracking:h,googleAnalytics:y}=i(13),{CarouselWrapper:b,ChipWrapper:f,EditorCard:C,EditorDescription:v,EditorDetails:S,EditorName:w,EditorResponsiveAsset:k,EditorsPicksCarousel:x,EditorTitle:$,FilterableSummaryListDynamicGridItemLayout:T,FilterableSummaryListGrid:E,FilterableSummaryListWrapper:N,TitleWrapper:L,TitleToggleChipListWrapper:B}=i(1517),{ArticleGalleryCarouselBtnWrapper:I,ArticleGalleryCarouselButton:P}=i(122),A=i(1616).default,D={spacing:{sm:s(1.5),xl:s(2)},width:{sm:`calc(60% - ${s(1.5)})`,lg:`calc(27% - ${s(1.5)})`,xl:`calc(24% - ${s(2)})`,xxl:`calc(21% - ${s(2)})`}},R=({affiliateDisclaimer:e,buttonConfig:t,children:i,className:a,controlButtonIcon:s,controlPlacement:R,controlPosition:M,dangerousDek:O,dangerousHed:H,defaultToggleChipTitle:_,editor:W,hasBorderBottom:G,hasGridBottomPadding:j,hasCarouselSliderPagination:F,hasControls:V,hasCustomSlider:U,hasImpressionTracking:z,hasNavigationButtonVariation:q,hasNoHorizontalScrollCarousel:K,paginationStyle:Z,hasPadding:X,hasPagination:Y,hasProductDisclaimerAlternativeStyle:J,hasTitleMarginTop:Q,hasTitleNoMargin:ee,hasToggleGridColor:te,hasHigherHorizontalPadding:ie,sectionTitleVariation:ne,selectedToggleChipTitle:oe,shouldAppendFilterInUrl:ae,shouldDisplaySingleSlot:re,shouldNotDisplayAllLabel:se,shouldEnableBundleComponentAnalytics:le,shouldEnableProductDisclaimer:de,shouldUseAlternativeTitleStyle:ce,hasCarouselControl:pe,toggleChipRole:ge,trackingNamespace:ue,isDotClickable:me,layout:he,pos:ye,gridConfig:be,isEditorsPicksCarousel:fe})=>{n.useEffect(()=>{m("FilterableSummaryList")},[]);const{formatMessage:Ce}=r(),{slots:ve,urlData:Se}=l(i),we=Object.keys(ve),[ke,xe]=n.useState(we),[$e,Te]=n.useState(ke[0]),[Ee,Ne]=n.useState(_),Le=H||O,Be=(null==ue?void 0:ue.toggle)||H,Ie=(null==ue?void 0:ue.card)||H;if(0===ke.length)return null;const Pe=ke.length>1||re,Ae=t.hasCtaLink?Ce(A.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:t.name}):Ce(A.atArticleGalleryCarouselBtnText,{categoryName:t.name}),{isDynamicGridItemLayout:De,shouldDisplayDenseGrid:Re}=be||{},Me=()=>n.Children.map(ve[$e].props.children,(e,t)=>{const i=h.addDataSectionTitleAttribute(le,`${Ie}/${$e}/`,t,!1),o=n.cloneElement(e,{analyticsDataAttribute:i});return n.createElement("div",null,o)}),Oe=()=>n.createElement(b,null,n.createElement(g.TextCenterNoTopRule,{isEnabled:de&&pe,hasHigherHorizontalPadding:ie,hasProductDisclaimerAlternativeStyle:J,disclaimerHtml:e}),n.createElement(u,{hasControls:V,hasNavigationButtonVariation:q,hasPagination:Y,controlButtonIcon:q?"ArrowIcon":s,controlPlacement:R,controlPosition:M,isDotClickable:me,hasPadding:X,hasNoHorizontalScrollCarousel:K,hasImpressionTracking:z,paginationStyle:F&&"slider"===Z?Z:"bullet",hasCustomSlider:F&&U,dangerousHed:Le,pos:ye},n.Children.map(ve[$e].props.children,(e,t)=>{const i=h.addDataSectionTitleAttribute(le,`${Ie}/${$e}/`,t,!1),o=n.cloneElement(e,{analyticsDataAttribute:i}),a=`${Le}/${$e}`;return n.createElement(u.CarouselItem,Object.assign({},D,{key:`${$e}-${t}`,carouselTitle:a,carouselItemIndex:t,carouselItemName:e.props.dangerousHed,pos:ye}),o)})),t.showButton&&t.url&&n.createElement(I,null,n.createElement("div",{className:"more-products"},n.createElement(P,{className:"article-gallery__more-button",label:Ae,btnStyle:"outlined",ariaLabel:Ae,href:t.hasCtaLink?t.url:"/products/shop"+t.url,inputKind:"link"})))),He=(e,t)=>{var i,n;Te(t),re&&(e.detail.checked?(xe([t]),oe&&Ne(oe)):(Te(we[0]),xe(we),Ne(_))),i=t,n="body",y.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:i,clickType:n})};return n.useEffect(()=>{var e;{const t=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),i=ke.findIndex(e=>"#"+e.toLowerCase()===t.toLowerCase());Te(ke[i>=0?i:0])}},[ke]),n.createElement(N,{className:a,hasToggleGridColor:te,hasPadding:X,hasBorderBottom:G},n.createElement(B,{shouldUseAlternativeTitleStyle:ce},Le&&n.createElement(L,{className:"section-title",hasPadding:X,hasTitleMarginTop:Q,as:p[ne],dangerousHed:H,dangerousDek:O,hasTitleNoMargin:ee}),Pe&&n.createElement(f,{className:"clip-list",hasToggleGridColor:te,hasPadding:X},n.createElement(c,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:te,label:Ee},ke.map((e,t)=>{const i=h.addDataSectionTitleAttribute(le,`${Be}/${e}`),o=e===$e;return se&&"All"===e?null:n.createElement(d,{analyticsDataAttribute:i,key:e,isChecked:o,hasToggleGridColor:te,onChange:t=>He(t,e),isAnchorUrl:ae,redirectUrl:Se[t],shouldDisplaySingleChip:re,role:ge},e)})))),fe&&!o(W)?n.createElement(x,null,n.createElement(C,null,W.editorPhoto&&n.createElement(k,Object.assign({},W.editorPhoto)),n.createElement(S,null,n.createElement(w,null,W.name),n.createElement($,null,W.title)),n.createElement(v,null,W.editorNote)),Oe()):function(){switch(he){case"GridFourColumns":return De?n.createElement(T,{shouldDisplayDenseGrid:Re,hasGridBottomPadding:j},Me()):n.createElement(E,null,Me());case"FullBleed":return n.createElement("div",null,Me());default:return Oe()}}())};R.propTypes={affiliateDisclaimer:a.string,buttonConfig:a.object,children:a.node.isRequired,className:a.string,controlButtonIcon:a.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:a.oneOf(["right","space-between"]),controlPosition:a.oneOf(["top","bottom","center"]),dangerousDek:a.string,dangerousHed:a.string,defaultToggleChipTitle:a.string,editor:a.object,gridConfig:a.object,hasBorderBottom:a.bool,hasCarouselControl:a.bool,hasCarouselSliderPagination:a.bool,hasControls:a.bool,hasCustomSlider:a.bool,hasGridBottomPadding:a.bool,hasHigherHorizontalPadding:a.bool,hasImpressionTracking:a.bool,hasNavigationButtonVariation:a.bool,hasNoHorizontalScrollCarousel:a.bool,hasPadding:a.bool,hasPagination:a.bool,hasProductDisclaimerAlternativeStyle:a.bool,hasTitleMarginTop:a.bool,hasTitleNoMargin:a.bool,hasToggleGridColor:a.bool,isDotClickable:a.bool,isEditorsPicksCarousel:a.bool,layout:a.string,paginationStyle:a.string,pos:a.number,sectionTitleVariation:a.string,selectedToggleChipTitle:a.string,shouldAppendFilterInUrl:a.bool,shouldDisplaySingleSlot:a.bool,shouldEnableBundleComponentAnalytics:a.bool,shouldEnableProductDisclaimer:a.bool,shouldNotDisplayAllLabel:a.bool,shouldUseAlternativeTitleStyle:a.bool,toggleChipRole:a.string,trackingNamespace:a.shape({toggle:a.string,card:a.string})},R.displayName="FilterableSummaryList",R.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,isEditorsPicksCarousel:!1,shouldAppendFilterInUrl:!0,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1,shouldUseAlternativeTitleStyle:!1},R.displayName="FilterableSummaryList",e.exports=R},1616:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},164:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({showAllPhotos:{id:"ContentHeader.ShowAllPhotos",defaultMessage:"Show all Photos",description:"Call to action to view entire photo gallery"},readReviews:{id:"ContentHeader.ReadReviews",defaultMessage:"Read Reviews",description:"Call to action to read reviews"}})},1657:function(e,t,i){const{asConfiguredComponent:n}=i(9);e.exports=n(i(1658),"SponsoredContentHeader")},1658:function(e,t,i){const n=i(8),o=i(1),a=i(0),{useIntl:r}=i(2),s=i(1583).default,{trackComponent:l}=i(5),{SponsoredContentHeaderWrapper:d,SponsoredContentHeaderExternalLink:c,SponsoredContentHeaderInfoBox:p,SponsoredContentHeaderBylineText:g,SponsoredContentHeaderResponsiveAsset:u,SponsoredContentHeaderSponsorName:m}=i(1659),{getBylineText:h,getLogoRatio:y,getSponsoredHeaderDisplayOptions:b,getValidBylineOption:f}=i(1660),C=({brandName:e,bylineOption:t,bylineVariant:i,campaignUrl:o,className:C,sponsorLogo:v,sponsorName:S})=>{a.useEffect(()=>{l("SponsoredContentHeader")},[]);const w=r(),k=f(t),{isBrandedLegacy:x,shouldDisplayLogo:$}=b({bylineOption:k,bylineVariant:i,hasLogo:!!v}),T=h({intl:w,bylineOption:k,brandName:e}),E=y({sponsorLogo:v});return a.createElement(d,{isBrandedLegacy:x,className:n(C,k.replace("_","-")),"data-testid":"SponsoredContentHeaderWrapper"},a.createElement(c,{additionalRelVals:["sponsored"],href:o||void 0,attributes:{"aria-label":w.formatMessage(s.sponsoredLinkCTA,{sponsorName:S})}},a.createElement(p,{isBrandedLegacy:x},a.createElement(g,{isBrandedLegacy:x,"data-testid":"SponsoredContentHeaderBylineText"},T),$?a.createElement(u,{altText:v.altText,constrainLogoByWidth:E>1,isBrandedLegacy:x,sources:v.sources}):a.createElement(m,{isBrandedLegacy:x},S))))};C.propTypes={brandName:o.string.isRequired,bylineOption:o.string.isRequired,bylineVariant:o.string.isRequired,campaignUrl:o.string.isRequired,className:o.string,sponsorLogo:o.any,sponsorName:o.string.isRequired},C.displayName="SponsoredContentHeader",e.exports=C},1659:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=i(4),l=i(78),d=i(34),c=n.div.withConfig({displayName:"SponsoredContentHeaderWrapper"})`
  display: flex;
  justify-content: center;
  ${({theme:e})=>r(e,"background-color","colors.discovery.body.light.background")};
  padding: ${a(2)};
  width: 100%;
  min-height: 80px;

  ${({isBrandedLegacy:e})=>e?`\n    grid-column: 1 / -1;\n    padding: unset;\n    height: 60px;\n    min-height: unset;\n\n    &.light-theme {\n      ${({theme:e})=>r(e,"background-color","colors.background.light")}\n    }\n  `:""}
`,p=n(d).withConfig({displayName:"SponsoredContentHeaderExternalLink"})`
  text-decoration: none;
`,g=n.div.withConfig({displayName:"SponsoredContentHeaderInfoBox"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({isBrandedLegacy:e})=>e?"& { flex-direction: unset; }":""}
`,u=n(o).withConfig({displayName:"SponsoredContentHeaderBylineText"})`
  ${({theme:e,isBrandedLegacy:t})=>t?`\n      ${s(e,"typography.definitions.globalEditorial.context-primary")};\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: ${a(2)};\n      height: 100%;\n\n      &.light-theme {\n        ${({theme:e})=>r(e,"color","colors.discovery.body.light.heading")}\n      }\n    }\n  `:""}
`;u.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.globalEditorial.syndication"};const m=n(l).withConfig({displayName:"SponsoredContentHeaderResponsiveAsset"})`
  &.responsive-asset {
    display: flex;
    align-items: center;
    margin-top: ${a(1)};
    overflow: visible;

    ${({theme:e,isBrandedLegacy:t})=>t?`\n      justify-content: flex-start;\n      margin-top: unset;\n      padding-left: ${a(2)};\n      border-left: 1px solid;\n      ${r(e,"border-color","colors.discovery.body.light.divider")};\n    `:""}
  }

  &.responsive-image {
    height: 60px;

    img {
      height: 100%;
    }

    ${({constrainLogoByWidth:e})=>e?"{\n      width: 60px;\n      height: unset;\n\n      img {\n        height: unset;\n      }\n    }":""}
  }
`,h=n(o).withConfig({displayName:"SponsoredContentHeaderSponsorName"})`
  display: flex;
  align-items: center;
  margin-top: ${a(.5)};

  ${({isBrandedLegacy:e,theme:t})=>e?`\n    justify-content: flex-start;\n    margin-top: unset;\n    padding-left: ${a(.5)};\n\n    &.light-theme {\n      ${r(t,"color","colors.discovery.body.light.syndication")};\n    }\n  `:""}
`;h.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={SponsoredContentHeaderWrapper:c,SponsoredContentHeaderExternalLink:p,SponsoredContentHeaderInfoBox:g,SponsoredContentHeaderBylineText:u,SponsoredContentHeaderResponsiveAsset:m,SponsoredContentHeaderSponsorName:h}},1660:function(e,t,i){const n=i(1583).default,o={brand_x_advertiser:n.bylineBrandXAdvertiser,branded_content:n.bylineBrandedContent,created:n.bylineCreated,original_content_by:n.bylineOriginalContentBy,paid_post:n.bylinePaidPost,produced:n.bylineProduced,produced_by_advertiser:n.bylineProducedByAdvertiser,produced_by_brand:n.bylineProducedByBrand,sponsored:n.bylineSponsored,sponsored_content:n.bylineSponsoredContent,in_collaboration:n.bylineInCollaboration,sponsored_by:n.bylineSponsoredBy,in_partnership:n.bylineInPartnership,advertisement_feature_with:n.bylineAdvertisementFeatureWith};function a(e){return Object.prototype.hasOwnProperty.call(o,e)?e:"produced_by_advertiser"}e.exports={BYLINE_TEMPLATES:o,getBylineText:function({intl:e,bylineOption:t="produced_by_advertiser",brandName:i}){return e.formatMessage(o[t],{brandName:i})},getLogoRatio:function({sponsorLogo:e}){var t,i,n,o;return((null===(i=null===(t=null==e?void 0:e.sources)||void 0===t?void 0:t.sm)||void 0===i?void 0:i.height)||0)/((null===(o=null===(n=null==e?void 0:e.sources)||void 0===n?void 0:n.sm)||void 0===o?void 0:o.width)||1)},getSponsoredHeaderDisplayOptions:function({bylineOption:e,bylineVariant:t,hasLogo:i}){const n=a(e),o="sponsored"===n||"produced"===n;return{isBrandedLegacy:o,shouldDisplayLogo:i&&("logo"===t||o)}},getValidBylineOption:a}},1661:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1662);e.exports=n(o,"VersoFilterableSummaryList")},1662:function(e,t,i){const n=i(0),o=i(1),a=i(133),r=i(45),{useIntl:s}=i(2),{Slot:l}=i(1516),d=i(480),c=i(1663),p=i(1666),{FilterableSummaryList:g}=i(1667),u=i(262),m=i(42),{trackComponent:h}=i(5),{formatGtmData:y,productImpressionTracking:b}=i(121),f=({copilotId:e,buttonConfig:t,ctaCardAspectRatio:i,dangerousHed:o,dangerousDek:f,dropShipSellers:C,editor:v,groups:S,hasBorder:w,hasBorderBottom:k,hasCarouselSliderPagination:x,hasControls:$,hasImageGrid:T,hasAtRetailerNameLowerCase:E,hasNavigationButtonVariation:N,hasPadding:L,hasProductPriceColor:B,hasProductNewPriceColor:I,hasProductWhiteBackground:P,hasGridColumn:A,hasUnderlineHed:D,isProductCardName:R,isProductCardRetailerName:M,shouldCheckProductInView:O,hasMarginTopAuto:H,hasPLPBrandNameContextTitle:_,hasPLPCardNameDescriptionCore:W,paginationStyle:G,sectionTitleVariation:j,shouldEnableBundleComponentAnalytics:F,shouldHideDangerousDek:V,shouldHidePublishDate:U,shouldRenderCtaCard:z,showOfferUrl:q,summaryItemVariation:K,shouldUseAlternativeTitleStyle:Z,shouldUseProductPriceSecondary:X,expVariationName:Y,isDropshipProduct:J,trackingNamespace:Q,isDotClickable:ee,layout:te,gridConfig:ie,priceFormatting:ne})=>{n.useEffect(()=>{h("VersoFilterableSummaryList")},[]);const{formatMessage:oe}=s(),ae=te||"Carousel",re="ProductCarousel"===ae,se="GridFourColumns"===ae?"PLP":te,le=o?o.replace(/[^a-zA-Z]+/gi,"-").toLowerCase():"",{gridItemColSpan:de}=ie||{};n.useEffect(()=>{re||(window.addEventListener("scroll",r(()=>{b(document.getElementsByClassName("impressionTracking"),se)},1e3)),window.addEventListener("load",()=>b(document.getElementsByClassName("impressionTracking"),se)))},[se,re]);function ce(t){switch(ae){case"ProductCarousel":case"GridFourColumns":case"EditorsPicksCarousel":return(t=>{const i=m.TextBelowLeft;return t.items.map((t,o)=>"product"===t.contentType?n.createElement(u,Object.assign({},t,{key:`${t.dangerousHed}-${o}`,hasAtRetailerNameLowerCase:E,hasImageGrid:T,hasProductPriceColor:B,hasProductNewPriceColor:I,shouldUseProductPriceSecondary:X,hasProductWhiteBackground:P,isProductCardName:R,isProductCardRetailerName:M,hasMarginTopAuto:H,hasPLPBrandNameContextTitle:_,hasPLPCardNameDescriptionCore:W,hasUnderlineHed:D,hasCarouselControl:re,shouldCheckProductInView:O,layout:ae,copilotID:e,dropShipSellers:C,isDropshipProduct:J,showOfferUrl:q,hasImpressionTracking:!0,data_item:t,onClick:()=>y(window,Object.assign(Object.assign({},t),{expVariationName:Y}),o,se,le),expVariationName:Y,layoutName:le,priceFormatting:ne})):n.createElement(i,Object.assign({gridItemColSpan:de,shouldHideIcon:!0,shouldHideMetadataSecondary:!0},t,{key:`${t.dangerousHed}-${o}`,hasBorder:w,hasUnderlineHed:D,shouldHideDangerousDek:V,shouldHidePublishDate:!0,hasHedCorePrimary:!0})))})(t);case"ArticleCarousel":return(e=>{const t=m[K];return e.items.map((e,i)=>n.createElement(t,Object.assign({},e,{key:`${e.dangerousHed}-${i}`,hasBorder:w,hasUnderlineHed:D,shouldHideDangerousDek:V,shouldHidePublishDate:U})))})(t);default:return t.items.map((e,t)=>n.createElement(d,Object.assign({},e,{key:`${e.hed}-${t}`})))}}const pe=A&&"GridFourColumns"===ae,[ge]=n.useState(parseInt(a(),10));return S&&0!==S.length?n.createElement(g,{dangerousHed:o,dangerousDek:f,editor:v,sectionTitleVariation:j,shouldEnableBundleComponentAnalytics:F,shouldUseAlternativeTitleStyle:Z,hasImpressionTracking:!0,trackingNamespace:Q,isDotClickable:ee,hasCarouselSliderPagination:x,hasCarouselControl:re,hasControls:$,hasNavigationButtonVariation:N,hasToggleGridColor:pe,hasPadding:L,layout:ae,pos:ge,paginationStyle:G,buttonConfig:t,gridConfig:ie,hasBorderBottom:k},S.map(e=>{const t=ce(e);z&&e.url&&t.push(n.createElement(c,{aspectRatio:i,key:"cta-"+e.label,url:e.url},oe(p.ctaMessage,{groupName:e.label.toLocaleLowerCase()})));const o=t.filter(e=>{var t,i,n;return((null===(i=null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.image)||void 0===i?void 0:i.id)||(null===(n=null==e?void 0:e.props)||void 0===n?void 0:n.aspectRatio))&&e});return n.createElement(l,{key:e.label,name:e.label,url:e.url},o)})):null};f.propTypes={buttonConfig:o.object,copilotId:o.string,ctaCardAspectRatio:o.arrayOf(o.number),dangerousDek:o.string,dangerousHed:o.string,dropShipSellers:o.arrayOf(o.string),editor:o.object,expVariationName:o.string,gridConfig:o.object,groups:o.arrayOf(o.object),hasAtRetailerNameLowerCase:o.bool,hasBorder:o.bool,hasBorderBottom:o.bool,hasCarouselSliderPagination:o.bool,hasControls:o.bool,hasGridColumn:o.bool,hasImageGrid:o.bool,hasMarginTopAuto:o.bool,hasNavigationButtonVariation:o.bool,hasPadding:o.bool,hasPLPBrandNameContextTitle:o.bool,hasPLPCardNameDescriptionCore:o.bool,hasProductNewPriceColor:o.bool,hasProductPriceColor:o.bool,hasProductWhiteBackground:o.bool,hasToggleGridColor:o.bool,hasUnderlineHed:o.bool,isDotClickable:o.bool,isDropshipProduct:o.bool,isProductCardName:o.bool,isProductCardRetailerName:o.bool,layout:o.string,paginationStyle:o.string,priceFormatting:o.shape({fractionDigits:o.number,shouldFormatDecimalSeparator:o.bool}),sectionTitleVariation:o.string,shouldCheckProductInView:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldHideDangerousDek:o.bool,shouldHidePublishDate:o.bool,shouldRenderCtaCard:o.bool,shouldUseAlternativeTitleStyle:o.bool,shouldUseProductPriceSecondary:o.bool,showNewProductCardDesign:o.bool,showOfferUrl:o.bool,summaryItemVariation:o.string,trackingNamespace:o.shape({toggle:o.string,card:o.string})},f.displayName="VersoFilterableSummaryList",f.defaultProps={ctaCardAspectRatio:[2,1],dropShipSellers:[],hasAtRetailerNameLowerCase:!1,hasMarginTopAuto:!1,isDotClickable:!1,isDropshipProduct:!1,isProductCardRetailerName:!1,layout:"Carousel",sectionTitleVariation:"TextCenter",shouldEnableBundleComponentAnalytics:!1,shouldRenderCtaCard:!1,showNewProductCardDesign:!1,summaryItemVariation:"TextBelowLeft"},e.exports=f},1663:function(e,t,i){e.exports=i(1664)},1664:function(e,t,i){const n=i(0),o=i(1),{CTACardBody:a,CTACardContent:r,CTACardFooter:s,CTACardIcon:l,CTACardText:d,CTACardWrapper:c}=i(1665),p=({aspectRatio:e,children:t,url:i})=>n.createElement(c,{aspectRatio:e},n.createElement(r,null,n.createElement(a,null,n.createElement(d,{href:i},t)),n.createElement(s,null,n.createElement("a",{href:i},n.createElement(l,null)))));p.propTypes={aspectRatio:o.arrayOf(o.number),children:o.node.isRequired,url:o.string.isRequired},p.defaultProps={aspectRatio:[1,1]},e.exports=p},1665:function(e,t,i){const{default:n}=i(3),{BREAKPOINTS:o}=i(6),{calculateSpacing:a,getColorToken:r,getDecoration:s,minScreen:l}=i(4),{BaseLink:d}=i(10),c=i(123),p=n.div.withConfig({displayName:"CTACardWrapper"})`
  position: relative;
  border-radius: ${({theme:e})=>s(e,"cardRadiusSm")};
  background-color: ${r("colors.discovery.body.brand.background")};
  padding-top: ${({aspectRatio:e})=>e[1]/e[0]*100}%;

  ${l(o.md)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusMd")};
  }

  ${l(o.lg)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusLg")};
  }
`,g=n.div.withConfig({displayName:"CTACardContent"})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  padding: 0 ${a(3)} ${a(2)}
    ${a(3)};

  ${l(o.lg)} {
    padding: 0 ${a(5)} ${a(5)}
      ${a(5)};
  }
`,u=n.div.withConfig({displayName:"CTACardBody"})`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
`,m=n.div.withConfig({displayName:"CTACardFooter"})`
  height: ${a(6)};
`,h=n(d).withConfig({displayName:"CTACardText"})``;h.defaultProps={colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const y=n(c).withConfig({displayName:"CTACardIcon"})`
  border-radius: 50%;
  background-color: ${r("colors.discovery.body.brand.context-signature")};
  width: ${a(6)};
  height: ${a(6)};
  fill: ${r("colors.discovery.body.brand.context-texture")};
`;e.exports={CTACardBody:u,CTACardContent:g,CTACardFooter:m,CTACardIcon:y,CTACardText:h,CTACardWrapper:p}},1666:function(e,t,i){const{defineMessages:n}=i(2);e.exports=n({ctaMessage:{id:"VersoFilterableSummaryList.CTAMessage",defaultMessage:"See more {groupName} recipes",description:"Message to display in the CTACard"}})},1667:function(e,t,i){const{default:n}=i(3),{BREAKPOINTS:o}=i(6),{minScreen:a,calculateSpacing:r,minMaxScreen:s}=i(4),{cssVariablesGrid:l,applyGridSpacing:d}=i(17),{LabelText:c,ListWrapper:p}=i(130),{CarouselListItem:g}=i(47),{CarouselWrapper:u,ChipWrapper:m}=i(1517),h=n(i(1614)).withConfig({displayName:"FilterableSummaryList"})`
  margin: 0 auto;
  ${({hasToggleGridColor:e})=>!e&&`max-width:${o.fullBleed};\n  ${l()}`}
  ${({hasPadding:e})=>!e&&d("padding")}
  ${g}:first-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-left:${r(8)};\n      ${s(0,o.md)}\n      {  \n        padding-left:${r(3)};  \n      }`:"padding-left: 0;"}
  }
  ${g}:last-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-right:${r(8)};\n    ${s(0,o.md)}\n     { padding-right:${r(3)}; \n    }`:null}
  }
  ${a(o.xxl)} {
    ${m},
    ${u} {
      ${({hasToggleGridColor:e})=>!e&&"margin-left: revert;\n      margin-right: revert;"}
      ${c} ,
      ${p} {
        padding-right: revert;
        padding-left: revert;
      }
      ${g}:first-child {
        ${({hasPadding:e})=>!e&&"padding-left: revert;"}
      }
      ${g}:last-child {
        ${({hasPadding:e})=>!e&&"padding-right: revert;"}
      }
    }
  }
`;e.exports={FilterableSummaryList:h}},1751:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=t.AGE_GATE_COOKIE_KEY=t.AGE_GATE_ACCEPT=void 0,t.AGE_GATE_ACCEPT="accept",t.AGE_GATE_COOKIE_KEY="ageGate",t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=28},1752:function(e,t,i){e.exports=i(1753)},1753:function(e,t,i){const n=i(1),o=i(0),a=i(49),{PaywallInlineBarrierWrapper:r}=i(1754),{trackComponent:s}=i(5),l=function(e){o.useEffect(()=>{s("PaywallInlineBarrier")},[]);const{position:t,className:i}=e;return o.createElement(r,{className:i,"data-testid":"PaywallInlineBarrierWrapper"},o.createElement(a,{position:t,aria:{"aria-live":"polite"}}))};l.propTypes={className:n.string,position:n.string},l.defaultProps={position:"paywall-inline-barrier"},e.exports=l},1754:function(e,t,i){const{default:n}=i(3),o=n.aside.withConfig({displayName:"PaywallInlineBarrierWrapper"})`
  width: auto;
  height: auto;

  @media print {
    display: none;
  }
`;e.exports={PaywallInlineBarrierWrapper:o}},1755:function(e,t,i){const n=i(0),{useState:o}=i(0),a=i(1),r=i(181),{PaymentGateway:s}=i(23),{asConfiguredComponent:l}=i(9),{StickyMidContentAdWrapper:d}=i(265),c={"300x250":500,"300x100":400,"300x50":300,"320x50":300},p=e=>{const{isStickyEnabled:t}=Object.assign({},e),[i,a]=o(),l=e=>{a(e)},p=i&&2===i.length?`${i[0]}x${i[1]}`:"0x0";return t?n.createElement(d,{height:c[p],className:"ad-stickymidcontent"},n.createElement(s,{group:"ads"},n.createElement(r,Object.assign({position:"mid-content",handleAdSizeChange:l},e)))):n.createElement(s,{group:"ads"},n.createElement(r,Object.assign({position:"mid-content",handleAdSizeChange:l},e)))};p.propTypes={isStickyEnabled:a.bool},p.defaultProps={isStickyEnabled:!1},p.displayName="StickyMidContent",e.exports=l(p,"StickyMidContent")},1756:function(e,t,i){const n=i(1),o=i(0),{useIntl:a}=i(2),r=i(14),s=i(42),l=i(1757).default,{componentTracking:d}=i(13),{useOnAdFilled:c}=i(74),{asConfiguredComponent:p}=i(9),{trackComponent:g}=i(5),{SummaryCollectionSplitColumnsWrapper:u,SummaryCollectionSplitColumnsItems:m,SummaryCollectionSplitColumnsRecsWrapper:h,SummaryCollectionSplitColumnsItem:y}=i(1758),b=({className:e,dangerousHed:t,guideItem:i,hasBackgroundColor:n,hasBorderItem:s,hasExtraRubricSpace:p,hasLessBottomSpace:b,hasTighterBylineSpacing:f,itemHedTag:C,location:v,recommendedItems:S,recommendedItemCount:w,shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,shouldEnableBundleComponentAnalytics:T,summaryItemRubricVariation:E,trackingNamespace:N})=>{o.useEffect(()=>{g("SummaryCollectionSplitColumns")},[]);const{formatMessage:L}=a(),{items:B,recommendedType:I,recommendedClickout:P}=S,A=C||(t?"h3":"h2"),[D]=c("trending-ad");return o.createElement(u,{className:e,"data-testid":"SummaryCollectionSplitColumnsWrapper",hasBackgroundColor:n},o.createElement(m,{"data-testid":"SummaryCollectionSplitColumnsItems",showTrendingAd:D},o.createElement(h,null,o.createElement("p",null,L(l.recommendedTitle,{recommendedType:I})),B.slice(0,w).map((e,t)=>{const i=d.addDataSectionTitleAttribute(T,null==N?void 0:N.item,t);return o.createElement(o.Fragment,{key:t},o.createElement(y,Object.assign({},e,{analyticsDataAttribute:i,variation:"TextBelowImageLeftHasRuleWithDek",hasBorder:s,hedTag:A,key:t,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,hasLessBottomSpace:b,hasExtraRubricSpace:p})))}),P&&o.createElement(r.Utility,{label:L(l.viewAllButton,{location:v,recommendedType:I}),inputKind:"link",href:P})),o.createElement(y,Object.assign({},i[0],{image:i[0].lede,dangerousHed:v?L(l.guideItemHed,{location:v}):t,variation:"TextBelowImageLeftHedAndDek",hasBorder:s,hedTag:A,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideBylines:$,hasTighterBylineSpacing:f,hasLessBottomSpace:b,hasExtraRubricSpace:p}))))};b.propTypes={className:n.string,dangerousHed:n.string,guideItem:n.arrayOf(n.shape(s.propTypes)).isRequired,hasBackgroundColor:n.bool,hasBorderItem:n.bool,hasExtraRubricSpace:n.bool,hasLessBottomSpace:n.bool,hasTighterBylineSpacing:n.bool,itemHedTag:n.string,location:n.string,recommendedItemCount:n.number,recommendedItems:n.shape({items:n.arrayOf(n.shape(s.propTypes)),recommendedType:n.string,recommendedClickout:n.string}).isRequired,shouldAppendReadMoreLinkForDek:n.bool,shouldEnableBundleComponentAnalytics:n.bool,shouldHideBylines:n.bool,shouldHideDangerousDek:n.bool,summaryItemRubricVariation:n.string,trackingNamespace:n.object},b.defaultProps={hasBackgroundColor:!0,hasBorderItem:!0,hasExtraRubricSpace:!1,hasLessBottomSpace:!1,hasTighterBylineSpacing:!1,recommendedItemCount:2,shouldAppendReadMoreLinkForDek:!0,shouldHideBylines:!0,shouldHideDangerousDek:!1},b.displayName="SummaryCollectionSplitColumns",e.exports=p(b,"SummaryCollectionSplitColumns")},1757:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({viewAllButton:{id:"SummaryCollectionSplitColumns.ViewAllButton",defaultMessage:"View All {location} {recommendedType}",description:"button label for view all button"},guideItemHed:{id:"SummaryCollectionSplitColumns.GuideItemHed",defaultMessage:"{location} Travel Guide",description:"dangerousHed for guideItem"},recommendedTitle:{id:"SummaryCollectionSplitColumns.RecommendedTitle",defaultMessage:"Recommended {recommendedType}",description:"recommended title for recircs"}})},1758:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(0),{default:a}=i(3),{BylineWrapper:r,BylinePreamble:s,BylineName:l,BylineLink:d}=i(103),c=i(42),{GridItem:p}=i(25),g=i(19),{calculateSpacing:u,getColorToken:m,getColorStyles:h,getTypographyStyles:y,minScreen:b,styledProperty:f}=i(4),{BREAKPOINTS:C}=i(6),v=a.div.withConfig({displayName:"SummaryCollectionSplitColumnsWrapper"})`
  margin: ${u(4)} 0;
  background-color: ${({hasBackgroundColor:e})=>e?m("colors.discovery.body.light.background"):"transparent"};
`,S=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${b(C.md)}{\n      padding-bottom: ${u(2)};\n    }\n  }\n`,w=a(e=>{var{columnAmount:t,variation:i,shouldHideDangerousDek:a,hasExtraRubricSpace:r,hasLessBottomSpace:s,hasTighterBylineSpacing:l}=e,d=n(e,["columnAmount","variation","shouldHideDangerousDek","hasExtraRubricSpace","hasLessBottomSpace","hasTighterBylineSpacing"]);const p=c[i];return o.createElement(p,Object.assign({},d))}).withConfig({displayName:"SummaryCollectionSplitColumnsItem"})`
  ${v} & {
    padding-bottom: ${u(2)};

    ${b(C.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${y("typography.definitions.globalEditorial.context-primary")}
      display: block;
      color: ${m("colors.discovery.body.light.context-signature")};

      ${b(C.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>u(e?1:.5)};
      }
    }

    .summary-item__hed-link {
      color: ${m("colors.discovery.body.light.heading")};

      &::after {
        display: none;
      }
    }

    .summary-item__hed {
      ${y("typography.definitions.discovery.hed-bulletin-primary")}
      margin-bottom: 0;
    }

    .summary-item__dek {
      ${y("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${u(2)} 0 ${u(1)};
      color: ${m("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      padding-bottom: ${({hasLessBottomSpace:e})=>e?u(0):""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>u(e?1:2)};

      ${r},
      ${s},
      ${l},
      ${d} {
        ${y("typography.definitions.globalEditorial.accreditation-core")}
        color: ${m("colors.discovery.body.light.accreditation")};
      }

      ${d}:link {
        color: ${m("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${u(2)} 0 0 0;
    }

    ${f("hasBorder",!1,S)};
  }
`,k=a(g.ThreeUp).withConfig({displayName:"SummaryCollectionSplitColumnsItems"})`
  ${p} {
    grid-column: 1 / -1;
    margin-top: ${u(2)};
  }
  ${p}:first-of-type {
    margin: ${u(3)} 0;
    ${b(C.md)} {
      grid-column: span 7;
    }
  }
  ${p}:last-of-type {
    ${b(C.md)} {
      grid-column: span 5;
      margin: ${u(3)} 0;
    }
  }
`,x=a("div").withConfig({displayName:"SummaryCollectionSplitColumnsRecsWrapper"})`
  display: grid;
  grid-column-gap: ${u(3)};
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: ${u(2)};
  height: 100%;

  ${b(C.md)} {
    display: grid;
    grid-template-rows: 5% 75% 20%;
    grid-row-gap: ${u(1)};
    border-right: 1px solid;
    border-color: ${({theme:e})=>h(e,"border-color","colors.consumption.body.standard.divider")};
    padding-right: ${u(3)};
  }

  p {
    grid-column: span 6;
    grid-row: 1 / 1;
    align-self: center;
    margin: 0;
    ${({theme:e})=>y(e,"typography.definitions.foundation.link-primary")}
  }

  .summary-item {
    display: grid;
    grid-column-gap: 1rem;
    grid-column: span 6;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${b(C.sm)} {
      grid-template-columns: 1fr 1fr;
    }

    ${b(C.md)} {
      display: unset;
      grid-column: span 3;
      grid-row: 2 / 2;
    }
  }

  .button {
    grid-column: span 6;
    max-height: ${u(6)};
    ${b(C.md)} {
      grid-column: 2 / span 4;
      grid-row: 3;
    }
    ${b(C.lg)} {
      justify-self: center;
      padding: 0 ${u(6)};
    }
  }
`;e.exports={SummaryCollectionSplitColumnsWrapper:v,SummaryCollectionSplitColumnsItems:k,SummaryCollectionSplitColumnsRecsWrapper:x,SummaryCollectionSplitColumnsItem:w}},178:function(e,t,i){const n=i(8),o=i(1),a=i(0),{useIntl:r}=i(2),s=i(88),{storyVideoPosition:l}=i(234),d=i(231),c=i(235),p=i(11),g=i(21),{transformLegacySources:u}=i(93),m=i(164).default,{ContentHeaderLeadAsset:h,ContentHeaderResponsiveAsset:y,ContentHeaderLeadAssetContent:b,ContentHeaderLeadAssetCaption:f,ContentHeaderLeadAssetContentMedia:C,ContentHeaderLedeLightboxButton:v,ContentHeaderLeadRailAnchor:S,ContentHeaderLeadContentFullWidth:w,ContentHeaderLeadContentCaptionCredit:k,ContentHeaderLeadAssetAwards:x}=i(102),{useState:$,Fragment:T}=a,E="landscape",N="portrait",L=({awards:e,className:t,captionWidth:i,containerTheme:o,lede:p,mediaWidth:L,shouldRenderRailAnchor:B,showFullWidthLeadImage:I,socialIcons:P,hasLightboxButton:A,hasStaticPositionedAward:D,hasInvertedLedeBackground:R,hideLedeCaption:M})=>{const[O,H]=$((e=>{var t;const i=null===(t=null==e?void 0:e.masterAspectRatio)||void 0===t?void 0:t.split(":");return(null==e?void 0:e.restrictCropping)&&2===(null==i?void 0:i.length)&&Number(i[0])/Number(i[1])<=1?N:E})(p)),{formatMessage:_}=r(),W=({width:e,height:t})=>{e/t<=1&&H(N)},G=u(p),j="cnevideo"===p.modelName,F="gallery"===p.modelName,V="clip"===p.modelName,U=!M&&(p.caption&&p.caption.trim()||p.credit&&p.credit.trim()),z=a.createElement(f,{dangerousCaptionText:p.caption,dangerousCredit:p.credit,mediaWidth:L});return a.createElement(T,null,a.createElement(h,{className:n("lead-asset",t),mediaWidth:L,containerTheme:o,ledeContentType:p.contentType,ledeAssetOrientation:O,hasInvertedLedeBackground:R,"data-testid":"ContentHeaderLeadAsset"},a.createElement(b,null,a.createElement(C,{ledeContentType:p.contentType,showFullWidthLeadImage:I,mediaWidth:L,className:"lead-asset__content__"+p.contentType},!j&&!F&&!V&&a.createElement(T,null,e&&!D&&a.createElement(x,{awards:e,hasStaticPositionedAward:D}),a.createElement(y,Object.assign({},G,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"}))),j&&p.scriptEmbedUrl&&a.createElement(s,{shouldAutoplay:!0,scriptUrl:p.scriptEmbedUrl,shouldHaveTeaser:!0,videoEmbedPosition:l}),F&&a.createElement(d,Object.assign({},p,{showNoAdsFromParent:!0})),P&&a.createElement(g.Overlay,{links:P.links}),V&&a.createElement(y,Object.assign({},G,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"})),A&&a.createElement(v,{onClickHandler:()=>{document.querySelector(".responsive-image--expandable").click()},ButtonIcon:()=>a.createElement(c,null),hasEnableIcon:!0,btnStyle:"text",iconPosition:"before",inputKind:"button",isStaticText:!0,label:_(m.showAllPhotos),shouldRenderCaption:U}),U&&"fullbleed"!==i&&z,e&&D&&a.createElement(x,{awards:e,hasStaticPositionedAward:D}))),B&&a.createElement(S,{"data-testid":"ContentHeaderLeadRailAnchor"})),U&&"fullbleed"===i&&a.createElement(w,null,a.createElement(k,null,z)))};L.propTypes={awards:o.array,captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,containerTheme:o.oneOf(["standard","inverted","special"]),hasInvertedLedeBackground:o.bool,hasLightboxButton:o.bool,hasStaticPositionedAward:o.bool,hideLedeCaption:o.bool,lede:o.oneOfType([o.shape(p.propTypes),o.shape(s.propTypes)]).isRequired,mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),shouldRenderRailAnchor:o.bool,showFullWidthLeadImage:o.bool,socialIcons:o.shape(g.propTypes)},L.defaultProps={captionWidth:"standard",hasStaticPositionedAward:!1,hideLedeCaption:!1},e.exports=L,e.exports.transformLegacySources=u},179:function(e,t,i){const n=i(3).default,{BaseLink:o,BaseText:a}=i(10),{calculateSpacing:r,getLinkStyles:s,getTypographyStyles:l,getColorStyles:d,getInputFieldStyles:c}=i(4),p=i(32),g=n.div.withConfig({displayName:"GroupedNavigationWrapper"})`
  padding-top: ${r(4)};
  height: 100%;

  ${({hasFilter:e})=>e&&`padding-top: ${r(2)};`}

  .navigation__heading {
    ${({theme:e})=>l(e,"typography.definitions.foundation.title-primary")};
    margin: 0;
    line-height: normal;
    ${({theme:e})=>d(e,"color","colors.foundation.expanded-utility.nav-link.default")};
  }

  .navigation__list-item {
    white-space: normal;
  }

  .content-divider {
    display: block;
    margin-bottom: ${r(2)};
    border-bottom-width: ${r(.5)};
    border-bottom-style: solid;
    ${({theme:e})=>d(e,"border-bottom-color","colors.discovery.lead.secondary.accent")};
    padding-top: ${r(1)};
    width: ${r(2)};
  }

  .grouped-navigation__link {
    ${({theme:e})=>s(e,"colors.foundation.expanded-utility.nav-link.default","colors.foundation.expanded-utility.nav-link.hover","navigation")}

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,u=n.div.withConfig({displayName:"GroupedNavigationFilter"})`
  position: static;
  border-width: 0 0 1px;
  border-style: solid;
  ${({theme:e})=>d(e,"color","colors.discovery.body.white.divider")};
  width: calc(100% - 1.25rem);
  height: 60px;

  .icon {
    position: absolute;
    top: 10px;
    right: 0;
    pointer-events: none;
  }
`,m=n.div.withConfig({displayName:"GroupedNavigationFilterContent"})`
  position: relative;
`,h=n(a).withConfig({displayName:"GroupedNavigationFilterInput"})`
  ${({theme:e})=>c(e,"normal","background")};
  ${({theme:e})=>c(e,"normal","text")};
  border: none;
  width: 100%;
  height: ${r(6.2)};
`;h.defaultProps={as:"input",typeIdentity:"typography.definitions.foundation.link-secondary"};const y=n.div.withConfig({displayName:"GroupedNavigationContent"})`
  display: flex;
  height: 100%
    ${({hasFilter:e})=>e&&`\n      padding-top: ${r(4)};\n      height: calc(100% - 60px);\n  `};
`,b=n.div.withConfig({displayName:"GroupedNavigationLinks"})`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  max-height: 100vh;

  && li {
    padding-bottom: ${r(2)};

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,f=n(p.Vertical).withConfig({displayName:"GroupedNavigationGroup"})`
  padding-bottom: ${r(5)};
`,C=n.div.withConfig({displayName:"GroupedNavigationIndex"})`
  position: static;
  padding-right: ${r(1)};
  overflow-y: auto;
`,v=n(a).withConfig({displayName:"AtoZIndexWrapper"})`
  width: ${r(3)};
  text-align: center;
`;v.defaultProps={as:"nav"};const S=n(a).withConfig({displayName:"AtoZIndexList"})`
  margin-top: 0;
  padding: 0;
  list-style: none;
`;S.defaultProps={as:"ul"};const w=n(o).withConfig({displayName:"AtoZIndexLink"})`
  display: block;
  background: none;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
  width: 100%;
`;w.defaultProps={colorSecondaryLinkToken:"colors.foundation.expanded-utility.nav-link.hover",colorStaticLinkToken:"colors.foundation.expanded-utility.nav-link.default",colorToken:"colors.foundation.expanded-utility.nav-link.default",linkStyle:"navigation",typeToken:"typography.definitions.foundation.link-secondary"};const k=n(a).withConfig({displayName:"AtoZIndexText"})`
  margin: 0;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
`;k.defaultProps={as:"li",colorToken:"colors.foundation.expanded-utility.nav-link.default",typeIdentity:"typography.definitions.foundation.link-secondary"},e.exports={GroupedNavigationWrapper:g,GroupedNavigationFilter:u,GroupedNavigationFilterContent:m,GroupedNavigationFilterInput:h,GroupedNavigationContent:y,GroupedNavigationLinks:b,GroupedNavigationGroup:f,GroupedNavigationIndex:C,AtoZIndexWrapper:v,AtoZIndexList:S,AtoZIndexLink:w,AtoZIndexText:k}},1934:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1935);e.exports=n(o,"AgeGate")},1935:function(e,t,i){const n=i(0),o=i(1),{useIntl:a}=i(2),{trackComponent:r}=i(5),{HiddenCheckbox:s,Overlay:l,Title:d,Text:c,Logo:p,DefaultLogo:g,AgeGateButton:u}=i(1936),{AGE_GATE_ACCEPT:m,AGE_GATE_COOKIE_KEY:h}=i(1751),{hasContentWarnings:y,acceptAgeGatePrompt:b}=i(1937),{getCookie:f}=i(43),C=i(1938).default,v=({hed:e,dek:t,acceptLabel:i,declineLabel:o,logo:v,content:S,cookieExpirationInDays:w,brandContentWarnings:k})=>{n.useEffect(()=>{r("AgeGate")},[]);const{useState:x,useEffect:$}=n,{formatMessage:T}=a(),[E,N]=x(!1);if($(()=>{const e=!(f(h)===m)&&y({content:S,brandContentWarnings:k});N(e)},[S,k]),!E)return null;const L=null!=t?t:T(C.ageGateDekText);return n.createElement(n.Fragment,null,n.createElement(s,{id:"age-gate-check"}),n.createElement(l,{id:"age-gate-overlay",role:"dialog","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description"},v?n.createElement(p,{src:v,alt:e}):n.createElement(g,{width:96,height:96}),n.createElement(d,{as:"h2",id:"age-gate-title"},null!=e?e:T(C.ageGateHedText)),L&&n.createElement(c,{id:"age-gate-description"},L),n.createElement("label",{htmlFor:"age-gate-check",key:"age-gate-label-accept"},n.createElement(u,{inputKind:"link",onClickHandler:()=>((e,t)=>{e(!1),b(t)})(N,w),key:"age-gate-button-accept",dataAttrs:{"data-test-id":"age-gate-button-accept"},label:i||T(C.ageGateAcceptLabel)})),n.createElement(u,{href:"/",inputKind:"link",key:"age-gate-button-decline",dataAttrs:{"data-test-id":"age-gate-button-decline"},label:o||T(C.ageGateDeclineLabel)})))};v.displayName="AgeGate",v.propTypes={acceptLabel:o.string,brandContentWarnings:o.array,content:o.object.isRequired,cookieExpirationInDays:o.number,declineLabel:o.string,dek:o.string,hed:o.string,logo:o.string},v.defaultProps={brandContentWarnings:["sexual_content","drug_content","death_content","alcohol_content"]},e.exports=v},1936:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AgeGateButton=t.Text=t.Title=t.Logo=t.DefaultLogo=t.Overlay=t.HiddenCheckbox=void 0;const o=n(i(3)),a=i(16),r=i(4),s=n(i(111)),l=i(10),d=n(i(14));t.HiddenCheckbox=o.default.input.withConfig({displayName:"AgeGateCheckbox"})``,t.HiddenCheckbox.defaultProps={hidden:!0,type:"checkbox"},t.Overlay=o.default.div.withConfig({displayName:"AgeGateOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: ${r.getColorToken("colors.consumption.lead.inverted.background")};
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  text-align: center;

  ${t.HiddenCheckbox}:checked ~ & {
    display: none;
  }

  @media (min-width: ${a.minThresholds.lg}px) {
    padding: 0 10rem;
  }

  @media (min-width: ${a.minThresholds.xl}px) {
    padding: 0 20rem;
  }
`,t.DefaultLogo=o.default(s.default.AgeGate).withConfig({displayName:"AgeGateDefaultLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.heading")};
  width: 96px;
  height: 96px;

  path:first-of-type {
    fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.accent")};
  }
`,t.Logo=o.default.img.withConfig({displayName:"AgeGateLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  width: 96px;
  height: 96px;
`,t.Title=o.default(l.BaseText).withConfig({displayName:"AgeGateTitle"})`
  margin: 0 0 ${r.calculateSpacing(2)};

  & + label,
  & + button {
    margin-top: ${r.calculateSpacing(2)};
  }
`,t.Title.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.hed-bulletin"},t.Text=o.default(l.BaseText).withConfig({displayName:"AgeGateText"})`
  margin: 0 0 ${r.calculateSpacing(4)};
`,t.Text.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.description-core"},t.AgeGateButton=o.default(d.default.Primary).withConfig({as:"a",displayName:"AgeGateButton"})`
  margin: 0 0 ${r.calculateSpacing(2)};
`},1937:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.acceptAgeGatePrompt=t.hasContentWarnings=void 0;const n=i(1751),{createCookie:o}=i(43);t.hasContentWarnings=({content:e,brandContentWarnings:t}={})=>{const{contentWarnings:i}=e||{},n=null==t?void 0:t.some(e=>null==i?void 0:i.some(t=>t.slug===e));return Boolean(n)};t.acceptAgeGatePrompt=e=>{document.cookie=o(n.AGE_GATE_COOKIE_KEY,n.AGE_GATE_ACCEPT,{expirationInMs:864e5*(e||n.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS),path:"/"})}},1938:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({ageGateHedText:{id:"AgeGate.HedText",defaultMessage:"Are you 18 or over?",description:"Age Gate title"},ageGateDekText:{id:"AgeGate.DekText",defaultMessage:"This material is intended for people over the age of 18",description:"Age Gate description"},ageGateAcceptLabel:{id:"AgeGate.AcceptLabel",defaultMessage:"I am 18+",description:"Age Gate accept button label"},ageGateDeclineLabel:{id:"AgeGate.DeclineLabel",defaultMessage:"I'm under 18",description:"Age Gate decline button label"}})},1939:function(e,t,i){const{asConfiguredComponent:n}=i(9),{asVariation:o}=i(12),a=i(1940);a.WithAdRail=o(a,"WithAdRail",{adRail:!0}),a.OneColumn=o(a,"OneColumn",{adRail:!1}),a.OneColumnNarrow=o(a,"OneColumnNarrow",{adRail:!1,isNarrowContentWell:!0}),e.exports=n(a,"ChunkedArticleContent")},1940:function(e,t,i){const n=i(1),o=i(0),a=i(8),r=i(462),{getVariationNames:s}=i(12),l=i(19),{PaymentGateway:d}=i(23),c=i(58),p=i(1752),g=i(151),u=i(1941),{ArticlePageDisclaimer:m,ArticlePageChunksContent:h,ArticlePageChunks:y,ArticlePageDisclaimerGrid:b,PaywallInlineBarrierWithWrapperGrid:f}=i(1560),C=({body:e,hasProduct:t,linkList:i,isLinkStackEnabled:n,hasProductLisitingCarousel:r,isAffiliateLinksDisabled:s,hasTopSpacing:g,horizontalRuleStyle:C,interlude:v,multiChunkRailStrategy:S,shouldBlurText:w,shouldUsePersistentAd:k,singleChunkRailStrategy:x,variations:$,hideRecircMostPopular:T,recircMostPopular:E,showFirstRailRecirc:N,hideAutoDisclaimer:L,wordsToDisplay:B,hideAffiliateDisclaimer:I,hideProductDisclaimer:P,responsiveCartoonVariation:A,hasCartoonFullWidth:D,setCartoonLinkedGalleries:R})=>{const M=$&&$.adRail,O=a("article__body",{"article__body--grid-margins":!M}),H=M?l.NarrowContentWithWideAdRail:c,_=M?l.NarrowContentWithWideAdRail:l.WithMargins;return o.createElement(h,{isNarrowContentWell:$.isNarrowContentWell,shouldBlurText:w},(t||r)&&!s&&!L&&!I&&P&&o.createElement(b,{adRail:M,as:_},o.createElement(m,null)),o.createElement(y,{hasTopSpacing:g,horizontalRuleStyle:C,"data-testid":"ArticlePageChunks"},o.createElement(u,{jsonml:e,adRail:M,linkList:i,isLinkStackEnabled:n,multiChunkRailStrategy:S,interlude:v,FullBleedContentWrapper:H,GeneralContentWrapper:_,recircMostPopular:E,shouldUsePersistentAd:k,singleChunkRailStrategy:x,hideRecircMostPopular:T,showFirstRailRecirc:N,wordsToDisplay:B,hideAffiliateDisclaimer:I,responsiveCartoonVariation:A,hasCartoonFullWidth:D,setCartoonLinkedGalleries:R})),o.createElement(d,{group:"paywall"},o.createElement(e=>o.createElement(f,{adRail:M,as:_},o.createElement("div",{className:a("body","body__inline-barrier",O)},o.createElement("div",{className:"container container--body"},o.createElement("div",{className:"container--body-inner"},o.createElement(p,Object.assign({},e)))))),null)))};C.propTypes={body:n.array.isRequired,hasCartoonFullWidth:n.bool,hasProduct:n.bool,hasProductLisitingCarousel:n.bool,hasTopSpacing:n.bool,hideAffiliateDisclaimer:n.bool,hideAutoDisclaimer:n.bool,hideProductDisclaimer:n.bool,hideRecircMostPopular:n.bool,horizontalRuleStyle:n.oneOf(["thin"]),interlude:n.shape(Object.assign(Object.assign({},g.propTypes),{isRailEligible:n.boolean})),isAffiliateLinksDisabled:n.bool,isLinkStackEnabled:n.bool,linkList:n.object,multiChunkRailStrategy:n.oneOf(["alternate"]),recircMostPopular:n.array,responsiveCartoonVariation:n.oneOf(s(r)),setCartoonLinkedGalleries:n.func,shouldBlurText:n.bool,shouldUsePersistentAd:n.bool,showFirstRailRecirc:n.bool,singleChunkRailStrategy:n.oneOf(["split-in-three"]),variations:n.shape({adRail:n.bool,isNarrowContentWell:n.bool}),wordsToDisplay:n.number},C.defaultProps={hasCartoonFullWidth:!1,hasTopSpacing:!0,hideAutoDisclaimer:!1,isAffiliateLinksDisabled:!1,shouldBlurText:!1,variations:{}},C.displayName="ChunkedArticleContent",e.exports=C},1941:function(e,t,i){const n=i(0),o=i(1),a=i(82),{default:r}=i(162),{withRecircContextConsumer:s}=i(168),l=i(462),{getVariationNames:d}=i(12),c=i(38),p=i(1755),{PaymentGateway:g}=i(23),u=i(58),m=i(49),{InContent:h}=i(60),y=i(131),b=i(469),f=i(151),C=s(i(521)),v=i(1942),S=i(136),w=i(483),{showRecircMostPopular:k}=i(1944),x=i(260),{processLinks:$,processCeros:T,processTiktok:E,processSidebarHeadings:N}=i(268),{connectDomain:L}=i(18),B=L("payment"),I=L("featureFlags"),{shouldRenderNothing:P}=i(482),A=i(711),{ArticlePageChunksGrid:D}=i(1560),{ArticlePageSplitAdRail:R,ArticlePageSplitAdRailContent:M,ArticlePageSplitAdRailTop:O,ArticlePageSplitAdRailMiddle:H,ArticlePageSplitAdRailBottom:_,ArticlePageBodyGridContainer:W,LinkStackArticlePage:G}=i(1560);function j(){return n.createElement("div",null,n.createElement(m,{position:"article-mid-content",secondPosition:"in-content"}),n.createElement(h,null))}const F=new r({a:$,blockquote:({props:e})=>({type:b,props:e}),ceros:T,h2:N,tiktok:E,"cm-unit":()=>({type:j}),"inline-embed":x,"inline-recirc":e=>n.createElement(C,Object.assign({},e,{className:"article-inline-recirc-wrapper"})),"native-ad":e=>n.createElement(g,{group:"ads"},n.createElement(c,Object.assign({},e))),"inline-newsletter":e=>n.createElement(v,Object.assign({},e))});function V(e){return function(e){return Array.isArray(e)&&"string"==typeof e[0]}(e)&&e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1)}function U(e,t){return`${e}-${t}`}class z{constructor({adRail:e,GeneralContentWrapper:t=(()=>null),FullBleedContentWrapper:i=(()=>null),interlude:o,multiChunkRailStrategy:a,recircMostPopular:r,shouldRenderMidContent:s,shouldShowMostPopular:l,shouldUsePersistentAd:d,singleChunkRailStrategy:c,hideRecircMostPopular:p,showFirstRailRecirc:g,linkList:u,isLinkStackEnabled:m,responsiveCartoonVariation:h,hasCartoonFullWidth:y,setCartoonLinkedGalleries:b}={}){var C;this.isLinkStackEnabled=m,this.linkList=u,this.adRail=e,this.multiChunkRailStrategy=a,this.chunkCount=0,this.shouldRenderMidContent=s,this.shouldUsePersistentAd=d,this.GeneralContentWrapper=t,this.FullBleedContentWrapper=i,this.finalAdSet=!1,this.isSingleChunk=!1,this.singleChunkRailStrategy=c,this.interlude=(null===(C=null==o?void 0:o.strategy)||void 0===C?void 0:C.enabled)&&o.isRailEligible?n.createElement(f,Object.assign({},o,{isRightRail:!0})):null,this.interludeSet=!1,this.mostPopular=l&&!p&&n.createElement(w,{className:"article-recirc-most-popular-wrapper",items:r}),this.showFirstRailRecirc=g,this.responsiveCartoonVariation=h,this.hasCartoonFullWidth=y,this.setCartoonLinkedGalleries=b}determineAd(){if(this.shouldUsePersistentAd)return this.interludeSet=!0,this.persistentAd();const e=this.stickyAd(this.showFirstRailRecirc);return this.interludeSet=!0,e}showAds(e){if(1===this.chunkCount)return this.determineAd();if(!this.finalAdSet){const t=this.stickyAd(e);return this.interludeSet=!0,t}return null}getAdSlot(e){return n.createElement(n.Fragment,null,n.createElement(g,{group:"ads"},e,n.createElement(c,{position:"rail"})),n.createElement(g,{group:"consumer-marketing"},n.createElement(m,{position:"display-rail"})))}withStickyBox(e,t={}){return e&&n.createElement(y,Object.assign({},t),e)}renderSplitAdRail(){const e=this.withStickyBox(this.getAdSlot(null)),t=this.withStickyBox(this.mostPopular),i=this.withStickyBox(this.getAdSlot(null));return n.createElement(R,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{selector:".content-bottom-anchor",edge:"bottom"}},n.createElement(M,{className:"split-ad-rail-content"},n.createElement(O,null,e),this.showFirstRailRecirc&&n.createElement(H,{className:"split-ad-rail-middle"},t),n.createElement(_,{className:"split-ad-rail-bottom"},i)))}renderAdRail(e){return this.isSingleChunk&&"split-in-three"===this.singleChunkRailStrategy?this.renderSplitAdRail():this.showAds(e)}closeSmallGroup(e,t,i){if(e.length>0){++this.chunkCount;const o=this.GeneralContentWrapper;return t.concat([n.createElement(D,{adRail:this.adRail,as:o,key:U("small-group",i)},n.createElement(A,{className:"body__container article__body"},F.convert(["div",{className:"body__inner-container"},...e]),"final"===i&&this.isLinkStackEnabled&&n.createElement(G,Object.assign({},this.linkList))),this.adRail&&this.renderAdRail("final"!==i))])}return t}isMultiChunkRailStrategyAlternate(){return"alternate"===this.multiChunkRailStrategy}shouldRenderAd(){return!this.isMultiChunkRailStrategyAlternate()||this.chunkCount%2==1}shouldRenderMostPopular(e){return this.isMultiChunkRailStrategyAlternate()&&e?this.chunkCount%2==0:e}getChunkAdRailContent(e,t){return n.createElement(n.Fragment,null,(this.shouldRenderAd()||!t)&&this.getAdSlot(e),this.shouldRenderMostPopular(t)&&this.mostPopular)}injectInlineRecirc(e){let t=0,i=0;return e.reduce((n,o,a)=>this.isParagraph(o)?(t++,this.isParagraph(e[a+1])&&this.shouldInsertRecirc(t,i)?(t=0,n.concat([o,["inline-recirc",{reelId:++i}]])):n.concat([o])):n.concat([o]),[])}isParagraph(e){return e&&"p"===e[0]}persistentAd(){return n.createElement(S,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{edge:"bottom"}},this.getChunkAdRailContent(this.interlude,this.showFirstRailRecirc))}shouldInsertRecirc(e,t){return e>=(0===t?5:8)}stickyAd(e){const t=!this.interludeSet&&this.interlude,i=this.getChunkAdRailContent(t,e);return n.createElement(n.Fragment,null,this.withStickyBox(i,{isExpanded:!!t}))}wrapInFullSizeContainer(e,t,i){const o=this.FullBleedContentWrapper;return t.concat([n.createElement(o,{key:U("full",i)},n.createElement(W,{className:"body__grid-container",as:A,shouldDisableMaxWidth:!0,shouldEnableDataJourneyHook:!1},F.convert(e)))])}visit(e){let t=V(e),i=[],o=[];this.isSingleChunk=!t.some(e=>"ad"===e[0]),this.finalAdSet=!1;return t.filter(this.isParagraph).length>10&&(t=this.injectInlineRecirc(t)),t.forEach((e,t)=>{var a,r,s,l;const[d,c,g]=e;if("ad"===d)this.shouldRenderMidContent&&(i=this.closeSmallGroup(o,i,t),o=[],i=i.concat([n.createElement(u,{className:"full-bleed-ad row-mid-content-ad",key:U("ad",t)},n.createElement(p,{shouldDisplayLabel:!0,shouldHoldSpace:!0}))]));else if(!this.adRail&&function(e){const t=e[0],i=e[1]||{},n="inline-embed"===t&&"callout:feature-large"===i.type,o="inline-embed"===t&&"callout:feature-medium"===i.type;return n||o||"ad"===t}(e))i=this.closeSmallGroup(o,i,t),o=[],i=this.wrapInFullSizeContainer(e,i,t);else if("inline-embed"===d&&(null===(r=null===(a=null==c?void 0:c.props)||void 0===a?void 0:a.childTypes)||void 0===r?void 0:r.includes("cartoon"))&&(null==g?void 0:g.length)){const t=g[1];t.props.image.responsiveCartoonVariation=this.responsiveCartoonVariation,t.props.image.setCartoonLinkedGalleries=this.setCartoonLinkedGalleries,o=this.hasCartoonFullWidth?o.concat([g]):o.concat([e])}else if("inline-embed"===d&&"cartoon"===(null===(l=null===(s=null==c?void 0:c.props)||void 0===s?void 0:s.image)||void 0===l?void 0:l.contentType)&&(null==e?void 0:e.length)){const t=e[1];t.props.image.responsiveCartoonVariation=this.responsiveCartoonVariation,t.props.image.setCartoonLinkedGalleries=this.setCartoonLinkedGalleries,o=o.concat([e])}else o=o.concat([e])}),i=this.closeSmallGroup(o,i,"final"),this.finalAdSet=!0,i}}function q({adRail:e,FullBleedContentWrapper:t,featureFlags:i,GeneralContentWrapper:o,interlude:a,jsonml:r,multiChunkRailStrategy:s,payment:l,recircMostPopular:d,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u,wordsToDisplay:m,linkList:h,isLinkStackEnabled:y,responsiveCartoonVariation:b,hasCartoonFullWidth:f,setCartoonLinkedGalleries:C}){n.useEffect(()=>{const e=document.querySelector(".split-ad-rail-content"),t=document.querySelector(".split-ad-rail-middle"),i=document.querySelector(".split-ad-rail-bottom");if(e&&t&&i){const n=new IntersectionObserver((e=>t=>{const[i]=t;i.intersectionRatio<e&&i.target.remove()})(.95),{root:e,threshold:.95});return n.observe(t),n.observe(i),()=>{n.disconnect()}}return()=>{}});const v=!P("ads",l,i),S=k(r,m);return new z({adRail:e,FullBleedContentWrapper:t,GeneralContentWrapper:o,interlude:a,multiChunkRailStrategy:s,recircMostPopular:d,shouldRenderMidContent:v,linkList:h,isLinkStackEnabled:y,shouldShowMostPopular:S,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u,responsiveCartoonVariation:b,hasCartoonFullWidth:f,setCartoonLinkedGalleries:C}).visit(r)}q.defaultProps={hasCartoonFullWidth:!1,multiChunkRailStrategy:"default",singleChunkRailStrategy:"default"},q.propTypes={adRail:o.bool,featureFlags:o.object,FullBleedContentWrapper:o.func,GeneralContentWrapper:o.func,hasCartoonFullWidth:o.bool,hideRecircMostPopular:o.bool,interlude:o.shape(Object.assign(Object.assign({},f.propTypes),{isRailEligible:o.boolean})),jsonml:o.array.isRequired,multiChunkRailStrategy:o.oneOf(["default","alternate"]),payment:o.object,recircMostPopular:o.array,responsiveCartoonVariation:o.oneOf(d(l)),shouldUsePersistentAd:o.bool,showFirstRailRecirc:o.bool,singleChunkRailStrategy:o.oneOf(["default","split-in-three"]),wordsToDisplay:o.number},e.exports=n.memo(B(I(q)),(function(e,t){return a(e,t)})),e.exports.Chunks=q},1942:function(e,t,i){const n=i(1943),{asConfiguredComponent:o}=i(9);e.exports=o(n,"SlimNewsletterWrapper")},1943:function(e,t,i){const n=i(0),{googleAnalytics:o}=i(13),{connector:a}=i(18),r=i(468),{getNewsletterSubscriptions:s}=i(493);class l extends n.Component{constructor(e){super(e),this.fetchNewsletterSubscriptions=async e=>{try{const t=await s(e);if(200===t.status)return t.newsletterSubscriptions&&t.newsletterSubscriptions.data}catch(e){console.log(e)}return{}},this.state={}}async componentDidMount(){let e,t;const i=this.props.newsletters&&this.props.newsletters.map(e=>e.newsletterId)||[];if(document){e="nl"===new URLSearchParams(document.location.search).get("utm_source")}const{user:n,userPlatform:a}=this.props,{userPlatformProxy:r,xClientID:s}=a||{};if(n.isAuthenticated){const e={amgUUID:n.amguuid,newsletterIds:i,userPlatformProxy:r,xClientID:s,provider:"sailthru"},o=(await this.fetchNewsletterSubscriptions(e)).filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);t=i.find(e=>!o.includes(e))}else t=i[0];this.props.isNewsletterSlim&&!e&&t&&o.emitGoogleTrackingEvent("newsletter-loaded-inlineslim",{newslettterId:t}),this.setState(Object.assign(Object.assign({},this.state),{isSourceNewsletter:e,newsletterToShow:t}))}render(){let e;const{isNewsletterSlim:t,isNewsletterAggressive:i,hasSlimAlternateStyle:o,newsletterType:a,patternType:s,showToggleForLoggedInUser:l,user:d}=this.props;("aggressive-newsletter"===a&&i||"slim-newsletter"===a&&t)&&(e=!0);const{isSourceNewsletter:c,newsletterToShow:p}=this.state,g=this.props.newsletters&&this.props.newsletters.find(e=>e.newsletterId===p);return!c&&e&&g?n.createElement(r,Object.assign({},g,{enableSlimUnitToggle:l&&(null==d?void 0:d.isAuthenticated)&&(null==d?void 0:d.email),hasSlimAlternateStyle:o,newsletterType:a,patternType:s,userEmail:(null==d?void 0:d.isAuthenticated)&&(null==d?void 0:d.email)})):null}}l.propTypes=r.propTypes,l.defaultProps=r.defaultProps,l.displayName="SlimNewsletterWrapper",e.exports=a(l,{keysToPluck:["user","userPlatform"]})},1944:function(e,t,i){const{showRecircMostPopular:n}=i(1945);e.exports={showRecircMostPopular:n}},1945:function(e,t){const i=(e=[])=>Array.isArray(e)&&e.reduce((e,t,n)=>Array.isArray(t)&&t.length>1?e+i(t):"string"==typeof t&&0!==n?e+t.trim().replace(/\s+/gi," ").split(" ").length:e,0);e.exports={showRecircMostPopular:(e,t)=>i(e)>(t||200)}},1946:function(e,t,i){const n=i(22),o=i(1947),a=i(1948),r=i(1949),{connectDomain:s}=i(18),{withIncognitoDetection:l}=i(186),d=s("user"),c=s("paywall"),p=n([d,s("payment"),c,l]);e.exports={PaywallCollaborator:p(o),withArticleTruncation:a,withGalleryTruncation:r}},1947:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(1),a=i(0),r=i(514),s=i(515),{trackComponent:l}=i(5),d=e=>{a.useEffect(()=>{l("PaywallCollaborator")},[]);const{component:t,name:i,paywall:o}=e,d=n(e,["component","name","paywall"]),c=r[o.strategy],p=o.strategy&&c,g=c&&c.names.includes(i);return p&&g?a.createElement(t,Object.assign({},s.execute(c,e))):a.createElement(t,Object.assign({},d))};d.propTypes={component:o.func.isRequired,name:o.string.isRequired,payment:o.object.isRequired,paywall:o.object.isRequired},e.exports=d},1948:function(e,t,i){const n=i(1),o=i(0);e.exports=(e,t)=>{const i=e.displayName||e.name,a=e=>"object"==typeof e&&"p"===e[0],r=(e,t)=>e.filter((i,n)=>((e,t)=>e.slice(0,t).filter(a).length)(e,n)<t),s=i=>{const{[t]:n,shouldTruncate:a,paywall:{gateway:s={},paragraphLimit:l}={}}=i,d=n&&(s.shouldTruncate||a)&&(s.paragraphLimit>=0||l>=0);return o.createElement(e,Object.assign({},i,{[t]:d?r(n,s.paragraphLimit||l):n}))};return s.propTypes={[t]:n.array.isRequired,paywall:n.shape({gateway:n.shape({paragraphLimit:n.number,shouldTruncate:n.bool}),paragraphLimit:n.number}),shouldTruncate:n.bool},s.displayName=`withArticleTruncation(${i})`,s}},1949:function(e,t,i){const n=i(1),o=i(0);e.exports=(e,t)=>{const i=e.displayName||e.name,a=(e,t)=>e.map(i=>i.filter(i=>((e,t)=>e.flat().indexOf(t))(e,i)<t)).filter((e,t)=>e.length>0||0===t),r=i=>{const{[t]:n,shouldTruncate:r,paywall:{gateway:s={},gallerySlideLimit:l}={}}=i,d=n&&(s.shouldTruncate||r)&&(s.gallerySlideLimit>=0||l>=0);return o.createElement(e,Object.assign({},i,{[t]:d?a(n,s.gallerySlideLimit||l):n}))};return r.propTypes={[t]:n.array.isRequired,paywall:n.shape({gateway:n.shape({gallerySlideLimit:n.number,shouldTruncate:n.bool}),gallerySlideLimit:n.number}).isRequired,shouldTruncate:n.bool},r.displayName=`withGalleryTruncation(${i})`,r}},1950:function(e,t,i){e.exports={BeopScript:i(1951)}},1951:function(e,t,i){const n=i(0),o=i(1),{trackComponent:a}=i(5),r=({accountId:e})=>(n.useEffect(()=>{a("BeopScript")},[]),n.createElement(n.Fragment,null,n.createElement("script",{id:"beop-script",type:"text/javascript",dangerouslySetInnerHTML:{__html:`window.beOpAsyncInit = function () {\n                      window.BeOpSDK.init({\n                        account: '${e}'\n                      });\n                      window.BeOpSDK.watch();\n                  };`}}),n.createElement("script",{id:"beop-sdk",async:!0,src:"https://widget.beop.io/sdk.js"})));r.propTypes={accountId:o.string.isRequired},e.exports=r},1952:function(e,t,i){e.exports=i(1953)},1953:function(e,t,i){const n=i(1756);e.exports=n},1954:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1955);e.exports=n(o,"GenericSlider")},1955:function(e,t,i){const n=i(0),o=i(1),a=i(111),r=i(11),s=i(462),{getVariationNames:l}=i(12),{SliderWrapper:d,SliderTitle:c,TitleWrapper:p,Suggestion:g,SlidesWrapper:u,Slides:m,RightArrow:h,LeftArrow:y,PreviousSlide:b,NextSlide:f,ActiveSlide:C,ActiveSlideWrapper:v,SliderCount:S,SmallScreenView:w}=i(1956),k=({items:e,nextSuggestion:t,responsiveCartoonVariation:i,showPublishedDate:o,sliderNavIcon:s,title:l})=>{const[k,x]=n.useState([]),[$,T]=n.useState(0),[E,N]=n.useState(null),[L,B]=n.useState(null),[I,P]=n.useState(e[$]),[A,D]=n.useState(!1),[R,M]=n.useState(!1);n.useEffect(()=>{let t=[];e.length&&(t=((e,t,i)=>{const o=[];return e.forEach(e=>{switch(e.contentType){case"cartoon":case"photo":o.push(n.createElement(r,Object.assign({key:e.id},e.image||e,{showPublishedDate:i,responsiveCartoonVariation:t})))}}),o})(e,i,o),x(t),P(t[0]),t.length>1&&N(t[1]))},[e]),n.useEffect(()=>{R&&(P(k[$]),N(k[$+1]),B(k[$-1]))},[R,$,k]);return k.length?n.createElement(d,null,n.createElement(c,null,n.createElement(p,null,l),n.createElement(g,null,t)),n.createElement(u,null,n.createElement(m,{startFadeOut:A,startFadeIn:R},n.createElement(b,null,$>0&&L),n.createElement(y,{label:"Left",isIconButton:!0,ButtonIcon:a[s],onClickHandler:()=>{T($-1),M(!1),D(!0)},btnStyle:"text",isShown:k.length>1&&$>0}),n.createElement(v,{slideNo:$},n.createElement(C,{onAnimationEnd:()=>{M(!0),D(!1)}},I),n.createElement(S,null,`${$+1}/${k.length}`)),n.createElement(h,{label:"Right",isIconButton:!0,ButtonIcon:a[s],onClickHandler:()=>{T($+1),M(!1),D(!0)},btnStyle:"text",isShown:k.length>1&&$+1<k.length}),n.createElement(f,null,$+1<k.length&&E))),n.createElement(w,null,k.map((e,t)=>n.createElement("li",{key:t},e)))):null};k.propTypes={items:o.array.isRequired,nextSuggestion:o.oneOfType([o.string,o.object]),responsiveCartoonVariation:o.oneOf(l(s)),showPublishedDate:o.bool,sliderNavIcon:o.string,title:o.string},k.defaultProps={nextSuggestion:"",sliderNavIcon:"Arrow",title:""},e.exports=k},1956:function(e,t,i){const{default:n,css:o,keyframes:a}=i(3),{minScreen:r,maxScreen:s,calculateSpacing:l,getTypographyStyles:d,getColorToken:c}=i(4),{BREAKPOINTS:p}=i(6),{maxThresholds:g}=i(16),{BaseText:u}=i(10),m=i(14),{ButtonIconWrapper:h}=i(29),{ResponsiveImageContainer:y,ResponsiveImagePicture:b}=i(24),f=i(19),{GridItem:C}=i(25),{SpanWrapper:v}=i(84),{ResponsiveCartoonWrapper:S,ResponsiveCartoonCredit:w,ResponsiveCartoonCaption:k,ResponsiveCartoonCTA:x}=i(237),$=a`
  from {
    opacity: .2;
  }

  to {
    opacity: 0;
  }
`,T=a`
  from {
    opacity: 0;
  }

  to {
    opacity: .2;
  }
`,E=a`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,N=a`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,L=n.h2.withConfig({displayName:"SliderTitle"})`
  position: relative;
  margin: 0;
  text-align: center;
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.context-primary")}

  ${s(g.lg+"px")} {
    display: flex;
    position: absolute;
    top: ${l(.5)};
    right: 0;
    left: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: ${l(5)};
  }
`,B=n.span.withConfig({displayName:"TitleWrapper"})`
  ${s(g.lg+"px")} {
    display: inline-block;
    width: ${l(24.75)};
  }
`,I=n.span.withConfig({displayName:"Suggestion"})`
  position: absolute;
  right: ${l(8)};

  a {
    ${({theme:e})=>d(e,"typography.definitions.foundation.link-primary")}
  }
  ${s(g.lg+"px")} {
    display: none;
  }
`,P=n(m).withConfig({displayName:"RightArrow"})`
  display: none;
  cursor: pointer;
  padding: 0;
  width: ${l(7.5)};
  ${({isShown:e})=>e&&"display: block;"}

  ${h} {
    transform: translateX(0);
    transition: transform 0.3s ease;
  }

  ${h}:hover {
    transform: translateX(${l(1)});
  }
`,A=n(P).withConfig({displayName:"LeftArrow"})`
  transform: rotate(180deg);
  ${({isShown:e})=>e&&"display: block;"}
  padding: 0;
`,D=n.div.withConfig({displayName:"Slide"})`
  position: relative;
  opacity: 0.3;
`,R=n(D).withConfig({displayName:"PreviousSlide"})`
  margin: auto;
`,M=n(D).withConfig({displayName:"NextSlide"})`
  margin: auto;
`,O=n.div.withConfig({displayName:"ActiveSlideWrapper"})`
  position: relative;
  margin: auto;
`,H=n.div.withConfig({displayName:"ActiveSlide"})`
  top: 0;

  ${b} {
    cursor: zoom-in;
  }

  ${S} {
    border: none;
  }
`,_=n.div.withConfig({displayName:"SlidesWrapper"})`
  ${s(g.lg+"px")} {
    display: none;
  }
`,W=o`
  ${v} {
    grid-template-rows: 1fr auto auto;
    height: 100%;
    max-height: 100%;
  }

  ${S} {
    padding: 0;
    height: 100%;
    max-height: 100%;

    .responsive-cartoon__caption,
    .responsive-cartoon__credit {
      overflow: hidden;
    }
    ${b} {
      text-align: center;
    }

    ${y} {
      height: 100%;
      max-height: ${l(40.5)};
      object-fit: cover;
    }
  }
`,G=n(f.NoMarginsFullBleed).withConfig({displayName:"Slides"})`
  position: relative;
  padding-top: ${l(13)};
  ${C}:nth-child(1) {
    grid-column: 1/1;
    ${D} {
      height: 100%;
      ${W};

      ${b} {
        height: 100%;
      }

      ${y} {
        object-position: right;
      }
    }
  }
  ${C}:nth-child(2) {
    display: flex;
    grid-column: 2/2;
    align-self: center;
    justify-content: end;
    min-height: ${l(57.5)};
  }
  ${C}:nth-child(3) {
    grid-column: 4/10;
    ${W};
  }
  ${C}:nth-child(4) {
    display: flex;
    grid-column: 11/11;
    align-self: center;
    justify-content: start;
    min-height: ${l(57.5)};
  }
  ${C}:nth-child(5) {
    grid-column: 12/12;
    ${D} {
      height: 100%;
      ${W};

      ${b} {
        height: 100%;
      }
    }
  }
  ${H} {
    ${({startFadeOut:e,startFadeIn:t})=>e?o`
          animation: ${E} ease-in-out 300ms;
        `:t?o`
          animation: ${N} ease-in-out 300ms;
        `:""};
  }
  ${R}, ${M} {
    ${w},
    ${k},
    ${x} {
      display: none;
    }
    ${({startFadeOut:e,startFadeIn:t})=>e?o`
          animation: ${$} ease-in-out 300ms;
        `:t?o`
          animation: ${T} ease-in-out 300ms;
        `:""};
  }
`,j=n(u).withConfig({displayName:"SliderCount"})`
  position: absolute;
  top: 0;
  right: ${"-"+l(6.25)};
  border: 1px solid
    ${({theme:e})=>c(e,"colors.interactive.base.light")};
  border-radius: ${l(10)};
  padding: ${l(1)};
  width: ${l(6.25)};
  text-align: center;
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.numerical-small")};
`,F=n.ul.withConfig({displayName:"SmallScreenView"})`
  margin: 0;
  padding: 0 ${l(5)};
  list-style: none;

  li {
    border-bottom: 1px solid
      ${({theme:e})=>c(e,"colors.interactive.base.light")};
    padding: ${l(7)} 0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    ${S} {
      border: none;
      padding: 0;
    }
  }
  ${r(p.lg)} {
    display: none;
  }
`,V=n.div.withConfig({displayName:"SliderWrapper"})`
  position: relative;
  padding: 0;
`;e.exports={SliderWrapper:V,SliderTitle:L,SlidesWrapper:_,TitleWrapper:B,Slides:G,Suggestion:I,RightArrow:P,LeftArrow:A,PreviousSlide:R,NextSlide:M,ActiveSlide:H,ActiveSlideWrapper:O,SliderCount:j,SmallScreenView:F}},241:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(254);e.exports=n(o,"ToggleChip")},247:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(264);e.exports=n(o,"ToggleChipList")},254:function(e,t,i){const n=i(1),o=i(0),{useRef:a,useState:r}=i(0),{trackComponent:s}=i(5),{asThemedComponent:l}=i(30),d=i(33),{ToggleButton:c}=i(255),p=({analyticsDataAttribute:e,children:t,fullPageTheme:i,isAnchorUrl:n,isChecked:l,onChange:p,redirectUrl:g,role:u,shouldDefaultChecked:m,shouldDisplaySingleChip:h,shouldUrlRedirect:y})=>{o.useEffect(()=>{s("ToggleChip")},[]);const{current:b}=a(void 0!==l),[f,C]=r(m),v=b?l:f,[S,w]=r(v);return o.createElement(c,Object.assign({},e,{as:g?"a":"button",href:g||void 0,role:u||"switch","aria-checked":h?S:v,onClick:e=>(e=>{let i,o;if(h?w(e=>(o=!e,!e)):i=!v,b||C(i),p){const e=new CustomEvent("change",{detail:{checked:o||i}});p(e)}if(n){const e="#"+t.toString().toLowerCase();window.history.replaceState(void 0,void 0,e)}y||e.preventDefault()})(e),fullPageTheme:i}),h&&S&&o.createElement(d,null),t)};p.propTypes={analyticsDataAttribute:n.object,children:n.node.isRequired,fullPageTheme:n.oneOf(["standard","inverted"]),isAnchorUrl:n.bool,isChecked:n.bool,onChange:n.func,redirectUrl:n.string,role:n.string,shouldDefaultChecked:n.bool,shouldDisplaySingleChip:n.bool,shouldUrlRedirect:n.bool},p.defaultProps={isAnchorUrl:!1,isChecked:void 0,onChange:()=>{},shouldDefaultChecked:!1,shouldDisplaySingleChip:!1,shouldUrlRedirect:!0},e.exports=l(p)},255:function(e,t,i){const n=i(3).default,{calculateSpacing:o,getColorStyles:a,getColorToken:r,getTypographyStyles:s}=i(4),l=n.button.withConfig({displayName:"ToggleButton"})`
  display: inline-block;
  border-radius: ${o(3)};
  cursor: pointer;
  padding: ${o(1)} ${o(3)};
  text-decoration: none;
  white-space: nowrap;

  .icon {
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
    fill: ${r("colors.interactive.base.white")};
    margin-left: ${o(-2)};
    width: ${o(4)};
    height: ${o(2)};
    vertical-align: middle;

    &:hover {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.tags")};

  &[aria-checked='false'] {
    /* TODO support rgba in getColorStyles  */
    transition: background-color 0.25s, color 0.25s;
    background-color: rgba(
      ${r("colors.interactive.base.black",{rgbOnly:!0})},
      0.1
    );
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
  }

  &[aria-checked='true'] {
    transition: background-color 0.25s, color 0.25s;
    text-decoration: none;
    ${({theme:e})=>a(e,"background-color","colors.interactive.base.black")};
    ${({theme:e})=>a(e,"color","colors.interactive.base.white")};

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    /* TODO support this in getColorStyles  */
    box-shadow: 0 0 0 1px ${r("colors.interactive.base.black")}
      inset;
    text-decoration: none;

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?`\n\n      border: 1px solid;\n      ${a(t,"border-color","colors.discovery.body.white.border")};\n\n      &[aria-checked='false'] {\n        &:hover{\n          ${a(t,"background-color","colors.interactive.base.white")};\n          ${a(t,"color","colors.interactive.base.black")};\n        }\n        ${a(t,"background-color","colors.interactive.base.black")};\n        ${a(t,"color","colors.interactive.base.white")};\n      }\n\n      &[aria-checked='true'] {\n        ${a(t,"background-color","colors.interactive.base.white")};\n        ${a(t,"color","colors.interactive.base.black")};\n      }\n\n      &:hover,\n      &:focus {\n        box-shadow: none;\n      }\n    `:""}
`;e.exports={ToggleButton:l}},263:function(e,t,i){e.exports={Circle:i(271),Vogue:i(434)}},264:function(e,t,i){const n=i(1),o=i(0),{ToggleChipListWrapper:a,LabelText:r,ListWrapper:s,ListItemWrapper:l,HelperText:d}=i(130),{trackComponent:c}=i(5),{asThemedComponent:p}=i(30),g=({label:e,children:t,contentAlign:i,fullPageTheme:n,hasNoHorizontalScroll:p,isReadViewShopViewEnabled:g,hasIncreasedBottomMargin:u,hasLargeLabel:m,hasSpacing:h,hasToggleGridColor:y,helper:b,layout:f})=>(o.useEffect(()=>{c("ToggleChipList")},[]),o.createElement(a,{contentAlign:i,hasToggleGridColor:y},e&&o.createElement(r,{fullPageTheme:n,hasIncreasedBottomMargin:u,hasLargeLabel:m},e),o.createElement(s,{contentAlign:i,layout:f,isReadViewShopViewEnabled:g,hasNoHorizontalScroll:p,hasToggleGridColor:y,className:"list-wrapper"},o.Children.map(t,(e,t)=>e?o.createElement(l,{contentAlign:i,key:t,layout:f,hasSpacing:h,className:"list-item-wrapper"},e):null)),b&&o.createElement(d,null,b)));g.propTypes={children:n.array.isRequired,contentAlign:n.oneOf(["left","center","right"]),fullPageTheme:n.oneOf(["standard","inverted"]),hasIncreasedBottomMargin:n.bool,hasLargeLabel:n.bool,hasNoHorizontalScroll:n.bool,hasSpacing:n.bool,hasToggleGridColor:n.bool,helper:n.string,isReadViewShopViewEnabled:n.bool,label:n.string,layout:n.oneOf(["wrap","nowrap"])},g.defaultProps={contentAlign:"left",hasIncreasedBottomMargin:!1,hasLargeLabel:!1,hasNoHorizontalScroll:!1,hasSpacing:!1,layout:"wrap"},e.exports=p(g)},2642:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(i(2643));n(i(152)).default(o.default)},2643:function(e,t,i){const n=i(2644),{asConfiguredComponent:o}=i(9);e.exports=o(n,"ArticlePage")},2644:function(e,t,i){const n=i(8),o=i(180),a=i(15),r=i(44),s=i(1),l=i(0),{injectIntl:d}=i(2),c=i(2645).default,p=i(462),{getVariationNames:g}=i(12),{I18nProvider:u}=i(528),m=i(1934),h=i(1570),y=i(2646),b=i(1939),{connector:f}=i(18),C=i(442),v=i(1479),{googleAnalytics:S}=i(13),w=i(19),{PaywallCollaborator:k,withArticleTruncation:x}=i(1946),{InlineBarrier:$}=i(60),T=i(2648),E=i(1657),N=i(151),{withLightbox:L}=i(1429),B=i(58),{Disclaimer:I}=i(97),{BeopScript:P}=i(1950),{trackComponent:A}=i(5);const D=i(2652),R=i(447),M=i(1484),O=i(468),H=i(2656),{asConfiguredComponent:_}=i(9),W=i(492),G=i(1952),j=i(443),{getNewsletterSubscriptions:F}=i(493),{ArticlePageBase:V,ArticlePageGlobalStyle:U,ArticlePageLedeBackground:z,ArticlePageContentBackGround:q,ArticlePageBodyMobileTruncatedBtn:K,ArticlePageContentFooterGrid:Z,ContentWrapperGrid:X}=i(1560),Y=i(1661),{MultiPackageRow:J}=i(1584),{getOverrideBehaviour:Q}=i(436),ee=i(2658),te=i(1954),{BaseLink:ie}=i(10);class ne extends l.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),S.emitUniqueGoogleTrackingEvent("article-read-more")},this.setCartoonLinkedGalleries=(e,t)=>{this.setState({sliderData:e},()=>{t(!0)})},this.fetchNewsletterSubscriptions=async e=>{try{const t=await F(e);if(200===t.status){const e=this.props.article.newsletterModules.filter(e=>e.priority).sort((e,t)=>e.priority-t.priority).map(e=>e.newsletterId),i=this.props.article.newsletter.newsletterId,n=t.newsletterSubscriptions.data.filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);if(n.length){const t=e.filter(e=>!n.includes(e)),o=this.props.article.newsletterModules.find(e=>e.newsletterId===t[0]);n.includes(i)&&this.setState({newsletterData:Object.assign(Object.assign({},this.state.newsletterData),o)})}}}catch(e){console.log(e)}return{}},this.state={hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter,sliderData:{}},this.pageContentEl=l.createRef();const t=e.hasLightbox?L(b,e.article.lightboxImages,e.hasSlideShow):b;this.TruncatedChunkedArticleContent=x(t,"body")}componentDidMount(){var e;if(A("ArticlePage"),this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&(null===(e=this.props.article.newsletterModules)||void 0===e?void 0:e.length)){const e=this.props.article.newsletterModules.map(e=>e.newsletterId).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:t}=this.props.article;if(t?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=r(this.onHandleScroll,300);window.addEventListener("scroll",e)}const i="header"===a(this.props.article.interactiveOverride,"behavior"),n=a(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),o=i&&!n;window.sessionStorage.setItem("nav_invisible",o)}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),window.sessionStorage.removeItem("nav_invisible")}render(){const{article:{id:e,body:t,channelCloudData:i,contentWarnings:r,affiliateDisclaimer:s,contributorSpotLightProps:d,hideAffiliateDisclaimer:p,hasAffiliateLinks:g,hasEventBannerHidden:b,hideProductDisclaimer:f,channelMap:S,coralComments:x,hasNewsletterInBody:N,hasProduct:L,hasProductLisitingCarousel:A,hasTruncationOnMobile:F,headerProps:ne,hideAutoDisclaimer:oe,hideContributorBio:ae,hideRecircList:re,hideRecircMostPopular:se,hierarchy:le,shouldReplaceOutbrainWithVMG:de,interactiveOverride:ce,isAffiliateLinksDisabled:pe,lang:ge,langTranslations:ue,customHeading:me={},recircs:he=[],recircMostPopular:ye,recircRelated:be,relatedVideo:fe,interlude:Ce,isHeroAdVisible:ve,isLicensedPartner:Se,licensedPartnerLink:we,magazineDisclaimer:ke,paddingTop:xe,tagCloud:$e,newsletter:Te,shouldUsePersistentAd:Ee,showAgeGate:Ne,showBookmark:Le,showBreadcrumbTrail:Be,showHotelRecirc:Ie,signageConfig:Pe,isLinkStackEnabled:Ae,shouldShowFooterNewsletter:De,shouldPrioritizeSeriesPagination:Re,savingsUnitedCoupons:Me=[]},showWriterBio:Oe,showFirstRailRecirc:He,showAffiliateBelowContentHeader:_e,attributes:We,className:Ge,componentConfig:je,shouldCenterDisclaimer:Fe,shouldHideBaseTopPadding:Ve,shouldHideSeriesNavigation:Ue,shouldHideSeriesRecirc:ze,shouldInheritDropcapColor:qe,showLinkStackInsideContentBody:Ke,featureFlags:Ze,hasLightbox:Xe,hasChannelNavigation:Ye,showContributorSpotlight:Je,cartoonVariation:Qe,hasRecircDriver:et,linkList:tt,related:it,metadataVideo:nt,outbrain:ot,taboola:at,productCarousel:rt,user:st,hasNewsletterForABTest:lt,intl:dt,xlargePaddingTop:ct,articleVariationForXlargePaddingTop:pt,beOp:gt,hasDynamicDisclaimer:ut,responsiveCartoonVariation:mt,showGalleryCartoonPublishedDate:ht,gallerySliderTitleToken:yt,gallerySliderTitleTarget:bt,hasGallerySliderTitleUnderline:ft}=this.props,{hideNav:Ct}=this.state,vt=!!lt||N,{hasContentHeaderLogo:St}=ne;St&&(()=>{const e=a(je,"ContentHeader.settings");o(je,"ContentHeader.variation","TextOverlayWithLogo"),o(je,"ContentHeader.settings",Object.assign(Object.assign({},e),{showLogo:!0,hideContributors:!1,hidePublishDate:!0,hideRubric:!1,hideShareButtons:!0}))})();const wt=ae?void 0:ne.contributors,{hasNativeShareButton:kt,hasNewsletterOnPageTop:xt,hasNewsletterWithoutWrapper:$t,shouldEnableNativeShareOnDesktop:Tt,shouldRemoveBackgroundColor:Et,enableEnhancedCartoonExperience:Nt}=Ze,Lt=function(e){return"WithAdRail"===a(e,"ChunkedArticleContent.variation")?w.NarrowContentWithWideAdRail:w.WithMargins}(je),Bt="OneColumnNarrow"===a(je,"ChunkedArticleContent.variation"),It=w.DynamicGrid({startColumn:2,endColumn:12}),Pt=Fe?I.TextCenterNoTopRule:I,At=he.map((e,t)=>{const i=_(W,e.displayName),n=e.heading||"",{results:o,destinationPage:a,location:r,recommendedClickout:s,recommendedType:d}=e;return et&&a?l.createElement(G,{key:"SummaryCollectionSplitColumns"+t,recommendedItems:{items:o,recommendedType:d,recommendedClickout:s},guideItem:[a],location:r,shouldAppendReadMoreLinkForDek:!0}):l.createElement(j,{key:"ConnectedErrorBoundary"+t},l.createElement(i,{related:e.related,heading:n}))}),Dt=a(je,"ContentHeader.variation")===pt&&ct?ct:xe,Rt=(null==gt?void 0:gt.accountID)||"",Mt=(null==gt?void 0:gt.isEnabled)||!1,Ot=Ye&&l.createElement(R,null),Ht="WithAdRail"===a(je,"ChunkedArticleContent.variation"),_t=({children:e})=>l.createElement(X,{isadRail:Ht,as:Lt},l.createElement("div",{className:"body body__container"},l.createElement("div",{className:"container container--body"},l.createElement("div",{className:"container--body-inner"},e)))),Wt="articleheader"===Q(ce),Gt=a(ne,"sponsoredContentHeaderProps"),jt=l.createElement(l.Fragment,null,l.createElement(B,null,l.createElement(It,null,l.createElement(Pt,{disclaimerHtml:s,hasTopRule:!1}))));return l.createElement(V,{additionalNavigation:Ot,attributes:We,channelMap:S,className:n("page--article",Ge),featureFlags:Ze,hideNav:Ct,hasContentHeaderLogo:St,hasEventBannerHidden:b,hasFooterAdsMargins:!0,interactiveOverride:ce,isHeroAdVisible:ve,hasBaseAds:!0,user:st,lang:ge,customHeading:me,shouldHideBaseTopPadding:Ve,shouldPrioritizeSeriesPagination:Re},Mt&&l.createElement(P,{accountId:Rt}),l.createElement(u,{locale:ge,translations:ue},Le&&l.createElement(M,null),g&&s&&!p&&!f&&!_e&&jt,Be&&l.createElement(h,{hierarchy:le,shouldRemoveBackgroundColor:Et}),l.createElement("article",{className:n("article main-content",{"article--inherited-dropcaps":qe}),lang:ge},xt&&Te&&l.createElement(O,Object.assign({},Te,{position:"article-page-top"})),ne.sponsoredContentHeaderProps&&l.createElement(E,Object.assign({},ne.sponsoredContentHeaderProps,{className:"light-theme"})),Wt?l.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:ce.markup}}):l.createElement(z,{ref:this.pageContentEl},l.createElement(v,Object.assign({},ne,{hasNativeShareButton:kt,shouldEnableNativeShareOnDesktop:Tt,className:"article__content-header",hasLightbox:Xe,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:ce,metadataVideo:nt,showBreadCrumb:Be}))),!Ue&&l.createElement(D,{className:"article__series-navigation"}),l.createElement(q,{togglePaddingTop:Dt,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:Qe,"data-attribute-verso-pattern":"article-body"},F&&this.state.isMobileTruncated&&l.createElement(K,{inputKind:"button",label:dt.formatMessage(c.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),a(je,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&(null===(Ft=null==i?void 0:i.channels)||void 0===Ft?void 0:Ft.length)>0&&l.createElement(w.ContentWithAdRailNarrow,null,l.createElement("div",null,l.createElement(H,Object.assign({},i,a(je,"ChannelCloud.settings"))))),g&&s&&!p&&!f&&_e&&jt,t&&l.createElement(k,{body:t,linkList:tt,isLinkStackEnabled:Ae&&Ke,component:this.TruncatedChunkedArticleContent,contributors:wt,hasProduct:L,hasProductLisitingCarousel:A,hasTopSpacing:!!ne.lede,interlude:Ce,isAffiliateLinksDisabled:pe,name:"chunked-article-content",shouldUsePersistentAd:Ee,hideRecircMostPopular:se,recircMostPopular:ye,showFirstRailRecirc:He,hideAutoDisclaimer:oe,hideAffiliateDisclaimer:p,hideProductDisclaimer:f,responsiveCartoonVariation:mt,hasCartoonFullWidth:Nt,setCartoonLinkedGalleries:this.setCartoonLinkedGalleries}),t&&l.createElement(_t,null,l.createElement($,null))),!ze&&l.createElement(T,{ContentWrapper:Lt})),Mt&&l.createElement(_t,null,l.createElement("div",{className:"BeOpWidget"})),Object.keys(rt).length>0&&l.createElement(J,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},l.createElement(Y,Object.assign({},rt,{copilotId:e}))),l.createElement(Z,{as:C,className:n({"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:S,consumerMarketing:{position:"article-footer"},ContentWrapper:Lt,contributors:wt,contributorSpotlight:d,coralComments:x,showWriterBio:Oe,hideContributorBio:ae,showContributorSpotlight:Je,hideRecircList:re,hasNewsletterWithoutWrapper:$t,isLicensedPartner:Se,isLinkStackEnabled:Ae&&!Ke,isNarrow:Bt,isAdRail:Ht,licensedPartnerLink:we,linkList:tt,magazineDisclaimer:ke,newsletter:st.isAuthenticated?this.state.newsletterData:Te,outbrain:ot,taboola:at,recircs:he,recircListElements:At,related:it,recircRelated:be,relatedVideo:fe,showNewsletter:De||!vt,showHotelRecirc:Ie,signageConfig:Pe,tagCloud:$e,shouldReplaceOutbrainWithVMG:de,savingsUnitedCoupons:Me,sponsoredProps:Gt,hasDynamicDisclaimer:ut}),Ne&&l.createElement(m,{content:{contentWarnings:r}}),!st.isAuthenticated&&st.hasUserAuthCheck&&l.createElement(y,{as:"document",hint:"prefetch",href:"/account/sign-in"})),Nt&&l.createElement(ee,{closeModalText:dt.formatMessage(c.backToArticle)},l.createElement(te,{items:this.state.sliderData.items,showPublishedDate:ht,sliderNavIcon:"WavyArrow",responsiveCartoonVariation:"SliderCartoon",title:this.state.sliderData.dangerousHed&&l.createElement(ie,{href:""+this.state.sliderData.url,target:bt,hasUnderline:ft,typeToken:yt},this.state.sliderData.dangerousHed)})),l.createElement(U,null));var Ft}}ne.propTypes={article:s.shape({body:s.array,channelCloudData:s.object,affiliateDisclaimer:s.string,contributorSpotLightProps:s.object,hideProductDisclaimer:s.bool,hideAffiliateDisclaimer:s.boolean,hasAffiliateLinks:s.boolean,channelMap:s.object,coralComments:s.shape({enableComments:s.bool,coralHostName:s.string}),contentWarnings:s.array,customHeading:s.object,hasEventBannerHidden:s.bool,hasNewsletterInBody:s.bool,hasProduct:s.bool,hasProductLisitingCarousel:s.bool,hasTruncationOnMobile:s.bool,headerProps:s.object.isRequired,hideAutoDisclaimer:s.bool,hideContributorBio:s.bool,hideRecircList:s.bool,hideRecircMostPopular:s.bool,hierarchy:s.array,id:s.string,interactiveOverride:s.shape({markup:s.string,behavior:s.string}),interlude:s.shape(Object.assign(Object.assign({},N.propTypes),{isRailEligible:s.boolean})),isAffiliateLinksDisabled:s.bool,isHeroAdVisible:s.bool.isRequired,isLicensedPartner:s.bool,isLinkStackEnabled:s.bool,lang:s.string,langTranslations:s.object,licensedPartnerLink:s.string,lightboxImages:s.array.isRequired,magazineDisclaimer:s.shape({issueDate:s.string.isRequired,issueLink:s.string.isRequired,originalHed:s.string}),newsletter:s.object,newsletterModules:s.array,paddingTop:s.oneOf(["large"]),recircs:s.array,recircMostPopular:s.array,recircRelated:s.array,relatedVideo:s.shape({brand:s.string,related:s.any,useRelatedVideo:s.bool}),savingsUnitedCoupons:s.array,shouldPrioritizeSeriesPagination:s.bool,shouldShowFooterNewsletter:s.bool,shouldUsePersistentAd:s.bool,shouldReplaceOutbrainWithVMG:s.bool,showAgeGate:s.bool,showAffiliateBelowContentHeader:s.bool,showBookmark:s.bool,showBreadcrumbTrail:s.bool,showHotelRecirc:s.bool,signageConfig:s.object,tagCloud:s.shape({tags:s.arrayOf(s.shape({tag:s.string.isRequired,url:s.string}))})}).isRequired,articleVariationForXlargePaddingTop:s.string,attributes:s.object,beOp:s.shape({accountID:s.string,isEnabled:s.boolean}),cartoonVariation:s.oneOf(["default","card"]),className:s.string,componentConfig:s.object,featureFlags:s.object,gallerySliderTitleTarget:s.string,gallerySliderTitleToken:s.string,hasChannelNavigation:s.bool,hasDynamicDisclaimer:s.bool,hasDynamicNewsletterSignup:s.bool,hasGallerySliderTitleUnderline:s.bool,hasLightbox:s.bool,hasNewsletterForABTest:s.bool,hasRecircDriver:s.bool,hasSlideShow:s.bool,hideNav:s.bool,intl:s.object,linkList:s.object,metadataVideo:s.shape({isLive:s.bool,premiereDate:s.string,series:s.string,videoLength:s.number,premiereGap:s.number}),outbrain:s.shape({canonicalUrl:s.string.isRequired,shouldDisplayAboveRecircList:s.bool,template:s.string.isRequired,widgetId:s.string}),productCarousel:s.object,related:s.array,responsiveCartoonVariation:s.oneOf(g(p)),shouldCenterDisclaimer:s.bool,shouldHideBaseTopPadding:s.bool,shouldHideSeriesNavigation:s.bool,shouldHideSeriesRecirc:s.bool,shouldInheritDropcapColor:s.bool,showAffiliateBelowContentHeader:s.bool,showContributorSpotlight:s.bool,showFirstRailRecirc:s.bool,showGalleryCartoonPublishedDate:s.bool,showLinkStackInsideContentBody:s.bool,showWriterBio:s.bool,taboola:s.shape({publisherId:s.string.isRequired}),user:s.object,userPlatform:s.object,xlargePaddingTop:s.string},ne.defaultProps={cartoonVariation:"default",gallerySliderTitleTarget:"_blank",gallerySliderTitleToken:"typography.definitions.globalEditorial.context-primary",hasDynamicNewsletterSignup:!1,hasGallerySliderTitleUnderline:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldCenterDisclaimer:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1,showAffiliateBelowContentHeader:!1,showGalleryCartoonPublishedDate:!0,showLinkStackInsideContentBody:!1,showWriterBio:!1},ne.displayName="ArticlePage",e.exports=f(d(ne),{keysToPluck:["article","beOp","componentConfig","featureFlags","linkList","metadataVideo","outbrain","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform"]})},2645:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"},backToArticle:{id:"ArticlePage.Back to article",defaultMessage:"Back to article",description:"Gallery slider back button text"}})},2646:function(e,t,i){e.exports=i(2647)},2647:function(e,t,i){const n=i(0),{trackComponent:o}=i(5);class a extends n.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:i,href:n}=e,o=document.createElement("link");o.as=t,o.href=n,o.rel=i,document.head.appendChild(o)}}componentDidMount(){o("ResourceHint"),this.props&&this.writeResourceHintLink(this.props)}render(){return n.createElement(n.Fragment,null)}}e.exports=a},2648:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(2649);e.exports=n(o,"SeriesRecirc")},2649:function(e,t,i){const n=i(1),o=i(0),{useIntl:a}=i(2),{useInView:r}=i(67),{connector:s}=i(18),l=i(11),d=i(19),c=i(2650).default,{trackComponent:p}=i(5),{googleAnalytics:g}=i(13),{SeriesRecircAsset:u,SeriesRecircContainer:m,SeriesRecircContent:h,SeriesRecircDek:y,SeriesPromoHed:b,SeriesRecircReadMoreCta:f,SeriesRecircReadMoreCtaMobile:C,SeriesRecircTextContainer:v}=i(2651),S={"Read more":c.readMoreDefault,"Read next":c.readNext},w=({ContentWrapper:e,readMoreCTA:t,seriesData:i})=>{const{formatMessage:n}=a();o.useEffect(()=>{p("SeriesRecirc")},[]);const s=(({links:e})=>{let t;for(let i=0;i<e.length;i++){const{isCurrent:n}=e[i];if(n){for(let n=i+1;n<e.length;n++){const{isExternal:i,isPublished:o}=e[n]||{};if(o&&!i){t=e[n];break}}break}}return t})({links:(null==i?void 0:i.links)||[]}),d=e=>{g.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[c,w]=r();if(o.useEffect(()=>{w&&g.emitUniqueGoogleTrackingEvent("series-inview",{title:null==s?void 0:s.promoHed})},[w]),!i)return null;if(!s)return null;const{dek:k="",hed:x="",image:$=null,promoHed:T="",url:E=""}=s,N=$&&($.segmentedSources||$.sources)&&Object.assign({},$);return o.createElement(e,null,s&&o.createElement(m,{ref:c},o.createElement(h,null,o.createElement(C,null,n(S[t])),o.createElement(u,null,N&&o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement(l,Object.assign({},N,{isLazy:!0})))),o.createElement(v,null,o.createElement(f,null,n(S[t])),(x||T)&&o.createElement(b,null,o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement("span",{dangerouslySetInnerHTML:{__html:T||x}}))),k&&o.createElement(y,null,o.createElement("span",{dangerouslySetInnerHTML:{__html:k}}))))))};w.propTypes={ContentWrapper:n.elementType,readMoreCTA:n.string,seriesData:n.shape({hed:n.string,dek:n.string,image:n.object,links:n.arrayOf(n.shape({hed:n.string,dek:n.string,image:n.object,isCurrent:n.bool,isExternal:n.bool,isPublished:n.bool,promoDek:n.string,promoHed:n.string,url:n.string}))})},w.defaultProps={ContentWrapper:d.NarrowContentWithWideAdRail,readMoreCTA:"Read more",seriesData:null},w.displayName="SeriesRecirc",e.exports=s(w,{keysToPluck:["seriesData"]})},2650:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},2651:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getColorToken:r}=i(4),{BREAKPOINTS:s}=i(6),l=n.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${s.md}) {
    grid-column: 1/-1;
  }
`,d=n.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${a(4)};
  margin-bottom: ${a(5)};
  border-top: 2px solid
    ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};
  padding-top: ${a(2)};
`,c=n.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${s.md}) {
    display: grid;
    grid-column-gap: ${a(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${s.md}) {
    display: block;
  }
`,p=n(o).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;p.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},p.displayName="SeriesRecircDek";const g=n(o).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;g.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const u=n(o).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${s.md}) {
    display: none;
  }
`;u.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const m=n(u).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${s.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,h=n.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${s.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:l,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:p,SeriesPromoHed:g,SeriesRecircReadMoreCta:u,SeriesRecircReadMoreCtaMobile:m,SeriesRecircTextContainer:h}},2652:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(2653);e.exports=n(o,"SeriesNavigation")},2653:function(e,t,i){const n=i(1),o=i(0),a=i(8),{useIntl:r}=i(2),{connector:s}=i(18),l=i(11),d=i(2654).default,{googleAnalytics:c}=i(13),{trackComponent:p}=i(5),{SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:y,SeriesNavigationItemDek:b,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:w,SeriesNavigationResponsiveAssetContainer:k,SeriesNavigationTextContainer:x,SeriesNavigationWrapper:$,UnpublishedResponsiveAssetContainer:T}=i(2655),E={"Coming soon":d.comingSoonText,"Now reading":d.nowReadingText},N=({comingSoonText:e,nowReadingText:t,links:i})=>{const{formatMessage:n}=r(),s=a("grid"),d=e=>{c.emitGoogleTrackingEvent("seriesnavigation",{title:e})};return i.length?o.createElement(v,{className:s},i.map((i={},a)=>{const r=a,{dek:s,hed:c,image:p,isCurrent:m,isExternal:h,isPublished:y,url:v}=i,$=!y&&!h,N=p&&(p.segmentedSources||p.sources);return o.createElement(S,{key:r},o.createElement(u,null,N&&o.createElement(g,{isComingSoon:$},o.createElement(k,{isComingSoon:$},$?o.createElement(o.Fragment,null,o.createElement(w,null,n(E[e])),o.createElement(T,null,o.createElement(l,Object.assign({},p,{isLazy:!0})))):o.createElement("a",{href:v,onClick:()=>d(c)},o.createElement(l,Object.assign({},p,{isLazy:!0}))))),o.createElement(x,null,c&&($?o.createElement(f,{isComingSoon:$,dangerouslySetInnerHTML:{__html:c}}):o.createElement(f,null,o.createElement("a",{href:v,dangerouslySetInnerHTML:{__html:c},onClick:()=>d(c)}))),!m&&s&&o.createElement(b,{isComingSoon:$,dangerouslySetInnerHTML:{__html:s}}),m&&o.createElement(C,{isCurrent:m,dangerouslySetInnerHTML:{__html:n(E[t])}}))))})):null};N.propTypes={comingSoonText:n.string,links:n.arrayOf(n.shape({dek:n.string,hed:n.string,isExternal:n.bool,url:n.string})),nowReadingText:n.string},N.defaultProps={links:[]};const L=({className:e,comingSoonText:t,nowReadingText:i,seriesData:n})=>{if(o.useEffect(()=>{p("SeriesNavigation")},[]),!n)return null;const{hed:r,dek:s,links:l}=n,d={comingSoonText:t,hed:r,dek:s,links:l,nowReadingText:i},c=a("grid",e);return o.createElement($,{className:c},o.createElement(h,null,r&&o.createElement(y,{dangerouslySetInnerHTML:{__html:r}}),s&&o.createElement(m,{dangerouslySetInnerHTML:{__html:s}})),o.createElement(N,Object.assign({},d)))};L.displayName="SeriesNavigation",L.propTypes={className:n.string,comingSoonText:n.string,nowReadingText:n.string,seriesData:n.shape({hed:n.string,dek:n.string,image:n.object,links:n.arrayOf(n.shape({hed:n.string,dek:n.string,image:n.object,isCurrent:n.bool,isExternal:n.bool,isPublished:n.bool,promoHed:n.string,url:n.string}))})},L.defaultProps={comingSoonText:"Coming soon",nowReadingText:"Now reading",seriesData:null},e.exports=s(L,{keysToPluck:["seriesData"]})},2654:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({comingSoonText:{id:"ComingSoon.SeriesNavigation",defaultMessage:"COMING SOON",description:"ChannelFilter component Coming Soon text"},nowReadingText:{id:"NowReading.SeriesNavigation",defaultMessage:"Now Reading",description:"SeriesNavigation component Now Reading text"}})},2655:function(e,t,i){const n=i(3).default,{applyGridSpacing:o,cssVariablesGrid:a}=i(17),{BaseText:r}=i(10),{calculateSpacing:s,getTypographyStyles:l,getColorStyles:d}=i(4),{BREAKPOINTS:c}=i(6),{universalGridCore:p}=i(57),g=n.div.withConfig({displayName:"SeriesNavigationAsset"})`
  ${({isComingSoon:e})=>e?"background: black;":""}
`,u=n.div.withConfig({displayName:"SeriesNavigationItemContainer"})`
  @media (max-width: ${c.md}) {
    width: ${s(22)};
  }
`,m=n.div.withConfig({displayName:"SeriesNavigationDek"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.description-page")};
`,h=n.div.withConfig({displayName:"SeriesNavigationHeadingContainer"})`
  grid-column: 1/-1;
  padding-top: ${s(2)};
`,y=n.h2.withConfig({displayName:"SeriesNavigationHed"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.hed-core-primary")};

  margin-top: 0;
  margin-bottom: ${s(.25)};
`,b=n(r).withConfig({displayName:"SeriesNavigationItemDek"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};
  ${({isComingSoon:e})=>e?"opacity: 43%":""}
`;b.defaultProps={isComingSoon:!1};const f=n(r).withConfig({displayName:"SeriesNavigationItemHed"})`
  ${({isComingSoon:e})=>e?"opacity: 43%;":""};

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;f.defaultProps={as:"p",bottomSpacing:.6875,isComingSoon:!1,topSpacing:1,typeIdentity:"typography.definitions.discovery.hed-bulletin-primary"};const C=n(r).withConfig({displayName:"SeriesNavigationItemNowReading"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};

  ${({theme:e})=>d(e,"color","colors.interactive.feedback.invalid-primary")};
`,v=n.ul.withConfig({displayName:"SeriesNavigationList"})`
  grid-column: 1/-1;
  margin: 0;
  padding: 0 0 0.5rem 0;
  height: 100%;
  list-style: none;

  &.grid {
    ${p()}
  }
  @media (max-width: ${c.md}) {
    &.grid {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      padding: 0 0 1rem 0;
      width: 100%;
      overflow-x: scroll;
    }
  }
`,S=n.li.withConfig({displayName:"SeriesNavigationListItem"})`
  display: inline-block;
  grid-column: span 3;

  @media (max-width: ${c.md}) {
    &:last-child {
      padding-right: ${s(3)};
    }
  }

  @media (min-width: ${c.lg}) {
    grid-column: span 2;
  }
`,w=n.div.withConfig({displayName:"SeriesNavigationResponsiveAssetContainer"})`
  position: relative;
`,k=n(r).withConfig({displayName:"SeriesNavigationResponsiveAssetComingSoonText"})`
  position: absolute;
  top: ${s(1)};
  left: ${s(1.25)};
  z-index: 1;
`;k.defaultProps={as:"span",colorToken:"colors.background.adContainer.special",typeIdentity:"typography.definitions.discovery.subhed-section-secondary"};const x=n.div.withConfig({displayName:"SeriesNavigationWrapper"})`
  ${a()}
  ${o("padding")};

  grid-template-rows: auto auto;
  border-bottom: 1px solid;
  padding-bottom: ${s(1)};
  width: 100%;

  ${({theme:e})=>d(e,"border-color","colors.discovery.body.white.divider")};
  ${({theme:e})=>d(e,"background","colors.foundation.menu-bg.collapsed")};

  &.grid {
    ${p()}
  }
`,$=n.div.withConfig({displayName:"SeriesNavigationTextContainer"})`
  margin-top: ${s(2)};
`,T=n.div.withConfig({displayName:"UnpublishedResponsiveAssetContainer"})`
  opacity: 43%;
`;e.exports={SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:y,SeriesNavigationItemDek:b,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:k,SeriesNavigationResponsiveAssetContainer:w,SeriesNavigationTextContainer:$,SeriesNavigationWrapper:x,UnpublishedResponsiveAssetContainer:T}},2656:function(e,t,i){const n=i(1),o=i(0),{asConfiguredComponent:a}=i(9),{googleAnalytics:r}=i(13),{trackComponent:s}=i(5),{ChannelCloudContainer:l,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:p,ChannelCloudHeaderImage:g,ChannelCloudSubChannelContainer:u,ChannelCloudSubChannelLink:m,ChannelCloudSubChannelLinkText:h,ChannelCloudSubChannelText:y}=i(2657),b=({channels:e,headerLogo:t,headerLink:i,sectionHeader:n})=>(o.useEffect(()=>{s("ChannelCloud")},[]),o.createElement(d,null,n&&o.createElement(c,null,t&&o.createElement(g,{src:t,alt:"logo"}),o.createElement(p,{href:i,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:n}})),e&&o.createElement(l,null,e.map(e=>o.createElement(u,{key:e.id},o.createElement(y,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map(e=>o.createElement(m,{key:e.id,href:e.url,onClick:()=>r.emitGoogleTrackingEvent("channelCloud",e)},o.createElement(h,{dangerouslySetInnerHTML:{__html:e.text}}))))))));b.propTypes={channels:n.arrayOf(n.shape({id:n.string,text:n.string,originalText:n.string,sub:n.arrayOf(n.shape({id:n.string,text:n.string,url:n.string}))})).isRequired,headerLink:n.string,headerLogo:n.string,sectionHeader:n.string.isRequired},b.displayName="ChannelCloud",e.exports=a(b,"ChannelCloud")},2657:function(e,t,i){const n=i(3).default,{BaseText:o,BaseLink:a}=i(10),{calculateSpacing:r,getColorStyles:s}=i(4),l="\n  display: flex;\n  align-items: center;\n",d=n.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=n.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${l};

  border-width: 0 0 ${r(.25)};
  border-style: solid;
  padding: ${r(1)} ${r(3)} ${r(2)}
    0;

  ${({theme:e})=>s(e,"border-color","colors.interactive.base.black")};
`,p=n.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,g=n(a).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${r(.3)};
  padding-left: ${({hasLogo:e})=>e?r(1.3):0};
`;g.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const u=n.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${r(2.4)} ${r(6)}
    ${r(1)} 0;
`,m=n.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${l}
  flex-wrap: wrap;
  margin-bottom: ${r(2)};
  padding-right: ${r(2)};
`,h=n(o).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${r(1)};

  &::after {
    content: ':';
  }
`;h.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const y=n(a).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${l}
  padding-right: ${r(1)};

  svg {
    ${({theme:e})=>s(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?r(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,b=n(o).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>s(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;b.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:u,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:g,ChannelCloudHeaderImage:p,ChannelCloudSubChannelContainer:m,ChannelCloudSubChannelLink:y,ChannelCloudSubChannelLinkText:b,ChannelCloudSubChannelText:h}},2658:function(e,t,i){const n=i(2659),{asConfiguredComponent:o}=i(9),{asThemedComponent:a}=i(30);e.exports=a(o(n,"GenericModal"))},2659:function(e,t,i){const{asVariation:n}=i(12),o=i(2660);o.Default=n(o,"Default",{}),e.exports=o},2660:function(e,t,i){const n=i(0),o=i(1),{connect:a}=i(20),r=i(154),s=i(545),l=i(111),{minThresholds:d}=i(16),{GlobalStyle:c,CloseModalButtonDesktop:p,CloseModalButtonMobile:g,ModalContentWrapper:u}=i(2661),m=({children:e,closeModalText:t,isModalOpen:i,openModal:o,modalTransitionTime:a,showHeader:s})=>{n.useEffect(()=>{r.setAppElement("#app-root")},[]);const m=n.useMemo(()=>{var e;if(!s||!i||!document)return 0;const t=null===window||void 0===window?void 0:window.innerWidth,n=document.getElementsByClassName("visual-link-banner--is-scrolled"),o=document.getElementsByClassName("site-navigation");return t<d.xl&&n.length&&n[0]?n[0].offsetHeight:o&&o.length&&(null===(e=o[0])||void 0===e?void 0:e.offsetHeight)||0},[i,s]);return n.createElement(r,{isOpen:i,className:"genericModal",overlayClassName:{base:"genericModalOverlay",afterOpen:"genericModalOverlayAfterOpen",beforeClose:"genericModalOverlayBeforeClose"},bodyOpenClassName:"genericModalBodyOpen",shouldCloseOnEsc:!0,closeTimeoutMS:a},n.createElement(p,{btnStyle:"text",iconPosition:"before",hasEnableIcon:!0,onClickHandler:()=>o(!1),ButtonIcon:l.Close,label:t}),n.createElement(g,{ButtonIcon:l.Close,onClickHandler:()=>o(!1),onTouchStart:()=>o(!1),btnStyle:"outlined",isIconButton:!0,hasEnableIcon:!0,cornerRadius:"FullyRoundedCorner",size:"small",label:t}),n.createElement(u,null,e),n.createElement(c,{siteHeaderHeight:m,modalTransitionTime:a}))};m.propTypes={children:o.node.isRequired,closeModalText:o.string,isModalOpen:o.bool.isRequired,modalTransitionTime:o.number,openModal:o.func.isRequired,showHeader:o.bool},m.defaultProps={closeModalText:"",modalTransitionTime:300,showHeader:!1},e.exports=a(e=>({isModalOpen:e.isModalOpen||!1}),e=>{const{openModal:t}=s(e);return{openModal:t}})(m)},2661:function(e,t,i){const{default:n,createGlobalStyle:o}=i(3),a=i(14),{ButtonLabel:r,ButtonIconWrapper:s}=i(29),{maxScreen:l,minScreen:d,getColorToken:c,calculateSpacing:p,getZIndex:g}=i(4),{maxThresholds:u}=i(16),{BREAKPOINTS:m}=i(6),h=n(a.Utility).withConfig({displayName:"CloseModalButton"})`
  position: absolute;
  color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};

  svg {
    fill: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  &:hover {
    color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  ${s} {
    display: flex;
  }
`,y=n(h).withConfig({displayName:"CloseModalButtonDesktop"})`
  left: 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${c("colors.interactive.base.primary")};
  }

  ${l(u.lg+"px")} {
    display: none;
  }

  ${r} {
    padding: 0;
  }
`,b=n(h).withConfig({displayName:"CloseModalButtonRight"})`
  top: ${p(3)};
  right: ${p(3)};
  left: unset;
  z-index: ${g("skipLink")};
  border: 1px solid ${c("colors.interactive.base.light")};
  width: ${p(5)};
  height: ${p(5)};

  &:hover {
    border: 1px solid ${c("colors.interactive.base.light")};
    background: ${c("colors.interactive.base.light")};
  }

  svg {
    vertical-align: bottom;
  }

  ${d(m.lg)} {
    display: none;
  }
`,f=n.div.withConfig({displayName:"ModalContentWrapper"})`
  padding: ${p(2.5)} 0;
`,C=o`
  .genericModalBodyOpen {
    overflow: hidden;
  }

  .genericModalOverlay {
    position: fixed;
    top: ${({siteHeaderHeight:e})=>e+"px"};
    left: 0;
    transition: ${({modalTransitionTime:e})=>e&&`opacity ${e}ms ease-in-out;`};
    opacity: 0;
    z-index: ${g("hyperstitialLayer")};
    width: 100%;
    height: ${({siteHeaderHeight:e})=>`calc(100% - ${e}px)`};
  }

  .genericModal {
    background: ${({theme:e})=>c(e,"colors.interactive.base.white")};
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .genericModalOverlayAfterOpen {
    opacity: 1;
  }

  .genericModalOverlayBeforeClose {
    opacity: 0;
  }
`;e.exports={GlobalStyle:C,CloseModalButtonDesktop:y,CloseModalButtonMobile:b,ModalContentWrapper:f}},271:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(0),a=i(1),r=e=>{var{fillColor:t="#000",width:i="100px",height:a="100px",margin:r="20px"}=e,s=n(e,["fillColor","width","height","margin"]);return o.createElement("svg",Object.assign({style:{width:i,height:a,margin:r,display:"inline-block"}},s,{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0"}),o.createElement("path",{fill:t,d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},o.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})))};r.propTypes={fillColor:a.string,height:a.string,margin:a.string,width:a.string},e.exports=r},288:function(e,t,i){e.exports=i(453)},307:function(e,t,i){const{fetchWithTimeout:n}=i(52),{loadData:o}=i(452);e.exports={fetchWithTimeout:n,loadData:o}},431:function(e,t,i){const n=i(1472),o=i(15),a=e=>{const t=o(e,"gradient-style"),i=o(e,"color-stops");let n=o(e,"angle");"radial"===t&&(n=null);return`background: ${((e,t,i=null)=>null===i?`${e}-gradient(${t})`:`${e}-gradient(${i}, ${t})`)(t,i,n)}; position: sticky;`},r=e=>{const t=o(e,"url"),i=o(e,"repeat"),n=o(e,"color"),a=o(e,"attachment"),r=o(e,"size");return((e,t="no-repeat",i="center",n="cover",o="scroll",a="transparent")=>{let r,s="";if(null!==e&&(r=e),s=`background-image:${r};\n      background-attachment:${o};\n      background-color:${a};\n      background-repeat:${t};\n      background-position:${i};`,"string"==typeof n)s+=`background-size:${n};`;else{const e=[];n.forEach(t=>{e.push(t)}),s+=`background-size:${n.toString()};`}return s})(t,i,o(e,"position"),r,a,n)},s=e=>{return n(e,"gradient")?a(o(e,"gradient")):n(e,"image")?r(o(e,"image")):n(e,"solid")?(t=o(e,"solid"),`background-color:${o(t,"color")};`):"background: none;";var t};e.exports={getPattern:(e,t)=>{let i;if(!e||0===Object.keys(e).length||!t)return"background: none;";if(n(e,"container-styles")){const l=e["container-styles"];if(!l[t])return"background: none;";i=l[t];const d=n(i,"pattern")?i.pattern:null;if(d&&d.length){let e="";return d.length>=2?(d.forEach((t,i)=>{let s=i;if(n(t,"gradient"))e+=a(o(t,"gradient"));else if(n(t,"image")){let i="";o(t,"image").size&&(i=o(t,"url")),i.size?e+=`'url(${i})'`:s=d.length,r(o(t,"image"))}else if(n(t,"solid")){const i=o(t,"solid");i&&(e+=o(i,"color"))}s!==d.length-1&&(e+=",")}),e.toString()):s(d[0])}}return"background: none;"}}},434:function(e,t,i){const n=i(0),{VogueWrapper:o}=i(435);e.exports=()=>n.createElement(o,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 36",textRendering:"geometricPrecision",shapeRendering:"geometricPrecision",className:"loader-vogue"},n.createElement("path",{id:"E",className:"st0",d:"M23.2612,0L23.2612,11.7649C23.2612,11.8148,23.0279,11.8315,23.0279,11.7649C23.0279,11.6982,23.2612,0.333282,12.7129,0.333282L8.76346,0.333282C8.54683,0.333282,8.41352,0.36661,8.41352,0.549915L8.41352,15.231C8.41352,15.3643,8.54683,15.4476,8.76346,15.4476L10.0799,15.4476C16.3456,15.4476,15.8457,9.14859,15.8457,9.08193C15.8457,9.01528,16.0957,9.03194,16.0957,9.08193C16.0957,9.13193,16.1123,22.2966,16.1123,22.3466C16.1123,22.3966,15.929,22.4132,15.929,22.3466C15.929,22.2799,15.779,15.7809,9.94661,15.7809L8.76346,15.7809C8.56349,15.7809,8.41352,15.8476,8.41352,15.9975L8.41352,31.7951C8.41352,31.9118,8.54683,32.0117,8.76346,32.0117C9.64666,32.0117,11.9296,32.0284,12.5629,32.0284C23.8945,32.0617,23.7445,19.8969,23.7445,19.8469C23.7445,19.797,24.0278,19.797,24.0278,19.8469L24.0278,32.445L0.114794,32.445C0.0481373,32.445,0.0481373,32.0951,0.114794,32.0951L2.49776,32.0951C2.71439,32.0951,2.84771,32.0284,2.84771,31.8784C2.84771,29.1455,2.84771,0.799877,2.84771,0.549915C2.84771,0.349946,2.58108,0.333282,2.49776,0.333282C2.46443,0.333282,1.23129,0.333282,0.0148091,0.333282C0.0148091,0.333282,-0.0685114,0.166641,0.0148091,0C0.0981296,0,23.2612,0,23.2612,0",opacity:"0",transform:"translate(4.15223,1.87884)",style:{animation:"E_o 1.5s linear infinite both"}}),n.createElement("path",{id:"U",className:"st0",d:"M27.1719,0.266719C25.7716,0.266719,24.3713,0.266719,24.3713,0.266719C24.3713,0.266719,24.0214,0.266719,24.0214,0.466748C24.0214,2.70041,24.0214,21.5031,24.0214,24.1868L24.0214,24.2034C24.038,30.8378,18.9372,33.0048,15.2701,33.0548L15.2701,33.0381C10.9528,33.0548,3.20169,32.338,3.20169,22.77C3.20169,22.77,3.18502,1.00016,3.16835,0.700115C3.15167,0.233381,2.55159,0.250051,2.55159,0.250051C2.55159,0.250051,0.10124,0.250051,0.017895,0.250051C-0.0654503,0.250051,-0.0487813,-0.1,0.017895,-0.1L11.9529,-0.1C12.0196,-0.1,12.003,0.250051,11.9529,0.250051C11.9029,0.250051,9.41925,0.250051,9.41925,0.250051C9.41925,0.250051,8.6358,0.216712,8.6358,0.733453C8.6358,1.46689,8.65246,25.0203,8.65246,25.8537C8.65246,29.5209,10.7361,32.7714,15.2534,32.7048C18.7873,32.638,23.6879,30.5711,23.6714,24.1868C23.6714,23.8701,23.6714,2.83376,23.6714,0.466748C23.6546,0.283389,23.3046,0.266719,23.3046,0.266719L19.9875,0.266719C19.9207,0.266719,19.9207,-0.0666619,20.004,-0.0666619C20.0208,-0.0666619,27.0885,-0.0666619,27.1719,-0.0666619C27.2385,0.100029,27.1719,0.266719,27.1719,0.266719Z",opacity:"0",transform:"translate(2.57354,1.9455)",style:{animation:"U_o 1.5s linear infinite both"}}),n.createElement("path",{id:"G",className:"st0",d:"M16.5382,19.9408L19.2012,19.9408C19.2012,19.9408,19.7005,19.8909,19.7005,20.124C19.7005,20.1406,19.7005,27.7636,19.7005,27.7636C19.7005,33.6389,13.8419,33.7056,12.1941,33.5224C6.06906,32.8233,5.95255,20.1905,5.91927,16.8784C5.83605,7.85727,7.2508,0.00125154,13.4091,0.317489C20.7159,0.683659,22.63,11.1694,22.7465,11.6355C22.9962,11.7187,22.9962,11.519,22.9962,11.519L23.0127,0.0844721C23.0127,0.0844721,22.9628,-0.0153926,22.813,0.11776C22.7631,0.167692,22.6965,0.23427,22.63,0.300845C19.401,3.59637,17.7866,0.134404,13.0762,-0.0153926C7.28409,-0.198477,0.0938322,7.82398,-0.00603238,17.0947C-0.105897,26.4154,6.01913,33.6056,12.7101,33.8554C16.3385,33.9885,16.2553,32.9898,20.7324,31.5917C23.4621,30.743,24.7604,32.5904,24.8602,33.356C25.0267,33.4725,25.0434,33.2727,25.0434,33.2727L25.0434,20.1739C25.0434,19.9077,25.4094,19.9576,25.4094,19.9576L27.8729,19.9576C27.9394,19.9576,27.9394,19.5914,27.8729,19.5914L16.5216,19.5914C16.4383,19.5914,16.4383,19.9408,16.5382,19.9408",opacity:"0",transform:"translate(2.19725,0.935133)",style:{animation:"G_o 1.5s linear infinite both"}}),n.createElement("path",{id:"O",className:"st0",d:"M5.92208,16.6329C5.92208,7.61677,7.65213,0.247436,14.0399,0.264071C20.9103,0.264071,22.2578,7.93283,22.2578,16.6496C22.2578,25.6659,20.9435,33.4346,14.09,33.4346C6.73721,33.4177,5.92208,26.115,5.92208,16.6329M13.9735,33.6839C20.7938,33.7005,28.1633,26.1649,28.18,16.8159C28.1965,7.01792,21.1101,0.0478142,14.09,-0.00209099C6.90356,-0.0686311,0,7.83302,0,16.8159C0,26.0983,6.52095,33.6507,13.9735,33.6839",opacity:"0",transform:"translate(2.065,1.05937)",style:{animation:"O_o 1.5s linear infinite both"}}),n.createElement("path",{id:"V",className:"st0",d:"M0.0178861,0L11.7176,0C11.7843,0,11.7676,0.349993,11.7176,0.349993L9.31769,0.349993C9.31769,0.349993,8.63437,0.31666,8.85104,0.699985C8.88437,0.783317,17.1175,23.2828,17.1175,23.2828C17.1175,23.2828,17.2675,23.6662,17.3842,23.7162C17.3842,23.7162,24.7007,1.11664,24.7007,1.09998C24.7674,0.883315,25.034,0.366659,24.584,0.366659L21.9341,0.366659C21.8841,0.366659,21.8841,0.0166663,21.9341,0.0166663L28.234,0.0166663C28.284,0.0166663,28.284,0.366659,28.234,0.366659L25.884,0.366659C25.234,0.349993,25.234,0.549989,25.1174,0.883315C25.0674,1.04998,14.9342,32.616,14.9342,32.616C14.9342,32.616,14.8842,32.4827,14.8509,32.3493C10.5677,19.9663,3.93447,2.73328,3.40115,0.883315C3.25115,0.333326,3.16782,0.349993,2.83449,0.349993C2.71783,0.349993,0.101218,0.349993,0.0178861,0.349993C-0.0654455,0.349993,-0.0487792,0,0.0178861,0",opacity:"0",transform:"translate(2.03854,1.8455)",style:{animation:"V_o 1.5s linear infinite both"}}))},435:function(e,t,i){const n=i(3).default.svg.withConfig({displayName:"VogueWrapper"})`
  animation: rotate 2s linear infinite;
  width: 36px;
  height: 32px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes E_o {
    0% {
      opacity: 0;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    83.3333% {
      opacity: 1;
    }

    97.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes U_o {
    0% {
      opacity: 0;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    66.6667% {
      opacity: 1;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    83.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes G_o {
    0% {
      opacity: 0;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    66.6667% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes O_o {
    0% {
      opacity: 0;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    33.3333% {
      opacity: 1;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes V_o {
    0% {
      opacity: 0;
    }

    13.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    16.6667% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 1;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    33.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;e.exports={VogueWrapper:n}},447:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(448);e.exports=n(o,"ChannelNavigation")},448:function(e,t,i){const n=i(0),{useState:o,useRef:a,useEffect:r}=i(0),s=i(1),{useIntl:l}=i(2),d=i(44),c=i(449).default,{connector:p}=i(18),{trackComponent:g}=i(5),{googleAnalytics:u}=i(13),m=i(450),h=i(126),y=i(33),b=i(107),{INITIAL_STATE:f,computeScroll:C}=i(31),{ChannelNavigationWrapper:v,ChannelNavigationContainer:S,ChannelNavigationContent:w,ChannelNavigationLogoWrapper:k,ChannelNavigationLogo:x,ChannelNavigationScrollViewLogo:$,ChannelNavigationLinksWrapper:T,ChannelNavigationLinksList:E,ChannelNavigationLinkItem:N,ChannelNavigationLink:L,ChannelNavigationChannelDrawer:B,ChannelNavigationGroupedNavigation:I,ChannelNavigationGlobalDrawer:P,ChannelNavigationAccount:A,ChannelNavigationToggle:D,ChannelNavigationSecondaryMenu:R}=i(458),M=({accountProps:e,isFixed:t,logo:i,isAccountsEnabled:s,scrollViewLogo:p,channelNavigationLinks:M,channelNavigationLogoBaseUrl:O,overrideChannelNavigationLinks:H,secondaryMenuProps:_,showExternalProfileLink:W,loaderType:G,onNavigationLinkClick:j,activeLinkIndex:F,user:V,hideLinksOnMobile:U,hideDrawerScroll:z})=>{n.useEffect(()=>{g("ChannelNavigation")},[]);const[q,K]=o(!1),[Z,X]=n.useState(!1),[Y,J]=o(null),[Q,ee]=o(f),te=a(null),{formatMessage:ie}=l(),ne=H||M;n.useEffect(()=>{const e=e=>{"Escape"===e.key&&Z&&(u.emitGoogleTrackingEvent("hamburger-menu-"+(Z?"collapsed":"expanded")),X(!1))};return Z&&window.addEventListener("keyup",e),()=>window.removeEventListener("keyup",e)},[Z]);const oe=()=>{ee(e=>{var t,i;const n=C(e),o=(null===(t=null===document||void 0===document?void 0:document.body)||void 0===t?void 0:t.scrollHeight)-(null===(i=null===document||void 0===document?void 0:document.body)||void 0===i?void 0:i.clientHeight);return Object.assign(Object.assign({},n),{scrollHeight:o})})};r(()=>{const e=d(oe,100);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[t]);const{direction:ae,pageYOffset:re,scrollHeight:se}=Q,le=Z?y:b,de=t||re>0,ce=t||"up"!==ae&&re>0||se===re;return ne&&ne.length?n.createElement(v,{isFixed:de},n.createElement(S,{ref:te,"data-testid":"channel-navigation"},n.createElement(w,{isFixed:de,isScrollingDown:ce},i&&p&&n.createElement(k,{isFixed:de,isScrollingDown:ce},n.createElement("a",{href:O},n.createElement(x,Object.assign({isScrollingDown:ce},i)),ce&&n.createElement($,Object.assign({isScrollingDown:ce},p))))),n.createElement(T,{isScrollingDown:ce,hideLinksOnMobile:U},n.createElement(E,{"data-journey-hook":"channel-navigation"},ne.map((e,t)=>{const i=void 0===F||t===F;return n.createElement(N,{key:e.key||e.type},n.createElement(L,{tabIndex:0,isActive:i,label:e.text,href:e.href,as:"a",isInline:!0,onClick:t=>{e.apiEndpoint&&(t.preventDefault(),K(!0),J(Object.assign({},e))),j&&j(e),u.emitGoogleTrackingEvent(e.analyticsEvent)}},e.text))}))),!s&&W&&n.createElement(A,{isScrollingDown:ce,signInLabel:null==W?void 0:W.signInLabel,signInLink:null==W?void 0:W.signInLink,user:{isAuthenticated:!1}}),s&&V&&n.createElement(A,{isScrollingDown:ce,accountLinks:e.accountLinks,savedStoriesLabel:null==e?void 0:e.savedStoriesLabel,accountBookmarkAlertLabel:null==e?void 0:e.accountBookmarkAlertLabel,accountLabel:null==e?void 0:e.accountLabel,signInLabel:null==e?void 0:e.signInLabel,signInLink:null==e?void 0:e.signInLink,signOutLink:null==e?void 0:e.signOutLink,user:V,className:"standard-navigation__section--utility-links-login"}),n.createElement(D,{tabIndex:0,isIconButton:!0,isScrollingDown:ce,ButtonIcon:le,label:"Open Navigation Menu",onClickHandler:()=>{u.emitGoogleTrackingEvent("hamburger-menu-"+(Z?"collapsed":"expanded")),X(!Z)},role:"button","aria-expanded":Z})),!!Y&&n.createElement(B,{isOpen:q,onClose:()=>{K(!1)},hideDrawerScroll:z,contentLabel:ie(c.channelDrawerContentLabel),showCloseButton:!0,className:"channel-navigation-drawer"},n.createElement(I,null,n.createElement(m,{storeKey:Y.key,dataUrl:Y.apiEndpoint,hasAtoZIndex:Y.hasAtoZIndex,loaderType:G,hasFilter:Y.hasFilter,filterLabel:Y.filterLabel}))),n.createElement(P,{isOpen:Z,onClose:()=>ee(!Z),contentLabel:"Navigation Menu"},n.createElement(R,{isFixed:de},!s&&W?n.createElement(h,Object.assign({},_,{user:{isAuthenticated:!1},isAccountsEnabled:!0,contentAlign:"center"})):n.createElement(h,Object.assign({accountProps:e},_,{user:V,isAccountsEnabled:s,contentAlign:"center"}))))):null},O=s.shape({text:s.string,key:s.string,apiEndpoint:s.string});M.defaultProps={accountProps:{accountLinks:[]},hideLinksOnMobile:!1,isAccountsEnabled:!1},M.propTypes={accountProps:s.object,activeLinkIndex:s.number,channelNavigationLinks:s.arrayOf(O),channelNavigationLogoBaseUrl:s.string,hideDrawerScroll:s.bool,hideLinksOnMobile:s.bool,isAccountsEnabled:s.bool,isFixed:s.bool,loaderType:s.string,logo:s.object,onNavigationLinkClick:s.func,overrideChannelNavigationLinks:s.arrayOf(O),scrollViewLogo:s.object,secondaryMenuProps:s.object,showExternalProfileLink:s.object,user:s.shape({isAuthenticated:s.bool.isRequired})},M.displayName="ChannelNavigation",e.exports=p(M,{keysToPluck:["user","isAccountsEnabled","accountProps"]})},449:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({toggleLabel:{id:"ChannelNavigation.ToggleLabel",defaultMessage:"Open Navigation Menu",description:"ChannelNavigation component toggle label"},channelDrawerContentLabel:{id:"ChannelNavigation.ChannelDrawerContentLabel",defaultMessage:"Runway filters navigation",description:"ChannelNavigation component channel drawer content label"},globalDrawerContentLabel:{id:"ChannelNavigation.GlobalDrawerContentLabel",defaultMessage:"Navigation Menu",description:"ChannelNavigation component global drawer content label"}})},450:function(e,t,i){e.exports=i(451)},451:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(1),a=i(0),{useState:r,useEffect:s}=i(0),{connect:l}=i(20),{loadData:d}=i(307),c=i(288),p=i(263),{LoaderWrapper:g}=i(457),u=i(155),{trackComponent:m}=i(5),h=e=>{var{dataUrl:t,storeKey:i,data:o,setData:l,loaderType:h="Circle"}=e,y=n(e,["dataUrl","storeKey","data","setData","loaderType"]);a.useEffect(()=>{m("GroupedNavigationContainer")},[]);const[b,f]=r(!1),[C,v]=r(!1),S=p[h];return s(()=>{!async function(){if(!o&&t){f(!0);try{const e=await d({url:""+t}),n=e?e[i]:[];l(i,n)}catch(e){v(!0)}finally{f(!1)}}}()},[t]),a.createElement(a.Fragment,null,C&&a.createElement(u.ContentCenterNoBackground,{ariaLive:"polite",className:"brand-background__lede",dangerousHed:"Oops",dangerousDek:"something went wrong"}),b&&a.createElement(g,null,a.createElement(S,null)),o&&a.createElement(c,Object.assign({groupedLinks:o},y)))};h.propTypes={analyticsEventForFilter:o.string,data:o.array,dataUrl:o.string.isRequired,filterLabel:o.string,hasAtoZIndex:o.bool,hasFilter:o.bool,loaderType:o.string,setData:o.func.isRequired,storeKey:o.string.isRequired},e.exports=l((e,{storeKey:t})=>{var i;return{data:(null===(i=e.groupedNavigation)||void 0===i?void 0:i[t])||null}},e=>({setData:(t,i)=>{e({type:"MERGE_KEY",key:"groupedNavigation",value:{[t]:i}})}}))(h)},452:function(e,t){e.exports={loadData:async function({url:e,gtmEvent:t=null}){window.dataLayer&&t&&window.dataLayer.push({event:t});const i=await fetch(e);if(i.ok)return i.json();throw new Error(i.statusText)}}},453:function(e,t,i){const n=i(1),o=i(0),{useIntl:a}=i(2),{useState:r}=i(0),s=i(133),l=i(85),d=i(70),{asConfiguredComponent:c}=i(9),{filter:p,useDebounce:g}=i(454),u=i(455),{trackComponent:m}=i(5),{GroupedNavigationWrapper:h,GroupedNavigationFilter:y,GroupedNavigationFilterContent:b,GroupedNavigationFilterInput:f,GroupedNavigationContent:C,GroupedNavigationLinks:v,GroupedNavigationGroup:S,GroupedNavigationIndex:w}=i(179),k=i(456).default,x=({className:e,groupedLinks:t,showContentDivider:i=!0,hasAtoZIndex:n=!1,hasFilter:c=!1,analyticsEventForFilter:x,filterLabel:$})=>{o.useEffect(()=>{m("GroupedNavigation")},[]);const{formatMessage:T}=a(),E=o.useRef(null),N=s(),[L,B]=r(""),[I,P]=g(t,200);return t&&t.length?o.createElement(h,{className:e,hasFilter:c,"data-testid":"GroupedNavigationWrapper"},c&&o.createElement(y,null,o.createElement(b,null,o.createElement(f,{placeholder:$,"aria-label":$||T(k.filterInputAriaLabelText),name:"filter",type:"text",onChange:e=>{const i=e.target.value;B(i),P(()=>p(t,i))},onFocus:()=>{x&&l.emitGoogleTrackingEvent(x)},value:L}),o.createElement(d,null))),o.createElement(C,{hasFilter:c},o.createElement(v,{ref:E},I.map(e=>{if(!e.links)return null;const t=e.links.map(e=>{const t=!0===e.isSecondary?"link--secondary":"link--primary";return Object.assign(Object.assign({},e),{className:t})}),a={};return n&&(a.id="#"===e.groupName?"other-"+N:`${e.groupName.toLowerCase()}-${N}`),o.createElement(S,{key:e.groupName,className:"grouped-navigation__group",links:t,linkClassName:"grouped-navigation__link",heading:e.groupName,showContentDivider:i,shouldStyleListItems:!0,attributes:a})})),n&&o.createElement(w,{className:"grouped-navigation__index"},o.createElement(u,{links:t,linksRef:E,navId:N})))):null},$=n.shape({text:n.string.isRequired,url:n.string.isRequired,isSecondary:n.bool,analyticsEvent:n.string}),T=n.arrayOf(n.shape({links:n.arrayOf($),groupName:n.string,groupId:n.string}));x.propTypes={analyticsEventForFilter:n.string,className:n.string,filterLabel:n.string,groupedLinks:T,hasAtoZIndex:n.bool,hasFilter:n.bool,showContentDivider:n.bool},x.displayName="GroupedNavigation",e.exports=c(x,"GroupedNavigation"),e.exports.groupedLinksShape=T},454:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounce=t.filter=void 0;const{useState:n,useCallback:o}=i(0),a=i(45);t.filter=(e,t)=>{if(!(null==t?void 0:t.trim()))return e;const i=e=>e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/gi,"");return e.map(e=>{var n;return Object.assign(Object.assign({},e),{links:null===(n=e.links)||void 0===n?void 0:n.filter(e=>/(\s|')/.test(t)?i(e.text).includes(i(t)):e.text.match(/([a-zA-Z]\.){2,}/)?e.text.split(" ").filter(e=>i(e).startsWith(i(t))).length:e.text.split(/([ \-'’.]+)/).filter(e=>i(e).startsWith(i(t))).length)})}).filter(e=>{var t;return null===(t=e.links)||void 0===t?void 0:t.length})};t.useDebounce=(e,t)=>{const[i,r]=n(e),s=o(a(e=>{r(e)},t),[]);return[i,e=>{s(e)}]}},455:function(e,t,i){const n=i(1),o=i(0),{AtoZIndexWrapper:a,AtoZIndexList:r,AtoZIndexLink:s,AtoZIndexText:l}=i(179),d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],c=({links:e,linksRef:t,navId:i})=>{if(!e||!e.length)return null;const n=e=>{e.preventDefault();const i=window.requestAnimationFrame||(e=>window.setTimeout(e,20)),n=document.getElementById(e.target.hash.replace("#",""));if(!n)return;const{offsetTop:o}=n,{offsetTop:a,scrollTop:r}=t.current,s=o-a-r;let l=0;const d=()=>{l+=20;const e=function(e,t,i,n){let o=e;return o/=n/2,o<1?i/2*o*o+t:(o--,-i/2*(o*(o-2)-1)+t)}(l,r,s,600);t.current.scrollTop=e,l<600&&i(d)};d()};return o.createElement(a,{"data-testid":"AtoZIndexWrapper"},o.createElement(r,null,d.map(t=>{const a=e.find(e=>e.groupName===t);return a?o.createElement("li",{key:t},o.createElement(s,{"data-testid":"AtoZIndexLink",href:"#"+("#"===a.groupName?"other-"+i:`${a.groupName.toLowerCase()}-${i}`),onClick:n},t)):o.createElement(l,{key:t},t)})))};c.propTypes={links:n.arrayOf(n.shape({groupName:n.string.isRequired})),linksRef:n.object,navId:n.string},e.exports=c},456:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({filterInputAriaLabelText:{id:"GroupedNavigation.FilterInputAriaLabel",defaultMessage:"Filter links",description:"Grouped Navigation Filter component aria label text",isConfigurable:!0}})},457:function(e,t,i){const n=i(3).default,{calculateSpacing:o}=i(4),a=n.div.withConfig({displayName:"LoaderWrapper"})`
  padding-top: ${o(6)};
  text-align: center;
`;e.exports={LoaderWrapper:a}},458:function(e,t,i){const n=i(3).default,{calculateSpacing:o,getColorToken:a,getTypographyStyles:r,getZIndex:s}=i(4),{hideVisually:l}=i(50),{BREAKPOINTS:d,ZINDEX_MAP:c}=i(6),{maxThresholds:p}=i(16),g=i(14),u=i(83),m=i(51),h=i(19),y=i(172),{SecondaryMenuAccount:b}=i(170),{StandardNavigationDropdown:f,StandardNavigationAccountLabel:C,AccountDropdownToggleIcon:v}=i(86),{GridItem:S}=i(25),{SignOutButtonWrapper:w}=i(124),k=n.nav.withConfig({displayName:"ChannelNavigationWrapper"})`
  position: relative;
  z-index: ${c.persistentTopLayer};
  max-height: ${o(24)};
  ${({isFixed:e})=>e&&"\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      "};
`;k.displayName="ChannelNavigationWrapper";const x=n.div.withConfig({displayName:"ChannelNavigationContainer"})`
  position: relative;
  border-bottom: 1px solid rgba(51, 51, 51, 1);

  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,$=n.div.withConfig({displayName:"ChannelNavigationContent"})`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  z-index: 1;
  margin: 0 auto;
  border-bottom: 1px solid
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.divider")};
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    flex-wrap: ${({isScrollingDown:e})=>e?"nowrap":"wrap"};
  }
`,T=n.div.withConfig({displayName:"ChannelNavigationLogoWrapper"})`
  margin: 0 auto;
  padding: ${o(1)};

  @media (min-width: ${d.md}) {
    ${({isScrollingDown:e})=>e?`\n      left: ${o(3)};\n      position: absolute;\n      padding: ${o(1)};\n    `:`padding: ${o(1)} 0;`}
  }
`,E=n(m).withConfig({displayName:"ChannelNavigationLogo"})`
  width: 96px;
  @media (min-width: ${d.md}) {
    display: flex;
    padding: ${o(1)} 0;
    width: 168px;
    height: 88px;
    ${({isScrollingDown:e})=>e&&`\n        ${l()}\n      `};
  }
`,N=n(m).withConfig({displayName:"ChannelNavigationScrollViewLogo"})`
  @media (max-width: ${d.md}) {
    ${l()}
  }
  padding: ${o(.5)} 0;
  width: 83px;
  height: unset;
`,L=n(h.NoMargins).withConfig({displayName:"ChannelNavigationLinksWrapper"})`
  > ${S} {
    grid-column: 1;
    margin: 0 auto;
    text-align: center;
    @media (min-width: ${d.md}) {
      grid-column: 2 / span 10;
    }
  }

  position: absolute;
  top: auto;
  transition: transform 0.5s ease-in-out;
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  ${({isScrollingDown:e})=>e?"transform: translateY(-100%);":"transform: translateY(0%);"}

  @media (min-width: ${d.md}) {
    display: grid;
    position: initial;
    align-items: center;
    justify-content: center;
    transform: none;
    margin: 0 calculateSpacing(14.5);
    height: 64px;
  }

  @media (max-width: ${p.md}px) {
    ${({hideLinksOnMobile:e})=>e?l()+";":`padding: ${o(2)} 0 ${o(2)}\n      ${o(3)};\n      &::after {\n        background: linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.01) 31.25%,\n          ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")}\n            100%\n        );\n        content: '';\n        height: ${o(4)};\n        width: 48px;\n        bottom: ${o(2)};\n        right: 0;\n        position: sticky;\n        pointer-events: none;`}
  }
`,B=n.ul.withConfig({displayName:"ChannelNavigationLinksList"})`
  display: flex;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  padding-inline-start: 0;

  @media (max-width: ${d.md}) {
    ${({hideLinksOnMobile:e})=>e?l()+";":""}
  }
`,I=n.li.withConfig({displayName:"ChannelNavigationLinkItem"})`
  padding-right: ${o(2)};

  &:last-child {
    padding-right: 0;
  }

  @media (min-width: ${d.md}) {
    margin-right: 0;
    padding-right: ${o(3)};
  }
`,P=n.a.withConfig({displayName:"ChannelNavigationLink"})`
  ${({theme:e})=>r(e,"typography.definitions.foundation.link-primary")}

  border: none;
  min-width: auto;
  text-decoration: none;
  white-space: nowrap;
  color: rgb(
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link",{rgbOnly:!0})},
    ${({isActive:e})=>e?"1":"0.6"}
  );

  &:hover {
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
  }
`,A=n(u.Right).withConfig({displayName:"ChannelNavigationChannelDrawer"})`
  &&& {
    ${({hideDrawerScroll:e})=>e&&"\n        height: 100%;\n    "}
  }
  @media (min-width: ${d.md}) {
    width: 400px;
    max-width: 400px;

    && {
      height: 100%;
    }
  }
`,D=n.div.withConfig({displayName:"ChannelNavigationGroupedNavigation"})`
  padding: 0 ${o(4)} ${o(2)};
  height: 100%;
`,R=n(u).withConfig({displayName:"ChannelNavigationGlobalDrawer"})`
  height: auto;
`,M=n(y).withConfig({displayName:"ChannelNavigationAccount"})`
  position: absolute;
  right: ${o(3)};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};

  @media (max-width: ${d.md}) {
    display: none;
  }

  @media (min-width: ${d.md}) {
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  &&&.standard-navigation-account {
    position: absolute;
    top: ${({isScrollingDown:e})=>o(e?1.4:14.4)};
    margin-right: ${o(3)};
    margin-left: ${o(1.5)};
    width: ${o(12)};
    height: ${o(6)};
    white-space: nowrap;
  }

  ${C} {
    justify-content: center;
    color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

    &:hover,
    &:link,
    &:visited,
    &:active {
      color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

      svg {
        path {
          fill: ${({theme:e})=>a(e,"colors.interactive.base.white")};
        }
      }
    }
  }

  .standard-navigation-account--icon,
  ${v} {
    margin-right: ${o(2)};
  }

  ${f} {
    top: ${o(6)};
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};

    &::before {
      border-color: black;
    }
  }

  ${f} .account-links__navigation {
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};

    .navigation__list-item {
      &:hover {
        background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
      }

      .navigation__link {
        ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
        color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
      }
    }
  }

  ${f}

  ${w}.account-links__sign-out {
    ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
    color: ${a("colors.consumption.lead.inverted.link")};

    &:hover {
      background-color: ${a("colors.consumption.lead.standard.divider")};
      color: ${a("colors.consumption.lead.standard.link")};
    }
  }
`,O=n(g.Utility).withConfig({displayName:"ChannelNavigationToggle"})`
  position: absolute;
  top: 14px;
  right: ${o(2)};
  z-index: ${s("dropdown")};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};
  width: ${o(4)};
  height: ${o(4)};
  @media (min-width: ${d.md}) {
    top: ${({isScrollingDown:e})=>e?o(2.5):"122px"};
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  & > div {
    position: absolute;
  }

  path {
    fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
  }

  &:focus {
    outline: 2px auto -webkit-focus-ring-color;
    border: unset;
    background: transparent;
  }

  &:hover {
    border-width: unset;
    border-style: none;
    border-color: transparent;
    background: transparent;

    path {
      fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
    }
  }
`,H=n.div.withConfig({displayName:"ChannelNavigationSecondaryMenu"})`
  padding-top: ${({isFixed:e})=>e?0:"62px"};
  height: 100%;
  ${b} {
    display: block;
  }

  @media (min-width: ${d.md}) {
    padding-top: ${({isFixed:e})=>e?0:"160px"};
  }

  @media (min-width: ${d.lg}) {
    height: 100vh;
    ${b} {
      display: none;
    }
  }
`;e.exports={ChannelNavigationWrapper:k,ChannelNavigationContainer:x,ChannelNavigationContent:$,ChannelNavigationLogoWrapper:T,ChannelNavigationLogo:E,ChannelNavigationScrollViewLogo:N,ChannelNavigationLinksList:B,ChannelNavigationLinksWrapper:L,ChannelNavigationLinkItem:I,ChannelNavigationLink:P,ChannelNavigationChannelDrawer:A,ChannelNavigationGlobalDrawer:R,ChannelNavigationGroupedNavigation:D,ChannelNavigationAccount:M,ChannelNavigationToggle:O,ChannelNavigationSecondaryMenu:H}},469:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(529);e.exports=n(o,"BlockquoteEmbed")},470:function(e,t,i){const{default:n}=i(3),o=i(38),{BREAKPOINTS:a,GRID_GAP:r}=i(6),{applyGridSpacing:s,cssVariablesGrid:l}=i(17),{calculateSpacing:d,minMaxScreen:c,getColorToken:p,minScreen:g}=i(4),{SummaryListWrapper:u}=i(161),m=n.div.withConfig({displayName:"SummaryRiverWrapper"})`
  ${l()}

  ${({isFullBleedMobile:e})=>e&&`\n        ${u} {\n            ${c(0,a.md)} {\n              padding: 0;\n            }\n        }\n    `};
  ${({gridColSpanValue:e,showRecircMostPopularInAsideWithRail:t})=>e>=1&&t?`\n           @media (min-width: calc(${a.lg} - 1px)) {\n                .summary-list  .grid-layout__content {\n                  grid-column: span ${e};\n                }\n              }\n            `:""}

  ${({topSpacingInRem:e})=>e?`\n        ${g(a.md)} {\n          margin-top: ${d(e)};\n        }\n      `:""}
`,h=n(o).withConfig({displayName:"SummaryRiverAd"})`
  margin-bottom: ${d(4)};
`,y=n.div.withConfig({displayName:"SummaryRiverTitleWrapper"})`
  ${s("padding")}
  ${({hasScrollOffset:e})=>e?`scroll-margin-top: ${d(8)};`:""}

  margin-bottom: ${d(4)};

  ${({hasExtraTitlePadding:e})=>e?`\n      @media (min-width: ${a.xxl}) {\n        padding-left: calc(2.5 * var(--grid-margin));\n        padding-right: calc(2.5 * var(--grid-margin));\n      }\n      `:""}

  ${({hasDividerAbove:e})=>e?"":`margin-top: ${d(2)};`}
`,b=n.section.withConfig({displayName:"SummaryRiverSection"})``,f=n.div.withConfig({displayName:"SummaryRiverList"})`
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${p(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${d(5-r.md)};\n        }\n      `:""}
`;e.exports={SummaryRiverList:f,SummaryRiverWrapper:m,SummaryRiverAd:h,SummaryRiverSection:b,SummaryRiverTitleWrapper:y}},487:function(e,t,i){e.exports=i(711)},495:function(e,t,i){const n=i(3).default,o=i(14),{CaptionWrapper:a,CaptionText:r}=i(59),{calculateSpacing:s,getColorToken:l,getLinkStyles:d}=i(4),c=i(444),{BREAKPOINTS:p}=i(6),{ResponsiveImageContainer:g}=i(24),u=n.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,m=n(c).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,h=n(o.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${s(.5)};
  right: ${s(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  &.listicle-variation-close {
    top: 1px;
  }

  &,
  &:hover {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  .icon {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.dark")};
  }

  .icon:hover {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  @media (min-width: ${p.md}) {
    top: ${s(2)};
    right: ${s(2)};
  }
`,y=n.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,b=n.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,f=n.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,C=n.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,v=n.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    padding: ${s(3)} ${s(9)};

    ${a} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    }
  }

  ${a} {
    background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${r} {
      ${({theme:e})=>d(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${f} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${g} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${C} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${a} {\n      margin: ${s(2)} ${s(2)} ${s(5)};\n    }\n\n    @media (min-width: ${p.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${s(4)};\n      height: initial;\n\n      ${b} {\n        display: none;\n      }\n\n      ${f} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${C} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${a} {\n        margin: 0;\n        margin-top: ${s(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${p.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${b} {\n          display: none;\n        }\n\n        ${f} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${g} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${C} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${a} {\n          margin: 0;\n          margin-bottom: ${s(6)};\n          margin-left: ${s(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`;e.exports={LightboxSwipe:m,LightboxCloseButtonIcon:h,LightboxSlideImageCaptionOuter:f,LightboxSlideCaptionContainer:C,LightboxWrapper:u,LightboxSlideTopSpacer:b,LightboxSlidesWrapper:y,LightboxSlideWrapper:v}},496:function(e,t,i){const n=i(1),o=i(0),{ContentHeaderBylines:a}=i(251),r=({bylineVariation:e,contributors:t})=>t&&0!==Object.keys(t).length?o.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1}):null;r.propTypes={bylineVariation:n.string,contributors:n.object},e.exports=r},497:function(e,t,i){const n=i(1),o=i(0),{ContentHeaderTitleBlockPublishDate:a}=i(175),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:i})=>t||!i?null:o.createElement(a,{hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate"},i);r.propTypes={hasExtraSpaceBetweenSeparator:n.bool,hidePublishDate:n.bool,publishDate:n.string},e.exports=r},498:function(e,t,i){const n=i(1),o=i(0),a=i(1447),r=({hasCategoryEyebrow:e,tags:t,title:i})=>e&&(null==t?void 0:t.length)>0?o.createElement(a,{title:i,tags:t}):null;r.propTypes={hasCategoryEyebrow:n.bool,tags:n.array,title:n.string},e.exports=r},499:function(e,t){e.exports=e=>{if(!window)return{};const{bottom:t,left:i,right:n,top:o}=e.getBoundingClientRect(),a=e.currentStyle||window.getComputedStyle(e);return{bottom:t+parseFloat(a.marginBottom),left:i-parseFloat(a.marginLeft),right:n+parseFloat(a.marginRight),top:o-parseFloat(a.marginTop)}}},500:function(e,t,i){const n=i(1),o=i(0),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=i(1455),d=i(11),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:i})=>{const{sponsorLogo:n,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return o.createElement(a,null,o.createElement(l,{additionalRelVals:["sponsored"],href:c},o.createElement(r,Object.assign({},n)),o.createElement(s,{containerTheme:i},p)))};c.propTypes={sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(d.propTypes),sponsorName:n.string}),theme:n.oneOf(["standard","inverted","special"])},c.defaultProps={theme:"inverted"},e.exports=c},501:function(e,t,i){const{default:n}=i(3),{getColorToken:o,getTypographyStyles:a,calculateSpacing:r,maxScreen:s}=i(4),{SocialIconsList:l}=i(28),{BREAKPOINTS:d}=i(6),{BaseText:c,BaseLink:p}=i(10),{SITE_HEADER_TOP_HEIGHT:g,SITE_HEADER_TOP_STICKY_HEIGHT_MD:u,SITE_HEADER_TOP_STICKY_HEIGHT_LG:m}=i(157),h=i(19),{GridItem:y}=i(25),{universalGridCore:b}=i(57),{applyGridSpacing:f}=i(17),C=i(11),v=n.header.withConfig({displayName:"TextOverlayWrapper"})`
  .responsive-clip {
    height: 100%;
  }
  overflow: hidden;
`,S=n.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${d.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${d.md}) {
    display: grid;
    height: calc(
      100vh - ${g} - ${u}
    );
  }

  @media (min-width: ${d.lg}) {
    display: grid;
    height: calc(
      100vh - ${g} - ${m}
    );
  }

  @media (min-width: ${d.xl}) {
    display: grid;
    min-height: 720px;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,w=n.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,k=n.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${l} {
      @media (min-width: ${d.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${s(d.lg)} {\n        ${(e=>e.map(e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&"margin-bottom: "+r(e)}
`,x=n.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,$=n(c).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
`;$.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const T=n("div").withConfig({displayName:"DekAndCaption"})`
  ${b()}
  ${f("padding")}
  ${({isInverted:e,theme:t})=>e&&`\n      background: ${o(t,"colors.background.dark")};\n    `}
`,E=n.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 3 / span 8;
  }
`,N=n(c).withConfig({displayName:"Dek"})`
  ${({isInverted:e,theme:t})=>e&&`\n    color: ${o(t,"colors.consumption.lead.inverted.description")};\n    `}
  text-align: ${({contentAlign:e})=>e};
`;N.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const L=n(c).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 1 / span 12;
  }
`;L.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const B=n.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${r(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>o(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,I=n.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${r(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,P=n.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${r(2)} auto`:`margin: ${r(2)} 0`}
`,A=n.time.withConfig({displayName:"PublishDate"})`
  ${({theme:e})=>a(e,"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${r(1)} 0 ${r(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.context-tertiary")};
`,D=n(h.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${y} {
    grid-column: 1 / span 4;
    margin-bottom: 4.5rem;
    @media (min-width: ${d.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }
`,R=n(C).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,M=n(p).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r(2)};

  @media (max-width: ${d.md}) {
    padding-right: calc(1 * ${r(3)});
    padding-left: calc(1 * ${r(3)});
  }
`,O=n.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:O,TextOverlayLogoLink:M,TextOverlayLogoImage:R,TextOverlayWrapper:v,ImageWrapper:S,Image:w,ContentAlign:k,Content:x,Hed:$,DekAndCaption:T,DekWrapper:E,Dek:N,Figure:L,ContentDivider:B,ContributorImage:I,Accreditation:P,PublishDate:A,ContentGrid:D}},502:function(e,t,i){const{default:n}=i(3),{BaseText:o}=i(10),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(4),l=n.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=n.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=n(o).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=n(o).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,g=n.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,u=n.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:g,SvgWrapper:u}},529:function(e,t,i){const n=i(1),o=i(0),a=i(8),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:s,BlockquoteEmbedFooter:l,BlockquoteEmbedCite:d}=i(303),{trackComponent:c}=i(5),p=({attributes:e,children:t,citeUrl:i,className:n,dangerousAttribution:p,hasParagraphMargin:g,hasSmallMargins:u,hasTopBorder:m,shouldUseBodyColor:h})=>(o.useEffect(()=>{c("BlockquoteEmbed")},[]),o.createElement(r,Object.assign({},e,{cite:i,hasTopBorder:m,hasSmallMargins:u,className:a(n,"blockquote-embed")}),o.createElement(s,{hasParagraphMargin:g,shouldUseBodyColor:h,className:"blockquote-embed__content"},t),p&&o.createElement(l,null,o.createElement(d,{dangerouslySetInnerHTML:{__html:p}}))));p.propTypes={attributes:n.object,children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,citeUrl:n.string,className:n.string,dangerousAttribution:n.string,hasParagraphMargin:n.bool,hasSmallMargins:n.bool,hasTopBorder:n.bool,shouldUseBodyColor:n.bool},p.defaultProps={hasSmallMargins:!1,hasTopBorder:!0,shouldUseBodyColor:!1},p.displayName="BlockquoteEmbed",e.exports=p},711:function(e,t,i){const n=i(8),o=i(1),a=i(0),{default:r}=i(162),{trackComponent:s}=i(5),{processLinks:l,processCeros:d,processTiktok:c,processSidebarHeadings:p}=i(268),g=i(469),u=i(260),{BodyWrapper:m}=i(169),h=new r({a:l,blockquote:({props:e})=>({type:g,props:e}),ceros:d,h2:p,tiktok:c,"inline-embed":u}),y=({body:e,className:t,children:i,shouldDisableMaxWidth:o,shouldEnableDataJourneyHook:r=!0})=>{a.useEffect(()=>{s("Body")},[]);const l={className:n("body",t),shouldDisableMaxWidth:o};return r&&(l["data-journey-hook"]="client-content"),a.createElement(m,Object.assign({},l,{"data-testid":"BodyWrapper"}),i||h.convert(e))};y.propTypes={body:o.array,children:o.node,className:o.string,shouldDisableMaxWidth:o.bool,shouldEnableDataJourneyHook:o.bool},y.defaultProps={body:["div"],shouldDisableMaxWidth:!1},e.exports=y},79:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(150);e.exports=n(o,"BasePage")}});