import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderRightElement
 * @class IconRoundBorderRightElement
 * @extends {AoflElement}
 */
class IconRoundBorderRightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderRightElement.is, IconRoundBorderRightElement);

export default IconRoundBorderRightElement;
