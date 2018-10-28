import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWbAutoElement
 * @class IconRoundWbAutoElement
 * @extends {AoflElement}
 */
class IconRoundWbAutoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWbAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wb-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWbAutoElement.is, IconRoundWbAutoElement);

export default IconRoundWbAutoElement;
