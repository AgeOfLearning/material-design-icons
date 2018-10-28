import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowForwardElement
 * @class IconRoundArrowForwardElement
 * @extends {AoflElement}
 */
class IconRoundArrowForwardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowForwardElement.is, IconRoundArrowForwardElement);

export default IconRoundArrowForwardElement;
