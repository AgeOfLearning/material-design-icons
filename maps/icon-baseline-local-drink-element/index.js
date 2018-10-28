import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalDrinkElement
 * @class IconBaselineLocalDrinkElement
 * @extends {AoflElement}
 */
class IconBaselineLocalDrinkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalDrinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-drink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalDrinkElement.is, IconBaselineLocalDrinkElement);

export default IconBaselineLocalDrinkElement;
