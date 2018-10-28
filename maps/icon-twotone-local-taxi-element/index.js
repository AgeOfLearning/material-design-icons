import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalTaxiElement
 * @class IconTwotoneLocalTaxiElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalTaxiElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalTaxiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-taxi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalTaxiElement.is, IconTwotoneLocalTaxiElement);

export default IconTwotoneLocalTaxiElement;
