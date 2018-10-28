import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalOfferElement
 * @class IconOutlineLocalOfferElement
 * @extends {AoflElement}
 */
class IconOutlineLocalOfferElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalOfferElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-offer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalOfferElement.is, IconOutlineLocalOfferElement);

export default IconOutlineLocalOfferElement;
