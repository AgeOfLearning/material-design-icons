import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlashOffElement
 * @class IconOutlineFlashOffElement
 * @extends {AoflElement}
 */
class IconOutlineFlashOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlashOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flash-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlashOffElement.is, IconOutlineFlashOffElement);

export default IconOutlineFlashOffElement;
