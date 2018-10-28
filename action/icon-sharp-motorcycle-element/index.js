import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMotorcycleElement
 * @class IconSharpMotorcycleElement
 * @extends {AoflElement}
 */
class IconSharpMotorcycleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMotorcycleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-motorcycle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMotorcycleElement.is, IconSharpMotorcycleElement);

export default IconSharpMotorcycleElement;
