import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWebElement
 * @class IconOutlineWebElement
 * @extends {AoflElement}
 */
class IconOutlineWebElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWebElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-web';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWebElement.is, IconOutlineWebElement);

export default IconOutlineWebElement;
