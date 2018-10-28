import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextRotationNoneElement
 * @class IconRoundTextRotationNoneElement
 * @extends {AoflElement}
 */
class IconRoundTextRotationNoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextRotationNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-text-rotation-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextRotationNoneElement.is, IconRoundTextRotationNoneElement);

export default IconRoundTextRotationNoneElement;
