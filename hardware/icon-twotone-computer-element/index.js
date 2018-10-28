import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneComputerElement
 * @class IconTwotoneComputerElement
 * @extends {AoflElement}
 */
class IconTwotoneComputerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneComputerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-computer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneComputerElement.is, IconTwotoneComputerElement);

export default IconTwotoneComputerElement;
