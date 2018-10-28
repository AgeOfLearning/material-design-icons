import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalPizzaElement
 * @class IconSharpLocalPizzaElement
 * @extends {AoflElement}
 */
class IconSharpLocalPizzaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalPizzaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-pizza';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalPizzaElement.is, IconSharpLocalPizzaElement);

export default IconSharpLocalPizzaElement;
