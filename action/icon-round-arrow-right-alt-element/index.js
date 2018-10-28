import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowRightAltElement
 * @class IconRoundArrowRightAltElement
 * @extends {AoflElement}
 */
class IconRoundArrowRightAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowRightAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-right-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowRightAltElement.is, IconRoundArrowRightAltElement);

export default IconRoundArrowRightAltElement;
