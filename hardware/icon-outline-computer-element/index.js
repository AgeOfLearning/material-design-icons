import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineComputerElement
 * @class IconOutlineComputerElement
 * @extends {AoflElement}
 */
class IconOutlineComputerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineComputerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-computer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineComputerElement.is, IconOutlineComputerElement);

export default IconOutlineComputerElement;
