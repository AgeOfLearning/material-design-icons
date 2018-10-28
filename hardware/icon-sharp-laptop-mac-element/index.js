import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLaptopMacElement
 * @class IconSharpLaptopMacElement
 * @extends {AoflElement}
 */
class IconSharpLaptopMacElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLaptopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-laptop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLaptopMacElement.is, IconSharpLaptopMacElement);

export default IconSharpLaptopMacElement;
