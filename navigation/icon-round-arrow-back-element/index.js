import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowBackElement
 * @class IconRoundArrowBackElement
 * @extends {AoflElement}
 */
class IconRoundArrowBackElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowBackElement.is, IconRoundArrowBackElement);

export default IconRoundArrowBackElement;
