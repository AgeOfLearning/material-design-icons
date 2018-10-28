import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatListNumberedRtlElement
 * @class IconBaselineFormatListNumberedRtlElement
 * @extends {AoflElement}
 */
class IconBaselineFormatListNumberedRtlElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatListNumberedRtlElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-list-numbered-rtl';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatListNumberedRtlElement.is, IconBaselineFormatListNumberedRtlElement);

export default IconBaselineFormatListNumberedRtlElement;
