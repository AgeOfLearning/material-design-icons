import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccessibleForwardElement
 * @class IconRoundAccessibleForwardElement
 * @extends {AoflElement}
 */
class IconRoundAccessibleForwardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccessibleForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-accessible-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccessibleForwardElement.is, IconRoundAccessibleForwardElement);

export default IconRoundAccessibleForwardElement;
