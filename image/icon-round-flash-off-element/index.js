import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlashOffElement
 * @class IconRoundFlashOffElement
 * @extends {AoflElement}
 */
class IconRoundFlashOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlashOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flash-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlashOffElement.is, IconRoundFlashOffElement);

export default IconRoundFlashOffElement;
