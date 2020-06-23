const { tvinfo } = window.tizen;

const {
    getCaptionValue,
    addCaptionValueChangeListener,
    removeCaptionValueChangeListener
} = tvinfo;

module.exports = {
    getCaptionValue,
    addCaptionValueChangeListener,
    removeCaptionValueChangeListener
};
