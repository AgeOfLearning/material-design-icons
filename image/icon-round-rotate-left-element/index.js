import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRotateLeftElement
 * @class IconRoundRotateLeftElement
 * @extends {AoflElement}
 */
class IconRoundRotateLeftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRotateLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rotate-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRotateLeftElement.is, IconRoundRotateLeftElement);

export default IconRoundRotateLeftElement;
