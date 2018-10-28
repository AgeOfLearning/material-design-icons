import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundColorLensElement
 * @class IconRoundColorLensElement
 * @extends {AoflElement}
 */
class IconRoundColorLensElement extends AoflElement {
  /**
   * Creates an instance of IconRoundColorLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-color-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundColorLensElement.is, IconRoundColorLensElement);

export default IconRoundColorLensElement;
