import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBlurOffElement
 * @class IconRoundBlurOffElement
 * @extends {AoflElement}
 */
class IconRoundBlurOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBlurOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-blur-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBlurOffElement.is, IconRoundBlurOffElement);

export default IconRoundBlurOffElement;
