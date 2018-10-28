import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpComputerElement
 * @class IconSharpComputerElement
 * @extends {AoflElement}
 */
class IconSharpComputerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpComputerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-computer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpComputerElement.is, IconSharpComputerElement);

export default IconSharpComputerElement;
