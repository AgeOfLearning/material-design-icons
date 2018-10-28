import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCardTravelElement
 * @class IconTwotoneCardTravelElement
 * @extends {AoflElement}
 */
class IconTwotoneCardTravelElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCardTravelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-card-travel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCardTravelElement.is, IconTwotoneCardTravelElement);

export default IconTwotoneCardTravelElement;
