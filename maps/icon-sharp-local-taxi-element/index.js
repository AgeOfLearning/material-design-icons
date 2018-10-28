import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalTaxiElement
 * @class IconSharpLocalTaxiElement
 * @extends {AoflElement}
 */
class IconSharpLocalTaxiElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalTaxiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-taxi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalTaxiElement.is, IconSharpLocalTaxiElement);

export default IconSharpLocalTaxiElement;
