import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLastPageElement
 * @class IconRoundLastPageElement
 * @extends {AoflElement}
 */
class IconRoundLastPageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLastPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-last-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLastPageElement.is, IconRoundLastPageElement);

export default IconRoundLastPageElement;
