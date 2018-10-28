import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCardTravelElement
 * @class IconOutlineCardTravelElement
 * @extends {AoflElement}
 */
class IconOutlineCardTravelElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCardTravelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-card-travel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCardTravelElement.is, IconOutlineCardTravelElement);

export default IconOutlineCardTravelElement;
