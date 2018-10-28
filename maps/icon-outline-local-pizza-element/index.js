import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalPizzaElement
 * @class IconOutlineLocalPizzaElement
 * @extends {AoflElement}
 */
class IconOutlineLocalPizzaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalPizzaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-pizza';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalPizzaElement.is, IconOutlineLocalPizzaElement);

export default IconOutlineLocalPizzaElement;
