import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBlurLinearElement
 * @class IconRoundBlurLinearElement
 * @extends {AoflElement}
 */
class IconRoundBlurLinearElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBlurLinearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-blur-linear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBlurLinearElement.is, IconRoundBlurLinearElement);

export default IconRoundBlurLinearElement;
