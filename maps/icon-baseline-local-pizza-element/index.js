import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalPizzaElement
 * @class IconBaselineLocalPizzaElement
 * @extends {AoflElement}
 */
class IconBaselineLocalPizzaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalPizzaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-pizza';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalPizzaElement.is, IconBaselineLocalPizzaElement);

export default IconBaselineLocalPizzaElement;
