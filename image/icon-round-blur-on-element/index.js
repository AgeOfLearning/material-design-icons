import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBlurOnElement
 * @class IconRoundBlurOnElement
 * @extends {AoflElement}
 */
class IconRoundBlurOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBlurOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-blur-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBlurOnElement.is, IconRoundBlurOnElement);

export default IconRoundBlurOnElement;
