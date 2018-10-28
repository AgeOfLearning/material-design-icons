import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlashAutoElement
 * @class IconOutlineFlashAutoElement
 * @extends {AoflElement}
 */
class IconOutlineFlashAutoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlashAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flash-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlashAutoElement.is, IconOutlineFlashAutoElement);

export default IconOutlineFlashAutoElement;
