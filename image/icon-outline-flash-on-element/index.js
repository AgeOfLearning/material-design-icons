import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlashOnElement
 * @class IconOutlineFlashOnElement
 * @extends {AoflElement}
 */
class IconOutlineFlashOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlashOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flash-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlashOnElement.is, IconOutlineFlashOnElement);

export default IconOutlineFlashOnElement;
