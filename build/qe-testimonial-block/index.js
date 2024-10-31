/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/qe-testimonial-block/edit.js":
/*!******************************************!*\
  !*** ./src/qe-testimonial-block/edit.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/qe-testimonial-block/editor.scss");





function Edit({
  attributes,
  setAttributes
}) {
  const {
    columns
  } = attributes;
  const onChangeColumns = newColumns => {
    setAttributes({
      columns: newColumns
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: `has-${columns}-columns`
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Columns", "qe-ultimate-blocks"),
    min: 1,
    max: 6,
    onChange: onChangeColumns,
    value: columns
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ["qe-block/qe-testimonial-blocks"],
    orientation: "horizontal",
    template: [['qe-block/qe-testimonial-blocks']]
  }));
}

/***/ }),

/***/ "./src/qe-testimonial-block/index.js":
/*!*******************************************!*\
  !*** ./src/qe-testimonial-block/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonial */ "./src/qe-testimonial-block/testimonial/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/qe-testimonial-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/qe-testimonial-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/qe-testimonial-block/save.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('qe-block/qe-testimonial-block', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/gallery'],
      transform: ({
        images,
        columns
      }) => {
        const innerBlocks = images.map(({
          url,
          id,
          alt
        }) => {
          return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('qe-block/qe-testimonial-blocks', {
            alt,
            id,
            url
          });
        });
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('qe-block/qe-testimonial-block', {
          columns: columns || 2
        }, innerBlocks);
      }
    }, {
      type: 'block',
      blocks: ['core/image'],
      isMultiBlock: true,
      transform: attributes => {
        const innerBlocks = attributes.map(({
          url,
          id,
          alt
        }) => {
          return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('qe-block/qe-testimonial-blocks', {
            alt,
            id,
            url
          });
        });
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('qe-block/qe-testimonial-block', {
          columns: attributes.length > 3 ? 3 : attributes.length
        }, innerBlocks);
      }
    }]
  }
});

/***/ }),

