import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalOfferElement
 * @class IconSharpLocalOfferElement
 * @extends {AoflElement}
 */
class IconSharpLocalOfferElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalOfferElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-offer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalOfferElement.is, IconSharpLocalOfferElement);

export default IconSharpLocalOfferElement;
