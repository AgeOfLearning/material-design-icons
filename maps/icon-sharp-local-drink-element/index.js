import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalDrinkElement
 * @class IconSharpLocalDrinkElement
 * @extends {AoflElement}
 */
class IconSharpLocalDrinkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalDrinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-drink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalDrinkElement.is, IconSharpLocalDrinkElement);

export default IconSharpLocalDrinkElement;