/***/ "./src/qe-testimonial-block/save.js":
/*!******************************************!*\
  !*** ./src/qe-testimonial-block/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    columns
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: `has-${columns}-columns`
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/qe-testimonial-block/testimonial/edit.js":
/*!******************************************************!*\
  !*** ./src/qe-testimonial-block/testimonial/edit.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);








function Edit({
  attributes,
  setAttributes,
  noticeOperations,
  noticeUI,
  isSelected
}) {
  const {
    content,
    author_name,
    designation,
    url,
    alt,
    id,
    imageHeight = 150,
    imageWidth = 150,
    heightUnit = 'px',
    widthUnit = 'px'
  } = attributes;
  const [blobURL, setBlobURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const prevURL = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(url);
  const prevIsSelected = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(isSelected);
  const titleRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const onChangeContent = newContent => {
    setAttributes({
      content: newContent
    });
  };
  const onChangeAuthorName = newAuthorName => {
    setAttributes({
      author_name: newAuthorName
    });
  };
  const onChangeDesignation = newDesignation => {
    setAttributes({
      designation: newDesignation
    });
  };
  const onChangeImage = image => {
    if (!image || !image.url) {
      setAttributes({
        url: undefined,
        id: undefined,
        alt: ''
      });
      return;
    }
    setAttributes({
      url: image.url,
      id: image.id,
      alt: image.alt
    });
  };
  const onChangeUrl = newURL => {
    setAttributes({
      url: newURL,
      id: undefined,
      alt: ''
    });
  };
  const onChangeAlt = newAlt => {
    setAttributes({
      alt: newAlt
    });
  };
  const handleChangeHeightUnit = newheightUnit => {
    setAttributes({
      heightUnit: newheightUnit
    });
  };
  const onChangeImageHeight = newHeight => {
    setAttributes({
      imageHeight: newHeight
    });
  };
  const onChangeImageHeightPixel = () => {
    handleChangeHeightUnit('px');
  };
  const onChangeImageHeightPercentage = () => {
    handleChangeHeightUnit('%');
  };
  const onChangeImageHeightEm = () => {
    handleChangeHeightUnit('em');
  };
  let heightmin = 1;
  let heightmax = 1000;
  let heightstep = 1;
  if (heightUnit == '%') {
    heightmin = 10;
    heightmax = 100;
    heightstep = 1;
  } else if (heightUnit == 'em') {
    heightmin = 2;
    heightmax = 100;
    heightstep = 0.1;
  }
  const handleChangeWidthUnit = newWidthUnit => {
    setAttributes({
      widthUnit: newWidthUnit
    });
  };
  const onChangeImageWidth = newWidth => {
    setAttributes({
      imageWidth: newWidth
    });
  };
  const onChangeImageWidthPixel = () => {
    handleChangeWidthUnit('px');
  };
  const onChangeImageWidthPercentage = () => {
    handleChangeWidthUnit('%');
  };
  const onChangeImageWidthEm = () => {
    handleChangeWidthUnit('em');
  };
  let widthmin = 1;
  let widthmax = 1000;
  let widthstep = 1;
  if (widthUnit == '%') {
    widthmin = 10;
    widthmax = 100;
    widthstep = 1;
  } else if (widthUnit == 'em') {
    widthmin = 2;
    widthmax = 100;
    widthstep = 0.1;
  }
  const onChangeImageSize = newURL => {
    setAttributes({
      url: newURL
    });
  };
  const onUploadError = message => {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  };
  const removeImage = () => {
    setAttributes({
      url: undefined,
      alt: '',
      id: undefined
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url)) {
      setAttributes({
        url: undefined,
        alt: ''
      });
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url)) {
      setBlobURL(url);
    } else {
      (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.revokeBlobURL)(blobURL);
      setBlobURL();
    }
  }, [url]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (url && !prevURL && isSelected) {
      titleRef.current.focus();
    }
  }, [url, prevURL]);
  const dynamicHeight = `${imageHeight}${heightUnit}`;
  const dynamicWidth = `${imageWidth}${widthUnit}`;
  const stylesWidth = {
    '--width': dynamicWidth,
    '--height': dynamicHeight
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Settings', 'qe-ultimate-blocks')
  }, id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: heightUnit == 'px' ? 'active' : '',
    onClick: onChangeImageHeightPixel
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('px', 'qe-ultimate-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: heightUnit == '%' ? 'active' : '',
    onClick: onChangeImageHeightPercentage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%', 'qe-ultimate-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: heightUnit == 'em' ? 'active' : '',
    onClick: onChangeImageHeightEm
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('em', 'qe-ultimate-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: "Image Height",
    min: heightmin,
    max: heightmax,
    step: heightstep,
    value: imageHeight,
    onChange: onChangeImageHeight
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: widthUnit == 'px' ? 'active' : '',
    onClick: onChangeImageWidthPixel
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('px', 'qe-ultimate-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: widthUnit == '%' ? 'active' : '',
    onClick: onChangeImageWidthPercentage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%', 'qe-ultimate-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: widthUnit == 'em' ? 'active' : '',
    onClick: onChangeImageWidthEm
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('em', 'qe-ultimate-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: "Image Width",
    min: widthmin,
    max: widthmax,
    step: widthstep,
    value: imageWidth,
    onChange: onChangeImageWidth
  })), url && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alt Text', 'qe-ultimate-blocks'),
    value: alt,
    onChange: onChangeAlt,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alternative text describes you image to people can't see it. Add a Short Description with its key details.", 'qe-ultimate-blocks')
  }))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    group: "inline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaReplaceFlow, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace Image', 'qe-ultimate-blocks'),
    onSelect: onChangeImage,
    onSelectURL: onChangeUrl,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ['image'],
    mediaId: id,
    mediaURL: url
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    onClick: removeImage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove Image', 'qe-ultimate-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wp-block-qe-block-qe-testimonial-block-img${(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url) ? ' is-loading' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qe-testimonial-img"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    style: stylesWidth,
    "data-height": `${imageHeight + heightUnit}`,
    "data-width": `${imageWidth + widthUnit}`
  })), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
    icon: "admin-users",
    onSelect: onChangeImage,
    onSelectURL: onChangeUrl,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ['image'],
    disableMediaButtons: url,
    notices: noticeUI
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qe-testimonial-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    ref: titleRef,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'qe-ultimate-blocks'),
    tagName: "p",
    onChange: onChangeContent,
    value: content,
    allowedFormats: [],
    className: "qe-testimonial-content__des"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Author Name', 'qe-ultimate-blocks'),
    tagName: "h4",
    onChange: onChangeAuthorName,
    value: author_name,
    allowedFormats: [],
    className: "qe-testimonial-content__author-name"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Designation', 'qe-ultimate-blocks'),
    tagName: "span",
    onChange: onChangeDesignation,
    value: designation,
    allowedFormats: [],
    className: "qe-testimonial-content__designation"
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.withNotices)(Edit));

/***/ }),

