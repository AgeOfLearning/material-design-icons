import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCodeElement
 * @class IconOutlineCodeElement
 * @extends {AoflElement}
 */
class IconOutlineCodeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCodeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-code';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCodeElement.is, IconOutlineCodeElement);

export default IconOutlineCodeElement;
