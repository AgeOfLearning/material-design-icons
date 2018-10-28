import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePetsElement
 * @class IconOutlinePetsElement
 * @extends {AoflElement}
 */
class IconOutlinePetsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePetsElement.is, IconOutlinePetsElement);

export default IconOutlinePetsElement;
