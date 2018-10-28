import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalPizzaElement
 * @class IconRoundLocalPizzaElement
 * @extends {AoflElement}
 */
class IconRoundLocalPizzaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalPizzaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-pizza';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalPizzaElement.is, IconRoundLocalPizzaElement);

export default IconRoundLocalPizzaElement;
