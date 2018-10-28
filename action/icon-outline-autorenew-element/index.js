import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAutorenewElement
 * @class IconOutlineAutorenewElement
 * @extends {AoflElement}
 */
class IconOutlineAutorenewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAutorenewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-autorenew';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAutorenewElement.is, IconOutlineAutorenewElement);

export default IconOutlineAutorenewElement;
