import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowBackIosElement
 * @class IconRoundArrowBackIosElement
 * @extends {AoflElement}
 */
class IconRoundArrowBackIosElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowBackIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-back-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowBackIosElement.is, IconRoundArrowBackIosElement);

export default IconRoundArrowBackIosElement;
