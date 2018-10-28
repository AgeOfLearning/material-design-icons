import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGridOffElement
 * @class IconOutlineGridOffElement
 * @extends {AoflElement}
 */
class IconOutlineGridOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGridOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-grid-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGridOffElement.is, IconOutlineGridOffElement);

export default IconOutlineGridOffElement;
