import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLoyaltyElement
 * @class IconOutlineLoyaltyElement
 * @extends {AoflElement}
 */
class IconOutlineLoyaltyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLoyaltyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-loyalty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLoyaltyElement.is, IconOutlineLoyaltyElement);

export default IconOutlineLoyaltyElement;