/***/ "./src/qe-testimonial-block/testimonial/index.js":
/*!*******************************************************!*\
  !*** ./src/qe-testimonial-block/testimonial/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/qe-testimonial-block/testimonial/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/qe-testimonial-block/testimonial/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("qe-block/qe-testimonial-blocks", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Testimonials", "qe-ultimate-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Qe Testimonial blocks.", "qe-ultimate-blocks"),
  category: "qeblocks",
  icon: "testimonial",
  parent: ["qe-block/qe-testimonial-block"],
  supports: {
    reusable: false,
    html: false
  },
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "p"
    },
    author_name: {
      type: "string",
      source: "html",
      selector: "h4"
    },
    designation: {
      type: "string",
      source: "html",
      selector: "span"
    },
    id: {
      type: "number"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      default: ""
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    imageHeight: {
      type: "number"
    },
    imageWidth: {
      type: "number"
    },
    heightUnit: {
      type: "string"
    },
    widthUnit: {
      type: "string"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/qe-testimonial-block/testimonial/save.js":
/*!******************************************************!*\
  !*** ./src/qe-testimonial-block/testimonial/save.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    content,
    author_name,
    designation,
    url,
    alt,
    id,
    imageHeight = 150,
    imageWidth = 150,
    heightUnit = 'px',
    widthUnit = 'px'
  } = attributes;
  const dynamicHeight = `${imageHeight}${heightUnit}`;
  const dynamicWidth = `${imageWidth}${widthUnit}`;
  const stylesWidth = {
    '--width': dynamicWidth,
    '--height': dynamicHeight
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, url && author_name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qe-testimonial-img"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    className: id ? `wp-image-${id}` : null,
    "data-height": `${imageHeight + heightUnit}`,
    "data-width": `${imageWidth + widthUnit}`,
    style: stylesWidth
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qe-testimonial-content"
  }, content && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: content,
    className: "qe-testimonial-content__des"
  }), author_name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    value: author_name,
    className: "qe-testimonial-content__author-name"
  }), designation && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    value: designation,
    className: "qe-testimonial-content__designation"
  }))));
}

/***/ }),

/***/ "./src/qe-testimonial-block/editor.scss":
/*!**********************************************!*\
  !*** ./src/qe-testimonial-block/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/qe-testimonial-block/style.scss":
/*!*********************************************!*\
  !*** ./src/qe-testimonial-block/style.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"qe-testimonial-block/index": 0,
/******/ 			"qe-testimonial-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkqe_ultimate_blocks"] = self["webpackChunkqe_ultimate_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["qe-testimonial-block/style-index"], function() { return __webpack_require__("./src/qe-testimonial-block/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map