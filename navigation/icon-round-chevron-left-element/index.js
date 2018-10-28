import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChevronLeftElement
 * @class IconRoundChevronLeftElement
 * @extends {AoflElement}
 */
class IconRoundChevronLeftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChevronLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-chevron-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChevronLeftElement.is, IconRoundChevronLeftElement);

export default IconRoundChevronLeftElement;
