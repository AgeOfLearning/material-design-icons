import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalTaxiElement
 * @class IconRoundLocalTaxiElement
 * @extends {AoflElement}
 */
class IconRoundLocalTaxiElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalTaxiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-taxi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalTaxiElement.is, IconRoundLocalTaxiElement);

export default IconRoundLocalTaxiElement;
