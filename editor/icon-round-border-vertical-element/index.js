import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderVerticalElement
 * @class IconRoundBorderVerticalElement
 * @extends {AoflElement}
 */
class IconRoundBorderVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderVerticalElement.is, IconRoundBorderVerticalElement);

export default IconRoundBorderVerticalElement;
