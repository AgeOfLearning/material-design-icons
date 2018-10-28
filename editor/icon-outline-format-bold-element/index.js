import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatBoldElement
 * @class IconOutlineFormatBoldElement
 * @extends {AoflElement}
 */
class IconOutlineFormatBoldElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatBoldElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-bold';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatBoldElement.is, IconOutlineFormatBoldElement);

export default IconOutlineFormatBoldElement;
