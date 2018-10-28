import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLoyaltyElement
 * @class IconBaselineLoyaltyElement
 * @extends {AoflElement}
 */
class IconBaselineLoyaltyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLoyaltyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-loyalty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLoyaltyElement.is, IconBaselineLoyaltyElement);

export default IconBaselineLoyaltyElement;
