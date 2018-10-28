import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalDrinkElement
 * @class IconOutlineLocalDrinkElement
 * @extends {AoflElement}
 */
class IconOutlineLocalDrinkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalDrinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-drink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalDrinkElement.is, IconOutlineLocalDrinkElement);

export default IconOutlineLocalDrinkElement;
