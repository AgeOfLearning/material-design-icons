import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlashOnElement
 * @class IconRoundFlashOnElement
 * @extends {AoflElement}
 */
class IconRoundFlashOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlashOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flash-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlashOnElement.is, IconRoundFlashOnElement);

export default IconRoundFlashOnElement;
