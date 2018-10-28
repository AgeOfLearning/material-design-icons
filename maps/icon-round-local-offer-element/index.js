import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalOfferElement
 * @class IconRoundLocalOfferElement
 * @extends {AoflElement}
 */
class IconRoundLocalOfferElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalOfferElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-offer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalOfferElement.is, IconRoundLocalOfferElement);

export default IconRoundLocalOfferElement;
