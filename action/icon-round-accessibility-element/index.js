import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccessibilityElement
 * @class IconRoundAccessibilityElement
 * @extends {AoflElement}
 */
class IconRoundAccessibilityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccessibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-accessibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccessibilityElement.is, IconRoundAccessibilityElement);

export default IconRoundAccessibilityElement;
