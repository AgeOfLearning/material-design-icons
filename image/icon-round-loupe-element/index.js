import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLoupeElement
 * @class IconRoundLoupeElement
 * @extends {AoflElement}
 */
class IconRoundLoupeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLoupeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-loupe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLoupeElement.is, IconRoundLoupeElement);

export default IconRoundLoupeElement;
