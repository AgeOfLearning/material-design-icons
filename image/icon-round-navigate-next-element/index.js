import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNavigateNextElement
 * @class IconRoundNavigateNextElement
 * @extends {AoflElement}
 */
class IconRoundNavigateNextElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNavigateNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-navigate-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNavigateNextElement.is, IconRoundNavigateNextElement);

export default IconRoundNavigateNextElement;
