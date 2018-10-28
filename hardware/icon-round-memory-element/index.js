import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMemoryElement
 * @class IconRoundMemoryElement
 * @extends {AoflElement}
 */
class IconRoundMemoryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMemoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-memory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMemoryElement.is, IconRoundMemoryElement);

export default IconRoundMemoryElement;
