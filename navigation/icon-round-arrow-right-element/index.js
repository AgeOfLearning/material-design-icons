import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowRightElement
 * @class IconRoundArrowRightElement
 * @extends {AoflElement}
 */
class IconRoundArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowRightElement.is, IconRoundArrowRightElement);

export default IconRoundArrowRightElement;
