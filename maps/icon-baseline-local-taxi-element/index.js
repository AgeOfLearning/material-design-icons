import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalTaxiElement
 * @class IconBaselineLocalTaxiElement
 * @extends {AoflElement}
 */
class IconBaselineLocalTaxiElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalTaxiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-taxi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalTaxiElement.is, IconBaselineLocalTaxiElement);

export default IconBaselineLocalTaxiElement;
