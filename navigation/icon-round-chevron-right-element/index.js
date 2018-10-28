import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChevronRightElement
 * @class IconRoundChevronRightElement
 * @extends {AoflElement}
 */
class IconRoundChevronRightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChevronRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-chevron-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChevronRightElement.is, IconRoundChevronRightElement);

export default IconRoundChevronRightElement;
