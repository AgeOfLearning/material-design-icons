import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePetsElement
 * @class IconTwotonePetsElement
 * @extends {AoflElement}
 */
class IconTwotonePetsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePetsElement.is, IconTwotonePetsElement);

export default IconTwotonePetsElement;
