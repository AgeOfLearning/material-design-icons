import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlashAutoElement
 * @class IconRoundFlashAutoElement
 * @extends {AoflElement}
 */
class IconRoundFlashAutoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlashAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flash-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlashAutoElement.is, IconRoundFlashAutoElement);

export default IconRoundFlashAutoElement;
