import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalTaxiElement
 * @class IconOutlineLocalTaxiElement
 * @extends {AoflElement}
 */
class IconOutlineLocalTaxiElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalTaxiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-taxi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalTaxiElement.is, IconOutlineLocalTaxiElement);

export default IconOutlineLocalTaxiElement;
