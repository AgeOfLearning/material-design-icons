import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFirstPageElement
 * @class IconRoundFirstPageElement
 * @extends {AoflElement}
 */
class IconRoundFirstPageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFirstPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-first-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFirstPageElement.is, IconRoundFirstPageElement);

export default IconRoundFirstPageElement;
