import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextRotationDownElement
 * @class IconRoundTextRotationDownElement
 * @extends {AoflElement}
 */
class IconRoundTextRotationDownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextRotationDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-text-rotation-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextRotationDownElement.is, IconRoundTextRotationDownElement);

export default IconRoundTextRotationDownElement;
