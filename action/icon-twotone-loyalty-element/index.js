import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLoyaltyElement
 * @class IconTwotoneLoyaltyElement
 * @extends {AoflElement}
 */
class IconTwotoneLoyaltyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLoyaltyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-loyalty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLoyaltyElement.is, IconTwotoneLoyaltyElement);

export default IconTwotoneLoyaltyElement;
