import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalOfferElement
 * @class IconTwotoneLocalOfferElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalOfferElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalOfferElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-offer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalOfferElement.is, IconTwotoneLocalOfferElement);

export default IconTwotoneLocalOfferElement;
