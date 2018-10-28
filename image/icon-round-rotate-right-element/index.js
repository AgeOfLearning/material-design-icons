import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRotateRightElement
 * @class IconRoundRotateRightElement
 * @extends {AoflElement}
 */
class IconRoundRotateRightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRotateRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rotate-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRotateRightElement.is, IconRoundRotateRightElement);

export default IconRoundRotateRightElement;
