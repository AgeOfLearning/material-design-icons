import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccessibilityNewElement
 * @class IconRoundAccessibilityNewElement
 * @extends {AoflElement}
 */
class IconRoundAccessibilityNewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccessibilityNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-accessibility-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccessibilityNewElement.is, IconRoundAccessibilityNewElement);

export default IconRoundAccessibilityNewElement;
