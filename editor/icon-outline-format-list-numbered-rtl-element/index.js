import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatListNumberedRtlElement
 * @class IconOutlineFormatListNumberedRtlElement
 * @extends {AoflElement}
 */
class IconOutlineFormatListNumberedRtlElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatListNumberedRtlElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-list-numbered-rtl';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatListNumberedRtlElement.is, IconOutlineFormatListNumberedRtlElement);

export default IconOutlineFormatListNumberedRtlElement;
