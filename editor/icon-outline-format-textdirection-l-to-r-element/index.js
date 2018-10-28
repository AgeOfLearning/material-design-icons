import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatTextdirectionLToRElement
 * @class IconOutlineFormatTextdirectionLToRElement
 * @extends {AoflElement}
 */
class IconOutlineFormatTextdirectionLToRElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatTextdirectionLToRElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-textdirection-l-to-r';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatTextdirectionLToRElement.is, IconOutlineFormatTextdirectionLToRElement);

export default IconOutlineFormatTextdirectionLToRElement;
