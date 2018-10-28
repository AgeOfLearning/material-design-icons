import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatListNumberedRtlElement
 * @class IconTwotoneFormatListNumberedRtlElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatListNumberedRtlElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatListNumberedRtlElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-list-numbered-rtl';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatListNumberedRtlElement.is, IconTwotoneFormatListNumberedRtlElement);

export default IconTwotoneFormatListNumberedRtlElement;
