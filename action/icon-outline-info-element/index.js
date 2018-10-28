import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInfoElement
 * @class IconOutlineInfoElement
 * @extends {AoflElement}
 */
class IconOutlineInfoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInfoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-info';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInfoElement.is, IconOutlineInfoElement);

export default IconOutlineInfoElement;
