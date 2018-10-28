import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalOfferElement
 * @class IconBaselineLocalOfferElement
 * @extends {AoflElement}
 */
class IconBaselineLocalOfferElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalOfferElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-offer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalOfferElement.is, IconBaselineLocalOfferElement);

export default IconBaselineLocalOfferElement;
