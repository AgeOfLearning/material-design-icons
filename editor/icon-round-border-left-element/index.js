import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderLeftElement
 * @class IconRoundBorderLeftElement
 * @extends {AoflElement}
 */
class IconRoundBorderLeftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderLeftElement.is, IconRoundBorderLeftElement);

export default IconRoundBorderLeftElement;
