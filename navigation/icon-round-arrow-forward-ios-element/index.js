import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowForwardIosElement
 * @class IconRoundArrowForwardIosElement
 * @extends {AoflElement}
 */
class IconRoundArrowForwardIosElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowForwardIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-forward-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowForwardIosElement.is, IconRoundArrowForwardIosElement);

export default IconRoundArrowForwardIosElement;
