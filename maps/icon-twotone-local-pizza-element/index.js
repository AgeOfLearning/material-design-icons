import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalPizzaElement
 * @class IconTwotoneLocalPizzaElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalPizzaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalPizzaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-pizza';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalPizzaElement.is, IconTwotoneLocalPizzaElement);

export default IconTwotoneLocalPizzaElement;
