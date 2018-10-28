import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalDrinkElement
 * @class IconTwotoneLocalDrinkElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalDrinkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalDrinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-drink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalDrinkElement.is, IconTwotoneLocalDrinkElement);

export default IconTwotoneLocalDrinkElement;
