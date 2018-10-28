import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowLeftElement
 * @class IconRoundArrowLeftElement
 * @extends {AoflElement}
 */
class IconRoundArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowLeftElement.is, IconRoundArrowLeftElement);

export default IconRoundArrowLeftElement;
