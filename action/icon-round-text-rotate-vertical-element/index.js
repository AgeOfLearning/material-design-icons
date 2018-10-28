import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextRotateVerticalElement
 * @class IconRoundTextRotateVerticalElement
 * @extends {AoflElement}
 */
class IconRoundTextRotateVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextRotateVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-text-rotate-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextRotateVerticalElement.is, IconRoundTextRotateVerticalElement);

export default IconRoundTextRotateVerticalElement;
